# Bài toán, dữ liệu và phạm vi

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Dựng bộ điểm tham chiếu cho một bài toán mới chưa có baseline, và định nghĩa bài toán một cách hình thức kèm giao thức đánh giá.
    - Chẩn đoán vì sao reviewer không thấy bài toán quan trọng, rồi chọn giữa củng cố motivation bằng bằng chứng, tổng quát hóa bài toán và đổi cộng đồng.
    - Báo cáo trung thực chi phí của một phương pháp tốn kém và lập luận khi nào chi phí đáng bỏ ra.
    - Viết paper trên dữ liệu không công bố được mà vẫn đáp ứng kỳ vọng về tái lập và đạo đức nghiên cứu.
    - Nối lý thuyết với thực nghiệm theo kỳ vọng của các ML venue, tránh định lý trang trí.
    - Phân biệt distribution shift với benchmark không đại diện, và xử lý trung thực khoảng cách giữa benchmark và thực tế.

Năm bài trước của chương xoay quanh những gì xảy ra bên trong một dự án đã có khung: con số, câu chuyện, áp lực thời gian và reviewer. Bài này xét chính cái khung: bài toán được đặt ra thế nào, dữ liệu nào nuôi nó, và claim của paper trải rộng tới đâu. Những quyết định này được đưa ra từ rất sớm nên ít khi được xem lại. Chúng chỉ lộ ra khi review trả về, dưới dạng những câu hỏi khó trả lời nhất: so với cái gì, ai cần điều này, có đáng với chi phí không, ai kiểm chứng được, lý thuyết và thí nghiệm có nói cùng một điều không, và ra khỏi benchmark thì kết quả còn đúng không.

Sáu tình huống trong bài có chung một mẫu số: phạm vi của claim lệch với phạm vi của bằng chứng. Bài toán mới thiếu baseline là khi bằng chứng chưa có điểm tựa để so sánh. Motivation yếu là khi claim về tầm quan trọng không có bằng chứng đỡ. Phương pháp tốn kém là khi claim "tốt hơn" bỏ quên một trục mà người đọc quan tâm. Dữ liệu riêng là khi bằng chứng không ai kiểm tra được. Lý thuyết và thực nghiệm lệch quy mô là khi hai loại bằng chứng không nối với nhau. Còn kết quả không chuyển được sang thực tế là khi claim ngầm vượt ra ngoài phân phối mà bằng chứng bao phủ. Vì vậy, câu hỏi thứ hai trong bốn câu hỏi ở [trang mở đầu chương](index.md), "bằng chứng hiện có ủng hộ phát hiện tới đâu?", là sợi chỉ xuyên suốt bài này.

Các tình huống được đánh số từ 30 đến 35 và đi theo khung năm bước chung của chương; cuối bài là một bảng tổng hợp câu hỏi của reviewer và bằng chứng tối thiểu để trả lời. Những nội dung nền như so sánh công bằng (bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md)), cấu trúc introduction (bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md)) hay cách trình bày định lý (bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md)) chỉ được nhắc lại khi cần.

## Tình huống 30: Bài toán mới, chưa có baseline để so sánh

### Nhận diện

Một nhóm Computer Vision đề xuất bài toán "suy ngược quy trình lắp ráp": từ ảnh chụp một đồ vật đã lắp xong, chẳng hạn một món đồ nội thất, dự đoán thứ tự các bước lắp (ví dụ giả định). Bảng kết quả chính chỉ có đúng một dòng, kèm câu "Since this is a new task, there are no existing baselines". Cả ba reviewer cùng phản hồi một ý: không có điểm so sánh thì không thể biết 61% là cao hay thấp. Dấu hiệu nhận biết là bảng chính chỉ có phương pháp đề xuất và các biến thể của nó, metric do nhóm tự đặt chưa được kiểm tra, và Related Work khẳng định "no prior work addresses this problem" mà không giải thích vì sao các phương pháp gần nhất không áp dụng được.

### Chẩn đoán

Gốc của tình huống là một hiểu lầm về chức năng của baseline: baseline không tồn tại để bị "đánh bại", mà để đặt con số lên một thang đo. Nếu đoán ngẫu nhiên đã đạt 55%, con số 61% gần như vô nghĩa; nếu con người chỉ đạt 65%, nó rất ấn tượng. Reviewer đòi so sánh vì thiếu thang đo thì họ không đánh giá được claim, chứ không phải vì họ bác bỏ bài toán mới. Hiểu lầm thứ hai là đồng nhất "chưa ai giải bài toán này" với "không có gì để so sánh", trong khi hầu như bài toán mới nào cũng có họ hàng: một bài toán cũ hẹp hơn, một bài toán ở miền khác có cấu trúc tương tự, hay một lời giải ngây thơ ghép từ công cụ có sẵn. Không tìm được họ hàng nào thường là dấu hiệu bài toán chưa được định nghĩa đủ rõ, hoặc việc tìm tài liệu chưa đủ rộng.

Trước khi chọn lối ra, nhóm tác giả nên trả lời bốn câu hỏi. Bài toán mới khiến phương pháp cũ *không chạy được* hay chỉ *chạy kém*? Lời giải tầm thường đạt bao nhiêu? Nếu biết trước một phần thông tin đúng, con số tăng tới đâu? Con người làm tốt tới mức nào, và họ có đồng ý với nhau không? Mỗi câu trả lời là một dòng còn thiếu trong bảng kết quả.

### Các lối ra

Năm lối ra dưới đây bổ sung cho nhau. Một paper thuyết phục thường dùng ba đến năm loại điểm tham chiếu, để con số của phương pháp đề xuất được kẹp giữa một cận dưới và một cận trên.

**Lối ra thứ nhất: chuyển thể các phương pháp gần nhất.** Sửa tối thiểu phương pháp mạnh nhất của bài toán họ hàng để nó chạy được trên bài toán mới, chẳng hạn cho một mô hình học quy trình từ video dự đoán từ một khung hình duy nhất. Baseline này trả lời câu hỏi quan trọng nhất của reviewer: bài toán mới có thật sự cần phương pháp mới không? Việc chuyển thể phải được làm có thiện chí, với ngân sách tune tương đương và mô tả rõ những gì đã sửa. Nếu baseline chuyển thể gần bằng phương pháp đề xuất, đó là một phát hiện: đóng góp chính có thể là bài toán và benchmark, không phải phương pháp.

**Lối ra thứ hai: baseline tầm thường.** Đó là đoán ngẫu nhiên, chọn đáp án phổ biến nhất (majority), lấy đáp án của mẫu gần nhất trong tập huấn luyện (nearest neighbor), hay một heuristic như lắp từ dưới lên theo vị trí trong ảnh. Những baseline này rẻ, nhưng cho biết bao nhiêu phần con số đến từ cấu trúc dữ liệu chứ không từ mô hình, và thường làm lộ lỗi thiết kế dataset: nếu "luôn chọn thứ tự phổ biến nhất" đã đạt điểm cao, dataset cần được sửa trước khi viết. Mọi paper bài toán mới đều nên có loại baseline này.

**Lối ra thứ ba: pipeline ghép từ các thành phần có sẵn.** Nối các mô hình đã có cho từng bài toán con: một detector tìm bộ phận, một mô hình ước lượng độ sâu cho biết bộ phận nào bị che, và một quy tắc sắp xếp theo độ sâu. *Panoptic Segmentation* (Kirillov và cộng sự, CVPR 2019) làm đúng như vậy: khi hợp nhất semantic segmentation và instance segmentation thành một bài toán, paper dựng baseline bằng một heuristic ghép đầu ra của hai hệ thống độc lập, và nói rõ heuristic này đơn giản, có lẽ chưa tối ưu. Nếu phương pháp đề xuất thắng pipeline, cần chỉ ra nó thắng ở đâu; thường đó là chỗ các thành phần độc lập mâu thuẫn nhau, cũng chính là lý do bài toán đáng được xét như một thể thống nhất.

**Lối ra thứ tư: cận trên oracle.** Cho mô hình một phần thông tin đúng mà trong thực tế nó không có, ví dụ mask chuẩn của từng bộ phận. Oracle là thước đo độ khó chứ không phải đối thủ: nó cho biết phần nào của bài toán khó và còn bao nhiêu khoảng trống cho nghiên cứu sau. Oracle phải được đánh dấu rõ trong bảng để không ai nhầm nó với một phương pháp khả thi.

