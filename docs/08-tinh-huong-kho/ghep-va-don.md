# Ghép ý tưởng và "độn" đóng góp

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Gỡ rối một phương pháp gồm nhiều thành phần bằng hệ thống ablation đầy đủ (leave-one-out, add-one-in, tương tác giữa các thành phần, nhiều seed), rồi quyết định giữ, cắt hay tổ chức lại từng thành phần.
    - Chọn hình thức phù hợp cho một paper "ghép": phương pháp có nguyên lý thống nhất, nghiên cứu thực nghiệm, hay recipe có khảo sát hệ thống.
    - Giải thích vì sao mỗi dòng contribution bị đánh giá theo chuẩn của chính loại đóng góp đó, và biến phần phụ thành supporting artifacts thay vì "độn" vào danh sách.
    - Phân biệt một paper chứa hai paper, một dự án được tách hợp lệ và salami slicing.
    - Viết các claim "đầu tiên", "state-of-the-art", "significantly" có phạm vi rõ ràng, đứng vững trước phản ví dụ.

Bài [Khi novelty và hiệu quả lệch pha](novelty-va-hieu-qua.md) xử lý những tình huống trong đó một ý tưởng bị đánh giá sai vì quá đơn giản, hoặc một ý tưởng mới chưa cho ra con số đẹp. Bài này xử lý căng thẳng gần như ngược lại: paper có *quá nhiều* thứ. Nhiều thành phần trong phương pháp, nhiều dòng contribution, nhiều câu chuyện trong cùng tám trang, nhiều paper từ cùng một dự án, nhiều tính từ mạnh trong một đoạn văn. Người viết thường nghĩ "nhiều" làm paper nặng ký hơn. Reviewer đọc theo chiều ngược lại: mỗi thứ được thêm vào là một điều cần chứng minh, và mỗi điều chưa được chứng minh là một điểm yếu có thể viết thẳng vào review.

Nguyên tắc xuyên suốt bài là: **mỗi đóng góp được liệt kê là một claim phải bảo vệ**. Thêm đóng góp yếu không làm paper mạnh lên; nó mở thêm mặt trận cho reviewer và làm loãng thông điệp chính. Năm tình huống dưới đây đi từ cấp phương pháp (Tình huống 6), qua cấp danh sách đóng góp (Tình huống 7), cấp một paper (Tình huống 8), cấp cả dự án (Tình huống 9), tới cấp từ ngữ (Tình huống 10). Cuối bài là một bảng đối chiếu từng loại đóng góp với chuẩn mà reviewer dùng để chấm nó. Bài giả định người học đã đọc mục *Bẫy "A + B" và cách thoát* trong bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md), mục *Thiết kế ablation* trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) và mục *Đoạn 6: Contributions* trong bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md), và đi tiếp từ chỗ những bài đó dừng.

## Tình huống 6: Ghép nhiều ý tưởng, đạt SOTA, nhưng không rõ cái gì tạo ra kết quả

### Nhận diện

Một nhóm tác giả làm phân đoạn ngữ nghĩa trong tám tháng (ví dụ giả định). Từ một backbone chuẩn, nhóm lần lượt thêm một khối attention đa tỉ lệ, một hàm loss chú trọng đường biên, một chiến lược augmentation mới, rồi chuyển sang lịch huấn luyện dài hơn kèm EMA và AdamW. Mỗi thay đổi được giữ vì nó làm tăng mIoU trên tập validation lúc được thử. Kết quả cuối vượt phương pháp mạnh nhất đã công bố khoảng 1,5 điểm trên ADE20K, nhưng không ai trả lời được cái gì tạo ra 1,5 điểm đó. Bảng ablation duy nhất là bảng cộng dồn theo thứ tự lịch sử của dự án, và baseline vẫn dùng lịch huấn luyện cũ.

Dấu hiệu rõ nhất là không trả lời được câu "nếu chỉ được giữ một thành phần, giữ cái nào?". Các dấu hiệu khác: abstract mô tả phương pháp bằng danh sách module, mỗi module một tên viết tắt; phương pháp và baseline dùng hai recipe khác nhau; điều duy nhất nối các thành phần là "chúng đều làm con số tăng". Ở NLP, đó có thể là một pipeline hỏi đáp chồng thêm truy xuất, rerank, tự kiểm tra và ensemble prompt; ở Machine Learning, một phương pháp self-supervised cộng dồn ba regularizer.

### Chẩn đoán

Gốc rễ nằm ở bản chất tích lũy của nghiên cứu: paper thừa hưởng *lịch sử* của dự án thay vì *logic* của nó. Module giúp một điểm ở tháng thứ hai có thể không còn giúp gì sau khi recipe mới được áp dụng ở tháng thứ sáu. Khi hàng chục lựa chọn đã được thử trên cùng tập validation, một phần cải thiện có thể chỉ là nhiễu được chọn lọc, đúng hiện tượng "khu vườn rẽ nhánh" (*garden of forking paths*) mà Gelman và Loken mô tả.

Lipton và Steinhardt, trong *Troubling Trends in Machine Learning Scholarship*, xếp việc không xác định được nguồn gốc cải thiện thực nghiệm vào bốn xu hướng đáng lo ngại của ngành. Khi nhiều thay đổi được đề xuất mà thiếu ablation thích đáng, đôi khi chỉ một thay đổi thực sự tạo ra kết quả; paper tạo ấn tượng tác giả đã làm rất nhiều, trong khi thực ra họ làm *chưa đủ*, và người đọc bị dẫn tới chỗ tin rằng mọi thay đổi đều cần thiết. Ví dụ hai tác giả dẫn là nghiên cứu của Melis và cộng sự (đã nhắc ở bài Thiết kế thí nghiệm): nhiều cải thiện được gán cho kiến trúc mới hóa ra chủ yếu đến từ tune hyperparameter.

Trước khi chọn lối ra, cần trả lời theo thứ tự: cải thiện có vượt rõ độ dao động giữa các seed không; nếu baseline được huấn luyện lại với đúng recipe mới thì khoảng cách còn bao nhiêu; thành phần nào cần thiết; các thành phần bổ sung, thay thế hay cản trở nhau; và có nguyên lý nào nối chúng không. Câu thứ hai thường thay đổi toàn bộ câu chuyện. ConvNeXt (CVPR 2022) cho thấy chỉ riêng việc huấn luyện ResNet-50 bằng recipe kiểu vision Transformer đã nâng độ chính xác ImageNet từ 76,1% lên 78,8%, và các tác giả kết luận một phần đáng kể khoảng cách giữa ConvNet và Transformer có thể đến từ kỹ thuật huấn luyện. Trường hợp toàn bộ cải thiện đến từ recipe hoặc tài nguyên lớn hơn được bàn ở Tình huống 17 trong bài [Khi con số không đẹp](con-so-khong-dep.md).

### Các lối ra

**Lối ra thứ nhất: gỡ rối bằng một hệ thống ablation đầy đủ.** Lối ra này bắt buộc vì mọi lối ra khác cần kết quả của nó. Với phương pháp ghép, phải kết hợp hai kiểu ablation. Leave-one-out (bỏ từng thành phần khỏi phương pháp đầy đủ) cho biết thành phần có *cần thiết* khi các thành phần khác đã có mặt không; add-one-in (thêm từng thành phần riêng lẻ vào baseline) cho biết nó có *đủ* để tạo ra cải thiện khi đứng riêng không. Khi hai kết quả lệch nhau, đó là dấu hiệu của tương tác. Bảng sau (số liệu minh họa, chênh lệch mIoU trung bình ba seed, baseline dùng recipe mới trừ dòng cuối) cho thấy cách đọc.

| Thành phần | Add-one-in | Leave-one-out | Cách đọc |
|---|---|---|---|
| A: attention đa tỉ lệ | +1,2 | −0,2 | Mạnh khi đứng riêng, gần như thừa khi đã có B |
| B: loss đường biên | +1,0 | −0,3 | Tương tự A: A và B có thể cùng sửa một lỗi |
| C: augmentation mới | +0,1 | −0,9 | Vô dụng khi đứng riêng, cần thiết trong tổ hợp |
| Recipe mới (so với recipe cũ) | +1,1 | −1,0 | Một phần lớn cải thiện đến từ recipe |

