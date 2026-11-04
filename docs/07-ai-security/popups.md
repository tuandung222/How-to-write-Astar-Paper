# Case study: Attacking Vision-Language Computer Agents via Pop-ups (ACL 2025)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper trình bày thuyết phục một tấn công rất đơn giản, và vì sao sự đơn giản cần được bảo vệ bằng ablation và thí nghiệm đối chứng.
    - Nhận ra kỹ thuật "phát biểu giả định lý tưởng, rồi nới lỏng từng giả định bằng ablation" và cách nó thay thế một mục threat model dài.
    - Phân biệt các metric ASR mức bước, mức nhiệm vụ và tỉ lệ hoàn thành nhiệm vụ, và biết khi nào mỗi metric có thể gây hiểu nhầm.
    - Đọc một paper tấn công theo bốn góc nhìn bảo mật: threat model, metric, khả năng chống phản biện, đạo đức.
    - Hiểu một paper bảo mật agent được viết thế nào để phù hợp với hội nghị NLP.

Case study [Dissecting MM Agents](dissecting-mm-agents.md) phân tích một paper bảo mật agent viết theo phong cách ML: threat model chặt, nhiễu không nhận thấy được, định nghĩa hình thức. Bài này phân tích một paper đi theo hướng gần như ngược lại, dùng một thứ ai cũng nhìn thấy:

**Attacking Vision-Language Computer Agents via Pop-ups**, của Yanzhe Zhang (Georgia Tech), Tao Yu (The University of Hong Kong) và Diyi Yang (Stanford University), công bố tại ACL 2025. Phân tích dựa trên bản arXiv 2411.02391v2 (tháng 5/2025); bản trong kỷ yếu có thể khác ở chi tiết trình bày.

Với người học Việt Nam, paper là một ví dụ hiếm về đóng góp đạt chuẩn hội nghị A* mà không cần tối ưu gradient hay huấn luyện mô hình: tấn công chỉ là ảnh và chữ chèn vào màn hình, môi trường là hai benchmark công khai (OSWorld và VisualWebArena), mô hình được gọi qua API. Sức nặng của paper nằm ở thiết kế không gian tấn công và chuỗi ablation có kỷ luật, những thứ đòi hỏi tư duy nhiều hơn tài nguyên.

## Bối cảnh: computer agent nhìn màn hình như thế nào

Computer agent là agent điều khiển máy tính thay người dùng: nhấp, cuộn, gõ phím. Paper xét hai kiểu agent dùng VLM đa dụng làm lõi. **Screenshot agent** chỉ nhận ảnh chụp màn hình và phải tự xác định tọa độ để nhấp. **Set-of-Mark (SoM) agent** nhận screenshot đã được đánh số các phần tử nhấp được, kèm accessibility tree (a11y tree), một biểu diễn văn bản của giao diện. Hai môi trường thử nghiệm là OSWorld (máy tính để bàn với ứng dụng thật) và VisualWebArena (các trang web tự triển khai).

Đối tượng tấn công là **pop-up**, được paper định nghĩa ngay trong chú thích của abstract là "clickable malicious images on the screen". Pop-up quảng cáo, nút tải xuống giả, đồng hồ đếm ngược khuyến mãi là những mánh khóe vốn nhắm vào con người, và người dùng có kinh nghiệm đã quen bỏ qua chúng. Câu hỏi của paper là agent có học được thói quen đó không.

Việc paper được đăng ở ACL thay vì một hội nghị bảo mật hay ML phản ánh cách nhìn: agent là hệ thống dựa trên mô hình ngôn ngữ, tấn công là nội dung ngôn ngữ đặt trên màn hình, và phân tích dựa nhiều vào chuỗi suy nghĩ (thought) mà agent sinh ra. Mục "Một paper bảo mật ở hội nghị NLP" phía dưới sẽ quay lại điểm này.

## Câu chuyện một dòng

> Người dùng có kinh nghiệm nhận ra và bỏ qua pop-up đáng ngờ, nhưng agent VLM thì không: một pop-up được ghép từ bốn thành phần đơn giản, không cần tối ưu, khiến agent nhấp vào nó với ASR trung bình 86% trên OSWorld và VisualWebArena, và các phòng vệ cơ bản bằng prompt không đủ để ngăn.

Sức mạnh của câu chuyện nằm ở **sự tương phản giữa người và agent**: thứ con người coi là hiển nhiên đáng ngờ lại đánh lừa được mô hình mạnh nhất. Nhưng câu chuyện dựa trên sự đơn giản có một rủi ro: reviewer có thể cho rằng kết quả là hiển nhiên hoặc chỉ là một mẹo. Phần lớn paper vì thế dành để chứng minh sự đơn giản ấy có cấu trúc: tấn công gồm những thành phần nào, thành phần nào thật sự cần, và khi bỏ nội dung đi thì điều gì xảy ra.

## Title và abstract

Title gồm tám từ và nêu đủ ba thứ: hành động (Attacking), đối tượng (Vision-Language Computer Agents) và phương tiện (via Pop-ups). Chữ "Pop-ups" là móc câu: một từ đời thường, ai cũng có hình dung, khiến người đọc tò mò ngay. So với title của Dissecting, vốn gọi tên một phương pháp phân tích, title này gọi tên một hiện tượng. Cả hai cách đều hợp lệ; điều quan trọng là title khớp với loại đóng góp, như bài [Title](../02-viet-tung-phan/title.md) đã phân tích.

