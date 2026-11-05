# Case study: CrossInject (ACM MM 2025)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper tấn công tuyên bố một lỗ hổng "chưa được chú ý" và cách định nghĩa khái niệm mới để claim "đầu tiên" đứng vững.
    - Đánh giá một mục Threat Model có ký hiệu hình thức và năng lực kẻ tấn công được nêu rõ.
    - Nhận ra các rủi ro về tính đại diện khi hệ thống bị tấn công do chính nhóm tác giả xây dựng, và khi metric được chấm bằng LLM.
    - Tự kiểm tra sự nhất quán của con số và mô tả giữa abstract, Introduction, phần kết quả và kết luận.
    - Rút ra những gì một paper tấn công nên có mà paper này còn thiếu: ethics statement, phòng vệ đủ mạnh, kiểm định thống kê cho thí nghiệm nhỏ.

**Manipulating Multimodal Agents via Cross-Modal Prompt Injection** của Le Wang, Zonghao Ying, Tianyuan Zhang, Siyuan Liang, Shengshan Hu, Mingchuan Zhang, Aishan Liu và Xianglong Liu (Beihang University, National University of Singapore, Huazhong University of Science and Technology, Henan University of Science and Technology) được công bố tại ACM Multimedia 2025. Paper đề xuất một khung tấn công tên **CrossInject** nhắm vào các agent đa phương thức. Phân tích dựa trên bản arXiv (2504.14348); bản trong kỷ yếu có thể khác ở một số chi tiết.

Bài này **không** đi vào cách tấn công vận hành. Nó chỉ phân tích cách paper được viết: cách đặt vấn đề, cách phát biểu threat model, cách thiết kế và báo cáo đánh giá, và những chỗ mà một người viết paper trong cùng chủ đề có thể làm tốt hơn. Paper này hữu ích theo một cách khác với các case study kinh điển: nó cho thấy cả những điểm mạnh điển hình lẫn nhiều lỗi nhỏ về sự nhất quán mà một vòng đọc soát kỹ có thể bắt được.

## Bối cảnh: ACM Multimedia và chủ đề agent đa phương thức

ACM Multimedia là hội nghị lớn về đa phương tiện, nơi giao thoa giữa thị giác, âm thanh và ngôn ngữ. Một paper về tấn công agent sử dụng cả ảnh lẫn văn bản phù hợp tự nhiên với phạm vi này. Ở thời điểm paper ra đời, các nghiên cứu về prompt injection phần lớn tập trung vào một phương thức: hoặc chèn chỉ thị vào văn bản, hoặc giấu chỉ thị trong ảnh. Paper tự đặt vào khoảng trống giữa hai hướng đó.

## Câu chuyện một dòng

> Agent đa phương thức xử lý đồng thời ảnh, câu lệnh và dữ liệu bên ngoài, nên một tấn công chỉ nhắm vào một phương thức là không đủ; paper đề xuất khái niệm **cross-modal prompt injection**, một khung tấn công black-box phối hợp nhiều đầu vào, và cho thấy nó vượt các tấn công đơn phương thức trên hai agent thử nghiệm và một xe tự hành thật.

## Title và abstract

### Title nêu đúng hành động và đối tượng

Title *"Manipulating Multimodal Agents via Cross-Modal Prompt Injection"* gồm ba thành phần: hành động (manipulating), đối tượng (multimodal agents), phương tiện (cross-modal prompt injection). Nó không chứa tên phương pháp, điều thường thấy ở các paper muốn nhấn mạnh một khái niệm mới hơn là một công cụ. Cụm "cross-modal prompt injection" chính là khái niệm mà paper muốn cộng đồng ghi nhớ.

### Abstract theo khuôn "lỗ hổng – khung – hai thành phần – kết quả"

Abstract đi theo một khuôn rõ ràng: agent đa phương thức là xu hướng mới; paper xác định một lỗ hổng "critical yet previously overlooked"; đề xuất khung CrossInject; giới thiệu hai thành phần phối hợp với tên riêng (một tác động lên đầu vào ảnh, một lên câu lệnh văn bản); kết quả "at least a +30.1% increase in attack success rates"; và kiểm chứng trên agent thật. Đặt tên riêng cho từng thành phần giúp ablation và thảo luận sau đó dễ theo dõi.

