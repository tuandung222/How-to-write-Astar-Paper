# Case study: MAE & Latent Diffusion (CVPR 2022)

Hai paper CVPR 2022 rất có ảnh hưởng, cùng dạy một bài học: **một insight phân tích tốt biến một ý tưởng "đã có" thành đóng góp lớn.**

---

## MAE — Masked Autoencoders Are Scalable Vision Learners { #mae }

He, Chen, Xie, Li, Dollár, Girshick. CVPR 2022.

### Câu chuyện một dòng

> Masked autoencoding đã thành công vang dội ở NLP (BERT) nhưng chưa ở vision. Vì sao? Vì ảnh **dư thừa thông tin** hơn ngôn ngữ → hãy **mask rất nhiều** (75%) và dùng **encoder chỉ xử lý patch thấy được** → vừa là bài toán khó, vừa huấn luyện nhanh, scale tốt.

### Bài học 1: Title là một khẳng định

*"Masked Autoencoders Are Scalable Vision Learners"* — không phải "A Novel Masked Image Modeling Method…". Title phát biểu **một luận điểm**, khiến người đọc muốn kiểm chứng.

### Bài học 2: Intro dẫn dắt bằng một câu hỏi đúng

Thay vì "chúng tôi đề xuất…", Intro của MAE đặt câu hỏi: **điều gì khiến masked autoencoding khác nhau giữa vision và language?** — rồi trả lời theo ba góc nhìn:

1. **Kiến trúc**: trước ViT, convnet khó tích hợp mask token / positional embedding (ViT đã gỡ bỏ rào cản này).
2. **Mật độ thông tin**: ngôn ngữ do con người tạo, mật độ ngữ nghĩa cao; ảnh có dư thừa không gian lớn → mask ít thì có thể "nội suy" từ lân cận mà không cần hiểu. → **mask tỉ lệ cao**.
3. **Vai trò decoder**: trong vision, decoder tái tạo pixel (mức ngữ nghĩa thấp) → thiết kế decoder quan trọng.

Mỗi góc nhìn **trực tiếp dẫn tới một quyết định thiết kế**. Đây là cách viết Intro "insight → design" xuất sắc.

### Bài học 3: Bảng ablation dạng bảng con, có cài đặt mặc định tô xám

Bảng ablation chính của MAE gồm nhiều bảng con: decoder depth, decoder width, mask token ở encoder hay không, reconstruction target (pixel có/không chuẩn hóa, token…), data augmentation, mask sampling strategy… Cài đặt mặc định được **tô xám**. Đồng thời có biểu đồ hiệu năng theo **tỉ lệ mask** — cho thấy 75% tối ưu cho cả fine-tuning lẫn linear probing — **xác nhận trực tiếp insight** số 2.

### Bài học 4: Hai trục bằng chứng — chất lượng và hiệu quả

- Chất lượng: ViT-Huge đạt độ chính xác rất cao trên ImageNet-1K chỉ dùng dữ liệu ImageNet-1K; transfer tốt sang detection, segmentation.
- Hiệu quả: encoder chỉ xử lý ~25% patch → **tăng tốc huấn luyện đáng kể (≥3×)**.

Một paper mạnh thường có **hai lý do** để được quan tâm.

---

## LDM — High-Resolution Image Synthesis with Latent Diffusion Models { #ldm }

Rombach, Blattmann, Lorenz, Esser, Ommer. CVPR 2022 (Oral). Nền tảng của Stable Diffusion.

### Câu chuyện một dòng

> Diffusion model trong không gian pixel lãng phí phần lớn compute vào các **chi tiết không cảm nhận được** → nén ảnh bằng autoencoder vào một **latent space** có tính perceptual tương đương, rồi chạy diffusion ở đó → giảm mạnh chi phí, giữ chất lượng; thêm **cross-attention** để điều kiện hóa linh hoạt (text, layout…).

### Bài học 1: Insight đến từ một phân tích định lượng

Paper minh họa (bằng một biểu đồ rate–distortion) rằng quá trình học của một mô hình sinh có thể chia thành hai giai đoạn: **perceptual compression** (bỏ chi tiết tần số cao khó thấy) và **semantic compression** (học ngữ nghĩa). Phần lớn bit ở pixel space thuộc về chi tiết không quan trọng về mặt cảm nhận. → *Hãy để autoencoder lo phần perceptual, diffusion lo phần semantic.*

Đây là ví dụ hoàn hảo của "[insight](../01-truoc-khi-viet/cau-chuyen.md)": **một hình phân tích** biện minh cho toàn bộ kiến trúc.

### Bài học 2: Phân tích "nút vặn" chính một cách hệ thống

Paper thí nghiệm với các **hệ số downsampling** khác nhau của autoencoder (từ không nén tới nén rất mạnh) và cho thấy vùng cân bằng ở mức trung bình: quá ít nén → chậm; quá nhiều nén → mất chất lượng. Đây là kiểu **sensitivity analysis** trả lời câu hỏi "tại sao chọn giá trị này?".

### Bài học 3: Một framework, nhiều tác vụ

Unconditional generation, class-conditional, text-to-image, layout-to-image, inpainting, super-resolution… Cùng một framework, kết quả cạnh tranh trên tất cả → tính tổng quát là bằng chứng mạnh cho giá trị framework. Đồng thời paper nhấn mạnh **chi phí tính toán** thấp hơn đáng kể so với diffusion ở pixel space — "dân chủ hóa" mô hình sinh.

---

## So sánh hai paper

| | MAE | LDM |
|---|---|---|
| Ý tưởng nền đã có | Masked autoencoding (BERT, denoising AE) | Diffusion models, autoencoder, two-stage generation |
| Insight | Ảnh dư thừa hơn ngôn ngữ | Phần lớn bit pixel là chi tiết không cảm nhận được |
| Bằng chứng insight | Đồ thị theo tỉ lệ mask | Biểu đồ rate–distortion + thí nghiệm theo hệ số nén |
| Hai trục giá trị | Chính xác + nhanh | Chất lượng + rẻ |
| Tổng quát hóa | Transfer detection/segmentation | Nhiều tác vụ sinh |

!!! success "Bài học chung"
    Đừng lo "ý tưởng của tôi đã có người làm ở mảng khác". Hãy hỏi: **tại sao nó chưa hiệu quả ở mảng của tôi, và insight nào giải quyết điều đó?** Câu trả lời chính là paper.