Abstract gồm sáu câu và một dòng mã nguồn: bối cảnh (agent VLM làm việc trên máy tính), khoảng trống (rủi ro quanh đầu vào thị giác còn chưa rõ), đóng góp (agent dễ bị tấn công bởi pop-up được thiết kế cẩn thận mà người dùng thường nhận ra), cơ chế (agent nhấp vào pop-up thay vì làm nhiệm vụ), kết quả (ASR trung bình 86%, tỉ lệ hoàn thành nhiệm vụ giảm 47%), và phòng vệ (các kỹ thuật cơ bản không hiệu quả). Hai kỹ thuật nhỏ đáng học: thuật ngữ trung tâm "pop-ups" được định nghĩa bằng chú thích ngay trong abstract, và ASR được giải nghĩa trong ngoặc đơn là "the frequency of the agent clicking the pop-ups". Người đọc không cần mở phần thân để hiểu con số.

Điểm có thể chặt hơn là con số 47%. Tính từ Table 1, SR trung bình giảm từ khoảng 34,7% (không tấn công) xuống khoảng 18,5% (có tấn công), tức 47% là mức giảm **tương đối**, trong khi mức giảm tuyệt đối khoảng 16 điểm phần trăm. Abstract không ghi chữ "relatively", nên người đọc có thể hiểu thành 47 điểm phần trăm. Thêm một chữ, hoặc viết thẳng "from 34.7% to 18.5% on average", sẽ loại bỏ mơ hồ.

## Introduction: bốn đoạn, một giả định bị đảo ngược

**Đoạn 1: rủi ro cụ thể từ thế giới thật.** Đoạn mở đi từ khả năng của agent tới các mánh khóe nhắm vào con người trên web (banner quảng cáo, nút tải xuống giả, đồng hồ đếm ngược) và kết bằng hậu quả cụ thể: cài phần mềm độc hại, bị chuyển hướng tới trang lừa đảo. Hậu quả được gọi tên bằng những từ người đọc ngoài ngành bảo mật cũng hiểu.

**Đoạn 2: threat model neo vào các kịch bản đã biết.** Kẻ tấn công muốn agent nhấp vào pop-up bằng cách thao túng quan sát của agent (screenshot và a11y tree) liên quan tới phần tử bị tấn công. Paper neo threat model vào các kịch bản đã được tài liệu bảo mật ghi nhận: malvertising, nơi kẻ tấn công mua chỗ quảng cáo hoặc dùng cross-site scripting để chèn mã; và email hay tin nhắn lừa đảo chứa ảnh nhấp được. Với reviewer NLP, vốn không phải ai cũng quen tài liệu bảo mật, các trích dẫn này trả lời trước câu hỏi "kẻ tấn công lấy đâu ra quyền chèn pop-up?".

**Đoạn 3: đảo ngược một giả định quen thuộc.** Đây là đoạn quan trọng nhất. Paper chỉ ra rằng các tấn công agent trước hoặc làm mẫu đối kháng trông giống bản gốc (trích dẫn phiên bản đầu của [Dissecting MM Agents](dissecting-mm-agents.md)), hoặc chèn chuỗi vô hình vào trang web (trích dẫn [EIA](eia.md) và AdvWeb). Rồi paper lập luận: việc mẫu đối kháng có bị người nhìn thấy hay không "is not essential" nếu mục tiêu cuối cùng của agent là làm việc với rất ít hoặc không có giám sát của con người; miễn là môi trường vẫn hoạt động và người dùng hoàn thành được nhiệm vụ, agent cũng phải làm được. Lập luận này biến điểm yếu tiềm năng của tấn công (quá lộ liễu) thành chính luận điểm của paper, và định vị tấn công như một công cụ "stress test". Đoạn kết bằng không gian thiết kế bốn thành phần, phân tích ở phần sau.

**Đoạn 4: kết quả kèm giả định mạnh nhất.** Đoạn cuối nêu ASR trên 80% ở OSWorld và trên 60% ở VisualWebArena trong thiết lập mặc định, "where we assume the attacker has complete information", rồi liệt kê ba phát hiện từ ablation: truy vấn người dùng là thiết yếu cho attention hook (thay bằng phương án khác làm ASR giảm tương đối 61%); thông tin khác như vị trí và framework của agent tương đối không cần thiết; và phòng vệ cơ bản giảm ASR không quá 25% tương đối. Paper không có danh sách đóng góp riêng; ba phát hiện đánh số đảm nhận vai trò đó, một lựa chọn hợp lý cho paper tấn công và phân tích. Kỹ thuật đáng học nhất là **đặt giả định mạnh nhất ngay cạnh con số đẹp nhất**, rồi để các phát hiện tiếp theo cho biết con số thay đổi thế nào khi nới lỏng giả định. Reviewer không phải tự hỏi "con số này đòi hỏi kẻ tấn công biết những gì?".