Bảng cộng dồn không thể cho thấy ba điều này: A và B gần như thay thế nhau, gợi ý cả hai cùng sửa lỗi ở vùng biên (cần một phép đo riêng trên vùng biên để kiểm tra); C chỉ phát huy khi có A hoặc B; và recipe chiếm phần lớn khoảng cách, nên mọi so sánh phải dùng recipe như nhau. Khi nghi có tương tác, cách chắc chắn nhất là thiết kế giai thừa (*factorial design*): chạy mọi tổ hợp bật/tắt của $k$ thành phần, tức $2^k$ cấu hình, thường khả thi trên thiết lập nhỏ với $k \le 4$. Mọi hiệu ứng cần được so với độ lệch chuẩn giữa các seed: thành phần có hiệu ứng leave-one-out nhỏ hơn mức đó chưa được chứng minh là cần thiết.

```python
import numpy as np

# results[(a, b, c)] = danh sách điểm qua các seed; 1 = thành phần được bật
def effect(results, i, fixed=None):
    """Hiệu ứng của thành phần i, có thể cố định thành phần khác, ví dụ fixed={1: 1}."""
    ok = lambda c: all(c[j] == v for j, v in (fixed or {}).items())
    on = [np.mean(v) for c, v in results.items() if c[i] == 1 and ok(c)]
    off = [np.mean(v) for c, v in results.items() if c[i] == 0 and ok(c)]
    return np.mean(on) - np.mean(off)

def interaction(results, i, j):
    """Gần 0: cộng dồn. Âm: thay thế nhau. Dương: bổ trợ nhau."""
    return effect(results, i, {j: 1}) - effect(results, i, {j: 0})
```

Rainbow (AAAI 2018) là mẫu mực cho lối ra này. Paper kết hợp sáu cải tiến đã công bố của DQN, đạt kết quả tốt nhất thời điểm đó trên 57 game Atari, rồi bỏ lần lượt từng thành phần. Kết quả được báo cáo thẳng thắn: prioritized replay và multi-step learning quan trọng nhất, còn dueling network và double Q-learning cho khác biệt nhỏ trên chỉ số tổng hợp. Với double Q-learning, các tác giả không lặng lẽ bỏ qua mà đưa ra một giả thuyết về tương tác: việc distributional RL biểu diễn giá trị trên một miền giới hạn dường như đã bù trừ phần nào thiên lệch ước lượng quá cao mà double Q-learning nhắm tới. Paper cũng nói rõ ablation đo đóng góp của mỗi thành phần *trong bối cảnh của tổ hợp cụ thể này*, một phát biểu chính xác về phạm vi của bằng chứng.

**Lối ra thứ hai: cắt bỏ thành phần thừa.** Khi bỏ một thành phần chỉ làm kết quả thay đổi trong phạm vi nhiễu, hãy bỏ nó khỏi *phương pháp*, không chỉ khỏi phần mô tả. Thành phần thừa thêm hyperparameter, code và câu hỏi cho reviewer mà không đem lại gì, trong khi cả ba cộng đồng đều trân trọng phương pháp mạnh mà không thêm thắt, đúng tinh thần "without bells and whistles" của [Mask R-CNN](../05-case-studies/mask-rcnn.md). Nếu thành phần chỉ giúp trên một dataset, hãy mô tả nó là tùy chọn kèm điều kiện; những gì đã thử mà không giúp nên được ghi ngắn trong appendix. Chiều ngược lại thì không được: cắt một thành phần vì nó khó giải thích, trong khi chính nó mang phần lớn cải thiện, là gán kết quả cho một nguyên nhân sai.

**Lối ra thứ ba: tìm một nguyên lý thống nhất.** Một tập thành phần trở thành một phương pháp khi mỗi thành phần trả lời một vấn đề đã được *chẩn đoán*. Với từng thành phần, viết ra kiểu lỗi nó sửa, rồi đo xem lỗi đó có thật ở baseline và có giảm khi thêm thành phần không, bằng một phép đo nhắm vào cơ chế. Hai thành phần cùng sửa một lỗi nên được gộp hoặc giữ một; thành phần không sửa lỗi nào đã chẩn đoán là mẹo huấn luyện, thuộc về phần chi tiết cài đặt. [Adam](../05-case-studies/adam.md) là ví dụ kinh điển của cách đóng khung này: kết hợp ưu điểm của AdaGrad với gradient thưa và của RMSProp với mục tiêu không dừng, cộng thêm bias correction mà cả hai đều không có, và mỗi tính chất có một thí nghiệm tương ứng. Lối ra này chỉ hợp lệ khi các phép đo chẩn đoán tồn tại; một nguyên lý nghĩ ra sau cùng để khoác lên danh sách thành phần là một dạng HARKing (đặt giả thuyết sau khi biết kết quả), xem bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

**Lối ra thứ tư: viết thành nghiên cứu thực nghiệm hoặc "recipe" có khảo sát hệ thống.** Khi các thành phần đều đã được công bố và giá trị thật nằm ở hiểu biết về *cách chúng kết hợp*, lối ra trung thực và thường mạnh nhất là đổi kiểu đóng góp. Rainbow đặt câu hỏi những cải tiến nào bổ sung cho nhau rồi trả lời nó. *Bag of Tricks for Image Classification with Convolutional Neural Networks* (CVPR 2019) khảo sát những tinh chỉnh huấn luyện vốn thường chỉ được nhắc qua như chi tiết cài đặt, đo từng cái bằng ablation, kiểm tra trên ba kiến trúc, một dataset khác và hai tác vụ chuyển giao, và báo cáo cả chỗ không chuyển giao: trên semantic segmentation, chỉ lịch learning rate cosine còn giữ được lợi ích. ConvNeXt dùng một biểu đồ lộ trình: "hiện đại hóa" ResNet theo từng bước thiết kế của Swin Transformer, giữ cố định recipe, kiểm soát gần đúng FLOPs, báo cáo trung bình ba seed và đánh dấu riêng những thay đổi đã thử nhưng không giữ. Lối ra này đòi hỏi giao thức cố định cho mọi bước, kiểm tra trên nhiều kiến trúc hoặc dataset, và báo cáo cả những gì không hiệu quả; cả ba paper kể trên đều được nhận ở main track.

**Lối ra thứ năm: đổi hình thức, venue, hoặc đổi hướng.** Nếu cải thiện chủ yếu đến từ recipe, câu chuyện trung thực có thể chính là "recipe quan trọng hơn kiến trúc", theo tinh thần của *Revisiting ResNets: Improved Training and Scaling Strategies* (NeurIPS 2021). Nếu chỉ một thành phần thực sự có tác dụng, một short paper ở các hội nghị thuộc hệ ACL hoặc một paper tập trung vào thành phần đó phù hợp hơn tám trang về cả hệ thống. Công trình vững nhưng không nổi bật có thể tìm tới ACL Findings (với NLP) hoặc TMLR, nơi tiêu chí chính là claim có được bằng chứng ủng hộ chính xác và thuyết phục không. Nếu loại hết yếu tố gây nhiễu mà không còn gì ngoài recipe đã biết, hãy dừng câu chuyện "phương pháp mới", công bố code và cấu hình như tài nguyên tái lập, và chuyển sang câu hỏi tiếp theo.

### Viết thế nào

Trình tự trình bày phải là *vấn đề, chẩn đoán, thành phần, bằng chứng cho từng thành phần*, không phải *tên phương pháp, danh sách module, bảng kết quả*. Phương pháp nên có một tên hoặc không có tên, thay vì mỗi module một tên viết tắt, vì tên viết tắt khiến reviewer đếm module, bước đầu của nhận xét "a combination of existing techniques". Bảng ablation nên có cả cột add-one-in lẫn leave-one-out, kèm caption giải thích cách đọc.

<div class="bad" markdown>
*"We propose a novel framework, [Name], consisting of a multi-scale attention module (MSA), a boundary-aware loss (BAL), a structure-preserving augmentation (SPA) and an improved training strategy. Extensive experiments show that [Name] achieves state-of-the-art performance on ADE20K."*

