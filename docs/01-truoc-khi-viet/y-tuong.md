# Tìm và thẩm định ý tưởng

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Nhận diện các kiểu đóng góp được chấp nhận ở hội nghị A\* trong Computer Vision, NLP và Machine Learning, cùng loại bằng chứng mà mỗi kiểu đòi hỏi.
    - Nhận ra bẫy "A + B" và biết cách biến một sự kết hợp thành một đóng góp có insight.
    - Tìm ý tưởng một cách có hệ thống từ những nguồn đáng tin cậy, thay vì chờ cảm hứng.
    - Thẩm định một ý tưởng bằng bộ câu hỏi chuẩn và quy trình tìm kiếm novelty ba tầng, đồng thời xử lý đúng các trường hợp concurrent work.
    - Thiết kế một pilot experiment với tiêu chí dừng được đặt ra từ trước.

Câu hỏi đầu tiên mà reviewer đặt ra khi đọc một paper không phải là "văn viết có hay không" mà là "paper này đóng góp điều gì mà cộng đồng chưa có". Trong form review của hầu hết hội nghị A\*, tiêu chí về tính mới (*novelty*, hay *originality*) và tầm quan trọng của đóng góp (*significance*) luôn giữ vị trí trung tâm, và nhận xét *"limited novelty"* là một trong những lý do reject phổ biến nhất (xem [Paper được đánh giá thế nào](../00-tong-quan/review-process.md)). Vì vậy, thời gian dành cho việc chọn và thẩm định ý tưởng là khoản đầu tư có lợi nhất trong cả dự án: vài tuần cân nhắc kỹ có thể giúp tránh nhiều tháng theo đuổi một hướng đã có người đi trước, hoặc một hướng đúng nhưng không đủ "nặng" cho một hội nghị A\*.

Bài này đi theo trình tự tự nhiên của quá trình hình thành một dự án. Trước hết, chúng ta xem xét các kiểu đóng góp mà cộng đồng chấp nhận, vì hiểu rõ đích đến sẽ giúp định hướng việc tìm ý tưởng. Tiếp theo là cái bẫy phổ biến nhất của paper đầu tay, tức việc ghép hai thành phần có sẵn, cùng cách thoát khỏi nó. Sau đó bài trình bày các nguồn ý tưởng, bộ câu hỏi thẩm định, quy trình kiểm tra novelty, cách xử lý concurrent work, và cuối cùng là pilot experiment để kiểm tra tín hiệu trước khi dồn toàn bộ nguồn lực vào một hướng.

## Các kiểu đóng góp được chấp nhận

Một quan niệm sai lầm khá phổ biến là paper A\* nào cũng phải là "phương pháp mới đánh bại SOTA" (*state of the art*, kết quả tốt nhất hiện có). Thực tế, các hội nghị hàng đầu chấp nhận nhiều kiểu đóng góp khác nhau, và không ít paper có ảnh hưởng lớn nhất trong lịch sử ngành không thuộc kiểu "đánh bại SOTA". Xác định sớm paper thuộc kiểu nào mang lại hai lợi ích. Thứ nhất, nó quyết định loại bằng chứng cần chuẩn bị: một paper dataset được đánh giá qua chất lượng và độ hữu ích của dữ liệu, không phải qua việc phương pháp của tác giả đứng đầu bảng kết quả. Thứ hai, nó quyết định giọng điệu của paper: một paper phân tích cần thuyết phục người đọc rằng phát hiện là đáng tin và có ý nghĩa tổng quát, trong khi một paper phương pháp cần thuyết phục rằng thiết kế có lý do và mang lại hiệu quả thực sự.

Các mục dưới đây trình bày những kiểu đóng góp chính, mỗi kiểu kèm ví dụ từ cả ba cộng đồng. Ranh giới giữa các kiểu không tuyệt đối, và nhiều paper lớn kết hợp vài kiểu cùng lúc. Tuy vậy, một paper tốt thường có một kiểu đóng góp *chủ đạo* mà người đọc nhận ra ngay từ abstract; khi một paper cố gắng vừa là phương pháp mới, vừa là benchmark mới, vừa là phân tích sâu, nó thường không làm tốt kiểu nào.

### Phương pháp, thuật toán và kiến trúc mới

Đây là kiểu đóng góp quen thuộc nhất: tác giả đề xuất một cách làm mới cho một bài toán đã được định nghĩa rõ và chứng minh rằng cách làm đó tốt hơn những gì đang có. Ở Computer Vision, ResNet (CVPR 2016) là ví dụ kinh điển: kết nối tắt (*shortcut connection*) cho phép mạng học phần dư (*residual*) thay vì học trực tiếp ánh xạ mong muốn, nhờ đó huấn luyện được mạng sâu hàng trăm lớp. Ở NLP, BERT (NAACL 2019) là một đóng góp về phương pháp pre-training: mục tiêu *masked language modeling* cho phép học biểu diễn hai chiều sâu, sau đó chỉ cần fine-tune với một lớp đầu ra đơn giản cho nhiều tác vụ khác nhau. Ở Machine Learning, Adam (ICLR 2015) là một thuật toán tối ưu với tốc độ học thích nghi cho từng tham số, còn Transformer (NeurIPS 2017) là một kiến trúc dựa hoàn toàn vào cơ chế attention, bỏ hẳn recurrence và convolution.

Với kiểu đóng góp này, reviewer mong đợi ba loại bằng chứng: so sánh với các baseline mạnh nhất hiện có trên benchmark chuẩn, ablation (thí nghiệm loại bỏ hoặc thay thế từng thành phần) cho thấy mỗi thành phần đều cần thiết, và một lý giải thuyết phục vì sao thiết kế lại hiệu quả. Ở cộng đồng ML, lý giải đó thường đi kèm phân tích lý thuyết (paper Adam có một phân tích hội tụ trong thiết lập online convex) hoặc thí nghiệm trên nhiều loại bài toán khác nhau để chứng minh tính tổng quát.

