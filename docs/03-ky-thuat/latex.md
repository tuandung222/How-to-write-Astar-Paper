# LaTeX & Overleaf

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Tìm và sử dụng đúng template chính thức của các hội nghị Computer Vision (CVPR, ICCV, ECCV), NLP (ACL, EMNLP, NAACL qua ARR) và Machine Learning (NeurIPS, ICML, ICLR), đồng thời chuyển đúng giữa chế độ nộp bài, preprint và camera-ready.
    - Tổ chức một project LaTeX nhiều file để nhiều đồng tác giả cùng làm việc và dễ chuyển paper giữa các hội nghị.
    - Viết file `macros.tex` để thống nhất ký hiệu, tên phương pháp và quản lý comment nội bộ bằng một công tắc bật/tắt.
    - Phân biệt các cách tiết kiệm chỗ hợp lệ với những thủ thuật vi phạm quy định định dạng.
    - Quản lý bibliography chính xác và kiểm tra file PDF một cách tự động trước khi nộp.

LaTeX là công cụ soạn thảo mặc định của cả ba cộng đồng mà giáo trình này hướng tới. Hầu như mọi hội nghị A\* trong Computer Vision, NLP và Machine Learning đều phát hành một bộ template LaTeX chính thức, và phần lớn paper được soạn trên Overleaf, một trình soạn thảo LaTeX trực tuyến cho phép nhiều người cùng sửa một tài liệu và tự lưu lịch sử phiên bản. Thành thạo LaTeX vì vậy không phải một kỹ năng "thêm cho đẹp" mà là điều kiện để paper được xem xét: một bản nộp sai định dạng có thể bị **desk reject**, tức là bị loại ngay ở khâu kiểm tra hành chính, trước khi tới tay bất kỳ reviewer nào.

Bên cạnh các quy định cứng, hình thức trình bày còn tác động ngầm tới cảm nhận của reviewer. Một paper có ký hiệu lúc in đậm lúc không, bảng kẻ lưới dày đặc, trích dẫn hiện thành "[?]" hay tham chiếu "Fig. ??" gửi đi tín hiệu rằng nhóm tác giả làm việc vội vàng, và reviewer khó tránh khỏi việc suy rộng sự cẩu thả ấy sang phần thí nghiệm. Ngược lại, một bản thảo sạch sẽ, nhất quán giúp reviewer dồn sự chú ý vào nội dung, đúng điều mà nhóm tác giả mong muốn.

Bài này không dạy LaTeX từ đầu; người học được giả định đã biết soạn một tài liệu cơ bản. Trọng tâm là những thực hành riêng của paper hội nghị: lấy template, tổ chức project, viết macro, tiết kiệm chỗ, quản lý tài liệu tham khảo và kiểm tra trước khi nộp. Nguyên tắc thiết kế hình và bảng đã được trình bày trong bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md); ở đây chúng ta chỉ bàn tới khía cạnh kỹ thuật của chúng.

## Lấy template chính thức

Mỗi hội nghị công bố một bộ tài liệu dành cho tác giả, thường gọi là *author kit* hay *style files*, trên trang Call for Papers hoặc Author Guidelines của năm đó. Bộ kit gồm file style (`.sty` hoặc `.cls`), một file `.tex` mẫu và thường kèm file định dạng tài liệu tham khảo (`.bst`). Template quy định khổ giấy, số cột, font, lề, cỡ chữ, cách đánh số dòng ở bản nộp và cách ẩn thông tin tác giả. Nói cách khác, template là "luật chơi" về hình thức, và mọi paper nộp vào cùng một hội nghị phải theo cùng một luật thì việc so sánh mới công bằng: hai paper cùng 8 trang phải chứa lượng nội dung tương đương nhau.

Có ba lưu ý chung cho mọi cộng đồng. Thứ nhất, kit phải được lấy từ nguồn chính thức của đúng năm nộp. Thư viện template của Overleaf rất tiện, nhưng các bản do người dùng tải lên có thể đã cũ hoặc bị chỉnh sửa; cách an toàn là tải kit chính thức rồi tự tạo project, hoặc ít nhất đối chiếu từng file với kit gốc. Thứ hai, tên file thường thay đổi theo năm, chẳng hạn file style của NeurIPS có dạng `neurips_20XX.sty` với `20XX` là năm tổ chức; giữ nguyên file của năm trước là lỗi phổ biến và rất dễ bị phát hiện. Thứ ba, hầu hết template có hai hoặc ba chế độ: chế độ *review* cho bản nộp (ẩn danh, có đánh số dòng để reviewer trích dẫn vị trí), chế độ *preprint* cho bản đăng arXiv (có tên tác giả, không mang dấu hiệu "đang được review") và chế độ *final* cho bản **camera-ready**, tức bản cuối cùng sau khi được chấp nhận, được đưa vào kỷ yếu. Chọn sai chế độ là nguyên nhân của rất nhiều sự cố, từ bản nộp lộ tên tác giả tới bản camera-ready vẫn còn số dòng.

Các đoạn mã dưới đây minh họa phần khai báo đầu file (preamble) điển hình của từng nhóm hội nghị trong những năm gần đây. Chúng giúp người học nhận ra cấu trúc chung; cú pháp chi tiết có thể thay đổi, và kit chính thức của năm nộp luôn là chuẩn cuối cùng.

### Computer Vision

