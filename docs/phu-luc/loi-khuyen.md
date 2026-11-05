# Lời khuyên từ các nhà nghiên cứu hàng đầu

Phần lớn những kỹ năng quan trọng nhất của nghề nghiên cứu không nằm trong paper. Một paper trình bày bài toán, phương pháp và kết quả cuối cùng. Nó hầu như không kể nhóm tác giả đã chọn bài toán ấy giữa hàng chục ứng viên ra sao, đã bỏ những hướng nào, đã xếp thứ tự thí nghiệm thế nào, và đã làm gì trong những tuần không có gì chạy. Nhóm tác giả của *Deep Learning Tuning Playbook* nói thẳng điều này: paper thường lướt qua quá trình dẫn tới kết quả để kể một câu chuyện gọn hơn, nên những cách làm việc thực tế hiếm khi được viết ra. Ở các phòng thí nghiệm lớn, kỹ năng ấy được truyền qua con đường học việc. Nghiên cứu sinh quan sát người hướng dẫn và các thành viên đi trước, thử, sai, rồi được sửa. Người học không có sẵn một môi trường như vậy chịu thiệt thòi đáng kể.

May mắn là một số nhà nghiên cứu đã chịu khó viết kinh nghiệm của họ thành bài nói, tiểu luận, blog hay ghi chú bài giảng. Có bài đã gần bốn mươi năm tuổi mà vẫn được các thế hệ nghiên cứu sinh đọc lại. Có bài mới vài năm nhưng đã thành tài liệu nhập môn ở nhiều nhóm học máy. Trang này tuyển chọn và chú giải những bài như vậy, sắp theo vòng đời của một dự án nghiên cứu. Với mỗi mục, người đọc biết bài nói gì, vì sao đáng đọc, nên đọc vào lúc nào, và nối với bài nào trong giáo trình. Phần đầu trang tổng hợp chéo mười điều mà nhiều tác giả độc lập cùng nhắc lại. Một lời khuyên mà những người làm ở các lĩnh vực và thời điểm khác nhau cùng đi tới thường đáng tin hơn một lời khuyên riêng lẻ.

Trang này có một trang anh em là [Tài nguyên](tai-nguyen.md), và hai trang chia vai rõ ràng. Trang Tài nguyên nghiêng về *viết paper, hướng dẫn chính thức của hội nghị và công cụ*. Trang này nghiêng về *nghề nghiên cứu*: chọn bài toán, đọc và đánh giá, tìm ý tưởng, lập kế hoạch, làm thực nghiệm, và trụ được với nghề. Một số bài có mặt ở cả hai trang, như bài giảng của Simon Peyton Jones, ghi chú của Jennifer Widom, bài về đọc paper của S. Keshav và Jason Eisner, bài về rebuttal của Devi Parikh và cộng sự, tiểu luận của Jacob Steinhardt, position paper của Lipton và Steinhardt, hay hướng dẫn nghiên cứu sinh của Andrej Karpathy. Ở trang Tài nguyên, mỗi bài chỉ được giới thiệu trong một hai câu. Ở đây, chúng được phân tích kỹ hơn và chủ yếu dưới góc nhìn của người làm nghiên cứu, chứ không phải của người viết.

## Cách dùng trang này

Trang này không được viết để đọc hết một lúc. Cách dùng hiệu quả hơn là đọc phần Mười điều một lần để có bức tranh chung, rồi mở nhóm ứng với giai đoạn mà dự án đang ở. Đang chọn hướng thì đọc nhóm chọn bài toán; sắp chạy thí nghiệm lớn đầu tiên thì đọc nhóm thực nghiệm. Trong mỗi nhóm, nên chọn một hoặc hai bài để đọc bản gốc. Phần chú giải ở đây giúp chọn bài và biết cần chú ý vào đâu, nhưng không thay được bản gốc, nơi lời khuyên đi kèm câu chuyện, ví dụ và giọng văn của người viết. Cuối trang có ba lộ trình đọc, mỗi lộ trình năm bài, cho ba hoàn cảnh thường gặp.

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
    Tuyển tập chính chỉ gồm những bài đã được xác minh: sự tồn tại, tác giả, năm và ý chính được đối chiếu với văn bản gốc hoặc với nhiều nguồn độc lập thống nhất nhau. Mỗi mục có dòng **Mức xác minh**. *Cao* nghĩa là đã đối chiếu văn bản gốc. *Trung bình* nghĩa là ý chính được nhiều bản sao, bản dịch hoặc bản tóm tắt xác nhận, nhưng câu chữ chi tiết có thể chưa chính xác tuyệt đối; khi cần trích, nên đọc bản gốc trước. Những bài chưa xác minh đủ được tách riêng vào mục *Đọc thêm* ở cuối. Câu trích nguyên văn chỉ được dùng khi đã đối chiếu được câu chữ, và luôn kèm diễn giải tiếng Việt.

    Quan trọng hơn, mọi lời khuyên ở đây là kinh nghiệm cá nhân của người viết, gắn với lĩnh vực, thời điểm và giai đoạn sự nghiệp của họ, không phải quy luật. Hướng dẫn reviewer của các hội nghị thay đổi hằng năm. Phiên bản được nhắc ở đây là phiên bản đã đối chiếu khi trang được tổng hợp (tháng 11/2026), và người đọc cần kiểm tra bản mới nhất.

Cũng nên để ý nguồn gốc của từng lời khuyên. Không phải tác giả nào dưới đây cũng làm AI. Richard Hamming làm toán và khoa học máy tính ở Bell Labs, Uri Alon làm sinh học hệ thống, Michael Nielsen xuất phát từ vật lý lượng tử, Gary Klein là nhà tâm lý học, George Heilmeier điều hành cơ quan tài trợ nghiên cứu quốc phòng DARPA. S. Keshav làm mạng máy tính, Jennifer Widom làm cơ sở dữ liệu, Simon Peyton Jones làm ngôn ngữ lập trình, Michael Bernstein làm tương tác người và máy. Trong các tác giả AI, Karpathy, Michael Black và Jia-Bin Huang gắn với Computer Vision; Jason Eisner, Anna Rogers và Isabelle Augenstein gắn với NLP; John Schulman, Richard Sutton, Chris Olah, Zachary Lipton và Jacob Steinhardt gần với Machine Learning và học tăng cường. Lời khuyên về nguyên tắc chung thường chuyển giao tốt giữa các lĩnh vực. Lời khuyên về quy ước cụ thể, như đặt related work ở đâu hay cần bao nhiêu thí nghiệm, phải được đối chiếu với cộng đồng mà người học định nộp bài.

## Mười điều các nhà nghiên cứu hàng đầu cùng nhắc lại

Khi đọc nhiều bài trong tuyển tập, người đọc sẽ nhận ra một điều đáng chú ý. Những người làm ở các lĩnh vực rất khác nhau, viết cách nhau hàng chục năm, lại đi tới một số lời khuyên gần như giống hệt nhau. Hamming nói về bài toán quan trọng năm 1986; Schulman và Karpathy nói điều tương tự cho deep learning hơn ba mươi năm sau. Sự lặp lại độc lập như vậy là bằng chứng mạnh nhất mà một tuyển tập lời khuyên có thể đưa ra. Mười điều dưới đây là phần giao ấy. Mỗi điều ghi các tác giả đã nói tương tự, để người đọc có thể tìm bản gốc, và bài trong giáo trình nơi điều ấy được biến thành quy trình cụ thể.

### Điều 1: Chọn bài toán quan trọng, nhưng chỉ khi đã có cách tấn công

Không ai làm được công trình quan trọng nếu cả sự nghiệp chỉ chọn bài toán an toàn. Hamming đặt câu hỏi này vào trung tâm bài nói của ông, nhưng thêm ngay một điều kiện hay bị quên: một bài toán chỉ "quan trọng" khi đã có cách tấn công hợp lý, chứ không phải khi hệ quả của nó lớn. Karpathy dẫn lại đúng ý này và bổ sung một quan sát từ kinh nghiệm riêng: bài toán quan trọng gấp mười lần thường không khó gấp mười lần. Schulman khuyên tự hỏi dự án đang nhắm tới mức cải thiện 10% hay gấp 10 lần. Alon cân bằng sự tham vọng bằng trục khả thi: bài toán đáng chọn nằm ở vùng vừa thú vị vừa làm được với nguồn lực và giai đoạn hiện tại.

