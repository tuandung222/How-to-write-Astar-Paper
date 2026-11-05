# Dùng AI hỗ trợ viết (đúng luật)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Trình bày các nguyên tắc chung trong chính sách về LLM của các hội nghị Computer Vision, NLP và Machine Learning, và biết cần tìm những điều gì trong chính sách của năm nộp.
    - Phân biệt cách dùng LLM thường được chấp nhận, cách dùng cần khai báo và cách dùng bị cấm.
    - Giải thích nghĩa vụ bảo mật khi đóng vai reviewer và lý do việc chèn câu lệnh ẩn vào PDF là vi phạm đạo đức nghiêm trọng.
    - Áp dụng một quy trình dùng LLM an toàn, trong đó mọi đầu ra đều được kiểm chứng.
    - Viết prompt hiệu quả cho các tác vụ như phản biện thử, sửa ngữ pháp có giải thích và kiểm tra nhất quán thuật ngữ.

Các mô hình ngôn ngữ lớn (*large language models*, LLM) như ChatGPT, Claude hay Gemini đã trở thành công cụ quen thuộc trong viết học thuật. Với người viết không phải bản ngữ, chúng đặc biệt hữu ích ở đúng những điểm yếu mà bài [Tiếng Anh học thuật](van-phong.md) đã phân tích: mạo từ, số nhiều, hòa hợp động từ, câu quá dài. Một công cụ sửa được những lỗi này trong vài giây giúp người viết dồn sức vào điều quan trọng hơn là lập luận và bằng chứng.

Tuy nhiên, việc dùng LLM trong viết paper có cả **luật** lẫn **bẫy**. Luật là chính sách của từng hội nghị, quy định những gì được phép, những gì phải khai báo và những gì bị cấm. Bẫy là những rủi ro mà không chính sách nào ngăn được thay cho người viết: trích dẫn bịa đặt, văn bản chung chung dễ nhận ra, rò rỉ thông tin mật, hay những câu khẳng định vượt quá bằng chứng. Bài này xem xét cả hai, dựa trên một nguyên tắc định hướng xuyên suốt: **LLM là người biên tập và người phản biện, không phải tác giả**. Ý tưởng, claim, bằng chứng và trách nhiệm luôn thuộc về nhóm tác giả.

Phạm vi của bài cần được nói rõ ngay từ đầu. Bài này chỉ bàn về hai mảng gắn với văn bản: dùng LLM khi *viết* paper và phản hồi reviewer, và chính sách của hội nghị đối với cả tác giả lẫn reviewer. Việc dùng AI ở các khâu khác của nghiên cứu, như đọc tài liệu, tìm ý tưởng, lập trình và chạy thực nghiệm, cùng những rủi ro riêng của từng khâu, được trình bày ở [Chương 8: AI làm cộng sự nghiên cứu](../08-ai-cong-su/index.md). Hai phần bổ sung cho nhau: chương 8 nhìn toàn bộ vòng đời của một dự án, còn bài này đi sâu vào giai đoạn cuối, khi kết quả đã có và câu hỏi còn lại là viết và nộp thế nào cho đúng luật.

## Chính sách của các hội nghị: những nguyên tắc chung

Chính sách về LLM của các hội nghị A\* bắt đầu xuất hiện từ khoảng năm 2023 và thay đổi khá nhanh qua từng năm. Chi tiết khác nhau giữa các hội nghị, nhưng có bốn nguyên tắc mà hầu hết các chính sách trong cả ba cộng đồng cùng chia sẻ. Hiểu được lý do đằng sau từng nguyên tắc giúp người viết tự đánh giá những tình huống mà chính sách không nêu cụ thể.

### LLM không thể đứng tên tác giả

Đứng tên tác giả không chỉ là ghi nhận đóng góp mà còn là nhận trách nhiệm: tác giả đồng ý với nội dung được nộp, trả lời câu hỏi của reviewer, chịu trách nhiệm khi có sai sót và có thể bị xử lý khi vi phạm đạo đức. Một công cụ phần mềm không thể làm bất kỳ điều nào trong số đó. Vì vậy, các hội nghị lớn và các nhà xuất bản khoa học đều thống nhất rằng LLM không được liệt kê là tác giả, dù nó đóng góp nhiều tới đâu.