CVPR và ICCV dùng chung một họ author kit do cộng đồng CVF duy trì, những năm gần đây được công bố qua trang web hội nghị và kho GitHub `cvpr-org/author-kit`. Paper trình bày hai cột, giới hạn điển hình là 8 trang nội dung không tính tài liệu tham khảo, còn supplementary material được nộp thành một file riêng. Ở bản nộp, tùy chọn `review` bật số dòng, in Paper ID do hệ thống cấp và ẩn tên tác giả; bỏ tùy chọn này sẽ cho bản camera-ready.

ECCV dùng định dạng Springer LNCS (*Lecture Notes in Computer Science*) với lớp tài liệu `llncs.cls`, trình bày một cột, kèm một gói bổ sung riêng của ECCV năm đó để thêm số dòng và Paper ID ở chế độ review. Vì định dạng một cột chứa ít chữ hơn trên mỗi trang, giới hạn trang của ECCV (điển hình khoảng 14 trang không tính tài liệu tham khảo) không thể so trực tiếp với CVPR. Khi chuyển một paper từ CVPR sang ECCV hay ngược lại, nhóm tác giả gần như luôn phải dàn lại toàn bộ hình và bảng chứ không chỉ đổi file style.

```latex
% ---- CVPR / ICCV (author kit chính thức) ----
\documentclass[10pt,twocolumn,letterpaper]{article}
\usepackage[review]{cvpr}          % bản nộp: ẩn danh, có số dòng, có Paper ID
%\usepackage{cvpr}                 % camera-ready
%\usepackage[pagenumbers]{cvpr}    % bản arXiv: có số trang, không có số dòng
% Với ICCV, gói style thường mang tên iccv: \usepackage[review]{iccv}

\def\paperID{*****}                % Paper ID do hệ thống nộp bài cấp
\def\confName{CVPR}
\def\confYear{20XX}
```

```latex
% ---- ECCV (Springer LNCS + gói riêng của ECCV) ----
\documentclass[runningheads]{llncs}
\usepackage[review,year=20XX,ID=*****]{eccv}   % cú pháp theo kit những năm gần đây
```

### NLP

Các hội nghị chính của Association for Computational Linguistics như ACL, EMNLP, NAACL và EACL nhận bài chủ yếu qua ACL Rolling Review (ARR) và dùng chung bộ style của ACL, được duy trì trên kho GitHub `acl-org/acl-style-files` và có bản sao chính thức trên Overleaf. Paper trình bày hai cột trên khổ A4; long paper điển hình có 8 trang nội dung, short paper 4 trang, tài liệu tham khảo không giới hạn. Một điểm riêng quan trọng là mục *Limitations* bắt buộc, đặt sau phần kết luận và không tính vào giới hạn trang; bản nộp thiếu mục này có thể bị desk reject. Gói `acl` nhận tùy chọn `review` để tạo bản ẩn danh có số dòng, thường được viết là `\usepackage[review]{acl}`; bản camera-ready dùng chế độ final (nạp gói không kèm tùy chọn).