**Lối ra thứ năm: đánh giá của con người.** Đo độ chính xác của người trên cùng tập test và mức đồng thuận giữa họ. Panoptic Segmentation nghiên cứu độ nhất quán giữa những người gán nhãn để hiểu metric và làm mốc cho hiệu năng của máy. SAM xử lý sự mơ hồ của bài toán bằng khái niệm mask hợp lệ và một human study bổ sung cho metric tự động (xem [case study Segment Anything & ControlNet](../05-case-studies/sam-controlnet.md)). Khi hai người gán nhãn chỉ đồng ý với nhau ở 70% số trường hợp, một mô hình đạt 68% đã ở sát trần thực tế. Một nghiên cứu nhỏ trên vài trăm mẫu, với giao thức rõ ràng, vẫn tốt hơn hẳn không có gì.

| Điểm tham chiếu | Câu hỏi được trả lời |
|---|---|
| Phương pháp gần nhất được chuyển thể | Bài toán có cần phương pháp mới không? |
| Baseline tầm thường | Bao nhiêu phần kết quả đến từ cấu trúc dữ liệu? |
| Pipeline ghép | Sao không giải từng phần rồi ghép lại? |
| Cận trên oracle | Phần nào của bài toán khó, còn bao nhiêu khoảng trống? |
| Con người | Trần thực tế ở đâu, bài toán mơ hồ tới mức nào? |

Nếu sau khi dựng đủ các điểm tham chiếu mà phương pháp không vượt được baseline chuyển thể hay pipeline, lối ra hợp lý là đổi hướng: giữ bài toán, dataset và bộ baseline làm đóng góp chính, và công bố như một paper benchmark, chẳng hạn ở NeurIPS Datasets & Benchmarks track. Yêu cầu của kiểu đóng góp này nằm ở mục *Dataset và benchmark* trong bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Viết thế nào

Với bài toán mới, phần định nghĩa bài toán gánh vai trò mà benchmark chuẩn gánh ở một paper thông thường: cho người đọc biết chính xác cái gì được đo. Định nghĩa cần bốn thành phần: đầu vào và đầu ra; thông tin được dùng khi huấn luyện và khi suy luận, để tách phương pháp khả thi khỏi oracle; metric kèm lý do chọn; và giao thức đánh giá. Panoptic Segmentation là một mẫu tốt, với định dạng đầu ra đơn giản (mỗi pixel một nhãn lớp và một mã thực thể) và một metric mới, Panoptic Quality, kèm lập luận vì sao các metric sẵn có không phù hợp. Khung LaTeX dưới đây áp dụng cho ví dụ lắp ráp.

```latex
\section{Problem Formulation}\label{sec:task}
\paragraph{Task.} Given an image $I$ of an assembled object with parts
$\mathcal{P} = \{p_1, \dots, p_n\}$, predict an assembly order $\pi$,
i.e., a permutation of $\mathcal{P}$ consistent with physical constraints.
\paragraph{Available information.} Training: images, part annotations and
orders. Test: the image only. Oracle variants using ground-truth part
masks are marked with $\dagger$.
\paragraph{Ambiguity.} We annotate the set of valid orders $\Pi^*(I)$ and
count $\pi$ as correct if $\pi \in \Pi^*(I)$.
\paragraph{Metrics and protocol.} Exact-match accuracy against $\Pi^*(I)$,
and the fraction of satisfied pairwise precedence constraints (partial
credit). Splits are by object category; results average 3 seeds.
```

Khung này trả lời trước ba câu hỏi chắc chắn sẽ xuất hiện trong review: thông tin nào được phép dùng, sự mơ hồ được xử lý ra sao, và metric thưởng cho điều gì. Việc chia tập theo loại đồ vật còn cho thấy nhóm đã nghĩ tới câu hỏi "mô hình học quy luật lắp ráp hay chỉ nhớ từng đồ vật?". Trong phần thí nghiệm, con số cần được trình bày như một vị trí trên thang đo.

<div class="bad" markdown>
*"As we are the first to study this task, there are no baselines to compare against. Our method achieves 61.2% accuracy."*

Câu này biến việc thiếu so sánh thành lý do để không so sánh, để con số lơ lửng không có thang đo, và claim "the first" còn mở thêm một mặt trận cho reviewer.
</div>

<div class="good" markdown>
*"Since no method has been designed for this task, we construct four types of reference points: trivial baselines, an adapted procedure-learning model [12], a modular pipeline built from an off-the-shelf part detector and depth estimator, and an oracle with ground-truth part masks. Human annotators reach 83.5% and agree with each other on 88.0% of the images. Our method (61.2%) closes roughly 45% of the gap between the strongest baseline (42.7%) and human performance."* (số liệu hư cấu)

Đoạn này kẹp con số giữa cận dưới và cận trên, nêu nguồn gốc của từng baseline, và phát biểu kết quả như một khoảng cách đã được thu hẹp.
</div>

Reviewer **Computer Vision** quen với bài toán mới đi kèm dataset, nhưng thường đòi một baseline chuyển thể từ phương pháp mạnh nhất của bài toán gần nhất, cùng kết quả định tính cho thấy baseline thất bại ở đâu. Reviewer **NLP** gần như chắc chắn hỏi một mô hình ngôn ngữ lớn được prompt zero-shot hoặc few-shot làm được tới đâu; đó thường là baseline chuyển thể tự nhiên nhất, bên cạnh hiệu năng của con người. Reviewer **Machine Learning**, khi gặp một thiết lập học mới, sẽ hỏi nó có phải chỉ là trường hợp riêng của một thiết lập đã biết hay không, nên paper cần nêu quan hệ hình thức với các thiết lập gần nhất.

### Điều không được làm

Bài toán mới trao cho người viết quyền đặt luật chơi, và quyền đó dễ bị lạm dụng: chọn ràng buộc, metric hay cách chia tập sao cho phương pháp đề xuất thắng chắc, rồi gọi đó là một bài toán mới. Dấu hiệu là bài toán chỉ khác bài toán cũ ở một ràng buộc không có lý do ứng dụng nào, metric được chọn sau khi đã xem kết quả, hoặc baseline chuyển thể bị cài đặt yếu một cách có chủ ý. Phép thử: một nhóm khác, không biết gì về phương pháp đề xuất, đọc phần định nghĩa bài toán thì có chọn đúng metric và giao thức ấy không? Cũng không được bỏ baseline tầm thường ra khỏi paper khi nó gần với phương pháp đề xuất (xem [Ranh giới trung thực](ranh-gioi-trung-thuc.md)).

## Tình huống 31: Kết quả tốt cho một bài toán reviewer không thấy quan trọng

### Nhận diện

Một nhóm NLP xây mô hình phát hiện khi người dùng hỏi lại, bằng cách diễn đạt khác, một câu hỏi đã hỏi trước đó trong cùng phiên trò chuyện với trợ lý ảo (ví dụ giả định). Mô hình vượt mọi baseline, ablation sạch sẽ, nhưng review quay lại với "the task seems narrow", "limited significance", và điểm rơi vào vùng borderline dù không ai chê phương pháp. Dấu hiệu nhận biết: review tấn công tầm quan trọng chứ không tấn công tính đúng; đoạn mở đầu introduction nói bài toán là gì nhưng không nói vì sao cần giải nó; tầm quan trọng được khẳng định bằng tính từ thay vì bằng chứng.

### Chẩn đoán

Có hai khả năng rất khác nhau. Khả năng thứ nhất là bài toán thật sự không quan trọng với cộng đồng đang nhắm tới: nó đã bão hòa, quá hẹp, hoặc chỉ có ý nghĩa trong một sản phẩm cụ thể. Khả năng thứ hai là bài toán quan trọng nhưng paper chưa trình bày được điều đó, vì người viết sống với bài toán nhiều tháng nên coi tầm quan trọng là hiển nhiên, trong khi reviewer gặp nó lần đầu.

Ba phép thử giúp phân biệt. Phép thử thứ nhất là *chuỗi "vì sao"*: hỏi "giải bài toán này có ích vì sao?" liên tiếp ba lần. Nếu chuỗi dẫn tới một mục tiêu mà cộng đồng đã công nhận, như đánh giá trợ lý hội thoại khi không có nhãn, bài toán có gốc rễ; nếu nó dừng ở "vì sản phẩm cần" hay "vì chưa ai làm", gốc rễ còn yếu. Phép thử thứ hai là *bằng chứng ngoài paper*: có dữ liệu cho thấy hiện tượng phổ biến không, có hệ thống hiện tại nào thất bại vì nó không? Phép thử thứ ba là trình bày bài toán trong một phút cho một đồng nghiệp ngoài nhóm: nếu họ tự nói ra được vì sao nó quan trọng, vấn đề nằm ở cách viết. Cũng cần nhớ rằng "quan trọng" luôn tương đối với một cộng đồng, nên lời phê "limited significance" đôi khi thực chất mang nghĩa paper đang ở sai chỗ.

