# Case study: Formalizing and Benchmarking Prompt Injection (USENIX Security 2024)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích giá trị của một paper hình thức hóa: nó biến một mớ case study rời rạc thành một framework có định nghĩa, thống nhất các công trình trước như trường hợp đặc biệt, và sinh ra đóng góp mới từ chính framework đó.
    - Nhận ra cấu trúc của một benchmark có hệ thống nhiều chiều (tấn công × phòng vệ × mô hình × tác vụ) và cách chọn metric cho từng vai trò.
    - So sánh văn hóa viết của hội nghị bảo mật (USENIX Security) với hội nghị ML/CV/NLP: vị trí và độ chi tiết của threat model, mục Discussion, và cách xử lý đạo đức.
    - Vận dụng các bài học này khi viết một paper tấn công hoặc phòng vệ, đặc biệt trong chủ đề visual/multimodal prompt injection.

Chương này có hai paper về prompt injection đứng ở tầng "hình thức hóa và benchmark". Bài này phân tích paper đầu:

**Formalizing and Benchmarking Prompt Injection Attacks and Defenses**, của Yupei Liu, Yuqi Jia, Runpeng Geng, Jinyuan Jia và Neil Zhenqiang Gong, thuộc The Pennsylvania State University và Duke University. Paper được công bố tại USENIX Security 2024.

Phân tích dựa trên bản arXiv (2310.12815). Một chi tiết nhỏ nhưng đáng lưu ý: siêu dữ liệu của bản đăng sớm ghi tiêu đề là "Prompt Injection Attacks and Defenses in LLM-Integrated Applications", trong khi trang đầu của toàn văn và tên kỷ yếu dùng tiêu đề "Formalizing and Benchmarking Prompt Injection Attacks and Defenses". Giáo trình này dùng tiêu đề của toàn văn, vì chính hai chữ "Formalizing" và "Benchmarking" nói lên hai đóng góp của paper. Sự lệch tiêu đề giữa các bản là chuyện thường gặp, và nó nhắc người viết: khi đổi tiêu đề giữa các vòng nộp, nên cập nhật mọi nơi để người đọc không bối rối.

Đặt bài này cạnh case study [EIA](eia.md) làm nổi bật một tương phản về kiểu đóng góp. EIA đề xuất một tấn công cụ thể trên một hệ thống cụ thể và được nhận ở ICLR; paper này không đề xuất tấn công nào thật sự mới ngoài một tấn công kết hợp hiển nhiên, mà đóng góp nằm ở việc *hình thức hóa* và *đo đạc có hệ thống*, và nó được nhận ở một hội nghị bảo mật hàng đầu. Hai con đường tới một paper A\* khác nhau này đều đáng để người học hiểu.

Về tài nguyên, paper là ví dụ tốt cho các nhóm không có hạ tầng huấn luyện lớn. Nó không huấn luyện mô hình nào; mọi mô hình mở được chạy với seed cố định để tái lập, còn mô hình đóng được gọi qua API ở nhiệt độ thấp. Giá trị đến từ thiết kế benchmark và từ công sức làm cho nó đầy đủ, không từ quy mô tính toán. Mục cảm ơn ghi tài trợ của NSF, ARO và tín dụng Azure, cho thấy chi phí chính là lời gọi API chứ không phải GPU.

## Bối cảnh: khi tài liệu chỉ có case study

**Prompt injection** là tấn công trong đó kẻ tấn công chèn chỉ dẫn hoặc dữ liệu độc hại vào đầu vào của một **LLM-Integrated Application** (ứng dụng dùng LLM làm back-end, ví dụ sàng lọc hồ sơ tự động, phát hiện spam, tóm tắt, dịch) để ứng dụng trả về kết quả mà kẻ tấn công muốn. OWASP xếp prompt injection là mối đe dọa số một trong mười mối đe dọa hàng đầu với ứng dụng dùng LLM.

Vấn đề mà paper nhắm vào không phải là "chưa có tấn công nào" mà là "có quá nhiều tấn công rời rạc". Trước paper này, hiểu biết của cộng đồng nằm rải rác trong các bài blog và vài paper, mỗi nơi mô tả một mẹo. Paper gọi thẳng đây là hai hạn chế: thiếu framework để hình thức hóa, và thiếu đánh giá toàn diện. Đây là một tình huống "nghiên cứu chín muồi cho một sự hệ thống hóa", và nhận ra đúng thời điểm đó là một kỹ năng định hướng nghiên cứu quan trọng.

