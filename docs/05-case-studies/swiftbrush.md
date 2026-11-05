# Case study: SwiftBrush (CVPR 2024)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper CVPR chọn một trục định vị duy nhất (quá trình distillation có cần ảnh huấn luyện hay không) và giữ trục đó xuyên suốt abstract, Introduction, Related Work và phần thí nghiệm.
    - Nhận ra kỹ thuật chuyển một công cụ từ bài toán lân cận (text-to-3D) sang bài toán đích (text-to-image) bằng cách chỉ ra "điểm tiếp xúc" giữa hàm mất mát và đối tượng được tối ưu.
    - Đánh giá tính công bằng của một bảng so sánh khi các baseline khác nhau về số bước suy luận, teacher, dữ liệu huấn luyện và nguồn gốc con số.
    - Đọc đúng một ablation trình bày bằng đường cong huấn luyện giai đoạn đầu, kể cả giới hạn của nó.
    - Chỉ ra những chỗ có thể viết chặt chẽ hơn (claim về tính mới, vị trí của số liệu hiệu quả, hệ ký hiệu trong bảng, giao thức user study) và đề xuất cách sửa cụ thể.

Phần lớn các case study về Computer Vision trong chương này là những paper kinh điển. Case study này xét một paper gần đây với quy mô tài nguyên khiêm tốn hơn nhiều, được chấp nhận tại CVPR 2024 trong chủ đề cạnh tranh gay gắt là tăng tốc mô hình sinh ảnh từ văn bản:

**SwiftBrush: One-Step Text-to-Image Diffusion Model with Variational Score Distillation**, của Thuan Hoang Nguyen và Anh Tran. Theo trang dự án và kho mã chính thức, hai tác giả thuộc VinAI Research (Việt Nam). Phân tích dưới đây dựa trên bản arXiv 2312.05239 (phiên bản v7, dạng HTML); bản trong kỷ yếu CVPR có thể khác ở một số chi tiết. Bản văn bản được dùng không hiển thị khối thông tin tác giả, hình teaser và các con số bên trong bảng (chỉ có caption), nên bài này chỉ nêu những con số xuất hiện trong phần văn bản của paper.

Paper là một ví dụ giá trị cho người học Việt Nam vì những lý do kiểm chứng được trong văn bản: một paper hai tác giả từ một phòng nghiên cứu trong nước, chỉ cần một teacher công khai (Stable Diffusion v2.1) và một tập caption, không cần tập ảnh nào; phụ lục ước tính chi phí chưng cất khoảng 4,11 ngày GPU A100 (cách tính được bàn ở phần thí nghiệm), trong khi Introduction dẫn lại rằng một phương pháp đối thủ cần ít nhất 108 ngày GPU A100; mã nguồn được công bố trên GitHub. Đóng góp đến từ một cách nhìn lại bài toán chứ không từ quy mô dữ liệu hay tính toán, một mô hình khả thi với các nhóm có tài nguyên hạn chế. Người học có thể đọc thêm case study [Anti-DreamBooth](anti-dreambooth.md), một paper khác của VinAI Research về mô hình khuếch tán text-to-image.

## Bối cảnh: cuộc đua giảm số bước lấy mẫu

