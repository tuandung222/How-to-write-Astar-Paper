# Title

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Giải thích vai trò của title trong quá trình bidding, tìm kiếm và trích dẫn.
    - Nhận diện sáu mẫu title phổ biến và chọn mẫu phù hợp với loại đóng góp của paper.
    - Đặt tên phương pháp dễ nhớ, không trùng lặp và không vi phạm quy định ẩn danh.
    - Nhận ra khác biệt trong thói quen đặt title giữa Computer Vision, NLP và Machine Learning.

Title là phần ngắn nhất của paper nhưng cũng là phần được đọc nhiều nhất. Trước khi bất kỳ ai đọc tới abstract, title đã đi qua tay rất nhiều người: reviewer lướt qua danh sách hàng trăm bài trong giai đoạn bidding, area chair (AC, người điều phối nhóm reviewer của một bài) xem danh sách bài được phân công, người đọc lướt arXiv mỗi sáng, người tham dự xem chương trình hội nghị, và những người trích dẫn paper nhiều năm sau. Phần lớn những người này chỉ đọc title rồi quyết định có đọc tiếp hay không.

Vì thế, title không chỉ là cái nhãn dán lên paper mà là lời mời đọc. Một title tốt khiến đúng những người quan tâm tìm thấy paper và muốn mở nó ra; một title kém có thể khiến paper bị bid bởi reviewer không đúng chuyên môn, hoặc bị bỏ qua giữa hàng nghìn bài cùng đợt. Bài này trình bày các chức năng của title, sáu mẫu title phổ biến với ví dụ từ cả ba cộng đồng, các quy tắc đặt title và tên phương pháp, cùng những khác biệt về thói quen giữa CV, NLP và ML.

## Title làm những việc gì

Trước khi bàn về cách đặt title, cần hiểu title phải gánh những chức năng nào. Có thể tách thành ba chức năng chính.

Chức năng thứ nhất là **giúp paper được tìm thấy**. Người làm cùng bài toán tìm tài liệu bằng từ khóa trên Google Scholar, Semantic Scholar hay arXiv, và các công cụ này cho title trọng số cao. Một paper về phát hiện vật thể 3D từ ảnh đơn mà title không chứa cụm "Monocular 3D Object Detection" sẽ khó xuất hiện trong kết quả tìm kiếm của chính những người cần đọc nó nhất.

Chức năng thứ hai là **giúp paper được phân loại đúng**. Trong giai đoạn bidding, mỗi reviewer chỉ dành vài giây cho mỗi title. Nếu title cho thấy ngay lĩnh vực và bài toán, paper sẽ được bid bởi những người hiểu nó. Đây là điều có lợi cho tác giả: reviewer đúng chuyên môn đánh giá công bằng hơn, hiểu được đóng góp tinh tế hơn, và ít đưa ra những phản bác dựa trên hiểu lầm.

Chức năng thứ ba là **giúp paper được ghi nhớ và gọi tên**. Những paper có ảnh hưởng thường được cộng đồng nhắc đến bằng một cái tên ngắn gọn: ResNet, BERT, NeRF, Adam. Tên đó thường xuất hiện ngay trong title hoặc được rút ra từ title. Một cái tên dễ nhớ giúp paper được trích dẫn và thảo luận dễ dàng hơn; khi các paper sau đặt phương pháp vào một hàng trong bảng so sánh, hàng đó cần một cái tên ngắn để ghi.

## Sáu mẫu title phổ biến

Khảo sát title của các paper có ảnh hưởng ở ba cộng đồng cho thấy chúng thường rơi vào một số mẫu lặp lại. Mỗi mẫu phù hợp với một loại đóng góp nhất định, và việc chọn sai mẫu có thể khiến title hứa hẹn quá nhiều hoặc quá ít so với nội dung.

### Mẫu 1: Tên phương pháp và mô tả

Đây là mẫu phổ biến nhất: một cái tên ngắn, dấu hai chấm, rồi một cụm mô tả. Phần tên giúp ghi nhớ; phần mô tả giúp tìm kiếm và phân loại.

