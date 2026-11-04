# Case study: AgentDojo (NeurIPS 2024 Datasets and Benchmarks)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một benchmark paper cho bảo mật lập luận vì sao cần một *môi trường động* thay vì một bộ dữ liệu tĩnh.
    - Giải thích vai trò của user task, injection task, hàm kiểm tra bằng code và chuỗi tool call ground truth trong thiết kế benchmark.
    - Định nghĩa và diễn giải đúng benign utility, utility under attack, targeted ASR và phép gộp "Max" mô phỏng kẻ tấn công thích nghi.
    - Nhận ra những yếu tố giúp một benchmark trở thành chuẩn chung, cùng trách nhiệm đi kèm khi điều đó xảy ra.
    - Rút ra bài học về độ nhất quán số liệu trong một paper được cập nhật nhiều lần.

Bài này phân tích **AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents**, của Edoardo Debenedetti, Jie Zhang, Mislav Balunović, Luca Beurer-Kellner, Marc Fischer và Florian Tramèr (ETH Zurich; Balunović, Beurer-Kellner và Fischer đồng thời thuộc Invariant Labs), công bố tại NeurIPS 2024 Datasets and Benchmarks Track. Phân tích dựa trên bản arXiv 2406.13352 ở phiên bản đã bổ sung kết quả Claude 3.5 Sonnet; bản trong kỷ yếu có thể khác ở chi tiết. Metadata của phiên bản arXiv đầu ghi title ngắn hơn, "AgentDojo: A Dynamic Environment to Evaluate Attacks and Defenses for LLM Agents"; bản sau thêm cụm "Prompt Injection".

Trang này nên được đọc cùng trang [MELON](melon.md), phòng vệ ICML 2025 dùng AgentDojo làm benchmark duy nhất. Ở đây chúng ta nhìn từ phía người đặt luật chơi: cách định nghĩa nhiệm vụ, metric và giới hạn sử dụng; trang MELON nhìn từ phía người dùng các luật ấy.

Với người học Việt Nam, paper đáng giá ở hai điểm kiểm chứng được. Đóng góp của nó không cần phương pháp mới hay tài nguyên huấn luyện: giá trị nằm ở thiết kế môi trường, nhiệm vụ và phép đo, và được chấp nhận ở một track dành riêng cho kiểu đóng góp này. Chi phí dùng benchmark cũng thấp: paper ước tính chạy toàn bộ 629 test case bảo mật trên GPT-4o tốn khoảng 35 USD và 97 test case tiện ích khoảng 4 USD; mã nguồn theo license MIT, cài bằng `pip install agentdojo`. Một nhóm với ngân sách khiêm tốn có thể vừa đánh giá vừa đóng góp nhiệm vụ hay tấn công mới.

## Bối cảnh: từ bộ prompt tĩnh tới môi trường agent có trạng thái

Introduction của AgentDojo phát biểu gốc rễ của prompt injection rất gọn: LLM xử lý mọi thứ dưới dạng văn bản và không có cách hình thức để phân biệt *lệnh* với *dữ liệu*. Khi LLM được gắn với tool, dữ liệu tool trả về (một email, một trang web, một đánh giá khách sạn) trở thành kênh để bên thứ ba chèn lệnh, và một lời chèn thành công có thể khiến agent hành động thay người dùng.

Trước AgentDojo, cách đo hiện tượng này có ba hạn chế mà paper chỉ ra. Các benchmark prompt injection sớm xét tình huống không có tool call như hỏi đáp tài liệu, lấy cắp prompt hay chiếm quyền mục tiêu; công trình được phân tích ở trang [Formalizing Prompt Injection](formalizing-pi.md) cũng được xếp vào nhóm benchmark trước. InjecAgent gần tinh thần nhất nhưng dùng kịch bản mô phỏng một lượt: đưa thẳng một output độc hại vào mô hình, không đánh giá việc lập kế hoạch. ToolEmu dùng LLM để mô phỏng tool và chấm điểm, điều paper cho là có vấn đề vì lời chèn có thể đánh lừa luôn LLM mô phỏng.

Paper được nộp ở Datasets and Benchmarks (D&B) track của NeurIPS. Như bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md#datasets-benchmarks-track) đã phân tích, paper ở track này phải trả lời bốn câu hỏi: khoảng trống, chất lượng, giá trị phân biệt và tính bền vững. Bài này dùng bốn câu hỏi ấy làm lăng kính.

## Câu chuyện một dòng

> Bảo mật trước prompt injection là một cuộc chạy đua mà bộ test tĩnh sẽ nhanh chóng lỗi thời; vì vậy AgentDojo không phải một bộ dữ liệu mà là một môi trường có trạng thái, nơi agent phải gọi nhiều tool trên dữ liệu không tin cậy, kết quả được chấm bằng hàm kiểm tra trên trạng thái môi trường, và cộng đồng có thể bổ sung nhiệm vụ, tấn công và phòng vệ; ngay phiên bản đầu với 97 nhiệm vụ và 629 test case, nó đã đủ khó cho cả hai phía.

Câu chuyện có hai tầng. Tầng thứ nhất là *triết lý thiết kế* (động thay vì tĩnh), được biện minh bằng bản chất của lĩnh vực: trong bảo mật ML, phòng vệ nào cũng có thể bị một tấn công thích nghi phá. Tầng thứ hai là *bằng chứng giá trị hiện tại*: mô hình tốt nhất vẫn thất bại ở nhiều nhiệm vụ khi không bị tấn công, tấn công thành công một phần, phòng vệ có cái giá về tiện ích. Một benchmark paper cần cả hai: triết lý cho biết benchmark còn hữu ích bao lâu, bằng chứng cho biết nó hữu ích ngay bây giờ.

