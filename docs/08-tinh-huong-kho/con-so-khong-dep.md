# Khi con số không đẹp

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân biệt cải thiện thật với dao động ngẫu nhiên bằng nhiều seed, khoảng tin cậy bootstrap và kiểm định ghép cặp, đồng thời tách nhiễu do seed khỏi nhiễu do dữ liệu.
    - Biến kết quả "thắng chỗ này, thua chỗ kia" thành một phân tích về điều kiện mà phương pháp phát huy tác dụng.
    - Xử lý minh bạch khi số tái lập của baseline lệch khỏi số được công bố, theo cả hai chiều.
    - Thiết kế so sánh có kiểm soát theo ngân sách tính toán, số tham số và dữ liệu.
    - Xử lý mâu thuẫn giữa metric tự động và đánh giá của con người, cũng như sự phụ thuộc của phương pháp vào việc tune hyperparameter.
    - Chọn cách diễn đạt claim tương xứng với độ mạnh của bằng chứng.

Gần như nghiên cứu sinh nào cũng trải qua khoảnh khắc này: ý tưởng đã được thẩm định, code đã chạy, nhưng bảng kết quả không như mong đợi. Cải thiện chỉ vài phần mười điểm, phương pháp thắng ba dataset nhưng thua hai, baseline chạy lại thấp hơn số trong paper gốc, hay metric tự động tăng trong khi người chấm lại thích kết quả của baseline. Những tình huống này trớ trêu vì phương pháp không hỏng hẳn, nhưng con số cũng không đủ đẹp để kể một câu chuyện đơn giản.

Bài này xem xét bảy tình huống như vậy, đánh số từ 11 tới 17 theo cách đánh số chung của chương. Các kỹ thuật nền tảng đã có ở những bài trước: mục *Số liệu và ý nghĩa thống kê* và mục *Khi tài nguyên hạn chế* trong bài [Experiments](../02-viet-tung-phan/experiments.md), mục *So sánh công bằng* trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), và mục *Khi kết quả không như mong đợi* trong bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md). Ở đây chúng ta không nhắc lại các kỹ thuật đó mà dùng chúng để ra quyết định: chẩn đoán con số đang nói gì, chọn lối ra, và viết claim vừa khít với bằng chứng.

Ý xuyên suốt cả bài là con số không đẹp hiếm khi là vấn đề tự thân; vấn đề nằm ở khoảng cách giữa điều con số chứng minh được và điều người viết muốn khẳng định. Paper bán hiểu biết chứ không bán phương pháp, nên câu hỏi đúng không phải là "làm sao cho con số đẹp lên" mà là "bộ bằng chứng này thực sự ủng hộ hiểu biết nào". Ranh giới giữa đóng khung lại hợp lệ và bóp méo bằng chứng được bàn riêng trong bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 11: Cải thiện nhỏ, nằm trong dao động giữa các lần chạy

### Nhận diện

Một nhóm đề xuất một hàm mất mát nhất quán (*consistency regularization*) mới cho học bán giám sát (*semi-supervised learning*) và đánh giá trên CIFAR-10 với 250 ảnh có nhãn, một thiết lập quen thuộc trong paper ML (ví dụ giả định). Lần chạy đầu cho độ chính xác cao hơn baseline mạnh nhất 0,6 điểm. Khi chạy lại cả hai phương pháp trên năm tập con có nhãn khác nhau, chênh lệch trung bình chỉ còn 0,3 điểm, nhỏ hơn độ lệch chuẩn giữa các lần chạy của chính phương pháp đề xuất, và ở một trong năm lần baseline thắng.

Dấu hiệu nhận biết: thứ hạng đổi chiều khi đổi seed hoặc đổi tập con; bảng chỉ đẹp với một lần chạy cụ thể; và có thôi thúc chạy thêm "vài seed nữa" cho chênh lệch rõ ra. Tinh vi hơn là khi phương pháp đề xuất được chạy năm lần còn baseline chỉ một lần, hoặc số của baseline lấy từ paper gốc.

### Chẩn đoán

Kết quả huấn luyện một mạng nơ-ron là một biến ngẫu nhiên, phụ thuộc vào khởi tạo, thứ tự dữ liệu, augmentation và cả tính không tất định trên GPU. Henderson et al. ("Deep Reinforcement Learning that Matters", AAAI 2018) cho thấy kết quả deep RL nhạy với seed, hyperparameter và chi tiết cài đặt tới mức thiếu thước đo thống kê và chuẩn báo cáo chặt chẽ thì khó biết một cải thiện có ý nghĩa hay không. Agarwal et al. (NeurIPS 2021) chỉ ra rằng khi chỉ có vài lần chạy, kết luận từ ước lượng điểm có thể khác hẳn kết luận từ khoảng tin cậy, và khuyến nghị báo cáo ước lượng khoảng. Bài học áp dụng cho mọi thiết lập dao động lớn: few-shot, fine-tune trên dataset nhỏ, học bán giám sát.

Câu hỏi chẩn đoán quan trọng nhất là **nhiễu đến từ đâu**. *Nhiễu do seed* là việc cùng phương pháp, cùng dữ liệu cho ra các mô hình khác nhau; nó trả lời câu hỏi "người khác huấn luyện lại có thấy cùng kết quả không". *Nhiễu do dữ liệu* đến từ việc tập test là một mẫu hữu hạn, và ở đây còn từ việc chọn 250 ảnh có nhãn nào; nó trả lời câu hỏi "trên một mẫu khác từ cùng phân phối, chênh lệch có còn không". Paired bootstrap trên tập test như trong bài Experiments chỉ đo loại thứ hai với một mô hình cố định, còn độ lệch chuẩn qua các seed chỉ đo loại thứ nhất. Claim "A tốt hơn B" cần vượt qua cả hai, và đó là lý do nhiều paper học bán giám sát báo cáo trung bình qua nhiều tập con có nhãn.

Tiếp theo là cách so sánh. Baseline có được chạy cùng số lần và cùng điều kiện không? Các lần chạy có được *ghép cặp*, tức seed và tập con thứ *i* dùng chung cho cả hai phương pháp? Ghép cặp loại phần dao động chung ra khỏi phép so sánh (một tập con "khó" làm cả hai cùng thấp), nên kiểm định trên hiệu số ghép cặp nhạy hơn nhiều so với so sánh hai trung bình độc lập. Ngoài ra: baseline có được tune ngang nhau không (Tình huống 16), cải thiện có tập trung ở nhóm dữ liệu nào không (Tình huống 12), và trước hết, có bug hay rò rỉ dữ liệu không?

### Các lối ra

**Lối ra thứ nhất: tăng độ phân giải của phép đo.** Chạy nhiều lần hơn cho *cả hai* phương pháp, ghép cặp, rồi báo cáo mean ± std cùng khoảng tin cậy bootstrap của hiệu số. Nếu khoảng tin cậy nằm trọn về một phía của 0, nhóm có thể khẳng định một cải thiện *nhỏ nhưng đáng tin*, và phải nói rõ nó nhỏ. Lối ra này phù hợp khi cải thiện nhỏ vẫn có ý nghĩa, chẳng hạn trên benchmark đã bão hòa, và không phù hợp khi hiệu số vẫn lẩn trong nhiễu sau nhiều lần chạy. Điều kiện là **quyết định số lần chạy từ trước**: chạy thêm tới khi p-value xuống dưới 0,05 rồi dừng là một lối rẽ không khai báo trong "khu vườn những lối rẽ" (*garden of forking paths*) mà Gelman và Loken mô tả, làm kết luận mất giá trị dù không ai cố ý.

**Lối ra thứ hai: viết "comparable" thay cho "outperforms".** Khi khoảng tin cậy chứa 0, kết luận trung thực là hai phương pháp ngang nhau về độ chính xác. Đây chưa phải ngõ cụt nếu phương pháp có ưu điểm khác được đo chặt chẽ, như rẻ hơn, đơn giản hơn hay ít hyperparameter hơn. Claim chuyển thành "ngang về độ chính xác nhưng hơn ở trục khác", và bằng chứng cho trục đó phải chặt chẽ không kém.