Mô hình khuếch tán (diffusion model) sinh ảnh bằng cách khử nhiễu dần qua nhiều bước (xem case study [DDPM](ddpm.md)); ngay cả Stable Diffusion, phiên bản công khai của Latent Diffusion Model (xem case study [LDM](mae-ldm.md#ldm)), vẫn cần hàng chục lượt chạy mạng UNet cho mỗi ảnh. Hướng tăng tốc mà paper chọn là distillation theo bước thời gian (time-step distillation): huấn luyện một mô hình học trò (student) bắt chước mô hình thầy (teacher) với ít bước hơn. Theo phần tổng quan của paper, đã có vài phương pháp giảm số bước xuống còn vài bước hoặc một bước: Guided Distillation chưng cất qua hai giai đoạn, Latent Consistency Model (LCM) ép tính nhất quán của các điểm trên quỹ đạo ODE, InstaFlow dùng kỹ thuật "reflow" làm thẳng quỹ đạo lấy mẫu trước khi chưng cất, và BOOT, một công trình đồng thời, chưng cất mà không cần ảnh.

Mảnh ghép thứ hai đến từ bài toán sinh 3D từ văn bản (text-to-3D). DreamFusion tối ưu một NeRF (xem case study [NeRF](nerf.md)) sao cho ảnh render được một mô hình text-to-image 2D "chấm điểm" là khớp với prompt, qua hàm mất mát Score Distillation Sampling (SDS), mà không cần dữ liệu 3D. SDS hay gây màu quá bão hòa, ảnh quá mịn và kém đa dạng; ProlificDreamer khắc phục bằng Variational Score Distillation (VSD), thêm một teacher thứ hai là bản tinh chỉnh LoRA (Low-Rank Adaptation) của mô hình diffusion, liên tục học phân phối của những ảnh đang được render. SwiftBrush ra đời ở giao điểm của hai mạch này.

Tại CVPR, mô hình sinh được đánh giá qua cả số liệu lẫn so sánh trực quan, và cách SwiftBrush xử lý chỗ nó không thắng về con số là một điểm đáng học.

## Câu chuyện một dòng

> Các phương pháp distillation một bước cho text-to-image hoặc cho ảnh mờ, hoặc cần quy trình nhiều giai đoạn tốn kém, và đều dựa vào nhiều cặp văn bản–ảnh; nhóm tác giả nhận ra rằng hàm mất mát VSD của text-to-3D chỉ chạm tới đối tượng được tối ưu thông qua một ảnh 2D, nên có thể thay NeRF bằng một generator một bước, từ đó chưng cất Stable Diffusion thành mô hình một bước mà **không cần một ảnh huấn luyện nào**.

Câu chuyện có đủ các mắt xích đã học ở bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md): khoảng trống, công cụ mượn từ lĩnh vực lân cận, insight về lý do công cụ chuyển được, và hệ quả.

Đặt cạnh case study [Streaming ITN](streaming-itn.md) sẽ thấy một khác biệt về lối lập luận: paper ấy mượn công cụ của dịch máy đồng thời rồi dồn sức chỉ ra vì sao nó **chưa vừa** với bài toán mới, còn SwiftBrush làm điều ngược lại: nó lập luận rằng công cụ **vừa gần như nguyên vẹn**, và biến sự đơn giản thành điểm mạnh ("In spite of its simplicity", như abstract viết). Rủi ro của lối lập luận này là reviewer có thể xem paper như phép cộng "A áp dụng cho B", nên gánh nặng chứng minh dồn vào hai việc: giải thích vì sao phép chuyển hợp lệ, và cho thấy những sửa đổi nhỏ đi kèm thực sự cần thiết.

## Title và abstract

### Title: tên gợi hình, mô tả và kỹ thuật

Title theo mẫu "Tên: mô tả" đã phân tích ở bài [Title](../02-viet-tung-phan/title.md). "SwiftBrush" gợi cùng lúc tốc độ (*swift*) và hội họa (*brush*), dễ nhớ và khớp với mục tiêu. Phần mô tả nêu đối tượng (*One-Step Text-to-Image Diffusion Model*) và kỹ thuật (*Variational Score Distillation*); việc gọi tên VSD giúp người đọc thuộc cộng đồng text-to-3D nhận ra ngay cây cầu khái niệm.

Điều đáng cân nhắc là tính chất *image-free*, thuộc tính được abstract đặt ở trung tâm, lại vắng mặt trong title; "one-step" là thuộc tính chung của InstaFlow, BOOT và nhiều công trình khác. Một phương án như "SwiftBrush: Distilling Text-to-Image Diffusion Models into One Step without Training Images" nêu được tính chất ấy nhưng mất cây cầu tới cộng đồng 3D. Bài học nằm ở thao tác kiểm tra: liệt kê hai hoặc ba thuộc tính phân biệt paper với đối thủ gần nhất, rồi xem title mang thuộc tính nào và bỏ sót thuộc tính nào.

### Abstract: bảy câu, một câu gánh quá nhiều

Abstract gồm bảy câu, khoảng hai trăm từ, và bám khá sát khuôn ở bài [Abstract](../02-viet-tung-phan/abstract.md):

| Câu | Chức năng | Nội dung (diễn giải) |
|---|---|---|
| 1 | Bối cảnh, vấn đề | Diffusion text-to-image sinh ảnh tốt nhưng lấy mẫu lặp lại chậm |
| 2 | Hướng chung | Distillation là một trong những hướng tăng tốc hiệu quả nhất |
| 3 | Khoảng trống | Các phương pháp trước không giữ được chất lượng và cần nhiều ảnh, thật hoặc do teacher sinh ra |
| 4 | Đóng góp | Một sơ đồ distillation không cần ảnh, tên là SwiftBrush |
| 5 | Cơ chế | Text-to-3D thu được NeRF không cần dữ liệu 3D nhờ một hàm mất mát đặc biệt; paper dùng lại hàm đó để chưng cất teacher nhiều bước thành student một bước |
| 6 | Định vị | Một trong những generator một bước đầu tiên đạt chất lượng tương đương Stable Diffusion mà không dùng ảnh huấn luyện |
| 7 | Kết quả | FID 16,67 và CLIP score 0,29 trên COCO-30K, cạnh tranh hoặc vượt các phương pháp distillation hiện có |

Abstract có ba điểm mạnh. Câu khoảng trống dùng một phân loại chính xác ("from real data or synthetically generated by the teacher model"), nên các phương pháp chỉ dùng ảnh do teacher sinh ra vẫn thuộc nhóm phụ thuộc vào ảnh. Câu cơ chế dựng một phép song song tự nhiên: text-to-3D có NeRF không cần dữ liệu 3D, vậy text-to-image có thể có student không cần ảnh. Và cụm "In spite of its simplicity" biến sự đơn giản thành ưu điểm.

Có bốn chỗ có thể tốt hơn. Câu 5 dài khoảng 67 từ, gánh cả phép so sánh, cơ chế lẫn kết quả qua một mệnh đề phụ "in which…" dài. Câu này gọi hàm mất mát là "a specialized loss" mà không nêu tên VSD, dù title đã nêu. Hai con số FID và CLIP score không có điểm tham chiếu, còn cụm "competitive results or even substantially surpassing" quá chung. Và dù tốc độ là động lực của cả paper, abstract không có con số nào về hiệu quả, chẳng hạn thời gian suy luận khoảng 110 ms mỗi ảnh mà phụ lục báo cáo. Một phiên bản minh họa (không phải của nhóm tác giả), chỉ dùng thông tin có trong paper:

<div class="good" markdown>

*"… In text-to-3D, Variational Score Distillation (VSD) obtains a NeRF from a 2D diffusion prior without 3D data. We observe that VSD interacts with the NeRF only through its rendered images, and replace the NeRF with a one-step student. Without a single training image, SwiftBrush reaches an FID of 16.67 and a CLIP score of 0.29 on COCO-30K, competitive with image-dependent methods, obtains the best HPSv2 scores among one-step methods, and is preferred over InstaFlow in a user study, generating an image in about 110 ms."*

</div>

## Introduction: bốn đoạn, một trục định vị đến muộn

Introduction gồm bốn đoạn, không có danh sách đóng góp tường minh, và kết thúc bằng việc dẫn tới hình teaser.

### Đoạn 1: mở rộng trước khi thu hẹp

Đoạn đầu mở bằng thành công của diffusion trong nhiều tác vụ sinh, chuyển sang text-to-image và các kỹ thuật bổ sung khả năng điều khiển như ControlNet (xem case study [ControlNet](sam-controlnet.md#controlnet)) và DreamBooth; chỉ ở hai câu cuối, vấn đề mới xuất hiện: tốc độ suy luận chậm do bản chất lặp của quá trình lấy mẫu. Việc nhắc tới ControlNet và DreamBooth có giá trị cấu trúc, vì mục Discussion quay lại đúng hai kỹ thuật này; nhưng ba câu đầu có thể đặt vào gần như bất kỳ paper diffusion nào, và như bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md) đã phân tích, reviewer thường lướt qua chúng. Một câu mở đi thẳng vào điểm nghẽn, chẳng hạn *"Text-to-image diffusion models require tens of network evaluations per image, which hinders their deployment on consumer devices"*, sẽ hiệu quả hơn.

### Đoạn 2: mỗi đối thủ một điểm yếu

Đoạn thứ hai điểm qua từng đối thủ kèm một điểm yếu cụ thể: Guided Distillation phức tạp và cần ít nhất 108 ngày GPU A100; LCM cho kết quả một bước bị mờ; InstaFlow được thừa nhận là vượt trội so với framework diffusion gốc nhưng cần lịch huấn luyện bốn giai đoạn tốn kém. Cách trình bày này dựng lên một ô trống rõ ràng, và việc thừa nhận ưu thế của InstaFlow làm phần phê bình đáng tin hơn.

Vấn đề là vị trí của trục định vị quan trọng nhất: khoảng trống chính của abstract, sự phụ thuộc vào cặp văn bản–ảnh, chỉ xuất hiện ở câu cuối đoạn, mở bằng "Also, it is noteworthy that…" như một ý phụ, với lý do khá mỏng là dữ liệu như vậy không phải lúc nào cũng dễ tiếp cận. Thuộc tính phân biệt paper với mọi đối thủ xứng đáng có một câu riêng, một lý do có trích dẫn và một câu hỏi nghiên cứu:

<div class="good" markdown>

*"More fundamentally, all of these methods are image-dependent: they require large collections of text-image pairs, either real or synthesized by the teacher, which [concrete reason, with citation]. Can a one-step student be distilled from text prompts alone?"*

</div>

### Đoạn 3: insight, và một claim cần hiệu chỉnh

Đoạn thứ ba giải thích rằng text-to-3D tạo được NeRF mà không cần dữ liệu 3D vì một mô hình 2D đánh giá ảnh render có thực tế hay không, "akin to the discriminator in GANs". Phép so sánh giúp người có nền tảng GAN nắm cơ chế ngay.

Đoạn này cũng chứa một claim mạnh: SwiftBrush là quá trình distillation "conceptually novel", "uniquely capable of operating without 2D image supervision". Tới Related Work, người đọc gặp hai thông tin đi ngược chữ *uniquely*: BOOT cũng chưng cất mà không cần ảnh (paper tự viết "our approach is similarly image-free"), và Score GAN cùng Diff-Instruct cũng dùng một hàm mất mát giống VSD để chưng cất thành generator một bước. Cụm "one of the first" của abstract đã được hiệu chỉnh tốt hơn. Introduction nên dùng đúng mức ấy và nói luôn điểm khác với công trình đồng thời, dựa trên chính mô tả về BOOT trong Related Work:

<div class="good" markdown>

*"Together with the concurrent BOOT, SwiftBrush is among the first image-free one-step distillation methods for large-scale text-to-image models. Unlike BOOT, which learns a time-conditioned model to predict the teacher's output at any time step, SwiftBrush directly optimizes a one-step student with VSD, resulting in a simpler design."*

</div>

### Đoạn 4: chữ "first time", hình teaser và danh sách đóng góp vắng mặt

Đoạn cuối báo cáo FID và CLIP score trên MS COCO 2014, rồi khẳng định đây là lần đầu một mô hình một bước được chưng cất vượt các phương pháp trước mà không dùng một ảnh huấn luyện nào. FID ở đây được viết là 16,6, trong khi abstract ghi 16,67; cùng một con số nên được viết giống nhau ở mọi nơi. Quan trọng hơn, cụm "outperforms the previous approaches" có phạm vi mơ hồ: nếu bao gồm cả các phương pháp cần ảnh, claim mâu thuẫn với phần kết quả, nơi paper thừa nhận InstaFlow đạt FID tốt hơn. Phát biểu chính xác hơn sẽ tách hai nhóm: vượt phương pháp image-free trước đó, và cạnh tranh với các phương pháp cần ảnh.

Câu cuối dẫn tới một hình teaser trình bày ảnh do mô hình chưng cất sinh ra. Trong bản HTML được phân tích, tham chiếu này hiển thị thành nhãn chưa phân giải ("LABEL:fig:teaser") và hình không xuất hiện, nên bài này không bình luận về nội dung của hình. Hai bài học tổng quát vẫn rút ra được: với paper về mô hình sinh tại CVPR, teaser là bằng chứng đầu tiên reviewer nhìn thấy (xem cách ControlNet dùng Figure 1 ở case study [ControlNet](sam-controlnet.md#controlnet)), và một hàng so sánh kèm thời gian suy luận sẽ truyền tải cả hai luận điểm *nhanh* và *không cần ảnh*; ngoài ra, người viết nên mở bản HTML của chính paper trên arXiv để phát hiện tham chiếu hỏng.

Introduction cũng không kết bằng danh sách đóng góp, một quy ước phổ biến ở CVPR; ba gạch đầu dòng (sơ đồ chỉ cần prompt; phép chuyển VSD kèm tham số hóa lại student; bộ đánh giá cùng số liệu chi phí) sẽ giúp reviewer đối chiếu từng claim với bằng chứng.

## Related Work: ba cộng đồng, ba câu định vị

Mục Related Work gồm ba đoạn ứng với ba cộng đồng mà paper bắc cầu (sinh ảnh từ văn bản, sinh 3D từ văn bản, knowledge distillation), và mỗi đoạn kết bằng một câu định vị, đúng như bài [Related Work](../02-viet-tung-phan/related-work.md) khuyến nghị.

Đoạn về text-to-image nêu sự đánh đổi giữa GAN (nhanh nhưng khó mở rộng) và diffusion (mở rộng tốt nhưng lấy mẫu lâu), rồi đặt mục tiêu kết hợp tốc độ của GAN với chất lượng của diffusion. Đoạn về text-to-3D kể dòng phát triển tới ProlificDreamer và nói thẳng "Influenced by the latter work, our method adapts the same technique", một sự thẳng thắn đáng ghi nhận. Đoạn về distillation chia các phương pháp trước thành nhóm thừa hưởng hạn chế "image-dependent in training" (LCM, InstaFlow, Guided Distillation) và nhóm image-free với BOOT, rồi xếp SwiftBrush vào nhóm sau. Trục định vị của abstract nhờ vậy trở thành một phân loại tường minh, và đoạn giới thiệu Table 1 dùng lại đúng phân loại ấy khi nói rằng bảng so sánh với các phương pháp distillation "both image-dependent and image-free".

Chỗ yếu nhất nằm ở câu kết đoạn text-to-3D: Score GAN và Diff-Instruct "use a VSD-like loss to distill a pretrained diffusion model to a one-step generator". Theo chính mô tả này, đây là hai công trình gần SwiftBrush nhất về cơ chế. Thế nhưng chúng chỉ được nhắc trong một câu mở bằng "Similarly", không câu nào nói SwiftBrush khác chúng ở đâu, và phần văn bản của mục thí nghiệm lẫn phụ lục không bàn tới kết quả của chúng (người đọc nên đối chiếu Table 1 trong bản PDF). Reviewer quen với Diff-Instruct sẽ hỏi "điểm mới là gì?", nên đoạn này đáng được viết kỹ nhất:

<div class="good" markdown>

*"Closest to our work, Score GAN [6] and Diff-Instruct [24] also distill a pretrained diffusion model into a one-step generator with a VSD-like objective. They [setting, scale and teacher of their experiments]; in contrast, SwiftBrush [the specific difference]. We further compare with them in [Section / Table]."*

</div>

Các ô trong ngoặc vuông phải được điền bằng thông tin kiểm chứng được; nếu không tìm được khác biệt thực chất, đó là tín hiệu về tính mới cần xử lý trước khi nộp.

## Phương pháp: chứng minh rằng công cụ chuyển được

Section 3.1 trình bày kiến thức nền; Section 3.2 trình bày SwiftBrush qua ba đoạn (Motivation, Design Space, Student Parameterization), kèm Figure 1 và Algorithm 1. Độ ngắn của mục phù hợp với luận điểm "đơn giản" của paper.

### Kiến thức nền có định hướng

Section 3.1 dừng ở đúng những gì phần sau cần, theo tinh thần bài [Method](../02-viet-tung-phan/method.md), và cuối đoạn SDS báo trước rằng các suy giảm của SDS cũng xuất hiện trong framework của paper, như Section 4.3 sẽ cho thấy; câu hỏi của ablation được đặt ra ngay từ phần nền. Ký hiệu cũng được chọn có chủ đích: trong Eq. 4 và Eq. 5, $\theta$ là tham số của NeRF và $g(\theta, c)$ là ảnh render ở góc camera $c$; ở Section 3.2, $\theta$ trở thành tham số của student $f_\theta(z, y)$. Nhờ vậy phép thay thế hiện ra trên mặt công thức: dòng 10 của Algorithm 1 chính là Eq. 5 với $\partial g(\theta, c)/\partial \theta$ được thay bằng $\partial \hat{x}_0/\partial \theta$. Một điểm nhỏ cần thống nhất: hàm trọng số là $w(t)$ trong Eq. 4–5 nhưng là $\omega(t)$ trong Algorithm 1.

### Đoạn Motivation: chỉ ra điểm tiếp xúc

Đoạn Motivation chỉ có ba câu nhưng gánh toàn bộ lý do vì sao ý tưởng chuyển được. SDS và VSD chỉ gắn với mục tiêu text-to-3D một cách lỏng lẻo, "loosely connect to that goal via the rendered image". Thật vậy, trong Eq. 5, NeRF chỉ xuất hiện qua ảnh $g(\theta, c)$ và đạo hàm của ảnh theo $\theta$; hai teacher chỉ nhìn thấy ảnh 2D đã thêm nhiễu. Hàm mất mát không quan tâm ảnh được tạo ra bằng cách nào, miễn là quá trình tạo ảnh khả vi theo tham số, nên có thể thay bộ render bằng một generator một bước. Đây là kỹ thuật lập luận dùng lại được: khi mượn một công cụ, hãy xác định **giao diện** giữa công cụ và đối tượng nó tác động; nếu giao diện ở bài toán đích cùng kiểu với bài toán gốc, phép chuyển là hợp lý, và việc còn lại là liệt kê những gì khác đi.

```mermaid
flowchart LR
    subgraph G["Text-to-3D với VSD"]
        N["NeRF θ, khớp với một prompt"] --> R["Render g(θ, c) theo góc camera c"]
    end
    subgraph S["SwiftBrush"]
        F["Student f_θ(z, y), dùng chung cho mọi prompt"] --> O["Ảnh sinh một bước từ nhiễu z và prompt y"]
    end
    R --> I["Ảnh 2D khả vi theo θ"]
    O --> I
    I --> T["Thêm nhiễu, đưa qua teacher cố định ε_ψ và teacher LoRA ε_φ"]
    T --> V["Gradient VSD truyền ngược về θ"]
```

Đoạn Design Space liệt kê những gì thay đổi:

| Thành phần | Text-to-3D với VSD (ProlificDreamer) | SwiftBrush |
|---|---|---|
| Đối tượng được tối ưu | Một NeRF, khớp riêng với một prompt | Một student $f_\theta(z, y)$ tổng quát cho mọi prompt |
| Đầu vào sinh ảnh | Góc camera $c$ | Nhiễu Gauss $z$ và prompt $y$ |
| Teacher thứ hai | Bản LoRA của teacher, thêm lớp điều kiện theo góc camera | Bản LoRA của teacher, bỏ điều kiện camera ("unnecessary in our case") |
| Khởi tạo | Teacher LoRA khởi tạo từ teacher gốc | Cả teacher LoRA và student đều khởi tạo từ teacher gốc |
| Lịch cập nhật | Xen kẽ teacher LoRA và NeRF | Xen kẽ teacher LoRA và student, teacher gốc đóng băng |

Paper có thể đi xa hơn ở một điểm. Khác biệt lớn nhất giữa hai bài toán, NeRF tối ưu cho một prompt còn student phải tổng quát cho mọi prompt, chỉ được nêu trong một mệnh đề phụ. Theo mô tả của paper, teacher LoRA phải liên tục thích nghi với phân phối đầu ra hiện tại của đối tượng được tối ưu, và với một generator cho mọi prompt, phân phối ấy phong phú hơn nhiều. Kết quả ablation (LoRA hạng 4 dẫn tới mode collapse, hạng 64 ổn định) có thể được đọc là phù hợp với nhận xét này. Đây là một cách diễn giải gợi ý, không phải điều paper khẳng định; nếu được phát biểu thành giả thuyết với ablation làm bằng chứng, lựa chọn hạng 64 sẽ trở thành một thiết kế có lý do, và câu hỏi "chỉ là A áp dụng cho B?" có thêm một câu trả lời.

### Tham số hóa student: một chi tiết nhỏ được biện minh đủ ba lớp

Stable Diffusion được thiết kế để dự đoán nhiễu $\epsilon$, trong khi student cần xuất ra ảnh sạch $x_0$; dùng thẳng đầu ra của mạng tạo ra một khoảng cách lớn giữa điều student phải học và điều mạng vốn làm. Paper tham số hóa lại:

$$
f_\theta(z, y) = \frac{z - \sigma_T\, \epsilon_\theta(z, T, y)}{\alpha_T}
$$

và chỉ ra rằng đây chính là Eq. 1 khi đặt $t = T$, $x_t = z$. Chi tiết nhỏ này được biện minh qua đủ ba lớp: **lý do** (khoảng cách giữa dự đoán nhiễu và dự đoán ảnh), **dẫn xuất** (suy ra từ một phương trình đã có) và **bằng chứng** (cấu hình "No Parameterization" ở Section 4.3 chỉ sinh ra ảnh nhiễu). Chữ "empirically" được dùng trung thực, thừa nhận đây là lựa chọn kỹ thuật kiểm chứng bằng thực nghiệm. Với lối lập luận "đơn giản là điểm mạnh", chính những chi tiết như thế cho thấy phép chuyển không hoàn toàn hiển nhiên.

### Figure 1 và Algorithm 1

Trong bản arXiv được phân tích, Figure 1 là hình tổng quan hệ thống với caption tự đứng được: student nhận prompt và nhiễu, đầu ra được thêm nhiễu rồi đưa qua hai teacher để tính gradient VSD, teacher LoRA được cập nhật bằng hàm mất mát diffusion, hai luồng cập nhật luân phiên. Người chỉ đọc caption đã nắm được vòng huấn luyện, đúng yêu cầu ở bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md). Điểm cần cải thiện là hai luồng chỉ được phân biệt bằng màu xanh lá và đỏ, cặp màu khó phân biệt nhất với dạng mù màu phổ biến nhất; nét liền, nét đứt hoặc nhãn chữ sẽ giải quyết mà không tốn chỗ.

Algorithm 1 có một giá trị riêng: dòng *Require* liệt kê teacher, teacher LoRA, student, learning rate, hàm trọng số, lịch nhiễu và một **tập prompt**, không có tập ảnh nào. Chính pseudo-code trở thành bằng chứng cho tính chất image-free, đồng thời ghi những chi tiết dễ bị bỏ sót trong văn xuôi, như khoảng lấy mẫu bước thời gian khác nhau cho student và cho teacher LoRA.

## Thí nghiệm: so sánh công bằng khi đối thủ dùng nhiều tài nguyên hơn

!!! note "Giới hạn của nguồn văn bản"
    Bản văn bản được dùng chứa caption của Table 1 tới Table 4 nhưng không chứa các con số bên trong bảng. Các nhận xét dưới đây dựa trên những gì phần văn bản và caption khẳng định; khi cần con số của từng baseline, người đọc nên tra bản PDF.

### Thiết lập và nguồn số liệu

Paper đánh giá zero-shot trên COCO 2014 bằng FID (khoảng cách giữa phân phối đặc trưng của ảnh sinh và ảnh thật, càng thấp càng tốt) và CLIP score (mức khớp ảnh–văn bản, càng cao càng tốt) trên 30.000 mẫu của tập validation, theo một giao thức được trích dẫn từ bốn công trình trước, và trên HPSv2, một mô hình dự đoán sở thích của con người. Implementation Details liệt kê gần như đủ siêu tham số, và tập prompt được mô tả rõ: 4 triệu caption từ JourneyDB, loại trùng còn 1,38 triệu, một chi tiết cần thiết với paper có luận điểm "chỉ cần prompt".

Số liệu baseline đến từ ba nguồn: con số báo cáo trong paper gốc, ảnh tự sinh bằng checkpoint công khai (InstaFlow, LCM) và bản cài đặt lại (BOOT). Các bảng đánh dấu nguồn bằng ký hiệu, một thực hành minh bạch đáng học, nhưng ký hiệu đổi nghĩa giữa các bảng. Trong Table 1, † là số từ paper gốc, § là số đo bằng checkpoint công khai, còn ∗ được mô tả là "using the pretrained models", gần như trùng với §. Trong Table 2, † lại là số đo bằng checkpoint công khai; trong Table 3, † trở về nghĩa số từ paper gốc; trong Figure 3, SD† là Stable Diffusion một bước. Một cột "Source" ghi chữ (*reported*, *official checkpoint*, *our re-impl.*) sẽ loại bỏ sự nhầm lẫn. Văn bản cũng không nói các con số chép từ paper gốc có dùng cùng backbone CLIP (ViT-G/14) hay không.

### Công bằng theo ba trục: số bước, teacher và dữ liệu

Bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) nhấn mạnh rằng so sánh công bằng đòi hỏi kiểm soát mọi yếu tố ngoài đóng góp; với distillation có ba yếu tố như vậy.

**Số bước suy luận** được xử lý tốt nhất. Caption Table 1 nói rõ số in đậm và gạch chân chỉ xếp hạng *trong các mô hình một bước*; Stable Diffusion 25 bước chỉ là mốc tham chiếu. Figure 3 đặt cả Stable Diffusion 25 bước lẫn một bước cạnh các phương pháp chưng cất, kẹp kết quả giữa một trần và một sàn, cho thấy distillation lấy lại được bao nhiêu chất lượng.

**Teacher** được kiểm soát một phần. SwiftBrush và bản cài đặt lại của BOOT cùng dùng Stable Diffusion v2.1, nên so sánh giữa hai phương pháp image-free có kiểm soát; đổi lại, BOOT bị tách khỏi thiết lập gốc (DeepFloyd IF), và paper trung thực thừa nhận kết quả mờ của BOOT có thể do khác teacher. Với InstaFlow và LCM, văn bản không nói checkpoint được chưng cất từ teacher nào, nên người đọc khó tách tác động của teacher khỏi tác động của phương pháp.

**Dữ liệu huấn luyện** là trục mà sự bất cân xứng có lợi cho đối thủ, và paper khai thác điều đó đúng cách khi mở phần kết quả bằng "Despite being trained with only text captions". Hai cột "Teacher" và "Training data" trong Table 1 sẽ khiến hai trục sau hiện ra chỉ với một cái liếc mắt.

### Khi không thắng ở metric chính

Phần định lượng thừa nhận thẳng rằng SwiftBrush tốt hơn các phương pháp khác "with exceptions of InstaFlow and Stable Diffusion (25 sampling steps) in FID score", rồi đưa ra ba câu trả lời: InstaFlow cần bốn giai đoạn chưng cất; trên HPSv2, SwiftBrush đạt điểm tốt nhất ở cả bốn khía cạnh trong số các phương pháp được so sánh; và trong một user study với 400 người trên 30 prompt ngẫu nhiên, SwiftBrush được chọn nhiều hơn InstaFlow về cả chất lượng ảnh lẫn độ khớp văn bản. User study không so với mọi baseline mà nhắm đúng đối thủ đã thắng ở FID: bằng chứng bổ sung được đặt đúng chỗ người đọc còn nghi ngờ.

Hai câu trả lời có thể chặt hơn. Cụm "Instaflow is so complex" là một tính từ chủ quan ở đúng chỗ đã có số liệu, vì Table 3 so sánh thời gian huấn luyện; câu *"InstaFlow attains a lower FID but requires a four-stage pipeline and [N] A100 GPU days (Table 3)"* biến lời khẳng định thành phép so sánh kiểm chứng được. User study cần giao thức đầy đủ hơn: văn bản không nói 30 prompt lấy từ đâu, vị trí hai ảnh có được hoán đổi ngẫu nhiên không, mỗi người đánh giá bao nhiêu cặp, và chênh lệch có ý nghĩa thống kê không (xem bài [Experiments](../02-viet-tung-phan/experiments.md)).

### So sánh định tính và mẫu không chọn lọc

Figure 3 xếp ảnh theo lưới, mỗi hàng một prompt, mỗi cột một mô hình, và văn bản chỉ đích danh từng ô, chẳng hạn InstaFlow xử lý kém prompt phức tạp ở ảnh thứ ba và thứ năm của cột thứ ba. Cách này cho reviewer kiểm chứng thay vì phải tin một lời khen chung, nhưng tham chiếu theo vị trí bắt người đọc đếm và dễ sai khi bố cục đổi ở bản camera-ready; đánh dấu các ô ấy bằng khung hoặc nhãn trong hình sẽ chắc chắn hơn.

Phụ lục có Figure 7 tới Figure 10 trình bày mẫu không chọn lọc (uncurated) của SwiftBrush, InstaFlow, BOOT và LCM, câu trả lời tốt nhất cho nghi ngờ "ảnh đã được chọn kỹ". Tuy nhiên, không chỗ nào trong văn bản tham chiếu tới bốn hình này. Bằng chứng không được dẫn tới thường là bằng chứng không được nhìn thấy.

### Ablation: đọc đường cong huấn luyện giai đoạn đầu

Section 4.3 so sánh bốn cấu hình, mỗi cấu hình bỏ đúng một thành phần: Full, No Parameterization, Small-Rank LoRA (hạng 4) và SDS (bỏ teacher LoRA). Cả bốn được huấn luyện 10.000 iteration và đánh giá trên 5.000 ảnh COCO; Figure 4 vẽ đường cong FID và CLIP score. Không có teacher LoRA, ảnh quá bão hòa và đường cong gần như phẳng; không tham số hóa lại, student chỉ sinh ảnh nhiễu; còn LoRA hạng 4 ban đầu cho kết quả khá nhưng FID xấu đi từ khoảng 8.000 bước, dẫn tới mode collapse. Kết quả cuối cho thấy giá trị riêng của đường cong: một con số cuối cùng sẽ che mất hiện tượng "tốt lên rồi sụp đổ".

Thiết kế này có bốn giới hạn. Ngân sách 10.000 iteration chỉ là một phần của khoảng 65.000 iteration huấn luyện chính; paper nói rõ mục đích "to observe their training dynamics at the early phase" nhưng không giải thích vì sao thứ hạng giai đoạn đầu phản ánh thứ hạng cuối, điều một con số ở cuối huấn luyện đầy đủ sẽ trả lời. Hạng LoRA chỉ được so ở 4 và 64, nên người đọc không biết 64 là ngưỡng cần thiết hay chỉ là giá trị được chọn. Không có ablation cho lựa chọn gắn trực tiếp với luận điểm chính: một phương pháp "chỉ cần prompt" cần bao nhiêu prompt? Và văn bản gọi tên đường cong bằng màu ("flat red curve", "green curves"), lặp lại vấn đề của Figure 1.

Đoạn "Interpolating Latent" cuối Section 4.3 nhận xét rằng student "seemingly features enhanced control and editability compared to the teacher model". Chữ "seemingly" là một sự hiệu chỉnh tốt, nhưng claim so sánh với teacher cần kết quả của teacher đặt cạnh, trong khi caption của Figure 6, 11 và 12 chỉ mô tả đầu ra của SwiftBrush.

### Phụ lục: những con số hiệu quả lẽ ra thuộc về phần chính

Section 6 ở phụ lục chứa những con số quan trọng nhất cho luận điểm "nhanh và dễ huấn luyện": trên một GPU A100 40GB với batch size tối đa 16, huấn luyện đạt khoảng 15.825 iteration mỗi ngày, nên 65.000 lượt cập nhật cần khoảng 4,11 ngày GPU; thời gian suy luận là 110 ms, gồm UNet 25 ms, text encoder 80 ms và VAE 5 ms. Section 8 bổ sung kết quả trên CIFAR-10 và ImageNet 64×64.

Có ba nhận xét. Thứ nhất, **vị trí bất cân xứng**: Introduction dùng con số 108 ngày GPU của Guided Distillation làm luận cứ, nhưng chi phí và tốc độ của chính SwiftBrush chỉ nằm ở phụ lục, và Table 3 không được tham chiếu từ phần chính. Như bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md) nhấn mạnh, phụ lục bổ sung chi tiết chứ không chứa bằng chứng cho claim chính. Thứ hai, **cách tính ngày GPU khó đối chiếu**: Implementation Details ghi batch size 64 với 16 mẫu mỗi GPU, tức mỗi iteration dùng nhiều GPU, còn phép tính 65.000/15.825 lại khớp với kịch bản một GPU chạy batch 16. Nếu batch 64 được chia trên bốn GPU với thông lượng như đã nêu, tổng số ngày GPU sẽ vào khoảng gấp bốn. Báo cáo tách bạch số GPU, thời gian thực và tổng số ngày GPU sẽ xóa nghi vấn. Thứ ba, **một insight chưa được khai thác**: text encoder chiếm 80 trong 110 ms, nghĩa là sau khi chưng cất xuống một bước, UNet không còn là điểm nghẽn; một câu nhận xét như vậy sẽ biến bảng số liệu thành một phát hiện. Kết quả trên CIFAR-10 và ImageNet, bằng chứng rằng phương pháp không gắn riêng với Stable Diffusion, cũng không được nhắc trong phần chính.

## Limitations, kết luận và văn phong

Section 5 có tên "Conclusion and Discussion". Phần Discussion nêu hai hạn chế: SwiftBrush "inevitably" cho chất lượng thấp hơn teacher nhiều bước, và thiết kế hiện tại chỉ hỗ trợ một bước, chưa hỗ trợ sinh vài bước như LCM. Ba hướng tiếp theo là mở rộng sang vài bước để đánh đổi tính toán lấy chất lượng, huấn luyện chỉ với một teacher cho tình huống thiếu tài nguyên, và tích hợp với DreamBooth, ControlNet hay InstructPix2Pix. Hạn chế được nói thẳng, mỗi hạn chế có hướng giải quyết, và việc quay lại DreamBooth cùng ControlNet khép vòng với Introduction.

Mục này có thể bổ sung những hạn chế mà chính paper đã cung cấp bằng chứng: quá trình chưng cất nhạy với hạng của teacher LoRA; kết quả có thể thay đổi theo teacher (như ghi chú về BOOT gợi ý), trong khi text-to-image chỉ được kiểm chứng với Stable Diffusion v2.1; và phần chính không báo cáo một thước đo riêng cho độ đa dạng, dù VSD được giới thiệu một phần để khắc phục sự kém đa dạng của SDS. Khác với ACL Rolling Review, nơi mục Limitations là bắt buộc, CVPR những năm gần đây thường không bắt buộc một mục riêng; người viết nên kiểm tra Author Guidelines của năm nộp.

Về văn phong, có ba nhóm vấn đề. Nhóm thứ nhất là **tính từ tăng cường**: "remarkable" hoặc "Remarkably" xuất hiện bảy lần trong abstract và phần thân, bên cạnh "exceptional quality" và "so complex"; như bài [Tiếng Anh học thuật](../03-ky-thuat/van-phong.md) phân tích, mỗi tính từ như vậy là một claim không kèm bằng chứng. Nhóm thứ hai là **giọng tranh luận**: paper viết rằng nhóm tác giả "compelled to re-implement BOOT" vì mã nguồn "remains entirely closed"; một câu trung tính như *"Since neither text-to-image metrics nor code are publicly available for BOOT, we re-implement it following the original paper"* giữ sự chú ý của người đọc ở nội dung. Nhóm thứ ba là **lỗi soát bản** còn sót trong bản arXiv v7: "they lacks behind", "can be easily scale up", "unable to to create", prompt "An DSLR photo" trong Figure 5 và Figure 13, tên baseline lúc "Instaflow" (sáu lần trong phần chính) lúc "InstaFlow" (năm lần), "LORA" trong caption Figure 1. Gộp lại, những lỗi nhỏ này gây cảm giác vội vàng (bản trong kỷ yếu có thể đã sửa một số); bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md) gợi ý một lượt soát cuối chuyên tìm biến thể chính tả của tên phương pháp và baseline.

## Bài học cho người viết

**Chọn một trục định vị và để nó xuất hiện ở mọi tầng.** Tính chất image-free có mặt trong abstract, trong phân loại của Related Work, trong đoạn giới thiệu Table 1 và trong dòng *Require* của Algorithm 1, nhưng yếu đi ở Introduction và vắng mặt ở title.

**Khi mượn công cụ, chỉ ra điểm tiếp xúc, rồi chứng minh các sửa đổi là cần thiết.** Đoạn Motivation giải thích vì sao VSD chuyển được; ablation về tham số hóa lại và hạng LoRA cho thấy phép chuyển không hoàn toàn hiển nhiên.

**Hiệu chỉnh claim về tính mới một lần, rồi dùng đúng phiên bản đó ở mọi nơi.** "One of the first", "uniquely capable" và "similarly image-free" là ba mức khẳng định cho cùng một điều; reviewer đọc cả ba sẽ chọn mức thấp nhất.

**Bằng chứng cho claim chính phải nằm ở phần chính, và phải đối chiếu được.** Khi tốc độ và chi phí là luận điểm, thời gian suy luận và số ngày GPU cần có mặt trong phần chính, báo cáo đủ số GPU, thời gian thực và tổng ngày GPU.

**Phân bổ bằng chứng theo chỗ người đọc nghi ngờ, kèm đủ giao thức.** User study nhắm đúng đối thủ thắng ở FID là một lựa chọn sắc sảo; nó thuyết phục hơn nhiều khi kèm nguồn prompt, cách ngẫu nhiên hóa và kiểm định thống kê.

**Bảng nói rõ nguồn số liệu, teacher, số bước và dữ liệu; đường cong ablation nêu ngân sách và gọi tên bằng chữ.** Ký hiệu nguồn phải nhất quán giữa các bảng, và các cột "Source", "Teacher", "Training data" biến thông tin rải rác thành thứ người đọc thấy ngay.

Các bài học này nối với nhiều bài khác của giáo trình. Mượn một công cụ từ bài toán lân cận là một nguồn ý tưởng được bàn ở bài [Tìm khoảng trống & nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md); khi reviewer đáp lại bằng câu "chỉ là A áp dụng cho B", các lối ra có ở bài [Khi novelty và hiệu quả lệch pha](../07-tinh-huong-kho/novelty-va-hieu-qua.md). Việc hiệu chỉnh các claim "đầu tiên", "duy nhất" thuộc bài [Ghép ý tưởng và "độn" đóng góp](../07-tinh-huong-kho/ghep-va-don.md), cách viết về công trình đồng thời như BOOT thuộc bài [Áp lực từ bên ngoài](../07-tinh-huong-kho/ap-luc-ben-ngoai.md), còn tình huống thua ở metric chính nhưng thắng ở đánh giá của con người, cùng tình huống nhóm ít tài nguyên phải so với đối thủ dùng nhiều tài nguyên hơn, được phân tích ở bài [Khi con số không đẹp](../07-tinh-huong-kho/con-so-khong-dep.md). Những chỗ chưa nhất quán mà bài này chỉ ra là loại lỗi mà một lượt tự đọc theo bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md) có thể bắt được trước khi nộp.