Figure 1 là một teaser với một câu caption: trung bình 92,7% và 73,1% hành động của agent bị tấn công trên OSWorld và VisualWebArena là nhấp vào pop-up. Hai con số này khớp với trung bình các ô ASR của Table 1 theo từng benchmark. Chỉ có chữ "of all actions" là rộng hơn định nghĩa ASR ở mục Metrics, vốn chỉ tính trên các bước có chèn pop-up; caption nên dùng đúng phạm vi đó.

## Related Work: định vị theo hai trục

Related Work gồm hai đoạn, mỗi đoạn một trục. Trục thứ nhất là **biểu diễn đầu vào của agent**: SoM, a11y tree, SeeAct, và xu hướng agent thuần screenshot (chú thích trỏ tới thông báo computer use của Anthropic). Đoạn này kết bằng phạm vi rõ ràng: screenshot agent và SoM agent dùng VLM đa dụng, không xét mô hình huấn luyện riêng trên dữ liệu GUI. Trục thứ hai là **kiểu tấn công**. Tấn công dựa trên gradient của Wu và cộng sự bị phê bình là tốn nhiều bước tối ưu và khó chuyển giao sang VLM thương mại; nhận xét về chuyển giao phù hợp với chính số liệu của bản Dissecting hiện tại, nơi CLIP attack chỉ đạt 19% và 10% trên agent dùng GPT-4o. Tấn công dựa trên văn bản HTML bị phê bình là không thực tế lâu dài vì agent có xu hướng chuyển sang thuần screenshot. Paper cũng phân biệt với nghiên cứu về sự phân tâm bởi phần tử không độc hại: ở đây phần tử là độc hại và nhắm vào agent.

Có một độ căng nhẹ đáng xử lý. Paper phê bình tấn công dựa trên văn bản HTML, nhưng một thành phần của chính tấn công, ALT descriptor, là văn bản trong a11y tree, và ablation cho thấy bỏ nó làm ASR của SoM agent giảm rõ rệt. Paper đã đánh dấu thành phần này là "(if applicable)", nhưng một câu nói rõ rằng kết quả trên screenshot agent ở OSWorld mới là kết quả trực tiếp cho xu hướng thuần screenshot, còn ALT chỉ là yếu tố khuếch đại khi agent đọc a11y tree, sẽ làm lập luận nhất quán hơn. Bài [Related Work](../02-viet-tung-phan/related-work.md) nhắc rằng tiêu chí dùng để phê bình người khác cũng sẽ được reviewer áp lại cho chính paper.

## Thiết kế tấn công: một phương án lý tưởng và các phương án thực tế

Section 3 mở bằng một câu định khung: mục tiêu là khiến agent nhấp vào pop-up, giả định kẻ tấn công có mọi thông tin cần thiết và hành động "ideal". Sau đó, mỗi thành phần được mô tả với một phương án mặc định và các phương án thay thế "using only easy-to-access information and considering potential regulations". Bảng dưới đây tóm tắt cấu trúc đó ở mức cần cho việc phân tích cách viết.

| Thành phần | Mặc định (lý tưởng) | Phương án thực tế hơn | Ràng buộc thực tế được viện dẫn |
|---|---|---|---|
| Attention Hook | Tóm tắt truy vấn của người dùng thành vài từ | Cảnh báo virus giả; đoán ý định người dùng từ nội dung màn hình | Kẻ tấn công khó biết truy vấn thật |
| Instruction | Yêu cầu nhấp vào tọa độ hoặc tag ID của pop-up | "Please click here"; tọa độ hoặc tag ngẫu nhiên | Vị trí có thể ngoài tầm kiểm soát; tag ID do framework sinh |
| Info Banner | Nút "OK" giả | Nhãn "ADVERTISEMENT" | Quy định công khai quảng cáo |
| ALT Descriptor | Lặp lại hook và instruction trong a11y tree | ALT rỗng; thêm tiền tố quảng cáo | Thiết lập và quy định thực tế |

Cấu trúc này là bài học trung tâm của paper. Mỗi phương án thay thế là **một lần nới lỏng threat model**, và mỗi lần nới lỏng được biện minh bằng một ràng buộc thực tế: kẻ tấn công không biết truy vấn, không biết tag ID, có thể bị buộc ghi nhãn quảng cáo (paper trích hướng dẫn công khai quảng cáo của FTC). Vì vậy, chuỗi ablation ở Section 4 không chỉ trả lời "thành phần nào quan trọng" mà còn trả lời "tấn công còn hiệu quả bao nhiêu khi kẻ tấn công yếu hơn". Một bảng ablation đóng hai vai trò, thay cho một mục threat model dài.

Chi tiết cài đặt được đẩy xuống Appendix A: pop-up được đặt vào vùng trống lớn nhất trên màn hình, chèn ở mọi bước còn đủ chỗ, và khi agent nhấp vào pop-up thì hành động bị bỏ qua, không có chuyển hướng. Lựa chọn cuối có hệ quả quan trọng cho metric, bàn ở phần sau.

## Thí nghiệm

### Thiết lập: nhiệm vụ "easy", năm mô hình, ba metric