### Cách đặt bài toán hoặc cách mô hình hóa mới

Một số paper có giá trị không nằm ở việc giải tốt hơn một bài toán cũ, mà ở việc nhìn bài toán theo một cách mới. NeRF (ECCV 2020) biểu diễn một cảnh 3D bằng một hàm liên tục, được tham số hóa bởi một mạng MLP, ánh xạ vị trí và hướng nhìn thành mật độ và màu sắc, rồi kết hợp với volume rendering khả vi để tổng hợp góc nhìn mới. Panoptic Segmentation (CVPR 2019) hợp nhất semantic segmentation và instance segmentation thành một bài toán chung, kèm một metric mới (Panoptic Quality) để đánh giá. Ở ML, DDPM (NeurIPS 2020) cho thấy các mô hình khuếch tán (*diffusion probabilistic models*) có thể sinh ảnh chất lượng cao, đồng thời chỉ ra mối liên hệ giữa chúng với denoising score matching và đưa ra một mục tiêu huấn luyện đơn giản là dự đoán nhiễu. Ở NLP, retrieval-augmented generation (NeurIPS 2020) đặt vấn đề kết hợp bộ nhớ tham số của mô hình ngôn ngữ với bộ nhớ phi tham số là một kho văn bản được truy xuất.

Bằng chứng cho kiểu đóng góp này khác với kiểu trước ở một điểm quan trọng: tác giả phải thuyết phục được rằng cách đặt vấn đề mới là *đúng đắn và có ích*, chứ không chỉ cho thấy phương pháp của mình đạt số liệu cao. Điều đó đòi hỏi lập luận rõ ràng về giới hạn của cách nhìn cũ, metric và benchmark hợp lý cho bài toán mới, và những baseline mạnh được điều chỉnh một cách công bằng sang thiết lập mới.

### Dataset và benchmark

Dữ liệu và thước đo định hình hướng đi của cả một lĩnh vực. ImageNet (CVPR 2009) và COCO (ECCV 2014) là nền móng cho phần lớn tiến bộ của Computer Vision trong hơn một thập kỷ. Ở NLP, SQuAD (EMNLP 2016) đã đưa bài toán đọc hiểu trích xuất (*extractive reading comprehension*) thành một chuẩn đánh giá phổ biến, còn GLUE gom nhiều tác vụ hiểu ngôn ngữ vào một benchmark thống nhất, trở thành thước đo chính cho thế hệ mô hình pre-training như BERT. Cộng đồng ML cũng ngày càng coi trọng kiểu đóng góp này, thể hiện qua việc NeurIPS có một track riêng cho datasets và benchmarks trong những năm gần đây.

Reviewer đánh giá một paper dataset qua quy mô, chất lượng nhãn (quy trình gán nhãn, mức độ đồng thuận giữa người gán nhãn), các phân tích thống kê về dữ liệu, kết quả của các baseline hiện có và đặc biệt là việc dataset chỉ ra được điểm yếu nào của các phương pháp hiện tại. Một benchmark mà mọi mô hình đều đạt gần tối đa ngay khi ra đời gần như không có giá trị. Ngoài ra, các vấn đề về giấy phép sử dụng, quyền riêng tư và tài liệu mô tả dữ liệu (theo tinh thần của *Datasheets for Datasets*) ngày càng được xem xét nghiêm túc.

### Phương pháp luận đánh giá

Gần với dataset nhưng khác về bản chất là những paper đề xuất *cách đánh giá* mới. CheckList (ACL 2020, best paper) mượn ý tưởng kiểm thử phần mềm để xây dựng một phương pháp kiểm thử hành vi (*behavioral testing*) cho mô hình NLP: thay vì chỉ đo độ chính xác trên một tập test, người đánh giá thiết kế các bài kiểm tra theo từng năng lực ngôn ngữ (phủ định, từ vựng, thực thể…) và từng loại kiểm thử, qua đó phát hiện ra những lỗi mà độ chính xác tổng thể che khuất, kể cả ở các mô hình thương mại. Ở Computer Vision, *A Metric Learning Reality Check* (ECCV 2020) đánh giá lại các phương pháp metric learning trong cùng một thiết lập công bằng và cho thấy phần lớn cải tiến được báo cáo trong nhiều năm nhỏ hơn đáng kể so với công bố ban đầu.

Kiểu đóng góp này được đánh giá cao khi nó làm thay đổi cách cộng đồng đo lường tiến bộ. Bằng chứng cốt lõi là cho thấy phương pháp đánh giá mới phát hiện được những điều mà cách đánh giá cũ bỏ sót, và nó đủ đơn giản, đủ tổng quát để người khác áp dụng được.

### Phân tích và hiểu biết

Có những paper không đề xuất phương pháp nào mới mà trả lời câu hỏi "điều gì thực sự quan trọng" hoặc "vì sao mô hình hoạt động như vậy". *A ConvNet for the 2020s* (ConvNeXt, CVPR 2022) lần lượt "hiện đại hóa" một ResNet theo từng lựa chọn thiết kế của vision transformer và cho thấy một mạng thuần convolution vẫn có thể cạnh tranh với Swin Transformer; giá trị lớn nhất của paper nằm ở lộ trình từng bước cho biết quyết định thiết kế nào đóng góp bao nhiêu. Ở NLP, dòng nghiên cứu probing và phân tích mô hình rất phát triển: *BERT Rediscovers the Classical NLP Pipeline* (ACL 2019) và *A Structural Probe for Finding Syntax in Word Representations* (NAACL 2019) tìm hiểu những thông tin ngôn ngữ nào được mã hóa trong biểu diễn của mô hình, còn *Annotation Artifacts in Natural Language Inference Data* (NAACL 2018) và *Right for the Wrong Reasons* (ACL 2019) cho thấy mô hình có thể đạt điểm cao nhờ khai thác các dấu hiệu bề mặt của dữ liệu thay vì thực sự suy luận. Ở ML, *Understanding Deep Learning Requires Rethinking Generalization* (ICLR 2017) cho thấy mạng nơ-ron sâu có thể khớp hoàn hảo cả nhãn ngẫu nhiên, đặt dấu hỏi lớn cho các thước đo độ phức tạp truyền thống trong việc giải thích khả năng tổng quát hóa; *On the Convergence of Adam and Beyond* (ICLR 2018) chỉ ra một vấn đề trong lập luận hội tụ của Adam; còn *The Lottery Ticket Hypothesis* (ICLR 2019) đưa ra một giả thuyết thực nghiệm về sự tồn tại của các mạng con có thể huấn luyện hiệu quả.

