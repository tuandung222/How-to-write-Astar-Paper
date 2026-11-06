# Lời khuyên từ các nhà nghiên cứu hàng đầu

Phần lớn kỹ năng quan trọng nhất của nghề nghiên cứu không nằm trong paper. Paper trình bày bài toán, phương pháp và kết quả cuối cùng, nhưng hầu như không kể nhóm tác giả đã chọn bài toán giữa hàng chục ứng viên ra sao, đã bỏ những hướng nào, đã xếp thứ tự thí nghiệm thế nào, và đã làm gì trong những tuần không có gì chạy. Nhóm tác giả của *Deep Learning Tuning Playbook* nói thẳng điều này: paper thường lướt qua quá trình để kể một câu chuyện gọn hơn, nên cách làm việc thực tế hiếm khi được viết ra. Ở các phòng thí nghiệm lớn, kỹ năng ấy được truyền qua học việc. Người học không có sẵn môi trường như vậy chịu thiệt thòi đáng kể.

May mắn là một số nhà nghiên cứu đã viết kinh nghiệm của họ thành bài nói, tiểu luận, blog hay bài giảng. Trang này tuyển chọn và chú giải những bài như vậy, sắp theo vòng đời của một dự án nghiên cứu. Với mỗi mục, người đọc biết bài nói gì, vì sao đáng đọc, nên đọc lúc nào, và nối với bài nào trong giáo trình. Phần đầu trang tổng hợp chéo mười điều mà nhiều tác giả độc lập cùng nhắc lại.

Trang này có một trang anh em là [Tài nguyên](tai-nguyen.md), và hai trang chia vai rõ ràng. Trang Tài nguyên nghiêng về *viết paper, hướng dẫn chính thức và công cụ*. Trang này nghiêng về *nghề nghiên cứu*: chọn bài toán, đọc và đánh giá, tìm ý tưởng, lập kế hoạch, làm thực nghiệm, và trụ được với nghề. Một số bài có mặt ở cả hai trang: bài giảng của Peyton Jones, ghi chú của Widom, bài về đọc paper của Keshav và Eisner, bài về rebuttal của Parikh và cộng sự, tiểu luận của Steinhardt, position paper của Lipton và Steinhardt, hướng dẫn nghiên cứu sinh của Karpathy. Ở trang Tài nguyên chúng được giới thiệu trong một hai câu; ở đây chúng được phân tích kỹ hơn, dưới góc nhìn của người làm nghiên cứu chứ không phải của người viết.

## Cách dùng trang này

Trang này không được viết để đọc hết một lúc. Nên đọc phần Mười điều một lần để có bức tranh chung, rồi mở nhóm ứng với giai đoạn dự án đang ở, và chọn một hai bài để đọc bản gốc. Phần chú giải giúp chọn bài và biết cần chú ý vào đâu, nhưng không thay được bản gốc. Cuối trang có ba lộ trình đọc cho ba hoàn cảnh thường gặp.

| Giai đoạn của dự án | Nhóm trên trang này | Bài tương ứng trong giáo trình |
|---|---|---|
| Chọn hướng, chọn bài toán | Chọn bài toán và gu nghiên cứu | [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md), [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) |
| Đọc tài liệu | Đọc paper và đọc phản biện | [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md), [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md) |
| Tìm ý tưởng | Tìm ý tưởng và khoảng trống | [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md) |
| Lập kế hoạch | Lập kế hoạch và giữ tiến độ | [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md) |
| Chạy thí nghiệm | Thực nghiệm | [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md) |
| Viết | Viết và trình bày | [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md), [Chương 2](../02-viet-tung-phan/index.md) |
| Nhận và viết review | Review và phản hồi | [Paper được đánh giá thế nào](../00-tong-quan/review-process.md), [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md) |
| Suốt quá trình | Đời sống nghiên cứu sinh | [Khi bị reject](../04-nop-va-sau-nop/reject.md), [Chương 7](../07-tinh-huong-kho/index.md) |

!!! warning "Về nguồn và cách hiểu lời khuyên"
    Tuyển tập chính chỉ gồm những bài đã được xác minh: sự tồn tại, tác giả, năm và ý chính được đối chiếu với văn bản gốc hoặc với nhiều nguồn độc lập thống nhất nhau. Dòng **Mức xác minh** ở mỗi mục ghi *cao* khi đã đối chiếu văn bản gốc, và *trung bình* khi ý chính được nhiều bản sao hoặc bản tóm tắt xác nhận nhưng câu chữ chi tiết có thể chưa chính xác tuyệt đối. Những bài chưa xác minh đủ nằm riêng ở mục *Đọc thêm*. Câu trích nguyên văn chỉ được dùng khi đã đối chiếu được câu chữ, và luôn kèm diễn giải tiếng Việt.

    Mọi lời khuyên ở đây là kinh nghiệm cá nhân, gắn với lĩnh vực, thời điểm và giai đoạn sự nghiệp của người viết, không phải quy luật. Hướng dẫn reviewer thay đổi hằng năm; phiên bản nhắc ở đây là phiên bản đã đối chiếu khi trang được tổng hợp (tháng 11/2026), và cần kiểm tra bản mới nhất.

Cũng nên để ý nguồn gốc của lời khuyên. Không phải tác giả nào cũng làm AI: Hamming làm toán và khoa học máy tính, Alon làm sinh học hệ thống, Nielsen xuất phát từ vật lý lượng tử, Klein là nhà tâm lý học, Heilmeier điều hành DARPA, Keshav làm mạng máy tính, Widom làm cơ sở dữ liệu, Peyton Jones làm ngôn ngữ lập trình. Nguyên tắc chung thường chuyển giao tốt giữa các lĩnh vực; quy ước cụ thể, như đặt related work ở đâu, phải được đối chiếu với cộng đồng mà người học định nộp bài.

## Mười điều các nhà nghiên cứu hàng đầu cùng nhắc lại

Những người làm ở các lĩnh vực rất khác nhau, viết cách nhau hàng chục năm, lại đi tới một số lời khuyên gần như giống hệt. Hamming nói về bài toán quan trọng năm 1986; Schulman và Karpathy nói điều tương tự cho deep learning hơn ba mươi năm sau. Sự lặp lại độc lập như vậy là bằng chứng mạnh nhất mà một tuyển tập lời khuyên có thể đưa ra. Mỗi điều dưới đây ghi các tác giả đã nói tương tự và bài trong giáo trình nơi điều ấy thành quy trình cụ thể.

### Điều 1: Chọn bài toán quan trọng, nhưng chỉ khi đã có cách tấn công

Hamming đặt câu hỏi về bài toán quan trọng vào trung tâm bài nói của ông, kèm một điều kiện hay bị quên: bài toán chỉ "quan trọng" khi đã có cách tấn công hợp lý. Karpathy dẫn lại ý này và nhận xét rằng bài toán quan trọng gấp mười lần thường không khó gấp mười lần. Schulman khuyên tự hỏi dự án nhắm tới cải thiện 10% hay gấp 10 lần. Alon cân bằng tham vọng bằng trục khả thi.

