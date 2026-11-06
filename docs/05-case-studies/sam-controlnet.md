# Case study: Segment Anything & ControlNet (ICCV 2023)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper có nhiều loại đóng góp (task, model, dataset) tổ chức cấu trúc để người đọc không bị lạc.
    - Giải thích vì sao định nghĩa task cẩn thận, kể cả đối mặt trực tiếp với sự mơ hồ, làm tăng độ thuyết phục của paper.
    - Phân tích cách ControlNet động lực hóa một chi tiết kỹ thuật rất nhỏ thành ý tưởng trung tâm.
    - Kết hợp nhiều loại bằng chứng (đánh giá zero-shot diện rộng, human study, user study, metric gián tiếp) cho những bài toán khó đo, và chuẩn bị phần Responsible AI khi công bố dataset hoặc mô hình lớn.

Trang này phân tích hai paper ICCV 2023 đại diện cho hai thái cực về quy mô. **Segment Anything** (SAM) là một dự án cực lớn: định nghĩa một task mới, xây một mô hình và tạo ra dataset phân đoạn lớn nhất từ trước tới thời điểm đó. **ControlNet** là một ý tưởng kiến trúc gọn gàng mà một nhóm nhỏ có thể hiện thực. Cả hai đều xoay quanh foundation model (mô hình nền tảng, tức mô hình được huấn luyện trên dữ liệu rất lớn và dùng lại được cho nhiều tác vụ): SAM xây một foundation model cho phân đoạn ảnh, còn ControlNet tìm cách mở rộng một foundation model sinh ảnh có sẵn mà không làm hỏng nó.

Đọc hai paper cạnh nhau cho thấy các nguyên tắc viết không phụ thuộc vào quy mô dự án. Một paper khổng lồ vẫn cần một cấu trúc đơn giản để người đọc không bị choáng ngợp; một paper nhỏ vẫn cần một câu chuyện đủ mạnh để một chi tiết kỹ thuật nhỏ trở thành đóng góp đáng nhớ.

## Segment Anything (SAM) { #sam }

Tác giả: Alexander Kirillov và cộng sự (Meta AI Research). ICCV 2023, Best Paper Honorable Mention.

### Bối cảnh ra đời

Đến đầu những năm 2020, NLP đã chứng kiến sức mạnh của các mô hình ngôn ngữ lớn được pre-train trên dữ liệu quy mô web: chúng có thể giải các tác vụ mới qua prompt (lời nhắc) mà không cần huấn luyện lại, tức là chuyển giao zero-shot. Ở lĩnh vực thị giác và ngôn ngữ, CLIP cũng cho thấy khả năng tương tự. Phân đoạn ảnh thì chưa có một mô hình như vậy, vì một lý do cơ bản: không tồn tại dữ liệu mask ở quy mô web. Chú thích mask tốn kém hơn nhiều so với gán nhãn ảnh hay ghép ảnh với văn bản, và các dataset phân đoạn hiện có đều nhỏ hơn nhiều bậc so với dữ liệu dùng để huấn luyện các foundation model khác.

Đây là bối cảnh quyết định cấu trúc của paper. Muốn có foundation model cho phân đoạn, nhóm tác giả không thể chỉ thiết kế mô hình; họ phải đồng thời giải bài toán dữ liệu, và bài toán dữ liệu lại cần một mô hình đủ tốt để hỗ trợ việc chú thích. Ba thành phần phụ thuộc lẫn nhau, và paper phải kể được câu chuyện của cả ba mà không làm người đọc lạc hướng.

### Câu chuyện một dòng

> Có thể xây dựng một foundation model cho phân đoạn ảnh nếu thiết kế đồng thời ba thành phần ăn khớp với nhau: một task (promptable segmentation, tức phân đoạn theo gợi ý), một model đủ nhanh để dùng tương tác (SAM), và một data engine dùng chính model đó để tạo ra dataset phân đoạn lớn nhất từ trước tới nay (SA-1B, hơn một tỷ mask trên khoảng 11 triệu ảnh); kết quả là một mô hình chuyển giao zero-shot tốt sang nhiều tác vụ và nhiều phân bố dữ liệu mới.

Câu chuyện này dài hơn những câu chuyện một dòng khác trong chương, và điều đó phản ánh đúng bản chất của paper: ba đóng góp khác loại. Điểm làm cho nó vẫn mạch lạc là cụm "ăn khớp với nhau". Paper không trình bày ba đóng góp như ba mảnh rời được ghép lại, mà như một hệ thống trong đó mỗi thành phần tồn tại vì hai thành phần kia cần nó.