Điểm chung của những paper này là chúng đem lại một hiểu biết mà người đọc có thể mang sang công việc của mình. Reviewer kỳ vọng thí nghiệm có kiểm soát chặt chẽ, loại trừ được các giải thích thay thế, kết luận đúng trên nhiều mô hình và dataset, và lý tưởng nhất là có tính bất ngờ hoặc thay đổi được thực hành của cộng đồng. Một paper phân tích chỉ khẳng định lại điều mọi người đã ngầm biết thường khó được chấp nhận.

### Paradigm và framework tổng quát

Một số ít paper mở ra cả một cách làm mới cho nhiều bài toán. Segment Anything (ICCV 2023) đóng góp đồng thời một tác vụ (promptable segmentation), một mô hình và một "data engine" để thu thập dữ liệu quy mô rất lớn. MAE (CVPR 2022) cho thấy masked autoencoding là một phương pháp self-supervised pre-training đơn giản và hiệu quả cho ảnh, còn CLIP (ICML 2021) học biểu diễn thị giác từ cặp ảnh và văn bản, cho phép phân loại zero-shot. Ở NLP, GPT-3 (NeurIPS 2020) phổ biến khái niệm in-context learning: mô hình ngôn ngữ đủ lớn có thể thực hiện tác vụ mới chỉ từ vài ví dụ trong prompt, không cần cập nhật tham số. Kiểu đóng góp này thường đòi hỏi nguồn lực lớn, và bằng chứng là hiệu quả trên rất nhiều tác vụ, khả năng chuyển giao và hành vi khi tăng quy mô (*scaling*).

### Hiệu quả tính toán

Đóng góp về hiệu quả nhắm vào chi phí: làm cho mô hình nhanh hơn, nhẹ hơn hoặc rẻ hơn để huấn luyện mà không hy sinh quá nhiều chất lượng. MobileNet là ví dụ quen thuộc ở Computer Vision với depthwise separable convolution. FlashAttention (NeurIPS 2022) tính attention chính xác nhưng tổ chức lại phép tính theo hướng tối ưu truy cập bộ nhớ của GPU, nhờ đó nhanh hơn và tốn ít bộ nhớ hơn. LoRA (ICLR 2022) fine-tune mô hình ngôn ngữ lớn bằng cách chỉ học các ma trận cập nhật hạng thấp, giảm mạnh số tham số cần huấn luyện. Reviewer đòi hỏi các phép đo trên phần cứng thực (không chỉ FLOPs lý thuyết), đường cong đánh đổi giữa chất lượng và chi phí, và thiết lập so sánh công bằng.

### Ứng dụng có insight kỹ thuật

Cuối cùng, các paper ứng dụng vào một miền cụ thể (ảnh y tế, viễn thám, ngôn ngữ ít tài nguyên, khoa học tự nhiên…) hoàn toàn có chỗ đứng ở hội nghị A\*, với điều kiện chúng chỉ ra được một thách thức kỹ thuật *đặc thù* của miền đó và cách giải quyết có giá trị vượt ra ngoài miền ứng dụng. Một paper chỉ "áp dụng mô hình có sẵn vào dữ liệu mới" thường được khuyên chuyển sang hội nghị hoặc tạp chí chuyên ngành.

### Tổng hợp

Bảng dưới đây tóm tắt các kiểu đóng góp vừa trình bày cùng bằng chứng mà reviewer thường mong đợi.

| Kiểu đóng góp | Ví dụ (CV / NLP / ML) | Bằng chứng reviewer mong đợi |
|---|---|---|
| Phương pháp, thuật toán, kiến trúc | ResNet / BERT / Adam, Transformer | Thắng baseline mạnh trên benchmark chuẩn, ablation, lý giải thiết kế |
| Cách đặt bài toán, mô hình hóa mới | NeRF, Panoptic Segmentation / RAG / DDPM | Lập luận về giới hạn của cách nhìn cũ, metric hợp lý, baseline được điều chỉnh công bằng |
| Dataset, benchmark | ImageNet, COCO / SQuAD, GLUE / track Datasets & Benchmarks | Quy mô, chất lượng nhãn, thống kê, baseline, chỉ ra điểm yếu của phương pháp hiện có |
| Phương pháp luận đánh giá | Metric Learning Reality Check / CheckList | Phát hiện điều mà đánh giá cũ bỏ sót, dễ áp dụng lại |
| Phân tích, hiểu biết | ConvNeXt / các paper probing / Rethinking Generalization | Thí nghiệm có kiểm soát, loại trừ giải thích thay thế, kết luận tổng quát và bất ngờ |
| Paradigm, framework | SAM, MAE, CLIP / GPT-3 | Hiệu quả trên nhiều tác vụ, chuyển giao, scaling |
| Hiệu quả tính toán | MobileNet / LoRA / FlashAttention | Đo trên phần cứng thực, đường cong đánh đổi, thiết lập công bằng |
| Ứng dụng có insight | Y tế, viễn thám, ngôn ngữ ít tài nguyên | Thách thức kỹ thuật đặc thù, giá trị vượt ra ngoài miền ứng dụng |

## Khác biệt giữa các cộng đồng