### Các lối ra

**Lối ra thứ nhất: nối bài toán với một mục tiêu lớn hơn bằng bằng chứng.** Lối ra này dành cho khả năng thứ hai, và có ba loại bằng chứng mạnh. Loại thứ nhất là *ứng dụng cụ thể*: trong ví dụ, việc người dùng hỏi lại là tín hiệu ngầm cho biết trợ lý vừa trả lời không thỏa đáng, dùng được để đánh giá trợ lý mà không cần người dùng chấm điểm. Loại thứ hai là *quy mô*: số người dùng, tỉ lệ phiên bị ảnh hưởng, kèm cách đo. Loại thứ ba, thường thuyết phục nhất, là *kiểu thất bại của hệ thống hiện tại*: một bảng nhỏ cho thấy trợ lý mạnh nhất lặp lại câu trả lời sai khi bị hỏi lại có sức nặng hơn mọi tính từ. Nếu tìm mãi không ra bằng chứng nào, đó là thông tin chẩn đoán nghiêng về khả năng thứ nhất.

**Lối ra thứ hai: tổng quát hóa bài toán.** Nâng bài toán lên một bài toán rộng hơn mà bài toán gốc chỉ là một trường hợp, ví dụ từ "phát hiện câu hỏi được diễn đạt lại" lên "suy ra mức độ hài lòng của người dùng từ hành vi hội thoại". Lối ra này chỉ hợp lệ khi bằng chứng được mở rộng theo, tức phương pháp được thử trên vài trường hợp của bài toán tổng quát; tổng quát hóa bằng lời mà không mở rộng bằng chứng là thổi phồng claim (tình huống 10 trong bài [Ghép ý tưởng và "độn" đóng góp](ghep-va-don.md)).

**Lối ra thứ ba: đổi cộng đồng.** Khi bài toán quan trọng thật nhưng chỉ với một nhóm người đọc cụ thể, hãy đưa paper tới nơi họ đọc: hội nghị chuyên ngành, track ứng dụng như Applied Data Science của KDD (xem bài [AAAI, IJCAI, KDD và journal](../06-cong-dong/khac.md)), Findings hoặc journal chuyên ngành. Một paper được đúng người dùng đọc thường có ảnh hưởng hơn một paper chen vào main track. Quy trình chuyển được trình bày ở bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md).

**Lối ra thứ tư: dừng lại hoặc đổi hướng.** Nếu cả ba phép thử đều âm tính, bài toán có lẽ chỉ quan trọng với nhóm tác giả. Giá trị còn lại khi đó thường nằm ở phương pháp hoặc ở một hiện tượng phát hiện được trong quá trình làm, và chuyển chúng sang một bài toán có gốc rễ hơn thường tốt hơn nộp lại cùng một khung nhiều lần.

### Viết thế nào

Nơi quyết định là đoạn mở đầu introduction. Ở tình huống này, đoạn đầu và đoạn thứ hai trong cấu trúc của bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md) không được giả định người đọc đã đồng ý với tầm quan trọng của bài toán, mà phải chứng minh nó.

<div class="bad" markdown>
*"Conversational assistants have become increasingly popular in recent years. Detecting rephrased questions is an important and challenging task. In this paper, we propose RephraseNet, a novel model for detecting rephrased questions in multi-turn dialogues."*

Tầm quan trọng chỉ được khẳng định bằng hai tính từ, người đọc không biết ai cần phát hiện câu hỏi diễn đạt lại và để làm gì, còn câu đầu có thể mở đầu cho hàng nghìn paper khác.
</div>

<div class="good" markdown>
*"Conversational assistants rarely receive explicit feedback: in a log of 1.2M sessions from a deployed assistant, fewer than 2% contain a user rating (Sec. 3). Yet users signal failure implicitly, most often by asking the same question again in different words, which occurs in 14% of sessions. Current assistants largely ignore this signal: after a rephrased question, the strongest model we test repeats an equivalent incorrect answer in 41% of cases. Detecting rephrasing therefore offers a label-free way to identify assistant failures."* (số liệu hư cấu)

Đoạn này nối bài toán với một mục tiêu lớn hơn và đưa bằng chứng về quy mô cùng kiểu thất bại của hệ thống hiện tại, nên tới cuối đoạn tầm quan trọng đã được chứng minh chứ không chỉ được khẳng định.
</div>

Trong một paper thật, những con số như vậy phải được đo, có mô tả cách đo và tuân thủ điều kiện sử dụng dữ liệu log. Về khác biệt cộng đồng, reviewer **Computer Vision** thường cảm nhận tầm quan trọng qua ứng dụng nhìn thấy được và qua một Figure 1 cho thấy hệ thống hiện tại thất bại. Reviewer **NLP** sẵn lòng chấp nhận bài toán hẹp nếu nó có ý nghĩa ngôn ngữ học rõ ràng hoặc phục vụ một cộng đồng người dùng cụ thể, như người nói một ngôn ngữ ít tài nguyên. Với reviewer **Machine Learning**, "narrow" thường đồng nghĩa với "more suitable for a specialized venue", lời phê đã được phân tích trong bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md).

### Điều không được làm

Không bịa hay thổi phồng động lực: không trích số liệu thị trường không liên quan, không viện dẫn những ứng dụng mà phương pháp chưa từng được thử (kiểu "could enable safer autonomous driving"), không gán cho bài toán những hệ quả mà thí nghiệm không chạm tới. Reviewer nhận ra rất nhanh khoảng cách giữa tham vọng ở đoạn mở đầu và nội dung phần thí nghiệm, và khoảng cách ấy làm họ mất lòng tin vào cả những claim đúng. Motivation cũng là một claim, nên nó cần bằng chứng như mọi claim khác.

## Tình huống 32: Tốt hơn nhưng chậm hơn hoặc tốn kém hơn nhiều

### Nhận diện

Một nhóm Machine Learning đề xuất một optimizer dùng thông tin bậc hai xấp xỉ (ví dụ giả định). Mô hình huấn luyện bằng optimizer mới đạt loss cuối thấp hơn, nhưng mỗi bước chậm gần gấp đôi và tốn thêm bộ nhớ cỡ một bản sao tham số. Bảng chính so sánh ở cùng số bước, nơi phương pháp mới thắng rõ; biểu đồ theo thời gian thực thì chưa ai vẽ. Phiên bản ở các cộng đồng khác cũng quen thuộc: một mô hình segmentation tăng 1,5 điểm mIoU nhưng suy luận chậm gấp ba, hay một chiến lược prompting gọi LLM hàng chục lần cho mỗi câu hỏi. Dấu hiệu chung là bảng chính không có cột chi phí, và trục hoành của biểu đồ là số bước thay vì thời gian hay FLOPs.

### Chẩn đoán

"So sánh cùng điều kiện" có nhiều nghĩa: cùng số bước, cùng số tham số, cùng thời gian, cùng FLOPs hay cùng chi phí tiền, và mỗi lựa chọn có thể đảo ngược kết luận. Câu hỏi thật sự của reviewer là: nếu cho baseline cùng ngân sách, bằng cách chạy lâu hơn, dùng mô hình lớn hơn hay lấy nhiều mẫu hơn, nó có bắt kịp không? Câu hỏi này có họ hàng gần với tình huống 17 (thắng nhờ dữ liệu nhiều hơn hoặc mô hình lớn hơn) trong bài [Khi con số không đẹp](con-so-khong-dep.md).

Trước khi viết, cần xác định chi phí phát sinh ở huấn luyện, chỉ trả một lần, hay ở suy luận, trả mỗi lần dùng; phương pháp tốn gấp đôi khi huấn luyện dễ được chấp nhận hơn nhiều so với phương pháp suy luận chậm gấp mười. Cũng cần biết chi phí tăng theo quy mô thế nào, vì một hằng số nhân có thể được tối ưu bằng cài đặt tốt hơn, còn độ phức tạp bậc hai theo độ dài chuỗi thì không, và thành phần nào gánh phần lớn chi phí.

### Các lối ra