## Title và abstract

"AgentDojo" là một cái tên dễ nhớ, gợi tới một võ đường nơi agent bị thử thách; phần checklist của paper gọi nó là "the gym". "A Dynamic Environment" đặt điểm khác biệt cốt lõi ngay sau tên, còn "to Evaluate Prompt Injection Attacks and Defenses for LLM Agents" nói rõ đối tượng và phạm vi. Việc bản sau thêm "Prompt Injection" là một chỉnh sửa đáng học: "Attacks and Defenses" một mình có thể là adversarial example, jailbreak hay backdoor, còn title của một benchmark nên gọi tên đúng hiện tượng được đo (xem bài [Title](../02-viet-tung-phan/title.md)).

Abstract đi theo trình tự: agent kết hợp suy luận với tool; agent dễ bị prompt injection; giới thiệu AgentDojo; câu định danh "AgentDojo is not a static test suite, but rather an extensible environment…"; số lượng kèm ví dụ (97 nhiệm vụ như quản lý email, ngân hàng điện tử, đặt chuyến đi; 629 test case bảo mật); hai phát hiện; một lời hy vọng; mã nguồn. Câu định danh dạng "không phải X mà là Y" là kỹ thuật rất hiệu quả cho benchmark: nó nói ngay paper khác các benchmark trước ở đâu. Các ví dụ trong ngoặc giúp người đọc hình dung môi trường chỉ bằng một câu.

Điểm có thể tốt hơn là hai phát hiện được viết định tính. "State-of-the-art LLMs fail at many tasks" và "existing prompt injection attacks break some security properties but not all" đều đúng nhưng mờ: "security properties" không được định nghĩa ở đâu khác trong paper, và "many" không có con số. Một phiên bản cụ thể hơn có thể dẫn số từ phụ lục, chẳng hạn mô hình tốt nhất đạt benign utility 78,22% (Table 3), và bộ phát hiện prompt injection giảm targeted ASR trên GPT-4o từ 57,69% xuống 7,95% nhưng kéo benign utility từ 69,0% xuống 41,49% (Table 5). Khi viết lại, cần lấy số trực tiếp từ bảng, vì như sẽ thấy, các con số trong Introduction không khớp hoàn toàn với các bảng.

## Introduction: sáu đoạn cho một benchmark

**Đoạn 1 và 2** đi từ agent tới khiếm khuyết căn bản. Câu "LLMs operate directly on text, lacking a formal way to distinguish instructions from data" là câu quan trọng nhất, vì nó biến prompt injection từ một lỗi "mô hình chưa đủ tốt" thành một vấn đề *cấu trúc*, tương tự cách SQL injection được hiểu trong bảo mật phần mềm. Một khi người đọc chấp nhận đây là vấn đề cấu trúc, họ cũng chấp nhận rằng cần đo nó một cách hệ thống và lâu dài.

**Đoạn 3** giới thiệu AgentDojo cùng Figure 1, và định nghĩa luôn đơn vị của benchmark: một test case bảo mật gồm *mục tiêu của kẻ tấn công* và *điểm chèn* (ví dụ một email trong hộp thư người dùng). Định nghĩa đơn vị đánh giá ngay trang đầu là thói quen tốt, vì mọi con số phía sau đều đếm trên đơn vị đó. **Đoạn 4** so với các benchmark trước bằng hai tính từ chính xác: agent phải gọi nhiều tool *một cách động* trong môi trường *có trạng thái*, và kết quả được chấm bằng *kiểm tra hình thức trên trạng thái môi trường* thay vì nhờ LLM mô phỏng. Hai tính từ này về sau trở thành hai trục định vị.

**Đoạn 5** phát biểu triết lý "a static benchmark would be of limited use" và tóm tắt kết quả ban đầu. **Đoạn 6** khoanh phạm vi một cách khiêm tốn: agent, phòng vệ và tấn công có sẵn là loại đa dụng; nghiên cứu sau được kỳ vọng làm tốt hơn; và để chặn các tấn công thích nghi mạnh hơn, có lẽ cần những đột phá thực sự trong việc tách lệnh khỏi dữ liệu. Đoạn này chặn trước phản biện "baseline yếu" bằng cách nói thẳng baseline chỉ là điểm xuất phát.

Chỗ cần lưu ý nằm ở đoạn 5. Văn bản viết rằng các LLM hiện tại giải được dưới 66% nhiệm vụ khi không bị tấn công, và tấn công thành công với các agent tốt nhất trong dưới 25% trường hợp. Table 3 lại ghi benign utility 69,00% cho GPT-4o và 78,22% cho Claude 3.5 Sonnet, cùng targeted ASR 47,69% và 33,86% cho hai mô hình này. Con số 8% cho bộ phát hiện thì khớp Table 5 (7,95%). Người đọc so Introduction với bảng sẽ khó biết con số nào phản ánh phiên bản hiện tại. Bài học nằm ở quy trình: mỗi lần cập nhật kết quả, mọi con số trong abstract và Introduction phải được dò lại từ bảng.

