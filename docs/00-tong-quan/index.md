# 0. Tổng quan: hiểu luật chơi trước khi chơi

Rất nhiều paper đầu tay thất bại không phải vì ý tưởng kém, mà vì nhóm tác giả không hiểu ai sẽ đọc paper, đọc trong hoàn cảnh nào, và chấm theo tiêu chí gì. Các hội nghị A\* vận hành theo những luật chơi khá chặt: deadline cố định tính theo múi giờ AoE, giới hạn số trang nghiêm ngặt, yêu cầu ẩn danh, những mục bắt buộc như Limitations hay checklist, các form review với thang điểm riêng, và các cơ chế phản hồi reviewer rất khác nhau giữa các cộng đồng. Người viết không nắm những luật này có thể bị loại trước cả khi có reviewer đọc paper, hoặc có thể dồn công sức vào những thứ không ai chấm điểm trong khi bỏ quên những thứ quyết định kết quả.

Chương này được đặt ở đầu giáo trình vì mọi lời khuyên về kỹ thuật viết ở các chương sau đều bắt nguồn từ những thực tế được mô tả ở đây. Lời khuyên "đầu tư gấp đôi cho Figure 1" chỉ có ý nghĩa khi đã biết reviewer hình thành ấn tượng đầu tiên từ đâu; lời khuyên "viết mục Limitations cẩn thận" chỉ có trọng lượng khi đã biết rằng ở các hội nghị NLP, thiếu mục này có thể dẫn tới desk reject. Hiểu luật chơi trước giúp người học nhìn các chương sau như một hệ thống có lý do, chứ không phải một danh sách quy tắc rời rạc.

Nội dung của chương đi từ rộng tới hẹp. Bài đầu tiên vẽ bản đồ tổng thể: "A\*" nghĩa là gì, vì sao ngành khoa học máy tính công bố chủ yếu ở hội nghị, các hội nghị chính của ba cộng đồng nằm ở đâu trên lịch năm. Ba bài tiếp theo lần lượt đi sâu vào hệ sinh thái Computer Vision, NLP và Machine Learning. Bài thứ năm mô tả quy trình review chung cho cả ba cộng đồng và so sánh các cơ chế phản hồi khác nhau. Bài cuối cùng biến những hiểu biết đó thành một lộ trình cụ thể, tính ngược từ một deadline bất kỳ.

Về cách đọc, mọi người học nên đọc kỹ bài bản đồ hội nghị và bài về quy trình review, vì chúng áp dụng cho mọi nơi nộp. Với ba bài hệ sinh thái, nên đọc kỹ bài về cộng đồng đang nhắm tới và đọc lướt hai bài còn lại: rất nhiều paper ngày nay nằm ở ranh giới giữa các cộng đồng, và reviewer của một hội nghị thường đến từ cả những cộng đồng lân cận. Bài lộ trình nên được đọc sau cùng, khi đã có trong tay một deadline cụ thể để áp dụng.

## Các bài trong chương

- [Bản đồ các hội nghị A\*](ban-do-hoi-nghi.md) — giải thích khái niệm A\*, các thước đo xếp hạng, vị trí của từng hội nghị trên lịch năm, và cách chọn cộng đồng phù hợp cho một công trình.
- [Computer Vision: CVPR, ICCV, ECCV](he-sinh-thai-cv.md) — mô tả ba hội nghị đỉnh của thị giác máy tính, định dạng, quy mô, workshop, và văn hóa coi trọng benchmark, hình ảnh và ablation.
- [NLP: ACL, EMNLP, NAACL](he-sinh-thai-nlp.md) — trình bày gia đình hội nghị của ACL, cơ chế ACL Rolling Review, khái niệm Findings, các mục bắt buộc và văn hóa đánh giá cẩn thận của NLP.
- [ML/DL: NeurIPS, ICML, ICLR](he-sinh-thai-ml.md) — mô tả ba hội nghị trụ cột của Machine Learning, OpenReview và thảo luận nhiều vòng, các tạp chí JMLR và TMLR, cùng văn hóa coi trọng tính tổng quát và độ tin cậy thống kê.
- [Speech: Interspeech, ICASSP](he-sinh-thai-speech.md) — giới thiệu hai hội nghị lớn của cộng đồng xử lý tiếng nói, khuôn khổ paper bốn trang, các hội nghị và tạp chí lân cận, và văn hóa coi trọng WER, EER, đánh giá nghe và khả năng triển khai.
- [IR & Data Mining: SIGIR, KDD, TheWebConf](he-sinh-thai-ir.md) — trình bày các hội nghị hàng đầu về truy hồi thông tin và khai phá dữ liệu, các track, template ACM, metric xếp hạng, kiểm định thống kê và cách chọn giữa SIGIR với ACL/EMNLP cho các công trình RAG.
- [Paper được đánh giá thế nào](review-process.md) — phân tích vai trò của reviewer và Area Chair, vòng đời một submission, cách reviewer thực sự đọc paper, các lý do reject phổ biến và tính ngẫu nhiên của review.
- [Lộ trình thực hiện một paper](lo-trinh.md) — xây dựng kế hoạch tính ngược từ deadline với các mốc kiểm tra, quy tắc 48 giờ, và cách làm việc hiệu quả với đồng tác giả và người hướng dẫn.

!!! info "Về các con số trong chương này"
    Chương 0 chứa nhiều con số: tháng deadline, số trang, tỉ lệ chấp nhận, số lượng submission. Tất cả đều là giá trị điển hình của những năm gần đây, được nêu ra để người học hình dung quy mô và nhịp độ. Chính sách của từng hội nghị có thể thay đổi mỗi năm, vì vậy trước mỗi lần nộp cần đọc Call for Papers và Author Guidelines chính thức của đúng năm đó.