### Tác giả chịu toàn bộ trách nhiệm về nội dung

Hệ quả trực tiếp của nguyên tắc trên là mọi nội dung trong paper, kể cả phần do công cụ gợi ý, đều thuộc trách nhiệm của tác giả. Nếu LLM bịa ra một trích dẫn, sinh ra một câu gần như trùng với văn bản đã công bố của người khác, hay diễn giải sai một kết quả, thì đó là lỗi của paper, và lời giải thích "do công cụ viết" không được chấp nhận. Rủi ro đạo văn đặc biệt đáng lưu ý vì LLM đôi khi tái tạo gần nguyên văn những đoạn đã gặp trong dữ liệu huấn luyện mà người dùng không hề hay biết.

### Chỉnh sửa ngôn ngữ thường được phép

Dùng công cụ để sửa ngữ pháp, chính tả, chọn từ hay làm câu gọn hơn thường được coi tương tự như dùng trình kiểm tra ngữ pháp truyền thống, và ở nhiều hội nghị không cần khai báo. Ranh giới ở đây là công cụ chỉ thay đổi *cách nói* chứ không thay đổi *điều được nói*. Tuy vậy, mức độ cho phép không đồng nhất giữa các nơi và các năm. Một ví dụ cho thấy chính sách có thể thay đổi nhanh thế nào là ICML 2023: Call for Papers năm đó cấm đưa văn bản do LLM sinh ra vào paper, trừ khi văn bản ấy là một phần của phân tích thực nghiệm, đồng thời làm rõ rằng việc dùng công cụ để chỉnh sửa văn bản do tác giả viết vẫn được phép. Các năm sau, chính sách của các hội nghị ML nói chung chuyển sang hướng cho phép kèm yêu cầu khai báo.

### Đóng góp đáng kể cần được khai báo

Khi LLM đóng góp vượt ra ngoài chỉnh sửa ngôn ngữ, chẳng hạn sinh ra đoạn văn mang nội dung, gợi ý ý tưởng, hỗ trợ tổng quan tài liệu, hay là một thành phần của chính phương pháp nghiên cứu, một số hội nghị yêu cầu khai báo. NeurIPS, ICLR và ACL là những ví dụ thường được nhắc tới, dù hình thức và mức độ yêu cầu khác nhau theo từng năm. Chính sách LLM của NeurIPS 2025 không đòi khai báo trong paper việc dùng công cụ để viết hay định dạng, nhưng yêu cầu mô tả việc dùng LLM khi nó là thành phần quan trọng, nguyên bản hoặc không theo chuẩn thông thường của phương pháp, và nhấn mạnh rằng tác giả phải tự kiểm chứng mọi nội dung do LLM tạo ra. ICLR đi xa hơn: ở ICLR 2026, tác giả phải khai báo việc dùng LLM cả trong paper lẫn trong form nộp bài, phải mô tả vai trò của LLM trong một mục riêng nếu nó đóng góp đáng kể vào việc hình thành ý tưởng hay viết, và paper không khai báo việc dùng đáng kể có thể bị desk reject; ICLR 2027 tiếp tục hướng này với một văn bản chính sách AI riêng cho tác giả, kèm mẫu mục khai báo. Chính sách của ACL về hỗ trợ viết bằng AI (công bố từ năm 2023) phân biệt nhiều mức độ: hỗ trợ thuần túy về ngôn ngữ thường không cần khai báo; khi công cụ đóng góp văn bản mang nội dung hoặc ý tưởng thì cần khai báo; còn việc để công cụ vừa đề xuất ý tưởng vừa viết ra nội dung bị xem là không phù hợp, vì khi đó công cụ đã đóng vai trò của một đồng tác giả. Bên cạnh đó, *Responsible NLP Research checklist* mà mọi bài nộp ARR phải điền có mục hỏi về việc dùng AI trợ lý trong nghiên cứu, lập trình hoặc viết.

