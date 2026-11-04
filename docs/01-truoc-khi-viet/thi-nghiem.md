# Thiết kế thí nghiệm (với tư duy của người viết)

Thí nghiệm trong paper không phải nhật ký những gì bạn đã chạy. Đó là **bộ bằng chứng được chọn lọc** để trả lời đúng những câu hỏi mà reviewer sẽ hỏi.

## Nguyên tắc: Claim → Câu hỏi → Thí nghiệm

Bắt đầu từ danh sách claims (xem [Câu chuyện](cau-chuyen.md)), với mỗi claim, liệt kê thí nghiệm chứng minh nó:

| Claim | Câu hỏi reviewer | Thí nghiệm | Kết quả mong đợi | Trạng thái |
|---|---|---|---|---|
| C1: Phương pháp đạt SOTA trên bài toán X | So với ai? Công bằng không? | Main table trên 3 benchmark chuẩn, cùng backbone | Thắng ≥ 1–2 điểm | ✅ |
| C2: Module A giải quyết vấn đề occlusion | Thật sự là nhờ A? | Ablation bỏ A; đánh giá riêng trên tập con bị che khuất | Gap lớn hơn trên tập occluded | 🔄 |
| C3: Hiệu quả về chi phí | Latency đo thế nào? | FLOPs, params, FPS trên cùng GPU | ... | ⬜ |
| C4: Tổng quát hóa | Chỉ đúng trên 1 dataset? | Cross-dataset / zero-shot | ... | ⬜ |

Mọi thí nghiệm **không** nằm trong bảng này → cân nhắc đưa vào supp hoặc bỏ.

## Bộ thí nghiệm "chuẩn" của một paper phương pháp CV

1. **Main comparison** — trên benchmark mà cộng đồng công nhận (COCO, ImageNet, ADE20K, nuScenes, ScanNet…). Dùng **đúng split và metric chuẩn**.
2. **Ablation study** — bỏ / thay từng thành phần; thay đổi hyperparameter quan trọng.
3. **Analysis** — thí nghiệm giải thích *tại sao* phương pháp hoạt động (visualization attention, phân tích lỗi, theo từng nhóm đối tượng…).
4. **Generalization** — dataset khác, backbone khác, domain khác.
5. **Efficiency** — params, FLOPs, latency, memory (nếu liên quan).
6. **Qualitative results** — hình so sánh với baseline, bao gồm **failure cases**.

## So sánh công bằng: checklist chống bị "bắt lỗi"

- [ ] **Cùng backbone / cùng pre-training** (ImageNet-1k vs 22k vs CLIP tạo khác biệt lớn).
- [ ] **Cùng dữ liệu train** (có dùng thêm dữ liệu ngoài? phải tách riêng).
- [ ] **Cùng độ phân giải input, cùng schedule** (1× vs 3×), hoặc ghi rõ khác biệt.
- [ ] **Số của baseline lấy từ đâu?** Từ paper gốc (ghi "†: reported in original paper") hay bạn chạy lại (ghi "‡: our reproduction with official code")?
- [ ] **Không tune hyperparameter trên test set.** Dùng validation set; nếu benchmark chỉ có val (như COCO val2017 phổ biến), nói rõ.
- [ ] **Nhiều seed** với kết quả dao động lớn (few-shot, RL, small dataset): báo cáo mean ± std trên ≥ 3 seed.
- [ ] **Baseline mạnh nhất gần đây**, không chỉ các phương pháp cũ dễ thắng.
- [ ] Nếu so sánh compute: **cùng phần cứng**, cùng batch size, cùng precision (FP16/FP32).

## Thiết kế ablation thông minh

- **Ablation cộng dồn (incremental):** Baseline → +A → +A+B → +A+B+C (full). Cho thấy đóng góp từng bước. Dễ đọc.
- **Ablation loại bỏ (leave-one-out):** Full → −A, −B, −C. Cho thấy mỗi thành phần cần thiết *khi có các thành phần khác*.
- **Ablation thay thế:** Thay A bằng các lựa chọn hợp lý khác (A′, A″) — trả lời "tại sao không dùng cách đơn giản hơn?".
- **Sensitivity:** Quét hyperparameter quan trọng (λ, số layer, kích thước…) → cho thấy phương pháp **không mỏng manh**.

!!! tip "Chạy ablation trên thiết lập nhỏ hơn"
    Nhiều paper CV chạy ablation trên schedule ngắn hơn hoặc dataset con (ví dụ COCO 1× schedule, ImageNet-100). Hoàn toàn được chấp nhận **nếu ghi rõ** và thiết lập đó vẫn đủ phân biệt.

## Ghi chép thí nghiệm (để không khóc lúc viết)

Mỗi run cần lưu được: **commit hash, config đầy đủ, seed, dataset version, checkpoint, log, kết quả**. Dùng W&B / MLflow / TensorBoard + một **sheet tổng** "số nào trong paper đến từ run nào". Khi reviewer hỏi, hoặc khi phải làm lại bảng cho camera-ready, bạn sẽ cảm ơn chính mình.

```text
results.csv
paper_ref , run_id     , commit  , config                 , dataset , metric , value
Tab1-row5 , wandb/ab12 , 3f9c2e1 , cfgs/ours_r50_1x.yaml  , coco17  , AP     , 42.7
```
