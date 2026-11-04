# Thiết kế thí nghiệm

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Chuyển danh sách claim của paper thành các câu hỏi và thí nghiệm cụ thể trước khi chạy.
    - Nắm được bộ thí nghiệm mà reviewer của từng cộng đồng CV, NLP và ML thường kỳ vọng.
    - Thiết kế so sánh công bằng và ablation có sức thuyết phục, tránh các lỗi khiến kết quả bị nghi ngờ.
    - Tổ chức ghi chép thí nghiệm sao cho mọi con số trong paper đều truy được nguồn gốc.

Phần thí nghiệm của một paper không phải là nhật ký ghi lại mọi thứ nhóm tác giả đã chạy. Đó là một **bộ bằng chứng được chọn lọc**, được thiết kế để trả lời đúng những câu hỏi mà một reviewer hoài nghi sẽ đặt ra. Sự khác biệt này có hệ quả rất thực tế. Một nhóm chạy thí nghiệm theo kiểu "thử cái này xem sao" thường đến sát deadline mới phát hiện thiếu một ablation quan trọng hoặc một baseline bắt buộc, trong khi đã tốn nhiều tài nguyên cho những thí nghiệm không có chỗ trong paper.

Thiết kế thí nghiệm với tư duy của người viết nghĩa là hình dung trước bảng kết quả và các hình trong paper, rồi mới chạy để điền vào chúng. Mỗi thí nghiệm cần có một lý do tồn tại: nó ủng hộ một claim cụ thể, hoặc loại trừ một cách giải thích thay thế. Bài này bắt đầu từ nguyên tắc nối claim với thí nghiệm, sau đó trình bày bộ thí nghiệm chuẩn của từng cộng đồng, các nguyên tắc so sánh công bằng, cách thiết kế ablation và cuối cùng là cách ghi chép để không "lạc" giữa hàng trăm lần chạy. Cách *trình bày* thí nghiệm trong paper được bàn riêng ở bài [Experiments](../02-viet-tung-phan/experiments.md) của Chương 2.

## Từ claim đến câu hỏi đến thí nghiệm

Điểm xuất phát của mọi thiết kế thí nghiệm là danh sách **claim**, tức những khẳng định mà paper muốn người đọc tin sau khi đọc xong (cách viết claim được bàn kỹ trong bài [Xây "câu chuyện" của paper](cau-chuyen.md)). Mỗi claim tự nhiên sinh ra một hoặc vài câu hỏi hoài nghi từ phía reviewer, và mỗi câu hỏi cần một thí nghiệm để trả lời.

Hãy xem xét một ví dụ. Giả sử paper khẳng định rằng "module A giúp mô hình xử lý tốt các vật thể bị che khuất". Một reviewer cẩn thận sẽ hỏi ngay: cải thiện có thực sự đến từ A, hay chỉ do A làm tăng số tham số? Cải thiện có tập trung ở các vật thể bị che khuất như claim nói, hay đồng đều ở mọi nơi? Để trả lời, cần ít nhất hai thí nghiệm: một ablation bỏ A và thay bằng một khối có cùng số tham số, và một đánh giá riêng trên tập con các vật thể bị che khuất. Nếu cải thiện trên tập con bị che khuất lớn hơn rõ rệt so với cải thiện tổng thể, claim được ủng hộ; nếu không, claim cần được sửa lại.

Ví dụ trên minh họa một nguyên tắc quan trọng: trước khi chạy, cần viết ra **kết quả nào sẽ ủng hộ claim và kết quả nào sẽ bác bỏ nó**. Một thí nghiệm mà mọi kết quả có thể xảy ra đều được diễn giải là "ủng hộ" thì không phải là bằng chứng. Bảng dưới đây là một mẫu lập kế hoạch, với các dòng minh họa giả định từ ba cộng đồng.

