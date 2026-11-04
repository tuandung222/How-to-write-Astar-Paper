# Tìm & thẩm định ý tưởng

## Các "kiểu đóng góp" được chấp nhận ở CVPR/ICCV/ECCV

Không phải paper nào cũng là "phương pháp mới đánh bại SOTA". Biết mình thuộc kiểu nào giúp bạn viết đúng giọng và chọn đúng bằng chứng.

| Kiểu đóng góp | Ví dụ kinh điển | Bằng chứng reviewer mong đợi |
|---|---|---|
| **Phương pháp / kiến trúc mới** | ResNet, Swin Transformer | Thắng SOTA trên benchmark chuẩn + ablation |
| **Cách đặt bài toán mới (new problem / formulation)** | NeRF (biểu diễn cảnh bằng MLP liên tục), Panoptic Segmentation | Thuyết phục bài toán quan trọng + metric/benchmark hợp lý + baseline mạnh |
| **Dataset / benchmark** | ImageNet, COCO, Cityscapes, ScanNet | Quy mô, chất lượng nhãn, phân tích thống kê, baseline, chỉ ra điểm yếu của phương pháp hiện có |
| **Phân tích / hiểu biết (analysis, "what matters")** | "A ConvNet for the 2020s" (ConvNeXt) | Thí nghiệm có kiểm soát, rút ra kết luận tổng quát, gây bất ngờ |
| **Paradigm / framework tổng quát** | MAE, CLIP-style pre-training, SAM (task + model + data) | Hiệu quả trên nhiều tác vụ, scaling, transfer |
| **Hiệu năng / hiệu quả** | MobileNet, các phương pháp efficient | Trade-off accuracy–latency được đo đúng cách trên phần cứng thực |
| **Ứng dụng mới với insight kỹ thuật** | Ứng dụng y tế, viễn thám, nông nghiệp… | Thách thức kỹ thuật *đặc thù* chứ không chỉ "áp dụng model có sẵn" |

!!! warning "Bẫy phổ biến nhất của paper đầu tay: 'A + B'"
    "Chúng tôi thêm attention module X vào backbone Y và đạt +0.8%." Reviewer sẽ viết *"incremental"*. Để thoát bẫy này, bạn cần trả lời được: **Tại sao** kết hợp này lại hiệu quả? Nó giải quyết **vấn đề cụ thể nào** mà các phương pháp trước không giải quyết được? Có **insight** nào áp dụng được ngoài thiết lập của bạn?

## Ý tưởng đến từ đâu?

1. **Thất bại của phương pháp hiện có.** Chạy SOTA trên dữ liệu thực của bạn, nhìn vào *failure cases*. Một failure mode lặp lại có hệ thống = một bài toán.
2. **Giả định ngầm bị vi phạm.** Mọi phương pháp đều giả định gì đó (ảnh tĩnh, camera đã calibrate, nhãn sạch, phân bố train = test…). Tìm thiết lập thực tế nơi giả định đó sai.
3. **Chuyển giao ý tưởng giữa các mảng.** Masked modeling (NLP → MAE), diffusion (ML → generation), transformer (NLP → ViT). Hỏi: "Ý tưởng X đã thành công ở mảng A, tại sao chưa ai làm ở mảng B? Có rào cản kỹ thuật gì?" — chính rào cản đó là đóng góp.
4. **Đơn giản hóa.** Một phương pháp phức tạp có 5 thành phần — có thể chỉ 1 thành phần thật sự quan trọng? Paper "đơn giản hóa" thường được đánh giá rất cao.
5. **Scale / dữ liệu.** Điều gì xảy ra khi tăng/giảm dữ liệu 100 lần? (Thường cần tài nguyên lớn.)
6. **Limitations section của paper khác.** Đọc phần "Limitations / Future work" của các paper mới nhất — tác giả đang tự liệt kê bài toán mở cho bạn.

## Bộ câu hỏi thẩm định (dùng trước khi đầu tư 3 tháng)

Hãy trả lời **bằng văn bản** (đây là bản nháp đầu tiên của Intro!):

- [ ] **Bài toán là gì**, trong một câu, không dùng thuật ngữ riêng của bạn?
- [ ] **Tại sao quan trọng?** Ai sẽ dùng kết quả này? (Một con số thực tế càng tốt.)
- [ ] **Các phương pháp hiện tại làm gì, và thất bại ở đâu?** Có ví dụ cụ thể / hình ảnh minh họa không?
- [ ] **Insight của tôi là gì?** (Không phải "phương pháp của tôi" — mà là *quan sát/hiểu biết* khiến phương pháp hoạt động.)
- [ ] **Tôi đã search kỹ chưa?** arXiv 6 tháng gần nhất, Google Scholar, Papers with Code, OpenReview của ICLR/NeurIPS (paper đang review cũng tính!).
- [ ] **Bằng chứng nào sẽ thuyết phục một reviewer khó tính?** Liệt kê benchmark, baseline, metric.
- [ ] **Tôi có đủ tài nguyên (GPU, dữ liệu, thời gian) để tạo bằng chứng đó trước deadline không?**
- [ ] **Nếu ai đó công bố ý tưởng tương tự tuần sau, paper của tôi còn giá trị gì?** (Kiểm tra độ "dày" của đóng góp.)

## Thẩm định novelty: quy trình "search 3 tầng"

1. **Tầng từ khóa:** Google Scholar, Semantic Scholar, arXiv với 5–10 cách diễn đạt khác nhau của ý tưởng (kể cả thuật ngữ ở mảng khác).
2. **Tầng trích dẫn:** Lấy 3 paper gần nhất → xem *ai trích dẫn chúng* (Cited by) trong 12 tháng qua. Đây là nơi hay tìm thấy "người đã làm rồi".
3. **Tầng người:** Hỏi một người trong lĩnh vực (advisor, bạn ở lab khác): "Bạn có biết ai đã làm X chưa?" 10 phút hỏi có thể tiết kiệm 3 tháng.

!!! info "Concurrent work"
    Nếu một paper tương tự xuất hiện trên arXiv *trong vòng vài tháng* trước deadline, cộng đồng CV thường coi là **concurrent work**. Chính sách của CVPR/ICCV/ECCV thường nêu rằng tác giả không bắt buộc so sánh với các paper công bố rất gần deadline (thường là trong vòng khoảng 2 tháng; kiểm tra quy định năm đó) — nhưng bạn **nên** trích dẫn và nói rõ khác biệt.

## Pilot experiment: kiểm tra tín hiệu nhanh

Trước khi viết nhiều, chạy thí nghiệm **nhỏ, nhanh, rẻ** để kiểm tra giả thuyết cốt lõi:

- Dùng dataset con / độ phân giải thấp / ít epoch.
- So với **1 baseline mạnh** được chạy *trong cùng điều kiện*.
- Mục tiêu không phải SOTA, mà: *"Insight của tôi có tạo ra khác biệt đo được không?"*
- Đặt **tiêu chí dừng trước**: "Nếu sau 3 tuần không thấy cải thiện ≥ X trong thiết lập nhỏ, tôi sẽ đổi hướng."
