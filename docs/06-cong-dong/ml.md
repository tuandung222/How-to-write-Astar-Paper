# Viết cho NeurIPS / ICML / ICLR

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Giải thích reviewer ở NeurIPS, ICML, ICLR coi trọng điều gì và vì sao một paper tốt ở cộng đồng khác vẫn có thể bị đánh giá thấp ở đây.
    - Trình bày định lý, giả định và chứng minh theo cách reviewer ML kỳ vọng, với phần chứng minh đầy đủ đặt trong appendix.
    - Thiết kế toy experiment để cô lập cơ chế và báo cáo kết quả kèm error bars đúng nghĩa.
    - Chuẩn bị NeurIPS Paper Checklist ngay từ khi viết draft và tổ chức một appendix dài dễ tra cứu.
    - Viết phản hồi cho thảo luận nhiều vòng trên OpenReview, kể cả khi review và thảo luận được công khai.

NeurIPS, ICML và ICLR là ba hội nghị trung tâm của cộng đồng Machine Learning. Điểm đặc biệt của chúng không nằm ở định dạng mà ở thành phần người đọc: một paper nộp vào đây có thể được giao cho một reviewer làm về tối ưu hóa, một người làm học tăng cường, một người làm lý thuyết học và một người làm mô hình ngôn ngữ lớn. Những người này không chia sẻ cùng một bộ benchmark, nhưng họ chia sẻ một câu hỏi chung khi đọc: *điều gì trong paper này vẫn đúng khi rời khỏi bài toán cụ thể mà tác giả đã chọn để minh họa?*

Câu hỏi đó chi phối gần như mọi lời khuyên trong bài. Nó giải thích vì sao paper ML thường mở đầu bằng một hiện tượng hay một nguyên lý thay vì một ứng dụng, vì sao lý thuyết và toy experiment được coi trọng, vì sao error bars là yêu cầu gần như mặc định, và vì sao appendix của một paper ML có thể dài gấp nhiều lần phần chính. Các thông tin về cơ chế (số trang, lịch nộp, OpenReview, các loại track) đã được trình bày ở bài [Hệ sinh thái ML/DL](../00-tong-quan/he-sinh-thai-ml.md) của Chương 0; ở đây chúng ta chỉ nhắc lại khi cần cho việc viết.

## Khẩu vị của reviewer ML

### Tổng quát hơn một con số SOTA

Ở CVPR, việc vượt state of the art (SOTA) trên một benchmark được cộng đồng công nhận là bằng chứng mạnh cho giá trị của phương pháp. Ở NeurIPS, ICML hay ICLR, cùng con số đó chỉ là điểm khởi đầu. Reviewer ML sẽ hỏi tiếp: cải thiện này đến từ đâu, nó có còn khi đổi kiến trúc, đổi dữ liệu, đổi domain không, và có nguyên lý nào phía sau mà người khác có thể mang sang bài toán của họ hay không. Một paper chỉ trả lời được câu hỏi "có tốt hơn không" mà không trả lời được "vì sao" và "ở đâu nữa" thường bị xếp vào nhóm *incremental*.

Điều này không có nghĩa paper ML bắt buộc phải thử nghiệm trên mọi domain. Nó có nghĩa là người viết phải *định vị* đóng góp ở mức độ trừu tượng phù hợp và cung cấp bằng chứng tương xứng với mức đó. Nếu tuyên bố một nguyên lý chung, cần ít nhất hai bối cảnh khác nhau về bản chất (ví dụ ảnh và văn bản, hoặc học có giám sát và học tăng cường) hoặc một phân tích cho thấy vì sao nguyên lý không phụ thuộc vào bối cảnh. Nếu chỉ có bằng chứng trên một domain, cách viết trung thực là thu hẹp claim cho tương xứng, và chấp nhận rằng một hội nghị chuyên ngành có thể là nơi phù hợp hơn.

### Hiểu biết là một đóng góp độc lập

Cộng đồng ML chấp nhận, và thường đánh giá cao, những paper không đề xuất phương pháp mới mà giúp hiểu rõ hơn một hiện tượng: vì sao một kỹ thuật phổ biến hoạt động, khi nào nó thất bại, đại lượng nào thực sự quyết định hiệu năng. Với loại paper này, "kết quả" là một mệnh đề về thế giới (ví dụ: "hiện tượng X xuất hiện khi và chỉ khi điều kiện Y thỏa mãn"), và bằng chứng là một chuỗi thí nghiệm được thiết kế để loại trừ các giải thích khác.

Ngay cả với paper đề xuất phương pháp, phần phân tích thường là thứ làm nên khác biệt. Reviewer muốn thấy tác giả hiểu phương pháp của chính họ: thành phần nào làm nên cải thiện, cải thiện thể hiện ở đâu trong quá trình huấn luyện, phương pháp hỏng ở chế độ nào. Một mục "Analysis" có chủ đích, gắn với giả thuyết ban đầu của paper, có sức thuyết phục hơn nhiều so với một loạt bảng kết quả bổ sung.

### Lý thuyết phải liên quan, không trang trí

