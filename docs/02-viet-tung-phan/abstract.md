# Abstract

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Giải thích vì sao abstract là phần quyết định paper có được đọc kỹ hay không.
    - Viết abstract theo khuôn 5–6 câu và hiểu vai trò của từng câu trong khuôn.
    - Phân tích cấu trúc lập luận trong abstract của các paper kinh điển như ResNet và BERT.
    - Chẩn đoán và viết lại một abstract yếu, đồng thời điều chỉnh abstract cho phù hợp với cộng đồng CV, NLP hoặc ML.

Nếu title là lời mời đọc thì abstract là toàn bộ câu chuyện của paper được nén lại trong khoảng 150–250 từ. Đây là phần mà reviewer đọc khi bid, là phần area chair đọc khi phân công bài, và rất thường xuyên là phần *duy nhất* mà một người đọc trên arXiv hay Google Scholar đọc trước khi quyết định có tải PDF về hay không. Ấn tượng đầu tiên về chất lượng của paper, rằng ý tưởng có rõ không, kết quả có đáng kể không, người viết có làm chủ được câu chuyện không, hình thành ngay ở đây.

Vì phải nén nhiều thông tin vào ít chữ, abstract là một trong những phần khó viết nhất. Người viết lần đầu thường mắc hai lỗi trái ngược: hoặc viết quá chung chung, không có thông tin cụ thể nào, hoặc nhồi quá nhiều chi tiết kỹ thuật khiến người đọc không thấy được mạch chính. Bài này trình bày một khuôn 5–6 câu giúp tránh cả hai lỗi, phân tích cách hai paper kinh điển là ResNet và BERT viết abstract, thực hành viết lại một abstract yếu, và chỉ ra các khác biệt về kỳ vọng giữa ba cộng đồng.

## Abstract cần làm được những gì

Trước khi đi vào khuôn mẫu, cần xác định rõ yêu cầu. Một abstract tốt phải trả lời được bốn câu hỏi của người đọc, theo thứ tự: paper giải quyết vấn đề gì và vì sao vấn đề đó khó; các cách làm hiện có còn thiếu điều gì; paper làm điều gì khác và dựa trên ý tưởng nào; bằng chứng nào cho thấy cách làm đó hiệu quả. Một abstract thiếu bất kỳ câu trả lời nào trong bốn câu trên sẽ để lại một khoảng trống mà người đọc phải tự lấp, và thường họ lấp bằng giả định bất lợi cho paper.

Yêu cầu thứ hai là abstract phải **tự đứng được**. Nó thường được hiển thị tách rời khỏi paper: trên trang OpenReview, trong danh sách bidding, trong email thông báo của arXiv, trong cơ sở dữ liệu của Semantic Scholar. Vì vậy, abstract không nên tham chiếu tới hình, bảng hay mục trong paper, không nên dùng từ viết tắt chưa được định nghĩa ngay trong abstract, và hạn chế tối đa các ký hiệu toán học.

## Khuôn 5–6 câu

Khuôn dưới đây không phải là công thức bắt buộc, nhưng nó phản ánh trình tự lập luận mà phần lớn abstract tốt đều tuân theo. Cần hiểu "câu" ở đây là một *đơn vị chức năng*: trong thực tế, một đơn vị có thể được viết bằng hai câu, hoặc hai đơn vị có thể được gộp vào một câu. Điều quan trọng là trình tự và vai trò của từng đơn vị.

### Câu 1: Bối cảnh và vấn đề

Câu đầu tiên đặt người đọc vào đúng bài toán và, lý tưởng nhất, nêu luôn điều kiện khiến bài toán trở nên khó. Câu này phải đi thẳng vào vấn đề. Một câu mở đầu như "Deep learning has achieved great success in recent years" không mang thông tin gì cho reviewer, vì họ biết điều đó, và nó tiêu tốn chính vị trí quý giá nhất của abstract.

> *"[Task] is fundamental to [application], yet remains challenging when [condition]."*

### Câu 2: Khoảng trống

Câu thứ hai nêu hạn chế của các phương pháp hiện có, kèm *lý do* của hạn chế đó. Chỉ nói "existing methods have limitations" là chưa đủ; người đọc cần biết hạn chế nằm ở đâu và vì sao. Câu này thiết lập kỳ vọng: nó cho người đọc biết phương pháp sắp được giới thiệu cần vượt qua điều gì.

