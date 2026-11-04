# Ghép ý tưởng và "độn" đóng góp

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Gỡ rối một phương pháp gồm nhiều thành phần bằng một hệ thống ablation đầy đủ (leave-one-out, add-one-in, tương tác giữa các thành phần, nhiều seed), rồi quyết định giữ, cắt hay tổ chức lại từng thành phần.
    - Chọn hình thức phù hợp cho một paper "ghép": phương pháp có nguyên lý thống nhất, nghiên cứu thực nghiệm, hay recipe có khảo sát hệ thống.
    - Giải thích vì sao mỗi dòng trong danh sách contribution bị đánh giá theo chuẩn của chính loại đóng góp đó, và biến các phần phụ thành supporting artifacts thay vì "độn" chúng vào danh sách.
    - Phân biệt một paper chứa hai paper, một dự án được tách hợp lệ và salami slicing, cùng các rủi ro về overlapping submission và ẩn danh đi kèm.
    - Viết các claim "đầu tiên", "state-of-the-art", "significantly" có phạm vi rõ ràng, đứng vững trước phản ví dụ.

Bài [Khi novelty và hiệu quả lệch pha](novelty-va-hieu-qua.md) xử lý những tình huống trong đó một ý tưởng bị đánh giá sai vì nó quá đơn giản, hoặc một ý tưởng mới chưa cho ra con số đẹp. Bài này xử lý một căng thẳng gần như ngược lại: paper có *quá nhiều* thứ. Nhiều thành phần trong phương pháp, nhiều dòng trong danh sách contribution, nhiều câu chuyện trong cùng tám trang, nhiều paper từ cùng một dự án, và nhiều tính từ mạnh trong cùng một đoạn văn. Người viết thường có trực giác rằng "nhiều" làm paper nặng ký hơn. Reviewer đọc theo chiều ngược lại: mỗi thứ được thêm vào là một điều cần được chứng minh, và mỗi điều chưa được chứng minh là một điểm yếu có thể viết thẳng vào review.

Nguyên tắc xuyên suốt bài là: **mỗi đóng góp được liệt kê là một claim phải bảo vệ**. Một thành phần không rõ vai trò, một dataset chưa được kiểm tra chất lượng, một chữ "first" chưa qua tìm kiếm kỹ không làm paper mạnh lên; chúng mở thêm mặt trận cho reviewer và làm loãng thông điệp chính. Năm tình huống dưới đây đi từ nhỏ tới lớn rồi quay về câu chữ: cấp phương pháp (Tình huống 6), cấp danh sách đóng góp (Tình huống 7), cấp một paper (Tình huống 8), cấp cả dự án (Tình huống 9), và cuối cùng là cấp từ ngữ (Tình huống 10). Sau năm tình huống là một bảng tổng hợp đối chiếu từng loại đóng góp với chuẩn mà reviewer sẽ dùng để chấm nó.

Bài giả định người học đã đọc mục *Bẫy "A + B" và cách thoát* trong bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md), mục *Thiết kế ablation* trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), và mục *Đoạn 6: Contributions* trong bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md). Những nội dung đó không được nhắc lại ở đây; bài này đi tiếp từ chỗ chúng dừng lại.

## Tình huống 6: Ghép nhiều ý tưởng, đạt SOTA, nhưng không rõ cái gì tạo ra kết quả

### Nhận diện

Hãy hình dung một nhóm tác giả làm phân đoạn ngữ nghĩa (*semantic segmentation*) trong tám tháng (ví dụ giả định). Xuất phát từ một backbone chuẩn, nhóm lần lượt thêm một khối attention đa tỉ lệ, một hàm loss chú trọng đường biên, một chiến lược augmentation mới, rồi chuyển sang lịch huấn luyện dài hơn kèm EMA (trung bình trượt của trọng số) và optimizer AdamW. Mỗi thay đổi được giữ lại vì nó làm tăng mIoU trên tập validation vào thời điểm được thử. Kết quả cuối cùng vượt phương pháp mạnh nhất đã công bố khoảng 1,5 điểm mIoU trên ADE20K. Đến lúc viết, nhóm nhận ra không ai trả lời được câu hỏi đơn giản nhất: cái gì tạo ra 1,5 điểm đó? Bảng ablation duy nhất là bảng cộng dồn theo đúng thứ tự lịch sử của dự án, mỗi dòng thêm một thành phần, và baseline ở dòng đầu được huấn luyện với lịch huấn luyện cũ.

Có vài dấu hiệu cho thấy người viết đang ở tình huống này. Dấu hiệu rõ nhất là không trả lời được câu hỏi "nếu chỉ được giữ một thành phần, giữ cái nào?". Dấu hiệu thứ hai là abstract mô tả phương pháp bằng một danh sách module, mỗi module có một tên viết tắt riêng. Dấu hiệu thứ ba là phương pháp đề xuất và baseline được huấn luyện bằng hai recipe khác nhau mà không có dòng nào trong bảng tách hai thứ đó ra. Dấu hiệu thứ tư là điều duy nhất nối các thành phần với nhau là "chúng đều làm con số tăng". Tình huống này không riêng gì Computer Vision. Ở NLP, đó có thể là một pipeline hỏi đáp chồng thêm truy xuất, rerank, tự kiểm tra và ensemble nhiều prompt. Ở Machine Learning, đó có thể là một phương pháp self-supervised cộng dồn ba regularizer và một mẹo khởi tạo.

### Chẩn đoán

Gốc rễ của tình huống nằm ở bản chất tích lũy của quá trình nghiên cứu. Mỗi thành phần được thêm vào ở một thời điểm, trên phiên bản hệ thống lúc đó, và được giữ lại vì một con số trên tập validation. Paper vì thế thừa hưởng *lịch sử* của dự án thay vì *logic* của nó. Điều này có hai hệ quả. Thứ nhất, đóng góp của mỗi thành phần được đo trong một bối cảnh đã thay đổi: một module giúp một điểm khi được thêm vào tháng thứ hai có thể không còn giúp gì sau khi recipe mới được áp dụng vào tháng thứ sáu. Thứ hai, khi hàng chục lựa chọn đã được thử trên cùng một tập validation, một phần cải thiện có thể chỉ là nhiễu được chọn lọc. Đây chính là hiện tượng mà Gelman và Loken gọi là "khu vườn rẽ nhánh" (*garden of forking paths*): nhiều quyết định phân tích không được khai báo làm sai lệch kết luận, kể cả khi không ai cố ý.

Trong bài *Troubling Trends in Machine Learning Scholarship*, Lipton và Steinhardt xếp việc không xác định được nguồn gốc của cải thiện thực nghiệm vào bốn xu hướng đáng lo ngại của ngành. Lập luận của họ mô tả đúng tình huống này nên đáng được diễn giải kỹ. Khi một paper đề xuất nhiều thay đổi cùng lúc mà thiếu ablation thích đáng, đôi khi chỉ một thay đổi thực sự tạo ra kết quả. Paper khi đó tạo ấn tượng rằng tác giả đã làm rất nhiều, trong khi thực ra họ làm *chưa đủ*, vì phần việc quan trọng nhất là tách nguồn gốc cải thiện đã bị bỏ qua. Tệ hơn, người đọc bị dẫn tới chỗ tin rằng mọi thay đổi đều cần thiết, và mang cả những thành phần thừa sang công trình của họ. Ví dụ mà hai tác giả dẫn là nghiên cứu của Melis và cộng sự về language modeling, đã được nhắc trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md): một loạt cải thiện được gán cho kiến trúc mới hóa ra chủ yếu đến từ việc tune hyperparameter kỹ hơn. Lipton và Steinhardt cũng công bằng ghi nhận rằng ablation không phải con đường duy nhất để hiểu một phương pháp; kiểm tra độ bền vững và phân tích lỗi cũng đem lại hiểu biết.

Trước khi chọn lối ra, nhóm tác giả cần trả lời năm câu hỏi, theo đúng thứ tự. Câu thứ nhất là cải thiện có thật không, tức là chênh lệch giữa phương pháp đầy đủ và baseline có lớn hơn rõ rệt độ dao động giữa các seed hay không. Câu thứ hai là so sánh có cân sức không: nếu baseline được huấn luyện lại với đúng recipe mới, khoảng cách còn lại bao nhiêu? Câu hỏi này không mang tính hình thức. ConvNeXt (CVPR 2022) cho thấy chỉ riêng việc huấn luyện một ResNet-50 bằng recipe kiểu vision Transformer (lịch huấn luyện dài hơn, AdamW, các augmentation và regularization hiện đại) đã nâng độ chính xác ImageNet từ 76,1% lên 78,8%, và các tác giả kết luận rằng một phần đáng kể khoảng cách giữa ConvNet và vision Transformer có thể đến từ kỹ thuật huấn luyện chứ không phải kiến trúc. Câu thứ ba là thành phần nào cần thiết, thành phần nào thừa. Câu thứ tư là các thành phần tương tác với nhau thế nào: bổ sung cho nhau, thay thế nhau vì cùng giải một vấn đề, hay cản trở nhau. Câu thứ năm là có một nguyên lý chung nào nối các thành phần không, hay chúng chỉ là một danh sách. Câu trả lời cho câu thứ hai thường thay đổi toàn bộ câu chuyện, nên nó phải được làm trước. Trường hợp toàn bộ cải thiện hóa ra đến từ recipe hoặc từ việc dùng nhiều tài nguyên hơn được bàn riêng ở Tình huống 17 trong bài [Khi con số không đẹp](con-so-khong-dep.md).