**Lối ra thứ ba: tìm một trục so sánh khác.** Đôi khi chính phân tích nhiễu chỉ ra trục mới: phương pháp dao động ít hơn hẳn baseline, hoặc cải thiện tăng dần khi số nhãn giảm từ 4.000 xuống 250 rồi 40. Phép thử là trục mới phải có lý do tồn tại độc lập với việc phương pháp thắng ở đó; nếu nó được chọn chỉ vì là chỗ duy nhất con số đẹp, người viết đang trượt sang vùng bàn trong bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md). Cách tìm chế độ mà phương pháp thắng được bàn kỹ ở Tình huống 1 trong bài [Khi novelty và hiệu quả lệch pha](novelty-va-hieu-qua.md).

**Lối ra thứ tư: chấp nhận rằng đây chưa phải là đóng góp.** Một cải thiện không phân biệt được với nhiễu, không kèm ưu điểm nào khác, chưa phải đóng góp. Dừng hoặc đổi hướng lúc này rẻ hơn nhiều so với nộp bài rồi nhận review "marginal improvement" qua nhiều vòng. Ngoại lệ: nếu nhóm phát hiện nhiều cải thiện *đã được công bố* trên benchmark này cũng nằm trong mức dao động, đó có thể là hạt nhân của một paper đánh giá lại theo tinh thần "A Metric Learning Reality Check" (Musgrave, Belongie, Lim; ECCV 2020), hướng tới main track nếu đủ chặt chẽ, hoặc TMLR và workshop "I Can't Believe It's Not Better!" (ICBINB) nếu phạm vi hẹp hơn.

### Viết thế nào

Cần nói rõ mỗi con số là trung bình của bao nhiêu lần chạy, ± biểu thị đại lượng gì, và các lần chạy khác nhau ở yếu tố nào. Với claim so sánh, đại lượng quan trọng là khoảng tin cậy của *hiệu số*. Cặp ví dụ dưới đây dùng số liệu minh họa của đoạn code ở cuối bài.

<div class="bad" markdown>
*"Our method significantly outperforms the strongest baseline on CIFAR-10 with 250 labels (95.1 vs. 94.8)."*

Chữ *significantly* không có kiểm định đi kèm, và chênh lệch 0,3 điểm không kèm thông tin dao động thì không chứng minh được gì.
</div>

<div class="good" markdown>
*"Over five labeled splits, our method obtains 95.1 ± 0.6 and the strongest baseline, X [12], 94.8 ± 0.2 (mean ± std). The 95% bootstrap confidence interval of the paired difference, [−0.02, 0.62], contains zero; we therefore regard the two methods as comparable in accuracy. Our method, however, removes the confidence-threshold hyperparameter and halves training time (Sec. 5.2)."*

Đoạn văn nêu rõ thiết lập, chấp nhận kết luận thống kê, rồi mới chuyển sang ưu điểm thật của phương pháp.
</div>

Reviewer ML, nhất là ở NeurIPS nơi checklist hỏi trực tiếp về error bar, thường đón nhận sự thẳng thắn này và phản ứng tiêu cực với *significantly* không có kiểm định. Reviewer NLP hay đòi kiểm định ý nghĩa khi chênh lệch nhỏ. Reviewer CV ít đòi nhiều seed trên benchmark lớn, nhưng vài phần mười AP không kèm thông tin dao động gần như chắc chắn bị gọi là "marginal".

### Điều không được làm

Không báo lần chạy tốt nhất như một lần chạy bình thường, không so giá trị tốt nhất của nhiều lần chạy với một lần chạy của baseline, không chạy thêm tới khi "có ý nghĩa" rồi dừng, không lặng lẽ đổi error bar từ độ lệch chuẩn sang sai số chuẩn cho nó trông hẹp hơn. Các hành vi này đều không qua được phép thử chung của chương: nếu reviewer được xem toàn bộ log thí nghiệm, claim có còn đứng được không?

## Tình huống 12: Thắng ở dataset này, thua ở dataset kia

### Nhận diện

Một nhóm đề xuất cơ chế truy xuất lặp cho hỏi đáp mở (*open-domain QA*), trong đó mô hình truy xuất thêm tài liệu dựa trên những gì đã đọc (ví dụ giả định). Trên sáu dataset, phương pháp thắng rõ ở ba dataset hỏi đáp nhiều bước (*multi-hop*), hòa ở một và thua nhẹ ở hai dataset tra cứu một bước. Trung bình vẫn dương, nhưng nhìn từng cột thì câu chuyện không còn là "phương pháp tốt hơn".

Dấu hiệu nhận biết: cột trung bình che đi những chênh lệch ngược chiều, chữ *consistently* không dùng được, và trong nhóm bắt đầu có người hỏi "có nhất thiết phải báo cáo hai dataset kia không". Câu hỏi đó là dấu hiệu rõ nhất.

### Chẩn đoán

Mỗi phương pháp mang một giả định về bài toán. Truy xuất lặp giả định thông tin nằm rải rác qua nhiều tài liệu; khi câu hỏi chỉ cần một đoạn văn, các bước truy xuất thêm chủ yếu đưa vào nhiễu. Kết quả hỗn hợp vì vậy thường là **bản đồ của giả định**, chỉ ra nơi nó đúng và nơi nó sai. Các dataset khác nhau ở nhiều thuộc tính: độ dài tài liệu, số bước suy luận, kích thước tập huấn luyện, nhiễu nhãn, miền, ngôn ngữ, hay dấu vết gán nhãn (*annotation artifacts*). Chẩn đoán là tìm thuộc tính tách dataset thắng khỏi dataset thua.

Trước đó cần loại trừ nguyên nhân tầm thường: chênh lệch ở dataset thua có vượt mức dao động không (áp dụng Tình huống 11), hyperparameter có được chọn trên một dataset rồi áp nguyên sang dataset khác không, hay có lỗi cài đặt như cắt ngắn đầu vào hoặc sai định dạng câu trả lời? Sau đó mới tới câu hỏi thực chất: thuộc tính phân tách được dự đoán *trước* khi chạy hay chỉ được nhận ra *sau*? Với sáu dataset, một khuôn mẫu mới chỉ là giả thuyết, vì sáu điểm dữ liệu khớp được với nhiều cách giải thích.

### Các lối ra

**Lối ra thứ nhất: đặc trưng hóa *khi nào* phương pháp giúp ích.** Đây thường là lối ra có giá trị nhất. Nhóm chọn một thuộc tính đo được, ví dụ số đoạn văn cần để trả lời câu hỏi, rồi xây ba lớp bằng chứng. Lớp thứ nhất là tương quan giữa mức cải thiện và thuộc tính qua các dataset. Lớp thứ hai là phân tầng *bên trong* từng dataset: ngay trong dataset một bước, những câu hỏi hiếm hoi cần hai đoạn văn có được lợi không? Lớp thứ ba, mạnh nhất, là một thí nghiệm kiểm soát thay đổi thuộc tính có chủ đích, hoặc một dự đoán *tiên nghiệm*: chọn thêm một dataset chỉ dựa trên thuộc tính, ghi dự đoán ra trước rồi mới chạy. Kết quả hỗn hợp khi đó trở thành phát hiện dạng "phương pháp giúp ích khi X, gây hại khi Y, vì Z". Bản thân phân tích này đã là một đóng góp, vì người đọc mang theo được hiểu biết về điều kiện áp dụng mà con số trung bình không cho được.

**Lối ra thứ hai: thu hẹp claim về đúng phạm vi.** Nếu chế độ mà phương pháp thắng là bài toán quan trọng tự thân, như hỏi đáp nhiều bước, paper có thể định vị lại quanh nó. Điều kiện là phạm vi được định nghĩa bằng tiêu chí có lý do độc lập, chẳng hạn một loại câu hỏi cộng đồng đã công nhận là khó, chứ không phải bằng danh sách dataset mà phương pháp tình cờ thắng.

Dù chọn lối ra nào, yêu cầu không thương lượng là **báo cáo đủ mọi dataset**, kể cả nơi phương pháp thua, và nêu kết quả hỗn hợp trong mục Limitations (xem bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md)). Reviewer thường thuộc các dataset chuẩn, và một bảng thiếu đúng hai dataset quen thuộc nhất sẽ gợi ngay câu hỏi vì sao.

### Viết thế nào