- *NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis* (ECCV 2020)
- *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding* (NAACL 2019)
- *Adam: A Method for Stochastic Optimization* (ICLR 2015)

Ba ví dụ này dùng phần mô tả theo ba cách khác nhau, và đáng được phân tích kỹ. Title của NeRF chứa đủ ba thành phần: tên gọi, biểu diễn được đề xuất (neural radiance fields) và ứng dụng (view synthesis). Người đọc biết ngay paper giải bài toán gì và bằng công cụ gì. Title của BERT dồn thông tin vào phần sau dấu hai chấm: cách học (pre-training), tính chất phân biệt (deep bidirectional) và mục đích (language understanding). Cụm "Deep Bidirectional" không phải là trang trí; nó chính là điểm khác biệt cốt lõi so với các mô hình ngôn ngữ chỉ đọc một chiều từ trái sang phải trước đó. Title của Adam thì gần như không mô tả gì cụ thể ngoài loại phương pháp (một thuật toán tối ưu ngẫu nhiên). Sự tổng quát đó phù hợp với một phương pháp muốn được dùng cho mọi bài toán huấn luyện, và là một lựa chọn thường gặp ở cộng đồng ML.

Mẫu này phù hợp khi paper đề xuất một phương pháp có danh tính rõ ràng mà tác giả mong cộng đồng gọi tên. Nó kém phù hợp khi đóng góp là một phân tích hay một phát hiện, vì khi đó không có "phương pháp" nào để đặt tên.

### Mẫu 2: Mô tả trực tiếp

Mẫu này bỏ qua tên gọi và mô tả thẳng nội dung của paper.

- *Deep Residual Learning for Image Recognition* (CVPR 2016)
- *Denoising Diffusion Probabilistic Models* (NeurIPS 2020)
- *Deep contextualized word representations* (NAACL 2018, paper giới thiệu ELMo)

Điều đáng chú ý là title của ResNet không chứa chữ "ResNet", title của ELMo cũng không chứa chữ "ELMo"; tên gọi nằm trong thân bài và cộng đồng tự tiếp nhận nó. Mô tả trực tiếp hoạt động tốt khi ý tưởng đủ tổng quát để một cụm danh từ gọi được tên nó: "residual learning" là một nguyên lý, không phải một mạng cụ thể. Title của DDPM còn đi xa hơn: nó chính là tên của một lớp mô hình. Lựa chọn này hợp lý vì paper định hình lại lớp mô hình đó một cách có hệ thống, và về sau chính tên trong title trở thành tên gọi của cả hướng nghiên cứu.

Mẫu này phù hợp với ý tưởng đơn giản, tổng quát. Nhược điểm là nếu cụm mô tả quá chung (chẳng hạn "Deep Learning for Image Recognition"), title sẽ không phân biệt được paper với hàng trăm paper khác.

### Mẫu 3: Khẳng định một phát hiện

Title dạng này là một câu hoàn chỉnh, phát biểu thông điệp chính của paper.

- *Masked Autoencoders Are Scalable Vision Learners* (CVPR 2022)
- *Attention Is All You Need* (NeurIPS 2017)
- *BERT Rediscovers the Classical NLP Pipeline* (ACL 2019)
- *Language Models are Few-Shot Learners* (NeurIPS 2020)

Title khẳng định có sức hút mạnh vì nó trao ngay cho người đọc một ý tưởng đáng tranh luận. Nhưng nó cũng là một lời hứa: reviewer sẽ đọc paper với câu hỏi "bằng chứng có đủ để khẳng định điều này ở mức tổng quát như title nói không?". Title của MAE hứa hai điều, masked autoencoder học được biểu diễn tốt và phương pháp mở rộng được (scalable), và phần thí nghiệm của paper được tổ chức để chứng minh cả hai. Title của Transformer là một khẳng định táo bạo, được hỗ trợ bằng kết quả dịch máy vượt các mô hình hồi quy và tích chập mạnh nhất thời điểm đó.

