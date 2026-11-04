# Case study: EDWARD-NMT (Findings of EMNLP 2026)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper phương pháp về Mixture-of-Experts dựng câu chuyện quanh một khẩu hiệu ("train once, deploy anywhere") và nối từng hạn chế của phương pháp cũ với đúng một thành phần mới.
    - Nhận ra cách viết Related Work theo kiểu "mỗi đoạn một trục, mỗi đoạn kết bằng một câu định vị".
    - Đánh giá một phụ lục được thiết kế cho khả năng tái lập: không gian tìm kiếm siêu tham số, tiêu chí chọn checkpoint, chữ ký sacreBLEU và hướng dẫn tái lập từng bước.
    - Tự kiểm tra sự nhất quán của các con số và mô tả giữa Introduction, phần kết quả và phụ lục.
    - Đóng vai reviewer ARR để đặt những câu hỏi mà một paper phương pháp tổng quát nộp vào hội nghị NLP thường gặp.

Hai case study [ViP-VL](vip-vl.md) và [Streaming ITN](streaming-itn.md) phân tích paper Interspeech. Bài này chuyển sang cộng đồng NLP với **EDWARD-NMT: Elastic Dimensions With Adaptive Routing and Dual-consistency for Neural Machine Translation**, một long paper được nhận vào **Findings of EMNLP 2026**. Phân tích dựa trên bản nộp ẩn danh qua ACL Rolling Review (bản có đánh số dòng, tám trang nội dung cùng mục Limitations và một phụ lục dài); bản camera-ready có thể khác ở một số chi tiết. Vì bản nộp ẩn danh, bài này không nêu tên tác giả.

Paper này đáng học vì ba lý do. Thứ nhất, nó là một paper **phương pháp tổng quát** (Mixture-of-Experts co giãn được) được đặt vào một **bài toán NLP cụ thể** (dịch máy), một tình huống rất phổ biến và đặt ra câu hỏi về cách định vị đã bàn ở bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md). Thứ hai, phụ lục của nó là một mẫu tốt về khả năng tái lập. Thứ ba, vì paper được nhận vào Findings chứ không phải main conference, nó là chất liệu tốt để luyện kỹ năng đọc paper với con mắt của reviewer ARR: những điểm mạnh nào giúp paper được nhận, và những câu hỏi nào có thể đã khiến nó chưa vào được main.

## Bối cảnh: MoE cho dịch máy và bài toán triển khai

Mixture-of-Experts (MoE) thưa là một cách mở rộng mô hình: mỗi token chỉ được xử lý bởi một vài "expert" (thường là các khối feed-forward) do một bộ định tuyến (router) chọn, nên số tham số tăng mà chi phí tính toán cho mỗi token gần như không đổi. Trong dịch máy, MoE còn hữu ích vì dữ liệu huấn luyện trộn nhiều ngôn ngữ và miền, và các expert có thể chuyên môn hóa cho từng kiểu dữ liệu.

Vấn đề mà paper chọn giải quyết nằm ở **khâu triển khai**, không phải khâu huấn luyện. Một mô hình MoE chuẩn phải giữ toàn bộ expert trong bộ nhớ, và số expert được kích hoạt cho mỗi token bị cố định từ lúc huấn luyện bởi cơ chế chọn top-$k$. Trên thiết bị có tài nguyên hạn chế như điện thoại hay máy tính cá nhân, hai đặc điểm này khiến MoE khó dùng: không thể "cắt nhỏ" mô hình cho vừa bộ nhớ, và không thể tiết kiệm tính toán cho những token dễ. Paper hướng tới một mô hình duy nhất có thể co lại hoặc giãn ra tùy thiết bị mà không cần huấn luyện lại.

## Câu chuyện một dòng

> MoE mạnh cho dịch máy nhưng khó triển khai vì bộ nhớ cố định (phải giữ mọi expert) và tính toán cố định (top-$k$ cứng); EDWARD-NMT giải quyết từng vấn đề bằng một thành phần riêng: expert co giãn kiểu Matryoshka cho bộ nhớ, router sigmoid với ngưỡng học được cho tính toán, và một hàm mất mát dual-consistency để các mạng con bị cắt nhỏ vẫn dịch tốt, nhờ đó **huấn luyện một lần, triển khai ở mọi nơi**.

Câu chuyện có một cấu trúc rất rõ: **hai hạn chế, ba thành phần, một khẩu hiệu**. Hai hạn chế đầu tiên được giải quyết trực tiếp bởi hai thành phần đầu; thành phần thứ ba giải quyết vấn đề mới nảy sinh khi dùng thành phần thứ nhất (cắt nhỏ mạng thì chất lượng giảm). Khẩu hiệu "train once, deploy anywhere" gói cả câu chuyện vào bốn chữ mà người đọc nhớ được ngay. Khác với ViP-VL hay Streaming ITN, paper này không đặt trọng tâm vào một quan sát bất ngờ, mà vào một **mục tiêu thiết kế** rõ ràng và cách các thành phần cùng phục vụ mục tiêu đó.