- **Nguồn:** Hamming (1986), Karpathy (2016), Schulman (2020), Alon (2009).
- **Trong giáo trình:** [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md), [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Điều 2: Gu nghiên cứu là kỹ năng luyện được, và việc chọn cần thời gian

Karpathy viết rằng gu học được qua thực hành và học việc, và thừa nhận lúc đầu gu của ông rất tệ. Schulman mô tả gu hình thành khi quan sát ý tưởng nào thành công, ý tưởng nào bị quên. Olah giải thích vì sao gu khó luyện: kiểm tra một ý tưởng tốn nhiều tháng, nên cần những bài tập cho phản hồi rẻ hơn. Alon khuyên đừng chọn vội; nhóm của ông thường dành khoảng ba tháng trước khi cam kết.

- **Nguồn:** Karpathy (2016), Schulman (2020), Olah (2021), Alon (2009).
- **Trong giáo trình:** [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md), [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md).

### Điều 3: Làm phần rủi ro nhất trước

Bản năng tự nhiên là bắt đầu từ phần dễ để có cảm giác tiến triển. Steinhardt khuyên làm ngược lại: ưu tiên việc cho nhiều thông tin nhất trên mỗi đơn vị thời gian, tức những phần dễ làm chết dự án nhất. CS197 gọi việc xác định chiều rủi ro lớn nhất là *vectoring*. Premortem của Klein làm lộ rủi ro trước khi bắt đầu. Huang khuyên chạy baseline trước và làm ngược từ đầu ra cuối.

- **Nguồn:** Steinhardt (2018), CS197 (Bernstein), Klein (2007), Huang (*awesome-tips*).
- **Trong giáo trình:** [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md), [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Điều 4: Lặp nhanh bằng thí nghiệm nhỏ, mỗi lần chỉ đổi một thứ

Tốc độ của dự án đo bằng số vòng "giả thuyết, thí nghiệm, kết luận" mỗi tuần, không phải số giờ GPU. Huang khuyên dùng ví dụ đồ chơi và proxy nhỏ, mỗi thí nghiệm chỉ đổi đúng một thứ. Karpathy đi từ đơn giản tới phức tạp, mỗi bước một giả thuyết được kiểm chứng. Tuning Playbook chia việc tuning thành các vòng với mục tiêu hẹp. CS197 gọi khả năng giảm nhanh bất định là *velocity*.

- **Nguồn:** Huang (*awesome-tips*), Karpathy (2019), Godbole và cộng sự (2023), CS197 (Bernstein).
- **Trong giáo trình:** [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md), [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md).

### Điều 5: Ghi chép mọi thứ và đọc lại định kỳ

Trí nhớ là công cụ tồi để quản lý một dự án nhiều tháng. Schulman khuyên giữ sổ nghiên cứu hằng ngày và đọc lại mỗi một hai tuần. Eisner khuyên ghi chú ngay khi đọc paper, vì ghi chú thành nguyên liệu cho related work và ý tưởng. Huang khuyên giữ một bộ slide duy nhất cho mọi kết quả. Hamming khuyên theo dõi những chỗ có vẻ sai trong lý thuyết hiện có.

- **Nguồn:** Schulman (2020), Eisner (2009), Huang (*awesome-tips*), Hamming (1986).
- **Trong giáo trình:** [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md), [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md).

### Điều 6: Viết sớm, vì viết là một cách nghĩ

Peyton Jones đặt lời khuyên "đừng chờ, hãy viết" lên đầu, vì viết là cơ chế để làm nghiên cứu chứ không chỉ để báo cáo. Olah và Carter nhận xét rằng không giải thích tốt được một ý tưởng thường là chưa hiểu nó đủ sâu. Karpathy kể nhóm của Fei-Fei Li đặt deadline nội bộ sớm hai tuần. Nakkiran, qua lời dẫn của Olah, khuyên viết proposal ngắn trước khi cam kết hơn một tháng.

- **Nguồn:** Peyton Jones, Olah và Carter (2017), Karpathy (2016), Olah (2021).
- **Trong giáo trình:** [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md), [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md).

### Điều 7: Mỗi paper một ý tưởng cốt lõi, viết cho người đọc

Karpathy viết rằng paper "bán" một điều duy nhất, và đóng góp không cộng dồn: thêm đóng góp phụ chỉ làm loãng paper. Peyton Jones gọi đó là xác định ý tưởng chính. Widom muốn đóng góp rõ trước khi người đọc hết trang ba. Huang khuyên đừng bắt người đọc tự đối chiếu ký hiệu, hình và bảng. Hamming nhắc rằng công trình tốt còn phải được truyền đạt.

- **Nguồn:** Karpathy (2016), Peyton Jones, Widom (2006), Huang (*awesome-tips*), Hamming (1986).
- **Trong giáo trình:** [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md), [Introduction & Figure 1](../02-viet-tung-phan/introduction.md), [Ghép ý tưởng và "độn" đóng góp](../07-tinh-huong-kho/ghep-va-don.md).

### Điều 8: Đơn giản là một giá trị, không phải điểm yếu

Black cho rằng sự đơn giản hay bị nhầm là thiếu novelty, dù ông cũng nói ý tưởng đơn giản có thể tầm thường. Hướng dẫn ARR xếp nhận xét "phương pháp quá đơn giản" vào danh sách heuristic phản biện lười. Tuning Playbook chỉ nhận thay đổi khi cải thiện lớn hơn độ phức tạp nó thêm vào. Schulman cho rằng cải tiến nhỏ chỉ đáng khi thay đổi rất đơn giản; Karpathy khuyên "đừng làm người hùng" khi chọn kiến trúc.

- **Nguồn:** Black (2022), ARR Reviewer Guidelines, Godbole và cộng sự (2023), Schulman (2020), Karpathy (2019).
- **Trong giáo trình:** [Khi novelty và hiệu quả lệch pha](../07-tinh-huong-kho/novelty-va-hieu-qua.md), [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Điều 9: Bằng chứng phải tương xứng với claim

Lipton và Steinhardt chỉ ra hai lỗi phổ biến: trình bày suy đoán như giải thích, và không xác định cải thiện đến từ đâu. Tài liệu tập huấn reviewer CVPR/ICCV nói ý tưởng càng lạ hoặc càng có vẻ gia tăng thì càng cần kết quả mạnh. Hướng dẫn ARR nói paper chỉ cần đủ bằng chứng cho claim của nó, và SOTA không cần cũng không đủ. Henderson và cộng sự nhắc rằng nếu thiếu thước đo ý nghĩa thống kê, phương sai giữa các lần chạy khiến khó biết một cải thiện có thật hay không.

- **Nguồn:** Lipton và Steinhardt (2018), tài liệu tập huấn reviewer CVPR/ICCV, ARR Reviewer Guidelines, Henderson và cộng sự (2018).
- **Trong giáo trình:** [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), [Experiments](../02-viet-tung-phan/experiments.md), [Khi câu chuyện và bằng chứng không khớp](../07-tinh-huong-kho/cau-chuyen-va-bang-chung.md).

### Điều 10: Mờ mịt là một phần của nghề, và cần kiên trì có kỷ luật

Alon gọi giai đoạn thí nghiệm không chạy là "đám mây", và cho rằng biết nó là bình thường giúp người làm nghiên cứu không bỏ cuộc. Schulman nhận xét đổi bài toán quá sớm là thất bại phổ biến hơn không chịu đổi. Hồi ký của Guo và bức tranh của Might nói cùng điều ấy. Olah đưa ra đối trọng: định kỳ hỏi lại nếu bắt đầu từ đầu thì có chọn hướng này nữa không.

- **Nguồn:** Alon (bài nói TED), Schulman (2020), Guo (2012), Might (2010), Olah (2021).
- **Trong giáo trình:** [Chương 7](../07-tinh-huong-kho/index.md), [Khi bị reject](../04-nop-va-sau-nop/reject.md).

## Khi các lời khuyên có vẻ trái ngược nhau

Đọc nhiều lời khuyên cùng lúc sẽ gặp những chỗ có vẻ mâu thuẫn. Điều đó cho thấy mỗi lời khuyên có điều kiện áp dụng riêng. Ba cặp thường gặp:

- **Tham vọng hay vừa sức.** Hamming, Karpathy và Schulman thúc người đọc nhắm bài toán lớn; Alon khuyên người mới làm dự án ngắn, khả thi. Hai lời khuyên dung hòa khi tách mục tiêu dài hạn khỏi dự án trước mắt: chọn một mục tiêu lớn, và chọn dự án đầu tiên là một bậc thang khả thi hướng tới nó.
- **Kiên trì hay biết dừng.** Schulman cảnh báo đổi hướng quá sớm, Olah cảnh báo gắn bó quá lâu, Steinhardt muốn phát hiện thất bại càng sớm càng tốt. Cách dung hòa là kiên trì với *hướng*, kiểm tra sớm *giả định rủi ro nhất*, và rà soát theo lịch cố định thay vì theo cảm xúc từng tuần.
- **Quy ước của cộng đồng nào.** Peyton Jones khuyên đặt related work sau phần ý tưởng, trong khi nhiều paper ML và CV đặt nó ở Section 2. Lời khuyên của ông đến từ văn hóa ngôn ngữ lập trình; với câu hỏi quy ước, chuẩn mực của hội nghị đích là thước đo cuối cùng.

Nên coi mỗi lời khuyên như một giả thuyết, thử nó trên chính dự án đang làm, rồi giữ lại những gì hiệu quả.

## Chọn bài toán và gu nghiên cứu

Karpathy gọi việc chọn bài toán là "vòng lặp ngoài" của nghề nghiên cứu: giải một bài toán đã chọn là vòng trong, còn phần lớn phán đoán nằm ở việc chọn bài toán nào. Các bài dưới đây nhìn việc này từ nhiều góc: tầm quan trọng, mục tiêu dài hạn, khả thi và thú vị, chiến lược nghiên cứu sinh, phát triển bản thân, và hướng đi của cả ngành.

### Richard Hamming, *You and Your Research* (1986)

- **Hình thức:** bài nói tại Bell Communications Research (Bellcore), ngày 7/3/1986; bản ghi kèm phần hỏi đáp do J. F. Kaiser thực hiện. Hamming từng làm ở Bell Labs, nhưng bài nói này diễn ra ở Bellcore. Ý tưởng được mở rộng trong sách *The Art of Doing Science and Engineering: Learning to Learn* (1997; một số nguồn ghi 1996).
- **Nguồn:** <https://www.cs.virginia.edu/~robins/YouAndYourResearch.html>
- **Mức xác minh:** trung bình. Hai câu trích dưới đây đã được đối chiếu nguyên văn qua đoạn Karpathy dẫn lại.

**Ý chính.**

- **Câu hỏi trung tâm:** vì sao chỉ số ít nhà khoa học tạo ra đóng góp lớn? Hamming cho rằng nguyên nhân chủ yếu là thói quen và lựa chọn, không phải may mắn hay thiên tài. Ông dẫn Pasteur: may mắn ưu ái tâm trí đã được chuẩn bị.
- **Làm bài toán quan trọng.** "If you do not work on an important problem, it's unlikely you'll do important work." (Không làm bài toán quan trọng thì khó có công trình quan trọng.)
- **Quan trọng nghĩa là có cách tấn công.** "It's not the consequence that makes a problem important, it is that you have a reasonable attack." (Tầm quan trọng không đến từ hệ quả, mà từ việc có một cách tấn công hợp lý.) Phản trọng lực không phải bài toán quan trọng theo nghĩa này, vì chưa ai có cách tấn công.
- **Thời gian cho câu hỏi lớn.** Ông dành chiều thứ Sáu cho "Great Thoughts Time", chỉ để nghĩ về những câu hỏi lớn của lĩnh vực.
- **Tích lũy và truyền đạt.** Ông dẫn lời Hendrik Bode rằng tri thức tích lũy như lãi kép, và nhấn mạnh phải "bán" được công trình qua bài viết và bài nói rõ ràng.

**Đọc khi nào.** Ở đầu chặng nghiên cứu sinh và mỗi lần chọn hướng mới. Nên đọc cả phần hỏi đáp.

**Liên hệ trong giáo trình.** Câu hỏi "bài toán quan trọng nhất của lĩnh vực là gì" là điểm xuất phát của bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md); tiêu chí "có cách tấn công" ứng với câu hỏi khả thi trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### John Schulman, *An Opinionated Guide to ML Research* (2020)

- **Hình thức:** bài blog cá nhân, ngày 24/1/2020; theo tác giả, bản đầu viết tháng 12/2017 cho chương trình OpenAI Fellows. Đây không phải tài liệu chính thức của OpenAI. Schulman là đồng tác giả của TRPO và PPO.
- **Nguồn:** <http://joschu.net/blog/opinionated-guide-ml-research.html>
- **Mức xác minh:** trung bình (cấu trúc và nội dung qua một bản dịch đầy đủ và các bản tóm tắt).

**Ý chính.**

- **Chọn bài toán quan trọng hơn kỹ năng kỹ thuật.** Gu được rèn bằng cách đọc phê phán, thảo luận với người hiểu biết hơn, và tự hỏi vì sao một số ý tưởng lan rộng còn số khác bị quên.
- **Theo ý tưởng hay theo mục tiêu.** Theo ý tưởng là đọc paper về X rồi nghĩ cách làm X tốt hơn. Theo mục tiêu là hình dung một năng lực AI mới, rồi giải các bài toán đưa tới gần nó, thường là làm X chạy được lần đầu. Ông khuyên đa số nên theo mục tiêu, vì ít bị trùng ý tưởng và có góc nhìn khác biệt, nhưng không cho rằng kiểu kia luôn kém hơn.
- **Ví dụ của chính ông.** Mục tiêu vận động (locomotion) dẫn ông tới TRPO, GAE rồi PPO. Cạm bẫy là hiểu mục tiêu quá sát chữ; ông chỉ nhận giải pháp tổng quát.
- **Mục tiêu cao, leo từng bậc.** Hỏi dự án là 10% hay gấp 10 lần; cải tiến nhỏ chỉ đáng khi rất đơn giản hoặc cộng dồn về mục tiêu lớn.
- **Sổ nghiên cứu và chuyện đổi hướng.** Ghi sổ hằng ngày, đọc lại mỗi một hai tuần. Theo ông, bỏ ý tưởng hứa hẹn quá sớm là thất bại phổ biến hơn không chịu đổi.
- **Phát triển bản thân.** Đọc sách giáo khoa song song với paper, đọc luận án, và cài đặt lại paper để so với kết quả công bố.

**Đọc khi nào.** Khi chọn hướng cho một hai năm tới, hoặc khi nhảy giữa nhiều ý tưởng mà không ý tưởng nào xong.

**Liên hệ trong giáo trình.** Hai kiểu nghiên cứu là nền cho phần nguồn ý tưởng trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md); sổ nghiên cứu là một phần của vòng lặp hằng tuần trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md).

### Uri Alon, *How To Choose a Good Scientific Problem* (2009)

- **Hình thức:** tiểu luận trên *Molecular Cell* 35(6):726–728, 2009. Hình ảnh "đám mây" lấy từ bài nói TED của Alon, *Why truly innovative science demands a leap into the unknown*.
- **Nguồn:** <https://doi.org/10.1016/j.molcel.2009.09.013>
- **Mức xác minh:** trung bình. Phần "đám mây" lấy từ bản ghi bài nói TED; chưa xác nhận nó có trong tiểu luận 2009.

**Ý chính.**

- **Chọn bài toán là trung tâm nhưng hiếm khi được dạy.** Alon viết từ sinh học hệ thống, nhưng khung của ông dùng được cho mọi ngành thực nghiệm.
- **Hai trục khả thi và thú vị.** Ưu tiên vùng vừa khả thi vừa thú vị; khi phải đánh đổi, chỉ giữ các lựa chọn không bị trội hơn (Pareto front). Người mới nên làm dự án ngắn và khả thi.
- **Thú vị là chủ quan.** Lắng nghe những ý tưởng cứ quay lại suốt nhiều tháng, chọn theo giá trị riêng chứ không theo thời thượng.
- **Dành thời gian để chọn.** Nhóm của ông thường dành khoảng ba tháng trước khi cam kết, vì chọn vội dẫn tới thất vọng về sau.
- **"Đám mây".** Nghiên cứu không đi thẳng từ câu hỏi A tới câu trả lời B. Thí nghiệm hỏng, người làm rơi vào vùng bối rối giữa biết và chưa biết, và nếu kiên trì có thể ra câu trả lời C, thường thú vị hơn B. Có người hướng dẫn nâng đỡ trong giai đoạn đó giúp không bỏ cuộc.

**Đọc khi nào.** Trước khi chọn dự án đầu tiên. Bài nói TED nên xem khi đang giữa giai đoạn thí nghiệm không chạy.

**Liên hệ trong giáo trình.** Hai trục khả thi và thú vị được dùng trong phễu kiểm ý tưởng của bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md); "đám mây" là bối cảnh tâm lý của [Chương 7](../07-tinh-huong-kho/index.md).

### Andrej Karpathy, *A Survival Guide to a PhD*: phần chọn đề tài (2016)

