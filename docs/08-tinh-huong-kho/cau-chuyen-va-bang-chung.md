# Khi câu chuyện và bằng chứng không khớp

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Nhận diện sáu tình huống trong đó bằng chứng không còn ủng hộ câu chuyện của paper, từ một ablation "phản chủ" đến một bug được phát hiện sau khi đã có kết quả đẹp.
    - Phân biệt giải thích với suy đoán, và dùng thí nghiệm tổng hợp có kiểm soát, probing, can thiệp có mục tiêu và phân tích theo tập con để thu hẹp khoảng cách giữa hai thứ.
    - Đổi khung một kết quả âm tính, một "reality check" hay một phê bình benchmark thành paper phân tích, và chọn nơi công bố phù hợp.
    - Viết công bằng về công trình trước khi bằng chứng cho thấy nó không mạnh như đã công bố, kể cả khi đó là công trình của chính nhóm.
    - Xử lý bug hoặc rò rỉ dữ liệu theo đúng thời điểm phát hiện.

Bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md) mô tả câu chuyện như một lập luận năm mắt xích, trong đó bằng chứng phải xác nhận cả giải pháp lẫn insight, và dành cho mỗi trường hợp "kết quả không như mong đợi" một đoạn ngắn. Bài này đi sâu vào một nhóm tình huống riêng: điều không khớp không nằm ở *độ lớn* của con số, chủ đề của bài [Khi con số không đẹp](con-so-khong-dep.md), mà ở *ý nghĩa* của nó. Con số có thể vẫn đẹp, nhưng bằng chứng lại ủng hộ một lời giải thích khác: phương pháp thắng vì lý do khác, thắng mà không ai hiểu vì sao, giả thuyết sai hoàn toàn, một baseline cũ được tune kỹ đứng đầu bảng, cải thiện đến từ lỗ hổng của benchmark, hoặc mọi thứ đứng trên một bug.

Sáu tình huống có chung một cấu trúc: nhóm tác giả phải chọn giữa *sửa câu chuyện cho khớp với bằng chứng*, công việc bình thường của nhà khoa học, và *sửa bằng chứng cho khớp với câu chuyện*, tức là bóp méo. Nguyên tắc dẫn đường là **paper bán hiểu biết, không bán phương pháp**: khi tách rời phát hiện, phương pháp và bằng chứng, nhiều tình huống tưởng như thảm họa lại chứa một phát hiện giá trị hơn câu chuyện ban đầu.

Mỗi tình huống, đánh số từ 18 đến 23, đi qua năm bước: nhận diện, chẩn đoán, các lối ra, cách viết và điều không được làm. Xuyên suốt, chúng ta dùng một phép thử: *nếu reviewer được xem toàn bộ log thí nghiệm, claim có còn đứng được không?* Ranh giới này được bàn kỹ ở bài [Đóng khung lại hay bóp méo: ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 18: Phương pháp hoạt động, nhưng không vì lý do đã nêu

### Nhận diện

Một nhóm làm semantic segmentation đề xuất module "boundary-aware attention" với câu chuyện gọn gàng: các phương pháp hiện có xử lý vùng biên kém, và module mới sửa được điểm yếu đó (ví dụ giả định). Bảng chính cho thấy mức tăng 2,1 điểm mIoU. Khi làm ablation, một đồng tác giả chạy "phương pháp đầy đủ nhưng bỏ module", vẫn giữ lịch huấn luyện dài gấp đôi và bộ augmentation mạnh mà nhóm đã thêm dần trong quá trình phát triển. Kết quả chỉ thấp hơn 0,3 điểm, trong khi baseline ở bảng chính chạy với recipe của paper gốc (số liệu minh họa). Gần như toàn bộ cải thiện đến từ công thức huấn luyện (*training recipe*), không phải từ module được vẽ trong Figure 1.

Dấu hiệu nhận biết: ablation loại bỏ cho thấy thành phần "then chốt" đóng góp ít, có khi nhỏ hơn độ dao động giữa các seed; baseline được chạy với recipe khác; cải thiện không tập trung ở chỗ insight dự đoán; và nhóm ngần ngại chạy thí nghiệm "baseline với cùng recipe".

### Chẩn đoán

Trong một dự án dài, nhiều thay đổi tích lũy cùng lúc nhưng không được chú ý như nhau: module mới được đặt tên và vẽ thành hình, còn tăng epoch hay đổi augmentation là thay đổi "hậu trường" ít ai ghi lại. Lipton và Steinhardt, trong *Troubling Trends in Machine Learning Scholarship* (2018), xếp hiện tượng này vào bốn xu hướng đáng lo của ngành: không xác định được nguồn gốc của cải thiện thực nghiệm. Khi thiếu ablation đúng cách, đôi khi chỉ một trong nhiều thay đổi tạo ra kết quả, và người đọc tin sai rằng mọi thay đổi đều cần thiết. *Revisiting ResNets: Improved Training and Scaling Strategies* (Bello et al., NeurIPS 2021) cho thấy hiện tượng này ở quy mô cả lĩnh vực: tác động của kiến trúc mới thường bị lẫn với thay đổi đồng thời về phương pháp huấn luyện và chiến lược scaling, và hai yếu tố sau có thể quan trọng hơn chính kiến trúc.

Nhóm cần trả lời bốn câu hỏi. Ablation có đúng không, hay một cờ cấu hình không được truyền khiến module vẫn chạy? Baseline có được hưởng cùng recipe và ngân sách tuning không (mục *So sánh công bằng* trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md))? Module có tác dụng ở chế độ mà insight dự đoán không, như chất lượng biên? Và recipe có gì mới? Ở câu hỏi thứ ba cần cảnh giác: lục hết tập con này đến tập con khác cho tới khi thấy chỗ có lợi là điều Gelman và Loken gọi là "khu vườn của những lối rẽ" (*the garden of forking paths*), nơi kết quả rất dễ là ngẫu nhiên dù không ai cố ý gian lận.

### Các lối ra

**Lối ra thứ nhất: viết lại câu chuyện quanh nguyên nhân thật.** Nếu recipe chứa điều đáng học, chẳng hạn nhiều phương pháp gần đây được so với baseline chạy recipe lỗi thời, đó là câu chuyện mới. *Revisiting ResNets* là mẫu mực: paper tách ba yếu tố kiến trúc, huấn luyện, scaling, rồi khuyến nghị dùng ResNet cập nhật làm baseline; *Bag of Tricks for Image Classification with Convolutional Neural Networks* (He et al., CVPR 2019) là một mẫu khác. Lối ra này cần nghiên cứu có hệ thống: ablation cộng dồn qua từng thay đổi recipe, nhiều phương pháp, backbone và dataset. Nó không phù hợp khi "recipe" chỉ là huấn luyện lâu hơn.

**Lối ra thứ hai: giữ module nhưng thu hẹp claim.** Nếu sau khi đồng bộ recipe, module vẫn giúp ổn định ở đúng chỗ insight dự đoán, claim phải nhỏ lại: module cải thiện chất lượng biên, không phải độ chính xác tổng thể. Kết quả cần lặp qua nhiều seed và bảng chính vẫn báo cáo con số tổng thể. Khi cả recipe lẫn module cùng đóng góp, có thể trình bày cả hai nếu nói rõ phần nào đến từ đâu, nhưng mỗi đóng góp được liệt kê là một claim phải bảo vệ (xem bài [Ghép ý tưởng và "độn" đóng góp](ghep-va-don.md)).