Đoạn bình luận bảng cần nói thẳng cả chiều thắng lẫn chiều thua rồi dẫn tới phần phân tích; chữ *consistently* chỉ dùng khi phương pháp thắng ở mọi nơi. Số liệu dưới đây là minh họa.

<div class="bad" markdown>
*"Our method consistently improves performance across benchmarks, with an average gain of +0.9 EM (Table 2)."* Bảng chỉ có bốn dataset; hai dataset thua nằm trong appendix không một lời nhắc.

Con số trung bình và chữ *consistently* tạo ấn tượng sai, còn việc dời dataset thua đi sẽ bị coi là che giấu.
</div>

<div class="good" markdown>
*"Iterative retrieval improves EM on the three multi-hop benchmarks (+1.9 to +3.1) but slightly hurts the two single-hop benchmarks (−0.8 and −1.1). Sec. 5.3 shows that the gain grows with the number of passages a question requires, both across and within datasets, suggesting that additional retrieval steps help only when the evidence is distributed across documents."*

Người đọc thấy ngay ranh giới của phương pháp, và chiều thua trở thành bằng chứng cho insight thay vì một điểm yếu bị che.
</div>

Reviewer NLP coi trọng phân tích theo dataset và theo loại câu hỏi, thường đánh giá một phân tích "khi nào phương pháp giúp ích" cao hơn một điểm trung bình nhỉnh hơn. Reviewer ML quan tâm khuôn mẫu có được kiểm chứng chặt chẽ không. Reviewer CV kỳ vọng đủ benchmark chuẩn trong bảng chính và thường nêu ngay việc thiếu một benchmark quen thuộc.

### Điều không được làm

Không bỏ dataset mà phương pháp thua, không đổi tập dataset dùng để tính trung bình sau khi thấy kết quả, không đẩy dataset thua vào appendix mà không nhắc trong thân bài. Không trình bày thuộc tính được nhận ra sau khi thấy kết quả như giả thuyết có từ đầu; đó là HARKing (Kerr, 1998). Phân tích hậu nghiệm hợp lệ khi được gọi đúng tên, và càng mạnh khi được kiểm chứng bằng một dự đoán tiên nghiệm.

## Tình huống 13: Tái lập baseline không đạt số trong paper gốc

### Nhận diện

Paper gốc của baseline chính báo cáo 45,0 AP trên COCO (ví dụ giả định). Nhóm chạy code và cấu hình chính thức ba lần, thu được 43,4 ± 0,2 AP. Phương pháp đề xuất, cài trên cùng codebase, đạt 44,6 AP: cao hơn số tái lập nhưng thấp hơn số công bố. Nhóm không biết nên đặt con số nào vào bảng, và lo rằng reviewer, vốn thuộc con số 45,0, sẽ kết luận phương pháp thua. Dấu hiệu nhận biết là một khoảng cách ổn định, lớn hơn mức dao động giữa các lần chạy.

### Chẩn đoán

Khoảng cách tái lập có nhiều nguyên nhân, phần lớn không liên quan tới sự thiếu trung thực của tác giả gốc. Ở CV, hay gặp là batch size khác do số GPU khác (kéo theo phải chỉnh learning rate), lịch huấn luyện, độ phân giải, test-time augmentation, phiên bản trọng số pre-trained hay thư viện, và đánh giá trên val hay test-dev. Ở NLP là tokenizer, tiền xử lý, cách tính metric (BLEU là ví dụ nổi tiếng) hay phiên bản mô hình phía sau API. Ở ML là những chi tiết cài đặt nhỏ mà Henderson et al. đã chỉ ra có ảnh hưởng lớn, hoặc con số gốc là lần chạy tốt nhất. Và cũng có thể là bug trong chính lần tái lập.

Kỹ thuật chẩn đoán hiệu quả nhất là **tách khoảng cách do huấn luyện khỏi khoảng cách do đánh giá**: nếu có checkpoint công bố, hãy đánh giá nó bằng pipeline của nhóm. Ra đúng 45,0 nghĩa là khoảng cách nằm ở huấn luyện; cũng chỉ ra 43,4 nghĩa là vấn đề nằm ở đánh giá, loại thường dễ sửa hơn. Các câu hỏi còn lại: đã đối chiếu từng dòng cấu hình với paper chưa, khoảng cách có vượt dao động giữa các seed không, và đã hỏi tác giả gốc chưa?

### Các lối ra

**Lối ra thứ nhất: thu hẹp khoảng cách trước khi viết.** Phần lớn khoảng cách được thu hẹp ở bước này: dùng code chính thức, đối chiếu thiết lập, đánh giá checkpoint, đọc các issue trên repository, và liên hệ tác giả. Một email ngắn, lịch sự, cụ thể, kèm cấu hình và log thường được trả lời. Nhật ký các bước đã thử sẽ có ích khi viết chú thích bảng hay trả lời reviewer.

!!! tip "Email gửi tác giả baseline"
    Viết bằng tiếng Anh, ngắn gọn, chỉ hỏi về thiết lập và không hàm ý trách móc. Ví dụ: *"Dear Dr. X, we are building on your paper [title] and are trying to reproduce the 45.0 AP reported in Table 2 with the official code (commit abc123) and the config `r50_3x.yaml` on 8 GPUs. Over three runs we obtain 43.4 ± 0.2 AP; our config and logs are attached. Could some setting differ from the released config, for instance the batch size or test-time augmentation? Thank you very much for your time."*

**Lối ra thứ hai: báo cả số được công bố lẫn số tái lập.** Khi khoảng cách vẫn còn sau những nỗ lực hợp lý, hãy đưa cả hai con số vào bảng, đánh dấu nguồn gốc và giải thích ngắn trong văn bản. So sánh chính đặt giữa phương pháp đề xuất và baseline *tái lập*, vì chúng chung codebase, phần cứng và thiết lập; đó là so sánh có kiểm soát duy nhất mà nhóm có. Claim phải khớp: "trong cùng thiết lập, phương pháp cải thiện baseline 1,2 AP", không phải "vượt baseline". Cách làm này càng thuyết phục khi phương pháp cũng được áp lên một baseline thứ hai.

**Lối ra thứ ba: biến vấn đề tái lập thành phát hiện.** Nếu khoảng cách lớn, có hệ thống và truy được tới một nguyên nhân cụ thể, chẳng hạn một chi tiết huấn luyện không được mô tả nhưng giải thích phần lớn cải thiện của baseline, bản thân điều đó là một phát hiện. ML Reproducibility Challenge, sự kiện thường niên trong đó người tham gia tái lập các paper từ những hội nghị lớn và viết báo cáo được bình duyệt, là nơi phù hợp; một nghiên cứu đánh giá lại trên nhiều phương pháp có thể hướng tới TMLR hoặc main track. Lối ra này đòi hỏi liên hệ tác giả gốc trước, loại trừ lỗi của chính nhóm, và giọng văn giải thích chứ không buộc tội.

**Lối ra thứ tư: trường hợp ngược lại, khi baseline tái lập cao hơn số gốc.** Điều này hay gặp khi codebase được cải tiến sau khi paper ra đời, hoặc khi nhóm dùng công thức huấn luyện mới hơn. Công bằng đòi hỏi so với con số *cao hơn*, vì dùng số gốc thấp sẽ thổi phồng cải thiện; cả hai vẫn được báo cáo kèm giải thích. Nếu cải thiện biến mất trước baseline mạnh hơn, có thể nó chỉ đến từ công thức huấn luyện, đúng hiện tượng của Tình huống 17.

### Viết thế nào

Công cụ chính là chú thích bảng: phân biệt rõ "reported" và "reproduced", nêu thiết lập của số tái lập, và cho biết phương pháp đề xuất được so với số nào.

<div class="bad" markdown>
*"Table 1: Comparison with state-of-the-art methods on COCO val2017."* Cột của baseline ghi 43,4 không kèm ký hiệu, trong khi paper gốc báo 45,0.

Reviewer biết con số gốc sẽ nghĩ nhóm cố tình dùng số thấp, và mọi con số khác trong bảng cũng mất độ tin cậy theo.
</div>