- **Hình thức:** bài blog ngày 7/9/2016, viết khi kết thúc tiến sĩ ở Stanford. Ông nói trước rằng nhiều điều có thể gây tranh cãi và đặc thù cho ML và Computer Vision. Mục này bàn phần *Research topics*; các phần khác ở nhóm Đời sống nghiên cứu sinh.
- **Nguồn:** <https://karpathy.github.io/2016/09/07/phd/>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Vòng lặp ngoài.** "You spend most of your time on the outer loop, figuring out what problems are worth solving and what problems are ripe for solving." (Phần lớn thời gian dành cho vòng ngoài: tìm bài toán đáng giải và đã chín để giải.) Có thể hiểu chữ "chín" là bài toán đã có đủ công cụ và dữ liệu để tấn công; bài toán quan trọng mà chưa có những thứ đó thì chưa nên chọn.
- **Gu có thật và học được.** Người hướng dẫn giỏi đánh giá gần như tức thì tầm quan trọng, độ khó và bối cảnh của một bài toán; khả năng đó học được qua thực hành.
- **Tham vọng có cách tấn công.** "a 10x more important problem is at most 2-3x harder to achieve" (theo kinh nghiệm của ông, bài toán quan trọng gấp mười lần chỉ khó hơn tối đa hai ba lần). Ông dẫn Hamming về điều kiện có cách tấn công, và khuyên chọn mảnh đất mà các paper có thể nối thành luận án.
- **Tránh công việc gia tăng.** Paper làm mọi thứ phức tạp hơn để thêm khoảng 2% có thể được nhận nhưng ít được trích dẫn. Ý tưởng kiểu "bước logic tiếp theo" thì nhiều nhóm cùng thấy.

**Đọc khi nào.** Năm đầu nghiên cứu sinh, và khi chọn dự án thứ hai, lúc phải nghĩ tới mạch luận án.

**Liên hệ trong giáo trình.** Khái niệm bài toán "đã chín" trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md); cảnh báo về công việc gia tăng gắn với bẫy "A + B" trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Michael Nielsen, *Principles of Effective Research* (2004)

- **Hình thức:** tiểu luận, tháng 7/2004, Technical Note 0404 của University of Queensland, cũng đăng thành loạt bài blog. Nielsen viết từ nền vật lý lý thuyết và thông tin lượng tử. Không nên nhầm với Jakob Nielsen.
- **Nguồn:** <https://michaelnielsen.org/blog/principles-of-effective-research/>
- **Mức xác minh:** trung bình (bản tóm tắt và một đoạn được Olah trích nguyên văn).

**Ý chính.**

- **Tầm nhìn cá nhân.** Nghiên cứu hiệu quả cần một tầm nhìn rõ về điều muốn đạt, sự chủ động, và việc nhận trách nhiệm cho thành bại.
- **Sáng tạo là phần mở rộng của phát triển bản thân,** đặc biệt của một chương trình đọc được xây dựng tốt. Áp lực deadline và số lượng paper đẩy người ta hy sinh phần này.
- **Người giải bài toán và người tạo bài toán.** Người tạo bài toán tìm câu hỏi hoặc mối liên hệ mới, đôi khi trong paper rất đơn giản về kỹ thuật. Đừng lấy độ khó làm thước đo tầm quan trọng.
- **Vùng hỗn loạn là cơ hội.** "But a field that is a mess is really an opportunity." (Một lĩnh vực đang rối thực ra là một cơ hội.) Người ta né những vùng lộn xộn, nhưng ở đó có thể có khái niệm thống nhất đang chờ.

**Đọc khi nào.** Khi cảm thấy chỉ còn chạy theo deadline, hoặc khi lập kế hoạch học tập dài hạn.

**Liên hệ trong giáo trình.** "Người tạo bài toán" và "vùng hỗn loạn" là hai nguồn ý tưởng trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md).

### Richard S. Sutton, *The Bitter Lesson* (2019)

- **Hình thức:** tiểu luận ngắn trên trang *Incomplete Ideas*, ngày 13/3/2019; không phải paper.
- **Nguồn:** <http://www.incompleteideas.net/IncIdeas/BitterLesson.html>
- **Mức xác minh:** cao (nhiều bản sao thống nhất).

**Ý chính.**

- **Bài học của bảy mươi năm AI:** các phương pháp tổng quát biết tận dụng tính toán cuối cùng hiệu quả nhất, với cách biệt lớn, vì chi phí tính toán liên tục giảm theo hàm mũ.
- **Cái bẫy của tri thức cài sẵn.** Cài tri thức con người vào hệ thống giúp ích ngắn hạn, nhưng về dài hạn chững lại và có thể cản trở tiến bộ.
- **Ví dụ lịch sử:** cờ vua, cờ vây, nhận dạng tiếng nói.
- **Tìm kiếm và học** là hai phương pháp dường như mở rộng tùy ý theo tính toán. Nên xây phương pháp tự tìm ra sự phức tạp, thay vì cài sẵn mô hình đơn giản về cách con người nghĩ.

Sutton không nói tri thức miền vô dụng trong ngắn hạn, và tiểu luận năm 2019 không bàn về LLM; những bình luận về sau là của người khác.

**Đọc khi nào.** Khi cân nhắc một ý tưởng dựa nhiều vào kỹ thuật thủ công, để hỏi nó còn giá trị không khi quy mô tăng.

**Liên hệ trong giáo trình.** Tình huống 25 trong bài [Áp lực từ bên ngoài](../07-tinh-huong-kho/ap-luc-ben-ngoai.md): mô hình nền mới khiến bài toán lỗi thời.

## Đọc paper và đọc phản biện

Nhóm này có hai lớp. Lớp thứ nhất dạy đọc để hiểu và phân bổ thời gian giữa hàng trăm paper (Keshav, Eisner, Ng). Lớp thứ hai dạy đọc để đánh giá, tức đọc như reviewer (Black và hướng dẫn reviewer của các hội nghị). Trang Tài nguyên giới thiệu ngắn Keshav và Eisner; ở đây chúng được đọc theo góc độ kỹ năng phản biện.

### S. Keshav, *How to Read a Paper* (2007)

- **Hình thức:** bài hai trang trên *ACM SIGCOMM Computer Communication Review* 37(3):83–84, tháng 7/2007; có bản sửa năm 2016 với ước lượng thời gian hơi khác.
- **Nguồn:** <https://doi.org/10.1145/1273445.1273458>
- **Mức xác minh:** cao.

**Ý chính.**

- **Tối đa ba lượt, mỗi lượt một mục tiêu,** và sau mỗi lượt quyết định có đọc tiếp không.
- **Lượt một, năm tới mười phút:** tiêu đề, abstract, introduction, tiêu đề các mục, kết luận, lướt tài liệu tham khảo. Sau đó trả lời được năm chữ C: *Category* (loại paper), *Context* (liên quan paper nào), *Correctness* (giả định có vẻ hợp lý không), *Contributions*, *Clarity*.
- **Lượt hai, tới khoảng một giờ:** đọc kỹ nhưng bỏ chứng minh, xem kỹ hình, đánh dấu tài liệu chưa đọc. Sau đó tóm tắt được ý chính kèm bằng chứng.
- **Lượt ba, nhiều giờ với người mới:** gần như cài đặt lại paper trong đầu, đặt cùng giả định với tác giả, nhờ đó lộ ra giả định ẩn và điểm yếu.
- **Khảo sát lĩnh vực:** tìm ba tới năm paper gần đây được trích nhiều, đọc lượt một, tìm trích dẫn chung và các tác giả, venue chính, rồi lặp lại.

Điểm đáng nhấn mạnh là lượt ba: đó chính là mức đọc của một reviewer có trách nhiệm. Năm chữ C dùng được như phiếu ghi cho mọi paper trong bảng literature.

**Đọc khi nào.** Tuần đầu bước vào lĩnh vực mới, và trước khi review paper đầu tiên.

**Liên hệ trong giáo trình.** Bài [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md); lượt ba là nền của bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md).

### Jason Eisner, *How to Read a Technical Paper* (2009)

- **Hình thức:** bài viết trên web, 2009, trong bộ lời khuyên cho nghiên cứu sinh của Eisner (Johns Hopkins University, NLP); về sau có thêm phần đối chiếu với phương pháp của Keshav.
- **Nguồn:** <https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html>
- **Mức xác minh:** trung bình.

**Ý chính.**

- **Lượt đầu chỉ lướt,** bỏ qua mọi chỗ tốn sức, để thấy paper đi về đâu và vì sao; sau đó mới quyết định có đọc kỹ.
- **Độ sâu tùy mục đích.** Trong lĩnh vực quen, ông cho biết thường đọc một paper trong khoảng ba mươi phút.
- **"Write as you read."** (Viết trong lúc đọc.) Tóm tắt điều thú vị, so với paper khác, ghi câu hỏi và ý tưởng. Ghi chú về sau thành nguyên liệu cho related work và ý tưởng mới.
- **Đọc paper gốc sau.** Các bản sao của bài chép một lời khuyên, chưa rõ của Eisner hay đồng nghiệp ông dẫn: đọc vài paper về sau để xem họ nói gì về X, rồi mới đọc paper gốc về X.

**Đọc khi nào.** Khi đọc nhiều mà không nhớ được gì, hoặc khi bắt đầu lập bảng literature.

**Liên hệ trong giáo trình.** Bảng literature trong bài [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md).

### Andrew Ng, bài giảng về đọc paper trong Stanford CS230 (2018)

- **Hình thức:** bài giảng có ghi hình trong khóa CS230 *Deep Learning* (theo các bản ghi chép là Lecture 8, mùa thu 2018), gồm phần đọc paper và lời khuyên nghề nghiệp.
- **Nguồn:** bản tóm tắt tại <https://www.kdnuggets.com/2019/09/advice-building-machine-learning-career-research-papers-andrew-ng.html>
- **Mức xác minh:** trung bình (nhiều bản ghi chép độc lập; chưa đối chiếu lời giảng).

**Ý chính.**

- **Đọc theo danh sách.** Lập danh sách paper về một chủ đề, đọc khoảng một phần mười mỗi bài, rồi chọn bài để đọc hết.
- **Quy mô ước lượng:** khoảng năm tới hai mươi paper cho hiểu biết cơ bản, năm mươi tới một trăm cho hiểu biết rất tốt. Đây là kinh nghiệm của ông, không phải kết quả nghiên cứu.
- **Nhiều lượt:** lượt đầu đọc tiêu đề, abstract và hình; lượt hai đọc introduction, kết luận và lướt phần còn lại; các lượt sau mới vào chi tiết.
- **Đều đặn:** hai ba paper mỗi tuần trong một năm có giá trị hơn nhồi nhét.

**Đọc khi nào.** Khi cần nắm nhanh một lĩnh vực trong vài tuần.

**Liên hệ trong giáo trình.** Bài [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md).

### Michael J. Black, *Novelty in Science: A guide for reviewers* (2022)

- **Hình thức:** tiểu luận trên blog (Medium và blog Perceiving Systems), 2022. Black làm Computer Vision tại Max Planck Institute for Intelligent Systems.
- **Nguồn:** <https://medium.com/@black_51980/novelty-in-science-8f1fd1a0a143>
- **Mức xác minh:** trung bình (ngày và câu chữ dựa trên bản đăng lại).

**Ý chính.**

- **Novelty không phải độ phức tạp, độ khó hay tính kỹ thuật.** Black coi novelty gần với vẻ đẹp hơn là với độ khó.
- **Đơn giản không phải thiếu novelty.** Nhận xét "chỉ đổi một thành phần trong hàm loss" thường đi sai hướng; đổi một thứ trong một mạng có sẵn là khoa học tốt hơn dựng một mạng phức tạp mới. Nhưng ý tưởng đơn giản có thể quan trọng, cũng có thể tầm thường.
- **"Hiển nhiên khi nhìn lại" không phải lập luận.** Novelty phải được đánh giá tại thời điểm trước khi ý tưởng xuất hiện.
- **Novelty không chỉ là kỹ thuật.** Một dataset làm được điều chưa ai làm, một cách dùng mới cho phương pháp cũ, hay việc thay thuật toán phức tạp bằng thuật toán đơn giản đều có thể là novelty.
- **Tính hữu ích.** Nhận xét "không hiểu ai cần cái này" khó đúng với ý tưởng mới, vì trí tưởng tượng của reviewer có giới hạn.

