# Case study: AgentDojo (NeurIPS 2024 Datasets and Benchmarks)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một benchmark paper cho bảo mật lập luận vì sao cần một *môi trường động* thay vì một bộ dữ liệu tĩnh.
    - Giải thích vai trò của user task, injection task, hàm kiểm tra bằng code và chuỗi tool call ground truth trong thiết kế benchmark.
    - Diễn giải đúng benign utility, utility under attack, targeted ASR và phép gộp "Max" mô phỏng kẻ tấn công thích nghi.
    - Nhận ra những yếu tố giúp một benchmark trở thành chuẩn chung, cùng trách nhiệm đi kèm khi điều đó xảy ra.

Bài này phân tích **AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents**, của Edoardo Debenedetti, Jie Zhang, Mislav Balunović, Luca Beurer-Kellner, Marc Fischer và Florian Tramèr (ETH Zurich; Balunović, Beurer-Kellner và Fischer đồng thời thuộc Invariant Labs), công bố tại NeurIPS 2024 Datasets and Benchmarks Track. Phân tích dựa trên bản arXiv 2406.13352 ở phiên bản đã bổ sung kết quả Claude 3.5 Sonnet; bản trong kỷ yếu có thể khác ở chi tiết. Metadata của phiên bản arXiv đầu ghi title ngắn hơn, "AgentDojo: A Dynamic Environment to Evaluate Attacks and Defenses for LLM Agents"; bản sau thêm cụm "Prompt Injection".

Trang này nên được đọc cùng trang [MELON](melon.md), phòng vệ ICML 2025 dùng AgentDojo làm benchmark duy nhất: ở đây là góc nhìn của người đặt luật chơi, còn trang MELON là góc nhìn của người dùng các luật ấy.

Với người học Việt Nam, paper đáng giá ở hai điểm kiểm chứng được: đóng góp nằm ở thiết kế môi trường và phép đo chứ không cần phương pháp mới hay tài nguyên huấn luyện, và chi phí dùng benchmark thấp (paper ước tính khoảng 35 USD cho toàn bộ 629 test case bảo mật trên GPT-4o; mã nguồn theo license MIT).

## Bối cảnh: từ bộ prompt tĩnh tới môi trường agent có trạng thái

Introduction của AgentDojo phát biểu gốc rễ của prompt injection rất gọn: LLM xử lý mọi thứ dưới dạng văn bản và không có cách hình thức để phân biệt *lệnh* với *dữ liệu*. Khi LLM được gắn với tool, dữ liệu tool trả về (một email, một trang web, một đánh giá khách sạn) trở thành kênh để bên thứ ba chèn lệnh, và một lời chèn thành công có thể khiến agent hành động thay người dùng.

Paper chỉ ra ba hạn chế của cách đo trước đó: các benchmark prompt injection sớm không có tool call (công trình ở trang [Formalizing Prompt Injection](formalizing-pi.md) cũng được xếp vào nhóm này); InjecAgent dùng kịch bản mô phỏng một lượt, không đánh giá việc lập kế hoạch; ToolEmu dùng LLM để mô phỏng tool và chấm điểm, trong khi lời chèn có thể đánh lừa luôn LLM mô phỏng. Paper được nộp ở Datasets and Benchmarks (D&B) track, nơi theo bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md#datasets-benchmarks-track) một paper phải trả lời bốn câu hỏi: khoảng trống, chất lượng, giá trị phân biệt và tính bền vững. Bài này dùng bốn câu hỏi ấy làm lăng kính.

## Câu chuyện một dòng

> Bảo mật trước prompt injection là một cuộc chạy đua mà bộ test tĩnh sẽ nhanh chóng lỗi thời; vì vậy AgentDojo không phải một bộ dữ liệu mà là một môi trường có trạng thái, nơi agent phải gọi nhiều tool trên dữ liệu không tin cậy, kết quả được chấm bằng hàm kiểm tra trên trạng thái môi trường, và cộng đồng có thể bổ sung nhiệm vụ, tấn công và phòng vệ; ngay phiên bản đầu với 97 nhiệm vụ và 629 test case, nó đã đủ khó cho cả hai phía.

Câu chuyện có hai tầng. Tầng thứ nhất là *triết lý thiết kế* (động thay vì tĩnh), được biện minh bằng bản chất của lĩnh vực: trong bảo mật ML, phòng vệ nào cũng có thể bị một tấn công thích nghi phá. Tầng thứ hai là *bằng chứng giá trị hiện tại*: mô hình tốt nhất vẫn thất bại ở nhiều nhiệm vụ khi không bị tấn công, tấn công thành công một phần, phòng vệ có cái giá về tiện ích. Triết lý cho biết benchmark còn hữu ích bao lâu; bằng chứng cho biết nó hữu ích ngay bây giờ.