**Lối ra thứ nhất: báo cáo chi phí trung thực và đầy đủ.** Đây là điều kiện cho mọi lối ra khác. Cần báo cáo thời gian huấn luyện (giờ GPU trên phần cứng nêu rõ), thời gian suy luận (độ trễ và thông lượng ở batch size nêu rõ), bộ nhớ đỉnh, FLOPs, và với phương pháp dùng API thì thêm số lần gọi, số token và chi phí tiền kèm thời điểm áp dụng bảng giá. Mỗi đại lượng có điểm mù: FLOPs bỏ qua chi phí truy cập bộ nhớ, độ trễ phụ thuộc cài đặt, chi phí API đổi theo bảng giá và phiên bản mô hình (tình huống 27 trong bài [Áp lực từ bên ngoài](ap-luc-ben-ngoai.md)). Vì vậy nên báo cáo ít nhất một đại lượng lý thuyết và một đại lượng đo thực, theo các nguyên tắc so sánh tốc độ trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md). NeurIPS Paper Checklist hỏi về tài nguyên tính toán, Responsible NLP Checklist hỏi về số tham số và ngân sách tính toán. Strubell và cộng sự (*Energy and Policy Considerations for Deep Learning in NLP*, ACL 2019) đã định lượng chi phí tài chính và môi trường của việc huấn luyện các mô hình NLP phổ biến, còn position paper *Green AI* (Schwartz và cộng sự, 2019) đề xuất coi hiệu quả là một tiêu chí đánh giá bên cạnh độ chính xác.

**Lối ra thứ hai: trình bày đánh đổi bằng biểu đồ Pareto.** Vẽ chất lượng theo chi phí cho nhiều cấu hình của mỗi phương pháp; đường biên Pareto nối những điểm mà không điểm nào khác vừa rẻ hơn vừa tốt hơn. Câu hỏi khi đó trở thành: phương pháp có đẩy đường biên ra không, và ở đoạn chi phí nào? Rất thường gặp là phương pháp tốn kém chỉ nằm trên đường biên ở vùng ngân sách lớn; claim trung thực khi ấy là "khi đã sẵn sàng chi nhiều, đây là cách chi hiệu quả nhất", hẹp hơn nhưng vững hơn. Với optimizer trong ví dụ, biểu đồ đúng là loss theo thời gian thực (*time-to-accuracy*). Cấu hình matplotlib cho hình in đẹp có ở bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md); phần tính đường biên chỉ cần vài dòng.

```python
import numpy as np


def pareto_front(cost, quality):
    """Chỉ số các điểm mà không điểm nào khác vừa rẻ hơn vừa tốt hơn."""
    cost, quality = np.asarray(cost), np.asarray(quality)
    order = np.lexsort((-quality, cost))   # chi phí tăng dần; cùng chi phí thì điểm tốt hơn trước
    front, best = [], -np.inf
    for i in order:
        if quality[i] > best:
            front.append(i)
            best = quality[i]
    return np.array(front)
```

**Lối ra thứ ba: đề xuất biến thể nhẹ.** Thường có một thành phần gánh phần lớn chi phí. Một *ablation chi phí*, tức bỏ hoặc xấp xỉ từng thành phần rồi đo cả chất lượng lẫn chi phí, có thể cho thấy một biến thể giữ phần lớn cải thiện với một phần nhỏ chi phí, chẳng hạn chỉ cập nhật thông tin bậc hai sau mỗi mười bước. Biến thể nhẹ là thêm một điểm trên đường biên, và nhiều khi chính nó mới là thứ được dùng rộng rãi, với điều kiện nó được đánh giá nghiêm túc như phương pháp chính.

**Lối ra thứ tư: nêu rõ khi nào chi phí đáng bỏ ra.** Chi phí cao vẫn hợp lý khi mỗi lần sai rất đắt giá (chẩn đoán y khoa, kiểm định an toàn), khi phương pháp chỉ chạy một lần để sinh nhãn rồi được chưng cất sang mô hình rẻ, hoặc khi chi phí chỉ nằm ở huấn luyện. Paper nên nói thẳng bối cảnh nào đáng dùng và bối cảnh nào không. Nếu không tìm được bối cảnh nào như vậy và baseline cùng ngân sách bắt kịp, đó là một kết quả âm tính; lối ra khi ấy gần với tình huống 20 và 21 trong bài [Khi câu chuyện và bằng chứng không khớp](cau-chuyen-va-bang-chung.md).

### Viết thế nào

Nguyên tắc là đưa chi phí vào bảng chính và vào chính câu claim, để người đọc biết cái giá của cải thiện ngay khi biết cải thiện.

<div class="bad" markdown>
*"Our optimizer converges significantly faster than Adam and achieves a lower final loss (Fig. 3). Computational overhead is discussed in Appendix F."*

"Faster" ở đây nghĩa là ít bước hơn nhưng người đọc hiểu là ít thời gian hơn; chi phí thật bị đẩy xuống appendix, nơi reviewer sẽ tìm ra nó và mất lòng tin vào cả claim chính.
</div>

<div class="good" markdown>
*"Per step, our optimizer is 1.8× slower than Adam and uses 1.5× more memory (Table 2). In wall-clock time on the same hardware, it reaches the target loss 1.3× sooner on language modeling, but offers no benefit on image classification, where Adam with a tuned schedule matches it at equal time (Fig. 3). A lightweight variant that refreshes curvature every 10 steps retains most of the gain at 1.1× the per-step cost."* (số liệu hư cấu)

Đoạn này nêu chi phí trước, so sánh theo thời gian thực, tách chế độ thắng khỏi chế độ không thắng, và đưa biến thể nhẹ ra như một điểm khác trên đường biên.
</div>

Reviewer **Computer Vision** đặc biệt chú ý tới chi phí suy luận, vì nhiều ứng dụng thị giác chạy theo thời gian thực hoặc trên thiết bị; họ quen thấy số tham số, FLOPs và độ trễ trong bảng chính, nhưng vẫn chấp nhận phương pháp chậm ở bài toán ngoại tuyến như tái tạo 3D nếu chất lượng vượt trội rõ rệt. Reviewer **NLP** đo chi phí bằng số lần gọi, số token và tiền, và với một chiến lược prompting tốn kém, gần như chắc chắn hỏi kết quả ra sao nếu chỉ lấy nhiều câu trả lời rồi bỏ phiếu với cùng số lần gọi. Reviewer **Machine Learning** hỏi về độ phức tạp tiệm cận và so sánh ở cùng ngân sách tính toán; với thuật toán huấn luyện, time-to-accuracy gần như là chuẩn.

### Điều không được làm

Không chọn trục so sánh chỉ vì nó che được chi phí, không đẩy chi phí xuống appendix khi nó làm thay đổi kết luận, không đo phương pháp đề xuất và baseline trên phần cứng hay cài đặt khác nhau, và không viết "negligible overhead" khi chưa đo. Lipton và Steinhardt (*Troubling Trends in Machine Learning Scholarship*) xếp việc không xác định đúng nguồn gốc của cải thiện thực nghiệm vào bốn xu hướng đáng lo của ngành: nếu cải thiện thực ra đến từ việc tiêu nhiều tài nguyên hơn, paper đang quy công cho sai thứ, dù từng con số đều đúng.

## Tình huống 33: Dữ liệu riêng không thể công bố

### Nhận diện

Một nhóm NLP hợp tác với một bệnh viện để trích xuất thông tin về tác dụng phụ của thuốc từ ghi chú lâm sàng (ví dụ giả định). Thỏa thuận với bệnh viện không cho đưa dữ liệu ra ngoài, kể cả đã ẩn danh. Kết quả rất tốt, nhưng nhóm lo bị phạt vì không ai tái lập được. Biến thể tương tự có ở mọi cộng đồng: ảnh y khoa hay ảnh camera dây chuyền ở Computer Vision, dữ liệu giao dịch hay log hành vi người dùng ở Machine Learning. Dấu hiệu nhận biết: mọi thí nghiệm chỉ chạy trên dữ liệu riêng, phần mô tả dữ liệu chỉ có vài câu, và các mục về dữ liệu và code trong checklist được trả lời "No" mà không giải thích.

### Chẩn đoán

Reviewer lo hai điều khác nhau. Mối lo thứ nhất là *kiểm chứng*: không ai ngoài nhóm kiểm tra được kết quả, nên claim chỉ còn được tin dựa trên uy tín. Mối lo thứ hai là *tổng quát*: dữ liệu riêng có thể mang đặc thù, như cách ghi chép của một bệnh viện, khiến kết quả không đúng ở nơi khác. Bên cạnh đó là câu hỏi đạo đức: dữ liệu về con người có được thu thập và sử dụng với sự chấp thuận cần thiết không. Trước khi viết, nhóm tác giả cần biết có dataset công khai nào cho cùng loại bài toán không, phần nào của công trình công bố được mà không lộ dữ liệu, dữ liệu riêng khác dữ liệu công khai ở điểm nào, và nghiên cứu đã được chấp thuận chưa.