Dù các kiểu đóng góp trên xuất hiện ở cả ba cộng đồng, mỗi cộng đồng có những "khẩu vị" riêng mà người viết cần biết để chọn hội nghị phù hợp và nhấn đúng chỗ. Chương 6 trình bày kỹ hơn về [đặc thù của NLP](../06-cong-dong/nlp.md) và [đặc thù của ML](../06-cong-dong/ml.md); ở đây chỉ nêu những khác biệt liên quan trực tiếp tới việc chọn ý tưởng.

### Computer Vision

Cộng đồng CV có truyền thống mạnh về paper phương pháp được kiểm chứng trên benchmark chuẩn, với kết quả định lượng đi kèm hình ảnh minh họa trực quan. Bài toán mới và dataset mới được đón nhận nếu chúng mở ra một hướng nghiên cứu rõ ràng. Paper phân tích được chấp nhận khi kết luận của nó thay đổi thực hành, như trường hợp ConvNeXt. Reviewer CV thường đặc biệt chú ý tới việc so sánh với các phương pháp mới nhất trong vòng một năm trở lại.

### NLP

Các hội nghị thuộc hệ ACL (nộp qua ACL Rolling Review) phân biệt long paper và short paper (điển hình là 8 và 4 trang nội dung), và short paper là lựa chọn hợp lý cho một phát hiện tập trung hoặc một phân tích gọn. Các hội nghị này thường có những track riêng cho tài nguyên và đánh giá (*resources and evaluation*) và cho diễn giải, phân tích mô hình (*interpretability and analysis*), cho thấy cộng đồng NLP coi trọng các kiểu đóng góp ngoài phương pháp. Tài nguyên cho ngôn ngữ ít dữ liệu, đánh giá đa ngôn ngữ và các vấn đề xã hội của công nghệ ngôn ngữ cũng là những hướng được quan tâm. Ngoài main conference, *Findings* là một kênh công bố bổ sung cho những paper vững chắc nhưng chưa đủ nổi bật.

### Machine Learning

NeurIPS, ICML và ICLR chấp nhận cả paper lý thuyết thuần túy, điều hiếm gặp ở hai cộng đồng còn lại. Reviewer ML thường hỏi "vì sao phương pháp hoạt động" và "dưới những giả định nào", nên một phương pháp có cơ sở nguyên lý (*principled*) và áp dụng được cho nhiều miền dữ liệu thường được đánh giá cao hơn một phương pháp chỉ tốt trên một benchmark. Bên cạnh main track, những năm gần đây NeurIPS có track cho datasets và benchmarks, ICML có track cho position paper; người viết nên kiểm tra Call for Papers của năm nộp để biết các track đang mở.

## Bẫy "A + B" và cách thoát

Sau khi đã biết các kiểu đóng góp được chấp nhận, chúng ta cần nhìn thẳng vào kiểu ý tưởng *không* được chấp nhận phổ biến nhất ở paper đầu tay: lấy một thành phần có sẵn A ghép vào một phương pháp hoặc thiết lập có sẵn B, đạt được một mức cải thiện nhỏ, rồi viết paper. Ở Computer Vision, đó có thể là "thêm một attention module vào backbone và tăng 0,8 điểm mIoU". Ở NLP, đó có thể là "thêm bước truy xuất tài liệu vào một pipeline hỏi đáp có sẵn và tăng 1 điểm F1 trên một dataset". Ở ML, đó có thể là "cộng thêm một regularizer đã biết vào loss của một phương pháp self-supervised". Nhận xét quen thuộc của reviewer cho những paper này là *"incremental"* hoặc *"a straightforward combination of existing techniques"*.

Lý do reviewer phản ứng như vậy không phải vì họ coi thường sự kết hợp, mà vì paper không để lại cho người đọc hiểu biết nào ngoài một con số. Bất kỳ ai trong lĩnh vực cũng có thể nghĩ ra sự kết hợp đó; mức cải thiện nhỏ có thể đến từ việc tune hyperparameter kỹ hơn hoặc thêm tham số; và không có gì đảm bảo kết quả còn đúng trên một backbone hay một dataset khác.

Điều thú vị là nhiều paper rất có ảnh hưởng, nếu chỉ nhìn bề ngoài, cũng là "A + B". Vision Transformer về hình thức là "Transformer + các mảnh ảnh", còn MAE là "masked modeling của BERT + ảnh". Điều khiến chúng khác biệt nằm ở chỗ chúng giải thích được vì sao sự kết hợp hiển nhiên đó trước đây chưa thành công, và rút ra một hiểu biết có thể chuyển giao. Vision Transformer cho thấy khi dữ liệu pre-training đủ lớn, các thiên kiến quy nạp (*inductive bias*) của convolution trở nên kém cần thiết. MAE chỉ ra rằng ảnh có độ dư thừa không gian cao hơn văn bản rất nhiều, nên phải che một tỉ lệ lớn (khoảng 75%) các mảnh ảnh thì bài toán tái tạo mới đủ khó để buộc mô hình học biểu diễn có ý nghĩa. Chính những hiểu biết này, chứ không phải bản thân sự kết hợp, là đóng góp.

Từ đó có thể rút ra bốn cách thoát khỏi bẫy "A + B". Cách thứ nhất là **bắt đầu từ vấn đề chứ không bắt đầu từ thành phần**: chẩn đoán một kiểu thất bại cụ thể của phương pháp hiện có, rồi mới chọn công cụ để giải quyết nó; khi đó A không còn là một lựa chọn ngẫu nhiên mà là câu trả lời cho một chẩn đoán. Cách thứ hai là **chỉ ra vì sao kết hợp ngây thơ không hoạt động** và biến cách vượt qua rào cản đó thành đóng góp kỹ thuật. Cách thứ ba là **rút ra và kiểm chứng một insight tổng quát** trên nhiều backbone, nhiều dataset, hoặc nhiều ngôn ngữ, để người đọc tin rằng hiểu biết này không chỉ đúng trong một thiết lập. Cách thứ tư là **đổi khung trình bày**: thay vì "chúng ta kết hợp A với B", paper trình bày một lời giải cho bài toán Z, trong đó sự kết hợp chỉ là một cách hiện thực hóa lời giải. Cách thứ tư chỉ có tác dụng khi ba cách đầu đã có nội dung thật; đổi khung mà không có insight chỉ là đổi lời.

