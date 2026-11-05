# 8. AI làm cộng sự nghiên cứu

Chỉ trong vài năm, các mô hình ngôn ngữ lớn và coding agent đã đi vào gần như mọi bước của nghiên cứu AI. Người nghiên cứu dùng chúng để tìm và tóm tắt tài liệu, sinh và phản biện ý tưởng, viết và sửa code thí nghiệm, phân tích kết quả, sửa câu chữ, thậm chí soạn rebuttal. Có nhóm còn thử để AI tự đi trọn một vòng nghiên cứu, từ ý tưởng tới bản thảo. Với người mới, sức hút của những công cụ này rất lớn: một trợ lý không biết mệt, trả lời ngay, và tỏ ra hiểu biết ở mọi chủ đề. Nhưng chính vì AI tỏ ra hiểu biết ở mọi chủ đề, sai lầm của nó khó nhận ra hơn sai lầm của một đồng nghiệp. Một trích dẫn bịa đặt, một con số không có thật hay một dòng code âm thầm làm rò rỉ tập test trông không khác gì sản phẩm của một người cẩn thận.

Chương này trả lời câu hỏi: dùng AI thế nào để nghiên cứu nhanh hơn và tốt hơn mà không đánh đổi sự đúng đắn và liêm chính khoa học. Chương bao quát toàn bộ vòng đời nghiên cứu đã trình bày ở [Chương 1](../01-truoc-khi-viet/index.md), từ đọc tài liệu tới vận hành thực nghiệm. Bài [Dùng AI hỗ trợ viết (đúng luật)](../03-ky-thuat/ai-tools.md) ở Chương 3 vẫn là nơi trình bày chi tiết việc dùng AI khi viết paper và chính sách của từng hội nghị. Chương này không lặp lại các chi tiết đó mà liên kết tới chúng.

Một nguyên tắc định hướng cho cả chương: AI là **cộng sự**, không phải tác giả và không phải người chịu trách nhiệm. Cộng sự giỏi có thể đề xuất, phản biện, làm nhanh những việc lặp lại. Nhưng mọi quyết định khoa học, mọi con số và mọi câu chữ trong paper vẫn thuộc về con người đứng tên. Cộng sự cũng cần được kiểm tra: không ai nộp paper mà không đọc lại phần đồng nghiệp viết, và với AI thì việc kiểm tra càng phải chặt hơn.

## Bằng chứng nói gì

Chương này cố gắng dựa trên bằng chứng thay vì cảm nhận. Dưới đây là một vài kết quả nghiên cứu tiêu biểu. Chúng được phân tích kỹ hơn ở các bài trong chương, kèm điều kiện và giới hạn của từng nghiên cứu.

- **Về sinh ý tưởng.** Si, Yang và Hashimoto (ICLR 2025) cho hơn một trăm nhà nghiên cứu NLP đánh giá mù các đề xuất ý tưởng. Kết quả: ý tưởng do một agent dựa trên LLM sinh ra được chấm *mới hơn* ý tưởng của chuyên gia (điểm novelty trung bình 5,64 so với 4,84 trên thang 10), dù có phần kém khả thi hơn. Cùng nghiên cứu cho thấy hai điểm yếu đáng lưu ý. Trong 4.000 ý tưởng hạt giống mỗi chủ đề, chỉ khoảng 200 ý tưởng không trùng lặp. Và LLM tự đánh giá ý tưởng kém tin cậy hơn con người. Nghiên cứu tiếp theo của cùng nhóm (ICLR 2026) cho người thực hiện các ý tưởng ấy thành dự án. Sau khi thực hiện, điểm của ý tưởng do AI sinh giảm nhiều hơn rõ rệt so với ý tưởng của con người. Nói cách khác, *nghe hay trên giấy* chưa phải là *làm được*. Cả hai nghiên cứu chỉ giới hạn trong mảng NLP dựa trên prompting.
- **Về năng suất lập trình.** Trong một thử nghiệm ngẫu nhiên có đối chứng của METR, 16 developer mã nguồn mở giàu kinh nghiệm làm 246 tác vụ với công cụ AI giai đoạn đầu 2025. Khi được phép dùng AI, họ mất *nhiều hơn* khoảng 19% thời gian, trong khi chính họ tin rằng mình đã nhanh hơn khoảng 20%. Đầu năm 2026, METR lưu ý rằng kết quả này gắn với thế hệ công cụ cũ. Bài học bền vững hơn con số: cảm giác nhanh hơn không đồng nghĩa với nhanh hơn thật, nên cần đo.
- **Về trích dẫn.** Các mô hình chat không có công cụ tìm kiếm từng bịa ra một tỉ lệ đáng kể trích dẫn khi được yêu cầu tổng quan tài liệu. Những năm gần đây, trích dẫn bịa đã bị phát hiện cả trong các paper được nhận ở hội nghị lớn.
- **Về review.** Các ước lượng trên toàn bộ dữ liệu review cho thấy một phần đáng kể câu chữ trong review ở một số hội nghị năm 2023–2024 đã được LLM sửa đáng kể. Các hội nghị phản ứng bằng chính sách ngày càng chặt. Ở ICML 2026, hàng trăm review vi phạm quy định dùng LLM đã bị phát hiện và gỡ bỏ, kéo theo việc desk reject các paper liên quan.