Hai điểm có thể chặt hơn. Thứ nhất, cụm "critical yet previously overlooked" là một tuyên bố mạnh, và mức độ đứng vững của nó phụ thuộc vào cách paper phân biệt với các công trình tấn công qua ảnh đã có (xem mục Related Work bên dưới). Thứ hai, abstract mô tả các thành phần ở mức khá kỹ thuật nhưng không nêu threat model, trong khi "black-box" là một điểm mạnh lớn của paper; một cụm ngắn như "under a black-box threat model" sẽ giúp reviewer đánh giá đúng độ khó của bài toán ngay từ đầu.

## Introduction và claim "đầu tiên"

Introduction gồm bốn đoạn và một danh sách đóng góp. Đoạn đầu nêu sự phát triển của VLM và các ứng dụng của agent đa phương thức. Đoạn hai giới thiệu prompt injection, ghi nhận rằng tấn công đã được nghiên cứu kỹ trong thiết lập đơn phương thức, rồi lập luận rằng chúng bỏ qua tương tác giữa các phương thức, và kết thúc bằng câu khoảng trống: chưa có khung tấn công có hệ thống nào dành cho agent đa phương thức black-box. Đoạn ba giới thiệu khái niệm và hai thành phần. Đoạn bốn tóm tắt kết quả, kể cả kiểm tra với phòng vệ và thí nghiệm trên xe tự hành.

Danh sách đóng góp mở đầu bằng claim: *"To the best of our knowledge, this paper is the first work to perform cross-modal prompt injection on LVLM-driven multimodal agents."* Claim này đứng vững được hay không phụ thuộc hoàn toàn vào **định nghĩa** của "cross-modal". Chính mục Related Work của paper đã nhắc tới các công trình giấu chỉ thị trong ảnh dạng chữ, các tấn công dùng nhiễu ảnh để nhúng chỉ thị, và một công trình chiếm quyền điều khiển agent đa phương thức qua nhiễu trên ảnh hoặc âm thanh trong thiết lập white-box. Khác biệt mà paper muốn nhấn mạnh là phối hợp *đồng thời nhiều phương thức* và *black-box*. Vì vậy, một claim chính xác hơn sẽ gói cả hai điều kiện đó vào câu: "the first black-box attack that coordinates perturbations across visual and textual inputs of multimodal agents". Bài học chung, đã bàn ở case study [Streaming ITN](../05-case-studies/streaming-itn.md): **một claim "đầu tiên" chỉ an toàn khi phạm vi của nó được phát biểu chính xác**, vì reviewer sẽ đối chiếu nó với chính danh sách công trình liên quan mà paper đưa ra. Tình huống 10 trong bài [Ghép ý tưởng và "độn" đóng góp](../07-tinh-huong-kho/ghep-va-don.md) phân tích chung cách khoanh phạm vi cho claim "đầu tiên" và các từ ngữ thổi phồng.

## Giải phẫu theo góc nhìn bảo mật

### Threat model

Paper dành hẳn Section 3 cho **Threat Model** có ký hiệu hình thức, và đây là phần viết tốt nhất. Mục 3.1 định nghĩa agent như một hàm của bốn đầu vào: system prompt do nhà phát triển đặt ra, ảnh, dữ liệu bên ngoài (trang web, tài liệu) và câu lệnh của người dùng. Tấn công được định nghĩa là việc biến đổi đồng thời ba trong bốn đầu vào đó để agent thực hiện một hành động vi phạm vai trò được quy định trong system prompt. Mục 3.2 nêu **năng lực của kẻ tấn công**: chỉ có quyền truy cập black-box (tải ảnh, tệp hoặc gửi câu lệnh), không biết kiến trúc và tham số, nhưng biết mô tả gần đúng về chức năng của agent. Paper biện minh tính thực tế của giả định này bằng việc agent thường được triển khai dưới dạng dịch vụ đám mây. Cuối cùng, paper phân loại hai kênh đưa chỉ thị vào dữ liệu bên ngoài (qua tài nguyên công khai và qua tài liệu tải lên trực tiếp), theo cách phân loại của công trình trước.