Một định lý đơn giản nhưng giải thích đúng lựa chọn thiết kế của phương pháp có giá trị hơn một chuỗi bất đẳng thức phức tạp không ai dùng đến. Lipton và Steinhardt, trong bài *Troubling Trends in Machine Learning Scholarship*, gọi hiện tượng dùng toán để tạo vẻ sâu sắc thay vì để làm rõ là "mathiness". Reviewer ML có kinh nghiệm nhận ra điều này rất nhanh: một bound tổng quát đúng với mọi phương pháp, một định lý có giả định mạnh đến mức không bao giờ thỏa mãn trong thí nghiệm, hay một chứng minh lặp lại kết quả đã biết dưới ký hiệu mới đều làm giảm chứ không tăng độ tin cậy của paper.

Phép thử đơn giản cho tính liên quan là hỏi: định lý này *dự đoán* điều gì mà thí nghiệm có thể kiểm chứng? Nếu định lý nói rằng sai số giảm theo một đại lượng nào đó, thí nghiệm nên đo đại lượng ấy và cho thấy xu hướng tương ứng. Khi lý thuyết và thực nghiệm khớp nhau, chúng củng cố lẫn nhau; khi chúng tách rời, reviewer sẽ coi phần lý thuyết là trang trí.

Cũng cần thận trọng với tính đúng đắn. Một lỗi trong chứng minh có thể tồn tại rất lâu sau khi paper được công bố: phân tích hội tụ trong bài gốc của Adam, chẳng hạn, về sau được chỉ ra là có lỗi (Reddi và cộng sự, ICLR 2018). Bài [Adam](../05-case-studies/adam.md) trong Chương 5 phân tích kỹ hơn trường hợp này. Bài học cho người viết là: chỉ đưa vào những gì đã kiểm tra cẩn thận, và nhờ một người không tham gia viết đọc lại toàn bộ chứng minh trước khi nộp.

### Thí nghiệm có kiểm soát và error bars

Paper ML thường có hai loại thí nghiệm bổ trợ nhau. Loại thứ nhất là **thí nghiệm có kiểm soát**: dữ liệu tổng hợp hoặc bối cảnh đơn giản hóa, nơi tác giả nắm được ground truth và thay đổi được từng yếu tố một. Loại thứ hai là **thí nghiệm quy mô thực**: benchmark chuẩn, cho thấy hiệu ứng vẫn tồn tại trong điều kiện thực tế. Paper CV thường chỉ có loại thứ hai; paper ML tốt thường có cả hai, và phần toy experiment ở dưới sẽ bàn kỹ loại thứ nhất.

Với cả hai loại, reviewer ML kỳ vọng kết quả được báo cáo qua nhiều lần chạy. Lý do rất đơn giản: nhiều cải thiện được báo cáo trong ML nhỏ hơn độ dao động giữa các random seed, và một con số đơn lẻ không cho phép người đọc phân biệt hai trường hợp này. Điều quan trọng không chỉ là có error bars mà là nói rõ chúng biểu diễn gì: độ lệch chuẩn qua các seed, sai số chuẩn của trung bình, hay khoảng tin cậy 95%; bao nhiêu lần chạy; và nguồn ngẫu nhiên là gì (khởi tạo, thứ tự dữ liệu, cách chia tập). Ba loại error bars này có thể khác nhau nhiều lần về độ rộng, nên một biểu đồ không chú thích có thể gây hiểu lầm.

<div class="good" markdown>
*"All results are averaged over 5 random seeds (model initialization and data order). We report the mean and standard deviation; shaded regions in Fig. 3 denote ±1 standard deviation."*
</div>

Khi thí nghiệm quá đắt để chạy nhiều lần (ví dụ pre-training một mô hình lớn), cách xử lý được chấp nhận là nói rõ điều đó, chạy nhiều seed ở quy mô nhỏ hơn để ước lượng độ dao động, và tránh diễn giải những khác biệt nhỏ hơn mức dao động ấy. Sự trung thực này được đánh giá cao hơn nhiều so với việc im lặng.

## Trình bày định lý, giả định và chứng minh

Phần lý thuyết trong paper ML phục vụ hai nhóm người đọc khác nhau. Nhóm thứ nhất muốn biết định lý *nói gì* và *vì sao nó quan trọng* để hiểu phương pháp; họ chỉ đọc phần chính. Nhóm thứ hai muốn kiểm tra định lý *có đúng không*; họ sẽ mở appendix. Cách trình bày tốt phục vụ cả hai nhóm mà không bắt nhóm thứ nhất phải đọc chứng minh.

Trong phần chính, một kết quả lý thuyết thường được trình bày theo thứ tự sau. Trước hết là trực giác: một hai câu nói bằng lời điều định lý sẽ khẳng định. Tiếp theo là các giả định, được đánh số và tách thành môi trường riêng (Assumption 1, Assumption 2), mỗi giả định kèm một câu giải thích khi nào nó thỏa mãn và khi nào không. Sau đó là phát biểu hình thức của định lý, đầy đủ điều kiện và các đại lượng xuất hiện trong kết luận. Cuối cùng là phác thảo chứng minh (proof sketch) nêu ý chính hoặc bước khó nhất, cùng con trỏ tới chứng minh đầy đủ trong appendix, và một đoạn thảo luận ý nghĩa: định lý giải thích lựa chọn thiết kế nào, dự đoán điều gì mà Section thực nghiệm sẽ kiểm chứng.