Các bằng chứng này không nói "đừng dùng AI". Chúng nói rằng AI mạnh ở *sinh rộng* và *làm nhanh*, yếu ở *tự đánh giá*, *bảo đảm đúng đắn* và *đi tới cùng*. Một quy trình làm việc tốt đặt AI vào đúng chỗ mạnh của nó và đặt con người ở những chốt kiểm soát.

## Bản đồ: AI ở từng giai đoạn nghiên cứu

| Giai đoạn | AI có thể giúp | Rủi ro chính | Chốt kiểm soát của con người | Bài liên quan |
|---|---|---|---|---|
| Đọc và lập bản đồ tài liệu | Tìm paper, tóm tắt, trích bảng, gợi ý paper liên quan | Bịa trích dẫn, tóm tắt sai chi tiết, bỏ sót công trình gần nhất | Mở từng paper được trích; đối chiếu với lượt đọc của chính mình | [AI trong đọc tài liệu và tìm ý tưởng](doc-va-y-tuong.md) |
| Đọc phản biện và tìm khoảng trống | Liệt kê giả định ngầm, failure case, mâu thuẫn trong tài liệu | Phê bình chung chung, chiều theo ý người hỏi | Tự kiểm toán claim và bằng chứng theo quy trình của reviewer | [AI trong đọc tài liệu và tìm ý tưởng](doc-va-y-tuong.md) |
| Sinh và thẩm định ý tưởng | Sinh rộng nhiều phương án, red-team ý tưởng, giả lập reviewer | Ý tưởng trùng lặp, "nghe hay" nhưng khó thực thi, tự đánh giá kém | Phễu kiểm ý tưởng, tìm novelty ba tầng, pilot | [AI trong đọc tài liệu và tìm ý tưởng](doc-va-y-tuong.md) |
| Lập kế hoạch | Chuyển proposal thành danh sách việc, liệt kê rủi ro, phản biện ma trận bằng chứng | Kế hoạch đẹp nhưng không khớp nguồn lực thật | Ước lượng ngân sách, cổng quyết định do nhóm đặt | [AI trong lập trình và thực nghiệm](thuc-nghiem.md) |
| Lập trình và thực nghiệm | Viết code, test, script cấu hình, đọc codebase lạ | Bug âm thầm, rò rỉ dữ liệu test, "sửa cho chạy" bằng cách đổi metric | Đặc tả trước, test trước, đọc mọi dòng ảnh hưởng tới kết quả | [AI trong lập trình và thực nghiệm](thuc-nghiem.md) |
| Phân tích kết quả | Script thống kê, vẽ hình, phân tích lỗi | Kiểm định sai, câu chuyện được bịa quanh con số | Tự kiểm lại phép kiểm định; mọi con số truy được về run | [AI trong lập trình và thực nghiệm](thuc-nghiem.md) |
| Viết và rebuttal | Sửa ngôn ngữ, LaTeX, tự review bản thảo của chính mình | Vi phạm chính sách, văn phong đồng nhất, claim bị thổi phồng | Khai báo theo quy định; tác giả chịu trách nhiệm từng câu | [Dùng AI hỗ trợ viết (đúng luật)](../03-ky-thuat/ai-tools.md) |
| Làm reviewer | Gần như không được dùng cho bài đang review | Vi phạm bảo mật, review hời hợt | Tuân thủ tuyệt đối quy định của hội nghị | [Dùng AI hỗ trợ viết (đúng luật)](../03-ky-thuat/ai-tools.md) |

