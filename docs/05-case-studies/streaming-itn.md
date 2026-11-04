# Case study: Streaming ITN với Read–Tag–Write (Interspeech 2026)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper long track tám trang của Interspeech dựng câu chuyện bằng cách mượn công cụ của một lĩnh vực lân cận rồi chỉ ra vì sao công cụ ấy chưa vừa.
    - Nhận ra kỹ thuật "giải thích vì sao cách sửa hiển nhiên không dùng được" và cách nó làm cho một thiết kế mới trở nên thuyết phục.
    - Đánh giá cách một bảng kết quả duy nhất, với hệ thống ký hiệu nhất quán, gánh cả vai trò so sánh chính lẫn ablation.
    - Đọc và diễn giải đúng khoảng tin cậy bootstrap, kể cả khi khoảng tin cậy chứa giá trị 0.
    - So sánh hai paper của cùng một nhóm tác giả để thấy thêm bốn trang cho phép bổ sung những loại bằng chứng nào.

Case study [ViP-VL](vip-vl.md) phân tích một regular paper bốn trang. Bài này phân tích paper Interspeech 2026 thứ hai của cùng nhóm tác giả, lần này thuộc **long track** với tám trang nội dung:

**Towards Efficient Simultaneous Inverse Text Normalization with Pretrained Text-to-Text Language Model and Read–Tag–Write Policy**, của Kiet Anh Hoang, Khanh Le, Bao Nguyen, Linh Pham, Dung Vo, Thai Tran, Mai Nguyen, Tri Nguyen và Vu Le (UNEY, Thụy Sĩ). Paper ghi chú hai tác giả đầu đóng góp ngang nhau. Paper được công bố trong kỷ yếu Interspeech 2026 (DOI 10.21437/Interspeech.2026-1060).

Đặt hai paper cạnh nhau là một cơ hội học tập hiếm có. Cùng một nhóm tác giả, cùng hội nghị, cùng năm, cùng ngôn ngữ đích, nhưng một bài có bốn trang và một bài có tám. Những gì bài dài làm thêm cho thấy rõ những loại bằng chứng mà paper ngắn buộc phải hy sinh, và vì sao chúng đáng giá khi có chỗ.

## Bối cảnh: bài toán ITN và yêu cầu streaming

Inverse Text Normalization (ITN, chuẩn hóa ngược văn bản) là bước biến đầu ra dạng nói của hệ thống nhận dạng tiếng nói thành văn bản dạng viết dễ đọc: thêm dấu câu, viết hoa, và chuyển các cụm như số, ngày tháng, tiền tệ về dạng chuẩn. Ví dụ quen thuộc là chuyển "one point two dollars" thành "$1.20". Với các ứng dụng thời gian thực như phụ đề trực tiếp hay ghi biên bản cuộc họp, ITN phải chạy theo kiểu **streaming**: văn bản đã chuẩn hóa cần hiện ra ngay khi người nói vừa nói, chứ không phải chờ hết câu.

Bài toán này nằm ở giao điểm của ba cộng đồng: speech (đầu vào là đầu ra ASR), NLP (bản chất là biến đổi chuỗi văn bản) và hệ thống (yêu cầu về độ trễ, thông lượng). Việc paper được nộp ở Interspeech, nơi reviewer quan tâm tới toàn bộ chuỗi xử lý tiếng nói và tới khả năng triển khai, ảnh hưởng tới cách paper chọn bằng chứng: bên cạnh độ chính xác, paper dành hẳn một mục cho độ trễ theo từng chunk và độ trễ ở phân vị 95.

## Câu chuyện một dòng

> Các hệ thống ITN streaming hiện có đều là lai (neural tagger cộng luật FST viết tay) nên khó mở rộng, còn mô hình seq2seq end-to-end thì không streaming được; nhóm tác giả mượn ý tưởng read–write policy của dịch máy đồng thời, nhưng nhận ra ITN chỉ biến đổi **cục bộ và giữ nguyên trật tự từ**, nên thiết kế policy Read–Tag–Write chỉ gọi decoder khi thực sự cần, đạt độ chính xác gần với mô hình không streaming và độ trễ đủ cho thời gian thực.

Câu chuyện có cấu trúc ba bước rất đáng học: **khoảng trống** (lai thì khó mở rộng, end-to-end thì không streaming), **công cụ mượn từ lĩnh vực lân cận** (read–write policy của Simultaneous Machine Translation, SiMT), và **insight về sự khác biệt** giữa bài toán gốc và bài toán đích (dịch cần sắp xếp lại trật tự từ, ITN thì không). Insight thứ ba là thứ biến việc "áp dụng SiMT cho ITN" từ một bài A + B thành một đóng góp có lý do.

## Title và abstract

### Một title dài, mô tả đủ, nhưng tự hạ thấp đóng góp

Title gồm mười sáu từ và nêu ba thứ: mục tiêu (efficient simultaneous ITN), nền tảng (pretrained text-to-text model) và đóng góp chính (Read–Tag–Write policy). Chữ "Simultaneous" được chọn có chủ ý: nó là thuật ngữ của SiMT, nên ngay từ title, người đọc thuộc cộng đồng dịch máy đã nhận ra cây cầu khái niệm mà paper bắc qua. Tên policy "Read–Tag–Write" cũng được đặt khéo: nó giữ nguyên khung "read–write" quen thuộc của SiMT và chèn vào giữa đúng thành phần mới (Tag), nên người đọc đoán được ý tưởng chỉ từ cái tên.

Điểm có thể cân nhắc là chữ mở đầu "Towards". Như bài [Title](../02-viet-tung-phan/title.md) đã phân tích, "Towards" báo hiệu một bước tiến chưa trọn vẹn. Trong khi đó, Introduction của paper khẳng định đây là mô hình ITN streaming end-to-end đầu tiên, và kết quả đủ mạnh để đứng vững. Một title như "Efficient Simultaneous Inverse Text Normalization via a Read–Tag–Write Policy" vừa ngắn hơn vừa không tự hạ thấp đóng góp. Đây là một lựa chọn phong cách, không phải lỗi, nhưng người viết nên ý thức rằng mỗi chữ trong title đều phát đi một tín hiệu.