Vị trí khai báo cũng khác nhau: trong mục phương pháp khi LLM là một phần của nghiên cứu, trong phần Acknowledgments, trong một mục riêng, hoặc trong checklist của hội nghị. Dù đặt ở đâu, một đoạn khai báo tốt có chung một cấu trúc: công cụ nào, dùng cho việc gì, ở phần nào của paper, và nhóm tác giả đã kiểm chứng đầu ra ra sao. Đoạn mẫu dưới đây (giả định) minh họa cấu trúc đó.

<div class="good" markdown>
*"LLM usage. We used an LLM-based assistant ([model name, version]) to correct grammar and to shorten paragraphs in Sections 1 and 6; every suggested edit was reviewed by the authors. An LLM was also used as part of the method to paraphrase test questions (Sec. 4.2; prompts and decoding settings in Appendix C). No LLM was used to propose research ideas, to write claims about results, or to generate references. The authors take full responsibility for the content of this paper."*
</div>

Đoạn này tách rõ hai vai trò của LLM, hỗ trợ viết và thành phần của phương pháp, chỉ đúng vị trí của từng vai trò, và nói rõ cả những việc *không* giao cho công cụ; đó cũng là những thông tin mà các mẫu khai báo của hội nghị thường hỏi. Chính vì vị trí và mức độ yêu cầu khác nhau giữa các nơi mà lời khuyên quan trọng nhất của cả mục chỉ có một.

!!! warning "Luôn đọc chính sách LLM của đúng hội nghị, đúng năm"
    Chính sách về LLM thay đổi nhanh hơn hầu hết các quy định khác của hội nghị, và những gì đúng năm trước có thể không còn đúng năm nay. Trước mỗi lần nộp, cần tìm trên trang Call for Papers hoặc Author Guidelines của năm đó ba thông tin: những cách dùng nào được phép không cần khai báo, những cách dùng nào phải khai báo và khai báo ở đâu, và quy định dành cho reviewer. Các mô tả trong bài này chỉ phản ánh xu hướng chung tại thời điểm viết (cuối năm 2026).

## Khác biệt giữa các cộng đồng

Ngoài các nguyên tắc chung, mỗi cộng đồng có những điểm nhấn riêng trong cách tiếp cận vấn đề LLM, xuất phát từ đặc thù nghiên cứu và quy trình review riêng.

### Computer Vision

Các hội nghị CV như CVPR, ICCV và ECCV áp dụng các nguyên tắc chung về quyền tác giả và trách nhiệm. Điểm nhấn đáng chú ý trong những năm gần đây nằm ở phía reviewer: các quy định về bảo mật được nêu rất rõ, cấm đưa nội dung bài đang review vào các dịch vụ LLM bên ngoài, và nhiều năm còn cấm dùng LLM để viết review. Chẳng hạn, hướng dẫn reviewer của ECCV 2026, được mô tả là thống nhất với CVPR 2026, cấm tải bài được giao lên hoặc xử lý bằng LLM. Vì nhiều tác giả CV đồng thời là reviewer, người viết cần nắm cả hai phía của chính sách.

### NLP

Cộng đồng NLP có chính sách chi tiết nhất về các mức độ hỗ trợ của AI trong viết, như đã trình bày ở trên, và việc khai báo được tích hợp vào Responsible NLP checklist. Một khía cạnh đặc thù là rất nhiều paper NLP nghiên cứu chính các LLM. Khi đó, cần phân biệt rõ hai vai trò: LLM là *đối tượng* hoặc *công cụ* của nghiên cứu (mô hình được đánh giá, mô hình dùng để sinh dữ liệu hay làm giám khảo tự động) thì phải được mô tả đầy đủ trong mục phương pháp, gồm tên và phiên bản mô hình, prompt, tham số giải mã và thời điểm truy vấn; còn LLM là *công cụ hỗ trợ viết* thì tuân theo chính sách khai báo về hỗ trợ viết.

### Machine Learning