### Các lối ra

**Lối ra thứ nhất: bổ sung kết quả trên dataset công khai tương tự.** Đây là câu trả lời mạnh nhất cho mối lo kiểm chứng. Trong ví dụ, ngoài ghi chú của bệnh viện đối tác, nhóm có thể đánh giá trên một bộ dữ liệu lâm sàng đã ẩn danh mà cộng đồng đang dùng, loại thường cấp quyền truy cập sau khi người dùng đăng ký và cam kết điều khoản sử dụng. Nếu phương pháp thắng trên dữ liệu riêng mà không thắng trên dữ liệu công khai, kết quả đó phải được báo cáo, vì nó gợi ý phương pháp đang khai thác một đặc thù của dữ liệu riêng. Khi bài toán chưa có dataset công khai nào, cần dựa vào các lối ra sau, và cân nhắc liệu xây một dataset công khai nhỏ có phải một đóng góp đáng làm.

**Lối ra thứ hai: mô tả dữ liệu chi tiết, phát hành code, công bố thống kê tổng hợp.** Dữ liệu không ra ngoài được, nhưng thông tin về dữ liệu thì có thể. Phần mô tả nên trả lời các câu hỏi của những khuôn tài liệu hóa như *Datasheets for Datasets* (Gebru và cộng sự) hay *Data Statements* (Bender và Friedman, TACL 2018): nguồn và giai đoạn thu thập, tiêu chí chọn mẫu, hướng dẫn gán nhãn, độ đồng thuận giữa người gán nhãn, phân bố nhãn. Cách chia tập đáng được nói kỹ, vì chia theo bệnh nhân hay theo ghi chú là chi tiết nhỏ nhưng có thể gây rò rỉ giữa tập huấn luyện và tập kiểm tra. Code nên được phát hành đầy đủ và chạy được trên dữ liệu công khai. Thống kê tổng hợp có thể công bố nếu không cho phép suy ngược ra cá nhân, với lưu ý các ô có tần suất rất nhỏ có thể làm lộ danh tính. Khi điều kiện cho phép, một phương án trung gian là truy cập có kiểm soát: dữ liệu ở lại tổ chức, nhà nghiên cứu khác xin quyền theo thỏa thuận hoặc gửi code để chạy mà không nhìn thấy dữ liệu.

**Lối ra thứ ba: dữ liệu tổng hợp, nhưng chỉ như phương án phụ.** Một bộ dữ liệu tổng hợp cùng định dạng giúp người khác chạy thử pipeline, nhưng không thay thế được bằng chứng: kết quả trên đó chỉ cho biết phương pháp hoạt động trên phân phối mà bộ sinh tạo ra, phân phối có thể thiếu đúng những đặc điểm khó nhất của dữ liệu thật. Hơn nữa, bộ sinh huấn luyện trên dữ liệu riêng có thể ghi nhớ và tái tạo bản ghi thật, nên dữ liệu tổng hợp không mặc nhiên an toàn về quyền riêng tư.

**Lối ra thứ tư: chọn hình thức công bố phù hợp.** Một số nơi coi trọng tác động trên dữ liệu thật hơn khả năng tái lập toàn phần: track ứng dụng như Applied Data Science của KDD, các hội nghị và journal chuyên về một miền như tin học y sinh. Ở main track các hội nghị A\*, paper chỉ dựa vào dữ liệu riêng vẫn có thể được nhận, nhưng gánh nặng chứng minh nặng hơn hẳn, và reviewer thường kỳ vọng ít nhất lối ra thứ nhất hoặc thứ hai đã được thực hiện.

### Viết thế nào

Đoạn tuyên bố về khả năng truy cập dữ liệu, ở phần thí nghiệm hoặc reproducibility statement, là chỗ thể hiện rõ nhất cách nhóm xử lý tình huống.

<div class="bad" markdown>
*"Due to privacy concerns, the data cannot be released."*

Câu này đúng nhưng không cho reviewer bất cứ thứ gì để bù lại: không mô tả dữ liệu, không có kết quả kiểm chứng được, không có thông tin về chấp thuận đạo đức.
</div>

<div class="good" markdown>
*"The clinical notes cannot be shared under our data use agreement with the partner hospital. To support verification, we (i) report results on a public de-identified clinical benchmark, where the same trends hold (Table 4); (ii) release our code and models trained on the public data, with a small synthetic sample for testing the pipeline; and (iii) document the private dataset following a datasheet (Appendix B), including annotation guidelines, inter-annotator agreement, patient-level splits and aggregate statistics. The study protocol was approved by the hospital's ethics committee."* (ví dụ giả định)

Đoạn này thừa nhận giới hạn rồi bù lại bằng ba thứ cụ thể, nói rõ dữ liệu tổng hợp chỉ để kiểm tra pipeline, và trả lời câu hỏi đạo đức bằng một thông tin kiểm chứng được.
</div>

!!! info "Chấp thuận đạo đức phải có trước khi dùng dữ liệu"
    Với dữ liệu về con người, câu hỏi đầu tiên của reviewer, và của ethics reviewer nếu paper bị gắn cờ, là việc thu thập và sử dụng đã được chấp thuận chưa. Ở nhiều cơ sở nghiên cứu, cơ chế này là IRB (*Institutional Review Board*) hoặc một hội đồng đạo đức tương đương; quy định cụ thể khác nhau giữa quốc gia, tổ chức và loại dữ liệu. Chấp thuận là điều kiện để bắt đầu nghiên cứu, không phải thủ tục bổ sung khi nộp bài, nên câu hỏi "có cần chấp thuận không, và của ai?" nên được đặt ra ngay khi bàn hợp tác về dữ liệu. Paper nên nêu ai chấp thuận, cho mục đích gì, dữ liệu được ẩn danh ra sao và ai được truy cập (xem phần ethics statement trong bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md)).

Tình huống này gắn trực tiếp với các mục về khả năng tái lập trong checklist của hội nghị. NeurIPS Paper Checklist hỏi về việc công bố dữ liệu và code, và câu trả lời [No] kèm lý do chính đáng là chấp nhận được; lý do tốt nhất là con trỏ tới những gì đã làm để bù lại. Responsible NLP Checklist hỏi kỹ về tài sản dữ liệu, thông tin định danh cá nhân, tài liệu mô tả, thống kê các tập chia và phê duyệt đạo đức (bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md)). Các hội nghị Computer Vision thường đặt câu hỏi về dữ liệu liên quan tới con người trong form nộp bài, và yêu cầu thay đổi theo năm (bài [Chuẩn bị nộp bài](../04-nop-va-sau-nop/submission.md)). Nhìn chung, reviewer NLP đọc phần dữ liệu kỹ nhất, reviewer ML coi nặng việc thiếu benchmark công khai vì họ đánh giá tính tổng quát, còn reviewer CV trong bài toán ảnh y khoa thường kỳ vọng ít nhất một benchmark công khai để so sánh.

### Điều không được làm

Không dùng "dữ liệu riêng" làm tấm khiên tránh so sánh: không giấu kết quả trên dữ liệu công khai vì ở đó phương pháp không thắng, và không viện dẫn quyền riêng tư để giữ lại cả code khi code không chứa dữ liệu. Không tuyên bố đã có chấp thuận đạo đức khi chưa có, và không dùng dữ liệu về con người trước rồi mới tìm cách hợp thức hóa. Không phát hành mô hình huấn luyện trên dữ liệu nhạy cảm khi chưa đánh giá nguy cơ rò rỉ dữ liệu qua mô hình và chưa được bên giữ dữ liệu đồng ý. Đây là sai phạm, không phải chuyện trình bày chưa khéo (xem [Ranh giới trung thực](ranh-gioi-trung-thuc.md)).

## Tình huống 34: Lý thuyết đẹp mà thí nghiệm đồ chơi, hoặc ngược lại

### Nhận diện

Tình huống có hai kịch bản đối xứng, thường gặp khi nộp NeurIPS, ICML hay ICLR (ví dụ giả định). Ở kịch bản A, nhóm chứng minh một bound tổng quát hóa cho một lớp mạng hai tầng, nhưng thí nghiệm duy nhất là dữ liệu Gaussian hai chiều với một MLP nhỏ, và review phê "experiments are limited to toy settings". Ở kịch bản B, nhóm phát hiện một tiêu chí chọn dữ liệu huấn luyện giúp nhiều mô hình ngôn ngữ cỡ vừa học tốt hơn với ít dữ liệu hơn, trên nhiều benchmark, quy mô và seed, nhưng không có định lý nào, nên nhóm định thêm một định lý cho "đủ chuẩn ML". Dấu hiệu của kịch bản A là thí nghiệm không đo đại lượng mà định lý nói tới; dấu hiệu của kịch bản B là một định lý sắp được thêm vào mà không giải thích thí nghiệm nào, hoặc phần thảo luận đầy những câu "this is because…" chưa được kiểm chứng.