### Áp dụng sang các cộng đồng khác

Trong **NLP**, trục "có cần dữ liệu có nhãn hay không" đóng vai trò tương tự trục image-free; nộp ACL hay EMNLP, một paper như SwiftBrush sẽ cần mục Limitations đầy đủ theo yêu cầu của ARR, và đánh giá bằng người phải kèm cách tuyển chọn người đánh giá và mức đồng thuận (xem [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md)). Trong **Machine Learning**, reviewer NeurIPS hay ICLR sẽ hỏi vì sao VSD vẫn hoạt động khi đối tượng được tối ưu là một generator cho mọi đầu vào, đòi phân biệt chính xác với Diff-Instruct và Score GAN bằng thí nghiệm, và muốn thấy kết quả CIFAR-10, ImageNet 64×64 trong phần chính (xem [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md)). Trong **Computer Vision**, SwiftBrush đã đáp ứng phần lớn kỳ vọng quen thuộc (so sánh trực quan, mẫu không chọn lọc, user study); bài học còn lại nằm ở chi tiết trình bày như tham chiếu theo nhãn và không phân biệt thành phần chỉ bằng màu.

## Tóm tắt

SwiftBrush dựng câu chuyện trên một trục định vị rõ ràng (các phương pháp distillation một bước đều cần nhiều cặp văn bản–ảnh, còn SwiftBrush chỉ cần prompt) và một insight: VSD chỉ chạm tới NeRF qua ảnh 2D render ra, nên có thể thay NeRF bằng một student một bước. Phần thí nghiệm kiểm soát tốt số bước suy luận, minh bạch về nguồn số liệu, và đặt user study đúng vào chỗ paper thua InstaFlow ở FID. Những chỗ có thể viết tốt hơn gồm claim về tính mới không nhất quán giữa các mục, hai công trình gần nhất về cơ chế chỉ được nhắc trong một câu, ký hiệu nguồn số liệu đổi nghĩa giữa các bảng, giao thức user study sơ lược, số liệu chi phí nằm ở phụ lục với cách tính ngày GPU khó đối chiếu, cùng một số tính từ mạnh và lỗi soát bản. Tất cả đều là bài học về sự khớp nhau giữa claim, bằng chứng và vị trí đặt bằng chứng.

