# Hệ sinh thái Machine Learning: NeurIPS, ICML, ICLR

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - phân biệt ba hội nghị trụ cột NeurIPS, ICML, ICLR về lịch, giới hạn trang, quy mô và những đặc điểm riêng;
    - hiểu cách OpenReview và cơ chế thảo luận nhiều vòng vận hành, và vì sao ICLR khác hai hội nghị còn lại;
    - nắm vai trò của appendix, NeurIPS Paper Checklist và track Datasets & Benchmarks;
    - biết các hội nghị và tạp chí lân cận (AISTATS, UAI, COLT, JMLR, TMLR) và khi nào nên cân nhắc chúng;
    - nhận diện những kỳ vọng văn hóa của reviewer ML: tính tổng quát, phân tích hoặc lý thuyết, thí nghiệm có kiểm soát, error bars và khả năng tái tạo.

Machine Learning là cộng đồng phương pháp của trí tuệ nhân tạo. Nếu một paper CV hỏi "làm sao giải bài toán thị giác này tốt hơn", và một paper NLP hỏi "mô hình hiểu ngôn ngữ đến đâu", thì một paper ML thường hỏi "nguyên lý nào khiến việc học hoạt động, và nó áp dụng được rộng tới mức nào". Nhiều ý tưởng nền tảng của cả CV lẫn NLP, từ kiến trúc Transformer tới các thuật toán tối ưu và mô hình khuếch tán, được công bố lần đầu tại các hội nghị ML. Vì vậy, các hội nghị ML có ảnh hưởng vượt ra ngoài cộng đồng của chính chúng.

Ba hội nghị trụ cột của ML có nhiều điểm chung: cùng dùng OpenReview, cùng có cơ chế thảo luận giữa tác giả và reviewer, cùng cho phép appendix không giới hạn. Nhưng chúng cũng có những khác biệt quan trọng, đặc biệt là mức độ công khai của quá trình review ở ICLR. Bài này lần lượt trình bày từng hội nghị, các cơ chế chung, các hội nghị và tạp chí lân cận, và cuối cùng là văn hóa của cộng đồng.

## Ba hội nghị trụ cột

### NeurIPS

NeurIPS (Conference on Neural Information Processing Systems) là hội nghị lớn nhất và lâu đời nhất trong ba hội nghị, diễn ra vào tháng 12 với deadline vào khoảng tháng 5. Thường có một hạn đăng ký abstract khoảng một tuần trước hạn nộp bài đầy đủ, và hạn nộp supplementary có thể muộn hơn một chút. Phần nội dung chính điển hình được giới hạn trong khoảng chín trang, và bản camera-ready được thêm một trang; tài liệu tham khảo, appendix và checklist không tính vào giới hạn này.

Hai đặc điểm của NeurIPS cần được biết trước. Thứ nhất, **NeurIPS Paper Checklist** là bắt buộc: paper thiếu checklist có thể bị desk reject. Checklist gồm các câu hỏi về việc các claim trong Abstract và Introduction có khớp với kết quả không, về các giới hạn của công trình, về giả định và chứng minh của các kết quả lý thuyết, về khả năng tái tạo thí nghiệm, về việc công bố dữ liệu và mã nguồn, về chi tiết thiết lập thí nghiệm, về ý nghĩa thống kê, về tài nguyên tính toán, về tuân thủ quy tắc đạo đức, về tác động xã hội, về giấy phép của các tài nguyên được sử dụng, và về nghiên cứu có sự tham gia của con người. Mỗi câu trả lời cần kèm một lời giải thích ngắn hoặc chỉ tới mục tương ứng trong paper, và reviewer được khuyến khích đọc checklist như một phần của việc đánh giá. Thứ hai, NeurIPS có một **track Datasets & Benchmarks** riêng từ khoảng năm 2021, sẽ được trình bày ở phần sau.