Trên OSWorld, paper dùng 50 nhiệm vụ dễ, chọn từ những nhiệm vụ đã hoàn thành trong lần chạy đầy đủ không có tấn công, giới hạn 15 bước. Trên VisualWebArena, paper dùng 72 nhiệm vụ dễ do Wu và cộng sự chọn (tức tập con từ paper Dissecting), chỉ thử SoM agent, giới hạn 30 bước. Năm VLM thương mại được dùng, với tên phiên bản cụ thể; paper giải thích vì sao không dùng gpt-4-vision-preview (đã ngừng hỗ trợ). Ba metric là OSR (tỉ lệ hoàn thành khi không có pop-up), SR (khi có tấn công nhưng không chuyển hướng) và ASR (tỉ lệ bước nhấp vào pop-up trong các bước có chèn pop-up). Paper chủ động nói SR "vastly underestimates" tác hại thực, vì chuyển hướng hay tải phần mềm độc hại khó khắc phục hơn nhiều.

Hai chi tiết có thể viết rõ hơn. Câu về chọn nhiệm vụ nói các nhiệm vụ không chắc được hoàn thành khi không tấn công "due to the decoding randomness" ở thiết lập gốc (nhiệt độ 1,0), rồi câu sau nói thí nghiệm dùng nhiệt độ 0; người đọc phải tự ghép hai câu để hiểu vì sao OSR trên tập "easy" có thể chỉ 6% với một số mô hình. Nói rõ nhiệm vụ được chọn từ lần chạy nào, với mô hình nào, sẽ giúp diễn giải OSR. Ngoài ra, với 50 nhiệm vụ, mỗi nhiệm vụ tương ứng 2 điểm phần trăm SR, nên các chênh lệch SR 2–6 điểm giữa mô hình ở OSWorld chỉ là 1–3 nhiệm vụ; báo cáo số nhiệm vụ hoặc khoảng tin cậy sẽ giúp người đọc không đọc quá nhiều vào các khác biệt đó.

### Kết quả chính và một lời giải thích bằng phân phối

Table 1 cho thấy mọi mô hình có ASR trên 60% ở mọi thiết lập; không mô hình nào bền vững vượt trội. Điều đáng chú ý là SR khác hẳn giữa hai benchmark: dưới hoặc bằng 10% ở OSWorld nhưng quanh 45% ở VisualWebArena. Thay vì để người đọc tự đoán, paper giải thích bằng Figure 3, phân phối số bước hành động: hơn một nửa nhiệm vụ VisualWebArena hoàn thành trong năm bước vì trạng thái đầu đã gần đích, nên agent vẫn thành công dù nhấp vào pop-up nhiều lần; còn ở OSWorld, hơn một nửa nhiệm vụ chỉ dừng khi chạm giới hạn 15 bước, và agent bị tấn công dễ mắc kẹt giữa chừng. Một khác biệt có thể bị xem là mâu thuẫn được biến thành hiểu biết về đặc điểm của benchmark, đúng tinh thần bài [Experiments](../02-viet-tung-phan/experiments.md).

### Ablation: thay một thành phần mỗi lần, cộng hai đối chứng

Ablation dùng mô hình tốt nhất trên từng benchmark, và paper nói rõ "We vary only the studied element in each ablation group". Một chú thích còn giải thích vì sao Claude 3.5 Sonnet bản mới không có trong ablation: lúc chạy ablation, nó chưa ra mắt. Những câu nhỏ như vậy chặn trước câu hỏi "sao không dùng mô hình mới nhất?".

Các kết quả chính gồm: thay truy vấn tóm tắt bằng cảnh báo virus làm ASR của SoM agent giảm mạnh nhưng gần như không ảnh hưởng screenshot agent, và ngay cả truy vấn đoán từ màn hình vẫn giữ ASR đáng kể; yêu cầu nhấp vào tọa độ thay vì tag ID chỉ làm ASR giảm nhẹ, nên tọa độ là lựa chọn "universal"; nhãn "ADVERTISEMENT" vẫn để ASR trên 55% ở mọi thiết lập; bỏ ALT descriptor làm ASR của SoM agent giảm rõ, gợi ý tấn công thành công cần tác động lên cả hai phương thức mà agent dựa vào. Mỗi kết quả đi kèm một giả thuyết giải thích, thường được đánh dấu thận trọng bằng "we assume" hoặc "probably".

Hai thí nghiệm đối chứng ở Table 6 là phần nâng độ tin cậy của paper nhiều nhất. **Blank pop-up**, tức pop-up giữ nguyên hình dạng nhưng không có chữ, có ASR từ 0% tới 3,7%. Đối chứng này loại bỏ cách giải thích "agent nhấp vào bất kỳ ô nào mới xuất hiện": chính nội dung mới là thứ đánh lừa agent. **Small pop-up**, kích thước giảm một nửa, chỉ làm ASR giảm nhẹ, trả lời trước phản biện "pop-up thật thường nhỏ hơn". Appendix A bổ sung thêm thí nghiệm trì hoãn tấn công tới sau bước thứ bảy (ASR vẫn 80,4% và 88,1%) và mẫu ALT không giả làm nút bấm (Table 10). Mỗi paper tấn công đều cần ít nhất một **đối chứng "tấn công rỗng"** như blank pop-up, vì nó tách hiệu ứng của nội dung tấn công khỏi hiệu ứng của việc can thiệp vào môi trường.

