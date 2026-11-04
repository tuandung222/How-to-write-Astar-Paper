# Experiments

Phần này thường chiếm **~1/3 paper** và là nơi reviewer tìm lý do để reject. Viết như một **luật sư trình bằng chứng**: có tổ chức, đầy đủ, dự đoán trước phản biện.

## Cấu trúc chuẩn

```
4. Experiments
   4.1 Experimental Setup
       Datasets · Evaluation metrics · Implementation details · Baselines
   4.2 Main Results          ← Table 1 (+ Table 2 nếu nhiều benchmark)
   4.3 Ablation Studies      ← Table 3 (a)(b)(c)...
   4.4 Analysis              ← hình/bảng giải thích "tại sao"
   4.5 Qualitative Results   ← Figure so sánh
   (4.6 Generalization / Efficiency / Limitations)
```

## 4.1 Setup — đủ để tái hiện

- **Datasets:** tên, split (train/val/test), kích thước, lý do chọn. Một câu cho mỗi dataset là đủ (chi tiết vào supp).
- **Metrics:** tên + trích dẫn định nghĩa; nói rõ biến thể (AP@[.5:.95], AP50, mIoU single-scale/multi-scale…).
- **Implementation details:** backbone, pre-training, optimizer, LR, schedule, batch size, số GPU, thời gian train. Có thể ngắn ở đây, đầy đủ trong supp.
- **Baselines:** nhóm baseline và lý do chọn.

## 4.2 Main results — Table 1

Mẫu đoạn văn bình luận:

> *"Table 1 compares [Name] with state-of-the-art methods on COCO val. With the same ResNet-50 backbone, [Name] outperforms the strongest baseline, X [12], by **+1.8 AP**, with the largest gain on small objects (**+3.1 AP_S**). This is consistent with our motivation that … (Sec. 3.2). Notably, [Name]-R50 even surpasses X-R101 while using 40% fewer FLOPs."*

Nguyên tắc:

1. **Đừng chỉ đọc lại bảng.** Rút ra *ý nghĩa*, liên hệ với insight.
2. Chỉ ra **chỗ thắng nhiều nhất** và **giải thích vì sao**.
3. **Nói thật chỗ thua** và giải thích: *"X achieves slightly higher AP_L, which we attribute to its larger input resolution (1333 vs. 800)."* Trung thực tăng độ tin cậy.
4. Nhóm hàng trong bảng theo **backbone / loại phương pháp / lượng dữ liệu** để so sánh công bằng.

## 4.3 Ablation — trả lời "thành phần nào quan trọng?"

Phong cách gọn và được ưa chuộng ở CV (từ Mask R-CNN, MAE…): **nhiều bảng nhỏ (a), (b), (c)… gom vào một Table**, mỗi bảng con trả lời một câu hỏi, cài đặt mặc định được tô màu xám.

```text
Table 3. Ablations on COCO val (R50, 1× schedule). Default settings are marked in gray.

(a) Components          (b) Number of bins K      (c) Depth representation
 A  B  C | AP             K  | AP                    type           | AP
 -  -  - | 38.2           16 | 40.1                  scalar         | 38.9
 ✓  -  - | 39.6           32 | 40.6                  Gaussian       | 39.8
 ✓  ✓  - | 40.3         ▓64▓ | ▓40.9▓                ▓categorical▓  | ▓40.9▓
 ✓  ✓  ✓ | 40.9          128 | 40.8                  
```

Mỗi bảng con kèm **1–3 câu kết luận** trong chữ: *"(b) Performance saturates at K=64; we use this by default."*

## 4.4 Analysis — chỗ paper từ "tốt" thành "xuất sắc"

Các kiểu phân tích hay:

- **Breakdown theo điều kiện:** theo kích thước vật, khoảng cách, mức độ che khuất, ánh sáng… — xác nhận insight.
- **Visualization:** attention map, feature t-SNE, depth distribution.
- **Scaling:** hiệu năng theo lượng dữ liệu / kích thước model / compute.
- **Error analysis:** phân loại lỗi trước/sau.
- **"Sanity checks":** cho thấy cải thiện không đến từ yếu tố phụ (nhiều tham số hơn, train lâu hơn) — ví dụ baseline có cùng số tham số.

## 4.5 Qualitative results

- So sánh **cùng input** giữa các phương pháp, xếp thành lưới.
- **Highlight** vùng khác biệt (khung đỏ, zoom-in).
- Chọn ví dụ **đại diện**, nói rõ cách chọn (*"randomly sampled"* nếu đúng vậy — rất được tin tưởng).
- Có **failure cases** (ở đây hoặc trong supp/limitations).

## Về số liệu và ý nghĩa thống kê

- Báo cáo **cùng số chữ số thập phân** trong một cột.
- In đậm **best**, gạch chân **second best** — giải thích trong caption.
- Với kết quả dao động: **mean ± std** (≥ 3 seeds). Cải thiện nhỏ hơn std → không phải claim.
- Đơn vị và chiều tốt rõ ràng: `AP↑`, `FID↓`, `Latency (ms)↓`.
- **Mọi con số trong chữ phải khớp với bảng** — kiểm tra lần cuối trước khi nộp.

## Khi bạn không có nhiều GPU

- Chọn benchmark **vừa sức** nhưng được công nhận; tránh claim trên quy mô bạn không kiểm chứng được.
- Ablation trên thiết lập nhỏ (nêu rõ).
- Nhấn mạnh **hiệu quả** (train nhanh hơn, ít dữ liệu hơn) như một đóng góp.
- Dùng số **reported** của baseline lớn khi không thể chạy lại (ghi rõ).