Về quy mô, NeurIPS những năm gần đây nhận từ mười lăm nghìn tới hơn hai mươi nghìn submission ở track chính (NeurIPS 2025 có khoảng 21.500), và con số này vẫn tăng nhanh. Tỉ lệ chấp nhận điển hình vào khoảng 25%. Paper được chấp nhận được trình bày dưới dạng poster, một phần nhỏ được chọn làm spotlight hoặc oral. Những năm gần đây, review của các paper được chấp nhận thường được công khai trên OpenReview sau khi có quyết định.

### ICML

ICML (International Conference on Machine Learning) diễn ra vào tháng 7, với deadline vào khoảng cuối tháng 1. Phần nội dung chính điển hình được giới hạn trong khoảng tám trang, bản camera-ready được thêm một trang, và tài liệu tham khảo cùng appendix không tính vào giới hạn. Những năm gần đây, ICML yêu cầu một mục tuyên bố về tác động (impact statement) ở cuối paper, không tính vào giới hạn trang. Một số năm ICML cũng mở thêm các track đặc biệt, chẳng hạn track dành cho position paper.

ICML có văn hóa gần với NeurIPS, nhưng thường được cảm nhận là có thiên hướng phương pháp và lý thuyết rõ hơn một chút. Tỉ lệ chấp nhận điển hình vào khoảng 26–28%, với số submission tăng mạnh trong những năm gần đây. Vị trí của ICML trên lịch năm khiến nó trở thành nơi nộp tự nhiên cho các paper vừa hoàn thành vào mùa đông, và cũng là nơi nộp lại cho các paper không thành công ở ICLR hoặc NeurIPS năm trước.

### ICLR

ICLR (International Conference on Learning Representations) trẻ hơn hai hội nghị kia nhưng nhanh chóng trở thành một trong những hội nghị có ảnh hưởng nhất của ngành. ICLR diễn ra vào khoảng tháng 4 hoặc tháng 5, với deadline vào khoảng cuối tháng 9 hoặc đầu tháng 10 năm trước. Giới hạn trang của ICLR điển hình vào khoảng chín đến mười trang cho phần nội dung chính và thay đổi tùy năm: ICLR 2025 cho phép mười trang ngay ở bản nộp, còn ICLR 2026 giới hạn chín trang ở bản nộp và nới lên mười trang trong giai đoạn thảo luận và ở bản camera-ready. Tỉ lệ chấp nhận điển hình cao hơn hai hội nghị kia một chút, vào khoảng 30–32%.

Điểm làm nên bản sắc của ICLR là **tính công khai** của quá trình review. Ngay khi deadline qua, các submission được hiển thị công khai trên OpenReview, dưới dạng ẩn danh. Khi review được đăng, chúng cũng công khai, và toàn bộ cuộc thảo luận giữa tác giả và reviewer diễn ra trước mắt cộng đồng; tùy chính sách từng năm, người ngoài có tài khoản cũng có thể để lại bình luận công khai. Trong giai đoạn thảo luận, nhóm tác giả được phép **cập nhật file PDF**, bổ sung thí nghiệm, sửa lỗi và làm rõ những điểm reviewer chưa hiểu. Kể cả khi paper bị từ chối, submission và review thường vẫn hiển thị công khai; theo chính sách những năm gần đây, paper bị rút cũng có thể vẫn hiển thị.

Tính công khai này có hai mặt. Mặt tích cực là nó tạo áp lực để reviewer viết review cẩn thận hơn, và cho phép tác giả cải thiện paper ngay trong quá trình review. Mặt cần cân nhắc là mọi điểm yếu của paper, kể cả những điểm sẽ được sửa ở lần nộp sau, đều được lưu lại công khai. Nhóm tác giả nên nộp ICLR khi paper đã ở trạng thái tốt, không nên dùng ICLR như một vòng thử nghiệm để "lấy review".