### Phòng vệ: ba mức prompt và một biến thể tấn công

Phòng vệ đầu tiên thêm câu yêu cầu bỏ qua pop-up vào system prompt, theo cách làm của EIA. Kết quả gần như không giảm ASR, và ở hai thiết lập OSWorld, ASR còn nhích lên (Table 7). Một prompt cụ thể hơn, yêu cầu bỏ qua cả chỉ dẫn nhấp trên màn hình, giảm ASR tương đối 25% nhưng SR vẫn thấp; paper tự lưu ý prompt này có thể khiến agent bỏ qua cả chỉ dẫn hợp lệ, một nhận xét về utility mà reviewer bảo mật đánh giá cao. Phòng vệ mạnh nhất là thêm lời nhắc vào chỉ dẫn ở **từng bước** (Table 8, screenshot agent dùng GPT-4-Turbo): ASR mức bước giảm còn 5,9%, nhưng TASR vẫn 32% và SR chỉ 8% so với OSR 18%.

Ngay sau đó, paper đóng vai kẻ tấn công thích nghi: chỉ cần bỏ cụm "Please click" trước tọa độ, ASR tăng lên 10,4% và TASR lên 44%, "without any search or optimization". Đây là một tấn công thích nghi tối thiểu nhưng đủ để chứng minh phòng vệ bằng prompt mong manh. Đoạn Discussion kể thêm các hướng phòng vệ thực tế hơn (lọc nội dung trong trình duyệt, mô-đun phát hiện chỉ dẫn độc hại) nhưng không thử nghiệm chúng; các trang phòng vệ trong chương như [MELON](melon.md), [StruQ](struq.md) và [VLGuard](vlguard.md) cho thấy phòng vệ trở thành đóng góp riêng của một paper như thế nào.

### Hiểu cơ chế: TASR, chuỗi suy nghĩ, và khi nào tấn công thất bại

Section 5 làm ba việc mà nhiều paper tấn công bỏ qua. Thứ nhất, nó giới thiệu **TASR** (Task-level Attack Success Rate): một nhiệm vụ bị coi là bị tấn công nếu agent nhấp pop-up ít nhất một lần. Figure 4 cho thấy TASR nhìn chung tương đương ASR, nhưng khi ASR nhỏ (dưới 0,2), TASR thường cao gấp nhiều lần, tức một tấn công kém hiệu quả ở mức bước vẫn là rủi ro lớn ở mức nhiệm vụ do xác suất tích lũy qua nhiều bước. Thứ hai, nó phân tích chuỗi suy nghĩ của agent: Figure 5 đặt suy nghĩ của agent có và không có tấn công cạnh nhau, và Table 9 đếm tần suất agent nhắc tới từng thành phần pop-up trong 50 suy nghĩ được gán nhãn thủ công cho mỗi loại agent (screenshot agent nhắc nút "OK" 52%, SoM agent nhắc attention hook 62%). Figure 6 còn chỉ ra trường hợp suy nghĩ đúng nhưng hành động vẫn làm theo pop-up, khiến phòng vệ dựa trên giám sát suy nghĩ khó phát hiện. Thứ ba, Section 5.3 phân loại ba kiểu thất bại của tấn công, chẳng hạn khi truy vấn là tìm thông tin đã có sẵn trên trang, hay khi truy vấn chỉ định công cụ quen thuộc như terminal.

Mục "How Does Our Attack Fail?" đặc biệt đáng học. Một paper tấn công chỉ báo thành công khiến người đọc không biết giới hạn của tấn công nằm ở đâu; phân loại thất bại vừa trung thực vừa gợi ý phòng vệ cho công trình sau. Điểm có thể cải thiện là vị trí của TASR: metric này xuất hiện muộn và chỉ có trong Table 8 và Figure 4, trong khi chính paper cho thấy nó quan trọng nhất ở các thiết lập ASR thấp, tức các thiết lập phòng vệ. Thêm cột TASR vào Table 7 sẽ cho đánh giá phòng vệ một thước đo đúng hơn.

### Những chỗ ngôn từ và con số cần khớp hơn

Paper có nhiều con số và hầu hết khớp với bảng, nhưng có vài chỗ cách diễn đạt khiến người đọc dễ hiểu sai:

| Vị trí | Cách viết trong paper | Điều người đọc cần biết |
|---|---|---|
| Abstract | SR giảm 47% | Mức giảm tương đối (khoảng 34,7% xuống 18,5%) |
| Section 4.2 | ASR giảm "−61.0%" khi dùng cảnh báo virus | Chênh lệch điểm phần trăm (62,1 xuống 1,1); trong khi "61% relatively" ở Introduction là so sánh khác |
| Introduction | Phòng vệ cơ bản giảm ASR "no more than 25% relatively" | Đúng cho trung bình của phòng vệ system prompt; ở từng thiết lập có thể giảm nhiều hơn (93,3 xuống 52,0), và phòng vệ từng bước đưa ASR về 5,9% |
| Section 4.2, Table 6 | Blank pop-up gây "a slight SR decrease" | Ở OSWorld với SoM agent, SR từ 52,0 xuống 38,0, tức 7 trên 50 nhiệm vụ |
| Section 4.2 | Speculated query có ASR "33.3% on average" | Trung bình ba ô của Table 2 trong bản HTML arXiv là khoảng 32%, khớp với con số 61% ở Introduction |