Cần lưu ý rằng sự nổi tiếng của "Attention Is All You Need" đã sinh ra vô số title bắt chước theo dạng "X Is All You Need". Đến nay, cấu trúc này đã trở thành sáo ngữ và dễ khiến reviewer có ấn tượng paper đang dựa vào hiệu ứng hơn là nội dung. Bài học rút ra từ ví dụ này là *dạng khẳng định*, không phải *câu chữ cụ thể*.

### Mẫu 4: Câu hỏi hoặc xem xét lại

Mẫu này phù hợp với paper phân tích, paper đặt lại một vấn đề tưởng như đã giải quyết.

- *Do ImageNet Classifiers Generalize to ImageNet?* (ICML 2019)
- *A ConvNet for the 2020s* (CVPR 2022)
- *On the Convergence of Adam and Beyond* (ICLR 2018)

Title dạng câu hỏi gợi tò mò và thông báo trước rằng paper là một cuộc điều tra. "Do ImageNet Classifiers Generalize to ImageNet?" nghe gần như nghịch lý, và chính sự nghịch lý đó khiến người đọc muốn biết câu trả lời. "A ConvNet for the 2020s" không phải câu hỏi, nhưng nó mang tinh thần xem xét lại: liệu kiến trúc tích chập, khi được hiện đại hóa đúng cách, có còn cạnh tranh được không. Cấu trúc "On the …" là lựa chọn quen thuộc của paper lý thuyết ML; nó báo hiệu một nghiên cứu cẩn thận về một tính chất của phương pháp đã có.

Rủi ro của mẫu này là title câu hỏi mà paper không trả lời dứt khoát. Nếu kết luận chỉ là "tùy trường hợp", người đọc sẽ thấy hụt hẫng.

### Mẫu 5: Đặt ra bài toán hoặc paradigm mới

- *Segment Anything* (ICCV 2023)

Hai chữ, không có tên phương pháp, không có mô tả kỹ thuật. Title này hoạt động vì paper thực sự mở ra một hướng mới: nó định nghĩa một task (phân đoạn theo prompt), xây dựng một mô hình nền tảng cho task đó, và công bố một bộ dữ liệu quy mô rất lớn. Nói cách khác, title tương xứng với tầm vóc của đóng góp.

Mẫu này hiếm khi phù hợp với paper đầu tay. Một paper có đóng góp vừa phải mà mang title tuyên bố paradigm sẽ tạo khoảng cách lớn giữa lời hứa và nội dung, và reviewer sẽ nhìn thấy khoảng cách đó.

### Mẫu 6: Cụm định hướng và mô tả

Mẫu cuối cùng dùng một cụm ngắn mang thông điệp hoặc thái độ, rồi dấu hai chấm và phần mô tả cụ thể.

- *Beyond Accuracy: Behavioral Testing of NLP Models with CheckList* (ACL 2020)
- *Right for the Wrong Reasons: Diagnosing Syntactic Heuristics in Natural Language Inference* (ACL 2019)

Ở title của CheckList, phần trước dấu hai chấm ("Beyond Accuracy") nêu luận điểm: độ chính xác trên tập test là chưa đủ để đánh giá mô hình. Phần sau nêu cụ thể paper làm gì (kiểm thử hành vi), cho đối tượng nào (mô hình NLP) và bằng công cụ gì (CheckList). Tên công cụ được đặt ở cuối, như một chi tiết, vì đóng góp chính là cách tiếp cận đánh giá chứ không phải phần mềm. Title thứ hai dùng một thành ngữ gợi hình để tóm tắt phát hiện (mô hình đúng nhưng vì lý do sai), rồi mô tả chính xác điều được chẩn đoán.

Mẫu này phổ biến ở NLP, đặc biệt với paper đánh giá và phân tích. Điều kiện để nó thành công là cụm định hướng phải mang nội dung thật; một cụm chỉ để gây chú ý mà không gắn với luận điểm sẽ bị xem là làm màu.

### Tổng hợp các mẫu

