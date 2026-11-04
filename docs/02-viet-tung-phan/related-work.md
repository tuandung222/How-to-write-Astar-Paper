# Related Work

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Hiểu Related Work như một công cụ định vị paper, không phải một danh sách tóm tắt tài liệu.
    - Tổ chức Related Work thành các đoạn theo chủ đề, mỗi đoạn kết thúc bằng một câu phân biệt rõ ràng.
    - Xử lý đúng cách paper gần nhất và các công trình đồng thời (concurrent work).
    - Quyết định đặt Related Work ở Section 2 hay ở cuối paper, và điều chỉnh theo thói quen của từng cộng đồng.

Trong số các phần của paper, Related Work là phần dễ bị viết sai nhất về *bản chất*. Người viết lần đầu thường coi nó là nơi chứng tỏ đã đọc nhiều: lần lượt tóm tắt từng paper đã đọc, mỗi paper một hai câu, rồi chuyển sang paper tiếp theo. Kết quả là một danh sách dài mà người đọc không rút ra được điều gì, ngoài việc tác giả có đọc tài liệu.

Một Related Work tốt làm một việc khác hẳn: nó vẽ một **bản đồ** của lĩnh vực và đánh dấu vị trí của paper trên bản đồ đó. Người đọc kết thúc phần này với câu trả lời rõ ràng cho hai câu hỏi: những hướng nào đã được khám phá, và paper này khác các hướng ấy ở điểm nào. Bài này trình bày vai trò định vị của Related Work, cách tổ chức các đoạn có tiêu đề, kỹ thuật viết câu phân biệt, cách xử lý paper gần nhất và concurrent work, các lựa chọn về vị trí đặt phần này, và những khác biệt giữa ba cộng đồng.

## Vai trò: định vị, không phải tổng quan

Related Work phục vụ ba mục đích, và cả ba đều liên quan trực tiếp tới cách reviewer đánh giá paper. Mục đích thứ nhất là **chứng tỏ người viết nắm được lĩnh vực**. Reviewer thường là chuyên gia về đúng chủ đề của paper; nếu một công trình quan trọng bị bỏ sót, họ sẽ nhận ra ngay, và việc bỏ sót này thường được nêu như một điểm yếu trong review, đôi khi kèm nghi ngờ về tính mới của paper.

Mục đích thứ hai, và quan trọng nhất, là **khoanh vùng tính mới**. Mọi paper đều kế thừa nhiều thứ từ các công trình trước. Related Work là nơi người viết nói rõ phần nào được kế thừa và phần nào là mới. Khi ranh giới này rõ ràng, reviewer đánh giá đúng đóng góp; khi nó mơ hồ, reviewer có xu hướng cho rằng đóng góp nhỏ hơn thực tế, hoặc ngược lại, cho rằng tác giả đang nhận công cho những đóng góp vốn thuộc về người khác.

Mục đích thứ ba là **ghi nhận công lao** của những người đi trước. Đây không chỉ là phép lịch sự học thuật: trích dẫn đúng và đủ là một phần của sự trung thực khoa học, và nó cũng giúp người đọc lần theo dòng phát triển của ý tưởng.

Cần phân biệt vai trò của Related Work với vai trò của đoạn khoảng trống trong introduction. Introduction vẽ bức tranh lớn: hai ba hướng chính và hạn chế chung của chúng. Related Work đi vào chi tiết hơn: các công trình tiêu biểu trong từng hướng, và sự khác biệt cụ thể với paper. Hai phần bổ sung cho nhau và không nên lặp lại nhau. Nguyên liệu cho Related Work là bảng tài liệu và bản đồ vị trí đã được xây dựng ở bài [Đọc & lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md); ở bước viết, người viết chỉ cần tổ chức lại nguyên liệu đó theo góc nhìn của paper.

## Cấu trúc: các đoạn có tiêu đề in đậm

Cách tổ chức phổ biến nhất ở cả ba cộng đồng là chia Related Work thành 2–4 đoạn, mỗi đoạn mở bằng một tiêu đề ngắn in đậm, ứng với một hướng nghiên cứu hoặc một chủ đề. Trong LaTeX, tiêu đề này thường được tạo bằng `\paragraph{...}` hoặc `\noindent\textbf{...}`. Cách tổ chức này giúp reviewer nhìn lướt là thấy paper liên quan tới những hướng nào, và nhảy thẳng tới đoạn họ quan tâm nhất.