## Câu chuyện một dòng

> Tài liệu về prompt injection chỉ gồm các case study rời rạc nên cộng đồng chưa hiểu nó một cách hệ thống; nhóm tác giả đề xuất một framework hình thức hóa prompt injection sao cho các tấn công đã biết đều là trường hợp đặc biệt, dùng framework đó để sinh ra một tấn công kết hợp, rồi chạy một benchmark thống nhất trên năm tấn công, mười phòng vệ, mười LLM và bảy tác vụ, kết luận rằng tấn công hiệu quả trên diện rộng còn các phòng vệ hiện có đều chưa đủ.

Câu chuyện có bốn nhịp khớp đúng với bốn đoạn in đậm trong Introduction: một **framework hình thức hóa**, một **framework triển khai tấn công** (trong đó tấn công cũ là trường hợp đặc biệt và một tấn công kết hợp mới nảy ra), một **benchmark tấn công**, và một **benchmark phòng vệ**. Giá trị của câu chuyện nằm ở chữ "systematic/first": đóng góp không phải một kết quả đơn lẻ mà là một công cụ chung để đo mọi kết quả sau này.

## Title và abstract

### Một title gồm hai động từ

Title mở bằng hai danh động từ "Formalizing and Benchmarking", rồi nêu đối tượng kép "Attacks and Defenses". Cấu trúc này nói ngay rằng đây là một paper về *phương pháp luận* chứ không về một tấn công, và rằng nó bao cả hai phía tấn công lẫn phòng vệ. Như bài [Title](../02-viet-tung-phan/title.md) đã bàn, động từ trong title phát tín hiệu về kiểu đóng góp; ở đây "Formalizing" hứa một framework, "Benchmarking" hứa số liệu, và phần còn lại của paper giữ đúng cả hai lời hứa.

### Abstract theo khuôn "hạn chế của tài liệu → framework → benchmark"

Abstract ngắn và chặt. Nó định nghĩa prompt injection trong một câu, nêu hạn chế "existing works are limited to case studies", rồi tuyên bố mục tiêu lấp khoảng trống. Bốn câu tiếp theo ánh xạ một–một với bốn đóng góp: framework hình thức hóa (tấn công cũ là trường hợp đặc biệt), tấn công kết hợp mới, đánh giá hệ thống trên "10 LLMs and 7 tasks", và lời mời cộng đồng dùng chung benchmark. Câu cuối trỏ tới mã nguồn mở. Cách viết "các tấn công đã biết là trường hợp đặc biệt của framework này" là một tuyên bố mạnh về tính tổng quát, và là cốt lõi giá trị của một paper hình thức hóa: nó không chỉ thêm một món vào đống case study mà bao trùm cả đống đó.

Một điểm người viết có thể học: abstract không nêu con số ASR cụ thể. Với một paper mà thông điệp chính là "framework và benchmark", việc không sa vào một con số lẻ là hợp lý; con số quan trọng nhất ở đây là quy mô của benchmark (5 × 10 × 10 × 7) chứ không phải một ASR đơn lẻ.

## Introduction: hình thức hóa như một đóng góp

Introduction dựng vấn đề qua một ví dụ cụ thể và quen thuộc: hệ thống sàng lọc hồ sơ tự động, trong đó ứng viên (kẻ tấn công) thêm vào hồ sơ một câu để lật kết quả. Một chú thích nêu chi tiết rằng câu đó có thể in bằng chữ trắng trên nền trắng, vô hình với người nhưng hiện ra khi chuyển PDF sang văn bản. Ví dụ này làm hai việc: nó cho người đọc ngoài ngành một hình dung tức thì, và nó định nghĩa luôn khái niệm instruction prompt so với data mà cả paper sẽ dựa vào.

Phần còn lại của Introduction là bốn đoạn in đậm nêu bốn đóng góp. Điểm đáng học nhất là cách paper trình bày **việc hình thức hóa như một đóng góp có giá trị ngang với kết quả thực nghiệm**. Ở các cộng đồng ML/CV/NLP, một định nghĩa hình thức đôi khi bị xem là phần phụ; ở hội nghị bảo mật, một định nghĩa chặt chẽ đủ sức bao quát cả một lớp hiện tượng là một đóng góp được coi trọng. Paper nói rõ ba công dụng của định nghĩa: nó cho phép thiết kế tấn công một cách hệ thống, cho phép định lượng thành công, và cho phép sinh tấn công mới (tấn công kết hợp). Người viết paper hình thức hóa nên luôn trả lời câu hỏi "định nghĩa này *làm được* gì mà trước đó không làm được", chứ không chỉ phát biểu định nghĩa.