Hai câu mô tả đóng góp dưới đây (ví dụ giả định) cho thấy sự khác biệt.

<div class="bad" markdown>
*"We incorporate a cross-attention module into a ResNet-50 backbone and improve mIoU by 0.8 points on ADE20K."*

Câu này chỉ mô tả thao tác và con số. Reviewer không biết vì sao module giúp ích, giúp ích ở đâu, và liệu điều đó có còn đúng ngoài thiết lập này hay không.
</div>

<div class="good" markdown>
*"We find that current segmentation backbones systematically fail on thin structures because repeated downsampling erases them before global context is aggregated. Based on this analysis, we propose a context module that operates before the first downsampling stage. It halves the error on thin-structure classes and yields consistent gains across three backbones and two datasets."*

Câu này có chẩn đoán (lỗi có hệ thống ở cấu trúc mảnh), cơ chế (downsampling xóa mất chi tiết), giải pháp xuất phát từ cơ chế, và bằng chứng về tính tổng quát.
</div>

## Ý tưởng đến từ đâu?

Câu hỏi tự nhiên tiếp theo là làm sao có được những ý tưởng vượt qua bẫy "A + B". Kinh nghiệm của những nhà nghiên cứu thành công cho thấy ý tưởng tốt hiếm khi đến từ cảm hứng bất chợt; chúng thường là sản phẩm của những thói quen làm việc có hệ thống. Dưới đây là các nguồn ý tưởng đáng tin cậy nhất, mỗi nguồn kèm ví dụ minh họa.

**Thất bại có hệ thống của phương pháp hiện có.** Cách trực tiếp nhất là chạy phương pháp SOTA trên dữ liệu thực và nhìn kỹ vào các trường hợp thất bại (*failure cases*). Một lỗi xuất hiện ngẫu nhiên chỉ là nhiễu, nhưng một lỗi lặp lại có quy luật là một bài toán. Một detector liên tục bỏ sót vật thể nhỏ, một mô hình ngôn ngữ liên tục hiểu sai câu phủ định (đúng loại lỗi mà CheckList đã làm lộ ra), hay một thuật toán tối ưu liên tục mất ổn định khi tăng batch size, đều là điểm khởi đầu tốt. Ưu điểm của nguồn này là bài toán đến kèm bằng chứng về tầm quan trọng của nó.

**Giả định ngầm bị vi phạm.** Mọi phương pháp đều dựa trên những giả định mà đôi khi chính tác giả không nói ra. Ở Computer Vision, đó có thể là cảnh tĩnh, camera đã được hiệu chỉnh, hay ảnh có chất lượng tốt. Ở NLP, đó có thể là ngôn ngữ test giống ngôn ngữ train, văn bản chuẩn mực, hay mặc định tiếng Anh. Ở ML, đó có thể là dữ liệu độc lập và cùng phân phối (*i.i.d.*), phân phối không đổi theo thời gian, hay nhãn sạch. Tìm một thiết lập thực tế nơi giả định đó sai, rồi cho thấy phương pháp hiện có sụp đổ ở đó, là một con đường kinh điển dẫn tới bài toán mới.

**Chuyển giao ý tưởng giữa các mảng.** Rất nhiều bước tiến lớn đến từ việc mang một ý tưởng thành công ở mảng này sang mảng khác: Transformer từ NLP sang thị giác, masked modeling từ BERT sang MAE, mô hình khuếch tán từ những nghiên cứu ML về mô hình sinh sang các ứng dụng sinh ảnh. Câu hỏi đáng đặt ra là: "Ý tưởng X đã thành công ở mảng A, vì sao chưa ai làm ở mảng B?" Nếu câu trả lời là "vì có một rào cản kỹ thuật", thì cách vượt qua chính rào cản đó là đóng góp. Nếu câu trả lời là "chưa ai nghĩ tới", người viết nên tìm kiếm kỹ hơn, vì khả năng cao là đã có người làm.

**Đơn giản hóa.** Khi một phương pháp có năm thành phần, rất có thể chỉ một hoặc hai thành phần thực sự quan trọng. Những paper cho thấy một phương pháp đơn giản, nếu được thiết kế và tune cẩn thận, đạt kết quả ngang hoặc hơn các phương pháp phức tạp thường được cộng đồng đánh giá rất cao, vì chúng giúp mọi người hiểu điều gì thực sự tạo ra tiến bộ. ConvNeXt ở CV và những nghiên cứu cho thấy một baseline LSTM được điều chuẩn tốt vẫn vượt nhiều kiến trúc mới hơn ở bài toán language modeling là những ví dụ tiêu biểu.

**Quy mô và chế độ dữ liệu.** Hành vi của phương pháp thường thay đổi về chất khi dữ liệu hoặc mô hình tăng hay giảm một vài bậc độ lớn. Hướng tăng quy mô đòi hỏi tài nguyên lớn, nhưng hướng ngược lại, tức nghiên cứu chế độ ít dữ liệu, ít tính toán hoặc ngôn ngữ ít tài nguyên, lại phù hợp với các nhóm có nguồn lực hạn chế và thường bị bỏ ngỏ.

**Phần Limitations và Future Work của paper khác.** Các paper mới nhất thường tự liệt kê những hạn chế và hướng mở của chúng. Ở các hội nghị thuộc hệ ACL, phần Limitations đã trở thành bắt buộc trong những năm gần đây, nên đây là một nguồn đặc biệt phong phú. Tuy nhiên, những hướng mở được nêu công khai cũng là những hướng mà nhiều nhóm khác đọc được, nên tốc độ và chiều sâu là yếu tố quyết định.