### Một abstract gần như đúng khuôn

Abstract gồm sáu câu và bám rất sát khuôn ở bài [Abstract](../02-viet-tung-phan/abstract.md):

| Câu | Chức năng | Nội dung (diễn giải) |
|---|---|---|
| 1 | Bối cảnh, tầm quan trọng | ITN streaming là cần thiết để chuyển đầu ra ASR streaming thành văn bản viết |
| 2 | Khoảng trống thứ nhất | Các phương pháp streaming hiện có là hệ lai với luật FST viết tay, khó mở rộng |
| 3 | Khoảng trống thứ hai | Mô hình end-to-end mở rộng tốt nhưng encoder–decoder chuẩn không streaming được vì global attention |
| 4 | Phương pháp | Một hệ ITN streaming end-to-end dựa trên mô hình text-to-text đã tiền huấn luyện |
| 5 | Các thành phần | Điều chỉnh kiến trúc, chiến lược huấn luyện, policy Read–Tag–Write, tối ưu suy luận |
| 6 | Kết quả | Trên dữ liệu tiếng Việt: chính xác tương đương mô hình không streaming, vượt hệ lai, đáp ứng độ trễ thời gian thực |

Hai câu khoảng trống được viết thành một cặp đối xứng: hệ lai *streaming được nhưng không mở rộng được*, hệ end-to-end *mở rộng được nhưng không streaming được*. Cặp đối xứng này tạo ra một "ô trống" mà người đọc tự thấy cần được lấp, và câu phương pháp lấp đúng ô đó. Đây là một kỹ thuật dẫn dắt rất hiệu quả cho bất kỳ abstract nào.

Hai điểm có thể làm tốt hơn. Câu kết quả không có con số nào, trong khi paper có những con số rất đáng nêu: tăng tốc 3,43 lần nhờ các tối ưu suy luận, độ trễ mỗi chunk giảm còn khoảng 60 ms, WER gấp gần hai lần thấp hơn hệ lai. Ngoài ra, abstract chỉ nói "Vietnamese datasets", trong khi Section 4.6 còn cho thấy phương pháp hoạt động với tiếng Anh và với một backbone khác. Một nửa câu như "and generalizes to English and to a different backbone" sẽ giúp abstract phản ánh đúng phạm vi bằng chứng, và giúp reviewer quốc tế bớt lo rằng đây chỉ là một kết quả riêng cho tiếng Việt.

## Introduction: mượn công cụ, rồi chỉ ra vì sao nó chưa vừa

Introduction gồm sáu đoạn, một hình và một danh sách đóng góp. Có thể đọc nó như một lập luận năm bước.

### Đoạn 1: định nghĩa bằng một ví dụ cụ thể

Đoạn đầu định nghĩa ITN, giải thích vì sao nó cần (ASR huấn luyện trên nhãn dạng nói nên đầu ra khó đọc và làm hại các tác vụ phía sau), rồi đưa ngay một ví dụ: "one point two dollars" thành "$1.20". Câu cuối đoạn chỉ ra đặc điểm khiến bài toán khó: dù dạng nói và dạng viết thường giống nhau, một số cụm có cấu trúc lại cần ngữ cảnh để phân giải sự mơ hồ.

Một ví dụ cụ thể ở đoạn đầu là món quà cho reviewer ngoài chuyên ngành hẹp. Interspeech có nhiều reviewer làm acoustic modeling hay speaker recognition, và một ví dụ dài mười chữ đủ để họ hiểu bài toán mà không cần đọc định nghĩa hình thức. Đây là nguyên tắc "dẫn người đọc qua ví dụ trước khi tổng quát hóa" mà bài giảng nổi tiếng của Simon Peyton Jones nhấn mạnh (xem [Tài nguyên](../phu-luc/tai-nguyen.md)).

### Đoạn 2: hai hướng tiếp cận, mỗi hướng một điểm mạnh và một điểm yếu

Đoạn thứ hai trình bày ITN ngoại tuyến theo hai hướng. Hướng end-to-end (seq2seq) mở rộng tốt và học trực tiếp từ dữ liệu, nhưng có thể sinh ảo giác (hallucination) làm sai nghĩa và tốn chi phí khi xử lý cả câu. Hướng lai (tagger cộng FST) giữ nguyên tốt những phần không cần đổi, nhưng phụ thuộc vào luật FST do chuyên gia viết và vào việc gán nhãn IOB chi tiết cho từng loại ITN.

Cách trình bày "mỗi hướng một điểm mạnh, một điểm yếu, có trích dẫn cho từng điểm" là một mẫu mực của sự công bằng khi phê bình. Paper không nói hướng nào sai; nó nói mỗi hướng hy sinh điều gì. Người đọc vì thế dễ chấp nhận rằng một hướng thứ ba, kết hợp điểm mạnh của cả hai, là cần thiết.

### Đoạn 3: thu hẹp về streaming và phát biểu khoảng trống

Đoạn thứ ba thu hẹp phạm vi: ITN streaming quan trọng cho ứng dụng thời gian thực nhưng còn ít được nghiên cứu. Paper điểm qua các hệ công nghiệp dạng tầng (cascade), công trình tiên phong dùng tagger theo chunk cộng FST, và một công trình tiếp theo thích nghi mô hình ngôn ngữ tiền huấn luyện cho streaming. Công trình tiếp theo này là paper Interspeech 2025 có chung một số tác giả với paper đang xét, và được trích dẫn ở ngôi thứ ba như mọi công trình khác.