## Title và abstract

"AgentDojo" là một cái tên dễ nhớ, gợi tới một võ đường nơi agent bị thử thách; checklist của paper gọi nó là "the gym". "A Dynamic Environment" đặt điểm khác biệt cốt lõi ngay sau tên. Việc bản sau thêm "Prompt Injection" là một chỉnh sửa đáng học: chỉ riêng "Attacks and Defenses" thì có thể hiểu là adversarial example, jailbreak hay backdoor, còn title của một benchmark nên gọi tên đúng hiện tượng được đo (xem bài [Title](../02-viet-tung-phan/title.md)).

Abstract đi từ agent và mối nguy prompt injection tới câu định danh "AgentDojo is not a static test suite, but rather an extensible environment…", rồi số lượng kèm ví dụ (97 nhiệm vụ như quản lý email, ngân hàng điện tử, đặt chuyến đi; 629 test case bảo mật), hai phát hiện, một lời hy vọng và mã nguồn. Câu định danh dạng "không phải X mà là Y" nói ngay paper khác các benchmark trước ở đâu.

Điểm có thể tốt hơn là hai phát hiện được viết định tính. "State-of-the-art LLMs fail at many tasks" và "existing prompt injection attacks break some security properties but not all" đều đúng nhưng mờ: "security properties" không được định nghĩa ở đâu khác trong paper, và "many" không có con số. Một phiên bản cụ thể hơn có thể dẫn số từ phụ lục, chẳng hạn mô hình tốt nhất đạt benign utility 78,22% (Table 3), và bộ phát hiện prompt injection giảm targeted ASR trên GPT-4o từ 57,69% xuống 7,95% nhưng kéo benign utility từ 69,0% xuống 41,49% (Table 5).

## Introduction: sáu đoạn cho một benchmark

**Đoạn 1 và 2** đi từ agent tới khiếm khuyết căn bản. Câu "LLMs operate directly on text, lacking a formal way to distinguish instructions from data" là câu quan trọng nhất, vì nó biến prompt injection từ một lỗi "mô hình chưa đủ tốt" thành một vấn đề *cấu trúc*, gần với cách SQL injection được hiểu trong bảo mật phần mềm. **Đoạn 3** giới thiệu AgentDojo cùng Figure 1 và định nghĩa luôn đơn vị của benchmark: một test case bảo mật gồm *mục tiêu của kẻ tấn công* và *điểm chèn* (ví dụ một email trong hộp thư). **Đoạn 4** so với các benchmark trước bằng hai tính từ chính xác: agent phải gọi nhiều tool *một cách động* trong môi trường *có trạng thái*, và kết quả được chấm bằng *kiểm tra hình thức trên trạng thái môi trường* thay vì nhờ LLM mô phỏng.

**Đoạn 5** phát biểu triết lý "a static benchmark would be of limited use" và tóm tắt kết quả ban đầu. **Đoạn 6** khoanh phạm vi khiêm tốn: agent, phòng vệ và tấn công có sẵn là loại đa dụng, và nghiên cứu sau được kỳ vọng làm tốt hơn, nhờ đó chặn trước phản biện "baseline yếu".

Chỗ cần lưu ý nằm ở đoạn 5. Văn bản viết rằng các LLM hiện tại giải được dưới 66% nhiệm vụ khi không bị tấn công, và tấn công thành công với các agent tốt nhất trong dưới 25% trường hợp. Table 3 lại ghi benign utility 69,00% cho GPT-4o và 78,22% cho Claude 3.5 Sonnet, cùng targeted ASR 47,69% và 33,86% cho hai mô hình này; riêng con số 8% cho bộ phát hiện thì khớp Table 5 (7,95%). Người đọc khó biết con số nào phản ánh phiên bản hiện tại. Bài học nằm ở quy trình: mỗi lần cập nhật kết quả, mọi con số trong abstract và Introduction phải được dò lại từ bảng.

**Figure 2**, đặt ở Related Work, so độ khó của AgentDojo với Berkeley Tool Calling Leaderboard để cho thấy nhiệm vụ khó hơn ngay cả khi không có tấn công, tức là trả lời trực tiếp câu hỏi "benchmark có phân biệt được không?". Chú thích chân trang nói rõ Llama 3 70B dùng một prompt khác với leaderboard, một sự minh bạch nhỏ nhưng cần thiết.