**Lối ra thứ ba: dừng lại hoặc đổi hướng.** Nếu module không giúp ở đâu và recipe không có gì mới, ở đây không có paper mà nhóm định viết. Chi phí chìm không phải lý do để tiếp tục; recipe mạnh vẫn là baseline tốt cho dự án sau.

### Viết thế nào

Ablation phải là nhân vật chính, không phải phụ lục. Nếu phát hiện là "recipe quan trọng hơn kiến trúc", abstract phải nói điều đó, và bảng chính phải có dòng "baseline + recipe mới" ngay cạnh phương pháp đề xuất. Paper tự trả lời câu hỏi *"Is the improvement simply due to longer training?"* trước khi reviewer hỏi sẽ được tin tưởng hơn mọi bảng SOTA.

<div class="bad" markdown>
*"We propose BANet, whose boundary-aware attention module improves mIoU by 2.1 points over the baseline (Table 1). Further ablations are provided in the appendix."*

Baseline chạy recipe cũ và ablation then chốt bị đẩy vào appendix, nên người đọc tin sai rằng module tạo ra 2,1 điểm.
</div>

<div class="good" markdown>
*"Updating the training recipe alone recovers 1.8 of the 2.1-point gap. On top of this stronger baseline, our boundary module adds a smaller but consistent gain concentrated on object boundaries (+0.3 mIoU, +1.9 boundary F-score, mean over 5 seeds)."*

Claim khớp với bằng chứng, và module được đánh giá đúng sức (số liệu minh họa).
</div>

Reviewer CV hay hỏi về recipe khi baseline được chép số liệu từ paper cũ; reviewer ML nhạy cảm nhất với vấn đề này; reviewer NLP hỏi tương tự dưới dạng "có phải do nhiều dữ liệu hoặc compute hơn không".

### Điều không được làm

Không giấu ablation: không bỏ dòng "baseline + recipe mới", không đẩy nó vào appendix mà không nhắc trong phần chính, và không viết phần Method như thể module là nguồn gốc cải thiện khi chính ablation nói khác. Xem bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 19: Phương pháp hoạt động mà không giải thích được vì sao

### Nhận diện

Một nhóm làm dịch máy cho ngôn ngữ ít tài nguyên phát hiện rằng khi fine-tune một mô hình đa ngôn ngữ, trộn thêm một tỉ lệ nhỏ cặp câu có phía nguồn bị xáo trộn thứ tự từ làm chất lượng dịch tăng ổn định trên nhiều cặp ngôn ngữ, qua nhiều seed (ví dụ giả định). Ý tưởng đến từ một lần cấu hình sai. Nhóm có vài giả thuyết, như regularization hay giảm phụ thuộc vào trật tự từ của ngôn ngữ giàu tài nguyên, nhưng chưa kiểm chứng giả thuyết nào, vậy mà bản nháp viết rằng việc xáo trộn "buộc mô hình học biểu diễn độc lập với ngôn ngữ".

Khác với Tình huống 18, ở đây chưa có lời giải thích nào được kiểm chứng. Dấu hiệu là: bản nháp dùng động từ khẳng định như *forces*, *ensures* mà không có thí nghiệm tương ứng; mỗi đồng tác giả giải thích một kiểu; và nhóm không dự đoán được khi nào phương pháp thất bại.

### Chẩn đoán

Trong deep learning, tìm ra thứ hoạt động thường nhanh hơn nhiều so với hiểu vì sao nó hoạt động. Batch Normalization (Ioffe & Szegedy, ICML 2015) giải thích hiệu quả của phương pháp bằng việc giảm *internal covariate shift*; Lipton và Steinhardt dùng chính ví dụ này để minh họa xu hướng trình bày suy đoán dưới vỏ bọc giải thích, vì khái niệm không được định nghĩa đủ chặt để kiểm chứng, một số công trình sau cho thấy lời giải thích có thể không đúng, vậy mà nó vẫn bị nhắc lại như sự thật. Bài học có hai mặt: phương pháp hữu ích vẫn đứng vững dù lời giải thích lung lay, nhưng lời giải thích không có bằng chứng, khi được viết như sự thật, có thể dẫn cả cộng đồng đi sai hướng.

Nhóm cần tự hỏi: hiệu ứng có thật không, hay do một khác biệt cấu hình khác, chẳng hạn câu xáo trộn được *thêm vào* nên mô hình huấn luyện nhiều bước hơn? Và quan trọng nhất, mỗi giả thuyết dự đoán điều gì *khác nhau*? Nếu chỉ là regularization chung, dropout hay label smoothing ở cường độ tương đương cũng cho hiệu ứng tương tự; nếu là giảm phụ thuộc trật tự từ, hiệu ứng sẽ lớn hơn ở các cặp ngôn ngữ có trật tự từ khác nhau nhiều.

### Các lối ra

**Lối ra thứ nhất: thu hẹp khoảng cách bằng công cụ phân tích.** Đây là lối ra tốt nhất khi hiệu ứng vững và còn thời gian. Mục tiêu không phải lời giải thích hoàn chỉnh, mà là ít nhất một thí nghiệm *có thể đã bác bỏ* giả thuyết nhưng không bác bỏ, và một giả thuyết cạnh tranh bị loại trừ. Bốn công cụ bổ sung cho nhau. **Thí nghiệm tổng hợp có kiểm soát** dựng một bài toán đơn giản hóa, như dịch giữa các ngôn ngữ nhân tạo có trật tự từ điều khiển được, nơi mỗi giả thuyết dự đoán khác nhau (mục *Toy experiment* trong bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md)). **Probing** huấn luyện một bộ phân loại đơn giản trên biểu diễn ẩn để đo một loại thông tin, như vị trí từ, được mã hóa nhiều hay ít; nhưng probe đọc được thông tin không có nghĩa mô hình *dùng* nó. **Can thiệp có mục tiêu** thay đổi đúng yếu tố mà giả thuyết nói tới, chẳng hạn thay xáo trộn ngẫu nhiên bằng xáo trộn giữ nguyên cụm từ; vì chạm tới quan hệ nhân quả, nó mạnh hơn probing. **Phân tích theo tập con** chia kết quả theo cặp ngôn ngữ hay độ dài câu để xem hiệu ứng có tập trung đúng nơi giả thuyết dự đoán; công cụ này rẻ và thuyết phục nếu các phép chia được định trước và đều được báo cáo.

**Lối ra thứ hai: trình bày như một phát hiện thực nghiệm, tách bạch phần đã biết với phần giả thuyết.** Paper vẫn có giá trị nếu claim đặt đúng: hiện tượng vững trong phạm vi nào, có những giả thuyết nào, giả thuyết nào đã bị loại trừ. Lipton và Steinhardt nêu một gương tốt: paper giới thiệu dropout bàn khá dài về liên hệ với sinh sản hữu tính, nhưng cách ly phần suy đoán đó trong một mục "Motivation" riêng. Lối ra này phù hợp khi hiệu ứng đủ lớn và rộng để đáng quan tâm tự thân; với hiệu ứng nhỏ và hẹp, thiếu giải thích khiến reviewer coi phương pháp là mẹo vặt.