> *"Existing methods typically rely on [assumption], which [fails / is costly] in [setting]."*

### Câu 3: Insight

Câu thứ ba trình bày ý tưởng then chốt hoặc quan sát làm nền cho phương pháp. Đây là câu trả lời cho câu hỏi mà mọi reviewer đều đặt ra ngầm: vì sao cách làm này lại có lý, chứ không phải chỉ là một tổ hợp ngẫu nhiên các thành phần. Insight có thể là một quan sát thực nghiệm, một phân tích lý thuyết, hay một nhận xét về cấu trúc của bài toán.

> *"Our key insight is that [observation]."* hoặc *"We observe that [phenomenon]."*

### Câu 4: Phương pháp

Câu thứ tư (có thể kéo dài thành hai câu) giới thiệu phương pháp: tên gọi, loại phương pháp, và cơ chế chính. Câu này nên nối trực tiếp với insight ở câu trước, sao cho người đọc thấy phương pháp là hệ quả tự nhiên của insight. Ở mức abstract, chỉ cần mô tả *ý tưởng* của cơ chế, không cần chi tiết kiến trúc hay hàm mất mát.

> *"Based on this, we propose [Name], a [type of method] that [does what] by [how]."*

### Câu 5: Kết quả

Câu thứ năm đưa ra bằng chứng, và bằng chứng trong abstract nên là con số cụ thể: benchmark nào, metric nào, hơn phương pháp mạnh nhất trước đó bao nhiêu. Nếu phương pháp còn có ưu điểm về tốc độ, bộ nhớ hay khả năng tổng quát hóa sang tác vụ khác, đây là chỗ để nêu. Một abstract không có con số nào khiến người đọc nghi ngờ rằng kết quả không đủ ấn tượng để nêu ra.

> *"[Name] achieves [number] on [benchmark], outperforming prior art by [margin], while being [N×] faster."*

### Câu 6 (tùy chọn): Tác động hoặc tài nguyên

Câu cuối, nếu có, nói về ý nghĩa rộng hơn hoặc thông báo việc công bố code, mô hình, dữ liệu. Trong bản nộp ẩn danh, đường dẫn phải là đường dẫn ẩn danh hoặc được bỏ đi; ở bản camera-ready, câu này thường chứa link tới trang dự án.

> *"Code and models are available at [anonymous link]."*

### Tổng hợp khuôn

| Đơn vị | Vai trò | Câu hỏi được trả lời |
|---|---|---|
| Câu 1 | Bối cảnh và vấn đề | Bài toán gì, vì sao khó? |
| Câu 2 | Khoảng trống | Cách làm hiện có thiếu gì, vì sao? |
| Câu 3 | Insight | Ý tưởng then chốt là gì? |
| Câu 4 | Phương pháp | Paper làm gì, bằng cơ chế nào? |
| Câu 5 | Kết quả định lượng | Bằng chứng nào, mạnh đến đâu? |
| Câu 6 | Tác động, tài nguyên (tùy chọn) | Cộng đồng nhận được gì? |

## Phân tích abstract của ResNet

Abstract của *Deep Residual Learning for Image Recognition* (CVPR 2016) là một ví dụ mẫu mực về việc mọi câu đều mang thông tin. Dưới đây là diễn giải trình tự lập luận của nó, đối chiếu với khuôn ở trên.

Abstract mở đầu bằng một câu rất ngắn, phát biểu rằng mạng nơ-ron càng sâu thì càng khó huấn luyện. Câu này làm cùng lúc hai việc của câu 1 và câu 2 trong khuôn: nó nêu bối cảnh (độ sâu của mạng) và khoảng trống (khó huấn luyện) trong chưa đầy mười từ. Câu tiếp theo giới thiệu giải pháp ở mức cao nhất: một framework residual learning giúp huấn luyện các mạng sâu hơn đáng kể so với trước đó. Ngay sau đó, abstract nêu ý tưởng cụ thể: thay vì để mỗi nhóm layer học một hàm bất kỳ, các layer được định nghĩa lại để học *hàm dư* (residual function) so với đầu vào của chúng. Đây là insight và phương pháp gộp làm một.