Đoạn văn kết thúc bằng hai câu khoảng trống rất sắc: mọi phương pháp streaming hiện có đều là hệ lai nên thừa hưởng hạn chế về khả năng mở rộng; còn mô hình seq2seq thì không streaming được vì cross-attention toàn cục ngăn cản việc xử lý tăng dần. Hai câu này là phiên bản chi tiết của hai câu khoảng trống trong abstract, cho thấy abstract và Introduction được viết nhất quán với nhau.

### Đoạn 4: mượn công cụ từ lĩnh vực lân cận

Thay vì lao ngay vào phương pháp, đoạn thứ tư giới thiệu cách SiMT giải quyết một bài toán tương tự: biến một mô hình dịch ngoại tuyến thành mô hình dịch đồng thời bằng read–write policy, tức quyết định khi nào chờ thêm token nguồn (READ) và khi nào sinh token đích (WRITE). Paper điểm qua các họ policy chính: wait-$k$ với độ trễ cố định, monotonic attention, các policy thích nghi.

Đoạn này làm hai việc cùng lúc. Nó cho người đọc ngoài lĩnh vực SiMT một bộ từ vựng cần thiết để hiểu phần sau. Và nó cho thấy nhóm tác giả đã khảo sát kỹ lĩnh vực lân cận, chặn trước câu hỏi "sao không dùng thẳng một policy SiMT có sẵn?".

### Đoạn 5: insight, vì sao công cụ mượn chưa vừa

Đoạn thứ năm là trái tim của Introduction. Nó mở bằng "However": các policy của SiMT tạo ra tính toán thừa cho ITN. Lý do được giải thích bằng sự khác biệt về **cấu trúc bài toán**: trong dịch máy, việc sắp xếp lại trật tự từ là xung đột chính giữa chất lượng và độ trễ; còn ITN chỉ gồm những biến đổi cục bộ, giữ nguyên trật tự từ. Vì đầu ra ASR phần lớn là giữ nguyên, độ trễ cố định và chi phí sinh của các policy SiMT có thể phản tác dụng.

Đây là cùng một kỹ thuật mà [MAE](mae-ldm.md#mae) dùng khi hỏi điều gì khiến masked autoencoding khác nhau giữa ngôn ngữ và hình ảnh: **chỉ ra một khác biệt cấu trúc giữa bài toán nguồn và bài toán đích, rồi để khác biệt đó quyết định thiết kế**. Một paper chỉ nói "chúng ta áp dụng X từ lĩnh vực A cho lĩnh vực B" dễ bị coi là incremental; một paper nói "X không vừa với B vì B khác A ở điểm Y, nên cần thiết kế Z" có một lý do để tồn tại.

### Đoạn 6 và danh sách đóng góp

Đoạn cuối phát biểu claim mạnh nhất: đây là mô hình ITN streaming end-to-end đầu tiên, theo hiểu biết của nhóm tác giả. Tiếp theo là tóm tắt kết quả, lý do chọn tiếng Việt (ngôn ngữ khó cho ITN vì các sắc thái hình thái và sự vay mượn ngữ âm thường xuyên), và một claim về khả năng tổng quát: vì phương pháp chỉ dựa trên nền tảng text-to-text chuẩn chứ không dựa trên heuristic riêng của ngôn ngữ, nó áp dụng được cho các ngôn ngữ khác và mọi kiến trúc seq2seq. Claim tổng quát này được kiểm chứng ở Section 4.6, nên nó không phải một lời hứa suông.

Danh sách đóng góp gồm ba gạch đầu dòng, mỗi dòng mở bằng một cụm in đậm đóng vai trò tiêu đề: một "công thức" để làm cho mô hình seq2seq tiền huấn luyện streaming được; policy Read–Tag–Write cùng KV caching và chiến lược Copy–Paste; và đánh giá thực nghiệm trên một bộ dữ liệu tiếng Việt năm triệu câu mới xây dựng. Mỗi đóng góp tương ứng với một nhóm mục trong paper, đúng như nguyên tắc ở bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md).

Có ba chi tiết nhỏ đáng rút kinh nghiệm. Thứ nhất, gạch đầu dòng đầu tiên chứa một câu bị tách đôi ("…a novel data augmentation technique. That together enable…"), một lỗi chấm câu mà vòng đọc soát cuối dễ bỏ sót; đây là lý do bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md) khuyên đọc to toàn bộ danh sách đóng góp trước khi nộp. Thứ hai, đóng góp thứ ba dùng các tính từ như "rigorously", "highly efficient"; những chữ này không thêm thông tin và có thể được thay bằng nội dung cụ thể, chẳng hạn "with bootstrap confidence intervals and latency measurements under 100 concurrent streams". Thứ ba, claim "đầu tiên" cần được phát biểu chính xác về phạm vi, vì chính paper có một baseline wait-$k$ end-to-end streaming do nhóm tác giả huấn luyện cho ITN. Một cách viết an toàn hơn là "the first end-to-end streaming ITN method designed around the local, order-preserving nature of ITN", vừa giữ được tính mới vừa không để reviewer tìm ra phản ví dụ.

### Figure 1: một hình tổng quan với caption tự đứng được

Figure 1 được đặt ngay trong Introduction và minh họa toàn bộ framework: encoder streaming với Dynamic Right Context masking, tagger dự đoán nhãn B/I/O, token nhãn O được chuyển thẳng ra đầu ra, và decoder chỉ được gọi khi một span cần chuẩn hóa kết thúc. Caption dài khoảng bốn câu, giải thích đủ luồng dữ liệu và cả ký hiệu $H_{0:m}$ và $\hat{y}_{\text{pre}}$ sẽ xuất hiện trong phương trình sau đó. Một reviewer chỉ đọc title, abstract và caption của Figure 1 đã nắm được gần như toàn bộ ý tưởng. Đây là cách dùng Figure 1 theo kiểu "tổng quan phương pháp" đã bàn ở bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md), phù hợp với một paper mà đóng góp chính là một quy trình xử lý.