| Mẫu | Ví dụ | Phù hợp khi | Rủi ro |
|---|---|---|---|
| Tên và mô tả | NeRF, BERT, Adam | Có phương pháp với danh tính rõ ràng | Tên khó nhớ hoặc bị trùng |
| Mô tả trực tiếp | ResNet, DDPM, ELMo | Ý tưởng đơn giản, tổng quát | Mô tả quá chung, không phân biệt được |
| Khẳng định | MAE, Transformer | Có một thông điệp mạnh, bằng chứng vững | Hứa quá mức bằng chứng |
| Câu hỏi, xem xét lại | ImageNet generalization, ConvNeXt | Paper phân tích, đặt lại vấn đề | Không trả lời dứt khoát |
| Đặt bài toán | Segment Anything | Mở ra task hoặc paradigm mới | Lệch xa tầm vóc thực của paper |
| Cụm định hướng và mô tả | CheckList | Paper đánh giá, phân tích có luận điểm | Cụm định hướng rỗng nội dung |

## Quy tắc đặt title

Các mẫu ở trên cho biết title có thể có *hình dạng* nào. Phần này bàn về những quy tắc mà title thuộc mẫu nào cũng nên tuân theo, kèm lý do của từng quy tắc.

Quy tắc đầu tiên là **title phải chứa từ khóa của bài toán** mà người khác sẽ dùng để tìm kiếm, chẳng hạn "Monocular 3D Object Detection", "Video Instance Segmentation", "Low-Resource Machine Translation" hay "Offline Reinforcement Learning". Lý do đã nêu ở trên: đây là cách duy nhất để paper xuất hiện trước đúng người đọc và đúng reviewer.

Quy tắc thứ hai là **gợi ra insight hoặc kỹ thuật chính** nếu còn chỗ, ví dụ "…using Shifted Windows" trong title của Swin Transformer. Một title chỉ nêu bài toán cho biết paper làm *gì*; thêm kỹ thuật chính cho biết paper làm *thế nào*, và giúp người đọc phân biệt nó với các paper cùng bài toán.

Quy tắc thứ ba là **giữ title ngắn**, thường không quá 12–15 từ. Title dài bị cắt trong danh sách kết quả tìm kiếm, khó nhớ và khó trích dẫn. Nếu title vượt quá độ dài này, thường là vì người viết đang cố nhét cả abstract vào title; khi đó cần chọn ra một hoặc hai ý quan trọng nhất.

Quy tắc thứ tư là **tránh các cụm sáo rỗng**. "A Novel…" không thêm thông tin, vì paper nào được nộp cũng tự cho là mới. "An Efficient and Effective…" cũng vậy: không ai đề xuất phương pháp kém hiệu quả. "Towards…" đã bị dùng quá nhiều và dễ gợi ấn tượng rằng công việc chưa hoàn thành. Những cụm này chiếm chỗ của các từ khóa có giá trị.

Quy tắc thứ năm là **không hứa quá mức bằng chứng**. Những từ như "Solving", "Universal", "Any", "All" chỉ nên xuất hiện khi bằng chứng thực sự rất mạnh. Reviewer đọc title như một claim, và một claim vượt quá bằng chứng sẽ trở thành điểm yếu đầu tiên được nêu trong review.

Quy tắc cuối cùng là **title phải nhất quán với abstract và introduction**. Thuật ngữ dùng trong title phải là thuật ngữ được dùng xuyên suốt paper. Nếu title nói "long-range" mà abstract nói "distant objects" và introduction nói "far-away targets", người đọc sẽ phải tự hỏi ba cụm này có cùng nghĩa hay không.

Hai ví dụ dưới đây (đều là title hư cấu, dùng cho mục đích minh họa) cho thấy các quy tắc này được áp dụng thế nào.

<div class="bad" markdown>

**Title yếu (hư cấu):** *A Novel Deep Learning Framework for Improving the Performance of 3D Object Detection*

**Title yếu (hư cấu):** *Towards Better Machine Translation for Low-Resource Languages*

