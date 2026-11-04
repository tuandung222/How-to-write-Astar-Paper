# Camera-ready, poster, code

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Chuyển một bản thảo từ chế độ review sang bản camera-ready theo đúng yêu cầu của hội nghị.
    - Thực hiện đầy đủ các cam kết đã đưa ra trong rebuttal và meta-review, cùng các thủ tục bản quyền và đăng ký.
    - Thiết kế poster và chuẩn bị bài nói cho các hình thức trình bày khác nhau (poster, spotlight, oral, video).
    - Phát hành code, dữ liệu và trang dự án ở mức người khác có thể tái hiện kết quả.
    - Lập kế hoạch quảng bá paper một cách hiệu quả và có trách nhiệm.

Nhận được email "Congratulations, your paper has been accepted" là một trong những khoảnh khắc đáng nhớ nhất của đời nghiên cứu. Tuy vậy, chính lúc này nhiều nhóm tác giả mắc những sai sót đáng tiếc vì tâm lý "đã xong". Bản camera-ready là phiên bản sẽ tồn tại vĩnh viễn trong proceedings và được trích dẫn trong nhiều năm; mọi lỗi còn sót lại sẽ đi theo paper mãi mãi. Thêm vào đó, các thủ tục như ký bản quyền, đăng ký hội nghị hay nộp video đều có deadline cứng, và bỏ lỡ một trong số đó có thể khiến paper không được đưa vào proceedings dù đã được chấp nhận.

Ngoài các thủ tục bắt buộc, giai đoạn sau khi accept còn quyết định tầm ảnh hưởng của paper. Hai paper có chất lượng tương đương có thể có số trích dẫn chênh lệch rất lớn, tùy thuộc vào việc code có được công bố và dễ dùng hay không, poster có thu hút người xem hay không, và kết quả có được giới thiệu tới đúng cộng đồng hay không. Bài này lần lượt trình bày bản camera-ready, poster, các hình thức trình bày khác, phát hành code cùng trang dự án, và cuối cùng là quảng bá.

## Bản camera-ready

Thời gian để nộp bản camera-ready thường chỉ vài tuần kể từ khi có kết quả. Trong khoảng thời gian đó, nhóm tác giả phải vừa hoàn thiện nội dung, vừa xử lý nhiều thủ tục hành chính. Các mục dưới đây trình bày từng việc theo thứ tự hợp lý để thực hiện.

### Chuyển template sang chế độ final

Mỗi template hội nghị có một tùy chọn để chuyển từ bản review (ẩn danh, có số dòng) sang bản final (hiện tên tác giả, bỏ số dòng). Tên tùy chọn khác nhau giữa các template, và đây là chỗ dễ nhầm khi nhóm tác giả từng làm việc với nhiều cộng đồng. Đoạn code dưới đây liệt kê cách chuyển ở một số template phổ biến; tên file style và tùy chọn chính xác thay đổi theo năm, nên luôn dùng author kit của năm được accept.

```latex
% CVPR / ICCV (author kit của CVF)
\usepackage[review]{cvpr}      % bản nộp
\usepackage{cvpr}              % bản camera-ready
\usepackage[pagenumbers]{cvpr} % bản arXiv, có số trang

% NeurIPS
\usepackage{neurips_20XX}            % bản nộp (ẩn danh)
\usepackage[final]{neurips_20XX}     % bản camera-ready
\usepackage[preprint]{neurips_20XX}  % bản arXiv

% ICML
\usepackage{icml20XX}                % bản nộp
\usepackage[accepted]{icml20XX}      % bản camera-ready

% ICLR: thêm lệnh sau vào preamble để hiện tên tác giả
\iclrfinalcopy

% ACL / EMNLP / NAACL (template ACL)
\usepackage[review]{acl}       % bản nộp ARR
\usepackage{acl}               % bản camera-ready (bỏ tùy chọn review)
\usepackage[preprint]{acl}     % bản arXiv
```