Câu này liệt kê bốn thứ mà không nói thứ nào giải quyết vấn đề gì, gộp recipe vào như một "module", và để ngỏ câu hỏi đầu tiên của reviewer: so với baseline dùng cùng recipe thì sao?
</div>

<div class="good" markdown>
*"We identify two bottlenecks that limit current segmentation models on cluttered scenes: context is aggregated only after thin structures have been erased by downsampling, and the training loss treats boundary pixels like interior pixels. Each component of our method addresses one bottleneck. Under an identical training recipe for all methods, removing either component erases most of its corresponding gain in boundary F-score (Table 4)."*

Câu này nêu hai nút thắt, nối mỗi thành phần với một nút thắt, chỉ ra phép đo cơ chế, và khẳng định trước rằng mọi phương pháp dùng cùng recipe.
</div>

Khi một thành phần đóng góp ít, cách viết theo kiểu Rainbow vừa chính xác vừa có lợi: *"In our combination, component D contributes little on aggregate (Table 5); we hypothesize that its effect is largely subsumed by B, since both target boundary errors."* Reviewer đọc câu này như dấu hiệu nhóm tác giả hiểu hệ thống của họ.

Ba cộng đồng phản ứng khác nhau. Reviewer **Computer Vision** tương đối cởi mở với hệ thống ghép nếu kết quả mạnh và ablation đầy đủ, nhưng nhận xét *"incremental"* hay *"a bag of tricks"* xuất hiện ngay khi ablation thiếu hoặc so sánh không cùng backbone và pre-training. Reviewer **NLP** hỏi cải thiện có giữ được trên nhiều dataset, nhiều ngôn ngữ, có ý nghĩa thống kê không, và một lựa chọn đơn giản hơn, như chỉ dùng thành phần mạnh nhất hoặc prompt một LLM mạnh, có đạt kết quả tương tự không; paper ghép thiếu phân tích dễ được khuyên chuyển sang Findings. Reviewer **Machine Learning** hỏi về nguyên lý và tính tổng quát qua nhiều miền; hệ thống lắp ghép không có nguyên lý là nguyên nhân phổ biến của nhận xét *"more suitable for CVPR/ACL"* (xem bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md)), và một thí nghiệm có kiểm soát cô lập cơ chế từng thành phần thường thuyết phục họ hơn thêm một benchmark.

### Điều không được làm

**Không nhận mọi thành phần là mới.** Thành phần đã có trong công trình trước phải được trích dẫn và mô tả là được *sử dụng*, kèm chỉ rõ phần mới nằm ở đâu; một claim novelty sai bị phát hiện nhanh và làm giảm lòng tin vào mọi claim khác. **Không áp dụng mẹo huấn luyện chỉ cho phương pháp đề xuất mà không cho baseline.** Riêng recipe đã có thể đáng vài điểm; nếu một mẹo không áp dụng được cho baseline, hãy báo cáo phương pháp cả khi có và khi không có mẹo đó. Cũng không sắp xếp lại thứ tự bảng cộng dồn chỉ để thành phần muốn nhấn mạnh trông có tác động lớn nhất (xem [Ranh giới trung thực](ranh-gioi-trung-thuc.md)).

## Tình huống 7: Thêm dataset, pipeline, recipe hay benchmark vào danh sách đóng góp cho "đủ"

### Nhận diện

Một nhóm làm hỏi đáp pháp luật tiếng Việt bằng phương pháp retrieval-augmented (ví dụ giả định). Phương pháp chính cải thiện khoảng 1,5 điểm F1 trên một dataset, mức nhóm thấy "thiếu thiếu". Trong quá trình làm, nhóm đã thu thập khoảng năm mươi nghìn văn bản pháp luật từ web, viết một pipeline làm sạch và tách điều khoản, nhờ hai sinh viên gán nhãn khoảng hai nghìn cặp câu hỏi và câu trả lời, và thấy một lịch warmup giúp huấn luyện ổn định hơn. Bản nháp danh sách contribution vì thế có năm dòng: phương pháp; "the first large-scale Vietnamese legal QA dataset"; "a novel data processing pipeline"; "an effective training recipe"; và "extensive experiments".

Dấu hiệu nhận diện: quyết định đưa các phần phụ vào danh sách được đưa ra *sau khi* thấy phương pháp chính chưa đủ mạnh; không mục nào đánh giá chính dataset; pipeline chỉ được mô tả trong một đoạn; recipe chỉ được thử trên mô hình của nhóm; dữ liệu được ghi là "will be released"; và danh sách contribution dài hơn phần thí nghiệm ủng hộ nó. Ở Computer Vision, tình huống tương tự là một bộ ảnh tự chụp được nâng thành "benchmark mới"; ở Machine Learning, một bộ môi trường thử nghiệm được nâng thành "a new evaluation suite".

### Chẩn đoán

Điều cốt lõi người viết thường bỏ qua là: **mỗi đóng góp được liệt kê sẽ bị đánh giá theo chuẩn của chính loại đóng góp đó**, không theo chuẩn nhẹ nhàng dành cho phần phụ. Đọc dòng "we construct a large-scale dataset", reviewer chuyển sang chế độ đánh giá dataset với toàn bộ câu hỏi của nó: quy mô so với dataset hiện có, kiểm soát chất lượng, độ đồng thuận giữa người gán nhãn (*inter-annotator agreement*), giấy phép của văn bản nguồn, tài liệu mô tả theo tinh thần *Datasheets for Datasets*, dữ liệu có truy cập được khi review không và ai bảo trì, người gán nhãn được tuyển và trả công thế nào. Hai nghìn cặp do hai sinh viên gán nhãn, chưa đo đồng thuận và chưa rõ giấy phép, không trả lời được câu nào.

**Benchmark** chịu chuẩn còn khắt khe hơn, vì nó là một công cụ đo. Trước hết là *validity*: benchmark có đo đúng năng lực nó tuyên bố, hay giải được bằng lối tắt? Gururangan và cộng sự (NAACL 2018) cho thấy trên các dataset suy luận ngôn ngữ tự nhiên, một bộ phân loại chỉ nhìn câu giả thuyết đã đạt độ chính xác cao bất thường do dấu vết gán nhãn; McCoy và cộng sự (ACL 2019) cho thấy mô hình có thể đạt điểm cao nhờ heuristic cú pháp nông. Tiếp theo là *độ khó* (còn khoảng trống để phân biệt mô hình không), *contamination* (dữ liệu test lấy từ web có thể đã nằm trong dữ liệu pre-training của mô hình ngôn ngữ lớn) và *giá trị lâu dài* (tập test giữ kín, kế hoạch duy trì). **Pipeline dữ liệu** được chấm bằng việc dữ liệu đầu ra có tốt hơn các cách làm khác không, qua so sánh trực tiếp và ablation từng bước. **Training recipe** được chấm như một khảo sát có hệ thống, theo đúng chuẩn của Bag of Tricks ở Tình huống 6.

Hệ quả thứ hai ít được nhận ra hơn: **độn đóng góp mở thêm mặt trận cho reviewer và làm loãng thông điệp**. Một dòng contribution yếu cung cấp sẵn một điểm yếu dễ viết, có căn cứ rõ, và dễ được Area Chair nhắc lại trong meta-review: *"The dataset contribution is not substantiated: no agreement statistics, no license information, and the data is not available for review."* Điểm yếu này kéo xuống cả đánh giá về phương pháp chính, trong khi cùng bộ dữ liệu ấy, nếu được trình bày khiêm tốn như tài nguyên phát hành kèm, thường được ghi ở phần điểm mạnh. Về thông điệp, abstract có năm đóng góp không cho người đọc biết cần nhớ điều gì, và giới hạn trang bị chia nhỏ tới mức không đóng góp nào đủ sâu.

Trước khi chọn lối ra, cần tự hỏi: phần bổ sung có mới với *cộng đồng*, hay chỉ mới với nhóm? Nếu làm tới nơi, nó có đứng được như một paper riêng không, và nhóm có đủ tài nguyên để làm trước deadline không? Cảm giác "thiếu thiếu" đến từ việc thiếu *số lượng* đóng góp, hay từ việc đóng góp chính chưa được khai thác đủ *sâu*?

