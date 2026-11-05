# Hệ sinh thái Speech: Interspeech, ICASSP

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - mô tả vai trò của ISCA với Interspeech và của IEEE Signal Processing Society với ICASSP, cùng lịch, định dạng và quy mô điển hình của hai hội nghị;
    - hiểu những ràng buộc của định dạng bốn trang, và của long track tám trang mà Interspeech đưa vào năm 2026, đối với cấu trúc và nội dung một paper;
    - nhận diện các hội nghị và tạp chí lân cận của cộng đồng speech (ASRU, SLT, Odyssey, IEEE/ACM TASLP, Speech Communication) và biết khi nào nên cân nhắc chúng;
    - đặt hai hội nghị speech vào bối cảnh xếp hạng CORE và lập chiến lược khi nhãn A\* là một yêu cầu chính thức;
    - nắm các kỳ vọng văn hóa của reviewer speech: WER, EER, MOS và đánh giá nghe, khả năng triển khai, benchmark chuẩn, demo âm thanh;
    - áp dụng các kỹ thuật viết gọn để dựng một paper bốn trang hoàn chỉnh.

Xử lý tiếng nói (speech processing) là một cộng đồng nghiên cứu lâu đời, có trước làn sóng học sâu hàng chục năm, với gốc rễ ở xử lý tín hiệu, ngữ âm học và nhận dạng mẫu. Ngày nay, các bài toán như nhận dạng tiếng nói (automatic speech recognition, ASR), tổng hợp tiếng nói (text-to-speech, TTS), xác minh người nói (speaker verification), tăng cường tiếng nói (speech enhancement) hay hiểu ngôn ngữ nói (spoken language understanding) dùng chung bộ công cụ với Computer Vision, NLP và Machine Learning: Transformer, tiền huấn luyện tự giám sát, mô hình ngôn ngữ lớn. Dù vậy, cộng đồng speech vẫn giữ những nơi công bố riêng, những chuẩn đánh giá riêng và một định dạng paper khác hẳn ba cộng đồng kia: rất ngắn, thường chỉ bốn trang nội dung.

Bài này được đặt sau ba bài về CV, NLP và ML vì hai lý do. Lý do thứ nhất là thực tiễn: nhiều nhóm nghiên cứu, đặc biệt các nhóm làm việc với tiếng Việt, xây dựng hệ thống tiếng nói, và hai case study [ViP-VL](../05-case-studies/vip-vl.md) và [Streaming ITN](../05-case-studies/streaming-itn.md) ở Chương 5 đều là paper Interspeech. Lý do thứ hai là chiến lược: hai hội nghị lớn nhất của speech không nằm trong nhóm A\* của bảng CORE, nên người học cần hiểu rõ vị trí của chúng trước khi quyết định nơi nộp. Chúng ta lần lượt đi qua Interspeech, ICASSP, các nơi công bố lân cận, vấn đề xếp hạng, văn hóa của cộng đồng, và cuối cùng là kỹ thuật viết một paper bốn trang.

## ISCA và Interspeech

### Một hiệp hội rộng hơn công nghệ tiếng nói

ISCA (International Speech Communication Association) là hiệp hội quốc tế của những người nghiên cứu về giao tiếp bằng tiếng nói. Phạm vi của hiệp hội rộng hơn nhiều so với công nghệ: nó bao gồm ngữ âm học, cảm nhận tiếng nói, sự phát triển ngôn ngữ ở trẻ em, các rối loạn giọng nói, bên cạnh ASR, TTS và xác minh người nói. Interspeech là hội nghị thường niên của ISCA và là nơi toàn bộ phổ rộng này gặp nhau.

Phạm vi rộng ấy có một hệ quả trực tiếp cho người viết. Reviewer của Interspeech đến từ nhiều nhánh khác nhau: một paper về ASR streaming có thể được đọc bởi một người làm acoustic modeling, một người làm hệ thống hội thoại, hoặc một người làm ngữ âm học thực nghiệm. Paper vì thế cần giải thích bối cảnh đủ rõ cho người ngoài nhánh hẹp, thường bằng một ví dụ cụ thể ở đoạn đầu. Case study [Streaming ITN](../05-case-studies/streaming-itn.md) cho thấy cách một ví dụ mười chữ ở câu mở đầu giúp mọi reviewer hiểu bài toán mà không cần định nghĩa hình thức.

### Lịch và quy mô

Deadline của Interspeech thường rơi vào khoảng từ giữa tháng 2 tới tháng 3, và hội nghị diễn ra vào khoảng tháng 8 tới tháng 10. Hai năm gần đây minh họa khá rõ nhịp này: Interspeech 2025 có hạn nộp ngày 12 tháng 2 và diễn ra tại Rotterdam vào giữa tháng 8; Interspeech 2026 có hạn nộp ngày 25 tháng 2 và diễn ra tại Sydney từ cuối tháng 9 sang đầu tháng 10. Một số năm có thêm một hạn cập nhật paper ngắn sau deadline chính, cho phép sửa file PDF trong vài ngày. Review là double-blind, và theo quy định những năm gần đây, mỗi paper được chấp nhận phải có một tác giả trình bày trực tiếp tại hội nghị.

