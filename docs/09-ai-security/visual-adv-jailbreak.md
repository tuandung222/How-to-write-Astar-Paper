# Case study: Visual Adversarial Examples Jailbreak Aligned LLMs (AAAI 2024)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper bảo mật đóng khung đóng góp của nó như **một luận điểm về xu hướng** (đa phương thức mở rộng bề mặt tấn công) chứ không chỉ như một phương pháp.
    - Nhận ra cách viết threat model rõ ràng, tách bạch thiết lập chính (white-box) và thiết lập phụ (black-box).
    - Đánh giá cách paper kết hợp đánh giá thủ công và đánh giá tự động cho một khái niệm khó đo như "mức độ có hại".
    - Học cách viết ethics statement, cảnh báo nội dung và mục "concurrent work" cho một paper có nội dung nhạy cảm.
    - Nhận ra những chỗ ngôn từ trong phần kết quả mạnh hơn bằng chứng, và cách sửa.

**Visual Adversarial Examples Jailbreak Aligned Large Language Models** của Xiangyu Qi, Kaixuan Huang (hai tác giả đóng góp ngang nhau), Ashwinee Panda, Peter Henderson, Mengdi Wang và Prateek Mittal (Princeton University, riêng Peter Henderson thuộc Stanford University) được trình bày tại AAAI 2024. Phân tích dưới đây dựa trên bản preprint trên arXiv (2306.13213); bản trong kỷ yếu có thể khác ở một số chi tiết.

Paper này là một trong những công trình sớm nhất chỉ ra rằng việc gắn thêm thị giác vào mô hình ngôn ngữ đã được căn chỉnh an toàn (aligned LLM) mở ra một lối tấn công mới. Bài này không phân tích kỹ thuật tấn công, mà tập trung vào cách paper **dựng luận điểm, phát biểu threat model, đo lường và xử lý nội dung nhạy cảm**: những kỹ năng mà mọi paper về an toàn của mô hình đa phương thức đều cần.

## Câu chuyện một dòng

> Tích hợp thị giác vào LLM mở rộng bề mặt tấn công, vì đầu vào ảnh liên tục và nhiều chiều nên dễ bị nhiễu đối kháng hơn văn bản, đồng thời mở rộng hậu quả của tấn công vượt khỏi việc phân loại sai; một nghiên cứu điển hình cho thấy **một ảnh đối kháng duy nhất** có thể phá vỡ cơ chế an toàn của nhiều VLM, kể cả với những yêu cầu có hại không nằm trong dữ liệu dùng để tạo ảnh.

Câu chuyện có hai tầng. Tầng thứ nhất là một **luận điểm tổng quát** về xu hướng đa phương thức. Tầng thứ hai là một **nghiên cứu điển hình** (case study) minh họa luận điểm đó. Cách sắp xếp này quyết định cách đọc toàn bộ paper: kết quả thực nghiệm không được trình bày như "our method is the best", mà như bằng chứng cho một cảnh báo.

## Title và abstract

### Một title là một khẳng định

Title *"Visual Adversarial Examples Jailbreak Aligned Large Language Models"* là một câu hoàn chỉnh có chủ ngữ và động từ, giống MAE trong case study [MAE & Latent Diffusion](../05-case-studies/mae-ldm.md) hay ["Attention Is All You Need"](../05-case-studies/transformer.md). Người đọc biết ngay paper khẳng định điều gì. Chữ *"Aligned"* đặc biệt quan trọng: nó báo hiệu mục tiêu bị tấn công là những mô hình đã được huấn luyện để từ chối yêu cầu có hại, nên kết quả mang tính bất ngờ hơn nhiều so với việc tấn công một mô hình chưa được căn chỉnh.

### Abstract dựng theo khung "First – Second – Case study"

Abstract dùng hai chữ in đậm **First** và **Second** để nêu hai luận điểm: đầu vào thị giác là "mắt xích yếu" trước tấn công đối kháng, và tính đa năng của LLM mở rộng phạm vi mục tiêu mà kẻ tấn công có thể đạt được. Sau đó mới đến câu "As an illustration, we present a case study…" và phát hiện chính, cũng được in đậm: một ảnh đối kháng duy nhất có thể "universally jailbreak" một LLM đã căn chỉnh. Câu cuối nối phát hiện với hai lĩnh vực: tấn công đối kháng (đã nghiên cứu lâu năm) và AI alignment (còn non trẻ).