### Các lối ra

**Lối ra thứ nhất: gỡ rối bằng một hệ thống ablation đầy đủ.** Đây là lối ra bắt buộc, vì mọi lối ra khác đều cần kết quả của nó. Bài Thiết kế thí nghiệm đã trình bày bốn kiểu ablation. Với một phương pháp ghép, điều quan trọng là *kết hợp* chúng, vì mỗi kiểu chỉ trả lời một nửa câu hỏi. Leave-one-out (bỏ từng thành phần khỏi phương pháp đầy đủ) cho biết một thành phần có *cần thiết* khi các thành phần khác đã có mặt hay không. Add-one-in (thêm từng thành phần riêng lẻ vào baseline) cho biết thành phần đó có *đủ* để tạo ra cải thiện khi đứng riêng hay không. Khi hai kết quả này khác nhau, đó là dấu hiệu của tương tác. Bảng dưới đây (số liệu minh họa, mỗi ô là chênh lệch mIoU trung bình qua ba seed, baseline đã được huấn luyện với recipe mới trừ dòng cuối) cho thấy cách đọc.

| Thành phần | Add-one-in (baseline + thành phần) | Leave-one-out (đầy đủ − thành phần) | Cách đọc |
|---|---|---|---|
| A: attention đa tỉ lệ | +1,2 | −0,2 | Mạnh khi đứng riêng, gần như thừa khi đã có B |
| B: loss đường biên | +1,0 | −0,3 | Tương tự A: A và B có thể cùng sửa một lỗi |
| C: augmentation mới | +0,1 | −0,9 | Vô dụng khi đứng riêng, cần thiết trong tổ hợp |
| Recipe mới (so với baseline dùng recipe cũ) | +1,1 | −1,0 | Một phần lớn cải thiện đến từ recipe |

Đọc bảng này, nhóm tác giả rút ra ba điều mà bảng cộng dồn không thể cho thấy. A và B gần như thay thế được cho nhau: mỗi cái đứng riêng đều mạnh, nhưng khi một cái đã có mặt thì cái kia chỉ thêm rất ít. Giả thuyết hợp lý là cả hai cùng sửa một kiểu lỗi, chẳng hạn lỗi ở vùng biên vật thể, và giả thuyết đó cần được kiểm tra bằng một phép đo riêng trên vùng biên. C là trường hợp ngược lại: đứng riêng thì vô dụng, nhưng bỏ đi khỏi tổ hợp thì mất gần một điểm, nghĩa là C chỉ phát huy khi có A hoặc B. Còn recipe chiếm một phần lớn khoảng cách so với baseline cũ, nên mọi so sánh với phương pháp khác đều phải được làm lại với recipe như nhau. Khi nghi có tương tác, cách chắc chắn nhất là thiết kế giai thừa (*factorial design*): chạy mọi tổ hợp bật/tắt của $k$ thành phần, tức $2^k$ cấu hình. Với $k \le 4$, tức tối đa mười sáu cấu hình, việc này thường khả thi trên một thiết lập nhỏ; với $k$ lớn hơn, có thể chạy đầy đủ cho những cặp bị nghi ngờ và leave-one-out cho phần còn lại. Đoạn code dưới đây tính hiệu ứng chính và tương tác theo cặp từ kết quả của một thiết kế giai thừa.

```python
import numpy as np

# results: dict ánh xạ cấu hình bật/tắt -> danh sách điểm qua các seed
# ví dụ: results[(1, 0, 1)] = [46.1, 45.8, 46.3]  (A bật, B tắt, C bật)

def mean_score(results, cond):
    vals = [np.mean(v) for cfg, v in results.items() if cond(cfg)]
    return np.mean(vals)

def main_effect(results, i):
    """Hiệu ứng trung bình của thành phần i, lấy trung bình trên mọi tổ hợp còn lại."""
    return (mean_score(results, lambda c: c[i] == 1)
            - mean_score(results, lambda c: c[i] == 0))

def interaction(results, i, j):
    """Hiệu ứng của i khi j bật trừ hiệu ứng của i khi j tắt.
    Gần 0: hai thành phần cộng dồn. Âm: thay thế nhau. Dương: bổ trợ nhau."""
    def effect_i(j_on):
        return (mean_score(results, lambda c: c[i] == 1 and c[j] == j_on)
                - mean_score(results, lambda c: c[i] == 0 and c[j] == j_on))
    return effect_i(1) - effect_i(0)
```

Tất cả những con số này chỉ có nghĩa khi đi kèm độ dao động. Một thành phần có hiệu ứng leave-one-out nhỏ hơn độ lệch chuẩn giữa các seed thì chưa được chứng minh là cần thiết, và không nên được trình bày như một phần của đóng góp. Vì thiết kế giai thừa nhân số lần chạy lên nhiều lần, nên chạy nó trên thiết lập nhỏ hơn như bài Thiết kế thí nghiệm gợi ý, rồi kiểm tra lại cấu hình đầy đủ và các biến thể quan trọng trên thiết lập chính.

Rainbow (AAAI 2018) là mẫu mực cho lối ra này. Paper kết hợp sáu cải tiến đã được công bố của DQN (double Q-learning, prioritized replay, dueling network, multi-step learning, distributional RL và Noisy Nets) thành một agent duy nhất, đạt kết quả tốt nhất thời điểm đó trên bộ 57 game Atari, rồi lần lượt bỏ từng thành phần khỏi tổ hợp. Kết quả được báo cáo thẳng thắn: prioritized replay và multi-step learning là hai thành phần quan trọng nhất, distributional RL đứng ngay sau, còn dueling network và double Q-learning cho khác biệt nhỏ trên chỉ số tổng hợp và tác động khác nhau tùy game. Điều đáng học nhất là cách paper xử lý trường hợp double Q-learning. Thay vì lặng lẽ bỏ qua một thành phần "không có tác dụng", các tác giả phân tích thêm và đưa ra một giả thuyết về tương tác: việc biểu diễn phân phối giá trị trên một miền giới hạn trong distributional RL dường như đã bù trừ phần nào cho thiên lệch ước lượng quá cao (*overestimation bias*) mà double Q-learning vốn nhắm tới. Paper cũng nói rõ rằng ablation đo đóng góp của mỗi thành phần *trong bối cảnh của tổ hợp cụ thể này*. Câu đó không phải là khiêm tốn cho có; nó là một phát biểu chính xác về phạm vi của bằng chứng.

**Lối ra thứ hai: cắt bỏ thành phần thừa.** Khi ablation cho thấy bỏ một thành phần chỉ làm thay đổi kết quả trong phạm vi nhiễu, cách làm đúng là bỏ nó khỏi *phương pháp*, không chỉ khỏi phần mô tả. Mỗi thành phần thừa có giá phải trả: thêm hyperparameter, thêm code, thêm câu hỏi cho reviewer, và thêm một thứ mà người tái lập phải cài đặt mà không được lợi gì. Một phương pháp ba thành phần mà thành phần nào cũng có vai trò được chứng minh thuyết phục hơn hẳn một phương pháp năm thành phần mà hai thành phần không rõ vai trò. Cộng đồng ở cả ba lĩnh vực đều trân trọng những phương pháp đạt kết quả mạnh mà không cần thêm thắt, đúng tinh thần cụm "without bells and whistles" trong [Mask R-CNN](../05-case-studies/mask-rcnn.md). Lối ra này phù hợp khi thành phần thừa trên mọi thiết lập đã thử, không chỉ trên benchmark chính. Nếu một thành phần chỉ giúp trên một dataset, nó nên được mô tả là tùy chọn kèm điều kiện áp dụng. Những thứ đã thử mà không giúp nên được ghi ngắn gọn trong appendix ("we also tried X, which did not improve results"), vì thông tin đó tiết kiệm thời gian cho người khác và cho thấy nhóm tác giả đã kiểm tra kỹ. Cần cảnh giác với chiều ngược lại: không được cắt một thành phần chỉ vì nó khó giải thích trong khi chính nó mang phần lớn cải thiện. Làm vậy là gán kết quả cho một nguyên nhân sai, và đó là bóp méo.