Khác với CVPR, style của ACL dùng gói `natbib` với kiểu trích dẫn tác giả–năm, nên người viết phải phân biệt `\citet` (trích dẫn làm một thành phần của câu, hiển thị "Devlin et al. (2019)") với `\citep` (trích dẫn trong ngoặc, hiển thị "(Devlin et al., 2019)"). Đây là chi tiết nhỏ nhưng reviewer NLP nhận ra ngay khi người viết dùng lẫn lộn, và mục [Bibliography](#bibliography) bên dưới sẽ trở lại với nó.

```latex
% ---- ACL / EMNLP / NAACL / EACL (qua ARR) ----
\documentclass[11pt]{article}
\usepackage[review]{acl}       % bản nộp ARR: ẩn danh, có số dòng
%\usepackage{acl}              % camera-ready (chế độ final)
%\usepackage[preprint]{acl}    % bản preprint: có tên tác giả, có số trang
\usepackage{times}
\usepackage{latexsym}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{microtype}         % dàn chữ tinh hơn, thường tiết kiệm được vài dòng
```

### Machine Learning

Ba hội nghị ML lớn mỗi nơi có file style riêng, và tên file đều gắn với năm. NeurIPS dùng `neurips_20XX.sty` với bố cục một cột. Điểm cần nhớ là chế độ mặc định, tức khi nạp gói mà không truyền tùy chọn nào, chính là bản nộp ẩn danh có số dòng; tùy chọn `[preprint]` tạo bản có tên tác giả để đăng arXiv, còn `[final]` dành cho camera-ready. Những năm gần đây NeurIPS còn yêu cầu điền *paper checklist*, một loạt câu hỏi về claims, limitations, khả năng tái lập, tác động xã hội, ngay trong file LaTeX sau phần tài liệu tham khảo; checklist không tính vào giới hạn trang, nhưng thiếu nó có thể khiến paper bị loại.

ICML dùng `icml20XX.sty`, trình bày hai cột. Bản nộp nạp gói không kèm tùy chọn (`\usepackage{icml20XX}`), còn bản camera-ready dùng `\usepackage[accepted]{icml20XX}`; nếu quên tùy chọn này, bản cuối vẫn mang dòng chữ báo hiệu paper đang được review. ICML có các lệnh riêng cho tiêu đề, tên và đơn vị tác giả (`\icmltitle`, `\icmlauthor`, `\icmlaffiliation`…), nên phần thông tin tác giả không thể chép nguyên từ template khác sang.

ICLR dùng `iclr20XX_conference.sty`, trình bày một cột, nhận bài qua OpenReview. Bản nộp và bản cuối khác nhau ở lệnh `\iclrfinalcopy`: dòng này phải được comment lại khi nộp và chỉ bật lên khi paper đã được chấp nhận. Vì review của ICLR được công khai, bản PDF nộp lên sẽ được rất nhiều người ngoài reviewer đọc; đó là thêm một lý do để chăm chút hình thức ngay từ bản nộp.

Cả ba hội nghị đều dùng `natbib`. ICML và ICLR mặc định trích dẫn kiểu tác giả–năm; NeurIPS chấp nhận cả kiểu số lẫn kiểu tác giả–năm, miễn là nhất quán trong toàn paper.

```latex
% Ba preamble dưới đây thuộc ba file khác nhau.

% ---- NeurIPS ----
\documentclass{article}
\usepackage{neurips_20XX}              % mặc định: bản nộp ẩn danh, có số dòng
%\usepackage[preprint]{neurips_20XX}   % bản arXiv: có tên tác giả
%\usepackage[final]{neurips_20XX}      % camera-ready

% ---- ICML ----
\documentclass{article}
\usepackage{icml20XX}                  % bản nộp: ẩn danh
%\usepackage[accepted]{icml20XX}       % camera-ready

% ---- ICLR ----
\documentclass{article}
\usepackage{iclr20XX_conference,times}
%\iclrfinalcopy                        % chỉ bỏ comment khi làm camera-ready
```

### So sánh nhanh giữa các hội nghị

Sau khi đã đi qua từng cộng đồng, bảng dưới đây gom các khác biệt chính về mặt định dạng. Các con số là giá trị **điển hình của những năm gần đây**, chỉ để định hướng; giới hạn trang và phần bắt buộc có thể thay đổi mỗi năm, nên Call for Papers của năm nộp luôn là nguồn quyết định.

| Hội nghị | Bố cục | Giới hạn nội dung (điển hình) | Chuyển sang camera-ready | Kiểu trích dẫn | Điểm riêng đáng chú ý |
|---|---|---|---|---|---|
| CVPR / ICCV | 2 cột | 8 trang, không tính references | bỏ `[review]` | Số, ví dụ "[12]" | Supplementary là file riêng |
| ECCV | 1 cột (LNCS) | khoảng 14 trang, không tính references | tắt chế độ review của gói ECCV | Số | Theo quy chuẩn Springer |
| ACL / EMNLP / NAACL | 2 cột, A4 | 8 trang (long), 4 trang (short) | bỏ `[review]` | Tác giả–năm | Mục Limitations bắt buộc; Responsible NLP checklist trong form nộp |
| NeurIPS | 1 cột | khoảng 9 trang | thêm `[final]` | Số hoặc tác giả–năm | Paper checklist nằm trong PDF |
| ICML | 2 cột | khoảng 8 trang, bản cuối thường được thêm 1 trang | thêm `[accepted]` | Tác giả–năm | Impact statement (những năm gần đây) |
| ICLR | 1 cột | khoảng 9–10 trang tùy năm | bật `\iclrfinalcopy` | Tác giả–năm | Review công khai trên OpenReview |

Điều đáng rút ra từ bảng không phải là các con số mà là mức độ khác biệt: số cột, kiểu trích dẫn và các mục bắt buộc đều thay đổi khi đổi hội nghị, nên việc chuyển paper không bao giờ chỉ là thay một dòng `\usepackage`. Bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md) bàn kỹ hơn về khía cạnh nội dung của việc chuyển đổi này.

### Không được sửa template {#khong-sua-template}

Template được thiết kế để mọi paper có cùng "diện tích" trình bày. Bất kỳ thay đổi nào lên lề, cỡ chữ, font, khoảng cách dòng hay khoảng cách giữa các đoạn nhằm nhồi thêm nội dung đều phá vỡ sự công bằng đó, và các hội nghị trong cả ba cộng đồng đều nêu rõ rằng paper không tuân thủ định dạng có thể bị desk reject. Ban tổ chức có công cụ kiểm tra tự động, còn reviewer và area chair, những người đọc hàng chục paper cùng template, nhận ra một trang "đặc bất thường" chỉ sau vài giây.

!!! danger "Những thay đổi bị coi là sửa template"
    Đổi `\baselinestretch` hoặc `\linespread`; nạp gói `geometry` để thu hẹp lề; dùng `\small` cho toàn bộ thân bài; thu nhỏ font chú thích hình qua tùy chọn của gói `caption`; đặt lại `\textfloatsep`, `\abovedisplayskip` hay khoảng cách quanh tiêu đề mục; rải `\vspace` âm lớn quanh hình, bảng và tiêu đề. Một `\vspace{-2mm}` lẻ tẻ để sửa một khoảng trống bất thường thường không gây chú ý, nhưng khi trang giấy trông dày đặc hơn hẳn các paper khác thì đó đã là vi phạm, bất kể dùng thủ thuật gì.

## Cấu trúc project

Một paper hội nghị thường có từ ba tới tám người cùng sửa trong vài tuần cuối, với hàng chục hình, bảng và hàng trăm trích dẫn. Dồn tất cả vào một file `main.tex` dài hàng nghìn dòng gây ra hai vấn đề: các đồng tác giả liên tục ghi đè lên chỗ sửa của nhau, và việc tìm một đoạn văn cụ thể trở nên chậm chạp. Cách tổ chức phổ biến trong các nhóm nghiên cứu là tách mỗi mục thành một file và để `main.tex` chỉ làm nhiệm vụ "lắp ráp".