Interspeech nhận vài nghìn submission mỗi năm, ít hơn đáng kể so với CVPR hay NeurIPS. Tỉ lệ chấp nhận của regular paper những năm gần đây thường cao hơn rõ rệt so với các hội nghị A\* của CV và ML; dù vậy, đây không phải là nơi dễ dãi, vì reviewer speech rất chặt về thiết lập thí nghiệm và về các metric chuẩn của từng bài toán. Các con số cụ thể dao động theo năm, nên chỉ nên dùng để hình dung.

### Regular paper bốn trang và long track tám trang

Định dạng là điểm khiến Interspeech khác biệt nhất. Một **regular paper** có tối đa bốn trang nội dung trên template hai cột, bao gồm cả hình và bảng. Phần sau trang thứ tư chỉ được dùng cho tài liệu tham khảo, lời cảm ơn và, theo template năm 2026, mục khai báo việc dùng AI tạo sinh. Số trang bổ sung này thay đổi theo năm: Interspeech 2025 cho thêm một trang dành riêng cho tài liệu tham khảo và lời cảm ơn, còn bộ template của Interspeech 2026 dành hai trang cho các mục đó. Không có appendix dài không giới hạn như ở NeurIPS hay ICLR: mọi bằng chứng mà paper cần phải nằm trong bốn trang.

Năm 2026, Interspeech mở thêm một **long track** dành cho các đóng góp mở rộng, có tác động lớn, với tối đa tám trang nội dung cộng hai trang cho tài liệu tham khảo và lời cảm ơn. Theo thông tin được chia sẻ trong cộng đồng khi track được công bố, ban tổ chức định hướng track này chọn lọc hơn đáng kể so với regular paper; tỉ lệ chấp nhận thực tế của năm đầu tiên cần được tra cứu trong báo cáo chính thức của hội nghị. Bộ template năm 2026 cũng ghi rõ rằng với long paper, phụ lục phải nằm trong tám trang đầu.

Sự xuất hiện của long track đặt ra một câu hỏi mới cho người viết: khi nào nên chọn tám trang thay vì bốn. Câu trả lời không phải là "khi có nhiều kết quả hơn". Phép so sánh hai paper của cùng một nhóm tác giả ở case study [Streaming ITN](../05-case-studies/streaming-itn.md) cho thấy bốn trang bổ sung được dùng tốt nhất cho những loại bằng chứng làm tăng độ tin cậy: khoảng tin cậy, phân tích độ nhạy, kiểm chứng tính tổng quát, độ trễ đuôi và một mục Limitations trung thực. Một paper bốn trang được giãn ra thành tám trang mà không thêm loại bằng chứng mới sẽ dễ bị đánh giá là loãng. Vì long track mới xuất hiện từ năm 2026, việc nó có được duy trì hay không và các quy định cụ thể của nó cần được kiểm tra trong Call for Papers của từng năm.

### Special sessions, Show and Tell và chuyện chọn area

Bên cạnh các phiên thường, mỗi năm Interspeech có một loạt **special session** do các nhóm nghiên cứu đề xuất, xoay quanh một chủ đề hẹp và thời sự: một bài toán mới nổi, một nhóm ngôn ngữ ít tài nguyên, hay một cuộc thi (challenge) do chính ban tổ chức session điều hành. Paper cho special session được nộp qua cùng hệ thống, theo cùng định dạng bốn trang và được bình duyệt như paper thường. Lợi ích của việc nộp vào special session là paper được đọc bởi những reviewer đúng chuyên môn và được trình bày trước đúng nhóm người quan tâm. Điều cần cân nhắc là special session có thể có quy mô nhỏ và tiêu chí riêng do ban tổ chức session đặt ra, nên cần đọc kỹ mô tả của session trước khi chọn. Ngoài ra, Interspeech thường có track **Show and Tell** dành cho các demo hệ thống, cùng các workshop vệ tinh diễn ra quanh hội nghị.

Khi nộp bài, nhóm tác giả chọn một hoặc vài area khoa học từ danh sách của hội nghị, và trong chính paper, ngay sau abstract, có một dòng **Index Terms** gồm vài từ khóa. Hai lựa chọn này đóng vai trò giống subject area ở CVPR: chúng giúp hệ thống phân paper cho đúng reviewer. Từ khóa tốt là những cụm mà một reviewer trong mảng đó sẽ dùng để mô tả công trình, đủ cụ thể để phân biệt nhưng không đến mức chỉ là tên mô hình của paper.