Cả hai đều không nói paper làm gì khác với hàng trăm paper khác. Title thứ nhất có "A Novel" và "Framework" là những từ không mang thông tin, và "Improving the Performance" là điều mọi paper phương pháp đều tuyên bố. Title thứ hai có "Towards" và "Better", cũng không cho biết cách tiếp cận.

</div>

<div class="good" markdown>

**Title tốt hơn (hư cấu):** *Depth Distributions for Long-Range Monocular 3D Object Detection*

**Title tốt hơn (hư cấu):** *Romanization Bridges the Script Gap in Low-Resource Machine Translation*

Title thứ nhất nêu kỹ thuật chính (mô hình hóa độ sâu dưới dạng phân phối), điều kiện khó (long-range) và bài toán (monocular 3D object detection). Title thứ hai theo mẫu khẳng định: nó phát biểu một phát hiện (chuyển chữ viết về dạng Latin giúp thu hẹp khoảng cách giữa các hệ chữ viết) và nêu đúng bài toán.

</div>

## Đặt tên phương pháp

Khi chọn mẫu title có tên phương pháp, cái tên trở thành một quyết định riêng và lâu dài: nếu paper thành công, cộng đồng sẽ gọi nó bằng cái tên ấy trong nhiều năm. Một cái tên tốt thường ngắn, phát âm được và dễ nhớ. Nếu có thể, tên nên gợi đến ý tưởng chính, như "NeRF" viết tắt từ neural radiance fields hay "BERT" viết tắt từ Bidirectional Encoder Representations from Transformers.

Trước khi chốt tên, người viết cần kiểm tra xem tên đã bị dùng chưa, trên Google Scholar, arXiv, GitHub và các kho mô hình như Hugging Face. Trùng tên với một paper khác cùng lĩnh vực gây nhầm lẫn khi trích dẫn; trùng tên với một thư viện phần mềm phổ biến khiến paper gần như không thể tìm thấy qua công cụ tìm kiếm. Cũng nên tránh những từ viết tắt gượng ép, trong đó các chữ cái được chọn một cách vụng về chỉ để ghép thành một từ có nghĩa. Người đọc nhận ra điều đó ngay, và nó khiến paper trông thiếu nghiêm túc.

!!! warning "Tên phương pháp và quy định ẩn danh"
    Ở các hội nghị review hai chiều ẩn danh (double-blind), tên phương pháp không được làm lộ danh tính tác giả. Một cái tên gắn với tên phòng thí nghiệm, tên công ty, hoặc tên một hệ thống mà nhóm đã công bố trước đó dưới danh nghĩa của nhóm có thể bị xem là vi phạm chính sách ẩn danh. Khi nghi ngờ, nên dùng tên trung tính trong bản nộp và cân nhắc đổi lại ở bản camera-ready, trong phạm vi hội nghị cho phép.

## Khác biệt giữa các cộng đồng

Các mẫu title ở trên xuất hiện ở cả ba cộng đồng, nhưng tần suất và kỳ vọng khác nhau đáng kể. Hiểu những khác biệt này giúp title "nói đúng giọng" của hội nghị mục tiêu.

### Computer Vision

Cộng đồng CV phân mảnh theo task (detection, segmentation, 3D reconstruction, generation…), nên title CV thường nêu rõ task và đôi khi cả loại dữ liệu đầu vào (single image, video, point cloud, multi-view). Mẫu "tên và mô tả" rất phổ biến, vì tên phương pháp sẽ xuất hiện trong các bảng so sánh của paper sau. Title khẳng định như của MAE cũng được ưa chuộng khi paper có một thông điệp mạnh về cách học biểu diễn.

### NLP