**Lối ra thứ ba: chọn venue theo mức độ hiểu đã đạt được.** Một phát hiện thực nghiệm tập trung, kiểm tra kỹ nhưng chưa có cơ chế, hợp với short paper hoặc Findings của các hội nghị ACL (mục *Các loại paper và cách viết tương ứng* trong bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md)), hoặc với TMLR. Main track NeurIPS, ICML, ICLR thường đòi hỏi nhiều hơn về cơ chế; đôi khi nên hoãn một chu kỳ để làm phân tích.

### Viết thế nào

Kỹ năng cốt lõi là hiệu chỉnh ngôn ngữ theo ba tầng bằng chứng: điều đã chứng minh (*we show*, *we find*), điều phù hợp với bằng chứng (*our results suggest*, *is consistent with*), và suy đoán (*we hypothesize*, *one possible explanation is*). Cụm *we hypothesize* đúng chỗ khi nêu một giả thuyết mà paper kiểm tra ngay sau đó, hoặc một giả thuyết chưa kiểm tra trong Discussion hay Limitations. Nó bị dùng sai khi làm lá bùa ở một câu rồi các đoạn sau coi giả thuyết là đã chứng minh, hoặc khi gắn cho một điều đã có bằng chứng mạnh.

<div class="bad" markdown>
*"Source shuffling forces the model to learn language-agnostic representations, which explains the improvements on low-resource pairs."*

Các động từ *forces* và *explains* khẳng định một cơ chế mà không thí nghiệm nào trong paper đo được.
</div>

<div class="good" markdown>
*"We hypothesize that source shuffling reduces reliance on word-order patterns inherited from high-resource languages. Consistent with this, the gain is larger for pairs with divergent word order (Table 4) and largely disappears when shuffling preserves local phrases (Table 5), while dropout and label smoothing at matched strength do not reproduce it."*

Giả thuyết được gắn nhãn, bằng chứng ủng hộ và thí nghiệm loại trừ được nêu cụ thể.
</div>

Reviewer **Machine Learning** đặt câu hỏi "vì sao" lên hàng đầu: phương pháp không kèm hiểu biết dễ bị coi là *incremental*, và paper kiểu "hiệu ứng có thật nhưng chưa biết vì sao" hiếm khi qua main track ML, trừ khi hiệu ứng rất rộng và bất ngờ. Reviewer **Computer Vision** coi benchmark mạnh và ablation kỹ là bằng chứng chính, ít khi bắt buộc giải thích cơ chế, và thường chấp nhận attention map như một dạng "giải thích", điều mà Tình huống 22 cho thấy cần thận trọng. Reviewer **NLP** kỳ vọng phân tích lỗi, ví dụ ngôn ngữ và kết quả chia theo hiện tượng ngôn ngữ.

### Điều không được làm

Không bịa cơ chế và không viết suy đoán bằng ngôn ngữ của sự thật. Paper không bắt buộc kể ý tưởng đến từ một lần cấu hình sai, nhưng dựng lời giải thích sau khi thấy kết quả rồi trình bày như thể phương pháp được thiết kế từ nó là *HARKing* (*hypothesizing after the results are known*, Kerr 1998). Cũng không thêm định lý trang trí, điều Lipton và Steinhardt gọi là "mathiness". Xem bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 20: Giả thuyết sai hoàn toàn: kết quả âm tính

### Nhận diện

Một nhóm nghiên cứu tính bền vững dưới dịch chuyển phân phối (*distribution shift*) xuất phát từ một quan điểm được nhắc đến nhiều: cực tiểu "phẳng" tổng quát hóa tốt hơn, nên một regularizer khuyến khích độ phẳng sẽ giúp mô hình bền hơn ngoài phân phối (ví dụ giả định). Sau gần một năm, regularizer không cải thiện ổn định; và khi đo độ phẳng bằng nhiều thước đo trên một tập lớn mô hình, tương quan giữa độ phẳng và độ chính xác ngoài phân phối yếu và đổi dấu tùy thước đo.

Khác với trường hợp phương pháp "thua baseline", ở đây chính giả thuyết bị bằng chứng phản bác: các lần sửa phương pháp không thay đổi bức tranh, và nhóm bắt đầu nghi ngờ niềm tin xuất phát. Khi chỉ phương pháp thua còn giả thuyết có thể đúng, xem bài [Khi con số không đẹp](con-so-khong-dep.md).

### Chẩn đoán

Kết quả âm tính xuất hiện khi giả thuyết dựa trên một niềm tin chưa được kiểm tra ở bối cảnh mới, hoặc chỉ đúng ở quy mô nhỏ. Một kết quả âm tính chỉ mạnh bằng quá trình tìm kiếm đã tạo ra nó: "không tìm thấy bằng chứng cho hiệu ứng" khác xa "có bằng chứng rằng không có hiệu ứng", và giá trị của paper âm tính nằm ở việc thu hẹp khoảng cách đó.

Vì vậy, chẩn đoán ở đây nghiêm ngặt hơn. Cài đặt có đúng không? Phép thử mạnh nhất là một *sanity check dương tính*: tái lập được chính kết quả dương tính mà niềm tin dựa vào. Thí nghiệm có đủ mạnh để thấy hiệu ứng nếu nó tồn tại không? Paper âm tính tốt báo cáo khoảng tin cậy quanh giá trị không, thay vì chỉ nói "không có ý nghĩa thống kê" (mục *Số liệu và ý nghĩa thống kê* trong bài [Experiments](../02-viet-tung-phan/experiments.md)). Phương pháp bị bác bỏ đã được tune đủ chưa? Và đây là niềm tin của ai: chỉ của nhóm, hay được nhiều paper dùng làm động lực?

### Các lối ra

Một kết quả âm tính đáng công bố khi nó phản bác một niềm tin thật của cộng đồng, chỉ ra được bằng trích dẫn; được làm chặt chẽ; và giải thích được, ít nhất một phần, vì sao niềm tin hình thành và vì sao nó không đứng vững. Thiếu điều kiện cuối, paper chỉ là báo cáo thất bại.

**Lối ra thứ nhất: đổi khung thành một paper phân tích.** Câu hỏi trung tâm chuyển từ "phương pháp X có tốt không" sang "niềm tin Y có đúng không, và trong điều kiện nào"; phương pháp ban đầu lùi xuống làm công cụ đo. Ví dụ tiêu biểu là cuộc tranh luận về attention trong NLP, khi nhiều paper ngầm coi trọng số attention là chỉ báo mức độ quan trọng của input. *Attention is not Explanation* (Jain & Wallace, NAACL 2019) kiểm tra trực tiếp niềm tin này: trọng số attention thường không tương quan với các thước đo mức độ quan trọng dựa trên gradient, và có thể tìm được những phân phối attention rất khác nhau mà vẫn cho cùng dự đoán. *Attention is not not Explanation* (Wiegreffe & Pinter, EMNLP 2019) phản biện rằng kết luận phụ thuộc vào định nghĩa "giải thích", rằng các phân phối thay thế được dựng riêng cho từng ví dụ chứ không đến từ một mô hình được huấn luyện, và đề xuất các kiểm tra khác, như so với baseline dùng trọng số attention đều.