**Figure 2**, đặt ở Related Work, làm nhiệm vụ của Introduction: so độ khó của AgentDojo với Berkeley Tool Calling Leaderboard để cho thấy nhiệm vụ khó hơn ngay cả khi không có tấn công, tức là trả lời trực tiếp câu hỏi "benchmark có phân biệt được không?". Chú thích chân trang nói rõ Llama 3 70B dùng một prompt khác với leaderboard, một sự minh bạch nhỏ nhưng cần thiết. Văn bản viết thận trọng hơn caption ("at least as challenging" so với "harder"); hai cách nói nên thống nhất.

## Related Work: định vị trên hai trục

Mục Related Work điểm qua ba hướng phòng vệ (phát hiện lời chèn, huấn luyện hoặc prompt để mô hình phân biệt lệnh và dữ liệu, cô lập tool call khỏi thành phần lập kế hoạch) rồi định vị AgentDojo so với hai họ benchmark. Có thể tóm phần định vị trên hai trục:

| | Không có tấn công | Có prompt injection |
|---|---|---|
| Một lời gọi hàm hoặc một lượt mô phỏng | Benchmark function-calling | Benchmark prompt injection không có tool; InjecAgent |
| Nhiều bước, có trạng thái, có lập kế hoạch | AgentBench, WebShop, WebArena…; ToolEmu (tool do LLM mô phỏng) | **AgentDojo** |

Bảng cho thấy vì sao định vị thuyết phục: ô dưới bên phải trống trước AgentDojo. Mỗi họ benchmark được mô tả bằng một câu và một lý do vì sao chưa đủ. Lý do quan trọng nhất dành cho ToolEmu: dùng LLM mô phỏng và chấm điểm có vấn đề *riêng* với prompt injection, vì hiện tượng được đo có thể đánh lừa chính công cụ đo. Đây là định vị bằng điểm yếu cấu trúc của công trình trước, đúng tinh thần bài [Related Work](../02-viet-tung-phan/related-work.md), chứ không phải bằng việc chê kết quả.

## Thiết kế benchmark: mỗi thành phần có một lý do

### Một bộ từ vựng trước khi vào chi tiết

Section 3 mở bằng một đoạn định nghĩa: *environment* (lĩnh vực ứng dụng và tập tool), *environment state* (dữ liệu của mọi ứng dụng, có chỗ là placeholder cho lời chèn), *user task* (chỉ dẫn cho agent), *injection task* (mục tiêu của kẻ tấn công), *task suite* (tập user task và injection task của một môi trường). Test case bảo mật là tích Descartes giữa user task và injection task của mỗi môi trường, theo cách làm của InjecAgent; mỗi user task chạy không có tấn công là một test case tiện ích.

Đoạn từ vựng quan trọng hơn ta tưởng, vì các paper sau sẽ dùng lại đúng các từ này. MELON là ví dụ: nó gọi các thành phần là user task, attack task và injection point, và dùng nguyên định nghĩa utility under attack của AgentDojo. Một benchmark định nghĩa thuật ngữ rõ ràng là đang viết từ điển cho cả một nhánh nghiên cứu. Table 1 tóm tắt bốn môi trường:

| Môi trường | Tool | User task | Injection task |
|---|---|---|---|
| Workspace | 24 | 40 | 6 |
| Slack | 11 | 21 | 5 |
| Travel | 28 | 20 | 7 |
| Banking | 11 | 16 | 9 |

Tổng cộng 97 user task và 27 injection task, cho $40 \times 6 + 21 \times 5 + 20 \times 7 + 16 \times 9 = 629$ test case bảo mật. Table 1 gốc còn có một cột ví dụ cặp nhiệm vụ cho mỗi môi trường, như yêu cầu thanh toán hóa đơn "bill-december-2023.txt" đi cùng mục tiêu chuyển càng nhiều tiền càng tốt cho tài khoản kẻ tấn công; cột ví dụ ấy làm cho bảng thống kê trở nên cụ thể.

Paper mô tả độ khó có chủ đích: có user task cần tìm kiếm trong ngữ cảnh tới 7.000 token dữ liệu cộng 4.000 token mô tả tool, có user task cần nối tới 18 lời gọi tool; injection task tăng dần về số bước (từ một tới hai mươi) và về độ nhạy cảm (từ gửi một email bình thường tới chia sẻ mã xác thực hai yếu tố). Dữ liệu môi trường là dữ liệu giả, sinh thủ công hoặc với sự hỗ trợ của GPT-4o và Claude 3 Opus, và mọi dữ liệu do LLM sinh đều được kiểm tra thủ công. Mô tả quy trình sinh dữ liệu ngay trong văn bản chính trả lời câu hỏi "chất lượng" của D&B track.

### Hàm kiểm tra bằng code thay vì LLM làm giám khảo

Mỗi user task có một *utility function*, là hàm nhị phân tất định nhận đầu ra của mô hình cùng trạng thái môi trường trước và sau khi chạy để xác định nhiệm vụ đã hoàn thành chưa; mỗi injection task có một *security function* theo định dạng tương tự. Paper giải thích lựa chọn này hai lần, ở Related Work và Section 3.1, với cùng một lý do: các tấn công được nghiên cứu nhằm chèn lệnh vào mô hình, nên nếu dùng LLM để chấm, một tấn công thành công có thể chiếm quyền luôn mô hình chấm.

Đây là lập luận thiết kế mạnh nhất của paper, vì nó xuất phát từ một mối đe dọa đối với *tính hợp lệ của phép đo* đặc thù cho đúng bài toán. Nó cũng có cái giá được thừa nhận ở Conclusion: đặc tả nhiệm vụ và tiêu chí bằng tay khó mở rộng, và tự động hóa mà không làm giảm độ tin cậy là một hướng mở. Một benchmark paper tốt nói rõ cả lựa chọn lẫn cái giá của lựa chọn đó.