## Title và abstract

### Một tên gọi mà mỗi chữ cái là một đóng góp

Tên "EDWARD" là một từ viết tắt ngược: **E**lastic **D**imensions **W**ith **A**daptive **R**outing and **D**ual-consistency. Mỗi cụm trong tên tương ứng với một thành phần của phương pháp, nên title đồng thời là bản tóm tắt cấu trúc paper. Một cái tên mang dáng dấp tên người cũng dễ nhớ và dễ nhắc lại trong thảo luận ("mô hình EDWARD") hơn nhiều so với một chuỗi ký tự viết tắt thuần túy. So với ViP-VL, nơi chữ "VL" dễ gây nhầm với vision-language, EDWARD-NMT ít rủi ro nhầm lẫn hơn, và hậu tố "-NMT" định vị ngay bài toán.

Điều title chưa nói được là **lợi ích**. Người đọc biết paper có ba thành phần, nhưng phải đọc tới abstract mới biết chúng phục vụ mục tiêu "train once, deploy anywhere". Một title nêu lợi ích, chẳng hạn kết hợp tên mô hình với một cụm như "a single MoE checkpoint for every deployment budget", sẽ thu hút những người làm triển khai, đúng nhóm người đọc mà paper muốn hướng tới. Đây là sự đánh đổi quen thuộc giữa title mô tả *cách làm* và title mô tả *điều đạt được*, đã bàn ở bài [Title](../02-viet-tung-phan/title.md).

### Abstract: ánh xạ một–một giữa hạn chế và thành phần

Abstract đi theo trình tự: MoE là mô hình mạnh cho dịch máy; hai hạn chế thực tế (toàn bộ expert phải nằm trong bộ nhớ; ngân sách tính toán mỗi token bị cố định bởi top-$k$); giới thiệu EDWARD-NMT với khẩu hiệu "train once, deploy anywhere"; ba thành phần đánh số (i), (ii), (iii); bốn benchmark; và kết quả: mô hình đầy đủ ngang hoặc hơn các MoE mạnh, các mạng con được trích từ một checkpoint duy nhất vượt các Transformer dense có kích thước tương đương mà không cần huấn luyện lại.

Điểm mạnh nhất của abstract là **ánh xạ một–một**: thành phần (i) giải quyết bộ nhớ, thành phần (ii) giải quyết tính toán, thành phần (iii) giữ chất lượng cho mạng con. Người đọc không phải tự đoán vì sao mỗi thành phần tồn tại. Việc đánh số (i), (ii), (iii) ngay trong abstract cũng giúp reviewer dùng lại cách đánh số đó khi viết review, một chi tiết nhỏ nhưng làm cho cuộc thảo luận về paper dễ dàng hơn.

Điểm còn thiếu, như ở hai case study speech, là **con số**. Introduction có các con số rất đáng đưa lên (mô hình đầy đủ vượt Transformer Big từ +0,50 tới +1,48 BLEU; biến thể nhỏ nhất nhanh hơn 2,2 lần và nhỏ hơn 4 lần so với biến thể lớn nhất), nhưng abstract chỉ dùng các cụm định tính như "matches or exceeds" và "consistently outperform". Ngoài ra, chữ "novel" trong abstract không thêm thông tin, vì người đọc đánh giá tính mới qua nội dung chứ không qua tính từ.

## Introduction ngắn, mỗi đoạn một chức năng

Introduction chỉ dài khoảng một cột rưỡi, ngắn hơn đáng kể so với nhiều paper ACL, nhưng mỗi đoạn làm đúng một việc.

**Đoạn một** đặt bối cảnh: sự đa dạng về ngôn ngữ và miền là thách thức cơ bản của dịch máy, và MoE giải quyết nó bằng cách định tuyến token tới các expert chuyên biệt.

**Đoạn hai** nêu khoảng trống bằng cấu trúc liệt kê "First… Second…". Hạn chế thứ nhất là bộ nhớ: toàn bộ expert phải nằm trong bộ nhớ, và dù các adapter nhẹ giảm được chi phí, chúng vẫn tạo ra những mô hình tĩnh, gắn với một phần cứng cụ thể. Hạn chế thứ hai là tính toán: top-$k$ áp cùng một ngân sách cho mọi token bất kể độ khó, và dù Neural Architecture Search có thể thiết kế mạng con không đồng nhất, nó đòi hỏi các giai đoạn ngoại tuyến phức tạp. Mỗi hạn chế đi kèm một giải pháp hiện có và lý do giải pháp đó chưa đủ, theo mẫu "while X reduces…, it still…". Đoạn văn kết bằng câu khoảng trống: người làm dịch máy thiếu một framework thống nhất để điều chỉnh cả bộ nhớ lẫn tính toán ngay khi suy luận.