```text
paper/
├── main.tex               % preamble của hội nghị + \input các phần
├── macros.tex             % ký hiệu, lệnh tắt, comment nội bộ
├── sec/
│   ├── 0_abstract.tex
│   ├── 1_intro.tex
│   ├── 2_related.tex
│   ├── 3_method.tex
│   ├── 4_experiments.tex
│   ├── 5_conclusion.tex
│   └── 6_limitations.tex  % bắt buộc ở ARR; ở hội nghị khác có thể gộp vào Conclusion
├── tables/                % mỗi bảng một file .tex, ưu tiên sinh tự động
├── figures/               % .pdf cho hình vector, .jpg/.png cho ảnh chụp
├── scripts/               % script sinh bảng, hình từ kết quả thí nghiệm
├── appendix.tex           % appendix hoặc supplementary material
└── main.bib
```

Cách tổ chức này có ba lợi ích, mỗi lợi ích giải quyết một tình huống thực tế. Lợi ích thứ nhất là cộng tác: khi một người sửa `3_method.tex` và người khác sửa `4_experiments.tex`, xung đột gần như không xảy ra, kể cả khi project được đồng bộ qua Git. Lợi ích thứ hai là khả năng chuyển hội nghị: nếu paper bị từ chối ở CVPR và được nộp lại ECCV, hoặc chuyển từ NeurIPS sang một vòng ARR, nhóm tác giả chỉ cần tạo thêm một file `main_eccv.tex` hay `main_acl.tex` với preamble mới và giữ nguyên thư mục `sec/`. Lợi ích thứ ba, và thường bị đánh giá thấp nhất, là độ chính xác của số liệu: khi mỗi bảng là một file sinh ra từ kết quả thí nghiệm, lỗi gõ nhầm số khi chép tay từ log hay bảng tính bị loại bỏ hoàn toàn.

Đoạn script dưới đây minh họa ý tưởng sinh bảng tự động. Script đọc kết quả từ một file JSON, làm tròn, tự in đậm giá trị tốt nhất và ghi ra một file `.tex` dùng gói `booktabs`. Trong paper, bảng được chèn bằng `\input{tables/main_results}`.

```python
"""Sinh tables/main_results.tex từ results/main.json.

Định dạng results/main.json:
  {"Baseline A": {"Acc": 71.23, "F1": 65.10}, "Ours": {"Acc": 74.81, "F1": 69.02}}
Giả định: với mọi metric, giá trị càng cao càng tốt.
"""
import json
from pathlib import Path

METRICS = ["Acc", "F1"]

results = json.loads(Path("results/main.json").read_text())
# Làm tròn TRƯỚC khi so sánh, để số in đậm khớp với số hiển thị
rounded = {name: {m: round(r[m], 1) for m in METRICS} for name, r in results.items()}
best = {m: max(r[m] for r in rounded.values()) for m in METRICS}

lines = [
    r"\begin{tabular}{l" + "c" * len(METRICS) + "}",
    r"\toprule",
    "Method & " + " & ".join(METRICS) + r" \\",
    r"\midrule",
]
for name, r in rounded.items():
    cells = [rf"\textbf{{{r[m]:.1f}}}" if r[m] == best[m] else f"{r[m]:.1f}"
             for m in METRICS]
    lines.append(f"{name} & " + " & ".join(cells) + r" \\")
lines += [r"\bottomrule", r"\end{tabular}"]

Path("tables/main_results.tex").write_text("\n".join(lines) + "\n")
```

Nguyên tắc đi kèm là file bảng sinh tự động không bao giờ được sửa tay; nếu cần đổi định dạng thì sửa script rồi chạy lại. Khi đó, mỗi lần thí nghiệm được chạy lại vào phút chót, toàn bộ bảng trong paper được cập nhật chỉ bằng một lệnh, và phần chú thích (caption) cùng môi trường `table` vẫn nằm trong file `.tex` của mục tương ứng để người viết tiếp tục chỉnh câu chữ.

## File `macros.tex`

Sau cấu trúc thư mục, công cụ thứ hai giúp paper nhất quán là một file macro dùng chung. Ý tưởng rất đơn giản: mọi thứ có thể xuất hiện nhiều lần và có khả năng thay đổi, như tên phương pháp, ký hiệu toán, cách viết tham chiếu, đều được định nghĩa ở một chỗ. Khi nhóm tác giả quyết định đổi tên phương pháp ba ngày trước deadline, hay chuyển quy ước ký hiệu vector từ chữ đậm sang chữ thường có mũi tên, chỉ một dòng cần sửa. Điều này phục vụ trực tiếp nguyên tắc nhất quán thuật ngữ sẽ được bàn trong bài [Tiếng Anh học thuật](van-phong.md): sự nhất quán được bảo đảm bằng công cụ chứ không phụ thuộc vào trí nhớ của người viết.