| | NeurIPS | ICML | ICLR |
|---|---|---|---|
| Deadline điển hình | Tháng 5 | Cuối tháng 1 | Cuối tháng 9 hoặc đầu tháng 10 (năm trước) |
| Diễn ra điển hình | Tháng 12 | Tháng 7 | Tháng 4 hoặc 5 |
| Nội dung chính điển hình | Khoảng 9 trang, thêm 1 khi camera-ready | Khoảng 8 trang, thêm 1 khi camera-ready | Khoảng 9–10 trang tùy năm |
| Appendix | Không giới hạn | Không giới hạn | Không giới hạn |
| Mục bắt buộc đặc thù | NeurIPS Paper Checklist | Impact statement (những năm gần đây) | Thường khuyến khích ethics và reproducibility statement |
| Mức công khai khi review | Kín; review của paper được nhận thường công khai sau đó | Kín | Công khai submission, review và thảo luận |
| Tỉ lệ chấp nhận điển hình | Khoảng 25% | Khoảng 26–28% | Khoảng 30–32% |

## OpenReview và cơ chế thảo luận

Cả ba hội nghị đều dùng OpenReview, một nền tảng mở cho phép tác giả, reviewer, Area Chair và Program Chair tương tác trên cùng một trang của mỗi submission. Khác với mô hình rebuttal một lần của CV, các hội nghị ML tổ chức một *giai đoạn thảo luận* kéo dài thường từ một tới vài tuần. Trong giai đoạn này, nhóm tác giả đăng phản hồi cho từng review, reviewer có thể hỏi tiếp, tác giả trả lời tiếp, và cuộc trao đổi có thể kéo dài nhiều lượt. Sau đó là giai đoạn thảo luận kín giữa reviewer và Area Chair, trước khi Area Chair viết meta-review và đưa ra khuyến nghị.

Cơ chế này thay đổi cách người viết nên chuẩn bị. Một phần đáng kể của quyết định được hình thành trong lúc thảo luận: một reviewer cho điểm thấp vì hiểu nhầm có thể nâng điểm sau khi được giải thích rõ, và một reviewer cho điểm cao có thể hạ điểm nếu câu hỏi của họ không được trả lời thỏa đáng. Vì vậy, nhóm tác giả nên dự trù thời gian và tài nguyên tính toán cho giai đoạn thảo luận ngay từ khi lập kế hoạch, giống như dự trù cho chính deadline. Các quy định cụ thể, như giới hạn số ký tự của mỗi phản hồi, việc có được kèm một trang PDF chứa hình và bảng mới hay không, hay việc có được sửa paper hay không, khác nhau giữa các hội nghị và giữa các năm. Bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md) ở Chương 4 hướng dẫn chi tiết cách viết phản hồi.

## Trang chính và appendix

Ở các hội nghị ML, appendix không bị giới hạn độ dài và thường được đặt ngay sau tài liệu tham khảo trong cùng file PDF, hoặc nộp thành file supplementary riêng tùy quy định. Không hiếm các paper ML có phần nội dung chính chín trang nhưng appendix dài hơn hai mươi trang, chứa chứng minh đầy đủ của các định lý, chi tiết thí nghiệm, kết quả bổ sung và phân tích mở rộng.

Điều quan trọng cần hiểu là reviewer *không bắt buộc* phải đọc appendix. Một paper đặt toàn bộ bằng chứng quan trọng vào appendix, trong khi phần chính chỉ chứa các khẳng định, sẽ bị đánh giá là thiếu thuyết phục. Nguyên tắc chung là phần chính phải tự đứng được: chứa phát biểu của mọi định lý quan trọng kèm trực giác về chứng minh, chứa các thí nghiệm hỗ trợ trực tiếp các claim chính, và chỉ chuyển vào appendix những gì là chi tiết bổ sung. Mỗi khi paper nhắc tới appendix, nên chỉ rõ mục cụ thể để reviewer có thể kiểm tra nhanh nếu muốn.

## Track Datasets & Benchmarks