Tách giả định thành môi trường riêng không phải là hình thức. NeurIPS Paper Checklist hỏi trực tiếp liệu mọi giả định đã được nêu đầy đủ chưa, và reviewer lý thuyết thường bắt đầu bằng việc soát các giả định. Một giả định ẩn trong chứng minh mà không xuất hiện trong phát biểu là lỗi nghiêm trọng, vì nó làm phát biểu trong phần chính trở nên sai. Ngoài ra, nên nói rõ phần nào của chứng minh là mới và phần nào dựa trên kỹ thuật đã biết; reviewer sẽ đánh giá đóng góp lý thuyết dựa trên phần mới đó.

Về mặt kỹ thuật LaTeX, gói `thmtools` cùng `thm-restate` cho phép phát biểu định lý một lần trong phần chính và nhắc lại nguyên văn trong appendix, giữ nguyên số thứ tự, nhờ đó người đọc không phải lật ngược về trước.

```latex
% Preamble
\usepackage{amsthm}
\usepackage{thmtools, thm-restate}
\newtheorem{theorem}{Theorem}
\newtheorem{assumption}{Assumption}

% ---- Phần chính ----
\begin{assumption}[Bounded noise]\label{asm:noise}
The label noise $\epsilon$ satisfies $|\epsilon| \le \sigma$ almost surely.
\end{assumption}
% Một câu giải thích khi nào giả định này hợp lý, khi nào bị vi phạm.

\begin{restatable}{theorem}{mainthm}\label{thm:main}
Under Assumption~\ref{asm:noise}, ...  % phát biểu đầy đủ điều kiện và kết luận
\end{restatable}

\textit{Proof sketch.} The key step is ...
The full proof is deferred to Appendix~\ref{app:proof-main}.

% ---- Appendix ----
\section{Proof of Theorem~\ref{thm:main}}\label{app:proof-main}
\mainthm*          % nhắc lại nguyên văn định lý, giữ số thứ tự
\begin{proof}
...
\end{proof}
```

Trước khi nộp, nên tự kiểm tra phần lý thuyết bằng những câu hỏi mà một reviewer cẩn thận sẽ đặt ra:

| Câu hỏi | Vì sao reviewer hỏi |
|---|---|
| Mọi giả định đã được phát biểu tường minh và đánh số chưa? | Giả định ẩn làm phát biểu trong phần chính bị sai |
| Giả định có thỏa mãn trong các thí nghiệm của paper không? | Nếu không, định lý không giải thích được kết quả thực nghiệm |
| Các hằng số và chế độ tiệm cận (ví dụ $n \to \infty$) có được nêu rõ không? | Một bound có hằng số khổng lồ có thể vô nghĩa trong thực tế |
| Phần nào của chứng minh là mới? | Đóng góp lý thuyết được đánh giá dựa trên phần mới |
| Kết quả có trùng hoặc là hệ quả trực tiếp của kết quả đã biết không? | Lỗi này dễ bị phát hiện và gây mất điểm nặng |
| Chứng minh đầy đủ có nằm trong appendix và được trỏ tới từ phần chính không? | Checklist yêu cầu, và reviewer cần để kiểm tra |

## Toy experiment: cô lập hiện tượng trước khi mở rộng

Toy experiment là thí nghiệm trên một bối cảnh được đơn giản hóa có chủ đích, nơi cơ chế mà paper khẳng định có thể được quan sát trực tiếp. Nó trả lời câu hỏi mà benchmark thực tế khó trả lời: *có đúng là phương pháp hoạt động vì lý do tác giả nói hay không?* Trên ImageNet hay một bộ đánh giá LLM, có quá nhiều yếu tố đồng thời thay đổi; trên một bài toán tổng hợp, tác giả có thể giữ mọi thứ cố định trừ một yếu tố.

Một toy experiment tốt thường có các đặc điểm sau. Ground truth được biết, nên có thể đo trực tiếp đại lượng mà lý thuyết hoặc giả thuyết đề cập. Có một yếu tố điều khiển được (mức nhiễu, độ lệch phân phối, độ dài chuỗi), và kết quả được vẽ theo yếu tố đó. Baseline thất bại theo cách có thể dự đoán và giải thích được. Thí nghiệm đủ rẻ để chạy nhiều seed và quét nhiều giá trị. Và quan trọng nhất, có một cây cầu sang dữ liệu thực: paper chỉ ra rằng "dấu hiệu" quan sát được trên toy cũng xuất hiện trên benchmark thực tế.

Các ví dụ quen thuộc trải rộng trên nhiều cộng đồng. Paper về tối ưu hóa thường minh họa quỹ đạo của optimizer trên một hàm bậc hai có số điều kiện biết trước. Paper về mô hình sinh thường dùng hỗn hợp vài phân phối Gaussian trong không gian hai chiều để cho thấy mô hình có bao phủ đủ các mode hay không. Paper về kiến trúc chuỗi thường dùng các tác vụ tổng hợp như sao chép chuỗi, truy hồi theo khóa hay số học modulo để kiểm tra một khả năng cụ thể. Paper về tính vững trước tương quan giả (spurious correlation) thường dùng biến thể của MNIST trong đó màu sắc tương quan với nhãn ở tập huấn luyện nhưng không ở tập kiểm tra. Điểm chung là mỗi bối cảnh được chọn để cô lập *đúng* cơ chế mà paper nói đến, không phải để chứng minh phương pháp mạnh trên mọi mặt.