**Đọc khi nào.** Trước bản review đầu tiên; khi nhận review chê "thiếu novelty" cho phương pháp đơn giản; trước khi viết danh sách đóng góp.

**Liên hệ trong giáo trình.** Phần đánh giá novelty trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md); Tình huống 2 và 3 trong bài [Khi novelty và hiệu quả lệch pha](../07-tinh-huong-kho/novelty-va-hieu-qua.md).

### Hướng dẫn reviewer của ICLR và NeurIPS (các phiên bản 2020–2027)

- **Hình thức:** trang chính sách do ban chương trình cập nhật hằng năm.
- **Nguồn:** <https://iclr.cc/Conferences/2026/ReviewerGuide> ; <https://neurips.cc/Conferences/2026/ReviewerGuidelines>
- **Mức xác minh:** trung bình (trích đoạn trang chính thức qua nhiều năm).

**Ý chính.**

- **Bốn câu hỏi của ICLR** (cốt lõi từ 2020): paper giải câu hỏi cụ thể nào; cách tiếp cận có động cơ tốt và được định vị đúng không; paper có đỡ được claim không; công trình có đóng góp tri thức mới và đủ giá trị cho cộng đồng không.
- **ICLR về SOTA.** Bản 2024 viết ý nghĩa của công trình "does not necessarily require state-of-the-art results" (không nhất thiết đòi hỏi kết quả SOTA); FAQ 2022 nói thiếu SOTA tự nó không phải lý do reject.
- **Bốn tiêu chí của NeurIPS:** Quality, Clarity, Significance, Originality. Bản 2023 hỏi công trình có phải kết hợp mới các kỹ thuật đã biết không, kèm ghi chú "This can be valuable!" (điều đó có thể có giá trị). Bản 2026 thêm rằng originality không nhất thiết đòi hỏi phương pháp hoàn toàn mới.
- **Khung tư duy.** Bản 2025 gợi ý nghĩ về điểm mạnh và điểm yếu như lý do có thể dẫn tới accept hay reject.
- **Đừng học thuộc thang điểm,** vì nó đổi theo năm; phần ổn định là các câu hỏi và tiêu chí.

**Đọc khi nào.** Dùng bốn câu hỏi của ICLR làm phiếu đọc khi đọc phản biện; đọc trọn hướng dẫn của hội nghị đích trước khi viết bản thảo đầy đủ.

**Liên hệ trong giáo trình.** Bài [Paper được đánh giá thế nào](../00-tong-quan/review-process.md) và bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md).

### Hướng dẫn reviewer CVPR và tài liệu tập huấn reviewer CVPR/ICCV

- **Hình thức:** trang hướng dẫn reviewer của CVPR (các phiên bản 2015–2025), và bộ slide tập huấn 19 trang *How to Write Good Reviews for CVPR*, dựa trên tài liệu của ban chương trình ICCV 2019 và CVPR 2019, được dùng lại ở các năm sau.
- **Nguồn:** <https://cvpr.thecvf.com/Conferences/2025/ReviewerGuidelines> ; bản sao slide: <https://kshah33.github.io/files/CVPRReviewerTutorial.pdf>
- **Mức xác minh:** trung bình với trang hướng dẫn; cao với bộ slide (đã đọc toàn văn bản sao).

**Ý chính.**

- **Không vượt SOTA không phải lý do reject.** Hướng dẫn CVPR nói điều này từ năm 2015 và nhắc lại tương tự năm 2024.
- **Chê thiếu novelty phải có tài liệu.** "It is not OK to simply say “this has been done before”: you need to give specific references!" (Không được chỉ nói "đã có người làm"; phải đưa tài liệu cụ thể.)
- **Mức bằng chứng tùy loại paper.** Ý tưởng có thể mang tính chuyển đổi cần proof-of-concept; bài toán đã định hình cần kết quả benchmark; ý tưởng lạ, phức tạp quá mức hoặc có vẻ gia tăng cần kết quả phi thường; paper quan điểm hoặc lý thuyết không cần thí nghiệm.
- **Review tốt và review tồi.** Ví dụ tốt ghi "Achieving best results is not necessary to validate the key idea" (không cần đạt kết quả tốt nhất mới chứng minh được ý tưởng chính). Review chỉ liệt kê điểm yếu, không tóm tắt, không điểm mạnh thì AC không dùng được.
- **Thời gian.** Reviewer có kinh nghiệm thường dành hai tới bốn giờ mỗi paper; người mới nên dự trù ít nhất bốn giờ.

**Đọc khi nào.** Trước khi review cho CVPR, ICCV, ECCV; thang mức bằng chứng nên đọc cả khi thiết kế thí nghiệm.

**Liên hệ trong giáo trình.** Mẫu review trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md); thang mức bằng chứng trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md).

## Tìm ý tưởng và khoảng trống

Không có công thức sinh ra ý tưởng tốt, nhưng có thói quen làm ý tưởng tốt xuất hiện thường xuyên hơn. Nhiều bài ở các nhóm khác cũng là nguồn ý tưởng khi đọc lại theo góc nhìn này: mục tiêu năng lực dài hạn của Schulman; những chỗ có vẻ sai trong lý thuyết hiện có của Hamming; vùng hỗn loạn của Nielsen; câu hỏi "có sống sót khi quy mô tăng không" của Sutton; việc chạy baseline trước để thấy giới hạn cụ thể của SOTA của Huang; và nhận xét của Lipton và Steinhardt rằng một nghiên cứu thực nghiệm không có thuật toán mới vẫn có giá trị. Hai mục dưới đây là công cụ trực tiếp nhất.

### Stanford CS197 (Michael Bernstein): bit flip, vectoring và velocity

- **Hình thức:** khóa CS 197 *Computer Science Research* của Stanford, nhập môn nghiên cứu theo nhóm, do Michael S. Bernstein thiết kế và giảng dạy; các khái niệm nằm trong bộ slide *Literature Search*, *Arguing a Research Project* và *Velocity in Research*.
- **Nguồn:** <https://web.stanford.edu/class/cs197/>
- **Mức xác minh:** trung bình (qua paper của O'Neill và cộng sự, arXiv:2504.12976, và các bản sao slide; ghi chú khóa học chưa được đọc).

**Ý chính.**

- **Bit flip.** Ý tưởng mới thường xoay quanh công trình hiện có. Bước một, xác định "bit": một giả định, thường ngầm, mà công trình trước đặt ra. Bước hai, lật nó: đề xuất cách làm khác. Bit flip là phát biểu cô đọng của đóng góp cốt lõi.
- **Lật ở mức một paper hay cả một dòng tài liệu.** Không phải cú lật nào cũng đáng; càng hiểu các trục thiết kế của lĩnh vực càng chọn được cú lật tốt.
- **Bit flip chưa đủ.** Cú lật phải được lập luận và đánh giá; chưa phát biểu chính xác nó thì chưa thiết kế được thí nghiệm.
- **Vectoring và velocity.** Vectoring là xác định chiều rủi ro lớn nhất; velocity là giảm nhanh rủi ro theo chiều đó. Velocity khác tiến độ: một chuỗi ý tưởng đều thất bại vẫn có thể là velocity cao. Mỗi tuần, chọn câu hỏi lớn nhất chưa trả lời làm trọng tâm.
- **Ứng dụng trong AI.** O'Neill và cộng sự (2025) dựng dataset khoảng 5.500 paper NeurIPS 2023 và ICLR 2024 theo định dạng Bit, Flip, Spark; thành phần Spark là của họ, không phải của Bernstein.

**Đọc khi nào.** Khi đã đọc đủ một dòng tài liệu và muốn chuyển từ hiểu sang tạo; phần velocity dùng mỗi tuần.

**Liên hệ trong giáo trình.** Lật giả định trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md); vectoring trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md); velocity trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md).

### Chris Olah, *Research Taste Exercises* (2021)

- **Hình thức:** "rough note" (ghi chú thô) trên blog của Olah, ngày 9/1/2021. Olah tự nói đây là ghi chú chưa trau chuốt.
- **Nguồn:** <https://colah.github.io/notes/taste/>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Vì sao gu khó luyện.** "testing whether a research idea you come up with is good is very expensive" (kiểm tra một ý tưởng nghiên cứu có tốt không là rất tốn kém), nên mỗi năm chỉ có vài lần phản hồi. Các bài tập cho phản hồi rẻ hơn, nhiễu hơn, trên nhiều ý tưởng hơn.
- **Các bài tập.** Nhờ người hướng dẫn chấm danh sách ý tưởng từ 1 tới 10 rồi thảo luận chỗ bất đồng; khi người khác công bố một ý tưởng đã từng nghĩ tới, so kết quả với kỳ vọng; phỏng vấn nhà nghiên cứu về cách họ chọn bài toán; đọc lịch sử khoa học; soi lại gu của bản thân và cộng đồng.
- **Ba kiểu thất bại.** Gắn bó quá mức vì chi phí chìm (cách chữa: mỗi một hai năm hỏi nếu bắt đầu lại thì chọn gì). Thiếu trải nghiệm nghiên cứu: "You can’t have research taste in a vacuum." (Không thể có gu trong chân không.) Môi trường lệch với mối quan tâm, sinh ra ý tưởng tối ưu cho thỏa hiệp thay vì chất lượng.
- **Gợi ý Olah dẫn từ người khác.** Rachel Prudden: tưởng tượng nhóm khác công bố paper của dự án, có hào hứng đọc không. Andy Matuschak: bài toán *thú vị* nhất là gì, vì sao không làm. Preetum Nakkiran: viết proposal ngắn trước khi cam kết hơn một tháng.

**Đọc khi nào.** Khi có danh sách ý tưởng mà không biết chọn, và mỗi năm một lần để rà soát hướng đi.

**Liên hệ trong giáo trình.** Sổ ý tưởng và phễu kiểm ý tưởng trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md); proposal trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md).

## Lập kế hoạch và giữ tiến độ

Ý tưởng trên giấy chưa phải dự án. Các bài trong nhóm này có chung một mẫu số: rủi ro được sắp thứ tự, thất bại được phát hiện sớm, và tiến độ nhìn thấy được. Vectoring và velocity của CS197, ở nhóm trước, cũng thuộc về đây.

### George H. Heilmeier, *Heilmeier Catechism* (DARPA, thập niên 1970)

- **Hình thức:** bộ câu hỏi do Heilmeier, giám đốc DARPA 1975–1977, đặt ra để đánh giá đề xuất nghiên cứu. DARPA công bố tám câu; có biến thể bảy tới chín câu, và phần bổ sung của ARPA-H không phải của Heilmeier.
- **Nguồn:** bản chép lại tại <https://murray.cds.caltech.edu/Heilmeier_Catechism>
- **Mức xác minh:** trung bình (câu chữ một vài câu là dạng thường được trích).

**Ý chính.** Tám câu hỏi, diễn giải:

- (1) Muốn làm gì? Nói không dùng biệt ngữ. (2) Hiện nay việc đó làm thế nào, giới hạn ở đâu?
- (3) Điều gì mới, và vì sao tin nó sẽ thành công? (4) Ai quan tâm, thành công thì điều gì khác đi?
- (5) Rủi ro là gì? (6) Tốn bao nhiêu? (7) Mất bao lâu?
- (8) Đâu là các "bài kiểm tra giữa kỳ và cuối kỳ" để biết thành công?
- **Giá trị:** bộ câu hỏi buộc người đề xuất nói mục tiêu không biệt ngữ, hiểu thật hiện trạng thay vì đánh vào hình nộm, nêu cái mới, tính trước rủi ro, chi phí, thời gian, và định trước tiêu chí thành công.

**Đọc khi nào.** Trước khi cam kết vài tháng cho một dự án, và khi viết đề xuất xin tài trợ hay tài nguyên tính toán.

**Liên hệ trong giáo trình.** Research proposal hai trang trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md); bốn câu đầu cũng ứng với các đoạn mở của một [Introduction](../02-viet-tung-phan/introduction.md).

### Jacob Steinhardt, *Research as a Stochastic Decision Process* (2018)

