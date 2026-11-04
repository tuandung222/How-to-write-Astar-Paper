# Thực hành: viết một paper CVPR từ con số 0

Phần này đi qua **toàn bộ quy trình** với một dự án giả định, để bạn thấy các chương trước ghép lại thế nào. Bài toán (giả định, dùng làm ví dụ): **phát hiện vật thể nhỏ trong ảnh drone**.

!!! note "Đây là ví dụ hư cấu"
    Tên phương pháp, con số và kết quả dưới đây là **giả định để minh họa**, không phải kết quả thật.

---

## Tuần 1–4: Từ ý tưởng thô đến insight

**Ý tưởng thô:** "Detector hiện tại kém với vật thể nhỏ trong ảnh drone. Thử thêm attention."

→ Đây là "A + B" (xem [Ý tưởng](../01-truoc-khi-viet/y-tuong.md)). Cần insight.

**Hành động:** chạy detector mạnh nhất hiện tại trên VisDrone (benchmark ảnh drone phổ biến), **phân tích lỗi**:

- Chia lỗi thành: miss (FN), localization kém, sai lớp, background FP.
- Chia theo kích thước vật thể.

**Quan sát (giả định):** với vật < 16×16 px, **~70% lỗi là miss**, và phần lớn vật bị miss **không có anchor/query nào đủ gần** sau bước đề xuất ban đầu. Tức vấn đề không nằm ở *phân loại* mà ở *phân bổ đề xuất* — đề xuất tập trung vào vùng có vật lớn, nổi bật.

**Insight:** *Phân bố không gian của vật nhỏ trong ảnh drone rất không đều (chúng tụ thành cụm: xe trên đường, người ở quảng trường). Đề xuất đồng đều hoặc dựa trên độ nổi bật bỏ lỡ các cụm này.*

**Ý tưởng phương pháp:** dự đoán một **"density map" thô** trước, rồi **phân bổ query/đề xuất theo mật độ** → tên tạm: **DenseQ**.

## Tuần 5: One-page pitch

```markdown
# DenseQ: Density-Guided Query Allocation for Tiny Object Detection in Aerial Images
1. Pitch: Chúng tôi chỉ ra rằng phần lớn lỗi với vật thể nhỏ trong ảnh drone là
   do đề xuất không phủ tới vùng có vật, và đề xuất phân bổ query theo mật độ dự đoán,
   cải thiện mạnh recall vật thể nhỏ với chi phí thấp.
2. Vấn đề: drone surveillance, giao thông; vật thể < 16px chiếm tỉ lệ lớn.
3. Hiện trạng: detector DETR-style / two-stage phân bổ query theo top-k score
   → thiên lệch vật lớn. Các phương pháp crop/zoom tốn compute.
4. Insight: vật nhỏ tụ cụm; đề xuất cần theo mật độ, không theo độ nổi bật.
5. Phương pháp: density head nhẹ → sampling query theo density → refinement.
6. Claims:
   C1. ~70% lỗi vật nhỏ là miss do thiếu đề xuất (phân tích).
   C2. DenseQ cải thiện AP_tiny trên VisDrone & một benchmark aerial khác.
   C3. Chi phí thêm < 5% FLOPs, rẻ hơn nhiều so với crop-based.
   C4. Plug-and-play cho ≥ 2 detector khác nhau.
7. Thí nghiệm: error analysis; main table 2 benchmark; ablation (density vs uniform
   vs top-k; số query; loss density); FLOPs/FPS; 2 detector.
8. Figure 1: (trái) heatmap đề xuất của baseline vs DenseQ trên cùng ảnh;
   (phải) bar chart tỉ lệ miss theo kích thước.
9. Rủi ro: reviewer hỏi so sánh với phương pháp crop/zoom & các phương pháp
   density-guided cropping trước đây.
```

Mục 9 → bạn biết ngay phải **đọc kỹ các phương pháp crop/density-guided cropping trước đây** và tìm khác biệt (ở đây: phân bổ *query* trong 1 lần forward, không crop ảnh).

## Tuần 6–7: Outline Intro + phác thảo Figure 1