Câu hỏi đầu tiên khi tổ chức là chọn các chủ đề nào. Có ba cách chia thường gặp: theo **bài toán** (các công trình giải cùng bài toán bằng cách khác), theo **kỹ thuật** (các công trình dùng cùng kỹ thuật cho bài toán khác), và theo **giả định hoặc bối cảnh** (các công trình làm việc trong cùng điều kiện, chẳng hạn ít dữ liệu hay không có nhãn). Một paper điển hình thường có một đoạn về bài toán chính, một hai đoạn về các kỹ thuật mà phương pháp dựa vào, và có thể một đoạn về các bối cảnh liên quan.

Hai paper kinh điển cho thấy cách chia này. Related Work của ResNet có hai đoạn với tiêu đề in đậm, "Residual Representations" và "Shortcut Connections", ứng với hai ý tưởng mà phương pháp kế thừa: biểu diễn dư trong các phương pháp nhận dạng ảnh truyền thống và trong các bộ giải số, và các kết nối tắt trong mạng nơ-ron. Related Work của BERT được chia thành ba mục con theo cách tiếp cận học biểu diễn: các phương pháp dựa trên đặc trưng (feature-based, như ELMo), các phương pháp tinh chỉnh (fine-tuning, như OpenAI GPT), và học chuyển giao từ dữ liệu có giám sát. Cách chia của BERT đặc biệt hiệu quả vì nó định vị ngay BERT trong nhóm thứ hai, đồng thời giải thích vì sao BERT khác các thành viên khác của nhóm.

Mỗi đoạn trong Related Work thường có ba bước. Bước thứ nhất giới thiệu hướng nghiên cứu trong một câu. Bước thứ hai trình bày các công trình tiêu biểu, *gom nhóm* theo cách tiếp cận thay vì liệt kê từng paper. Bước thứ ba, và không thể thiếu, là câu phân biệt: paper này khác hướng đó ở điểm nào. Ví dụ dưới đây (cho một paper hư cấu về phát hiện vật thể 3D từ ảnh đơn) minh họa cả ba bước.

```latex
\paragraph{Monocular 3D object detection.}
Early methods lift 2D detections to 3D using geometric
priors~\cite{a,b}. Recent approaches regress depth directly from
image features~\cite{c,d,e} or leverage pseudo-LiDAR
representations~\cite{f,g}. While effective for nearby objects,
these methods treat depth as a deterministic quantity and thus
struggle at long range. In contrast, we model per-object depth as a
distribution and refine it with height priors.
```

Câu đầu tiên của đoạn vừa giới thiệu hướng vừa nêu cách tiếp cận sớm nhất. Câu thứ hai gom các công trình gần đây thành hai nhóm (hồi quy độ sâu trực tiếp và pseudo-LiDAR), mỗi nhóm một cụm trích dẫn. Câu thứ ba ghi nhận ưu điểm và chỉ ra giả định chung (độ sâu là đại lượng tất định) dẫn tới hạn chế. Câu cuối nêu sự khác biệt. Toàn bộ đoạn chỉ có năm câu nhưng làm tròn cả ba bước.

So sánh với một đoạn yếu cùng chủ đề:

<div class="bad" markdown>

*"Mono3D [a] uses geometric priors. Deep3DBox [b] estimates orientation and dimensions. M3D-RPN [c] proposes depth-aware convolution. MonoDLE [d] analyzes localization error. Pseudo-LiDAR [f] converts depth maps to point clouds."*

</div>

Đoạn này có thông tin đúng nhưng không có lập luận. Người đọc không biết các công trình có quan hệ gì với nhau, chúng có chung hạn chế nào, và quan trọng nhất là paper đang viết khác chúng ở đâu. Một đoạn như vậy buộc reviewer tự làm công việc định vị thay cho tác giả, và họ hiếm khi làm điều đó theo hướng có lợi cho paper.

## Câu phân biệt: trái tim của mỗi đoạn

Nếu chỉ được giữ lại một câu trong mỗi đoạn Related Work, đó phải là câu phân biệt ở cuối đoạn. Câu này thường mở bằng "In contrast, …", "Different from these methods, …", "Unlike [X], …" hoặc "While [X] focuses on …, we …". Thiếu câu này, đoạn văn chỉ còn là một bản tóm tắt, và Related Work mất đi chức năng định vị.