NeurIPS có một track riêng dành cho các đóng góp về dữ liệu và benchmark, thành lập từ khoảng năm 2021. Track này ra đời từ nhận thức rằng các bộ dữ liệu và benchmark tốt là hạ tầng của cả lĩnh vực, nhưng chúng thường bị đánh giá thấp ở track chính, nơi reviewer chủ yếu tìm kiếm phương pháp mới.

Tiêu chí đánh giá ở track này khác với track chính. Reviewer quan tâm tới tính hữu ích của dữ liệu hay benchmark đối với cộng đồng, chất lượng và quy trình thu thập, tài liệu mô tả đầy đủ (ví dụ theo kiểu datasheet), khả năng truy cập lâu dài, giấy phép sử dụng rõ ràng, và các vấn đề đạo đức. Quy định về ẩn danh ở track này có thể khác track chính tùy năm, vì việc công bố dữ liệu đôi khi khó tách khỏi danh tính tác giả. Với các nhóm đã xây dựng một bộ dữ liệu có giá trị, kể cả dữ liệu cho một ngôn ngữ hay một miền ứng dụng cụ thể, đây là một lựa chọn đáng cân nhắc bên cạnh các hội nghị CV và NLP.

## Hội nghị và tạp chí lân cận

Bên cạnh ba hội nghị trụ cột, cộng đồng ML có một số nơi công bố chuyên sâu được đánh giá rất cao trong các nhánh tương ứng. AISTATS (International Conference on Artificial Intelligence and Statistics) nằm ở giao thoa giữa thống kê và học máy, thường có deadline vào khoảng tháng 10 và diễn ra vào mùa xuân. UAI (Conference on Uncertainty in Artificial Intelligence) tập trung vào suy luận trong điều kiện bất định và mô hình xác suất, thường có deadline vào khoảng tháng 2 và diễn ra vào mùa hè. COLT (Conference on Learning Theory) là nơi công bố hàng đầu của lý thuyết học, cũng thường có deadline vào khoảng tháng 2. Các hội nghị này có quy mô nhỏ hơn, reviewer chuyên sâu hơn, và phù hợp với những công trình có đóng góp chủ yếu về thống kê hoặc lý thuyết.

Về tạp chí, JMLR (Journal of Machine Learning Research) là tạp chí truy cập mở lâu đời và uy tín của ngành, không giới hạn độ dài, phù hợp với các công trình dài và hoàn chỉnh. TMLR (Transactions on Machine Learning Research), ra đời từ khoảng năm 2022, là một tạp chí nhận bài cuốn chiếu (rolling) trên OpenReview, với thời gian review nhắm tới chỉ vài tháng. Điểm đặc biệt của TMLR nằm ở tiêu chí đánh giá: thay vì hỏi paper có "significant" hay "novel" đủ mức không, TMLR chủ yếu hỏi các claim có đúng và được chứng minh bằng bằng chứng thuyết phục không, và công trình có đáng quan tâm với ít nhất một bộ phận người đọc không. Tiêu chí này khiến TMLR trở thành nơi phù hợp cho những công trình vững chắc nhưng có phạm vi khiêm tốn, các kết quả âm tính có giá trị, hay các nghiên cứu tái tạo. TMLR còn có các chứng nhận (certification) dành cho những bài nổi bật. Một số hội nghị ML gần đây cũng thử nghiệm các kênh để paper đã được chấp nhận ở tạp chí như TMLR hay JMLR được trình bày tại hội nghị.

## Workshop tại NeurIPS và ICML

NeurIPS và ICML đi kèm hàng chục workshop mỗi năm, phủ những chủ đề từ rất hẹp tới rất thời sự. Phần lớn workshop ML là *non-archival*, nghĩa là paper được trình bày nhưng không được coi là công bố chính thức, nên thường không cản trở việc nộp phiên bản đầy đủ tới một hội nghị chính sau đó. Workshop paper thường ngắn, khoảng bốn tới tám trang, và deadline thường vào khoảng một tới ba tháng trước hội nghị.