- **Hình thức:** tiểu luận trên trang cá nhân ở Stanford, 2018, khi Steinhardt còn là nghiên cứu sinh.
- **Nguồn:** <https://cs.stanford.edu/~jsteinhardt/ResearchasaStochasticDecisionProcess.html>
- **Mức xác minh:** trung bình (qua nhiều bản tóm tắt; không có câu trích nguyên văn).

**Ý chính.**

- **Dự án là chuỗi nhiệm vụ bất định,** nhiệm vụ nào hỏng cũng có thể đánh chìm dự án. Mục tiêu là tối đa xác suất thành công và tối thiểu thời gian trước khi phát hiện thất bại.
- **Quy tắc cốt lõi:** làm theo thứ tự thông tin thu được trên mỗi đơn vị thời gian, từ nhiều tới ít; không bắt đầu từ phần dễ hay phần thoải mái.
- **Hai cách hình thức hóa:** tính thời gian kỳ vọng tiết kiệm được khi dừng ở thất bại đầu tiên, hoặc xấp xỉ bằng một "tỉ lệ thất bại" kết hợp xác suất thành công và thời lượng của mỗi nhiệm vụ. Công thức nên đọc ở bản gốc.
- **Kinh nghiệm riêng.** Theo các bản tóm tắt, tác giả kể ông tiến bộ đều đặn hơn hẳn sau khi áp dụng; đây là trải nghiệm cá nhân, không nên khái quát.
- **Hệ quả thực hành:** kiểm tra giả định rủi ro nhất bằng thí nghiệm rẻ nhất; giảm bất định chứ không chỉ tạo tiến độ bề ngoài; lập lại kế hoạch khi có thông tin mới.

So với giới thiệu ngắn ở trang Tài nguyên, giá trị cần nhấn mạnh là phương pháp cụ thể: liệt kê nhiệm vụ, ước lượng xác suất và thời gian cho từng nhiệm vụ, rồi sắp lại.

**Đọc khi nào.** Ngay sau khi chốt ý tưởng, và khi dự án có nhiều nhánh việc mà không rõ nên ưu tiên nhánh nào.

**Liên hệ trong giáo trình.** Cây rủi ro và thứ tự làm việc trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md); pilot và tiêu chí dừng trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Gary Klein, *Performing a Project Premortem* (2007)

- **Hình thức:** bài ngắn trên *Harvard Business Review* 85(9):18–19, tháng 9/2007. Klein là nhà tâm lý học nhận thức.
- **Nguồn:** <https://hbr.org/2007/09/performing-a-project-premortem>
- **Mức xác minh:** trung bình.

**Ý chính.**

- **Premortem là postmortem làm trước.** Sau khi nghe kế hoạch, cả nhóm được thông báo rằng dự án đã thất bại thảm hại, và mỗi người tự viết mọi lý do có thể.
- **Chia sẻ và sửa kế hoạch.** Các lý do được nêu lần lượt rồi dùng để củng cố kế hoạch; các hướng dẫn của bên thứ ba thường mô tả một buổi khoảng hai mươi tới ba mươi phút.
- **Cơ chế: prospective hindsight.** Tưởng tượng sự kiện đã xảy ra giúp nêu nguyên nhân tốt hơn. Klein dẫn nghiên cứu năm 1989 của Mitchell, Russo và Pennington; kết quả đó là về khả năng nêu đúng lý do, không phải về tỉ lệ thành công của dự án.
- **An toàn để nói ra nghi ngờ,** nhờ đó chống tự tin thái quá và tư duy bầy đàn.

Áp dụng vào nghiên cứu là cách diễn giải của giáo trình: tưởng tượng "paper đã bị reject" hoặc "phương pháp không chạy", liệt kê lý do như baseline yếu, thiếu dữ liệu, bị công bố trước, rồi biến mỗi lý do thành một thí nghiệm giảm rủi ro.

**Đọc khi nào.** Trước buổi khởi động dự án và trước thí nghiệm lớn đầu tiên.

**Liên hệ trong giáo trình.** Premortem và kế hoạch B trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md).

### Jia-Bin Huang, *awesome-tips*: giữ tiến độ và làm việc với người hướng dẫn

- **Hình thức:** kho GitHub mẹo nghiên cứu và nghề nghiệp của Jia-Bin Huang (University of Maryland, Computer Vision), cập nhật từ khoảng 2021. Phần lớn mục là đường dẫn tới thread Twitter/X; mục này dựa trên hai file *How to make steady progress in my research?* và *How to do research with my mentors effectively?*.
- **Nguồn:** <https://github.com/jbhuang0604/awesome-tips>
- **Mức xác minh:** cao với các file đã đọc; các mục chỉ là đường dẫn tới tweet chưa được xác minh.

**Ý chính.**

- **Hình dung thành công, rồi làm ngược.** Nếu kết quả hoàn chỉnh không làm người làm phấn khích thì bỏ. Với pipeline A, B, C, giả sử B hoàn hảo để xây C trước, rồi giả sử A hoàn hảo để xây B; cách này cho thấy sớm kết quả cuối và cận trên.
- **Baseline trước.** Baseline làm lộ giới hạn của SOTA; nếu baseline đã chạy tốt, cần hỏi lại vì sao làm bài toán này.
- **Nhỏ, đơn giản, từng thứ một.** Dùng ví dụ đồ chơi, tốt nhất là dữ liệu tổng hợp có ground truth; làm trường hợp đơn giản trước; "When doing experiments, change exactly ONE thing at a time." (mỗi thí nghiệm chỉ đổi đúng một thứ); tìm proxy nhỏ, nhanh.
- **Tự động hóa, trực quan hóa, định lượng** thay vì nhìn bằng mắt.
- **Giúp người hướng dẫn giúp đỡ hiệu quả.** Gửi kết quả và chương trình họp trước, tóm tắt và kế hoạch sau; giữ một bộ slide cho mọi kết quả; không hủy họp khi bế tắc. Đừng chỉ báo "không chạy" mà hãy khoanh vùng bước nào đúng, bước nào sai, nguyên nhân nào đã loại trừ; lời khuyên này Huang dẫn từ ghi chú *How To Do Research* của Bill Freeman.

**Đọc khi nào.** Khi tuần nào cũng bận mà không thấy tiến độ, và trước buổi họp đầu tiên với người hướng dẫn mới.

**Liên hệ trong giáo trình.** Vòng lặp hằng tuần trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md); làm việc với người hướng dẫn trong bài [Lộ trình thực hiện một paper](../00-tong-quan/lo-trinh.md).

## Thực nghiệm

Thực nghiệm deep learning hỏng một cách âm thầm: lỗi code hiếm khi làm chương trình dừng, mà chỉ làm kết quả kém đi một chút hoặc đẹp lên không thật. Các bài dưới đây thay may mắn bằng kỷ luật ở các tầng khác nhau: debug huấn luyện, tuning, dao động giữa các lần chạy, nguồn của cải thiện, và thiết kế đánh giá.

### Andrej Karpathy, *A Recipe for Training Neural Networks* (2019)

- **Hình thức:** bài blog ngày 25/4/2019, phát triển từ một tweet về những lỗi phổ biến nhất khi huấn luyện mạng nơ-ron.
- **Nguồn:** <https://karpathy.github.io/2019/04/25/recipe/>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Hai quan sát.** "Neural net training is a leaky abstraction": thư viện gợi ý cắm là chạy, nhưng không phải vậy. Và "Most of the time it will train but silently work a bit worse." (Phần lớn trường hợp mô hình vẫn train, chỉ âm thầm kém đi một chút.) Ví dụ: lật ảnh mà quên lật nhãn, cắt ngưỡng loss thay vì gradient.
- **Nguyên tắc:** đi từ đơn giản tới phức tạp; mỗi bước có một giả thuyết cụ thể được kiểm chứng; không đưa nhiều độ phức tạp chưa kiểm chứng vào cùng lúc.
- **Làm quen thật kỹ với dữ liệu** trước khi viết code mô hình: xem hàng nghìn ví dụ, tìm trùng lặp, nhãn hỏng, mất cân bằng; điểm ngoại lai thường làm lộ lỗi tiền xử lý.
- **Khung end-to-end và baseline "ngốc":** cố định seed, kiểm tra loss lúc khởi tạo, thêm baseline không phụ thuộc đầu vào, overfit một batch rất nhỏ, trực quan hóa dữ liệu ngay tại điểm vào mô hình.
- **Các bước sau:** overfit trước rồi regularize; "Don't be a hero", tức chép kiến trúc đơn giản nhất từ paper gần nhất; dữ liệu thật nhiều hơn là regularizer tốt nhất; random search hơn grid search.

Các con số cụ thể trong bài, như learning rate cho Adam, là quy tắc kinh nghiệm năm 2019; một vài lời khuyên, như tránh pretraining không giám sát, đã cũ.

**Đọc khi nào.** Trước dòng code huấn luyện đầu tiên, và mỗi khi kết quả "gần đúng mà không đúng".

**Liên hệ trong giáo trình.** Sanity check và debug trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md); Tình huống 23 trong bài [Khi câu chuyện và bằng chứng không khớp](../07-tinh-huong-kho/cau-chuyen-va-bang-chung.md) (bug hoặc rò rỉ dữ liệu sau khi đã có kết quả đẹp).

### Godbole, Dahl, Gilmer, Shallue, Nado, *Deep Learning Tuning Playbook* (2023)

- **Hình thức:** tài liệu dài trên GitHub, Version 1.0, 2023, của Varun Godbole, George E. Dahl, Justin Gilmer, Christopher J. Shallue và Zachary Nado (Google Research; Shallue ghi Harvard). Tài liệu tự ghi không phải sản phẩm Google chính thức hỗ trợ, phản ánh quan điểm của tác giả, và giả định bối cảnh học có giám sát.
- **Nguồn:** <https://github.com/google-research/tuning_playbook>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Bắt đầu đơn giản:** một cấu hình nhanh, ít tài nguyên, đạt kết quả "hợp lý"; chưa thêm tính năng màu mè.
- **Tuning theo vòng:** chọn mục tiêu hẹp, chạy thí nghiệm, học từ kết quả, rồi mới quyết định chuyển cấu hình, dựa trên bằng chứng mạnh chứ không phải một cấu hình may mắn.
- **Khám phá hơn khai thác.** "we spend most of our time on "exploration" and only a small amount on "exploitation"." (Phần lớn thời gian dành cho khám phá, chỉ một phần nhỏ cho khai thác.)
- **Siêu tham số khoa học, phiền nhiễu, cố định.** Khoa học là thứ đang được đo; phiền nhiễu (nuisance) phải được tối ưu riêng để so sánh công bằng; cố định tạo ra giới hạn cho kết luận. Khi hỏi thêm lớp có giúp không, số lớp là khoa học, còn learning rate là phiền nhiễu.
- **Dao động và quyết định.** Chỉ riêng seed khác nhau cũng có thể tạo khác biệt "có ý nghĩa thống kê" giữa hai cấu hình giống hệt. Và "we should only adopt changes that produce improvements that outweigh any complexity they add." (Chỉ nhận thay đổi khi cải thiện lớn hơn độ phức tạp nó thêm vào.)

**Đọc khi nào.** Trước đợt tuning lớn, và khi chuẩn bị so sánh với baseline.

**Liên hệ trong giáo trình.** So sánh công bằng trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md); Tình huống 11 và 16 trong bài [Khi con số không đẹp](../07-tinh-huong-kho/con-so-khong-dep.md); Tình huống 21 trong bài [Khi câu chuyện và bằng chứng không khớp](../07-tinh-huong-kho/cau-chuyen-va-bang-chung.md).

### Henderson và cộng sự, *Deep Reinforcement Learning that Matters* (2018)

- **Hình thức:** paper tại AAAI 2018 của Peter Henderson, Riashat Islam, Philip Bachman, Joelle Pineau, Doina Precup và David Meger.
- **Nguồn:** <https://arxiv.org/abs/1709.06560>
- **Mức xác minh:** cao ở mức abstract và thông tin thư mục (được xác minh riêng qua arXiv); chi tiết từng thí nghiệm nên đọc bản gốc.

**Ý chính.**