### Chuỗi tool call ground truth: chi tiết nhỏ, hệ quả lớn

Mỗi user task khai báo một chuỗi lời gọi hàm ground truth giải được nhiệm vụ. Chuỗi này phục vụ việc đặt lời chèn: hàm `get_injection_candidates` dùng nó để biết tool nào thực sự được gọi rồi chỉ đặt lời chèn vào output của những tool đó, nên lời chèn luôn nằm ở chỗ mô hình thực sự đọc. Chuỗi ground truth của injection task có thể giúp thiết kế tấn công mạnh hơn khi biết API của tool. Data card còn cho biết chuỗi ground truth được dùng để kiểm định: chạy nó và xác nhận nó qua được hàm kiểm tra tương ứng. Một trường dữ liệu phục vụ ba mục đích, và paper giải thích từng mục đích; trong một benchmark paper, không trường nào nên xuất hiện mà không có lý do.

### Mở rộng được nhờ giao diện tối giản

Tính "động" được hiện thực bằng các giao diện rất nhỏ. Thêm một tool là thêm một hàm Python theo định dạng quy định, với cú pháp lấy cảm hứng từ FastAPI. Một agent chỉ cần một hàm `query` nhận chỉ dẫn người dùng, danh sách tool và trạng thái môi trường; các thành phần ghép được thành pipeline, ví dụ GPT-4o cộng một bộ phát hiện lời chèn (Figure 12). Một tấn công chỉ cần một hàm nhận injection task và trả về văn bản cho mỗi placeholder (Figure 13). Paper trình bày các giao diện này dưới dạng hình chứa code, nên reviewer *thấy* việc mở rộng dễ đến mức nào thay vì chỉ đọc lời khẳng định. Với một paper mà claim chính là "extensible", code trong hình là bằng chứng phù hợp nhất.

### Lập luận chống benchmark tĩnh

Section 3.3 đưa ra hai lý do vì sao một tập tấn công cố định là không thỏa đáng. Khác với adversarial example hay jailbreak, nơi có các tấn công tối ưu trực tiếp chống lại phòng vệ như AutoAttack hay GCG, tấn công prompt injection hiện có chủ yếu là mẫu chung, không tính tới mô hình cụ thể. Và ngay cả khi có tấn công tối ưu mạnh, rất dễ dựng một phòng vệ không bền vững mà vẫn chặn được một tấn công cụ thể, nên cần đánh giá thích nghi. Từ đó, benchmark được định hướng thành một khung để bổ sung phòng vệ và tấn công thích nghi, với các mức hiểu biết khác nhau của kẻ tấn công (tên người dùng, API của tool). Đoạn văn mượn kinh nghiệm của lĩnh vực adversarial ML để biện minh cho một quyết định thiết kế; người viết benchmark ở lĩnh vực mới có thể học cách đặt lựa chọn của mình vào dòng chảy kinh nghiệm của cộng đồng lân cận như vậy.

### Metric: ba con số và một phép "Max"

Section 3.4 định nghĩa ba metric. **Benign utility** là tỷ lệ user task giải được khi không có tấn công. **Utility under attack** là tỷ lệ test case bảo mật mà agent giải đúng user task *và* không có tác dụng phụ độc hại; phần bù của nó là *untargeted ASR*. **Targeted ASR** là tỷ lệ test case mà mục tiêu của kẻ tấn công đạt được. Khi đánh giá một tập tấn công, một test case được coi là bị phá nếu *bất kỳ* tấn công nào thành công, mô phỏng kẻ tấn công thích nghi chọn tấn công tốt nhất cho từng ca.

Thiết kế này tách hai loại thất bại mà một con số "accuracy under attack" sẽ trộn lẫn: agent bị chiếm quyền (targeted) và agent chỉ bị làm trật hướng (untargeted, mà paper diễn giải như khả năng chống từ chối dịch vụ). Phép "Max" là cách rẻ để xấp xỉ đánh giá thích nghi khi chưa có tấn công tối ưu. Việc MELON dùng lại nguyên ba metric cho thấy chúng đã thành ngôn ngữ chung, phần thưởng lớn nhất cho một benchmark định nghĩa metric cẩn thận.

## Thí nghiệm: chứng minh benchmark phân biệt được

### Mười mô hình trên một mặt phẳng hai trục

Paper đánh giá mười mô hình: Gemini 1.5 Flash và Pro, Claude 3 Sonnet, Claude 3 Opus, Claude 3.5 Sonnet, GPT-3.5 Turbo, GPT-4 Turbo, GPT-4o, cùng hai mô hình mở Llama 3 70B và Command R+, trên toàn bộ 629 test case với tấn công "Important message". Figure 6 vẽ benign utility theo targeted ASR và theo utility under attack, in đậm các điểm trên biên Pareto; Table 3 cho số kèm khoảng tin cậy 95%. Ví dụ, Claude 3.5 Sonnet có benign utility 78,22%, utility under attack 51,19%, targeted ASR 33,86%; Command R+ có benign utility 25,44% nhưng targeted ASR chỉ 0,95%.