<div class="good" markdown>
*"Table 1: Results on COCO val2017. †: numbers reported in the original papers. ‡: reproduced with the official code and config under our setting (8 GPUs, batch size 16, 3× schedule); mean ± std over 3 runs. Our method is implemented in the same codebase and trained under the same setting as ‡. We could not reproduce the reported 45.0 AP of X despite following the released configuration; see Appendix B."*

Chú thích nói rõ nguồn của từng con số và cho thấy so sánh chính là một so sánh có kiểm soát.
</div>

Reviewer CV nhạy nhất với tình huống này vì họ nhớ con số của các phương pháp phổ biến. Ở ML và NLP, thảo luận trên OpenReview có thể kéo dài nhiều vòng, và đôi khi người quen codebase của baseline đọc paper; giải thích minh bạch từ đầu tránh được tranh luận khó chịu khi phản hồi (xem bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md)).

### Điều không được làm

Không lặng lẽ dùng số tái lập thấp hơn, không trộn số công bố và số tái lập mà không đánh dấu, không chọn cho từng baseline con số có lợi hơn, không tái lập cẩu thả để dễ thắng. Không công khai cáo buộc tác giả gốc khi chưa liên hệ họ và chưa loại trừ lỗi của chính nhóm.

## Tình huống 14: Không đủ tài nguyên tính toán để đua với lab lớn

### Nhận diện

Một nhóm ở trường đại học, với vài GPU, đề xuất một mục tiêu pre-training mới cho mô hình ngôn ngữ (ví dụ giả định). Các lab lớn báo cáo kết quả ở mô hình hàng tỉ tham số và hàng nghìn tỉ token; nhóm chỉ huấn luyện được mô hình cỡ một trăm triệu tham số và sợ mọi kết quả bị gạt đi bằng câu "does it scale?". Dấu hiệu nhận biết: bảng có xu hướng đặt mô hình nhỏ cạnh con số của mô hình lớn từ paper khác; câu chuyện hứa "sẽ còn tốt hơn ở quy mô lớn" mà không có bằng chứng; hoặc nhóm định bỏ ý tưởng chỉ vì không đủ tài nguyên để đua.

### Chẩn đoán

Câu hỏi then chốt là **claim nào thực sự cần quy mô lớn**. Những claim như "đạt SOTA trên benchmark X" hay "cải thiện các mô hình frontier" cần quy mô mà nhóm không có, và không nên được đưa ra. Nhưng nhiều claim có giá trị thì không cần: hiệu quả hơn ở cùng ngân sách, cơ chế vận hành ra sao, hành vi ở chế độ ít dữ liệu. Các chiến lược thực hành đã có ở mục *Khi tài nguyên hạn chế* trong bài [Experiments](../02-viet-tung-phan/experiments.md); ở đây chúng ta bàn quyết định ở tầng câu hỏi nghiên cứu.

Cần tự hỏi: claim chính có kiểm chứng được ở cùng ngân sách cho mọi phương pháp không? Có lý do nào để nghĩ hiệu ứng đổi chiều theo quy mô, chẳng hạn vì phương pháp bù một điểm yếu mà mô hình lớn tự khắc phục? So sánh với mô hình lớn có cùng điều kiện không? Và trước câu "does it scale?", nhóm có bằng chứng nào, dù chỉ trong một khoảng hẹp?

### Các lối ra

**Lối ra thứ nhất: so sánh có kiểm soát ở cùng ngân sách tính toán.** Định nghĩa một ngân sách cụ thể (FLOPs, giờ GPU hoặc số token), rồi huấn luyện baseline và phương pháp đề xuất trong đúng ngân sách đó với công sức tune ngang nhau. Claim trở thành "ở ngân sách X, mục tiêu mới đạt Y so với Z của mục tiêu chuẩn", kiểu so sánh mà chính các lab lớn dùng để chọn thiết kế. Bằng chứng cần có là cách tính ngân sách minh bạch, kể cả chi phí tune, và baseline chạy lại trong cùng điều kiện.

**Lối ra thứ hai: đo xu hướng scaling ở quy mô nhỏ, kèm cảnh báo khi ngoại suy.** Huấn luyện cả hai phương pháp ở ba tới năm kích thước trải rộng ít nhất một bậc độ lớn, rồi vẽ hiệu năng theo lượng tính toán trên trục log. Khoảng cách ổn định hoặc tăng dần là bằng chứng gợi ý rằng lợi thế không biến mất ngay khi tăng quy mô, nhưng chỉ là gợi ý: các đường có thể cắt nhau ngoài khoảng đo, hyperparameter tối ưu ở quy mô nhỏ có thể không còn tối ưu, và một số hành vi chỉ xuất hiện khi mô hình đủ lớn. Claim phải nằm trong khoảng đã đo; phần ngoại suy được viết như giả thuyết trong Limitations.

**Lối ra thứ ba: chọn câu hỏi không cần quy mô lớn.** Nhiều kiểu đóng góp trong bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) hợp với tài nguyên hạn chế: phân tích và hiểu biết, phương pháp luận đánh giá, dataset và benchmark, thí nghiệm có kiểm soát trên dữ liệu tổng hợp, các miền ít dữ liệu, hay thích nghi mô hình mở thay vì pre-train từ đầu. Lối ra này cần đổi hướng sớm, lý tưởng là ngay khi chọn ý tưởng.

**Lối ra thứ tư: biến ràng buộc thành câu hỏi nghiên cứu.** "Cramming: Training a Language Model on a Single GPU in One Day" (Geiping & Goldstein, ICML 2023) là ví dụ điển hình. Thay vì hỏi làm sao đẩy xa giới hạn của tính toán cực lớn, paper hỏi điều ngược lại: với một GPU phổ thông trong một ngày thì đi được tới đâu? Paper phân tích lại gần như mọi thành phần của pipeline pre-training trong chế độ đó, cho thấy hiệu năng vẫn bám sát các scaling law quan sát được ở chế độ tính toán lớn, rồi dùng lăng kính đó để đánh giá cải tiến nào thực sự có ích khi tính toán ít. Ràng buộc ở đây không phải lời xin lỗi trong Limitations mà chính là câu hỏi nghiên cứu.

### Viết thế nào

Điều cần tránh nhất là lấp khoảng trống quy mô bằng lời hứa. Ví dụ dưới đây dùng số liệu minh họa.

<div class="bad" markdown>
*"Due to limited resources, we only train small models, but we expect the gains to be even larger at scale."*

Câu đầu nghe như lời xin lỗi, câu sau là claim không có bằng chứng, và reviewer sẽ nhớ cả hai.
</div>

<div class="good" markdown>
*"All models are trained with the same budget of 1.5 × 10^19 FLOPs and the same tuning budget. Across four model sizes from 20M to 160M parameters, our objective reduces validation perplexity by 0.8 to 1.1 points relative to standard masked language modeling, with no sign of the gap narrowing (Fig. 3). We have not tested larger scales and discuss this limitation in Sec. 7."*

Claim nằm đúng trong khoảng đã đo, và giới hạn được nêu như một sự thật chứ không như lời biện hộ.
</div>

Reviewer ML thường hỏi về scaling, và một biểu đồ scaling trên khoảng nhỏ cùng câu Limitations thẳng thắn trả lời trước phần lớn câu hỏi đó. Reviewer NLP gần như luôn hỏi phương pháp so với việc prompt một LLM mạnh thì sao; nhóm nhỏ vẫn chạy được các mô hình mở làm baseline. Reviewer CV hay hỏi về backbone lớn hơn, và hai kích thước backbone thường đủ cho thấy xu hướng. Vẫn sẽ có reviewer phạt quy mô nhỏ; với claim đo kỹ trong phạm vi hẹp, TMLR đáng cân nhắc vì tiêu chí chính của nó là claim có được bằng chứng ủng hộ hay không.

### Điều không được làm

Không đặt mô hình nhỏ cạnh con số của mô hình lớn huấn luyện trong điều kiện khác rồi khẳng định thắng trên một tập con benchmark được chọn. Không ngoại suy claim ra ngoài khoảng quy mô đã đo, không giấu ngân sách tính toán, và không so sánh "cùng số tham số" khi phương pháp đề xuất tốn nhiều FLOPs hơn hẳn mà không nói rõ.

## Tình huống 15: Metric và đánh giá của con người nói hai điều khác nhau

### Nhận diện

