# Case study: Segment Anything & ControlNet (ICCV 2023)

Hai paper ICCV 2023 đại diện cho hai thái cực: một **dự án quy mô cực lớn** (SAM) và một **ý tưởng kiến trúc gọn gàng** (ControlNet). Cả hai đều có cách trình bày đáng học.

---

## Segment Anything (SAM) { #sam }

Kirillov và cộng sự (Meta AI). ICCV 2023 (Best Paper Honorable Mention).

### Câu chuyện một dòng

> Xây dựng **foundation model cho segmentation** bằng cách định nghĩa đồng thời ba thứ: một **task** (promptable segmentation), một **model** (SAM), và một **data engine** tạo ra dataset lớn nhất (SA-1B: hơn 1 tỷ mask trên 11 triệu ảnh) → zero-shot transfer tốt trên nhiều tác vụ.

### Bài học 1: Cấu trúc ba trụ, phản chiếu trong Figure 1 và Sections

Figure 1 chia thành ba panel: **Task** (prompt → mask hợp lệ), **Model** (image encoder, prompt encoder, mask decoder nhẹ), **Data** (data engine vòng lặp model ↔ annotator). Cấu trúc paper đi theo đúng ba trụ đó. Người đọc luôn biết mình đang ở đâu.

!!! tip "Bài học"
    Nếu paper có nhiều đóng góp lớn khác loại (task + model + dataset), hãy **làm cho cấu trúc paper, Figure 1, và contributions phản chiếu nhau**.

### Bài học 2: Định nghĩa task cẩn thận — kể cả sự mơ hồ

SAM định nghĩa "valid mask": với prompt mơ hồ (ví dụ một điểm trên áo của một người — là áo hay là người?), model phải trả về **ít nhất một mask hợp lý**; model dự đoán **nhiều mask** + điểm tin cậy. Đối mặt trực tiếp với sự mơ hồ thay vì lờ đi → tăng độ thuyết phục.

### Bài học 3: Đánh giá zero-shot diện rộng + human study

- Đánh giá trên **hàng chục dataset** segmentation đa dạng (23 dataset) với nhiều tác vụ downstream (edge detection, object proposals, instance segmentation, text-to-mask…).
- Có **nghiên cứu đánh giá bởi con người** về chất lượng mask, vì metric tự động (mIoU) không phản ánh hết khi ground truth cũng mơ hồ.
- Dataset paper → phân tích **thống kê** (phân bố kích thước mask, vị trí, so sánh với các dataset khác).

### Bài học 4: Responsible AI

SAM có phần phân tích **fairness** (phân bố địa lý/thu nhập của ảnh; hiệu năng theo giới tính, tuổi, màu da trong segment người). Với dataset/model quy mô lớn, đây là kỳ vọng của cộng đồng và của các hội nghị. Bài học: nếu bạn công bố dataset, chuẩn bị phần ethics/datasheet nghiêm túc.

---

## ControlNet { #controlnet }

**Adding Conditional Control to Text-to-Image Diffusion Models** — Zhang, Rao, Agrawala. ICCV 2023, Marr Prize (Best Paper).

### Câu chuyện một dòng

> Thêm điều khiển không gian (edge, depth, pose, segmentation…) vào một model text-to-image lớn **mà không làm hỏng** nó: **khóa** model gốc, tạo một **bản sao huấn luyện được** của encoder, nối hai bên bằng **zero convolution** (conv 1×1 khởi tạo bằng 0) → ban đầu không thêm nhiễu nào, học ổn định kể cả với dataset nhỏ.

### Bài học 1: Động lực hóa một chi tiết nhỏ thành ý tưởng trung tâm

"Zero convolution" về kỹ thuật cực đơn giản. Paper làm cho nó trở nên thuyết phục bằng cách giải thích **vấn đề nó giải quyết**: fine-tune trực tiếp model lớn với ít dữ liệu dễ overfitting / catastrophic forgetting; thêm layer khởi tạo ngẫu nhiên có thể đưa nhiễu có hại vào giai đoạn đầu → zero conv đảm bảo **ở bước đầu, output giống hệt model gốc**, và gradient vẫn khác 0 nên học được.

→ Ablation so sánh zero convolution với các thay thế (ví dụ khởi tạo chuẩn, thay bằng layer đơn giản) cho thấy vai trò của nó.

### Bài học 2: Showcase trực quan làm bằng chứng chính

Teaser là một lưới ví dụ: cùng một loại điều kiện (Canny edge, human pose, depth…) → ảnh sinh đa dạng, đúng cấu trúc. Paper có nhiều hình qualitative với nhiều loại điều kiện. Với bài toán sinh ảnh, **chất lượng trực quan là thông điệp** — và paper dành nhiều diện tích cho nó.

### Bài học 3: Đánh giá bài toán khó đo

Đánh giá generation có điều kiện là khó. ControlNet kết hợp: **user study** (xếp hạng chất lượng và độ khớp điều kiện), metric tự động (FID, CLIP score…, độ khớp điều kiện như IoU khi tái phân đoạn ảnh sinh), so sánh với các phương pháp cùng thời, và thí nghiệm theo **kích thước dataset** huấn luyện (cho thấy robust từ dataset nhỏ đến lớn).

!!! tip "Bài học"
    Khi metric tự động không đủ, **kết hợp nhiều loại bằng chứng**: user study (thiết kế cẩn thận, nêu rõ số người tham gia & giao thức), metric proxy, và qualitative có hệ thống.

---

## So sánh

| | SAM | ControlNet |
|---|---|---|
| Quy mô | Rất lớn (data engine, 1B masks) | Vừa phải, ý tưởng gọn |
| Đóng góp | Task + model + dataset | Kiến trúc + chiến lược huấn luyện |
| Figure 1 | Ba trụ task/model/data | Showcase điều khiển đa dạng |
| Bằng chứng chính | Zero-shot trên nhiều dataset + human study | Qualitative + user study + ablation zero conv |
| Bài học cho bạn | Cấu trúc hóa đóng góp đa dạng | Biến chi tiết đơn giản thành ý tưởng được động lực hóa rõ |