## Bài tập

1. Viết lại câu thứ năm trong abstract của SwiftBrush thành hai câu, gọi tên VSD, phát biểu insight về điểm tiếp xúc và thêm một con số về hiệu quả. Câu nào khác trong abstract có thể rút gọn để bù lại độ dài?
2. Xác định trục định vị của dự án hiện tại và kiểm tra nó có mặt ở title, abstract, câu cuối mỗi đoạn Related Work và một cột của bảng kết quả chính hay không; với mỗi chỗ vắng mặt, viết một câu bổ sung.
3. Với một kỹ thuật trong dự án được mượn từ lĩnh vực khác, viết một đoạn theo khuôn đoạn Motivation: kỹ thuật tác động tới đối tượng qua giao diện nào, cái gì phải thay đổi ở bài toán mới, và ablation nào chứng minh thay đổi đó là cần thiết.
4. Thêm vào bảng so sánh chính của bản thảo các cột "Source", "Teacher/backbone", "Training data" và "Inference cost". Mỗi ô không điền được là một câu hỏi reviewer có thể đặt ra; liệt kê chúng.
5. Viết giao thức cho một user study trong dự án (nguồn và cách chọn mẫu, ngẫu nhiên hóa vị trí, câu hỏi nguyên văn, số phán đoán mỗi người, cách xử lý lựa chọn "ngang nhau", kiểm định thống kê) thành một đoạn dùng được cho phụ lục.
6. Rà soát bản thảo qua ba lượt: thay tính từ tăng cường bằng con số hoặc xóa; tìm mọi biến thể chính tả của tên phương pháp và baseline; kiểm tra mọi con số xuất hiện nhiều lần có được viết giống nhau không.
