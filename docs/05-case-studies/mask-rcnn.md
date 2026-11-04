# Case study: Mask R-CNN (ICCV 2017)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách Mask R-CNN biến sự đơn giản của phương pháp thành luận điểm chính thay vì một điểm yếu.
    - Giải thích vì sao việc tách bạch các chi tiết then chốt và kiểm chứng mỗi chi tiết bằng một ablation riêng khiến reviewer khó bác bỏ đóng góp.
    - Thiết kế một bảng ablation dạng "bảng con" gọn, dễ đọc, có cài đặt mặc định được đánh dấu.
    - Áp dụng chiến lược trình bày một ý tưởng đơn giản cho paper thuộc NLP và Machine Learning.

**Mask R-CNN** của Kaiming He, Georgia Gkioxari, Piotr Dollár và Ross Girshick (Facebook AI Research) nhận giải Marr Prize, giải paper xuất sắc nhất của ICCV, năm 2017. Bài toán của paper là instance segmentation (phân đoạn thực thể): với mỗi ảnh, vừa phát hiện từng đối tượng, vừa tìm mặt nạ (mask) chính xác tới từng pixel cho từng đối tượng riêng biệt. Đây là bài toán kết hợp hai nhiệm vụ cổ điển của thị giác máy tính, phát hiện đối tượng (object detection) và phân đoạn ngữ nghĩa (semantic segmentation).

Mask R-CNN là trường hợp nghiên cứu đặc biệt hữu ích cho những người viết lo rằng ý tưởng đang có "quá đơn giản". Ý tưởng cốt lõi của paper, thêm một nhánh dự đoán mask vào Faster R-CNN, tự nhiên đến mức nhiều người có thể phản ứng rằng "ai cũng nghĩ ra". Đó vừa là sức mạnh vừa là rủi ro: một ý tưởng tự nhiên dễ được chấp nhận và dễ được dùng lại, nhưng cũng dễ bị reviewer gắn nhãn "incremental" (chỉ là cải tiến nhỏ). Bài này phân tích cách paper hóa giải rủi ro đó qua ba bước: biến sự đơn giản thành luận điểm, chỉ ra rằng sự đơn giản chỉ hoạt động khi xử lý đúng hai chi tiết không hiển nhiên, và chứng minh từng chi tiết bằng một ablation riêng.

## Bối cảnh ra đời

Đến khoảng năm 2016, cộng đồng Computer Vision đã có hai framework nền rất mạnh: Fast/Faster R-CNN cho phát hiện đối tượng và Fully Convolutional Network (FCN) cho phân đoạn ngữ nghĩa. Cả hai đều linh hoạt, dễ mở rộng và được dùng làm baseline (phương pháp đối chứng) cho rất nhiều công trình. Instance segmentation thì chưa có một framework tương tự. Các hệ thống mạnh thời đó, bao gồm những hệ thống thắng cuộc thi phân đoạn COCO 2015 và 2016, thường gồm nhiều giai đoạn hoặc nhiều thành phần chuyên biệt, chẳng hạn đề xuất các vùng phân đoạn trước rồi mới phân loại, hoặc dự đoán đồng thời mask và lớp qua những kênh đặc trưng được thiết kế riêng.

Paper nêu mục tiêu một cách trực tiếp: phát triển cho instance segmentation một framework có vai trò tương đương như Faster R-CNN và FCN đã có cho hai bài toán kia. Cách đặt mục tiêu này rất khôn ngoan. Nó định vị paper không phải như "thêm một phương pháp nữa" mà như một nền tảng, và ngầm đưa ra luôn tiêu chí để đánh giá paper: đơn giản, linh hoạt, dễ mở rộng. Một khi người đọc chấp nhận tiêu chí ấy, sự đơn giản không còn là điểm yếu cần biện hộ mà trở thành chính mục tiêu cần đạt.

## Câu chuyện một dòng

> Instance segmentation có thể được giải quyết bằng một mở rộng đơn giản của Faster R-CNN, thêm một nhánh dự đoán mask chạy song song với nhánh phân loại và hồi quy hộp, miễn là xử lý đúng hai chi tiết then chốt: căn chỉnh đặc trưng chính xác tới từng pixel bằng RoIAlign, và tách việc dự đoán mask khỏi việc phân loại.