Một câu phân biệt tốt chỉ ra sự khác biệt **có thực chất**. Có thể phân loại các khác biệt thực chất thành bốn dạng: khác về **giả định** (công trình trước giả định có camera pose, paper này không cần), khác về **bối cảnh** (công trình trước làm với dữ liệu có nhãn, paper này làm với dữ liệu không nhãn), khác về **cơ chế** (công trình trước coi độ sâu là giá trị, paper này coi là phân phối), và khác về **mục tiêu** (công trình trước tối ưu độ chính xác, paper này tối ưu khả năng hiệu chỉnh độ tin cậy). Ngược lại, những khác biệt như "we use a different backbone" hay "we add an extra module" hiếm khi đủ thuyết phục, vì chúng không trả lời câu hỏi vì sao khác biệt đó quan trọng.

Khi paper không thực sự khác một hướng nào đó mà bổ sung cho nó, cách viết trung thực là nói rõ điều đó: *"Our work is complementary to these methods: the proposed calibration can be applied on top of any of them."* Một câu như vậy vừa chính xác, vừa mở ra khả năng kết hợp, và thường được reviewer đón nhận tốt hơn một sự khác biệt bị cường điệu.

Câu phân biệt cũng phải **tôn trọng** công trình được so sánh. Reviewer có thể chính là tác giả của công trình đó, và ngay cả khi không phải, một giọng văn chê bai khiến paper trông thiếu khách quan.

<div class="bad" markdown>

*"These methods fail to handle long-range objects and are therefore unsuitable for real-world driving."*

</div>

<div class="good" markdown>

*"While these methods perform well at short range, they treat depth as a deterministic quantity, which limits their accuracy for distant objects where depth ambiguity is large."*

</div>

Câu thứ nhất phủ nhận toàn bộ giá trị của các phương pháp và đưa ra một kết luận quá rộng. Câu thứ hai ghi nhận điểm mạnh, chỉ ra nguyên nhân của hạn chế, và khoanh vùng hạn chế vào đúng điều kiện mà paper giải quyết.

## Paper gần nhất và concurrent work

Trong số các công trình liên quan, có hai loại cần được xử lý đặc biệt cẩn thận.

Loại thứ nhất là **paper gần nhất**, tức công trình mà một reviewer am hiểu sẽ nghĩ tới đầu tiên khi đọc phương pháp. Paper này không nên chỉ được trích dẫn trong một cụm chung với các paper khác. Nó nên được nhắc tới ngay trong introduction, được thảo luận riêng và kỹ trong Related Work với sự khác biệt được nêu chính xác, và nếu có thể, được so sánh trực tiếp trong phần Experiments. Việc né tránh paper gần nhất, dù vô tình, là một trong những lý do phổ biến khiến reviewer đặt câu hỏi về tính mới.

Loại thứ hai là **concurrent work**, tức những công trình được công bố, thường dưới dạng preprint, trong khoảng thời gian gần với thời điểm nộp paper và giải quyết vấn đề tương tự. Ở các lĩnh vực phát triển nhanh, tình huống này rất hay gặp. Cách xử lý tốt nhất là nhắc tới chúng một cách thẳng thắn, ghi nhận chúng là đồng thời, và nêu sự khác biệt. ResNet đã làm đúng như vậy: Related Work của paper nhắc tới highway networks như một công trình đồng thời cũng dùng kết nối tắt, nhưng có cổng điều khiển phụ thuộc dữ liệu và có tham số, rồi chỉ ra rằng kết nối tắt dạng đồng nhất của ResNet không có tham số và luôn cho thông tin đi qua. Mẫu câu thường dùng:

> *"Concurrent to our work, [X]~\cite{} also explores [idea]; however, they [difference], whereas we [our approach]."*

Nhiều hội nghị có quy định trong hướng dẫn dành cho reviewer rằng các công trình công bố trong một khoảng thời gian ngắn trước hạn nộp (thường tính bằng vài tháng) được coi là đồng thời, và tác giả không bị yêu cầu so sánh thực nghiệm với chúng. Khoảng thời gian cụ thể khác nhau giữa các hội nghị và các năm, nên cần kiểm tra Reviewer Guidelines của hội nghị mục tiêu. Tuy vậy, việc *nhắc tới* concurrent work vẫn là thực hành tốt: nó cho thấy tác giả theo sát lĩnh vực, và giúp tránh tình huống reviewer phát hiện ra công trình đó và cho rằng tác giả cố tình lờ đi.