```latex
% P1: Tiny object detection in aerial images matters (traffic, search & rescue);
%     tiny objects (<16px) are a large fraction in benchmarks.
% P2: Modern detectors rank proposals/queries by score -> biased toward large,
%     salient objects. Crop-based methods help but cost multiple forward passes.
% P3: Our analysis (Fig.1b): ~70% tiny-object errors are misses; most missed
%     objects have no query nearby. Tiny objects are clustered (Fig.1a).
% P4: DenseQ: predict coarse density, allocate queries proportional to density,
%     refine. Single pass, <5% FLOPs.
% P5: Results: +X AP_tiny on VisDrone, +Y on [benchmark 2]; works with 2 detectors.
% P6: Contributions: (1) analysis; (2) DenseQ; (3) SOTA + extensive ablations.
```

Gửi advisor. Phản hồi (giả định): *"P2 cần nêu rõ các phương pháp density-based cropping đã có — đừng để reviewer phát hiện."* → Sửa P2 và thêm vào Related Work.

## Tuần 8–14: Thí nghiệm theo bảng claim

| Claim | Thí nghiệm | Bảng/Hình | Trạng thái |
|---|---|---|---|
| C1 | Error breakdown baseline | Fig. 1b, Fig. 3 | ✅ |
| C2 | Main table VisDrone + benchmark 2 | Tab. 1, Tab. 2 | ✅ |
| C2 | Qualitative | Fig. 5 | ✅ |
| C3 | FLOPs/FPS vs crop-based | Tab. 1 (cột), Fig. 4 trade-off | ✅ |
| C4 | DenseQ trên detector thứ 2 | Tab. 3 | 🔄 |
| (Phòng thủ) | Baseline + nhiều query hơn (cùng compute) | Tab. 4(c) | ✅ ← *trả lời "chỉ là do nhiều query hơn?"* |

Thí nghiệm "phòng thủ" ở hàng cuối là thứ biến paper từ "có vẻ ổn" thành "khó bắt bẻ".

## Tuần 15–17: Full draft v1

Thứ tự viết: Method (+Fig. 2) → Experiments (bảng trước) → Related Work → **viết lại Intro** với con số thật → Conclusion → Abstract → Title.

**Abstract v1 (theo khuôn 5–6 câu):**

> *"Detecting tiny objects in aerial images remains challenging, as they occupy only a few pixels and appear in dense clusters. Through a systematic error analysis of modern detectors, we find that most failures on tiny objects are misses caused by insufficient proposals near the objects, rather than misclassification. Motivated by this, we propose DenseQ, which predicts a coarse object density map and allocates detection queries in proportion to it, requiring only a single forward pass. DenseQ is plug-and-play and adds less than 5% FLOPs. On VisDrone and [benchmark 2], it improves AP on tiny objects by +X and +Y points over strong baselines, and outperforms crop-based methods at a fraction of their cost."*

## Tuần 18–20: Internal review & sửa

Mock reviewer (giả định) nêu:

1. *"Density map cần supervision gì? Có cần nhãn thêm không?"* → Thêm câu rõ: sinh từ box GT sẵn có, không cần nhãn thêm (Sec. 3.2).
2. *"Gain có đến từ việc train lâu hơn?"* → Thêm ghi chú: cùng schedule.
3. *"Figure 2 khó đọc."* → Vẽ lại, giảm chữ, thêm kích thước tensor.
4. *"Thua X ở vật lớn."* → Thêm 1 câu giải thích trung thực trong Sec. 4.2.

## Tuần 21–22: Polish, supp, checklist

- Supp: implementation details, ablation thêm, kết quả từng lớp, failure cases (vật bị che bởi cây), video ví dụ.
- Chạy [checklist nộp bài](../04-nop-va-sau-nop/submission.md).
- Upload bản đầu **3 ngày trước deadline**, ghi đè bản cuối 1 ngày trước.

## Sau khi có review (giả định)

| Reviewer | Rating | Ý chính |
|---|---|---|
| R1 | Weak Accept | Phân tích hay; hỏi về benchmark 3 |
| R2 | Borderline | Thiếu so sánh với một phương pháp density-cropping gần đây |
| R3 | Weak Reject | "Novelty limited: density maps đã được dùng cho cropping" |

Rebuttal (theo [hướng dẫn](../04-nop-va-sau-nop/rebuttal.md)): mở đầu bằng điểm mạnh được công nhận → [R2, R3] bảng nhỏ so sánh với phương pháp density-cropping: tương đương/hơn AP_tiny với **ít FLOPs hơn nhiều** + giải thích khác biệt bản chất (phân bổ query vs. crop ảnh) → [R1] kết quả benchmark 3 → minor.

Dù kết quả thế nào, bạn đã đi hết vòng đời một paper — **tự mình**.