Một mục threat model như vậy đạt cả ba yêu cầu đã nêu ở bài [Xu hướng đóng góp trong AI Security](xu-huong-dong-gop.md): mục tiêu rõ (agent làm việc trái vai trò), năng lực rõ (black-box, biết mô tả chức năng), và kênh tấn công rõ. Ký hiệu hình thức giúp mọi thành phần của tấn công và mọi ablation sau đó đều có chỗ đứng chính xác.

### Định nghĩa thành công và metric

Paper dùng hai metric: **Attack Success Rate (ASR)** và **Performance under No Attack (PNA)**, tức khả năng agent thực hiện đúng nhiệm vụ gốc khi không bị tấn công. Cặp metric này phản ánh đúng tinh thần đã bàn ở case study [AgentDojo](agentdojo.md): một nghiên cứu bảo mật về agent cần biết cả hệ thống bị tấn công dễ đến đâu lẫn hệ thống hoạt động tốt đến đâu khi bình thường.

Cả hai metric được chấm bằng phương pháp **LLM-as-a-Judge**. Đây là lựa chọn thực tế, nhưng paper không báo cáo việc kiểm tra độ tin cậy của bộ chấm, chẳng hạn đối chiếu một mẫu với đánh giá của con người. Điều này đặc biệt đáng chú ý khi PNA đạt 100% ở mọi cấu hình và paper kết luận các agent "maintain perfect capability": một kết quả hoàn hảo đồng loạt thường khiến reviewer hỏi liệu bộ chấm có quá dễ dãi hay không. Một đoạn ngắn về độ đồng thuận giữa bộ chấm LLM và người chấm trên vài chục mẫu sẽ chặn trước câu hỏi này.

### Đánh giá chống lại phản biện

Câu hỏi phản biện đầu tiên nhắm vào chính thiết lập đánh giá. Hai agent bị tấn công, *RecipeMaster* và *PoetryGenius*, là chatbot do chính nhóm tác giả thiết kế theo các công trình trước, mỗi agent có thể dùng một trong hai VLM mã nguồn mở (Qwen2-VL bản 2B và Phi-3.5-vision). Thiết kế này cho phép kiểm soát chặt thí nghiệm, nhưng nó cũng đặt ra một câu hỏi về **tính đại diện**: agent tự xây và mô hình nhỏ có phản ánh agent thương mại hay không. Paper trả lời một phần bằng thí nghiệm trên một xe thông minh thương mại. Trong phần Limitations, paper nêu hướng mở rộng sang agent thực tế có kiến trúc phức tạp hơn, đúng là chỗ cần thừa nhận. Một câu nói thẳng rằng kết luận hiện mới được kiểm chứng trên hai VLM cỡ nhỏ sẽ làm phần này chặt chẽ hơn.

Có một chi tiết trong phần kết quả đáng được bàn kỹ hơn. Baseline tấn công qua ảnh đạt **0% ASR ở mọi kịch bản**. Paper diễn giải đây là bằng chứng cho giới hạn của việc chỉ nhiễu ảnh. Diễn giải này có thể đúng, nhưng một baseline hoàn toàn bằng 0 ở mọi ô cũng khiến reviewer cẩn thận đặt câu hỏi về việc cài đặt lại baseline trong thiết lập mới. Bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) khuyên rằng khi một baseline sụp đổ hoàn toàn, nên có một kiểm tra cho thấy cài đặt baseline vẫn đúng, chẳng hạn chạy lại nó trong đúng thiết lập gốc của paper đề xuất baseline đó, như case study Streaming ITN đã làm với AdapITN.

Phần **ablation** được thiết kế tốt: bỏ từng thành phần, thay thành phần bằng nhiễu ngẫu nhiên hoặc chuỗi ngẫu nhiên có cùng độ dài, thay đổi ngân sách nhiễu, số vòng lặp và mô hình thay thế. Có một ablation đặc biệt đáng học: paper so sánh phiên bản dùng system prompt **thật** của agent (thông tin kẻ tấn công không có) với phiên bản dùng system prompt do kẻ tấn công tự xây dựng. Kết quả chỉ chênh lệch nhỏ, và paper dùng nó để lập luận rằng giả định black-box không làm yếu tấn công đáng kể. Một thí nghiệm "nếu kẻ tấn công biết nhiều hơn thì sao" như vậy là cách rất tốt để chứng minh threat model không quá lạc quan.