### Phân tích câu chuyện và cấu trúc

**Title hai chữ, abstract ba trụ.** Title *"Segment Anything"* là một lời tuyên bố tham vọng, gần như một khẩu hiệu, và không nói phương pháp là gì. Kiểu title này chỉ đứng được khi quy mô bằng chứng tương xứng, như bài [Title](../02-viet-tung-phan/title.md) lưu ý. Abstract thì rất cụ thể: câu đầu gói cả bộ khung (một task, một model và một dataset mới cho phân đoạn ảnh), câu tiếp theo nêu con số ấn tượng nhất (hơn một tỷ mask trên 11 triệu ảnh có giấy phép và tôn trọng quyền riêng tư), và claim về kết quả được hiệu chỉnh cẩn thận: hiệu năng zero-shot "thường" cạnh tranh, thậm chí vượt các kết quả có giám sát trước đó, chứ không phải lúc nào cũng vượt. Sự tương phản giữa một title táo bạo và một abstract chừng mực là điều đáng học.

**Ba câu hỏi làm khung cho toàn bộ paper.** Introduction của SAM được tổ chức quanh ba câu hỏi: task nào cho phép chuyển giao zero-shot? Kiến trúc mô hình tương ứng là gì? Dữ liệu nào có thể nuôi task và mô hình đó? Mỗi câu hỏi được trả lời trong một phần riêng của paper. Cấu trúc này giống cách MAE dẫn dắt bằng câu hỏi (xem [MAE](mae-ldm.md#mae)), nhưng ở quy mô lớn hơn: thay vì một câu hỏi với ba góc nhìn, đây là ba câu hỏi với ba phần trả lời. Người đọc luôn biết đang ở câu hỏi nào và còn bao nhiêu câu hỏi phía trước.

**Ba trụ biện minh cho nhau.** Điểm tinh tế nhất trong cách viết của SAM là cho thấy sự phụ thuộc giữa ba trụ. Task đòi hỏi mô hình trả về một mask hợp lệ cho bất kỳ prompt nào (điểm, hộp, mask thô hay văn bản). Data engine cần mô hình phản hồi gần như tức thời để người chú thích có thể dùng tương tác. Từ đó, kiến trúc được thiết kế với một image encoder nặng (một ViT được pre-train bằng [MAE](mae-ldm.md#mae)) chỉ chạy một lần cho mỗi ảnh, cùng với prompt encoder và mask decoder rất nhẹ, có thể chạy trong trình duyệt với độ trễ chỉ vài chục mili giây cho mỗi prompt. Như vậy, một quyết định kiến trúc được biện minh bằng nhu cầu của data engine, chứ không chỉ bằng độ chính xác. Khi người đọc thấy các lựa chọn được giải thích bằng sự phụ thuộc lẫn nhau như vậy, họ hiểu rằng đây là một hệ thống được thiết kế có chủ đích chứ không phải một tập hợp đóng góp được gom lại cho đủ.

**Định nghĩa task cẩn thận, kể cả sự mơ hồ.** SAM định nghĩa khái niệm "valid mask" (mask hợp lệ): với một prompt mơ hồ, chẳng hạn một điểm đặt trên áo của một người (người dùng muốn phân đoạn cái áo hay cả người?), mô hình phải trả về một mask hợp lý cho ít nhất một trong các cách hiểu. Để xử lý sự mơ hồ này, mô hình dự đoán nhiều mask cho cùng một prompt, tương ứng với các mức toàn thể, bộ phận và bộ phận nhỏ hơn, kèm điểm tin cậy cho mỗi mask. Việc đối mặt trực tiếp với sự mơ hồ thay vì lờ đi làm tăng độ thuyết phục của paper theo hai cách: nó cho thấy tác giả hiểu sâu bài toán, và nó chuẩn bị cho người đọc chấp nhận một cách đánh giá khác thường (human study) ở phần sau.

**Mượn từ vựng từ NLP một cách có ý thức.** Các khái niệm "prompt", "zero-shot transfer" và "foundation model" đều được mượn từ NLP. Lựa chọn này giúp người đọc từ các cộng đồng khác hiểu ngay tham vọng của paper, nhưng cũng tạo ra kỳ vọng: nếu đã gọi là foundation model, mô hình phải chuyển giao được sang nhiều tác vụ chưa từng thấy. Phần thí nghiệm của SAM được thiết kế để đáp ứng đúng kỳ vọng đó.

### Figure 1: ba trụ trong một hình

Figure 1 của SAM chia thành ba panel tương ứng với ba trụ. Panel Task cho thấy một prompt đi vào mô hình và cho ra một mask hợp lệ. Panel Model cho thấy ba khối: image encoder, prompt encoder và mask decoder nhẹ. Panel Data cho thấy vòng lặp của data engine, trong đó mô hình hỗ trợ chú thích và dữ liệu mới lại được dùng để huấn luyện mô hình, cùng với dataset thu được. Cấu trúc của paper đi theo đúng ba trụ đó. Introduction không có một danh sách contributions theo kiểu gạch đầu dòng, mà kết thúc bằng một chuỗi đoạn mở đầu bằng tên in đậm (Task, Model, Data engine, rồi Dataset, Responsible AI, Experiments), mỗi đoạn tóm tắt và trỏ tới đúng một section. Ba thứ phản chiếu nhau: Figure 1, các đoạn tóm tắt cuối Introduction và các section.

Hiệu quả của sự phản chiếu này đặc biệt rõ với một paper dài và nhiều nội dung như SAM. Người đọc lướt nhìn Figure 1 là nắm được bộ khung; người đọc kỹ có thể quay lại Figure 1 bất cứ lúc nào để định vị phần đang đọc trong bức tranh tổng thể.

!!! tip "Khi paper có nhiều đóng góp khác loại"
    Nếu paper đóng góp đồng thời task, model và dataset (hoặc phương pháp, benchmark và phân tích), hãy làm cho cấu trúc paper, Figure 1 và danh sách contributions phản chiếu nhau. Mỗi đóng góp nên có một panel trong Figure 1, một section riêng và một gạch đầu dòng trong contributions, với cùng tên gọi ở cả ba nơi.

### Thí nghiệm như một chuỗi lập luận

Bằng chứng của SAM được tổ chức theo ba trụ, và mỗi trụ cần một loại bằng chứng khác nhau.

Với trụ dữ liệu, paper mô tả ba giai đoạn của data engine: chú thích thủ công có hỗ trợ của mô hình, bán tự động, và hoàn toàn tự động. Phần lớn mask trong SA-1B được sinh tự động ở giai đoạn cuối, và vì vậy paper phải thuyết phục rằng chúng đủ chất lượng: chất lượng được kiểm chứng bằng cách so sánh với mask do con người chỉnh sửa. Paper còn phân tích thống kê dataset (phân bố kích thước mask, vị trí mask trong ảnh, số mask mỗi ảnh) và so sánh với các dataset phân đoạn hiện có. Một paper công bố dataset luôn phải trả lời câu hỏi "dữ liệu này có tốt không và khác gì dữ liệu đã có", và SAM trả lời bằng số liệu cụ thể.

Với trụ mô hình và task, câu hỏi trung tâm là khả năng chuyển giao zero-shot. Paper đánh giá việc phân đoạn từ một điểm duy nhất trên 23 dataset thuộc nhiều miền ảnh rất khác nhau, kể cả những miền khác xa ảnh thường ngày như ảnh hiển vi hay ảnh dưới nước. Vì một điểm có thể ứng với nhiều mask hợp lệ trong khi ground truth (nhãn chuẩn) chỉ có một, metric tự động như mIoU sẽ phạt cả những mask hợp lệ nhưng khác cách hiểu với người gán nhãn. Paper vì thế bổ sung một human study, trong đó người chú thích chấm điểm chất lượng mask. Đây là một ví dụ rất tốt về việc nhận ra giới hạn của metric và bổ sung bằng chứng phù hợp, và nó được chuẩn bị từ trước bởi định nghĩa "valid mask" trong phần task.

Tiếp theo, paper thử SAM trên các tác vụ khác mà mô hình không được huấn luyện trực tiếp: phát hiện cạnh, đề xuất đối tượng (object proposals), phân đoạn thực thể (dùng hộp từ một detector làm prompt), và một thí nghiệm thăm dò về phân đoạn từ văn bản. Ở một số tác vụ, SAM không vượt các mô hình chuyên biệt được huấn luyện có giám sát, và paper đóng khung kết quả đúng mức: đây là chuyển giao zero-shot, so với các mô hình được huấn luyện riêng cho từng tác vụ. Cách đóng khung trung thực này giúp những con số không vượt trội vẫn trở thành bằng chứng mạnh cho tính tổng quát. Các ablation về đóng góp của từng giai đoạn data engine, về lượng dữ liệu huấn luyện và về kích thước image encoder hoàn thiện phần bằng chứng.

Cuối cùng là phần Responsible AI. Paper phân tích phân bố địa lý và mức thu nhập của các quốc gia có ảnh trong dataset, đồng thời đánh giá sự công bằng (fairness) của mô hình khi phân đoạn người theo giới tính được cảm nhận, nhóm tuổi và màu da. Phụ lục bổ sung các tài liệu mô tả dataset và mô hình theo dạng chuẩn hóa. Với một dataset và một mô hình quy mô lớn sẽ được dùng rộng rãi, phần này là kỳ vọng của cộng đồng và của các hội nghị, không phải một phần trang trí.

### Văn phong

SAM được viết với giọng gần như một tuyên ngôn ở Introduction, nhưng các phần sau lại rất cụ thể và đo đạc. Mỗi trụ có một cái tên dễ nhớ: *promptable segmentation*, *SAM*, *data engine*, *SA-1B*. Những cái tên này xuất hiện nhất quán ở Figure 1, ở tiêu đề section và trong văn bản. Paper cũng có một phần thảo luận giới hạn thẳng thắn, chẳng hạn mô hình có thể bỏ sót các cấu trúc rất mảnh, đôi khi sinh ra các thành phần nhỏ rời rạc, và đường biên không sắc nét bằng các phương pháp chuyên biệt tốn nhiều tính toán hơn; khả năng phân đoạn từ văn bản mới ở mức thăm dò. Sự trung thực này cân bằng lại tham vọng của title, giúp người đọc tin tưởng vào những claim mà paper thực sự đưa ra.

## ControlNet { #controlnet }

**Adding Conditional Control to Text-to-Image Diffusion Models**. Tác giả: Lvmin Zhang, Anyi Rao và Maneesh Agrawala (Stanford University). ICCV 2023, Marr Prize.

### Bối cảnh ra đời

Đến năm 2022, các mô hình sinh ảnh từ văn bản dựa trên diffusion, tiêu biểu là Stable Diffusion được xây trên [Latent Diffusion](mae-ldm.md#ldm), đã tạo ra ảnh chất lượng rất cao. Nhưng văn bản là một kênh điều khiển kém chính xác về mặt không gian: rất khó mô tả bằng lời một tư thế người cụ thể, một bố cục chính xác hay hình dạng của một vật. Người dùng muốn cung cấp những điều kiện không gian như bản đồ cạnh, bản đồ độ sâu, khung xương tư thế người hay bản đồ phân đoạn.

Khó khăn nằm ở dữ liệu và ở bản thân mô hình lớn. Dữ liệu cặp cho từng loại điều kiện nhỏ hơn rất nhiều so với lượng dữ liệu ảnh–văn bản dùng để huấn luyện mô hình gốc. Fine-tune trực tiếp mô hình lớn trên dữ liệu nhỏ dễ dẫn tới overfitting và catastrophic forgetting (quên thảm khốc, tức mô hình đánh mất những năng lực đã học trước đó). Bài toán vì thế không chỉ là "thêm điều khiển" mà là "thêm điều khiển mà không phá hỏng những gì mô hình lớn đã biết".

### Câu chuyện một dòng

> Có thể thêm điều khiển không gian (cạnh, độ sâu, tư thế, phân đoạn…) vào một mô hình sinh ảnh từ văn bản cỡ lớn mà không làm hỏng nó: khóa mô hình gốc, tạo một bản sao huấn luyện được của phần encoder, và nối hai bên bằng zero convolution (lớp tích chập 1×1 có trọng số khởi tạo bằng không), nhờ đó ở thời điểm bắt đầu huấn luyện mô hình không bị thêm bất kỳ nhiễu nào, và việc học ổn định kể cả với dataset nhỏ.

Câu chuyện này đóng khung bài toán như một bài toán bảo toàn: thành công được định nghĩa bằng hai tiêu chí, tuân theo điều kiện và giữ nguyên chất lượng của mô hình gốc. Cách đóng khung ấy quyết định cả thiết kế lẫn cách đánh giá ở phần sau.

### Phân tích câu chuyện và cấu trúc

**Title mô tả, abstract nêu cơ chế.** Title *"Adding Conditional Control to Text-to-Image Diffusion Models"* mở bằng một động từ và nói đúng việc paper làm; tên ControlNet không xuất hiện trong title mà được giới thiệu ngay ở câu đầu abstract. Abstract đi thẳng vào cơ chế: khóa mô hình lớn đã sẵn sàng cho sản phẩm, tái sử dụng các lớp encoding của nó làm backbone, và nối hai bên bằng zero convolution để không có nhiễu có hại nào ảnh hưởng tới quá trình fine-tune. Abstract cũng báo trước hai trục bằng chứng chính: nhiều loại điều kiện (cạnh, độ sâu, phân đoạn, tư thế người…), dùng riêng lẻ hay kết hợp, có hoặc không có prompt; và việc huấn luyện bền vững với cả dataset nhỏ (dưới 50 nghìn ảnh) lẫn lớn (trên một triệu ảnh).

**Mỗi thành phần trả lời một vấn đề con.** Thiết kế của ControlNet có thể đọc như lời giải cho ba vấn đề con, và paper trình bày chúng theo đúng logic đó.

| Vấn đề con | Thành phần | Lý do |
|---|---|---|
| Không được làm hỏng năng lực của mô hình gốc | Khóa (lock) toàn bộ tham số của mô hình gốc | Mô hình gốc giữ nguyên, không bị quên |
| Cần một bộ học điều kiện đủ mạnh mà không cần huấn luyện từ đầu | Bản sao huấn luyện được (trainable copy) của các khối encoder | Tái sử dụng backbone mạnh đã được pre-train để học cách xử lý điều kiện |
| Nối bản sao vào mô hình gốc mà không gây hại lúc đầu | Zero convolution | Ở bước đầu, đầu ra trùng khớp với mô hình gốc |

Khi thiết kế được trình bày như lời giải cho các vấn đề con được nêu rõ, mỗi thành phần có một lý do tồn tại, và reviewer khó có thể hỏi "vì sao không bỏ thành phần này".

**Động lực hóa một chi tiết nhỏ thành ý tưởng trung tâm.** Về mặt kỹ thuật, zero convolution cực kỳ đơn giản: một lớp tích chập 1×1 có trọng số và bias khởi tạo bằng không. Nếu chỉ mô tả như vậy, nó dễ bị xem là một chi tiết cài đặt. Paper làm cho nó trở nên thuyết phục bằng cách giải thích vấn đề nó giải quyết. Thêm những lớp mới khởi tạo ngẫu nhiên vào một mô hình lớn đã huấn luyện có thể đưa nhiễu có hại vào các đặc trưng sâu ngay từ những bước đầu, làm hỏng chính năng lực cần bảo toàn. Zero convolution đảm bảo rằng ở bước đầu tiên, đầu ra của toàn hệ thống giống hệt mô hình gốc. Đồng thời, paper trả lời câu hỏi vì sao lớp có trọng số bằng không vẫn học được. Lý do nằm ở chỗ gradient theo trọng số của một lớp tích chập phụ thuộc vào đầu vào của lớp, vốn khác không, nên trọng số sẽ rời khỏi giá trị không ngay sau những bước cập nhật đầu tiên; bản arXiv hiện hành để phép tính gradient chi tiết trong supplementary material và chỉ giữ ở phần phương pháp một câu dẫn tới đó. Paper còn ghi nhận một hệ quả đáng chú ý của thiết kế: vì zero convolution không thêm nhiễu, mô hình luôn sinh ảnh chất lượng cao trong suốt quá trình huấn luyện, rồi tới một bước nào đó (thường dưới 10.000 bước) thì đột ngột tuân theo điều kiện, hiện tượng được đặt tên là "sudden convergence". Một ý tưởng nhỏ trở nên có trọng lượng không nhờ độ phức tạp mà nhờ động lực rõ ràng và một lời giải đáp cho phản biện hiển nhiên nhất ("trọng số bằng không thì làm sao học?").

**Bài toán và bằng chứng khớp nhau.** Vì bài toán được đóng khung quanh việc dữ liệu cặp có thể nhỏ, paper thí nghiệm với các dataset huấn luyện ở nhiều kích thước khác nhau, từ khoảng một nghìn ảnh tới hàng triệu ảnh, và cho thấy việc huấn luyện không sụp đổ ngay cả ở đầu nhỏ nhất của dải. Bằng chứng trả lời đúng câu hỏi mà câu chuyện đặt ra.

### Figure 1: trưng bày năng lực

Figure 1 của ControlNet là một lưới ví dụ: các điều kiện đầu vào (như bản đồ cạnh hay khung xương tư thế người) cùng với những ảnh được sinh ra đúng theo cấu trúc của điều kiện, đa dạng về nội dung và phong cách. Khác với [ResNet](resnet.md), nơi Figure 1 trình bày một vấn đề, ở đây Figure 1 trình bày một năng lực mới, vì với bài toán sinh ảnh có điều khiển, việc người đọc tận mắt thấy ảnh tuân theo điều kiện chính là thông điệp quan trọng nhất. Ngay sau đó là sơ đồ khối cho thấy khối gốc bị khóa, bản sao huấn luyện được và các zero convolution nối hai bên, giúp người đọc nối năng lực vừa thấy với cơ chế tạo ra nó. Trong toàn paper, phần lớn diện tích được dành cho các hình định tính với nhiều loại điều kiện khác nhau, một lựa chọn phù hợp với một paper mà giá trị chủ yếu được cảm nhận bằng mắt.

### Thí nghiệm như một chuỗi lập luận

Đánh giá sinh ảnh có điều kiện là một bài toán khó đo: không có một con số duy nhất nào phản ánh cả chất lượng ảnh, mức độ tuân theo điều kiện và sự phù hợp với văn bản. ControlNet giải quyết bằng cách kết hợp nhiều loại bằng chứng, mỗi loại trả lời một khía cạnh.

Trước hết là các kết quả định tính trên nhiều loại điều kiện, chứng minh tính tổng quát của kiến trúc: cùng một thiết kế hoạt động với cạnh, độ sâu, tư thế, phân đoạn và các loại điều kiện khác. Tiếp theo là ablation về kiến trúc, so sánh zero convolution với lớp tích chập khởi tạo ngẫu nhiên thông thường, và so sánh bản sao huấn luyện được với một phiên bản nhẹ hơn chỉ dùng các lớp tích chập đơn giản. Các so sánh này được thực hiện trong nhiều tình huống prompt khác nhau, từ không có prompt tới prompt mô tả đầy đủ, cho thấy vai trò của từng thành phần rõ nhất khi văn bản không đủ để dẫn dắt mô hình. Sau đó là user study, trong đó người tham gia xếp hạng các phương pháp theo chất lượng ảnh và độ khớp với điều kiện. Giao thức được nêu đủ để người đọc đánh giá: 20 bản phác tay chưa từng thấy, mỗi bản được sinh bởi năm phương pháp, 12 người xếp hạng, kết quả báo cáo bằng thứ hạng trung bình kèm độ lệch chuẩn. User study được kết hợp với các metric tự động như FID và CLIP score, cùng một metric gián tiếp cho độ khớp điều kiện: phân đoạn lại ảnh sinh ra và đo độ trùng khớp với bản đồ phân đoạn đầu vào. Cuối cùng là thí nghiệm theo kích thước dataset huấn luyện đã nhắc ở trên.

| Khía cạnh cần chứng minh | Loại bằng chứng |
|---|---|
| Kiến trúc tổng quát cho nhiều loại điều kiện | Kết quả định tính trên nhiều loại điều kiện |
| Mỗi thành phần đều cần thiết | Ablation zero convolution và bản sao huấn luyện được, trong nhiều tình huống prompt |
| Ảnh đẹp và đúng điều kiện theo cảm nhận người dùng | User study xếp hạng |
| Chất lượng và độ khớp đo được | FID, CLIP score, phân đoạn lại ảnh sinh để đo độ khớp |
| Bền vững khi dữ liệu ít | Thí nghiệm theo kích thước dataset |

!!! tip "Khi metric tự động không đủ"
    Với những bài toán khó đo, hãy kết hợp nhiều loại bằng chứng bổ sung cho nhau: user study (thiết kế cẩn thận, nêu rõ số người tham gia, giao thức và cách tổng hợp kết quả), metric gián tiếp đo đúng khía cạnh cần chứng minh, và kết quả định tính được chọn có hệ thống chứ không chỉ chọn những ví dụ đẹp nhất. Mỗi loại bằng chứng nên trả lời một khía cạnh cụ thể, và bảng tổng hợp như trên giúp người viết kiểm tra xem khía cạnh nào còn thiếu.

### Văn phong

ControlNet được viết với giọng giải thích trực quan, gần với cách một người giảng bài trình bày một ý tưởng. Các thành phần có tên gọi cụ thể, gợi hình (*locked copy*, *trainable copy*, *zero convolution*), và những cái tên này khớp trực tiếp với các khối trên sơ đồ. Người đọc có thể nhìn hình và gọi đúng tên từng khối, một dấu hiệu cho thấy thuật ngữ và hình ảnh được thiết kế đồng bộ. Paper cũng dự đoán và trả lời những câu hỏi tự nhiên nhất của người đọc ngay trong phần phương pháp, thay vì để chúng tới phần thảo luận hoặc rebuttal.

## So sánh hai paper

Hai paper khác nhau rất nhiều về quy mô, nhưng giống nhau ở cách để cấu trúc của câu chuyện quyết định cấu trúc của bằng chứng. SAM có ba trụ nên có ba nhóm bằng chứng; ControlNet có ba vấn đề con nên có ba thành phần và các ablation tương ứng.

| | SAM | ControlNet |
|---|---|---|
| Quy mô dự án | Rất lớn: data engine, hơn một tỷ mask | Vừa phải: một ý tưởng kiến trúc gọn |
| Kiểu đóng góp | Task, model và dataset | Kiến trúc và chiến lược huấn luyện |
| Cách tổ chức câu chuyện | Ba câu hỏi, ba trụ biện minh cho nhau | Ba vấn đề con, mỗi vấn đề một thành phần |
| Figure 1 | Ba panel task, model, data | Lưới trưng bày điều khiển đa dạng |
| Bằng chứng chính | Zero-shot trên nhiều dataset, human study, phân tích dataset | Định tính, user study, ablation zero convolution, metric gián tiếp |
| Xử lý giới hạn | Thảo luận thẳng thắn, Responsible AI | Thí nghiệm theo kích thước dữ liệu |
| Bài học chính | Cấu trúc hóa đóng góp đa dạng | Biến chi tiết đơn giản thành ý tưởng có động lực rõ |

## Bài học cho người viết

Từ SAM, bài học quan trọng nhất là một paper nhiều đóng góp cần một bộ khung đơn giản được lặp lại nhất quán: cùng ba trụ ở Figure 1, ở các đoạn tóm tắt cuối Introduction và ở tiêu đề section. Bài học thứ hai là các đóng góp nên được trình bày như một hệ thống biện minh cho nhau, chứ không như những mảnh rời. Bài học thứ ba là khi metric chuẩn không phản ánh đúng bài toán, như khi ground truth vốn mơ hồ, cần nói rõ điều đó và bổ sung bằng chứng phù hợp như human study. Bài học thứ tư là công bố dataset hoặc mô hình lớn kéo theo trách nhiệm phân tích tính đại diện và công bằng một cách nghiêm túc. Từ ControlNet, bài học trung tâm là một chi tiết kỹ thuật nhỏ có thể trở thành đóng góp đáng nhớ nếu paper nêu rõ vấn đề nó giải quyết, trả lời phản biện hiển nhiên nhất về nó, và chứng minh vai trò của nó bằng ablation.

Cả hai bài học đều có đối ứng trực tiếp ở NLP và Machine Learning. Các paper dataset và benchmark ở các hội nghị NLP, hay ở track Datasets and Benchmarks của NeurIPS, đều hưởng lợi từ cấu trúc kiểu SAM: tách rõ định nghĩa task, quy trình xây dữ liệu và mô hình baseline, kèm phân tích thống kê và kiểm chứng chất lượng dữ liệu. Những năm gần đây, các checklist bắt buộc như Responsible NLP Checklist của ACL Rolling Review hay paper checklist của NeurIPS cũng yêu cầu tác giả trả lời các câu hỏi về dữ liệu, rủi ro và tác động xã hội, nên phần Responsible AI của SAM là một mẫu tham khảo tốt; cần kiểm tra yêu cầu cụ thể trong Call for Papers của năm nộp. Về phía ControlNet, lập luận "mô hình mới trùng khớp với mô hình gốc ở thời điểm bắt đầu huấn luyện" rất quen thuộc trong các phương pháp fine-tune tiết kiệm tham số ở NLP; LoRA, chẳng hạn, khởi tạo một trong hai ma trận phân rã bằng không để phần cập nhật ban đầu bằng không. Người viết các paper thuộc hướng này có thể học từ ControlNet cách biến một lựa chọn khởi tạo thành một luận điểm có động lực, thay vì để nó chìm trong phần chi tiết cài đặt.

### Nối với các bài kỹ năng

Cả hai paper cũng xuất hiện như ví dụ ở các bài kỹ năng và các tình huống của Chương 7. Một dự án nhiều đóng góp như SAM chỉ đứng vững khi các phần thực sự cần nhau; bài [Ghép ý tưởng và "độn" đóng góp](../07-tinh-huong-kho/ghep-va-don.md) dùng SAM để phân biệt một paper nhiều phần gắn kết với "một paper chứa hai paper", và bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md) bàn cách đi từ các contribution dự kiến tới ma trận thí nghiệm, các mốc và ngân sách dữ liệu cho một dự án nhiều thành phần như vậy. Khi ground truth mơ hồ hoặc chưa có baseline phù hợp, bài [Bài toán, dữ liệu và phạm vi](../07-tinh-huong-kho/bai-toan-va-pham-vi.md) dẫn lại cách SAM dùng khái niệm mask hợp lệ cùng human study; còn khi metric tự động và đánh giá của con người không nói cùng một điều, các lối ra có ở bài [Khi con số không đẹp](../07-tinh-huong-kho/con-so-khong-dep.md). Về phía ControlNet, cách biến một chi tiết rất đơn giản thành ý tưởng trung tâm là câu trả lời cho lời chê "hiển nhiên" mà bài [Khi novelty và hiệu quả lệch pha](../07-tinh-huong-kho/novelty-va-hieu-qua.md) phân tích. Phần Responsible AI và Limitations của SAM nên được đọc cùng bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md).

## Tóm tắt

SAM và ControlNet cho thấy các nguyên tắc viết đứng vững ở mọi quy mô. SAM tổ chức một dự án khổng lồ quanh ba câu hỏi và ba trụ (task, model, data), phản chiếu nhất quán trong Figure 1, các đoạn tóm tắt cuối Introduction và các section, đồng thời trình bày các trụ như một hệ thống biện minh cho nhau. Paper định nghĩa task cẩn thận, kể cả sự mơ hồ, và nhờ đó biện minh được cho human study bên cạnh metric tự động; các đánh giá zero-shot diện rộng được đóng khung trung thực, và phần Responsible AI đáp ứng kỳ vọng với một dataset và mô hình quy mô lớn. ControlNet đóng khung bài toán như việc thêm điều khiển mà không làm hỏng mô hình gốc, trình bày mỗi thành phần như lời giải cho một vấn đề con, và biến zero convolution thành ý tưởng trung tâm nhờ động lực rõ ràng cùng lời giải đáp cho phản biện hiển nhiên nhất. Với một bài toán khó đo, paper kết hợp kết quả định tính, ablation, user study và metric gián tiếp, mỗi loại trả lời một khía cạnh.

## Bài tập

1. Nếu dự án hiện tại có nhiều hơn một loại đóng góp, viết tên ngắn gọn cho từng đóng góp, rồi kiểm tra xem Figure 1, tiêu đề các section và danh sách contributions đã phản chiếu nhau chưa. Viết một đoạn giải thích các đóng góp phụ thuộc vào nhau như thế nào.
2. Xác định một khía cạnh của bài toán mà metric tự động không đo đúng (do ground truth mơ hồ, do đánh giá mang tính chủ quan, hoặc do metric bỏ qua một khía cạnh quan trọng). Thiết kế một human study hoặc user study nhỏ cho khía cạnh đó, nêu rõ số người tham gia, giao thức và cách tổng hợp kết quả.
3. Chọn một chi tiết kỹ thuật nhỏ trong phương pháp và viết cho nó một đoạn động lực theo khuôn ControlNet: vấn đề nó giải quyết, vì sao cách làm hiển nhiên thất bại, và câu trả lời cho phản biện tự nhiên nhất về nó.
4. Nếu dự án công bố dataset hoặc mô hình, phác thảo phần Responsible AI: tính đại diện của dữ liệu, các nhóm cần kiểm tra fairness, rủi ro sử dụng sai, và đối chiếu với checklist của hội nghị dự định nộp.