## Related Work: định vị trên hai trục

Mục Related Work điểm qua ba hướng phòng vệ (phát hiện lời chèn, huấn luyện hoặc prompt để mô hình phân biệt lệnh và dữ liệu, cô lập tool call khỏi thành phần lập kế hoạch) rồi định vị AgentDojo so với hai họ benchmark. Có thể tóm phần định vị trên hai trục:

| | Không có tấn công | Có prompt injection |
|---|---|---|
| Một lời gọi hàm hoặc một lượt mô phỏng | Benchmark function-calling | Benchmark prompt injection không có tool; InjecAgent |
| Nhiều bước, có trạng thái, có lập kế hoạch | AgentBench, WebShop, WebArena…; ToolEmu (tool do LLM mô phỏng) | **AgentDojo** |

Ô dưới bên phải trống trước AgentDojo. Lý do quan trọng nhất dành cho ToolEmu: dùng LLM mô phỏng và chấm điểm có vấn đề *riêng* với prompt injection, vì hiện tượng được đo có thể đánh lừa chính công cụ đo. Đây là định vị bằng điểm yếu cấu trúc của công trình trước, đúng tinh thần bài [Related Work](../02-viet-tung-phan/related-work.md), chứ không phải bằng việc chê kết quả.

## Thiết kế benchmark: mỗi thành phần có một lý do

### Một bộ từ vựng trước khi vào chi tiết

Section 3 mở bằng một đoạn định nghĩa: *environment* (lĩnh vực ứng dụng và tập tool), *environment state* (dữ liệu của các ứng dụng, có chỗ là placeholder cho lời chèn), *user task*, *injection task* (mục tiêu của kẻ tấn công), và *task suite*. Test case bảo mật là tích Descartes giữa user task và injection task của mỗi môi trường; mỗi user task chạy không có tấn công là một test case tiện ích. Đoạn từ vựng quan trọng hơn ta tưởng, vì các paper sau sẽ dùng lại đúng các từ này: MELON gọi các thành phần là user task, attack task và injection point, và dùng nguyên định nghĩa utility under attack của AgentDojo. Table 1 tóm tắt bốn môi trường:

| Môi trường | Tool | User task | Injection task |
|---|---|---|---|
| Workspace | 24 | 40 | 6 |
| Slack | 11 | 21 | 5 |
| Travel | 28 | 20 | 7 |
| Banking | 11 | 16 | 9 |

Tổng cộng 97 user task và 27 injection task, cho $40 \times 6 + 21 \times 5 + 20 \times 7 + 16 \times 9 = 629$ test case. Table 1 gốc còn có một cột ví dụ cặp nhiệm vụ, giúp bảng thống kê trở nên cụ thể. Paper mô tả độ khó có chủ đích: có user task cần tìm kiếm trong ngữ cảnh tới 7.000 token dữ liệu, có user task cần nối tới 18 lời gọi tool; injection task tăng dần về số bước (từ một tới hai mươi) và về độ nhạy cảm (từ gửi một email bình thường tới chia sẻ mã xác thực hai yếu tố). Dữ liệu môi trường là dữ liệu giả, sinh thủ công hoặc với sự hỗ trợ của GPT-4o và Claude 3 Opus, và mọi dữ liệu do LLM sinh đều được kiểm tra thủ công. Mô tả quy trình này ngay trong văn bản chính trả lời câu hỏi "chất lượng" của D&B track.

### Hàm kiểm tra bằng code thay vì LLM làm giám khảo

Mỗi user task có một *utility function*, là hàm nhị phân tất định nhận đầu ra của mô hình cùng trạng thái môi trường trước và sau khi chạy để xác định nhiệm vụ đã hoàn thành chưa; mỗi injection task có một *security function* theo định dạng tương tự. Paper giải thích lựa chọn này hai lần, ở Related Work và Section 3.1, với cùng một lý do: các tấn công được nghiên cứu nhằm chèn lệnh vào mô hình, nên nếu dùng LLM để chấm, một tấn công thành công có thể chiếm quyền luôn mô hình chấm.

Đây là lập luận thiết kế mạnh nhất của paper, vì nó xuất phát từ một mối đe dọa đối với *tính hợp lệ của phép đo* đặc thù cho đúng bài toán. Cái giá của nó được thừa nhận ở Conclusion: đặc tả nhiệm vụ và tiêu chí bằng tay khó mở rộng. Một benchmark paper tốt nói rõ cả lựa chọn lẫn cái giá của lựa chọn đó.