**Đoạn ba** giới thiệu phương pháp theo đúng mẫu "To address (i)…, to address (ii)…" đã học ở bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md): "To overcome memory bottlenecks, we apply…", "To eliminate rigid compute constraints, we replace…", "Finally, to ensure aggressively truncated sub-networks maintain translation quality…, we introduce…". Ba câu mở đầu bằng ba động từ mục đích, nối từng thành phần với đúng hạn chế mà nó giải quyết. Người đọc lướt chỉ cần đọc phần đầu của ba câu này là nắm được kiến trúc lập luận.

**Đoạn bốn** nêu kết quả có số liệu trên bốn benchmark, rồi tới **danh sách đóng góp** gồm ba gạch đầu dòng: kiến trúc, hàm mục tiêu dual-consistency, và bằng chứng rằng một lần huấn luyện cho ra cả một họ mạng con chất lượng cao.

Có một điểm về sự nhất quán của con số đáng chú ý. Introduction nói biến thể nhỏ nhất vượt Transformer Base từ **+0,49 tới +4,01 BLEU**, trong khi Section 5.1 nói biến thể này vượt Transformer Base từ **+0,69 tới +3,18 BLEU** trên PhoMT và WMT-14. Khoảng +0,49 có thể truy ra từ benchmark multi-domain, nhưng người đọc khó truy ngược con số 4,01 về một ô cụ thể trong các bảng chính. Có thể con số này đến từ một cấu hình trong phụ lục; dù vậy, một con số trong Introduction mà reviewer không tìm lại được trong bảng là một điểm trừ về độ tin cậy, dù nhỏ. Bài học chung: **mọi con số trong abstract và Introduction nên truy ngược được về đúng một ô trong bảng**, và một bước tự kiểm tra trước khi nộp là đánh dấu từng con số với nguồn của nó.

## Related Work: mỗi đoạn một trục, mỗi đoạn một câu định vị

Khác với hai paper speech, EDWARD-NMT có một mục Related Work riêng, đặt ngay sau Introduction. Mục này gồm bốn đoạn có tiêu đề in đậm, mỗi đoạn tương ứng với một trục của phương pháp: MoE tĩnh và co giãn; định tuyến động và tính toán thích nghi; self-distillation và consistency regularization; shared expert. Bốn trục này khớp gần như hoàn toàn với các thành phần trong mục phương pháp, nên Related Work đóng vai trò như một bản đồ cho thấy mỗi thành phần đứng ở đâu so với tài liệu hiện có.

Kỹ thuật đáng học nhất là **câu định vị cuối mỗi đoạn**. Đoạn về MoE co giãn kết bằng "In contrast, EDWARD-NMT embeds Matryoshka-style elasticity directly into sparse experts". Đoạn về định tuyến kết bằng "EDWARD-NMT is concurrent but distinct: … uniquely enables dynamic adjustment of both memory and compute footprints". Đoạn về consistency kết bằng "We extend this via a novel dual-consistency objective tailored for elastic MoEs". Đoạn về shared expert kết bằng "EDWARD-NMT extends this by dynamically conditioning the shared expert on the translation direction". Đây chính là cấu trúc mà bài [Related Work](../02-viet-tung-phan/related-work.md) khuyến nghị: không có đoạn nào chỉ liệt kê công trình mà không nói paper khác chúng ở đâu.

Paper cũng xử lý **concurrent work** một cách chủ động: MoSE, một công trình đăng arXiv năm 2026 có ý tưởng expert "slimmable", được nêu tên và phân biệt rõ (MoSE vẫn dùng top-$k$ cứng và cần huấn luyện lúc test để thay đổi độ rộng). Tuy vậy, cụm "concurrent but distinct" ở đoạn về định tuyến được dùng cho một nhóm công trình đã công bố từ 2024 đến 2025 ở các hội nghị lớn. Như bài [Tìm & thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) đã nói, chữ "concurrent" thường được dành cho những công trình xuất hiện rất gần deadline; dùng nó cho các công trình đã công bố trước đó một năm có thể khiến reviewer cho rằng paper đang né việc so sánh. Cách viết an toàn hơn là "Closest to our work are…; unlike them, …", kèm một so sánh thực nghiệm nếu có thể.

## Phương pháp: từ phiên bản chuẩn tới từng sửa đổi

### Preliminaries kết thúc bằng hai hạn chế

Mục phương pháp bắt đầu bằng MoE chuẩn: router, top-$k$, expert dạng SwiGLU. Tiểu mục này kết thúc bằng một câu nối thẳng về Introduction: công thức chuẩn có hai hạn chế then chốt, top-$k$ cố định ngân sách tính toán mỗi token, và bộ nhớ tăng tuyến tính theo số expert nhân kích thước bên trong bất kể bao nhiêu expert thực sự được dùng. Đây là cách dùng phần preliminaries hiệu quả nhất: không chỉ để định nghĩa ký hiệu, mà để **đặt hai hạn chế dưới dạng hình thức**, từ đó mỗi tiểu mục sau là một lời giải cho một hạn chế đã được phát biểu chính xác.

