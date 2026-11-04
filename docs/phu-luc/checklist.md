# Checklist tổng hợp

Checklist này tập hợp những điểm kiểm tra quan trọng nhất của toàn bộ giáo trình, sắp xếp theo các giai đoạn của một paper. Cách dùng hiệu quả nhất là gắn mỗi nhóm với một mốc cụ thể: nhóm A khi chốt ý tưởng và trước khi đầu tư thí nghiệm lớn; nhóm B và C khi có bản thảo đầy đủ đầu tiên, và một lần nữa khoảng một tuần trước hạn nộp; nhóm D trong 48 giờ cuối; nhóm E khi nhận review; nhóm F sau khi bài được chấp nhận. Nhóm G chứa các mục riêng theo cộng đồng và nên được rà cùng với nhóm B, C, D. Mỗi mục chỉ được đánh dấu khi đã thực sự kiểm tra, và với những mục về độ rõ ràng (chẳng hạn "Figure 1 hiểu được trong vài giây"), việc kiểm tra nên do một người không tham gia viết thực hiện, vì tác giả luôn hiểu bài của chính họ. Checklist không thay thế bài giảng: mỗi nhóm có liên kết tới chương tương ứng, nơi giải thích vì sao các mục đó quan trọng. Cuối cùng, vì luật của các hội nghị thay đổi theo năm, nhóm tác giả nên bổ sung vào checklist những yêu cầu mới trong Call for Papers của năm nộp, sao chép checklist vào tài liệu chung của nhóm và phân công người chịu trách nhiệm cho từng nhóm mục.

## A. Ý tưởng và chuẩn bị

Xem [Chương 1. Trước khi viết](../01-truoc-khi-viet/index.md).

- [ ] Bài toán được phát biểu trong một câu, không dùng thuật ngữ riêng của nhóm
- [ ] Insight được phát biểu trong một đến hai câu
- [ ] Đã tìm kiếm theo ba tầng (từ khóa, chuỗi trích dẫn, hỏi người trong ngành) và không thấy công trình trùng
- [ ] Pilot experiment cho thấy tín hiệu đủ để đầu tư tiếp
- [ ] Bảng literature có ít nhất khoảng 30 paper, trong đó 5–10 paper cốt lõi đã đọc kỹ
- [ ] Đã chọn cộng đồng đích và đọc 3–5 paper gần đây cùng chủ đề ở hội nghị đó
- [ ] One-page pitch đã được người hướng dẫn hoặc đồng nghiệp góp ý
- [ ] Bảng claim và thí nghiệm tương ứng đầy đủ, mỗi claim có ít nhất một thí nghiệm

## B. Nội dung

Xem [Chương 2. Viết từng phần](../02-viet-tung-phan/index.md).

- [ ] Title chứa từ khóa của bài toán, ngắn gọn; tên phương pháp chưa bị trùng
- [ ] Abstract nêu đủ vấn đề, khoảng trống, insight, phương pháp và kết quả chính có con số
- [ ] Figure 1 truyền đạt thông điệp chính trong vài giây; caption tự đứng được
- [ ] Introduction có insight rõ; contributions là các claim kiểm chứng được và trỏ tới section
- [ ] Related Work: mỗi đoạn kết thúc bằng khác biệt với paper; có công trình gần nhất và concurrent work
- [ ] Method tách rõ phần có sẵn và phần mới; mỗi thành phần có lý do tồn tại
- [ ] Ký hiệu nhất quán, mọi ký hiệu được định nghĩa trước khi dùng
- [ ] Tên thành phần trong hình trùng với tên trong văn bản
- [ ] Bảng chính có baseline mạnh nhất gần đây, cùng điều kiện, ghi rõ nguồn số liệu
- [ ] Ablation cho mọi thành phần được claim
- [ ] Có ít nhất một thí nghiệm "phòng thủ" (cùng compute, cùng số tham số, cùng dữ liệu)
- [ ] Phần phân tích xác nhận insight, không chỉ lặp lại bảng kết quả
- [ ] Kết quả có error bars hoặc kiểm định thống kê khi khác biệt nhỏ; nói rõ số lần chạy
- [ ] Có ví dụ định tính và failure cases, được chọn một cách trung thực
- [ ] Limitations cụ thể và trung thực
- [ ] Mọi con số trong văn bản khớp với bảng và hình

## C. Hình thức

Xem [Chương 3. Kỹ thuật & văn phong](../03-ky-thuat/index.md).

- [ ] Đúng template của năm nộp, không chỉnh lề, cỡ chữ, khoảng cách
- [ ] Đúng giới hạn trang cho phần chính; các mục không tính trang đặt đúng vị trí
- [ ] Chữ trong hình đọc được khi in; màu thân thiện với người mù màu; phương pháp đề xuất cùng một màu ở mọi hình
- [ ] Bảng dùng kiểu booktabs, không kẻ dọc; kết quả tốt nhất được đánh dấu nhất quán
- [ ] Không còn `??`, `[?]`, ghi chú nội bộ hay lệnh comment hiển thị
- [ ] Tài liệu tham khảo sạch: không trùng, có đủ venue và năm, viết hoa đúng
- [ ] Đã kiểm tra chính tả và ngữ pháp; công cụ AI (nếu dùng) tuân thủ chính sách của hội nghị

## D. Nộp bài

Xem [Chương 4. Nộp & sau khi nộp](../04-nop-va-sau-nop/index.md).