Phát hiện đầu tiên được viết rất khéo. Paper nhận xét mô hình có năng lực cao hơn lại *dễ* bị tấn công hơn, gọi đây là một dạng *inverse scaling law*, rồi ngay lập tức đưa ra giải thích thay thế: kết quả này có lẽ không đáng ngạc nhiên, vì mô hình kém thường không thực hiện nổi mục tiêu của kẻ tấn công ngay cả khi lời chèn đã thành công. Command R+ minh họa đúng điều đó. Viết một phát hiện gây chú ý kèm ngay giải thích kém hấp dẫn hơn là dấu hiệu của một nhóm tác giả không thổi phồng, và reviewer đánh giá cao điều này. Phát hiện thứ hai là tương quan mạnh giữa tiện ích và độ bền vững, với phần lớn mô hình mất 10–25% tiện ích tuyệt đối khi bị tấn công. Paper cũng minh bạch về việc chọn mô hình cho phần còn lại: Claude 3.5 Sonnet mạnh nhất nhưng ra đời sau phiên bản đầu của paper, Claude 3 Opus bị giới hạn tốc độ truy cập, nên các ablation dùng GPT-4o.

### Phân rã theo môi trường, theo injection task và theo vị trí

Figure 7 phân rã ASR theo task suite và injection task, và mỗi chênh lệch lớn đều kèm một cơ chế giải thích. Suite Slack có tỷ lệ thành công 92%, được giải thích bằng việc kẻ tấn công kiểm soát phần lớn output của tool trong suite này (Figure 21b). Injection task 6 của suite Travel thành công 0%, vì nó đòi hai mục tiêu độc hại không liên quan (đặt khách sạn đắt nhất ở Paris và gửi thông tin cá nhân qua email), và mô hình thường chỉ làm được một nửa. Lời chèn ở cuối output của tool hiệu quả nhất, tới 70% trên GPT-4o. Những phân rã như vậy cho thấy benchmark *đo được những gì*, và gợi ý trực tiếp cho người thiết kế tấn công và phòng vệ về sau.

### Ablation về câu chữ tấn công và hiểu biết của kẻ tấn công

Table 4 so các kiểu lời chèn trên GPT-4o theo targeted ASR: "TODO" 3,66%, "Ignore previous instructions" 5,41%, lời chèn của InjecAgent 5,72%, "Important message" của paper 57,7%. Table 2 ablation hiểu biết của kẻ tấn công về tên người dùng và tên mô hình, với một cột ví dụ cho thấy chính xác cái gì thay đổi: biết đúng cả hai chỉ tăng ASR từ 45,8% lên 47,7%, còn đoán sai tên người dùng hoặc tên mô hình làm ASR giảm khoảng 22 điểm. Kết luận "hiểu biết phụ giúp chút ít, nhưng đoán sai thì hại nhiều" hữu ích cho người làm threat model, và cột ví dụ trong Table 2 là kỹ thuật trình bày đáng học: người đọc không cần lật sang phụ lục để biết "wrong model" nghĩa là gì.

### Phòng vệ: một kết quả bất ngờ được báo cáo thẳng

Section 4.3 đánh giá bốn phòng vệ trên GPT-4o với tấn công mạnh nhất (Table 5):

| Phòng vệ | Benign utility | Utility under attack | Targeted ASR |
|---|---|---|---|
| Không phòng vệ | 69,0% | 50,01% | 57,69% |
| Delimiting | 72,66% | 55,64% | 41,65% |
| PI detector | 41,49% | 21,14% | 7,95% |
| Repeat prompt | 85,53% | 67,25% | 27,82% |
| Tool filter | 73,13% | 56,28% | 6,84% |

Paper báo cáo thẳng một kết quả bất ngờ: nhiều phòng vệ lại *tăng* benign utility, có lẽ vì chúng nhấn mạnh hơn vào chỉ dẫn gốc. Bộ phát hiện có quá nhiều false positive nên làm giảm mạnh tiện ích. Lặp lại yêu cầu người dùng là phòng vệ hợp lý trước tấn công đang dùng, nhưng paper nhận định ngay nó khó trụ trước tấn công thích nghi, chẳng hạn một lời chèn yêu cầu mô hình bỏ qua các chỉ dẫn *về sau*. Tức là paper tự dự đoán điểm yếu của baseline.

Phần về tool filter còn đáng học hơn. Đây là phòng vệ tốt nhất trong bảng, và paper giải thích vì sao nó hiệu quả (nhiều user task chỉ cần quyền đọc, còn injection task cần quyền ghi), rồi dành phần lớn đoạn văn để chỉ ra khi nào nó thất bại: khi danh sách tool không lên kế hoạch trước được, khi các tool cần cho nhiệm vụ cũng đủ để thực hiện tấn công (17% test case), và trong bối cảnh nhiều nhiệm vụ nối tiếp mà AgentDojo chưa bao phủ. Ngay cả các cơ chế cô lập tinh vi hơn cũng bị chỉ ra là dễ tổn thương khi lời chèn chỉ nhằm thay đổi kết quả của một tool call, như khiến agent luôn chọn một khách sạn. Một benchmark paper tự chỉ ra vì sao baseline mạnh nhất chưa giải được benchmark đang bảo vệ giá trị lâu dài của chính nó. MELON về sau dùng lại đúng lập luận này khi phê bình tool filter.

### Một paper "sống" cần một nguồn số liệu duy nhất

Paper được cập nhật nhiều lần, và người đọc đối chiếu kỹ sẽ gặp một số con số khó khớp:

- Section 3.1 nói có tổng cộng 74 tool, khớp với tổng các hàng của Table 1 ($24 + 11 + 28 + 11 = 74$), nhưng caption Table 1 và data card đều ghi 70 tool.
- Targeted ASR của GPT-4o dưới "Important message" là 47,69% ở Table 3, nhưng 57,7% ở Table 4 và 57,69% ở Table 5.
- Văn bản nói phép gộp "Max" tăng tỷ lệ thành công thêm 10%, nhưng ở dòng targeted của Table 4, "Max" là 57,55%, thấp hơn "Important message" (57,7%), dù theo định nghĩa "Max" không thể thấp hơn bất kỳ thành phần nào; chỉ dòng untargeted cho thấy mức tăng rõ (từ 49,9% lên 68,36%).
- Văn bản nói tool filter giảm ASR xuống 7,5%, còn Table 5 ghi 6,84%.

Mỗi chênh lệch riêng lẻ đều nhỏ và không làm đổi kết luận, nhưng gộp lại, chúng khiến người đọc khó biết con số nào ứng với thiết lập nào, đúng ở loại paper mà con số được trích lại nhiều nhất. Paper đã có sẵn nền móng để khắc phục: mọi output của mô hình và một notebook tái tạo mọi bảng và hình được công bố (Appendix E.3). Bước tiếp theo tự nhiên là sinh luôn các con số trong văn bản từ cùng notebook, chẳng hạn dưới dạng macro LaTeX, để văn bản và bảng không thể lệch nhau. Bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md) khuyên một vòng soát riêng cho con số; với benchmark paper, vòng soát đó nên được tự động hóa.

## Giải phẫu theo góc nhìn bảo mật

**Threat model.** AgentDojo không có một đoạn "Threat Model" riêng; các thành phần nằm rải rác. Figure 1 và Section 3.1 cho biết kẻ tấn công kiểm soát các placeholder trong dữ liệu do bên thứ ba cung cấp (email, trang web, đánh giá), không kiểm soát prompt người dùng hay hệ thống. Mục tiêu là injection task (targeted) hoặc làm agent trật hướng (untargeted, Appendix D). Section 3.3 và Table 2 mô tả các mức hiểu biết: tên người dùng, tên mô hình, API của tool. Conclusion thừa nhận chưa áp ràng buộc độ dài hay định dạng lên lời chèn, và Appendix D ghi nhận kẻ tấn công chưa kiểm soát được vị trí lời chèn. Sự trung thực về giới hạn là điểm mạnh; điểm có thể tốt hơn là gom tất cả vào một đoạn. Lý do rất thực tế: paper phòng vệ sau này thường kế thừa threat model của benchmark (MELON chỉ viết rằng nó theo "the assumption of IPI"), và một threat model phát biểu tập trung sẽ được kế thừa chính xác hơn.

**Định nghĩa thành công và metric.** Benign utility, utility under attack (cùng phần bù là untargeted ASR), targeted ASR và phép gộp "Max" đều được định nghĩa ở Section 3.4. Mọi bảng chính đều có khoảng tin cậy 95%, tính bằng `proportion_confint` của statsmodels theo checklist, và chi phí chạy benchmark được ước tính. Tính kín đáo của lời chèn không được đo: lời chèn "Important message" rất lộ liễu với người đọc là con người. Với một benchmark về hành vi agent thì điều này chấp nhận được, nhưng đó là một chiều mà paper tấn công đa phương thức thường phải bổ sung.

**Đánh giá chống lại phản biện.** Benchmark được thiết kế để đón tấn công thích nghi, và paper đã có một xấp xỉ rẻ (Max) cùng ablation về hiểu biết của kẻ tấn công; các tấn công đi kèm là mẫu chung, điều paper nói rõ. Paper đánh giá mô hình đóng của ba nhà cung cấp lẫn hai mô hình mở; câu hỏi chuyển giao không đặt ra theo nghĩa thông thường vì tấn công không được tối ưu cho mô hình nào. Môi trường là giả lập với dữ liệu giả; chữ "realistic" chỉ kịch bản giống thật. Điểm nổi bật nhất là *hợp đồng sử dụng* trong data card: mục "Unsuitable use cases" ghi rõ việc đánh giá độ bền vững của agent và phòng vệ *chỉ với các tấn công mặc định*, không có tấn công thích nghi và đánh giá bảo mật kỹ lưỡng. Tuy nhiên, câu này nằm ở phụ lục, và như trang [MELON](melon.md) cho thấy, một phòng vệ công bố sau đó đã đánh giá chỉ với bốn tấn công mặc định. Một benchmark muốn hợp đồng sử dụng được tôn trọng nên đưa nó vào văn bản chính, vào README, và tốt nhất là vào leaderboard, chẳng hạn yêu cầu mọi phòng vệ báo cáo kết quả "Max".

**Đạo đức và công bố có trách nhiệm.** Đoạn Broader impact thừa nhận kẻ tấn công cũng có thể dùng AgentDojo để thử lời chèn mới, nhưng cho rằng rủi ro này nhỏ so với lợi ích của một benchmark bảo mật đáng tin cậy. Checklist khẳng định chỉ có dữ liệu giả, nên không có vấn đề về thông tin cá nhân hay sự đồng ý. Paper không bàn tới responsible disclosure với nhà cung cấp mô hình; với các tấn công mẫu chung đã được biết rộng rãi, điều này hợp lý, nhưng một paper giới thiệu tấn công *mới* trên mô hình thương mại nên cân nhắc thông báo trước cho nhà cung cấp và nói rõ điều đó trong paper.

