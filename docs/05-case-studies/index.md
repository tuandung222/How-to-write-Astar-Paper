# 5. Case studies: mổ xẻ paper kinh điển

> Cách nhanh nhất để học một nghề thủ công là quan sát thật kỹ những sản phẩm tốt nhất của nghề đó.

Bốn chương trước đã lần lượt trình bày cách thẩm định ý tưởng, xây dựng câu chuyện, viết từng phần của paper, trau chuốt văn phong và đi qua quy trình nộp bài. Những nguyên tắc ấy, dù đúng, vẫn còn trừu tượng chừng nào người học chưa thấy chúng vận hành trong một văn bản cụ thể. Một lời khuyên như "Figure 1 phải mang thông điệp chính của paper" chỉ thực sự có nghĩa khi đặt cạnh biểu đồ training error của ResNet hay sơ đồ ba trụ của Segment Anything, nơi người đọc có thể tự hỏi: vì sao tác giả chọn hình này mà không chọn hình khác, và lựa chọn đó phục vụ lập luận như thế nào?

Chương 5 vì vậy đóng vai trò cầu nối giữa nguyên tắc và thực hành. Chương phân tích mười paper có ảnh hưởng lớn thuộc ba cộng đồng Computer Vision, NLP và Machine Learning, thêm ba paper gần đây (hai paper Interspeech của cộng đồng xử lý tiếng nói và một paper Findings of EMNLP), rồi khép lại bằng một bài thực hành đi qua toàn bộ quy trình cho một paper giả định. Mỗi case study không nhằm tóm tắt nội dung kỹ thuật, vì việc đó các bài tổng quan và giáo trình chuyên ngành đã làm tốt, mà nhằm trả lời câu hỏi của người viết: paper được dựng lên như thế nào, câu chuyện được dẫn dắt ra sao, bằng chứng được sắp theo trật tự nào, và những lựa chọn ấy có thể chuyển sang paper của người học bằng cách nào.

Chương được đặt sau các chương kỹ năng vì người học cần có sẵn bộ từ vựng (câu chuyện một dòng, insight, claim, ablation, Figure 1) để nhận ra các lựa chọn của tác giả. Tuy vậy, chương cũng có thể đọc song song: khi đang viết Introduction, người học có thể mở một case study để xem Introduction của một paper kinh điển được tổ chức ra sao; khi đang thiết kế bảng ablation, có thể xem cách Mask R-CNN hay MAE gom ablation thành các bảng con.

## Vì sao học viết qua case study

Viết paper là một kỹ năng mang tính tay nghề. Phần lớn bí quyết không nằm trong hướng dẫn tác giả của hội nghị mà được truyền lại qua việc quan sát người giỏi làm, qua các vòng góp ý của người hướng dẫn và qua những bản review. Một paper đoạt giải hoặc được trích dẫn rộng rãi thường là kết quả của nhiều vòng chỉnh sửa; mỗi chi tiết như title, hình đầu tiên, thứ tự các bảng hay cách gọi tên một hiện tượng đều đã được cân nhắc. Đọc kỹ những paper như vậy là cách tiếp cận các quyết định đó mà không phải tự trải qua chừng ấy vòng thử sai.

Tuy nhiên, cần đọc với một sự tỉnh táo nhất định. Một paper trở thành kinh điển không chỉ nhờ cách viết: ý tưởng mạnh, thời điểm ra đời, tài nguyên tính toán lớn và uy tín của nhóm tác giả đều góp phần. Vì thế mục tiêu không phải là sao chép hình thức, chẳng hạn bắt chước một title dạng khẳng định khi kết quả chưa đủ mạnh để gánh nó, mà là rút ra những nguyên tắc có thể chuyển giao: cách biến một quan sát thành động lực, cách để mỗi đóng góp có một bằng chứng tương ứng, cách sắp thí nghiệm theo trật tự câu hỏi của một người đọc hoài nghi. Những nguyên tắc ấy giữ nguyên giá trị dù paper của người học có quy mô nhỏ hơn nhiều và nhắm tới bất kỳ cộng đồng nào.

## Đọc một paper "với con mắt người viết"

Khi đọc để học kiến thức, người ta tập trung vào câu hỏi "paper này làm gì và kết quả ra sao". Khi đọc để học viết, câu hỏi chuyển thành "paper này thuyết phục người đọc bằng cách nào". Sự chuyển đổi đó đòi hỏi chú ý tới những thứ thường bị lướt qua: câu mở đầu của Introduction, caption (chú thích) của từng hình, vị trí của một bảng ablation, hay một câu ngắn trong phần thảo luận thừa nhận giới hạn của phương pháp.