- **Nguồn:** Hamming (1986), Karpathy (2016), Schulman (2020), Alon (2009).
- **Trong giáo trình:** [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md), [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Điều 2: Gu nghiên cứu là kỹ năng luyện được, và việc chọn cần thời gian

Gu nghiên cứu là khả năng nhìn một bài toán và đoán được nó có đáng làm không. Nghe thì giống năng khiếu bẩm sinh, nhưng các tác giả đều nói ngược lại. Karpathy viết rằng gu là có thật, học được qua thực hành và học việc, và thừa nhận lúc mới bắt đầu gu của ông rất tệ. Schulman mô tả gu hình thành dần khi quan sát ý tưởng nào thành công và ý tưởng nào bị lãng quên. Olah giải thích vì sao gu khó luyện: mỗi lần kiểm tra một ý tưởng tốn nhiều tháng, nên mỗi năm chỉ có vài lần nhận phản hồi; cần những bài tập cho phản hồi rẻ hơn. Alon thêm một hệ quả thực tế: đừng chọn vội, vì nhóm của ông thường dành khoảng ba tháng trước khi cam kết với một bài toán.

- **Nguồn:** Karpathy (2016), Schulman (2020), Olah (2021), Alon (2009).
- **Trong giáo trình:** [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md), [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md).

### Điều 3: Làm phần rủi ro nhất trước

Bản năng tự nhiên là bắt đầu từ phần dễ và quen để có cảm giác tiến triển. Steinhardt lập luận rằng nên làm ngược lại: xếp các việc theo lượng thông tin thu được trên mỗi đơn vị thời gian, và ưu tiên những phần dễ làm chết dự án nhất so với chi phí của chúng. Khóa CS197 của Bernstein gọi việc xác định chiều rủi ro lớn nhất là *vectoring*. Premortem của Klein là kỹ thuật làm việc nhóm để làm lộ các rủi ro ấy trước khi bắt đầu. Huang đưa ra phiên bản thực hành: chạy baseline trước, và làm ngược từ đầu ra cuối cùng để sớm thấy kết quả có đáng theo đuổi không.

- **Nguồn:** Steinhardt (2018), CS197 (Bernstein), Klein (2007), Huang (*awesome-tips*).
- **Trong giáo trình:** [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md), [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Điều 4: Lặp nhanh bằng thí nghiệm nhỏ, mỗi lần chỉ thay đổi một thứ

Tốc độ của một dự án không đo bằng số giờ GPU, mà bằng số vòng "giả thuyết, thí nghiệm, kết luận" hoàn thành mỗi tuần. Huang khuyên dùng ví dụ đồ chơi, trường hợp đơn giản và một proxy nhỏ, nhanh, thay vì chỉ chạy những lần huấn luyện kéo dài hàng tuần; mỗi thí nghiệm chỉ đổi đúng một thứ. Karpathy xây cả công thức huấn luyện quanh nguyên tắc đi từ đơn giản tới phức tạp, mỗi bước có một giả thuyết cụ thể được kiểm chứng. Tuning Playbook tổ chức việc tuning thành các vòng, mỗi vòng một mục tiêu hẹp, vì đổi nhiều thứ cùng lúc thì không tách được tác động. CS197 gọi khả năng giảm nhanh bất định là *velocity* và nhấn mạnh rằng velocity khác với tiến độ bề ngoài.

- **Nguồn:** Huang (*awesome-tips*), Karpathy (2019), Godbole và cộng sự (2023), CS197 (Bernstein).
- **Trong giáo trình:** [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md), [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md).

### Điều 5: Ghi chép mọi thứ và đọc lại định kỳ

Trí nhớ là công cụ tồi để quản lý một dự án kéo dài nhiều tháng. Schulman khuyên giữ sổ nghiên cứu hằng ngày, ghi ý tưởng, thí nghiệm, kết quả kèm hình và bảng, rồi đọc lại mỗi một hai tuần. Nhờ đó, ý tưởng cũ có dịp quay lại, kết quả nằm một chỗ, và có thể kiểm tra thời gian thực sự đã đi đâu. Eisner khuyên ghi chú ngay trong lúc đọc paper, vì ghi chú vừa giữ sự tập trung vừa thành nguyên liệu cho related work và ý tưởng mới. Huang khuyên giữ một bộ slide duy nhất cho mọi kết quả, và gửi bản tóm tắt cùng kế hoạch sau mỗi buổi họp. Hamming nói về thói quen để ý và theo dõi những chỗ có vẻ sai trong lý thuyết hiện có, một dạng ghi chép khác dẫn tới ý tưởng.

- **Nguồn:** Schulman (2020), Eisner (2009), Huang (*awesome-tips*), Hamming (1986).
- **Trong giáo trình:** [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md), [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md).

### Điều 6: Viết sớm, vì viết là một cách nghĩ

Peyton Jones đặt lời khuyên này lên đầu danh sách của ông: đừng đợi có kết quả rồi mới viết, vì viết là cơ chế chính để làm nghiên cứu chứ không chỉ để báo cáo. Olah và Carter nhận xét rằng không giải thích tốt được một ý tưởng thường có nghĩa là chưa hiểu nó tốt nhất có thể. Karpathy kể lại thực hành ở nhóm của Fei-Fei Li: đặt deadline nội bộ sớm hơn deadline thật hai tuần, với bản nháp ít nhất năm trang được review bằng mẫu review thật. Ở quy mô dự án, Preetum Nakkiran (được Olah dẫn lại) khuyên viết một proposal ngắn trước khi cam kết hơn một tháng cho một hướng.

- **Nguồn:** Peyton Jones, Olah và Carter (2017), Karpathy (2016), Olah (2021).
- **Trong giáo trình:** [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md), [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md), [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md).

### Điều 7: Mỗi paper một ý tưởng cốt lõi, viết cho người đọc

Karpathy viết rằng một paper "bán" một điều duy nhất chưa hiển nhiên hoặc chưa có trước đó, và đóng góp không cộng dồn: thêm một đóng góp phụ chỉ làm loãng paper. Peyton Jones gọi đó là xác định ý tưởng chính, một insight tái sử dụng được và hữu ích cho người đọc. Widom muốn đóng góp kỹ thuật phải rõ trước khi người đọc hết trang ba. Huang và Hamming nhìn từ phía người đọc. Huang khuyên đừng bắt người đọc tự đối chiếu ký hiệu, hình và bảng. Hamming nhắc rằng làm tốt thôi chưa đủ, công trình còn phải được truyền đạt.

- **Nguồn:** Karpathy (2016), Peyton Jones, Widom (2006), Huang (*awesome-tips*), Hamming (1986).
- **Trong giáo trình:** [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md), [Introduction & Figure 1](../02-viet-tung-phan/introduction.md), [Ghép ý tưởng và "độn" đóng góp](../07-tinh-huong-kho/ghep-va-don.md).

### Điều 8: Đơn giản là một giá trị, không phải điểm yếu

Người mới hay lo ý tưởng của nhóm "quá đơn giản để được nhận". Black dành cả một tiểu luận để bác bỏ cách nghĩ này ở phía reviewer. Theo ông, sự đơn giản thường bị nhầm là thiếu novelty, trong khi đổi một thứ trong một hệ có sẵn thường là khoa học tốt hơn dựng một hệ phức tạp mới. Ông cũng nói rõ một ý tưởng đơn giản có thể quan trọng, nhưng cũng có thể tầm thường. Hướng dẫn reviewer của ARR xếp nhận xét "phương pháp quá đơn giản" vào danh sách heuristic phản biện lười. Tuning Playbook chỉ nhận một thay đổi khi mức cải thiện lớn hơn độ phức tạp nó thêm vào. Schulman cho rằng một cải tiến nhỏ chỉ đáng giá khi thay đổi rất đơn giản, còn Karpathy khuyên "đừng làm người hùng" khi chọn kiến trúc.

- **Nguồn:** Black (2022), ARR Reviewer Guidelines, Godbole và cộng sự (2023), Schulman (2020), Karpathy (2019).
- **Trong giáo trình:** [Khi novelty và hiệu quả lệch pha](../07-tinh-huong-kho/novelty-va-hieu-qua.md), [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Điều 9: Bằng chứng phải tương xứng với claim

Lipton và Steinhardt chỉ ra hai lỗi phổ biến. Lỗi thứ nhất là trình bày suy đoán như thể là giải thích. Lỗi thứ hai là không xác định cải thiện thực sự đến từ đâu, thường vì thiếu ablation hoặc vì baseline không được tune tương xứng. Tài liệu tập huấn reviewer của CVPR/ICCV đưa ra một thang: ý tưởng càng lạ, càng phức tạp hoặc càng có vẻ gia tăng thì càng cần kết quả mạnh, còn một ý tưởng có thể mang tính chuyển đổi chỉ cần một proof-of-concept cơ bản. Hướng dẫn ARR nói paper chỉ cần đủ bằng chứng cho claim mà tác giả đưa ra, và kết quả SOTA không cần cũng không đủ cho một đóng góp khoa học. Henderson và cộng sự, cùng Tuning Playbook, nhắc rằng dao động giữa các lần chạy có thể lớn hơn mức cải thiện được báo cáo.

- **Nguồn:** Lipton và Steinhardt (2018), tài liệu tập huấn reviewer CVPR/ICCV, ARR Reviewer Guidelines, Henderson và cộng sự (2018), Godbole và cộng sự (2023).
- **Trong giáo trình:** [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md), [Experiments](../02-viet-tung-phan/experiments.md), [Khi câu chuyện và bằng chứng không khớp](../07-tinh-huong-kho/cau-chuyen-va-bang-chung.md).

### Điều 10: Mờ mịt là một phần của nghề, và cần kiên trì có kỷ luật

Gần như mọi dự án đều đi qua một giai đoạn thí nghiệm không chạy và mục tiêu trở nên mờ. Alon gọi đó là "đám mây", và cho rằng biết đám mây là chuyện bình thường giúp người làm nghiên cứu không bỏ cuộc. Schulman nhận xét từ kinh nghiệm riêng rằng đổi bài toán quá sớm là thất bại phổ biến hơn không chịu đổi, vì kết quả ban đầu của ý tưởng mới thường gây thất vọng. Hồi ký của Guo và bức tranh của Might nói cùng một điều từ góc nhìn đời nghiên cứu sinh. Olah đưa ra đối trọng cần thiết: kiên trì khác với gắn bó mù quáng vì chi phí chìm, nên định kỳ phải hỏi lại rằng nếu bắt đầu từ đầu thì có chọn hướng này nữa không.

- **Nguồn:** Alon (bài nói TED), Schulman (2020), Guo (2012), Might (2010), Olah (2021).
- **Trong giáo trình:** [Chương 7. Những tình huống trớ trêu trong nghiên cứu](../07-tinh-huong-kho/index.md), [Khi bị reject](../04-nop-va-sau-nop/reject.md).

## Khi các lời khuyên có vẻ trái ngược nhau

Đọc nhiều lời khuyên cùng lúc, người học sẽ gặp những chỗ có vẻ mâu thuẫn. Đó không phải lý do để bỏ qua lời khuyên. Nó cho thấy mỗi lời khuyên có điều kiện áp dụng riêng, và hiểu được điều kiện đó mới là phần có giá trị nhất. Ba cặp thường gặp nhất là:

- **Tham vọng hay vừa sức.** Hamming, Karpathy và Schulman thúc người đọc nhắm tới bài toán lớn. Alon khuyên người mới bắt đầu bằng dự án ngắn và khả thi. Hai lời khuyên dung hòa được khi tách mục tiêu dài hạn khỏi dự án trước mắt: chọn một mục tiêu lớn, rồi chọn dự án đầu tiên là một bậc thang khả thi trên đường tới mục tiêu đó. Schulman gọi cách làm này là đặt mục tiêu cao và leo từng bậc.
- **Kiên trì hay biết dừng.** Schulman cảnh báo đổi hướng quá sớm, Olah cảnh báo gắn bó quá lâu, còn Steinhardt muốn phát hiện thất bại càng sớm càng tốt. Cách dung hòa là kiên trì với *hướng*, nhưng kiểm tra sớm *giả định rủi ro nhất* của hướng đó, và đặt lịch rà soát cố định thay vì quyết định theo cảm xúc của từng tuần.
- **Quy ước của cộng đồng nào.** Peyton Jones khuyên đặt related work sau khi đã trình bày ý tưởng, trong khi nhiều paper ML và CV đặt nó ở Section 2. Lời khuyên của ông đến từ văn hóa ngôn ngữ lập trình. Đó là một trường phái, không phải quy tắc chung. Với các câu hỏi về quy ước, chuẩn mực của hội nghị đích là thước đo cuối cùng.

Nguyên tắc chung là coi mỗi lời khuyên như một giả thuyết về điều sẽ giúp ích. Giả thuyết ấy nên được thử trên chính dự án đang làm, rồi giữ lại những gì thực sự hiệu quả.

## Chọn bài toán và gu nghiên cứu

Đây là nhóm có nhiều bài kinh điển nhất, vì chọn bài toán là việc quan trọng nhất mà cũng khó dạy nhất. Karpathy gọi nó là "vòng lặp ngoài" của nghề nghiên cứu: giải một bài toán đã chọn là vòng lặp trong, còn phần lớn thời gian và phán đoán nằm ở việc chọn bài toán nào để giải. Các bài dưới đây nhìn vấn đề từ những góc khác nhau: tầm quan trọng (Hamming), mục tiêu dài hạn (Schulman), cân bằng giữa khả thi và thú vị (Alon), chiến lược nghiên cứu sinh (Karpathy), phát triển bản thân (Nielsen), và hướng đi của cả ngành (Sutton).

### Richard Hamming, *You and Your Research* (1986)

- **Hình thức:** bài nói tại Colloquium Seminar của Bell Communications Research (Bellcore), ngày 7/3/1986. Bản ghi, gồm cả phần hỏi đáp, do J. F. Kaiser thực hiện. Hamming từng làm ở Bell Labs nhiều năm, nhưng bài nói này diễn ra ở Bellcore. Ông trình bày các phiên bản của bài nói này nhiều lần, và mở rộng ý tưởng trong cuốn *The Art of Doing Science and Engineering: Learning to Learn* (1997; một số nguồn ghi 1996).
- **Nguồn:** <https://www.cs.virginia.edu/~robins/YouAndYourResearch.html>
- **Mức xác minh:** trung bình. Ngày, nơi trình bày và các chủ đề chính thống nhất giữa nhiều nguồn. Hai câu trích dưới đây đã được đối chiếu nguyên văn qua đoạn Karpathy dẫn lại. Các ý còn lại là diễn giải từ bản tóm tắt.

**Ý chính.**

- **Câu hỏi trung tâm.** Vì sao chỉ một số ít nhà khoa học tạo ra đóng góp lớn, còn đa số bị lãng quên? Hamming cho rằng nguyên nhân phần lớn không phải may mắn hay thiên tài, mà là thói quen và lựa chọn. Ông dẫn câu của Pasteur rằng may mắn ưu ái tâm trí đã được chuẩn bị: điều cụ thể được phát hiện có phần may, nhưng việc có làm được điều gì đáng kể hay không thì không phải may.
- **Làm bài toán quan trọng.** "If you do not work on an important problem, it's unlikely you'll do important work." (Không làm bài toán quan trọng thì khó có công trình quan trọng.) Ông kể chuyện hỏi các nhà hóa học trong bữa trưa rằng bài toán quan trọng nhất của lĩnh vực họ là gì, và vì sao họ không làm bài toán đó.
- **"Quan trọng" nghĩa là có cách tấn công.** "It's not the consequence that makes a problem important, it is that you have a reasonable attack." (Không phải hệ quả làm nên tầm quan trọng của bài toán, mà là việc có một cách tấn công hợp lý.) Du hành thời gian hay phản trọng lực không phải bài toán quan trọng theo nghĩa này, vì không ai có cách tấn công.
- **Thời gian cho câu hỏi lớn.** Hamming dành các buổi chiều thứ Sáu cho "Great Thoughts Time", tức thời gian chỉ để nghĩ về những câu hỏi lớn, chẳng hạn máy tính sẽ thay đổi khoa học ra sao. Ông cũng nhận xét rằng người làm việc mở cửa phòng bị ngắt quãng nhiều hơn, nhưng về lâu dài nắm được điều gì đang quan trọng.
- **Tích lũy và truyền đạt.** Ông dẫn lời Hendrik Bode rằng tri thức và năng suất tích lũy như lãi kép (câu này là của Bode). Ông nhấn mạnh làm tốt thôi chưa đủ: phải "bán" được công trình qua bài viết rõ ràng, bài nói chính thức và trao đổi không chính thức. Ông cũng khuyên để ý những chỗ có vẻ sai trong lý thuyết hiện có, vì đó thường là nơi khởi đầu của đóng góp lớn.

**Đọc khi nào.** Ở đầu chặng nghiên cứu sinh, và mỗi lần chuẩn bị chọn một hướng mới. Bài viết theo giọng kể chuyện và khá dài; nên đọc cả phần hỏi đáp. Nhiều người đọc lại bài này mỗi năm một lần.

**Liên hệ trong giáo trình.** Câu hỏi "bài toán quan trọng nhất của lĩnh vực là gì" là điểm xuất phát của bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md). Tiêu chí "có cách tấn công" tương ứng với các câu hỏi về tính khả thi trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md). Việc "bán" công trình là chủ đề của toàn bộ [Chương 2](../02-viet-tung-phan/index.md).

### John Schulman, *An Opinionated Guide to ML Research* (2020)

- **Hình thức:** bài blog trên trang cá nhân, ngày 24/1/2020. Theo tác giả, bản đầu được viết tháng 12/2017 cho chương trình OpenAI Fellows. Đây là bài viết cá nhân, không phải tài liệu chính thức của OpenAI. Schulman là đồng tác giả của TRPO và PPO.
- **Nguồn:** <http://joschu.net/blog/opinionated-guide-ml-research.html>
- **Mức xác minh:** trung bình. Tiêu đề, ngày và cấu trúc ba phần (chọn bài toán, tiến bộ liên tục, phát triển bản thân) được xác nhận. Nội dung chi tiết được đối chiếu qua một bản dịch đầy đủ và các bản tóm tắt.

**Ý chính.**

- **Chọn đúng bài toán quan trọng hơn kỹ năng kỹ thuật.** Gu hình thành khi quan sát ý tưởng nào thành công và ý tưởng nào bị quên. Cách rèn gồm đọc nhiều paper với con mắt phê phán và thảo luận với người hiểu biết hơn, làm việc trong nhóm có chủ đề gần nhau, xin lời khuyên của nhà nghiên cứu có kinh nghiệm, và tự hỏi khi nào lý thuyết hữu ích, khi nào kết quả thực nghiệm chuyển giao được, vì sao một số ý tưởng lan rộng còn số khác bị quên.
- **Nghiên cứu theo ý tưởng và nghiên cứu theo mục tiêu.** Kiểu thứ nhất bắt đầu từ việc đọc một paper về X rồi nảy ra cách làm X tốt hơn. Kiểu thứ hai bắt đầu từ việc hình dung một năng lực AI mới muốn đạt tới, rồi giải những bài toán đưa tới gần nó; kết quả thường là làm X chạy được lần đầu thay vì làm X tốt hơn. Ông khuyên đa số người nên theo mục tiêu: ít nguy cơ bị trùng ý tưởng vì không đọc cùng những paper mà mọi người đều đọc, có góc nhìn khác biệt, và có động lực bền hơn qua những thăng trầm. Ông không nói kiểu thứ nhất luôn kém hơn, nhưng cho rằng đột phá theo kiểu đó đòi hỏi hiểu biết rất sâu và một góc nhìn khác hẳn cộng đồng.
- **Ví dụ từ chính ông, và một cạm bẫy.** Mục tiêu thao tác vật thể biến dạng bằng robot dẫn ông tới bài toán con là tối ưu hóa quỹ đạo; mục tiêu vận động (locomotion) dẫn tới TRPO, GAE và sau đó là PPO. Cạm bẫy là hiểu mục tiêu quá sát chữ. Ông chỉ chấp nhận giải pháp tổng quát và tránh kỹ thuật riêng cho từng miền, để thuật toán chuyển giao được.
- **Đặt mục tiêu cao, leo từng bậc.** Hãy hỏi dự án là cải thiện 10% hay gấp 10 lần. Cải tiến nhỏ có giá trị khi chúng cộng dồn về một mục tiêu lớn, và một cải tiến nhỏ đơn lẻ chỉ đáng giá khi thay đổi rất đơn giản.
- **Sổ nghiên cứu và chuyện đổi hướng.** Ghi sổ hằng ngày và đọc lại mỗi một hai tuần. Theo kinh nghiệm của ông, đổi bài toán quá thường xuyên và bỏ ý tưởng hứa hẹn quá sớm là thất bại phổ biến hơn việc không chịu đổi. Nếu nhìn lại vài tháng mà thấy nhiều dự án dở dang, đó là tín hiệu cần cam kết theo đuổi tới cùng hơn.
- **Phát triển bản thân.** Dành thời gian đều đặn cho kiến thức ML tổng quát ngoài dự án hiện tại. Giai đoạn đầu, chia thời gian đọc tương đối đều giữa sách giáo khoa và paper, vì sách cô đọng hơn: một hệ ký hiệu thống nhất và nhiều thập kỷ ý tưởng được sắp đúng thứ tự. Đọc luận án tiến sĩ, nhất là phần mở đầu và kết luận. Cài đặt lại paper và so với kết quả đã công bố để hiểu sâu và nhận phản hồi nhanh.

**Đọc khi nào.** Khi đang chọn hướng cho một hai năm tới, hoặc khi đang nhảy giữa nhiều ý tưởng mà không ý tưởng nào được làm xong. Phần về sổ nghiên cứu nên đọc ngay từ tuần đầu của một dự án.

**Liên hệ trong giáo trình.** Hai kiểu nghiên cứu là nền cho phần nguồn ý tưởng trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md). Câu hỏi 10% hay 10 lần và yêu cầu cải tiến nhỏ phải đơn giản gắn với bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md). Sổ nghiên cứu là một phần của vòng lặp hằng tuần trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md).

### Uri Alon, *How To Choose a Good Scientific Problem* (2009)

- **Hình thức:** tiểu luận trên tạp chí *Molecular Cell* 35(6):726–728, năm 2009. Hình ảnh "đám mây" được lấy từ bài nói của Alon trên TED, *Why truly innovative science demands a leap into the unknown*. Alon còn có tiểu luận liên quan *How To Build a Motivated Research Group* (*Molecular Cell*, 2010).
- **Nguồn:** <https://doi.org/10.1016/j.molcel.2009.09.013>
- **Mức xác minh:** trung bình. Thông tin thư mục và khung "khả thi và thú vị" được xác nhận. Phần "đám mây" lấy từ bản ghi bài nói TED; chưa xác nhận được nó có trong tiểu luận năm 2009 hay không.

**Ý chính.**

- **Chọn bài toán là trung tâm nhưng ít được dạy.** Alon viết từ góc nhìn sinh học hệ thống, nhưng khung của ông áp dụng được cho mọi ngành thực nghiệm.
- **Hai trục: khả thi và thú vị.** Trục khả thi đo độ khó và thời gian cần có. Trục thú vị đo lượng tri thức mà kết quả bổ sung. Ưu tiên vùng vừa khả thi vừa thú vị; khi phải đánh đổi, chỉ giữ những lựa chọn không bị lựa chọn khác trội hơn trên cả hai trục (Pareto front). Độ khó nên khớp với giai đoạn sự nghiệp: người mới làm dự án ngắn và khả thi, dự án dài và khó để dành cho sau.
- **Thú vị là chủ quan.** Ông khuyên lắng nghe "tiếng nói bên trong": những ý tưởng cứ quay lại suốt nhiều tháng, những điều người làm thích kể cho người khác nghe. Hãy chọn theo giá trị của chính người làm nghiên cứu, không theo thời thượng.
- **Dành thời gian để chọn.** Nhóm của Alon thường dành khoảng ba tháng trước khi cam kết với một bài toán. Ông cảnh báo rằng chọn vội dẫn tới nhiều thất vọng và cay đắng về sau.
- **"Đám mây" (từ bài nói TED).** Mô hình ngây thơ hình dung nghiên cứu đi thẳng từ câu hỏi A tới câu trả lời B. Thực tế, thí nghiệm hỏng và người làm rơi vào một vùng bối rối, nhiều cảm xúc tiêu cực, nằm giữa cái đã biết và cái chưa biết. Nếu kiên trì, có thể ra được một câu trả lời C, thường thú vị hơn B. Biết đám mây là bình thường, và có người hướng dẫn hay nhóm nâng đỡ trong giai đoạn đó, giúp người làm nghiên cứu không bỏ cuộc.

**Đọc khi nào.** Trước khi chọn dự án đầu tiên. Người hướng dẫn cũng nên đọc để giao dự án vừa sức. Bài nói TED nên xem khi đang ở giữa giai đoạn thí nghiệm không chạy.

**Liên hệ trong giáo trình.** Hai trục khả thi và thú vị được dùng trong phễu kiểm ý tưởng của bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md) và bộ câu hỏi của bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md). Hình ảnh đám mây là bối cảnh tâm lý của toàn bộ [Chương 7](../07-tinh-huong-kho/index.md).

### Andrej Karpathy, *A Survival Guide to a PhD*: phần chọn đề tài (2016)

- **Hình thức:** bài blog ngày 7/9/2016, viết khi Karpathy kết thúc chương trình tiến sĩ ở Stanford dưới sự hướng dẫn của Fei-Fei Li. Ông nói trước rằng nhiều điều trong bài có thể gây tranh cãi và đặc thù cho khoa học máy tính, ML và Computer Vision. Mục này phân tích phần *Research topics*; các phần còn lại được bàn ở nhóm Đời sống nghiên cứu sinh.
- **Nguồn:** <https://karpathy.github.io/2016/09/07/phd/>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Vòng lặp ngoài.** "You spend most of your time on the outer loop, figuring out what problems are worth solving and what problems are ripe for solving." (Phần lớn thời gian dành cho vòng lặp ngoài: tìm xem bài toán nào đáng giải và bài toán nào đã chín để giải.) Chữ "chín" đáng chú ý: một bài toán quan trọng nhưng chưa có công cụ hay dữ liệu để tấn công thì chưa nên chọn.
- **Gu có thật và học được.** Người hướng dẫn giỏi đánh giá gần như tức thì một bài toán được đề xuất theo tầm quan trọng, độ khó, độ hấp dẫn và bối cảnh lịch sử. Khả năng đó học được qua thực hành và học việc. Karpathy thừa nhận lúc đầu gu của ông rất tệ.
- **Các heuristic chọn đề tài.** Chọn mảnh đất màu mỡ, nơi các paper có thể nối thành một luận án; hợp với mối quan tâm của người hướng dẫn; tham vọng nhưng có cách tấn công. Về tham vọng, ông viết "a 10x more important problem is at most 2-3x harder to achieve" (theo kinh nghiệm của ông, bài toán quan trọng gấp mười lần thì chỉ khó hơn tối đa hai ba lần). Ông cũng khuyên hướng tới việc trở thành "người đã làm X", và chọn những kỹ năng giữ giá trị lâu dài.
- **Tránh công việc gia tăng.** Một paper làm mọi thứ phức tạp hơn để thêm khoảng 2% trên benchmark có thể được nhận nhưng ít được trích dẫn. Ông cũng khuyên tránh những ý tưởng kiểu "bước logic tiếp theo đang lơ lửng trong không khí", vì rất nhiều nhóm cùng nhìn thấy chúng.

