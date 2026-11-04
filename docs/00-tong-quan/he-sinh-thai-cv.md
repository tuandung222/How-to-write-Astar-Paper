# Hệ sinh thái Computer Vision: CVPR, ICCV, ECCV

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - phân biệt ba hội nghị đỉnh CVPR, ICCV, ECCV về tần suất, lịch, định dạng và quy mô;
    - hiểu những hệ quả thực tế của định dạng hai cột tám trang (CVPR, ICCV) và định dạng LNCS (ECCV) đối với việc viết và chuyển đổi paper;
    - nắm cách phân loại paper sau khi được chấp nhận (poster, highlight, oral) và các vấn đề về workshop và nộp trùng;
    - chọn subject area chính xác và khai thác kho CVF Open Access để học cách viết;
    - nhận diện những yếu tố văn hóa mà reviewer CV kỳ vọng: benchmark, hình ảnh, ablation, supplementary và video.

Computer Vision là cộng đồng có quy mô công bố lớn nhất trong ba cộng đồng được bàn tới trong giáo trình. Mỗi năm, hàng chục nghìn paper được nộp tới ba hội nghị đỉnh của lĩnh vực, và số lượng này vẫn tiếp tục tăng. Quy mô ấy tạo ra những đặc điểm riêng: reviewer phải xử lý nhiều paper trong thời gian ngắn, ấn tượng ban đầu từ hình ảnh và bảng kết quả có sức nặng đặc biệt, và các quy định hình thức được áp dụng rất nghiêm.

Bài này mô tả hệ sinh thái CV từ góc nhìn của người viết. Chúng ta bắt đầu với ba hội nghị và nhịp hai năm của chúng, đi qua định dạng, quy mô và cách phân loại paper, bàn về workshop và chính sách nộp trùng, rồi kết thúc bằng phần quan trọng nhất: văn hóa của cộng đồng, tức là những gì reviewer CV thực sự tìm kiếm khi mở một paper.

## Ba hội nghị đỉnh và nhịp hai năm

CVPR (IEEE/CVF Conference on Computer Vision and Pattern Recognition) diễn ra hằng năm, thường vào tháng 6, với deadline vào khoảng đầu đến giữa tháng 11 năm trước. ICCV (IEEE/CVF International Conference on Computer Vision) chỉ diễn ra vào các năm lẻ, còn ECCV (European Conference on Computer Vision, do hiệp hội ECVA tổ chức) chỉ diễn ra vào các năm chẵn; cả hai đều có deadline vào khoảng đầu tháng 3 và diễn ra vào khoảng tháng 9 hoặc tháng 10. Nhờ sự luân phiên này, mỗi năm cộng đồng CV luôn có đúng hai hội nghị đỉnh: CVPR vào mùa hè và một trong hai hội nghị ICCV hoặc ECCV vào mùa thu.

Về uy tín, ba hội nghị được coi là gần như ngang hàng. Trong cộng đồng, ICCV và ECCV đôi khi được nhìn nhận là chọn lọc tương đương hoặc nhỉnh hơn CVPR một chút do quy mô nhỏ hơn, còn CVPR có ảnh hưởng trích dẫn lớn nhất do số lượng paper. Với các hội đồng đánh giá dùng nhãn A\*, cả ba thường được đối xử như nhau, dù người học vẫn nên tra cứu phiên bản CORE mà cơ quan mình áp dụng.

| | CVPR | ICCV | ECCV |
|---|---|---|---|
| Tổ chức | IEEE và CVF | IEEE và CVF | ECVA |
| Tần suất | Hằng năm | Năm lẻ | Năm chẵn |
| Deadline điển hình | Đầu đến giữa tháng 11 (năm trước) | Đầu tháng 3 | Đầu tháng 3 |
| Diễn ra điển hình | Tháng 6 | Tháng 10 | Tháng 9 hoặc 10 |
| Template | CVPR LaTeX, hai cột | Tương tự CVPR | Springer LNCS, một cột |
| Giới hạn trang điển hình | 8 trang, không tính references | 8 trang, không tính references | Khoảng 14 trang, không tính references |
| Hệ thống nộp (những năm gần đây) | OpenReview | OpenReview | OpenReview |
| Số submission gần đây | Hơn 10.000 | Khoảng 8.000 đến hơn 11.000 | Khoảng 8.000 đến 9.000 |
| Tỉ lệ chấp nhận gần đây | Khoảng 22–26% | Khoảng 24–27% | Khoảng 25–28% |