| Claim | Câu hỏi của reviewer | Thí nghiệm | Kết quả ủng hộ claim | Trạng thái |
|---|---|---|---|---|
| C1 (CV): Phương pháp đạt SOTA trên bài toán X | So với ai? Có công bằng không? | Bảng chính trên 3 benchmark chuẩn, cùng backbone và pre-training | Vượt baseline mạnh nhất trên cả 3 benchmark | Đã xong |
| C2 (CV): Module A xử lý tốt vật thể bị che khuất | Có thật do A, hay do thêm tham số? | Ablation thay A bằng khối cùng số tham số; đánh giá riêng tập con bị che khuất | Cải thiện trên tập con lớn hơn rõ rệt cải thiện tổng | Đang chạy |
| C3 (NLP): Phương pháp tổng quát hóa sang ngôn ngữ ít tài nguyên | Chỉ đúng với tiếng Anh? | Đánh giá trên nhiều ngôn ngữ thuộc các ngữ hệ khác nhau | Khoảng cách với baseline giữ nguyên hoặc tăng ở ngôn ngữ ít tài nguyên | Chưa làm |
| C4 (ML): Thuật toán ổn định hơn với learning rate lớn | Ổn định trong khoảng nào? Có do chọn seed? | Quét learning rate qua hai bậc độ lớn, 5 seed mỗi điểm | Tỉ lệ phân kỳ thấp hơn baseline ở mọi mức learning rate | Chưa làm |

Một hệ quả của cách làm này là mọi thí nghiệm *không* phục vụ claim nào trong bảng đều cần được xem xét lại. Chúng có thể vẫn hữu ích cho phần phụ lục (*supplementary material*) hoặc cho rebuttal, nhưng không nên chiếm chỗ trong phần chính của paper.

## Bộ thí nghiệm chuẩn theo từng cộng đồng

Ngoài các thí nghiệm sinh ra từ claim riêng của paper, mỗi cộng đồng có một "danh sách kiểm tra ngầm" mà reviewer mang theo khi đọc. Thiếu một mục trong danh sách đó thường bị nêu ra trong review như một điểm yếu, bất kể claim của paper là gì. Các mục dưới đây trình bày những kỳ vọng điển hình; chúng không phải là luật cứng, nhưng người viết nên có lý do rõ ràng nếu bỏ qua mục nào.

### Computer Vision

Trụ cột của một paper phương pháp CV là **so sánh trên benchmark chuẩn** mà cộng đồng công nhận, với đúng split và metric chuẩn: độ chính xác top-1 trên ImageNet cho phân loại, AP trên COCO cho phát hiện và phân đoạn đối tượng, mIoU trên ADE20K hoặc Cityscapes cho phân đoạn ngữ nghĩa, PSNR, SSIM và LPIPS cho tổng hợp góc nhìn, FID cho sinh ảnh, cùng các benchmark chuyên biệt như nuScenes, KITTI hay ScanNet cho 3D. Việc tự định nghĩa split hoặc metric riêng, nếu không có lý do thuyết phục, sẽ khiến reviewer nghi ngờ rằng thiết lập được chọn để có lợi cho phương pháp đề xuất. Ở một số benchmark có tập test được giữ kín, thông lệ là dùng tập validation cho ablation và chỉ báo cáo kết quả cuối trên tập test qua máy chủ đánh giá.

Tiếp theo là **ablation** cho từng thành phần và các hyperparameter quan trọng, được bàn kỹ ở mục riêng bên dưới. Cộng đồng CV cũng đặc biệt coi trọng **kết quả định tính** (*qualitative results*): các hình so sánh trực quan giữa phương pháp đề xuất và baseline trên cùng đầu vào. Những hình này có sức thuyết phục cao nhưng cũng dễ bị nghi ngờ là được chọn lọc, nên tốt nhất là nêu rõ cách chọn mẫu và đưa cả các trường hợp thất bại (*failure cases*). Nếu phương pháp có liên quan tới chi phí, cần báo cáo **hiệu quả tính toán**: số tham số, FLOPs, độ trễ và bộ nhớ đo trên phần cứng được nêu rõ. Cuối cùng, reviewer thường muốn thấy **tính tổng quát** qua nhiều backbone, nhiều dataset hoặc thiết lập chuyển miền (*cross-domain*).