Phần còn lại của abstract dành cho bằng chứng, được sắp theo ba tầng. Tầng thứ nhất là bằng chứng cho chính insight: các mạng residual dễ tối ưu hơn và đạt độ chính xác cao hơn khi tăng độ sâu. Tầng thứ hai là con số trên benchmark chính: mạng sâu tới 152 layer, sâu gấp tám lần mạng VGG nhưng có độ phức tạp tính toán thấp hơn; một ensemble các mạng này đạt 3.57% top-5 error trên tập test ImageNet và giành giải nhất ở tác vụ phân loại của ILSVRC 2015. Abstract còn nhắc tới phân tích trên CIFAR-10 với mạng 100 và 1000 layer. Tầng thứ ba là bằng chứng tổng quát hóa: nhờ biểu diễn rất sâu, kết quả phát hiện vật thể trên COCO cải thiện khoảng 28% tương đối, và các mạng residual là nền tảng cho những bài dự thi giành giải nhất ở nhiều hạng mục khác của ILSVRC và COCO 2015.

Từ ví dụ này có ba bài học. Thứ nhất, câu mở đầu có thể rất ngắn nếu nó trúng vấn đề; không cần một đoạn dẫn nhập dài. Thứ hai, các con số được chọn có chủ đích: con số về độ sâu (152 layer, gấp tám lần VGG) chứng minh claim "huấn luyện được mạng sâu hơn", còn con số về độ chính xác chứng minh claim "sâu hơn thì tốt hơn". Thứ ba, bằng chứng tổng quát hóa sang tác vụ khác biến một kết quả phân loại ảnh thành một đóng góp cho cả lĩnh vực. Cần lưu ý rằng việc dẫn kết quả thi đấu làm bằng chứng là đặc thù của bối cảnh năm 2015; ngày nay, kết quả trên benchmark công khai với so sánh công bằng là hình thức phổ biến hơn.

## Phân tích abstract của BERT

Abstract của *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding* (NAACL 2019) đi theo một trình tự khác, và sự khác biệt đó đáng để phân tích.

Thay vì mở bằng vấn đề, abstract của BERT mở bằng chính đóng góp: giới thiệu một mô hình biểu diễn ngôn ngữ mới tên là BERT, kèm giải nghĩa tên viết tắt. Câu thứ hai lập tức định vị BERT so với các mô hình biểu diễn ngôn ngữ ra đời ngay trước đó (ELMo và OpenAI GPT): khác với chúng, BERT được thiết kế để học trước (pre-train) các biểu diễn hai chiều sâu từ văn bản không gán nhãn, bằng cách đồng thời dựa vào ngữ cảnh bên trái và bên phải ở mọi layer. Như vậy, khoảng trống không được phát biểu như một vấn đề riêng mà được lồng vào câu so sánh: người đọc tự suy ra rằng các mô hình trước chỉ khai thác ngữ cảnh một chiều, hoặc chỉ ghép nối hai chiều một cách nông.

Câu thứ ba nêu hệ quả thực tiễn: mô hình đã học trước có thể được tinh chỉnh (fine-tune) chỉ với một layer đầu ra bổ sung để đạt kết quả tốt nhất trên nhiều tác vụ, như hỏi đáp và suy luận ngôn ngữ, mà không cần thay đổi kiến trúc đáng kể cho từng tác vụ. Câu này trả lời câu hỏi "cộng đồng được lợi gì", và nó là lý do chính khiến BERT được áp dụng rộng rãi.

Tiếp theo là một câu ngắn, có lẽ là câu nổi tiếng nhất của abstract: BERT "conceptually simple and empirically powerful". Câu này đóng vai trò bản lề. Nó tóm lại hai claim chính (đơn giản về ý tưởng, mạnh về thực nghiệm), đồng thời phòng trước một phản bác thường gặp, rằng ý tưởng chỉ là sự kết hợp các thành phần đã có. Bằng cách tự nhận là đơn giản, paper biến sự đơn giản thành một ưu điểm.

Abstract kết thúc bằng các con số: BERT đạt kết quả tốt nhất mới trên mười một tác vụ NLP, trong đó điểm GLUE lên 80.5 (tăng 7.7 điểm tuyệt đối), độ chính xác MultiNLI lên 86.7% (tăng 4.6 điểm), F1 trên tập test của SQuAD v1.1 lên 93.2 (tăng 1.5 điểm) và F1 trên SQuAD v2.0 lên 83.1 (tăng 5.1 điểm). Mỗi con số đi kèm tên benchmark cụ thể và mức cải thiện tuyệt đối, cho phép người đọc trong ngành đánh giá ngay tầm vóc của kết quả.