## Framework: thống nhất cái cũ, sinh ra cái mới

### Định nghĩa gọn trên hai khái niệm

Paper định nghĩa mọi tác vụ gồm một instruction và một data, phân biệt **target task** (tác vụ người dùng muốn) với **injected task** (tác vụ kẻ tấn công muốn chèn vào). Prompt injection được định nghĩa hình thức là việc sửa dữ liệu của target task sao cho ứng dụng thực hiện injected task thay vì target task. Định nghĩa này gọn đến mức có thể phát biểu trong một câu, nhưng chính sự gọn đó là điểm mạnh: nó đủ tổng quát để bao mọi tấn công, và đủ cụ thể để định lượng thành công (chỉ cần kiểm tra ứng dụng có thực hiện injected task hay không).

Paper cũng cẩn thận làm rõ một điểm thuật ngữ dễ gây nhầm: "prompt" là từ đồng nghĩa với instruction (hoặc tổ hợp instruction + data), không phải data trần. Việc dừng lại để định nghĩa thuật ngữ như vậy là đặc trưng của văn hóa viết chặt ở hội nghị bảo mật, nơi một định nghĩa lỏng có thể làm cả framework sụp.

### Tấn công cũ là trường hợp đặc biệt

Phần tiếp theo trình bày framework triển khai: mọi tấn công đều là một hàm tạo ra dữ liệu bị xâm phạm từ ba thành phần (dữ liệu gốc, chỉ dẫn chèn, dữ liệu chèn). Paper xếp các tấn công đã biết vào framework này như các trường hợp đặc biệt khác nhau ở cách ghép ba thành phần đó: một tấn công ngây thơ chỉ nối chuỗi, một tấn công thêm ký tự đặc biệt, một tấn công thêm câu ra lệnh bỏ qua ngữ cảnh, một tấn công thêm một phản hồi giả để mô hình tưởng target task đã xong. Một bảng ví dụ duy nhất, với cùng một bài toán sàng lọc hồ sơ, cho thấy dữ liệu bị xâm phạm của từng tấn công, nên người đọc thấy ngay các tấn công khác nhau ở đâu.

Đây là bằng chứng sống cho giá trị của hình thức hóa: khi đặt bốn tấn công rời rạc vào cùng một khung, điểm chung và điểm khác hiện ra, và một tấn công thứ năm **kết hợp** cả ba thủ thuật nảy ra một cách tự nhiên. Paper gọi nó là Combined Attack và mô tả nó ở mức ghép thành phần, không đi sâu vào tối ưu câu chữ. Bài học cho người viết: một framework tốt không chỉ sắp xếp cái đã có mà còn chỉ ra ô trống để điền; nếu framework của người viết sinh được một phương pháp mới, đó là bằng chứng thuyết phục nhất rằng framework ấy có ích.

### Phòng vệ cũng được hình thức hóa thành hai loại

Song song, paper chia phòng vệ thành hai loại: **prevention** (ngăn ứng dụng thực hiện injected task, bằng cách thiết kế lại instruction hoặc tiền xử lý dữ liệu) và **detection** (phát hiện dữ liệu có bị xâm phạm hay không). Mười phòng vệ được xếp vào hai loại này, mỗi phòng vệ một dòng mô tả trong một bảng tổng hợp. Việc phân loại phòng vệ song song với phân loại tấn công giữ cho cấu trúc paper cân đối, và cho phép mục đánh giá chạy cùng một khuôn cho cả hai phía.

## Giải phẫu theo góc nhìn bảo mật

Bốn câu hỏi đặc thù của paper AI security áp lên paper này cho thấy rõ văn hóa của hội nghị bảo mật.