Cuộc tranh luận cho thấy ba điều. Kết quả âm tính về một niềm tin phổ biến có thể trở thành paper có ảnh hưởng ở main track. Nó mời gọi phản biện, nên phải định nghĩa thuật ngữ chính xác và lường trước phản biện mạnh nhất; paper thứ hai tấn công đúng vào định nghĩa và cách dựng phân phối đối kháng của paper thứ nhất. Và paper phản biện cũng là đóng góp: cả cuộc tranh luận buộc cộng đồng làm rõ thế nào là một lời giải thích.

**Lối ra thứ hai: biến kết quả âm tính thành điều kiện biên.** Niềm tin thường không sai hoàn toàn mà chỉ đúng trong một số điều kiện; có thể độ phẳng vẫn dự đoán được độ bền khi so các mô hình cùng recipe, nhưng mất tác dụng khi so giữa các recipe. *Rethinking ImageNet Pre-training* (He, Girshick, Dollár; ICCV 2019) có tinh thần này: thay vì tuyên bố pre-training vô ích, paper cho thấy trên COCO, huấn luyện từ đầu có thể đạt kết quả tương đương nếu huấn luyện đủ lâu. Điều kiện biên phải được kiểm chứng trên thiết lập độc lập, không chỉ tìm ra bằng cách thử nhiều cách chia.

**Lối ra thứ ba: chọn nơi công bố dành cho kết quả âm tính.** Khi niềm tin là trung tâm của một hướng nghiên cứu và bằng chứng mạnh, main track hoàn toàn khả thi. Khi phạm vi hẹp hơn, có những nơi được thiết kế riêng: workshop *I Can't Believe It's Not Better!* (ICBINB) tại NeurIPS từ năm 2020, dành cho kết quả lẽ ra phải tốt nhưng không; workshop *Insights from Negative Results in NLP*, từ năm 2020, đi cùng các hội nghị ACL và EMNLP; và TMLR, với tiêu chí là claim có được bằng chứng ủng hộ chính xác, rõ ràng và có người quan tâm không, thay vì mức "nổi bật" như hội nghị. Workshop có proceedings có thể ảnh hưởng tới việc nộp bản mở rộng sau này (mục *Dual submission và workshop có proceedings* trong bài [Chuẩn bị nộp bài](../04-nop-va-sau-nop/submission.md)).

**Lối ra thứ tư: dừng lại và chuyển hướng.** Khi niềm tin chỉ là của nhóm, hoặc chi phí để làm kết quả âm tính đủ chặt vượt quá giá trị của nó, nên dừng (mục *Pilot experiment và tiêu chí dừng* trong bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md)).

### Viết thế nào

Paper âm tính phải thuyết phục người đọc về bốn điều theo thứ tự: niềm tin tồn tại và có ảnh hưởng; phép thử công bằng; phạm vi kết luận chính xác; và có lời giải thích. Tiêu đề nên nêu phát hiện, nhưng không giật gân vượt phạm vi.

<div class="bad" markdown>
*"We tried to improve OOD robustness with flatness regularization, but it did not work. We report our negative results in the hope that they will be useful."*

Đoạn văn kể chuyện thất bại thay vì nêu niềm tin bị phản bác, và không cho lý do để tin phép thử là công bằng.
</div>

<div class="good" markdown>
*"A widely held view is that flatter minima generalize better under distribution shift. Across 3 architectures, 5 shift benchmarks and 4 flatness measures, flatness is not a consistent predictor of OOD accuracy once the training recipe is held fixed. Our implementation reproduces the in-distribution results that motivated this view (Sec. 3), ruling out a failed replication."*

Đoạn văn nêu niềm tin, phạm vi phép thử, kết quả và lý do để tin vào kết quả (số liệu minh họa).
</div>

Cộng đồng **Machine Learning** cởi mở với paper "hiểu biết" làm kỹ. Cộng đồng **NLP** có truyền thống phân tích và tái lập, và ARR có các loại đóng góp như phân tích mô hình hay nghiên cứu tái lập. Cộng đồng **Computer Vision** dè dặt hơn với kết quả âm tính thuần túy ở main track, nhưng đón nhận paper thách thức một giả định phổ biến bằng thí nghiệm quy mô lớn. Ở cả ba nơi, ba phản biện quen thuộc là "tune chưa đủ", "cài đặt có thể sai" và "claim quá rộng"; paper tốt trả lời cả ba ngay trong bản nộp.

### Điều không được làm

Không lục tìm một tập con thắng rồi viết như giả thuyết ban đầu. Cũng không phóng đại một kết quả âm tính hẹp thành tuyên bố cả một hướng nghiên cứu là sai, không chọn cấu hình yếu cho phương pháp muốn bác bỏ, và không chế giễu những người đã đưa ra niềm tin đó. Xem bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 21: Phát hiện một baseline đơn giản, được tune kỹ, mạnh hơn mọi phương pháp phức tạp

### Nhận diện

Một nhóm làm phân loại ảnh ít mẫu (*few-shot classification*) bằng meta-learning cài đặt lại baseline đơn giản nhất: một bộ phân loại tuyến tính trên đặc trưng của backbone đã pre-train, tune với cùng ngân sách như phương pháp của nhóm (ví dụ giả định). Baseline này vượt phương pháp mới của nhóm, và khi sáu phương pháp meta-learning gần đây được chạy trên cùng backbone và cùng giao thức, nó vượt cả sáu trên phần lớn benchmark. Một trong sáu phương pháp đó là paper của chính nhóm năm trước.

Dấu hiệu báo trước gồm: số liệu baseline trong các paper trước thấp hơn nhiều so với khi tự chạy cẩn thận; các paper khác nhau về backbone và augmentation nhưng vẫn được xếp chung một bảng; và hyperparameter baseline được chép từ paper cũ.

### Chẩn đoán

Nguyên nhân mang tính hệ thống hơn cá nhân. Sculley và cộng sự, trong *Winner's Curse? On Pace, Progress, and Empirical Rigor* (ICLR 2018 workshop), chỉ ra rằng áp lực "thắng bảng" làm giảm sự chặt chẽ thực nghiệm: người đề xuất phương pháp tự nhiên tune phương pháp của họ kỹ hơn baseline. Từ đó ra đời thể loại *reality check*, đánh giá lại có hệ thống một dòng phương pháp dưới giao thức công bằng, có ở cả ba cộng đồng. Melis, Dyer và Blunsom (*On the State of the Art of Evaluation in Neural Language Models*, ICLR 2018) cho thấy LSTM chuẩn được regularize và tune kỹ vượt nhiều kiến trúc mới hơn. Henderson và cộng sự (*Deep Reinforcement Learning that Matters*, AAAI 2018) cho thấy kết quả deep RL nhạy với seed, hyperparameter và chi tiết cài đặt, và kêu gọi chuẩn báo cáo. Lucic và cộng sự (*Are GANs Created Equal?*, NeurIPS 2018) không thấy thuật toán nào được thử vượt trội nhất quán so với GAN gốc khi được tune đủ. Liu và cộng sự (*Rethinking the Value of Network Pruning*, ICLR 2019) cho thấy fine-tune mô hình đã prune thường không tốt hơn huấn luyện kiến trúc đó từ đầu. Musgrave, Belongie và Lim (*A Metric Learning Reality Check*, ECCV 2020) cho thấy dưới so sánh công bằng, cải thiện được công bố của nhiều phương pháp metric learning thu hẹp đáng kể; *Rethinking ImageNet Pre-training* cũng thuộc dòng này.