### Một sửa đổi nhỏ, có lý do, có công thức và có tính chất

Tiểu mục expert co giãn chứa một đoạn văn ngắn rất đáng học về **variance preservation**. Paper nêu vấn đề: khi cắt chiều bên trong của expert, độ lớn của đầu ra sau phép chiếu xuống bị giảm, làm mất ổn định phép cộng residual và thống kê của RMSNorm. Paper đưa ra lời giải: nhân với hệ số $\psi(D_k) = \sqrt{M / \max(D_k, 1)}$, chỉ phụ thuộc vào độ rộng được chọn. Và paper nêu tính chất mà lời giải bảo đảm: kỳ vọng bình phương chuẩn của đầu ra không phụ thuộc vào $D_k$.

Ba câu, ba bước: **vấn đề, lời giải, tính chất được bảo đảm**. Lời giải không chỉ được nói là "giúp ổn định", mà được gắn với một tính chất có thể kiểm chứng. Và phụ lục có một ablation riêng cho đúng thành phần này, cho thấy bỏ hệ số $\psi$ làm giảm chất lượng ở mọi kích thước, rõ nhất ở mạng nhỏ nhất. Một chi tiết kỹ thuật nhỏ được trình bày đầy đủ như vậy cho reviewer thấy nhóm tác giả hiểu cơ chế, không chỉ thử nghiệm cho tới khi chạy được.

### Một hàm mất mát, hai cách hiểu

Tiểu mục dual-consistency trình bày hàm mất mát là phân kỳ KL đối xứng giữa dự đoán của hai độ rộng được lấy mẫu ngẫu nhiên, với stop-gradient ở mỗi phía. Sau đó paper đưa ra một nhận xét giúp người đọc đặt phương pháp vào bản đồ kiến thức sẵn có: khi hai độ rộng khác nhau, hàm mất mát hoạt động như self-distillation tại chỗ (mạng lớn hướng dẫn mạng nhỏ, mạng nhỏ điều chuẩn mạng lớn); khi hai độ rộng trùng nhau, nó trở thành consistency regularization giống R-Drop.

Cách trình bày "một công thức **bao gồm** hai phương pháp đã biết như trường hợp đặc biệt" rất hiệu quả với reviewer. Nó cho thấy phương pháp mới không phải một thủ thuật tùy ý, mà là một sự tổng quát hóa có nguyên tắc. Đồng thời nó chuẩn bị sẵn cho bảng ablation so sánh với R-Drop và với distillation một chiều: người đọc đã hiểu vì sao đó là hai baseline tự nhiên.

### Thành phần riêng cho dịch máy

Shared expert nhận biết hướng dịch (Direction-Aware Shared Expert, DASE) là thành phần **gắn với dịch máy** rõ nhất: một expert dense chung, được điều biến theo hướng dịch (chẳng hạn Anh→Việt hay Việt→Anh) bằng FiLM. Về mặt định vị, thành phần này có vai trò quan trọng hơn kích thước của nó: trong một paper mà ba thành phần chính (expert co giãn, router sigmoid, dual-consistency) có thể áp dụng cho mọi mô hình Transformer, DASE là phần cho thấy phương pháp được thiết kế cho dịch máy chứ không chỉ được thử trên dịch máy. Bảng ablation về shared expert, với mức cải thiện khoảng +1,0 BLEU ở biến thể lớn nhất so với không có shared expert, củng cố vai trò này.

### Figure 1: một hình bốn phần

Figure 1 chia thành bốn vùng: khối Transformer tổng thể có lớp MoE động (trái), router sigmoid với ngưỡng phụ thuộc hướng dịch (giữa), cấu trúc lồng nhau của một Matryoshka expert (trên phải), và DASE với điều biến FiLM (dưới phải). Caption giải thích lần lượt từng vùng bằng các nhãn vị trí "Left", "Center", "Top Right", "Bottom Right". Cách tổ chức này cho phép một hình duy nhất minh họa cả bốn thành phần mà không bị rối, và người đọc có thể quay lại đúng vùng cần xem khi đọc từng tiểu mục.

## Thí nghiệm: một checkpoint, một họ mô hình

### Bảng biến thể làm rõ claim trung tâm

Trước khi vào kết quả, Section 4.2 có một bảng nhỏ liệt kê bốn biến thể S, M, L, XL tương ứng bốn độ rộng, cùng tổng số tham số và số tham số kích hoạt. Câu quan trọng nhất đi kèm là: mọi biến thể dùng chung một bộ tham số, chỉ khác nhau ở lát cắt khi suy luận. Câu này được nhắc lại ở phần đánh giá ("all four EDWARD-NMT variants are extracted and evaluated from the same checkpoint"), trong caption của các bảng và trong phụ lục. Việc lặp lại một claim trung tâm ở mọi chỗ người đọc có thể nghi ngờ là một kỹ thuật đúng: reviewer không thể hiểu nhầm rằng bốn biến thể được huấn luyện riêng.