**Đọc khi nào.** Năm đầu nghiên cứu sinh, và khi chọn dự án thứ hai, lúc bắt đầu phải nghĩ tới cả mạch luận án chứ không chỉ một paper.

**Liên hệ trong giáo trình.** Khái niệm bài toán "đã chín" và heuristic tránh "bước logic tiếp theo" được dùng trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md). Cảnh báo về công việc gia tăng gắn với bẫy "A + B" trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Michael Nielsen, *Principles of Effective Research* (2004)

- **Hình thức:** tiểu luận, tháng 7/2004, in thành Technical Note 0404 của University of Queensland và đăng thành loạt bài trên blog. Nielsen viết từ nền tảng vật lý lý thuyết và thông tin lượng tử, không phải ML. Không nên nhầm ông với Jakob Nielsen, người nổi tiếng về khả dụng giao diện.
- **Nguồn:** <https://michaelnielsen.org/blog/principles-of-effective-research/>
- **Mức xác minh:** trung bình. Thông tin thư mục chắc chắn; nội dung được đối chiếu qua bản tóm tắt và một đoạn được Olah trích nguyên văn.

**Ý chính.**

- **Tầm nhìn cá nhân.** Nghiên cứu hiệu quả dựa trên một tầm nhìn rõ ràng về điều muốn đạt (cái gì, vì sao, bằng cách nào), sự chủ động hướng tới nó, và việc nhận trách nhiệm cho cả thành công lẫn thất bại.
- **Hai mặt của nghiên cứu.** Nghiên cứu gồm phát triển bản thân và quá trình sáng tạo. Nielsen cho rằng sáng tạo nên được xem như phần mở rộng của phát triển bản thân, đặc biệt của một chương trình đọc được xây dựng tốt.
- **Cái giá của áp lực ngắn hạn.** Deadline và số lượng paper đẩy người ta hy sinh phát triển bản thân. Theo ông, nhiều người không làm được nghiên cứu lớn vì không chịu trả giá ở phần này.
- **Người giải bài toán và người tạo bài toán.** Đây là hai hình mẫu lý tưởng hóa. Người giải bài toán tấn công những bài toán kỹ thuật đã được phát biểu rõ. Người tạo bài toán tìm ra câu hỏi hoặc mối liên hệ mới, đôi khi trong những paper rất đơn giản về kỹ thuật. Ông cảnh báo đừng lấy độ khó làm thước đo cho tầm quan trọng.
- **Vùng hỗn loạn là cơ hội.** "But a field that is a mess is really an opportunity." (Một lĩnh vực đang rối thực ra là một cơ hội.) Người ta thường né những lĩnh vực đang lộn xộn, nhưng chính ở đó có thể có những khái niệm thống nhất và đơn giản hóa đang chờ được tìm ra.

**Đọc khi nào.** Khi cảm thấy chỉ còn chạy theo deadline, hoặc khi lập kế hoạch học tập dài hạn cho vài năm.

**Liên hệ trong giáo trình.** Ý tưởng "người tạo bài toán" và "vùng hỗn loạn" là hai nguồn ý tưởng trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md). Cảnh báo "độ khó không phải tầm quan trọng" nối với Tình huống 2 và 3 trong bài [Khi novelty và hiệu quả lệch pha](../07-tinh-huong-kho/novelty-va-hieu-qua.md).

### Richard S. Sutton, *The Bitter Lesson* (2019)

- **Hình thức:** tiểu luận ngắn trên trang *Incomplete Ideas* của Sutton, ngày 13/3/2019. Đây là tiểu luận, không phải paper.
- **Nguồn:** <http://www.incompleteideas.net/IncIdeas/BitterLesson.html>
- **Mức xác minh:** cao (nhiều bản sao thống nhất).

**Ý chính.**

- **Bài học lớn nhất của bảy mươi năm AI.** Theo Sutton, các phương pháp tổng quát biết tận dụng tính toán cuối cùng luôn hiệu quả nhất, với cách biệt lớn. Động lực đằng sau là chi phí tính toán liên tục giảm theo hàm mũ.
- **Cái bẫy của tri thức cài sẵn.** Các nhà nghiên cứu nhiều lần cài tri thức của con người về miền bài toán vào hệ thống. Cách làm này giúp ích trong ngắn hạn và làm người nghiên cứu thỏa mãn, nhưng về dài hạn thì chững lại và thậm chí cản trở tiến bộ. Đột phá đến khi tính toán được mở rộng qua tìm kiếm và học.
- **Các ví dụ lịch sử.** Cờ vua năm 1997, cờ vây khoảng hai mươi năm sau, và nhận dạng tiếng nói, nơi các phương pháp thống kê rồi học sâu thắng các cách tiếp cận dựa trên tri thức con người.
- **Hai phương pháp mở rộng được.** Tìm kiếm và học là hai phương pháp dường như mở rộng tùy ý theo lượng tính toán.
- **Bài học thứ hai.** Nội dung của trí óc phức tạp vô cùng. Thay vì cài vào những mô hình đơn giản về cách con người nghĩ, nên xây các phương pháp tổng quát có thể tự tìm ra và nắm bắt sự phức tạp ấy.

Cần đọc tiểu luận đúng với những gì nó nói. Sutton không nói tri thức miền vô dụng trong ngắn hạn; ông nói nó giúp ích trong ngắn hạn. Tiểu luận viết năm 2019 và không bàn về mô hình ngôn ngữ lớn. Những bình luận về sau cho rằng LLM chứng minh luận điểm của ông là của người khác.

**Đọc khi nào.** Khi cân nhắc một ý tưởng dựa nhiều vào kỹ thuật thủ công cho một miền, để tự hỏi ý tưởng đó có còn giá trị khi quy mô dữ liệu và tính toán tăng lên không. Cũng nên đọc lại mỗi khi một mô hình nền mới làm thay đổi bức tranh của lĩnh vực.

**Liên hệ trong giáo trình.** Tình huống 25 trong bài [Áp lực từ bên ngoài](../07-tinh-huong-kho/ap-luc-ben-ngoai.md) bàn trường hợp mô hình nền mới khiến bài toán trở nên lỗi thời. Câu hỏi "ý tưởng có sống sót khi quy mô tăng không" là một phép thử trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

## Đọc paper và đọc phản biện

Đọc là hoạt động chiếm nhiều thời gian nhất của nghiên cứu sinh năm đầu, nhưng hiếm ai được dạy cách đọc. Các bài trong nhóm này chia thành hai lớp. Lớp thứ nhất dạy cách đọc để hiểu và phân bổ thời gian giữa hàng trăm paper (Keshav, Eisner, Ng). Lớp thứ hai dạy cách đọc để đánh giá, tức đọc như một reviewer (Black và hướng dẫn reviewer của các hội nghị). Trang [Tài nguyên](tai-nguyen.md) đã giới thiệu ngắn bài của Keshav và Eisner; ở đây chúng được phân tích theo góc độ kỹ năng phản biện.

### S. Keshav, *How to Read a Paper* (2007)

- **Hình thức:** bài ngắn hai trang trên *ACM SIGCOMM Computer Communication Review* 37(3):83–84, tháng 7/2007. Một bản sửa đổi ghi ngày 17/2/2016 cũng đang lưu hành, với một số ước lượng thời gian khác bản 2007. Keshav làm mạng máy tính.
- **Nguồn:** <https://doi.org/10.1145/1273445.1273458>
- **Mức xác minh:** cao.

**Ý chính.**

- **Đọc tối đa ba lượt thay vì từ đầu tới cuối.** Mỗi lượt có một mục tiêu riêng, và sau mỗi lượt người đọc quyết định có cần đọc tiếp không.
- **Lượt thứ nhất, khoảng năm tới mười phút.** Đọc tiêu đề, abstract, introduction, tiêu đề các mục, phần kết luận, và lướt danh sách tài liệu tham khảo. Sau lượt này, người đọc phải trả lời được "năm chữ C": *Category* (đây là loại paper gì), *Context* (nó liên quan tới những paper nào, dựa trên nền lý thuyết nào), *Correctness* (các giả định có vẻ hợp lý không), *Contributions* (đóng góp chính là gì) và *Clarity* (viết có rõ không). Keshav nhận xét nhiều người dừng ở đây, và với đa số paper thì như vậy là đủ.
- **Lượt thứ hai, tối đa khoảng một giờ.** Đọc kỹ hơn nhưng bỏ qua chi tiết như chứng minh. Xem kỹ hình và đồ thị, đánh dấu tài liệu tham khảo chưa đọc. Sau lượt này, người đọc phải tóm tắt được ý chính của paper, kèm bằng chứng, cho người khác nghe.
- **Lượt thứ ba, nhiều giờ với người mới.** Gần như cài đặt lại paper trong đầu: đặt cùng giả định với tác giả và dựng lại công trình. Cách đọc này làm lộ ra giả định ẩn, trích dẫn còn thiếu và điểm yếu. Sau lượt này, người đọc phải dựng lại được cấu trúc paper từ trí nhớ và chỉ ra điểm mạnh, điểm yếu của nó.
- **Khảo sát một lĩnh vực.** Dùng công cụ tìm kiếm để tìm ba tới năm paper gần đây được trích nhiều, đọc lượt thứ nhất từng bài, đọc phần related work của chúng, tìm các trích dẫn chung, các nhà nghiên cứu và venue chính, rồi lặp lại.

So với trang Tài nguyên, điểm đáng nhấn mạnh ở đây là lượt thứ ba. Đó chính là mức đọc của một reviewer có trách nhiệm, và cũng là mức đọc cần có với vài paper gần nhất với dự án của nhóm. Năm chữ C cũng là một phiếu ghi chép nhỏ gọn cho mọi paper trong bảng literature.

**Đọc khi nào.** Trong tuần đầu bước vào một lĩnh vực mới, và trước khi review paper đầu tiên.

**Liên hệ trong giáo trình.** Phương pháp ba lượt và cách lan tỏa từ paper hạt giống được giảng trong bài [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md). Lượt thứ ba là nền của quy trình đọc phản biện trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md).

### Jason Eisner, *How to Read a Technical Paper* (2009)

- **Hình thức:** bài viết trên web, năm 2009, thuộc bộ trang lời khuyên cho nghiên cứu sinh của Eisner (Johns Hopkins University, NLP). Bài về sau có thêm phần đối chiếu với phương pháp ba lượt của Keshav.
- **Nguồn:** <https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html>
- **Mức xác minh:** trung bình. Sự tồn tại và lời khuyên cốt lõi được nhiều bản sao xác nhận; câu chữ chi tiết chưa đối chiếu với trang gốc.

**Ý chính.**

- **Đọc nhiều lượt, lượt đầu chỉ lướt.** Lượt đầu bỏ qua mọi chỗ tốn nhiều sức suy nghĩ, chỉ để thấy paper đi về đâu và vì sao. Sau đó mới quyết định paper có đáng đọc kỹ không.
- **Độ sâu tùy mục đích đọc.** Trong một lĩnh vực quen thuộc, Eisner cho biết ông thường đọc một paper trong khoảng ba mươi phút. Đọc để cài đặt lại thì khác hẳn đọc để biết paper tồn tại.
- **Ghi chú trong khi đọc.** Eisner viết "Write as you read." (Hãy viết trong lúc đọc.) Ghi chú giữ sự chú ý và buộc người đọc tương tác với paper: tóm tắt điều thú vị, so sánh với các paper khác, ghi lại câu hỏi và ý tưởng cho công việc sau này. Những ghi chú ấy về sau trở thành nguyên liệu cho phần related work và cho ý tưởng nghiên cứu.
- **Đọc paper gốc sau.** Trong các bản sao của bài có chép lại một lời khuyên: đừng đọc paper gốc về X trước, mà hãy đọc vài paper sau đó để xem họ nói gì về X, rồi mới đọc bản gốc. Chưa rõ lời khuyên này là của Eisner hay của một đồng nghiệp được ông dẫn lại.

**Đọc khi nào.** Khi đọc nhiều mà không nhớ được gì, hoặc khi bắt đầu lập bảng literature cho một dự án.

**Liên hệ trong giáo trình.** Thói quen ghi chú khi đọc là đầu vào cho bảng literature trong bài [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md) và cho sổ ý tưởng trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md).

### Andrew Ng, bài giảng về đọc paper và lời khuyên nghề nghiệp trong CS230 (2018)

- **Hình thức:** bài giảng có ghi hình trong khóa CS230 *Deep Learning* của Stanford, gồm hai phần: đọc paper và lời khuyên nghề nghiệp. Theo các bản ghi chép, đây là Lecture 8 của học kỳ mùa thu 2018. Video được đưa lên kênh Stanford Online và được nhiều người tóm tắt từ năm 2019.
- **Nguồn:** bản tóm tắt tại <https://www.kdnuggets.com/2019/09/advice-building-machine-learning-career-research-papers-andrew-ng.html>
- **Mức xác minh:** trung bình. Nhiều bản ghi chép độc lập thống nhất với nhau, nhưng chưa đối chiếu với lời giảng gốc.

**Ý chính.**

- **Đọc theo danh sách, không đọc từng bài một.** Lập danh sách paper về một chủ đề từ arXiv, blog và GitHub, rồi nhảy qua lại trong danh sách. Đọc khoảng một phần mười mỗi bài, rồi mới quyết định bài nào cần đọc hết.
- **Quy mô ước lượng.** Khoảng năm tới hai mươi paper cho một hiểu biết cơ bản, đủ để bắt tay làm gì đó trong lĩnh vực; khoảng năm mươi tới một trăm paper cho một hiểu biết rất tốt. Đây là kinh nghiệm của ông, không phải kết quả nghiên cứu.
- **Nhiều lượt, đi dần vào chi tiết.** Lượt đầu đọc tiêu đề, abstract và hình. Lượt hai đọc introduction, kết luận, xem lại hình và lướt phần còn lại, tạm bỏ qua related work. Các lượt sau mới đi vào chi tiết.
- **Thói quen đều đặn.** Đọc hai ba paper mỗi tuần trong suốt một năm có giá trị hơn nhồi nhét trong vài tuần.

**Đọc khi nào.** Khi cần nắm nhanh một lĩnh vực trong vài tuần, ví dụ lúc vừa đổi đề tài hoặc vừa vào một nhóm mới.

**Liên hệ trong giáo trình.** Cách đọc theo danh sách bổ sung cho việc lan tỏa từ paper hạt giống trong bài [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md).

### Michael J. Black, *Novelty in Science: A guide for reviewers* (2022)

- **Hình thức:** tiểu luận trên blog (Medium và blog của nhóm Perceiving Systems), năm 2022. Black làm Computer Vision tại Max Planck Institute for Intelligent Systems. Phụ đề xuất hiện dưới hai dạng "A guide for reviewers" và "a guide to reviewers" ở các nguồn khác nhau.
- **Nguồn:** <https://medium.com/@black_51980/novelty-in-science-8f1fd1a0a143>
- **Mức xác minh:** trung bình. Tác giả và lập luận chính chắc chắn; ngày chính xác và câu chữ dựa trên bản đăng lại.

**Ý chính.**

- **Novelty không phải độ phức tạp, độ khó hay tính kỹ thuật.** Reviewer hay nhầm ba thứ đó với novelty. Black cho rằng novelty gần với vẻ đẹp hơn là với độ khó.
- **Đơn giản không phải thiếu novelty.** Một kiểu review tồi điển hình là "ý tưởng quá đơn giản, chỉ đổi một thành phần trong hàm loss, mọi thứ khác giống công trình trước". Theo Black, sự đơn giản thường bị nhầm là thiếu novelty, trong khi điều ngược lại mới hay đúng. Đổi một thứ trong một mạng có sẵn là khoa học tốt hơn dựng một mạng mới phức tạp hơn. Nhưng ông cũng nói rõ một ý tưởng đơn giản có thể quan trọng, và cũng có thể tầm thường.
- **"Hiển nhiên khi nhìn lại" không phải lập luận.** Kiểu review tồi thứ hai là "ý tưởng hiển nhiên vì tác giả chỉ kết hợp hai ý tưởng đã biết". Sau khi đã nghe, ý tưởng nào cũng có vẻ hiển nhiên; novelty phải được đánh giá tại thời điểm trước khi ý tưởng xuất hiện.
- **Novelty không chỉ là novelty kỹ thuật.** Một dataset làm được điều chưa dataset nào làm được, một cách dùng mới cho phương pháp cũ, hay việc thay một thuật toán phức tạp bằng một thuật toán đơn giản để có thêm hiểu biết, đều có thể là novelty. Trước khi chê thiếu novelty kỹ thuật, reviewer nên hỏi novelty thật nằm ở đâu.
- **Novelty và tính hữu ích.** Nhận xét "không hiểu ai cần cái này" rất khó đúng với một ý tưởng mới. Reviewer nên nhớ trí tưởng tượng của chính họ có giới hạn.