Cấu trúc này là một mẫu tốt cho paper có đóng góp kiểu **phát hiện rủi ro**: nêu luận điểm trước, bằng chứng sau, ý nghĩa cuối cùng. Điểm có thể cân nhắc là abstract không có con số nào; một câu ngắn về mức tăng tỉ lệ tuân theo yêu cầu có hại trong đánh giá thủ công sẽ giúp người đọc cảm nhận độ lớn của hiệu ứng.

### Cảnh báo nội dung ngay đầu trang

Paper mở đầu bằng dòng cảnh báo in hoa rằng paper chứa dữ liệu, prompt và đầu ra mang tính xúc phạm. Với các paper về jailbreak, toxicity hay nội dung độc hại, một dòng cảnh báo như vậy là thông lệ tốt: nó tôn trọng người đọc và cho reviewer thấy nhóm tác giả ý thức được tính nhạy cảm của nội dung.

## Introduction: hai luận điểm, mỗi luận điểm một đoạn có tiêu đề

Introduction được tổ chức bằng các tiêu đề đoạn in đậm, mỗi đoạn mang đúng một ý.

**"Expansion of Attack Surfaces"** lập luận rằng đầu vào ảnh có tính liên tục và nhiều chiều, nên là mắt xích yếu trước tấn công đối kháng, trong khi tấn công trên văn bản rời rạc khó hơn. Một chi tiết đáng học nằm ở chú thích cuối trang: paper ước lượng số cấu hình có thể của một ảnh $3 \times 224 \times 224$ (chiếm 32 token trong MiniGPT-4) so với số tổ hợp của 32 token văn bản trên một từ điển $10^4$ từ. Một phép tính đơn giản như vậy biến trực giác "không gian ảnh lớn hơn" thành một lập luận định lượng, mà không làm nặng phần thân bài.

**"Extended Implications of Security Failures"** lập luận rằng với LLM, mục tiêu của kẻ tấn công không còn là làm sai nhãn phân loại mà mở rộng sang độc tính, jailbreak, lạm dụng chức năng. Đoạn này chuyển hệ quy chiếu của người đọc từ "adversarial machine learning cổ điển" sang "rủi ro của mô hình đa năng", một bước quan trọng để reviewer từ cả hai cộng đồng cùng thấy paper liên quan tới lĩnh vực của họ.

Đoạn tiếp theo, in đậm toàn bộ câu đầu, giới thiệu nghiên cứu điển hình và Figure 1. Đoạn **"The Intriguing Jailbreaking"** nêu phát hiện bất ngờ: ảnh được tạo từ một tập nhỏ câu có hại về một vài nhóm danh tính, nhưng lại làm mô hình tuân theo cả những loại yêu cầu có hại khác hẳn. Chính chữ "intriguing" và sự bất ngờ này là thứ làm paper đáng nhớ, giống cách [ResNet](../05-case-studies/resnet.md) dựa vào một hiện tượng đáng ngạc nhiên.

Danh sách đóng góp gồm hai mục, khớp với hai tầng của câu chuyện: **Multimodality** (rủi ro tăng theo xu hướng đa phương thức, kèm phỏng đoán về các phương thức khác như âm thanh, lidar) và **Adversarial Examples against Alignment** (nối hai lĩnh vực). Hai mục này là đóng góp về *hiểu biết*, không phải về phương pháp, và paper không giả vờ ngược lại. Đây là sự trung thực về kiểu đóng góp mà bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) khuyến khích.

### Figure 1: hai đầu ra đặt cạnh nhau

Figure 1 đặt cạnh nhau phản hồi của mô hình với ảnh bình thường (từ chối với xác suất cao) và với ảnh đối kháng (tuân theo với xác suất cao), cùng một ví dụ ngoài phân phối. Nội dung độc hại được che bằng "[redacted]". Caption nói rõ tỉ lệ từ chối và tuân theo được tính bằng kiểm tra thủ công trên 100 mẫu ngẫu nhiên cho mỗi yêu cầu. Một Figure 1 kiểu "trước–sau" như vậy truyền đạt phát hiện chính trong vài giây, đồng thời cho thấy cách xử lý nội dung nhạy cảm một cách có trách nhiệm.