Sau khi chuyển, cần kiểm tra lại toàn bộ bố cục: khối tác giả thường chiếm thêm vài dòng ở trang đầu, khiến hình và bảng dịch chuyển, đôi khi đẩy nội dung vượt giới hạn trang. Đây là lý do nên chuyển template ngay từ những ngày đầu, chứ không đợi tới phút cuối.

### Tác giả, affiliation và đóng góp

Khối tác giả cần đầy đủ tên, affiliation và email theo đúng định dạng của template. Nếu có nhiều tác giả đóng góp ngang nhau, ký hiệu thường dùng là dấu sao kèm chú thích "Equal contribution"; tác giả liên hệ (corresponding author) cũng nên được đánh dấu. Một điểm cần lưu ý là nhiều hội nghị **không cho phép thay đổi danh sách tác giả** sau khi accept, hoặc chỉ cho phép trong trường hợp đặc biệt và phải xin phép PC. Vì vậy, danh sách tác giả nên được chốt cẩn thận từ lúc nộp. Cách viết tên cũng cần nhất quán qua các paper, đặc biệt với tên tiếng Việt có dấu: nên chọn một dạng cố định để các hệ thống như DBLP và Google Scholar gộp đúng hồ sơ.

### Acknowledgements

Phần lời cảm ơn, vốn bị bỏ ra ở bản nộp vì lý do ẩn danh, giờ được thêm vào. Đây là nơi ghi nhận nguồn tài trợ (thường kèm mã số grant theo yêu cầu của nhà tài trợ), tài trợ tài nguyên tính toán, những người đã góp ý hay hỗ trợ gán nhãn dữ liệu, và đôi khi cả reviewer ẩn danh. Một số nhà tài trợ quy định câu chữ chính xác của lời cảm ơn; cần kiểm tra trước để tránh phải sửa sau khi đã công bố.

### Thực hiện cam kết trong rebuttal và meta-review

Đây là phần quan trọng nhất về mặt nội dung, và cũng là phần thể hiện sự chính trực của nhóm tác giả. Mọi thay đổi đã hứa trong rebuttal, như thêm bảng so sánh, làm rõ một công thức hay bổ sung thảo luận về giới hạn, đều phải xuất hiện trong bản camera-ready. AC và PC có thể kiểm tra, và ở các hội nghị công khai review như ICLR, bất kỳ người đọc nào cũng có thể đối chiếu lời hứa với bản cuối. Ngoài các cam kết, nhóm tác giả nên xem lại toàn bộ review và meta-review để tiếp thu những góp ý hợp lý mà mình chưa kịp hứa. Ở ARR, meta-review thường tóm tắt những điểm cần sửa; đáp ứng chúng là kỳ vọng mặc định đối với bản camera-ready.

Một nguyên tắc cần nhớ là camera-ready không phải cơ hội để bổ sung một đóng góp lớn mới chưa được review. Các thay đổi nên giới hạn trong phạm vi đã thảo luận với reviewer, cộng với sửa lỗi và cải thiện trình bày.

### Giới hạn trang của bản cuối

Nhiều hội nghị cho phép thêm trang ở bản camera-ready để tác giả có chỗ thực hiện cam kết. Theo thông lệ những năm gần đây, các hội nghị dùng ARR như ACL, EMNLP, NAACL thường cho phép thêm một trang nội dung; ICML và NeurIPS cũng thường cho phép thêm một trang. Các hội nghị CV như CVPR và ICCV thường giữ nguyên giới hạn của bản nộp. Đây chỉ là xu hướng chung; giới hạn chính xác phải được kiểm tra trong hướng dẫn camera-ready của năm được accept. Nếu không có thêm trang, các cam kết phải được thực hiện bằng cách viết gọn lại hoặc chuyển chi tiết phụ sang appendix.

### Bản quyền và định dạng PDF