### Kết quả chính được đọc theo kích thước

Phần kết quả chính được tổ chức theo benchmark (PhoMT và WMT-14, multi-domain, OPUS-16), và trong mỗi benchmark, theo kích thước: biến thể lớn nhất so với các mô hình lớn, các biến thể nhỏ so với các mô hình nhỏ. Cách so sánh "cùng hạng cân" này công bằng và dễ theo dõi. Paper cũng trung thực ở những chỗ không thắng: trên PhoMT chiều Việt→Anh, mBART (lớn hơn nhiều) vẫn cao hơn, và paper viết rằng mô hình "remaining highly competitive on Vi→En despite using 3× fewer active parameters" thay vì bỏ qua. Một chú thích dưới bảng cũng nói rõ rằng trên WMT-14, mBART được dùng là một mô hình many-to-many tiền huấn luyện, một thông tin cần thiết để người đọc tự đánh giá độ mạnh của baseline đó.

Đoạn "Quality vs. Active Parameters" chuyển kết quả sang ngôn ngữ của **đường biên Pareto**: chất lượng theo số tham số kích hoạt, kèm thông lượng sinh (tokens per second). Đây là cách đóng khung phù hợp nhất cho một paper về hiệu quả, vì claim của paper không phải "tốt nhất tuyệt đối" mà là "tốt nhất ở mỗi mức chi phí".

### Một chỗ cần trung thực hơn về hiệu quả

Phụ lục B.1 đo độ trễ và thông lượng thực tế trên CPU của một máy tính cá nhân với checkpoint đã biên dịch, một thiết lập rất sát với mục tiêu triển khai trên thiết bị biên. Văn bản nhấn mạnh rằng biến thể nhỏ nhất đạt 104,9 tokens/giây, vượt rõ Transformer Big (48,0 tokens/giây). Nhưng cùng bảng đó cho thấy Transformer Base, một mô hình có kích thước tương đương với biến thể nhỏ nhất, đạt 117,7 tokens/giây và độ trễ thấp hơn (608,9 ms so với 699,0 ms), dù biến thể nhỏ nhất có ít FLOPs hơn. Nói cách khác, ở hạng cân nhỏ nhất, mô hình đề xuất **chính xác hơn nhưng chậm hơn** baseline dense, có lẽ do chi phí của bộ định tuyến.

Văn bản so sánh với Transformer Big thay vì với baseline cùng hạng cân, nên điểm này dễ bị bỏ qua khi đọc lướt, nhưng một reviewer cẩn thận nhìn bảng sẽ thấy ngay. Cách viết trung thực và cũng thuyết phục hơn là nói thẳng sự đánh đổi: "EDWARD-NMT-S is about 11% slower than Transformer Base on CPU due to routing overhead, while improving BLEU by …". Như case study [Streaming ITN](streaming-itn.md) đã cho thấy, tự định lượng cái giá của phương pháp so với baseline phù hợp nhất làm tăng chứ không giảm độ tin cậy. Bài học: **khi so sánh hiệu quả, hãy so với baseline cùng hạng cân trước, rồi mới so với baseline lớn hơn**.

### Ablation: cộng dồn, thay thế và thừa nhận đánh đổi

Phần ablation dùng cả ba kiểu đã học ở bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), và báo cáo kết quả cho **cả bốn mạng con** trong mỗi cấu hình, đúng với claim rằng phương pháp phục vụ cả họ mô hình chứ không chỉ mô hình lớn nhất.

Bảng **cộng dồn** đi từ MoE top-2 chuẩn, thêm lần lượt expert co giãn, router sigmoid và dual-consistency. Bảng này có một chi tiết trung thực đáng học: cấu hình đầy đủ cho biến thể lớn nhất *thấp hơn một chút* so với cấu hình chỉ có expert co giãn (40,75 so với 40,96 BLEU trên benchmark multi-domain). Paper không giấu điều này mà giải thích nó như một sự đánh đổi có chủ ý: router thích nghi giảm số expert kích hoạt từ 2 xuống khoảng 1,38, và dual-consistency giữ cho các mạng con nhỏ không bị sụp đổ chất lượng. Cách xử lý đúng hướng; điều có thể làm tốt hơn là định lượng phía "được" của sự đánh đổi bằng một con số cụ thể (chẳng hạn mức giảm chi phí tính toán của phần expert) thay vì các tính từ như "highly favorable".

Bảng **thay thế** cho dual-consistency so sánh với các lựa chọn hợp lý khác: không có hàm mất mát, R-Drop, KL một chiều, KL một chiều neo vào mô hình lớn nhất. Đây chính là câu trả lời trước cho câu hỏi "sao không dùng R-Drop hay distillation thông thường?". Paper cũng trung thực rằng KL một chiều neo vào mô hình lớn nhất cho biến thể lớn nhất tốt hơn, nhưng làm các biến thể giữa kém đi, và đó là lý do chọn phiên bản đối xứng.