### NLP

Kỳ vọng đầu tiên ở NLP là đánh giá trên **nhiều dataset, nhiều tác vụ hoặc nhiều ngôn ngữ**. Một paper chỉ đánh giá trên một dataset tiếng Anh thường nhận nhận xét về khả năng tổng quát hạn chế, và các paper khẳng định tính đa ngôn ngữ cần thử trên các ngôn ngữ thuộc những ngữ hệ và mức độ tài nguyên khác nhau, không chỉ các ngôn ngữ châu Âu phổ biến.

Thứ hai là **baseline mạnh, bao gồm các mô hình ngôn ngữ lớn**. Trong bối cảnh hiện nay, một câu hỏi gần như chắc chắn xuất hiện trong review là: phương pháp này so với việc đơn giản là prompt một LLM mạnh (zero-shot hoặc few-shot) thì thế nào? Paper cần trả lời câu hỏi đó bằng thí nghiệm, đồng thời báo cáo rõ phiên bản mô hình, prompt đã dùng và tham số giải mã, vì kết quả của LLM có thể thay đổi đáng kể theo những yếu tố này.

Thứ ba là **đánh giá bởi con người** (*human evaluation*) khi bài toán liên quan tới sinh văn bản, nơi các metric tự động thường không phản ánh đầy đủ chất lượng. Một human evaluation có giá trị cần một giao thức rõ ràng: số người đánh giá và trình độ của họ, hướng dẫn đánh giá, cách chọn mẫu, thang điểm, việc ẩn danh hệ thống và xáo trộn thứ tự trình bày, cũng như mức thù lao. Đi kèm là **mức độ đồng thuận giữa người đánh giá** (*inter-annotator agreement*), thường được đo bằng Cohen's kappa cho hai người, Fleiss' kappa cho nhiều người, hoặc Krippendorff's alpha cho các thiết lập tổng quát hơn. Độ đồng thuận thấp không nhất thiết làm hỏng paper, nhưng che giấu nó thì có.

Thứ tư là **phân tích lỗi** (*error analysis*): lấy một mẫu các lỗi của mô hình, phân loại thủ công theo nguyên nhân và báo cáo tỉ lệ từng loại. Phân tích này thường được reviewer NLP đánh giá cao vì nó cho thấy tác giả hiểu mô hình của mình chứ không chỉ đo nó. Thứ năm là **kiểm định ý nghĩa thống kê** khi chênh lệch giữa các hệ thống nhỏ. Các phương pháp phổ biến là paired bootstrap resampling và permutation test (còn gọi là approximate randomization); bài *The Hitchhiker's Guide to Testing Statistical Significance in Natural Language Processing* (ACL 2018) là một tài liệu tham khảo tốt để chọn kiểm định phù hợp.

Cuối cùng là vấn đề **nhiễm dữ liệu** (*data contamination*): dữ liệu test của benchmark có thể đã xuất hiện trong dữ liệu pre-training của mô hình ngôn ngữ lớn, khiến kết quả cao do "nhớ" chứ không do năng lực thật. Paper cần thảo luận rủi ro này và, khi có thể, kiểm tra nó, chẳng hạn bằng cách đo mức trùng lặp n-gram giữa dữ liệu test và dữ liệu huấn luyện đã biết, hoặc đánh giá trên dữ liệu được tạo ra sau thời điểm thu thập dữ liệu huấn luyện của mô hình. Nhiều câu hỏi kể trên cũng xuất hiện trong Responsible NLP Research checklist mà tác giả phải điền khi nộp bài qua ACL Rolling Review.

### Machine Learning