Ở NeurIPS, ICML và ICLR, chính sách đã thay đổi đáng kể qua các năm, từ quy định chặt của ICML 2023 tới các yêu cầu khai báo ở NeurIPS và đặc biệt là ICLR 2026. Phía reviewer cũng có những thử nghiệm mới: ICML 2026 cho reviewer chọn giữa hai chính sách, một chính sách cấm hẳn LLM và một chính sách cho phép dùng hạn chế (để hiểu paper và trau chuốt câu chữ, không để đánh giá chất lượng hay soạn review), rồi ghép paper với reviewer có chính sách tương thích. Với ICLR, nơi toàn bộ quá trình review diễn ra công khai trên OpenReview, mọi vi phạm hoặc nghi vấn đều có thể bị cộng đồng nhìn thấy. Các hội nghị ML cũng thuộc nhóm đã lên tiếng rõ ràng về việc chèn câu lệnh ẩn vào paper, một vấn đề sẽ được bàn ở mục sau.

## Khi đóng vai reviewer: bảo mật là tuyệt đối

Nhiều hội nghị những năm gần đây yêu cầu tác giả của các bài nộp tham gia review, nên người học sớm muộn cũng sẽ ở phía bên kia của quy trình. Ở vai trò này, nguyên tắc rất rõ ràng: **reviewer không được đưa nội dung paper đang review vào các LLM bên ngoài**. Bài nộp là tài liệu mật; đưa nó vào một dịch vụ trực tuyến tương đương với chia sẻ cho một bên thứ ba, nơi nội dung có thể được lưu trữ, thậm chí được dùng để huấn luyện mô hình. Điều này vi phạm cam kết bảo mật mà reviewer đã đồng ý khi nhận nhiệm vụ, và có thể gây thiệt hại thật cho tác giả, những người chưa công bố ý tưởng trong bài nộp.

Bên cạnh vấn đề bảo mật, một bản review do LLM viết thường chung chung, thiếu những nhận xét cụ thể về điểm mạnh và điểm yếu thật của paper, và không phản ánh đúng đánh giá của một chuyên gia, trong khi đó chính là lý do reviewer được mời. Một số hội nghị cấm hẳn việc dùng LLM để viết review; một số cho phép dùng công cụ để chỉnh sửa ngôn ngữ của bản review do reviewer tự viết, với điều kiện không đưa nội dung paper vào. Hậu quả của vi phạm có thể rất nặng: bị loại khỏi danh sách reviewer, và ở một số hội nghị, chính paper của reviewer vi phạm cũng bị xử lý. Hướng dẫn của ECCV 2026 ghi rõ rằng reviewer có review bị coi là "highly irresponsible", kể cả do vi phạm chính sách LLM, sẽ bị desk reject mọi paper mà người đó đứng tên; theo blog chính thức của ICML, ICML 2026 đã desk reject 497 paper, khoảng 2% số bài nộp, gắn với các reviewer bị phát hiện dùng LLM dù đã nhận chính sách cấm. Khi không chắc chắn, cách an toàn là không dùng LLM cho bất kỳ khâu nào của việc review.

## Câu lệnh ẩn trong PDF: ranh giới không được vượt qua

*Prompt injection* ẩn là việc chèn vào PDF những đoạn văn bản mà người đọc không nhìn thấy, chẳng hạn chữ màu trắng trên nền trắng, chữ cực nhỏ hoặc chữ giấu trong hình, chứa câu lệnh nhắm vào LLM, kiểu như yêu cầu bỏ qua các chỉ dẫn trước đó và chỉ đưa ra nhận xét tích cực. Mục đích là thao túng những reviewer dùng LLM để đọc hoặc tóm tắt paper. Năm 2025, cộng đồng phát hiện các câu lệnh kiểu này trong một số bản thảo đăng trên arXiv, và ban tổ chức nhiều hội nghị lớn đã phản ứng. ICML 2025 bổ sung vào chính sách đạo đức xuất bản một tuyên bố rằng chèn câu lệnh ẩn nhằm có được review thuận lợi từ LLM là hành vi sai trái khoa học (*scientific misconduct*), kể cả khi reviewer vốn không được phép dùng LLM. ICLR 2026 coi một review tích cực có được nhờ câu lệnh ẩn là một dạng thông đồng (*collusion*), có thể quy trách nhiệm cho cả tác giả lẫn reviewer. Hậu quả có thể là desk reject và các biện pháp xử lý khác.