**Lối ra thứ ba: tìm một nguyên lý thống nhất.** Một tập thành phần trở thành một phương pháp khi mỗi thành phần trả lời một vấn đề đã được *chẩn đoán*. Quy trình cụ thể là viết ra, cho từng thành phần, kiểu lỗi mà nó sửa, rồi đo hai điều: kiểu lỗi đó có thật ở baseline không, và nó có giảm khi thêm thành phần không. Phép đo phải nhắm vào cơ chế chứ không chỉ vào kết quả cuối: nếu loss đường biên sửa lỗi ở biên, cần một metric riêng cho vùng biên. Kết quả của quy trình này thường sắp xếp lại phương pháp. Hai thành phần cùng sửa một lỗi là dư thừa, nên gộp hoặc giữ một. Một thành phần không sửa lỗi nào đã chẩn đoán là một mẹo huấn luyện, nên được chuyển sang phần chi tiết cài đặt thay vì trình bày như một phần của ý tưởng. [Adam](../05-case-studies/adam.md) là một ví dụ kinh điển của cách đóng khung này: paper giới thiệu thuật toán như sự kết hợp ưu điểm của AdaGrad với gradient thưa và của RMSProp với mục tiêu không dừng, cộng thêm bias correction mà cả hai đều không có, và mỗi tính chất được kế thừa đều có một thí nghiệm tương ứng. Rainbow cũng chọn các cải tiến theo tiêu chí mỗi cái giải quyết một mối lo riêng của DQN. Điều kiện để lối ra này hợp lệ là nguyên lý phải *có thật*, tức là các phép đo chẩn đoán tồn tại và cho kết quả như nguyên lý dự báo. Một nguyên lý được nghĩ ra sau cùng để khoác lên một danh sách thành phần, không có phép đo nào kiểm chứng, là một dạng HARKing (đặt giả thuyết sau khi biết kết quả) và được phân tích trong bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

**Lối ra thứ tư: viết thành một nghiên cứu thực nghiệm hoặc một "recipe" có khảo sát hệ thống.** Khi các thành phần đều đã được người khác công bố và giá trị thật của công trình nằm ở hiểu biết về *cách chúng kết hợp*, lối ra trung thực và thường mạnh nhất là đổi kiểu đóng góp: từ "phương pháp mới" sang "nghiên cứu thực nghiệm". Rainbow đặt câu hỏi những cải tiến nào bổ sung cho nhau, rồi trả lời nó. *Bag of Tricks for Image Classification with Convolutional Neural Networks* (CVPR 2019) khảo sát một tập tinh chỉnh huấn luyện mà theo các tác giả thường chỉ được nhắc qua như chi tiết cài đặt hoặc chỉ thấy được trong mã nguồn, đo tác động của từng tinh chỉnh bằng ablation, cho thấy chúng cộng lại thành một cải thiện lớn, rồi kiểm tra trên nhiều kiến trúc (ResNet-50, Inception-V3, MobileNet), trên một dataset khác và trên hai tác vụ chuyển giao là object detection và semantic segmentation. Paper báo cáo cả những chỗ không chuyển giao: distillation giúp ResNet nhưng không giúp Inception-V3 và MobileNet, và trên semantic segmentation chỉ lịch learning rate cosine còn giữ được lợi ích, trong khi label smoothing, distillation và mixup cho kết quả kém hơn. Chính những dòng "không hiệu quả" đó làm paper đáng tin. ConvNeXt đi xa hơn với một biểu đồ lộ trình: xuất phát từ ResNet được huấn luyện bằng recipe hiện đại, các tác giả "hiện đại hóa" kiến trúc theo từng bước thiết kế của Swin Transformer, giữ cố định recipe, kiểm soát gần đúng FLOPs, báo cáo trung bình ba seed ở chế độ ResNet-50, và đánh dấu bằng thanh gạch chéo những thay đổi đã thử nhưng không được giữ lại. Người đọc nhìn một hình là biết mỗi quyết định thiết kế đóng góp bao nhiêu. Lối ra này đòi hỏi ba điều mà một paper ghép thông thường thiếu: giao thức thí nghiệm cố định cho mọi bước, kiểm tra trên nhiều kiến trúc hoặc dataset, và báo cáo cả những gì không hiệu quả. Cả ba paper kể trên đều được nhận ở main track, nên đây không phải lối ra "hạng hai".

**Lối ra thứ năm: đổi hình thức, venue, hoặc đổi hướng.** Có những trường hợp mà sau khi gỡ rối, phần còn lại không đủ cho một paper phương pháp ở main track. Nếu cải thiện chủ yếu đến từ recipe, câu chuyện trung thực có thể chính là "recipe quan trọng hơn kiến trúc", theo tinh thần của *Revisiting ResNets: Improved Training and Scaling Strategies* (NeurIPS 2021), nơi cải thiện được chỉ ra là đến chủ yếu từ phương pháp huấn luyện và chiến lược scaling. Nếu chỉ một thành phần thực sự có tác dụng và hiểu biết về nó gọn, một short paper ở các hội nghị thuộc hệ ACL, hoặc một paper tập trung vào đúng thành phần đó, có thể phù hợp hơn một paper dài tám trang về cả hệ thống. Nếu công trình vững chắc nhưng không nổi bật, ACL Findings (với NLP) hoặc TMLR (với tiêu chí chính là claim có được bằng chứng ủng hộ chính xác và thuyết phục, cùng sự quan tâm của cộng đồng) là những kênh phù hợp. Cuối cùng, nếu sau khi loại bỏ mọi yếu tố gây nhiễu không còn lại gì ngoài recipe đã biết, lối ra tốt là dừng câu chuyện "phương pháp mới", công bố code và cấu hình như một tài nguyên tái lập, và dùng những gì học được làm nền cho câu hỏi tiếp theo.

### Viết thế nào

Cách viết của một paper ghép phụ thuộc vào lối ra đã chọn, nhưng có một nguyên tắc chung: trình tự trình bày phải là *vấn đề, chẩn đoán, thành phần, bằng chứng cho từng thành phần*, không phải *tên phương pháp, danh sách module, bảng kết quả*. Trong introduction, đoạn khoảng trống nêu các nút thắt (*bottleneck*) đã được đo; đoạn phương pháp nối mỗi thành phần với đúng một nút thắt; đoạn kết quả nhắc ablation như bằng chứng rằng mỗi thành phần làm đúng việc của nó. Trong phần Method, mỗi tiểu mục mở đầu bằng triệu chứng đo được, rồi mới đến thiết kế. Phương pháp nên có một tên hoặc không có tên, thay vì mỗi module một tên viết tắt; tên viết tắt cho từng module khiến reviewer đếm module, và đếm module là bước đầu tiên của nhận xét "a combination of existing techniques". Bảng ablation nên có cả cột add-one-in lẫn cột leave-one-out, kèm caption giải thích cách đọc. Với paper theo kiểu recipe, một hình lộ trình như của ConvNeXt thường thay được cả một trang văn.

<div class="bad" markdown>
*"We propose a novel framework, [Name], consisting of a multi-scale attention module (MSA), a boundary-aware loss (BAL), a structure-preserving augmentation (SPA) and an improved training strategy. Extensive experiments show that [Name] achieves state-of-the-art performance on ADE20K."*

Câu này liệt kê bốn thứ mà không nói thứ nào giải quyết vấn đề gì, gộp recipe vào như một "module", và kết thúc bằng một claim mà reviewer sẽ hỏi ngay: so với baseline dùng cùng recipe thì sao?
</div>

<div class="good" markdown>
*"We identify two bottlenecks that limit current segmentation models on cluttered scenes: context is aggregated after thin structures have already been erased by downsampling, and the training loss weights boundary pixels no differently from interior pixels. Each component of our method addresses one bottleneck. Under an identical training recipe for all methods, removing either component erases most of its corresponding gain on boundary F-score (Table 4), while their effects on overall mIoU are largely additive."*

Câu này nêu hai nút thắt, nối mỗi thành phần với một nút thắt, chỉ ra phép đo cơ chế (boundary F-score) và khẳng định trước rằng so sánh dùng recipe như nhau.
</div>

Khi một thành phần hóa ra đóng góp ít, cách viết trung thực theo kiểu Rainbow vừa chính xác vừa có lợi: *"In our combination, component D contributes little on aggregate (Table 5). We hypothesize that its effect is largely subsumed by component B, since both reduce boundary errors; consistent with this, D alone improves boundary F-score by a margin similar to B alone (Table 6)."* Reviewer đọc câu này như dấu hiệu nhóm tác giả hiểu hệ thống của họ, điều mà một bảng toàn số dương không làm được.

