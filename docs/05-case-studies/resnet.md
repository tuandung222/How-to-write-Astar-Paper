# Case study: ResNet (CVPR 2016)

**Deep Residual Learning for Image Recognition** — He, Zhang, Ren, Sun. CVPR 2016, Best Paper Award. Một trong những paper được trích dẫn nhiều nhất lịch sử khoa học.

## Câu chuyện một dòng

> Mạng sâu hơn lại **huấn luyện kém hơn** (không phải do overfitting) → đây là vấn đề **tối ưu hóa** → để các layer học **phần dư** so với ánh xạ đồng nhất thì dễ tối ưu hơn → huấn luyện được mạng 152 layer, thắng ILSVRC & COCO 2015.

## Phân tích cấu trúc câu chuyện

| Bước | ResNet làm gì | Bài học |
|---|---|---|
| **Vấn đề** | Độ sâu rất quan trọng (dẫn chứng các mạng sâu thắng ImageNet) → câu hỏi tu từ: học mạng tốt hơn có dễ như *xếp thêm layer* không? | Mở bằng một **câu hỏi** mà ai cũng muốn biết câu trả lời |
| **Loại trừ giải thích cũ** | Vanishing gradient đã được giải quyết phần lớn bằng normalized init + BatchNorm. Vậy mà vẫn có hiện tượng **degradation**. | Chủ động loại trừ giả thuyết reviewer sẽ nghĩ tới |
| **Quan sát (bằng chứng)** | **Figure 1**: mạng "plain" 56 layer có **training error** *và* test error cao hơn mạng 20 layer trên CIFAR-10 | Insight được hỗ trợ bằng hình ngay trang 1. Nhấn mạnh *training* error → không phải overfitting |
| **Lập luận thiết kế** | Một mạng sâu hơn *ít nhất* có thể sao chép mạng nông + các layer đồng nhất → lẽ ra không tệ hơn → solver gặp khó trong việc học ánh xạ đồng nhất → hãy reformulate: $\mathcal{F}(x) = \mathcal{H}(x) - x$ | **Lập luận bằng construction** — thuyết phục mà không cần lý thuyết phức tạp |
| **Giải pháp** | Shortcut connection identity (**Figure 2** — một khối residual cực đơn giản) | Thiết kế suy ra trực tiếp từ insight |
| **Bằng chứng** | ImageNet (plain vs. residual 18/34 layer), CIFAR-10 (tới 1202 layer), COCO/PASCAL detection | Bằng chứng ở 3 cấp: *xác nhận insight*, *SOTA*, *tổng quát hóa* |

## Teaser: một biểu đồ đơn giản nhưng "chí mạng"

Figure 1 của ResNet **không phải** kiến trúc hay kết quả SOTA — mà là **biểu đồ hiện tượng** (training/test error theo iteration của mạng 20 vs 56 layer). Người đọc thấy ngay **vấn đề**, và nó khiến giải pháp trở nên tất yếu.

!!! tip "Bài học cho bạn"
    Nếu paper của bạn xuất phát từ một quan sát, hãy cân nhắc dùng **Figure 1 để chứng minh quan sát đó** thay vì khoe kết quả. Một hiện tượng đáng ngạc nhiên thu hút reviewer hơn một bảng số.

## Thí nghiệm như một chuỗi suy luận

1. **Plain-18 vs Plain-34** trên ImageNet → tái hiện degradation ở quy mô lớn (34 tệ hơn 18).
2. **ResNet-18 vs ResNet-34** (cùng số tham số, chỉ thêm shortcut) → hiện tượng đảo ngược: 34 tốt hơn 18. *Đối chứng có kiểm soát* — khác biệt duy nhất là shortcut.
3. **Identity vs projection shortcuts** (các option A/B/C) → trả lời trước câu hỏi "có phải nhờ tham số thêm?" → projection chỉ tốt hơn chút ít, identity là đủ.
4. **Bottleneck** để đi sâu 50/101/152 layer với chi phí hợp lý.
5. **CIFAR-10 tới 1202 layer** + phân tích **độ lớn response** của các layer (residual function có response nhỏ → ủng hộ giả thuyết "gần identity").
6. **Detection trên PASCAL/COCO** → feature tốt tổng quát hóa.

Mỗi thí nghiệm trả lời **một câu hỏi** và loại trừ **một giải thích thay thế**. Đây là mẫu mực của [thiết kế thí nghiệm theo claim](../01-truoc-khi-viet/thi-nghiem.md).

## Văn phong

- Câu ngắn, chắc, ít tính từ.
- Thuật ngữ được đặt tên rõ: *"degradation problem"*, *"residual learning"*, *"identity mapping by shortcuts"*. **Đặt tên cho hiện tượng** giúp người đọc nhớ và giúp paper sau trích dẫn.
- Công thức rất ít — sức thuyết phục đến từ lập luận và thực nghiệm.

## Bài tập

1. Viết lại đoạn "insight" của paper bạn theo khuôn ResNet: *hiện tượng → loại trừ giải thích hiển nhiên → giả thuyết → thiết kế suy ra từ giả thuyết*.
2. Thiết kế một thí nghiệm "đối chứng có kiểm soát" kiểu ResNet-34 plain vs. residual cho phương pháp của bạn.