Mỗi hội nghị có thỏa thuận bản quyền hoặc giấy phép xuất bản riêng, thường được ký trực tuyến. CVPR và ICCV làm việc với IEEE, bên cạnh việc paper được đăng mở trên trang open access của CVF. ECCV xuất bản trong loạt sách LNCS của Springer, với mẫu chuyển giao bản quyền hoặc giấy phép của Springer. Các hội nghị *ACL đăng paper trên ACL Anthology, với thỏa thuận giấy phép của ACL. Ở ML, NeurIPS có proceedings riêng, ICML đăng trên Proceedings of Machine Learning Research (PMLR), còn ICLR đăng trên OpenReview; tác giả thường giữ bản quyền nhiều hơn so với các nhà xuất bản truyền thống. Chi tiết của từng thỏa thuận, ví dụ có được đăng lại bản cuối lên arXiv hay không và dưới giấy phép nào, cần đọc kỹ trước khi ký.

Về định dạng, hầu hết hội nghị yêu cầu mọi font được nhúng trong PDF, và một số năm có thêm công cụ kiểm tra tuân thủ, chẳng hạn IEEE PDF eXpress cho CVPR và ICCV. Lỗi font chưa nhúng thường đến từ các hình được xuất ra PDF bằng phần mềm vẽ đồ thị. Một lệnh đơn giản giúp kiểm tra:

```bash
# Cột "emb" phải là "yes" cho mọi font
pdffonts main.pdf
```

### Đăng ký, trình bày và cập nhật arXiv

Hầu như mọi hội nghị yêu cầu **ít nhất một tác giả đăng ký** tham dự để paper được đưa vào proceedings, nhiều nơi còn yêu cầu loại đăng ký dành riêng cho tác giả với mức phí khác với đăng ký sinh viên thông thường. Nhiều hội nghị cũng yêu cầu paper phải được trình bày, trực tiếp hoặc trực tuyến theo chính sách của năm đó. Với nhà nghiên cứu ở Việt Nam, việc dự hội nghị ở Bắc Mỹ hay châu Âu thường cần visa, và thời gian xét duyệt có thể kéo dài nhiều tháng; nên xin thư mời của hội nghị và nộp hồ sơ visa ngay khi có kết quả. Một số hội nghị có phương án trình bày trực tuyến hoặc tại địa điểm vệ tinh cho tác giả không xin được visa, nhưng chính sách này thay đổi theo năm.

Cuối cùng, nếu paper đã có bản arXiv, nên cập nhật bằng bản camera-ready và ghi chú hội nghị trong trường comment, ví dụ "Accepted to EMNLP 20XX". Điều này giúp người đọc biết paper đã qua peer review và giúp các hệ thống trích dẫn liên kết hai phiên bản.

Checklist dưới đây tổng hợp các việc của bản camera-ready.

- [ ] Template đã chuyển sang chế độ final; bố cục và số trang đã kiểm tra lại.
- [ ] Khối tác giả đầy đủ, đóng góp ngang nhau và tác giả liên hệ được đánh dấu.
- [ ] Acknowledgements đã thêm, đúng yêu cầu của nhà tài trợ.
- [ ] Mọi cam kết trong rebuttal đã thực hiện; góp ý hợp lý trong meta-review đã được tiếp thu.
- [ ] Link ẩn danh đã được thay bằng link thật (trang dự án, repository).
- [ ] Giới hạn trang của bản cuối đã kiểm tra theo hướng dẫn năm được accept.
- [ ] Thỏa thuận bản quyền đã ký; PDF đã nhúng đủ font và qua công cụ kiểm tra nếu có.
- [ ] Ít nhất một tác giả đã đăng ký; kế hoạch visa và trình bày đã có.
- [ ] Bản arXiv đã được cập nhật kèm ghi chú hội nghị.

## Poster

