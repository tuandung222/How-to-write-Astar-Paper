# 6. Đặc thù từng cộng đồng

Năm chương đầu của giáo trình trình bày những kỹ năng mà mọi paper hội nghị A\* đều cần: thẩm định ý tưởng, xây câu chuyện, viết từng phần sao cho reviewer nắm được thông điệp, thiết kế thí nghiệm công bằng, nộp bài đúng luật và phản hồi review một cách thuyết phục. Có thể ước lượng rằng khoảng 90% những kỹ năng đó dùng được ở bất kỳ đâu: một lập luận rõ ràng, một claim có bằng chứng, một bảng kết quả trung thực thì được đánh giá cao ở CVPR cũng như ở ACL hay NeurIPS. Tuy vậy, 10% còn lại lại thường là phần quyết định số phận của một bài nộp ở vùng ranh giới accept/reject. Đó là "khẩu vị" của từng cộng đồng: họ coi loại đóng góp nào là đáng giá, họ tin vào loại bằng chứng nào, và họ quen đặt những câu hỏi gì khi đọc một bài báo.

Cùng một kết quả nghiên cứu có thể được đón nhận rất khác nhau tùy nơi nộp. Một phương pháp tăng 1,5 điểm mIoU trên ADE20K, kèm hình phân đoạn đẹp và ablation đầy đủ, là một bài CVPR đáng tin cậy; nhưng nếu nộp nguyên trạng sang NeurIPS, nó dễ nhận lời nhận xét *"incremental, more suitable for CVPR"*. Ngược lại, một bài phân tích lý thuyết tinh tế với thí nghiệm trên dữ liệu tổng hợp có thể được reviewer ML khen ngợi nhưng bị reviewer CV đánh giá là "thiếu kiểm chứng trên benchmark thực tế". Khác biệt này không nằm ở chất lượng nghiên cứu mà ở chỗ người viết có trình bày đóng góp bằng ngôn ngữ mà cộng đồng đích coi trọng hay không.

Chương này được đặt sau các chương kỹ năng chung vì hai lý do. Thứ nhất, người học cần nắm vững phần chung trước khi tinh chỉnh phần riêng; điều chỉnh khẩu vị cho một bài viết còn lỏng lẻo về lập luận là việc vô ích. Thứ hai, cơ chế vận hành và định dạng của từng hệ sinh thái (số trang, hệ thống review, lịch nộp, các loại track) đã được giới thiệu ở Chương 0, trong các bài [Computer Vision](../00-tong-quan/he-sinh-thai-cv.md), [NLP](../00-tong-quan/he-sinh-thai-nlp.md) và [ML/DL](../00-tong-quan/he-sinh-thai-ml.md). Chương 6 không lặp lại các thông tin đó mà tập trung vào câu hỏi *viết thế nào* cho từng cộng đồng; khi cần đến một chi tiết về format, bài học sẽ tóm tắt ngắn và dẫn về Chương 0.

## Mỗi cộng đồng coi trọng điều gì

Trước khi đi vào từng bài, chúng ta cần một bức tranh so sánh. Cách hữu ích nhất để hình dung khẩu vị của một cộng đồng là hỏi: *khi đọc xong paper, reviewer muốn được thuyết phục về điều gì?*

Với **Computer Vision**, câu hỏi trung tâm thường là "phương pháp này có thực sự tốt hơn trên những bài toán và benchmark mà cộng đồng quan tâm không, và có thể *nhìn thấy* sự khác biệt không?". Do đó bảng kết quả trên benchmark chuẩn, so sánh với baseline mạnh nhất gần đây, ablation cho từng thành phần và hình định tính (qualitative) đóng vai trò trung tâm. Một paper CV tốt thường có Figure 1 truyền đạt ý tưởng chỉ trong vài giây.

Với **NLP**, câu hỏi trung tâm dịch chuyển sang "kết luận này có đứng vững không?". Reviewer NLP thường hoài nghi với một con số đơn lẻ: họ muốn thấy nhiều tập dữ liệu, kiểm định thống kê, phân tích lỗi bằng ví dụ cụ thể, đánh giá có con người tham gia với giao thức rõ ràng, và một phần Limitations nghiêm túc. Cộng đồng này cũng đặc biệt quan tâm tới tính đa ngôn ngữ, ngôn ngữ ít tài nguyên và đạo đức dữ liệu.

Với **Machine Learning**, câu hỏi trung tâm là "điều gì ở đây đúng một cách tổng quát, và tại sao nó đúng?". Reviewer ML có thể làm về tối ưu hóa, học tăng cường, lý thuyết học hay mô hình ngôn ngữ lớn; họ không nhất thiết quan tâm tới một benchmark thị giác cụ thể. Điều họ đánh giá cao là một nguyên lý, một hiện tượng được giải thích, một kết quả lý thuyết có liên quan, những thí nghiệm có kiểm soát cô lập được cơ chế, và kết quả được báo cáo kèm error bars qua nhiều lần chạy.