Đặc trưng nổi bật của paper ML là **thí nghiệm có kiểm soát**, thường trên bài toán đồ chơi hoặc dữ liệu tổng hợp nơi lời giải đúng đã biết. Những thí nghiệm này cho phép cô lập chính xác cơ chế mà paper khẳng định, điều khó làm trên benchmark thực vốn chứa quá nhiều yếu tố đan xen. Ví dụ, một paper về mô hình sinh có thể bắt đầu bằng một hỗn hợp Gaussian hai chiều để cho thấy phương pháp bao phủ đủ các mode, rồi mới chuyển sang dữ liệu ảnh. Thí nghiệm nhãn ngẫu nhiên trong *Understanding Deep Learning Requires Rethinking Generalization* là một ví dụ kinh điển khác: bằng cách thay nhãn thật bằng nhãn ngẫu nhiên, các tác giả kiểm soát chính xác lượng "cấu trúc" trong dữ liệu.

Thứ hai là **nhiều seed và error bar**. Kết quả của các phương pháp học sâu có thể dao động đáng kể giữa các lần chạy chỉ khác nhau ở seed ngẫu nhiên; bài *Deep Reinforcement Learning that Matters* (AAAI 2018) cho thấy trong học tăng cường, dao động này đủ lớn để đảo ngược kết luận so sánh giữa các thuật toán. NeurIPS Paper Checklist có câu hỏi riêng về việc báo cáo error bar và ý nghĩa thống kê. Khi báo cáo, cần nói rõ error bar biểu diễn gì (độ lệch chuẩn, sai số chuẩn hay khoảng tin cậy) và dựa trên bao nhiêu lần chạy.

Thứ ba là **so sánh công bằng về tài nguyên tính toán**: cùng số FLOPs, cùng số giờ GPU hoặc cùng ngân sách tune hyperparameter. Một phương pháp mới được tune kỹ so với baseline dùng hyperparameter mặc định không chứng minh được điều gì. Thứ tư là **độ nhạy với hyperparameter** (*sensitivity analysis*): cho thấy phương pháp hoạt động tốt trong một khoảng rộng các giá trị, và nêu rõ quy trình chọn hyperparameter. Ngoài ra, reviewer ML thường muốn thấy phương pháp được thử trên nhiều miền dữ liệu (ảnh, văn bản, dữ liệu bảng…) để chứng minh tính tổng quát, và với paper có phần lý thuyết, muốn thấy thí nghiệm kiểm chứng các dự đoán của lý thuyết.

### Tổng hợp

| Cộng đồng | Thí nghiệm thường được kỳ vọng | Nhận xét phổ biến khi thiếu |
|---|---|---|
| Computer Vision | Benchmark và metric chuẩn; ablation; kết quả định tính kèm failure cases; hiệu quả tính toán; nhiều backbone hoặc dataset | *"Missing comparison with recent SOTA"*, *"cherry-picked visualizations"*, *"no runtime analysis"* |
| NLP | Nhiều dataset hoặc ngôn ngữ; baseline LLM; human evaluation có giao thức và inter-annotator agreement; phân tích lỗi; kiểm định thống kê; thảo luận data contamination | *"Only evaluated on English"*, *"how does it compare to prompting GPT-class models?"*, *"no significance testing"* |
| Machine Learning | Thí nghiệm có kiểm soát hoặc toy; nhiều seed và error bar; so sánh cùng ngân sách tính toán; độ nhạy hyperparameter; nhiều miền dữ liệu | *"Results within noise"*, *"unfair tuning budget"*, *"toy experiments only"* hoặc ngược lại *"no controlled study"* |

## So sánh công bằng