### Chuỗi tool call ground truth và giao diện mở rộng

Mỗi user task khai báo một chuỗi lời gọi hàm ground truth giải được nhiệm vụ. Hàm `get_injection_candidates` dùng chuỗi này để biết tool nào thực sự được gọi rồi chỉ đặt lời chèn vào output của những tool đó, nên lời chèn luôn nằm ở chỗ mô hình thực sự đọc. Chuỗi ground truth còn giúp thiết kế tấn công mạnh hơn và kiểm định hàm kiểm tra: một trường dữ liệu phục vụ ba mục đích, và paper giải thích từng mục đích.

Tính "động" được hiện thực bằng các giao diện rất nhỏ. Thêm một tool là thêm một hàm Python theo định dạng quy định, với cú pháp lấy cảm hứng từ FastAPI. Một agent chỉ cần một hàm `query` nhận chỉ dẫn người dùng, danh sách tool và trạng thái môi trường, và các thành phần ghép được thành pipeline (Figure 12 ghép GPT-4o với một bộ phát hiện lời chèn). Một tấn công chỉ cần một hàm nhận injection task và trả về văn bản cho mỗi placeholder (Figure 13). Với một paper mà claim chính là "extensible", trình bày các giao diện này dưới dạng hình chứa code là bằng chứng phù hợp nhất.

### Lập luận chống benchmark tĩnh

Section 3.3 đưa ra hai lý do vì sao một tập tấn công cố định là không thỏa đáng. Khác với adversarial example hay jailbreak, nơi có các tấn công tối ưu trực tiếp chống lại phòng vệ như AutoAttack hay GCG, tấn công prompt injection hiện có chủ yếu là mẫu chung. Và ngay cả khi có tấn công tối ưu mạnh, rất dễ dựng một phòng vệ không bền vững mà vẫn chặn được một tấn công cụ thể, nên cần đánh giá thích nghi. Mượn kinh nghiệm của cộng đồng lân cận như vậy giúp một quyết định thiết kế không có vẻ tùy hứng.

### Metric: ba con số và một phép "Max"

Section 3.4 định nghĩa ba metric. **Benign utility** là tỷ lệ user task giải được khi không có tấn công. **Utility under attack** là tỷ lệ test case bảo mật mà agent giải đúng user task *và* không có tác dụng phụ độc hại; phần bù của nó là *untargeted ASR*. **Targeted ASR** là tỷ lệ test case mà mục tiêu của kẻ tấn công đạt được. Khi đánh giá một tập tấn công, một test case bị coi là phá nếu *bất kỳ* tấn công nào thành công, mô phỏng kẻ tấn công thích nghi chọn tấn công tốt nhất cho từng ca.

Thiết kế này tách hai loại thất bại mà một con số "accuracy under attack" sẽ trộn lẫn: agent bị chiếm quyền và agent chỉ bị làm trật hướng. Phép "Max" là cách rẻ để xấp xỉ đánh giá thích nghi khi chưa có tấn công tối ưu.

## Thí nghiệm: chứng minh benchmark phân biệt được

### Mười mô hình trên một mặt phẳng hai trục

Paper đánh giá mười mô hình (Gemini 1.5 Flash và Pro, Claude 3 Sonnet, Claude 3 Opus, Claude 3.5 Sonnet, GPT-3.5 Turbo, GPT-4 Turbo, GPT-4o, Llama 3 70B, Command R+) trên toàn bộ 629 test case với tấn công "Important message". Figure 6 vẽ benign utility theo targeted ASR và theo utility under attack, in đậm các điểm trên biên Pareto; Table 3 cho số kèm khoảng tin cậy 95%. Claude 3.5 Sonnet có benign utility 78,22% và targeted ASR 33,86%; Command R+ có benign utility 25,44% nhưng targeted ASR chỉ 0,95%.

Phát hiện đầu tiên được viết rất khéo. Paper nhận xét mô hình có năng lực cao hơn lại *dễ* bị tấn công hơn, gọi đây là một dạng *inverse scaling law*, rồi ngay lập tức đưa ra giải thích thay thế: kết quả này có lẽ không đáng ngạc nhiên, vì mô hình kém thường không thực hiện nổi mục tiêu của kẻ tấn công ngay cả khi lời chèn đã thành công, như Command R+ minh họa. Viết một phát hiện gây chú ý kèm ngay giải thích kém hấp dẫn hơn là dấu hiệu của một nhóm tác giả không thổi phồng. Paper cũng nói rõ vì sao các ablation dùng GPT-4o: Claude 3.5 Sonnet ra đời sau phiên bản đầu, Claude 3 Opus bị giới hạn tốc độ truy cập.