```latex
% ============================ macros.tex ============================
\usepackage{xspace}
\usepackage{xcolor}

% ---- Tên phương pháp: đổi một chỗ, cả paper đổi theo
\newcommand{\method}{DepthX\xspace}

% ---- Ký hiệu toán: đặt tên theo vai trò, không theo hình thức
\newcommand{\vx}{\mathbf{x}}        % vector đầu vào
\newcommand{\vh}{\mathbf{h}}        % biểu diễn ẩn
\newcommand{\mW}{\mathbf{W}}        % ma trận trọng số
\newcommand{\R}{\mathbb{R}}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\data}{\mathcal{D}}     % tập dữ liệu

% ---- Tham chiếu chéo thống nhất
\newcommand{\figref}[1]{Fig.~\ref{#1}}
\newcommand{\tabref}[1]{Tab.~\ref{#1}}
\newcommand{\secref}[1]{Sec.~\ref{#1}}
\newcommand{\eqnref}[1]{Eq.~\eqref{#1}}

% ---- Viết tắt Latin: \providecommand không báo lỗi nếu template đã định nghĩa
\providecommand{\eg}{e.g.,\xspace}
\providecommand{\ie}{i.e.,\xspace}
\providecommand{\etal}{et al.\xspace}

% ---- Dấu tích/dấu chéo trong bảng so sánh (cần gói pifont)
\usepackage{pifont}
\newcommand{\cmark}{\ding{51}}
\newcommand{\xmark}{\ding{55}}

% ---- Comment nội bộ: đổi \commentstrue thành \commentsfalse trước khi nộp
\newif\ifcomments
\commentstrue
\ifcomments
  \newcommand{\authorA}[1]{{\color{blue}[A: #1]}}
  \newcommand{\authorB}[1]{{\color{teal}[B: #1]}}
  \newcommand{\advisor}[1]{{\color{red}[Advisor: #1]}}
  \newcommand{\todo}[1]{{\color{orange}[TODO: #1]}}
\else
  \newcommand{\authorA}[1]{}
  \newcommand{\authorB}[1]{}
  \newcommand{\advisor}[1]{}
  \newcommand{\todo}[1]{\PackageWarning{macros}{Unresolved TODO}}
\fi
```

Mỗi khối trong file trên có một lý do riêng. Macro `\method` kết hợp với `\xspace` để khoảng trắng sau tên phương pháp được giữ đúng, nhờ đó người viết gõ "`\method improves`" mà không phải nhớ thêm `{}`. Các ký hiệu toán được đặt tên theo vai trò (`\vx` là vector đầu vào) chứ không theo hình thức hiển thị, nên khi đổi quy ước trình bày, tên macro vẫn còn nguyên ý nghĩa. Các macro tham chiếu bảo đảm cả paper viết "Fig." hay "Figure" theo một kiểu duy nhất; paper CV thường viết tắt "Fig.", còn paper NLP và ML thường viết đầy đủ "Figure" và "Table", và chỉ cần sửa định nghĩa macro khi chuyển hội nghị. Với các viết tắt Latin, lệnh `\providecommand` được dùng thay cho `\newcommand` vì một số template, chẳng hạn author kit của CVPR, đã định nghĩa sẵn `\eg`, `\ie`, `\etal`; dùng `\newcommand` khi đó sẽ gây lỗi biên dịch.

Khối cuối cùng là các macro comment nội bộ, mỗi người một màu: `\authorA{}` và `\authorB{}` cho các đồng tác giả, `\advisor{}` cho người hướng dẫn, `\todo{}` cho việc còn dang dở. Toàn bộ được điều khiển bằng một công tắc duy nhất là `\commentstrue` hoặc `\commentsfalse`. Khi công tắc tắt, comment biến mất khỏi PDF, còn mỗi `\todo` sót lại sinh một cảnh báo "Unresolved TODO" trong file log, nhờ đó người viết có thể tìm ra chúng trước khi nộp thay vì để chúng âm thầm biến mất. Có hai lưu ý đi kèm. Một là gói `todonotes` cũng định nghĩa lệnh `\todo`; nếu project dùng gói này thì cần đổi tên macro (ví dụ `\mytodo`) hoặc dùng hẳn gói đó. Hai là comment bị tắt chỉ biến mất khỏi PDF chứ vẫn nằm trong mã nguồn; khi đăng arXiv, nơi mã nguồn `.tex` có thể được bất kỳ ai tải về, nhóm tác giả nên xóa comment bằng công cụ như `arxiv_latex_cleaner` hoặc kiểm tra thủ công, để những trao đổi nội bộ không bị công khai.

## Các gói hữu ích

Nguyên tắc chung khi chọn gói là nạp càng ít càng tốt và luôn kiểm tra xem template đã nạp sẵn những gì. Mỗi gói thêm vào là một nguồn xung đột tiềm tàng, và một số gói có thể vô tình thay đổi định dạng của template. Thứ tự nạp cũng quan trọng: `hyperref` thường được nạp gần cuối preamble, còn `cleveref` phải nạp sau `hyperref`. Một ví dụ xung đột hay gặp là gói cũ `subfigure`, vốn xuất hiện trong file mẫu của một số template những năm trước, không dùng chung được với gói hiện đại `subcaption`; khi gặp trường hợp này, project chỉ được chọn một trong hai.

Bảng sau tổng hợp các gói thường gặp trong paper của cả ba cộng đồng.

| Gói | Dùng để | Ghi chú |
|---|---|---|
| `booktabs` | Bảng ba đường kẻ ngang `\toprule`, `\midrule`, `\bottomrule` | Chuẩn mực trong cả ba cộng đồng; bỏ đường kẻ dọc |
| `multirow`, `xcolor` (tùy chọn `table`) | Gộp ô, tô nền hàng | Tô nền nhạt cho hàng của phương pháp đề xuất |
| `subcaption` | Hình con (a), (b), (c) | Không dùng chung với gói cũ `subfigure` |
| `xspace` | Macro không "nuốt" khoảng trắng | Dùng cho `\method`, `\eg`, `\ie` |
| `cleveref` | `\cref{}` tự thêm "Fig."/"Table" trước số | Nạp sau `hyperref`; author kit CVPR thường đã cấu hình |
| `siunitx` | Căn thẳng cột số theo dấu thập phân | Hữu ích cho bảng kết quả nhiều cột |
| `algorithm` + `algpseudocode`, hoặc `algorithm2e` | Pseudo-code | Chọn một họ, không trộn lẫn |
| `amssymb`, `pifont` | Ký hiệu toán, dấu ✓ ✗ trong bảng | Xem `\cmark`, `\xmark` trong `macros.tex` |
| `microtype` | Dàn chữ tinh hơn | Thường giảm số dòng tràn, hoàn toàn hợp lệ |
| `wrapfig` | Hình nhỏ có chữ bao quanh | Dùng hạn chế; dễ vỡ bố cục hai cột |