Reviewer ở ba cộng đồng phản ứng với paper ghép theo những cách khác nhau. Reviewer **Computer Vision** tương đối cởi mở với hệ thống ghép nếu kết quả mạnh và bảng ablation đầy đủ, nhưng những nhận xét như *"incremental"*, *"engineering effort"* hay *"a bag of tricks"* xuất hiện ngay khi ablation thiếu hoặc khi so sánh không cùng backbone và pre-training; họ cũng đánh giá cao kiểu hình lộ trình từng bước. Reviewer **NLP** thường hỏi cải thiện có giữ được trên nhiều dataset, nhiều ngôn ngữ không, có ý nghĩa thống kê không, và một lựa chọn đơn giản hơn, chẳng hạn chỉ dùng thành phần mạnh nhất hoặc prompt một LLM mạnh, có đạt kết quả tương tự không; một paper ghép thiếu phân tích dễ được khuyên chuyển sang Findings. Reviewer **Machine Learning** hỏi về nguyên lý: vì sao tổ hợp này hoạt động, nó có đúng ngoài một miền dữ liệu không. Một hệ thống lắp ghép không có nguyên lý là một trong những nguyên nhân phổ biến dẫn tới nhận xét *"more suitable for CVPR/ACL"*, như đã phân tích trong bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md). Với cộng đồng này, một thí nghiệm có kiểm soát cô lập cơ chế của từng thành phần, kể cả trên bài toán đồ chơi, thường thuyết phục hơn thêm một benchmark.

### Điều không được làm

Có hai ranh giới không được vượt qua. Thứ nhất, **không nhận mọi thành phần là mới**. Nếu attention đa tỉ lệ hay loss đường biên đã có trong công trình trước, paper phải trích dẫn và mô tả chúng là thành phần được *sử dụng*, rồi nói rõ phần mới nằm ở đâu: một cải biên cụ thể, một cách kết hợp có lý do, hay hiểu biết về tương tác. Reviewer trong lĩnh vực nhận ra thành phần quen thuộc rất nhanh, và một claim novelty sai cho một thành phần đã có làm giảm lòng tin vào mọi claim khác. Thứ hai, **không áp dụng mẹo huấn luyện chỉ cho phương pháp đề xuất mà không áp dụng cho baseline**. Như ví dụ ConvNeXt cho thấy, riêng recipe đã có thể đáng vài điểm; một so sánh trong đó phương pháp đề xuất có lịch dài, EMA và augmentation mạnh còn baseline dùng cấu hình mặc định không chứng minh được điều gì về phương pháp. Nếu một mẹo không áp dụng được cho baseline, cần báo cáo phương pháp cả khi có và khi không có mẹo đó. Ngoài ra, không sắp xếp lại thứ tự trong bảng cộng dồn chỉ để thành phần muốn nhấn mạnh trông có tác động lớn nhất. Các phép thử ranh giới này được tổng hợp trong bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 7: Thêm dataset, pipeline, recipe hay benchmark vào danh sách đóng góp cho "đủ"

### Nhận diện

Một nhóm tác giả làm hỏi đáp pháp luật tiếng Việt bằng phương pháp retrieval-augmented (ví dụ giả định). Phương pháp chính cải thiện khoảng 1,5 điểm F1 trên một dataset, một mức mà nhóm cảm thấy "thiếu thiếu" cho một paper ở hội nghị lớn. Trong quá trình làm, nhóm đã thu thập khoảng năm mươi nghìn văn bản pháp luật từ web, viết một pipeline làm sạch và tách điều khoản, nhờ hai sinh viên gán nhãn khoảng hai nghìn cặp câu hỏi và câu trả lời, và tình cờ thấy một lịch warmup learning rate giúp huấn luyện ổn định hơn. Bản nháp danh sách contribution vì thế có năm dòng: phương pháp; "the first large-scale Vietnamese legal QA dataset"; "a novel data processing pipeline"; "an effective training recipe"; và "extensive experiments".

Các dấu hiệu nhận diện khá rõ. Quyết định đưa dataset, pipeline và recipe vào danh sách được đưa ra *sau khi* thấy kết quả của phương pháp chính chưa đủ mạnh. Không có mục nào trong paper đánh giá chính dataset: không có độ đồng thuận gán nhãn, không có thông tin giấy phép, không có tài liệu mô tả. Pipeline được mô tả trong một đoạn, không được so sánh với cách làm nào khác. Recipe chỉ được thử trên mô hình của nhóm. Việc phát hành dữ liệu được ghi là "will be released". Và tổng thể, danh sách contribution dài hơn phần thí nghiệm ủng hộ nó. Tình huống tương tự rất phổ biến ở Computer Vision, khi một bộ ảnh tự thu thập được nâng thành "benchmark mới", và ở Machine Learning, khi một bộ môi trường thử nghiệm được nâng thành "a new evaluation suite".

### Chẩn đoán

Điều cốt lõi mà người viết thường bỏ qua là: **mỗi đóng góp được liệt kê sẽ bị đánh giá theo chuẩn của chính loại đóng góp đó**, không phải theo chuẩn nhẹ nhàng dành cho một phần phụ. Khi một reviewer đọc dòng "we construct a large-scale dataset", họ chuyển sang chế độ đánh giá dataset và mang theo toàn bộ danh sách câu hỏi của chế độ đó. Quy mô so với các dataset hiện có ra sao? Quy trình kiểm soát chất lượng là gì? Độ đồng thuận giữa người gán nhãn (*inter-annotator agreement*) bao nhiêu, đo bằng hệ số nào? Văn bản nguồn được phép sử dụng và phân phối lại theo giấy phép nào? Có tài liệu mô tả theo tinh thần *Datasheets for Datasets* không? Dữ liệu có truy cập được ngay lúc review không, ai lưu trữ và bảo trì? Người gán nhãn được tuyển và trả công thế nào, dữ liệu có chứa thông tin cá nhân không? Những câu hỏi này đã được trình bày trong mục *Dataset và benchmark* của bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) và mục *Datasets & Benchmarks track* của bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md). Một dataset hai nghìn cặp do hai sinh viên gán nhãn, chưa đo đồng thuận và chưa rõ giấy phép, không trả lời được câu nào.

Với **benchmark**, chuẩn còn khắt khe hơn, vì benchmark là một công cụ đo và công cụ đo phải đo đúng. Câu hỏi đầu tiên là *validity*: benchmark có đo đúng năng lực mà nó tuyên bố không, hay có thể được giải bằng lối tắt? Gururangan và cộng sự (NAACL 2018) cho thấy trên các dataset suy luận ngôn ngữ tự nhiên, một bộ phân loại chỉ nhìn vào câu giả thuyết đã đạt độ chính xác cao bất thường, do dấu vết để lại trong quá trình gán nhãn; McCoy và cộng sự (ACL 2019) cho thấy mô hình có thể đạt điểm cao nhờ các heuristic cú pháp nông. Câu hỏi thứ hai là *độ khó*: benchmark còn khoảng trống để phân biệt các mô hình không, hay đã gần bão hòa ngay khi ra đời? Câu hỏi thứ ba là *contamination*: dữ liệu test, đặc biệt khi thu thập từ web, có khả năng đã nằm trong dữ liệu pre-training của các mô hình ngôn ngữ lớn không? Câu hỏi thứ tư là *giá trị lâu dài*: có tập test giữ kín, có kế hoạch duy trì, có lý do để cộng đồng còn dùng nó sau vài năm không? Với **pipeline dữ liệu**, chuẩn là dữ liệu đầu ra tốt hơn so với các cách làm khác, được chứng minh bằng so sánh trực tiếp và ablation từng bước của pipeline. Với **training recipe**, chuẩn là một khảo sát có hệ thống: từng phần tử được ablation, được thử trên nhiều kiến trúc hoặc dataset, và được áp dụng cho cả baseline, theo đúng tinh thần của Bag of Tricks và ConvNeXt ở Tình huống 6.

Hệ quả thứ hai của việc độn đóng góp ít được nhận ra hơn: nó **mở thêm mặt trận cho reviewer và làm loãng thông điệp**. Một review thường có danh sách điểm yếu, và meta-review của Area Chair thường tổng hợp những điểm yếu được nhiều reviewer nhắc tới. Một dòng contribution yếu cung cấp sẵn một điểm yếu dễ viết, có căn cứ rõ ràng: *"The dataset contribution is not substantiated: no agreement statistics, no license information, and the data is not available for review."* Điểm yếu này giờ đứng cạnh, và kéo xuống, đánh giá về phương pháp chính. Trong khi đó, nếu cùng bộ dữ liệu ấy được trình bày khiêm tốn như một tài nguyên được phát hành kèm, nó thường được ghi nhận ở phần điểm mạnh. Cùng một vật, hai cách trình bày, hai tác động ngược nhau. Về thông điệp, một abstract với năm đóng góp không cho người đọc biết điều gì cần nhớ, Figure 1 không thể phục vụ cả năm, và giới hạn trang bị chia nhỏ đến mức không đóng góp nào được trình bày đủ sâu.

Trước khi chọn lối ra, nhóm tác giả nên tự trả lời bốn câu hỏi. Phần bổ sung có mới với *cộng đồng* không, hay chỉ mới với nhóm? Nếu được làm cho tới nơi, nó có đứng được như một paper riêng không? Nhóm có đủ tài nguyên để đưa nó tới chuẩn của loại đóng góp đó trước deadline không, chẳng hạn một vòng gán nhãn thứ hai để đo đồng thuận, kiểm tra giấy phép, viết datasheet? Và câu hỏi quan trọng nhất: cảm giác "thiếu thiếu" có thật sự đến từ việc thiếu *số lượng* đóng góp, hay từ việc đóng góp chính chưa được khai thác đủ *sâu*?