- **Tái lập không đơn giản.** Tính không tất định của môi trường benchmark cộng với phương sai của phương pháp khiến kết quả deep RL khó diễn giải.
- **Thiếu thước đo ý nghĩa thống kê** và cách báo cáo chuẩn hóa thì khó biết cải thiện so với SOTA có thật không.
- **Minh họa và hướng dẫn.** Paper cho thấy kết quả biến thiên đáng kể khi so với các baseline phổ biến, kể cả theo random seed, và đề xuất hướng dẫn để kết quả tái lập được.
- **Thông điệp vượt ra ngoài RL:** ở mọi lĩnh vực có phương sai lớn, cần nhiều seed, khoảng tin cậy hoặc kiểm định, và mô tả đủ chi tiết cài đặt.

**Đọc khi nào.** Trước khi chọn số seed cho thí nghiệm chính, và khi mức cải thiện nhỏ.

**Liên hệ trong giáo trình.** Phần ý nghĩa thống kê trong bài [Experiments](../02-viet-tung-phan/experiments.md); Tình huống 11 trong bài [Khi con số không đẹp](../07-tinh-huong-kho/con-so-khong-dep.md).

### Zachary C. Lipton và Jacob Steinhardt, *Troubling Trends in Machine Learning Scholarship* (2018)

- **Hình thức:** position paper (arXiv:1807.03341, tháng 7/2018), viết cho workshop *Machine Learning Debates* tại ICML 2018, không phải main track.
- **Nguồn:** <https://arxiv.org/abs/1807.03341>
- **Mức xác minh:** cao (văn bản gốc).

Trang Tài nguyên giới thiệu bài này như tài liệu giúp viết tránh overclaim. Ở đây, bài được đọc như mô tả những kỷ luật cần có ngay từ lúc thiết kế thí nghiệm.

**Ý chính.**

- **Paper tốt** tách trực giác khỏi kết luận có bằng chứng, xét và loại trừ giả thuyết thay thế, và chọn thuật ngữ không gây hiểu lầm.
- **Bốn xu hướng đáng lo:** không phân biệt giải thích với suy đoán; không xác định nguồn của cải thiện; "mathiness", tức dùng toán để gây ấn tượng thay vì làm rõ; và lạm dụng ngôn ngữ.
- **Nguồn của cải thiện.** "Too frequently, authors propose many tweaks absent proper ablation studies, obscuring the source of empirical gains." (Tác giả quá hay đề xuất nhiều điều chỉnh mà không có ablation phù hợp, làm mờ nguồn của cải thiện.) Ví dụ là công trình của Melis và cộng sự: LSTM thông thường được tune kỹ có thể ngang các cải tiến kiến trúc. Ablation không cần mà cũng không đủ; phân tích lỗi cũng xây dựng hiểu biết.
- **Suy đoán như giải thích.** "Internal covariate shift" của batch normalization được nêu như sự thật khi chưa có định nghĩa rõ; ngược lại, paper dropout tách phần động cơ suy đoán ra riêng.
- **Thái độ.** Hai tác giả tự nhận từng mắc những lỗi này, và nói các mẫu hình đó không tự động biến paper thành paper tồi.

**Đọc khi nào.** Khi lập kế hoạch ablation, và trước khi viết phần phân tích.

**Liên hệ trong giáo trình.** Thiết kế ablation trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md); Tình huống 6 và 10 trong bài [Ghép ý tưởng và "độn" đóng góp](../07-tinh-huong-kho/ghep-va-don.md); bài [Đóng khung lại hay bóp méo: ranh giới trung thực](../07-tinh-huong-kho/ranh-gioi-trung-thuc.md).

### Jason Wei, *Successful language model evals* (2024)

- **Hình thức:** bài blog cá nhân, 2024, liên quan tới bài nói của Wei tại Stanford NLP Seminar tháng 5/2024.
- **Nguồn:** <https://jasonwei.net/blog/evals>
- **Mức xác minh:** trung bình (nội dung qua một bản đăng lại và các bản tóm tắt).

**Ý chính.**

- **Eval bị đánh giá thấp.** Eval "thành công" là eval được cộng đồng tin và được các paper đột phá dùng, như GLUE với BERT hay MMLU với Gopher, Chinchilla, Flan-PaLM.
- **Eval thất bại thường mắc ít nhất một lỗi.** Khuyến nghị: đủ nhiều ví dụ, một metric dạng con số, chấm điểm chính xác, dễ chạy, và nhiệm vụ có ý nghĩa.
- **Đây là kinh nghiệm cá nhân;** con số cụ thể về số ví dụ tối thiểu chỉ là quy tắc kinh nghiệm.

**Đọc khi nào.** Khi dự án đóng góp một benchmark, hoặc cần chọn eval cho mô hình ngôn ngữ lớn.

**Liên hệ trong giáo trình.** Chọn benchmark và metric trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md); Tình huống 30 trong bài [Bài toán, dữ liệu và phạm vi](../07-tinh-huong-kho/bai-toan-va-pham-vi.md).

## Viết và trình bày

Tài liệu về kỹ năng viết chủ yếu nằm ở trang [Tài nguyên](tai-nguyen.md), [Chương 2](../02-viet-tung-phan/index.md) và [Chương 3](../03-ky-thuat/index.md). Ba bài dưới đây được chọn vì chúng nói về vai trò của việc viết *trong quá trình nghiên cứu*. Kho *awesome-tips* của Huang còn hai file về viết đã được xác minh: một file xoay quanh nguyên tắc "Do NOT ask people to solve correspondence problems." (đừng bắt người đọc tự đi đối chiếu), một file khuyên related work kể quỹ đạo nghiên cứu và câu vẫn đúng ngữ pháp khi bỏ trích dẫn trong ngoặc.

### Simon Peyton Jones, *How to write a great research paper*

- **Hình thức:** bài giảng có slide và video, trình bày nhiều lần từ đầu những năm 2000 khi Peyton Jones ở Microsoft Research Cambridge; ông làm ngôn ngữ lập trình.
- **Nguồn:** <https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/>
- **Mức xác minh:** trung bình (năm bản đầu và đường dẫn chính xác chưa xác nhận).

**Ý chính.**

- **Đừng chờ, hãy viết.** Viết là cơ chế để *làm* nghiên cứu. Viết về ý tưởng từ sớm, kể cả khi nó còn nhỏ, để ý tưởng kết tinh và người khác góp ý được.
- **Xác định ý tưởng chính.** Ý tưởng là "a re-usable insight, useful to the reader" (insight tái sử dụng được, hữu ích cho người đọc); nhiều paper có ý tưởng tốt mà không chưng cất được nó.
- **Năm gợi ý còn lại:** kể một câu chuyện; nêu rõ đóng góp; đặt related work sau phần ý tưởng; đặt người đọc lên trước; lắng nghe người đọc.
- **Viết sớm là công cụ chẩn đoán.** Khi phải viết đoạn "cách này khác công trình trước ở đâu", nhóm thường phát hiện chưa trả lời được, trong khi vẫn còn thời gian sửa. Đây là cách giáo trình áp dụng gợi ý thứ nhất.

Gợi ý về vị trí related work đến từ văn hóa ngôn ngữ lập trình; ở ML và CV, related work thường là Section 2.

**Đọc khi nào.** Khi đã có ý tưởng mà chưa viết dòng nào.

**Liên hệ trong giáo trình.** Bản pitch một trang trong bài [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md); bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md); vị trí related work trong bài [Related Work](../02-viet-tung-phan/related-work.md).

### Jennifer Widom, *Tips for Writing Technical Papers* (2006)

- **Hình thức:** ghi chú trên web, tháng 1/2006, từ một bài trình bày ở nhóm InfoLab (cơ sở dữ liệu) của Stanford; Karpathy giới thiệu bài này trong hướng dẫn nghiên cứu sinh.
- **Nguồn:** <https://cs.stanford.edu/people/widom/paper-writing.html>
- **Mức xác minh:** trung bình (câu chữ năm câu hỏi được diễn giải).

**Ý chính.**

- **Introduction năm đoạn trả lời năm câu hỏi:** vấn đề là gì; vì sao nó quan trọng; vì sao khó, tức vì sao cách làm ngây thơ thất bại; vì sao chưa ai giải được; thành phần chính của cách tiếp cận và kết quả, kể cả giới hạn. Tiếp theo là danh sách đóng góp, lý tưởng là kèm vị trí chứng minh.
- **Đóng góp phải rõ trước khi người đọc hết trang ba.**
- **Thực nghiệm phải nói đo gì và vì sao;** kết luận không lặp lại abstract.
- **Năm câu hỏi như bài kiểm tra độ sẵn sàng.** Đây là gợi ý của giáo trình, không phải của Widom: chưa trả lời được câu ba hoặc câu bốn trước thí nghiệm chính là dấu hiệu chưa hiểu bài toán đủ sâu.

**Đọc khi nào.** Khi lập dàn ý Introduction, hoặc trước khi chốt ý tưởng.

**Liên hệ trong giáo trình.** Bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md); bộ câu hỏi thẩm định trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Chris Olah và Shan Carter, *Research Debt* (2017)

- **Hình thức:** tiểu luận trên tạp chí *Distill*, 2017, ra cùng thời điểm Distill ra đời; Olah viết chính, Carter minh họa.
- **Nguồn:** <https://distill.pub/2017/research-debt/>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Ẩn dụ ngọn núi.** Đạt tới hiểu biết ở mức nghiên cứu giống leo núi, và có thể dễ hơn nhiều nhờ tutorial, bài tổng quan, sách tốt. "The climb isn’t progress: the climb is a mountain of debt." (Leo không phải tiến bộ; leo là một núi nợ.)
- **Các dạng nợ:** trình bày kém, ý tưởng chưa tiêu hóa, trừu tượng và ký hiệu tồi, và nhiễu do quá nhiều paper không lọc được.
- **Lao động diễn giải.** "Research debt is the accumulation of missing interpretive labor." (Nợ nghiên cứu là sự tích tụ của phần lao động diễn giải còn thiếu.) Người giải thích trả chi phí một lần, mỗi người đọc đều phải trả chi phí hiểu.
- **Tư duy rõ ràng.** Ký hiệu và hình ảnh tốt là giao diện tốt hơn cho ý tưởng; không giải thích tốt được thường là chưa hiểu đủ sâu.
- **Chưng cất** đòi hỏi sáng tạo ngang nghiên cứu gốc, nhưng thiếu con đường sự nghiệp và nơi công bố.

**Đọc khi nào.** Khi thiết kế hình tổng quan và chọn ký hiệu, và khi cân nhắc viết bài tổng quan hay tutorial.

**Liên hệ trong giáo trình.** Bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md) và bài [Method](../02-viet-tung-phan/method.md); tổng quan và tutorial như một kiểu đóng góp trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

## Review và phản hồi

Người làm nghiên cứu sớm muộn sẽ đứng ở cả hai phía: viết review cho người khác, và trả lời review cho paper của nhóm. Các bài dưới đây giúp hiểu một bản review công tâm trông thế nào, những lối tắt nào làm review thiếu căn cứ, và cách viết phản hồi thuyết phục được người ra quyết định.

### ACL Rolling Review, *Reviewer Guidelines* và *Review Form*

- **Hình thức:** hướng dẫn reviewer và mẫu review của ARR. Bản đầu ngày 2/11/2021 do Anna Rogers và Isabelle Augenstein viết; cập nhật lớn ngày 21/10/2024, rồi tháng 5/2025 và 10/2025.
- **Nguồn:** <https://aclrollingreview.org/reviewerguidelines> ; <https://aclrollingreview.org/reviewform>
- **Mức xác minh:** cao (văn bản nguồn của trang, bản tháng 10/2025).

**Ý chính.**