Hành vi này sai về bản chất, bất kể reviewer có được phép dùng LLM hay không. Nó là một nỗ lực can thiệp vào kết quả đánh giá bằng con đường không minh bạch, tương tự như tìm cách tác động tới reviewer ngoài quy trình chính thức. Lập luận "chỉ để bắt những reviewer lười dùng LLM" cần được nhìn thận trọng. Tuyên bố của ICML 2025 có phân biệt câu lệnh ẩn nhằm xin review thuận lợi với câu lệnh chỉ nhằm phát hiện reviewer dùng LLM, và coi loại sau là chấp nhận được; nhưng không phải hội nghị nào cũng nêu ngoại lệ này, ranh giới giữa hai loại rất khó chứng minh khi bị điều tra, và việc phát hiện review do máy viết là trách nhiệm của ban tổ chức (theo các báo cáo về ICML 2026, chính ban tổ chức đã chèn dấu hiệu ẩn vào PDF để làm việc đó). Tác giả không có vai trò giám sát reviewer; khi nghi ngờ một bản review do máy viết, kênh đúng là báo cáo với area chair hoặc program chair.

!!! danger "Không bao giờ chèn văn bản ẩn vào paper"
    Không chèn câu lệnh ẩn dưới bất kỳ hình thức nào, kể cả "để thử nghiệm" hay "cho vui". Đồng thời, cần kiểm tra để tránh vô tình mắc lỗi: một hình vẽ hoặc một đoạn mã LaTeX sao chép từ nguồn khác có thể chứa văn bản ẩn. Lệnh `pdftotext main.pdf - | less` trích toàn bộ chữ trong PDF, kể cả chữ không hiển thị; đọc lướt kết quả trước khi nộp là bước kiểm tra đơn giản và nên được đưa vào script kiểm tra trong bài [LaTeX & Overleaf](latex.md).

## Nên và không nên

Sau khi đã nắm luật, câu hỏi thực tế là dùng LLM thế nào cho hiệu quả mà vẫn an toàn. Tiêu chí chung để phân biệt là: một cách dùng tốt giúp tác giả thể hiện chính xác hơn ý tưởng vốn có, còn một cách dùng xấu thay thế suy nghĩ của tác giả hoặc đưa vào paper những nội dung chưa được kiểm chứng.

### Những cách dùng nên áp dụng

**Sửa ngữ pháp, mạo từ và làm câu gọn hơn, sau khi đã tự viết ý.** Đây là cách dùng an toàn và hiệu quả nhất, vì nội dung hoàn toàn là của tác giả và công cụ chỉ xử lý bề mặt ngôn ngữ. Việc yêu cầu công cụ liệt kê từng thay đổi kèm lý do còn biến nó thành một người dạy tiếng Anh.

**Gợi ý cách diễn đạt khác cho một câu vụng.** Khi một câu đọc lên thấy không ổn mà không rõ vì sao, yêu cầu ba bốn cách viết lại giúp người viết nhìn thấy các lựa chọn. Người viết chọn một cách, chỉnh lại cho đúng ý, chứ không chép nguyên.

**Đóng vai reviewer cho paper của chính nhóm.** LLM có thể chỉ ra những claim thiếu bằng chứng, những câu mơ hồ, những baseline có thể bị hỏi. Kết quả không thay thế được internal review với người thật, nhưng là một lớp kiểm tra bổ sung nhanh và rẻ trong quy trình ở bài [Quy trình viết & tự review](quy-trinh-viet.md).

**Kiểm tra nhất quán thuật ngữ và ký hiệu.** Tìm các trường hợp một khái niệm được gọi bằng nhiều tên, hay một ký hiệu được dùng trước khi định nghĩa, là việc nhàm chán với người nhưng phù hợp với máy.