Workshop có giá trị đặc biệt với người mới: đó là nơi trình bày ý tưởng giai đoạn sớm, nhận phản hồi từ những người làm cùng chủ đề, và làm quen với cộng đồng. Tuy nhiên, mỗi workshop có chính sách riêng, và một số workshop có kỷ yếu archival, nên cần đọc kỹ thông báo trước khi nộp nếu dự định phát triển công trình thành paper hội nghị chính.

## Văn hóa của cộng đồng Machine Learning

Khi một paper từ CV hoặc NLP được nộp sang NeurIPS, ICML hay ICLR, những nhận xét thường gặp nhất không nhắm vào chất lượng kết quả mà vào *loại* đóng góp: "the contribution is incremental", "the insight is specific to this task", "it is unclear why the method works". Những nhận xét này phản ánh năm kỳ vọng văn hóa dưới đây.

### Tính tổng quát

Reviewer ML đánh giá cao những ý tưởng có thể áp dụng vượt ra ngoài một bài toán hay một tập dữ liệu cụ thể. Một phương pháp cải thiện một benchmark phân đoạn ảnh sẽ được hỏi: nguyên lý đằng sau nó có đúng với các miền khác không, với văn bản, với dữ liệu dạng bảng, với học tăng cường không. Paper không nhất thiết phải thử trên mọi miền, nhưng nên làm rõ phần nào của đóng góp là tổng quát và cung cấp bằng chứng trên ít nhất vài bối cảnh khác nhau. Paper [Adam (ICLR 2015)](../05-case-studies/adam.md) là một ví dụ điển hình: một thuật toán tối ưu được kiểm chứng trên nhiều loại mô hình và dữ liệu.

### Lý thuyết và phân tích

Cộng đồng ML có truyền thống lý thuyết mạnh, và một kết quả lý thuyết phù hợp có thể nâng đáng kể giá trị của một paper thực nghiệm: một định lý về sự hội tụ, một bound về sai số, hay một phân tích trên mô hình đơn giản giải thích vì sao phương pháp hoạt động. Tuy nhiên, lý thuyết phải liên quan trực tiếp tới phương pháp và claim của paper. Một định lý được thêm vào chỉ để "trang trí", với các giả định quá mạnh hoặc không liên quan tới thiết lập thực nghiệm, thường bị reviewer phát hiện và đánh giá tiêu cực. Khi không có lý thuyết, một phân tích thực nghiệm cẩn thận về cơ chế hoạt động của phương pháp cũng có giá trị tương tự.

### Thí nghiệm có kiểm soát

Bên cạnh các benchmark lớn, paper ML thường dùng các thí nghiệm có kiểm soát trên dữ liệu tổng hợp hoặc trên các thiết lập đơn giản (toy setting) để cô lập một hiện tượng. Ý tưởng là thiết kế một tình huống trong đó chỉ một yếu tố thay đổi, để có thể khẳng định chắc chắn rằng yếu tố đó gây ra hiệu ứng quan sát được. Loại thí nghiệm này ít phổ biến hơn trong CV, nhưng ở ML nó thường là bằng chứng thuyết phục nhất cho một claim về cơ chế. Bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) trình bày cách xây dựng các thí nghiệm như vậy.

### Error bars và ý nghĩa thống kê

Reviewer ML kỳ vọng các kết quả được báo cáo kèm độ biến thiên: trung bình và độ lệch chuẩn qua nhiều lần chạy với các seed khác nhau, khoảng tin cậy, hoặc kiểm định thống kê khi so sánh các phương pháp có kết quả gần nhau. Một cải thiện nhỏ hơn độ biến thiên giữa các lần chạy không phải là một cải thiện có ý nghĩa, và reviewer ML thường chỉ ra điều này. NeurIPS Paper Checklist có hẳn một câu hỏi về ý nghĩa thống kê, cho thấy mức độ coi trọng của cộng đồng đối với vấn đề này.