Về vị trí, toy experiment thường xuất hiện ở một trong hai chỗ. Nếu nó là động lực của phương pháp, nó có thể nằm ngay trong Introduction hoặc Section 3, dưới dạng một hình nhỏ cho thấy baseline thất bại ở đâu. Nếu nó là bằng chứng cho cơ chế, nó thường là thí nghiệm đầu tiên của Section thực nghiệm, trước các benchmark lớn. Cách thứ nhất đặc biệt hiệu quả: một hình đơn giản cho thấy hiện tượng thường thuyết phục reviewer ML nhanh hơn mọi đoạn văn.

!!! tip "Toy experiment không thay thế benchmark"
    Một paper chỉ có toy experiment dễ bị phê bình là "chưa chứng minh được giá trị thực tế"; một paper chỉ có benchmark dễ bị phê bình là "thiếu hiểu biết về cơ chế". Sự kết hợp của hai loại, với cây cầu nối rõ ràng giữa chúng, là cấu trúc được ưa chuộng nhất ở NeurIPS, ICML và ICLR.

## Appendix dài: viết cho người tra cứu

Paper ML thường có appendix dài hàng chục trang, đặt sau tài liệu tham khảo trong cùng PDF hoặc nộp thành file riêng tùy hội nghị và năm. Appendix chứa những thứ mà phần chính không có chỗ nhưng reviewer có thể cần: chứng minh đầy đủ, chi tiết siêu tham số, thí nghiệm bổ sung, mô tả dữ liệu, tài nguyên tính toán, và đôi khi related work mở rộng. Tuy vậy, cần nhớ một nguyên tắc chung của mọi hội nghị: reviewer *không bắt buộc* đọc appendix. Mọi thứ cần thiết để đánh giá claim chính phải nằm trong phần chính.

Vì appendix được đọc theo kiểu tra cứu chứ không phải đọc tuần tự, nó cần được tổ chức như một tài liệu tham khảo. Nên có một mục lục ngắn ở đầu appendix liệt kê các phần và nội dung của chúng. Mỗi phần nên được trỏ tới từ ít nhất một chỗ trong phần chính ("see Appendix C for the full hyperparameter search"), vì một phần không được trỏ tới gần như sẽ không ai đọc. Mỗi bảng và hình trong appendix cần có caption tự đứng được, vì người đọc thường nhảy thẳng vào đó từ phần chính.

| Phần appendix | Nội dung điển hình | Trỏ tới từ đâu trong phần chính |
|---|---|---|
| A. Chứng minh | Chứng minh đầy đủ, bổ đề phụ | Ngay sau mỗi phát biểu định lý |
| B. Chi tiết thí nghiệm | Siêu tham số, quy trình tìm kiếm, kiến trúc, tiền xử lý | Section thực nghiệm, đoạn "Implementation details" |
| C. Tài nguyên tính toán | Loại GPU, số giờ, tổng compute | Section thực nghiệm; câu trả lời checklist |
| D. Thí nghiệm bổ sung | Ablation mở rộng, domain khác, phân tích độ nhạy | Các claim phụ trong Section thực nghiệm |
| E. Dữ liệu | Nguồn, license, thống kê, cách chia tập | Section thực nghiệm; câu trả lời checklist |
| F. Thảo luận mở rộng | Related work chi tiết, limitations, broader impact | Related Work, Conclusion |

Một lỗi phổ biến là dùng appendix để chứa "nửa sau" của paper: phần chính nêu claim, còn bằng chứng duy nhất nằm trong appendix. Reviewer sẽ coi claim đó là chưa được chứng minh trong paper. Cách làm đúng là giữ trong phần chính ít nhất một bằng chứng đại diện cho mỗi claim, và dùng appendix cho bằng chứng mở rộng.

## NeurIPS Paper Checklist

NeurIPS yêu cầu mọi bài nộp kèm một bộ câu hỏi gọi là **NeurIPS Paper Checklist**. Những năm gần đây, checklist được đặt ở cuối PDF, sau tài liệu tham khảo và appendix, không tính vào giới hạn trang, và bài thiếu checklist có thể bị desk reject. Mục đích của nó là tăng tính minh bạch và khả năng tái lập: buộc tác giả tự trả lời những câu hỏi mà reviewer cũng sẽ hỏi, và chỉ ra chỗ trong paper chứa câu trả lời. Danh sách câu hỏi, cách trình bày và vị trí đặt checklist có thay đổi qua các năm, nên luôn dùng đúng phiên bản trong template của năm nộp.

### Checklist hỏi những gì

Các câu hỏi có thể được hiểu theo vài nhóm lớn. Nhóm đầu tiên liên quan đến **claims và limitations**: abstract và introduction có phản ánh đúng đóng góp và phạm vi của paper không, và paper có thảo luận các hạn chế không. Nhóm thứ hai là **lý thuyết**: với mỗi kết quả lý thuyết, các giả định có được nêu đầy đủ và chứng minh có hoàn chỉnh và đúng không.