Trong các loại phê bình mà một paper thực nghiệm có thể nhận, *"unfair comparison"* là loại nguy hiểm nhất, vì nó không chỉ chỉ ra một thiếu sót mà làm lung lay độ tin cậy của toàn bộ kết quả. Lịch sử của cả ba cộng đồng có nhiều ví dụ cho thấy những "tiến bộ" được báo cáo co lại đáng kể khi so sánh được làm lại một cách công bằng. Ở NLP, *On the State of the Art of Evaluation in Neural Language Models* (ICLR 2018) cho thấy kiến trúc LSTM tiêu chuẩn, khi được điều chuẩn và tune cẩn thận, vượt nhiều mô hình mới hơn trong bài toán language modeling. Ở ML, *Are GANs Created Equal?* (NeurIPS 2018) cho thấy với đủ ngân sách tìm kiếm hyperparameter, nhiều biến thể GAN đạt kết quả tương tự nhau. Ở CV, *A Metric Learning Reality Check* (ECCV 2020) đi tới kết luận tương tự cho metric learning. Bài học chung là: một baseline yếu không chỉ làm paper kém thuyết phục mà còn có thể khiến chính tác giả hiểu sai về giá trị phương pháp của mình.

Từ những bài học đó, có thể tổng hợp một danh sách kiểm tra để rà soát trước khi chốt bảng kết quả. Danh sách này áp dụng cho cả ba cộng đồng; một số mục đặc biệt quan trọng với một cộng đồng nhất định đã được ghi chú.

- [ ] **Cùng backbone và cùng pre-training.** Khác biệt giữa pre-training trên ImageNet-1k, ImageNet-22k hay dữ liệu ảnh và văn bản quy mô lớn có thể lớn hơn chính đóng góp của paper. Với NLP, điều tương tự áp dụng cho kích thước và phiên bản của mô hình nền.
- [ ] **Cùng dữ liệu huấn luyện.** Nếu phương pháp dùng thêm dữ liệu ngoài, kết quả phải được tách riêng và ghi rõ.
- [ ] **Cùng thiết lập huấn luyện**, như độ phân giải đầu vào, độ dài lịch huấn luyện và độ dài ngữ cảnh, hoặc ghi rõ khác biệt.
- [ ] **Nguồn gốc số liệu của baseline được ghi rõ**: lấy từ paper gốc hay do nhóm chạy lại bằng code chính thức, ví dụ bằng các ký hiệu † và ‡ kèm chú thích dưới bảng.
- [ ] **Ngân sách tune hyperparameter tương đương** cho phương pháp đề xuất và baseline.
- [ ] **Không tune trên tập test.** Chọn hyperparameter và checkpoint trên tập validation; nếu benchmark chỉ có tập validation công khai, phải nói rõ cách tránh khớp quá mức vào nó.
- [ ] **Nhiều seed** khi kết quả dao động lớn (few-shot, học tăng cường, dataset nhỏ, fine-tune LLM), báo cáo trung bình và độ lệch chuẩn qua ít nhất ba lần chạy.
- [ ] **Baseline mạnh nhất gần đây**, không chỉ những phương pháp cũ dễ vượt qua.
- [ ] **Với so sánh tốc độ**: cùng phần cứng, cùng batch size, cùng độ chính xác số học (FP32, FP16 hay BF16).
- [ ] **Với baseline LLM** (đặc biệt ở NLP): công sức thiết kế prompt tương đương cho mọi hệ thống, cùng phiên bản mô hình và cùng tham số giải mã.

!!! warning "Tập test là tài nguyên dùng một lần"
    Mỗi lần nhìn kết quả trên tập test rồi điều chỉnh phương pháp, tập test mất đi một phần giá trị như một thước đo độc lập. Nên quy ước trong nhóm rằng tập test chỉ được đánh giá cho các cấu hình đã được chốt, và mọi quyết định thiết kế đều dựa trên tập validation.

## Thiết kế ablation

Ablation trả lời hai câu hỏi mà mọi paper phương pháp đều phải đối mặt: mức cải thiện đến từ đâu, và vì sao không dùng một cách đơn giản hơn. Nếu không có ablation, reviewer không thể biết thành phần nào trong phương pháp thực sự quan trọng, và người đọc không thể học được gì để áp dụng cho bài toán của họ. Có bốn kiểu ablation chính, mỗi kiểu trả lời một câu hỏi khác nhau.