**Đọc khi nào.** Trước khi viết bản review đầu tiên, và khi nhận được review chê "thiếu novelty" cho một phương pháp đơn giản mà hiệu quả. Tác giả cũng nên đọc trước khi viết danh sách đóng góp, để nói rõ novelty của paper nằm ở đâu.

**Liên hệ trong giáo trình.** Phần đánh giá novelty trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md) dựa nhiều vào tiểu luận này. Tình huống 2 và 3 trong bài [Khi novelty và hiệu quả lệch pha](../07-tinh-huong-kho/novelty-va-hieu-qua.md) bàn cách bảo vệ một ý tưởng đơn giản. Các kiểu đóng góp phi kỹ thuật được liệt kê trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Hướng dẫn reviewer của ICLR và NeurIPS (các phiên bản 2020–2027)

- **Hình thức:** trang chính sách do ban chương trình của mỗi hội nghị cập nhật hằng năm.
- **Nguồn:** <https://iclr.cc/Conferences/2026/ReviewerGuide> ; <https://neurips.cc/Conferences/2026/ReviewerGuidelines>
- **Mức xác minh:** trung bình. Các trích đoạn từ trang chính thức của nhiều năm được đối chiếu; câu chữ của năm mới nhất cần kiểm tra lại trên trang gốc.

**Ý chính.**

- **Bốn câu hỏi của ICLR.** Từ năm 2020, hướng dẫn của ICLR yêu cầu reviewer trả lời bốn câu khi đọc: paper giải quyết câu hỏi hoặc bài toán cụ thể nào; cách tiếp cận có động cơ tốt và được định vị đúng trong tài liệu không; paper có đỡ được các claim của nó không, tức kết quả lý thuyết hay thực nghiệm có đúng và chặt chẽ không; và công trình có ý nghĩa gì, có đóng góp tri thức mới và đủ giá trị cho cộng đồng không.
- **ICLR về SOTA.** Hướng dẫn năm 2024 viết rằng ý nghĩa của một công trình "does not necessarily require state-of-the-art results" (không nhất thiết đòi hỏi kết quả SOTA). Phần FAQ năm 2022 nói thiếu kết quả SOTA tự nó không phải lý do để reject, và không nên reject chỉ vì thấy paper không thú vị.
- **Bốn tiêu chí của NeurIPS.** Các phiên bản 2021–2026 đều yêu cầu reviewer bàn về Quality, Clarity, Significance và Originality. Bản năm 2023, khi nói về originality, hỏi công trình có phải một kết hợp mới của các kỹ thuật đã biết không, và ghi chú ngay "This can be valuable!" (điều đó có thể có giá trị). Bản năm 2026 nói thêm rằng originality không nhất thiết đòi hỏi một phương pháp hoàn toàn mới; insight mới từ việc đánh giá các phương pháp có sẵn hay cải thiện về hiệu quả cũng có giá trị tương đương.
- **Một khung tư duy hữu ích.** Hướng dẫn NeurIPS 2025 gợi ý nghĩ về điểm mạnh và điểm yếu như những lý do có thể dẫn tới accept hoặc reject paper.
- **Đừng học thuộc thang điểm.** Tên các trường trong mẫu review và thang điểm thay đổi theo năm. Phần ổn định, và đáng học, là các câu hỏi và tiêu chí ở trên.

**Đọc khi nào.** Dùng bốn câu hỏi của ICLR như một phiếu đọc khi đọc phản biện bất kỳ paper nào. Đọc lại trọn bộ hướng dẫn của hội nghị đích trước khi viết bản thảo đầy đủ, để biết bài sẽ được chấm theo tiêu chí gì.

**Liên hệ trong giáo trình.** Các tiêu chí này được giải thích trong bài [Paper được đánh giá thế nào](../00-tong-quan/review-process.md) và được dùng làm khung trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md). Đặc thù văn hóa review ở ML có trong bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md).

### Hướng dẫn reviewer của CVPR và tài liệu tập huấn reviewer CVPR/ICCV

- **Hình thức:** trang hướng dẫn reviewer của CVPR cập nhật hằng năm (các phiên bản 2015–2025), và bộ slide tập huấn 19 trang *How to Write Good Reviews for CVPR*. Bộ slide ghi rằng nó dựa trên tài liệu của ban chương trình ICCV 2019 và CVPR 2019, và được dùng lại ở các năm sau; ICCV 2023 có một bộ tương tự.
- **Nguồn:** <https://cvpr.thecvf.com/Conferences/2025/ReviewerGuidelines> ; bản sao bộ slide: <https://kshah33.github.io/files/CVPRReviewerTutorial.pdf>
- **Mức xác minh:** trang hướng dẫn ở mức trung bình (trích đoạn nhiều năm thống nhất). Bộ slide ở mức cao: toàn văn bản sao đã được đọc, dù đó là bản do bên thứ ba lưu lại.

**Ý chính.**

- **Không vượt SOTA không phải lý do reject.** Từ bản năm 2015 và được nhắc lại tương tự năm 2024, hướng dẫn CVPR nói việc phương pháp không vượt độ chính xác SOTA trên một benchmark có sẵn tự nó không phải lý do để reject. Reviewer cần cân novelty và tác động tiềm năng cùng với các con số.
- **Chê thiếu novelty phải có tài liệu cụ thể.** "It is not OK to simply say “this has been done before”: you need to give specific references!" (Không được chỉ nói "đã có người làm rồi"; phải đưa ra tài liệu cụ thể.)
- **Mức bằng chứng tùy loại paper.** Bộ slide phân biệt: ý tưởng có thể mang tính chuyển đổi chỉ cần proof-of-concept cơ bản; bài toán đã định hình với một ý tưởng hợp lý cần kết quả trên benchmark; ý tưởng lạ, phức tạp quá mức, khó tin hoặc có vẻ gia tăng cần kết quả phi thường và sẽ bị soi rất kỹ; paper quan điểm hoặc lý thuyết không cần thí nghiệm.
- **Ví dụ review tốt và review tồi.** Ví dụ review tốt là về một paper không đạt kết quả tốt nhất trên benchmark nhưng được đánh giá cao vì tính tổng quát, kèm ghi chú "Achieving best results is not necessary to validate the key idea" (không cần đạt kết quả tốt nhất mới chứng minh được ý tưởng chính). Ví dụ review tồi chỉ liệt kê điểm yếu, không có tóm tắt, không có điểm mạnh, không có lập luận, nên AC không dùng được.
- **Thời gian cần có.** Theo bộ slide, reviewer có kinh nghiệm thường dành hai tới bốn giờ cho mỗi paper; người mới nên dự trù ít nhất bốn giờ và đọc hai lần. Đây là hướng dẫn, không phải quy định.

**Đọc khi nào.** Trước khi review cho CVPR, ICCV hay ECCV. Thang mức bằng chứng cũng nên đọc ở giai đoạn thiết kế thí nghiệm, để biết loại claim của nhóm cần bằng chứng tới đâu.

**Liên hệ trong giáo trình.** Mẫu review gồm tóm tắt, điểm mạnh, điểm yếu và lập luận được dùng trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md). Thang mức bằng chứng nối với bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md). Bối cảnh review ở cộng đồng CV có trong bài [Hệ sinh thái Computer Vision](../00-tong-quan/he-sinh-thai-cv.md).

## Tìm ý tưởng và khoảng trống

Không có công thức nào sinh ra ý tưởng tốt, nhưng có những thói quen làm cho ý tưởng tốt xuất hiện thường xuyên hơn. Nhiều bài ở các nhóm khác cũng là nguồn ý tưởng khi được đọc lại theo góc nhìn này:

- **Schulman:** đặt một mục tiêu năng lực dài hạn rồi giải các bài toán trên đường tới đó, thay vì chỉ cải tiến paper vừa đọc.
- **Hamming:** để ý và theo dõi những chỗ có vẻ sai hoặc bất thường trong lý thuyết hiện có.
- **Nielsen:** vùng hỗn loạn của một lĩnh vực là cơ hội; tìm câu hỏi mới chứ không chỉ giải câu hỏi cũ.
- **Alon:** lắng nghe những ý tưởng cứ quay lại trong nhiều tháng, rồi đặt chúng lên hai trục khả thi và thú vị.
- **Sutton:** hỏi một phương pháp có còn đứng vững khi tính toán tăng lên không; câu trả lời "không" thường mở ra một hướng mới.
- **Huang** (nhóm Lập kế hoạch): chạy baseline trước để thấy giới hạn cụ thể của SOTA; một khoảng trống cụ thể là động lực tốt nhất.
- **Lipton và Steinhardt** (nhóm Thực nghiệm): khi chưa rõ cải thiện đến từ đâu, một nghiên cứu thực nghiệm không đề xuất thuật toán mới vẫn có thể là một đóng góp.

Hai mục dưới đây là những công cụ trực tiếp nhất cho việc tạo và sàng lọc ý tưởng.

### Stanford CS197 (Michael Bernstein): bit flip, vectoring và velocity

- **Hình thức:** khóa học CS 197 *Computer Science Research* của Stanford, một khóa nhập môn nghiên cứu theo nhóm do Michael S. Bernstein thiết kế và giảng dạy. Các khái niệm dưới đây nằm trong các bộ slide *Literature Search*, *Arguing a Research Project* và *Velocity in Research*.
- **Nguồn:** <https://web.stanford.edu/class/cs197/>
- **Mức xác minh:** trung bình. Việc khóa học dạy phương pháp bit flip được xác nhận qua paper của O'Neill và cộng sự (arXiv:2504.12976, 2025) và các bản sao slide. Định nghĩa chi tiết lấy từ trích đoạn slide; ghi chú khóa học chính thức chưa được đọc.

**Ý chính.**

- **Bit flip.** Ý tưởng mới hiếm khi xuất hiện từ chân không; chúng thường xoay quanh công trình hiện có. Bước một là xác định "bit": phát biểu một giả định, thường ngầm định, mà các công trình trước đặt ra. Bước hai là lật nó: đề xuất một cách làm khác. Một bit flip là phát biểu cô đọng của đóng góp trí tuệ cốt lõi của một paper.
- **Lật ở mức một paper hay cả một dòng tài liệu.** Có thể lật giả định của một paper, hoặc giả định chung của cả một dòng nghiên cứu. Một paper có nhiều cách lật, nhưng không phải cách nào cũng đáng giá, và một số chỉ là gia tăng. Càng hiểu rõ các trục thiết kế của lĩnh vực, càng chọn được cú lật đáng làm.
- **Bit flip chưa đủ.** Một cú lật phải được lập luận và đánh giá. Nếu chưa phát biểu chính xác được ý tưởng và cú lật, thì cũng chưa thiết kế được thí nghiệm đánh giá phù hợp.
- **Vectoring và velocity.** Vectoring là xác định chiều rủi ro hoặc bất định lớn nhất của dự án. Velocity là giảm nhanh rủi ro theo chiều đã chọn. Hai việc chạy trong một vòng lặp chặt. Velocity không đồng nghĩa với tiến độ: một chuỗi ý tưởng sáng tạo đều thất bại là tiến độ thấp nhưng velocity cao. Mỗi tuần, chọn câu hỏi lớn nhất chưa được trả lời và biến nó thành trọng tâm của một đợt làm việc ngắn.
- **Một ứng dụng trong AI.** O'Neill và cộng sự (2025) dựng một dataset khoảng 5.500 paper NeurIPS 2023 và ICLR 2024 theo định dạng Bit, Flip, Spark. Thành phần Spark (insight then chốt) là phần họ bổ sung, không phải của Bernstein.

**Đọc khi nào.** Khi đã đọc đủ một dòng tài liệu và muốn chuyển từ hiểu sang tạo. Phần vectoring và velocity hữu ích mỗi tuần, khi lên kế hoạch cho tuần tiếp theo.

**Liên hệ trong giáo trình.** Lật giả định là phương pháp đầu tiên trong bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md). Phát biểu đóng góp dưới dạng một cú lật giúp tìm insight trong bài [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md). Vectoring nối với thứ tự rủi ro trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md), còn velocity nối với vòng lặp hằng tuần trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md).

### Chris Olah, *Research Taste Exercises* (2021)

- **Hình thức:** "rough note" (ghi chú thô) trên blog của Olah, ngày 9/1/2021, cũng là một thread trên Twitter. Olah tự nói đây là ghi chú chưa trau chuốt, có thể về sau ông không còn đồng ý hết.
- **Nguồn:** <https://colah.github.io/notes/taste/>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Vì sao gu khó luyện.** Gu nghiên cứu, hiểu đại khái là khả năng chọn bài toán tốt, khó phát triển vì "testing whether a research idea you come up with is good is very expensive" (kiểm tra xem một ý tưởng nghiên cứu có tốt không là rất tốn kém). Mỗi lần thử mất nhiều tháng, nên mỗi năm chỉ nhận vài phản hồi. Các bài tập của ông là cách lấy phản hồi rẻ hơn, nhiễu hơn, nhưng cho nhiều ý tưởng hơn.
- **Năm bài tập.** Viết danh sách ý tưởng và nhờ một người hướng dẫn đáng tin chấm từng ý tưởng từ 1 tới 10, rồi thảo luận những chỗ bất đồng. Khi người khác công bố một ý tưởng đã từng nghĩ tới, so kết quả của họ với kỳ vọng ban đầu, vì đó là phản hồi miễn phí. Phỏng vấn các nhà nghiên cứu về cách họ chọn bài toán. Đọc lịch sử khoa học, ví dụ Kuhn. Soi lại gu của chính người làm nghiên cứu và của cộng đồng: nó từng sai ở đâu, các "trường phái" lân cận sẽ phản bác thế nào.
- **Ba kiểu thất bại.** Thứ nhất là gắn bó quá mức với một hướng vì chi phí chìm; cách chữa là mỗi một hai năm dành một hai tuần liệt kê các lựa chọn khác và hỏi nếu bắt đầu lại từ đầu thì sẽ chọn gì. Thứ hai là thiếu hiểu biết gần gũi về nghiên cứu: "You can’t have research taste in a vacuum." (Không thể có gu nghiên cứu trong chân không.) Cách chữa là tham gia dự án của người khác hoặc làm những dự án ngắn. Thứ ba là môi trường lệch với mối quan tâm, dẫn tới những ý tưởng tối ưu cho sự thỏa hiệp thay vì cho chất lượng.
- **Hứng thú và tầm quan trọng.** Đừng ép bản thân làm điều không hứng thú dù nó có vẻ quan trọng; hãy tìm cách làm cho những bài toán quan trọng trở nên hứng thú.
- **Gợi ý của người khác mà Olah dẫn lại.** Rachel Prudden: tưởng tượng một nhóm khác công bố paper của dự án, liệu có hào hứng đọc nó không. Andy Matuschak: "câu hỏi phản Hamming", tức bài toán thú vị nhất là gì và vì sao không làm nó. Preetum Nakkiran: viết một proposal ngắn trước khi cam kết hơn một tháng, nói rõ vì sao câu hỏi thú vị, vì sao câu trả lời có giá trị, và dự đoán sẽ tìm thấy gì. Boaz Barak: dự án "20/80", tức tìm một bài toán chưng cất được trở ngại chính.

**Đọc khi nào.** Khi đã có một danh sách ý tưởng nhưng không biết chọn cái nào, và mỗi năm một lần để rà soát hướng đi.

**Liên hệ trong giáo trình.** Bài tập chấm điểm danh sách ý tưởng và câu hỏi "tưởng tượng nó đã được công bố" được dùng trong sổ ý tưởng và phễu kiểm ý tưởng của bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md) và bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md). Gợi ý của Nakkiran là tiền thân gọn nhẹ của research proposal trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md).

## Lập kế hoạch và giữ tiến độ

Một ý tưởng trên giấy chưa phải là một dự án. Các bài trong nhóm này có một mẫu số chung: rủi ro được sắp thứ tự, thất bại được phát hiện sớm, và tiến độ phải nhìn thấy được, cả với người làm lẫn với người hướng dẫn. Khái niệm vectoring và velocity của CS197, đã bàn ở nhóm trước, cũng thuộc về đây.

### George H. Heilmeier, *Heilmeier Catechism* (DARPA, thập niên 1970)

- **Hình thức:** bộ câu hỏi do George H. Heilmeier, giám đốc DARPA giai đoạn 1975–1977, đặt ra để đánh giá các đề xuất chương trình nghiên cứu. Phiên bản DARPA công bố gồm tám câu. Có nhiều biến thể từ bảy tới chín câu đang lưu hành, và ARPA-H có một phiên bản bổ sung câu hỏi về tác động xã hội; phần bổ sung đó không phải của Heilmeier.
- **Nguồn:** bản chép lại trung thành tại <https://murray.cds.caltech.edu/Heilmeier_Catechism> (trang gốc nằm trên darpa.mil).
- **Mức xác minh:** trung bình. Nội dung và cấu trúc tám câu chắc chắn; câu chữ của một vài câu là dạng thường được trích, chưa đối chiếu với trang DARPA.

**Ý chính.** Tám câu hỏi, diễn giải:

- (1) Dự án muốn làm gì? Phát biểu mục tiêu hoàn toàn không dùng biệt ngữ.
- (2) Hiện nay việc đó được làm thế nào, và giới hạn của cách làm hiện tại là gì?
- (3) Điều gì mới trong cách tiếp cận, và vì sao tin rằng nó sẽ thành công?
- (4) Ai quan tâm? Nếu thành công thì điều gì sẽ khác đi?
- (5) Rủi ro là gì? (6) Tốn bao nhiêu? (7) Mất bao lâu?
- (8) Đâu là các "bài kiểm tra giữa kỳ và cuối kỳ" để biết dự án thành công?

Heilmeier đọc từng đề xuất và đòi câu trả lời cho các câu hỏi này trước khi phê duyệt. Giá trị của bộ câu hỏi là nó buộc người đề xuất làm sáu việc: nói mục tiêu không biệt ngữ, hiểu thật hiện trạng của lĩnh vực thay vì đánh vào một hình nộm, nêu rõ cái mới và lý do tin vào nó, nói được tác động, tính trước rủi ro, chi phí và thời gian, và định trước tiêu chí thành công.

**Đọc khi nào.** Trước khi cam kết vài tháng cho một dự án, và khi viết đề xuất xin tài trợ hoặc xin tài nguyên tính toán.

**Liên hệ trong giáo trình.** Research proposal hai trang trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md) được xây quanh tám câu này. Bộ câu hỏi thẩm định trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) khai thác bốn câu đầu. Bốn câu đầu cũng tương ứng với các đoạn mở của một [Introduction](../02-viet-tung-phan/introduction.md).

### Jacob Steinhardt, *Research as a Stochastic Decision Process* (2018)

- **Hình thức:** tiểu luận trên trang cá nhân của Steinhardt ở Stanford, năm 2018, khi ông còn là nghiên cứu sinh; hiện ông ở UC Berkeley.
- **Nguồn:** <https://cs.stanford.edu/~jsteinhardt/ResearchasaStochasticDecisionProcess.html>
- **Mức xác minh:** trung bình. Tiêu đề và URL chắc chắn; nội dung được đối chiếu qua nhiều bản tóm tắt, chưa đọc trực tiếp trang gốc. Không có câu trích nguyên văn.

**Ý chính.**

- **Dự án là một chuỗi nhiệm vụ bất định.** Mỗi nhiệm vụ con đều có thể thất bại và đánh chìm cả dự án. Mục tiêu là tối đa hóa xác suất thành công cuối cùng và tối thiểu hóa thời gian kỳ vọng, đặc biệt là thời gian bỏ ra trước khi phát hiện thất bại.
- **Quy tắc cốt lõi.** Làm các nhiệm vụ theo thứ tự lượng thông tin thu được trên mỗi đơn vị thời gian, từ nhiều tới ít. Đừng bắt đầu từ phần dễ hay phần thoải mái nhất; hãy bắt đầu từ phần dễ giết dự án nhất so với chi phí của nó.
- **Hai cách hình thức hóa.** Cách thứ nhất tính thời gian kỳ vọng tiết kiệm được nhờ không phải làm những nhiệm vụ đứng sau thất bại đầu tiên. Cách thứ hai xấp xỉ bằng một "tỉ lệ thất bại" kết hợp xác suất thành công và thời lượng của từng nhiệm vụ, rồi sắp xếp theo tỉ lệ đó. Công thức cụ thể nên đọc ở bản gốc.
- **Kinh nghiệm cá nhân của tác giả.** Theo các bản tóm tắt, Steinhardt kể rằng trước khi áp dụng phương pháp này, ông có hơn một năm ít tiến bộ, và sau đó hoàn thành dự án đều đặn hơn hẳn. Đây là trải nghiệm riêng, không nên khái quát thành con số chung.
- **Hệ quả thực hành.** Kiểm tra giả định rủi ro nhất bằng thí nghiệm rẻ nhất có thể. Mục tiêu là giảm bất định, không chỉ tạo ra tiến độ bề ngoài. Lập lại kế hoạch mỗi khi có thông tin mới.

Trang Tài nguyên chỉ giới thiệu bài này trong một câu. Ở đây cần nhấn mạnh rằng giá trị của nó nằm ở phương pháp cụ thể: liệt kê các nhiệm vụ, ước lượng xác suất thành công và thời gian cho từng nhiệm vụ, rồi sắp xếp lại.

**Đọc khi nào.** Ngay sau khi chốt ý tưởng, và mỗi khi dự án có nhiều nhánh việc chạy song song mà không rõ nên ưu tiên nhánh nào.

**Liên hệ trong giáo trình.** Cây rủi ro và thứ tự làm việc trong bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md) áp dụng trực tiếp ý tưởng này. Pilot experiment và tiêu chí dừng trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md) là phiên bản thu nhỏ của nó.

### Gary Klein, *Performing a Project Premortem* (2007)

- **Hình thức:** bài ngắn trên *Harvard Business Review* 85(9):18–19, tháng 9/2007. Klein là nhà tâm lý học nhận thức, nổi tiếng với hướng nghiên cứu ra quyết định trong điều kiện tự nhiên.
- **Nguồn:** <https://hbr.org/2007/09/performing-a-project-premortem>
- **Mức xác minh:** trung bình. Thông tin thư mục và phương pháp chắc chắn; câu chữ của bài gốc chưa được đọc trực tiếp.

**Ý chính.**

- **Premortem là postmortem làm trước.** Trước khi dự án bắt đầu, sau khi cả nhóm đã nghe kế hoạch, người chủ trì tuyên bố rằng dự án đã thất bại thảm hại. Mỗi thành viên tự viết ra mọi lý do có thể dẫn tới thất bại đó.
- **Chia sẻ và củng cố kế hoạch.** Các lý do được chia sẻ, ví dụ mỗi người nêu một lý do theo lượt, rồi được dùng để sửa kế hoạch. Các hướng dẫn của bên thứ ba thường mô tả một buổi ngắn khoảng hai mươi tới ba mươi phút, bắt đầu bằng viết im lặng.
- **Cơ chế: prospective hindsight.** Tưởng tượng một sự kiện đã xảy ra giúp người ta nêu nguyên nhân tốt hơn. Klein dẫn một nghiên cứu năm 1989 của Mitchell, Russo và Pennington về hiệu ứng này. Khái niệm đó không phải do Klein đặt ra, và kết quả của nghiên cứu ấy là về khả năng nêu đúng lý do, không phải về tỉ lệ thành công của dự án.
- **An toàn để nói ra nghi ngờ.** Premortem tạo điều kiện để những thành viên hiểu biết nói ra lo ngại mà bình thường họ giữ lại, nhờ đó chống lại sự tự tin thái quá và tư duy bầy đàn.

Áp dụng vào nghiên cứu là cách diễn giải của giáo trình, không phải của Klein: trước khi cam kết nhiều tháng, nhóm tưởng tượng "đã qua deadline và paper bị reject", hoặc "phương pháp không chạy", rồi liệt kê lý do. Các lý do thường gặp là baseline yếu, không có quyền truy cập dữ liệu, hay bị nhóm khác công bố trước. Mỗi lý do trở thành một thí nghiệm giảm rủi ro.

**Đọc khi nào.** Trước buổi khởi động dự án, và trước khi chạy thí nghiệm lớn đầu tiên.

**Liên hệ trong giáo trình.** Bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md) có quy trình premortem và kế hoạch B cho dự án AI.

### Jia-Bin Huang, *awesome-tips*: giữ tiến độ và làm việc với người hướng dẫn

- **Hình thức:** kho GitHub tổng hợp mẹo nghiên cứu và nghề nghiệp của Jia-Bin Huang (University of Maryland, College Park; Computer Vision), cập nhật liên tục từ khoảng năm 2021. Phần lớn mục là đường dẫn tới thread Twitter/X; một số được viết thành file. Mục này dựa trên hai file *How to make steady progress in my research?* và *How to do research with my mentors effectively?*.
- **Nguồn:** <https://github.com/jbhuang0604/awesome-tips>
- **Mức xác minh:** cao với nội dung các file đã đọc. Các mục chỉ có đường dẫn tới tweet chưa được xác minh nội dung.

**Ý chính.**

- **Hình dung thành công, rồi làm ngược.** Nếu dự án hoàn thành mà kết quả không làm người làm phấn khích, hãy bỏ nó. Với một pipeline A, B, C, hãy giả sử B cho đầu ra hoàn hảo để xây C trước, rồi giả sử A hoàn hảo để xây B. Cách làm ngược này cho thấy sớm kết quả cuối cùng, đo được cận trên, và cho phép tập trung vào từng bước với đầu vào lý tưởng.
- **Baseline trước.** Thử các baseline sẽ lộ ra giới hạn của SOTA. Nếu baseline đã chạy tốt, cần hỏi lại vì sao còn làm bài toán này. Một khoảng trống cụ thể là động lực tốt nhất cho công trình.
- **Nhỏ, đơn giản, từng thứ một.** Dùng ví dụ đồ chơi nắm được bản chất bài toán, tốt nhất là dữ liệu tổng hợp để có ground truth ở mọi bước. Làm trường hợp đơn giản trước. "When doing experiments, change exactly ONE thing at a time." (Khi làm thí nghiệm, mỗi lần chỉ thay đổi đúng một thứ.) Tìm một proxy nhỏ và nhanh thay vì chỉ chạy những lần huấn luyện đầy đủ kéo dài hàng tuần.
- **Tự động hóa, trực quan hóa, định lượng.** Tự động hóa mọi thứ lặp lại, trực quan hóa mọi thứ vì không thể debug điều không nhìn thấy, và dùng một vài metric định lượng thay vì nhìn bằng mắt.
- **Giúp người hướng dẫn giúp mình.** Gửi cập nhật thường xuyên giữa các buổi họp. Gửi kết quả và chương trình họp trước, gửi tóm tắt và kế hoạch hành động sau. Giữ một bộ slide duy nhất cho mọi kết quả. Không hủy họp khi bế tắc, và hỏi giúp sau khoảng mười lăm phút tìm kiếm không có kết quả. Đừng bao giờ chỉ báo "không chạy": hãy khoanh vùng xem bước nào vẫn đúng, bước nào sai, và nguyên nhân nào đã được loại trừ. Lời khuyên cuối này Huang dẫn từ ghi chú *How To Do Research* của Bill Freeman.

**Đọc khi nào.** Khi tuần nào cũng bận mà không có tiến độ nhìn thấy được, và trước buổi họp đầu tiên với người hướng dẫn mới.

**Liên hệ trong giáo trình.** Vòng lặp hằng tuần và các sanity check trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md) dựa nhiều vào các mẹo này. Phần làm việc với người hướng dẫn nối với bài [Lộ trình thực hiện một paper](../00-tong-quan/lo-trinh.md). Các file về viết paper và related work trong cùng kho được nhắc ở nhóm Viết và trình bày.

## Thực nghiệm

Thực nghiệm deep learning có một đặc điểm nguy hiểm: nó hỏng một cách âm thầm. Một lỗi trong code hiếm khi làm chương trình dừng; nó chỉ làm kết quả kém đi một chút, hoặc đẹp lên một cách không thật. Các bài trong nhóm này thay may mắn bằng kỷ luật, mỗi bài ở một tầng khác nhau: debug quá trình huấn luyện (Karpathy), tuning có phương pháp (Tuning Playbook), dao động giữa các lần chạy (Henderson và cộng sự), xác định nguồn của cải thiện (Lipton và Steinhardt), và thiết kế đánh giá (Wei).

### Andrej Karpathy, *A Recipe for Training Neural Networks* (2019)

- **Hình thức:** bài blog ngày 25/4/2019, phát triển từ một tweet của Karpathy về những lỗi phổ biến nhất khi huấn luyện mạng nơ-ron.
- **Nguồn:** <https://karpathy.github.io/2019/04/25/recipe/>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Hai quan sát nền tảng.** Thứ nhất, "Neural net training is a leaky abstraction": các thư viện gợi ý rằng chỉ cần cắm vào là chạy, nhưng thực tế không phải vậy. Thứ hai, huấn luyện hỏng một cách âm thầm: "Most of the time it will train but silently work a bit worse." (Phần lớn trường hợp mô hình vẫn train, chỉ âm thầm kém đi một chút.) Ví dụ của ông gồm lật ảnh mà quên lật nhãn, rò rỉ thông tin lệch một vị trí trong mô hình tự hồi quy, và cắt ngưỡng loss thay vì gradient. Vì vậy, cách làm "nhanh và ẩu" không hiệu quả; cần kỹ lưỡng, phòng thủ và trực quan hóa liên tục.
- **Nguyên tắc tổng quát.** Đi từ đơn giản tới phức tạp. Ở mỗi bước, đưa ra một giả thuyết cụ thể về điều sẽ xảy ra, rồi kiểm chứng bằng thí nghiệm hoặc điều tra cho tới khi tìm ra vấn đề. Tránh đưa vào nhiều độ phức tạp chưa kiểm chứng cùng một lúc.
- **Bước một: hòa mình với dữ liệu.** Dành hàng giờ xem hàng nghìn ví dụ trước khi viết code mô hình, để tìm dữ liệu trùng lặp, nhãn hỏng, mất cân bằng và thiên lệch. Viết code để lọc và sắp xếp dữ liệu; các điểm ngoại lai gần như luôn làm lộ lỗi chất lượng dữ liệu hoặc lỗi tiền xử lý.
- **Bước hai: khung end-to-end và các baseline "ngốc".** Cố định random seed; kiểm tra loss lúc khởi tạo; thêm baseline con người và baseline không phụ thuộc đầu vào; overfit một batch chỉ vài ví dụ; trực quan hóa dữ liệu ngay tại điểm đi vào mô hình.
- **Các bước sau.** Đầu tiên làm mô hình đủ lớn để overfit tập train, rồi mới regularize. "Don't be a hero": chép kiến trúc đơn giản nhất từ paper gần nhất. Dữ liệu thật nhiều hơn là regularizer tốt nhất. Ưu tiên random search hơn grid search khi tune. Cuối cùng mới tới ensemble và huấn luyện lâu hơn.

Các con số cụ thể trong bài, như learning rate 3e-4 cho Adam hay mức lợi từ ensemble, là quy tắc kinh nghiệm của Karpathy năm 2019, không phải sự thật đã được xác lập. Một vài lời khuyên, như tránh pretraining không giám sát trong Computer Vision, đã cũ so với hiện nay.

**Đọc khi nào.** Trước khi viết dòng code huấn luyện đầu tiên của một dự án, và mỗi khi kết quả "gần đúng mà không đúng".

**Liên hệ trong giáo trình.** Các sanity check và quy trình debug trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md). Baseline không phụ thuộc đầu vào và baseline con người trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md). Tình huống 23 trong bài [Khi câu chuyện và bằng chứng không khớp](../07-tinh-huong-kho/cau-chuyen-va-bang-chung.md) bàn trường hợp phát hiện bug hoặc rò rỉ dữ liệu sau khi đã có kết quả đẹp.

### Godbole, Dahl, Gilmer, Shallue, Nado, *Deep Learning Tuning Playbook* (2023)

- **Hình thức:** tài liệu dài trên GitHub, Version 1.0, năm 2023, của Varun Godbole, George E. Dahl, Justin Gilmer, Christopher J. Shallue và Zachary Nado (Google Research, Brain Team; Shallue ghi Harvard University). Tài liệu tự ghi rằng nó không phải sản phẩm được Google chính thức hỗ trợ, rằng nó phản ánh quan điểm của tác giả tại thời điểm viết chứ không phải chân lý khách quan, và rằng nó giả định bối cảnh học có giám sát hoặc tương tự.
- **Nguồn:** <https://github.com/google-research/tuning_playbook>
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Bắt đầu từ một cấu hình đơn giản.** Tìm một cấu hình đơn giản, tương đối nhanh, ít tài nguyên mà đạt kết quả "hợp lý", tối thiểu là tốt hơn hẳn mức ngẫu nhiên trên tập validation. Tránh các tính năng màu mè lúc đầu, ví dụ dùng learning rate cố định trước khi dùng lịch giảm phức tạp.
- **Tuning theo từng vòng.** Mỗi vòng gồm bốn bước: chọn một mục tiêu có phạm vi phù hợp; thiết kế và chạy thí nghiệm hướng tới mục tiêu đó; học từ kết quả; quyết định có chuyển sang cấu hình mới hay không. Mỗi lần chuyển phải dựa trên bằng chứng mạnh, không phải một cấu hình may mắn. Mỗi vòng chỉ một mục tiêu hẹp, vì đổi nhiều thứ cùng lúc thì không tách được tác động.
- **Khám phá nhiều hơn khai thác.** "we spend most of our time on "exploration" and only a small amount on "exploitation"." (Phần lớn thời gian dành cho khám phá, chỉ một phần nhỏ cho khai thác.) Hiểu bài toán giúp tránh giữ lại những thay đổi chỉ tình cờ có mặt trong các lần chạy tốt, biết siêu tham số nào quan trọng, và nhận ra lúc đã bão hòa.
- **Siêu tham số khoa học, phiền nhiễu và cố định.** Siêu tham số *khoa học* là thứ đang được đo tác động. Siêu tham số *phiền nhiễu* (nuisance) phải được tối ưu riêng cho từng giá trị của siêu tham số khoa học để so sánh công bằng. Siêu tham số *cố định* được giữ nguyên, và chúng tạo ra giới hạn cho mọi kết luận. Ví dụ: khi hỏi thêm lớp có giúp không, số lớp là khoa học còn learning rate là phiền nhiễu, vì learning rate tối ưu phụ thuộc kiến trúc. Vai trò của một siêu tham số tùy vào mục tiêu thí nghiệm.
- **Dao động và quyết định.** Chỉ riêng dao động giữa các lần huấn luyện với seed khác nhau cũng có thể tạo ra khác biệt "có ý nghĩa thống kê" giữa hai mô hình cấu hình giống hệt nhau, nên cần chạy lại cấu hình tốt nhất nhiều lần. Và "we should only adopt changes that produce improvements that outweigh any complexity they add." (Chỉ nên nhận những thay đổi mà mức cải thiện lớn hơn độ phức tạp chúng thêm vào.)