Phần **phòng vệ** (Section 7) thử hai phòng vệ đơn giản (một kỹ thuật prompt bọc câu lệnh và làm mờ ảnh) cùng tổ hợp của chúng, và cho thấy chúng chỉ giảm ASR ít. Kết luận này hợp lý với hai phòng vệ được thử, nhưng chúng đều là phòng vệ nhẹ. Như case study [MELON](melon.md) và [StruQ](struq.md) cho thấy, các phòng vệ mạnh hơn cho prompt injection đã tồn tại ở thời điểm paper ra đời. Một paper tấn công thuyết phục nhất khi thử với phòng vệ mạnh nhất có thể áp dụng, và khi không thể, nói rõ lý do.

Thí nghiệm **thế giới thực** trên xe tự hành là điểm cộng lớn về tính thuyết phục: mười lần thử, tấn công văn bản đơn giản thành công 4 lần, tấn công đề xuất thành công 9 lần, và paper kết luận tấn công "significantly disrupts" agent vật lý. Với mười lần thử mỗi bên, một kiểm định chính xác Fisher hai phía cho hai tỉ lệ này cho giá trị $p$ xấp xỉ 0,057, tức chưa đạt ngưỡng 0,05 thường dùng. Kết quả vẫn có giá trị minh họa, nhưng chữ "significantly" nên được thay bằng "9/10 versus 4/10", hoặc tăng số lần thử. Bài học này lặp lại điều bài [Experiments](../02-viet-tung-phan/experiments.md) đã nhấn mạnh: chữ "significantly" là một claim thống kê.

### Đạo đức và công bố có trách nhiệm

Paper **không có ethics statement**, dù nội dung là một khung tấn công được thử trên một xe tự hành thật, có minh họa cảnh xe đâm vào biển báo. So với [Visual Adversarial Examples Jailbreak](visual-adv-jailbreak.md), nơi ethics statement được đặt ngay cuối Introduction, đây là một thiếu sót rõ. Một ethics statement cho paper loại này nên nêu: thí nghiệm vật lý được thực hiện trên đường thử dựng sẵn, có biện pháp an toàn; việc có hay không thông báo cho các nhà phát triển mô hình và hệ thống được thử; và cách nhóm tác giả cân nhắc khi công bố mã nguồn tấn công.

## Kiểm tra sự nhất quán: một bài tập đọc soát

Paper chứa một số chỗ không nhất quán nhỏ. Không chỗ nào làm sai kết luận chính, nhưng cộng lại, chúng làm giảm độ tin cậy, và tất cả đều có thể bắt được bằng một vòng đọc soát có hệ thống.

| Chỗ | Nội dung | Vấn đề |
|---|---|---|
| Abstract, Introduction | "at least +30.1%" mức tăng ASR | Section 5.2 báo cáo mức tăng trung bình 32,7% (tài liệu cục bộ) và 27,5% (trang web); 27,5 nhỏ hơn 30,1, nên "at least" không đúng với kịch bản trang web |
| Conclusion | "at least +26.4%" | Một con số thứ ba, khác với abstract và Introduction |
| Mục 5.1 | "three public natural language processing datasets" | Chỉ hai dataset được nêu tên, và caption Table 1 viết "two" |
| Mục 4.1 | Văn bản gọi tên một loại chuẩn khoảng cách | Phương trình ngay trên dùng một loại chuẩn khác |
| Section 6 | "significantly" cho 9/10 so với 4/10 | Chưa đạt ngưỡng ý nghĩa thống kê thông thường |

Cách phòng tránh đã được trình bày ở case study [EDWARD-NMT](../05-case-studies/edward-nmt.md): lập một bảng đối chiếu mọi con số trong abstract, Introduction và Conclusion với ô tương ứng trong bảng kết quả, và đọc lại từng phương trình cạnh câu văn mô tả nó. Mười lăm phút cho bước này có thể tiết kiệm một vòng phản biện.

## Bài học cho người viết