### Các lối ra

**Lối ra thứ nhất: chọn một đóng góp chính, phần còn lại là supporting artifacts.** Đây là lối ra phù hợp cho đa số trường hợp. Danh sách contribution chỉ giữ những gì được chứng minh đầy đủ; dataset, code, pipeline và cấu hình huấn luyện được nêu trong một câu ngay sau danh sách theo khuôn "we release …" và được mô tả đủ để tái lập trong phần Experimental Setup hoặc appendix. Bằng chứng cần thiết chỉ là một mô tả rõ và khả năng truy cập thật; reviewer vẫn ghi nhận tài nguyên, trong khi không có claim nào để tấn công.

**Lối ra thứ hai: nếu dataset thật sự có giá trị, làm cho tới nơi.** Khi thứ giá trị nhất của dự án là dữ liệu, chẳng hạn vì chưa có tài nguyên nào cho bài toán đó ở ngôn ngữ đó, có hai cách hợp lệ. Cách thứ nhất là đảo trọng tâm: dataset thành đóng góp chính, phương pháp thành một baseline mạnh, và paper được viết theo chuẩn paper tài nguyên. Cách thứ hai là tách dataset thành paper riêng ở nơi đánh giá đúng loại đóng góp này: NeurIPS Datasets and Benchmarks Track (có từ năm 2021), các track về tài nguyên và đánh giá thường có ở hội nghị thuộc hệ ACL, hoặc main track của CVPR, nơi dataset paper khá phổ biến. Cả hai cách đều đòi đầu tư thêm vài tuần tới vài tháng; nếu không có nguồn lực đó, lối ra thứ nhất là lựa chọn trung thực. Trường hợp dữ liệu không thể công bố được bàn ở Tình huống 33 trong bài [Bài toán, dữ liệu và phạm vi](bai-toan-va-pham-vi.md).

**Lối ra thứ ba: recipe chỉ là đóng góp khi được nghiên cứu có hệ thống.** Một lịch warmup giúp mô hình của nhóm ổn định hơn là chi tiết cài đặt hữu ích, thuộc về bảng hyperparameter trong appendix. Nó chỉ trở thành đóng góp khi trả lời được các câu mà Bag of Tricks đã trả lời: từng phần tử đóng góp bao nhiêu, có đúng trên kiến trúc và dataset khác không, ở đâu thì hết tác dụng. Nếu recipe chiếm phần lớn cải thiện mà không được áp dụng cho baseline, nó là yếu tố gây nhiễu chứ không phải đóng góp.

**Lối ra thứ tư: đào sâu đóng góp chính thay vì độn thêm.** Rất thường, cảm giác "thiếu thiếu" đến từ việc thiếu *hiểu biết*, không phải thiếu *hạng mục*. Số trang dành cho ba đóng góp phụ có thể dùng cho phân tích vì sao phương pháp hoạt động, phép đo cơ chế, phân tích lỗi theo loại (được reviewer NLP đánh giá cao), hoặc một thí nghiệm có kiểm soát cô lập insight (được reviewer ML đánh giá cao). Trong ví dụ trên, câu hỏi "lỗi đến từ khâu truy xuất hay khâu đọc" có thể biến 1,5 điểm thành một phát hiện về bản chất bài toán; các bài [Khi con số không đẹp](con-so-khong-dep.md) và [Khi câu chuyện và bằng chứng không khớp](cau-chuyen-va-bang-chung.md) bàn tiếp cách làm việc với một kết quả còn mỏng. Nếu đào sâu vẫn không tìm ra hiểu biết nào, lối ra trung thực là lùi sang chu kỳ sau thay vì nộp một paper được độn.

**Lối ra thứ năm: áp phép thử "xóa dòng".** Với mỗi dòng trong danh sách, hãy hỏi: *nếu xóa dòng này, reviewer có thấy thiếu không?* Nếu có, vì dòng đó chứa một điều mới mà phần còn lại không nói, thì giữ và kiểm tra lại bằng chứng. Nếu reviewer sẽ không nhận ra sự vắng mặt của nó, thì chuyển nó thành supporting artifact. Nếu reviewer sẽ *nhẹ nhõm* khi nó biến mất, vì đó là claim họ đã định phản bác, thì xóa ngay.

!!! tip "Làm phép thử xóa dòng với người ngoài nhóm"
    Phép thử hiệu quả nhất khi được làm bởi một đồng nghiệp không tham gia dự án: đưa người đó abstract và danh sách contribution, xóa lần lượt từng dòng, và hỏi bản nào thuyết phục hơn. Người trong nhóm thường gắn bó với từng phần việc đã làm nên khó thấy dòng nào đang làm yếu cả danh sách.

### Viết thế nào

Danh sách contribution là thứ reviewer đọc lại khi viết phần tóm tắt và điểm mạnh của review, và đối chiếu với thí nghiệm. Danh sách tốt có ít dòng, mỗi dòng là một claim kiểm chứng được kèm nơi chứa bằng chứng, còn tài nguyên phát hành kèm được tách riêng.

<div class="bad" markdown>
*In summary, our contributions are as follows:*

- *We propose [Name], a novel retrieval-augmented framework for Vietnamese legal question answering.*
- *We construct the first large-scale Vietnamese legal QA dataset.*
- *We design a novel data processing pipeline for legal documents.*
- *We introduce an effective training recipe for retrieval-augmented models.*
- *Extensive experiments demonstrate that [Name] significantly outperforms state-of-the-art methods.*

Năm dòng mở năm mặt trận: dòng hai bị chấm theo chuẩn dataset, dòng ba và dòng hai là một đóng góp đếm hai lần, dòng bốn chưa được thử trên mô hình nào khác, và dòng năm chứa ba từ cần bằng chứng riêng (xem Tình huống 10).
</div>

<div class="good" markdown>
*In summary, our contributions are as follows:*

- *We show that retrieval, not reading, accounts for most failures of current QA systems on Vietnamese statutes, because questions refer to provisions through cross-references that both lexical and dense retrievers miss (Sec. 3).*
- *Based on this analysis, we propose [Name], which resolves cross-references before retrieval. It reduces retrieval failures by [x]% and improves answer F1 by [y] points on two benchmarks, with consistent gains across three retrievers (Sec. 4–5).*

*To support future work, we release our document corpus with its source licenses, the cleaning scripts, and the 2K question–answer pairs used for evaluation (Appendix B).*

Hai dòng, một câu chuyện: một phát hiện về bản chất bài toán và một phương pháp xuất phát từ nó; dữ liệu và code thành tài nguyên được ghi nhận mà không phải claim cần bảo vệ.
</div>

Với recipe, khác biệt giữa dòng độn và đóng góp thật nằm ở chỗ dòng đó hứa một *thứ* hay một *hiểu biết*. Dòng *"We introduce an effective training recipe"* để reviewer tự hỏi hiệu quả so với gì, trên mô hình nào; dòng *"We systematically evaluate eight training refinements on three architectures and two downstream tasks, and identify which of them transfer to dense prediction and which hurt it"* hứa một khảo sát có phạm vi, kể cả kết quả không thuận lợi.

Reviewer **NLP** đánh giá cao tài nguyên, nhất là cho ngôn ngữ ít tài nguyên, nhưng soi kỹ giấy phép, mục đích sử dụng và thông tin người gán nhãn theo Responsible NLP checklist (xem bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md)). Reviewer **Computer Vision** quen với dataset paper ở main track và chấm chúng qua quy mô, chất lượng chú thích và kết quả của baseline mạnh; vài trăm ảnh tự chụp thường bị coi là tập đánh giá nội bộ. Ở **Machine Learning**, sự tồn tại của Datasets and Benchmarks Track khiến reviewer main track đôi khi cho rằng đóng góp chủ yếu về dữ liệu nên nộp ở track đó, nên paper main track phải làm rõ đóng góp chính về phương pháp hay hiểu biết.

### Điều không được làm