## Phương pháp: chỉ ra cách sửa hiển nhiên, rồi giải thích vì sao nó không dùng được

Mục phương pháp dài và chia nhỏ: lựa chọn mô hình nền, kiến trúc (encoder streaming với tagger, decoder và hàm mục tiêu), policy Read–Tag–Write, các tối ưu suy luận, phương pháp tăng cường dữ liệu dựa trên tiền tố, và quy trình xây dựng dữ liệu. Thay vì đi qua từng tiểu mục, phần này rút ra năm kỹ thuật viết nổi bật.

### Biện minh cho lựa chọn mô hình nền

Section 2.1 giải thích vì sao dùng mô hình text-to-text (BART, T5) thay vì encoder-only, rồi vì sao chọn EnViT5 cho tiếng Việt: kiến trúc T5-base, tokenizer được tối ưu cho tiếng Việt, kết quả tốt trên benchmark dịch Việt–Anh PhoMT. Với tám trang, mức chi tiết này là hợp lý, vì reviewer thường hỏi "sao không dùng mô hình X?". Nếu phải rút gọn, đây là phần có thể cắt đầu tiên, vì những thông tin như số layer và kích thước ẩn có thể chuyển vào một bảng hoặc một chú thích.

### So sánh trực tiếp với hệ lai ngay trong mô tả thiết kế

Khi giới thiệu tagger, paper nói rõ: tagger chỉ dùng ba lớp B/I/O, khác với các hệ lai cần nhãn chi tiết cho từng loại ITN để kích hoạt luật FST tương ứng, và không gian nhãn nhỏ hơn giúp phát hiện span bền vững hơn. Câu so sánh này nằm đúng ở chỗ người đọc cần nó, giống như cách ViP-VL đặt câu "In contrast to NEST" ngay trong mục phương pháp. Lợi ích của việc đặt so sánh tại chỗ là người đọc không phải nhớ lại một mục Related Work ở xa để hiểu điểm khác biệt.

### Định nghĩa policy theo từng pha, có xử lý trường hợp biên

Policy Read–Tag–Write được trình bày thành ba pha có đánh số, mỗi pha có định nghĩa hình thức. Pha Tag nêu chính xác khi nào một span được coi là hoàn tất (khi tag kế tiếp là B hoặc O, hoặc gặp ranh giới câu). Pha Write tách hai trường hợp: token nhãn O được chuyển thẳng ra đầu ra, còn span B–I hoàn tất thì kích hoạt decoder, với cross-attention bị giới hạn trong $H_{0:m}$ để phần nhìn trước không ảnh hưởng tới biến đổi hiện tại.

Chi tiết đáng học nhất là một câu về trường hợp biên: để tránh vòng lặp giải mã vô hạn khi mô hình không sinh ra `<EOS>`, hệ thống cắt cứng ở tối đa 64 token cho mỗi span. Một câu như vậy cho reviewer thấy nhóm tác giả đã nghĩ tới các tình huống hỏng trong triển khai thật. Với một hội nghị quan tâm tới khả năng triển khai như Interspeech, những chi tiết kiểu này tăng đáng kể độ tin cậy.

### Tự gọi tên điểm yếu của chính thiết kế

Khi mô tả decoder KV caching cho phiên bản "fully streaming", paper chủ động thừa nhận rằng nó tạo ra một độ lệch giữa huấn luyện và suy luận: khi huấn luyện, decoder thấy toàn bộ tiền tố đích; khi suy luận, trạng thái được cập nhật tăng dần mà không chú ý lại các token cũ dưới trạng thái encoder mới. Ngay sau đó, paper hứa rằng thực nghiệm cho thấy độ lệch này chỉ gây dao động nhỏ, và Section 4.2 giữ lời hứa bằng một so sánh trực tiếp giữa hai biến thể.

Đây là kỹ thuật mà case study [BERT](bert.md) cũng có: thừa nhận tác dụng phụ của chính thiết kế, rồi đo nó. Một reviewer cẩn thận chắc chắn sẽ phát hiện độ lệch này; việc paper nói trước và đo trước biến một câu hỏi tiềm năng trong review thành một điểm cộng về tính trung thực.

### "Vì sao cách sửa hiển nhiên không dùng được"

Section 2.5 là đoạn văn có cấu trúc lập luận tốt nhất paper. Nó đi theo bốn bước:

1. **Vấn đề:** policy cần decoder sinh `<EOS>` để kết thúc từng span cục bộ, nhưng khi huấn luyện chuẩn, `<EOS>` chỉ được dự đoán ở ranh giới toàn câu, nên khi suy luận streaming, mô hình không biết dừng.
2. **Cách sửa hiển nhiên và vì sao nó hỏng:** chỉ cần thêm `<EOS>` vào cuối mỗi chunk nguồn khi suy luận? Không được, vì làm vậy phá vỡ KV cache tăng dần qua self- và cross-attention, và làm phân phối đầu vào lệch thêm.
3. **Giải pháp:** Prefix-based Training Augmentation, với xác suất $p_{\text{trunc}}$, cắt ngắn ví dụ huấn luyện theo cách có căn chỉnh: bỏ `<EOS>` phía nguồn nhưng kết thúc tiền tố đích bằng `<EOS>`.
4. **Hiệu quả mong đợi:** mô hình học rằng mọi span hoàn tất, kể cả giữa câu, phải kích hoạt việc dừng chỉ dựa trên trạng thái encoder một phần.

Bước thứ hai là thứ làm cho lập luận thuyết phục. Reviewer đọc phần vấn đề sẽ lập tức nghĩ tới cách sửa đơn giản nhất. Nếu paper không nói gì về nó, reviewer sẽ hỏi "sao không làm cách đơn giản hơn?". Bằng cách tự nêu và tự bác bỏ cách sửa hiển nhiên, paper khiến giải pháp được đề xuất trở nên cần thiết thay vì tùy ý. Algorithm 1 sau đó trình bày giải pháp trong mười dòng pseudo-code, đủ ngắn để người đọc tái hiện ngay.