**Đọc khi nào.** Trước một đợt tuning lớn, và khi chuẩn bị so sánh với baseline, để bảo đảm baseline được tune tương xứng.

**Liên hệ trong giáo trình.** Phần so sánh công bằng trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) và quy trình tuning trong bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md). Tình huống 11 và 16 trong bài [Khi con số không đẹp](../07-tinh-huong-kho/con-so-khong-dep.md), cùng Tình huống 21 trong bài [Khi câu chuyện và bằng chứng không khớp](../07-tinh-huong-kho/cau-chuyen-va-bang-chung.md), là những trường hợp mà tài liệu này giúp xử lý.

### Henderson và cộng sự, *Deep Reinforcement Learning that Matters* (2018)

- **Hình thức:** paper tại AAAI 2018 của Peter Henderson, Riashat Islam, Philip Bachman, Joelle Pineau, Doina Precup và David Meger.
- **Nguồn:** <https://arxiv.org/abs/1709.06560>
- **Mức xác minh:** cao ở mức abstract và thông tin thư mục (đã đối chiếu abstract trên arXiv). Mục này nằm ngoài danh sách nguồn ban đầu của trang và được xác minh riêng; chi tiết từng thí nghiệm nên đọc trong bản gốc.

**Ý chính.**

- **Tái lập không đơn giản.** Tái lập kết quả của các phương pháp deep RL tiên tiến hiếm khi đơn giản. Tính không tất định của môi trường benchmark, cộng với phương sai vốn có của phương pháp, khiến kết quả được báo cáo khó diễn giải.
- **Thiếu thước đo ý nghĩa thống kê.** Khi không có thước đo ý nghĩa thống kê và cách báo cáo thí nghiệm được chuẩn hóa chặt hơn, rất khó biết một cải thiện so với SOTA có thật sự có ý nghĩa không.
- **Minh họa bằng thực nghiệm.** Paper cho thấy các metric và kết quả biến thiên đáng kể khi so với các baseline phổ biến, trong đó có biến thiên theo random seed, rồi đề xuất hướng dẫn để kết quả deep RL tái lập được.
- **Thông điệp vượt ra ngoài RL.** Ở bất kỳ lĩnh vực nào có phương sai lớn giữa các lần chạy, cần nhiều seed, khoảng tin cậy hoặc kiểm định, và mô tả đầy đủ chi tiết cài đặt.

**Đọc khi nào.** Trước khi quyết định số seed cho thí nghiệm chính, và khi mức cải thiện của phương pháp nhỏ.

**Liên hệ trong giáo trình.** Phần số liệu và ý nghĩa thống kê trong bài [Experiments](../02-viet-tung-phan/experiments.md). Tình huống 11 trong bài [Khi con số không đẹp](../07-tinh-huong-kho/con-so-khong-dep.md) bàn trường hợp cải thiện nằm trong dao động giữa các lần chạy.

### Zachary C. Lipton và Jacob Steinhardt, *Troubling Trends in Machine Learning Scholarship* (2018)

- **Hình thức:** position paper trên arXiv (1807.03341, tháng 7/2018), viết theo lời mời nộp bài của workshop *Machine Learning Debates* tại ICML 2018, không phải paper ở main track. Hai tác giả đóng góp ngang nhau.
- **Nguồn:** <https://arxiv.org/abs/1807.03341>
- **Mức xác minh:** cao (văn bản gốc).

Trang Tài nguyên giới thiệu bài này như một tài liệu giúp viết paper tránh overclaim. Ở đây, bài được đọc như một bản mô tả kỷ luật nghiên cứu: những điều cần làm ngay từ lúc thiết kế thí nghiệm, chứ không phải lúc viết.

**Ý chính.**

- **Paper tốt phục vụ người đọc thế nào.** Paper tốt tách rõ trực giác khỏi kết luận có bằng chứng; mô tả các nghiên cứu thực nghiệm đã xét và loại trừ những giả thuyết thay thế; nói rõ quan hệ giữa lý thuyết và các claim trực giác hay thực nghiệm; và chọn thuật ngữ không gây hiểu lầm.
- **Bốn xu hướng đáng lo.** Không phân biệt giải thích với suy đoán; không xác định được nguồn của cải thiện thực nghiệm; "mathiness", tức dùng toán để gây ấn tượng hoặc làm rối thay vì làm rõ; và lạm dụng ngôn ngữ, như dùng thuật ngữ mang hàm ý gây hiểu lầm.
- **Nguồn của cải thiện.** "Too frequently, authors propose many tweaks absent proper ablation studies, obscuring the source of empirical gains." (Tác giả quá thường xuyên đề xuất nhiều điều chỉnh mà không có ablation phù hợp, làm mờ nguồn gốc của cải thiện.) Ví dụ được nêu là công trình của Melis và cộng sự, cho thấy LSTM thông thường được tune kỹ có thể ngang bằng các cải tiến kiến trúc được công bố. Các tác giả cũng nói ablation không cần mà cũng không đủ; kiểm tra độ bền và phân tích lỗi cũng xây dựng hiểu biết, và các nghiên cứu thực nghiệm không đề xuất thuật toán mới vẫn có giá trị.
- **Suy đoán trình bày như giải thích.** Ví dụ tiêu cực là cách giải thích batch normalization bằng "internal covariate shift", được nêu như sự thật khi chưa có định nghĩa rõ, và về sau bị đặt câu hỏi. Ví dụ tích cực là paper dropout, vốn tách phần động cơ mang tính suy đoán ra một mục riêng.
- **Nguyên nhân và thái độ.** Các nguyên nhân có thể là cộng đồng tăng nhanh, đội ngũ reviewer mỏng, và động lực lệch về các chỉ số ngắn hạn. Hai tác giả tự nhận cũng từng mắc những lỗi này, và nhấn mạnh rằng các mẫu hình đó không tự động biến một paper thành paper tồi.

**Đọc khi nào.** Khi lập kế hoạch ablation và các thí nghiệm loại trừ giả thuyết thay thế, và một lần nữa trước khi viết phần phân tích.

**Liên hệ trong giáo trình.** Phần thiết kế ablation trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md). Tình huống 6 và 10 trong bài [Ghép ý tưởng và "độn" đóng góp](../07-tinh-huong-kho/ghep-va-don.md), Tình huống 18 và 21 trong bài [Khi câu chuyện và bằng chứng không khớp](../07-tinh-huong-kho/cau-chuyen-va-bang-chung.md), và mục ngôn từ thổi phồng trong bài [Đóng khung lại hay bóp méo: ranh giới trung thực](../07-tinh-huong-kho/ranh-gioi-trung-thuc.md).

### Jason Wei, *Successful language model evals* (2024)

- **Hình thức:** bài blog trên trang cá nhân của Jason Wei, năm 2024. Nội dung liên quan tới bài nói của ông tại Stanford NLP Seminar tháng 5/2024. Wei là tác giả chính của các paper về chain-of-thought prompting và emergent abilities.
- **Nguồn:** <https://jasonwei.net/blog/evals>
- **Mức xác minh:** trung bình. Bài viết và tiêu đề chắc chắn; nội dung chi tiết dựa trên một bản đăng lại và các bản tóm tắt.

**Ý chính.**

- **Eval bị đánh giá thấp.** Theo Wei, một eval "thành công" là eval được cộng đồng tin tưởng và được các paper đột phá dùng để chứng minh tiến bộ. Ví dụ là GLUE, được BERT đưa lên, và MMLU, được Gopher, Chinchilla và Flan-PaLM sử dụng.
- **Eval thất bại thường mắc ít nhất một lỗi.** Các khuyến nghị gồm: đủ nhiều ví dụ; một metric duy nhất dạng con số; cách chấm điểm rất chính xác; dễ chạy, vì eval tốn công sẽ mất dần người dùng; và một nhiệm vụ có ý nghĩa, không tầm thường.
- **Đây là kinh nghiệm của một người làm LLM.** Con số cụ thể về số ví dụ tối thiểu trong các bản tóm tắt chỉ là quy tắc kinh nghiệm, không phải chuẩn mực.

**Đọc khi nào.** Khi dự án có đóng góp là một benchmark mới, hoặc khi cần chọn eval cho thí nghiệm với mô hình ngôn ngữ lớn.

**Liên hệ trong giáo trình.** Phần chọn benchmark và metric trong bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md). Tình huống 30 trong bài [Bài toán, dữ liệu và phạm vi](../07-tinh-huong-kho/bai-toan-va-pham-vi.md) bàn trường hợp bài toán mới chưa có baseline để so sánh.

## Viết và trình bày

Nhóm này ngắn hơn các nhóm khác vì phần lớn tài liệu về kỹ năng viết đã nằm ở trang [Tài nguyên](tai-nguyen.md), và kỹ năng viết được giảng đầy đủ ở [Chương 2](../02-viet-tung-phan/index.md) và [Chương 3](../03-ky-thuat/index.md). Ba bài dưới đây được chọn vì chúng nói về vai trò của việc viết *trong quá trình nghiên cứu*, chứ không chỉ về cách trình bày kết quả. Ngoài ra, trong kho *awesome-tips* của Huang còn có hai file về viết đã được xác minh. File về viết paper dễ đọc xoay quanh nguyên tắc "Do NOT ask people to solve correspondence problems." (đừng bắt người đọc tự đi đối chiếu): chú thích hình tự đứng được, ký hiệu có tên gọi, mỗi bảng một thông điệp. File về related work khuyên kể quỹ đạo của từng nhánh nghiên cứu, nói rõ quan hệ với paper đang viết thay vì chỉ liệt kê, và viết sao cho câu vẫn đúng ngữ pháp khi bỏ hết các trích dẫn trong ngoặc. Phần Writing papers trong hướng dẫn nghiên cứu sinh của Karpathy được bàn ở nhóm cuối.

### Simon Peyton Jones, *How to write a great research paper*

- **Hình thức:** bài giảng có slide và video, được trình bày nhiều lần từ đầu những năm 2000, khi Peyton Jones làm ở Microsoft Research Cambridge. Ông làm ngôn ngữ lập trình.
- **Nguồn:** <https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/>
- **Mức xác minh:** trung bình. Bảy gợi ý và nội dung của hai gợi ý đầu được xác nhận qua trích đoạn slide; năm ra đời bản đầu và đường dẫn chính xác trên trang Microsoft Research chưa được xác nhận.

**Ý chính.**

- **Đừng chờ, hãy viết.** Viết là một cơ chế chính để *làm* nghiên cứu, không chỉ để báo cáo nó. Hãy viết một paper về ý tưởng từ sớm, kể cả khi ý tưởng còn có vẻ nhỏ bé, để nó kết tinh lại và để người khác có thể góp ý.
- **Xác định ý tưởng chính.** Peyton Jones định nghĩa ý tưởng là "a re-usable insight, useful to the reader" (một insight tái sử dụng được và hữu ích cho người đọc), và nhận xét rằng nhiều paper có ý tưởng tốt nhưng không chưng cất được nó ra. Mục tiêu là một ý tưởng rõ và sắc cho mỗi paper.
- **Năm gợi ý còn lại.** Kể một câu chuyện; nêu rõ các đóng góp; đặt related work sau khi đã trình bày ý tưởng; đặt người đọc lên trước; và lắng nghe người đọc. Lời khuyên về vị trí của related work đến từ văn hóa ngôn ngữ lập trình; ở ML và CV, related work thường là Section 2, nên cần xem đây là một trường phái.

Điều đáng học nhất cho người làm nghiên cứu là gợi ý đầu tiên. Viết sớm biến việc viết thành một công cụ chẩn đoán: khi phải viết ra đoạn "cách tiếp cận này khác các công trình trước ở đâu", nhóm tác giả thường phát hiện chính mình chưa trả lời được câu đó, trong khi vẫn còn đủ thời gian để sửa.

**Đọc khi nào.** Khi đã có ý tưởng mà chưa viết dòng nào. Theo chính bài giảng, đó là lúc nên bắt đầu viết.

**Liên hệ trong giáo trình.** Bản pitch một trang trong bài [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md) là cách viết sớm gọn nhất. Các tầng viết trong bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md). Vị trí của related work được bàn trong bài [Related Work](../02-viet-tung-phan/related-work.md).

### Jennifer Widom, *Tips for Writing Technical Papers* (2006)

- **Hình thức:** ghi chú trên web, tháng 1/2006, phát triển từ một bài trình bày ở nhóm InfoLab của Stanford, nơi nghiên cứu cơ sở dữ liệu. Karpathy giới thiệu bài này trong hướng dẫn nghiên cứu sinh của ông.
- **Nguồn:** <https://cs.stanford.edu/people/widom/paper-writing.html>
- **Mức xác minh:** trung bình. Sự tồn tại và ngày tháng chắc chắn; câu chữ của năm câu hỏi được diễn giải, vì các bản sao không hoàn toàn giống nhau.

**Ý chính.**

- **Introduction năm đoạn trả lời năm câu hỏi.** Vấn đề là gì? Vì sao nó thú vị và quan trọng? Vì sao nó khó, tức vì sao các cách làm ngây thơ thất bại? Vì sao chưa ai giải được, tức các giải pháp trước sai ở đâu và cách làm mới khác ra sao? Các thành phần chính của cách tiếp cận và kết quả là gì, kể cả những giới hạn cụ thể? Tiếp theo là một bản tóm tắt đóng góp dạng gạch đầu dòng, lý tưởng là kèm vị trí trong paper nơi mỗi đóng góp được chứng minh.
- **Đóng góp phải rõ sớm.** Một đóng góp kỹ thuật mới phải được phát biểu rõ trước khi người đọc đọc xong trang ba.
- **Thực nghiệm và kết luận.** Thực nghiệm phải nói rõ đang đo gì và vì sao. Kết luận không nên chỉ lặp lại abstract. Phần future work có thể chặn trước một số phản bác của reviewer.

Năm câu hỏi của Widom được viết cho Introduction, nhưng giáo trình gợi ý dùng thêm chúng như một bài kiểm tra mức độ sẵn sàng của chính nghiên cứu. Đây là cách áp dụng của giáo trình, không phải lời của Widom. Nếu trước khi chạy thí nghiệm chính mà nhóm chưa trả lời được câu thứ ba hoặc thứ tư, đó là dấu hiệu chưa hiểu bài toán đủ sâu.

**Đọc khi nào.** Khi lập dàn ý Introduction, và trước khi chốt ý tưởng nếu dùng như bài kiểm tra.

**Liên hệ trong giáo trình.** Cấu trúc Introduction năm tới sáu đoạn trong bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md). Bộ câu hỏi thẩm định trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

### Chris Olah và Shan Carter, *Research Debt* (2017)

- **Hình thức:** tiểu luận trên tạp chí *Distill*, năm 2017, ra mắt cùng thời điểm tạp chí Distill ra đời vào tháng 3/2017. Theo phần ghi đóng góp, Chris Olah là người viết chính và Shan Carter minh họa.
- **Nguồn:** <https://distill.pub/2017/research-debt/>
- **Mức xác minh:** cao với nội dung (văn bản gốc); ngày đăng chính xác chưa được xác nhận.

**Ý chính.**

- **Ẩn dụ ngọn núi.** Đạt tới hiểu biết ở mức nghiên cứu giống như leo núi. Việc leo có thể dễ hơn rất nhiều nếu có đường mòn và bậc thang, tức những tutorial, bài tổng quan và sách xuất sắc. "The climb isn’t progress: the climb is a mountain of debt." (Leo núi không phải tiến bộ; leo núi là một núi nợ.)
- **Các dạng nợ nghiên cứu.** Trình bày kém; ý tưởng chưa được tiêu hóa; trừu tượng và ký hiệu tồi, mà hai tác giả gọi là "giao diện người dùng của nghiên cứu"; và nhiễu, tức quá nhiều paper mà không có cách lọc. Theo hai tác giả, nhiễu là dạng nợ mà chuyên gia cảm nhận rõ nhất.
- **Nợ là bình thường, nên nó nguy hiểm.** Người ta quen coi lối giải thích tầm thường là giới hạn trên, và coi những giải thích xuất sắc là phép màu hiếm hoi.
- **Lao động diễn giải.** "Research debt is the accumulation of missing interpretive labor." (Nợ nghiên cứu là sự tích tụ của phần lao động diễn giải còn thiếu.) Trong giao tiếp một người viết, nhiều người đọc, người giải thích chỉ trả chi phí một lần, còn mỗi người đọc đều phải trả chi phí hiểu.
- **Tư duy rõ ràng và chưng cất.** Trừu tượng, ký hiệu và hình ảnh tốt là giao diện tốt hơn cho ý tưởng. Không giải thích tốt được một ý tưởng thường có nghĩa là chưa hiểu nó tốt nhất có thể. Chưng cất nghiên cứu đòi hỏi sáng tạo và hiểu biết ngang với nghiên cứu gốc, nhưng thiếu con đường sự nghiệp và nơi công bố; Distill là một nỗ lực để sửa điều đó.

**Đọc khi nào.** Khi thiết kế hình tổng quan và chọn hệ ký hiệu cho paper, và khi cân nhắc viết một bài tổng quan hay tutorial.