### Phân rã và ablation

Figure 7 phân rã ASR theo task suite và injection task, và mỗi chênh lệch lớn đều kèm một cơ chế. Suite Slack có tỷ lệ thành công 92%, được giải thích bằng việc kẻ tấn công kiểm soát phần lớn output của tool trong suite này; injection task 6 của suite Travel thành công 0%, vì nó đòi hai mục tiêu độc hại không liên quan và mô hình thường chỉ làm được một. Lời chèn ở cuối output của tool hiệu quả nhất, tới 70% trên GPT-4o. Những phân rã như vậy cho thấy benchmark *đo được những gì*.

Table 4 so các kiểu lời chèn trên GPT-4o: "TODO" đạt targeted ASR 3,66%, "Ignore previous instructions" 5,41%, lời chèn của InjecAgent 5,72%, "Important message" của paper 57,7%. Table 2 ablation hiểu biết của kẻ tấn công về tên người dùng và tên mô hình, với một cột ví dụ cho thấy chính xác cái gì thay đổi: biết đúng cả hai chỉ tăng ASR từ 45,8% lên 47,7%, còn đoán sai một trong hai làm ASR giảm khoảng 22 điểm. Cột ví dụ giúp người đọc không cần lật sang phụ lục để biết "wrong model" nghĩa là gì.

### Phòng vệ: một kết quả bất ngờ được báo cáo thẳng

Section 4.3 đánh giá bốn phòng vệ trên GPT-4o với tấn công mạnh nhất (Table 5):

| Phòng vệ | Benign utility | Utility under attack | Targeted ASR |
|---|---|---|---|
| Không phòng vệ | 69,0% | 50,01% | 57,69% |
| Delimiting | 72,66% | 55,64% | 41,65% |
| PI detector | 41,49% | 21,14% | 7,95% |
| Repeat prompt | 85,53% | 67,25% | 27,82% |
| Tool filter | 73,13% | 56,28% | 6,84% |

Paper báo cáo thẳng một kết quả bất ngờ: nhiều phòng vệ lại *tăng* benign utility, có lẽ vì chúng nhấn mạnh hơn vào chỉ dẫn gốc. Lặp lại yêu cầu người dùng là phòng vệ hợp lý trước tấn công đang dùng, nhưng paper nhận định ngay nó khó trụ trước tấn công thích nghi, chẳng hạn một lời chèn yêu cầu mô hình bỏ qua các chỉ dẫn *về sau*.

Phần về tool filter còn đáng học hơn. Đây là phòng vệ tốt nhất trong bảng, và paper giải thích vì sao nó hiệu quả (nhiều user task chỉ cần quyền đọc, còn injection task cần quyền ghi), rồi dành phần lớn đoạn văn để chỉ ra khi nào nó thất bại: khi danh sách tool không lên kế hoạch trước được, khi các tool cần cho nhiệm vụ cũng đủ để thực hiện tấn công (17% test case), và khi người dùng giao nhiều nhiệm vụ nối tiếp, bối cảnh mà AgentDojo chưa bao phủ. Một benchmark paper tự chỉ ra vì sao baseline mạnh nhất chưa giải được benchmark đang bảo vệ giá trị lâu dài của chính benchmark đó; MELON về sau dùng lại đúng lập luận này khi phê bình tool filter.

### Một paper "sống" cần một nguồn số liệu duy nhất

Paper được cập nhật nhiều lần, và người đọc đối chiếu kỹ sẽ gặp một số con số khó khớp:

- Section 3.1 nói có tổng cộng 74 tool, khớp tổng các hàng của Table 1 ($24 + 11 + 28 + 11 = 74$), nhưng caption Table 1 và data card đều ghi 70 tool.
- Targeted ASR của GPT-4o dưới "Important message" là 47,69% ở Table 3, nhưng 57,7% ở Table 4 và 57,69% ở Table 5.
- Văn bản nói phép gộp "Max" tăng tỷ lệ thành công thêm 10%, nhưng ở dòng targeted của Table 4, "Max" (57,55%) thấp hơn "Important message" (57,7%), dù theo định nghĩa "Max" không thể thấp hơn thành phần nào; chỉ dòng untargeted cho thấy mức tăng rõ (từ 49,9% lên 68,36%).
- Văn bản nói tool filter giảm ASR xuống 7,5%, còn Table 5 ghi 6,84%.