### Mô tả dữ liệu như một đóng góp

Section 2.6 mô tả quy trình tạo năm triệu cặp câu từ một kho tin tức tiếng Việt lớn: dùng biểu thức chính quy để tìm vùng cần chuẩn hóa ở dạng viết, sinh dạng nói bằng luật, chọn ngẫu nhiên một trong nhiều cách đọc hợp lệ để phản ánh sự đa dạng của lời nói, kiểm tra thủ công mẫu đại diện của từng lớp, và xây một từ điển ngữ âm khoảng 125.000 thuật ngữ nước ngoài và ngoài từ vựng có kiểm chứng thủ công. Mỗi bước đều kèm lý do (chẳng hạn chọn ngẫu nhiên cách đọc "để phản ánh sự đa dạng tự nhiên của lời nói"). Như bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md) đã phân tích, mô tả dữ liệu cẩn thận là điều reviewer kỳ vọng ở mọi paper tạo ra tài nguyên mới, dù paper đó nộp ở cộng đồng nào.

## Thí nghiệm: một bảng gánh nhiều claim

### Một hệ thống ký hiệu làm xương sống cho cả mục thí nghiệm

Mục kết quả bắt đầu bằng việc chia mọi cấu hình thành ba nhóm với ký hiệu nhất quán: nhóm $B$ là các baseline không streaming ($B_0$ huấn luyện từ đầu, $B_1$ dùng trọng số tiền huấn luyện, $B_2$ thêm hàm mất mát tagging), nhóm $H$ là hệ lai streaming ($H_1$ không nhìn trước, $H_2$ có nhìn trước), và nhóm $S$ là các biến thể đề xuất ($S_C$ encoder causal suy luận không streaming, $S_0$ huấn luyện từ đầu, $S_1$ và $S_2$ dùng policy RTW không và có nhìn trước, $S_3$ và $S_4$ là phiên bản "fully streaming" với decoder KV caching).

Nhờ hệ thống ký hiệu này, **một bảng duy nhất** (Table 1) vừa là bảng so sánh chính với các baseline, vừa là bảng ablation cho bốn câu hỏi: tiền huấn luyện có giúp không ($B_0$ so với $B_1$, $S_0$ so với $S_1$), hàm mất mát tagging có giúp không ($B_1$ so với $B_2$), nhìn trước có giúp không ($S_1$ so với $S_2$), và decoder caching có làm hại không ($S_2$ so với $S_4$). Bảng còn được chia thành hai thiết lập đánh giá, có và không có dấu câu cùng viết hoa, để tách độ khó của hai loại biến đổi. Văn bản phía sau chỉ việc gọi tên các cặp so sánh. Đây là một kỹ thuật tổ chức có thể áp dụng cho bất kỳ paper nào có nhiều biến thể: **đặt tên các cấu hình theo một lược đồ có nghĩa, rồi để bảng tự kể câu chuyện ablation**.

### So sánh công bằng và đánh giá baseline cả trong thiết lập gốc của nó

Paper huấn luyện lại hệ lai của công trình trước trên cùng bộ dữ liệu, huấn luyện một mô hình wait-$k$ multi-path làm baseline end-to-end streaming, và huấn luyện AdapITN trên cùng dữ liệu nhưng bỏ cơ chế biasing để so sánh công bằng. Mỗi lựa chọn đều được nói rõ, đúng với checklist so sánh công bằng ở bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md).

Chi tiết đáng học nhất liên quan tới AdapITN. Trong thiết lập có dấu câu và viết hoa, baseline này đạt I-WER rất cao (156,88%), một con số dễ khiến người đọc nghi ngờ rằng baseline bị cài đặt sai. Paper xử lý điều này theo hai bước. Trước hết, nó giải thích cơ chế: decoder của AdapITN chỉ xử lý từng span riêng lẻ, không có ngữ cảnh câu xung quanh, nên gần như không thể khôi phục dấu câu và viết hoa. Sau đó, nó so sánh AdapITN trong thiết lập không có dấu câu và viết hoa, "khớp với cách đánh giá gốc" của baseline đó, nơi AdapITN hoạt động bình thường nhưng vẫn kém baseline mạnh nhất của paper. **Đánh giá một baseline cả trong thiết lập mà nó được thiết kế cho** là cách tốt nhất để chứng minh rằng kết quả kém của nó không phải do cài đặt sai.

### Giải thích cơ chế thất bại của baseline

Khi mô hình đề xuất vượt wait-$k$, paper không dừng ở con số mà giải thích vì sao wait-$k$ thất bại: việc buộc phải sinh sau đúng $k$ token khiến đầu vào nguồn có thể vẫn đi sau đầu ra đích, vì một token đích có thể tương ứng với nhiều token nguồn. Lời giải thích này nối thẳng về insight ở Introduction (ITN có cấu trúc khác dịch máy), biến một kết quả thực nghiệm thành bằng chứng cho insight chứ không chỉ cho phương pháp.

### Khoảng tin cậy bootstrap cho mọi so sánh

Paper dùng bootstrap với 10.000 lần lặp để tính khoảng tin cậy 95% và trình bày mọi so sánh tương đối theo dạng giá trị trung bình kèm khoảng tin cậy, ví dụ $S_2$ vượt wait-$k$ với hệ số $1{,}67\,[1{,}60;\ 1{,}75]$ lần. Đây là mức độ chặt chẽ thống kê mà bài [Experiments](../02-viet-tung-phan/experiments.md) khuyến nghị nhưng hiếm thấy trong các paper speech. Nhờ khoảng tin cậy, người đọc biết rằng khi paper viết "significantly outperforming", chữ "significantly" có cơ sở: khoảng tin cậy của hệ số nằm hoàn toàn trên 1. So với ViP-VL, nơi chữ "significantly" được dùng mà không có kiểm định, đây là một khác biệt rõ rệt trong cùng một nhóm tác giả, và một phần của khác biệt đó đến từ việc bài dài có chỗ cho phương pháp thống kê.