<div class="bad" markdown>

*Index Terms: deep learning, artificial intelligence, ViP-VL, neural networks*

</div>

<div class="good" markdown>

*Index Terms: self-supervised learning, speech recognition, low-resource languages, model efficiency*

</div>

Dòng thứ nhất vừa quá rộng ("deep learning", "artificial intelligence" đúng với gần như mọi paper) vừa quá hẹp (tên mô hình không giúp ai tìm thấy paper). Dòng thứ hai nêu đúng phương pháp, bài toán, bối cảnh dữ liệu và trục đóng góp, nên vừa giúp phân công reviewer vừa giúp người đọc sau này tra cứu.

### ISCA Archive: kho học liệu mở

Toàn bộ paper của Interspeech và của nhiều workshop do ISCA bảo trợ được lưu trữ miễn phí trên ISCA Archive (isca-archive.org), với hàng chục nghìn paper qua nhiều thập kỷ. Mỗi paper có một DOI dạng `10.21437/Interspeech.<năm>-<số>`. Kho này đóng vai trò tương tự CVF Open Access hay ACL Anthology ở các cộng đồng khác, với hai công dụng quen thuộc. Công dụng thứ nhất là học cách viết: người học nên chọn vài paper được trao giải hoặc được trình bày oral trong mảng nghiên cứu đang theo đuổi và quan sát cách chúng phân bổ bốn trang. Công dụng thứ hai là trích dẫn: khi một paper đã được công bố trong kỷ yếu, nên trích dẫn phiên bản có DOI thay vì phiên bản arXiv.

## IEEE ICASSP

### Hội nghị đầu đàn của Signal Processing Society

ICASSP (IEEE International Conference on Acoustics, Speech and Signal Processing) là hội nghị đầu đàn của IEEE Signal Processing Society (SPS). Khác với Interspeech, phạm vi của ICASSP là toàn bộ ngành xử lý tín hiệu: âm thanh và âm học, tiếng nói và ngôn ngữ, ảnh và video, truyền thông, mảng cảm biến, học máy cho xử lý tín hiệu, tín hiệu y sinh. Speech và audio nằm trong số những mảng lớn nhất, nhưng reviewer có thể có nền tảng xử lý tín hiệu cổ điển và thường đánh giá cao một bài toán được phát biểu chặt chẽ bằng toán học, với giả định và ký hiệu rõ ràng. ICASSP nhận nhiều nghìn submission mỗi năm, và kỷ yếu được xuất bản trên IEEE Xplore.

Deadline của ICASSP thường vào khoảng tháng 9, có năm lùi sang tháng 10, và hội nghị diễn ra vào khoảng tháng 4 hoặc tháng 5 năm sau. ICASSP 2026 có hạn nộp ngày 17 tháng 9 năm 2025 và diễn ra tại Barcelona vào đầu tháng 5; ICASSP 2027 có hạn nộp ngày 16 tháng 9 năm 2026. Theo lịch của ICASSP 2026, có một giai đoạn phản hồi của tác giả (author response) ngắn vào khoảng tháng 12, nhưng quy định này cần được kiểm tra lại mỗi năm. Nhờ vị trí trên lịch, ICASSP và Interspeech tạo thành một vòng nộp lại tự nhiên: một paper không thành công ở Interspeech có kết quả vào khoảng tháng 5 hoặc tháng 6, đủ thời gian để sửa và nộp ICASSP vào tháng 9; ngược lại, kết quả ICASSP thường có vào khoảng tháng 12 hoặc tháng 1 (ICASSP 2027 thông báo kết quả giữa tháng 1), vừa kịp cho deadline Interspeech vào tháng 2.

### Định dạng bốn cộng một và kênh tạp chí

Định dạng của ICASSP còn chặt hơn Interspeech một chút. Theo Call for Papers của ICASSP 2027, paper có tối đa bốn trang cho nội dung kỹ thuật, tính cả hình và phần tài liệu tham khảo nằm trong bốn trang đó, cộng một trang thứ năm tùy chọn chỉ được chứa tài liệu tham khảo, lời cảm ơn nguồn tài trợ và một tuyên bố về tuân thủ chuẩn mực đạo đức (Compliance with Ethical Standards). Đặt một hình, một bảng hay một đoạn kết luận lên trang thứ năm là vi phạm định dạng. Template là template IEEE hai cột, với dòng "Index Terms" ngay sau abstract theo phong cách IEEE.

Một điểm đáng chú ý là ICASSP có những kênh kết nối với tạp chí. Call for Papers của ICASSP 2027 có một lựa chọn nộp paper dài hơn, tối đa tám trang nội dung và một trang tài liệu tham khảo, để công bố trên IEEE Open Journal of Signal Processing (OJ-SP) và trình bày tại hội nghị. Những năm gần đây, một số tạp chí khác của SPS cũng có cơ chế cho phép paper đã được chấp nhận được trình bày tại ICASSP. Với công trình cần nhiều không gian hơn bốn trang nhưng vẫn muốn có mặt ở ICASSP, các kênh này đáng được cân nhắc; chi tiết cần được đọc trong Call for Papers của năm nộp.