Phân tích **độ co giãn** (trong phụ lục) cho thấy các độ rộng chưa từng được huấn luyện, như 1536 hay 768, vẫn nội suy tốt, trong khi độ rộng 128, nhỏ hơn mức nhỏ nhất đã huấn luyện, làm chất lượng sụp đổ. Kết quả âm này được nêu ngay trong phần kết quả chính và được nhắc lại trong mục Limitations. Đây là một chuỗi nhất quán đáng học: **một kết quả âm được phát hiện trong thí nghiệm trở thành một giới hạn được thừa nhận**, thay vì bị giấu đi.

### Về ý nghĩa thống kê và metric

Nhiều khác biệt trong các bảng ablation nằm trong khoảng 0,2 đến 0,4 BLEU, và paper không báo cáo nhiều lần chạy hay kiểm định thống kê. Với dịch máy, sacreBLEU hỗ trợ sẵn paired bootstrap resampling, và bài [Experiments](../02-viet-tung-phan/experiments.md) đã giải thích vì sao các khác biệt nhỏ như vậy cần được kiểm định trước khi được gọi là cải thiện. Đây cũng là một mục mà Responsible NLP Checklist hỏi trực tiếp (thống kê mô tả qua nhiều lần chạy). Ngoài ra, paper chỉ dùng BLEU; những năm gần đây, nhiều reviewer dịch máy kỳ vọng thêm ít nhất một metric khác như chrF hoặc một metric dựa trên mô hình như COMET, vì BLEU được biết là tương quan chưa tốt với đánh giá của con người ở mức khác biệt nhỏ.

Ở chiều ngược lại, paper làm rất tốt một việc mà nhiều paper dịch máy bỏ qua: báo cáo **chữ ký đầy đủ của sacreBLEU** trong phụ lục, theo đúng khuyến nghị của Post (2018), và giải thích vì sao benchmark multi-domain dùng BLEU đã tách từ (để khớp với quy ước của các công trình trước). Người đọc biết chính xác con số được tính thế nào và có thể so sánh với các paper khác.

## Phụ lục như một công cụ tái lập

Phụ lục của EDWARD-NMT dài gần bằng phần thân, và được tổ chức thành hai nhóm: chi tiết thí nghiệm (A) và kết quả bổ sung (B). Một số chi tiết trong phụ lục là mẫu mực cho bất kỳ paper nào:

- **Bảng siêu tham số kèm không gian tìm kiếm.** Mỗi siêu tham số có giá trị cuối và tập giá trị đã thử, những giá trị cố định được giải thích là do ràng buộc phần cứng hoặc theo thông lệ. Reviewer biết nhóm tác giả đã tune bao nhiêu, và Responsible NLP Checklist hỏi đúng điều này.
- **Tiêu chí chọn checkpoint rõ ràng.** BLEU validation được tính mỗi 1.000 bước, checkpoint tốt nhất theo trung bình hai chiều dịch được chọn, và tiêu chí này được áp dụng riêng cho từng độ rộng. Một chi tiết như vậy chặn trước nghi ngờ về việc chọn checkpoint trên tập test.
- **Phần cứng và thời gian huấn luyện** cho từng benchmark.
- **Hướng dẫn tái lập từng bước** (A.7), gồm bảy bước từ chuẩn bị dữ liệu, cài đặt kiến trúc và router, tới trích mạng con và đánh giá, với lời khẳng định rằng mọi tài nguyên đều công khai.

Mục hướng dẫn tái lập từng bước hiếm thấy trong các paper NLP và rất được reviewer quan tâm tới khả năng tái lập đánh giá cao. Tuy nhiên, chính mục này cũng minh họa vì sao phụ lục cần được đọc soát kỹ như phần thân: bước thứ hai nói thay thế "every other feed-forward layer" (cứ cách một lớp) bằng khối MoE, trong khi mục kiến trúc trong cùng phụ lục và mục phương pháp nói thay thế "every feed-forward layer" (mọi lớp). Hai mô tả này cho ra hai mô hình khác nhau. Một người muốn tái lập sẽ không biết nên tin mô tả nào. Bài học: **mỗi chi tiết cấu hình chỉ nên được phát biểu ở một chỗ**, và các chỗ khác nên tham chiếu tới đó, để không có hai phiên bản mâu thuẫn.

## Limitations và văn phong

Mục Limitations, bắt buộc với mọi bài nộp qua ARR, gồm ba đoạn có tiêu đề: phạm vi kiến trúc (chỉ đánh giá encoder–decoder, chưa thử decoder-only hay LLM), các chiều co giãn (mới co giãn ở feed-forward, chưa ở độ sâu hay chiều ẩn), và nén cực mạnh (chất lượng sụp đổ khi xuống dưới độ rộng nhỏ nhất đã huấn luyện). Cả ba đều cụ thể, đều có hướng giải quyết, và giới hạn thứ ba nối thẳng về kết quả với độ rộng 128. Đây là một mục Limitations đạt yêu cầu theo tinh thần của bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md).