Title NLP thường nêu task cùng với ngôn ngữ hoặc loại dữ liệu khi những yếu tố đó là một phần của đóng góp, chẳng hạn "…for Low-Resource Languages" hay "…in Multilingual Settings". Cộng đồng NLP ngày càng coi trọng việc nêu rõ ngôn ngữ được nghiên cứu, thay vì mặc định rằng một phương pháp chỉ thử trên tiếng Anh là phương pháp cho "ngôn ngữ" nói chung. Paper đánh giá và phân tích rất phổ biến ở NLP, và chúng hay dùng mẫu cụm định hướng kèm mô tả như CheckList, hoặc mẫu khẳng định như "BERT Rediscovers the Classical NLP Pipeline".

### Machine Learning

Title ML thường tổng quát hơn, ít khi gắn với một ứng dụng cụ thể: Adam, Denoising Diffusion Probabilistic Models hay *Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift* (ICML 2015) đều mô tả một phương pháp hay một lớp mô hình chứ không nêu một bài toán ứng dụng. Điều này phản ánh giá trị của cộng đồng: một đóng góp ML được đánh giá cao khi nó áp dụng được cho nhiều bài toán. Paper lý thuyết hay dùng cấu trúc "On the …" hoặc phát biểu thẳng kết quả trong title. Khi một paper ML có trọng tâm ứng dụng, người viết nên cân nhắc liệu title có nên nhấn vào nguyên lý tổng quát đằng sau ứng dụng đó hay không.

## Title sau khi nộp

Ở nhiều hội nghị, title được phép chỉnh sửa ở bản camera-ready trong phạm vi hợp lý, đôi khi cần sự đồng ý của chương trình hội nghị (program committee). Tuy nhiên, title đăng ký ở thời điểm đăng ký abstract chính là title mà reviewer nhìn thấy khi bid. Vì vậy, title phải được đặt nghiêm túc ngay từ đầu, không nên coi là một thứ tạm thời để sửa sau. Ở ICLR, nơi bài nộp hiển thị công khai trên OpenReview, title ban đầu còn được cộng đồng nhìn thấy ngay cả khi paper không được chấp nhận.

## Tóm tắt

Title là phần ngắn nhất nhưng được đọc nhiều nhất của paper, và nó gánh ba chức năng: giúp paper được tìm thấy, giúp paper được bid bởi đúng reviewer, và giúp paper được ghi nhớ. Có sáu mẫu title phổ biến (tên và mô tả, mô tả trực tiếp, khẳng định, câu hỏi hoặc xem xét lại, đặt bài toán, cụm định hướng và mô tả), mỗi mẫu phù hợp với một loại đóng góp và mang một rủi ro riêng. Dù chọn mẫu nào, title tốt luôn chứa từ khóa bài toán, ngắn gọn, tránh cụm sáo rỗng, không hứa quá bằng chứng và nhất quán với phần còn lại của paper. CV thường nêu rõ task, NLP chú ý tới ngôn ngữ và dữ liệu, còn ML nghiêng về sự tổng quát.

## Bài tập

1. Viết ít nhất 10 title khác nhau cho paper đang thực hiện, trải trên ít nhất bốn mẫu đã học. Gửi danh sách cho ba đồng nghiệp trong ngành mà không kèm giải thích, và hỏi họ: "Đọc title này, paper làm gì?". Chọn title có câu trả lời gần nhất với đóng góp thực của paper.
2. Thu thập 30 title từ danh sách bài được chấp nhận của hội nghị mục tiêu trong năm gần nhất, ở đúng chủ đề của paper. Phân loại chúng theo sáu mẫu, đếm độ dài trung bình, và ghi lại những từ khóa bài toán xuất hiện nhiều nhất. So sánh title đang dự kiến với kết quả thống kê đó.
3. Nếu paper có tên phương pháp, kiểm tra tên trên Google Scholar, arXiv, GitHub và Hugging Face. Ghi lại mọi trường hợp trùng hoặc gần trùng, và đánh giá xem tên có vô tình làm lộ danh tính nhóm tác giả hay không.
4. Viết lại title của paper theo giọng của một cộng đồng khác (ví dụ, nếu paper đang nhắm CVPR thì viết một phiên bản cho NeurIPS). Giải thích bằng hai đến ba câu những thay đổi đã thực hiện và lý do.