**Năng lực mới đặt ra câu hỏi mới.** Mỗi khi một thế hệ mô hình mới xuất hiện, như các mô hình ngôn ngữ lớn hay các mô hình nền tảng đa phương thức, nó kéo theo hàng loạt câu hỏi chưa có lời đáp: đánh giá chúng thế nào cho đúng, dữ liệu test có bị lộ vào dữ liệu huấn luyện hay không, chúng thất bại ở đâu, có thể làm chúng rẻ hơn ra sao. Những câu hỏi này thường mở cho các nhóm không cần tài nguyên khổng lồ.

**Tái lập kết quả.** Cố gắng tái lập (*reproduce*) một paper quan trọng là cách học sâu nhất về một lĩnh vực. Khi kết quả tái lập không khớp với công bố, nguyên nhân thường nằm ở một chi tiết ẩn mà chính nó có thể trở thành một phát hiện có giá trị.

## Bộ câu hỏi thẩm định

Khi đã có một ý tưởng ứng viên, bước tiếp theo là thẩm định nó trước khi đầu tư vài tháng công sức. Một công cụ hữu ích cho việc này là bộ câu hỏi lấy cảm hứng từ *Heilmeier Catechism*, bộ câu hỏi nổi tiếng từng được dùng để đánh giá các đề xuất nghiên cứu: đang cố gắng làm gì (nói không dùng biệt ngữ), hiện nay người ta làm thế nào và giới hạn ở đâu, cái mới là gì và vì sao nó sẽ thành công, ai quan tâm, rủi ro là gì, và làm sao biết mình đã thành công. Phiên bản dưới đây được điều chỉnh cho bối cảnh paper hội nghị.

Điều quan trọng là trả lời các câu hỏi này **bằng văn bản**, không chỉ trong đầu. Việc phải viết ra buộc người nghiên cứu đối diện với những chỗ mơ hồ mà suy nghĩ thoáng qua dễ dàng bỏ qua. Hơn nữa, những câu trả lời này chính là bản nháp đầu tiên của phần Introduction (xem [Introduction & Figure 1](../02-viet-tung-phan/introduction.md)) và của bản pitch một trang ở bài [Xây "câu chuyện" của paper](cau-chuyen.md).

- [ ] **Bài toán là gì**, trong một câu, không dùng thuật ngữ do chính nhóm tác giả đặt ra?
- [ ] **Vì sao bài toán quan trọng?** Ai sẽ dùng kết quả này, và một con số thực tế nào cho thấy tầm quan trọng của nó?
- [ ] **Các phương pháp hiện tại làm gì và thất bại ở đâu?** Có ví dụ cụ thể hoặc hình minh họa cho thất bại đó không?
- [ ] **Insight là gì?** Không phải "phương pháp của nhóm", mà là quan sát hoặc hiểu biết khiến phương pháp hoạt động.
- [ ] **Đã tìm kiếm kỹ chưa?** Đã kiểm tra arXiv trong sáu tháng gần nhất, các kho của hội nghị và OpenReview chưa (xem mục tìm kiếm ba tầng bên dưới)?
- [ ] **Bằng chứng nào sẽ thuyết phục một reviewer khó tính?** Benchmark, baseline và metric cụ thể là gì?
- [ ] **Có đủ tài nguyên** (GPU, dữ liệu, người gán nhãn, thời gian) để tạo ra bằng chứng đó trước deadline không?
- [ ] **Nếu một nhóm khác công bố ý tưởng tương tự vào tuần sau, paper còn lại giá trị gì?**

Trong tám câu hỏi, hai câu thường bộc lộ nhiều vấn đề nhất. Câu về insight phân biệt một ý tưởng có chiều sâu với một sự kết hợp ngẫu nhiên: nếu chỉ có thể mô tả "làm gì" mà không giải thích được "vì sao điều đó hiệu quả", ý tưởng có nguy cơ rơi vào bẫy "A + B". Câu cuối cùng kiểm tra độ "dày" của đóng góp: một paper mà toàn bộ giá trị nằm ở việc là người đầu tiên thử một ý tưởng hiển nhiên sẽ mất hết giá trị khi có người khác công bố trước, trong khi một paper có phân tích sâu, thiết lập đánh giá tốt hoặc insight riêng vẫn đứng vững ngay cả khi có công trình tương tự.

## Tìm kiếm novelty ba tầng

Câu hỏi "đã tìm kiếm kỹ chưa?" xứng đáng có một quy trình riêng, vì tốc độ công bố trong cả ba cộng đồng hiện nay rất cao và việc bỏ sót một công trình gần là rủi ro lớn nhất đối với novelty. Một cuộc tìm kiếm qua loa với một hai từ khóa thường không đủ, vì cùng một ý tưởng có thể được gọi bằng những tên rất khác nhau ở các cộng đồng khác nhau. Quy trình dưới đây gồm ba tầng, mỗi tầng bắt được những gì tầng trước bỏ lọt.

### Tầng thứ nhất: từ khóa

Ở tầng này, người nghiên cứu diễn đạt ý tưởng theo năm đến mười cách khác nhau, bao gồm cả thuật ngữ mà các cộng đồng lân cận có thể dùng. Chẳng hạn, ý tưởng điều chỉnh mô hình ngay lúc suy luận trên dữ liệu test có thể xuất hiện dưới các tên *test-time adaptation*, *test-time training*, *online adaptation* hay *transductive inference*. Mỗi cách diễn đạt được tra trên nhiều nguồn: Google Scholar và Semantic Scholar cho phạm vi rộng; arXiv cho các preprint (bản thảo công bố trước khi bình duyệt) mới nhất; ACL Anthology cho toàn bộ các hội nghị và tạp chí thuộc hệ ACL; và OpenReview, nơi các bài nộp ICLR được công khai ngay trong quá trình review và nơi lưu cả những bài đã bị reject hoặc rút. Một ý tưởng từng bị reject ở ICLR vẫn là công trình mà reviewer có thể đã thấy.

### Tầng thứ hai: trích dẫn