Bảng trên cần được đọc với sự thận trọng: các con số là điển hình của những năm gần đây, được làm tròn, và có thể thay đổi đáng kể. Trước khi nộp, cần kiểm tra trang chính thức của từng hội nghị trong năm đó.

## Định dạng: CVPR và ECCV khác nhau thế nào

CVPR và ICCV dùng chung một kiểu template LaTeX hai cột, giới hạn tám trang cho phần nội dung, không tính danh sách tài liệu tham khảo. Giới hạn này được áp dụng nghiêm: paper vượt quá số trang, hoặc thay đổi lề, cỡ chữ, khoảng cách dòng của template để nhồi thêm nội dung, có thể bị desk reject, tức là bị loại mà không qua review. ECCV dùng template Springer LNCS một cột, với giới hạn khoảng mười bốn trang không tính references.

Hai định dạng này chứa một lượng chữ tương đương nhau, nhưng cách bố trí hình và bảng khác hẳn. Ở định dạng hai cột, một hình có thể chiếm một cột hoặc trải rộng cả hai cột; bảng kết quả lớn thường trải hai cột ở đầu trang. Ở định dạng LNCS một cột, dòng chữ dài hơn, hình nhỏ dễ bị lạc giữa trang, và các bảng rộng phải được thiết kế lại. Vì vậy, việc chuyển một paper từ CVPR sang ECCV hoặc ngược lại không chỉ là đổi template: gần như toàn bộ hình và bảng phải được bố trí lại, một số hình phải vẽ lại theo tỉ lệ khác, và văn bản phải được cắt hoặc giãn cho khớp. Với một paper đã hoàn chỉnh, công việc này thường mất vài ngày làm việc tập trung, và cần được tính vào kế hoạch khi dự định nộp lại từ CVPR sang ECCV.

Cả ba hội nghị đều cho phép nộp tài liệu bổ sung (supplementary material), thường gồm một file PDF và có thể kèm video hoặc mã nguồn, trong một giới hạn dung lượng. Ở một số năm, hạn nộp supplementary muộn hơn hạn nộp paper khoảng một tuần. Điều cần nhớ là reviewer *không bắt buộc* phải đọc supplementary: paper chính phải tự đứng được, và supplementary chỉ nên chứa chi tiết bổ sung, kết quả mở rộng, và những minh họa không vừa trong giới hạn trang.

## Hệ thống nộp và quy mô

Những năm gần đây, cả ba hội nghị đều chuyển sang dùng OpenReview, thay cho hệ thống CMT trước đây. Với CV, việc dùng OpenReview không có nghĩa là review được công khai như ở ICLR: review và thảo luận vẫn được giữ kín giữa tác giả, reviewer và Area Chair. Một thay đổi đáng chú ý là mọi tác giả thường phải có hồ sơ OpenReview đầy đủ, khai báo cơ quan công tác và các xung đột lợi ích (conflict of interest), trước một mốc nhất định; hồ sơ thiếu có thể khiến paper không hợp lệ.

Quy trình nộp ở CV thường có một bước đăng ký paper (paper registration) khoảng một tuần trước deadline, trong đó nhóm tác giả khai báo title, abstract, danh sách tác giả và subject area. Ở nhiều năm, danh sách tác giả bị khóa sau một mốc nhất định, nên mọi đồng tác giả cần được thống nhất trước bước đăng ký.

Với hơn mười nghìn submission mỗi năm ở CVPR, hệ thống review cần hàng nghìn reviewer, và phần lớn trong số đó là nghiên cứu sinh và postdoc. Để đáp ứng nhu cầu này, những năm gần đây các hội nghị CV đã đưa ra nghĩa vụ review đối với tác giả: những tác giả đủ điều kiện phải tham gia review, và một reviewer vô trách nhiệm có thể khiến chính paper của mình bị ảnh hưởng, thậm chí bị desk reject theo chính sách của một số năm. Một số năm còn đặt giới hạn số paper mà một người được đứng tên. Các chính sách này thay đổi nhanh, nên cần được kiểm tra trong Author Guidelines của năm nộp.