Trước khi viết, cần hỏi: so sánh có công bằng theo *cả hai chiều* không, hay nhóm đang tune baseline kỹ và tune phương pháp phức tạp sơ sài? Nhóm có tái lập được số liệu công bố bằng code chính thức không; "không tái lập được" và "tái lập được nhưng baseline vẫn mạnh hơn" là hai câu chuyện khác nhau. Và phát hiện có vững qua backbone, dataset và ngân sách tính toán không?

### Các lối ra

**Lối ra thứ nhất: viết một paper reality check đầy đủ.** Paper có bốn đóng góp gắn chặt: giao thức công bằng và tái lập được, đợt đánh giá lại có hệ thống trên tập phương pháp đại diện, phát hiện rút ra, và khuyến nghị cho cộng đồng. Lối ra phù hợp khi ngân sách tuning ngang nhau và được khai báo, kết quả lặp qua nhiều seed, và code được công bố để người khác thêm phương pháp vào giao thức. Các ví dụ trên cho thấy thể loại này được nhận ở main track của cả ba cộng đồng; khi trọng tâm là giao thức hay bộ đánh giá, NeurIPS Datasets and Benchmarks Track (từ 2021) và TMLR là các lựa chọn tự nhiên.

**Lối ra thứ hai: baseline trở thành phương pháp.** Nếu baseline mạnh nhờ vài thành phần không hiển nhiên, có thể trình bày nó như một phương pháp đơn giản kèm ablation, như *Simple Baselines for Human Pose Estimation and Tracking* (Xiao, Wu, Wei; ECCV 2018) chủ động tự định vị là một baseline đơn giản để đánh giá ý tưởng mới. Lối ra này cần có điều để học ngoài "tune kỹ hơn" (xem bài [Khi novelty và hiệu quả lệch pha](novelty-va-hieu-qua.md)).

**Lối ra thứ ba: đối diện trực tiếp khi phương pháp của nhóm nằm trong số bị vượt.** Đây là phần khó nhất về cảm xúc: công bố reality check nghĩa là công khai thừa nhận paper cũ không mạnh như đã viết, và đồng tác giả cũ, có khi cả người hướng dẫn, có thể không muốn điều đó. Nhưng lựa chọn đúng gần như luôn là đưa phương pháp của nhóm vào đánh giá với *đúng cùng* cách đối xử và nói rõ trong paper; reviewer khó nghi ngờ động cơ của một nhóm tự đặt công trình của họ lên bàn cân. Lipton và Steinhardt làm đúng như vậy: họ lấy chính paper của họ làm ví dụ xấu, và ưu tiên chọn ví dụ từ các nhà nghiên cứu đã có vị trí vững thay vì sinh viên. Nhóm nên cập nhật arXiv và README của paper cũ với ghi chú dẫn tới phát hiện mới, và thảo luận với mọi đồng tác giả cũ trước khi nộp (xem bài [Áp lực từ bên ngoài](ap-luc-ben-ngoai.md)).

**Lối ra thứ tư: dùng baseline mạnh trong paper tiếp theo.** Khi phát hiện hẹp hoặc một reality check đầy đủ quá tốn kém, nhóm đưa baseline mạnh vào paper phương pháp kế tiếp, và phương pháp mới phải vượt chính baseline đó. Khi phát hiện chỉ liên quan tới một paper, ML Reproducibility Challenge là hình thức phù hợp.

### Viết thế nào

Paper reality check phải thuyết phục chính những người có phương pháp bị đánh giá, vì họ hiểu bài toán nhất và có thể là reviewer. Có ba nguyên tắc. **Công bằng và hào phóng với công trình trước**: mô tả vấn đề như thuộc tính của giao thức chứ không của con người, và ghi nhận những ý tưởng có thể vẫn có giá trị ở chế độ khác. **Giao thức tái lập được**: backbone, ngân sách tuning, cách chọn hyperparameter, số seed, và số liệu công bố đặt cạnh số liệu tái lập. **Khuyến nghị cụ thể** mà cộng đồng làm được ngay.

<div class="bad" markdown>
*"We show that years of meta-learning research have made no real progress: a simple linear classifier beats all of these methods, whose reported gains are due to unfair comparisons."*

Câu văn phán xét cả lĩnh vực, quy lỗi cho tác giả, vượt phạm vi thí nghiệm, và biến những reviewer am hiểu nhất thành đối thủ.
</div>

<div class="good" markdown>
*"When all methods share the same backbone, input resolution and tuning budget, a linear classifier on frozen features matches or outperforms the meta-learning methods we evaluate on 4 of 5 benchmarks, including our own prior method [7]. Several of these methods introduce ideas that may matter in other regimes (Sec. 6.2). We release our protocol and recommend reporting the tuning budget for all baselines."*

Claim gắn với điều kiện cụ thể, công trình trước được ghi nhận, phương pháp của nhóm được đặt lên bàn cân, và có khuyến nghị làm được (số liệu minh họa).
</div>

Reviewer **Machine Learning** đánh giá cao nghiên cứu thực nghiệm quy mô lớn và hỏi nhiều về ý nghĩa thống kê. Reviewer **Computer Vision** hỏi về độ phủ: bao nhiêu backbone, phát hiện có đúng với mô hình lớn hơn không. Ở **NLP**, nghiên cứu tái lập là một loại đóng góp được nêu rõ trong ARR. Ở cả ba nơi, tác giả của các phương pháp bị đánh giá sẽ soi kỹ phần cài đặt lại, nên cần dùng code chính thức khi có.

### Điều không được làm

Không tune baseline của nhóm thật kỹ trong khi chạy phương pháp đối thủ với cấu hình mặc định, vì đó là phiên bản ngược của chính lỗi đang phê phán. Không loại phương pháp của nhóm khỏi đánh giá để tránh mất mặt, không im lặng về paper cũ khi biết nó bị vượt, và không suy diễn động cơ của tác giả trước. Xem bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 22: Phát hiện mức cải thiện đến từ lỗi hoặc thiên lệch của benchmark

### Nhận diện

Một nhóm đề xuất phương pháp suy luận nhiều bước cho đọc hiểu trắc nghiệm, cải thiện 4 điểm trên một benchmark phổ biến (ví dụ giả định, số liệu minh họa). Khi phân tích lỗi, nhóm thấy mô hình chọn đáp án dài nhất với tỉ lệ cao bất thường. Một bộ phân loại chỉ nhìn các phương án trả lời, không nhìn đoạn văn và câu hỏi, đạt độ chính xác cao hơn hẳn mức ngẫu nhiên, vì đáp án đúng thường dài hơn và lặp lại từ của câu hỏi. Trên một tập con được cân bằng độ dài, cải thiện của nhóm gần như biến mất.

Dấu hiệu gồm: mô hình vẫn làm tốt khi bỏ đi một phần input; cải thiện tập trung ở ví dụ có dấu hiệu bề mặt; hiệu năng giảm mạnh trên tập kiểm tra mới thu thập theo cách tương tự; và mô hình mắc lỗi mà người hiểu tác vụ không bao giờ mắc.