Tuy vậy, khoảng tin cậy chỉ có giá trị khi được **diễn giải đúng**. Ở đoạn về chi phí của streaming, paper viết rằng $S_2$ "improves performance by $13{,}51\,[-38{,}67;\ 50{,}62]\%$" so với $B_1$ trong thiết lập không có dấu câu. Khoảng tin cậy này chứa 0 và rất rộng, tức là dữ liệu không cho phép kết luận có cải thiện hay không. Cách viết chính xác hơn là "performs on par with $B_1$ (the difference is not statistically significant)". Tương tự, các mức chênh như $0{,}08\,[-0{,}03;\ 0{,}18]\%$ nên được mô tả là "không có khác biệt có ý nghĩa thống kê" thay vì "tăng nhẹ". Bài học: báo cáo khoảng tin cậy là bước một; dùng ngôn từ khớp với khoảng tin cậy là bước hai, và cả hai đều cần thiết.

### Định lượng cái giá phải trả, không chỉ cái được

Một đoạn riêng trong mục kết quả trả lời câu hỏi "streaming tốn bao nhiêu độ chính xác?". Paper so sánh $S_2$ với baseline không streaming mạnh nhất $B_2$ và nêu mức tăng WER tương đối khoảng 15% và 23% ở hai thiết lập, kèm khoảng tin cậy, rồi gọi tên nguyên nhân: sự đánh đổi cố hữu khi không có ngữ cảnh tương lai để phân giải các phụ thuộc toàn cục. Nhiều paper né tránh câu hỏi này bằng cách chỉ so với baseline yếu hơn. Việc tự định lượng cái giá của chính phương pháp, so với baseline mạnh nhất, là dấu hiệu của một paper tự tin vào đóng góp của nó.

### Độ trễ: ablation cộng dồn và phân vị 95

Section 4.2 đánh giá độ trễ theo bốn cấu hình cộng dồn: baseline không tối ưu, thêm Copy–Paste, thêm encoder caching, thêm decoder caching. Đây chính là kiểu ablation cộng dồn đã học ở bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), áp dụng cho chi phí thay vì độ chính xác. Các con số được nêu cụ thể: encoder caching giảm độ trễ encoder từ 54 ms xuống 10 ms; cả chuỗi tối ưu giảm tổng độ trễ mỗi chunk từ 206 ms xuống 60 ms, tức tăng tốc 3,43 lần.

Hai chi tiết làm phần này đặc biệt thuyết phục. Thứ nhất, paper không chỉ báo cáo độ trễ trung bình mà cả **phân vị 95** (165,5 ms so với 249,0 ms), tức là trường hợp xấu khi câu có nhiều phần cần chuẩn hóa. Với hệ thống thời gian thực, độ trễ đuôi quan trọng không kém độ trễ trung bình. Thứ hai, paper **dịch con số sang ngôn ngữ của người triển khai**: một chunk năm token tương ứng khoảng 500 ms âm thanh, nên ngay cả ở phân vị 95, hệ thống vẫn xử lý nhanh hơn thời gian thực, với batch 100 luồng đồng thời. Một reviewer không làm hệ thống cũng hiểu ngay ý nghĩa thực tế của kết quả.

### Phân tích độ nhạy cho siêu tham số mới

Section 4.5 vẽ WER theo xác suất cắt ngắn $p_{\text{trunc}}$ cho cả suy luận ngoại tuyến và streaming, trên tập validation. Hình cho thấy ba điều: không có tăng cường ($p_{\text{trunc}} = 0$), WER streaming vượt quá 100% vì mô hình không biết dừng span; chỉ cần một lượng tăng cường nhỏ là hệ thống ổn định ngay; và cắt ngắn hoàn toàn ($p_{\text{trunc}} = 1$) lại có hại vì mất giám sát trên câu đầy đủ. Giá trị 0,8 được chọn ở điểm cân bằng.

Thí nghiệm này làm ba việc cùng lúc: chứng minh thành phần mới là **cần thiết** (không có nó thì hệ thống hỏng), cho thấy phương pháp **không mỏng manh** (một dải giá trị rộng đều tốt), và **biện minh cho giá trị được chọn** (chọn trên validation, không phải trên test). Đây là mẫu mực cho phân tích độ nhạy của bất kỳ siêu tham số nào do chính paper đưa ra.

### Kiểm chứng claim tổng quát

Section 4.6 thử phương pháp với một backbone khác cho tiếng Việt (BartPho, tiền huấn luyện theo kiểu denoising) và với T5 cho tiếng Anh trên bộ dữ liệu Google TN chuẩn. Kết quả cho thấy khoảng cách giữa streaming và không streaming được thu hẹp nhất quán ở mọi cấu hình. Đây là bằng chứng cho claim ở Introduction rằng phương pháp không phụ thuộc vào ngôn ngữ hay kiến trúc. Cũng như ViP-VL dùng LibriSpeech, paper này dùng một bộ dữ liệu tiếng Anh chuẩn để thuyết phục reviewer quốc tế. Câu kết dùng động từ "suggest", một mức khẳng định phù hợp khi bằng chứng gồm hai backbone và một ngôn ngữ bổ sung.

### Đánh giá với đầu vào thực tế hơn, và cách gọi tên nó

Để mô phỏng triển khai thật, paper tạo một tập test bổ sung: đưa văn bản test qua một hệ thống TTS để sinh tiếng nói, rồi qua mô hình ASR ChunkFormer để lấy bản chép có lỗi (WER khoảng 14%), theo giao thức của một công trình trước. Đây là một thiết kế thông minh, vì nó đưa lỗi ASR thật vào đầu vào của ITN mà không cần thu âm và gán nhãn lại.