| | Interspeech | ICASSP |
|---|---|---|
| Tổ chức | ISCA | IEEE Signal Processing Society |
| Phạm vi | Khoa học và công nghệ tiếng nói | Toàn bộ xử lý tín hiệu; speech và audio là mảng lớn |
| Deadline điển hình | Giữa tháng 2 tới tháng 3 | Tháng 9, có năm tháng 10 (năm trước) |
| Diễn ra điển hình | Tháng 8 tới tháng 10 | Tháng 4 hoặc 5 |
| Nội dung chính | 4 trang (regular); 8 trang (long track, từ 2026) | 4 trang |
| Trang bổ sung | Tài liệu tham khảo, lời cảm ơn, khai báo AI tạo sinh (số trang thay đổi theo năm) | Trang thứ 5 tùy chọn, chỉ cho tài liệu tham khảo, lời cảm ơn, tuyên bố đạo đức |
| Kênh mở rộng | Long track | Paper dài trên OJ-SP được trình bày tại hội nghị |
| Kỷ yếu | ISCA Archive, truy cập mở | IEEE Xplore |

!!! warning "Mọi con số trong bài là điển hình"
    Deadline, số trang bổ sung, sự tồn tại của long track hay của giai đoạn author response đều đã thay đổi trong vài năm gần đây và có thể tiếp tục thay đổi. Trước khi lập kế hoạch, cần đọc Call for Papers và Author Guidelines của đúng năm nộp, kể cả múi giờ của deadline.

## Các hội nghị và tạp chí lân cận

Bên cạnh hai hội nghị lớn, cộng đồng speech có một số nơi công bố nhỏ hơn nhưng chuyên sâu, thường được dùng cho những công trình tập trung vào một nhánh hẹp hoặc cho các phiên bản mở rộng.

Hai hội nghị chuyên sâu nhất về nhận dạng và hiểu tiếng nói là **ASRU** (IEEE Automatic Speech Recognition and Understanding Workshop) và **SLT** (IEEE Spoken Language Technology Workshop), cùng được tổ chức dưới sự bảo trợ của IEEE SPS. Dù mang tên "workshop", cả hai đều là hội nghị có bình duyệt đầy đủ và kỷ yếu lưu trữ, với quy mô nhỏ hơn và reviewer chuyên sâu hơn ICASSP. Hai hội nghị thường luân phiên nhau: ASRU vào các năm lẻ, SLT vào các năm chẵn, và thường diễn ra vào khoảng cuối năm. Với nhánh nhận dạng người nói và nhận dạng ngôn ngữ, **Odyssey** (The Speaker and Language Recognition Workshop), gắn với ISCA, là nơi gặp gỡ chuyên biệt, thường hai năm một lần. Nhánh tổng hợp tiếng nói có **Speech Synthesis Workshop** (SSW), cũng gắn với ISCA.

Về tạp chí, **IEEE/ACM Transactions on Audio, Speech, and Language Processing** (TASLP) là tạp chí chính của lĩnh vực, phù hợp với các công trình dài và các phiên bản mở rộng của paper hội nghị. **Speech Communication** và **Computer Speech & Language** là hai tạp chí lâu đời khác, nhận cả công trình về khoa học lẫn công nghệ tiếng nói. IEEE Signal Processing Letters nhận các bài ngắn, gần với độ dài paper ICASSP.

Cuối cùng, cần lưu ý rằng nhiều công trình speech có ảnh hưởng lớn không được công bố ở các nơi kể trên. wav2vec 2.0 được công bố tại NeurIPS 2020, mô hình Whisper tại ICML 2023, còn HuBERT được công bố trên tạp chí TASLP. Ranh giới giữa speech và ML ngày càng mờ, và đây là cơ sở cho một chiến lược sẽ được bàn ở mục tiếp theo.

| Nơi công bố | Loại | Trọng tâm | Khi nào nên cân nhắc |
|---|---|---|---|
| ASRU, SLT | Hội nghị IEEE, luân phiên năm lẻ, năm chẵn | Nhận dạng và hiểu tiếng nói | Công trình ASR hoặc SLU cần reviewer chuyên sâu |
| Odyssey | Hội nghị chuyên đề gắn với ISCA | Nhận dạng người nói và ngôn ngữ | Speaker verification, diarization, language ID |
| SSW | Hội nghị chuyên đề gắn với ISCA | Tổng hợp tiếng nói | TTS, chuyển đổi giọng nói |
| IEEE/ACM TASLP | Tạp chí | Âm thanh, tiếng nói, ngôn ngữ | Công trình dài, bản mở rộng của paper hội nghị |
| Speech Communication, Computer Speech & Language | Tạp chí | Khoa học và công nghệ tiếng nói | Nghiên cứu sâu, đặc biệt về khoa học tiếng nói |