Cấu trúc "đơn giản, miễn là" của câu chuyện này đáng được phân tích kỹ. Vế đầu hứa hẹn sự đơn giản, vế sau chứa điểm mới. Nếu thiếu vế "miễn là", paper nghe như một cải tiến hiển nhiên mà ai cũng làm được; nếu chỉ có hai chi tiết kỹ thuật mà không có khung đơn giản, paper lại nghe như một tập hợp thủ thuật. Sự kết hợp của hai vế tạo ra một thông điệp mạnh hơn từng vế riêng lẻ: framework đơn giản, nhưng sự thành công của nó phụ thuộc vào việc hiểu đúng hai điều mà các phương pháp trước đã bỏ qua. Reviewer muốn bác bỏ paper sẽ phải chứng minh hoặc rằng hai chi tiết đó đã được biết từ trước, hoặc rằng chúng không quan trọng, và cả hai đều bị phần ablation chặn trước.

## Phân tích câu chuyện và cấu trúc

### Gọi tên kỳ vọng của người đọc rồi đảo ngược nó

Introduction thừa nhận instance segmentation là bài toán khó, đòi hỏi vừa phát hiện đúng mọi đối tượng vừa phân đoạn chính xác từng đối tượng; từ đó, người đọc dễ nghĩ rằng cần một phương pháp phức tạp mới đạt được kết quả tốt. Paper sau đó khẳng định rằng một hệ thống đơn giản, linh hoạt và nhanh một cách đáng ngạc nhiên có thể vượt các kết quả tốt nhất trước đó.

Cơ chế ở đây giống với câu hỏi tu từ của [ResNet](resnet.md): paper gọi tên điều người đọc đang mong đợi rồi đảo ngược nó, tạo ra một sự bất ngờ có chủ đích. Điều quan trọng là lời khẳng định không phải "đơn giản mà vẫn đủ tốt" mà là "đơn giản và tốt hơn". Một lời khẳng định mạnh như vậy chỉ đứng vững khi bảng kết quả chính thực sự cho thấy phương pháp vượt các hệ thống phức tạp hơn, và Mask R-CNN có đủ bằng chứng để làm điều đó.

### Chỉ ra một khiếm khuyết bị bỏ qua trong thành phần ai cũng dùng

Faster R-CNN trích đặc trưng cho mỗi vùng đề xuất (RoI, Region of Interest) bằng phép RoIPool, cho ra một bản đồ đặc trưng có kích thước cố định. RoIPool làm tròn (lượng tử hóa) tọa độ của vùng và của các ô con, gây ra độ lệch nhỏ giữa vùng trên ảnh và đặc trưng được trích. Với bài toán phân loại, vốn khá bền vững với dịch chuyển nhỏ, độ lệch này ít ảnh hưởng. Với mask cần chính xác tới pixel, nó gây hại lớn. Paper nói thẳng rằng Faster R-CNN không được thiết kế để căn chỉnh pixel-với-pixel giữa đầu vào và đầu ra của mạng, rồi đề xuất RoIAlign: bỏ hoàn toàn bước làm tròn và dùng nội suy song tuyến (bilinear interpolation) để tính giá trị đặc trưng tại các điểm lấy mẫu.

Cách trình bày này hiệu quả vì ba lý do. Nó phê bình một thành phần mà ai cũng dùng chứ không phê bình một đối thủ cụ thể, nên người đọc nhận ra vấn đề ngay lập tức. Nó giải thích vì sao khiếm khuyết đó chỉ trở nên nghiêm trọng ở bài toán đang xét (yêu cầu độ chính xác pixel), qua đó giải thích luôn vì sao các công trình trước bỏ qua nó. Và nó đặt một cái tên dễ nhớ, RoIAlign, cho một sửa đổi nhỏ, khiến sửa đổi đó trở thành một khái niệm được trích dẫn và dùng lại rộng rãi về sau.

### Tách hai việc tưởng như phải đi cùng nhau

Insight thứ hai liên quan tới cách dự đoán mask. Các phương pháp phân đoạn ngữ nghĩa kiểu FCN thường dùng softmax trên tất cả các lớp tại mỗi pixel, khiến các lớp cạnh tranh với nhau. Mask R-CNN tách hai việc này: nhánh mask dự đoán một mask nhị phân độc lập cho mỗi lớp bằng sigmoid, còn việc chọn lớp do nhánh phân loại của hộp quyết định. Lý do được trình bày rất trực quan: một khi nhánh phát hiện đã quyết định đối tượng thuộc lớp nào, nhánh mask chỉ cần trả lời "pixel này có thuộc đối tượng hay không" cho lớp đó, nên sự cạnh tranh giữa các lớp là không cần thiết.