- [ ] Profile OpenReview (hoặc hệ thống tương ứng) của mọi tác giả đã đầy đủ; conflict of interest khai báo đủ
- [ ] Abstract registration đúng hạn, ở những nơi có yêu cầu
- [ ] Ẩn danh: PDF, metadata của file, self-citation ở ngôi thứ ba, link code và project page ẩn danh
- [ ] Không có acknowledgments trong bản nộp
- [ ] Không dual submission: đã kiểm tra chồng lấn với mọi nơi bài đang được review
- [ ] Supplementary đúng định dạng, dung lượng và hạn nộp
- [ ] Các form bắt buộc đã điền: checklist, đề cử reviewer, khai báo chính sách LLM, ethics
- [ ] Bản đầu tiên được tải lên ít nhất 48 giờ trước hạn; đã tải về và kiểm tra lại

## E. Rebuttal và author response

Xem [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md).

- [ ] Có bảng phân loại mọi ý kiến của reviewer
- [ ] Ưu tiên mối lo được nhiều reviewer chia sẻ và mối lo có thể thay đổi điểm
- [ ] Có bằng chứng mới (bảng nhỏ, con số) cho các điểm chính
- [ ] Gắn nhãn reviewer; giọng văn lịch sự; cam kết cụ thể (nêu section, nội dung)
- [ ] Đúng giới hạn trang hoặc ký tự; không dùng link ngoài khi bị cấm; giữ ẩn danh
- [ ] Với thảo luận nhiều vòng: phản hồi chính được đăng sớm, câu hỏi tiếp theo được trả lời kịp thời
- [ ] Với ARR: có đoạn tóm tắt dành cho meta-reviewer

## F. Camera-ready

Xem [Camera-ready, poster, code](../04-nop-va-sau-nop/camera-ready.md).

- [ ] Dùng template bản cuối; thêm tác giả và acknowledgments
- [ ] Mọi cam kết trong rebuttal hoặc thảo luận đã được thực hiện
- [ ] Trang bổ sung (nếu được cho thêm) dùng cho những nội dung reviewer yêu cầu
- [ ] Form bản quyền và đăng ký hội nghị hoàn tất
- [ ] Code, README, checkpoint và project page sẵn sàng
- [ ] Poster, video, slide (nếu trình bày oral hoặc spotlight)
- [ ] Bản arXiv được cập nhật theo bản cuối

## G. Các mục riêng theo cộng đồng

Những mục dưới đây bổ sung cho các nhóm B, C và D. Chi tiết xem ở [Chương 6. Đặc thù từng cộng đồng](../06-cong-dong/index.md).

### Machine Learning (NeurIPS, ICML, ICLR)

- [ ] NeurIPS Paper Checklist điền đầy đủ; mỗi câu trả lời có lời giải thích trỏ tới section cụ thể; câu trả lời [No] có lý do chính đáng
- [ ] Mọi giả định được phát biểu tường minh; chứng minh đầy đủ nằm trong appendix và được trỏ tới từ phần chính
- [ ] Error bars được chú thích rõ (độ lệch chuẩn, sai số chuẩn hay khoảng tin cậy), kèm số seed và nguồn ngẫu nhiên
- [ ] Tài nguyên tính toán được báo cáo (loại phần cứng, thời gian, tổng compute)
- [ ] Appendix có mục lục; mỗi phần được trỏ tới từ phần chính; phần chính tự đủ cho claim chính
- [ ] Các statement theo yêu cầu của năm nộp: impact statement (ICML), ethics và reproducibility statement (ICLR)
- [ ] Với Datasets & Benchmarks track: datasheet, license, nơi lưu trữ truy cập được cho reviewer, metadata theo yêu cầu
- [ ] Với ICLR: bản PDF sửa trong thảo luận có đánh dấu thay đổi và giữ đúng giới hạn trang

### NLP (ACL, EMNLP, NAACL qua ARR)

- [ ] Có mục Limitations sau phần kết luận, cụ thể, không chứa nội dung khác
- [ ] Responsible NLP Checklist đã điền, câu trả lời trỏ tới section
- [ ] Ethics statement khi nghiên cứu có rủi ro hoặc liên quan tới dữ liệu nhạy cảm
- [ ] Gọi tên mọi ngôn ngữ được nghiên cứu, kể cả tiếng Anh; claim tương xứng với phạm vi ngôn ngữ
- [ ] Dữ liệu: nguồn, license, xử lý thông tin định danh, thống kê các tập chia
- [ ] Human evaluation: số người chấm, hướng dẫn đầy đủ trong appendix, mức trả công, chỉ số đồng thuận, kiểm định thống kê
- [ ] Đánh giá LLM: bàn về contamination, thử nhiều prompt, báo cáo tham số giải mã và phiên bản mô hình
- [ ] Chọn đúng loại đóng góp và độ dài (long hoặc short)
- [ ] Khi nộp lại: có liên kết bài nộp trước và revision notes trả lời từng điểm

### Computer Vision (CVPR, ICCV, ECCV)

- [ ] Supplementary đúng định dạng và hạn của năm nộp; nội dung được tham chiếu rõ từ bài chính
- [ ] Bài chính không phụ thuộc vào supplementary cho claim chính
- [ ] Video (nếu có) ẩn danh hoàn toàn: không logo, tên phòng thí nghiệm, thông tin định danh trong hình, tiếng hay metadata
- [ ] Hình định tính được chọn trung thực, có cả failure cases
- [ ] Project page hoặc link code trong bài nộp được ẩn danh
- [ ] Rebuttal đúng template và giới hạn của năm (điển hình là một trang PDF)
- [ ] Với ECCV: đúng định dạng LNCS một cột, bố trí lại hình và bảng nếu chuyển từ template hai cột