Ở hầu hết hội nghị lớn, phần lớn paper được trình bày dưới dạng poster, kể cả khi paper cũng được chọn trình bày miệng. Người học cần hiểu đúng bản chất của phiên poster: đó là một không gian đông đúc, nơi hàng trăm poster cạnh tranh sự chú ý của người qua lại. Một người xem thường đứng cách poster vài mét và chỉ dành vài giây để quyết định có dừng lại hay không. Vì vậy, **poster không phải là paper thu nhỏ**. Một poster chép nguyên các đoạn văn từ paper, với chữ nhỏ và nhiều bảng, sẽ bị lướt qua; một poster có một hình lớn và một câu thông điệp rõ ràng sẽ khiến người xem dừng lại và đặt câu hỏi.

Cấu trúc hiệu quả của một poster thường đi theo dòng chảy của câu chuyện trong paper, nhưng được rút gọn tối đa. Ở trên cùng là title lớn, tên tác giả và logo tổ chức. Tiếp theo là **vấn đề**, minh họa bằng một hình, thường là phiên bản phóng to của Figure 1. Kế đến là **insight**, viết thành một câu đủ lớn để đọc từ xa. Sau đó là **phương pháp**, dùng lại hình tổng quan phương pháp; rồi **kết quả chính**, chỉ một bảng hoặc biểu đồ nổi bật nhất thay vì mọi bảng trong paper. Cuối cùng là mã QR dẫn tới paper, code và trang dự án.

Kích thước và hướng của poster (dọc hay ngang) do hội nghị quy định và thay đổi theo năm, nên cần đọc hướng dẫn trước khi thiết kế. Với cộng đồng CV, hình ảnh và video kết quả là trung tâm, và nhiều nhóm mang theo máy tính bảng hay laptop để chạy demo. Với NLP, các ví dụ đầu vào và đầu ra cụ thể, chẳng hạn một câu hỏi và câu trả lời của mô hình trước và sau khi áp dụng phương pháp, thường thu hút hơn một bảng điểm. Với ML, một hình minh họa trực giác cho nguyên lý hoặc một thí nghiệm trên dữ liệu đơn giản thường hiệu quả hơn các công thức dài.

Bên cạnh poster, người trình bày cần chuẩn bị hai phiên bản lời giới thiệu: một **phiên bản 30 giây** cho người xem lướt qua, và một **phiên bản 3 phút** cho người dừng lại muốn hiểu sâu. Phiên bản 30 giây nên nêu vấn đề, insight và kết quả chính trong ba câu, ví dụ:

> *"Monocular 3D detectors fail badly on distant objects because depth errors grow with distance. We show that modeling depth uncertainty per object, not per pixel, fixes most of this failure. It improves long-range accuracy by a large margin with almost no extra cost."*

Phiên bản 3 phút đi qua poster từ trên xuống, dừng ở hình phương pháp và bảng kết quả, rồi kết thúc bằng một câu mời thảo luận về giới hạn hoặc hướng mở rộng.

## Oral, spotlight và video

Một tỉ lệ nhỏ paper được chọn trình bày miệng (oral) hoặc trình bày ngắn (spotlight, highlight), tùy cách gọi của từng hội nghị. Thời lượng thường rất ngắn, từ vài phút cho spotlight tới khoảng mười đến mười lăm phút cho oral, tùy hội nghị và năm. Thời lượng ngắn đặt ra một nguyên tắc: một bài nói chỉ nên truyền tải **một ý chính**. Người nghe không thể ghi nhớ mọi chi tiết của phương pháp; điều họ mang về là vấn đề, insight và một kết quả ấn tượng. Slide nên có nhiều hình, ít chữ, và mỗi slide chỉ phục vụ một ý.

Việc luyện tập có ý nghĩa quyết định, đặc biệt khi trình bày bằng ngôn ngữ không phải tiếng mẹ đẻ. Một bài nói được luyện nhiều lần, đúng thời gian, trước người nghe là đồng nghiệp không cùng dự án, sẽ phát hiện những chỗ giải thích chưa rõ và giúp người trình bày tự tin hơn khi trả lời câu hỏi. Nên chuẩn bị trước câu trả lời cho các câu hỏi dễ đoán, thường chính là những câu hỏi reviewer đã đặt ra.