**Không nhận dataset là đóng góp mà không phát hành nó.** Dataset không truy cập được thì không thể được đánh giá hay sử dụng. Lời hứa "will be released upon acceptance" ngày càng bị xem nhẹ, và nhiều nơi, đặc biệt các track dành cho dataset, những năm gần đây yêu cầu dữ liệu truy cập được ngay khi review; cần kiểm tra Call for Papers của năm nộp. Nếu dữ liệu không thể phát hành, hãy mô tả nó là dữ liệu đánh giá có hạn chế truy cập và bỏ khỏi danh sách. **Không đếm một đóng góp hai lần**: pipeline và dataset do chính pipeline đó tạo ra, phương pháp và "the first application of" chính phương pháp đó, hay một dòng SOTA cạnh một dòng "extensive experiments" nói cùng một điều. Một dòng tổng hợp bằng chứng như khuôn trong bài Introduction & Figure 1 là hợp lệ; vấn đề nảy sinh khi cùng một ý xuất hiện dưới hai cái tên, và reviewer đọc đó như nỗ lực làm paper trông dày hơn thực tế (xem [Ranh giới trung thực](ranh-gioi-trung-thuc.md)).

## Tình huống 8: Một paper chứa hai paper

### Nhận diện

Một nhóm Machine Learning làm về ước lượng độ bất định (ví dụ giả định). Nửa đầu dự án phân tích trên mô hình tuyến tính và cho thấy một phương pháp hiệu chỉnh xác suất phổ biến trở nên kém tin cậy khi phân phối nhãn dịch chuyển. Nửa sau phát triển một phương pháp ensemble nhẹ hơn, giải quyết một vấn đề khác là chi phí suy luận. Bản nháp chia đều chín trang cho hai phần, và review lần trước phản ánh đúng sự chia đôi: một reviewer muốn phân tích sâu hơn và hỏi vì sao có phương pháp ensemble, reviewer khác muốn thêm baseline và coi phần phân tích là lạc đề. Dấu hiệu: không viết được *câu chuyện một dòng* theo khuôn của bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md) mà không dùng "and also"; có hai ứng viên cho Figure 1; Related Work tách thành hai khối không liên quan; và xóa hẳn nửa này thì kết luận của nửa kia không đổi.

### Chẩn đoán

Dự án tiến hóa theo thời gian, cả hai nửa đều tốn công, và nhóm sợ mỗi nửa đứng riêng thì quá mỏng. Kết quả là hai claim lớn, mỗi claim chỉ có một nửa số trang và một nửa bằng chứng. Câu hỏi then chốt là **hai nửa có phụ thuộc vào nhau không**. Nếu nửa đầu là chẩn đoán dẫn tới thiết kế của nửa sau, đó là *một* paper hai phần: phân tích hiện tượng suy giảm độ chính xác khi mạng sâu hơn và phương pháp học phần dư trong [ResNet](../05-case-studies/resnet.md) là hai bước của cùng một lập luận. Segment Anything (ICCV 2023) đóng góp cùng lúc một tác vụ, một mô hình và một bộ dữ liệu rất lớn, nhưng ba phần cần nhau: tác vụ định nghĩa mô hình, mô hình vận hành data engine, data engine sinh dữ liệu huấn luyện mô hình. Nếu hai nửa độc lập, paper thực chất là hai paper mỗi cái một nửa bằng chứng. Để chọn lối ra, cần so sánh hai nửa về độ mạnh của bằng chứng, cộng đồng người đọc, khả năng chuyển giao và công sức cần để hoàn thiện.

### Các lối ra

**Lối ra thứ nhất: chọn một câu chuyện.** Phù hợp khi một nửa rõ ràng mạnh hơn hoặc chỉ đủ nguồn lực hoàn thiện một nửa trước deadline. Nửa còn lại có thể thành một mục ngắn phục vụ câu chuyện chính, chuyển xuống appendix, hoặc được để dành. Cái giá là một phần công sức tạm chưa được ghi nhận; cái lợi là một thông điệp rõ.

**Lối ra thứ hai: tách thành hai paper, mỗi paper có bằng chứng đầy đủ.** Phù hợp khi cả hai nửa có giá trị độc lập và nhóm sẵn sàng hoàn thiện cả hai: paper phân tích mở rộng ra nhiều phương pháp hiệu chỉnh, nhiều kiểu dịch chuyển và dataset; paper phương pháp có đủ baseline và ablation. Hai paper như vậy *không* phải cắt lát (Tình huống 9), vì mỗi paper có một claim độc lập, một bộ bằng chứng riêng và được trích dẫn vì lý do khác nhau. Nếu nộp gần nhau, cần tuân thủ các quy định về overlapping submission và tự trích dẫn khi ẩn danh ở Tình huống 9.

**Lối ra thứ ba: đưa phần còn lại vào appendix hoặc bản journal.** Appendix phù hợp khi nửa phụ có giá trị bổ sung và phần chính tự đứng được mà không cần nó. Một lựa chọn khác là để dành nửa phụ cho bản mở rộng ở journal, vì nội dung mới đáng kể chính là thứ journal đòi hỏi; chính sách cụ thể khác nhau giữa các journal (xem bài [AAAI / IJCAI / KDD / Journal](../06-cong-dong/khac.md)).

**Lối ra thứ tư: tái cấu trúc thành một mạch phụ thuộc, khi sự phụ thuộc là có thật.** Nếu phương pháp ensemble hóa ra cũng tránh được cơ chế lỗi mà phần phân tích chỉ ra, paper có thể viết lại theo mạch chẩn đoán, thiết kế dựa trên chẩn đoán, rồi thí nghiệm kiểm tra cả hiệu quả lẫn cơ chế. Một câu chuyển ý khéo léo thì không làm hai nửa độc lập phụ thuộc vào nhau.

### Viết thế nào

Abstract là nơi lộ rõ nhất, và cũng là nơi sửa hiệu quả nhất.

<div class="bad" markdown>
*"In this paper, we make two contributions. First, we show that temperature scaling becomes unreliable under label shift, and we analyze this phenomenon in a linear model. Second, we propose [Name], an efficient ensembling method that reduces inference cost by 4× while matching the accuracy of deep ensembles."*

"First" và "Second" báo cho reviewer biết họ sắp đọc hai paper ngắn, và không có gì giải thích vì sao hai phát hiện này nằm chung một chỗ.
</div>

<div class="good" markdown>
*"Post-hoc calibration methods such as temperature scaling are widely used to make predictions trustworthy, yet we show that they become unreliable under label shift. A linear-model analysis explains why: a single temperature cannot correct a miscalibration whose direction depends on the class prior. We validate this prediction across five calibration methods, three types of label shift and four datasets."*

Abstract chọn một câu chuyện và dồn toàn bộ bằng chứng cho nó; phương pháp ensemble được để dành cho một paper nơi nó được so sánh đầy đủ.
</div>

Nửa chuyển xuống appendix cần một câu định vị để reviewer không coi nó là claim cần chấm: *"Appendix E reports a complementary observation on inference cost, which is not required for our main claims."* Reviewer **Computer Vision** và **NLP** phản ứng mạnh với paper thiếu tập trung vì tám trang không đủ chỗ cho hai câu chuyện; nhận xét *"the paper tries to do too much"* khá thường gặp ở NLP. Reviewer **Machine Learning** quen với appendix dài hơn, nhưng phần chính vẫn phải tự đứng được, và nửa paper bị đẩy hết xuống appendix không được tính là đóng góp đã chứng minh.

### Điều không được làm

Không tách thành hai paper mà mỗi paper dựa vào bằng chứng chưa công bố của paper kia mà không khai báo. Không lặp lại cùng một bộ thí nghiệm trong cả hai paper để mỗi paper trông đầy đủ hơn. Và không giữ cả hai nửa trong một paper rồi mô tả mỗi nửa như một đóng góp lớn đã được chứng minh trọn vẹn.

## Tình huống 9: Cắt một dự án thành nhiều paper nhỏ

### Nhận diện