**Hỗ trợ LaTeX.** Giải thích lỗi biên dịch, chuyển một bảng tính thành mã `booktabs`, viết một macro hay một hình TikZ đơn giản đều là những tác vụ kỹ thuật mà LLM xử lý tốt và dễ kiểm tra kết quả.

**Dịch nháp từ tiếng Việt.** Khi ý tưởng đã rõ trong đầu mà chưa diễn đạt được bằng tiếng Anh, viết nháp bằng tiếng Việt rồi nhờ công cụ dịch là một cách vượt qua điểm kẹt. Bản dịch sau đó cần được viết lại theo giọng văn của tác giả và theo các nguyên tắc viết rõ.

### Những cách dùng cần tránh

**Để LLM viết toàn bộ một mục.** Văn bản do LLM sinh ra thường trôi chảy nhưng chung chung, thiếu những chi tiết cụ thể làm nên giá trị của paper, và mang những dấu hiệu dễ nhận ra như các từ "*delve*", "*crucial*", "*pivotal*", "*landscape*", "*seamlessly*", "*underscore*" xuất hiện dày đặc. Reviewer ngày càng nhạy với kiểu văn này và có xu hướng đánh giá thấp nó. Nguy hiểm hơn, văn bản sinh tự động có thể chứa những khẳng định mà nhóm tác giả không có bằng chứng.

**Để LLM sinh trích dẫn.** LLM có thể bịa ra những paper không tồn tại, với tên tác giả, tiêu đề và hội nghị nghe rất thật, hoặc gán sai kết quả cho một paper có thật. Mọi mục tham khảo phải được kiểm tra trên DBLP, ACL Anthology, trang kỷ yếu chính thức hoặc Google Scholar, và BibTeX phải lấy từ các nguồn đó chứ không từ đầu ra của LLM.

**Dùng tóm tắt của LLM thay cho việc đọc paper.** Viết Related Work dựa trên bản tóm tắt do công cụ tạo ra mà không tự đọc paper gốc dễ dẫn tới mô tả sai công trình của người khác. Tác giả của công trình đó rất có thể là reviewer của paper, và họ sẽ nhận ra ngay.

**Đưa dữ liệu mật vào công cụ bên ngoài.** Điều này bao gồm paper đang review, bản thảo chưa công bố của người khác, và dữ liệu có thông tin cá nhân. Ngay cả với bản thảo của chính nhóm, cần kiểm tra chính sách lưu trữ dữ liệu của công cụ và quy định của cơ quan trước khi sử dụng.

**Để LLM "làm đẹp" kết quả.** Yêu cầu công cụ viết lại đoạn bình luận kết quả cho "ấn tượng hơn" thường dẫn tới những diễn giải vượt quá bằng chứng: "*suggests*" thành "*demonstrates*", "*on two datasets*" thành "*across benchmarks*". Mọi câu về kết quả phải được tác giả đối chiếu lại với số liệu.

## Một quy trình dùng LLM an toàn

Các lời khuyên trên có thể gom thành một quy trình ngắn, áp dụng cho mỗi lần dùng LLM trong lúc viết paper. Điểm cốt lõi của quy trình là tác giả luôn là người khởi đầu và người quyết định cuối cùng, còn công cụ chỉ can thiệp ở giữa với một nhiệm vụ hẹp và rõ ràng.

1. **Tự viết nội dung trước.** Ý tưởng, claim, cấu trúc đoạn văn và các con số do tác giả viết ra, kể cả ở dạng nháp vụng về.
2. **Giao nhiệm vụ hẹp, có ràng buộc.** Yêu cầu cụ thể như "sửa mạo từ", kèm ràng buộc như "không thêm nội dung mới", "giữ nguyên thuật ngữ".
3. **Yêu cầu danh sách thay đổi kèm lý do.** Xem xét và chấp nhận hoặc từ chối từng thay đổi, thay vì chép nguyên đầu ra.
4. **Kiểm chứng mọi thông tin.** Mọi con số, trích dẫn hay khẳng định mà công cụ đụng tới đều được đối chiếu lại với nguồn.
5. **Ghi nhật ký sử dụng.** Ghi lại công cụ nào được dùng, cho mục nào, với mục đích gì; nhật ký này giúp khai báo chính xác khi hội nghị yêu cầu.
6. **Đọc lại bằng giọng của tác giả.** Lượt đọc cuối bảo đảm văn bản nhất quán về giọng điệu và không còn dấu vết của văn phong máy.