Ngoài ra, nhiều hội nghị yêu cầu mọi paper, không chỉ oral, nộp **video thuyết trình ngắn** hoặc slide cho nền tảng trực tuyến của hội nghị. Deadline của video thường sớm hơn ngày diễn ra hội nghị vài tuần, nên cần làm sớm. Video tốt cũng là tài sản để quảng bá paper về sau.

## Phát hành code và trang dự án

Ở cả ba cộng đồng, paper có code công khai và dễ sử dụng thường được dùng và trích dẫn nhiều hơn, vì người khác có thể xây dựng trực tiếp trên kết quả. Hơn nữa, việc phát hành code còn là cách thực hiện cam kết về khả năng tái hiện đã nêu trong checklist lúc nộp bài. Tuy vậy, "công khai code" có nhiều mức độ: một repository chỉ chứa code huấn luyện không có hướng dẫn gần như vô dụng với người khác. Mục tiêu nên đặt là **người khác có thể tái hiện từng con số trong bảng kết quả chính** chỉ bằng cách làm theo README.

Một README tốt có cấu trúc rõ ràng, đi từ cài đặt tới tái hiện kết quả. Mẫu dưới đây có thể dùng làm khung.

````markdown
# Method Name: One-line Description

[Paper](link) | [Project Page](link) | [Checkpoints](link) | [Demo](link)

## Installation
```bash
conda env create -f environment.yml
conda activate method-name
```

## Data
Instructions to download and prepare each dataset, with expected directory layout.

## Pretrained Models
| Model | Dataset | Metric | Download |
|---|---|---|---|

## Reproducing the Main Results
```bash
# Table 1, row "Ours"
python eval.py --config configs/main.yaml --ckpt checkpoints/main.pt
```

## Training
Commands, hardware used, and expected training time.

## Citation
BibTeX entry of the paper.

## License
````

Bên cạnh README, cần chú ý một số điểm. File môi trường (`requirements.txt` hoặc `environment.yml`) phải ghi phiên bản cụ thể của thư viện, vì code chạy được hôm nay có thể hỏng sau vài tháng khi thư viện cập nhật. Checkpoint nên được lưu ở nơi ổn định như Hugging Face Hub. **License** phải được chọn có chủ đích: MIT và Apache-2.0 là các lựa chọn phổ biến, nhưng license của code phải tương thích với license của mã nguồn, mô hình và dữ liệu mà dự án sử dụng. Cuối cùng, mọi link ẩn danh trong paper phải được thay bằng link thật trước khi bản camera-ready được nộp.

Mỗi cộng đồng có thêm những kỳ vọng riêng. Ở CV, một **trang dự án** với video kết quả, hình so sánh trực quan, abstract và BibTeX gần như đã trở thành tiêu chuẩn; nhiều nhóm dùng các template trang dự án phổ biến trên GitHub Pages. Ở NLP, nếu paper giới thiệu bộ dữ liệu, việc phát hành dữ liệu kèm **dataset card** mô tả nguồn gốc, quy trình gán nhãn, license và các hạn chế là kỳ vọng mặc định; với mô hình, một **model card** tương tự cũng được khuyến khích. Ở ML, code tối giản minh họa phương pháp cốt lõi, kèm notebook tái hiện các thí nghiệm trên dữ liệu đơn giản, thường có giá trị hơn một hệ thống đồ sộ. Ở cả ba cộng đồng, một **demo trực tuyến**, ví dụ trên Hugging Face Spaces, giúp người khác thử phương pháp mà không cần cài đặt, và thường tăng mức độ lan tỏa đáng kể.

!!! warning "Phát hành có trách nhiệm"
    Trước khi phát hành dữ liệu hoặc mô hình, cần kiểm tra các vấn đề về quyền riêng tư (dữ liệu chứa thông tin cá nhân, khuôn mặt), license của dữ liệu gốc, và khả năng bị lạm dụng của mô hình. Các vấn đề này thường đã được nêu trong checklist lúc nộp bài; bản phát hành phải nhất quán với những gì đã khai báo.