### Các lối ra

**Lối ra thứ nhất: chọn một đóng góp chính, phần còn lại là supporting artifacts.** Đây là lối ra phù hợp nhất cho đa số trường hợp. Danh sách contribution chỉ giữ những gì được chứng minh đầy đủ, còn dataset, code, pipeline và cấu hình huấn luyện được nêu trong một câu ngay sau danh sách, theo khuôn "we release …", và được mô tả đủ chi tiết để tái lập ở phần Experimental Setup hoặc appendix. Lối ra này phù hợp khi phần bổ sung hữu ích nhưng chưa được đánh giá theo chuẩn của loại đóng góp đó. Bằng chứng cần thiết rất ít: một mô tả rõ ràng và khả năng truy cập thật. Lợi ích kép là reviewer vẫn ghi nhận tài nguyên, trong khi không có claim nào để tấn công.

**Lối ra thứ hai: nếu dataset thật sự có giá trị, làm cho tới nơi, kể cả thành một paper riêng.** Đôi khi trong quá trình làm, nhóm tác giả nhận ra rằng thứ có giá trị nhất không phải phương pháp mà là dữ liệu, chẳng hạn vì chưa có tài nguyên nào cho bài toán đó ở ngôn ngữ hoặc miền đó. Khi đó có hai cách làm hợp lệ. Cách thứ nhất là đảo trọng tâm: dataset trở thành đóng góp chính, phương pháp trở thành một baseline mạnh, và paper được viết theo chuẩn của paper tài nguyên, với phân tích dữ liệu, độ đồng thuận, baseline đa dạng và phân tích điều mà dataset làm lộ ra về các mô hình hiện có. Cách thứ hai là tách dataset thành một paper riêng, nộp ở nơi đánh giá đúng loại đóng góp này: NeurIPS Datasets and Benchmarks Track (có từ năm 2021), các track về tài nguyên và đánh giá thường có ở các hội nghị thuộc hệ ACL, hoặc main track của CVPR, nơi dataset paper khá phổ biến. Cả hai cách đều đòi hỏi đầu tư thật, thường thêm vài tuần đến vài tháng. Nếu không có nguồn lực đó, lối ra thứ nhất là lựa chọn trung thực. Trường hợp dữ liệu không thể công bố vì lý do pháp lý hay quyền riêng tư được bàn riêng ở Tình huống 33 trong bài [Bài toán, dữ liệu và phạm vi](bai-toan-va-pham-vi.md).

**Lối ra thứ ba: chỉ đưa recipe vào danh sách khi nó đã được nghiên cứu có hệ thống.** Một lịch warmup giúp mô hình của nhóm ổn định hơn là một chi tiết cài đặt hữu ích, thuộc về bảng hyperparameter trong appendix. Nó trở thành đóng góp khi trả lời được các câu hỏi mà Bag of Tricks đã trả lời: từng phần tử đóng góp bao nhiêu, có đúng trên các kiến trúc và dataset khác không, có chuyển giao sang tác vụ khác không, và ở đâu thì nó không còn tác dụng. Nếu recipe đóng vai trò lớn trong cải thiện cuối cùng, nó còn phải được áp dụng cho baseline, như đã phân tích ở Tình huống 6; nếu không, nó không phải là đóng góp mà là một yếu tố gây nhiễu.

**Lối ra thứ tư: đào sâu đóng góp chính thay vì độn thêm.** Rất thường, cảm giác "thiếu thiếu" đến từ việc paper thiếu *hiểu biết*, không phải thiếu *hạng mục*. Số trang dành cho ba đóng góp phụ có thể được dùng cho những thứ làm đóng góp chính dày lên: phân tích vì sao phương pháp hoạt động, phép đo cơ chế, phân tích lỗi theo loại (được reviewer NLP đặc biệt đánh giá cao), các chế độ dữ liệu khác nhau, kiểm tra trên một dataset thứ hai, hoặc một thí nghiệm có kiểm soát cô lập insight (được reviewer ML đánh giá cao). Trong ví dụ hỏi đáp pháp luật, câu hỏi "lỗi đến từ khâu truy xuất hay khâu đọc hiểu" có thể biến một mức cải thiện 1,5 điểm thành một phát hiện đáng giá về bản chất của bài toán. Các bài [Khi con số không đẹp](con-so-khong-dep.md) và [Khi câu chuyện và bằng chứng không khớp](cau-chuyen-va-bang-chung.md) bàn cách làm việc với một kết quả chính còn mỏng. Nếu sau khi đào sâu vẫn không tìm ra hiểu biết nào, lối ra trung thực là lùi sang chu kỳ sau thay vì nộp một paper được độn.

**Lối ra thứ năm: áp phép thử "xóa dòng" cho từng contribution.** Trước khi chốt danh sách, với mỗi dòng, hãy hỏi: *nếu xóa dòng này khỏi danh sách contribution, reviewer có thấy thiếu không?* Câu trả lời rơi vào một trong ba trường hợp. Nếu reviewer sẽ thấy thiếu, vì dòng đó chứa một điều mới mà phần còn lại không nói, thì giữ, và kiểm tra lại bằng chứng cho nó. Nếu reviewer sẽ không nhận ra sự vắng mặt của nó, vì nó lặp lại một dòng khác hoặc chỉ mô tả một phần việc, thì chuyển nó thành supporting artifact hoặc xóa. Nếu reviewer sẽ *nhẹ nhõm* khi nó biến mất, vì nó là một claim mà họ đã định phản bác, thì xóa ngay, và cân nhắc xem có cần nhắc tới nó ở đâu khác không.

!!! tip "Làm phép thử xóa dòng với một người ngoài"
    Phép thử hiệu quả nhất khi được làm bởi một đồng nghiệp không tham gia dự án. Đưa cho người đó abstract và danh sách contribution, xóa lần lượt từng dòng, và hỏi bản nào thuyết phục hơn. Người trong nhóm thường gắn bó với từng phần việc đã làm, nên khó nhận ra dòng nào đang làm yếu cả danh sách.

### Viết thế nào

Danh sách contribution là thứ reviewer đọc lại khi viết phần tóm tắt và phần điểm mạnh của review, và là thứ họ đối chiếu với thí nghiệm. Vì vậy, danh sách tốt có ít dòng, mỗi dòng là một claim kiểm chứng được kèm nơi chứa bằng chứng, và các tài nguyên phát hành kèm được tách khỏi danh sách. So sánh hai phiên bản dưới đây cho ví dụ hỏi đáp pháp luật.

<div class="bad" markdown>
*In summary, our contributions are as follows:*

- *We propose [Name], a novel retrieval-augmented framework for Vietnamese legal question answering.*
- *We construct the first large-scale Vietnamese legal QA dataset.*
- *We design a novel data processing pipeline for legal documents.*
- *We introduce an effective training recipe for retrieval-augmented models.*
- *Extensive experiments demonstrate that [Name] significantly outperforms state-of-the-art methods.*

Năm dòng mở năm mặt trận: dòng hai sẽ bị chấm theo chuẩn dataset (đồng thuận, giấy phép, phát hành), dòng ba và dòng hai thực chất là một đóng góp đếm hai lần, dòng bốn chưa được thử trên mô hình nào khác, và dòng năm chứa ba từ cần bằng chứng riêng (xem Tình huống 10).
</div>

<div class="good" markdown>
*In summary, our contributions are as follows:*

- *We show that retrieval, not reading, accounts for most failures of current QA systems on Vietnamese statutes, because questions refer to provisions through cross-references that both lexical and dense retrievers miss (Sec. 3).*
- *Based on this analysis, we propose [Name], which resolves cross-references before retrieval. It reduces retrieval failures by [x]% and improves answer F1 by [y] points on two benchmarks, with consistent gains across three retrievers (Sec. 4–5).*

*To support future work, we release our document corpus together with its source licenses, the cleaning scripts, and the 2K question–answer pairs used for evaluation (Appendix B).*

Hai dòng, một câu chuyện: một phát hiện về bản chất bài toán và một phương pháp xuất phát từ phát hiện đó; dữ liệu và code trở thành tài nguyên được ghi nhận mà không phải là claim cần bảo vệ.
</div>

Với recipe, sự khác biệt giữa một dòng độn và một đóng góp thật nằm ở chỗ dòng đó hứa một *hiểu biết* có kiểm chứng hay chỉ hứa một *thứ*.

<div class="bad" markdown>
*"We introduce an effective training recipe that substantially boosts performance."*

Reviewer sẽ hỏi: hiệu quả so với gì, trên mô hình nào, phần tử nào của recipe tạo ra hiệu quả, và baseline có được dùng recipe này không.
</div>

<div class="good" markdown>
*"We systematically evaluate eight training refinements on three architectures and two downstream tasks, and identify which refinements transfer to dense prediction and which hurt it (Sec. 4)."*