Một nhóm cải tiến mô hình sinh ảnh và giảm FID đáng kể so với baseline (ví dụ giả định), nhưng trong một nghiên cứu người dùng nhỏ, người chấm lại thích ảnh của baseline ở hơn một nửa số cặp. Ở NLP, tình huống tương tự là hệ thống tóm tắt hay dịch máy tăng ROUGE, BLEU hoặc một metric học được, nhưng người chấm thấy bản của baseline trung thực hay tự nhiên hơn. Dấu hiệu nhận biết: mẫu định tính không trông tốt hơn, các metric không đồng ý với nhau, hoặc metric tăng mạnh bất thường so với một thay đổi nhỏ.

### Chẩn đoán

Metric tự động nào cũng chỉ là đại lượng thay thế (*proxy*) cho chất lượng mà con người quan tâm, và chỉ có **validity** (tính hợp lệ) trong một phạm vi: tương quan tốt với đánh giá của con người trên những loại hệ thống và mức chênh lệch đã được kiểm chứng. Ra ngoài phạm vi đó, hoặc khi phương pháp vô tình tối ưu đúng thứ metric nhìn vào, tương quan có thể đổ vỡ. Kynkäänniemi et al. ("The Role of ImageNet Classes in Fréchet Inception Distance", ICLR 2023) cho thấy không gian đặc trưng thường dùng để tính FID gần với phân loại ImageNet tới mức chỉ cần làm khớp phân bố lớp ImageNet giữa ảnh sinh và ảnh thật là đủ giảm FID đáng kể, trong khi chất lượng ảnh không tốt lên. Paper còn nêu trường hợp một mô hình dùng thành phần pre-trained trên ImageNet đạt FID ngang một mô hình mạnh hơn, dù con người đánh giá nó kém hơn. Ở NLP, Mathur, Baldwin và Cohn ("Tangled up in BLEU", ACL 2020) xem lại cách đánh giá metric dịch máy, chỉ ra rằng tương quan giữa metric và con người rất nhạy với tập hệ thống được dùng để đo, nhất là khi có hệ thống ngoại lai, dẫn tới những kết luận quá tự tin về độ tốt của metric. Paper cũng bàn việc một chênh lệch nhỏ theo metric không nhất thiết là chênh lệch mà con người nhận ra.

Chẩn đoán vì vậy đi theo cả hai phía. Về metric: phương pháp có dùng thành phần gần với không gian đặc trưng của metric không, như discriminator dùng đặc trưng ImageNet khi FID dùng đặc trưng Inception, hay hướng dẫn bằng CLIP khi đánh giá bằng CLIP score? Chênh lệch có vượt mức dao động không, và metric đã được kiểm chứng cho loại khác biệt này chưa? Về con người: thiết kế đánh giá đã đủ chặt chẽ chưa? Cũng có thể hai phép đo đang đo hai khía cạnh khác nhau, như độ giống ảnh thật và độ đa dạng, hay độ trôi chảy và độ chính xác nội dung.

### Các lối ra

**Lối ra thứ nhất: kiểm tra lại cả hai phép đo.** Về metric, dùng nhiều metric có nền tảng khác nhau (FID trong không gian đặc trưng khác, precision và recall cho mô hình sinh; ở NLP, kết hợp metric dựa trên chồng lặp với metric học được) và kiểm tra phương pháp có chạm vào không gian đặc trưng của metric không. Về con người, một đánh giá đáng tin cần **mù** (người chấm không biết mẫu thuộc hệ thống nào), **ngẫu nhiên hóa** thứ tự và vị trí trình bày, **nhiều người chấm** cho mỗi mẫu, mẫu chọn ngẫu nhiên và đủ nhiều, hướng dẫn rõ ràng, và báo cáo **độ đồng thuận** giữa người chấm (Cohen's kappa, Krippendorff's alpha; xem bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md)). Một đánh giá do chính tác giả chấm, không mù, không phải bằng chứng mạnh cho phía nào.

**Lối ra thứ hai: báo cả hai và giải thích sự bất đồng.** Nếu cả hai kết quả đứng vững sau khi kiểm tra, paper báo cáo cả hai và phân tích vì sao chúng khác nhau. Sự bất đồng tự nó là thông tin: có thể mức giảm FID chủ yếu đến từ việc khớp phân bố lớp, hoặc mức tăng BLEU đến từ việc khớp độ dài bản tham chiếu. Claim được điều chỉnh tương ứng, chẳng hạn "cải thiện FID nhưng không cải thiện chất lượng theo đánh giá của con người".

**Lối ra thứ ba: chuyển trọng tâm sang phương pháp luận đánh giá.** Nếu chẩn đoán phát hiện một lỗ hổng có hệ thống của metric, phát hiện đó có thể quan trọng hơn phương pháp ban đầu; cả Kynkäänniemi et al. lẫn Mathur et al. đều là paper có đóng góp chính là hiểu biết về cách đánh giá. Kiểu đóng góp này có chỗ ở main track của cả ba cộng đồng, và ở NeurIPS Datasets and Benchmarks Track khi đi kèm một benchmark hay giao thức đánh giá mới.

**Lối ra thứ tư: chấp nhận đánh giá của con người.** Khi đánh giá của con người được thiết kế tốt, đủ lớn và nghiêng rõ về baseline, claim "sinh ảnh tốt hơn" không đứng được dù metric nói gì. Câu hỏi còn lại là phương pháp có giá trị nào khác, hay đã đến lúc dừng.

!!! warning "Chọn metric trước khi thấy kết quả"
    Metric chính, giao thức đánh giá của con người và tiêu chí loại người chấm (ví dụ người trả lời sai câu kiểm tra mức độ chú ý) cần được quyết định trước khi chạy đánh giá cuối cùng, và tốt nhất là được ghi lại. Chọn metric có lợi sau khi đã nhìn mọi metric, hay chạy nhiều phiên bản đánh giá của con người rồi báo phiên bản đẹp nhất, là những lối rẽ không khai báo làm kết luận mất giá trị.

### Viết thế nào

Cặp ví dụ dưới đây dùng số liệu minh họa.

<div class="bad" markdown>
*"Our model generates images of higher quality, as evidenced by a lower FID (Table 2)."*

Câu văn đồng nhất FID với chất lượng và che đi kết quả đánh giá của con người mà nhóm đã có trong tay.
</div>

<div class="good" markdown>
*"Our model lowers FID from 12.1 to 9.8. In a blind pairwise study (500 randomly sampled pairs, 3 raters per pair, randomized order; Krippendorff's α = 0.41), however, raters preferred baseline samples in 56% of comparisons (95% CI: 52–60%). Since our discriminator uses ImageNet-pretrained features, we suspect that part of the FID gain reflects closer matching of ImageNet class statistics rather than perceptual quality (Kynkäänniemi et al., 2023); Sec. 5.4 tests this hypothesis."*

Cả hai kết quả được báo cáo kèm đủ thông tin để thẩm định, và sự bất đồng trở thành một giả thuyết có kiểm chứng.
</div>

Reviewer CV ở mảng sinh ảnh ngày càng quen với hạn chế của FID và thường đòi user study hoặc thêm metric. Reviewer NLP từ lâu hoài nghi các metric chồng lặp khi dùng đơn lẻ, kỳ vọng đánh giá của con người có giao thức đầy đủ, và checklist của ACL Rolling Review hỏi trực tiếp về việc sử dụng người tham gia. Reviewer ML quan tâm hơn tới việc metric có được dùng đúng phạm vi và kết luận có vững về thống kê không.

### Điều không được làm

Không chỉ báo metric có lợi, không chọn metric sau khi thấy kết quả, không gọi một đánh giá không mù do chính tác giả thực hiện là "human evaluation" mà không nói rõ, không loại người chấm hay mẫu theo tiêu chí đặt ra sau khi thấy kết quả. Không chọn checkpoint theo đúng metric dùng để báo cáo, hay huấn luyện bằng chính mạng đặc trưng của metric, mà không công bố điều đó.

## Tình huống 16: Phương pháp chỉ tốt khi tune rất kỹ

### Nhận diện