- **Lướt rồi đọc sâu.** Khi lướt, hỏi câu hỏi nghiên cứu là gì, câu trả lời có đẩy lĩnh vực tiến lên không, claim có phạm vi phù hợp không; chưa nhìn kết quả để tránh thiên lệch. Nhận xét "nên thêm X" chỉ hợp lệ khi lập luận phụ thuộc vào X.
- **Cụ thể thay vì chung chung.** Thay "không mới" bằng "X và Y rất giống, đã công bố hơn ba tháng trước deadline"; thay "thiếu baseline" bằng "nên so với X, Y, Z".
- **Mười bảy heuristic phản biện lười,** mỗi mục kèm lý do. Ví dụ: không vượt SOTA, vì "SOTA results are neither necessary nor sufficient for a *scientific* contribution." (kết quả SOTA không cần cũng không đủ cho một đóng góp *khoa học*); phương pháp quá đơn giản, vì "The goal is to solve the problem, not to solve it in a complex way." (mục tiêu là giải bài toán, không phải giải theo cách phức tạp); đòi thêm thí nghiệm, trong khi "a paper only needs to present sufficient evidence for the claim that the authors are making" (paper chỉ cần đủ bằng chứng cho claim của tác giả). ARR không cấm các nhận xét này, chỉ nói chúng không tự động là điểm yếu. Bản 2021–2022 có mười bốn mục.
- **Bộ mã vấn đề thường gặp:** M về phương pháp (như chỉ đánh giá bằng LLM mà không kiểm chứng), T về dữ liệu và artifact, R về kết quả (p-hacking, baseline tune chưa đủ, claim vượt phạm vi mẫu, thiếu kiểm định), G về vấn đề chung (câu hỏi nghiên cứu không rõ, trích dẫn sai).
- **Giọng văn** chuyên nghiệp, trung tính; nên là bản review mà chính reviewer muốn nhận.

**Đọc khi nào.** Trước khi review cho ARR; trước khi nộp, dùng bộ mã để tự kiểm; khi rebuttal, có thể dẫn tên heuristic.

**Liên hệ trong giáo trình.** Heuristic phản biện lười trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md); bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md); tự đóng vai reviewer trong bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md).

### Anna Rogers và Isabelle Augenstein, *What Can We Do to Improve Peer Review in NLP?* (2020)

- **Hình thức:** paper tại *Findings of EMNLP 2020*, trang 1256–1262 (arXiv:2010.03863).
- **Nguồn:** <https://aclanthology.org/2020.findings-emnlp.112/>
- **Mức xác minh:** trung bình (abstract và thông tin thư mục; khuyến nghị chi tiết chưa đối chiếu toàn văn).

**Ý chính.**

- **Chẩn đoán.** Peer review là công cụ tốt nhất nhưng ngày càng kém tin cậy, một phần vì reviewer được giao nhiệm vụ định nghĩa kém, buộc phải so sánh khập khiễng giữa các loại paper.
- **Lối tắt của reviewer:** reject nếu không SOTA, phạt người viết không phải bản ngữ, coi công trình về ngôn ngữ khác tiếng Anh là ngách, ưu ái công trình gia tăng an toàn.
- **Hướng cải thiện:** định nghĩa rõ loại đóng góp, đào tạo reviewer, hướng dẫn tường minh. Các ý này đi thẳng vào bản hướng dẫn ARR đầu tiên do chính hai tác giả viết.
- **Bằng chứng về sau.** *LazyReview* (Purkayastha và cộng sự, 2025, arXiv:2504.11042) dẫn báo cáo ACL 2023: các heuristic này là "one of the leading factors (24.3%) of author-reported issues in peer reviews" (một nguyên nhân hàng đầu, chiếm 24,3% vấn đề về review do tác giả phản ánh). Con số là tỉ lệ trong các vấn đề được báo cáo, không phải trên tổng số review.

**Đọc khi nào.** Khi muốn hiểu vì sao review có thể thiếu căn cứ, và khi định vị paper không SOTA hoặc về ngôn ngữ ít tài nguyên.

**Liên hệ trong giáo trình.** Tính ngẫu nhiên của review trong bài [Paper được đánh giá thế nào](../00-tong-quan/review-process.md).

### Devi Parikh, Dhruv Batra và Stefan Lee, *How we write rebuttals* (2020)

- **Hình thức:** bài blog trên Medium, ngày 27/5/2020, viết từ kinh nghiệm với CVPR, ECCV, ICCV, NeurIPS, ICLR, EMNLP.
- **Nguồn:** <https://deviparikh.medium.com/how-we-write-rebuttals-dc84742fece1>
- **Mức xác minh:** trung bình (các mẹo qua trích đoạn).

**Ý chính.**

- **Nguyên tắc:** rebuttal kỹ lưỡng, trực tiếp, dễ theo dõi với reviewer và AC.
- **Quy trình nhóm:** liệt kê mọi ý của reviewer; cả nhóm thống nhất cách trả lời; viết nháp đủ mọi ý rồi mới cắt và sắp ưu tiên.
- **Mở đầu tích cực** bằng những điểm reviewer đánh giá cao; nhắc lại từ viết tắt và thiết lập quan trọng vì người đọc không nhớ paper.
- **Dùng dữ liệu,** không chỉ lập luận.
- **Thuyết phục trọng tài:** như một cuộc tranh luận, mục tiêu chính là thuyết phục AC hơn là làm reviewer đổi ý.

Điểm đáng học, so với giới thiệu ở trang Tài nguyên, là coi rebuttal như công việc nhóm có quy trình và đổi người đọc mục tiêu sang AC.

**Đọc khi nào.** Ngay khi nhận review, hoặc tốt hơn là trước đó.

**Liên hệ trong giáo trình.** Bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md).

### Laura Leal-Taixé và Torsten Sattler, tutorial *How to write a good review?* (CVPR 2020)

- **Hình thức:** tutorial tại CVPR 2020 (14/6/2020, trực tuyến), còn gọi là "Making Reviews Great Again", có slide và video.
- **Nguồn:** <https://sites.google.com/view/making-reviews-great-again>
- **Mức xác minh:** trung bình (lời khuyên từng diễn giả qua bài tường thuật).

**Ý chính.**

- **Động cơ:** cộng đồng CV khi đó chưa có cơ chế đào tạo thế hệ reviewer mới.
- **Toàn bộ vòng đời:** viết paper (Bill Freeman), review, rebuttal (Andrew Fitzgibbon), cách ra quyết định (Vittorio Ferrari, Greg Mori), và chia sẻ của các reviewer xuất sắc.
- **Lời khuyên lặp lại:** viết review mà chính reviewer muốn nhận; viết riêng cho từng paper; nói rõ mỗi lo ngại nặng tới đâu; nhớ review có nhiều người đọc.
- **Cho tác giả:** Fitzgibbon khuyên coi review là cơ hội cải thiện paper, và giữ bình tĩnh khi rebuttal.

**Đọc khi nào.** Xem video trước lần review đầu tiên cho một hội nghị Computer Vision.

**Liên hệ trong giáo trình.** Bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md) và bài [Khi bị reject](../04-nop-va-sau-nop/reject.md).

## Đời sống nghiên cứu sinh

Nhóm cuối không dạy một kỹ năng cụ thể, mà giúp đặt kỳ vọng đúng về cả hành trình: chương trình tiến sĩ thật sự trông thế nào, đóng góp của một người lớn tới đâu, và vì sao những năm đầu thường nhiều thất bại.

### Andrej Karpathy, *A Survival Guide to a PhD*: các phần còn lại (2016)

- **Hình thức và nguồn:** xem mục cùng tên ở nhóm Chọn bài toán. Mục này bàn các phần về viết paper, code và "Don't play the game".
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Học viết bằng cách review.** Chỉ đọc paper tốt giống huấn luyện bộ phân loại chỉ bằng ví dụ dương.
- **Một đóng góp cốt lõi.** "The paper sells a single thing that was not obvious or present before." (Paper bán một điều duy nhất chưa hiển nhiên hoặc chưa có trước đó.)
- **Ấn tượng tổng thể.** Người đọc có kinh nghiệm đánh giá paper rất nhanh qua hình dáng tổng thể của nó. Karpathy trình bày điều này như một heuristic của reviewer, với giọng nửa đùa, không phải công thức để được nhận; đoạn "từ tốt, từ xấu" là châm biếm.
- **Kỷ luật viết:** mỗi đoạn một ý nêu ở câu đầu; tránh liệt kê "làm X, rồi Y" mà không giải thích; deadline nội bộ sớm hai tuần với bản nháp được review bằng mẫu thật.
- **Code và "đừng chơi trò chơi".** Công bố code giúp giữ thói quen tốt và giúp công trình được tiếp nối; viết tài liệu cho bản thân trong tương lai. Ông khuyên nhìn chương trình tiến sĩ rộng hơn một chuỗi paper, và tự nhận quan điểm này gây tranh cãi.

**Đọc khi nào.** Năm đầu nghiên cứu sinh; đọc lại phần viết paper trước paper đầu tiên.

**Liên hệ trong giáo trình.** Bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md); deadline nội bộ trong bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md); bài [Camera-ready, poster, code](../04-nop-va-sau-nop/camera-ready.md).

### Philip J. Guo, *The Ph.D. Grind: A Ph.D. Student Memoir* (2012)

- **Hình thức:** hồi ký e-book miễn phí khoảng 115 trang, phát hành năm 2012, sau khi Guo hoàn thành tiến sĩ khoa học máy tính ở Stanford; bản tái bản 2015 có thêm ghi chú bên lề.
- **Nguồn:** <https://pgbovine.net/PhD-memoir.htm>
- **Mức xác minh:** trung bình (nhiều bản tóm tắt thống nhất).

**Ý chính.**

- **Lời kể thẳng thắn theo từng năm:** những dự án đầu không thành paper, chật vật tìm sự phù hợp với người hướng dẫn và đề tài, và thành công khi tự khởi xướng một hướng riêng.
- **"Main grinds" và "side grinds":** việc luận án do người hướng dẫn dẫn dắt, và dự án phụ tự khởi xướng; với Guo, dự án phụ hóa ra rất quan trọng.
- **Bền bỉ tự định hướng** qua những lần bị từ chối là chủ đề xuyên suốt.
- **Hồi ký, không phải cẩm nang:** đó là trải nghiệm của một nghiên cứu sinh, không phải quy luật.

**Đọc khi nào.** Trước khi vào chương trình tiến sĩ, và khi nản, nhất là ngay sau một lần bị reject.

**Liên hệ trong giáo trình.** Bài [Khi bị reject](../04-nop-va-sau-nop/reject.md).

### Matt Might, *The illustrated guide to a Ph.D.* (2010)

- **Hình thức:** tiểu luận bằng hình trên website của Might, 2010, giấy phép Creative Commons.
- **Nguồn:** <https://matt.might.net/articles/phd-school-in-pictures/>
- **Mức xác minh:** cao (nhiều nguồn thống nhất).

**Ý chính.**

- **Vòng tròn tri thức.** Bài mở bằng câu "Imagine a circle that contains all of human knowledge" (hãy hình dung một vòng tròn chứa toàn bộ tri thức nhân loại). Học vấn thêm dần chuyên môn ở rìa vòng tròn; đọc paper đưa người học tới biên giới.
- **Vết lõm.** Đẩy vào biên giới nhiều năm cho tới khi tạo ra một vết lõm nhỏ; vết lõm đó là luận án.
- **Giữ bức tranh lớn:** vết lõm rất nhỏ so với cả vòng tròn.
- **Hệ quả cho người làm paper** (cách đọc của giáo trình): novelty thường là một cú đẩy nhỏ ở biên giới, không phải một cuộc lật đổ; hiểu vậy giúp người mới không tê liệt vì đi tìm ý tưởng "đủ lớn".

**Đọc khi nào.** Ngay buổi đầu, và khi thấy đóng góp của nhóm quá nhỏ bé.

**Liên hệ trong giáo trình.** Các kiểu đóng góp trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

## Đọc thêm (chưa xác minh đầy đủ)

!!! note "Vì sao các mục này nằm riêng"
    Các bài dưới đây chắc chắn tồn tại và được nhắc nhiều, nhưng nội dung chưa được đối chiếu đủ để chú giải như các mục ở trên. Ở đây chỉ ghi thông tin đã xác nhận. Trước khi dẫn bất kỳ ý nào, cần đọc bản gốc.