Không chỗ nào làm thay đổi kết luận chính. Nhưng chúng cho thấy hai thói quen nên có. Một là luôn phân biệt **phần trăm tương đối** với **điểm phần trăm** (viết "points" hoặc "pp" cho chênh lệch tuyệt đối). Hai là để kết luận "phòng vệ không hiệu quả" dựa trên metric phù hợp nhất: với phòng vệ từng bước, lập luận mạnh nhất không phải con số 25% mà là TASR 32%, SR 8% và biến thể tấn công đẩy TASR lên 44%. Bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md) gợi ý đối chiếu từng con số trong abstract và Introduction với bảng trước khi nộp.

## Giải phẫu theo góc nhìn bảo mật

### Threat model

Threat model không có mục riêng mà được phân bố ở ba chỗ: đoạn hai của Introduction (mục tiêu và kịch bản thực tế), câu mở của Section 3 (kẻ tấn công có đủ thông tin và hành động lý tưởng), và các phương án thay thế trong Section 3 cùng ablation tương ứng. Kẻ tấn công là black-box hoàn toàn: không truy cập mô hình, không tối ưu, chỉ chèn nội dung vào màn hình. Thiết lập mặc định giả định biết truy vấn người dùng, vị trí pop-up và framework của agent, và paper nói rõ điều đó ngay trong Introduction.

Cách làm "lý tưởng trước, nới lỏng sau" rất hiệu quả cho một tấn công đơn giản, vì nó cho cận trên của rủi ro và độ nhạy với từng giả định trong cùng một chuỗi thí nghiệm. Những điểm nên nói rõ hơn: mục tiêu của kẻ tấn công là một **cú nhấp**, một đại lượng thay thế cho tác hại thật (chuyển hướng, tải phần mềm độc hại) chưa được cài đặt; tần suất chèn pop-up ở mọi bước còn chỗ trống cũng là một giả định lý tưởng, chỉ được nới lỏng một phần bằng thí nghiệm trì hoãn trong phụ lục; và giả định người dùng không giám sát agent là nền tảng của lập luận "nhìn thấy được không quan trọng". Giả định cuối nối trực tiếp với takeaway thứ hai của Conclusion (con người cần giám sát agent cẩn thận): chính vì pop-up nhìn thấy được, giám sát của con người là một phòng vệ tự nhiên. Paper có thể nói thẳng mối nối này để lập luận khép kín hơn.

### Định nghĩa thành công và metric

ASR được định nghĩa ở **mức bước**, SR và OSR ở mức nhiệm vụ, TASR ở mức nhiệm vụ cho tấn công. Định nghĩa rõ ràng, nhưng người đọc cần cẩn thận khi so với các paper khác: ASR ở [Dissecting MM Agents](dissecting-mm-agents.md) là tỉ lệ nhiệm vụ mà mục tiêu đối kháng được hoàn thành, một đại lượng khác hẳn. Tính kín đáo không phải mục tiêu, và đây là lựa chọn có lập luận chứ không phải thiếu sót. Chi phí tấn công gần như bằng không (một lần gọi LLM để tóm tắt truy vấn), một ưu thế paper có thể nhấn mạnh hơn. Về utility, việc không chuyển hướng sau cú nhấp khiến SR là cận trên lạc quan của khả năng hoàn thành nhiệm vụ dưới tấn công, và paper nói đúng điều đó.

### Đánh giá chống lại phản biện

Về **tấn công thích nghi**, paper có một biến thể tối thiểu chống lại phòng vệ từng bước, đủ để cho thấy phòng vệ bằng prompt mong manh, nhưng không thử phòng vệ mạnh hơn như mô-đun phát hiện. Về **chuyển giao**, tấn công không phụ thuộc mô hình theo thiết kế và được thử trên năm mô hình của ba nhà cung cấp. Về **mô hình đóng và mở**, mục Limitations thừa nhận chỉ dùng mô hình đóng, với lý do mô hình mở có hiệu năng thấp trên các benchmark computer agent, và nhận rằng điều này cản trở việc hiểu vì sao tấn công hiệu quả. Về **mức độ thực tế**, mọi thí nghiệm nằm trong benchmark, không có website đang vận hành. Mục Limitations còn nói paper không dùng kỹ thuật jailbreak nâng cao như tối ưu chuỗi trong pop-up hay thuyết phục; câu này ngầm khẳng định kết quả là cận dưới của rủi ro, và mượn cách diễn đạt "lower bound of risks" của Dissecting sẽ làm hàm ý đó rõ hơn.

### Đạo đức và công bố có trách nhiệm