Một optimizer mới vượt AdamW trên vài tác vụ huấn luyện mô hình ngôn ngữ nhỏ và phân loại ảnh (ví dụ giả định). Nhưng log cho thấy nhóm đã thử khoảng 200 cấu hình cho optimizer mới, còn AdamW dùng hyperparameter mặc định từ một paper trước. Khi tăng hoặc giảm learning rate hai lần so với giá trị tốt nhất, lợi thế biến mất; optimizer mới còn có thêm hai hyperparameter mà AdamW không có. Dấu hiệu nhận biết: số lần thử chênh lệch lớn giữa các phương pháp, vùng hyperparameter "tốt" rất hẹp, và nhóm khó trả lời câu hỏi "người dùng bình thường, với ngân sách tune bình thường, sẽ thấy gì".

### Chẩn đoán

Chênh lệch ngân sách tune là một trong những yếu tố gây nhiễu phổ biến nhất mà không được khai báo. Lipton và Steinhardt ("Troubling Trends in Machine Learning Scholarship", 2018) gọi tên hiện tượng này: không xác định được nguồn gốc của cải thiện thực nghiệm, khi cải thiện thực ra đến từ tuning chứ không từ thay đổi được nhấn mạnh. Hai nghiên cứu đánh giá lại cho thấy quy mô vấn đề. Melis, Dyer và Blunsom ("On the State of the Art of Evaluation in Neural Language Models", ICLR 2018) cho thấy LSTM tiêu chuẩn, khi được regularize và tune cẩn thận, vượt nhiều kiến trúc mới hơn. Lucic et al. ("Are GANs Created Equal? A Large-Scale Study", NeurIPS 2018) thấy rằng với đủ tối ưu hyperparameter và số lần khởi động lại, phần lớn các mô hình GAN đạt điểm tương tự nhau, và không tìm thấy bằng chứng thuật toán nào được thử vượt trội nhất quán so với GAN gốc; cải thiện có thể đến từ ngân sách tính toán và tune nhiều hơn là từ thay đổi thuật toán.