## Hạng CORE và chiến lược khi cần nhãn A\*

Cả Interspeech lẫn ICASSP đều không thuộc nhóm A\* của bảng xếp hạng CORE. Theo cổng ICORE, ICASSP được xếp hạng B trong phiên bản CORE2023; trang của hội nghị trên cổng còn ghi chú rằng mục này được khôi phục vào tháng 1 năm 2025 sau các thảo luận về lĩnh vực nghiên cứu mà hội nghị thuộc về. Hạng của Interspeech cần được tra cứu trực tiếp trên cổng ICORE, với đúng phiên bản mà cơ quan đánh giá áp dụng; cổng ICORE cũng đã công bố đợt xếp hạng ICORE2026, nên cần xác định quy định đang dùng phiên bản nào.

Khoảng cách giữa uy tín trong cộng đồng và nhãn xếp hạng tạo ra một tình huống khó cho nhiều nghiên cứu sinh. Trong cộng đồng speech, một paper Interspeech hay ICASSP tốt được coi trọng tương đương một paper ở hội nghị đỉnh, và phần lớn những người sẽ đọc và dùng công trình đều theo dõi hai hội nghị này. Nhưng nếu hội đồng xét tốt nghiệp chỉ tính paper A\*, một paper Interspeech có thể không được tính. Không có câu trả lời chung cho mọi trường hợp, nhưng có ba hướng đi thường gặp.

Hướng thứ nhất là xác định lại *loại đóng góp*. Nếu đóng góp chính là một phương pháp học tổng quát, chẳng hạn một mục tiêu tiền huấn luyện tự giám sát áp dụng được cho nhiều loại tín hiệu, thì các hội nghị ML như NeurIPS, ICML hay ICLR là nơi phù hợp, như trường hợp wav2vec 2.0. Nếu đóng góp gắn với ngôn ngữ, chẳng hạn hiểu ngôn ngữ nói, dịch tiếng nói hay mô hình ngôn ngữ lớn xử lý cả tiếng nói và văn bản, thì các hội nghị NLP qua ACL Rolling Review là lựa chọn tự nhiên, vì danh sách area của ARR thường có một area dành cho tiếng nói. Hướng thứ hai là con đường tạp chí: một phiên bản mở rộng trên TASLP có thể được tính theo các tiêu chí xếp hạng tạp chí, tùy quy định của từng nơi. Hướng thứ ba là chấp nhận rằng một số công trình thuộc về cộng đồng speech và nên được công bố ở đó, rồi cân đối danh mục công bố bằng những công trình khác.

!!! note "Chuyển một paper speech sang hội nghị ML hoặc NLP không chỉ là đổi template"
    Một paper bốn trang của Interspeech, khi nộp sang NeurIPS hay ACL, phải được viết lại gần như hoàn toàn: câu chuyện cần nhấn mạnh tính tổng quát (ML) hoặc hiểu biết về ngôn ngữ (NLP), thí nghiệm cần mở rộng tương ứng, và các mục bắt buộc như Limitations hay Paper Checklist phải được bổ sung. Bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md) phân tích quá trình này.

## Văn hóa của cộng đồng speech

Nếu reviewer CV mở bảng kết quả chính trước tiên và reviewer NLP hỏi về cách đánh giá trước tiên, thì reviewer speech thường hỏi hai câu cùng lúc: kết quả có được đo bằng đúng metric chuẩn trên đúng tập chuẩn không, và hệ thống có dùng được trong thực tế không. Năm đặc điểm dưới đây phản ánh văn hóa này.

### Paper ngắn, một ý tưởng

Giới hạn bốn trang buộc mỗi paper speech tập trung vào một ý tưởng và một bằng chứng chính. Reviewer quen với điều đó và không kỳ vọng một paper bốn trang trả lời mọi câu hỏi; họ kỳ vọng paper trả lời *thật tốt* đúng một câu hỏi. Ngược lại, một paper cố trình bày ba đóng góp rời rạc trong bốn trang thường bị nhận xét là nông ở cả ba. Khi một dự án có nhiều đóng góp độc lập, nhiều nhóm chọn tách thành nhiều paper ngắn, mỗi paper một câu chuyện, thay vì nhồi tất cả vào một bài.

### Metric chuẩn và đánh giá nghe