!!! warning "Công trình của chính nhóm tác giả"
    Khi trích dẫn công trình trước của chính nhóm tác giả trong bản nộp ẩn danh, cần viết ở ngôi thứ ba, như với mọi công trình khác: *"[Author et al.] proposed …"* chứ không phải *"In our previous work [12], we proposed …"*. Cách viết thứ hai làm lộ danh tính và có thể dẫn tới desk reject. Quy định chi tiết về việc tự trích dẫn khác nhau giữa các hội nghị, nên cần đọc kỹ chính sách ẩn danh trong Call for Papers.

## Vị trí: Section 2 hay cuối paper

Related Work có thể được đặt ở hai vị trí chính, và mỗi vị trí phục vụ một chiến lược trình bày khác nhau.

Vị trí phổ biến nhất ở **Computer Vision** là **Section 2**, ngay sau introduction. Lợi ích của vị trí này là người đọc có đủ bối cảnh về lĩnh vực trước khi đi vào phương pháp, và khi đọc Method, họ đã biết phương pháp đang được so sánh với những gì. ResNet và BERT đều đặt Related Work ở Section 2.

Vị trí thứ hai là **cuối paper, ngay trước Conclusion**, thường gặp hơn ở **Machine Learning** và đôi khi ở **NLP**. Chẳng hạn, DDPM đặt Related Work sau phần Experiments. Lý do của lựa chọn này là có những trường hợp sự khác biệt chỉ trở nên rõ ràng sau khi người đọc đã hiểu phương pháp; khi đó, thảo luận công trình liên quan trước phương pháp buộc người viết dùng những khái niệm chưa được giới thiệu. Đặt ở cuối cũng đưa người đọc tới phương pháp nhanh hơn, điều đặc biệt có giá trị khi introduction đã định vị paper đủ tốt. Một số paper ML còn có một mục "Background" hoặc "Preliminaries" ngắn ở đầu, chứa các khái niệm nền tảng cần cho phương pháp, và để phần thảo luận so sánh chi tiết về cuối.

Lựa chọn nào cũng có rủi ro riêng. Đặt ở Section 2 làm chậm việc người đọc tới phương pháp, nên phần này phải gọn. Đặt ở cuối có nguy cơ reviewer đọc phần Method với cảm giác tác giả bỏ qua các công trình liên quan; vì vậy, nếu chọn vị trí cuối, introduction phải trích dẫn và định vị so với các công trình quan trọng nhất ngay từ đầu.

## Bảng so sánh tính chất

Một công cụ định vị hiệu quả, đặc biệt phổ biến ở CV, là một bảng nhỏ so sánh các phương pháp theo những tính chất quan trọng. Bảng này có thể nằm trong Related Work hoặc trong introduction.

| Method | No pose required | Real-time | Handles dynamic scenes | Open-vocabulary |
|---|:-:|:-:|:-:|:-:|
| Method A [3] | ✗ | ✓ | ✗ | ✗ |
| Method B [7] | ✓ | ✗ | ✗ | ✗ |
| Method C [12] | ✓ | ✗ | ✓ | ✗ |
| **Ours** | ✓ | ✓ | ✓ | ✓ |

Sức mạnh của bảng này là nó cho phép người đọc thấy vị trí của paper chỉ trong một cái nhìn. Bảng dạng này cũng có ích ở các cộng đồng khác: một paper ML có thể so sánh các thuật toán theo giả định (có cần hàm lồi không, có cần gradient chính xác không) và theo bảo đảm lý thuyết; một paper NLP có thể so sánh các benchmark theo số ngôn ngữ, loại nhãn và nguồn dữ liệu.

Tuy nhiên, bảng tính chất đòi hỏi sự **trung thực tuyệt đối**. Reviewer sẽ kiểm tra từng ô, và một ô sai, chẳng hạn đánh dấu một phương pháp khác là không làm được điều mà nó thực ra làm được, đủ để làm mất uy tín của cả bảng. Cũng cần tránh việc chọn các cột theo cách chỉ có phương pháp của paper đạt đủ dấu tích; nếu các tính chất được chọn không phải là những tính chất mà cộng đồng thực sự quan tâm, reviewer sẽ nhận ra.

## Độ dài và mật độ trích dẫn

Trong một paper 8 trang hai cột, Related Work thường chiếm khoảng 0,5–1 trang. Nếu phần này dài hơn, đó thường là dấu hiệu người viết đang tóm tắt thay vì định vị, và cách sửa là gom nhóm mạnh tay hơn. Ở các hội nghị ML, nơi appendix không giới hạn, một số paper giữ Related Work ngắn trong thân bài và đưa một bản mở rộng vào appendix; khi làm vậy, thân bài vẫn phải chứa đủ các công trình quan trọng nhất và các câu phân biệt chính.