### Chẩn đoán

Cả hai kịch bản bắt nguồn từ cùng một hiểu lầm: coi lý thuyết và thực nghiệm là hai hạng mục cần "có đủ", thay vì hai loại bằng chứng phải nối với nhau. Các ML venue không đòi mọi paper mạnh ở cả hai mặt, mà đòi mỗi loại bằng chứng có mặt làm đúng việc của nó. Thí nghiệm trong paper lý thuyết có nhiệm vụ kiểm chứng dự đoán của lý thuyết; lý thuyết hay phân tích trong paper thực nghiệm có nhiệm vụ giải thích hiện tượng hoặc khoanh vùng nơi nó xảy ra. Với kịch bản A, câu hỏi cần trả lời là định lý dự đoán điều gì đo được, như một xu hướng, một tốc độ hay một ngưỡng, và giả định có thỏa trong thí nghiệm không. Với kịch bản B, câu hỏi là cơ chế nào có thể giải thích hiện tượng, thí nghiệm nào phân biệt được các giải thích cạnh tranh, và hiện tượng hỏng ở đâu.

### Các lối ra

**Lối ra thứ nhất, cho kịch bản A: thí nghiệm kiểm chứng đúng dự đoán của lý thuyết.** ML venue chấp nhận paper lý thuyết với thí nghiệm nhỏ, miễn là thí nghiệm kiểm chứng đúng điều lý thuyết dự đoán. Thí nghiệm như vậy đo trực tiếp đại lượng trong định lý và vẽ nó theo biến mà định lý nói tới; khi lý thuyết dự đoán một tốc độ, đồ thị log-log đặt độ dốc dự đoán cạnh độ dốc đo được là bằng chứng rất mạnh. Tiếp theo, nên vi phạm giả định một cách có kiểm soát để xem dự đoán suy giảm thế nào, và nếu được, đo cùng đại lượng trên một benchmark quy mô vừa. Các nguyên tắc toy experiment trong bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md) áp dụng trọn vẹn ở đây. Lối ra này không đòi chạy ImageNet; nó đòi thí nghiệm có một câu hỏi rõ ràng.

**Lối ra thứ hai, cho kịch bản B: thay định lý bằng phân tích nghiêm túc.** Thực nghiệm mạnh không cần định lý để được nhận ở các ML venue. *Are GANs Created Equal?* (NeurIPS 2018) là một nghiên cứu so sánh quy mô lớn; *On the State of the Art of Evaluation in Neural Language Models* (ICLR 2018) và *Rethinking the Value of Network Pruning* (ICLR 2019) đánh giá lại các giả định phổ biến bằng thí nghiệm có kiểm soát; còn đóng góp chính của *Understanding Deep Learning Requires Rethinking Generalization* (ICLR 2017) là một thí nghiệm rất đơn giản với nhãn ngẫu nhiên. Thứ các paper này có, và thứ reviewer thật sự đòi, là *phân tích*: thí nghiệm cô lập cơ chế, ablation loại trừ giải thích thay thế, phân tích độ nhạy, và mô tả rõ nơi hiện tượng hỏng. Với ví dụ chọn dữ liệu, phân tích có thể trả lời hiện tượng có còn khi đổi họ mô hình, đổi quy mô, hay khi thay tiêu chí bằng một cách chọn ngẫu nhiên có cùng phân bố độ dài. Một toy model tái hiện được hiện tượng, dù không kèm định lý, cũng thường được đánh giá cao vì nó cho thấy tác giả hiểu cơ chế.

**Lối ra thứ ba: một kết quả lý thuyết khiêm tốn nhưng liên quan.** Đôi khi một mệnh đề đơn giản thực sự giải thích hiện tượng, chẳng hạn chứng minh rằng trong mô hình tuyến tính, tiêu chí chọn dữ liệu tương đương với việc giảm phương sai của gradient. Mệnh đề như vậy có giá trị khi nó dự đoán được điều mà thí nghiệm kiểm chứng và khi paper nói rõ khoảng cách giữa mô hình đơn giản và bối cảnh thực. Nếu không chỉ ra được dự đoán kiểm chứng được nào, mệnh đề không nên có mặt.

**Lối ra thứ tư: chọn nơi công bố theo loại bằng chứng mạnh nhất.** Paper lý thuyết thuần với thí nghiệm minh họa có thể tìm được người đọc phù hợp hơn ở các hội nghị chuyên về lý thuyết học máy như COLT; paper thực nghiệm gắn chặt với một miền có thể được đánh giá đúng hơn ở hội nghị chuyên ngành. TMLR, với tiêu chí chính là claim có được bằng chứng ủng hộ thuyết phục và có người quan tâm hay không, phù hợp với cả hai kiểu khi paper vững nhưng chưa đạt mức nổi bật mà hội nghị lớn kỳ vọng.

### Viết thế nào

Với kịch bản A, việc quan trọng nhất là phát biểu giả định và giới hạn. Mỗi giả định nên kèm một câu cho biết khi nào nó thỏa, khi nào bị vi phạm, và thí nghiệm nào kiểm tra hậu quả của vi phạm; giới hạn như chế độ tiệm cận, độ lớn hằng số hay lớp mô hình được bao phủ nên xuất hiện cả ở phần chính lẫn trong Limitations.

<div class="bad" markdown>
*"Under mild assumptions (see Appendix), our bound shows that the proposed regularizer provably improves the generalization of deep networks."*

"Mild assumptions" giấu giả định vào appendix, "deep networks" vượt xa lớp mạng hai tầng mà định lý bao phủ, và người đọc không biết dự đoán nào đã được kiểm chứng.
</div>

<div class="good" markdown>
*"Theorem 1 holds for two-layer networks in the lazy-training regime (Assumption 2), which requires the width to be large relative to the sample size. It predicts that the generalization gap shrinks as $1/\sqrt{n}$ once the margin exceeds a threshold. We verify both the slope and the threshold on synthetic data (Fig. 2a), and observe the same trend with a larger constant on CIFAR-10, where Assumption 2 holds only approximately (Fig. 2b). Extending the analysis beyond the lazy regime remains open."* (ví dụ giả định)

Phạm vi của định lý được nói đúng, giả định có tên và điều kiện, dự đoán cụ thể được kiểm chứng cả khi giả định thỏa lẫn khi chỉ thỏa xấp xỉ, và phần còn bỏ ngỏ được nói thẳng.
</div>

Với kịch bản B, việc quan trọng nhất là phân biệt giải thích với suy đoán, xu hướng đầu tiên trong bốn xu hướng mà Lipton và Steinhardt chỉ ra. Câu *"We hypothesize that the selected examples reduce gradient noise early in training; consistent with this, the gain disappears when the batch size is increased 8× (Sec. 5.3)"* cho người đọc biết đâu là giả thuyết, đâu là bằng chứng. Ngược lại, câu *"This is because the selected examples are more informative"* trình bày suy đoán như sự thật, và reviewer sẽ hỏi ngay "informative" đo bằng cách nào. Tình huống này chủ yếu thuộc về các ML venue: reviewer **Machine Learning** chuyên lý thuyết bắt đầu bằng việc soát giả định, còn reviewer thực nghiệm bắt đầu bằng việc tìm phần phân tích. Reviewer **Computer Vision** hiếm khi đòi lý thuyết, và một định lý trang trí trong paper CV thường chỉ thu hút sự soi xét. Ở **NLP**, phân tích ngôn ngữ và phân tích lỗi đóng vai trò mà lý thuyết đóng ở ML.

### Điều không được làm

Không gắn định lý trang trí, thứ Lipton và Steinhardt gọi là "mathiness": một định lý không giải thích thí nghiệm nào, một bound đúng với mọi phương pháp nên không phân biệt được gì, hay ký hiệu phức tạp hóa một ý đơn giản. Không giấu giả định vào chứng minh, không phát biểu định lý rộng hơn những gì đã chứng minh, và không trình bày suy đoán như giải thích đã kiểm chứng. Cũng không chỉ chọn những bối cảnh toy mà lý thuyết trông khớp: thí nghiệm nơi lý thuyết thất bại là một phần của bằng chứng về phạm vi của lý thuyết.