**Đặt tên cho khái niệm mới, rồi định nghĩa nó đủ chặt để claim "đầu tiên" đứng vững.** "Cross-modal prompt injection" là một cái tên tốt; claim "first" cần gói đúng hai điều kiện làm nên khác biệt (phối hợp nhiều phương thức, black-box).

**Viết threat model như một mục riêng, có ký hiệu.** Mục 3 của paper là mẫu tốt: hệ thống được mô hình hóa, năng lực kẻ tấn công được nêu và biện minh, kênh tấn công được phân loại.

**Chứng minh threat model không quá lạc quan bằng một thí nghiệm "nếu kẻ tấn công biết nhiều hơn".** Ablation dùng system prompt thật là một ý tưởng đáng học.

**Kiểm tra bộ chấm khi dùng LLM-as-a-Judge**, nhất là khi kết quả hoàn hảo đồng loạt.

**Thử với phòng vệ mạnh nhất có thể**, và kiểm định thống kê cho các thí nghiệm có ít lần thử.

**Luôn có ethics statement cho paper tấn công**, đặc biệt khi có thí nghiệm vật lý.

### Áp dụng cho paper về visual/multimodal prompt injection

CrossInject gần như là một bản mẫu cho các paper tấn công trong chủ đề này, nên các bài học áp dụng trực tiếp. Khi nhắm CVPR hoặc ICCV, reviewer sẽ quan tâm tới tính kín đáo của nhiễu ảnh, độ đa dạng của mô hình bị tấn công và thí nghiệm vật lý; khi nhắm NeurIPS, ICML hoặc ICLR, reviewer sẽ hỏi về phòng vệ thích nghi và tính tổng quát; khi nhắm ACL hoặc EMNLP, cách chấm bằng LLM và độ tin cậy của nó sẽ bị soi kỹ. Ở mọi nơi, một bảng đối chiếu con số trước khi nộp và một ethics statement là hai việc rẻ nhất mà hiệu quả nhất.

## Tóm tắt

CrossInject dựng câu chuyện quanh một khái niệm mới, cross-modal prompt injection, và một khung tấn công black-box phối hợp nhiều đầu vào của agent đa phương thức. Paper có một mục Threat Model tốt với ký hiệu hình thức, năng lực kẻ tấn công được nêu và biện minh, cặp metric ASR và PNA, ablation đầy đủ kèm một thí nghiệm thông minh kiểm tra giả định black-box, và một thí nghiệm vật lý thuyết phục về mặt minh họa. Những điểm cần cải thiện gồm claim "đầu tiên" cần phát biểu chặt hơn, độ tin cậy của bộ chấm LLM chưa được kiểm tra, baseline đạt 0% cần một kiểm tra cài đặt, phòng vệ được thử còn nhẹ, chữ "significantly" cho một thí nghiệm mười lần thử, thiếu ethics statement, và một loạt chỗ không nhất quán nhỏ giữa abstract, kết quả và kết luận. Tất cả đều có thể sửa bằng những bước kiểm tra đơn giản trước khi nộp.

## Bài tập

1. Viết lại claim "đầu tiên" của dự án hiện tại sao cho nó gói đủ các điều kiện làm nên khác biệt, rồi đối chiếu với danh sách công trình liên quan trong chính bản thảo để kiểm tra có phản ví dụ hay không.
2. Thiết kế một thí nghiệm "nếu kẻ tấn công biết nhiều hơn" cho dự án: chạy với một thông tin mà threat model cho rằng kẻ tấn công không có, và so sánh kết quả.
3. Nếu dự án dùng LLM-as-a-Judge, đề xuất một giao thức kiểm tra độ đồng thuận với người chấm trên một mẫu nhỏ, và viết câu báo cáo kết quả kiểm tra đó.
4. Lập bảng đối chiếu như mục "Kiểm tra sự nhất quán" cho bản thảo hiện tại: mọi con số trong abstract, Introduction và Conclusion cùng ô tương ứng trong bảng.
5. Viết một ethics statement cho một paper tấn công có thí nghiệm trong thế giới thực, nêu biện pháp an toàn, việc thông báo cho bên phát triển và chính sách công bố mã nguồn.