Từ khóa có giới hạn tự nhiên: một paper dùng thuật ngữ hoàn toàn khác sẽ không xuất hiện trong kết quả tìm kiếm. Tầng trích dẫn khắc phục điều này. Người nghiên cứu chọn ba đến năm paper gần với ý tưởng nhất, rồi đi theo hai hướng: lùi về các paper mà chúng trích dẫn, và tiến tới các paper đã trích dẫn chúng, đặc biệt trong mười hai tháng gần nhất. Chức năng "Cited by" của Google Scholar và Semantic Scholar, cùng các công cụ đồ thị trích dẫn như Connected Papers, giúp việc này nhanh hơn nhiều. Kinh nghiệm cho thấy đây là tầng thường phát hiện ra "nhóm đã làm rồi", vì bất kỳ ai làm ý tưởng tương tự gần như chắc chắn phải trích dẫn những paper nền tảng đó.

### Tầng thứ ba: con người

Tầng cuối cùng là hỏi những người hiểu lĩnh vực: người hướng dẫn, đồng nghiệp ở các nhóm khác, những người gặp tại hội nghị và workshop. Một câu hỏi đơn giản như "Đã có ai làm X chưa?" có thể chỉ mất mười phút nhưng tiết kiệm được ba tháng. Người trong ngành thường biết về những công trình đang được thực hiện hoặc vừa được nộp mà chưa xuất hiện công khai. Nỗi lo bị "lấy mất ý tưởng" khi hỏi là có thể hiểu được, nhưng trong đa số trường hợp, lợi ích của việc biết sớm lớn hơn nhiều so với rủi ro đó.

Các trợ lý dựa trên mô hình ngôn ngữ lớn có thể hỗ trợ ở tầng thứ nhất, chẳng hạn gợi ý thêm các cách diễn đạt hoặc thuật ngữ tương đương. Tuy vậy, chúng có thể "bịa" ra những paper không tồn tại hoặc gán sai tác giả, năm và hội nghị, nên mọi tài liệu do chúng gợi ý đều phải được kiểm chứng trực tiếp từ nguồn gốc (xem [Dùng AI hỗ trợ (đúng luật)](../03-ky-thuat/ai-tools.md)).

!!! tip "Giữ một nhật ký tìm kiếm"
    Ghi lại mỗi truy vấn đã dùng, ngày tìm, công cụ, và các paper liên quan tìm được. Nhật ký này có ba công dụng: nó là nguyên liệu cho phần Related Work, nó giúp lặp lại tìm kiếm một cách nhanh chóng trước deadline, và nó cho phép trả lời tự tin trong rebuttal (giai đoạn tác giả phản hồi reviewer) khi bị hỏi về một công trình liên quan.

## Concurrent work

Dù tìm kiếm kỹ đến đâu, đôi khi nhóm tác giả vẫn phát hiện một paper rất giống ý tưởng của mình xuất hiện trên arXiv chỉ vài tuần hoặc vài tháng trước deadline. Đây là tình huống *concurrent work* (công trình đồng thời): hai nhóm độc lập đi tới ý tưởng tương tự gần như cùng lúc, điều rất thường gặp trong một lĩnh vực phát triển nhanh.

Các hội nghị A\* đều có quy định về tình huống này, nhưng chi tiết khác nhau giữa các hội nghị và có thể thay đổi theo năm. Nhìn chung, các công trình xuất hiện công khai trong một khoảng thời gian ngắn trước deadline (thường được tính bằng vài tháng) được coi là đồng thời, và tác giả không bị bắt buộc phải so sánh thực nghiệm với chúng. Một số hội nghị còn nêu rõ rằng tác giả không bắt buộc so sánh với những preprint chưa qua bình duyệt. Con số cụ thể và cách diễn đạt cần được kiểm tra trong Call for Papers, Author Guidelines hoặc Reviewer Guidelines của chính hội nghị và năm nộp bài.

!!! info "Quy định không miễn trừ việc trích dẫn"
    Việc không bắt buộc so sánh thực nghiệm không có nghĩa là có thể bỏ qua công trình đồng thời. Cách xử lý được đánh giá cao là vẫn trích dẫn, nói rõ đây là công trình đồng thời và chỉ ra khác biệt một cách khách quan. Nếu reviewer vẫn yêu cầu so sánh, tác giả có thể lịch sự dẫn lại quy định của hội nghị trong rebuttal.

Khi phát hiện một công trình rất gần, nhóm tác giả nên bình tĩnh đi qua ba bước. Bước đầu tiên là đọc kỹ paper đó và liệt kê chính xác những điểm giống và khác, thay vì đánh giá qua tiêu đề và abstract. Bước thứ hai là xác định phần đóng góp còn lại: thiết lập khác, phân tích sâu hơn, kết quả trên một miền mới, hay một hiểu biết mà paper kia không có. Bước thứ ba là quyết định: nếu khác biệt đủ lớn, paper được điều chỉnh để làm nổi bật khác biệt đó; nếu công trình kia đã được công bố từ lâu và gần như trùng khớp, cần đổi hướng hoặc mở rộng ý tưởng; nếu đó thực sự là công trình đồng thời, nên đẩy nhanh tiến độ và nộp bài với phần thảo luận rõ ràng. Một câu mẫu thường gặp trong Related Work như sau:

```text
Concurrent with our work, X et al. [23] also explore masking-based
pre-training for point clouds. Unlike their approach, which reconstructs
raw coordinates, we predict local geometric descriptors, which we show to
be critical for transfer to segmentation (Sec. 5.3).
```

## Pilot experiment và tiêu chí dừng

Một ý tưởng vượt qua bộ câu hỏi thẩm định và cuộc tìm kiếm novelty vẫn chỉ là một giả thuyết. Trước khi cam kết toàn bộ nguồn lực, cần một **pilot experiment**: thí nghiệm nhỏ, nhanh và rẻ để trả lời đúng một câu hỏi, đó là insight cốt lõi có tạo ra khác biệt đo được hay không. Mục tiêu của pilot không phải là đạt SOTA, mà là thu được tín hiệu đủ tin cậy để quyết định đi tiếp, đổi hướng hay dừng lại.