**Ablation cộng dồn** đi từ baseline, lần lượt thêm từng thành phần cho tới phương pháp đầy đủ. Kiểu này dễ đọc và cho thấy đóng góp của từng bước, nhưng phụ thuộc vào thứ tự thêm thành phần. **Ablation loại bỏ** (*leave-one-out*) bắt đầu từ phương pháp đầy đủ và bỏ từng thành phần một, cho thấy mỗi thành phần có cần thiết hay không khi các thành phần khác đã có mặt. **Ablation thay thế** giữ nguyên vị trí của một thành phần nhưng thay nó bằng các lựa chọn hợp lý khác, trả lời trực tiếp câu hỏi "vì sao không dùng cách đơn giản hơn". **Phân tích độ nhạy** quét một hyperparameter quan trọng qua một khoảng giá trị để cho thấy phương pháp không mong manh.

Một nguyên tắc thường bị bỏ qua là **kiểm soát yếu tố gây nhiễu**. Nếu thêm thành phần A làm tăng số tham số hoặc lượng tính toán, cần một biến thể đối chứng có cùng số tham số hoặc cùng chi phí nhưng không có cơ chế của A; nếu không, reviewer có quyền nghi ngờ rằng cải thiện chỉ đến từ việc mô hình lớn hơn. Bảng dưới đây (số liệu minh họa) cho thấy một ablation kết hợp cộng dồn và thay thế, trong đó dòng cuối là đối chứng về số tham số.

| Cấu hình | Số tham số | Metric |
|---|---|---|
| Baseline | 25M | 40.1 |
| + A | 27M | 41.5 |
| + A + B (đầy đủ) | 27M | 42.3 |
| Thay A bằng khối MLP cùng số tham số, giữ B | 27M | 40.6 |

Đọc bảng này, reviewer thấy rằng A đóng góp phần lớn cải thiện, B bổ sung thêm, và việc chỉ tăng tham số (dòng cuối) gần như không có tác dụng. Đó chính là bằng chứng cho thấy *cơ chế* của A, chứ không phải kích thước của nó, tạo ra khác biệt.

!!! tip "Chạy ablation trên thiết lập nhỏ hơn"
    Nhiều paper ở cả ba cộng đồng chạy ablation trên thiết lập rẻ hơn thiết lập chính, chẳng hạn lịch huấn luyện ngắn hơn, dataset con hoặc mô hình nhỏ hơn. Cách làm này hoàn toàn được chấp nhận nếu được ghi rõ trong paper và thiết lập nhỏ vẫn đủ để phân biệt các cấu hình; tốt nhất là kiểm tra trên thiết lập đầy đủ cho ít nhất cấu hình chính và một hai biến thể quan trọng.

## Ghi chép thí nghiệm

Phần cuối của bài nói về một việc có vẻ thuần kỹ thuật nhưng ảnh hưởng trực tiếp tới chất lượng và độ trung thực của paper: ghi chép thí nghiệm. Trong một dự án điển hình, nhóm tác giả có thể chạy hàng trăm thí nghiệm qua nhiều tháng, với nhiều phiên bản code và cấu hình. Khi viết paper, làm rebuttal hay chuẩn bị bản camera-ready (bản cuối cùng sau khi được chấp nhận), nhóm cần trả lời chính xác câu hỏi "con số này đến từ lần chạy nào, với code và cấu hình nào". Nếu không trả lời được, nhóm có nguy cơ báo cáo sai số liệu, không tái lập được kết quả khi reviewer yêu cầu, hoặc phải chạy lại toàn bộ khi cần sửa một bảng.

Mỗi lần chạy nên lưu được commit hash của code (và việc có thay đổi chưa commit hay không), cấu hình đầy đủ, seed, phiên bản dataset, checkpoint, log và kết quả. Với thí nghiệm dùng LLM qua API, cần lưu thêm tên và phiên bản mô hình, ngày gọi, prompt template và tham số giải mã, vì mô hình phía sau API có thể thay đổi theo thời gian. Với human evaluation, cần lưu toàn bộ nhãn thô của từng người đánh giá, không chỉ điểm trung bình. Các công cụ như Weights & Biases, MLflow hay TensorBoard giúp tự động hóa phần lớn việc này. Đoạn code dưới đây minh họa cách tối thiểu để gắn metadata vào mỗi lần chạy.