Một nhóm Computer Vision phát triển phương pháp tỉa token (*token pruning*) cho video transformer, hoạt động tốt trên nhận dạng hành động, truy xuất video và hỏi đáp trên video (ví dụ giả định). Nghiên cứu sinh trong nhóm cần đủ số paper để tốt nghiệp, nên kế hoạch là ba paper: nhận dạng hành động nộp CVPR, "tỉa token thích nghi" với chỉnh sửa nhỏ cho truy xuất nộp ECCV, hỏi đáp video nộp một hội nghị NLP. Ba paper có phần Method gần như giống hệt nhau, khác biệt chủ yếu ở dataset. Hiện tượng này thường được gọi là *salami slicing*, cắt một kết quả thành nhiều lát mỏng, hay tư duy *least publishable unit*, đơn vị nhỏ nhất có thể vượt qua vòng review. Dấu hiệu: kế hoạch được lập bằng cách đếm deadline chứ không đếm câu hỏi nghiên cứu, và khó trả lời "người đọc sẽ trích dẫn paper thứ hai vì điều gì mà không thể trích dẫn paper thứ nhất?".

### Chẩn đoán

Động cơ thường đến từ bên ngoài: yêu cầu tốt nghiệp, tiêu chí tuyển dụng hay xét duyệt tính theo số lượng (xem bài [Áp lực từ bên ngoài](ap-luc-ben-ngoai.md)). Một dự án lớn sinh ra nhiều paper không có gì sai; vấn đề nằm ở *cách* tách. Salami slicing gây hại theo ba cách: người đọc phải đọc ba paper để có một kết quả; mỗi lát mỏng hơn nên dễ bị reject hơn, trong khi một paper hợp nhất có bằng chứng qua ba tác vụ mạnh hơn hẳn; và cùng một kết quả báo cáo nhiều lần có thể bị các bài tổng quan đếm như nhiều bằng chứng độc lập. Câu hỏi cần trả lời: mỗi paper có trả lời một câu hỏi *khác* với bộ bằng chứng đầy đủ của riêng nó không, và paper hợp nhất có mạnh hơn đáng kể tổng các phần không?

### Các lối ra

**Lối ra thứ nhất: tách khi mỗi paper có một claim độc lập.** Ví dụ hợp lệ: paper thứ nhất đề xuất phương pháp và chứng minh nó trên nhiều tác vụ; paper thứ hai, nếu nhóm phát hiện các benchmark video cho phép trả lời nhiều câu hỏi chỉ từ một khung hình, là một paper phân tích benchmark với bằng chứng riêng. Phép thử: nếu cả hai cùng được công bố, người đọc kỹ có cảm giác đã đọc cùng một paper hai lần không?

**Lối ra thứ hai: gộp thành một paper mạnh hơn.** Khi các phần chỉ khác nhau ở dataset hay tác vụ, gộp lại thường là lựa chọn chiến lược tốt nhất, vì bằng chứng trên ba tác vụ biến một kết quả cục bộ thành một claim tổng quát, điều reviewer ML đặc biệt coi trọng. Người đánh giá hồ sơ cũng thường đọc vài paper tiêu biểu nhất chứ không chỉ đếm danh sách.

**Lối ra thứ ba: nối tiếp theo thời gian với một câu hỏi mới.** Sau khi paper đầu được công bố, paper tiếp theo hợp lệ nếu nó trả lời câu hỏi mới bằng bằng chứng mới, chẳng hạn một thiết lập mà phương pháp gốc thất bại và lý do. Paper sau trích dẫn paper trước, nêu rõ phần mới, và không trình bày lại thí nghiệm cũ như kết quả mới.

Dù chọn lối ra nào, ba vấn đề thủ tục cần được xử lý. Về **dual submission và overlapping submission**, quy định khác nhau giữa các hội nghị và thay đổi theo năm; nhìn chung, nộp cùng lúc hai paper chồng lấn đáng kể, kể cả vào cùng một hội nghị, có thể bị coi là vi phạm, và một số nơi yêu cầu trích dẫn các bài nộp liên quan, giải thích khác biệt và đính kèm bản ẩn danh của chúng. Về **tự trích dẫn khi còn ẩn danh**, công trình trước của nhóm phải được trích dẫn ở ngôi thứ ba; nếu nó chưa công khai, một số hội nghị cho phép trích dẫn dưới tên "Anonymous" kèm bản ẩn danh trong tài liệu bổ sung. Bài [Chuẩn bị nộp bài](../04-nop-va-sau-nop/submission.md) trình bày chi tiết cả hai vấn đề, và bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md) nhấn mạnh rằng viết lại framing không biến một paper thành paper khác. Về **uy tín**, nhóm reviewer của một tiểu lĩnh vực hẹp không lớn, hai paper chồng lấn dễ rơi vào tay cùng một người, và khi bị phát hiện, hậu quả có thể là desk reject cả hai, cộng thêm các biện pháp khác tùy chính sách hội nghị, kèm một ấn tượng xấu kéo dài hơn mọi lần reject.

!!! warning "Kiểm tra Call for Papers trước khi nộp hai paper liên quan"
    Trước khi nộp hai paper có chung dữ liệu, phương pháp hoặc tác giả, hãy đọc mục dual submission và overlapping submission trong Call for Papers của *cả hai* nơi nhận, đúng năm nộp. Khi còn nghi ngờ, khai báo mối quan hệ giữa hai paper và hỏi trực tiếp Program Chairs.

### Viết thế nào

Câu định vị trong introduction phân biệt rõ nhất paper tiếp nối hợp lệ với một lát cắt: paper hợp lệ nói nó trả lời câu hỏi gì *mới*, lát cắt chỉ nói nó áp dụng cái cũ vào đâu.

<div class="bad" markdown>
*"Building on our previous work [12], we apply token pruning to video retrieval and achieve state-of-the-art results on MSR-VTT."*

Câu này vừa lộ danh tính qua "our previous work", vừa cho thấy đóng góp duy nhất là một dataset mới cho phương pháp cũ.
</div>

<div class="good" markdown>
*"Token pruning methods for video, including that of Nguyen et al. [12], assume that informative tokens are those receiving high attention from the classification token. We show that this assumption fails for text-to-video retrieval, where relevant tokens depend on the query, and propose a query-conditioned criterion that addresses this failure."*

Câu này trích dẫn ở ngôi thứ ba, chỉ ra giả định của công trình trước sai ở đâu, và đặt đóng góp vào đúng chỗ sai đó.
</div>

Khi có bài nộp liên quan đang được review, một đoạn khai báo ngắn giúp reviewer và Area Chair đánh giá đúng: *"A concurrent submission (Anonymous, included in the supplementary material) studies token pruning for action recognition; the present work differs in its research question and method, and none of its experiments appear in that submission."* Mức độ dễ bị phát hiện khác nhau giữa các cộng đồng: ở ICLR, bài nộp công khai trên OpenReview nên sự chồng lấn hiển thị cho cả cộng đồng; ở Computer Vision, reviewer của một chủ đề hẹp thường trùng nhau giữa CVPR, ICCV và ECCV; ở NLP, các bài đi qua cùng hệ thống ACL Rolling Review, và chính sách của ARR về bài chồng lấn cần được đọc ở mỗi chu kỳ.

### Điều không được làm

Không nộp đồng thời các paper chồng lấn đáng kể mà không khai báo. Không dùng lại nguyên văn đoạn văn, hình hay bảng kết quả từ paper này sang paper khác như nội dung mới. Không xóa trích dẫn tới công trình trước của nhóm để che mức độ chồng lấn. Và không chia một tập kết quả, chẳng hạn mỗi paper một split của cùng dataset, rồi trình bày mỗi phần như bằng chứng độc lập. Các hành vi này nằm ở vùng sai phạm trong phổ hành vi của bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 10: Claim "đầu tiên" và từ ngữ thổi phồng

### Nhận diện

Bản nháp một paper NLP về ảo giác (*hallucination*) của mô hình ngôn ngữ lớn khi người dùng trộn tiếng Việt và tiếng Anh trong cùng câu (ví dụ giả định) mở đầu bằng: *"We are the first to study hallucination under code-switching. Our novel method significantly outperforms state-of-the-art approaches and effectively solves this problem."* Hai câu chứa năm từ mạnh mà không có con số, điều kiện hay phạm vi nào. Dấu hiệu chung: tính từ đứng ở chỗ đáng lẽ có con số; "significantly" xuất hiện mà không có kiểm định nào; "state-of-the-art" được đo trên danh sách phương pháp do chính tác giả chọn; "solve" được dùng khi tỉ lệ lỗi còn đáng kể; và "to the best of our knowledge" được thêm vào như tấm khiên dù chưa có tìm kiếm có hệ thống.