Bảng dưới đây tóm tắt hai insight cùng thiết kế và bằng chứng tương ứng.

| Insight | Thiết kế | Ablation chứng minh |
|---|---|---|
| RoIPool lượng tử hóa gây lệch pixel, hại mask vốn cần độ chính xác cao | **RoIAlign**: nội suy song tuyến, không làm tròn | So sánh RoIPool, RoIWarp và RoIAlign: cải thiện lớn, rõ nhất ở metric chặt (AP75) và với đặc trưng có stride lớn |
| Kết hợp mask với phân lớp (softmax theo pixel) tạo cạnh tranh không cần thiết giữa các lớp | **Decouple**: mask nhị phân cho mỗi lớp (sigmoid), lớp do nhánh hộp quyết định | Softmax so với sigmoid: khác biệt lớn |

Điểm mấu chốt là mỗi insight đi kèm một ablation trực tiếp. Reviewer không thể viết "không rõ thành phần nào tạo ra cải thiện", vì paper đã trả lời câu hỏi đó cho từng thành phần.

### Sự tổng quát là bằng chứng của sự đơn giản

Phần cuối paper mở rộng cùng framework sang ước lượng tư thế người (human pose estimation): mỗi keypoint được mô hình hóa như một mask one-hot, tức một mask chỉ có một pixel dương. Thay đổi cần thiết là tối thiểu, gần như không dùng tri thức chuyên biệt của bài toán, vậy mà kết quả trên COCO keypoint rất cạnh tranh. Về mặt lập luận, phần này không chỉ là "thêm một kết quả". Nếu một framework có thể chuyển sang một tác vụ khác với rất ít thay đổi, đó là bằng chứng cho thấy nó không phải một hệ thống được tinh chỉnh riêng cho một benchmark, mà là một nền tảng thực sự. Phần tổng quát hóa vì thế trực tiếp củng cố mục tiêu "framework nền" đã đặt ra từ Introduction.

### Cấu trúc tổng thể

Cấu trúc của paper bám sát câu chuyện trên và có thể tóm tắt như sau:

1. Introduction: bối cảnh (phát hiện đối tượng và phân đoạn ngữ nghĩa tiến bộ nhanh nhờ Fast/Faster R-CNN và FCN), mục tiêu (một framework tương đương cho instance segmentation), ý tưởng, hai chi tiết then chốt, kết quả, và mở rộng sang ước lượng tư thế.
2. Related Work ngắn gọn: họ R-CNN và các hướng tiếp cận instance segmentation (phân đoạn trước rồi phân loại, hoặc dự đoán đồng thời).
3. Mask R-CNN: nhánh mask, hàm loss, RoIAlign, kiến trúc (backbone và head), chi tiết cài đặt.
4. Experiments: instance segmentation (kết quả chính và ablation), phát hiện đối tượng, tốc độ.
5. Ước lượng tư thế người.
6. Bản arXiv về sau bổ sung thêm thí nghiệm trên Cityscapes và một số cải tiến trong phụ lục.

Độ dài các phần cũng đáng chú ý: Related Work ngắn vì đóng góp không cần định vị phức tạp, còn phần thí nghiệm dài và chi tiết vì đó là nơi luận điểm "đơn giản nhưng đúng chỗ" được chứng minh.

## Figure 1: sơ đồ tối giản thể hiện chính luận điểm

Figure 1 của Mask R-CNN là một sơ đồ framework rất gọn: ảnh đi qua backbone, RoIAlign trích đặc trưng cho từng vùng, một nhánh cho ra lớp và hộp, một nhánh nhỏ gồm vài lớp tích chập cho ra mask. Sơ đồ tối giản đến mức người đọc nhìn một lần là thấy phương pháp chỉ là "Faster R-CNN cộng thêm một nhánh". Chính sự tối giản ấy là thông điệp: hình đã hiện thực hóa claim về sự đơn giản. Nếu sơ đồ phức tạp, nó sẽ mâu thuẫn với lời khẳng định trong văn bản, và người đọc sẽ tin vào hình hơn tin vào chữ.