So sánh hai abstract cho thấy khuôn 5–6 câu có thể được hiện thực theo nhiều cách. ResNet đi từ vấn đề tới giải pháp; BERT đi từ đóng góp tới sự khác biệt. Cả hai đều có khoảng trống rất ngắn hoặc ẩn, insight gắn liền với phương pháp, và đều dành phần lớn số chữ cho bằng chứng định lượng trên nhiều tác vụ. Điểm chung quan trọng nhất là không có câu nào thừa.

## Thực hành: viết lại một abstract yếu

Để thấy khuôn 5–6 câu vận hành thế nào, hãy xem xét một abstract yếu và quá trình viết lại nó. Phương pháp DepthX và mọi con số dưới đây đều là **hư cấu**, chỉ dùng để minh họa.

<div class="bad" markdown>

**Bản yếu (hư cấu):** *"In recent years, deep learning has achieved great success in computer vision. 3D object detection is an important task. However, it is still challenging. In this paper, we propose a novel framework called DepthX. Our method contains several novel modules. Extensive experiments on several datasets show that our method achieves state-of-the-art performance."*

</div>

Chẩn đoán từng câu cho thấy vấn đề. Câu đầu tiên có thể mở đầu cho bất kỳ paper CV nào trong mười năm qua, nên nó không mang thông tin. Câu thứ hai và thứ ba nói rằng bài toán quan trọng và khó, nhưng không nói vì sao khó, khó trong điều kiện nào. Câu thứ tư và thứ năm dùng chữ "novel" hai lần mà không cho biết cái mới nằm ở đâu, và "several modules" khiến người đọc nghi rằng phương pháp là một tập hợp thành phần rời rạc. Câu cuối không có tên dataset, không có con số, không có mức cải thiện. Toàn bộ abstract không có insight nào.

Để viết lại, người viết cần trả lời bốn câu hỏi ở đầu bài. Vấn đề cụ thể là gì? Giả sử phân tích lỗi cho thấy phát hiện vật thể 3D từ ảnh đơn kém nhất ở các vật thể xa. Vì sao cách làm hiện có thất bại? Giả sử phần lớn lỗi ở khoảng cách xa đến từ ước lượng độ sâu. Ý tưởng then chốt là gì? Coi độ sâu là một phân phối thay vì một giá trị, và dùng ràng buộc hình học để tinh chỉnh. Bằng chứng là gì? Kết quả trên hai benchmark, kèm kết quả riêng cho nhóm vật thể xa.

<div class="good" markdown>

**Bản viết lại (hư cấu):** *"Monocular 3D object detection is attractive for low-cost autonomous driving, but its accuracy degrades sharply for distant objects. Through a systematic error analysis, we find that over 60% of errors for objects beyond 40m stem from depth estimation rather than classification or localization in the image plane. Motivated by this, we propose DepthX, which treats depth as a per-object distribution and refines it with geometric constraints from object height priors. DepthX is plug-and-play and adds less than 3% latency. On KITTI and nuScenes, it improves the strongest monocular baselines by +2.0 and +1.6 AP overall, and by +6.1 AP for objects beyond 40m."*

</div>

Bản viết lại đi đúng khuôn. Câu đầu nêu bài toán, ứng dụng và điều kiện khó (vật thể xa) trong một câu. Câu thứ hai gộp khoảng trống và insight: nó không chỉ nói phương pháp cũ kém mà chỉ ra *vì sao*, bằng một phân tích định lượng. Câu thứ ba giới thiệu phương pháp như một hệ quả trực tiếp của phân tích đó ("Motivated by this"). Câu thứ tư nêu một ưu điểm thực tiễn mà reviewer quan tâm (dễ tích hợp, chi phí thấp). Câu cuối đưa ra con số trên hai benchmark có tên, và đặc biệt có thêm con số riêng cho vật thể xa. Con số cuối cùng này "khép vòng" lập luận: nó cho thấy phương pháp cải thiện đúng ở chỗ mà phân tích lỗi đã chỉ ra, nên người đọc tin rằng insight là thật chứ không phải lời giải thích được dựng lên sau khi có kết quả.

## Một quy trình viết abstract