### Chẩn đoán

Benchmark được tạo theo một quy trình, và quy trình nào cũng để lại dấu vết. *Annotation Artifacts in Natural Language Inference Data* (Gururangan et al., NAACL 2018) cho thấy quy trình crowdsourcing của các bộ NLI để lại dấu vết khiến một bộ phân loại chỉ nhìn hypothesis đoán đúng nhãn ở một phần đáng kể dữ liệu, với các hiện tượng như phủ định tương quan mạnh với một số nhãn. *Right for the Wrong Reasons* (McCoy, Pavlick, Linzen; ACL 2019) giả thuyết rằng mô hình NLI dựa vào ba heuristic cú pháp nông, rồi xây bộ đánh giá có kiểm soát HANS gồm các ví dụ mà heuristic cho đáp án sai; các mô hình huấn luyện trên MNLI, kể cả BERT, làm rất kém trên đó. Ở Computer Vision, *Making the V in VQA Matter* (Goyal et al., CVPR 2017) chỉ ra rằng thiên lệch ngôn ngữ cho phép mô hình VQA phần lớn bỏ qua ảnh.

Phê bình benchmark không phải lúc nào cũng kết luận tiến bộ là ảo. *Do ImageNet Classifiers Generalize to ImageNet?* (Recht et al., ICML 2019) tạo lại tập kiểm tra theo quy trình gốc: độ chính xác giảm rõ, nhưng thứ hạng giữa các mô hình phần lớn được giữ. Vấn đề cũng có thể nằm ở công cụ đo: *Sanity Checks for Saliency Maps* (Adebayo et al., NeurIPS 2018) cho thấy một số phương pháp saliency cho kết quả gần như độc lập với mô hình và dữ liệu, nên đánh giá chúng bằng mắt dễ gây hiểu lầm.

Nhóm cần hỏi: bao nhiêu phần trong cải thiện là do artifact, khi so trên tập con "khó" và "dễ"? Artifact ảnh hưởng tới thứ hạng hay chỉ tới con số tuyệt đối? Và phương pháp của nhóm có khai thác artifact *nhiều hơn* baseline không?

### Các lối ra

**Lối ra thứ nhất: phê bình benchmark như một đóng góp.** Phát hiện có thể trở thành chính paper: mô tả artifact, định lượng mức độ tiến bộ trước đây dựa vào nó, và cung cấp công cụ chẩn đoán hoặc tập đánh giá có kiểm soát. Lối ra phù hợp khi benchmark được dùng rộng rãi và artifact đủ lớn để thay đổi cách đọc kết quả. Các ví dụ trên đều ở main track; NeurIPS Datasets and Benchmarks Track và các loại đóng góp về tài nguyên hay phân tích dữ liệu của ARR cũng phù hợp. Case study [CheckList](../05-case-studies/checklist-acl2020.md) cho thấy một đóng góp về phương pháp luận đánh giá có thể đạt tới Best Paper.

Lối ra này cần công cụ chẩn đoán đáng tin. **Baseline chỉ dùng một phần input**, như chỉ nhìn hypothesis trong NLI, chỉ nhìn phương án trong trắc nghiệm hay chỉ nhìn câu hỏi trong VQA, cho biết benchmark có lối tắt hay không; nó rẻ đến mức nên chạy trước khi đầu tư vào phương pháp. Nhưng lối tắt tồn tại không chứng minh mọi mô hình đều dùng nó; để biết điều đó cần **tập kiểm tra có kiểm soát**, trong đó heuristic nghi ngờ và đáp án đúng mâu thuẫn nhau, như HANS hay các test INV và DIR của CheckList. Bổ sung là kiểm tra ngẫu nhiên hóa theo tinh thần Adebayo và thu thập lại tập kiểm tra theo tinh thần Recht.

**Lối ra thứ hai: giữ phương pháp, báo cáo trên cả phiên bản có kiểm soát.** Nếu sau khi kiểm soát artifact, phương pháp vẫn còn cải thiện thật qua nhiều seed, paper vẫn là paper phương pháp, nhưng kết quả trên tập kiểm soát phải lên bảng chính và paper nói rõ phần nào của cải thiện ban đầu là do artifact. Tập kiểm soát phải được mô tả và công bố đầy đủ để reviewer không nghi nhóm dựng một tập thiên vị.

**Lối ra thứ ba: khi cải thiện của nhóm là artifact, báo cáo trung thực là nghĩa vụ.** Nếu cải thiện biến mất trên tập kiểm soát, nhóm không thể công bố paper khẳng định cải thiện về "suy luận nhiều bước". Con số 4 điểm vẫn đúng về kỹ thuật, nhưng nhóm đã biết nó không đo điều paper nói nó đo. Hai lựa chọn hợp lệ là chuyển sang lối ra thứ nhất, khi phát hiện "các phương pháp như của nhóm thắng nhờ lối tắt" trở thành đóng góp, hoặc dừng lại; nếu paper đã nộp hay đã công bố, xử lý theo Tình huống 23. Song song, nên báo cho nhóm duy trì benchmark.

### Viết thế nào

Nhóm tạo benchmark đã làm việc có ích cho cộng đồng, và artifact là thuộc tính của quy trình. Claim cần định lượng, như tỉ lệ dữ liệu giải được chỉ từ phương án trả lời, thay vì "benchmark bị hỏng", và cần phân biệt "tiến bộ bị thổi phồng" với "tiến bộ là ảo".

<div class="bad" markdown>
*"Our method achieves a new state of the art of 78.4% on the benchmark, improving over the previous best by 4.1 points."*

Câu văn đúng về con số nhưng gây hiểu lầm về ý nghĩa, vì nhóm đã biết phần lớn cải thiện đến từ việc khai thác độ dài phương án.
</div>

<div class="good" markdown>
*"A classifier that sees only the answer options performs well above chance on this benchmark, largely by exploiting answer length. Our method's 4.1-point gain shrinks to 0.6 points on a length-balanced subset (Sec. 5), suggesting that much of the improvement reflects this cue rather than better reasoning. We release the subset and recommend reporting results on it."*

Đoạn văn nêu artifact, định lượng tác động lên chính phương pháp của nhóm, và cung cấp công cụ cho người khác (số liệu minh họa).
</div>

Reviewer **NLP** rất quen chủ đề này và có thể hỏi ngay về baseline một phần input với mọi kết quả trên NLI, đọc hiểu hay QA. Reviewer **Computer Vision** ngày càng hỏi về thiên lệch dữ liệu, nhất là ở tác vụ thị giác–ngôn ngữ. Reviewer **Machine Learning** đánh giá cao sanity check và hỏi phát hiện có tổng quát ra ngoài một benchmark không.

### Điều không được làm

Không giấu artifact khi đã biết nó tạo ra cải thiện của chính nhóm, và không lặng lẽ thay benchmark có vấn đề mà vẫn báo cáo con số trên nó ở nơi khác. Không công kích người tạo benchmark, và không gọi benchmark là "vô dụng" khi chỉ một phần bị ảnh hưởng. Xem bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tình huống 23: Phát hiện bug hoặc rò rỉ dữ liệu sau khi đã có kết quả đẹp