```python
import json
import subprocess
import time


def run_metadata(config: dict, seed: int) -> dict:
    """Thu thập metadata để mỗi kết quả truy được về đúng code và cấu hình."""
    commit = subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip()
    dirty = bool(subprocess.check_output(["git", "status", "--porcelain"], text=True).strip())
    return {
        "commit": commit,
        "uncommitted_changes": dirty,  # True nghĩa là kết quả có thể không tái lập từ commit
        "seed": seed,
        "config": config,
        "started_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    }


# Ví dụ: lưu cạnh checkpoint và log
# json.dump(run_metadata(cfg, seed=0), open(f"{run_dir}/meta.json", "w"), indent=2)
```

Bên cạnh công cụ tự động, nên duy trì một **bảng tổng** ánh xạ mỗi con số trong paper tới lần chạy tạo ra nó. Bảng này có thể đơn giản như một file CSV, nhưng giá trị của nó rất lớn khi cần kiểm tra lại số liệu trước deadline hoặc trả lời reviewer.

```text
paper_ref , run_id     , commit  , config                 , dataset , metric , value
Tab1-row5 , wandb/ab12 , 3f9c2e1 , cfgs/ours_r50_1x.yaml  , coco17  , AP     , 42.7
Tab3-row2 , wandb/cd34 , 3f9c2e1 , cfgs/ablate_noA.yaml   , coco17  , AP     , 41.0
Fig4-pt7  , mlflow/91  , a1b2c3d , cfgs/lr_sweep_7.yaml   , cifar10 , acc    , 93.4
```

## Tóm tắt

Thí nghiệm trong paper là bằng chứng được thiết kế có chủ đích, bắt đầu từ danh sách claim, đi qua những câu hỏi hoài nghi của reviewer và kết thúc bằng các thí nghiệm có kết quả ủng hộ và bác bỏ được xác định từ trước. Mỗi cộng đồng có bộ kỳ vọng riêng: CV chú trọng benchmark chuẩn, ablation, kết quả định tính và hiệu quả tính toán; NLP chú trọng nhiều dataset và ngôn ngữ, baseline LLM, human evaluation có giao thức, phân tích lỗi, kiểm định thống kê và nhiễm dữ liệu; ML chú trọng thí nghiệm có kiểm soát, nhiều seed kèm error bar, ngân sách tính toán công bằng và độ nhạy hyperparameter. So sánh công bằng là điều kiện tiên quyết để kết quả được tin cậy, ablation cho thấy cải thiện đến từ đâu và cần kiểm soát các yếu tố gây nhiễu, còn ghi chép thí nghiệm có hệ thống bảo đảm mọi con số trong paper đều truy được nguồn gốc.

## Bài tập

1. Viết danh sách ba đến năm claim cho dự án hiện tại và lập bảng kế hoạch theo mẫu trong bài. Với mỗi claim, ghi rõ kết quả nào sẽ ủng hộ và kết quả nào sẽ bác bỏ nó.
2. Đối chiếu kế hoạch thí nghiệm với bộ thí nghiệm chuẩn của cộng đồng mà dự án nhắm tới. Liệt kê những mục còn thiếu và, với mỗi mục, quyết định bổ sung hay chuẩn bị lý do để bỏ qua.
3. Chọn một paper gần với dự án và rà soát bảng kết quả chính của nó theo danh sách kiểm tra so sánh công bằng. Viết ba câu hỏi mà một reviewer khó tính có thể đặt ra cho paper đó.
4. Thiết kế bảng ablation cho phương pháp của dự án, bao gồm ít nhất một biến thể đối chứng về số tham số hoặc chi phí tính toán, và thiết lập hệ thống ghi chép sao cho mỗi ô trong bảng truy được về một lần chạy.