Mỗi bài toán speech có một metric mà reviewer coi là ngôn ngữ chung. Với ASR, đó là **WER** (word error rate), tức tổng số lỗi thay thế, xóa và chèn chia cho số từ trong bản chép chuẩn; với các ngôn ngữ không tách từ bằng khoảng trắng, **CER** (character error rate) thường được dùng thay thế. Một chi tiết hay bị bỏ qua là WER phụ thuộc vào cách chuẩn hóa văn bản trước khi so sánh: viết hoa, dấu câu, cách viết số. Hai hệ thống có thể chênh nhau đáng kể chỉ vì chuẩn hóa khác nhau, nên paper cần nói rõ quy tắc chuẩn hóa được dùng. Với xác minh người nói, metric chuẩn là **EER** (equal error rate, điểm mà tỉ lệ chấp nhận sai bằng tỉ lệ từ chối sai) và minDCF. Với tăng cường tiếng nói, các metric khách quan như PESQ hay STOI thường được báo cáo.

Với các bài toán sinh tiếng nói như TTS hay chuyển đổi giọng nói, metric tự động không đủ, và cộng đồng dựa vào **đánh giá nghe** (listening test). Dạng phổ biến nhất là **MOS** (mean opinion score): người nghe chấm điểm mỗi mẫu trên thang 1 đến 5, và điểm trung bình được báo cáo. Ngoài ra có các dạng so sánh như CMOS hay kiểm định ưu tiên (preference test), và MUSHRA cho chất lượng âm thanh. Reviewer speech đọc phần mô tả đánh giá nghe với con mắt rất kỹ: có bao nhiêu người nghe, họ là ai, mỗi người nghe bao nhiêu mẫu, mẫu được chọn thế nào, và điểm có kèm khoảng tin cậy không. Một câu như "MOS was evaluated by 5 listeners" mà không có khoảng tin cậy thường bị coi là bằng chứng yếu. Đây là phiên bản speech của kỳ vọng về human evaluation mà bài [NLP: ACL, EMNLP, NAACL](he-sinh-thai-nlp.md) đã bàn.

### Khả năng triển khai

Công nghệ tiếng nói gắn chặt với sản phẩm: trợ lý ảo, phụ đề trực tiếp, tổng đài tự động, thiết bị đeo. Vì vậy, reviewer speech quan tâm tới khả năng triển khai nhiều hơn reviewer ở phần lớn các cộng đồng khác. Các câu hỏi thường gặp gồm độ trễ (latency), hệ số thời gian thực (real-time factor, RTF), khả năng chạy theo kiểu **streaming** (xử lý âm thanh khi người nói vẫn đang nói, thay vì chờ hết câu), kích thước mô hình và khả năng chạy trên thiết bị. Một phương pháp chính xác hơn nhưng không thể streaming, hoặc chậm gấp nhiều lần, sẽ bị hỏi về giá trị thực tế. Ngược lại, một paper báo cáo cả độ trễ trung bình lẫn độ trễ ở phân vị cao, và dịch con số ấy sang ngôn ngữ của người triển khai, sẽ trả lời trước câu hỏi "có dùng được không?". Case study [Streaming ITN](../05-case-studies/streaming-itn.md) là một ví dụ đầy đủ của kiểu bằng chứng này.

### Benchmark chuẩn và kiểm chứng ngoài ngôn ngữ đích

Cộng đồng speech có một số benchmark đóng vai trò ngôn ngữ chung: LibriSpeech cho ASR tiếng Anh (với hai tập test-clean và test-other), Common Voice cho ASR đa ngôn ngữ, VoxCeleb cho xác minh người nói, LJSpeech cho TTS một giọng, SUPERB cho đánh giá biểu diễn tự giám sát trên nhiều tác vụ. Với một paper về ngôn ngữ ít tài nguyên như tiếng Việt, những benchmark này có thêm một vai trò quan trọng: chúng cho phép reviewer quốc tế, những người không có cách nào tự đánh giá kết quả trên dữ liệu tiếng Việt, tin vào phương pháp. Bài học trung tâm của case study [ViP-VL](../05-case-studies/vip-vl.md) chính là điều này: kiểm chứng phương pháp trên một benchmark chung, trong điều kiện cố định dữ liệu, trước khi trình bày kết quả trên ngôn ngữ đích.

### Demo âm thanh

Với các bài toán mà đầu ra là âm thanh, một trang demo chứa các mẫu nghe được thường thuyết phục hơn mọi bảng số. Nhiều paper TTS, chuyển đổi giọng nói hay tăng cường tiếng nói kèm một đường dẫn tới trang demo, nơi reviewer nghe trực tiếp đầu ra của phương pháp và của các baseline trên cùng một câu. Trong giai đoạn review, trang demo phải được ẩn danh: không chứa tên nhóm, tên cơ quan, hay đường dẫn tới tài khoản cá nhân. Giống như hình kết quả định tính ở CV, các mẫu nên được chọn công bằng, có cả những trường hợp khó, vì reviewer speech rất nhạy với việc chỉ trình bày những mẫu tốt nhất.