Paper có mục Ethical Considerations một đoạn: nghiên cứu chỉ nhằm mục đích khoa học, có thảo luận phòng vệ, nhấn mạnh giám sát của con người và huấn luyện an toàn cho mô hình dùng trong agent. Trong văn bản đã đọc, không có thông tin về việc thông báo kết quả cho các nhà cung cấp mô hình, và mã được công bố trên GitHub. Paper có sẵn hai lập luận chưa viết ra: thí nghiệm chỉ diễn ra trong môi trường benchmark, và tấn công dựa trên mánh khóe vốn đã phổ biến với người dùng nên việc công bố mã gần như không trao thêm năng lực cho kẻ xấu, trong khi giúp người làm phòng vệ có bộ kiểm thử. Hai câu này, cùng một câu về liên hệ nhà cung cấp, sẽ làm mục Ethics trọn vẹn hơn.

## Một paper bảo mật ở hội nghị NLP

Paper phù hợp với ACL ở ít nhất bốn điểm. Tải trọng tấn công là ngôn ngữ: attention hook là một bản tóm tắt truy vấn do LLM sinh, instruction và info banner là những cụm chữ ngắn. Phương pháp phân tích là phương pháp NLP: gán nhãn thủ công chuỗi suy nghĩ và đếm tần suất (Table 9), so sánh định tính suy nghĩ có và không có tấn công. Tài liệu tham khảo nối với các chủ đề NLP như thuyết phục LLM và instruction hierarchy. Và paper có đủ mục Limitations cùng Ethical Considerations; ARR những năm gần đây yêu cầu mục Limitations và có Responsible NLP Checklist, người viết nên kiểm tra Call for Papers của năm nộp và xem bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md).

So với chuẩn của hội nghị bảo mật, paper nhẹ hơn ở threat model (không có mục riêng), ở công bố có trách nhiệm và ở kiểm định thống kê. So với chuẩn ML, paper không có định nghĩa hình thức. Bù lại, paper mạnh ở thứ cộng đồng NLP coi trọng: phân tích hành vi mô hình bằng chính ngôn ngữ mô hình sinh ra. Bảng dưới đây đặt hai paper agent của chương cạnh nhau:

| Khía cạnh | Dissecting MM Agents (ICLR 2025) | Pop-ups (ACL 2025) |
|---|---|---|
| Kiểu đóng góp | Khung đánh giá và benchmark | Tấn công đơn giản và không gian thiết kế |
| Tính kín đáo | Bắt buộc: chuẩn $L_\infty$, một ảnh | Không cần, có lập luận |
| Truy cập mô hình | Captioner white-box hoặc mô hình thay thế CLIP | Không cần, không tối ưu |
| Môi trường | VisualWebArena | OSWorld và VisualWebArena |
| ASR | Mức nhiệm vụ, mục tiêu đối kháng đạt được | Mức bước (tỉ lệ nhấp), bổ sung TASR |
| Bằng chứng chính | Phân rã theo cạnh, câu hỏi lặp lại | Ablation từng thành phần, phân tích suy nghĩ |
| Limitations, Ethics | Gộp trong Appendix D | Hai mục riêng ở cuối bài |

Hai paper có lập trường ngược nhau về tính kín đáo và đều được nhận ở hội nghị A*. Bài học rút ra: **yêu cầu kín đáo là một claim cần lập luận, không phải mặc định**. Dissecting lập luận cho nó bằng khả năng chối bỏ; Pop-ups lập luận chống lại nó bằng kịch bản agent không có người giám sát. Paper nào cũng phải nói rõ mình đứng ở đâu và vì sao.

## Bài học cho người viết

**Bảo vệ một tấn công đơn giản bằng cấu trúc, không bằng độ phức tạp.** Không gian thiết kế bốn thành phần, ablation thay từng thành phần, và đối chứng blank pop-up biến "một mẹo" thành một hiện tượng có giải phẫu rõ ràng.

**Đặt giả định mạnh nhất cạnh con số đẹp nhất, rồi nới lỏng từng giả định.** Mỗi phương án thay thế gắn với một ràng buộc thực tế (không biết truy vấn, không biết tag ID, quy định quảng cáo), nên bảng ablation cũng là phân tích độ nhạy của threat model.

**Giải thích khác biệt giữa benchmark bằng phân phối.** Figure 3 biến chênh lệch SR giữa OSWorld và VisualWebArena từ một điểm đáng ngờ thành hiểu biết về benchmark.

**Báo cáo cả khi tấn công thất bại, và chọn metric theo câu hỏi.** Phân loại thất bại và TASR cho người đọc biết giới hạn của tấn công và rủi ro tích lũy; đánh giá phòng vệ nên dùng metric mức nhiệm vụ.

**Phân biệt phần trăm tương đối và điểm phần trăm.** Cùng con số 61 xuất hiện với hai nghĩa khác nhau là loại chi tiết reviewer cẩn thận sẽ bắt được.

### Khi viết paper về visual/multimodal prompt injection