## Đặc thù của D&B track: những phần ít ai đọc nhưng reviewer kiểm tra

Appendix E nêu nơi lưu trữ mã, license MIT, kế hoạch bảo trì (sửa lỗi và cập nhật khi mô hình, tấn công và phòng vệ tiến hóa), khả năng tái tạo (mọi output và hội thoại của mô hình dưới dạng JSON cùng notebook tái tạo bảng và hình), và giải thích vì sao không tạo được metadata Croissant: tập nhiệm vụ, tool và dữ liệu môi trường là hỗn hợp giữa dữ liệu và code. Appendix F là một data card theo khuôn của Pushkarna và cộng sự, với chính sách đánh phiên bản theo semantic versioning và định nghĩa thế nào là *lỗi* của benchmark (nhiệm vụ giải được mà không cần thấy lời chèn, nhiệm vụ không giải được, ground truth hay hàm kiểm tra sai, tool mô tả sai).

Có hai điều đáng học. Thứ nhất, *giải thích* thay vì bỏ trống: khi một yêu cầu như Croissant không áp dụng được, paper nói vì sao. Thứ hai, định nghĩa lỗi và chính sách phiên bản biến benchmark từ một sản phẩm công bố một lần thành một công cụ có vòng đời, đúng câu hỏi "tính bền vững" của D&B track. Vài chi tiết còn sót, như mục "Citation guidelines: TBD upon acceptance" và con số 70 tool trong data card, cho thấy phụ lục cũng cần được soát như văn bản chính.

## Benchmark trở thành chuẩn chung như thế nào

Ảnh hưởng của AgentDojo thấy rõ qua MELON: phòng vệ này đánh giá hoàn toàn trên AgentDojo, giải thích lựa chọn bằng việc đây là benchmark mới nhất với nhiều ca tấn công đa dạng, dùng lại nguyên ba metric, dùng bốn tấn công đi kèm và lấy tool filter làm một baseline. Nhìn lại thiết kế, có năm yếu tố làm điều này khả thi: một bộ từ vựng chung; metric tách bạch và dễ dùng lại; chi phí chạy thấp; giao diện đủ nhỏ để cắm phương pháp mới vào; và baseline có sẵn để paper sau so sánh.

Mặt trái cũng hiện ra ở chính ví dụ đó. Khi benchmark trở thành chuẩn, các lựa chọn mặc định của nó (bốn tấn công mẫu, cấu hình mặc định) cũng trở thành chuẩn, kể cả khi chính tác giả benchmark đã cảnh báo rằng chúng không đủ cho một đánh giá bảo mật. Bài học cho người viết benchmark là: những gì đặt trong cấu hình mặc định sẽ được dùng nhiều nhất, nên cấu hình mặc định nên là cấu hình mà tác giả muốn người khác báo cáo.

## Limitations, kết luận và văn phong

Paper không có mục Limitations riêng; checklist trỏ về Section 5, nơi Conclusion liệt kê năm hướng cải thiện: thêm phòng vệ và tấn công tinh vi hơn, tự động hóa việc đặc tả nhiệm vụ, thêm nhiệm vụ mà tool filter không giải được, hỗ trợ agent đa phương thức xử lý cả văn bản và ảnh, và thêm ràng buộc lên lời chèn để mô phỏng kẻ tấn công thực tế hơn. Viết hạn chế dưới dạng hướng mở rộng phù hợp với một benchmark "sống", vì mỗi hạn chế cũng là một lời mời đóng góp; nhưng nó làm hạn chế kém nổi bật, và một đoạn ngắn tách riêng sẽ giúp người dùng benchmark thấy ngay các giới hạn, như bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md) đã phân tích. Văn phong ngắn gọn, thận trọng đúng chỗ ("presumably because", "potentially unsurprising", "is unlikely to withstand"), và gần như mọi phát hiện đều đi kèm một cơ chế giải thích; vài lỗi đánh máy còn sót trong phụ lục (như "requiremements.txt", "stop it's execution") nhắc rằng phụ lục cũng là một phần của paper.

## Bài học cho người viết

**Biện minh cho định dạng của benchmark bằng bản chất của lĩnh vực.** "Động thay vì tĩnh" thuyết phục vì nó gắn với kinh nghiệm về tấn công thích nghi, không phải vì nó nghe hiện đại.

**Bảo vệ phép đo trước chính hiện tượng được đo.** Mọi benchmark về tấn công lên mô hình nên tự hỏi: tấn công có thể làm hỏng công cụ đo không?

**Định nghĩa từ vựng và metric như thể đang viết từ điển cho cả nhánh nghiên cứu.** Tách targeted và untargeted, tách benign utility và utility under attack, thêm phép "Max", báo khoảng tin cậy: các paper sau dùng lại nguyên văn.

**Chứng minh benchmark khó và phân biệt được, rồi giải thích từng chênh lệch bằng cơ chế.**

**Tự chỉ ra vì sao baseline mạnh nhất chưa giải được benchmark, và đặt hợp đồng sử dụng ở chỗ người dùng sẽ đọc.**

**Dùng một nguồn số liệu duy nhất cho bảng và văn bản.** Paper càng được cập nhật nhiều, việc sinh con số tự động càng cần thiết.

### Khi viết paper về visual/multimodal prompt injection