## Related Work: mục "Concurrent Work"

Related Work kết thúc bằng một đoạn **Concurrent Work** ngắn: nêu hai công trình về tấn công đối kháng vào LLM đã căn chỉnh xuất hiện ngay sau phiên bản đầu của paper, rồi phân biệt bằng **động cơ** của từng công trình (paper này nhấn mạnh hệ quả của xu hướng đa phương thức và tính phổ quát của ảnh; hai công trình kia lần lượt nhấn mạnh việc LLM chưa được căn chỉnh trước đối kháng, và tấn công văn bản phổ quát, chuyển giao được). Đây là mẫu mực cho cách xử lý công trình đồng thời mà bài [Related Work](../02-viet-tung-phan/related-work.md) đã bàn: ghi nhận, nêu thời điểm, phân biệt bằng góc nhìn chứ không hạ thấp.

## Giải phẫu theo góc nhìn bảo mật

### Threat model

Mục 3.1 có một đoạn **Threat Model** riêng. Kẻ tấn công dùng một ảnh đối kháng để buộc mô hình đã căn chỉnh tuân theo một yêu cầu có hại đi kèm. Mục tiêu được nêu là một tấn công **phổ quát** (universal): một ảnh duy nhất, lý tưởng là ép được mô hình tuân theo bất kỳ yêu cầu có hại nào. Paper nói rõ phần chính làm việc với threat model **white-box** (truy cập đầy đủ trọng số), và để đầy đủ thì kiểm tra thêm khả năng **chuyển giao black-box** giữa các mô hình.

Đây là một cách phát biểu threat model đáng học vì ba lý do. Mục tiêu của kẻ tấn công được định nghĩa bằng một tính chất có thể kiểm chứng (tính phổ quát). Năng lực của kẻ tấn công được nêu thẳng (white-box), không bị che giấu. Và thiết lập phụ (black-box) được nêu rõ là phụ, nên người đọc không bị dẫn tới nghĩ rằng mọi kết quả đều là black-box. Paper còn có một nhận xét tinh tế ở phần phòng vệ: vì mục tiêu là jailbreak chứ không phải đánh lừa phân loại, nhiễu đối kháng không nhất thiết phải khó nhận thấy, nên giả định "nhiễu nhỏ" của nhiều phòng vệ cổ điển không còn áp dụng.

### Định nghĩa thành công và metric

"Mức độ có hại" là khái niệm khó đo, và paper dùng hai loại bằng chứng bổ sung cho nhau:

- **Đánh giá thủ công** trên 40 yêu cầu có hại được tuyển chọn, chia thành bốn nhóm (tấn công danh tính, thông tin sai lệch, bạo lực/tội phạm, ác ý với nhân loại), mỗi yêu cầu lấy 10 mẫu đầu ra, đánh giá thành công bằng kiểm tra thủ công.
- **Đánh giá tự động** trên tập con "challenging" gồm 1.225 prompt của RealToxicityPrompts, đo bằng hai công cụ độc lập (Perspective API và Detoxify), lặp lại ba lần, báo cáo trung bình và độ lệch chuẩn.

Sự kết hợp này đáng học: đánh giá thủ công bắt được những tác hại mà bộ phân loại tự động bỏ sót (như hướng dẫn hành vi nguy hiểm), còn đánh giá tự động cho quy mô và khả năng tái lập. Việc dùng hai công cụ đo độc tính và báo cáo sự nhất quán giữa chúng cũng giảm rủi ro kết luận phụ thuộc vào một bộ phân loại cụ thể. Ngoài ra, paper so sánh với **phiên bản tấn công bằng văn bản** có cùng độ dài token, và báo cáo cả chi phí tính toán của nó, để trả lời câu hỏi "vì sao phải dùng ảnh?".

### Đánh giá chống lại phản biện

Paper kiểm tra trên ba VLM, kể cả một mô hình dựa trên LLaMA-2-Chat được mô tả là được căn chỉnh mạnh, và kiểm tra khả năng chuyển giao giữa ba mô hình. Ở phần phòng vệ, paper thử một phương pháp tiền xử lý đầu vào (DiffPure) và thảo luận vì sao huấn luyện đối kháng hay chứng nhận độ bền vững khó áp dụng ở quy mô LLM.