Ngay sau đó là một hình kết quả định tính trên tập test của COCO, với mask nhiều màu trên những cảnh đa dạng. Caption ghi kèm backbone, độ chính xác mask và tốc độ chạy khoảng 5 khung hình mỗi giây, nên chỉ riêng hình và caption đã truyền tải được cả "tốt thế nào" lẫn "nhanh thế nào". Paper còn có một hình minh họa RoIAlign (lưới đặc trưng, vùng RoI và các điểm lấy mẫu) để chi tiết then chốt trở nên trực quan, và một hình so sánh với phương pháp thắng cuộc thi trước đó ở những vùng các đối tượng chồng lấn nhau, nơi phương pháp cũ có lỗi hệ thống. Hình so sánh này nhắm đúng vào điểm yếu mà Mask R-CNN tuyên bố khắc phục, thay vì chọn những ảnh mà mọi phương pháp đều làm tốt.

Có thể thấy mỗi hình trong paper đảm nhận một vai trò riêng: sơ đồ trả lời "đơn giản thế nào", hình kết quả trả lời "tốt thế nào", hình RoIAlign trả lời "chi tiết then chốt là gì", và hình so sánh trả lời "hơn phương pháp cũ ở đâu". Đây là một cách lập kế hoạch figure đáng học, được bàn kỹ hơn ở bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md).

## Thí nghiệm như một chuỗi lập luận

Kết quả chính so sánh Mask R-CNN với các hệ thống thắng cuộc thi phân đoạn COCO 2015 và 2016, và paper dùng cụm từ nổi tiếng *"without bells and whistles"*, nghĩa là không cần thêm các kỹ thuật bổ trợ như huấn luyện và kiểm tra đa tỉ lệ hay ghép nhiều mô hình. Cụm từ này có sức nặng vì nó được đặt cạnh một bảng số cho thấy phương pháp vượt cả những hệ thống có dùng các kỹ thuật như vậy. Một lời khẳng định về sự đơn giản luôn cần được neo vào một so sánh cụ thể; nếu không, nó chỉ là một tính từ.

Tiếp theo là bảng ablation, được tổ chức thành nhiều bảng con, mỗi bảng con trả lời một câu hỏi thiết kế:

- Backbone sâu hơn và tốt hơn có giúp ích không? Có, và điều này cho thấy framework hưởng lợi trực tiếp từ những tiến bộ của backbone.
- Mask đa lớp (softmax) hay mask độc lập (sigmoid)? Mask độc lập tốt hơn rõ rệt, xác nhận insight về việc tách mask khỏi phân lớp.
- Mask riêng cho từng lớp hay một mask chung không phân biệt lớp? Mask chung gần như hiệu quả tương đương, càng củng cố thêm rằng việc tách hai nhiệm vụ là hợp lý.
- RoIPool, RoIWarp hay RoIAlign? RoIAlign cải thiện lớn, đặc biệt ở AP75 (độ chính xác trung bình tính với ngưỡng trùng khớp chặt 75%) và với đặc trưng có stride lớn, đúng nơi mà độ lệch do làm tròn gây hại nhiều nhất.
- Nhánh mask dạng FCN hay dạng MLP? FCN tốt hơn, cho thấy việc giữ cấu trúc không gian của mask là quan trọng.

Sau ablation, paper báo cáo kết quả phát hiện đối tượng (hộp), cho thấy huấn luyện thêm nhánh mask còn cải thiện cả chất lượng hộp, và tách bạch phần cải thiện do RoIAlign với phần do huấn luyện đa nhiệm. Rồi đến phần tốc độ, chứng minh cho claim "chi phí nhỏ", và cuối cùng là ước lượng tư thế người cho claim tổng quát hóa.

| Claim trong Introduction | Thí nghiệm chứng minh |
|---|---|
| Đơn giản mà vượt các hệ thống phức tạp | Bảng kết quả chính so với các hệ thống thắng cuộc thi COCO 2015, 2016 |
| RoIAlign là chi tiết then chốt | Bảng con so sánh các phép pooling, nhấn vào AP75 và stride lớn |
| Tách mask khỏi phân lớp là then chốt | Bảng con softmax so với sigmoid; mask riêng từng lớp so với mask chung |
| Chi phí thêm nhỏ, chạy nhanh | Phân tích tốc độ huấn luyện và suy luận |
| Framework tổng quát | Ước lượng tư thế người với thay đổi tối thiểu |

Bảng trên cho thấy một tính chất quan trọng: mọi claim trong Introduction đều có một thí nghiệm tương ứng, và mọi thí nghiệm đều phục vụ ít nhất một claim. Không có thí nghiệm "cho đủ bộ", cũng không có claim bị bỏ lơ. Đây là hình mẫu của nguyên tắc [thiết kế thí nghiệm theo claim](../01-truoc-khi-viet/thi-nghiem.md).