AgentDojo chỉ có văn bản, và cả Conclusion lẫn data card đều nêu agent đa phương thức là hướng mở rộng. Khoảng trống này có hệ quả thực tế: MELON đã thử VisualWebArena-Adv nhưng loại vì tấn công ảnh quá yếu trên GPT-4o, và chọn AgentDojo. Một nhóm tác giả viết benchmark prompt injection đa phương thức có thể mượn gần như nguyên khung: placeholder cho lời chèn đặt trong ảnh, ảnh chụp màn hình hay trang web; hàm kiểm tra bằng code thay vì VLM làm giám khảo, với lý do y hệt (VLM chấm điểm sẽ nhìn thấy chính ảnh bị chèn); phân biệt targeted và untargeted; và một threat model nói rõ kẻ tấn công kiểm soát gì, từ nhiễu bị chặn theo chuẩn (như tấn công trong [Dissecting MM Agents](dissecting-mm-agents.md)) tới nội dung hiển thị như [pop-up](popups.md) hay phần tử chèn vào trang web như [EIA](eia.md). Một paper *tấn công* đa phương thức nên đo trên các agent và môi trường mà cộng đồng phòng vệ đang dùng, và báo cáo cả benign utility để cho thấy môi trường không quá dễ. Về nơi nộp: NeurIPS D&B track hợp nhất cho một benchmark thuần, với yêu cầu tài liệu hóa như phân tích ở trên; CVPR/ICCV nhận dataset và benchmark ở main track, với kỳ vọng mạnh về ví dụ trực quan và độ đa dạng của ảnh; ACL/EMNLP nhận resource paper và chờ đợi phân tích ngôn ngữ của chỉ dẫn bị chèn cùng một mục Limitations riêng; ICML và ICLR nhận benchmark ở main track nhưng thường kỳ vọng thêm một insight vượt ra ngoài bản thân benchmark.

### Áp dụng sang các cộng đồng khác

Trong **NLP**, AgentDojo có họ hàng gần với [CheckList](../05-case-studies/checklist-acl2020.md): cả hai thay độ chính xác trung bình bằng các test case có hành vi kỳ vọng được đặc tả rõ, và cả hai thuyết phục bằng việc tìm ra thất bại ở các mô hình thương mại mạnh. Trong **Computer Vision**, bài học về hàm kiểm tra tất định và về hợp đồng sử dụng áp dụng trực tiếp cho các benchmark robustness, nơi nhiều phòng vệ từng chỉ được đánh giá với tấn công mặc định. Trong **Machine Learning**, cách AgentDojo đặt benchmark vào kinh nghiệm của adversarial ML và dùng phép "Max" làm xấp xỉ rẻ cho đánh giá thích nghi là mẫu cho mọi benchmark về an toàn và độ bền vững.

## Tóm tắt

AgentDojo dựng câu chuyện quanh một triết lý thiết kế, môi trường động thay vì bộ test tĩnh, được biện minh bằng bản chất chạy đua của bảo mật ML, và quanh bằng chứng rằng phiên bản đầu đã đủ khó cho cả tấn công lẫn phòng vệ. Phần thiết kế nổi bật ở bộ từ vựng rõ ràng, hàm kiểm tra bằng code thay vì LLM làm giám khảo, chuỗi tool call ground truth phục vụ nhiều mục đích, giao diện mở rộng tối giản, và ba metric tách bạch cùng phép "Max". Phần thí nghiệm chứng minh giá trị phân biệt bằng mười mô hình, các phân rã có giải thích cơ chế, ablation về câu chữ tấn công và hiểu biết của kẻ tấn công, và một đánh giá phòng vệ trung thực đến mức tự chỉ ra giới hạn của baseline mạnh nhất. Phụ lục đáp ứng đặc thù của D&B track với license, bảo trì, tái tạo và data card có hợp đồng sử dụng. Những điểm có thể làm tốt hơn gồm abstract còn định tính, threat model rải rác, một loạt con số lệch nhau giữa Introduction, văn bản và các bảng, và việc hợp đồng sử dụng quan trọng nhất chỉ nằm ở phụ lục trong khi benchmark đã nhanh chóng trở thành chuẩn chung.

## Bài tập

1. Viết lại hai câu phát hiện trong abstract của AgentDojo với số liệu lấy trực tiếp từ Table 3 và Table 5, kiểm tra từng con số với bảng trước khi viết.
2. Với benchmark hoặc bộ đánh giá trong dự án hiện tại, viết một đoạn "từ vựng" theo kiểu mở đầu Section 3, rồi liệt kê mọi trường dữ liệu của một mẫu cùng lý do tồn tại của từng trường.
3. Liệt kê các cách mà hiện tượng dự án đang đo có thể làm hỏng công cụ đo (giám khảo LLM, bộ phân loại tự động, chỉ số tham chiếu), và với mỗi rủi ro, đề xuất một hàm kiểm tra tất định hoặc một cách kiểm định thay thế.
4. Viết một threat model gọn trong một khung cho AgentDojo, gom mọi giả định đang rải rác trong paper, rồi so với threat model của MELON và chỉ ra chỗ hai threat model khác nhau.
5. Viết mục "Intended uses" và "Unsuitable uses" cho benchmark của dự án hiện tại, rồi đề xuất cách đưa hợp đồng sử dụng đó vào cấu hình mặc định hoặc leaderboard.
6. Phác thảo một phiên bản đa phương thức của một task suite trong AgentDojo: một user task, một injection task đặt trong ảnh, hàm kiểm tra tiện ích, hàm kiểm tra bảo mật, và một đoạn giải thích vì sao không dùng VLM làm giám khảo.