Mỗi chênh lệch đều nhỏ và không làm đổi kết luận, nhưng gộp lại, chúng khiến người đọc khó biết con số nào ứng với thiết lập nào, đúng ở loại paper mà con số được trích lại nhiều nhất. Paper đã có nền móng để khắc phục: mọi output của mô hình và một notebook tái tạo mọi bảng và hình được công bố (Appendix E.3). Bước tiếp theo tự nhiên là sinh luôn con số trong văn bản từ cùng notebook, chẳng hạn dưới dạng macro LaTeX. Bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md) khuyên một vòng soát riêng cho con số; với benchmark paper, vòng soát đó nên được tự động hóa.

## Giải phẫu theo góc nhìn bảo mật

**Threat model.** AgentDojo không có một đoạn "Threat Model" riêng; các thành phần nằm rải rác. Figure 1 và Section 3.1 cho biết kẻ tấn công kiểm soát các placeholder trong dữ liệu do bên thứ ba cung cấp, không kiểm soát prompt người dùng hay hệ thống; mục tiêu là injection task (targeted) hoặc làm agent trật hướng (untargeted, Appendix D); Section 3.3 và Table 2 mô tả các mức hiểu biết (tên người dùng, tên mô hình, API của tool). Conclusion và Appendix D thừa nhận các giới hạn (chưa ràng buộc độ dài hay định dạng lời chèn, chưa cho kẻ tấn công chọn vị trí chèn). Điểm có thể tốt hơn là gom tất cả vào một đoạn, vì paper phòng vệ sau này thường kế thừa threat model của benchmark (MELON chỉ viết rằng nó theo "the assumption of IPI"), và một threat model phát biểu tập trung sẽ được kế thừa chính xác hơn.

**Định nghĩa thành công và metric.** Ba metric cùng phép "Max" được định nghĩa ở Section 3.4; mọi bảng chính có khoảng tin cậy 95%, tính bằng `proportion_confint` của statsmodels theo checklist; chi phí chạy benchmark được ước tính. Tính kín đáo của lời chèn không được đo: "Important message" rất lộ liễu với người đọc là con người. Với một benchmark về hành vi agent, điều này chấp nhận được, nhưng đó là chiều mà paper tấn công đa phương thức thường phải bổ sung.

**Đánh giá chống lại phản biện.** Benchmark được thiết kế để đón tấn công thích nghi, và paper có sẵn một xấp xỉ rẻ (Max) cùng ablation về hiểu biết của kẻ tấn công. Paper đánh giá mô hình đóng của ba nhà cung cấp lẫn hai mô hình mở, trong môi trường giả lập với dữ liệu giả. Điểm nổi bật nhất là *hợp đồng sử dụng* trong data card: mục "Unsuitable use cases" ghi rõ việc đánh giá agent và phòng vệ *chỉ với các tấn công mặc định*, không có tấn công thích nghi và đánh giá bảo mật kỹ lưỡng. Tuy nhiên, câu này nằm ở phụ lục, và như trang [MELON](melon.md) cho thấy, một phòng vệ công bố sau đó đã đánh giá chỉ với bốn tấn công mặc định. Một benchmark muốn hợp đồng sử dụng được tôn trọng nên đưa nó vào văn bản chính, vào README, và tốt nhất vào leaderboard, chẳng hạn yêu cầu mọi phòng vệ báo cáo kết quả "Max".

**Đạo đức và công bố có trách nhiệm.** Đoạn Broader impact thừa nhận kẻ tấn công cũng có thể dùng AgentDojo để thử lời chèn mới, nhưng cho rằng rủi ro này nhỏ so với lợi ích của một benchmark bảo mật đáng tin cậy. Checklist khẳng định chỉ có dữ liệu giả, nên không có vấn đề về thông tin cá nhân. Paper không bàn tới responsible disclosure với nhà cung cấp mô hình; với các tấn công mẫu chung đã được biết rộng rãi, điều này hợp lý, nhưng một paper giới thiệu tấn công *mới* trên mô hình thương mại nên cân nhắc thông báo trước cho nhà cung cấp và nói rõ điều đó.

## Đặc thù của D&B track: những phần ít ai đọc nhưng reviewer kiểm tra