Một pilot tốt thường được xây dựng theo năm nguyên tắc. Thứ nhất, **tái lập baseline trước**: nếu không tái lập được kết quả đã công bố của baseline chính với sai lệch hợp lý, mọi so sánh sau đó đều thiếu cơ sở, và đôi khi chính khó khăn khi tái lập đã cho thấy bài toán phức tạp hơn dự kiến. Thứ hai, **chọn thiết lập nhỏ nhất vẫn còn khả năng phân biệt**: dataset con, độ phân giải thấp hoặc ít epoch ở CV; mô hình nhỏ hoặc một phần dữ liệu ở NLP; dữ liệu tổng hợp hoặc bài toán đồ chơi (*toy problem*) có lời giải đã biết ở ML. Thứ ba, **so với ít nhất một baseline mạnh chạy trong cùng điều kiện**, không so với con số trích từ paper khác vốn được tạo ra trong thiết lập khác. Thứ tư, **đo cơ chế chứ không chỉ đo kết quả cuối**: nếu insight là về vật thể nhỏ, cần đo riêng độ chính xác trên vật thể nhỏ; nếu insight là về câu phủ định, cần một tập kiểm tra riêng cho câu phủ định. Thứ năm, **biết mức nhiễu**: ở thiết lập nhỏ, kết quả dao động mạnh giữa các lần chạy, nên cần chạy hai ba seed để biết mức chênh lệch nào là thật trước khi diễn giải.

Nguyên tắc quan trọng nhất, và cũng hay bị bỏ qua nhất, là **đặt tiêu chí dừng trước khi chạy**. Khi đã đầu tư nhiều tuần vào một hướng, con người có xu hướng diễn giải mọi kết quả mập mờ theo hướng tích cực và tiếp tục "thử thêm một chút nữa". Viết ra tiêu chí từ trước giúp quyết định dựa trên bằng chứng thay vì cảm xúc. Một tiêu chí dừng tốt có thời hạn, ngưỡng định lượng và hành động cụ thể cho từng trường hợp:

```text
Giả thuyết: mô-đun ngữ cảnh sớm giảm lỗi trên các lớp cấu trúc mảnh.
Thiết lập pilot: 20% dữ liệu train, độ phân giải 512, 3 seed, so với baseline
                 chạy lại bằng code chính thức trong cùng cấu hình.
Thời hạn: 3 tuần.
Đi tiếp nếu: lỗi trên lớp cấu trúc mảnh giảm >= 15% tương đối, vượt rõ dao động giữa các seed.
Đổi hướng nếu: cải thiện chỉ xuất hiện ở kết quả tổng, không tập trung ở lớp mảnh
               (insight có thể sai, cần phân tích lại nguồn lỗi).
Dừng nếu: không có cải thiện vượt mức dao động giữa các seed.
```

!!! warning "Chi phí chìm"
    Thời gian đã bỏ ra không phải là lý do để tiếp tục một hướng không có tín hiệu. Tuy vậy, một pilot thất bại cũng không hoàn toàn vô ích: nếu nó cho thấy một giả định phổ biến của cộng đồng là sai, đó có thể là khởi đầu của một paper phân tích (xem mục "Khi kết quả không như mong đợi" trong bài [Xây "câu chuyện" của paper](cau-chuyen.md)).

## Tóm tắt

Hội nghị A\* chấp nhận nhiều kiểu đóng góp, từ phương pháp, cách đặt bài toán, dataset, phương pháp luận đánh giá, phân tích, paradigm cho tới hiệu quả tính toán và ứng dụng có insight; xác định sớm kiểu đóng góp chủ đạo giúp chọn đúng bằng chứng và giọng điệu. Bẫy "A + B" xuất hiện khi paper chỉ mô tả một sự kết hợp và một con số; cách thoát là bắt đầu từ vấn đề, chỉ ra vì sao kết hợp ngây thơ thất bại và rút ra insight có thể chuyển giao. Ý tưởng tốt thường đến từ những thói quen có hệ thống như phân tích thất bại, tìm giả định bị vi phạm, chuyển giao giữa các mảng và đơn giản hóa. Trước khi đầu tư lớn, ý tưởng cần được thẩm định bằng văn bản, kiểm tra novelty qua ba tầng từ khóa, trích dẫn và con người, xử lý đúng các trường hợp concurrent work theo quy định của từng hội nghị, và kiểm chứng bằng một pilot experiment có tiêu chí dừng được viết ra từ trước.

## Bài tập

1. Chọn năm paper được chấp nhận gần đây tại một hội nghị A\* trong lĩnh vực của dự án. Với mỗi paper, xác định kiểu đóng góp chủ đạo và liệt kê những bằng chứng chính mà tác giả đưa ra. Sau đó đối chiếu với bảng tổng hợp trong bài để xem paper có đáp ứng đủ kỳ vọng của reviewer hay không.
2. Viết câu trả lời cho tám câu hỏi thẩm định cho ý tưởng hiện tại, không quá một trang. Đánh dấu những câu trả lời còn mơ hồ và lập kế hoạch để làm rõ chúng.
3. Thực hiện quy trình tìm kiếm ba tầng cho ý tưởng đó: dùng ít nhất mười truy vấn từ khóa trên ít nhất ba công cụ, đi theo trích dẫn từ ba paper gần nhất, và hỏi ít nhất một người trong lĩnh vực. Kết quả là danh sách năm công trình gần nhất, mỗi công trình kèm một câu nêu rõ khác biệt.
4. Thiết kế một pilot experiment cho giả thuyết cốt lõi của dự án, bao gồm baseline cần tái lập, thiết lập nhỏ nhất, phép đo cơ chế và tiêu chí dừng theo mẫu trong bài.