Nhóm thứ ba, dài nhất, xoay quanh **thực nghiệm và tái lập**: paper có cung cấp đủ thông tin để tái lập kết quả chính không; dữ liệu và code có được công bố (open access) kèm hướng dẫn không; các chi tiết thí nghiệm như cách chia dữ liệu, siêu tham số, cách chọn siêu tham số có được nêu không; kết quả có kèm error bars hay kiểm định ý nghĩa thống kê, và người viết có nói rõ error bars biểu diễn gì không; và tài nguyên tính toán (loại phần cứng, thời gian, tổng compute) có được báo cáo không.

Nhóm thứ tư liên quan đến **đạo đức và tác động**: nghiên cứu có tuân thủ Code of Ethics của NeurIPS không; paper có thảo luận tác động xã hội tích cực và tiêu cực (broader impacts) không; và với mô hình hay dữ liệu có nguy cơ bị lạm dụng cao, tác giả có biện pháp bảo vệ (safeguards) khi công bố không. Nhóm thứ năm liên quan đến **tài sản (assets)**: các dataset, mô hình, code có sẵn được dùng có được trích dẫn và tôn trọng license không, và các tài sản mới do paper tạo ra có được tài liệu hóa đầy đủ không. Nhóm thứ sáu dành cho **nghiên cứu có con người tham gia**: crowdsourcing có công bố hướng dẫn và mức trả công không, và có được hội đồng đạo đức (IRB hoặc tương đương) phê duyệt khi cần không. Những năm gần đây còn có câu hỏi về **việc sử dụng LLM**, chủ yếu khi LLM là một phần quan trọng của phương pháp nghiên cứu, gắn với chính sách LLM của hội nghị (xem thêm bài [Dùng AI hỗ trợ](../03-ky-thuat/ai-tools.md)).

| Nhóm câu hỏi | Checklist hỏi gì | Câu trả lời thường nằm ở đâu |
|---|---|---|
| Claims | Abstract, intro có phản ánh đúng đóng góp và phạm vi không | Abstract, Introduction |
| Limitations | Paper có thảo luận hạn chế không | Mục Limitations hoặc Conclusion |
| Theory assumptions & proofs | Giả định đầy đủ, chứng minh hoàn chỉnh | Section lý thuyết, Appendix chứng minh |
| Reproducibility | Đủ thông tin để tái lập kết quả chính | Section thực nghiệm, Appendix chi tiết |
| Open access to data & code | Dữ liệu, code có công bố kèm hướng dẫn | Supplementary, link ẩn danh |
| Experimental details | Chia dữ liệu, siêu tham số, cách chọn | Implementation details, Appendix |
| Statistical significance | Error bars, nguồn biến thiên, cách tính | Bảng, hình chính và caption |
| Compute resources | Phần cứng, thời gian, tổng compute | Appendix tài nguyên |
| Code of ethics | Tuân thủ Code of Ethics | Câu trả lời trực tiếp |
| Broader impacts | Tác động tích cực, tiêu cực | Mục riêng hoặc Appendix |
| Safeguards | Biện pháp khi công bố mô hình, dữ liệu rủi ro cao | Mục Broader impacts, release notes |
| Licenses | Trích dẫn và tôn trọng license của tài sản có sẵn | Section thực nghiệm, Appendix dữ liệu |
| New assets | Tài liệu hóa dataset, mô hình mới | Appendix, datasheet |
| Human subjects & IRB | Hướng dẫn, trả công, phê duyệt đạo đức | Appendix về annotation |
| LLM usage | Khai báo khi LLM là thành phần của phương pháp | Section phương pháp, câu trả lời checklist |

### Trả lời thế nào cho tốt

Mỗi câu hỏi được trả lời bằng [Yes], [No] hoặc [NA], kèm một lời giải thích ngắn. Hướng dẫn của NeurIPS những năm gần đây nói rõ rằng trả lời [No] kèm lý do chính đáng là chấp nhận được; điều reviewer không chấp nhận là trả lời [Yes] khi paper thực ra không có nội dung tương ứng. Vì vậy, lời giải thích tốt nhất là một con trỏ cụ thể tới vị trí trong paper, hoặc một lý do trung thực khi câu trả lời là [No].

<div class="bad" markdown>
*"Question: Does the paper report error bars? Answer: [Yes]. Justification: See the paper."*
</div>

<div class="good" markdown>
*"Answer: [Yes]. Justification: Tables 1–2 report the mean and standard deviation over 5 seeds; Fig. 3 shows 95% confidence intervals computed by bootstrap (see Appendix B.3)."*
</div>

<div class="good" markdown>
*"Answer: [No]. Justification: Pre-training the 7B model is too expensive to repeat; we instead report variance over 5 seeds for the 350M model (Appendix D) and refrain from interpreting differences smaller than this variance."*
</div>