Có một đoạn văn đặc biệt đáng học: **"A Conservative Remark"**. Sau khi cho thấy tấn công bằng ảnh mạnh hơn tấn công bằng văn bản, paper tự nói rằng kết luận này phù hợp với trực giác nhưng không có bảo đảm lý thuyết, và các kỹ thuật tối ưu rời rạc tốt hơn trong tương lai có thể thu hẹp khoảng cách. Một câu tự giới hạn như vậy làm tăng độ tin cậy của mọi claim khác trong paper, và là cách viết mà các paper về tấn công nên học theo.

### Đạo đức và công bố có trách nhiệm

Paper đặt một **Ethics Statement** ngay cuối Introduction thay vì dồn xuống cuối paper: nêu mục đích nghiên cứu, khẳng định tôn trọng các nhóm thiểu số, giải thích việc đưa nội dung xúc phạm vào là chỉ phục vụ nghiên cứu, nói rằng thí nghiệm được thực hiện trong môi trường kiểm soát, rằng phần lớn nội dung độc hại đã được che, và rằng phần phòng vệ được đưa vào để đối phó khả năng lạm dụng. Paper cũng dùng các token giữ chỗ trừu tượng để ẩn danh tính của các nhóm bị nhắm tới trong dữ liệu.

Đặt ethics statement sớm là một lựa chọn khôn ngoan với paper có nội dung nhạy cảm: reviewer gặp nó trước khi gặp các ví dụ độc hại. Một điểm cần lưu ý về cách dùng từ: paper gọi việc thảo luận phòng vệ là "responsible disclosure", trong khi trong cộng đồng bảo mật, cụm từ này thường chỉ việc thông báo lỗ hổng cho bên phát triển hệ thống trước khi công bố. Khi viết, nên phân biệt rõ hai việc này, và nếu có liên hệ với nhà phát triển mô hình thì nên nói ra.

## Những chỗ ngôn từ mạnh hơn bằng chứng

Hai chỗ trong phần kết quả cho thấy lỗi phổ biến nhất của paper thực nghiệm: một câu tổng kết mạnh hơn những gì bảng số thực sự cho thấy.

**Về khả năng chuyển giao.** Mục 4.5 viết rằng khi ảnh tạo trên một mô hình được dùng cho hai mô hình còn lại, paper "consistently" quan sát thấy độc tính tăng đáng kể. Tuy nhiên, caption của Table 3 nói rõ bảng chỉ báo cáo **cấu hình chuyển giao mạnh nhất** trong bốn cấu hình cho mỗi cặp mô hình, và kết quả đầy đủ được đưa xuống phụ lục. Việc chọn cấu hình tốt nhất cho mỗi ô không sai, và paper đã minh bạch về nó trong caption, nhưng chữ "consistently" trong văn bản khi đó mô tả kết quả đã chọn chứ không phải mọi cấu hình. Cách viết chặt hơn là "the strongest of four settings for each pair increases toxicity", và để người đọc tự xem bảng đầy đủ.

**Về phòng vệ.** Mục 5 viết rằng cả ba mức nhiễu của DiffPure đều làm sạch hiệu quả ảnh đối kháng, đưa độc tính về mức của baseline. Table 4 phần lớn ủng hộ điều này, nhưng với ảnh ở ngân sách nhiễu $\epsilon = 16/255$, hai mức nhiễu (0,75 và 0,25) cho tỉ lệ "Any" theo Perspective API là 48,1% và 49,8%, vẫn cao hơn rõ rệt so với 34,8% của ảnh bình thường. Một câu như "most configurations return close to the benign level, except for the smallest perturbation budget at two noise levels" vừa trung thực hơn vừa cung cấp thông tin hữu ích hơn cho người muốn dùng phòng vệ này.

Bài học: **sau khi viết một câu tổng kết, hãy quay lại từng ô trong bảng để kiểm tra chữ "consistently", "all" hay "effectively" có đúng với mọi ô không.** Đây là một bước kiểm tra rẻ nhưng chặn được một loại phản biện rất phổ biến.

## Bài học cho người viết