**Threat model.** Paper dành hẳn một mục ngắn (Section 3) cho threat model, phát biểu theo ba trục chuẩn của bảo mật: mục tiêu của kẻ tấn công, kiến thức nền, và năng lực. Mục tiêu có thể là một sửa đổi giới hạn (lật nhãn) hoặc một phản hồi tùy ý. Về kiến thức nền, paper giả định kẻ tấn công *không* biết chi tiết nội bộ (instruction prompt, có dùng in-context learning không, LLM nào), và nói rõ lý do chọn giả định này: mọi tấn công được benchmark đều theo threat model đó. Về năng lực, kẻ tấn công chỉ sửa được dữ liệu, không sửa được instruction prompt, và LLM back-end giữ nguyên tính toàn vẹn. Đáng chú ý là câu kết của mục: một tấn công "đáng giá hơn" nếu giả định *ít* kiến thức và năng lực hơn, còn một phòng vệ "đáng giá hơn" nếu an toàn trước tấn công có *nhiều* kiến thức và năng lực hơn. Câu này nêu thẳng tiêu chuẩn đánh giá mà cộng đồng bảo mật dùng, và nó khác hẳn thói quen ở ML/CV/NLP, nơi threat model hiếm khi được tách thành một mục riêng với một tiêu chuẩn tường minh như vậy.

**Định nghĩa thành công và metric.** Paper định nghĩa năm metric có vai trò phân biệt rõ. Performance under No Attacks (PNA) đo tiện ích khi không bị tấn công, tách thành PNA-T cho target task và PNA-I cho injected task. Attack Success Value (ASV) đo hiệu quả của LLM trên injected task dưới tấn công; paper nêu rõ PNA-I là cận trên của ASV, một quan sát giúp người đọc diễn giải con số đúng cách (nếu mô hình vốn làm injected task kém thì ASV thấp không hẳn do phòng vệ tốt). Matching Rate (MR) so phản hồi dưới tấn công với phản hồi khi hỏi thẳng injected task, để tách phần "tấn công thành công" khỏi phần "mô hình vốn làm injected task kém". Với phòng vệ dạng phát hiện, paper thêm False Positive Rate và False Negative Rate. Việc dùng *nhiều* metric, mỗi metric trả lời một câu hỏi, chính là cách một benchmark tránh kết luận sai; đặc biệt, việc đưa cả tiện ích khi không bị tấn công (PNA-T) vào là cốt lõi để đo "cái giá" của phòng vệ, không chỉ đo "cái được".

**Đánh giá chống lại phản biện.** Vì đây là paper benchmark, phần đánh giá chính là đóng góp. Nó phủ mười LLM gồm cả mô hình đóng thương mại (GPT-4, GPT-3.5-Turbo, Bard, PaLM 2) lẫn mô hình mở, nên có cả yếu tố chuyển giao giữa mô hình. Nó phủ 49 tổ hợp target × injected task. Một phát hiện được nêu kèm phân tích tương quan: tấn công kết hợp nhìn chung hiệu quả hơn khi LLM lớn hơn, với hệ số tương quan Pearson giữa độ hiệu quả và kích thước mô hình khoảng 0,63–0,64; paper giả thuyết rằng mô hình lớn theo chỉ dẫn tốt hơn nên dễ bị tổn thương hơn, một kết luận trùng với EIA. Về phòng vệ, paper đo cả FNR lẫn FPR cho các bộ phát hiện và cả tiện ích cho các bộ ngăn chặn, nên không có phòng vệ nào được khen mà giấu đi cái giá của nó. Phần Discussion còn tự nêu các hướng mạnh hơn mà paper chưa làm, trong đó có tấn công dựa trên tối ưu và tấn công thích nghi với bộ phát hiện known-answer; việc tự chỉ ra rằng benchmark hiện mới dùng tấn công dựa trên heuristic là một sự thành thật về phạm vi.

**Đạo đức và công bố có trách nhiệm.** Đây là chỗ khác biệt văn hóa đáng chú ý nhất, và nó phụ thuộc vào năm nộp. Bản được phân tích có mục cảm ơn "anonymous reviewers and shepherd", phản ánh quy trình shepherding đặc trưng của USENIX Security, và công bố mã ngay trong abstract. Tuy nhiên bản này không có một mục "Ethical Considerations" hay "Open Science" tách riêng theo tên. Đáng lưu ý là chính sách của USENIX Security về hai mục này thay đổi theo từng năm: những kỳ gần đây yêu cầu mọi paper thảo luận cân nhắc đạo đức và tuân thủ chính sách khoa học mở, và dần chuyển sang bắt buộc đặt chúng trong các phụ lục riêng có tên cố định (chẳng hạn "Ethical Considerations", "Open Science"), kèm yêu cầu công bố artifact. Vì các chi tiết này (bắt buộc hay khuyến khích, đặt trong thân bài hay phụ lục) khác nhau giữa các kỳ, người viết nhắm USENIX Security nên đọc Call for Papers của đúng năm nộp, vì đây là điểm mà một bản thảo thiếu sót có thể bị trả lại trước cả khi vào nội dung. Về bản chất, chủ đề của paper (tấn công vào tác vụ phân loại văn bản với PII bịa, trên dữ liệu công khai) ít rủi ro đạo đức hơn một tấn công vào hệ thống thật, nên gánh nặng biện minh nhẹ hơn so với EIA; dù vậy, việc công khai mã của cả tấn công lẫn phòng vệ vẫn là một quyết định được cân nhắc, và paper chọn công khai để phục vụ việc dùng chung benchmark.