## Bảng ablation dạng "bảng con"

Phong cách trình bày ablation của Mask R-CNN có ảnh hưởng lớn tới cộng đồng: một Table duy nhất gồm nhiều bảng con nhỏ, đánh nhãn (a), (b), (c)…, mỗi bảng con chỉ vài dòng và trả lời đúng một câu hỏi. Caption của mỗi bảng con nêu câu hỏi và kết luận chính, nên người đọc lướt có thể nắm được kết luận mà không cần đọc từng con số. Cách làm này tiết kiệm chỗ (rất quý trong giới hạn tám trang điển hình của hội nghị CV) và dễ đọc hơn nhiều so với một bảng lớn trộn lẫn mọi biến thể. Về sau, MAE, ConvNeXt và rất nhiều paper CV khác dùng lại phong cách này, thường kèm theo việc tô xám cài đặt mặc định để người đọc biết dòng nào là cấu hình được dùng trong các thí nghiệm chính.

Khung LaTeX dưới đây minh họa cách dựng một bảng như vậy. Các con số được để trống có chủ đích; người học thay bằng kết quả thật của dự án.

```latex
% Cần: \usepackage{booktabs} \usepackage[table]{xcolor} \usepackage{subcaption}
\begin{table*}[t]
\centering
\begin{minipage}[t]{0.32\linewidth}
  \centering
  \begin{tabular}{lcc}
    \toprule
    pooling & AP & AP$_{75}$ \\
    \midrule
    RoIPool & -- & -- \\
    \rowcolor{gray!15} RoIAlign & -- & -- \\
    \bottomrule
  \end{tabular}
  \subcaption{\textbf{Pooling}: removing quantization helps most at strict IoU.}
\end{minipage}\hfill
\begin{minipage}[t]{0.32\linewidth}
  \centering
  \begin{tabular}{lcc}
    \toprule
    mask loss & AP & AP$_{75}$ \\
    \midrule
    softmax & -- & -- \\
    \rowcolor{gray!15} sigmoid & -- & -- \\
    \bottomrule
  \end{tabular}
  \subcaption{\textbf{Decoupling}: per-class binary masks outperform softmax.}
\end{minipage}\hfill
\begin{minipage}[t]{0.32\linewidth}
  \centering
  \begin{tabular}{lcc}
    \toprule
    mask head & AP & AP$_{75}$ \\
    \midrule
    MLP & -- & -- \\
    \rowcolor{gray!15} FCN & -- & -- \\
    \bottomrule
  \end{tabular}
  \subcaption{\textbf{Mask head}: preserving spatial layout matters.}
\end{minipage}
\caption{\textbf{Ablations.} Default settings are marked in \colorbox{gray!15}{gray}.}
\label{tab:ablation}
\end{table*}
```

!!! tip "Viết caption cho bảng con"
    Caption tốt của một bảng con có hai phần: tên câu hỏi in đậm và một mệnh đề kết luận ngắn. Một caption chỉ ghi "Effect of pooling" buộc người đọc tự rút kết luận; một caption ghi "Pooling: removing quantization helps most at strict IoU" trao luôn kết luận cho họ, và đó chính là kết luận người viết muốn reviewer mang theo khi viết review.

## Văn phong

Văn phong của Mask R-CNN tự tin nhưng luôn được bảo chứng. Những cụm như *"without bells and whistles"* hay *"surprisingly simple"* xuất hiện đúng chỗ có bằng chứng đi kèm, nên chúng đọc như một nhận định chứ không như một lời quảng cáo.

Điểm đáng học thứ hai là sự đơn giản được định lượng. Paper không để "simple" lơ lửng như một tính từ mà cụ thể hóa nó thành các mệnh đề kiểm chứng được: dễ huấn luyện, chỉ thêm một chi phí nhỏ so với Faster R-CNN, chạy khoảng 5 khung hình mỗi giây. Mỗi mệnh đề đều có số liệu hoặc thí nghiệm hỗ trợ.

Điểm thứ ba là sự nhất quán của thuật ngữ. Hai chi tiết then chốt được gọi bằng đúng những cái tên ấy (RoIAlign, decoupling mask và class prediction) ở abstract, Introduction, Method và ablation. Người đọc không bao giờ phải tự hỏi một thuật ngữ mới xuất hiện có phải là thứ đã nói trước đó hay không. Sự nhất quán này tưởng như hiển nhiên, nhưng là lỗi rất phổ biến ở bản thảo đầu tay, như đã phân tích ở bài [Tiếng Anh học thuật](../03-ky-thuat/van-phong.md).