## Tiết kiệm chỗ: hợp lệ và không hợp lệ

Gần như mọi paper đều có lúc vượt giới hạn trang, thường là nửa trang tới một trang ở bản draft đầy đủ đầu tiên. Phản xạ tự nhiên là tìm thủ thuật LaTeX, nhưng cách hiệu quả nhất lại nằm ở câu chữ. Một bản draft điển hình chứa nhiều câu lặp lại ý đã nói, những đoạn chuyển tiếp dài dòng và những mô tả có thể thay bằng một tham chiếu tới hình. Cắt chúng vừa tiết kiệm chỗ vừa làm paper dễ đọc hơn, trong khi mọi thủ thuật định dạng chỉ tiết kiệm chỗ mà không cải thiện gì.

Theo thứ tự ưu tiên, các cách tiết kiệm chỗ hợp lệ gồm:

1. **Viết gọn trước, kỹ thuật sau.** Rà từng đoạn và hỏi câu nào có thể bỏ mà người đọc không mất thông tin. Các cụm như "It is worth noting that" hay "In this section, we will describe" thường bỏ được hoàn toàn.
2. **Xử lý dòng mồ côi.** Một đoạn văn có dòng cuối chỉ chứa một hai từ chiếm trọn một dòng; sửa vài từ trong đoạn để rút nó lên sẽ tiết kiệm cả dòng. Trong bố cục hai cột, mười đoạn như vậy tương đương gần một phần ba cột.
3. **Gộp bảng.** Nhiều bảng ablation nhỏ có thể gộp thành một bảng rộng (`table*`) với các nhóm cột con, vừa tiết kiệm chỗ vừa giúp người đọc so sánh.
4. **Thu nhỏ bảng trong giới hạn đọc được.** Dùng `\small` hoặc `\footnotesize` *bên trong* môi trường bảng là thực hành phổ biến; ép bảng bằng `\resizebox` tới mức chữ nhỏ hơn chú thích thì không nên.
5. **Sắp xếp lại hình.** Một hình phương pháp trải rộng hai cột (`figure*`) thường tiết kiệm chỗ hơn hai hình một cột rời rạc.
6. **Dùng `\paragraph{}` cho mục nhỏ.** Tiêu đề kiểu đoạn chiếm ít chỗ hơn `\subsection{}` và vẫn giúp người đọc định vị.
7. **Nạp `microtype`.** Gói này điều chỉnh khoảng cách ký tự ở mức gần như không nhận thấy và thường rút ngắn được vài dòng.
8. **Chuyển nội dung phụ sang appendix hoặc supplementary.** Chi tiết cài đặt, ablation phụ, chứng minh dài và kết quả định tính bổ sung là những ứng viên tự nhiên.