Về cách trích dẫn, nên **gom trích dẫn** dạng `\cite{a,b,c}` cho các công trình cùng hướng thay vì viết một câu riêng cho mỗi paper. Ngoại lệ là paper gần nhất, như đã nêu, cần được thảo luận riêng. Câu hỏi bao nhiêu trích dẫn là đủ đã được bàn ở bài [Đọc & lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md); ở bước viết, nguyên tắc chung là mọi công trình mà một reviewer am hiểu sẽ mong đợi đều phải có mặt, và mọi trích dẫn có mặt đều phải có lý do.

## Khác biệt giữa các cộng đồng

Những nguyên tắc ở trên áp dụng chung, nhưng mỗi cộng đồng có thói quen riêng mà người viết nên biết khi chọn hội nghị mục tiêu.

### Computer Vision

Related Work thường nằm ở Section 2, gồm vài đoạn có tiêu đề in đậm, dài khoảng nửa trang tới một trang. Bảng so sánh tính chất được dùng khá phổ biến. Vì lĩnh vực phát triển rất nhanh và nhiều công trình quan trọng xuất hiện trên arXiv trước khi được công bố chính thức, reviewer CV thường mong paper trích dẫn cả các preprint gần đây, và việc xử lý concurrent work được chú ý nhiều.

### NLP

Related Work có thể nằm ở Section 2 hoặc trước Conclusion, tùy cấu trúc của paper. Paper NLP thường trích dẫn từ ACL Anthology, kho lưu trữ chung của các hội nghị NLP, và reviewer NLP hay nêu cụ thể các tài liệu bị thiếu trong review. Với các paper về hiện tượng ngôn ngữ, việc trích dẫn cả các công trình ngôn ngữ học liên quan, không chỉ các công trình học máy, giúp paper có chiều sâu hơn. Với paper đa ngôn ngữ, cần trích dẫn các nguồn dữ liệu và công trình trước cho từng ngôn ngữ được nghiên cứu.

### Machine Learning

Related Work thường nằm ở cuối paper, đôi khi kèm một mục Background ngắn ở đầu. Với paper lý thuyết, Related Work có một chức năng đặc biệt: so sánh kết quả của paper với các kết quả lý thuyết đã biết, theo cùng giả định, chẳng hạn tốc độ hội tụ hay chặn sai số. Việc so sánh này thường được trình bày dưới dạng bảng. Bản Related Work mở rộng trong appendix là thực hành phổ biến, nhờ appendix không giới hạn độ dài.

## Tóm tắt

Related Work không phải danh sách tóm tắt tài liệu mà là một bản đồ định vị: nó chứng tỏ tác giả nắm lĩnh vực, khoanh vùng chính xác tính mới, và ghi nhận công lao người đi trước. Cấu trúc hiệu quả nhất là 2–4 đoạn có tiêu đề in đậm, mỗi đoạn giới thiệu một hướng, gom nhóm các công trình tiêu biểu và kết thúc bằng một câu phân biệt có thực chất và tôn trọng. Paper gần nhất cần được thảo luận riêng, còn concurrent work cần được nhắc tới thẳng thắn. Related Work thường ở Section 2 trong CV, và hay được đặt ở cuối paper trong ML và đôi khi trong NLP; mỗi vị trí đòi hỏi introduction đảm nhận một phần việc định vị tương ứng.

## Bài tập

1. Từ bảng tài liệu đã lập ở Chương 1, chọn ra 2–4 chủ đề cho Related Work của paper đang thực hiện. Với mỗi chủ đề, viết một câu phân biệt theo một trong bốn dạng khác biệt đã học (giả định, bối cảnh, cơ chế, mục tiêu).
2. Viết đầy đủ một đoạn Related Work theo cấu trúc ba bước: câu giới thiệu hướng, các công trình được gom nhóm, câu phân biệt. Sau đó xóa câu phân biệt và tự hỏi đoạn văn còn lại có giúp người đọc hiểu vị trí của paper không.
3. Xác định paper gần nhất với paper đang thực hiện. Viết một đoạn ngắn thảo luận riêng về nó và ghi lại ba vị trí trong paper (introduction, Related Work, Experiments) nơi nó cần được nhắc tới.
4. Lập một bảng so sánh tính chất cho paper. Với mỗi ô của các phương pháp khác, ghi lại nguồn (mục, bảng hoặc câu trong paper gốc) chứng minh cho giá trị của ô đó, để chắc chắn bảng chịu được sự kiểm tra của reviewer.