**Liên hệ trong giáo trình.** Hình như giao diện cho ý tưởng trong bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md). Ký hiệu trong bài [Method](../02-viet-tung-phan/method.md). Bài tổng quan và tutorial như một kiểu đóng góp hợp lệ trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

## Review và phản hồi

Review có hai phía, và người làm nghiên cứu sớm muộn sẽ đứng ở cả hai: viết review cho người khác, và đọc, trả lời review cho paper của nhóm. Các bài trong nhóm này giúp hiểu một bản review công tâm trông như thế nào, những lối tắt nào khiến review trở nên thiếu căn cứ, và cách viết một phản hồi thuyết phục được người ra quyết định.

### ACL Rolling Review, *Reviewer Guidelines* và *Review Form*

- **Hình thức:** hướng dẫn reviewer và mẫu review của ACL Rolling Review. Bản đầu tiên ra ngày 2/11/2021, do Anna Rogers và Isabelle Augenstein viết. Bản cập nhật lớn ra ngày 21/10/2024, và các cập nhật tiếp theo vào tháng 5/2025 và 10/2025.
- **Nguồn:** <https://aclrollingreview.org/reviewerguidelines> ; <https://aclrollingreview.org/reviewform>
- **Mức xác minh:** cao (văn bản nguồn của trang, bản cập nhật tháng 10/2025).

**Ý chính.**

- **Đọc ít nhất hai lần: lướt rồi đọc sâu.** Khi lướt, hỏi câu hỏi nghiên cứu là gì và đã làm gì để trả lời nó, câu trả lời có đẩy lĩnh vực tiến lên không, loại đóng góp có thuộc phạm vi không, và claim có được giới hạn phạm vi phù hợp không. Đừng nhìn kết quả vội, để tránh thiên lệch nhìn lại và thiên lệch xác nhận. Nhận xét "nên thêm X" chỉ hợp lệ khi lập luận của paper phụ thuộc vào X.
- **Cụ thể thay vì chung chung.** Thay vì "đóng góp không mới", hãy viết rằng các công trình X và Y rất giống đã được công bố hơn ba tháng trước deadline. Thay vì "thiếu baseline gần đây", hãy viết rằng cần so với X, Y và Z.
- **Các heuristic phản biện lười.** Danh sách hiện có mười bảy mục, mỗi mục kèm lý do vì sao nó có vấn đề. Ví dụ: kết quả không bất ngờ; kết quả không vượt SOTA, với lời giải thích "SOTA results are neither necessary nor sufficient for a *scientific* contribution." (kết quả SOTA không cần cũng không đủ cho một đóng góp *khoa học*); phương pháp quá đơn giản, với lời giải thích "The goal is to solve the problem, not to solve it in a complex way." (mục tiêu là giải bài toán, không phải giải nó theo cách phức tạp); chủ đề quá hẹp; chỉ thử trên một ngôn ngữ không phải tiếng Anh; thiếu tham chiếu tới X, vốn chỉ là vấn đề khi X đã được công bố chính thức, không chỉ trên arXiv, hơn ba tháng trước deadline; tác giả có thể làm thêm thí nghiệm X, trong khi "a paper only needs to present sufficient evidence for the claim that the authors are making" (paper chỉ cần đưa đủ bằng chứng cho claim mà tác giả đưa ra); và coi giới hạn là điểm yếu. ARR không cấm các nhận xét này. Hướng dẫn nói chúng có thể chỉ vào vấn đề thật, nhưng không tự động là điểm yếu. Danh sách cũng không phải lúc nào cũng có mười bảy mục; bản 2021–2022 có mười bốn.
- **Các vấn đề thường gặp trong paper NLP.** Hướng dẫn cho reviewer một bộ mã để gắn cờ. Nhóm M về phương pháp, ví dụ chỉ đánh giá bằng LLM mà không kiểm chứng. Nhóm T về dữ liệu và artifact, như đạo đức thu thập dữ liệu hay giấy phép không rõ. Nhóm R về kết quả, gồm p-hacking, chọn kết quả tốt nhất trong số lần thử không được báo cáo, baseline chưa được tune đủ, claim vượt quá phạm vi mẫu, giả thuyết được trình bày như kết luận, overclaim, và thiếu kiểm định ý nghĩa thống kê. Nhóm G về các vấn đề chung, như câu hỏi nghiên cứu không rõ, thuật ngữ then chốt mơ hồ, hay trích dẫn sai.
- **Giọng văn.** Review cần chuyên nghiệp và trung tính, và nên là bản review mà chính reviewer muốn nhận. Sau phản hồi của tác giả, reviewer cần ít nhất xác nhận đã đọc và ghi rõ phần cập nhật.

**Đọc khi nào.** Trước khi review cho ARR. Trước khi nộp, dùng bộ mã M, T, R, G để tự kiểm tra bản thảo. Khi viết rebuttal, có thể dẫn tên heuristic cụ thể nếu một nhận xét rơi vào danh sách.

**Liên hệ trong giáo trình.** Mục heuristic phản biện lười trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md). Đặc thù của ARR trong bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md). Phần tự đóng vai reviewer trong bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md).

### Anna Rogers và Isabelle Augenstein, *What Can We Do to Improve Peer Review in NLP?* (2020)

- **Hình thức:** paper tại *Findings of the Association for Computational Linguistics: EMNLP 2020*, trang 1256–1262 (arXiv:2010.03863).
- **Nguồn:** <https://aclanthology.org/2020.findings-emnlp.112/>
- **Mức xác minh:** trung bình. Thông tin thư mục và abstract chắc chắn; các khuyến nghị chi tiết chưa được đối chiếu với toàn văn.

**Ý chính.**

- **Chẩn đoán.** Peer review là công cụ tốt nhất để đánh giá bài nộp, nhưng ngày càng kém tin cậy. Một phần nguyên nhân là reviewer và AC được giao một nhiệm vụ định nghĩa kém, buộc họ so sánh khập khiễng giữa những loại paper rất khác nhau.
- **Lối tắt của reviewer.** Trong điều kiện đó, reviewer dựa vào các heuristic: reject nếu không đạt SOTA, khiến nhà nghiên cứu mắc kẹt trên một "vòng quay" so sánh với những kết quả đã lỗi thời; phạt người viết tiếng Anh không phải bản ngữ; coi công trình về ngôn ngữ khác tiếng Anh là ngách; và ưu ái công trình gia tăng an toàn hơn công trình mới.
- **Hướng cải thiện.** Định nghĩa rõ các loại đóng góp, ghép reviewer tốt hơn, đào tạo reviewer, và có hướng dẫn tường minh. Khó khăn chính là tạo ra động lực và cơ chế để áp dụng nhất quán. Những ý này đi thẳng vào bản hướng dẫn reviewer đầu tiên của ARR mà chính hai tác giả viết năm 2021.
- **Bằng chứng về sau.** Paper *LazyReview* của Purkayastha và cộng sự (2025, arXiv:2504.11042) dẫn báo cáo của ACL 2023, theo đó việc dùng các heuristic này là "one of the leading factors (24.3%) of author-reported issues in peer reviews" (một trong những nguyên nhân hàng đầu, chiếm 24,3% các vấn đề về review do tác giả phản ánh). Con số này là tỉ lệ trong các vấn đề được tác giả báo cáo, không phải tỉ lệ trên tổng số review.

**Đọc khi nào.** Khi muốn hiểu vì sao một review có thể thiếu căn cứ, và khi cần định vị một paper không đạt SOTA hoặc làm trên ngôn ngữ ít tài nguyên.

**Liên hệ trong giáo trình.** Phần tính ngẫu nhiên của review trong bài [Paper được đánh giá thế nào](../00-tong-quan/review-process.md), và bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md).

### Devi Parikh, Dhruv Batra và Stefan Lee, *How we write rebuttals* (2020)

- **Hình thức:** bài blog trên Medium, ngày 27/5/2020, có bản sao trên Substack. Ba tác giả viết từ kinh nghiệm với CVPR, ECCV, ICCV, NeurIPS, ICLR, EMNLP và các hội nghị AI tương tự.
- **Nguồn:** <https://deviparikh.medium.com/how-we-write-rebuttals-dc84742fece1>
- **Mức xác minh:** trung bình. Tác giả, ngày và tinh thần chung chắc chắn; các mẹo cụ thể được đối chiếu qua trích đoạn, chưa đọc toàn văn.

**Ý chính.**

- **Lý do ra đời.** Ba tác giả thấy mình lặp lại cùng những lời khuyên về rebuttal cho sinh viên, nên viết chúng ra.
- **Nguyên tắc dẫn đường.** Rebuttal phải kỹ lưỡng, trực tiếp, và dễ theo dõi đối với reviewer và AC.
- **Quy trình nhóm.** Liệt kê mọi ý của reviewer; cả nhóm thống nhất cách trả lời từng ý; viết nháp đủ hết mọi ý trước, rồi mới cắt bớt và sắp ưu tiên.
- **Mở đầu tích cực và nhắc lại bối cảnh.** Bắt đầu bằng việc tóm tắt những điểm reviewer đánh giá cao, vì nếu không, rebuttal chỉ xoay quanh lời chê. Đừng giả định người đọc còn nhớ paper; hãy nhắc lại các từ viết tắt và chi tiết thiết lập quan trọng. Dùng dữ liệu, không chỉ lập luận.
- **Người cần thuyết phục là trọng tài.** Giống một cuộc tranh luận, mục tiêu chính là thuyết phục AC, người ra quyết định, hơn là làm đối phương đổi ý.

So với trang Tài nguyên, điểm đáng học ở đây là coi rebuttal như một công việc nhóm có quy trình, và đổi người đọc mục tiêu từ reviewer sang AC.

**Đọc khi nào.** Ngay khi nhận review; tốt hơn nữa là đọc trước đó, để biết những thí nghiệm nào nên có sẵn.

**Liên hệ trong giáo trình.** Bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md), đặc biệt phần viết cho AC và phân loại ý kiến reviewer.

### Laura Leal-Taixé và Torsten Sattler, tutorial *How to write a good review?* (CVPR 2020)

- **Hình thức:** tutorial tại CVPR 2020 (ngày 14/6/2020, trực tuyến), còn có tên "Making Reviews Great Again", kèm slide và video.
- **Nguồn:** <https://sites.google.com/view/making-reviews-great-again>
- **Mức xác minh:** trung bình. Sự kiện và ban tổ chức chắc chắn; lời khuyên của từng diễn giả lấy từ bài tường thuật.

**Ý chính.**

- **Động cơ.** Cộng đồng Computer Vision khi đó chưa có cơ chế nào để đào tạo thế hệ reviewer mới.
- **Toàn bộ vòng đời.** Tutorial gồm phần viết paper (Bill Freeman), viết review, viết rebuttal (Andrew Fitzgibbon), cách ra quyết định (Vittorio Ferrari về hệ thống của ECCV 2018, Greg Mori về CVPR 2020), cùng các reviewer từng nhận giải reviewer xuất sắc và một phiên thảo luận.
- **Các lời khuyên lặp lại.** Viết review mà chính reviewer muốn nhận. Không có công thức chung; mỗi review phải được viết riêng cho paper đó. Review tốt tốn nhiều thời gian. Nói rõ mỗi lo ngại nặng tới đâu. Nhớ rằng review có nhiều người đọc: tác giả, các reviewer khác và AC.
- **Cho tác giả.** Fitzgibbon khuyên coi review là cơ hội cải thiện paper, và giữ bình tĩnh, khách quan khi viết rebuttal.

**Đọc khi nào.** Xem video khi chuẩn bị review lần đầu cho một hội nghị Computer Vision.

**Liên hệ trong giáo trình.** Phần từ đọc tới viết review trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md), và bài [Khi bị reject](../04-nop-va-sau-nop/reject.md).

## Đời sống nghiên cứu sinh

Nhóm cuối không dạy một kỹ năng cụ thể, mà giúp đặt kỳ vọng đúng về cả hành trình: một chương trình tiến sĩ thật sự trông như thế nào, đóng góp của một người lớn hay nhỏ tới đâu, và vì sao những năm đầu thường nhiều thất bại hơn thành công.

### Andrej Karpathy, *A Survival Guide to a PhD*: các phần còn lại (2016)

- **Hình thức và nguồn:** xem mục cùng tên ở nhóm Chọn bài toán và gu nghiên cứu. Mục này bàn các phần về viết paper, viết code và "Don't play the game".
- **Mức xác minh:** cao (văn bản gốc).

**Ý chính.**

- **Học viết bằng cách review.** Chỉ đọc paper tốt giống như huấn luyện một bộ phân loại chỉ bằng ví dụ dương. Review cho người đọc thấy cả paper tồi, và từ đó thấy paper tốt khác ở đâu.
- **Một đóng góp cốt lõi.** "The paper sells a single thing that was not obvious or present before." (Paper bán một điều duy nhất chưa hiển nhiên hoặc chưa có trước đó.) Đóng góp không cộng dồn; một đóng góp phụ thứ hai làm loãng paper.
- **Ấn tượng tổng thể của paper.** Karpathy mô tả cách một người đọc có kinh nghiệm đánh giá paper rất nhanh qua hình dáng tổng thể: introduction và related work mỗi phần khoảng một trang, hình minh họa ở trang đầu, hình hệ thống, bảng kết quả, một phân tích bổ sung, và dùng đúng giới hạn trang. Ông trình bày đây như một heuristic mà reviewer dùng, với giọng nửa đùa, không phải công thức để được nhận. Đoạn "từ tốt và từ xấu" trong cùng phần là châm biếm, không nên làm theo.
- **Mạch Introduction và kỷ luật viết.** Mạch quen thuộc gồm: X quan trọng; thách thức cốt lõi là gì; công trình trước làm Y và gặp vấn đề Z; paper làm W; W có những tính chất hấp dẫn và bằng chứng thực nghiệm nào. Mỗi đoạn một ý, nêu ở câu đầu. Tránh lối liệt kê "đầu tiên làm X, rồi Y, rồi Z" mà không giải thích vì sao. Ông kể nhóm của Fei-Fei Li đặt deadline nội bộ sớm hai tuần, với bản nháp ít nhất năm trang được review bằng mẫu review thật.
- **Code và "đừng chơi trò chơi".** Công bố code buộc người viết giữ thói quen tốt hơn và giúp công trình được tiếp nối, trích dẫn. Hãy viết tài liệu cho "chính mình trong tương lai". Ông cũng khuyên nhìn chương trình tiến sĩ rộng hơn một chuỗi paper, và làm những việc lĩnh vực cần, như các công cụ hay khóa học ông từng xây dựng, dù chúng không được tính trong các chỉ số thông thường; chính ông nói quan điểm này gây tranh cãi.

**Đọc khi nào.** Năm đầu nghiên cứu sinh, rồi đọc lại phần viết paper trước khi viết paper đầu tiên.

**Liên hệ trong giáo trình.** Mạch Introduction trong bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md). Một đóng góp cốt lõi trong bài [Xây câu chuyện của paper](../01-truoc-khi-viet/cau-chuyen.md). Deadline nội bộ trong bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md). Công bố code trong bài [Camera-ready, poster, code](../04-nop-va-sau-nop/camera-ready.md).

### Philip J. Guo, *The Ph.D. Grind: A Ph.D. Student Memoir* (2012)

- **Hình thức:** hồi ký dạng e-book miễn phí, khoảng 115 trang, phát hành năm 2012, sau khi Guo hoàn thành tiến sĩ khoa học máy tính ở Stanford (2006–2012). Bản tái bản nhân kỷ niệm ba năm (2015) có thêm ghi chú bên lề, viết khi ông là trợ lý giáo sư năm đầu.
- **Nguồn:** <https://pgbovine.net/PhD-memoir.htm>
- **Mức xác minh:** trung bình (nhiều bản tóm tắt thống nhất; tên các dự án cụ thể chưa được xác nhận nên không nêu ở đây).

**Ý chính.**

- **Một lời kể thẳng thắn theo từng năm.** Những năm đầu là các dự án không thành paper, cùng những chật vật để tìm sự phù hợp với người hướng dẫn và đề tài. Thành công về sau đến khi ông khởi xướng hướng riêng, xây công cụ hỗ trợ lập trình cho nghiên cứu.
- **"Main grinds" và "side grinds".** Guo phân biệt công việc luận án do người hướng dẫn dẫn dắt với các dự án phụ tự khởi xướng. Với ông, các dự án phụ về sau hóa ra rất quan trọng.
- **Bền bỉ tự định hướng.** Chủ đề xuyên suốt là chương trình tiến sĩ như một bài kiểm tra sự bền bỉ qua những lần bị từ chối, và giá trị của việc chủ động khởi xướng dự án và hợp tác.
- **Đây là hồi ký, không phải cẩm nang.** Guo viết ngay sau khi tốt nghiệp để giữ một góc nhìn chưa qua sàng lọc. Đó là trải nghiệm của một nghiên cứu sinh khoa học máy tính, không phải quy luật cho mọi người.

**Đọc khi nào.** Trước khi vào chương trình tiến sĩ, để có kỳ vọng thực tế; và khi nản, nhất là ngay sau một lần bị reject.

**Liên hệ trong giáo trình.** Bài [Khi bị reject](../04-nop-va-sau-nop/reject.md), và [Chương 7](../07-tinh-huong-kho/index.md).

### Matt Might, *The illustrated guide to a Ph.D.* (2010)