## Thí nghiệm: một benchmark nhiều chiều

### Thiết lập được mô tả đủ để tái lập

Mục thiết lập liệt kê mười LLM kèm số tham số và nhà cung cấp, bảy tác vụ kèm bộ dữ liệu chuẩn cho từng tác vụ, và cách chọn 100 ví dụ cho mỗi vai trò dữ liệu. Một chi tiết cho thấy sự cẩn thận: khi target task và injected task cùng loại phân loại, paper cố ý chọn các ví dụ có nhãn gốc khác nhau, vì nếu nhãn trùng thì không thể biết thành công là do tấn công hay do mô hình vốn trả đúng. Đây là kiểu "xử lý trường hợp làm metric mất nghĩa" mà một benchmark nghiêm túc phải nghĩ tới, và việc giải thích nó trong văn bản giúp reviewer tin rằng con số không bị thổi phồng.

### Bảng kết quả gánh nhiều chiều

Benchmark có bốn chiều (tấn công, phòng vệ, mô hình, tác vụ), nên thách thức trình bày là làm sao không chôn vùi người đọc trong bảng. Paper giải quyết bằng cách tổng hợp có chọn lọc trong thân bài và đẩy các bảng đầy đủ xuống phụ lục. Trong thân bài, kết quả tấn công được tóm bằng ASV trung bình trên 49 tổ hợp cho từng tấn công, cho thấy tấn công kết hợp đạt trung bình cao nhất (0,75 trên GPT-4, 0,71 trên PaLM 2), còn tấn công ngây thơ thấp nhất. Kết quả phòng vệ được tóm bằng một thông điệp rõ: không phòng vệ hiện có nào đủ, vì phòng vệ ngăn chặn hoặc giảm tấn công kém hoặc làm hụt tiện ích khi không bị tấn công (ví dụ paraphrasing làm PNA-T trung bình giảm 0,14), còn phòng vệ phát hiện thì hoặc bỏ sót nhiều hoặc báo nhầm nhiều. Cách để một thông điệp định tính ("không phòng vệ nào đủ") đứng trên một rừng số liệu định lượng là một kỹ năng mà bài [Experiments](../02-viet-tung-phan/experiments.md) nhấn mạnh: bình luận bảng theo thông điệp, đừng đọc lại bảng.

Một con số đáng được kiểm lại là ASV trung bình của tấn công kết hợp. Bảng tóm theo từng mô hình ghi trung bình trên 10 mô hình và 49 tổ hợp là 0,62, trong khi bảng theo GPT-4 riêng ghi 0,75. Hai con số này không mâu thuẫn (một bên trung bình trên mọi mô hình, một bên chỉ GPT-4), nhưng người đọc lướt nhanh dễ lẫn; khi một đại lượng có nhiều mức trung bình khác nhau, nên gọi tên mức trung bình ngay cạnh con số để tránh hiểu nhầm.

### Phát hiện về bộ phát hiện known-answer

Một phân tích con đáng học là về bộ phát hiện known-answer, phòng vệ phát hiện hiệu quả nhất trong số được thử. Paper không dừng ở "nó tốt nhất" mà đo tiếp FNR của nó trên từng tấn công và cho thấy nó hiệu quả hơn với các tấn công dùng ký tự đặc biệt, nhưng bỏ sót nhiều trong nhiều trường hợp khác, đặc biệt khi target task là sửa ngữ pháp. Việc phân tích *vì sao* một phòng vệ thắng ở chỗ này và thua ở chỗ kia (liên quan tới việc dữ liệu bị xâm phạm có ghi đè được prompt phát hiện hay không) biến một dòng kết quả thành một hiểu biết về cơ chế, và mở đường cho hướng nghiên cứu tiếp theo mà Discussion nêu ra (tấn công thích nghi với known-answer).