Điểm cần cân nhắc là cách gọi tên. Paper gọi đây là "real-world evaluation", trong khi tiếng nói là tiếng nói tổng hợp, không phải tiếng nói tự nhiên với tiếng ồn, giọng địa phương và lời nói không trôi chảy. Một reviewer kỹ tính có thể chỉ ra điều này. Tên gọi như "ASR-in-the-loop evaluation with synthesized speech" mô tả chính xác hơn, và một câu trong phần Limitations thừa nhận khoảng cách giữa tiếng nói tổng hợp và tiếng nói thật sẽ chặn trước phản biện. Bài học chung: **tên của một thiết lập đánh giá là một claim**, và nó cần khớp với những gì thiết lập đó thực sự kiểm tra.

## Limitations, kết luận và các mục cuối

Khác với ViP-VL, paper này có một mục **Limitations and Future Work** riêng, và mục này được viết rất tốt. Mỗi hạn chế đều cụ thể, có nguyên nhân và có hướng giải quyết. Hạn chế đầu tiên còn kèm một ví dụ lỗi thật từ phân tích định tính: tagger phát hiện đúng một span ngữ âm, nhưng decoder sinh ra "Marid" thay vì "Madrid" vì sự mơ hồ ngữ âm trong đầu ra ASR. Một ví dụ như vậy thuyết phục hơn nhiều so với câu chung chung "performance on rare entities can be improved". Hai hạn chế còn lại (độ trễ cảm nhận khi span dài, và kích thước 275 triệu tham số với thiết bị biên) đều gắn với mối quan tâm triển khai, nhất quán với tinh thần của toàn paper.

Phần kết luận tóm tắt các thành phần và kết quả. Hai mục cuối là lời cảm ơn nhà tài trợ tính toán và mục khai báo việc dùng AI tạo sinh, viết cụ thể hơn ở ViP-VL: nêu rõ AI chỉ dùng cho biên tập ngôn ngữ, không dùng để tạo nội dung khoa học, thiết kế thí nghiệm, kết quả, phân tích hay kết luận, và mọi tác giả chịu trách nhiệm về toàn bộ nội dung.

## So sánh hai paper của cùng nhóm tác giả

| Khía cạnh | ViP-VL (regular, 4 trang) | Streaming ITN (long, 8 trang) |
|---|---|---|
| Kiểu đóng góp | Mô hình tiền huấn luyện cho một ngôn ngữ | Phương pháp và quy trình cho một bài toán ứng dụng |
| Related Work | Gộp vào Introduction | Gộp vào Introduction, nhưng dài hơn và có cả lĩnh vực lân cận (SiMT) |
| Insight | Đồng bộ masking với subsampling | ITN biến đổi cục bộ, giữ trật tự từ, khác dịch máy |
| Kiểm chứng ngoài tiếng Việt | LibriSpeech, cố định dữ liệu để tách đóng góp kiến trúc | Google TN tiếng Anh và backbone BartPho, kiểm chứng tính tổng quát |
| Thống kê | Độ lệch chuẩn ở một số tác vụ | Bootstrap 95% CI cho mọi so sánh |
| Ablation | Lồng trong bảng kiểm chứng LibriSpeech | Một bảng với lược đồ ký hiệu $B/H/S$, cộng ablation độ trễ cộng dồn |
| Phân tích độ nhạy | Không có | Đường cong theo $p_{\text{trunc}}$ |
| Hiệu quả tính toán | Giảm 16 lần chi phí self-attention | Độ trễ trung bình và phân vị 95, 100 luồng đồng thời |
| Limitations | Không có | Mục riêng, có ví dụ lỗi cụ thể |

Bảng so sánh cho thấy những gì bốn trang bổ sung mang lại không phải là thêm kết quả SOTA, mà là thêm **các loại bằng chứng làm tăng độ tin cậy**: khoảng tin cậy, phân tích độ nhạy, đánh giá tính tổng quát, độ trễ đuôi, và một mục Limitations trung thực. Khi người học phải chọn giữa regular track và long track, hoặc phải cắt một paper dài xuống, bảng này gợi ý nên giữ lại cái gì và hy sinh cái gì.

Hai paper cũng có những điểm chung phản ánh "phong cách" của nhóm tác giả: định vị gắn với yêu cầu triển khai thực tế, luôn có một kiểm chứng trên dữ liệu tiếng Anh chuẩn bên cạnh kết quả tiếng Việt, và xây dựng nhất quán trên các công trình trước của chính nhóm (ChunkFormer, Dynamic Right Context masking) với trích dẫn ở ngôi thứ ba. Một chuỗi paper liên kết với nhau như vậy giúp mỗi paper mới đứng trên một nền móng đã được cộng đồng chấp nhận, và là một chiến lược nghiên cứu đáng cân nhắc cho các nhóm nhỏ.

## Bài học cho người viết

**Mượn công cụ từ lĩnh vực lân cận, nhưng luôn nói vì sao nó chưa vừa.** Read–write policy của SiMT là xuất phát điểm, nhưng đóng góp của paper nằm ở việc nhận ra ITN khác dịch máy ở chỗ nào. Mỗi khi chuyển một kỹ thuật sang lĩnh vực mới, người viết nên viết được một đoạn "However, …" giải thích sự khác biệt cấu trúc và để nó quyết định thiết kế.

**Tự nêu cách sửa hiển nhiên rồi giải thích vì sao nó hỏng.** Đoạn về việc thêm `<EOS>` vào chunk nguồn chặn trước câu hỏi mà reviewer chắc chắn sẽ đặt ra. Với mỗi thành phần mới, hãy tự hỏi: cách đơn giản nhất để giải quyết vấn đề này là gì, và vì sao không dùng nó?