Về văn phong, paper sử dụng khá dày các trạng từ và tính từ nhấn mạnh: "seamlessly", "highly", "drastically", "uniquely", "intelligently", "paramount", "empowering". Mỗi chữ riêng lẻ không sai, nhưng khi xuất hiện dày đặc, chúng tạo cảm giác quảng cáo và khiến reviewer đọc các claim với thái độ dè chừng hơn. Như bài [Tiếng Anh học thuật](../03-ky-thuat/van-phong.md) đã phân tích, thay một tính từ bằng một con số gần như luôn làm câu văn mạnh hơn: "seamlessly extracted" có thể thay bằng "extracted by slicing, without any fine-tuning"; "drastically reduces the active compute budget" có thể thay bằng "reduces active routed experts from 2 to 1.38 per token". Bài [Dùng AI hỗ trợ (đúng luật)](../03-ky-thuat/ai-tools.md) cũng lưu ý rằng các công cụ sửa văn phong tự động thường làm tăng mật độ những chữ kiểu này, nên cần một lượt đọc soát riêng để lọc bớt.

## Đọc với con mắt reviewer ARR

Không thể biết lý do cụ thể khiến một paper được nhận vào Findings thay vì main conference; quyết định đó phụ thuộc vào các review, meta-review và sự cân nhắc của hội nghị trong năm đó. Nhưng có thể dùng paper này để luyện việc đọc như một reviewer ARR, người chấm cả *soundness* (độ chắc chắn) lẫn *excitement* (mức độ hấp dẫn). Dưới đây là những câu hỏi mà một reviewer có thể đặt ra, kèm cách paper có thể trả lời trước.

| Câu hỏi reviewer có thể đặt | Paper đã trả lời đến đâu | Cách trả lời trước |
|---|---|---|
| Phương pháp có gì riêng cho dịch máy, hay là một phương pháp MoE tổng quát? | DASE là phần riêng cho dịch máy; Limitations thừa nhận chưa thử ngoài encoder–decoder | Một đoạn trong Introduction giải thích vì sao dịch máy là bối cảnh phù hợp nhất, hoặc một thí nghiệm nhỏ trên một tác vụ khác |
| Các khác biệt 0,2–0,4 BLEU có ý nghĩa thống kê không? | Không có kiểm định hay nhiều lần chạy | Paired bootstrap bằng sacreBLEU, hoặc báo cáo trung bình và độ lệch chuẩn qua vài seed |
| Kết quả có giữ nguyên với metric khác BLEU không? | Chỉ dùng BLEU | Thêm chrF hoặc COMET cho các bảng chính |
| Biến thể nhỏ có thực sự hiệu quả hơn Transformer Base khi chạy thật không? | Bảng trong phụ lục cho thấy nhanh hơn Big nhưng chậm hơn Base | Nêu thẳng sự đánh đổi trong phần thân, kèm giải thích nguồn gốc chi phí |
| So sánh với các MoE thích nghi 2024–2025 (AdaMoE, DynMoE, ReMoE) ở đâu? | Được gọi là "concurrent but distinct", không so sánh thực nghiệm | So sánh với ít nhất một phương pháp trong nhóm này, hoặc giải thích vì sao không so sánh được |

Bài tập đóng vai reviewer như vậy hữu ích hơn nhiều so với việc đoán lý do của một quyết định cụ thể. Mỗi dòng trong bảng là một việc mà nhóm tác giả có thể làm trước khi nộp, và cũng là một việc mà người học có thể kiểm tra trong paper của dự án đang thực hiện.

## Bài học cho người viết

**Một khẩu hiệu tốt gói cả câu chuyện.** "Train once, deploy anywhere" xuất hiện trong abstract, Introduction, mục phương pháp và Conclusion. Mọi thành phần và mọi thí nghiệm đều có thể được đọc như một phần của lời hứa đó. Khi paper có nhiều thành phần, một khẩu hiệu ngắn giúp người đọc thấy chúng cùng phục vụ một mục tiêu.

**Ánh xạ hạn chế với thành phần, một–một, ở mọi tầng.** Abstract, Introduction và Preliminaries đều nêu hai hạn chế theo cùng thứ tự, và mỗi thành phần được giới thiệu bằng một câu "To overcome… / To eliminate… / To ensure…". Người đọc không bao giờ phải hỏi một thành phần tồn tại để làm gì.

**Trình bày một phương pháp mới như sự tổng quát hóa của các phương pháp đã biết.** Việc chỉ ra rằng dual-consistency trở thành self-distillation hoặc R-Drop trong các trường hợp đặc biệt vừa giúp người đọc hiểu, vừa biện minh cho bảng ablation so sánh với đúng những phương pháp đó.

**Kiểm tra sự nhất quán giữa Introduction, bảng và phụ lục.** Một khoảng con số không truy ra được, hay hai mô tả kiến trúc mâu thuẫn ("every" so với "every other"), không làm sai kết quả nhưng làm giảm độ tin cậy. Một lượt đọc soát riêng chỉ để đối chiếu con số và cấu hình là khoản đầu tư rẻ nhất trước khi nộp.