Một cách đọc hiệu quả là đọc ba lượt với ba mục đích khác nhau. Lượt thứ nhất chỉ đọc title, abstract và lướt qua toàn bộ các hình, với mục tiêu viết lại được câu chuyện một dòng của paper mà không cần nhìn vào văn bản. Lượt thứ hai đọc Introduction thật chậm, đánh dấu chức năng của từng đoạn (bối cảnh, khoảng trống, insight, phương pháp, kết quả, đóng góp) theo khuôn đã học ở bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md), đồng thời ghi lại danh sách các claim. Lượt thứ ba đọc phần thí nghiệm với danh sách claim đặt bên cạnh, nối mỗi claim với bảng hoặc hình chứng minh nó, và để ý những thí nghiệm không phục vụ trực tiếp claim nào mà tồn tại để trả lời trước một phản biện có thể có.

Trong suốt quá trình đó, một bộ câu hỏi cố định giúp việc quan sát có hệ thống hơn:

- Câu chuyện một dòng của paper là gì, và nó xuất hiện ở những chỗ nào (title, câu đầu abstract, cuối Introduction)?
- Figure 1 mang thông điệp gì: một hiện tượng, một phương pháp hay một kết quả? Thông điệp ấy có khớp với abstract không?
- Mỗi claim được chứng minh ở bảng hoặc hình nào? Có claim nào thiếu bằng chứng trực tiếp không?
- Thí nghiệm nào mang tính "phòng thủ", tức là tồn tại để loại trừ một giải thích thay thế?
- Paper đặt tên cho những khái niệm nào, và cách đặt tên ấy giúp người đọc nhớ ra sao?
- Paper thừa nhận giới hạn ở đâu, và cách thừa nhận đó làm tăng hay giảm độ tin cậy?

Các case study trong chương đều đi theo một khung chung tương ứng với bộ câu hỏi trên: bối cảnh ra đời, câu chuyện một dòng, phân tích câu chuyện và cấu trúc, Figure 1, chuỗi thí nghiệm, văn phong, và cuối cùng là bài học cho người viết. Mục bài học luôn có một đoạn bàn về việc chuyển bài học sang các cộng đồng khác, vì một nguyên tắc chỉ đáng học khi nó vượt ra ngoài paper cụ thể đã sinh ra nó.

## Tổng quan các case study

Mười paper được chọn sao cho bao phủ nhiều kiểu đóng góp: kiến trúc mới, mở rộng một framework có sẵn, biểu diễn mới, paradigm pre-training, framework hiệu quả, bộ ba task–model–dataset, phương pháp đánh giá, thuật toán tối ưu và mô hình sinh. Kiểu đóng góp quyết định phần lớn cách viết. Một paper kiến trúc phải chứng minh vai trò của từng thành phần bằng ablation; một paper dataset phải thuyết phục về chất lượng và tính trách nhiệm của dữ liệu; một paper đánh giá phải cho thấy công cụ của nó phát hiện được điều mà cách đánh giá cũ bỏ sót. Vì vậy, khi chọn case study để đọc trước, nên ưu tiên những paper có kiểu đóng góp gần với dự án đang thực hiện.

Người học cũng nên đọc trước nhóm thuộc cộng đồng gần nhất, nhưng không nên dừng ở đó: hãy đọc ít nhất một case study của mỗi nhóm còn lại. Nhiều bài học có tính xuyên cộng đồng, và việc so sánh chéo thường rất bổ ích. MAE tự định vị trực tiếp so với BERT; Latent Diffusion và DDPM cho thấy cùng một họ mô hình được trình bày khác nhau thế nào ở một hội nghị CV và một hội nghị ML; ControlNet lại xây trên chính Latent Diffusion.

### Computer Vision

Năm trang đầu phân tích bảy paper CV, từ một kiến trúc nền tảng của học sâu tới các paper về foundation model. Hai trang ghép đôi hai paper cùng hội nghị để làm nổi bật sự tương phản giữa chúng.