### Khả năng tái tạo

Cuối cùng, cộng đồng ML đặc biệt coi trọng khả năng tái tạo (reproducibility): paper phải cung cấp đủ chi tiết để một nhóm khác có thể lặp lại kết quả, bao gồm siêu tham số, quy trình huấn luyện, tài nguyên tính toán, và tốt nhất là mã nguồn. Nhiều hội nghị ML khuyến khích nộp mã nguồn ẩn danh kèm submission, và reviewer thường đánh giá cao những paper làm được điều này. Paper [DDPM (NeurIPS 2020)](../05-case-studies/ddpm.md) và [Transformer (NeurIPS 2017)](../05-case-studies/transformer.md) được phân tích ở Chương 5 đều được công bố kèm mã nguồn, giúp cộng đồng nhanh chóng tái tạo và xây dựng tiếp trên kết quả của chúng.

!!! tip "Câu hỏi tự kiểm tra trước khi nộp một paper ML"
    Có ba câu hỏi mà reviewer ML gần như chắc chắn sẽ đặt ra, và paper nên trả lời sẵn: *Why does it work?* (cơ chế hay lý do phương pháp hoạt động là gì), *When does it fail?* (giới hạn của phương pháp nằm ở đâu), và *Does it generalize?* (bằng chứng nào cho thấy kết quả không chỉ đúng trên một thiết lập cụ thể).

Bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md) ở Chương 6 trình bày chi tiết cách điều chỉnh câu chuyện, cấu trúc và thí nghiệm của một paper để phù hợp với khẩu vị của cộng đồng ML.

## Tóm tắt

NeurIPS (tháng 5 đến tháng 12), ICML (cuối tháng 1 đến tháng 7) và ICLR (cuối tháng 9 hoặc đầu tháng 10 đến tháng 4 hoặc 5) là ba hội nghị trụ cột của Machine Learning, cùng dùng OpenReview với cơ chế thảo luận nhiều vòng và appendix không giới hạn. NeurIPS có Paper Checklist bắt buộc và track Datasets & Benchmarks; ICML có giới hạn khoảng tám trang và yêu cầu impact statement; ICLR nổi bật với quá trình review công khai và khả năng sửa PDF trong lúc thảo luận. Các hội nghị AISTATS, UAI, COLT và các tạp chí JMLR, TMLR là những lựa chọn quan trọng cho công trình chuyên sâu hoặc cần hình thức khác; riêng TMLR đánh giá chủ yếu theo tính đúng đắn và mức độ chứng minh của claim. Về văn hóa, reviewer ML kỳ vọng tính tổng quát, phân tích hoặc lý thuyết liên quan, thí nghiệm có kiểm soát, error bars và khả năng tái tạo.

## Bài tập

1. Đọc NeurIPS Paper Checklist của năm gần nhất và thử điền cho dự án hiện tại. Đánh dấu những câu mà câu trả lời trung thực sẽ là "No" hoặc "Partial", và lập kế hoạch khắc phục trước deadline.
2. Chọn một paper ICLR gần đây trong mảng nghiên cứu đang theo đuổi, đọc toàn bộ review và thảo luận công khai trên OpenReview. Ghi lại ba câu hỏi của reviewer khiến tác giả phải bổ sung thí nghiệm, và cách tác giả đã trả lời.
3. Với phương pháp chính của dự án, viết một đoạn trả lời câu hỏi "Why does it work?". Sau đó thiết kế một thí nghiệm có kiểm soát trên dữ liệu tổng hợp hoặc thiết lập đơn giản để kiểm chứng câu trả lời đó.
4. Kiểm tra bảng kết quả chính hiện có: những kết quả nào chưa có error bars, và những cải thiện nào nhỏ hơn độ biến thiên giữa các seed? Ước lượng tài nguyên tính toán cần thiết để chạy thêm seed cho các kết quả đó.