Lời khuyên quan trọng nhất là **điền checklist ngay từ draft đầu tiên**, không phải vào đêm trước deadline. Khi điền sớm, checklist hoạt động như một công cụ tự review: mỗi câu trả lời [No] không có lý do chính đáng là một lỗ hổng cần vá, và thường cũng là điều reviewer sẽ phê bình. Nhóm tác giả có thể phân công một người chịu trách nhiệm checklist, rà lại mỗi khi paper thay đổi.

### ICML và ICLR

ICML và ICLR không dùng một checklist dài như NeurIPS, nhưng có các yêu cầu cùng tinh thần. ICML những năm gần đây yêu cầu một đoạn **impact statement** ở cuối bài, không tính vào giới hạn trang. ICLR khuyến khích **ethics statement** và **reproducibility statement**, cũng không tính vào giới hạn trang. Cả hai hội nghị đều có chính sách về việc sử dụng LLM. Vì các yêu cầu này đổi theo năm, người viết nên đọc Author Guide của năm nộp và dành thời gian viết chúng một cách nghiêm túc: một đoạn reproducibility statement trỏ chính xác tới vị trí của code, siêu tham số và chi tiết dữ liệu giúp reviewer tin tưởng vào kết quả.

## Viết cho thảo luận nhiều vòng trên OpenReview

Ở CVPR, phản hồi của tác giả thường là một văn bản ngắn nộp một lần. Ở NeurIPS, ICML và đặc biệt ICLR, phản hồi là một cuộc thảo luận trên OpenReview kéo dài từ một đến vài tuần: tác giả trả lời, reviewer hỏi lại, tác giả bổ sung, và reviewer có thể điều chỉnh điểm. Nguyên tắc chung của rebuttal đã được trình bày ở bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md); phần này tập trung vào những gì đặc thù của hình thức thảo luận nhiều vòng.

### Viết với ý thức công khai

ICLR công khai bài nộp, review và thảo luận ngay trong quá trình review (dưới dạng ẩn danh), và bài bị reject thường vẫn hiển thị công khai. NeurIPS những năm gần đây công khai review và thảo luận của bài được accept, còn bài bị reject có thể được công khai nếu tác giả đồng ý. Điều này có hai hệ quả cho cách viết. Thứ nhất, mọi phản hồi cần được viết như thể cả cộng đồng sẽ đọc: lịch sự, dựa trên bằng chứng, không công kích reviewer, không mỉa mai. Một phản hồi gay gắt có thể tồn tại công khai rất lâu sau khi hội nghị kết thúc. Thứ hai, thảo luận công khai là một kho học liệu rất tốt: đọc thảo luận của những paper được accept trong lĩnh vực gần là cách nhanh nhất để học cách reviewer ML đặt câu hỏi và cách tác giả giỏi trả lời.

### Cấu trúc một luồng phản hồi

Cấu trúc phổ biến gồm một **general response** (phản hồi chung) đăng ở cấp bài, và các phản hồi riêng dưới từng review. General response tóm tắt những mối lo được nhiều reviewer chia sẻ và những thay đổi chính, để AC nắm bức tranh tổng thể mà không phải đọc hết mọi luồng. Phản hồi riêng đi vào chi tiết của từng reviewer, thường có giới hạn ký tự cho mỗi phản hồi. Một số năm, NeurIPS còn cho phép đính kèm một trang PDF chung chứa hình và bảng mới; một số hội nghị cho phép gửi bình luận chỉ AC đọc được để báo cáo vấn đề với một review. Các chi tiết này thay đổi theo năm.

```text
General Response

We thank all reviewers for their thoughtful feedback. We are encouraged that
the reviewers found our analysis insightful (R1, R3) and the experiments
thorough (R2). Below we summarize the main changes; detailed responses are
posted under each review.

1. Generality beyond vision (R1, R2). We added experiments on two text
   classification benchmarks (new Table 4, Appendix E). The same trend holds.
2. Statistical significance (R2, R4). All main results are now averaged over
   5 seeds and reported with 95% confidence intervals (Table 2, Fig. 3).
3. Clarity of Assumption 2 (R3). We added a discussion of when the assumption
   holds and an example where it fails (Sec. 4.1, Appendix B.2).

All changes in the revised PDF are highlighted in blue.
```

Mỗi phản hồi riêng nên tuân theo một nhịp ổn định: trích ngắn mối lo của reviewer, trả lời trực tiếp bằng bằng chứng, và nói rõ paper đã hoặc sẽ thay đổi ở đâu. Câu trả lời trực tiếp nên nằm ở câu đầu tiên; reviewer bận rộn có thể chỉ đọc câu đó.

```text
> W1: "The improvement may come from the extra parameters."

We agree this is an important confound. We trained a parameter-matched
baseline (+3.1M parameters, same training budget). It reaches 71.2 ± 0.4,
compared to 73.5 ± 0.3 for our method (new Table 6, 5 seeds). This suggests
the gain is not explained by model size alone. We added this result to
Sec. 5.3.
```

### Sửa PDF trong lúc thảo luận