Các câu hỏi chẩn đoán: mỗi phương pháp được bao nhiêu lần thử, với cùng phương pháp tìm kiếm không? Không gian tìm kiếm có rộng tương đương và bao quanh vùng tốt của mỗi phương pháp không? Hyperparameter mà phương pháp đề xuất thêm vào có được tính vào ngân sách không? Hyperparameter được chọn trên validation hay test? Hiệu năng giảm nhanh tới đâu khi rời điểm tối ưu? Và con số cuối có phải là lần chạy tốt nhất trong quá trình tìm kiếm không? Câu hỏi cuối hay bị bỏ qua: lần chạy tốt nhất trong 200 lần thử bị lệch lên trên do chọn lọc, một biểu hiện của "lời nguyền người thắng cuộc" (*winner's curse*), cụm từ mà Sculley et al. (ICLR 2018 workshop) dùng làm tiêu đề khi bàn về áp lực thắng bảng và sự chặt chẽ thực nghiệm.

### Các lối ra

**Lối ra thứ nhất: cho baseline ngân sách tune ngang nhau.** Cho baseline cùng số lần thử, cùng phương pháp tìm kiếm và không gian tìm kiếm rộng tương đương, rồi chạy lại cấu hình tốt nhất của mỗi bên với seed mới. Tốt hơn nữa, vẽ hiệu năng tốt nhất đạt được theo số lần thử cho từng phương pháp. Thắng ở mọi mức ngân sách là bằng chứng mạnh; chỉ thắng khi ngân sách lớn vẫn là một kết luận có ích, miễn là được nói rõ.

**Lối ra thứ hai: phân tích độ nhạy.** Quét các hyperparameter quan trọng quanh giá trị tốt nhất cho cả hai phương pháp, trình bày bằng đường cong hoặc bản đồ nhiệt. Độ rộng của vùng "tốt" tự nó là một kết quả: phương pháp có vùng tốt rộng hơn thì dễ dùng hơn, kể cả khi đỉnh không cao hơn. Nếu vùng tốt hẹp, phân tích này có thể gợi ra hướng khắc phục, chẳng hạn một quy tắc chọn giá trị mặc định theo kích thước mô hình.

**Lối ra thứ ba: điều chỉnh claim và đưa vào Limitations.** Nếu phương pháp chỉ tốt khi tune kỹ, claim trung thực là "đạt hiệu năng đỉnh cao hơn với chi phí tune lớn hơn", một đánh đổi vẫn có giá trị ở nơi chi phí tune nhỏ so với chi phí huấn luyện cuối; sự nhạy cảm này được nêu trong Limitations. Nếu dưới ngân sách ngang nhau lợi thế biến mất hoàn toàn, nhóm đang ở trong một phiên bản thu nhỏ của Melis et al. hay Lucic et al.; một nghiên cứu cẩn thận chứng minh điều đó cho cả một họ phương pháp có thể thành paper đánh giá lại ở TMLR, workshop ICBINB, hoặc main track nếu phạm vi đủ rộng.

Trong mọi trường hợp, **quy trình tune phải được mô tả**: không gian tìm kiếm, phương pháp tìm kiếm, số lần thử, tiêu chí chọn, tập dùng để chọn và chi phí tính toán, cho cả phương pháp đề xuất lẫn baseline. Phần này thường nằm trong appendix, nhưng không được thiếu.

### Viết thế nào

Cặp ví dụ dưới đây dùng số liệu minh họa.

<div class="bad" markdown>
*"For baselines, we use the hyperparameters recommended in the original papers. For our method, we perform a grid search (Appendix C)."*

Câu văn tự thừa nhận một so sánh không cân sức, và reviewer ML sẽ chỉ ra điều đó ngay.
</div>

<div class="good" markdown>
*"For every optimizer, we tune the learning rate, weight decay and warmup length with 64 trials of random search over the same log-uniform ranges (Appendix C), select by validation loss, and rerun the selected configuration with 3 new seeds. Fig. 4 shows that our optimizer outperforms AdamW for budgets above 16 trials but underperforms below that, as its additional hyperparameter enlarges the search space. We discuss this sensitivity as a limitation in Sec. 7."*

Ngân sách ngang nhau, quy trình minh bạch, và điểm yếu được nêu như một phát hiện thay vì bị giấu đi.
</div>

Reviewer ML đặc biệt nhạy với ngân sách tune vì cộng đồng đã chứng kiến nhiều "tiến bộ" co lại khi so sánh được làm lại; NeurIPS Paper Checklist cũng hỏi về chi tiết huấn luyện, trong đó có cách chọn hyperparameter. Reviewer NLP thường hỏi về quy trình tìm kiếm hyperparameter, và checklist của ACL Rolling Review có câu hỏi về thiết lập thí nghiệm gồm cả phần này. Reviewer CV ít hỏi về ngân sách tune hơn, nhưng hay hỏi về độ nhạy với hyperparameter riêng của phương pháp, như trọng số của một hàm mất mát phụ.

### Điều không được làm

Không tune trên tập test. Không để baseline dùng giá trị mặc định trong khi phương pháp đề xuất được tune kỹ mà không nói rõ. Không giấu số lần thử, và không báo cáo lần chạy tốt nhất trong quá trình tìm kiếm như kết quả cuối cùng.

## Tình huống 17: Thắng nhờ dữ liệu nhiều hơn hoặc mô hình lớn hơn

### Nhận diện

Một nhóm đề xuất backbone mới và vượt ResNet trên ImageNet và COCO (ví dụ giả định). Nhưng backbone mới được pre-train trên ImageNet-22k, huấn luyện 300 epoch với augmentation mạnh và lớn hơn khoảng 30%, trong khi con số của ResNet lấy từ paper gốc với công thức huấn luyện cũ. Chiều ngược lại cũng hay gặp: một phương pháp cạnh tranh đứng đầu bảng nhờ backbone lớn hơn và thêm dữ liệu gán nhãn giả (*pseudo-label*), khiến phương pháp của nhóm trong thiết lập chuẩn trông như thua. Ở NLP, hiện tượng tương tự thấy rõ khi so sánh các mô hình ngôn ngữ huấn luyện trên lượng token rất khác nhau. Dấu hiệu nhận biết: các phương pháp trong bảng khác nhau ở nhiều trục cùng lúc, và khó trả lời câu hỏi "nếu đưa mọi phương pháp về cùng điều kiện thì sao".

### Chẩn đoán

Hiệu năng của một mô hình là sản phẩm của kiến trúc, phương pháp huấn luyện và chiến lược scaling. "Revisiting ResNets: Improved Training and Scaling Strategies" (Bello et al., NeurIPS 2021) chỉ ra rằng tác động của kiến trúc thường bị lẫn với những thay đổi đồng thời về huấn luyện và scaling, và kiến trúc mới đi kèm công thức huấn luyện hiện đại đôi khi được so với kiến trúc cũ huấn luyện theo công thức đã lỗi thời. Khi áp phương pháp huấn luyện và chiến lược scaling cải tiến lên ResNet chuẩn, paper thấy những yếu tố này có thể quan trọng hơn thay đổi kiến trúc, và ResNet cải tiến theo kịp các mô hình tốt nhất đương thời. ResNet gốc được phân tích trong case study [ResNet](../05-case-studies/resnet.md); bài học ở đây là một kiến trúc tốt có thể bị đánh giá thấp chỉ vì người ta tiếp tục so với công thức huấn luyện cũ của nó.

Ở NLP, "Training Compute-Optimal Large Language Models" (Hoffmann et al., NeurIPS 2022) cho thấy khía cạnh dữ liệu. Với cùng ngân sách tính toán như Gopher, mô hình Chinchilla ít tham số hơn khoảng bốn lần (70B so với 280B) nhưng được huấn luyện trên lượng dữ liệu nhiều hơn khoảng bốn lần, và vượt Gopher trên rất nhiều tác vụ. Bài học cho việc so sánh là "lớn hơn" không chỉ có một trục: hai mô hình khác nhau cả về số tham số lẫn số token huấn luyện không thể được so như thể chỉ một trục thay đổi.

Câu hỏi chẩn đoán: các phương pháp khác nhau ở những trục nào trong số tham số, FLOPs, dữ liệu (kích thước, nguồn, loại nhãn), lịch huấn luyện, độ phân giải, augmentation và pre-training? Trục nào giải thích phần lớn cải thiện? Với đối thủ: con số của họ có đến từ thiết lập tương đương không, và nếu không, kết quả của họ trong thiết lập của nhóm là bao nhiêu?

### Các lối ra

**Lối ra thứ nhất: so sánh có kiểm soát theo từng trục.** Thiết kế so sánh ở cùng số tham số, cùng FLOPs và cùng dữ liệu. Một thiết kế đặc biệt hiệu quả là ma trận hai nhân hai: kiến trúc mới với công thức huấn luyện cũ, kiến trúc cũ với công thức huấn luyện mới, cùng hai cấu hình gốc. Bốn ô này tách phần cải thiện do kiến trúc khỏi phần do công thức huấn luyện. Nếu cải thiện vẫn còn khi công thức giống nhau, claim về kiến trúc đứng vững. Nếu không, đóng góp thật nằm ở công thức huấn luyện hoặc dữ liệu; đó vẫn có thể là đóng góp có giá trị, như chính Revisiting ResNets hay "Bag of Tricks for Image Classification with Convolutional Neural Networks" (He et al., CVPR 2019) cho thấy, nhưng phải được gọi đúng tên. Tình huống 7 trong bài [Ghép ý tưởng và "độn" đóng góp](ghep-va-don.md) bàn về việc đưa pipeline dữ liệu hay training recipe vào danh sách đóng góp.

**Lối ra thứ hai: tách bảng theo điều kiện và ghi rõ cột "extra data".** Lối ra này xử lý cả hai chiều. Bảng được chia thành các nhóm theo dữ liệu pre-training hoặc quy mô; mỗi hàng có cột số tham số, FLOPs và một cột "extra data" ghi rõ dữ liệu ngoài tập huấn luyện chuẩn được dùng ở bất kỳ giai đoạn nào. Lợi thế của phương pháp đề xuất hiện ra trung thực trong đúng nhóm của nó, còn những đối thủ có con số cao hơn nhờ thiết lập lớn hơn vẫn có mặt ở nhóm riêng, để reviewer thấy nhóm tác giả không né họ mà chỉ so sánh trong cùng điều kiện. Khi có thể, nên thêm một điểm giao: phương pháp của nhóm với cùng dữ liệu thêm, hoặc phương pháp của đối thủ trong thiết lập chuẩn.

**Lối ra thứ ba: đổi khung đóng góp khi lợi thế thật sự đến từ quy mô.** Nếu cải thiện chủ yếu đến từ dữ liệu, đóng góp thật có thể là dataset, pipeline dữ liệu hay một phát hiện về scaling; nếu đến từ kích thước mô hình, đó có thể là một phân tích về hành vi theo quy mô. Paper khi đó được viết lại quanh đóng góp ấy và bỏ claim về novelty kiến trúc. Khi đối thủ có lợi thế quy mô mà nhóm không thể đạt tới, các lối ra của Tình huống 14 được áp dụng.

### Viết thế nào

Bảng dưới đây (số liệu minh họa) cho thấy cách bố trí cột và nhóm hàng để người đọc thấy ngay điều kiện của từng con số. Ký hiệu † chỉ số được báo cáo trong paper gốc, ‡ chỉ số do nhóm huấn luyện lại.

| Method | Params | FLOPs | Extra data | Top-1 (%) |
|---|---|---|---|---|
| *ImageNet-1k only* | | | | |
| Baseline-S, original recipe† | 26M | 4.1G | — | 76.4 |
| Baseline-S, our recipe‡ | 26M | 4.1G | — | 79.8 |
| Ours-S | 27M | 4.3G | — | 80.6 |
| *With additional pre-training data* | | | | |
| Method X† | 88M | 15.4G | ImageNet-22k | 85.2 |
| Ours-B | 86M | 15.0G | ImageNet-22k | 85.5 |

<div class="bad" markdown>
*"Our model achieves the best accuracy among all compared methods (Table 1)."* Trong khi đó, mô hình của nhóm là mô hình duy nhất trong nhóm so sánh được pre-train trên ImageNet-22k.

Claim đúng về con số nhưng sai về so sánh, vì lợi thế dữ liệu bị giấu trong phần setup.
</div>

<div class="good" markdown>
*"Among models trained only on ImageNet-1k with comparable FLOPs, Ours-S improves over the baseline trained with the same recipe by 0.8 points (from 79.8 to 80.6); most of the gain over the originally reported baseline comes from the training recipe (Table 4). With ImageNet-22k pre-training, Ours-B is on par with Method X at a similar cost."*

Đoạn văn tách phần cải thiện do kiến trúc khỏi phần do công thức huấn luyện, và chỉ so sánh trong cùng nhóm điều kiện.
</div>

Reviewer CV đọc rất kỹ các cột số tham số, FLOPs và dữ liệu pre-training, và một bảng trộn điều kiện thường bị nêu là "unfair comparison". Reviewer NLP đặc biệt chú ý tới dữ liệu huấn luyện của mô hình nền, cả về lượng lẫn nguy cơ nhiễm dữ liệu test. Reviewer ML thường đòi so sánh ở cùng ngân sách tính toán và đánh giá cao biểu đồ hiệu năng theo lượng tính toán.

### Điều không được làm

Không giấu dữ liệu thêm trong appendix. Không so với con số cũ của baseline khi phương pháp đề xuất được huấn luyện bằng công thức mới. Không loại một đối thủ khỏi bảng chỉ vì họ mạnh hơn nhờ dữ liệu thêm, và không gọi kết quả là "state of the art" khi bảng trộn các thiết lập khác nhau mà không nói rõ.

## Bảng chẩn đoán nhanh

Bảy tình huống trên có chung một cấu trúc: một triệu chứng trên bảng kết quả, một câu hỏi chẩn đoán cần trả lời trước tiên, một loại bằng chứng cần bổ sung, và một cách diễn đạt tương xứng với bằng chứng. Bảng dưới đây gom chúng lại để dùng như danh sách kiểm tra khi rà soát bản nháp.

| Triệu chứng | Câu hỏi chẩn đoán đầu tiên | Bằng chứng cần bổ sung | Cách diễn đạt trung thực |
|---|---|---|---|
| (TH11) Cải thiện nhỏ, đổi chiều khi đổi seed | Baseline có được chạy cùng số lần, ghép cặp, cùng điều kiện không? | Nhiều lần chạy ghép cặp; khoảng tin cậy của hiệu số; tách nhiễu do seed khỏi nhiễu do dữ liệu | *"comparable"* khi khoảng tin cậy chứa 0; nêu ưu điểm ở trục khác nếu có |
| (TH12) Thắng ở một số dataset, thua ở số khác | Thuộc tính nào tách dataset thắng khỏi dataset thua? | Phân tầng trong từng dataset; thí nghiệm kiểm soát hoặc dự đoán tiên nghiệm | Nêu cả chiều thắng lẫn chiều thua; *"helps when…, hurts when…"* |
| (TH13) Baseline tái lập lệch số công bố | Lệch do huấn luyện hay do đánh giá? | Đánh giá checkpoint công bố; đối chiếu cấu hình; liên hệ tác giả | Bảng ghi cả *reported* lẫn *reproduced*; so sánh chính trong cùng thiết lập |
| (TH14) Không đủ tài nguyên để đua quy mô | Claim nào thực sự cần quy mô lớn? | So sánh cùng ngân sách; đường scaling qua nhiều kích thước nhỏ | Giới hạn claim trong khoảng đã đo; ngoại suy chỉ là giả thuyết |
| (TH15) Metric và con người bất đồng | Metric có hợp lệ cho loại khác biệt này không, đánh giá của con người có chặt chẽ không? | Nhiều metric khác nền tảng; đánh giá mù, ngẫu nhiên hóa, nhiều người chấm, có độ đồng thuận | Báo cả hai và giải thích bất đồng; không đồng nhất metric với chất lượng |
| (TH16) Chỉ tốt khi tune kỹ | Ngân sách tune của các phương pháp có ngang nhau không? | Cùng số lần thử; hiệu năng theo ngân sách tune; phân tích độ nhạy | Mô tả quy trình tune; nêu độ nhạy trong Limitations |
| (TH17) Thắng nhờ dữ liệu hoặc quy mô | Các phương pháp khác nhau ở những trục nào? | So sánh cùng tham số, FLOPs, dữ liệu; ma trận kiến trúc × công thức huấn luyện | Nhóm hàng theo điều kiện; cột *extra data*; gọi đúng nguồn của cải thiện |

Khi phân tích theo lần chạy, công cụ hay bị thiếu là một phép tính đơn giản cho các lần chạy ghép cặp. Đoạn code dưới đây bổ sung cho hàm paired bootstrap trong bài [Experiments](../02-viet-tung-phan/experiments.md): hàm trong bài đó lấy mẫu lại các ví dụ test với một mô hình cố định, còn hàm dưới đây làm việc trên hiệu số giữa hai phương pháp ở từng lần chạy ghép cặp, tức cùng seed hoặc cùng tập con dữ liệu. Dữ liệu mẫu là số liệu minh họa của Tình huống 11.

```python
import itertools
import numpy as np


def paired_runs_analysis(ours, base, n_boot=10_000, seed=0):
    """Compare two methods over paired runs (same seed / same data split).

    ours[i] and base[i] must come from run i, with identical seed and split.
    Returns the mean paired difference, a 95% percentile-bootstrap CI of
    that mean, and a two-sided p-value from an exact sign-flip test.
    """
    d = np.asarray(ours, float) - np.asarray(base, float)
    n = len(d)
    rng = np.random.default_rng(seed)

    # Bootstrap: resample whole runs (pairs) with replacement.
    boot = rng.choice(d, size=(n_boot, n), replace=True).mean(axis=1)
    low, high = np.percentile(boot, [2.5, 97.5])

    # Exact sign-flip test: under H0 each paired difference is equally likely
    # to be positive or negative. Enumerates 2**n patterns (fine for n <= 20).
    signs = np.array(list(itertools.product([-1.0, 1.0], repeat=n)))
    null_means = (signs * d).mean(axis=1)
    p = float(np.mean(np.abs(null_means) >= abs(d.mean()) - 1e-12))
    return float(d.mean()), (float(low), float(high)), p


# Five labeled splits; accuracy of each method on each split.
ours = [95.3, 94.2, 95.9, 94.8, 95.4]
base = [94.9, 94.5, 95.1, 94.6, 94.9]
print(paired_runs_analysis(ours, base))
# -> mean diff 0.32, CI about (-0.02, 0.62), p = 0.1875: "comparable"
```

Có hai lưu ý. Thứ nhất, khi số lần chạy nhỏ, cả hai đại lượng đều thô: với năm cặp, p-value nhỏ nhất mà kiểm định đổi dấu chính xác có thể cho là 2/32, tức khoảng 0,06, nên năm lần chạy không bao giờ đạt được ngưỡng 0,05 với kiểm định này; còn khoảng tin cậy bootstrap percentile trên năm điểm thường hẹp hơn thực tế. Vì vậy nên quyết định số lần chạy từ trước, và với so sánh quan trọng, chạy từ mười cặp trở lên khi có thể. Thứ hai, hàm này chỉ đo nhiễu giữa các lần chạy; để kết luận đầy đủ, nên kết hợp với paired bootstrap trên tập test, hoặc khi có nhiều tác vụ, dùng bootstrap phân tầng qua cả lần chạy lẫn tác vụ theo tinh thần khuyến nghị của Agarwal et al.

## Tóm tắt

Con số không đẹp hiếm khi là vấn đề tự thân; vấn đề là khoảng cách giữa điều con số chứng minh được và điều người viết muốn khẳng định. Với cải thiện nhỏ, cần tách nhiễu do seed khỏi nhiễu do dữ liệu, so sánh trên các lần chạy ghép cặp với khoảng tin cậy của hiệu số, và sẵn sàng viết "comparable" hoặc dừng lại. Với kết quả hỗn hợp, một phân tích "khi nào phương pháp giúp ích" có giá trị hơn con số trung bình, với điều kiện mọi dataset đều được báo cáo. Khi số tái lập lệch số công bố, theo chiều nào cũng vậy, lối ra chuẩn là minh bạch về nguồn gốc từng con số và so sánh trong cùng thiết lập. Khi tài nguyên hạn chế, hãy so sánh ở cùng ngân sách, đo scaling trong khoảng nhỏ kèm cảnh báo, hoặc biến ràng buộc thành câu hỏi nghiên cứu như Cramming. Khi metric và con người bất đồng, kiểm tra cả validity của metric lẫn độ chặt chẽ của đánh giá con người, báo cả hai, và không chọn metric sau khi thấy kết quả. Khi phương pháp cần tune kỹ, cho baseline ngân sách ngang nhau, phân tích độ nhạy và mô tả quy trình tune. Khi cải thiện đến từ dữ liệu hay quy mô, so sánh có kiểm soát theo từng trục và ghi rõ cột extra data. Phép thử cuối cùng luôn là: nếu reviewer được xem toàn bộ log thí nghiệm, claim có còn đứng được không?

## Bài tập

1. Chọn so sánh quan trọng nhất trong dự án hiện tại. Quyết định trước số lần chạy, chạy ít nhất năm cặp lần chạy ghép cặp cho phương pháp đề xuất và baseline, dùng hàm trong bài để tính khoảng tin cậy của hiệu số, rồi viết câu claim tương ứng ở dạng "outperforms" hoặc "comparable".
2. Lập bảng kết quả của dự án trên mọi dataset đã chạy, kể cả những dataset chưa định đưa vào paper. Với các dataset thua hoặc hòa, đề xuất một thuộc tính đo được có thể giải thích khuôn mẫu, và thiết kế một thí nghiệm phân tầng hoặc kiểm soát để kiểm chứng nó.
3. Với baseline chính, viết chú thích bảng phân biệt rõ "reported" và "reproduced", và ghi lại các bước đã làm để thu hẹp khoảng cách. Nếu chưa liên hệ tác giả gốc, soạn email theo mẫu trong bài.
4. Rà soát bảng chính của bản nháp theo ba trục số tham số, FLOPs và dữ liệu, thêm cột "extra data" và nhóm hàng theo điều kiện. Đánh dấu mọi so sánh mà hai bên khác nhau ở hơn một trục, rồi viết một đoạn mô tả quy trình tune của từng phương pháp để đưa vào appendix.