- **Sebastian Ruder, *10 Tips for Research and a PhD*** (blog, 22/5/2020). Sự tồn tại và ngày đăng đã xác nhận, nhưng danh sách mười mẹo chưa được đọc; nguồn thứ cấp nhắc ý chạy song song hai dự án, một dự án rủi ro cao. <https://www.ruder.io/tag/advice/>
- **Neel Nanda, loạt bài *My Research Process*** (Alignment Forum, 2025), mở đầu bằng *How I Think About My Research Process: Explore, Understand, Distill*. Tiêu đề đã xác nhận; nội dung mới qua bản tóm tắt. <https://www.alignmentforum.org/s/5GT3yoYM9gRmMEKqL>
- **William T. Freeman, slide *How to write a good CVPR submission*** (bản 2014 và 2018) và ghi chú *How To Do Research* (MIT CSAIL). Nội dung chưa được đọc, trừ đoạn về khoanh vùng lỗi mà Huang dẫn lại. Không nhầm với tài liệu *How to do Research At the MIT AI Lab* (1988) do David Chapman biên tập. <https://billf.mit.edu/sites/default/files/documents/cvprPapers.pdf>

## Lộ trình đọc gợi ý

Mỗi lộ trình gồm năm bài, theo thứ tự có chủ đích. Sau mỗi bài, nên áp dụng ít nhất một ý vào dự án đang làm trước khi đọc bài tiếp.

### Cho người mới bắt đầu nghiên cứu

1. **Might,** *The illustrated guide to a Ph.D.*: đặt kỳ vọng đúng về quy mô của một đóng góp.
2. **Karpathy,** *A Survival Guide to a PhD*: bức tranh toàn cảnh của hành trình nghiên cứu sinh trong AI.
3. **Keshav,** *How to Read a Paper*: kỹ năng dùng hằng ngày; đọc xong, thử đọc ba paper theo đúng ba lượt.
4. **Hamming,** *You and Your Research*: đọc khi đã có chút trải nghiệm, để câu hỏi về bài toán quan trọng có ý nghĩa cụ thể.
5. **Alon,** *How To Choose a Good Scientific Problem*: biến tham vọng thành một lựa chọn vừa sức cho dự án đầu tiên.

### Cho người sắp viết paper đầu tay

1. **Peyton Jones,** *How to write a great research paper*: bắt đầu viết ngay, xác định một ý tưởng chính.
2. **Widom,** *Tips for Writing Technical Papers*: năm câu hỏi cho Introduction, cũng là năm câu hỏi kiểm tra dự án.
3. **Lipton và Steinhardt,** *Troubling Trends in Machine Learning Scholarship*: đọc trước khi chốt thí nghiệm để kịp bổ sung ablation.
4. **Hướng dẫn reviewer của hội nghị đích** (ARR, ICLR hoặc NeurIPS, CVPR): đọc như reviewer sẽ đọc bản thảo của nhóm.
5. **Black,** *Novelty in Science*: nói rõ novelty nằm ở đâu, nhất là khi phương pháp đơn giản.

### Cho người đang bế tắc

1. **Thí nghiệm không chạy, không rõ vì sao:** Karpathy, *A Recipe for Training Neural Networks*.
2. **Bận mà không thấy tiến độ:** Huang, *awesome-tips*, phần giữ tiến độ.
3. **Quá nhiều nhánh việc, không biết làm gì trước:** Steinhardt, *Research as a Stochastic Decision Process*.
4. **Muốn bỏ đề tài để theo ý tưởng mới:** Schulman, phần về đổi bài toán, đọc cùng ba kiểu thất bại trong ghi chú của Olah; hai bài kéo về hai phía, và cân nhắc giữa chúng giúp quyết định tốt hơn.
5. **Nản về tinh thần:** bài nói TED của Alon về "đám mây", rồi *The Ph.D. Grind* của Guo.

## Bài tập

1. **Tóm tắt có đối chiếu.** Chọn ba bài ứng với giai đoạn hiện tại của dự án, đọc bản gốc, và viết cho mỗi bài một bản tóm tắt một trang theo khung dưới đây. Sau đó so với phần chú giải trên trang này và ghi lại chỗ khác nhau.

    ```text
    Bài: <tác giả, tên bài, năm>
    Ba ý chính (diễn đạt lại, không chép):
    1.
    2.
    3.
    Một điều đồng ý và vì sao:
    Một điều nghi ngờ, hoặc không hợp với hoàn cảnh của nhóm, và vì sao:
    Đối chiếu với dự án hiện tại:
      - Dự án đang làm đúng điều nào?
      - Dự án đang làm ngược điều nào?
    Một việc cụ thể sẽ làm trong tuần này:
    Cách biết việc đó có hiệu quả:
    ```

2. **Tự chấm theo mười điều.** Với dự án đang làm, chấm mỗi điều theo thang 0 (chưa làm), 1 (làm một phần), 2 (đã thành thói quen), kèm một câu bằng chứng. Chọn hai điều điểm thấp nhất, mở bài tương ứng trong giáo trình, và viết kế hoạch hành động cho hai tuần tới.
3. **Hòa giải hai lời khuyên trái ngược.** Chọn một cặp trong mục "Khi các lời khuyên có vẻ trái ngược nhau" hoặc tự tìm một cặp khác. Viết nửa trang trả lời: với dự án hiện tại, lời khuyên nào nên được ưu tiên, điều kiện nào khiến quyết định cần xem lại, và lần rà soát tiếp theo vào khi nào.
4. **Phỏng vấn một nhà nghiên cứu.** Theo gợi ý trong ghi chú của Olah, hỏi một người có kinh nghiệm hơn về cách họ chọn bài toán và cách họ biết khi nào dừng một hướng. So với Hamming, Schulman và Alon, và ghi lại một điều không có trong bài nào trên trang này.
5. **Tự xác minh một nguồn.** Chọn một bài trong mục Đọc thêm, đọc bản gốc, viết ba tới năm ý chính kèm vị trí trong bài, rồi so với các bản tóm tắt thứ cấp tìm được và ghi lại chỗ bị diễn giải sai. Bài tập này luyện một thói quen cần có: không dẫn một nguồn chưa tự đọc.

## Tài liệu tham khảo của bài

**Chọn bài toán và gu nghiên cứu**

- Richard W. Hamming. *You and Your Research*. 1986. Bài nói. <https://www.cs.virginia.edu/~robins/YouAndYourResearch.html>
- John Schulman. *An Opinionated Guide to ML Research*. 2020. Blog. <http://joschu.net/blog/opinionated-guide-ml-research.html>
- Uri Alon. *How To Choose a Good Scientific Problem*. Molecular Cell 35(6), 2009. Tiểu luận. <https://doi.org/10.1016/j.molcel.2009.09.013>
- Uri Alon. *Why truly innovative science demands a leap into the unknown*. Bài nói TED.
- Andrej Karpathy. *A Survival Guide to a PhD*. 2016. Blog. <https://karpathy.github.io/2016/09/07/phd/>
- Michael A. Nielsen. *Principles of Effective Research*. 2004. Tiểu luận. <https://michaelnielsen.org/blog/principles-of-effective-research/>
- Richard S. Sutton. *The Bitter Lesson*. 2019. Tiểu luận. <http://www.incompleteideas.net/IncIdeas/BitterLesson.html>

**Đọc paper và đọc phản biện**

- S. Keshav. *How to Read a Paper*. ACM SIGCOMM CCR 37(3), 2007. Bài ngắn. <https://doi.org/10.1145/1273445.1273458>
- Jason Eisner. *How to Read a Technical Paper*. 2009. Bài viết trên web. <https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html>
- Andrew Ng. Bài giảng về đọc paper, Stanford CS230. 2018. Bài giảng; bản tóm tắt: <https://www.kdnuggets.com/2019/09/advice-building-machine-learning-career-research-papers-andrew-ng.html>
- Michael J. Black. *Novelty in Science: A guide for reviewers*. 2022. Blog. <https://medium.com/@black_51980/novelty-in-science-8f1fd1a0a143>
- ICLR Reviewer Guide, 2020–2027. Trang chính sách. <https://iclr.cc/Conferences/2026/ReviewerGuide>
- NeurIPS Reviewer Guidelines, 2021–2026. Trang chính sách. <https://neurips.cc/Conferences/2026/ReviewerGuidelines>
- CVPR Reviewer Guidelines, 2015–2025. Trang chính sách. <https://cvpr.thecvf.com/Conferences/2025/ReviewerGuidelines>
- Ban chương trình CVPR/ICCV. *How to Write Good Reviews for CVPR*. Slide tập huấn, dựa trên tài liệu 2019. <https://kshah33.github.io/files/CVPRReviewerTutorial.pdf>

**Tìm ý tưởng và khoảng trống**

- Michael S. Bernstein. Stanford CS 197 *Computer Science Research*. Khóa học. <https://web.stanford.edu/class/cs197/>
- O'Neill và cộng sự. *Sparks of Science: Hypothesis Generation Using Structured Paper Data*. 2025. Paper. arXiv:2504.12976.
- Chris Olah. *Research Taste Exercises*. 2021. Ghi chú trên blog. <https://colah.github.io/notes/taste/>

**Lập kế hoạch và giữ tiến độ**

- George H. Heilmeier. *Heilmeier Catechism*. DARPA, thập niên 1970. Bộ câu hỏi. <https://murray.cds.caltech.edu/Heilmeier_Catechism>
- Jacob Steinhardt. *Research as a Stochastic Decision Process*. 2018. Tiểu luận. <https://cs.stanford.edu/~jsteinhardt/ResearchasaStochasticDecisionProcess.html>
- Gary Klein. *Performing a Project Premortem*. Harvard Business Review 85(9), 2007. Bài báo. <https://hbr.org/2007/09/performing-a-project-premortem>
- Jia-Bin Huang. *awesome-tips*. Từ khoảng 2021. Kho GitHub. <https://github.com/jbhuang0604/awesome-tips>

**Thực nghiệm**

- Andrej Karpathy. *A Recipe for Training Neural Networks*. 2019. Blog. <https://karpathy.github.io/2019/04/25/recipe/>
- Varun Godbole, George E. Dahl, Justin Gilmer, Christopher J. Shallue, Zachary Nado. *Deep Learning Tuning Playbook*. 2023. Tài liệu GitHub. <https://github.com/google-research/tuning_playbook>
- Peter Henderson và cộng sự. *Deep Reinforcement Learning that Matters*. AAAI 2018. Paper. <https://arxiv.org/abs/1709.06560>
- Zachary C. Lipton, Jacob Steinhardt. *Troubling Trends in Machine Learning Scholarship*. 2018. Position paper. <https://arxiv.org/abs/1807.03341>
- Jason Wei. *Successful language model evals*. 2024. Blog. <https://jasonwei.net/blog/evals>

**Viết và trình bày**

- Simon Peyton Jones. *How to write a great research paper*. Bài giảng. <https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/>
- Jennifer Widom. *Tips for Writing Technical Papers*. 2006. Ghi chú trên web. <https://cs.stanford.edu/people/widom/paper-writing.html>
- Chris Olah, Shan Carter. *Research Debt*. Distill, 2017. Tiểu luận. <https://distill.pub/2017/research-debt/>

**Review và phản hồi**

- ACL Rolling Review. *Reviewer Guidelines* và *Review Form* (bản 10/2025). Trang chính sách. <https://aclrollingreview.org/reviewerguidelines>
- Anna Rogers, Isabelle Augenstein. *What Can We Do to Improve Peer Review in NLP?* Findings of EMNLP 2020. Paper. <https://aclanthology.org/2020.findings-emnlp.112/>
- Sukannya Purkayastha và cộng sự. *LazyReview: A Dataset for Uncovering Lazy Thinking in NLP Peer Reviews*. 2025. Paper. arXiv:2504.11042.
- Devi Parikh, Dhruv Batra, Stefan Lee. *How we write rebuttals*. 2020. Blog. <https://deviparikh.medium.com/how-we-write-rebuttals-dc84742fece1>
- Laura Leal-Taixé, Torsten Sattler. *How to write a good review?* CVPR 2020. Tutorial. <https://sites.google.com/view/making-reviews-great-again>

**Đời sống nghiên cứu sinh**

- Philip J. Guo. *The Ph.D. Grind: A Ph.D. Student Memoir*. 2012. Hồi ký. <https://pgbovine.net/PhD-memoir.htm>
- Matt Might. *The illustrated guide to a Ph.D.* 2010. Tiểu luận bằng hình. <https://matt.might.net/articles/phd-school-in-pictures/>
