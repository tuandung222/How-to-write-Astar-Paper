# NeurIPS / ICML / ICLR

## Tổng quan (số liệu điển hình, kiểm tra năm cụ thể)

| | **NeurIPS** | **ICML** | **ICLR** |
|---|---|---|---|
| Deadline | ~tháng 5 | ~cuối tháng 1 | ~cuối tháng 9 – đầu tháng 10 |
| Diễn ra | tháng 12 | tháng 7 | tháng 4–5 |
| Nội dung chính | ~9 trang | ~8 trang (thêm 1 trang khi camera-ready) | ~9–10 trang |
| Appendix | Không giới hạn, cùng PDF/sau refs | Không giới hạn | Không giới hạn |
| Hệ thống | OpenReview | OpenReview | OpenReview (**review công khai** ngay trong lúc review) |
| Discussion | Rebuttal + thảo luận tác giả–reviewer | Rebuttal + thảo luận | Thảo luận nhiều tuần, **được sửa PDF** trong discussion |
| Checklist | NeurIPS Paper Checklist (bắt buộc) | Có các tuyên bố bắt buộc (ví dụ impact statement) | Reproducibility/ethics statement (khuyến khích) |
| Track đặc biệt | **Datasets & Benchmarks** | Position papers (một số năm) | — |

## Khác biệt về "khẩu vị" so với CV

1. **Tính tổng quát quan trọng hơn SOTA trên một benchmark.** Reviewer ML hỏi: *"Insight này có đúng ngoài vision không? Tại sao nó hoạt động?"* Một paper CV thuần ("+1.5 mIoU trên ADE20K") dễ bị đánh giá *"incremental, more suitable for CVPR"*.
2. **Lý thuyết / phân tích** được đánh giá cao: một định lý đơn giản, một phân tích toy problem, một bound… giúp nhiều. Nhưng lý thuyết phải **liên quan** đến phương pháp, không trang trí.
3. **Thí nghiệm có kiểm soát** (synthetic data, toy setting) để cô lập hiện tượng — điều mà CV ít làm hơn.
4. **Error bars, nhiều seed, kiểm định** được kỳ vọng nhiều hơn.
5. **Related work** thường rộng hơn, bao gồm cả lý thuyết.
6. **Ít figure qualitative** hơn; nhiều plot hơn.

## Viết lại một paper CV cho NeurIPS: cái gì cần thay đổi?

| Thành phần | Phiên bản CVPR | Phiên bản NeurIPS |
|---|---|---|
| Framing | "Phương pháp tốt hơn cho task X" | "Hiện tượng/nguyên lý Y, minh họa trên X (và Z)" |
| Intro | Ứng dụng, benchmark | Câu hỏi khoa học, tính tổng quát |
| Method | Kiến trúc chi tiết | Công thức hóa tổng quát + phân tích |
| Experiments | Benchmark chuẩn + ablation | + Toy/synthetic experiments, + domain thứ hai nếu có thể, error bars |
| Appendix | Supp riêng | Appendix dài trong cùng PDF, chứng minh, chi tiết |

## Rebuttal & discussion kiểu ML

- **Discussion nhiều vòng**: bạn có thể trả lời, reviewer hỏi lại. Kiên nhẫn, trả lời **từng reviewer riêng** (thường có giới hạn ký tự mỗi phản hồi), cộng một "general response" cho các điểm chung.
- **ICLR cho phép sửa PDF** trong discussion: đánh dấu thay đổi bằng màu và nêu rõ trong comment.
- Review và (thường) thảo luận của paper accept được **công khai** (ICLR công khai cả paper reject nếu tác giả không rút). Viết với ý thức rằng ai cũng đọc được.
- Reviewer ML thường **điều chỉnh điểm sau discussion** nhiều hơn CV — discussion hiệu quả rất có giá trị.

## NeurIPS Paper Checklist

NeurIPS yêu cầu trả lời checklist (claims, limitations, theory assumptions, reproducibility, open access to data/code, experimental details, statistical significance, compute resources, ethics, broader impacts, safeguards, licenses, new assets, human subjects, LLM usage…). Thiếu hoặc trả lời qua loa có thể bị desk reject. **Chuẩn bị checklist từ khi viết draft**, vì nó buộc bạn bổ sung những thứ reviewer cũng sẽ hỏi.