Với paper **tấn công**, Pop-ups cho thấy một tấn công không cần tối ưu vẫn đạt chuẩn A* nếu có không gian thiết kế rõ ràng, nới lỏng threat model có hệ thống và đối chứng "tấn công rỗng"; với tấn công dựa trên tối ưu như [CrossInject](crossinject.md) hay [Visual Adversarial Jailbreak](visual-adv-jailbreak.md), câu hỏi tương ứng là thành phần nào của mục tiêu tối ưu thật sự cần và một nhiễu ngẫu nhiên cùng biên độ cho kết quả gì. Với paper **phòng vệ**, bài học là đánh giá bằng metric mức nhiệm vụ (TASR, utility) chứ không chỉ ASR mức bước, và luôn thử ít nhất một biến thể tấn công thích nghi rẻ tiền như việc bỏ cụm "Please click". Về nơi nộp: ở **ACL/EMNLP**, trọng tâm như paper này, tức phân tích ngôn ngữ của tấn công và của suy nghĩ agent, cùng các mục Limitations và Ethics đầy đủ; ở **CVPR/ICCV**, reviewer sẽ quan tâm hơn tới yếu tố thị giác (kích thước, vị trí, độ tương phản của pop-up, so sánh screenshot agent và SoM agent) và hình minh họa chất lượng; ở **NeurIPS/ICML/ICLR**, cần một threat model hình thức hơn, metric định nghĩa chặt, khoảng tin cậy, và tốt nhất là một khung giải thích vì sao tấn công hiệu quả, như cách Dissecting làm với ARE.

### Áp dụng sang các cộng đồng khác

Trong **NLP**, kỹ thuật "phát biểu cấu hình lý tưởng, rồi nới lỏng" áp dụng cho mọi paper đánh giá độ bền vững của LLM, chẳng hạn khi kiểm tra một kiểu prompt injection dưới các mức hiểu biết khác nhau về hệ thống. Trong **Computer Vision**, đối chứng blank pop-up tương ứng với việc thay miếng vá đối kháng bằng miếng vá ngẫu nhiên cùng kích thước, một đối chứng reviewer CV thường đòi. Trong **Machine Learning**, quan sát rằng ASR mức bước nhỏ vẫn cho TASR lớn là một bài học chung về rủi ro tích lũy trong bài toán ra quyết định nhiều bước, và gợi ý báo cáo metric ở đúng mức thời gian mà tác hại xảy ra.

## Tóm tắt

Paper Pop-ups dựng câu chuyện trên sự tương phản giữa người và agent: pop-up mà người dùng có kinh nghiệm bỏ qua lại khiến agent VLM nhấp vào với ASR trung bình 86%. Introduction đảo ngược giả định rằng tấn công phải kín đáo, neo threat model vào malvertising và lừa đảo, và đặt giả định "kẻ tấn công biết mọi thứ" ngay cạnh con số chính. Thiết kế tấn công gồm bốn thành phần, mỗi thành phần có phương án lý tưởng và phương án thực tế, nên chuỗi ablation vừa đo tầm quan trọng của thành phần vừa đo độ nhạy của threat model; đối chứng blank pop-up loại bỏ cách giải thích tầm thường. Phần phòng vệ có một biến thể tấn công thích nghi tối thiểu, và Section 5 bổ sung TASR, phân tích suy nghĩ của agent và phân loại thất bại. Những điểm có thể làm tốt hơn gồm mức giảm 47% không ghi là tương đối, việc dùng "%" cho cả điểm phần trăm, claim "no more than 25%" chưa khớp với phòng vệ từng bước, chữ "slight" cho mức giảm 14 điểm, TASR xuất hiện muộn, và mục Ethics còn thiếu ý về sandbox và thông báo nhà cung cấp. Đặt cạnh [Dissecting MM Agents](dissecting-mm-agents.md) và [EIA](eia.md), paper cho thấy cách viết paper bảo mật agent theo phong cách NLP: tấn công bằng ngôn ngữ, giải thích bằng ngôn ngữ mà mô hình sinh ra.

## Bài tập

1. Viết lại câu kết quả trong abstract của paper sao cho cả hai con số đều rõ là tuyệt đối hay tương đối, và thêm một nửa câu về đối chứng blank pop-up. Câu mới dài thêm bao nhiêu từ, và có đáng không?
2. Với một tấn công hoặc phòng vệ trong dự án hiện tại, lập một bảng theo khuôn Section 3: mỗi thành phần có một phương án lý tưởng, một hoặc hai phương án thực tế hơn, và ràng buộc thực tế biện minh cho mỗi phương án. Bảng này gợi ý những ablation nào còn thiếu?
3. Thiết kế một đối chứng "tấn công rỗng" cho dự án hiện tại (tương tự blank pop-up) và viết hai câu giải thích nó loại bỏ cách giải thích thay thế nào.
4. Chọn một phòng vệ trong bản thảo và báo cáo nó bằng cả metric mức bước lẫn mức nhiệm vụ, cùng utility khi không bị tấn công. Sau đó đề xuất một biến thể tấn công rẻ tiền (không tối ưu) mà kẻ tấn công biết phòng vệ có thể dùng.
5. Viết một đoạn "How does our attack fail?" cho dự án hiện tại, phân loại ít nhất ba kiểu thất bại, mỗi kiểu kèm một ví dụ và một hệ quả cho phòng vệ.
6. Viết mục Ethical Considerations dài khoảng 120 từ cho paper Pop-ups, bổ sung các ý về môi trường thử nghiệm, lý do công bố mã và việc thông báo cho nhà cung cấp mô hình.