## Tình huống 35: Đẹp trên benchmark, không chuyển được sang thực tế

### Nhận diện

Một nhóm Computer Vision phát triển mô hình nhận dạng loài động vật từ ảnh bẫy ảnh (*camera trap*), đạt độ chính xác cao trên tập test của một benchmark phổ biến (ví dụ giả định). Khi một tổ chức bảo tồn thử mô hình trên ảnh từ những camera mới ở một khu rừng khác, độ chính xác giảm mạnh, và nhóm băn khoăn có nên nhắc tới kết quả này không. Ở NLP, phiên bản quen thuộc là một mô hình suy luận ngôn ngữ (NLI) đạt điểm cao trên benchmark nhưng thất bại trên câu do người dùng thật viết. Dấu hiệu chung là khoảng cách lớn giữa kết quả benchmark và kết quả trên dữ liệu mới, cùng sự nhạy cảm với những thay đổi tưởng như vô hại: camera khác, nguồn văn bản khác, thời điểm thu thập khác.

### Chẩn đoán

Cần phân biệt hai hiện tượng thường bị gộp làm một. Hiện tượng thứ nhất là **distribution shift** (dịch chuyển phân phối): benchmark đo đúng năng lực cần đo, nhưng dữ liệu triển khai đến từ một phân phối khác. *WILDS: A Benchmark of in-the-Wild Distribution Shifts* (Koh và cộng sự, ICML 2021) tập hợp các dataset phản ánh những dịch chuyển xuất hiện tự nhiên trong ứng dụng, như giữa các bệnh viện trong nhận diện khối u hay giữa các bẫy ảnh trong giám sát động vật hoang dã. Paper phân biệt *domain generalization*, khi huấn luyện và kiểm tra trên những miền tách biệt, với *subpopulation shift*, khi các miền trùng nhau nhưng tỉ lệ khác nhau và mô hình được đánh giá trên nhóm tệ nhất. Trên mỗi dataset, huấn luyện chuẩn cho kết quả ngoài phân phối thấp hơn đáng kể so với trong phân phối, và khoảng cách vẫn còn với các phương pháp được thiết kế riêng cho dịch chuyển. Recht và cộng sự (*Do ImageNet Classifiers Generalize to ImageNet?*, ICML 2019) cho thấy một điều tinh tế hơn: khi tạo lại tập test của CIFAR-10 và ImageNet theo đúng quy trình gốc, độ chính xác vẫn giảm, dù thứ hạng giữa các mô hình phần lớn được giữ, và các tác giả lập luận rằng mức giảm đến từ việc mô hình nhạy với những khác biệt nhỏ trong quy trình tạo dữ liệu chứ không từ việc tune quá nhiều trên tập test cũ.

Hiện tượng thứ hai là **benchmark không đại diện**: bản thân benchmark không đo đúng năng lực mà ứng dụng cần. Benchmark có thể chứa dấu vết gán nhãn cho phép đạt điểm cao bằng lối tắt (Gururangan và cộng sự, NAACL 2018), mô hình có thể dựa vào heuristic nông mà tập test không phân biệt được (McCoy, Pavlick, Linzen, ACL 2019), hoặc metric có thể lệch khỏi điều cần đo, như FID chịu ảnh hưởng của thông tin lớp ImageNet (Kynkäänniemi và cộng sự, ICLR 2023). CheckList cũng xuất phát từ nhận xét rằng độ chính xác trên tập held-out thường đánh giá quá cao năng lực thực (xem [case study CheckList](../05-case-studies/checklist-acl2020.md)).

Với distribution shift, câu hỏi là phương pháp có bền vững trước dịch chuyển không; với benchmark không đại diện, câu hỏi là kết quả benchmark còn ý nghĩa không, dẫn thẳng tới tình huống 22 trong bài [Khi câu chuyện và bằng chứng không khớp](cau-chuyen-va-bang-chung.md). Một phép chẩn đoán hữu ích là xem các baseline có giảm tương tự không: nếu mọi phương pháp cùng giảm, vấn đề thuộc về bài toán hoặc dữ liệu; nếu phương pháp đề xuất giảm nhiều hơn, vấn đề thuộc về phương pháp.

### Các lối ra

**Lối ra thứ nhất: báo cáo trung thực kết quả ngoài phân phối.** Đánh giá trên ít nhất một tập ngoài phân phối và báo cáo cả kết quả trong lẫn ngoài phân phối, cho phương pháp đề xuất và cho baseline. Báo cáo cả hai loại kết quả, cùng với việc tránh khớp quá mức vào phân phối kiểm tra, cũng nằm trong những khuyến nghị WILDS đưa ra cho người phát triển phương pháp. Kết quả ngoài phân phối kém không nhất thiết làm hỏng paper: nếu phương pháp vẫn hơn baseline khi cả hai cùng giảm, claim "tốt hơn" vẫn đứng; nếu phương pháp mất lợi thế, claim cần được khoanh lại. Điều reviewer không bỏ qua là việc tự họ phát hiện ra một khoảng cách mà paper im lặng.

**Lối ra thứ hai: biến khoảng cách thành câu hỏi nghiên cứu.** Khi khoảng cách lớn và có hệ thống, nó có thể đáng giá hơn chính kết quả benchmark. Paper có thể chuyển trọng tâm sang đo khoảng cách có hệ thống, phân tích yếu tố gây ra nó, như ảnh chụp ban đêm hay các loài hiếm, rồi đề xuất hoặc đánh giá cách thu hẹp nó. Recht và cộng sự là một ví dụ: câu hỏi "mô hình có tổng quát hóa sang một tập test mới tạo theo cùng quy trình không?" đã trở thành chính đóng góp. Hướng này có thể dẫn tới một paper phân tích, một benchmark mới ở Datasets & Benchmarks track, hoặc một phương pháp nhắm tới độ bền vững, với điều kiện phân tích vượt qua mức "mô hình giảm hiệu năng khi đổi dữ liệu" mà cộng đồng đã biết từ lâu.

**Lối ra thứ ba: ghi vào Limitations với phạm vi rõ ràng.** Khi chưa có điều kiện phân tích sâu, tối thiểu là ghi vào Limitations: đã thử trên dữ liệu nào, giảm bao nhiêu, nghi ngờ nguyên nhân gì, và claim đúng trong phạm vi nào. Như bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md) đã giảng, một hạn chế do tác giả chủ động nêu là bằng chứng của sự hiểu biết, còn cùng hạn chế ấy do reviewer tự phát hiện sẽ thành điểm yếu kèm nghi ngờ che giấu. Lối ra này không phù hợp khi khoảng cách làm sụp đổ claim chính: nếu kết quả benchmark chủ yếu đến từ một lối tắt của benchmark, lối ra trung thực là dừng claim về phương pháp và công bố chính phát hiện về benchmark, như tình huống 22 đã bàn.

### Viết thế nào

Kết quả ngoài phân phối nên có mặt trong bảng chính như một cột riêng, và abstract nên khoanh claim theo benchmark đã dùng thay vì tuyên bố chung về "thế giới thực".

<div class="bad" markdown>
*"Our model achieves state-of-the-art accuracy on [Benchmark] and is therefore ready for real-world wildlife monitoring."*

Câu này suy từ kết quả trong phân phối ra một claim về triển khai mà paper chưa hề kiểm chứng.
</div>

<div class="good" markdown>
*"Our model improves in-distribution accuracy on [Benchmark] by 3.1 points. On images from camera locations unseen during training, all methods drop by 20–25 points; our model retains a 1.8-point advantage over the strongest baseline, but the gap to in-distribution performance remains large (Table 3). Error analysis attributes most remaining failures to night-time images and rare species (Sec. 5.4), which we discuss as limitations."* (số liệu hư cấu)

Đoạn này báo cáo cả hai loại kết quả, tách lợi thế tương đối (vẫn còn) khỏi khoảng cách tuyệt đối (vẫn lớn), và chỉ ra nguồn gốc của các thất bại.
</div>

Reviewer **Computer Vision** ngày càng hay hỏi về đánh giá chéo dataset và chéo miền; với bài toán ứng dụng như y khoa hay viễn thám, kết quả trên một benchmark duy nhất thường bị xem là chưa đủ. Reviewer **NLP** hay hỏi về tập test ngoài miền, tập thử thách nhắm vào từng hiện tượng, và nguy cơ nhiễm dữ liệu khi dùng mô hình ngôn ngữ lớn (bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md)). Với reviewer **Machine Learning**, distribution shift tự nó là một lĩnh vực nghiên cứu, nên claim về độ bền vững được kỳ vọng kiểm chứng trên những dịch chuyển tự nhiên như trong WILDS, chứ không chỉ trên nhiễu tổng hợp do tác giả tự tạo.