### Nhận diện

Một nhóm đề xuất mô hình chuỗi dự đoán việc người dùng rời bỏ dịch vụ, vượt các baseline mạnh một khoảng lớn (ví dụ giả định). Khi chuẩn bị công bố code, một thành viên phát hiện script chia dữ liệu theo bản ghi thay vì theo người dùng, nên nhiều người dùng có bản ghi ở cả tập huấn luyện lẫn tập kiểm tra. Mô hình của nhóm, với bộ nhớ dài hơn, khai thác rò rỉ này tốt hơn baseline; chạy lại với cách chia theo người dùng, cải thiện chỉ còn một phần nhỏ.

Rò rỉ có nhiều dạng: bản ghi trùng giữa các tập, rò rỉ theo nhóm hay theo thời gian, tiền xử lý khớp trên toàn bộ dữ liệu, chọn mô hình dựa trên tập kiểm tra, và với mô hình lớn là *contamination*, khi dữ liệu kiểm tra đã lọt vào dữ liệu pre-training. Dấu hiệu chung là kết quả tốt bất thường, validation và test trùng khớp khó hiểu, và hiệu năng sụt mạnh trên dữ liệu hoàn toàn mới.

### Chẩn đoán

Pipeline nghiên cứu phức tạp, thường được viết vội, và có một thiên kiến rất con người: nhóm debug kỹ khi kết quả xấu nhưng hiếm khi debug khi kết quả đẹp. Kết quả tốt bất ngờ đáng được soi xét ít nhất như kết quả xấu bất ngờ; thói quen ở mục *Ghi chép thí nghiệm* trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) giúp truy được bug ảnh hưởng tới kết quả nào.

Contamination ở mô hình lớn thường được phát hiện muộn và khó sửa triệt để. Paper GPT-3 (*Language Models are Few-Shot Learners*, NeurIPS 2020) là ví dụ đáng học: nhóm tác giả cố loại bỏ phần trùng lặp với các tập dev và test của các benchmark trong paper, nhưng một bug trong bước lọc khiến một phần trùng lặp bị bỏ sót, và chi phí khiến việc huấn luyện lại không khả thi. Họ nói thẳng điều này và dành một mục riêng để đo ảnh hưởng của phần trùng lặp còn lại. Bài học: khi không thể sửa, hãy đo và công khai. Các câu hỏi reviewer thường đặt về contamination có ở mục *Đánh giá với LLM* trong bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md).

Khi phát hiện bug, cần hỏi: bug ảnh hưởng tới kết luận hay chỉ tới con số? Nó có ảnh hưởng đều tới baseline không; nếu chỉ phương pháp đề xuất được lợi, kết luận gần như chắc chắn sụp đổ? Những phiên bản kết quả nào đã ra khỏi nhóm? Và mọi đồng tác giả đã được báo chưa, vì đây là trách nhiệm chung?

### Các lối ra

Ở tình huống này, lối ra phụ thuộc vào *thời điểm* phát hiện. Càng sớm, chi phí càng thấp, nhưng nguyên tắc như nhau: sửa, đo tác động, và báo cho những người đã hoặc sẽ tin vào kết quả.

**Lối ra thứ nhất, trước deadline: sửa và chạy lại.** Nhóm sửa bug, chạy lại mọi thí nghiệm bị ảnh hưởng, *kể cả baseline*, rồi viết theo kết quả mới; nếu kết quả không còn ủng hộ câu chuyện, các tình huống trước trở thành điểm xuất phát. Nếu không kịp, hãy bỏ deadline này: deadline sau chỉ cách vài tháng, còn một paper có bug đã biết là gánh nặng lâu dài. Không nộp với ý định "sửa ở camera-ready".

**Lối ra thứ hai, trong thời gian review: cân nhắc rút bài hoặc thông báo trung thực.** Nếu kết luận chính không còn đứng vững, rút bài là lựa chọn đúng; nhưng ở nơi review công khai trên OpenReview, submission và review có thể vẫn hiển thị sau khi rút, tùy chính sách năm đó. Nếu kết luận còn đứng vững nhưng con số thay đổi đáng kể, nhóm thông báo qua kênh hội nghị cung cấp, như phần phản hồi của tác giả hay bình luận gửi AC (mục *Khi review có vấn đề: bình luận bảo mật gửi AC* trong bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md)); một số hội nghị cho phép cập nhật PDF khi thảo luận, số khác chỉ cho một trang rebuttal.

**Lối ra thứ ba, sau khi được nhận: sửa ở camera-ready, cập nhật arXiv, báo chair nếu kết luận thay đổi.** Camera-ready không phải nơi thêm đóng góp mới, nhưng sửa lỗi là chính đáng (xem bài [Camera-ready, poster, code](../04-nop-va-sau-nop/camera-ready.md)). Nếu kết quả đã sửa vẫn ủng hộ các claim, nhóm sửa trong camera-ready và cập nhật arXiv với ghi chú phiên bản. Nếu kết luận thay đổi đáng kể, cần liên hệ Program Chairs trước hạn camera-ready, vì paper được nhận dựa trên những claim mà reviewer đã đọc; quyết định cho phép sửa lớn hay đề nghị rút bài thuộc về chair.

**Lối ra thứ tư, sau khi đã công bố: erratum hoặc rút bài.** Nếu lỗi không đổi kết luận chính, hình thức phù hợp là erratum (đính chính) hoặc phiên bản đã sửa; một số kho như ACL Anthology có quy trình nhận erratum và bản sửa, với các kho khác cần liên hệ Program Chairs hoặc nhà xuất bản. Nhóm cũng cập nhật arXiv, code, và báo cho những nhóm đang so sánh với số liệu của paper nếu biết. Nếu lỗi làm mất kết luận chính, hình thức đúng là rút bài; trên arXiv, việc rút tạo một phiên bản mới đánh dấu bài đã bị rút, còn các phiên bản cũ vẫn truy cập được. Một nhóm công khai tự sửa sai thường được tôn trọng; một lỗi bị người khác phát hiện sau khi nhóm đã biết mà im lặng thì gần như không cứu vãn được uy tín.

!!! warning "Quy định khác nhau theo hội nghị và theo năm"
    Cơ chế rút bài, khả năng cập nhật PDF khi thảo luận và quy trình đính chính thay đổi giữa các hội nghị và các năm. Cần đọc Author Guidelines của năm nộp, và khi không chắc, hỏi Program Chairs.

### Viết thế nào

Văn bản quan trọng nhất ở đây là thông báo: thư gửi AC, ghi chú phiên bản arXiv hay erratum. Một thông báo tốt có bốn phần: lỗi là gì, đã sửa thế nào, tác động định lượng, và kết luận nào còn, kết luận nào mất. Người viết thường tự đánh giá lỗi là "nhỏ"; nên để số liệu nói thay.

<div class="bad" markdown>
*"We noticed a minor issue in our preprocessing that slightly affects some numbers. It does not change our conclusions."*

Thông báo mơ hồ, tự gọi lỗi là "minor" mà không đưa số liệu, nên AC không có cách nào kiểm tra.
</div>