## Poster, highlight và oral

Sau khi được chấp nhận, mọi paper ở hội nghị CV đều được trình bày dưới dạng poster. Một phần nhỏ trong số đó được chọn làm *highlight*, thường vào khoảng một phần mười số paper được chấp nhận tùy năm, và một phần còn nhỏ hơn nữa được chọn trình bày *oral*, thường chỉ vài phần trăm số paper được chấp nhận, tức là chưa tới một phần trăm số submission. Một số paper oral tiếp tục được đề cử giải thưởng.

Với mục đích đánh giá theo nhãn A\*, một paper poster và một paper oral đều là paper được chấp nhận ở hội nghị chính. Tuy nhiên, trong cộng đồng, oral và giải thưởng là tín hiệu mạnh về chất lượng, và danh sách oral của mỗi năm là một nguồn học liệu tuyệt vời, như sẽ thấy ở phần về CVF Open Access.

## Workshop và vấn đề nộp trùng

Mỗi hội nghị CV đi kèm hàng chục, có năm tới hơn một trăm workshop, diễn ra trong một hai ngày trước hoặc sau hội nghị chính. Workshop tập trung vào các chủ đề hẹp, có quy trình review nhẹ hơn và tỉ lệ chấp nhận cao hơn. Deadline của workshop thường nằm sau thông báo kết quả của hội nghị chính; với CVPR, phần lớn deadline workshop rơi vào khoảng tháng 3. Workshop paper là nơi tốt để trình bày ý tưởng sớm và nhận phản hồi, nhưng nó *không* được tính như một paper ở hội nghị chính.

Điểm cần đặc biệt cẩn thận là mối quan hệ giữa workshop và chính sách nộp trùng (dual submission). Chính sách của CVPR qua nhiều năm coi một paper đã xuất hiện trong kỷ yếu có tính lưu trữ (archival) và dài hơn bốn trang, không tính references, là một công bố trước đó. Hệ quả là nếu một ý tưởng đã được công bố thành một workshop paper archival dài tám trang, nhóm tác giả sẽ khó, thậm chí không thể, nộp một phiên bản mở rộng có nội dung trùng đáng kể tới hội nghị chính sau đó. Để tránh vấn đề này, nhiều workshop có track *non-archival*, trong đó paper được trình bày nhưng không được đưa vào kỷ yếu. Nếu dự định phát triển ý tưởng thành một paper hội nghị chính, nhóm tác giả nên chọn track non-archival hoặc giữ phiên bản workshop trong giới hạn bốn trang. Preprint trên arXiv và các báo cáo kỹ thuật không qua bình duyệt thường không bị coi là công bố trước đó, nhưng chính sách cụ thể cần được đọc lại mỗi năm.

Bên cạnh workshop, nhiều hội nghị CV có các cuộc thi (challenge) đi kèm. Báo cáo kỹ thuật của một đội tham gia challenge có giá trị thực tiễn, nhưng không phải là một paper được bình duyệt theo nghĩa của hội nghị chính.

## Subject areas và việc phân công reviewer

Khi nộp paper, nhóm tác giả phải chọn một hoặc vài subject area từ danh sách của hội nghị. Danh sách này thay đổi theo năm và gồm vài chục mảng, chẳng hạn 3D from multi-view and sensors; Image and video synthesis and generation; Vision, language, and reasoning; Representation learning; Recognition: categorization, detection, retrieval; Low-level vision; Autonomous driving; Medical and biological vision; Efficient and scalable vision; Transparency, fairness, privacy, ethics.

Lựa chọn này quan trọng hơn nhiều so với vẻ ngoài của nó. Subject area là đầu vào chính để hệ thống phân paper cho Area Chair và reviewer, kết hợp với điểm tương đồng tự động giữa paper và hồ sơ công bố của reviewer. Chọn sai subject area có thể dẫn tới việc paper được đọc bởi những reviewer không đúng chuyên môn, và review của những người này thường ngẫu nhiên hơn: họ có thể bỏ qua đóng góp thực sự hoặc đòi hỏi những so sánh không liên quan. Quy tắc đơn giản là chọn subject area mà phần lớn các paper trong Related Work thuộc về, chứ không phải subject area "nghe hấp dẫn nhất".