### Điều không được làm

Không chọn tập ngoài phân phối sau khi đã xem kết quả, tức chỉ báo cáo những tập mà phương pháp thắng; đây là một nhánh điển hình của "khu vườn rẽ nhánh" mà Gelman và Loken mô tả, nơi những lựa chọn phân tích không được khai báo làm sai lệch kết luận kể cả khi không cố ý. Không dùng tập ngoài phân phối để tune rồi báo cáo như thể mô hình chưa từng thấy nó. Không dùng các cụm "real-world", "in the wild" hay "robust" khi chỉ đánh giá trên benchmark chuẩn. Và không giấu một kết quả triển khai thất bại mà nhóm đã biết: nếu reviewer được xem toàn bộ log thí nghiệm, sự im lặng ấy không đứng được (xem [Ranh giới trung thực](ranh-gioi-trung-thuc.md)).

## Tổng hợp: câu hỏi của reviewer và bằng chứng tối thiểu

Sáu tình huống trên đều dẫn tới một câu hỏi mà reviewer chắc chắn sẽ đặt ra, và một lượng bằng chứng tối thiểu mà paper phải có sẵn để trả lời. "Tối thiểu" không có nghĩa là đủ để được nhận; nó có nghĩa là thiếu nó thì gần như chắc chắn bị phê ở đúng điểm ấy, bất kể phần còn lại tốt tới đâu. Bảng dưới đây dùng để rà soát trước khi nộp: với mỗi dòng áp dụng cho dự án, nhóm tác giả cần chỉ ra được bằng chứng tương ứng nằm ở mục nào trong paper.

| Tình huống | Câu hỏi reviewer sẽ hỏi | Bằng chứng tối thiểu để trả lời |
|---|---|---|
| 30. Bài toán mới, chưa có baseline | "Con số này tốt hay xấu so với cái gì? Phương pháp cũ sửa lại có làm được không?" | Định nghĩa hình thức kèm metric và giao thức; một baseline tầm thường, một baseline chuyển thể hoặc pipeline ghép, một cận trên (oracle hoặc con người) |
| 31. Motivation yếu | "Ai cần điều này? Giải được thì điều gì thay đổi?" | Ít nhất một bằng chứng đo được về ứng dụng, quy mô hoặc kiểu thất bại của hệ thống hiện tại, kèm cách đo |
| 32. Tốt hơn nhưng tốn kém hơn | "Với cùng ngân sách, baseline có bắt kịp không? Khi nào chi phí đáng bỏ ra?" | Bảng chi phí (huấn luyện, suy luận, bộ nhớ, FLOPs hoặc chi phí API) trên phần cứng nêu rõ; so sánh cùng ngân sách hoặc biểu đồ Pareto; phát biểu về bối cảnh đáng dùng |
| 33. Dữ liệu riêng | "Ai kiểm chứng được? Có đúng ở nơi khác không? Có được chấp thuận không?" | Kết quả trên ít nhất một dataset công khai, hoặc lý do không có; mô tả dữ liệu theo khuôn datasheet; code; thông tin chấp thuận đạo đức |
| 34A. Lý thuyết, thí nghiệm nhỏ | "Thí nghiệm có kiểm chứng đúng điều định lý dự đoán không?" | Giả định nêu tường minh; thí nghiệm đo đúng đại lượng trong định lý; ít nhất một thí nghiệm khi giả định bị vi phạm |
| 34B. Thực nghiệm mạnh, không lý thuyết | "Vì sao nó hoạt động, và khi nào nó hỏng?" | Thí nghiệm cô lập cơ chế; ablation loại trừ giải thích thay thế; phân tích độ nhạy; chế độ thất bại; giả thuyết được gọi đúng là giả thuyết |
| 35. Benchmark không chuyển sang thực tế | "Ra khỏi benchmark thì kết quả còn đúng không?" | Kết quả trong và ngoài phân phối cho cả phương pháp và baseline; chẩn đoán dịch chuyển hay benchmark lệch; Limitations nêu phạm vi claim |

Đọc theo cột thứ ba, có thể thấy phần lớn bằng chứng tối thiểu không đòi thêm nhiều tài nguyên tính toán. Một baseline tầm thường, một bảng chi phí, một đoạn mô tả dữ liệu hay một tập test ngoài phân phối thường rẻ hơn nhiều so với một lần chạy thêm phương pháp chính. Thứ chúng đòi hỏi là việc đặt câu hỏi của reviewer ra *trước khi* reviewer đặt nó, lý tưởng nhất là ngay khi lập bảng claim và thí nghiệm theo bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md).

## Tóm tắt

Các tình huống trong bài đều là những lệch pha giữa phạm vi của claim và phạm vi của bằng chứng. Với bài toán mới, baseline là thang đo chứ không phải đối thủ, và thang đo ấy được dựng từ phương pháp gần nhất được chuyển thể, baseline tầm thường, pipeline ghép, cận trên oracle và đánh giá của con người, trên một định nghĩa bài toán hình thức không được thiết kế để thắng chắc. Khi reviewer không thấy bài toán quan trọng, cần phân biệt bài toán thật sự hẹp với bài toán trình bày chưa thuyết phục, rồi nối nó với một mục tiêu lớn hơn bằng bằng chứng, tổng quát hóa kèm bằng chứng mở rộng, đổi cộng đồng hoặc dừng lại. Phương pháp tốt hơn nhưng tốn kém hơn cần báo cáo chi phí trung thực, biểu đồ Pareto, biến thể nhẹ và một phát biểu rõ về bối cảnh đáng dùng. Với dữ liệu riêng, kết quả trên dataset công khai, mô tả dữ liệu, code và thống kê tổng hợp bù lại cho việc không công bố được dữ liệu; dữ liệu tổng hợp chỉ là phương án phụ, và chấp thuận đạo đức phải có từ trước. Ở các ML venue, thí nghiệm nhỏ được chấp nhận khi kiểm chứng đúng dự đoán của lý thuyết, thực nghiệm mạnh không cần định lý nhưng cần phân tích, và định lý trang trí làm yếu paper. Cuối cùng, khi kết quả benchmark không chuyển sang thực tế, cần phân biệt distribution shift với benchmark không đại diện, báo cáo cả kết quả trong lẫn ngoài phân phối, và biến khoảng cách thành câu hỏi nghiên cứu hoặc ít nhất ghi nó vào Limitations.

## Bài tập

1. Viết phần định nghĩa bài toán cho dự án hiện tại theo bốn thành phần: đầu vào và đầu ra, thông tin được dùng khi huấn luyện và khi suy luận, metric kèm lý do chọn, và giao thức đánh giá. Với mỗi loại trong năm loại điểm tham chiếu, ghi cách hiện thực trong dự án hoặc lý do nó không áp dụng được. Đưa riêng phần định nghĩa cho một đồng nghiệp không biết phương pháp và hỏi họ sẽ chọn metric nào.
2. Áp dụng chuỗi "vì sao" ba lần cho bài toán của dự án, rồi viết lại đoạn mở đầu introduction sao cho nó chứa ít nhất một bằng chứng đo được về ứng dụng, quy mô hoặc kiểu thất bại của hệ thống hiện tại, kèm nguồn và cách đo. Nếu không tìm được bằng chứng nào, viết một đoạn ngắn đánh giá nên tổng quát hóa bài toán, đổi cộng đồng hay đổi hướng.
3. Lập bảng chi phí cho phương pháp của dự án và baseline mạnh nhất trên cùng một phần cứng, vẽ biểu đồ chất lượng theo chi phí cho ít nhất ba cấu hình của mỗi phương pháp, xác định đường biên Pareto, rồi viết một câu claim nói rõ phương pháp nằm trên đường biên ở vùng chi phí nào và khi nào chi phí của nó đáng bỏ ra.
4. Viết ra phạm vi bằng chứng của claim chính: dữ liệu nào, phân phối nào, giả định nào. Tìm ít nhất một tập dữ liệu ngoài phân phối hợp lý và lập kế hoạch đánh giá cả phương pháp lẫn baseline trên đó. Nếu dự án dùng dữ liệu không công bố được, nháp đoạn tuyên bố về khả năng truy cập dữ liệu và câu trả lời cho các mục tương ứng trong checklist của hội nghị dự định nộp; nếu dự án có định lý, liệt kê các dự đoán kiểm chứng được của nó cùng thí nghiệm cho từng dự đoán.