ICLR cho phép tác giả tải lên bản PDF đã sửa trong giai đoạn thảo luận, và đây là một cơ hội lớn: thay vì hứa "we will add this to the final version", tác giả có thể cho reviewer thấy thay đổi ngay. Khi sửa, nên đánh dấu mọi thay đổi bằng màu (thường là xanh), liệt kê các thay đổi trong general response, giữ đúng giới hạn trang của bản nộp, và không biến bản sửa thành một paper khác: thêm thí nghiệm, làm rõ lập luận và sửa lỗi là hợp lệ, nhưng thay đổi phương pháp chính có thể khiến reviewer và AC coi đó là một bài nộp mới chưa được review. Với các hội nghị không cho sửa PDF trong thảo luận, cam kết thay đổi cần cụ thể (nêu rõ section, nội dung sẽ thêm) để AC có thể đánh giá.

### Giữ nhịp thảo luận

Thảo luận nhiều vòng đòi hỏi kiên nhẫn. Nên đăng phản hồi chính sớm trong giai đoạn thảo luận, để còn thời gian cho reviewer hỏi lại; phản hồi đăng vào những giờ cuối gần như không thể tạo ra trao đổi. Nếu một reviewer chưa phản hồi khi thảo luận sắp kết thúc, có thể gửi một lời nhắc ngắn, lịch sự, một lần là đủ:

> *"Dear Reviewer X, as the discussion period ends in two days, we would be grateful to know whether our response has addressed your concerns. We are happy to provide further clarification if needed."*

Khi reviewer đúng, hãy thừa nhận rõ ràng và cảm ơn; khi reviewer hiểu sai, hãy làm rõ mà không đổ lỗi, đồng thời tự hỏi vì sao paper khiến họ hiểu sai và sửa chỗ đó. Kinh nghiệm chung là reviewer ML điều chỉnh điểm sau thảo luận thường xuyên hơn so với hình thức rebuttal một lần, nên một cuộc thảo luận được chuẩn bị tốt có thể thay đổi kết quả của một bài ở vùng ranh giới.

## Datasets & Benchmarks track

NeurIPS có một track riêng cho dataset và benchmark, ra đời từ năm 2021, dành cho những đóng góp mà giá trị chính nằm ở dữ liệu, môi trường đánh giá hay công cụ đo lường thay vì phương pháp. Track này tồn tại vì những đóng góp như vậy thường bị đánh giá thấp ở main track với lý do "thiếu novelty về phương pháp", trong khi chúng có thể có ảnh hưởng rất lớn tới cả lĩnh vực. Tên gọi, chính sách ẩn danh và yêu cầu cụ thể của track đã thay đổi qua các năm (ví dụ có năm cho phép single-blind), nên cần đọc Call for Papers của đúng năm. ICML và ICLR thường nhận bài về dataset và benchmark trong main track như một chủ đề.

Một paper dataset hay benchmark tốt phải trả lời thuyết phục bốn câu hỏi. Câu hỏi đầu tiên là *khoảng trống*: vì sao các benchmark hiện có chưa đủ, với bằng chứng cụ thể như benchmark cũ đã bão hòa, bị nhiễm vào dữ liệu huấn luyện, hay không đo được khả năng mà cộng đồng quan tâm. Câu hỏi thứ hai là *chất lượng*: dữ liệu được thu thập và gán nhãn ra sao, độ đồng thuận giữa người gán nhãn bao nhiêu, những loại nhiễu nào còn tồn tại. Câu hỏi thứ ba là *giá trị phân biệt*: benchmark có tách được các mô hình mạnh yếu không, có cho thấy điều gì mới về các mô hình hiện tại không. Câu hỏi cuối cùng là *tính bền vững*: dữ liệu được lưu trữ ở đâu, license thế nào, ai bảo trì, và có cơ chế nào (ví dụ test set giữ kín) để tránh bị khai thác quá mức.

Về tài liệu hóa, cộng đồng thường dùng khuôn *Datasheets for Datasets* (Gebru và cộng sự) để mô tả động cơ, quy trình thu thập, thành phần, mục đích sử dụng và hạn chế của dataset. Những năm gần đây, NeurIPS còn yêu cầu metadata máy đọc được (ví dụ định dạng Croissant) và yêu cầu dữ liệu phải truy cập được cho reviewer tại thời điểm nộp. Những yêu cầu này nghe có vẻ hành chính, nhưng chúng phản ánh điều reviewer thực sự lo: một dataset không được mô tả rõ hay không tải được thì không thể đánh giá, và không thể được cộng đồng dùng.

## Những lỗi khiến paper bị coi là "more suitable for CVPR/ACL"

Cụm từ *"more suitable for CVPR"* (hay *"more suitable for ACL"*, *"for a specialized venue"*) là một trong những lời phê bình phổ biến nhất ở NeurIPS, ICML và ICLR. Nó không có nghĩa paper kém; nó có nghĩa reviewer cho rằng đóng góp chủ yếu có giá trị trong một lĩnh vực ứng dụng, và người đọc của hội nghị ML nói chung sẽ không học được điều gì có thể mang đi nơi khác. Lời phê bình này thường đi kèm điểm số ở vùng borderline hoặc thấp hơn, nên cần hiểu nguyên nhân để phòng tránh.

