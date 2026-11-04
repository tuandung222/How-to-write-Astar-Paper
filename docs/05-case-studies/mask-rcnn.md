# Case study: Mask R-CNN (ICCV 2017)

**Mask R-CNN** — He, Gkioxari, Dollár, Girshick. ICCV 2017, Marr Prize (Best Paper).

## Câu chuyện một dòng

> Instance segmentation có thể giải quyết bằng một mở rộng **đơn giản** của Faster R-CNN: thêm một nhánh dự đoán mask song song — với điều kiện sửa đúng **chi tiết then chốt** (RoIAlign) và **tách rời** dự đoán mask khỏi phân loại.

## Bài học 1: Viết về sự đơn giản như một điểm mạnh

Nhiều người mới sợ ý tưởng của mình "quá đơn giản". Mask R-CNN biến sự đơn giản thành **luận điểm chính**:

- Nhấn mạnh phương pháp **đơn giản để huấn luyện**, chỉ thêm **chi phí nhỏ** vào Faster R-CNN, chạy ~5 fps.
- Dùng cụm *"without bells and whistles"* khi báo cáo kết quả vượt các phương pháp phức tạp hơn (kể cả các winner COCO 2016).
- **Tính tổng quát** là bằng chứng của sự đơn giản: cùng framework mở rộng sang **human pose estimation** (keypoint = mask one-hot).

!!! tip "Cách 'bán' một ý tưởng đơn giản"
    1. Chỉ ra rằng **chi tiết nhỏ** (ở đây: misalignment của RoIPool) có **tác động lớn**, và trước đó bị bỏ qua.
    2. Chứng minh **mỗi lựa chọn** bằng ablation.
    3. Cho thấy **tổng quát hóa** sang tác vụ khác mà không cần thay đổi lớn.

## Bài học 2: Hai insight được tách bạch và kiểm chứng riêng

| Insight | Thiết kế | Ablation chứng minh |
|---|---|---|
| RoIPool lượng tử hóa → lệch pixel, hại mask (cần độ chính xác pixel) | **RoIAlign**: bilinear interpolation, không làm tròn | So sánh RoIPool / RoIWarp / RoIAlign → cải thiện lớn, nhất là ở metric chặt (AP75) và với stride lớn |
| Kết hợp mask + class (softmax đa lớp theo pixel) tạo cạnh tranh không cần thiết giữa các lớp | **Decouple**: mask nhị phân cho mỗi lớp (sigmoid), class do nhánh box quyết định | Softmax vs sigmoid → khác biệt lớn |

Mỗi insight đi kèm **một ablation trực tiếp** — reviewer không thể nói "không rõ thành phần nào hiệu quả".

## Bài học 3: Bảng ablation dạng "bảng con" (a)–(e)

Mask R-CNN phổ biến phong cách: **một Table gồm nhiều bảng con nhỏ**, mỗi bảng trả lời một câu hỏi (backbone, multinomial vs. independent masks, class-specific vs. agnostic, RoIAlign, mask branch FCN vs MLP). Rất tiết kiệm chỗ và dễ đọc. Về sau MAE, ConvNeXt và rất nhiều paper CV dùng lại phong cách này.

## Bài học 4: Hình qualitative "nói thay lời"

Figure kết quả cho thấy nhiều ảnh COCO với mask màu sắc, đa dạng cảnh — truyền đạt chất lượng nhanh hơn mọi con số. Ngoài ra còn hình so sánh trực quan với phương pháp trước ở vùng chồng lấn — đúng điểm yếu đã nêu.

## Cấu trúc tổng thể

1. Intro: bối cảnh (detection & semantic segmentation tiến bộ nhanh nhờ Fast/Faster R-CNN và FCN) → mục tiêu: framework tương đương cho instance segmentation → ý tưởng → hai chi tiết then chốt → kết quả → tổng quát sang pose.
2. Related work ngắn: R-CNN family, instance segmentation (segment-first vs. đồng thời).
3. Mask R-CNN: mô tả nhánh mask, loss, RoIAlign, kiến trúc (backbone + head), implementation.
4. Experiments: instance segmentation (main + ablation), detection, timing.
5. Pose estimation.
6. (Bản arXiv mở rộng thêm Cityscapes và các cải tiến.)

## Bài tập

- Liệt kê "chi tiết nhỏ nhưng quan trọng" trong phương pháp của bạn. Bạn đã có ablation riêng cho từng chi tiết chưa?
- Gom các ablation của bạn thành một Table nhiều bảng con, tô xám cài đặt mặc định.
