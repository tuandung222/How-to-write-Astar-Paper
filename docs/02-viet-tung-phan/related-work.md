# Related Work

Related Work **không phải** là danh sách tóm tắt paper. Nó là **bản đồ** cho thấy paper của bạn nằm ở đâu và **khác các hướng hiện có thế nào**.

## Cấu trúc

- Chia thành **2–4 đoạn có tiêu đề in đậm** (`\paragraph{...}` hoặc `\noindent\textbf{...}`), mỗi đoạn một hướng/chủ đề.
- Mỗi đoạn: (1) giới thiệu hướng; (2) các công trình tiêu biểu, gom nhóm; (3) **câu cuối: khác biệt với bạn**.

```latex
\paragraph{Monocular 3D object detection.}
Early methods lift 2D detections to 3D using geometric
priors~\cite{a,b}. Recent approaches regress depth directly from
image features~\cite{c,d,e} or leverage pseudo-LiDAR
representations~\cite{f,g}. While effective for nearby objects,
these methods treat depth as a deterministic quantity and thus
struggle at long range. In contrast, we model per-object depth as a
distribution and refine it with height priors.
```

## Vị trí: Section 2 hay trước Conclusion?

- **Section 2 (phổ biến nhất ở CV):** người đọc biết bối cảnh trước khi vào Method.
- **Trước Conclusion:** dùng khi phương pháp của bạn cần được hiểu trước để thấy khác biệt. Hiếm hơn ở CVPR.

## Quy tắc

1. **Câu "In contrast…" / "Different from…"** ở cuối mỗi đoạn là bắt buộc. Thiếu nó, Related Work vô dụng.
2. **Tôn trọng** công trình khác. Reviewer có thể là tác giả.
3. **Gom trích dẫn** `\cite{a,b,c}` thay vì một câu cho mỗi paper (trừ paper gần nhất với bạn — cần thảo luận riêng, kỹ).
4. **Paper gần nhất** nên được nhắc trong Intro *và* thảo luận kỹ trong Related Work, thậm chí so sánh trực tiếp trong Experiments.
5. **Không để trống "concurrent work"**: *"Concurrent to our work, X~\cite{} also explores…; however, they …"*.
6. Độ dài **~0,5–1 trang**. Nếu quá dài, chuyển bớt vào supp.

## Bảng so sánh tính chất (rất "CV")

Nhiều paper CV dùng bảng nhỏ để định vị:

| Method | No pose required | Real-time | Handles dynamic scenes | Open-vocabulary |
|---|:-:|:-:|:-:|:-:|
| Method A [3] | ✗ | ✓ | ✗ | ✗ |
| Method B [7] | ✓ | ✗ | ✗ | ✗ |
| Method C [12] | ✓ | ✗ | ✓ | ✗ |
| **Ours** | ✓ | ✓ | ✓ | ✓ |

Hữu ích, nhưng **trung thực** — reviewer sẽ kiểm tra từng ô.