## Discussion và Limitations: nơi hội nghị bảo mật dừng lâu hơn

Một đặc trưng văn hóa nữa là paper có hẳn mục "Discussion and Limitations" dài, nêu bốn hướng: tấn công dựa trên tối ưu (thay heuristic bằng tối ưu các thành phần), fine-tune LLM như một phòng vệ, cơ chế *phục hồi* dữ liệu sạch sau khi phát hiện (paper chỉ ra rằng chỉ phát hiện thôi vẫn dẫn tới từ chối dịch vụ), và giới hạn của việc đánh giá known-answer với một prompt phát hiện cụ thể. Ở nhiều paper ML/CV/NLP, các ý này sẽ bị nén vào một đoạn Future Work ngắn; ở hội nghị bảo mật, mục Discussion là nơi paper chứng tỏ nó hiểu không gian vấn đề rộng hơn cái nó đo được. Phần Related Work cũng dành chỗ phân biệt prompt injection với jailbreaking (jailbreaking làm mô hình thực hiện một target task không an toàn; prompt injection làm mô hình thực hiện một injected task khác), một sự phân biệt thuật ngữ mà người viết trong lĩnh vực này cần nắm.

## Bài học cho người viết

**Hình thức hóa là một đóng góp, nếu nó làm được việc mà trước đó không làm được.** Định nghĩa của paper cho phép xếp tấn công cũ thành trường hợp đặc biệt, định lượng thành công, và sinh tấn công mới. Một paper hình thức hóa nên luôn trả lời "framework này làm được gì mới", không chỉ phát biểu định nghĩa.

**Một framework tốt chỉ ra ô trống để điền.** Tấn công kết hợp nảy ra từ chính việc đặt các tấn công cũ vào cùng một khung. Nếu framework của người viết sinh được một phương pháp mới, đó là bằng chứng mạnh nhất về tính hữu ích của nó.

**Dùng nhiều metric, mỗi metric một câu hỏi.** PNA-T đo cái giá của phòng vệ, ASV đo hiệu quả tấn công, MR tách phần tấn công khỏi năng lực nền của mô hình, FPR/FNR đo chất lượng phát hiện. Một benchmark tránh kết luận sai bằng cách không để một metric gánh nhiều câu hỏi.

**Để một thông điệp định tính đứng trên rừng số liệu.** "Không phòng vệ nào đủ" là câu người đọc nhớ; các bảng phụ lục là nơi chứng minh. Bình luận bảng theo thông điệp thay vì đọc lại bảng.

**Đọc đúng Call for Papers của năm nộp.** Với hội nghị bảo mật, vị trí và tên của mục đạo đức và khoa học mở thay đổi theo năm, và là chỗ một bản thảo có thể bị trả lại trước khi vào nội dung.

### Áp dụng cho người viết về visual/multimodal prompt injection

Người đang viết một paper tấn công hoặc phòng vệ về visual/multimodal prompt injection có thể dùng paper này theo hai cách, tùy cộng đồng đích.

Nếu nhắm một **hội nghị bảo mật** (USENIX Security, IEEE S&P, CCS, NDSS), đây là khuôn mẫu gần nhất: threat model tách thành mục riêng với tiêu chuẩn tường minh về kiến thức và năng lực; benchmark nhiều chiều với metric tách vai trò, trong đó bắt buộc có metric tiện ích khi không bị tấn công; mục Discussion dài bàn cả những hướng chưa làm; và một mục đạo đức cùng khoa học mở theo đúng định dạng của năm nộp. Một phiên bản đa phương thức sẽ thêm một chiều "kênh tấn công" (điểm ảnh so với siêu dữ liệu) vào benchmark, và thêm một metric đo độ nhiễu nhìn thấy được song song với metric thành công.