| Paper | Hội nghị, giải thưởng | Kiểu đóng góp | Bài học viết chính |
|---|---|---|---|
| [ResNet](resnet.md) | CVPR 2016, Best Paper | Kiến trúc mới | Biến một quan sát đáng ngạc nhiên thành động lực; thí nghiệm loại trừ giả thuyết và đối chứng có kiểm soát |
| [Mask R-CNN](mask-rcnn.md) | ICCV 2017, Marr Prize | Mở rộng đơn giản, tổng quát của framework có sẵn | Viết về sự đơn giản như một điểm mạnh; mỗi chi tiết then chốt có một ablation riêng, gom thành bảng con |
| [NeRF](nerf.md) | ECCV 2020, Best Paper Honorable Mention | Biểu diễn mới | Title như một abstract thu nhỏ; mỗi contribution ablate được; hình ảnh và video là bằng chứng chính |
| [MAE](mae-ldm.md#mae) | CVPR 2022 | Paradigm pre-training | Introduction dẫn dắt bằng một câu hỏi; mỗi góc phân tích dẫn tới một quyết định thiết kế |
| [Latent Diffusion](mae-ldm.md#ldm) | CVPR 2022 | Framework hiệu quả | Insight từ một phân tích rate–distortion; một framework cho nhiều tác vụ; hai trục giá trị chất lượng và chi phí |
| [Segment Anything](sam-controlnet.md#sam) | ICCV 2023, Best Paper Honorable Mention | Task, model và dataset | Cấu trúc ba trụ phản chiếu trong Figure 1 và các section; đánh giá zero-shot diện rộng; Responsible AI |
| [ControlNet](sam-controlnet.md#controlnet) | ICCV 2023, Marr Prize | Kiến trúc điều khiển cho mô hình có sẵn | Động lực hóa một chi tiết nhỏ (zero convolution); kết hợp nhiều loại bằng chứng cho bài toán khó đo |

### NLP

Hai paper NLP kinh điển đại diện cho hai kiểu đóng góp rất khác nhau: một mô hình pre-training làm thay đổi cả lĩnh vực, và một phương pháp đánh giá không đề xuất mô hình nào. Paper thứ hai đặc biệt hữu ích cho người viết đang lo rằng đóng góp không phải "một phương pháp mới" thì khó được nhận. Paper thứ ba là một paper gần đây được nhận vào Findings: một phương pháp Mixture-of-Experts tổng quát đặt vào bài toán dịch máy, được phân tích cả điểm mạnh lẫn những câu hỏi mà reviewer ARR có thể đặt ra.

| Paper | Hội nghị, giải thưởng | Kiểu đóng góp | Bài học viết chính |
|---|---|---|---|
| [BERT](bert.md) | NAACL 2019, Best Long Paper | Phương pháp pre-training và mô hình | Định vị theo một trục duy nhất (một chiều hay hai chiều) so với đúng đối thủ; baseline có kiểm soát ngay từ khâu thiết kế; thừa nhận và xử lý tác dụng phụ của chính thiết kế |
| [CheckList](checklist-acl2020.md) | ACL 2020, Best Paper | Phương pháp đánh giá | Thuyết phục khi đóng góp không phải mô hình: một ma trận năng lực và loại test làm xương sống cho cả paper; kiểm thử chính các mô hình mạnh nhất và hệ thống thương mại; nghiên cứu với người thực hành |
| [EDWARD-NMT](edward-nmt.md) | Findings of EMNLP 2026 | Kiến trúc MoE co giãn cho dịch máy | Một khẩu hiệu gói cả câu chuyện; ánh xạ một–một giữa hạn chế và thành phần; Related Work có câu định vị cuối mỗi đoạn; phụ lục cho tái lập; kiểm tra sự nhất quán của con số và đóng vai reviewer ARR |

### Machine Learning / Deep Learning

Ba paper ML/DL cho thấy những kỳ vọng đặc trưng của NeurIPS, ICML và ICLR: một kiến trúc được biện minh bằng các tiêu chí như độ phức tạp tính toán và khả năng song song hóa, một thuật toán đi kèm phân tích lý thuyết (cùng bài học cảnh báo khi phân tích ấy có lỗi), và một mô hình sinh được nối với các khung lý thuyết có sẵn.

| Paper | Hội nghị | Kiểu đóng góp | Bài học viết chính |
|---|---|---|---|
| [Transformer](transformer.md) | NeurIPS 2017 (khi đó còn gọi là NIPS) | Kiến trúc mới | Title là một khẳng định; biện minh thiết kế bằng tiêu chí rõ ràng thay vì chỉ bằng kết quả; báo cáo chất lượng đi kèm chi phí huấn luyện; bảng biến thể có hệ thống |
| [Adam](adam.md) | ICLR 2015 | Thuật toán tối ưu | Algorithm box tự đứng được là sản phẩm chính; mỗi tính chất được hứa có một thí nghiệm tương ứng; bài học cảnh báo về độ chặt chẽ của phân tích lý thuyết |
| [DDPM](ddpm.md) | NeurIPS 2020 | Phương pháp mô hình sinh | Làm sống lại một ý tưởng cũ và ghi nhận sòng phẳng; kết nối với lý thuyết sẵn có để rút ra objective đơn giản; trung thực về điểm yếu (log-likelihood) và biến nó thành phân tích |

### Speech

Cộng đồng xử lý tiếng nói có hai hội nghị lớn là Interspeech và ICASSP, cả hai đều có giới hạn trang ngắn hơn nhiều so với các hội nghị ở trên. Hai case study trong nhóm này không phải paper kinh điển mà là hai paper Interspeech 2026 về tiếng Việt của cùng một nhóm tác giả, một regular paper bốn trang và một long paper tám trang. Chúng gần với hoàn cảnh của nhiều người học hơn: tài nguyên vừa phải, một ngôn ngữ ít tài nguyên, và giới hạn trang buộc mỗi dòng phải có giá trị. Đọc hai bài liền nhau cho thấy bốn trang bổ sung được dùng cho những loại bằng chứng nào. Vì là paper mới, phân tích chú ý cả những điểm có thể viết tốt hơn, không chỉ những điểm mạnh.

| Paper | Hội nghị | Kiểu đóng góp | Bài học viết chính |
|---|---|---|---|
| [ViP-VL](vip-vl.md) | Interspeech 2026 | Mô hình tiền huấn luyện tự giám sát cho một ngôn ngữ ít tài nguyên | Viết gọn trong bốn trang; ba khoảng trống, ba câu trả lời; kiểm chứng có kiểm soát trên benchmark chung trước khi trình bày kết quả tiếng Việt; phê bình điều gì thì tự làm điều đó |
| [Streaming ITN](streaming-itn.md) | Interspeech 2026, long track | Phương pháp và quy trình cho một bài toán ứng dụng | Mượn công cụ từ lĩnh vực lân cận rồi chỉ ra vì sao nó chưa vừa; nêu và bác bỏ cách sửa hiển nhiên; một bảng gánh cả so sánh lẫn ablation; khoảng tin cậy bootstrap và cách diễn giải đúng; độ trễ đuôi |

### Bài thực hành

Trang cuối cùng không phân tích paper có sẵn mà đi qua toàn bộ quy trình cho một dự án giả định, để người học thấy các chương trước ghép lại thành một chuỗi công việc liền mạch như thế nào.

| Trang | Nội dung | Bài học chính |
|---|---|---|
| [Thực hành: một paper từ con số 0](worked-example.md) | Một dự án giả định, từ ý tưởng thô tới bản nộp | Áp dụng toàn bộ giáo trình cho một dự án cụ thể, kể cả các vòng chỉnh sửa |

!!! note "Về việc trích dẫn nội dung paper gốc"
    Các phân tích trong chương **diễn giải** cấu trúc và lập luận của paper gốc bằng lời của giáo trình, không chép nguyên văn; chỉ một vài cụm từ nổi tiếng được giữ trong ngoặc kép. Các con số được nêu ở mức cần thiết cho lập luận. Người học nên mở bản PDF gốc (CVF Open Access, ACL Anthology, OpenReview, proceedings của NeurIPS hoặc arXiv) để đọc song song, vì chỉ khi đối chiếu với văn bản thật mới thấy hết những lựa chọn tinh tế của tác giả.

## Bài tập chung cho mỗi case study

Các bài tập dưới đây dùng được cho bất kỳ case study nào trong chương, và cả cho những paper mà người học tự chọn để đọc. Nên làm bài tập trước khi đọc phân tích trong giáo trình, rồi đối chiếu kết quả tự làm với phân tích đó: những chỗ khác biệt thường là nơi người học học được nhiều nhất.

1. Đọc abstract và viết lại câu chuyện một dòng của paper. So sánh với câu chuyện một dòng trong case study và ghi lại điểm khác biệt.
2. Nhìn Figure 1 trong khoảng mười giây, che caption đi, rồi viết ra thông điệp mà hình truyền tải. Thông điệp ấy có khớp với abstract không?
3. Đánh dấu chức năng của từng đoạn trong Introduction theo khuôn ở bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md). Đoạn nào làm nhiều chức năng cùng lúc, và đoạn nào lệch khỏi khuôn?
4. Lập một bảng hai cột nối mỗi contribution với bảng hoặc hình chứng minh nó. Đánh dấu những claim không có bằng chứng trực tiếp.
5. Tìm một thí nghiệm mang tính phòng thủ và viết ra câu phản biện mà thí nghiệm đó trả lời trước.
6. Chọn một bài học từ case study và viết lại một đoạn trong bản thảo của dự án hiện tại theo bài học đó.