## Viết một paper bốn trang

Bốn trang hai cột chỉ bằng khoảng một nửa một paper CVPR hay ACL long paper. Trong khuôn khổ ấy, sai lầm phổ biến nhất không phải là thiếu kết quả mà là để phần khung chiếm chỗ của nội dung: một mục Related Work dài nửa trang chỉ liệt kê công trình, một đoạn giới thiệu lặp lại abstract, những bảng có nhiều cột trống. Các kỹ thuật dưới đây giúp cắt phần khung mà không cắt nội dung khoa học. Chúng được minh họa trong hai case study Interspeech ở Chương 5, nên ở đây chỉ trình bày nguyên tắc.

### Lập ngân sách trang trước khi viết

Trước khi viết câu đầu tiên, nên phân bổ bốn trang cho các phần. Một phân bổ tham khảo cho paper phương pháp là khoảng một trang cho Introduction (đã gộp định vị so với công trình trước), khoảng một trang cho phương pháp, khoảng một trang rưỡi đến gần hai trang cho thí nghiệm, và phần còn lại cho kết luận. Con số chính xác tùy loại paper, nhưng việc có một ngân sách giúp nhóm tác giả phát hiện sớm khi một phần đang phình ra, thay vì phát hiện vào đêm trước deadline rằng paper dài năm trang rưỡi.

### Gộp Related Work vào Introduction

Paper bốn trang hiếm khi có mục Related Work riêng. Thay vào đó, Introduction được chia bằng các tiêu đề đoạn in đậm đặt đầu dòng (run-in heading), mỗi đoạn tổng quan một hướng tiếp cận và kết thúc bằng một khoảng trống mà paper sẽ lấp. Kỹ thuật này tiết kiệm chỗ, và quan trọng hơn, nó buộc mỗi câu tổng quan phải phục vụ lập luận của Introduction thay vì chỉ liệt kê. Những so sánh chi tiết với công trình gần nhất được đặt ngay trong mục phương pháp, đúng chỗ người đọc cần phân biệt, bằng những câu như "In contrast to X, we …". Trong LaTeX, một run-in heading đơn giản có thể được viết như sau:

```latex
\noindent\textbf{Self-supervised speech models.}
Contrastive approaches such as wav2vec~2.0~\cite{baevski2020wav2vec} and
predictive approaches such as HuBERT~\cite{hsu2021hubert} ... However, ...

\noindent\textbf{Contributions.}
We show that ... Building on this finding, we (i) ..., (ii) ..., (iii) ...
```

Đoạn *Contributions* ở cuối nên phát biểu insight trước rồi mới tới thiết kế, và đánh dấu từng claim bằng (i), (ii), (iii) để người đọc lướt vẫn thấy các claim riêng biệt dù không có danh sách gạch đầu dòng.

### Bảng nén và quy ước nói một lần

Trong bốn trang, mỗi bảng phải gánh nhiều việc. Một bảng được thiết kế tốt có thể vừa là bảng so sánh chính vừa là bảng ablation, nếu các cấu hình được đặt tên theo một lược đồ có nghĩa và được nhóm theo hàng. Các quy ước trình bày, chẳng hạn in đậm là kết quả tốt nhất, gạch chân là tốt thứ hai, dấu sao là mô hình dùng thêm dữ liệu ngoài, chỉ cần nói một lần ở caption của bảng đầu tiên kèm câu "This convention applies to all subsequent tables". Tương tự, cấu hình huấn luyện dùng chung cho nhiều tác vụ được mô tả một lần, và các tác vụ sau chỉ ghi phần khác biệt. Những quy ước nhỏ này, cộng lại, thường tiết kiệm được vài chục dòng. Bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md) bàn thêm về cách thiết kế bảng gọn.

### Mỗi claim một con số, mỗi từ một lý do

Vì không có chỗ cho phụ lục, mọi claim thực nghiệm phải được nối trực tiếp với một con số hoặc một bảng ngay trong văn bản. Một câu như "Empirical observations indicate that variant A performs better" không trỏ tới đâu cả là một chỗ hở mà reviewer sẽ chỉ ra; thêm một cụm ngắn trong ngoặc, như "(WER X vs. Y on test-other)" với các con số thật của dự án, thường đủ để vá. Cũng vì mỗi dòng đều quý, các tính từ không mang thông tin như "novel", "rigorously" hay "significantly" khi không có kiểm định thống kê nên được thay bằng nội dung cụ thể. Bài [Experiments](../02-viet-tung-phan/experiments.md) phân tích cách dùng ngôn từ khớp với bằng chứng.