Appendix E nêu nơi lưu trữ mã, license MIT, kế hoạch bảo trì, khả năng tái tạo (mọi output và hội thoại của mô hình dưới dạng JSON cùng notebook tái tạo bảng và hình), và giải thích vì sao không tạo được metadata Croissant: tập nhiệm vụ, tool và dữ liệu môi trường là hỗn hợp giữa dữ liệu và code. Appendix F là một data card theo khuôn của Pushkarna và cộng sự, với chính sách đánh phiên bản theo semantic versioning và định nghĩa thế nào là *lỗi* của benchmark (nhiệm vụ giải được mà không cần thấy lời chèn, nhiệm vụ không giải được, ground truth hay hàm kiểm tra sai, tool mô tả sai).

Hai điều đáng học: khi một yêu cầu như Croissant không áp dụng được, paper *giải thích* thay vì bỏ trống; và định nghĩa lỗi cùng chính sách phiên bản biến benchmark từ một sản phẩm công bố một lần thành một công cụ có vòng đời, đúng câu hỏi "tính bền vững". Vài chi tiết còn sót, như mục "Citation guidelines: TBD upon acceptance" và con số 70 tool trong data card, cho thấy phụ lục cũng cần được soát như văn bản chính.

## Benchmark trở thành chuẩn chung như thế nào

Ảnh hưởng của AgentDojo thấy rõ qua MELON: phòng vệ này đánh giá hoàn toàn trên AgentDojo, dùng lại nguyên ba metric, dùng bốn tấn công đi kèm và lấy tool filter làm một baseline. Các yếu tố làm điều này khả thi đều nằm ở thiết kế: từ vựng chung, metric dễ dùng lại, chi phí thấp, giao diện nhỏ và baseline có sẵn. Mặt trái cũng hiện ra ở chính ví dụ đó: khi benchmark trở thành chuẩn, các lựa chọn mặc định của nó cũng trở thành chuẩn, kể cả khi chính tác giả benchmark đã cảnh báo rằng chúng không đủ cho một đánh giá bảo mật. Những gì đặt trong cấu hình mặc định sẽ được dùng nhiều nhất, nên cấu hình mặc định nên là cấu hình mà tác giả muốn người khác báo cáo.

## Limitations, kết luận và văn phong

Paper không có mục Limitations riêng; checklist trỏ về Section 5, nơi Conclusion liệt kê năm hướng cải thiện: thêm phòng vệ và tấn công tinh vi hơn, tự động hóa việc đặc tả nhiệm vụ, thêm nhiệm vụ mà tool filter không giải được, hỗ trợ agent đa phương thức, và thêm ràng buộc lên lời chèn. Viết hạn chế dưới dạng lời mời đóng góp hợp với một benchmark "sống", nhưng làm hạn chế kém nổi bật; một đoạn ngắn tách riêng, như bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md) gợi ý, sẽ giúp người dùng thấy ngay các giới hạn. Văn phong ngắn gọn, thận trọng đúng chỗ ("presumably because", "potentially unsurprising", "is unlikely to withstand"), và gần như mọi phát hiện đều đi kèm một cơ chế giải thích.

## Bài học cho người viết

**Biện minh cho định dạng của benchmark bằng bản chất của lĩnh vực.** "Động thay vì tĩnh" thuyết phục vì nó gắn với kinh nghiệm về tấn công thích nghi.

**Bảo vệ phép đo trước chính hiện tượng được đo.** Mọi benchmark về tấn công lên mô hình nên tự hỏi: tấn công có thể làm hỏng công cụ đo không?

**Định nghĩa từ vựng và metric như thể đang viết từ điển cho cả nhánh nghiên cứu**, và chứng minh benchmark phân biệt được bằng các phân rã có giải thích cơ chế.

**Tự chỉ ra vì sao baseline mạnh nhất chưa giải được benchmark, đặt hợp đồng sử dụng ở chỗ người dùng sẽ đọc, và sinh số liệu trong văn bản từ cùng nguồn với bảng.**

### Khi viết paper về visual/multimodal prompt injection