**Đặt tên cấu hình theo lược đồ, để một bảng kể nhiều câu chuyện.** Lược đồ $B/H/S$ biến Table 1 thành bảng so sánh chính và bảng ablation cùng lúc, tiết kiệm chỗ và giúp văn bản ngắn gọn.

**Báo cáo khoảng tin cậy, và dùng ngôn từ khớp với nó.** Khoảng tin cậy nằm trọn một phía cho phép viết "significantly"; khoảng tin cậy chứa 0 đòi hỏi viết "on par". Cả hai câu đều trung thực, và cả hai đều cần thiết.

**Định lượng cả cái giá, và dịch con số sang ngôn ngữ của người dùng.** Mức tăng WER so với baseline mạnh nhất, độ trễ phân vị 95, "500 ms âm thanh", "100 luồng đồng thời" đều là những câu trả lời trước cho câu hỏi "có dùng được trong thực tế không?".

**Tên của một thiết lập đánh giá là một claim.** "Real-world" hứa nhiều hơn những gì tiếng nói tổng hợp có thể kiểm tra. Hãy gọi tên đúng những gì thiết lập kiểm tra, và nói rõ khoảng cách còn lại trong Limitations.

### Áp dụng sang các cộng đồng khác

Trong **NLP**, paper này gần như có thể nộp ACL hay EMNLP với rất ít thay đổi về thí nghiệm: bootstrap CI, dữ liệu mới có quy trình xây dựng rõ ràng, phân tích lỗi bằng ví dụ và một mục Limitations cụ thể đều là những gì ARR kỳ vọng; điều cần bổ sung chủ yếu là phần mô tả chất lượng dữ liệu tự sinh và Responsible NLP Checklist. Trong **Machine Learning**, kỹ thuật "chỉ ra khác biệt cấu trúc giữa bài toán nguồn và bài toán đích" là cốt lõi của rất nhiều paper về transfer hay adaptation, và phân tích độ nhạy theo $p_{\text{trunc}}$ là kiểu bằng chứng reviewer NeurIPS hay ICLR đánh giá cao. Trong **Computer Vision**, lược đồ đặt tên cấu hình và ablation độ trễ cộng dồn chuyển thẳng sang các paper về mô hình hiệu quả hay xử lý video thời gian thực, nơi độ trễ đuôi cũng quan trọng không kém độ trễ trung bình.

## Tóm tắt

Paper streaming ITN dựng câu chuyện bằng một cặp khoảng trống đối xứng (hệ lai streaming được nhưng khó mở rộng; hệ end-to-end mở rộng được nhưng không streaming được), mượn read–write policy từ dịch máy đồng thời, rồi chỉ ra rằng ITN biến đổi cục bộ và giữ nguyên trật tự từ nên cần một policy riêng là Read–Tag–Write. Phần phương pháp nổi bật ở việc so sánh tại chỗ với hệ lai, xử lý trường hợp biên, tự gọi tên độ lệch huấn luyện–suy luận của chính thiết kế, và đặc biệt là kỹ thuật nêu rồi bác bỏ cách sửa hiển nhiên trước khi giới thiệu phương pháp tăng cường dữ liệu dựa trên tiền tố. Phần thí nghiệm dùng một lược đồ ký hiệu để một bảng gánh cả so sánh chính lẫn ablation, đánh giá baseline cả trong thiết lập gốc của nó, báo cáo khoảng tin cậy bootstrap cho mọi so sánh, định lượng cái giá của streaming, đo độ trễ đuôi và phân tích độ nhạy của siêu tham số mới. Những điểm có thể làm tốt hơn, gồm title tự hạ thấp đóng góp bằng "Towards", abstract thiếu con số và thiếu kết quả tiếng Anh, claim "đầu tiên" cần phát biểu chính xác hơn, cách diễn giải các khoảng tin cậy chứa 0, và tên gọi "real-world" cho một thiết lập dùng tiếng nói tổng hợp, đều là những bài học về sự khớp nhau giữa ngôn từ và bằng chứng. Đặt cạnh ViP-VL, paper cho thấy bốn trang bổ sung được dùng để tăng độ tin cậy chứ không phải để thêm kết quả.

## Bài tập

1. Viết lại câu kết quả trong abstract của paper, thêm hai con số từ phần văn bản và một nửa câu về kết quả tiếng Anh. Câu mới có làm abstract dài quá mức không? Nếu có, câu nào trong abstract có thể rút gọn?
2. Với một thành phần mới trong dự án hiện tại, viết một đoạn bốn bước theo khuôn của Section 2.5: vấn đề, cách sửa hiển nhiên và vì sao nó hỏng, giải pháp, hiệu quả mong đợi.
3. Thiết kế một lược đồ đặt tên cho các cấu hình trong dự án hiện tại, theo kiểu $B/H/S$, sao cho một bảng duy nhất trả lời được ít nhất ba câu hỏi ablation. Liệt kê các cặp so sánh mà bảng đó cho phép.
4. Lấy ba so sánh tương đối trong bản thảo hiện tại, tính khoảng tin cậy bootstrap 95% cho chúng, rồi viết lại câu mô tả mỗi so sánh sao cho ngôn từ khớp với khoảng tin cậy (dùng "significantly" chỉ khi khoảng tin cậy không chứa mức "không khác biệt").
5. Liệt kê các thiết lập đánh giá trong dự án hiện tại cùng tên gọi của chúng. Với mỗi tên, viết một câu mô tả chính xác những gì thiết lập thực sự kiểm tra, và một câu Limitations nêu khoảng cách giữa thiết lập đó và điều kiện triển khai thật.
6. Giả sử phải rút paper này về bốn trang như ViP-VL. Dựa trên bảng so sánh hai paper, chọn những phần cần giữ và những phần cần chuyển sang phụ lục hoặc bỏ, và giải thích lựa chọn.