### Chẩn đoán

Từ ngữ thổi phồng đến từ áp lực phải trông mới mẻ, niềm tin rằng tính từ mạnh tạo ấn tượng, và với người viết không phải bản ngữ, thói quen bắt chước cụm từ trong các paper khác. Điều bị bỏ qua là: **với reviewer, mỗi từ mạnh là một claim có nội dung ngầm** và được chấm như mọi claim khác. "First" là một claim phủ định tồn tại: chỉ cần *một* phản ví dụ là đổ, mà reviewer được chọn vì am hiểu chủ đề nên là người dễ biết phản ví dụ nhất, và chữ "first" thôi thúc họ đi tìm. "To the best of our knowledge" không cứu được claim khi phản ví dụ hiện ra sau một truy vấn đơn giản; khi đó nó chỉ cho thấy hiểu biết của nhóm chưa đủ rộng. "Novel" không mang thông tin kiểm chứng được. "Significantly", trong paper ML và NLP, được hiểu là đã có kiểm định thống kê, như bài [Experiments](../02-viet-tung-phan/experiments.md) đã cảnh báo. "State-of-the-art" ngầm chứa nhiều điều kiện: benchmark nào, so với ai, cùng backbone và dữ liệu không, tính đến thời điểm nào. "Solve" ngầm nói bài toán không còn lỗi đáng kể.

Lipton và Steinhardt xếp *lạm dụng ngôn ngữ* (*misuse of language*) vào bốn xu hướng đáng lo ngại, với ba con đường: *định nghĩa gợi ý*, đặt cho khái niệm kỹ thuật một cái tên mang hàm ý thông thường để lén đưa vào hàm ý chưa được chứng minh; *quá tải thuật ngữ*, dùng một thuật ngữ kỹ thuật chính xác theo nghĩa lỏng hơn; và *từ vali* (*suitcase words*) như "interpretability" hay "generalization", chứa nhiều nghĩa khiến hai paper tưởng đối thoại mà thực ra nói về hai thứ. Họ cũng cảnh báo về claim "ngang tầm con người" phát biểu lỏng lẻo, và về việc định nghĩa lại một bài toán khó thành dự đoán đúng trên một dataset cụ thể, khiến tuyên bố "giải được" che giấu tiến bộ thật còn hạn chế. Trước khi sửa, với mỗi từ mạnh, cần hỏi: claim ngầm là gì, bằng chứng có ủng hộ đúng claim đó không, phạm vi nhỏ nhất mà claim chắc chắn đúng là gì, và quy trình tìm kiếm ba tầng trong bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) có tìm ra phản ví dụ không.

### Các lối ra

**Lối ra thứ nhất: khoanh vùng claim bằng các điều kiện làm nó đúng.** Claim "đầu tiên" đứng vững khi phạm vi được phát biểu chính xác: thiết lập nào, giả định nào, khác với công trình gần nhất ở điều kiện nào. Lối ra này phù hợp khi khác biệt là thật; bằng chứng cần có là một cuộc tìm kiếm có hệ thống và phần Related Work phân tích các công trình gần nhất theo đúng những điều kiện đó.

**Lối ra thứ hai: thay tính từ bằng con số và điều kiện.** Thay "significantly outperforms" bằng mức chênh lệch kèm kiểm định, "state-of-the-art" bằng "the best among methods using the same backbone and no extra data in Table 2", "solves" bằng "reduces the error from x to y". Con số không bị bác bỏ bằng một phản ví dụ, chỉ có thể bị kiểm tra.

**Lối ra thứ ba: bỏ hẳn từ đó và nói thẳng khác biệt.** "Novel" gần như luôn bỏ được mà không mất gì. "First" thường cũng vậy: câu "Unlike A and B, which assume X, we study the setting where X fails" vừa mạnh hơn vừa an toàn hơn, vì nó nêu một khác biệt kiểm chứng được thay vì một tuyên bố tuyệt đối. Đây nên là lựa chọn mặc định khi không chắc chắn.

**Lối ra thứ tư: làm thêm bằng chứng để xứng với từ.** Muốn giữ từ mạnh thì tạo ra bằng chứng nó đòi hỏi: kiểm định thống kê cho "significantly" (bài Experiments có mã paired bootstrap), tìm kiếm mở rộng cho "first", danh sách so sánh cập nhật cho "state-of-the-art". Nếu phản ví dụ xuất hiện sát deadline dưới dạng một công trình trùng ý tưởng, xem Tình huống 24 trong bài [Áp lực từ bên ngoài](ap-luc-ben-ngoai.md).

!!! info "Một bài tập đọc soát có sẵn"
    Case study [CrossInject](../07-ai-security/crossinject.md) phân tích cả claim "đầu tiên" lẫn chữ "significantly" của một paper thật: claim "first" chỉ đứng vững khi gói đủ hai điều kiện làm nên khác biệt (phối hợp nhiều phương thức và black-box), còn chữ "significantly" được dùng cho một thí nghiệm mười lần thử mà kiểm định chính xác Fisher cho thấy chưa đạt ngưỡng ý nghĩa thông thường.

### Viết thế nào

Bảng dưới đây tổng hợp claim ngầm của các từ hay bị thổi phồng và cách viết có giới hạn tương ứng.

| Từ ngữ | Claim ngầm mà reviewer đọc ra | Cách viết có giới hạn |
|---|---|---|
| *first* | Chưa từng có công trình nào làm điều này | *"Unlike [A, B], which …, we …"*, hoặc giữ "first" kèm đủ điều kiện phân biệt |
| *novel* | (không có nội dung kiểm chứng được) | Bỏ; nêu cụ thể khác biệt với công trình gần nhất |
| *significantly* | Đã kiểm định thống kê và có ý nghĩa | Mức chênh lệch kèm kiểm định, hoặc *substantially* kèm con số |
| *state-of-the-art* | Tốt nhất trong mọi phương pháp đã công bố, cùng điều kiện, tới thời điểm nộp | *"the best among methods using the same backbone and no extra data (Table 2)"* |
| *solve* | Bài toán không còn lỗi đáng kể | *"reduces the error from x to y on …"* |
| *human-level* | Làm được việc con người làm | *"matches the accuracy of expert annotators on [test set]"* |

<div class="bad" markdown>
*"We are the first to study hallucination under code-switching. Our novel method significantly outperforms state-of-the-art approaches and effectively solves this problem."*

Năm từ mạnh, không một con số: chỉ cần reviewer tìm ra một workshop paper về chủ đề này, hoặc thấy không có kiểm định nào, cả đoạn mất uy tín.
</div>

<div class="good" markdown>
*"The hallucination benchmarks we are aware of [A, B, C] use monolingual prompts. We study how intra-sentential code-switching between Vietnamese and English affects factual consistency. Our method reduces the hallucination rate from 31% to 22% on our benchmark and from 18% to 14% on [C] (paired bootstrap, p < 0.01), although it remains above the monolingual rate (Sec. 6)."*

Tính mới được khoanh vùng bằng các benchmark đã biết, mọi khẳng định có con số, kiểm định được nêu, và giới hạn còn lại được nói thẳng.
</div>

Mỗi cộng đồng có điểm nhạy cảm riêng. Ở **Computer Vision**, lượng preprint rất lớn khiến claim "the first to …" bị kiểm tra đặc biệt kỹ, và "state-of-the-art" bị đối chiếu với các phương pháp mới nhất, kể cả preprint. Ở **NLP**, mục Limitations bắt buộc tạo ra cơ chế tự kiểm tra: claim rộng ở Introduction mà bị thu hẹp ở Limitations sẽ bị chỉ ra như một mâu thuẫn, và *"overclaiming"* là điểm yếu thường gặp trong review. Ở **Machine Learning**, reviewer soi quan hệ giữa claim và giả định: "provably" đòi một định lý với giả định đầy đủ, còn "significantly" đi kèm kỳ vọng về error bar và kiểm định, vốn được hỏi trực tiếp trong NeurIPS Paper Checklist.