## Quảng bá paper

Một paper tốt không tự đến được với người đọc. Mỗi năm có hàng chục nghìn paper AI mới, và phần lớn nhà nghiên cứu phát hiện paper mới qua mạng xã hội, các nhóm đọc paper, bản tin và lời giới thiệu từ đồng nghiệp. Quảng bá, vì vậy, không phải là việc phô trương mà là một phần của việc truyền đạt kết quả nghiên cứu.

Hình thức phổ biến nhất là một chuỗi bài ngắn trên mạng xã hội học thuật như X, Bluesky hay LinkedIn, gồm hình hoặc video teaser, một câu nêu vấn đề, một câu nêu insight, kết quả chính và link tới paper cùng code. Bài đăng hiệu quả viết cho người đọc không chuyên sâu về đúng chủ đề đó, giống như phần đầu của Introduction. Ngoài ra, có thể giới thiệu paper tại các nhóm đọc paper, seminar của các phòng thí nghiệm khác, hay đăng trang paper trên Hugging Face để kết nối paper với code, mô hình và dữ liệu. Một bài blog tiếng Việt giải thích paper bằng ngôn ngữ dễ hiểu vừa có ích cho cộng đồng nghiên cứu trong nước, vừa rèn luyện kỹ năng truyền đạt của chính người viết.

Quảng bá cũng cần có trách nhiệm. Bài đăng không nên phóng đại kết quả vượt quá những gì paper chứng minh, vì cộng đồng sẽ nhanh chóng phát hiện và điều đó ảnh hưởng tới uy tín lâu dài của nhóm. Về thời điểm, cần nhớ rằng một số hội nghị có quy định hạn chế quảng bá trong thời gian review; sau khi paper được accept, những hạn chế này thường không còn áp dụng.

## Tóm tắt

Giai đoạn sau khi accept vừa có các thủ tục bắt buộc, vừa quyết định tầm ảnh hưởng của paper. Bản camera-ready cần được chuyển sang chế độ final theo đúng template, có đầy đủ tác giả và lời cảm ơn, và quan trọng nhất là thực hiện mọi cam kết trong rebuttal và meta-review; giới hạn trang của bản cuối khác nhau giữa các hội nghị và phải được kiểm tra theo năm. Các thủ tục bản quyền, định dạng PDF, đăng ký và visa đều có deadline cứng và nên được xử lý ngay khi có kết quả. Poster là công cụ thu hút sự chú ý chứ không phải paper thu nhỏ, còn bài nói chỉ nên truyền tải một ý chính. Code nên được phát hành ở mức tái hiện được kết quả chính, kèm license và tài liệu phù hợp với kỳ vọng của từng cộng đồng, và việc quảng bá cần trung thực với những gì paper đã chứng minh.

## Bài tập

1. **Chuyển template.** Lấy bản thảo của một dự án ở chế độ review và chuyển sang chế độ final của chính template đó. Ghi lại mọi thay đổi về bố cục (số dòng tăng thêm ở trang đầu, hình bị dịch chuyển) và cách xử lý để giữ đúng giới hạn trang.
2. **Đối chiếu cam kết.** Chọn một paper ICLR đã được accept trên OpenReview. Liệt kê các cam kết tác giả đưa ra trong phần thảo luận, rồi mở bản camera-ready để kiểm tra từng cam kết đã được thực hiện hay chưa.
3. **Thiết kế poster.** Phác thảo poster cho một dự án của người học theo cấu trúc trong bài, với giới hạn tổng cộng không quá 300 từ. Viết phiên bản giới thiệu 30 giây bằng tiếng Anh và tập nói cho một đồng nghiệp không cùng lĩnh vực nghe.
4. **Kiểm tra khả năng tái hiện.** Viết README cho repository của dự án theo mẫu, rồi nhờ một đồng nghiệp chưa từng tham gia dự án làm theo README trên một máy mới. Ghi lại mọi chỗ họ gặp khó khăn và sửa README tương ứng.