Một khía cạnh chiến lược khác là độ cạnh tranh của từng mảng. Các mảng "nóng", ví dụ sinh ảnh, mô hình vision-language hay biểu diễn 3D mới, có số lượng submission khổng lồ, tốc độ thay đổi nhanh tới mức một phương pháp có thể bị vượt qua ngay trong lúc đang được review. Các mảng ít người hơn, chẳng hạn một bài toán ứng dụng cụ thể có benchmark tốt, có thể giúp paper dễ tạo khác biệt hơn, với điều kiện nhóm tác giả thuyết phục được reviewer rằng bài toán đó quan trọng.

## CVF Open Access: kho học liệu miễn phí

Toàn bộ paper của CVPR, ICCV, WACV và nhiều workshop đi kèm được công bố miễn phí trên CVF Open Access (openaccess.thecvf.com), thường kèm cả supplementary. Paper của ECCV có trên trang của ECVA (ecva.net) và trong loạt sách Springer LNCS. Đây là kho học liệu quan trọng nhất cho người muốn học cách viết paper CV, vì nó chứa phiên bản cuối cùng của mọi paper được chấp nhận.

Cách dùng kho này hiệu quả nhất là đọc với con mắt của người viết, không phải của người học kỹ thuật. Mỗi năm, người học có thể chọn khoảng mười paper oral hoặc được đề cử giải thưởng trong mảng của mình và ghi chú về *cấu trúc*: Figure 1 truyền tải điều gì, đoạn đóng góp được viết thế nào, bảng kết quả chính so sánh với ai, ablation được tổ chức ra sao. Nên đọc cả supplementary, vì nhiều chi tiết thuyết phục reviewer, như phân tích lỗi, kết quả trên tập dữ liệu phụ hay video minh họa, nằm ở đó. Chương 5 thực hiện kiểu phân tích này cho các paper kinh điển như [ResNet](../05-case-studies/resnet.md) hay [NeRF](../05-case-studies/nerf.md).

## Văn hóa của cộng đồng Computer Vision

Các quy định hình thức chỉ là phần nổi. Điều quyết định một paper CV có được chấp nhận hay không nằm ở chỗ nó có đáp ứng được những kỳ vọng ngầm của reviewer CV hay không. Bốn kỳ vọng dưới đây xuất hiện trong gần như mọi bản review CV.

### Benchmark và bảng kết quả chính

Cộng đồng CV phát triển quanh các benchmark chuẩn như ImageNet, COCO, ADE20K hay các bộ dữ liệu chuyên biệt của từng bài toán. Hệ quả là reviewer CV gần như luôn tìm tới bảng kết quả chính rất sớm khi đọc paper, và câu hỏi đầu tiên của họ thường là: phương pháp được so sánh với những ai, trên benchmark nào, trong điều kiện có công bằng không. Bảng kết quả chính không cần phải thắng mọi phương pháp ở mọi chỉ số, nhưng nó phải bao gồm các baseline mạnh và gần đây, cùng backbone, cùng dữ liệu huấn luyện, và nếu không thắng tuyệt đối thì paper phải chủ động giải thích giá trị của mình nằm ở đâu: tốc độ, bộ nhớ, tính đơn giản, hay khả năng tổng quát.

### Hình ảnh: teaser và kết quả định tính

Thị giác máy tính là lĩnh vực về hình ảnh, và reviewer CV kỳ vọng được *nhìn thấy* kết quả. Figure 1, thường được gọi là teaser, nằm ngay trang đầu và có nhiệm vụ truyền tải ý tưởng chính hoặc kết quả ấn tượng nhất trước khi reviewer đọc tới phần phương pháp. Các hình kết quả định tính, so sánh trực quan đầu ra của phương pháp với các baseline trên cùng một ảnh, là bằng chứng mà một bảng số không thể thay thế, đặc biệt với các bài toán sinh ảnh, tái tạo 3D hay phân đoạn. Reviewer CV cũng nhạy với việc chọn lọc ví dụ: một hình chỉ gồm những trường hợp thành công dễ gây nghi ngờ, trong khi một hình có cả trường hợp thất bại và phân tích nguyên nhân thường tạo được sự tin tưởng. Bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md) và bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md) đi sâu vào kỹ năng này.