### Điều không được làm

Không giữ chữ "first" sau khi đã biết có phản ví dụ, và càng không được bỏ trích dẫn phản ví dụ đó để claim trông đứng vững; đó là che giấu công trình liên quan, một sai phạm chứ không còn là văn phong. Không dùng "significantly" theo nghĩa nước đôi với hy vọng người đọc hiểu là có ý nghĩa thống kê. Không định nghĩa lại bài toán thành phiên bản dễ hơn rồi tuyên bố đã "giải" bài toán ban đầu (xem [Ranh giới trung thực](ranh-gioi-trung-thuc.md)).

## Tổng hợp: mỗi dòng contribution là một lời hứa

Năm tình huống trong bài đều quy về một cơ chế: người viết liệt kê một thứ, và reviewer chấm thứ đó theo chuẩn của loại của nó. Một thành phần được chấm bằng ablation, một dataset bằng chuẩn dataset, một chữ "first" bằng việc có hay không có phản ví dụ. Bảng dưới đây đối chiếu các loại đóng góp thường gặp với chuẩn đó. Cột cuối ghi bằng chứng *tối thiểu*, tức điều kiện cần để dòng contribution không trở thành điểm yếu, chứ không phải điều kiện đủ để paper được nhận.

| Đóng góp được liệt kê | Chuẩn reviewer sẽ dùng | Bằng chứng tối thiểu |
|---|---|---|
| Phương pháp mới (một ý tưởng chính) | Cải thiện có thật, so sánh cân sức, thiết kế có lý do | Baseline mạnh chạy cùng điều kiện; ablation; nhiều seed khi kết quả dao động |
| Phương pháp ghép nhiều thành phần | Mỗi thành phần cần thiết và có vai trò rõ | Leave-one-out và add-one-in; kiểm tra tương tác các cặp nghi ngờ; cùng recipe cho mọi phương pháp |
| Phát hiện, phân tích | Đúng, tổng quát, đã loại trừ giải thích thay thế | Thí nghiệm có kiểm soát; nhiều mô hình hoặc dataset; kiểm tra ít nhất một giải thích thay thế |
| Dataset | Chất lượng, hữu ích, hợp pháp, truy cập được | Quy trình gán nhãn và độ đồng thuận; so sánh với dataset hiện có; giấy phép; tài liệu mô tả; truy cập được khi review |
| Benchmark | Đo đúng thứ cần đo, còn khoảng trống, dùng được lâu dài | Phân tích lối tắt và dấu vết gán nhãn; baseline mạnh chưa bão hòa; thảo luận contamination; kế hoạch duy trì |
| Pipeline dữ liệu | Tạo ra dữ liệu tốt hơn các cách làm khác | So sánh đầu ra với pipeline thay thế; ablation từng bước; chi phí |
| Training recipe | Khảo sát có hệ thống, có chuyển giao | Ablation từng phần tử; nhiều kiến trúc hoặc dataset; áp dụng cho cả baseline; báo cáo phần tử không chuyển giao |
| Định lý, phân tích lý thuyết | Đúng, liên quan tới claim chính, giả định rõ | Phát biểu chính xác; chứng minh đầy đủ; thí nghiệm kiểm chứng dự đoán |
| Claim "đầu tiên" | Không tồn tại phản ví dụ | Tìm kiếm ba tầng; phạm vi phát biểu chặt; Related Work phân tích công trình gần nhất |
| Code, công cụ, cấu hình | Thường không được coi là đóng góp khoa học | Một câu "we release"; link ẩn danh truy cập được |
| "Extensive experiments" | Không phải đóng góp riêng | Gộp vào claim về kết quả chính |

Bảng có ba cách dùng. Thứ nhất là **rà soát trước khi nộp**: với mỗi dòng contribution, tìm hàng tương ứng và kiểm tra bằng chứng tối thiểu; nếu chưa có, chỉ còn ba lựa chọn là bổ sung bằng chứng, hạ dòng đó thành supporting artifact, hoặc xóa nó, đúng ba kết quả của phép thử "xóa dòng". Thứ hai là **lập kế hoạch từ sớm**: khi biết dự án sẽ có một dataset hay một recipe, cột cuối cho biết cần dành nguồn lực cho gì, chẳng hạn một vòng gán nhãn thứ hai để đo đồng thuận hay việc chạy lại baseline với recipe mới. Thứ ba là **đọc review**: khi một dòng contribution bị phê bình, cột giữa thường cho biết reviewer đang dùng chuẩn nào, giúp viết rebuttal đúng trọng tâm (xem bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md)).

Hai hàng cuối đi ngược trực giác của nhiều người viết. Code, công cụ và một bộ thí nghiệm lớn tốn nhiều công sức nên người viết muốn chúng được ghi nhận như đóng góp. Chúng *được* ghi nhận, nhưng ở phần điểm mạnh về tính tái lập và độ kỹ lưỡng, không phải ở phần đóng góp khoa học; đưa chúng vào danh sách contribution chỉ làm thông điệp loãng hơn. Bài [Thực hành: ba dự án đi qua ngõ cụt](thuc-hanh.md) có các danh sách contribution trước và sau khi gỡ trong những dự án cụ thể.

## Tóm tắt

Paper không mạnh lên vì có nhiều thứ; nó mạnh lên vì mỗi thứ được liệt kê đều đứng vững. Với phương pháp ghép nhiều thành phần, việc đầu tiên là gỡ rối bằng ablation kết hợp leave-one-out, add-one-in, kiểm tra tương tác và nhiều seed trên cùng một recipe cho mọi phương pháp; sau đó mới quyết định cắt thành phần thừa, tìm nguyên lý thống nhất, viết thành nghiên cứu thực nghiệm theo kiểu Rainbow, Bag of Tricks hay ConvNeXt, hoặc đổi hình thức và venue. Mỗi dòng contribution bị chấm theo chuẩn của chính loại đóng góp đó, nên dataset, benchmark, pipeline và recipe chưa đạt chuẩn nên được trình bày như supporting artifacts, còn thời gian nên dành để đào sâu đóng góp chính. Một paper chứa hai câu chuyện độc lập nên được thu về một câu chuyện hoặc tách thành hai paper với bằng chứng đầy đủ, khác hẳn với cắt lát một kết quả thành nhiều paper mỏng. Cuối cùng, mỗi từ mạnh như "first", "significantly", "state-of-the-art" hay "solve" là một claim ngầm, và cách viết an toàn là khoanh vùng bằng điều kiện, thay tính từ bằng con số, hoặc bỏ hẳn từ đó và nói thẳng khác biệt.

## Bài tập

1. Lấy danh sách contribution hiện tại của dự án. Với mỗi dòng, xác định loại đóng góp theo bảng tổng hợp, kiểm tra bằng chứng tối thiểu, rồi làm phép thử "xóa dòng" cùng một đồng nghiệp ngoài nhóm. Viết lại danh sách, tách riêng câu "we release" cho tài nguyên đi kèm.
2. Nếu phương pháp có từ ba thành phần trở lên, thiết kế một bảng ablation gồm cả cột add-one-in và leave-one-out trên thiết lập nhỏ, với ít nhất ba seed và cùng recipe cho baseline. Chỉ ra ít nhất một cặp thành phần có thể tương tác và đề xuất phép đo cơ chế để kiểm tra.
3. Với mỗi thành phần, viết một câu nêu nút thắt mà nó giải quyết và phép đo cho thấy nút thắt đó có thật ở baseline. Thành phần nào không viết được câu này cần được chuyển sang phần chi tiết cài đặt, gộp với thành phần khác, hoặc cắt bỏ.
4. Tìm trong bản nháp mọi lần xuất hiện của "first", "novel", "significantly", "state-of-the-art", "solve" và "human-level". Viết lại từng câu bằng một trong ba cách: khoanh vùng bằng điều kiện, thay bằng con số, hoặc bỏ hẳn. Với mỗi claim "đầu tiên" còn giữ lại, thực hiện tìm kiếm ba tầng và ghi lại kết quả.