Dòng này hứa một khảo sát có phạm vi rõ ràng, và lời hứa về những phần tử "gây hại" cho thấy nhóm tác giả báo cáo cả kết quả không thuận lợi.
</div>

Về cách các cộng đồng đón nhận, reviewer **NLP** đánh giá cao tài nguyên, đặc biệt cho ngôn ngữ ít tài nguyên, nhưng cũng soi kỹ các câu hỏi về giấy phép, mục đích sử dụng và người gán nhãn trong Responsible NLP checklist (xem bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md)); một dataset được nhắc như đóng góp mà thiếu các thông tin này gần như chắc chắn bị nêu. Reviewer **Computer Vision** quen với dataset paper ở main track và đánh giá chúng qua quy mô, chất lượng chú thích và kết quả của các baseline mạnh; một "benchmark" chỉ có vài trăm ảnh tự chụp thường bị coi là tập đánh giá nội bộ. Ở **Machine Learning**, sự tồn tại của Datasets and Benchmarks Track khiến reviewer main track đôi khi cho rằng một đóng góp chủ yếu về dữ liệu nên được nộp ở track đó, nên paper main track cần làm rõ đóng góp chính về phương pháp hay hiểu biết nằm ở đâu.

### Điều không được làm

Hai điều không được làm. Thứ nhất, **không nhận dataset là đóng góp mà không phát hành nó**. Một dataset không truy cập được thì không thể được đánh giá, không thể được dùng, và theo nghĩa đó chưa phải là đóng góp cho cộng đồng. Lời hứa "will be released upon acceptance" ngày càng bị reviewer xem nhẹ, và nhiều hội nghị, đặc biệt ở các track dành cho dataset, những năm gần đây yêu cầu dữ liệu truy cập được ngay lúc review; cần kiểm tra Call for Papers của năm nộp. Nếu dữ liệu không thể phát hành, hãy mô tả nó trung thực như dữ liệu đánh giá có hạn chế truy cập, và bỏ nó khỏi danh sách contribution. Thứ hai, **không đếm một đóng góp hai lần**: pipeline và dataset do chính pipeline đó tạo ra, phương pháp và "the first application of" chính phương pháp đó, hay một dòng kết quả SOTA và một dòng "extensive experiments" nói cùng một điều. Một dòng về bằng chứng tổng hợp kết quả chính là hợp lệ, như khuôn trong bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md); vấn đề chỉ nảy sinh khi cùng một ý xuất hiện dưới hai cái tên. Reviewer nhận ra việc đếm hai lần rất nhanh, và họ đọc nó như một nỗ lực làm paper trông dày hơn thực tế. Bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md) xếp những hành vi này vào vùng xám cần tránh.

## Tình huống 8: Một paper chứa hai paper

### Nhận diện

Một nhóm Machine Learning làm về ước lượng độ bất định (ví dụ giả định). Nửa đầu dự án phân tích trên mô hình tuyến tính và cho thấy một phương pháp hiệu chỉnh xác suất phổ biến trở nên kém tin cậy khi phân phối nhãn dịch chuyển. Nửa sau phát triển một phương pháp ensemble nhẹ hơn, giải quyết một vấn đề khác là chi phí suy luận. Bản nháp chia đều chín trang cho hai phần, và review lần trước phản ánh đúng sự chia đôi: một reviewer muốn phần phân tích sâu hơn và hỏi vì sao có phương pháp ensemble, reviewer khác muốn thêm baseline cho phương pháp và coi phần phân tích là lạc đề. Dấu hiệu: không viết được *câu chuyện một dòng* theo khuôn của bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md) mà không dùng "and also"; có hai ứng viên cho Figure 1; Related Work tách thành hai khối không liên quan; và xóa hẳn nửa này thì kết luận của nửa kia không đổi.

### Chẩn đoán

Tình huống xảy ra vì dự án tiến hóa theo thời gian, cả hai nửa đều tốn công, và nhóm sợ mỗi nửa đứng riêng thì quá mỏng. Kết quả là hai claim lớn, mỗi claim chỉ có một nửa số trang và một nửa bằng chứng. Câu hỏi then chốt là **hai nửa có phụ thuộc vào nhau không**. Nếu nửa đầu là chẩn đoán dẫn tới thiết kế của nửa sau, đó là *một* paper hai phần và vấn đề chỉ nằm ở cách viết: phân tích hiện tượng suy giảm độ chính xác khi mạng sâu hơn và phương pháp học phần dư trong [ResNet](../05-case-studies/resnet.md) là hai bước của cùng một lập luận. Segment Anything (ICCV 2023) đóng góp cùng lúc một tác vụ, một mô hình và một bộ dữ liệu rất lớn, nhưng ba phần cần nhau: tác vụ định nghĩa mô hình, mô hình vận hành data engine, data engine sinh dữ liệu huấn luyện mô hình. Nếu hai nửa độc lập, paper thực chất là hai paper mỗi cái một nửa bằng chứng. Để chọn lối ra, cần so sánh hai nửa về độ mạnh của bằng chứng, cộng đồng người đọc, khả năng chuyển giao của hiểu biết, và công sức cần để hoàn thiện mỗi nửa.

### Các lối ra

**Lối ra thứ nhất: chọn một câu chuyện.** Phù hợp khi một nửa rõ ràng mạnh hơn hoặc chỉ đủ nguồn lực hoàn thiện một nửa trước deadline. Nửa còn lại có thể thành một mục ngắn phục vụ câu chuyện chính, chuyển xuống appendix, hoặc được để dành. Cái giá là một phần công sức tạm chưa được ghi nhận; cái lợi là một thông điệp rõ.

**Lối ra thứ hai: tách thành hai paper, mỗi paper có bằng chứng đầy đủ.** Phù hợp khi cả hai nửa có giá trị độc lập và nhóm sẵn sàng hoàn thiện cả hai: paper phân tích mở rộng ra nhiều phương pháp hiệu chỉnh, nhiều kiểu dịch chuyển và dataset; paper phương pháp có đủ baseline và ablation. Hai paper như vậy *không* phải cắt lát (Tình huống 9), vì mỗi paper có một claim độc lập, một bộ bằng chứng riêng và được trích dẫn vì lý do khác nhau. Nếu nộp gần nhau, cần tuân thủ quy định về overlapping submission và cách tự trích dẫn khi ẩn danh ở Tình huống 9.

**Lối ra thứ ba: đưa phần còn lại vào appendix hoặc bản journal.** Appendix phù hợp khi nửa phụ có giá trị bổ sung và phần chính tự đứng được mà không cần nó. Một lựa chọn khác là để dành nửa phụ cho bản mở rộng ở journal, vì nội dung mới đáng kể chính là thứ journal đòi hỏi; chính sách cụ thể khác nhau giữa các journal (xem bài [AAAI / IJCAI / KDD / Journal](../06-cong-dong/khac.md)).

**Lối ra thứ tư: tái cấu trúc thành một mạch phụ thuộc, khi sự phụ thuộc là có thật.** Nếu phương pháp ensemble hóa ra cũng tránh được cơ chế lỗi mà phần phân tích chỉ ra, paper có thể viết lại theo mạch chẩn đoán, thiết kế dựa trên chẩn đoán, rồi thí nghiệm kiểm tra cả hiệu quả lẫn cơ chế. Một câu chuyển ý khéo léo thì không làm hai nửa độc lập phụ thuộc vào nhau, và reviewer sẽ nhận ra.

### Viết thế nào

Abstract là nơi lộ rõ nhất, và cũng là nơi sửa hiệu quả nhất.

<div class="bad" markdown>
*"In this paper, we make two contributions. First, we show that temperature scaling becomes unreliable under label shift, and we analyze this phenomenon in a linear model. Second, we propose [Name], an efficient ensembling method that reduces inference cost by 4× while matching the accuracy of deep ensembles."*

"First" và "Second" báo cho reviewer biết họ sắp đọc hai paper ngắn, và không có gì giải thích vì sao hai phát hiện này nằm chung một chỗ.
</div>

<div class="good" markdown>
*"Post-hoc calibration methods such as temperature scaling are widely used to make predictions trustworthy, yet we show that they become unreliable under label shift. A linear-model analysis explains why: a single temperature cannot correct a miscalibration whose direction depends on the class prior. We validate this prediction across five calibration methods, three types of label shift and four datasets, and show that methods which estimate the class prior at test time avoid the failure."*

Abstract chọn một câu chuyện và dồn toàn bộ bằng chứng cho nó; phương pháp ensemble được để dành cho một paper nơi nó được so sánh đầy đủ.
</div>

Nửa chuyển xuống appendix cần một câu định vị để reviewer không coi nó là claim cần chấm: *"Appendix E reports a complementary observation on inference cost, which is not required for our main claims."* Reviewer **Computer Vision** và **NLP** phản ứng mạnh với paper thiếu tập trung vì tám trang không đủ chỗ cho hai câu chuyện; nhận xét *"the paper tries to do too much"* khá thường gặp ở NLP. Reviewer **Machine Learning** quen với appendix dài hơn, nhưng phần chính vẫn phải tự đứng được, và nửa paper bị đẩy hết xuống appendix không được tính là đóng góp đã chứng minh.