AgentDojo chỉ có văn bản, và cả Conclusion lẫn data card đều nêu agent đa phương thức là hướng mở rộng. Khoảng trống này có hệ quả thực tế: MELON đã thử VisualWebArena-Adv nhưng loại vì tấn công ảnh quá yếu trên GPT-4o. Một nhóm tác giả viết benchmark prompt injection đa phương thức có thể mượn gần như nguyên khung: placeholder cho lời chèn đặt trong ảnh, ảnh chụp màn hình hay trang web; hàm kiểm tra bằng code thay vì VLM làm giám khảo, với lý do y hệt (VLM chấm điểm sẽ nhìn thấy chính ảnh bị chèn); phân biệt targeted và untargeted; và một threat model nói rõ kẻ tấn công kiểm soát gì, từ nhiễu bị chặn theo chuẩn (như trong [Dissecting MM Agents](dissecting-mm-agents.md)) tới nội dung hiển thị như [pop-up](popups.md) hay phần tử chèn vào trang web như [EIA](eia.md). Về nơi nộp: NeurIPS D&B track hợp nhất cho một benchmark thuần, với yêu cầu tài liệu hóa như trên; CVPR/ICCV nhận dataset và benchmark ở main track, với kỳ vọng mạnh về ví dụ trực quan và độ đa dạng của ảnh; ACL/EMNLP chờ đợi phân tích ngôn ngữ của chỉ dẫn bị chèn cùng một mục Limitations riêng; ICML và ICLR nhận benchmark ở main track nhưng thường kỳ vọng thêm một insight vượt ra ngoài bản thân benchmark.

### Áp dụng sang các cộng đồng khác

Trong **NLP**, AgentDojo có họ hàng gần với [CheckList](../05-case-studies/checklist-acl2020.md): cả hai thay độ chính xác trung bình bằng các test case có hành vi kỳ vọng được đặc tả rõ, và thuyết phục bằng việc tìm ra thất bại ở các mô hình thương mại mạnh. Trong **Computer Vision**, bài học về hàm kiểm tra tất định và hợp đồng sử dụng áp dụng trực tiếp cho các benchmark robustness. Trong **Machine Learning**, cách AgentDojo dùng phép "Max" làm xấp xỉ rẻ cho đánh giá thích nghi là mẫu cho mọi benchmark về an toàn và độ bền vững.

## Tóm tắt

AgentDojo dựng câu chuyện quanh một triết lý thiết kế, môi trường động thay vì bộ test tĩnh, được biện minh bằng bản chất chạy đua của bảo mật ML, và quanh bằng chứng rằng phiên bản đầu đã đủ khó cho cả hai phía. Thiết kế nổi bật ở bộ từ vựng rõ ràng, hàm kiểm tra bằng code thay vì LLM làm giám khảo, chuỗi tool call ground truth phục vụ nhiều mục đích, giao diện mở rộng tối giản và ba metric tách bạch cùng phép "Max". Thí nghiệm chứng minh giá trị phân biệt bằng mười mô hình, các phân rã có cơ chế và một đánh giá phòng vệ tự chỉ ra giới hạn của baseline mạnh nhất. Những điểm có thể làm tốt hơn gồm abstract còn định tính, threat model rải rác, một loạt con số lệch nhau giữa Introduction, văn bản và bảng, và việc hợp đồng sử dụng quan trọng nhất chỉ nằm ở phụ lục trong khi benchmark đã nhanh chóng trở thành chuẩn chung.

## Bài tập

1. Viết lại hai câu phát hiện trong abstract của AgentDojo với số liệu lấy trực tiếp từ Table 3 và Table 5, kiểm tra từng con số với bảng trước khi viết.
2. Với benchmark hoặc bộ đánh giá trong dự án hiện tại, viết một đoạn "từ vựng" theo kiểu mở đầu Section 3, rồi liệt kê mọi trường dữ liệu của một mẫu cùng lý do tồn tại của từng trường.
3. Liệt kê các cách mà hiện tượng dự án đang đo có thể làm hỏng công cụ đo (giám khảo LLM, bộ phân loại tự động), và với mỗi rủi ro, đề xuất một hàm kiểm tra tất định thay thế.
4. Viết một threat model gọn trong một khung cho AgentDojo, gom mọi giả định đang rải rác, rồi so với threat model của MELON và chỉ ra chỗ khác nhau.
5. Viết mục "Intended uses" và "Unsuitable uses" cho benchmark của dự án hiện tại, rồi đề xuất cách đưa hợp đồng sử dụng đó vào cấu hình mặc định hoặc leaderboard.
6. Phác thảo một phiên bản đa phương thức của một task suite trong AgentDojo: một user task, một injection task đặt trong ảnh, hàm kiểm tra tiện ích, hàm kiểm tra bảo mật, và một đoạn giải thích vì sao không dùng VLM làm giám khảo.