## Bài học cho người viết

Mask R-CNN cung cấp một chiến lược hoàn chỉnh để trình bày một ý tưởng đơn giản. Bước đầu là đặt tiêu chí đánh giá sao cho sự đơn giản trở thành mục tiêu, chẳng hạn bằng cách định vị đóng góp như một framework nền. Bước thứ hai là chỉ ra một chi tiết nhỏ có tác động lớn mà trước đó bị bỏ qua, giải thích vì sao nó quan trọng ở bài toán đang xét, và đặt cho nó một cái tên. Bước thứ ba là chứng minh mỗi lựa chọn bằng một ablation riêng, gom gọn trong các bảng con. Bước thứ tư là cho thấy khả năng tổng quát hóa sang tác vụ khác với thay đổi tối thiểu. Cuối cùng, sự đơn giản cần được định lượng bằng chi phí, tốc độ hoặc số thành phần thêm vào, thay vì chỉ được khẳng định bằng tính từ.

Chiến lược này áp dụng trực tiếp cho NLP và Machine Learning, nơi những đóng góp "đơn giản" rất phổ biến: một thay đổi trong objective huấn luyện, một cách chuẩn hóa mới, một sửa đổi trong cách khởi tạo hay cách tạo prompt. Ở NLP, người viết có thể chỉ ra một sự không khớp bị bỏ qua, chẳng hạn giữa điều kiện lúc pre-training và lúc fine-tuning, cô lập nó bằng một ablation riêng, rồi chứng minh tính tổng quát bằng cách áp dụng trên nhiều tác vụ hoặc nhiều ngôn ngữ. Ở Machine Learning, nơi reviewer đặc biệt nhạy với nhận xét "incremental", cách phản bác hiệu quả nhất vẫn là cô lập cơ chế bằng thí nghiệm có kiểm soát và cho thấy sửa đổi chuyển được qua nhiều kiến trúc và nhiều tập dữ liệu. Phong cách bảng con cũng không phải đặc quyền của CV: bất kỳ paper nào có nhiều lựa chọn thiết kế đều hưởng lợi từ việc mỗi câu hỏi có một bảng nhỏ và một kết luận rõ ràng.

## Tóm tắt

Mask R-CNN cho thấy sự đơn giản có thể là luận điểm chính của một paper xuất sắc, với điều kiện nó được đóng khung đúng và được bảo chứng đầy đủ. Paper định vị đóng góp như một framework nền, gọi tên kỳ vọng "phải phức tạp" của người đọc rồi đảo ngược nó, và chỉ ra hai chi tiết then chốt (RoIAlign và việc tách mask khỏi phân lớp) mà sự đơn giản phụ thuộc vào. Mỗi chi tiết có một ablation riêng trong một bảng gồm nhiều bảng con, mỗi claim trong Introduction có một thí nghiệm tương ứng, và khả năng mở rộng sang ước lượng tư thế người củng cố tính tổng quát. Hệ thống hình ảnh, từ sơ đồ tối giản tới hình so sánh nhắm đúng điểm yếu của phương pháp cũ, mỗi hình đảm nhận một vai trò riêng trong lập luận.

## Bài tập

1. Liệt kê các "chi tiết nhỏ nhưng quan trọng" trong phương pháp của dự án hiện tại. Với mỗi chi tiết, viết một câu giải thích vì sao nó quan trọng ở bài toán đang xét, và kiểm tra xem đã có ablation riêng cho nó chưa.
2. Gom các ablation của dự án thành một Table gồm nhiều bảng con theo khung LaTeX ở trên, tô xám cài đặt mặc định, và viết caption cho mỗi bảng con theo dạng "câu hỏi: kết luận".
3. Viết ba câu định lượng hóa sự đơn giản của phương pháp (ví dụ chi phí tính toán thêm, số tham số thêm, thời gian huấn luyện, số dòng code thay đổi), mỗi câu kèm thí nghiệm hoặc phép đo hỗ trợ.
4. Tìm một tác vụ thứ hai mà phương pháp có thể áp dụng với thay đổi tối thiểu. Ước lượng chi phí làm thí nghiệm đó và cân nhắc nó sẽ củng cố claim nào trong Introduction.