Nguyên nhân phổ biến nhất là **framing quanh một tác vụ cụ thể**: paper mở đầu bằng tầm quan trọng của phân đoạn ảnh trong điều kiện thời tiết xấu, hay của hỏi đáp trên một loại văn bản, thay vì một vấn đề học máy tổng quát mà tác vụ đó là một ví dụ. Nguyên nhân thứ hai là **bằng chứng chỉ trên một domain**: mọi thí nghiệm đều trên cùng một loại dữ liệu và một họ kiến trúc, nên reviewer không có cơ sở để tin vào tính tổng quát. Nguyên nhân thứ ba là **đóng góp dạng lắp ghép**, kết hợp vài module đã biết để thắng benchmark mà không có nguyên lý nào giải thích vì sao tổ hợp ấy hoạt động. Nguyên nhân thứ tư là **thiếu phân tích**: paper có nhiều bảng kết quả nhưng không có thí nghiệm nào trả lời câu hỏi "vì sao". Nguyên nhân thứ năm là **related work chỉ trong một lĩnh vực**, bỏ qua những công trình ML tổng quát có cùng ý tưởng; reviewer ML có thể nhận ra rằng "module mới" thực chất là một dạng regularization hay một kỹ thuật tối ưu đã biết dưới tên khác. Cuối cùng, **claim tổng quát nhưng bằng chứng hẹp** ("we propose a general framework" trong khi chỉ thử trên một benchmark) làm reviewer mất lòng tin ngay từ abstract.

Hai câu mở đầu abstract dưới đây minh họa sự khác biệt về framing cho cùng một hướng nghiên cứu:

<div class="bad" markdown>
*"Semantic segmentation in adverse weather is challenging. We propose WeatherSeg, which adds a fog-aware attention module to a segmentation transformer and improves mIoU by 2.1 points on ACDC."*
</div>

<div class="good" markdown>
*"Models fine-tuned under distribution shift often rely on features that are predictive only in the source domain. We show that a simple feature reweighting provably reduces this reliance in a linear model, and that it improves robustness both for image segmentation under adverse weather and for text classification under domain shift."*
</div>

Câu thứ nhất là một mở đầu tốt cho CVPR: rõ bài toán, rõ phương pháp, rõ con số. Nhưng ở NeurIPS, nó báo hiệu ngay một đóng góp chuyên ngành. Câu thứ hai nêu một hiện tượng tổng quát, một kết quả lý thuyết và bằng chứng trên hai domain khác nhau; bài toán thời tiết xấu vẫn còn đó, nhưng giờ là một trong hai minh họa. Tương tự, một paper đề xuất chiến lược prompting mới, đánh giá trên một benchmark hỏi đáp với một LLM, dễ bị đánh giá là "more suitable for ACL" nếu không có phân tích về cơ chế hay bằng chứng trên nhiều loại tác vụ.

Cần nói thêm rằng không phải lúc nào cũng nên "sửa" để vừa với ML. Nếu đóng góp thực chất là chuyên ngành, cách viết trung thực là nộp vào hội nghị chuyên ngành, nơi đóng góp đó được đánh giá đúng giá trị. Bài [Chuyển một paper giữa các cộng đồng](chuyen-doi.md) bàn về quyết định này một cách có hệ thống.

## Tóm tắt

Reviewer ở NeurIPS, ICML và ICLR đến từ nhiều lĩnh vực khác nhau, nên điều họ cùng tìm kiếm là những gì đúng vượt ra ngoài một bài toán cụ thể: một nguyên lý, một hiện tượng được giải thích, một kết quả lý thuyết có liên quan. Lý thuyết cần được trình bày với giả định tường minh, phát biểu đầy đủ, chứng minh hoàn chỉnh trong appendix, và quan trọng nhất là phải dự đoán được điều mà thực nghiệm kiểm chứng. Toy experiment cô lập cơ chế, benchmark thực tế chứng minh giá trị, và error bars có chú thích rõ ràng cho phép người đọc tin vào sự khác biệt. NeurIPS Paper Checklist và các statement tương đương ở ICML, ICLR nên được điền từ draft đầu như một công cụ tự review. Thảo luận nhiều vòng trên OpenReview, nhất là khi công khai, đòi hỏi phản hồi sớm, có cấu trúc, dựa trên bằng chứng và luôn lịch sự.

## Bài tập

1. Chọn một dự án đang làm và viết hai phiên bản câu mở đầu abstract: một cho hội nghị chuyên ngành (CVPR hoặc ACL), một cho NeurIPS. Liệt kê những bằng chứng mà phiên bản NeurIPS còn thiếu để claim của nó đứng vững.
2. Thiết kế một toy experiment cho dự án đó: mô tả bối cảnh tổng hợp, yếu tố điều khiển, ground truth được đo, dự đoán của giả thuyết, và cách nối kết quả sang benchmark thực.
3. Lấy bản NeurIPS Paper Checklist của năm gần nhất và điền thử cho bản thảo hiện tại. Đánh dấu mọi câu trả lời [No] chưa có lý do chính đáng và lập kế hoạch khắc phục.
4. Trên OpenReview, chọn một paper ICLR gần đây trong lĩnh vực gần với dự án. Đọc toàn bộ review và thảo luận, rồi phân tích: những phản hồi nào của tác giả khiến reviewer tăng điểm, và chúng có điểm chung gì về cấu trúc và giọng văn.