### Ablation

Ablation study là các thí nghiệm loại bỏ hoặc thay thế từng thành phần của phương pháp để đo đóng góp của thành phần đó. Ở CV, gần như mọi paper đề xuất một phương pháp gồm nhiều thành phần đều được kỳ vọng có ablation, và câu nhận xét "it is unclear which component contributes to the improvement" là một trong những lý do reject phổ biến nhất. Ablation tốt không chỉ chứng minh mỗi thành phần đều cần thiết mà còn chứng minh *giả thuyết* đằng sau thành phần đó: nếu paper nói một module giúp xử lý vật thể nhỏ, ablation nên cho thấy cải thiện tập trung ở vật thể nhỏ. Bài [Experiments](../02-viet-tung-phan/experiments.md) trình bày cách thiết kế ablation có chủ đích.

### Supplementary và video

Vì giới hạn tám trang hai cột rất chật, supplementary ở CV thường dày và có vai trò đáng kể: chứa chi tiết triển khai, kết quả trên các benchmark phụ, thêm nhiều hình định tính và đôi khi cả video. Với các bài toán có yếu tố thời gian hoặc không gian ba chiều, như video, tái tạo cảnh hay sinh chuyển động, một video minh họa ngắn có thể thuyết phục hơn nhiều trang mô tả. Tuy vậy, cần nhắc lại rằng reviewer không có nghĩa vụ đọc supplementary; mọi bằng chứng quan trọng cho các claim chính phải nằm trong paper. Bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md) bàn về cách phân chia nội dung giữa paper chính và supplementary.

!!! tip "Một bài kiểm tra nhanh trước khi nộp CV"
    Hãy đưa paper cho một người trong ngành, chỉ cho người đó xem trang đầu và bảng kết quả chính trong khoảng năm phút, rồi hỏi: paper đề xuất gì, và kết quả có thuyết phục không. Nếu câu trả lời khác với điều nhóm tác giả muốn truyền tải, thì Figure 1, Abstract hoặc bảng kết quả chính cần được sửa trước bất cứ thứ gì khác.

## Tóm tắt

CVPR diễn ra hằng năm, ICCV và ECCV luân phiên vào năm lẻ và năm chẵn, tạo ra hai cơ hội nộp ở cấp cao nhất mỗi năm. CVPR và ICCV dùng template hai cột tám trang, ECCV dùng LNCS khoảng mười bốn trang, và việc chuyển đổi giữa hai định dạng tốn công đáng kể. Với hơn mười nghìn submission mỗi năm, tỉ lệ chấp nhận khoảng 22–28%, nghĩa vụ review đối với tác giả và các quy định hình thức chặt chẽ là đặc điểm nổi bật của hệ sinh thái này. Workshop là nơi tốt để trình bày ý tưởng sớm nhưng cần cẩn thận với chính sách nộp trùng. Về văn hóa, reviewer CV kỳ vọng bảng benchmark công bằng với baseline mạnh, bằng chứng hình ảnh, ablation có chủ đích và một supplementary hỗ trợ tốt.

## Bài tập

1. Vào CVF Open Access, chọn năm paper oral gần đây trong mảng nghiên cứu đang theo đuổi. Với mỗi paper, ghi lại trong một câu Figure 1 truyền tải điều gì, và bảng kết quả chính so sánh với bao nhiêu phương pháp trên bao nhiêu benchmark.
2. Với dự án hiện tại, xác định subject area chính và phụ phù hợp nhất trong danh sách của CVPR năm gần nhất, và giải thích lựa chọn dựa trên nơi công bố của các tài liệu trong Related Work.
3. Phác thảo trên giấy một Figure 1 cho dự án: hình đó cần cho reviewer thấy điều gì trong năm giây đầu tiên? Sau đó liệt kê các thành phần của phương pháp và thiết kế một bảng ablation, mỗi hàng gắn với một claim cụ thể.
4. Nếu dự án có một phiên bản sớm định nộp workshop, đọc chính sách dual submission của hội nghị chính dự định nộp sau đó và xác định track workshop nào là an toàn.