Bảng dưới đây tổng hợp lại các ý trên, bổ sung thêm hai nhóm hội nghị thường được cân nhắc khi nộp lại.

| Cộng đồng | Hội nghị tiêu biểu | Reviewer muốn được thuyết phục về | Bằng chứng được coi trọng | Lời phê bình hay gặp | Văn bản bắt buộc đặc thù |
|---|---|---|---|---|---|
| **Computer Vision** | CVPR, ICCV, ECCV | Phương pháp tốt hơn trên bài toán cộng đồng quan tâm | Benchmark chuẩn, baseline mạnh, ablation, hình định tính, video | "Incremental", "marginal improvement", "missing comparison with X" | Supplementary (PDF, video), rebuttal ngắn dạng PDF |
| **NLP** | ACL, EMNLP, NAACL (qua ARR) | Kết luận đứng vững và có ý nghĩa với ngôn ngữ | Nhiều dataset/ngôn ngữ, kiểm định thống kê, phân tích lỗi, human evaluation | "Limited evaluation", "English only", "unclear data provenance" | Limitations, Responsible NLP Checklist |
| **Machine Learning** | NeurIPS, ICML, ICLR | Nguyên lý tổng quát và hiểu biết về cơ chế | Lý thuyết liên quan, toy experiment, nhiều domain, error bars | "Lack of insight", "more suitable for CVPR/ACL", "unclear novelty over X" | NeurIPS Paper Checklist, các statement về tác động |
| **AI tổng quát** | AAAI, IJCAI | Đóng góp dễ hiểu với người ngoài chuyên ngành hẹp | Trình bày tự đủ, động lực rõ, kết quả thuyết phục | "Hard to follow", "limited significance" | Checklist tái lập (một số năm) |
| **Data mining, Web** | KDD, WWW | Giá trị thực tế ở quy mô lớn | Dữ liệu thực, scale, triển khai, A/B test | "Not scalable", "no real-world validation" | Tùy track (research hoặc applied) |

Khi đọc bảng, nên chú ý cột "lời phê bình hay gặp". Mỗi lời phê bình thực chất là mặt trái của điều cộng đồng coi trọng: CV coi trọng kết quả vượt trội nên phê bình "cải thiện không đáng kể"; NLP coi trọng độ vững của kết luận nên phê bình "đánh giá hạn chế"; ML coi trọng hiểu biết nên phê bình "thiếu insight". Vì vậy, khi tự review bản thảo, người viết có thể đặt câu hỏi ngược: lời phê bình điển hình nhất của cộng đồng đích có áp dụng được cho bản thảo đang viết hay không, và nếu có thì phần nào của paper cần được củng cố.

!!! example "Một kết quả, ba cách kể"
    Giả sử nhóm tác giả đề xuất một kỹ thuật regularization giúp fine-tuning ổn định hơn. Bản CVPR sẽ mở đầu bằng bài toán phân đoạn ảnh khi ít dữ liệu, báo cáo mIoU trên vài benchmark và minh họa bằng hình phân đoạn trước/sau. Bản ACL sẽ mở đầu bằng hiện tượng fine-tuning không ổn định trên các tác vụ phân loại văn bản, báo cáo kết quả trên nhiều tác vụ và nhiều ngôn ngữ, kiểm định ý nghĩa thống kê và phân tích loại lỗi được sửa. Bản NeurIPS sẽ mở đầu bằng câu hỏi vì sao fine-tuning mất ổn định, đưa ra một phân tích trên mô hình tuyến tính cho thấy regularizer kiểm soát đại lượng nào, kiểm chứng bằng toy experiment, rồi mới cho thấy hiệu quả trên cả ảnh lẫn văn bản. Cả ba có thể dùng chung phần lớn thí nghiệm, nhưng câu chuyện, thứ tự trình bày và thí nghiệm bổ sung khác nhau đáng kể.

## Các bài trong chương

- [Viết cho NeurIPS / ICML / ICLR](ml.md): khẩu vị của reviewer ML, cách trình bày định lý và chứng minh, toy experiment, appendix dài, NeurIPS Paper Checklist, thảo luận nhiều vòng trên OpenReview và Datasets & Benchmarks track.
- [Viết cho ACL / EMNLP / NAACL](nlp.md): khẩu vị của cộng đồng NLP, các loại paper, phần Limitations bắt buộc, Responsible NLP Checklist, human evaluation, đánh giá LLM, cách viết cho meta-reviewer ARR và cơ hội với tài nguyên tiếng Việt.
- [Chuyển một paper giữa các cộng đồng](chuyen-doi.md): khi nào nên chuyển, cần đổi những gì, quy trình chuyển template trong vài ngày và rủi ro dual submission.
- [AAAI / IJCAI / KDD / Journal](khac.md): viết cho reviewer đa dạng ở các hội nghị AI tổng quát, các hội nghị ứng dụng, và cách mở rộng paper hội nghị thành bài journal kèm response letter.