### Điều không được làm

Không tách thành hai paper mà mỗi paper dựa vào bằng chứng chưa công bố của paper kia mà không khai báo. Không lặp lại cùng một bộ thí nghiệm trong cả hai paper để mỗi paper trông đầy đủ hơn. Và không giữ cả hai nửa trong một paper rồi mô tả mỗi nửa như một đóng góp lớn đã được chứng minh trọn vẹn.

## Tình huống 9: Cắt một dự án thành nhiều paper nhỏ

### Nhận diện

Một nhóm Computer Vision phát triển phương pháp tỉa token (*token pruning*) cho video transformer, hoạt động tốt trên nhận dạng hành động, truy xuất video và hỏi đáp trên video (ví dụ giả định). Nghiên cứu sinh trong nhóm cần đủ số paper để tốt nghiệp, nên kế hoạch là ba paper: nhận dạng hành động nộp CVPR, "tỉa token thích nghi" với chỉnh sửa nhỏ cho truy xuất nộp ECCV, hỏi đáp video nộp một hội nghị NLP. Ba paper có phần Method gần như giống hệt nhau, khác biệt chủ yếu ở dataset. Hiện tượng này thường được gọi là *salami slicing*, cắt một kết quả thành nhiều lát mỏng, hay tư duy *least publishable unit*, đơn vị nhỏ nhất có thể vượt qua vòng review. Dấu hiệu: kế hoạch được lập bằng cách đếm deadline chứ không đếm câu hỏi nghiên cứu; danh sách contribution của các paper mở đầu giống nhau; và khó trả lời "người đọc sẽ trích dẫn paper thứ hai vì điều gì mà không thể trích dẫn paper thứ nhất?".

### Chẩn đoán

Động cơ thường đến từ bên ngoài: yêu cầu tốt nghiệp, tiêu chí tuyển dụng hay xét duyệt tính theo số lượng (xem bài [Áp lực từ bên ngoài](ap-luc-ben-ngoai.md)). Một dự án lớn sinh ra nhiều paper không có gì sai; vấn đề nằm ở *cách* tách. Salami slicing gây hại theo ba cách: người đọc phải đọc ba paper để có một kết quả; mỗi lát mỏng hơn nên dễ bị reject hơn, trong khi một paper hợp nhất có bằng chứng qua ba tác vụ mạnh hơn hẳn, nhất là trước reviewer ML; và cùng một kết quả báo cáo nhiều lần có thể bị các bài tổng quan đếm như nhiều bằng chứng độc lập. Câu hỏi cần trả lời: mỗi paper có trả lời một câu hỏi *khác* và có bộ bằng chứng đầy đủ của riêng nó không, claim của paper sau có đứng được mà không cần bằng chứng của paper trước không, và paper hợp nhất có mạnh hơn đáng kể tổng các phần không?

### Các lối ra

**Lối ra thứ nhất: tách khi mỗi paper có một claim độc lập.** Ví dụ hợp lệ: paper thứ nhất đề xuất phương pháp và chứng minh nó trên nhiều tác vụ; paper thứ hai, nếu nhóm phát hiện các benchmark video cho phép trả lời nhiều câu hỏi chỉ từ một khung hình, là một paper phân tích benchmark với bằng chứng riêng. Phép thử: nếu cả hai cùng được công bố, người đọc kỹ có cảm giác đã đọc cùng một paper hai lần không?

**Lối ra thứ hai: gộp thành một paper mạnh hơn.** Khi các phần chỉ khác nhau ở dataset hay tác vụ, gộp lại thường là lựa chọn chiến lược tốt nhất, vì bằng chứng trên ba tác vụ biến một kết quả cục bộ thành một claim tổng quát. Những người đánh giá hồ sơ thường đọc vài paper tiêu biểu nhất chứ không chỉ đếm danh sách.

**Lối ra thứ ba: nối tiếp theo thời gian với một câu hỏi mới.** Sau khi paper đầu được công bố, paper tiếp theo hoàn toàn hợp lệ nếu nó trả lời câu hỏi mới bằng bằng chứng mới, chẳng hạn một thiết lập mà phương pháp gốc thất bại và lý do. Paper sau trích dẫn paper trước, nêu rõ phần mới, và không trình bày lại thí nghiệm cũ như kết quả mới.

Dù chọn lối ra nào, ba vấn đề thủ tục cần được xử lý. Về **dual submission và overlapping submission**, quy định khác nhau giữa các hội nghị và thay đổi theo năm; nhìn chung, nộp cùng lúc hai paper chồng lấn đáng kể, kể cả vào cùng một hội nghị, có thể bị coi là vi phạm, và một số nơi yêu cầu trích dẫn các bài nộp liên quan, giải thích khác biệt và đính kèm bản ẩn danh của chúng. Về **tự trích dẫn khi paper còn ẩn danh**, công trình trước của nhóm phải được trích dẫn ở ngôi thứ ba; nếu nó chưa công khai, một số hội nghị cho phép trích dẫn dưới tên "Anonymous" kèm bản ẩn danh trong tài liệu bổ sung. Bài [Chuẩn bị nộp bài](../04-nop-va-sau-nop/submission.md) trình bày chi tiết cả hai vấn đề, và bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md) nhấn mạnh rằng viết lại framing không biến một paper thành paper khác. Về **uy tín**, nhóm reviewer của một tiểu lĩnh vực hẹp không lớn, hai paper chồng lấn dễ rơi vào tay cùng một người, và khi bị phát hiện, hậu quả có thể là desk reject cả hai, cộng thêm các biện pháp khác tùy chính sách hội nghị, kèm một ấn tượng xấu kéo dài hơn mọi lần reject.

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

Từ ngữ thổi phồng đến từ áp lực phải trông mới mẻ, niềm tin rằng tính từ mạnh tạo ấn tượng, và với người viết không phải bản ngữ, thói quen bắt chước cụm từ trong các paper khác. Điều bị bỏ qua là: **với reviewer, mỗi từ mạnh là một claim có nội dung ngầm** và được chấm như mọi claim khác. "First" là một claim phủ định tồn tại: chỉ cần *một* phản ví dụ là đổ, mà reviewer được chọn vì am hiểu chủ đề nên là người dễ biết phản ví dụ nhất, và chữ "first" thôi thúc họ đi tìm. "To the best of our knowledge" không cứu được claim khi phản ví dụ hiện ra sau một truy vấn tìm kiếm đơn giản; khi đó nó chỉ cho thấy hiểu biết của nhóm chưa đủ rộng. "Novel" không mang thông tin kiểm chứng được. "Significantly", trong paper ML và NLP, được hiểu là đã có kiểm định thống kê, như bài [Experiments](../02-viet-tung-phan/experiments.md) đã cảnh báo. "State-of-the-art" ngầm chứa nhiều điều kiện: benchmark nào, so với ai, cùng backbone và dữ liệu không, tính đến thời điểm nào. "Solve" ngầm nói bài toán không còn lỗi đáng kể.

Lipton và Steinhardt xếp *lạm dụng ngôn ngữ* (*misuse of language*) vào bốn xu hướng đáng lo ngại và chỉ ra ba con đường của nó: *định nghĩa gợi ý*, đặt cho khái niệm kỹ thuật một cái tên mang hàm ý thông thường để lén đưa vào hàm ý chưa được chứng minh; *quá tải thuật ngữ*, dùng một thuật ngữ kỹ thuật chính xác theo nghĩa lỏng hơn; và *từ vali* (*suitcase words*) như "interpretability" hay "generalization", chứa nhiều nghĩa khiến hai paper tưởng đối thoại mà thực ra nói về hai thứ. Họ cũng cảnh báo về claim "ngang tầm con người" phát biểu lỏng lẻo, và về việc định nghĩa lại một bài toán khó thành dự đoán đúng trên một dataset cụ thể, khiến tuyên bố "giải được" che giấu tiến bộ thật còn hạn chế. Trước khi sửa, với mỗi từ mạnh, cần hỏi: claim ngầm là gì, bằng chứng có ủng hộ đúng claim đó không, phạm vi nhỏ nhất mà claim chắc chắn đúng là gì, và quy trình tìm kiếm ba tầng trong bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) có tìm ra phản ví dụ không.

### Các lối ra

**Lối ra thứ nhất: khoanh vùng claim bằng các điều kiện làm nó đúng.** Claim "đầu tiên" đứng vững khi phạm vi được phát biểu chính xác: thiết lập nào, giả định nào, khác với công trình gần nhất ở điều kiện nào. Lối ra này phù hợp khi khác biệt là thật và phát biểu được thành điều kiện; bằng chứng cần có là một cuộc tìm kiếm có hệ thống và phần Related Work phân tích các công trình gần nhất theo đúng những điều kiện đó.

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