## Prompt mẫu

Một prompt hiệu quả cho công việc viết paper thường có bốn thành phần: vai trò và bối cảnh (công cụ đang đóng vai ai, văn bản thuộc loại gì), nhiệm vụ cụ thể, ràng buộc (những gì không được làm, quan trọng nhất là không viết lại hay thêm nội dung) và định dạng đầu ra. Các prompt dưới đây được viết bằng tiếng Anh, vì văn bản cần xử lý là tiếng Anh và việc giữ cùng một ngôn ngữ giúp công cụ phản hồi nhất quán hơn. Tất cả chỉ dùng cho bản thảo của chính nhóm tác giả, không bao giờ cho paper đang review. Các prompt cho những giai đoạn khác của nghiên cứu, từ đọc tài liệu tới lập trình và thực nghiệm, được tập hợp ở bài [Quy trình mẫu và thư viện prompt](../08-ai-cong-su/quy-trinh-mau.md) của Chương 8.

Prompt đầu tiên dùng LLM như một reviewer thử. Lưu ý ràng buộc cuối cùng: công cụ chỉ được nhận xét, không được viết lại, để quyền quyết định cách sửa vẫn thuộc về tác giả.

```text
You are an experienced reviewer for a top-tier venue such as CVPR, ACL or NeurIPS.
Below is the Introduction of a paper that is being prepared for submission.

Please:
1. Summarize the story of the paper in three sentences, so that the authors can
   check whether the main message comes across.
2. List every claim in the text. For each claim, state whether the Introduction
   points to supporting evidence (an experiment, table, figure or theorem).
3. List the five weaknesses most likely to lower your score, from most to least serious.
4. Quote every sentence that is vague or that may overclaim, and explain why.

Do NOT rewrite the text. Give feedback only.

[Introduction]
```

Prompt thứ hai dành cho việc sửa ngữ pháp. Yêu cầu liệt kê từng thay đổi kèm quy tắc ngữ pháp liên quan biến công cụ thành một người dạy tiếng Anh: sau vài paper, người viết sẽ tự nhận ra phần lớn các lỗi này và ngày càng ít cần tới công cụ.

```text
You are an editor specializing in academic English for computer science papers.
Correct the grammar, articles (a/an/the), plural forms and subject-verb agreement
in the paragraph below. Keep the content, technical terms and sentence structure
as close to the original as possible. Do not add new claims or information.

Return:
1. The corrected paragraph.
2. A numbered list of every change, each with a one-line explanation of the
   grammar rule involved.

[paragraph]
```

Prompt thứ ba kiểm tra nhất quán thuật ngữ và ký hiệu, phục vụ trực tiếp Nguyên tắc 5 trong bài Tiếng Anh học thuật. Đầu ra dạng bảng giúp tác giả nhanh chóng quyết định dùng thuật ngữ nào và sửa ở đâu.

```text
Below is the Method section of a machine learning paper. Find:
(a) every concept that is referred to by more than one name
    (for example "passage", "chunk" and "document"), and
(b) every symbol that is used before it is defined, or defined more than once.
Present the result as a table with the columns:
concept or symbol | variants found | first occurrence | suggested single form.
Do not rewrite the text.

[Method section]
```

Prompt thứ tư hỗ trợ chuyển một bản nháp tiếng Việt sang tiếng Anh. Các ràng buộc về giữ nguyên khóa trích dẫn và không thêm nội dung đặc biệt quan trọng, vì đây là tác vụ mà công cụ dễ "sáng tác" thêm nhất.

```text
The paragraph below is a rough draft in Vietnamese for the Related Work section
of an NLP paper. Translate it into plain, clear academic English.
- Keep one idea per sentence.
- Keep every citation command (e.g., \citet{...}, \citep{...}) exactly as it is.
- Do not add citations, claims or examples that are not in the original.
After the translation, list any Vietnamese phrases whose meaning was ambiguous.

[Vietnamese draft]
```

