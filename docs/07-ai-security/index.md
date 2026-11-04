# 7. Chuyên đề: Viết paper AI Security

Sáu chương đầu của giáo trình trình bày những kỹ năng dùng được cho mọi paper: thẩm định ý tưởng, xây câu chuyện, viết từng phần, trau chuốt văn phong, nộp bài và phản hồi reviewer. Chương này áp dụng các kỹ năng đó vào một chủ đề có văn hóa viết rất riêng và đang phát triển nhanh: **an toàn và bảo mật của các hệ thống AI**, đặc biệt là prompt injection và jailbreak trên mô hình ngôn ngữ, mô hình thị giác–ngôn ngữ và các agent đa phương thức.

Một paper AI security khác một paper phương pháp thông thường ở chỗ đối tượng của nó không chỉ là mô hình mà còn là **một đối thủ giả định**. Mọi claim đều được đọc qua câu hỏi: kẻ tấn công nào, biết những gì, làm được gì, và muốn đạt điều gì? Vì vậy, những thành phần ít xuất hiện ở paper khác lại trở thành xương sống ở đây: mục **threat model**, cặp metric **tỉ lệ tấn công thành công và độ hữu ích của hệ thống**, việc đánh giá với **tấn công hoặc phòng vệ thích nghi**, và phần **đạo đức cùng công bố có trách nhiệm**. Đây cũng là lĩnh vực mà nhiều paper được nhận ở hội nghị hàng đầu dù gần như không huấn luyện mô hình nào; đóng góp thường nằm ở việc phát hiện một bề mặt tấn công, thiết kế một đánh giá đáng tin, hay một phòng vệ dễ triển khai.

Chương được tổ chức thành một trang tổng hợp và mười case study. Trang tổng hợp trả lời câu hỏi mà người mới vào lĩnh vực hay đặt ra: *đóng góp* trong AI security thường là gì, và reviewer ở mỗi loại hội nghị đánh giá chúng ra sao. Mười case study được chọn để bao phủ các kiểu đóng góp chính, từ tấn công qua ảnh, tấn công agent đa phương thức, hình thức hóa và benchmark, tới các phòng vệ dựa trên suy luận hoặc huấn luyện. Chúng đến từ nhiều cộng đồng (AAAI, ACM MM, ICLR, ACL, USENIX Security, NeurIPS, ICML), nên đặt cạnh nhau sẽ thấy rõ cùng một chủ đề được viết khác nhau thế nào cho từng loại reviewer.

!!! warning "Phạm vi của chương"
    Các trang trong chương phân tích **cách viết** của paper: cách đặt vấn đề, phát biểu threat model, thiết kế và báo cáo đánh giá, xử lý nội dung nhạy cảm. Kỹ thuật tấn công chỉ được nhắc ở mức cần thiết để hiểu lập luận của paper, không được mô tả thành hướng dẫn thực hiện. Người đọc cần chi tiết kỹ thuật nên đọc paper gốc, cùng ethics statement và chính sách công bố của nó.

## Trang tổng hợp

- [Xu hướng đóng góp trong AI Security](xu-huong-dong-gop.md) — phân loại các kiểu đóng góp (phát hiện lỗ hổng, tấn công, phòng vệ, benchmark, hình thức hóa, dataset an toàn), giải thích vì sao nhiều paper ít cần GPU mà vẫn được nhận, xu hướng 2023–2026, cách reviewer từng loại hội nghị đánh giá, và cách chọn kiểu đóng góp cho một dự án về visual hoặc multimodal prompt injection.

## Mười case study

### Tấn công qua ảnh

- [Visual Adversarial Examples Jailbreak Aligned LLMs](visual-adv-jailbreak.md) (AAAI 2024) — đóng khung đóng góp như một luận điểm về xu hướng đa phương thức; threat model tách white-box chính và black-box phụ; kết hợp đánh giá thủ công và tự động; ethics statement đặt sớm.
- [CrossInject](crossinject.md) (ACM MM 2025) — khái niệm cross-modal prompt injection và cách làm claim "đầu tiên" đứng vững; threat model có ký hiệu hình thức; một bài tập đọc soát về sự nhất quán của con số.

### Tấn công agent đa phương thức

- [Dissecting Adversarial Robustness of Multimodal LM Agents](dissecting-mm-agents.md) (ICLR 2025) — xây một môi trường đánh giá có kiểm soát và "mổ xẻ" agent thành các thành phần để phân tích độ bền vững.
- [Attacking Vision-Language Computer Agents via Pop-ups](popups.md) (ACL 2025) — trình bày thuyết phục một tấn công rất đơn giản, và cách một paper bảo mật được viết cho hội nghị NLP.
- [EIA: Environmental Injection Attack](eia.md) (ICLR 2025) — định nghĩa một kiểu tấn công gắn với môi trường web, với mục tiêu rò rỉ thông tin riêng tư và yêu cầu về tính kín đáo.

### Hình thức hóa và benchmark

- [Formalizing and Benchmarking Prompt Injection](formalizing-pi.md) (USENIX Security 2024) — giá trị của một paper hình thức hóa và đánh giá có hệ thống; văn hóa viết của hội nghị bảo mật.
- [AgentDojo](agentdojo.md) (NeurIPS 2024 Datasets & Benchmarks) — cách viết một benchmark động cho bảo mật agent, và vì sao nó trở thành chuẩn chung.

### Phòng vệ

- [MELON](melon.md) (ICML 2025) — một phòng vệ tại thời điểm suy luận dựa trên một insight đơn giản, và chữ "provable" trong title.
- [StruQ](struq.md) (USENIX Security 2025) — phòng vệ bằng huấn luyện và thiết kế hệ thống, đóng khung bằng phép tương tự với SQL injection.
- [VLGuard](vlguard.md) (ICML 2024) — đóng góp kiểu dataset huấn luyện an toàn cho mô hình thị giác–ngôn ngữ, và vì sao một "baseline" đơn giản được nhận ở ICML.

## Cách đọc chương

Người mới vào lĩnh vực nên đọc trang tổng hợp trước, rồi chọn hai case study có kiểu đóng góp gần nhất với dự án đang thực hiện: một paper cùng kiểu đóng góp và một paper ở hội nghị mục tiêu. Người đang viết một paper tấn công nên đọc thêm ít nhất một paper phòng vệ, và ngược lại, vì mỗi bên định nghĩa tiêu chuẩn đánh giá cho bên kia: một tấn công thuyết phục phải vượt được phòng vệ mạnh nhất, và một phòng vệ thuyết phục phải chịu được tấn công thích nghi.

Mỗi case study có một mục **"Giải phẫu theo góc nhìn bảo mật"** với bốn câu hỏi cố định: threat model được phát biểu thế nào, thành công được định nghĩa và đo bằng gì, paper đã chống lại những phản biện nào, và phần đạo đức được xử lý ra sao. Bốn câu hỏi này cũng là một checklist tự kiểm tra tốt cho bản thảo của người học. Các kỹ năng chung về thiết kế thí nghiệm và báo cáo thống kê đã được trình bày ở [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) và [Experiments](../02-viet-tung-phan/experiments.md); về các hội nghị bảo mật và cộng đồng lân cận, xem [Bản đồ các hội nghị A\*](../00-tong-quan/ban-do-hoi-nghi.md).