Từ khuôn và các ví dụ trên, có thể đề xuất một quy trình viết abstract gồm bốn bước. Bước đầu tiên là viết mỗi đơn vị chức năng thành đúng một câu, không quan tâm tới văn phong. Bước thứ hai là đọc lại và gộp hoặc tách câu sao cho mạch văn trôi chảy, như cách ResNet gộp bối cảnh với khoảng trống hay BERT gộp khoảng trống vào câu so sánh. Bước thứ ba là cắt mọi từ không mang thông tin ("novel", "very", "in this paper") và kiểm tra giới hạn độ dài. Bước cuối cùng là đưa abstract cho một đồng nghiệp chưa đọc paper và yêu cầu họ tóm tắt lại trong một câu; nếu câu tóm tắt của họ khác với câu chuyện một dòng mà người viết định truyền tải, abstract cần sửa tiếp.

!!! tip "Viết abstract sau cùng, nhưng phác sớm"
    Abstract chính thức nên được viết khi mọi con số đã chốt, vì nó phải khớp chính xác với kết quả trong paper. Tuy nhiên, nhiều hội nghị yêu cầu đăng ký abstract trước hạn nộp bài, và việc phác một abstract sớm còn là cách kiểm tra xem câu chuyện đã đủ rõ hay chưa. Nên coi bản phác sớm là một công cụ tư duy, và viết lại hoàn toàn trước khi nộp.

## Khác biệt giữa các cộng đồng

Khuôn 5–6 câu áp dụng được cho cả ba cộng đồng, nhưng mỗi cộng đồng nhấn vào những yếu tố khác nhau. Một abstract viết đúng giọng của cộng đồng mục tiêu giúp reviewer nhận ra ngay paper thuộc về đâu và đóng góp loại gì.

### Computer Vision

Abstract CV thường có con số trên các benchmark quen thuộc của task và hay nêu thêm ưu điểm về tốc độ hoặc chi phí tính toán, vì nhiều ứng dụng CV chạy trên thiết bị thực. Với các paper về sinh ảnh, dựng cảnh 3D hay chỉnh sửa ảnh, nơi chất lượng khó quy về một con số, abstract có thể mô tả định tính kết quả (chẳng hạn ảnh tổng hợp có độ chân thực cao), nhưng nên kèm ít nhất một metric định lượng. Ở bản camera-ready, abstract CV thường kết thúc bằng link tới trang dự án có video và demo.

### NLP

Abstract NLP thường nêu rõ tên dataset, tác vụ và **ngôn ngữ** được nghiên cứu. Abstract của Transformer (NeurIPS 2017), dù được công bố ở một hội nghị ML, là ví dụ điển hình cho cách viết này: nó nêu cụ thể kết quả 28.4 BLEU trên tác vụ dịch Anh–Đức của WMT 2014. Nếu nghiên cứu chỉ làm trên tiếng Anh, nhiều reviewer NLP mong abstract hoặc ít nhất introduction nói rõ điều đó. Abstract NLP cũng thường thông báo việc công bố tài nguyên (dataset, benchmark, công cụ đánh giá), vì ở cộng đồng này, tài nguyên được xem là một đóng góp có giá trị ngang với phương pháp.

### Machine Learning

Abstract ML thường nhấn mạnh **tính tổng quát** và **cơ sở lý thuyết** hơn là con số trên một benchmark cụ thể. Abstract của Adam (ICLR 2015) là ví dụ rõ nhất: nó gần như không có con số nào, mà liệt kê các tính chất của phương pháp (dễ cài đặt, hiệu quả về tính toán, tốn ít bộ nhớ, bất biến với việc co giãn gradient theo đường chéo, phù hợp với bài toán lớn, gradient nhiễu hoặc thưa), nêu một chặn regret về tốc độ hội tụ tương đương các kết quả tốt nhất đã biết trong khung tối ưu lồi trực tuyến, rồi mới nói rằng thực nghiệm cho thấy phương pháp hoạt động tốt so với các phương pháp tối ưu ngẫu nhiên khác. Abstract của DDPM (NeurIPS 2020) kết hợp cả hai: nó nêu một mối liên hệ lý thuyết mới giữa mô hình khuếch tán và denoising score matching, rồi đưa ra con số cụ thể trên CIFAR-10 (Inception score 9.46, FID 3.17). Người viết ML nên tự hỏi: ngoài con số, phương pháp có tính chất tổng quát nào đáng được nêu trong abstract?

## Abstract trên hệ thống nộp bài