Không giữ chữ "first" sau khi đã biết có phản ví dụ, và càng không được bỏ trích dẫn phản ví dụ đó để claim trông đứng vững; đó là che giấu công trình liên quan, một sai phạm chứ không còn là văn phong. Không dùng "significantly" theo nghĩa nước đôi với hy vọng người đọc hiểu là có ý nghĩa thống kê. Không định nghĩa lại bài toán thành phiên bản dễ hơn rồi tuyên bố đã "giải" bài toán ban đầu. Ranh giới giữa văn phong tự tin và ngôn từ đánh lừa được bàn trong bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tổng hợp: mỗi dòng contribution là một lời hứa

Năm tình huống trong bài, dù ở những cấp rất khác nhau, đều quy về một cơ chế: người viết liệt kê một thứ, và reviewer chấm thứ đó theo chuẩn của loại của nó. Một thành phần trong phương pháp được chấm bằng ablation, một dataset được chấm bằng chuẩn dataset, một chữ "first" được chấm bằng việc có hay không có phản ví dụ. Vì vậy, trước khi chốt danh sách contribution, việc hữu ích nhất là đối chiếu từng dòng với chuẩn mà nó sẽ phải đối mặt. Bảng dưới đây tổng hợp đối chiếu đó cho các loại đóng góp thường gặp trong bài. Cột cuối ghi bằng chứng *tối thiểu*, tức là điều kiện cần để dòng đó không trở thành một điểm yếu, chứ không phải điều kiện đủ để paper được nhận.

| Đóng góp được liệt kê | Chuẩn reviewer sẽ dùng | Bằng chứng tối thiểu |
|---|---|---|
| Phương pháp mới (một ý tưởng chính) | Cải thiện có thật, so sánh cân sức, thiết kế có lý do | Baseline mạnh chạy cùng điều kiện; ablation; nhiều seed khi kết quả dao động |
| Phương pháp ghép nhiều thành phần | Mỗi thành phần cần thiết và có vai trò rõ | Leave-one-out và add-one-in; kiểm tra tương tác các cặp nghi ngờ; cùng recipe cho mọi phương pháp |
| Phát hiện, phân tích | Đúng, tổng quát, đã loại trừ giải thích thay thế | Thí nghiệm có kiểm soát; nhiều mô hình hoặc dataset; ít nhất một giải thích thay thế được kiểm tra |
| Dataset | Chất lượng, hữu ích, hợp pháp, truy cập được | Quy trình gán nhãn và độ đồng thuận; so sánh với dataset hiện có; giấy phép; tài liệu mô tả; dữ liệu truy cập được khi review |
| Benchmark | Đo đúng thứ cần đo, còn khoảng trống, dùng được lâu dài | Phân tích lối tắt và dấu vết gán nhãn; baseline mạnh chưa bão hòa; thảo luận hoặc kiểm tra contamination; kế hoạch duy trì |
| Pipeline dữ liệu | Tạo ra dữ liệu tốt hơn các cách làm khác | So sánh đầu ra với pipeline thay thế; ablation từng bước; chi phí |
| Training recipe | Khảo sát có hệ thống, có chuyển giao | Ablation từng phần tử; nhiều kiến trúc hoặc dataset; áp dụng cho cả baseline; báo cáo phần tử không chuyển giao |
| Định lý, phân tích lý thuyết | Đúng, liên quan tới claim chính, giả định rõ | Phát biểu chính xác; chứng minh đầy đủ; thí nghiệm kiểm chứng dự đoán của lý thuyết |
| Claim "đầu tiên" | Không tồn tại phản ví dụ | Tìm kiếm ba tầng; phạm vi phát biểu chặt; Related Work phân tích các công trình gần nhất |
| Code, công cụ, cấu hình | Thường không được coi là đóng góp khoa học | Một câu "we release"; link ẩn danh truy cập được |
| "Extensive experiments" | Không phải đóng góp riêng | Gộp vào claim về kết quả chính |

Có ba cách dùng bảng này. Cách thứ nhất là **rà soát trước khi nộp**: với mỗi dòng trong danh sách contribution, tìm hàng tương ứng và kiểm tra bằng chứng tối thiểu đã có chưa. Nếu chưa, có ba lựa chọn: bổ sung bằng chứng, hạ dòng đó xuống thành supporting artifact, hoặc xóa nó. Đó cũng chính là ba kết quả của phép thử "xóa dòng" ở Tình huống 7. Cách thứ hai là **lập kế hoạch từ sớm**: khi biết dự án sẽ có một dataset hay một recipe, cột cuối cho biết cần dành thời gian và nguồn lực cho những gì, chẳng hạn một vòng gán nhãn thứ hai để đo đồng thuận, hay việc chạy lại baseline với recipe mới. Cách thứ ba là **đọc review**: khi một review phê bình một dòng contribution, cột giữa thường giải thích reviewer đang dùng chuẩn nào, từ đó giúp viết rebuttal đúng trọng tâm (xem bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md)).

Hai hàng cuối của bảng xứng đáng được nhấn mạnh vì chúng đi ngược trực giác của nhiều người viết. Code, công cụ và một bộ thí nghiệm lớn đều tốn rất nhiều công sức, nên người viết muốn chúng được ghi nhận như đóng góp. Chúng *được* ghi nhận, nhưng ở phần điểm mạnh về tính tái lập và độ kỹ lưỡng, không phải ở phần đóng góp khoa học. Đặt chúng vào danh sách contribution không làm chúng được ghi nhận nhiều hơn, mà chỉ làm danh sách dài hơn và thông điệp loãng hơn. Bài [Thực hành: ba dự án đi qua ngõ cụt](thuc-hanh.md) có những danh sách contribution trước và sau khi gỡ, cho thấy nguyên tắc này được áp dụng trong các dự án cụ thể.

## Tóm tắt

Một paper không mạnh lên vì có nhiều thứ; nó mạnh lên vì mỗi thứ được liệt kê đều đứng vững. Với một phương pháp ghép nhiều thành phần, việc đầu tiên là gỡ rối bằng ablation kết hợp leave-one-out, add-one-in, kiểm tra tương tác và nhiều seed, trên cùng một recipe cho mọi phương pháp; sau đó mới quyết định cắt thành phần thừa, tìm nguyên lý thống nhất trong đó mỗi thành phần trả lời một vấn đề đã chẩn đoán, viết thành nghiên cứu thực nghiệm theo kiểu Rainbow, Bag of Tricks hay ConvNeXt, hoặc đổi hình thức và venue. Mỗi dòng trong danh sách contribution bị chấm theo chuẩn của chính loại đóng góp đó, nên dataset, benchmark, pipeline và recipe chưa đạt chuẩn nên được trình bày như supporting artifacts, còn thời gian nên dành cho việc đào sâu đóng góp chính. Một paper chứa hai câu chuyện độc lập nên được thu về một câu chuyện hoặc tách thành hai paper với bằng chứng đầy đủ, khác hẳn với việc cắt lát một kết quả thành nhiều paper mỏng, vốn gây hại cho người đọc, cho tài liệu khoa học và cho chính uy tín của nhóm tác giả. Cuối cùng, mỗi từ mạnh như "first", "novel", "significantly", "state-of-the-art" hay "solve" là một claim ngầm; cách viết an toàn là khoanh vùng bằng điều kiện, thay tính từ bằng con số, hoặc bỏ hẳn từ đó và nói thẳng khác biệt.

## Bài tập

1. Lấy danh sách contribution hiện tại của dự án. Với mỗi dòng, xác định loại đóng góp theo bảng tổng hợp, kiểm tra bằng chứng tối thiểu, rồi làm phép thử "xóa dòng" cùng một đồng nghiệp ngoài nhóm. Viết lại danh sách, tách riêng câu "we release" cho các tài nguyên đi kèm.
2. Nếu phương pháp của dự án có từ ba thành phần trở lên, thiết kế một bảng ablation gồm cả cột add-one-in và leave-one-out trên một thiết lập nhỏ, với ít nhất ba seed và cùng một recipe cho baseline. Chỉ ra ít nhất một cặp thành phần có thể tương tác và đề xuất phép đo cơ chế để kiểm tra giả thuyết đó.
3. Với mỗi thành phần của phương pháp, viết một câu nêu nút thắt mà nó giải quyết và phép đo cho thấy nút thắt đó có thật ở baseline. Thành phần nào không viết được câu này cần được chuyển sang phần chi tiết cài đặt, gộp với thành phần khác, hoặc cắt bỏ.
4. Tìm trong bản nháp mọi lần xuất hiện của "first", "novel", "significantly", "state-of-the-art", "solve", "general" và "human-level". Viết lại từng câu theo một trong ba cách: khoanh vùng bằng điều kiện, thay bằng con số, hoặc bỏ hẳn. Với mỗi claim "đầu tiên" còn giữ lại, thực hiện tìm kiếm ba tầng và ghi lại kết quả.