!!! tip "Không cứu một paper dài bằng cách sửa template"
    Thu nhỏ lề, giảm cỡ chữ, chèn `\vspace` âm quanh hình hay ép bảng xuống cỡ chữ quá nhỏ để vừa bốn trang là những cách dễ bị phát hiện và có thể dẫn tới desk reject. Khi paper dài hơn giới hạn, cách sửa bền vững là cắt nội dung theo ngân sách trang: bỏ một thí nghiệm phụ, gộp hai hình, viết lại một đoạn dài thành một câu.

### Hai case study như hai mẫu đối chiếu

Hai case study Interspeech ở Chương 5 nên được đọc như hai mẫu đối chiếu cho bài này. [ViP-VL](../05-case-studies/vip-vl.md) cho thấy cách một regular paper bốn trang dựng ba khoảng trống trong Introduction, gộp định vị vào các đoạn có tiêu đề, dùng một khuôn trình bày lặp lại cho bốn tác vụ, và đặt thí nghiệm kiểm chứng trên benchmark chung lên trước kết quả trên ngôn ngữ đích; case study cũng chỉ ra rằng đưa insight lên abstract là cải tiến rẻ nhất cho một paper ngắn. [Streaming ITN](../05-case-studies/streaming-itn.md) cho thấy một paper long track dùng bốn trang bổ sung vào đâu: khoảng tin cậy cho mọi so sánh, phân tích độ nhạy của siêu tham số mới, kiểm chứng trên ngôn ngữ và backbone khác, độ trễ đuôi và một mục Limitations cụ thể. Đặt hai bài cạnh nhau, người học có một danh sách rõ ràng về những gì có thể hy sinh khi phải viết bốn trang, và những gì nên bổ sung trước tiên khi có thêm chỗ.

## Tóm tắt

Cộng đồng speech có hai hội nghị lớn. Interspeech của ISCA có deadline vào khoảng tháng 2 hoặc tháng 3 và diễn ra vào khoảng tháng 8 tới tháng 10, với regular paper bốn trang nội dung, các trang sau chỉ dành cho tài liệu tham khảo, lời cảm ơn và khai báo AI tạo sinh, và từ năm 2026 thêm long track tám trang; paper được lưu trữ miễn phí trên ISCA Archive. ICASSP của IEEE Signal Processing Society có deadline vào khoảng tháng 9 hoặc tháng 10 và diễn ra vào khoảng tháng 4 hoặc tháng 5, với bốn trang nội dung và một trang thứ năm chỉ cho tài liệu tham khảo. Bên cạnh đó là ASRU, SLT, Odyssey và các tạp chí như TASLP, Speech Communication. Cả hai hội nghị đều không thuộc nhóm A\* của CORE, nên khi nhãn A\* là yêu cầu chính thức, nhóm tác giả cần cân nhắc định vị lại đóng góp cho cộng đồng ML hoặc NLP, hoặc con đường tạp chí. Về văn hóa, reviewer speech kỳ vọng một ý tưởng rõ ràng, metric chuẩn như WER, EER, MOS với đánh giá nghe được mô tả kỹ, bằng chứng về khả năng triển khai, kết quả trên benchmark chuẩn và demo âm thanh khi đầu ra là tiếng nói. Viết tốt trong bốn trang nghĩa là cắt phần khung chứ không cắt nội dung: lập ngân sách trang, gộp Related Work vào Introduction, nén bảng, nói quy ước một lần và nối mọi claim với một con số.

## Bài tập

1. Tìm Call for Papers mới nhất của Interspeech và ICASSP. Ghi lại deadline, giới hạn trang nội dung, những gì được phép đặt ở các trang bổ sung, và việc có hay không giai đoạn author response. Với dự án hiện tại, hội nghị nào có deadline phù hợp hơn, và hội nghị còn lại có thể là phương án nộp lại không?
2. Lập ngân sách bốn trang cho dự án hiện tại: phân bổ số dòng cho Introduction, phương pháp, thí nghiệm và kết luận. Sau đó liệt kê mọi bảng và hình dự định đưa vào và ước lượng diện tích của chúng. Ngân sách có khả thi không, và nếu không thì thí nghiệm nào nên bị cắt trước?
3. Viết lại phần tổng quan tài liệu của dự án thành hai hoặc ba đoạn có run-in heading, mỗi đoạn kết thúc bằng một câu khoảng trống, rồi viết đoạn *Contributions* với insight đứng trước và các claim được đánh dấu (i), (ii), (iii).
4. Nếu dự án có một thành phần sinh tiếng nói hoặc một yêu cầu thời gian thực, thiết kế phần đánh giá tương ứng: một listening test (số người nghe, số mẫu, cách chọn mẫu, cách tính khoảng tin cậy) hoặc một phép đo độ trễ (trung bình, phân vị cao, điều kiện phần cứng). Nếu nhãn A\* là yêu cầu bắt buộc, viết thêm một đoạn lập luận xem dự án nên được định vị lại cho cộng đồng ML hay NLP, và những bằng chứng nào cần bổ sung khi đó.