Điều cần nhớ ở mục cuối là phần chính của paper phải tự đứng được: reviewer không có nghĩa vụ đọc appendix, nên mọi bằng chứng cho claim chính phải nằm trong giới hạn trang. Cách đặt nội dung phụ cũng khác nhau giữa các cộng đồng. Ở CVPR, ICCV và ECCV, supplementary material thường là một file riêng, có khi với hạn nộp muộn hơn bản chính vài ngày. Ở ARR, appendix được đặt sau tài liệu tham khảo trong cùng file PDF. NeurIPS, ICML và ICLR cũng cho phép đặt appendix sau tài liệu tham khảo trong cùng file, và paper ML thường có appendix dài cho chứng minh và chi tiết thí nghiệm. Quy định cụ thể của từng năm, như appendix có được tách file hay không, cần được kiểm tra trong Call for Papers. Các thủ thuật không hợp lệ đã được liệt kê ở mục [Không được sửa template](#khong-sua-template).

## Bibliography

Danh sách tài liệu tham khảo là nơi reviewer kiểm tra hai điều: paper có bỏ sót công trình liên quan quan trọng nào không, và nhóm tác giả có làm việc cẩn thận không. Một mục tham khảo thiếu tên hội nghị, sai năm, viết tên tác giả lúc đầy đủ lúc viết tắt, hay trích bản arXiv cho một paper đã được công bố chính thức từ lâu, đều là dấu hiệu nhỏ nhưng tích lũy lại thành ấn tượng xấu. Vì vậy, nguồn lấy BibTeX quan trọng không kém nội dung được trích.

Về nguồn, DBLP là lựa chọn đáng tin cậy cho hầu hết hội nghị và tạp chí khoa học máy tính, với thông tin chuẩn hóa về tên, năm và venue. Với paper NLP, ACL Anthology cung cấp BibTeX chuẩn cho từng paper của ACL, EMNLP, NAACL, EACL và nhiều hội thảo liên quan, kèm định danh và đường dẫn ổn định; đây là nguồn được cộng đồng NLP ưu tiên. Trang kỷ yếu chính thức, như trang open access của CVF cho CVPR và ICCV hoặc trang proceedings của NeurIPS, ICML (PMLR) và ICLR (OpenReview), cũng cung cấp BibTeX. BibTeX từ Google Scholar tiện nhưng hay thiếu hoặc sai thông tin venue, nên chỉ dùng khi không còn nguồn nào khác và phải kiểm tra lại. Tuyệt đối không dùng BibTeX do LLM sinh ra, vì công cụ có thể bịa ra paper không tồn tại, như sẽ bàn trong bài [Dùng AI hỗ trợ](ai-tools.md). Để quản lý thư viện lâu dài, Zotero kết hợp tiện ích Better BibTeX giúp sinh key ổn định và xuất file `.bib` tự động.

Ngoài nguồn, có bốn việc cần làm cho mọi file `.bib`. Thứ nhất, thống nhất cách ghi tên venue: hoặc viết tắt toàn bộ ("CVPR", "ACL", "NeurIPS"), hoặc viết đầy đủ toàn bộ, không trộn lẫn. Thứ hai, thay bản arXiv bằng bản đã công bố mỗi khi có, vì reviewer xem việc trích dẫn bản preprint cho một paper đã được chấp nhận là thiếu cẩn thận. Thứ ba, bảo vệ chữ hoa trong tiêu đề bằng cặp ngoặc nhọn, vì nhiều file `.bst` tự chuyển tiêu đề sang dạng viết thường trừ chữ cái đầu, khiến "BERT" thành "Bert" và "3D" thành "3d". Thứ tư, loại bỏ mục trùng lặp, tức cùng một paper xuất hiện dưới hai key khác nhau, một lỗi rất hay gặp khi nhiều người cùng thêm tài liệu.

```bibtex
@inproceedings{he2016deep,
  title     = {Deep Residual Learning for Image Recognition},
  author    = {He, Kaiming and Zhang, Xiangyu and Ren, Shaoqing and Sun, Jian},
  booktitle = {CVPR},
  year      = {2016}
}

@inproceedings{devlin2019bert,
  title     = {{BERT}: Pre-training of Deep Bidirectional Transformers
               for Language Understanding},
  author    = {Devlin, Jacob and Chang, Ming-Wei and Lee, Kenton and Toutanova, Kristina},
  booktitle = {NAACL},
  year      = {2019}
}

@inproceedings{vaswani2017attention,
  title     = {Attention Is All You Need},
  author    = {Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob
               and Jones, Llion and Gomez, Aidan N. and Kaiser, {\L}ukasz
               and Polosukhin, Illia},
  booktitle = {NeurIPS},
  year      = {2017}
}
```

Cuối cùng là cách gọi lệnh trích dẫn, vốn phụ thuộc kiểu trích dẫn của hội nghị. Với kiểu số của CVPR, ICCV và ECCV, trích dẫn không nên làm chủ ngữ của câu; thay vào đó, tên tác giả đứng làm chủ ngữ và số trích dẫn theo sau. Với kiểu tác giả–năm của ACL, ICML, ICLR (và phần lớn paper NeurIPS), `\citet` tạo ra cụm "Tên et al. (năm)" đóng vai trò chủ ngữ một cách tự nhiên, còn `\citep` đặt trích dẫn trong ngoặc ở cuối mệnh đề. Ký tự `~` trước `\cite` là khoảng trắng không ngắt dòng, giữ cho số trích dẫn không bị đẩy xuống đầu dòng mới.

```latex
% Kiểu số (CVPR / ICCV / ECCV):
Residual connections~\cite{he2016deep} ease the optimization of deep networks.
He~\etal~\cite{he2016deep} introduce residual connections.

% Kiểu tác giả–năm (ACL, ICML, ICLR, phần lớn NeurIPS):
\citet{devlin2019bert} pre-train a bidirectional encoder.     % Devlin et al. (2019) pre-train ...
Pre-trained encoders are now widely used~\citep{devlin2019bert}.  % ... (Devlin et al., 2019).
```

## Kiểm tra tự động trước khi nộp

Những giờ cuối trước deadline là lúc mắt người kém tin cậy nhất: người viết đã đọc paper hàng chục lần và không còn nhìn thấy lỗi. Vì vậy, các kiểm tra mang tính cơ học nên được giao cho máy. Mỗi kiểm tra dưới đây tương ứng với một loại sự cố có thật, từ trích dẫn hiện "[?]" tới file bị hệ thống từ chối hoặc bản nộp vô tình lộ danh tính tác giả.

Kiểm tra đầu tiên là tham chiếu và trích dẫn chưa được giải quyết, thể hiện thành "??" hoặc "[?]" trong PDF và thành cảnh báo "undefined" trong file log. Kiểm tra thứ hai là font: mọi font phải được nhúng vào PDF, vì nhiều hệ thống nộp bài và nhà xuất bản từ chối file có font không nhúng, và font Type 3, thường sinh ra từ hình vẽ bằng matplotlib với cấu hình mặc định, hiển thị kém trên một số trình đọc. Lệnh `pdffonts` liệt kê từng font với cột `emb` cho biết đã nhúng hay chưa. Kiểm tra thứ ba là metadata: lệnh `pdfinfo` hiển thị các trường như Author, Creator của file PDF; chế độ review của template thường để trống các trường này, nhưng những hình PDF xuất từ PowerPoint, Keynote hay phần mềm đồ họa có thể mang theo tên người tạo, và đó là một cách lộ danh tính rất khó nhận ra bằng mắt. Nếu phát hiện, nhóm tác giả nên xuất lại hình từ một tài khoản trung tính hoặc xóa metadata bằng công cụ chuyên dụng rồi kiểm tra lại. Kiểm tra thứ tư là kích thước file và số trang: các hệ thống nộp bài đều đặt giới hạn dung lượng, và ảnh chụp chưa nén là nguyên nhân thường gặp nhất khiến file vượt giới hạn. Cuối cùng là kiểm tra nội dung văn bản: trích toàn bộ chữ trong PDF ra để tìm những dấu hiệu phá vỡ ẩn danh như đường dẫn GitHub, tên tổ chức, lời cảm ơn, và cả những đoạn chữ ẩn không mong muốn mà bài [Dùng AI hỗ trợ](ai-tools.md) sẽ bàn tới.

Với hình vẽ bằng matplotlib, cấu hình sau buộc thư viện nhúng font TrueType thay vì Type 3:

```python
import matplotlib
matplotlib.rcParams["pdf.fonttype"] = 42   # nhúng font TrueType, tránh Type 3
matplotlib.rcParams["ps.fonttype"] = 42
```

Script dưới đây gom các kiểm tra trên thành một lệnh duy nhất, chạy từ thư mục gốc của project sau khi đã biên dịch (ví dụ bằng `latexmk -pdf main.tex`). Kết quả không thay thế việc đọc lại, nhưng loại bỏ được những lỗi đáng tiếc nhất.

```bash
#!/usr/bin/env bash
# check_pdf.sh: kiểm tra bản PDF trước khi nộp. Cách dùng: ./check_pdf.sh main.pdf main.log
PDF=${1:-main.pdf}
LOG=${2:-main.log}

echo "== Số trang, kích thước, metadata =="
pdfinfo "$PDF" | grep -E "^(Pages|File size|Title|Author|Creator|Producer):"

echo "== Font chưa nhúng hoặc font Type 3 (không có dòng nào là tốt) =="
pdffonts "$PDF" | awk 'NR>2 && ($(NF-4)=="no" || /Type 3/)'

echo "== Tham chiếu/trích dẫn chưa giải quyết, TODO còn sót =="
grep -nE "undefined|multiply defined|Unresolved TODO" "$LOG" | head -20

echo "== Comment nội bộ còn trong mã nguồn =="
grep -rnE '\\(todo|authorA|authorB|advisor)\{' --include='*.tex' --exclude=macros.tex . | head -20

echo "== Dấu hiệu có thể phá vỡ ẩn danh =="
pdftotext "$PDF" - | grep -niE "github\.com|acknowledg|our (previous|prior) work" | head -20

echo "== Metadata của các hình PDF =="
for f in figures/*.pdf; do
  [ -e "$f" ] && pdfinfo "$f" 2>/dev/null | grep -E "^Author:" | sed "s|^|$f: |"
done
```

Nếu file vượt giới hạn dung lượng, có thể nén lại bằng Ghostscript, ví dụ `gs -sDEVICE=pdfwrite -dPDFSETTINGS=/printer -o small.pdf main.pdf`, rồi kiểm tra kỹ chất lượng hình sau khi nén, vì ảnh định tính bị mờ có thể làm hỏng chính lập luận mà hình muốn chứng minh. Danh sách kiểm tra đầy đủ về ẩn danh, supplementary và các mục bắt buộc của từng hội nghị được trình bày trong bài [Chuẩn bị nộp bài](../04-nop-va-sau-nop/submission.md).

## Tóm tắt

Phần kỹ thuật LaTeX của một paper xoay quanh hai mục tiêu: tuân thủ tuyệt đối định dạng của hội nghị và giữ cho bản thảo nhất quán trong suốt quá trình nhiều người cùng sửa. Mục tiêu thứ nhất đòi hỏi lấy đúng template chính thức của năm nộp, hiểu các chế độ review, preprint và camera-ready của từng cộng đồng, và không bao giờ can thiệp vào lề, font hay khoảng cách. Mục tiêu thứ hai được bảo đảm bằng công cụ: project chia nhiều file, bảng sinh tự động từ kết quả, file `macros.tex` với ký hiệu và comment nội bộ có công tắc bật/tắt, cùng một file `.bib` lấy từ nguồn chuẩn như DBLP và ACL Anthology. Khi phải tiết kiệm chỗ, câu chữ là nơi cắt trước tiên; và trước khi nộp, một script kiểm tra tự động giúp loại bỏ những lỗi cơ học mà mắt người dễ bỏ sót.

## Bài tập

1. Chọn một hội nghị mục tiêu cho dự án nghiên cứu hiện tại. Tải author kit chính thức của năm gần nhất, biên dịch file mẫu ở cả chế độ review và camera-ready (hoặc preprint), rồi liệt kê mọi khác biệt nhìn thấy được giữa hai bản PDF.
2. Tổ chức lại một bản thảo đang có (hoặc một báo cáo cũ) theo cấu trúc project ở trên, tạo `macros.tex` với ít nhất năm ký hiệu toán và bốn macro comment nội bộ. Kiểm tra rằng khi chuyển `\commentstrue` thành `\commentsfalse`, PDF không còn comment nào và file log báo đúng số `\todo` còn sót.
3. Lấy mười mục tham khảo trong một file `.bib` có sẵn, đối chiếu từng mục với DBLP hoặc ACL Anthology, sửa các lỗi về venue, năm, chữ hoa trong tiêu đề và thay bản arXiv bằng bản đã công bố nếu có.
4. Chạy script `check_pdf.sh` trên một PDF bất kỳ mà nhóm đã từng nộp hoặc đăng arXiv. Ghi lại mọi vấn đề phát hiện được và giải thích vì sao mỗi vấn đề có thể gây rắc rối ở khâu nộp bài.