Nếu nhắm **NeurIPS/ICML/ICLR** hoặc **CVPR/ICCV/ECCV** hoặc **ACL/EMNLP/NAACL**, bài học chuyển giao được là *giá trị của việc hệ thống hóa*: khi một chủ đề đa phương thức đã có nhiều tấn công rời rạc, một paper hình thức hóa và benchmark chúng trên cùng một khung có thể là một đóng góp A\*, kể cả khi không có tấn công nào hoàn toàn mới. Điều cần điều chỉnh là trọng tâm trình bày: reviewer thị giác sẽ muốn thấy hình minh họa cơ chế và chỉ số nhiễu định lượng; reviewer NLP sẽ muốn thấy bộ dữ liệu có quy trình xây dựng rõ ràng và một checklist trách nhiệm; reviewer ML sẽ muốn thấy phân tích tương quan và tấn công thích nghi. Trong mọi trường hợp, nguyên tắc "một metric tiện ích đi kèm mỗi metric thành công" nên được giữ, vì nó là cách trung thực nhất để cho thấy một phòng vệ phải trả giá bao nhiêu.

Hai case study [EIA](eia.md) (một tấn công cụ thể trên hệ thống thật) và bài này (một khung đo đạc) cho thấy hai con đường bổ sung nhau tới một paper A\* về prompt injection; còn [AgentDojo](agentdojo.md) và [MELON](melon.md) đưa cùng chủ đề này vào một môi trường đánh giá động và một cơ chế phòng vệ cụ thể.

## Tóm tắt

Paper này là ví dụ mẫu mực về một đóng góp dạng hình thức hóa và benchmark. Nó nhận ra rằng tài liệu về prompt injection chỉ gồm case study rời rạc, rồi đề xuất một framework định nghĩa prompt injection gọn trên hai khái niệm target task và injected task, sao cho các tấn công đã biết đều là trường hợp đặc biệt và một tấn công kết hợp nảy ra tự nhiên từ khung đó. Phòng vệ cũng được hình thức hóa thành hai loại ngăn chặn và phát hiện. Benchmark phủ bốn chiều (5 tấn công × 10 phòng vệ × 10 LLM × 7 tác vụ) và dùng một bộ metric tách vai trò, trong đó có cả metric tiện ích khi không bị tấn công để đo cái giá của phòng vệ, với kết luận rằng tấn công hiệu quả trên diện rộng còn phòng vệ hiện có đều chưa đủ. Về văn hóa viết, paper cho thấy đặc trưng của hội nghị bảo mật: threat model tách thành mục riêng với tiêu chuẩn tường minh, mục Discussion dài bàn cả hướng chưa làm, phân biệt rõ prompt injection với jailbreaking, và một chính sách đạo đức cùng khoa học mở phụ thuộc vào năm nộp. Những điểm người đọc nên lưu ý gồm sự lệch tiêu đề giữa các bản và vài con số trung bình cần được gọi tên rõ mức trung bình để tránh hiểu nhầm.

## Bài tập

1. Lấy ba phương pháp rời rạc trong lĩnh vực của người học và thử viết một định nghĩa hình thức chung sao cho cả ba là trường hợp đặc biệt. Định nghĩa đó có gợi ý một phương pháp thứ tư chưa ai làm không?
2. Thiết kế bộ metric cho một benchmark giả định trong chủ đề của người học, sao cho mỗi metric trả lời đúng một câu hỏi và có ít nhất một metric đo "cái giá" chứ không chỉ "cái được". Giải thích vì sao thiếu metric cái giá sẽ dẫn tới kết luận sai.
3. Viết mục threat model cho một ý tưởng nghiên cứu, theo ba trục mục tiêu – kiến thức nền – năng lực, rồi thêm một câu nêu tiêu chuẩn đánh giá (tấn công đáng giá hơn khi giả định ít hơn; phòng vệ đáng giá hơn khi chịu được giả định nhiều hơn).
4. Đọc Call for Papers mới nhất của một hội nghị bảo mật (USENIX Security, IEEE S&P, CCS hoặc NDSS) và liệt kê các yêu cầu về mục đạo đức và khoa học mở, kèm vị trí phải đặt chúng trong bài. So sánh với yêu cầu tương ứng của một hội nghị ML/CV/NLP.
5. Chọn một bảng kết quả nhiều chiều trong một paper bất kỳ và viết lại một đoạn bình luận bảng theo thông điệp (một câu định tính đứng trước, số liệu chứng minh đứng sau), thay vì đọc lại số.
6. So sánh cách [EIA](eia.md) và paper này tiếp cận cùng một chủ đề prompt injection: một bên đề xuất tấn công cụ thể, một bên hình thức hóa và benchmark. Với một dự án của người học, con đường nào phù hợp hơn, và vì sao?