**Đóng khung đóng góp theo đúng kiểu của nó.** Paper này là một đóng góp về hiểu biết rủi ro, và nó tự nhận như vậy: "case study", "we underscore", "we highlight". Không có claim về "phương pháp tấn công tốt nhất". Sự trung thực về kiểu đóng góp giúp reviewer đánh giá paper theo đúng tiêu chí.

**Phát biểu threat model trong một đoạn có tên, và tách thiết lập chính khỏi thiết lập phụ.** White-box là chính, black-box là kiểm chứng bổ sung; người đọc không bao giờ phải đoán.

**Kết hợp đánh giá thủ công và tự động cho khái niệm khó đo.** Thủ công cho chiều sâu, tự động cho quy mô; hai công cụ đo độc lập cho độ tin cậy.

**Tự giới hạn những claim không có bảo đảm.** Đoạn "A Conservative Remark" là một mẫu câu đáng giữ trong sổ tay.

**Xử lý nội dung nhạy cảm từ trang đầu.** Cảnh báo nội dung, ethics statement đặt sớm, che nội dung độc hại, dùng token giữ chỗ cho danh tính.

### Áp dụng cho paper về visual/multimodal prompt injection

Với một paper tấn công trong chủ đề này, khung "luận điểm tổng quát, rồi nghiên cứu điển hình" rất phù hợp nếu đóng góp chính là phát hiện một bề mặt tấn công mới; khi đó cần phát biểu threat model riêng, nói rõ white-box hay black-box, và kiểm tra chuyển giao sang mô hình khác. Với hội nghị CV như CVPR hay ICCV, Figure 1 "trước–sau" và đánh giá trên nhiều VLM sẽ là trọng tâm; với NeurIPS, ICML hay ICLR, reviewer sẽ quan tâm hơn tới lập luận về vì sao đầu vào ảnh khó phòng vệ và tới các phòng vệ thích nghi; với ACL hay EMNLP, cách đo tác hại bằng đánh giá con người có giao thức rõ ràng sẽ được soi kỹ. Ở mọi nơi, ethics statement và cách xử lý nội dung có hại là phần không thể thiếu.

## Tóm tắt

Paper dựng câu chuyện hai tầng: một luận điểm về việc đa phương thức mở rộng bề mặt tấn công và hậu quả của tấn công, và một nghiên cứu điển hình cho thấy một ảnh đối kháng duy nhất có thể phá cơ chế an toàn của nhiều VLM đã căn chỉnh. Title là một khẳng định, abstract dùng khung "First – Second – Case study", Introduction chia thành các đoạn có tiêu đề, và chú thích cuối trang biến một trực giác thành phép so sánh định lượng. Threat model được phát biểu trong một đoạn riêng, tách white-box chính khỏi black-box phụ. Đánh giá kết hợp kiểm tra thủ công với hai công cụ đo độc tính tự động. Ethics statement đặt cuối Introduction, cảnh báo nội dung ở đầu trang và mục concurrent work phân biệt bằng động cơ đều là những mẫu nên học. Những điểm cần chặt hơn là chữ "consistently" khi bảng chỉ báo cáo cấu hình mạnh nhất, câu kết luận về phòng vệ chưa khớp với mọi ô trong bảng, và cách dùng cụm "responsible disclosure".

## Bài tập

1. Viết lại abstract của paper trong bản thảo hiện tại theo khung "First – Second – Case study" nếu đóng góp chính là một phát hiện rủi ro. Nếu đóng góp là một phương pháp, giải thích vì sao khung này không phù hợp.
2. Viết một đoạn Threat Model cho dự án hiện tại, gồm mục tiêu của kẻ tấn công (định nghĩa bằng một tính chất kiểm chứng được), năng lực (white-box hay black-box), và thiết lập nào là chính, thiết lập nào là phụ.
3. Với một khái niệm khó đo trong dự án (ví dụ mức độ có hại, mức độ bị chiếm quyền điều khiển), đề xuất một cặp đánh giá thủ công và tự động, kèm giao thức cho phần thủ công.
4. Tìm trong bản thảo mọi câu có chữ "consistently", "all", "always", "effectively". Với mỗi câu, kiểm tra lại từng ô trong bảng tương ứng và sửa câu nếu có ngoại lệ.
5. Viết một ethics statement ngắn cho dự án, phân biệt rõ giữa thảo luận phòng vệ và thông báo lỗ hổng cho bên phát triển hệ thống.