<div class="good" markdown>
*"After submission, we discovered that our data split placed records from the same user in both training and test sets. With a user-level split, our gain over the strongest baseline drops from 6.2 to 1.4 AUC points (corrected tables attached). The gain remains significant over 5 seeds, but our claim that the method 'substantially outperforms' prior work is no longer supported. We defer to the AC on whether the paper should be evaluated on this basis or withdrawn."*

Thông báo nêu cụ thể lỗi, tác động định lượng, kết luận còn và mất, rồi để người có thẩm quyền quyết định (số liệu minh họa).
</div>

Ghi chú phiên bản arXiv ngắn hơn nhưng cùng cấu trúc, ví dụ *"v2: fixes a train/test leakage in the user split (Sec. 4.1); Tables 2–4 recomputed; the main conclusion holds with a smaller margin."* AC và reviewer ở cả ba cộng đồng thường đón nhận thông báo trung thực tốt hơn tác giả lo sợ, vì bug xảy ra với mọi nhóm. Khác biệt chủ yếu ở mức độ công khai: ở các hội nghị ML review công khai, thông báo có thể được mọi người đọc; ở ARR, meta-review đi theo paper qua các chu kỳ; ở các hội nghị CV, kênh phản hồi hẹp hơn, nên bình luận gửi AC, nếu có, thường phù hợp nhất.

### Điều không được làm

Không im lặng với hy vọng không ai phát hiện. Không "sửa" bằng cách tìm cấu hình khác để khôi phục con số cũ, và không chỉ chạy lại phương pháp của nhóm mà bỏ qua baseline. Không giấu lỗi với đồng tác giả, không đổ lỗi cho thành viên trẻ, và không lặng lẽ thay bản arXiv mà không ghi chú. Nếu áp lực từ người hướng dẫn hay deadline khiến nhóm muốn trì hoãn, xem bài [Áp lực từ bên ngoài](ap-luc-ben-ngoai.md) và bài [Ranh giới trung thực](ranh-gioi-trung-thuc.md).

## Tổng hợp: từ triệu chứng đến lối ra

Sáu tình huống là sáu cách mà bằng chứng "nói khác" câu chuyện: về *cơ chế* ở Tình huống 18 và 19, về *giả thuyết* ở Tình huống 20, về *thước đo tiến bộ* của cả lĩnh vực ở Tình huống 21 và 22, và về *chính các con số* ở Tình huống 23. Trong cả sáu trường hợp, lối ra hợp lệ đi theo một hướng: câu chuyện thay đổi để khớp với bằng chứng, không bao giờ ngược lại.

| Tình huống | Triệu chứng | Câu hỏi chẩn đoán đầu tiên | Lối ra chính | Ranh giới không được vượt |
|---|---|---|---|---|
| TH18: Hoạt động vì lý do khác | Ablation cho thấy module "then chốt" đóng góp rất ít | Baseline có được cùng recipe không? | Kể lại quanh nguyên nhân thật; thu hẹp claim | Giấu hoặc đẩy ablation vào góc |
| TH19: Hoạt động không rõ vì sao | Chỉ có diễn giải, chưa có thí nghiệm về cơ chế | Mỗi giả thuyết dự đoán điều gì khác nhau? | Thí nghiệm tổng hợp, probing, can thiệp, tập con; gắn nhãn giả thuyết | Viết suy đoán như sự thật |
| TH20: Kết quả âm tính | Chính giả thuyết bị bác bỏ | Có tái lập được kết quả dương tính gốc không? | Paper phân tích; ICBINB, Insights from Negative Results in NLP, TMLR | Lục tìm tập con thắng rồi viết như giả thuyết ban đầu |
| TH21: Baseline đơn giản thắng | Baseline tune kỹ vượt mọi phương pháp phức tạp | Các phương pháp có được tune ngang bằng không? | Reality check có giao thức và khuyến nghị | Tune lệch; loại phương pháp của nhóm khỏi đánh giá |
| TH22: Artifact của benchmark | Mô hình vẫn thắng khi thiếu một phần input | Baseline một phần input đạt bao nhiêu? | Phê bình benchmark; báo cáo trên tập có kiểm soát | Công bố cải thiện đã biết là artifact |
| TH23: Bug hoặc rò rỉ | Kết quả tốt bất thường; lỗi chia dữ liệu | Lỗi đổi kết luận hay chỉ đổi con số? | Sửa, báo AC, sửa camera-ready, erratum hoặc rút bài, tùy thời điểm | Im lặng; sửa lặng lẽ |

## Tóm tắt

Sáu tình huống trong bài có chung một điểm: bằng chứng không còn ủng hộ câu chuyện, dù con số có thể vẫn đẹp. Khi ablation cho thấy cải thiện đến từ recipe, câu chuyện phải được kể lại quanh nguyên nhân thật và ablation phải là nhân vật chính. Khi phương pháp hoạt động mà chưa giải thích được, thí nghiệm tổng hợp, probing, can thiệp có mục tiêu và phân tích theo tập con giúp thu hẹp khoảng cách giữa suy đoán và giải thích, còn ngôn ngữ phải được hiệu chỉnh theo bằng chứng; reviewer ML đòi hỏi về cơ chế nhiều hơn reviewer CV và NLP. Một kết quả âm tính đáng công bố khi nó phản bác một niềm tin của cộng đồng, được làm chặt chẽ và giải thích được vì sao, như cuộc tranh luận về attention cho thấy. Baseline đơn giản thắng và artifact của benchmark có thể trở thành paper reality check hoặc phê bình benchmark, nếu công bằng với công trình trước, có giao thức tái lập được và có khuyến nghị, kể cả khi phương pháp bị vượt là của chính nhóm. Cuối cùng, bug và rò rỉ được xử lý theo thời điểm phát hiện, với nguyên tắc không đổi: sửa, đo tác động, và báo trung thực.

## Bài tập

1. **Ablation trung thực.** Liệt kê mọi thay đổi giữa baseline ban đầu và hệ thống hiện tại của dự án, kể cả thay đổi "hậu trường" như số epoch hay augmentation. Chạy baseline với toàn bộ thay đổi recipe nhưng không có thành phần chính, rồi viết một đoạn mô tả câu chuyện mà kết quả này ủng hộ.
2. **Ba tầng ngôn ngữ.** Đánh dấu mọi câu nêu quan hệ nhân quả trong bản nháp và xếp mỗi câu vào một tầng: đã chứng minh, phù hợp với bằng chứng, hay suy đoán. Viết lại những câu bị xếp sai, và thiết kế một thí nghiệm can thiệp có thể bác bỏ giả thuyết chính.
3. **Kiểm tra benchmark.** Với benchmark chính của dự án, huấn luyện một baseline chỉ dùng một phần input. Báo cáo khoảng cách giữa baseline này, mức ngẫu nhiên và SOTA, rồi viết hai câu tiếng Anh cho phần Experiments.
4. **Kế hoạch ứng phó sự cố.** Lập danh sách kiểm tra rò rỉ cho dự án (cách chia dữ liệu, tiền xử lý, cách chọn mô hình, bản ghi trùng lặp, contamination), rồi viết kế hoạch ngắn: nếu phát hiện một lỗi làm giảm một nửa mức cải thiện, nhóm sẽ làm gì và báo cho ai ở mỗi thời điểm trong bốn thời điểm của Tình huống 23.