- **Hình thức:** tiểu luận bằng hình trên website của Might, năm 2010, khi ông ở University of Utah. Tác phẩm có giấy phép Creative Commons; bản in về sau được bán để gây quỹ cho nghiên cứu về bệnh di truyền.
- **Nguồn:** <https://matt.might.net/articles/phd-school-in-pictures/>
- **Mức xác minh:** cao (nhiều nguồn thống nhất).

**Ý chính.**

- **Vòng tròn tri thức.** Bài mở bằng câu "Imagine a circle that contains all of human knowledge" (hãy hình dung một vòng tròn chứa toàn bộ tri thức nhân loại). Học phổ thông, cử nhân rồi thạc sĩ thêm dần chuyên môn, như một chỗ phình ở rìa vòng tròn. Đọc paper nghiên cứu đưa người học tới biên giới.
- **Vết lõm.** Người làm nghiên cứu đẩy vào biên giới trong nhiều năm, cho tới khi tạo ra một vết lõm nhỏ. Vết lõm đó là luận án tiến sĩ.
- **Giữ bức tranh lớn.** Sau đó, thế giới trông khác đi, nhưng cần nhớ vết lõm rất nhỏ so với cả vòng tròn.

Đối với người làm paper, giáo trình rút ra một hệ quả (đây là cách đọc của giáo trình, không phải lời của Might): novelty của một paper thường là một cú đẩy nhỏ ở biên giới, không phải một cuộc lật đổ. Đặt kỳ vọng đúng như vậy giúp người mới không tê liệt vì đi tìm một ý tưởng "đủ lớn".

**Đọc khi nào.** Ngay buổi đầu, và mỗi khi thấy đóng góp của nhóm quá nhỏ bé.

**Liên hệ trong giáo trình.** Các kiểu đóng góp trong bài [Thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md), và phần đánh giá novelty trong bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md).

## Đọc thêm (chưa xác minh đầy đủ)

!!! note "Vì sao các mục này nằm riêng"
    Các bài dưới đây chắc chắn tồn tại và được nhắc nhiều trong cộng đồng, nhưng nội dung của chúng chưa được đối chiếu đủ để chú giải như các mục ở trên. Ở đây chỉ ghi những thông tin đã xác nhận. Trước khi dẫn bất kỳ ý nào từ các bài này, người đọc cần đọc bản gốc.

- **Sebastian Ruder, *10 Tips for Research and a PhD*** (blog, 22/5/2020). Sự tồn tại và ngày đăng đã được xác nhận, nhưng danh sách mười mẹo chưa được đọc. Các nguồn thứ cấp nhắc tới hai ý: chạy song song hai dự án, trong đó một dự án rủi ro cao và lợi ích lớn; và "chơi đường dài" qua các mối quan hệ hợp tác bền vững. Trang tổng hợp các bài lời khuyên của Ruder: <https://www.ruder.io/tag/advice/>
- **Neel Nanda, loạt bài *My Research Process*** (Alignment Forum, 2025), mở đầu bằng *How I Think About My Research Process: Explore, Understand, Distill*, cùng bài *Othello-GPT: Reflections on the Research Process* (LessWrong, 2023). Tiêu đề và thời điểm đã được xác nhận. Theo các bản tóm tắt, loạt bài mô tả quá trình nghiên cứu gồm ba giai đoạn khám phá, hiểu và chưng cất, nhưng nội dung chưa được đọc trực tiếp. <https://www.alignmentforum.org/s/5GT3yoYM9gRmMEKqL>
- **William T. Freeman, slide *How to write a good CVPR submission*** (bản 2014 và bản 2018) và ghi chú ***How To Do Research*** (MIT CSAIL). Sự tồn tại đã được xác nhận, nhưng nội dung chưa được đọc, trừ đoạn về việc khoanh vùng lỗi thay vì báo "không chạy" mà Huang dẫn lại (xem nhóm Lập kế hoạch và giữ tiến độ). Không nên nhầm với tài liệu *How to do Research At the MIT AI Lab* (1988), do David Chapman biên tập, có nhiều tác giả là sinh viên. <https://billf.mit.edu/sites/default/files/documents/cvprPapers.pdf>

## Lộ trình đọc gợi ý

Ba lộ trình dưới đây, mỗi lộ trình năm bài, dành cho ba hoàn cảnh thường gặp. Thứ tự trong mỗi lộ trình có chủ đích. Sau mỗi bài, nên dừng lại và áp dụng ít nhất một ý vào dự án đang làm trước khi đọc bài tiếp theo.

### Cho người mới bắt đầu nghiên cứu

1. **Might, *The illustrated guide to a Ph.D.*** Đặt kỳ vọng đúng về quy mô của một đóng góp, trước khi bắt đầu lo lắng về ý tưởng "đủ lớn".
2. **Karpathy, *A Survival Guide to a PhD*.** Một cái nhìn toàn cảnh về hành trình nghiên cứu sinh trong AI: chọn đề tài, viết paper, viết code, nói chuyện ở hội nghị.
3. **Keshav, *How to Read a Paper*.** Kỹ năng sẽ dùng hằng ngày trong những tháng đầu. Đọc xong, thử đọc ba paper theo đúng ba lượt.
4. **Hamming, *You and Your Research*.** Đọc khi đã có chút trải nghiệm, để câu hỏi "bài toán quan trọng nhất của lĩnh vực là gì" có ý nghĩa cụ thể.
5. **Alon, *How To Choose a Good Scientific Problem*.** Biến tham vọng của Hamming thành một lựa chọn vừa sức cho dự án đầu tiên, bằng hai trục khả thi và thú vị.

### Cho người sắp viết paper đầu tay

1. **Peyton Jones, *How to write a great research paper*.** Bắt đầu viết ngay, xác định một ý tưởng chính.
2. **Widom, *Tips for Writing Technical Papers*.** Năm câu hỏi cho Introduction, cũng là năm câu hỏi để kiểm tra dự án đã sẵn sàng chưa.
3. **Lipton và Steinhardt, *Troubling Trends in Machine Learning Scholarship*.** Đọc trước khi chốt thí nghiệm, để kịp bổ sung ablation và tách suy đoán khỏi kết luận.
4. **Hướng dẫn reviewer của hội nghị đích** (ARR cho NLP, ICLR hoặc NeurIPS cho ML, CVPR cho CV). Đọc như một reviewer sẽ đọc bản thảo của nhóm.
5. **Black, *Novelty in Science*.** Giúp nói rõ novelty của paper nằm ở đâu, nhất là khi phương pháp đơn giản.

### Cho người đang bế tắc

Bế tắc có nhiều dạng, và mỗi dạng cần một bài khác nhau. Năm bài dưới đây được sắp theo năm dạng thường gặp.

1. **Thí nghiệm không chạy và không rõ vì sao:** Karpathy, *A Recipe for Training Neural Networks*. Quay lại từ dữ liệu và các baseline "ngốc".
2. **Tuần nào cũng bận mà không thấy tiến độ:** Huang, *awesome-tips* (phần giữ tiến độ). Thu nhỏ bài toán, tìm proxy, mỗi lần chỉ đổi một thứ.
3. **Có quá nhiều nhánh việc, không biết làm gì trước:** Steinhardt, *Research as a Stochastic Decision Process*. Sắp xếp lại theo rủi ro và thông tin thu được.
4. **Muốn bỏ đề tài để chuyển sang một ý tưởng mới hấp dẫn hơn:** Schulman, *An Opinionated Guide to ML Research* (phần về đổi bài toán), đọc cùng phần kiểu thất bại trong *Research Taste Exercises* của Olah. Hai bài kéo về hai phía, và chính sự cân nhắc giữa chúng giúp ra quyết định tốt hơn.
5. **Nản về tinh thần:** bài nói TED của Alon về "đám mây", rồi đọc *The Ph.D. Grind* của Guo. Cả hai nhắc rằng giai đoạn mờ mịt là một phần bình thường của nghề.

## Bài tập

1. **Tóm tắt có đối chiếu.** Chọn ba bài trong tuyển tập, ưu tiên các bài ứng với giai đoạn hiện tại của dự án, đọc bản gốc và viết cho mỗi bài một bản tóm tắt dài một trang theo khung dưới đây. Sau đó so bản tóm tắt với phần chú giải trên trang này và ghi lại chỗ nào khác nhau.

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

2. **Tự chấm theo mười điều.** Với dự án đang làm, chấm mỗi điều trong phần Mười điều theo thang 0 (chưa làm), 1 (làm một phần) và 2 (đã thành thói quen), kèm một câu bằng chứng cho mỗi điểm. Chọn hai điều có điểm thấp nhất, mở bài tương ứng trong giáo trình, và viết một kế hoạch hành động cho hai tuần tới.
3. **Hòa giải hai lời khuyên trái ngược.** Chọn một cặp trong mục "Khi các lời khuyên có vẻ trái ngược nhau", hoặc tự tìm một cặp khác. Viết một đoạn khoảng nửa trang trả lời: trong hoàn cảnh cụ thể của dự án hiện tại, lời khuyên nào nên được ưu tiên, dưới điều kiện nào thì quyết định đó cần được xem lại, và lần rà soát tiếp theo vào khi nào.
4. **Phỏng vấn một nhà nghiên cứu.** Theo gợi ý trong ghi chú của Olah, phỏng vấn một nhà nghiên cứu có kinh nghiệm hơn (người hướng dẫn, postdoc, hoặc một tác giả từng gặp ở hội nghị) về cách họ chọn bài toán và cách họ biết khi nào nên dừng một hướng. So câu trả lời với Hamming, Schulman và Alon, và ghi lại một điều không có trong bất kỳ bài nào trên trang này.
5. **Tự xác minh một nguồn.** Chọn một bài trong mục Đọc thêm, đọc bản gốc, và viết ba tới năm ý chính kèm vị trí trong bài. So với các bản tóm tắt thứ cấp có thể tìm được trên mạng, rồi ghi lại tóm tắt nào đã diễn giải sai hoặc thêm ý mà tác giả không nói. Bài tập này luyện một thói quen mà mọi người làm nghiên cứu cần có: không dẫn một nguồn mà chưa tự đọc.

## Tài liệu tham khảo của bài

**Chọn bài toán và gu nghiên cứu**

- Richard W. Hamming. *You and Your Research*. 1986. Bài nói tại Bell Communications Research, bản ghi của J. F. Kaiser. <https://www.cs.virginia.edu/~robins/YouAndYourResearch.html>
- John Schulman. *An Opinionated Guide to ML Research*. 2020. Blog. <http://joschu.net/blog/opinionated-guide-ml-research.html>
- Uri Alon. *How To Choose a Good Scientific Problem*. Molecular Cell 35(6):726–728, 2009. Tiểu luận. <https://doi.org/10.1016/j.molcel.2009.09.013>
- Uri Alon. *Why truly innovative science demands a leap into the unknown*. Bài nói TED.
- Andrej Karpathy. *A Survival Guide to a PhD*. 2016. Blog. <https://karpathy.github.io/2016/09/07/phd/>
- Michael A. Nielsen. *Principles of Effective Research*. 2004. Tiểu luận, University of Queensland Technical Note 0404. <https://michaelnielsen.org/blog/principles-of-effective-research/>
- Richard S. Sutton. *The Bitter Lesson*. 2019. Tiểu luận. <http://www.incompleteideas.net/IncIdeas/BitterLesson.html>

**Đọc paper và đọc phản biện**

- S. Keshav. *How to Read a Paper*. ACM SIGCOMM Computer Communication Review 37(3):83–84, 2007. Bài ngắn. <https://doi.org/10.1145/1273445.1273458>
- Jason Eisner. *How to Read a Technical Paper*. 2009. Bài viết trên web. <https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html>
- Andrew Ng. Bài giảng về đọc paper và lời khuyên nghề nghiệp, Stanford CS230. 2018. Bài giảng có ghi hình; bản tóm tắt: <https://www.kdnuggets.com/2019/09/advice-building-machine-learning-career-research-papers-andrew-ng.html>
- Michael J. Black. *Novelty in Science: A guide for reviewers*. 2022. Blog. <https://medium.com/@black_51980/novelty-in-science-8f1fd1a0a143>
- ICLR Reviewer Guide, các phiên bản 2020–2027. Trang chính sách. <https://iclr.cc/Conferences/2026/ReviewerGuide>
- NeurIPS Reviewer Guidelines, các phiên bản 2021–2026. Trang chính sách. <https://neurips.cc/Conferences/2026/ReviewerGuidelines>
- CVPR Reviewer Guidelines, các phiên bản 2015–2025. Trang chính sách. <https://cvpr.thecvf.com/Conferences/2025/ReviewerGuidelines>
- Ban chương trình CVPR/ICCV. *How to Write Good Reviews for CVPR*. Slide tập huấn reviewer, dựa trên tài liệu ICCV 2019 và CVPR 2019. Bản sao: <https://kshah33.github.io/files/CVPRReviewerTutorial.pdf>

**Tìm ý tưởng và khoảng trống**

- Michael S. Bernstein. Stanford CS 197 *Computer Science Research*. Khóa học. <https://web.stanford.edu/class/cs197/>
- Charles O'Neill và cộng sự. *Sparks of Science: Hypothesis Generation Using Structured Paper Data*. arXiv:2504.12976, 2025. Paper.
- Chris Olah. *Research Taste Exercises*. 2021. Ghi chú trên blog. <https://colah.github.io/notes/taste/>

**Lập kế hoạch và giữ tiến độ**

- George H. Heilmeier. *Heilmeier Catechism*. DARPA, thập niên 1970. Bộ câu hỏi; bản chép lại: <https://murray.cds.caltech.edu/Heilmeier_Catechism>
- Jacob Steinhardt. *Research as a Stochastic Decision Process*. 2018. Tiểu luận. <https://cs.stanford.edu/~jsteinhardt/ResearchasaStochasticDecisionProcess.html>
- Gary Klein. *Performing a Project Premortem*. Harvard Business Review 85(9):18–19, 2007. Bài báo. <https://hbr.org/2007/09/performing-a-project-premortem>
- Jia-Bin Huang. *awesome-tips*. Từ khoảng 2021, cập nhật liên tục. Kho GitHub. <https://github.com/jbhuang0604/awesome-tips>

**Thực nghiệm**

- Andrej Karpathy. *A Recipe for Training Neural Networks*. 2019. Blog. <https://karpathy.github.io/2019/04/25/recipe/>
- Varun Godbole, George E. Dahl, Justin Gilmer, Christopher J. Shallue, Zachary Nado. *Deep Learning Tuning Playbook*. 2023. Tài liệu trên GitHub. <https://github.com/google-research/tuning_playbook>
- Peter Henderson, Riashat Islam, Philip Bachman, Joelle Pineau, Doina Precup, David Meger. *Deep Reinforcement Learning that Matters*. AAAI 2018. Paper. <https://arxiv.org/abs/1709.06560>
- Zachary C. Lipton, Jacob Steinhardt. *Troubling Trends in Machine Learning Scholarship*. 2018. Position paper. <https://arxiv.org/abs/1807.03341>
- Jason Wei. *Successful language model evals*. 2024. Blog. <https://jasonwei.net/blog/evals>

**Viết và trình bày**

- Simon Peyton Jones. *How to write a great research paper*. Bài giảng, từ đầu những năm 2000. <https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/>
- Jennifer Widom. *Tips for Writing Technical Papers*. 2006. Ghi chú trên web. <https://cs.stanford.edu/people/widom/paper-writing.html>
- Chris Olah, Shan Carter. *Research Debt*. Distill, 2017. Tiểu luận. <https://distill.pub/2017/research-debt/>

**Review và phản hồi**

- ACL Rolling Review. *Reviewer Guidelines* (bản cập nhật tháng 10/2025) và *Review Form*. Trang chính sách. <https://aclrollingreview.org/reviewerguidelines> ; <https://aclrollingreview.org/reviewform>
- Anna Rogers, Isabelle Augenstein. *What Can We Do to Improve Peer Review in NLP?* Findings of EMNLP 2020. Paper. <https://aclanthology.org/2020.findings-emnlp.112/>
- Sukannya Purkayastha, Zhuang Li, Anne Lauscher, Lizhen Qu, Iryna Gurevych. *LazyReview: A Dataset for Uncovering Lazy Thinking in NLP Peer Reviews*. arXiv:2504.11042, 2025. Paper.
- Devi Parikh, Dhruv Batra, Stefan Lee. *How we write rebuttals*. 2020. Blog. <https://deviparikh.medium.com/how-we-write-rebuttals-dc84742fece1>
- Laura Leal-Taixé, Torsten Sattler. *How to write a good review?* Tutorial tại CVPR 2020. <https://sites.google.com/view/making-reviews-great-again>

**Đời sống nghiên cứu sinh**

- Philip J. Guo. *The Ph.D. Grind: A Ph.D. Student Memoir*. 2012. Hồi ký dạng e-book. <https://pgbovine.net/PhD-memoir.htm>
- Matt Might. *The illustrated guide to a Ph.D.* 2010. Tiểu luận bằng hình. <https://matt.might.net/articles/phd-school-in-pictures/>

**Đọc thêm (chưa xác minh đầy đủ)**

- Sebastian Ruder. *10 Tips for Research and a PhD*. 2020. Blog. <https://www.ruder.io/tag/advice/>
- Neel Nanda. Loạt bài *My Research Process*. Alignment Forum, 2025. <https://www.alignmentforum.org/s/5GT3yoYM9gRmMEKqL>
- William T. Freeman. *How to write a good CVPR submission*. Slide, 2014 và 2018. <https://billf.mit.edu/sites/default/files/documents/cvprPapers.pdf>