**So sánh hiệu quả với baseline cùng hạng cân, và nói thẳng sự đánh đổi.** Kết quả "chính xác hơn nhưng chậm hơn baseline cùng cỡ" vẫn là một kết quả tốt nếu được trình bày trung thực; nó chỉ trở thành điểm yếu khi reviewer tự phát hiện ra.

**Thay tính từ bằng con số.** Mỗi "seamlessly", "drastically", "highly favorable" là một cơ hội để đặt vào đó một con số cụ thể.

### Áp dụng sang các cộng đồng khác

Trong **Machine Learning**, ba thành phần chính của EDWARD-NMT đều là phương pháp tổng quát, và một phiên bản của paper cho NeurIPS hay ICLR sẽ cần thử trên ít nhất một bài toán ngoài dịch máy, thêm phân tích về hành vi của router và về hệ số variance preservation, cùng error bars qua nhiều seed; bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md) bàn chi tiết những thay đổi này. Trong **Computer Vision**, ý tưởng "một checkpoint, nhiều mạng con" có tiền lệ rõ ràng (các mạng slimmable, Once-for-All), và cách đóng khung theo đường biên Pareto cùng đo độ trễ thật trên thiết bị biên chuyển thẳng sang các paper về mô hình hiệu quả. Trong cộng đồng **speech**, cách so sánh "cùng hạng cân" và việc báo cáo đồng thời FLOPs, độ trễ và thông lượng là chuẩn mực mà hai case study Interspeech cũng tuân theo.

## Tóm tắt

EDWARD-NMT dựng câu chuyện quanh khẩu hiệu "train once, deploy anywhere", với hai hạn chế của MoE chuẩn (bộ nhớ cố định, tính toán cố định) được giải quyết bởi hai thành phần tương ứng, và một thành phần thứ ba giữ chất lượng cho các mạng con bị cắt nhỏ. Ánh xạ một–một giữa hạn chế và thành phần được giữ nhất quán từ abstract, Introduction tới Preliminaries. Related Work được chia theo các trục của phương pháp, mỗi đoạn kết bằng một câu định vị. Mục phương pháp nổi bật ở cách trình bày variance preservation (vấn đề, lời giải, tính chất được bảo đảm) và ở việc chỉ ra rằng dual-consistency bao gồm self-distillation và R-Drop như trường hợp đặc biệt. Phần thí nghiệm báo cáo kết quả cho cả họ mạng con, so sánh theo hạng cân, có ablation cộng dồn và thay thế, và biến một kết quả âm (độ rộng 128) thành một giới hạn được thừa nhận. Phụ lục là một mẫu tốt về khả năng tái lập. Những điểm có thể làm tốt hơn, gồm abstract thiếu con số, một khoảng con số trong Introduction khó truy ngược, mô tả kiến trúc mâu thuẫn trong phụ lục, so sánh hiệu quả chưa với baseline cùng hạng cân, thiếu kiểm định thống kê và metric ngoài BLEU, cách dùng chữ "concurrent" và mật độ tính từ nhấn mạnh, đều là những câu hỏi mà một reviewer ARR có thể đặt ra và người viết có thể trả lời trước.

## Bài tập

1. Viết lại abstract của EDWARD-NMT, giữ ánh xạ (i)(ii)(iii) và thêm hai con số từ Introduction hoặc phụ lục. Đề xuất một title mới nêu được lợi ích "train once, deploy anywhere" mà vẫn giữ tên mô hình.
2. Với bản thảo hiện tại của dự án, lập bảng đối chiếu mọi con số xuất hiện trong abstract và Introduction với ô tương ứng trong các bảng. Đánh dấu những con số không truy ra được hoặc có khoảng không khớp giữa các mục.
3. Tìm trong bản thảo một chi tiết cấu hình (kiến trúc, siêu tham số, tiền xử lý) được mô tả ở nhiều hơn một chỗ. Hợp nhất nó về một chỗ duy nhất và thay các chỗ khác bằng tham chiếu.
4. Chọn một thành phần mới trong dự án và viết đoạn mô tả theo khuôn của variance preservation: vấn đề, lời giải (có công thức nếu có), tính chất được bảo đảm, và ablation sẽ kiểm chứng tính chất đó.
5. Đóng vai reviewer ARR cho bản thảo hiện tại: lập một bảng như mục "Đọc với con mắt reviewer ARR", gồm ít nhất năm câu hỏi, mức độ bản thảo đã trả lời, và cách trả lời trước.
6. Đếm số lần các trạng từ và tính từ nhấn mạnh ("significantly", "seamlessly", "highly", "dramatically", "novel"…) xuất hiện trong bản thảo. Với mỗi lần, hoặc thay bằng một con số cụ thể, hoặc xóa đi, rồi đọc lại xem câu văn mạnh hơn hay yếu đi.