Hầu hết các hội nghị ở cả ba cộng đồng hiện dùng OpenReview hoặc các hệ thống tương tự, trong đó abstract được nhập vào một ô văn bản riêng, tách khỏi file PDF. Ô này thường có **giới hạn số ký tự** (con số cụ thể tùy hội nghị), và các ký hiệu LaTeX có thể hiển thị không như mong muốn. Hai hệ quả thực tế: abstract nên được viết ở dạng văn bản thuần, gần như không có ký hiệu toán; và abstract trên hệ thống phải khớp với abstract trong PDF, vì reviewer đọc cả hai và sự khác biệt giữa chúng gây ấn tượng cẩu thả.

## Checklist abstract

Sau khi đã hiểu khuôn và các ví dụ, checklist dưới đây giúp rà soát abstract trước khi nộp.

- [ ] Câu đầu tiên đi thẳng vào bài toán, không mở bằng câu sáo rỗng kiểu "Deep learning has achieved…".
- [ ] Abstract nói rõ **vì sao** bài toán khó hoặc phương pháp cũ thất bại, không chỉ dùng chữ "challenging".
- [ ] Có một **insight** hoặc lý do giải thích vì sao phương pháp hoạt động.
- [ ] Phương pháp được giới thiệu như hệ quả của insight, ở mức ý tưởng, không sa vào chi tiết kiến trúc.
- [ ] Có ít nhất một đến hai **con số cụ thể**, kèm tên benchmark và mức cải thiện (hoặc, với paper ML lý thuyết, một phát biểu rõ ràng về kết quả lý thuyết).
- [ ] Thuật ngữ **nhất quán** với title và introduction.
- [ ] Không tham chiếu hình, bảng, mục; không có từ viết tắt chưa định nghĩa; hạn chế tối đa ký hiệu toán và trích dẫn.
- [ ] Nêu rõ dataset và ngôn ngữ khi chúng là một phần của đóng góp (đặc biệt với paper NLP).
- [ ] Abstract trên hệ thống nộp bài **khớp** với abstract trong PDF và nằm trong giới hạn ký tự.
- [ ] Link code hoặc dữ liệu (nếu có) là link ẩn danh trong bản nộp.

## Tóm tắt

Abstract là toàn bộ câu chuyện của paper trong 150–250 từ, phải tự đứng được và trả lời bốn câu hỏi: vấn đề gì, cách cũ thiếu gì, paper làm gì khác, bằng chứng nào. Khuôn 5–6 câu (bối cảnh, khoảng trống, insight, phương pháp, kết quả, tác động) cung cấp trình tự lập luận cho việc trả lời bốn câu hỏi ấy, và có thể được hiện thực linh hoạt như cách ResNet đi từ vấn đề còn BERT đi từ sự khác biệt. Một abstract mạnh không có câu thừa, có con số cụ thể, và tốt nhất là có một con số "khép vòng" cho thấy phương pháp cải thiện đúng chỗ mà insight chỉ ra. CV chú trọng benchmark và hiệu năng, NLP chú trọng dataset và ngôn ngữ, còn ML chú trọng tính tổng quát và lý thuyết.

## Bài tập

1. Viết abstract cho paper đang thực hiện theo đúng khuôn 5–6 câu, mỗi đơn vị một câu. Sau đó viết lại thành một đoạn văn trôi chảy dưới 200 từ, và đánh dấu xem mỗi câu trong bản cuối đảm nhận vai trò nào của khuôn.
2. Chọn ba paper gần với đề tài nhất được chấp nhận ở hội nghị mục tiêu trong hai năm gần đây. Với mỗi abstract, chia nó theo khuôn 5–6 câu và ghi lại đơn vị nào bị gộp, đơn vị nào bị lược, và những con số được nêu là gì.
3. Rà soát abstract đang viết cho paper và đánh dấu mọi từ không mang thông tin (chẳng hạn "novel", "effective", "in this paper", "extensive"). Thử xóa từng từ và kiểm tra xem câu có mất ý nào không; nếu không mất ý, từ đó nên bị cắt.
4. Viết hai phiên bản abstract cho cùng một paper: một phiên bản cho hội nghị CV hoặc NLP (nhấn benchmark và dataset), một phiên bản cho hội nghị ML (nhấn tính tổng quát và tính chất của phương pháp). So sánh xem phần nào thay đổi và phần nào giữ nguyên.
