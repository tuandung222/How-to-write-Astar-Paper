# Case study: NeRF (ECCV 2020)

**NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis** — Mildenhall, Srinivasan, Tancik, Barron, Ramamoorthi, Ng. ECCV 2020 (Oral, Best Paper Honorable Mention).

## Câu chuyện một dòng

> Biểu diễn một cảnh như một **hàm liên tục 5D** (vị trí 3D + hướng nhìn → mật độ & màu) bằng một **MLP**, tối ưu từ ảnh nhiều góc qua **volume rendering khả vi** → tổng hợp góc nhìn mới chất lượng vượt xa trước đó.

## Bài học 1: Title chứa cả *tên*, *biểu diễn* và *ứng dụng*

*"NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis"* — một title gần như là một abstract thu nhỏ: tên dễ nhớ (NeRF), cái gì mới (biểu diễn bằng neural radiance field), để làm gì (view synthesis). Tên "NeRF" đã trở thành tên của cả một lĩnh vực.

## Bài học 2: Contributions rõ ràng, mỗi cái được ablate

Intro của NeRF kết thúc bằng danh sách đóng góp kỹ thuật, có thể diễn giải thành 3 ý:

1. Biểu diễn cảnh liên tục với hình học và vật liệu phức tạp dưới dạng **5D neural radiance field**, tham số hóa bằng MLP.
2. Thủ tục **rendering khả vi** dựa trên volume rendering cổ điển, kèm **hierarchical sampling** để phân bổ capacity của MLP vào vùng có nội dung.
3. **Positional encoding** ánh xạ tọa độ đầu vào lên không gian nhiều chiều, cho phép biểu diễn chi tiết tần số cao.

Và trong Experiments có **bảng ablation** loại bỏ từng thành phần: không positional encoding, không view dependence, không hierarchical sampling, ít ảnh input hơn, số tần số khác nhau… → mỗi contribution có bằng chứng.

!!! tip "Bài học"
    Viết contribution sao cho mỗi cái **có thể bị loại bỏ trong một dòng ablation**. Nếu bạn không thể ablate một "contribution", có lẽ nó không phải là contribution.

## Bài học 3: Biến kỹ thuật "cũ" thành điểm mạnh

Volume rendering là kỹ thuật đồ họa cổ điển. NeRF không giấu điều đó — ngược lại, nhấn mạnh rằng vì volume rendering **tự nhiên khả vi**, chỉ cần ảnh với camera pose đã biết là đủ để tối ưu. Kết hợp ý tưởng cũ đúng chỗ + giải thích rõ **tại sao nó phù hợp** = novelty thuyết phục.

## Bài học 4: Hình ảnh và video là bằng chứng chính

- **Figure 1**: tổng quan — tập ảnh input → tối ưu NeRF → render góc nhìn mới. Hiểu trong 10 giây.
- **Figure pipeline**: tia camera → sample điểm → MLP → màu & mật độ → volume rendering → loss với pixel thật. Luồng cực rõ.
- **So sánh qualitative** với các baseline (SRN, Neural Volumes, LLFF) có **zoom-in** vào chi tiết mảnh (dây, họa tiết, phản xạ).
- **Video supp và project page** — với bài toán view synthesis, video là bằng chứng không thể thay thế. Project page của NeRF trở thành chuẩn mực cho cả cộng đồng.

## Bài học 5: Benchmark & metric

- Ba tập dữ liệu: cảnh tổng hợp đơn giản (Diffuse Synthetic 360°), cảnh tổng hợp phức tạp do tác giả tạo (Realistic Synthetic 360°), và ảnh thật forward-facing.
- Metric: **PSNR, SSIM, LPIPS** — kết hợp metric pixel và perceptual.
- **Tạo dataset mới** khi benchmark cũ không đủ khó, *và* vẫn dùng benchmark cũ để so sánh công bằng.
- Thảo luận cả **trade-off**: NeRF tốn thời gian tối ưu mỗi cảnh, nhưng lưu trữ gọn hơn nhiều so với biểu diễn voxel (LLFF) — trung thực về chi phí, đồng thời chỉ ra lợi thế.

## Bài tập

- Viết lại contributions của bạn sao cho mỗi cái tương ứng với một dòng trong bảng ablation.
- Nếu bài toán của bạn có tính trực quan (video, 3D, generation), lên kế hoạch **video supp** ngay từ bây giờ.