Prompt thứ năm giúp rút gọn văn bản khi vượt giới hạn trang. Công cụ đề xuất, còn tác giả quyết định, nên yêu cầu liệt kê những gì bị lược bỏ là phần không thể thiếu.

```text
The paragraph below must be shortened by about 20% to fit the page limit of a
conference submission. Propose a shorter version that keeps every technical
detail, number and citation. Then list everything that was removed or merged,
so that the authors can decide whether each removal is acceptable.

[paragraph]
```

Prompt cuối cùng dành cho lỗi LaTeX. Ràng buộc "không sửa file style hay bố cục trang" nhắc lại quy tắc không được sửa template, vì một số "giải pháp" do công cụ đề xuất cho lỗi tràn lề hay tràn trang thực chất là thay đổi định dạng bị cấm.

```text
The LaTeX code below produces the error shown underneath when compiled with the
official ACL style files. Explain the cause of the error and give the minimal fix.
Do not modify the style files, margins, font sizes or spacing.

[code]

[error message]
```

## Tóm tắt

LLM là công cụ hỗ trợ mạnh cho người viết không phải bản ngữ, với điều kiện được dùng như người biên tập và người phản biện chứ không như tác giả. Chính sách của các hội nghị trong cả ba cộng đồng chia sẻ bốn nguyên tắc: LLM không đứng tên tác giả, tác giả chịu toàn bộ trách nhiệm về nội dung, chỉnh sửa ngôn ngữ thường được phép, và đóng góp đáng kể của LLM cần được khai báo theo cách mà từng hội nghị quy định, như ở NeurIPS, ICLR và ACL với Responsible NLP checklist. Khi làm reviewer, việc đưa nội dung paper vào LLM bên ngoài là vi phạm bảo mật; khi làm tác giả, việc chèn câu lệnh ẩn vào PDF là vi phạm đạo đức nghiêm trọng. Một quy trình an toàn gồm tự viết nội dung trước, giao nhiệm vụ hẹp có ràng buộc, xem xét từng thay đổi, kiểm chứng mọi thông tin và ghi nhật ký sử dụng. Vì chính sách thay đổi nhanh, việc đọc quy định của đúng hội nghị, đúng năm là bước không thể bỏ qua. Việc dùng AI trong các giai đoạn trước khi viết, như đọc tài liệu, tìm ý tưởng và thực nghiệm, được bàn tiếp ở [Chương 8](../08-ai-cong-su/index.md).

## Bài tập

1. Tìm chính sách về LLM của hội nghị mục tiêu trong năm gần nhất, đối với cả tác giả và reviewer. Viết một đoạn tóm tắt ngắn trả lời ba câu hỏi: cách dùng nào được phép không cần khai báo, cách dùng nào phải khai báo và khai báo ở đâu, và reviewer bị cấm làm gì. Sau đó viết đoạn khai báo việc dùng LLM cho bản thảo hiện tại theo cấu trúc của đoạn mẫu trong bài.
2. Chọn một đoạn khoảng 150 từ trong bản thảo hiện tại và dùng prompt sửa ngữ pháp ở trên. Với từng thay đổi được đề xuất, quyết định chấp nhận hay từ chối và ghi lại lý do. Đối chiếu các lỗi được sửa với bảng lỗi thường gặp trong bài Tiếng Anh học thuật.
3. Dùng prompt reviewer thử cho phần Introduction của bản thảo. So sánh danh sách điểm yếu mà công cụ đưa ra với self-review form đã điền trong bài Quy trình viết & tự review: điểm nào trùng, điểm nào chỉ một bên phát hiện được?
4. Chạy `pdftotext` trên bản PDF gần nhất của nhóm và đọc lướt toàn bộ văn bản trích ra. Ghi lại mọi đoạn văn bản không nhìn thấy được trong bản PDF hiển thị, nếu có, và giải thích nguồn gốc của chúng.