Bảng cho thấy một quy luật: càng gần tới *bằng chứng* và *quyết định*, chốt kiểm soát của con người càng phải chặt. AI có thể sinh một trăm ý tưởng, nhưng không thể thay con người quyết định ý tưởng nào đáng theo đuổi. AI có thể viết một nghìn dòng code, nhưng con số cuối cùng trong bảng kết quả phải được một người hiểu rõ code đó đứng ra bảo đảm.

## Các bài trong chương

1. [Nguyên tắc, chính sách và rủi ro khi làm việc với AI](nguyen-tac.md): ba nguyên tắc nền tảng là con người chịu trách nhiệm, xác minh mọi thứ, bảo mật và khai báo. Bài cũng trình bày bản đồ rủi ro (bịa trích dẫn, sycophancy, đồng nhất hóa ý tưởng, bug âm thầm, rò rỉ dữ liệu, prompt injection), thang xác minh theo mức rủi ro, các sự cố đã xảy ra trong cộng đồng, và cách người mới dùng AI mà không làm teo kỹ năng của chính mình.
2. [AI trong đọc tài liệu và tìm ý tưởng](doc-va-y-tuong.md): dùng AI để tìm và đọc tài liệu mà không bị dẫn sai, để sinh ý tưởng một cách có kỷ luật, để phản biện ý tưởng của chính mình, và lý do AI không thể bảo đảm novelty.
3. [AI trong lập trình và thực nghiệm](thuc-nghiem.md): quy trình an toàn với coding agent, bằng chứng về năng suất, AI trong tái lập và phân tích kết quả, giới hạn của research agent tự động, dữ liệu và bảo mật trong thực nghiệm.
4. [Quy trình mẫu và thư viện prompt](quy-trinh-mau.md): một dự án giả định đi qua từng giai đoạn với AI làm cộng sự, thư viện prompt tiếng Anh theo giai đoạn, template nhật ký sử dụng AI, mẫu câu khai báo và checklist trước khi nộp.

## Cách đọc chương

Nên đọc bài [Nguyên tắc, chính sách và rủi ro](nguyen-tac.md) trước tiên, vì các bài còn lại đều dựa trên nó. Sau đó có thể đọc theo giai đoạn mà dự án đang ở. Bài [Quy trình mẫu và thư viện prompt](quy-trinh-mau.md) được thiết kế để dùng như tài liệu tra cứu trong lúc làm việc. Khi đọc, cần nhớ rằng công cụ AI thay đổi rất nhanh: tên sản phẩm, năng lực và chính sách hội nghị năm sau có thể khác năm nay. Những gì chương này cố gắng truyền đạt là *nguyên lý* và *quy trình kiểm soát*, những thứ ít lỗi thời hơn nhiều so với danh sách công cụ.

!!! warning "Chính sách thay đổi hằng năm"
    Mọi quy định về việc dùng AI khi viết, khi nộp và khi review đều phải được kiểm tra lại trong Call for Papers, Author Guidelines và Reviewer Guidelines của đúng hội nghị, đúng năm nộp. Bài [Dùng AI hỗ trợ viết (đúng luật)](../03-ky-thuat/ai-tools.md) tổng hợp chính sách của các hội nghị lớn tới thời điểm biên soạn.
