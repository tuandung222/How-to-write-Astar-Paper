# Template & mẫu câu

Trang này cung cấp ba loại tài liệu để bắt đầu nhanh: khung `main.tex` cho ba hội nghị đại diện của ba cộng đồng (CVPR, ACL, NeurIPS), khung Introduction dạng điền chỗ trống, và tập mẫu câu tiếng Anh theo chức năng, bao gồm cả mẫu câu cho rebuttal và author response. Cần lưu ý hai điều khi sử dụng. Thứ nhất, các khung LaTeX ở đây chỉ minh họa *cấu trúc*; tên gói, tùy chọn và quy định định dạng thay đổi theo năm, nên luôn bắt đầu từ author kit chính thức của năm nộp và chỉ dùng khung này để đối chiếu cách tổ chức. Thứ hai, mẫu câu là điểm tựa chứ không phải công thức: một paper ghép từ các câu mẫu sẽ đọc rất máy móc. Cách dùng tốt là đọc mẫu câu để nhận ra *chức năng* của từng câu trong một đoạn văn, rồi viết câu của riêng nhóm tác giả cho chức năng đó. Bài [Tiếng Anh học thuật](../03-ky-thuat/van-phong.md) và [LaTeX & Overleaf](../03-ky-thuat/latex.md) giải thích chi tiết hơn.

## Tổ chức dự án LaTeX

Dù nộp ở hội nghị nào, nên tách nội dung khỏi định dạng: mỗi section là một file trong thư mục `sec/`, ký hiệu và tên phương pháp được định nghĩa bằng macro trong `macros.tex`, và file `main` chỉ chứa phần khai báo của template. Cách tổ chức này giúp nhiều người cùng sửa mà ít xung đột, và giúp việc chuyển template giữa các hội nghị (xem [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md)) chỉ mất vài giờ cho phần kỹ thuật. Ghi chú nội bộ giữa các tác giả nên dùng macro có thể tắt bằng một dòng, để không vô tình lọt vào bản nộp.

```latex
% macros.tex
\usepackage{xspace,xcolor}
\newcommand{\method}{\textsc{Name}\xspace}   % tên phương pháp, đổi một chỗ là đổi toàn bài
\newcommand{\vx}{\mathbf{x}}                 % ký hiệu dùng chung

% Ghi chú nội bộ: đổi \notestrue thành \notesfalse trước khi nộp
\newif\ifnotes \notestrue
\ifnotes
  \newcommand{\authorA}[1]{\textcolor{blue}{[A: #1]}}
  \newcommand{\authorB}[1]{\textcolor{teal}{[B: #1]}}
  \newcommand{\advisor}[1]{\textcolor{red}{[Advisor: #1]}}
\else
  \newcommand{\authorA}[1]{}
  \newcommand{\authorB}[1]{}
  \newcommand{\advisor}[1]{}
\fi
```

## Khung `main.tex`

### CVPR

Template của CVPR dùng định dạng hai cột, trích dẫn đánh số. ICCV dùng author kit gần như giống hệt (gói `iccv` thay cho `cvpr`), còn ECCV dùng định dạng Springer LNCS một cột với author kit riêng. Ở chế độ review, template tự ẩn thông tin tác giả và hiển thị Paper ID; vẫn cần mở bản PDF để kiểm tra lại.

```latex
\documentclass[10pt,twocolumn,letterpaper]{article}
\usepackage[review]{cvpr}      % bản nộp; bản cuối: \usepackage{cvpr}
% Tên gói và tùy chọn đổi theo năm: luôn dùng author kit chính thức của năm nộp

\usepackage{graphicx,amsmath,amssymb,booktabs,multirow}
\usepackage{colortbl,subcaption,pifont}
\input{macros}
\definecolor{cvprblue}{rgb}{0.21,0.49,0.74}
\usepackage[pagebackref,breaklinks,colorlinks,allcolors=cvprblue]{hyperref}

\def\paperID{*****}            % ID do hệ thống nộp bài cấp
\def\confName{CVPR}
\def\confYear{20XX}

\title{\method: A Short Title Stating the Key Idea}
\author{First Author\\Institution\\{\tt\small first@example.com}}

\begin{document}
\maketitle
\input{sec/0_abstract}
\input{sec/1_intro}
\input{sec/2_related}
\input{sec/3_method}
\input{sec/4_experiments}
\input{sec/5_conclusion}       % có thể gồm đoạn Limitations
{\small\bibliographystyle{ieeenat_fullname}\bibliography{main}}
\end{document}
% Supplementary thường là một PDF riêng, dùng cùng template
```

### ACL (qua ARR)

Template ACL dùng định dạng hai cột, trích dẫn tác giả–năm. Điểm cần chú ý nhất là vị trí của mục **Limitations** (bắt buộc) và **Ethics Statement** (tùy chọn): sau phần kết luận, trước tài liệu tham khảo, không tính vào giới hạn trang. Appendix đặt sau tài liệu tham khảo. Gói `inputenc` với `utf8` và `fontenc` với `T1` cần thiết để hiển thị đúng tên riêng có dấu, chẳng hạn tên tác giả hay ví dụ tiếng Việt.

```latex
\documentclass[11pt]{article}
\usepackage[review]{acl}       % bản nộp ARR; bản cuối: bỏ tùy chọn review
% acl.sty lấy từ kho template chính thức của ACL; kiểm tra phiên bản hiện hành trên trang ARR

\usepackage{times}
\usepackage{latexsym}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{microtype}
\usepackage{inconsolata}
\usepackage{graphicx,booktabs,amsmath}
\input{macros}

\title{A Short Title Stating the Key Idea}
\author{First Author \\ Affiliation \\ \texttt{first@example.com}}

\begin{document}
\maketitle
\begin{abstract}
...
\end{abstract}

\input{sec/1_intro}
\input{sec/2_related}
\input{sec/3_method}
\input{sec/4_experiments}
\input{sec/5_analysis}
\input{sec/6_conclusion}

\section*{Limitations}          % bắt buộc; không tính vào giới hạn trang
...

\section*{Ethics Statement}     % tùy chọn; nên có khi nghiên cứu có rủi ro
...

% \section*{Acknowledgments}    % chỉ thêm ở bản cuối

\bibliography{custom}           % kiểu trích dẫn tác giả–năm do template quy định

\appendix
\section{Annotation Guidelines}\label{app:guidelines}
...
\section{Implementation Details}\label{app:impl}
...
\end{document}
```

### NeurIPS

Template NeurIPS dùng định dạng một cột. Tên file style mang năm (ví dụ `neurips_2025.sty`) và các tùy chọn có thể khác giữa các năm. NeurIPS Paper Checklist được đặt ở cuối PDF, sau tài liệu tham khảo và appendix, theo đúng nội dung có trong template của năm nộp. Với ICML, cấu trúc tương tự nhưng template hai cột, gói `icml20XX` và tùy chọn `accepted` cho bản cuối; với ICLR, template một cột, gói `iclr20XX_conference` và lệnh `\iclrfinalcopy` cho bản cuối.

```latex
\documentclass{article}
\usepackage{neurips_20XX}              % bản nộp: ẩn danh, có số dòng
% \usepackage[preprint]{neurips_20XX}  % bản preprint không ẩn danh
% \usepackage[final]{neurips_20XX}     % bản cuối sau khi được chấp nhận
% Tên file và tùy chọn đổi theo năm; một số năm có tùy chọn riêng cho các track khác

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{hyperref,url,booktabs,amsfonts,amsmath,nicefrac,microtype}
\usepackage{amsthm,thmtools,thm-restate}
\input{macros}

\title{A Short Title Stating the Key Idea}
\author{First Author \\ Affiliation \\ \texttt{first@example.com}}  % tự ẩn ở bản nộp

\begin{document}
\maketitle
\begin{abstract}
...
\end{abstract}

\input{sec/1_intro}
\input{sec/2_related}
\input{sec/3_setup}
\input{sec/4_theory}           % phát biểu định lý; chứng minh để ở appendix
\input{sec/5_experiments}
\input{sec/6_conclusion}

\bibliographystyle{plainnat}   % NeurIPS cho phép nhiều kiểu trích dẫn, miễn là nhất quán
\bibliography{main}

\appendix
\section{Proofs}\label{app:proofs}
...
\section{Experimental Details and Compute Resources}\label{app:details}
...

\input{checklist}              % NeurIPS Paper Checklist lấy từ template năm nộp
\end{document}
```

## Khung Introduction điền chỗ trống

Khung dưới đây tương ứng với cấu trúc sáu đoạn được giảng ở bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md). Các chỗ trong ngoặc vuông là phần cần điền; chú thích tiếng Việt trong ngoặc vuông mô tả chức năng của câu. Khung thứ nhất phù hợp với paper phương pháp ở mọi cộng đồng; hai khung sau minh họa biến thể cho paper ML hướng phân tích và paper NLP hướng tài nguyên.

```text
Khung chung (paper phương pháp)

P1  [Task] is a fundamental problem in [field], with applications in [A, B].
    [Một câu về vì sao bài toán khó hoặc quan trọng ở thời điểm này.]

P2  Existing approaches can be broadly categorized into [two] groups.
    [Group 1] [does what] [cite], which [limitation].
    [Group 2] [does what] [cite], but [limitation].
    As shown in Fig. 1, [concrete evidence of failure].

P3  In this work, we observe that [key observation].
    This suggests that [implication].

P4  Based on this insight, we propose [Name], a [type] that [core idea].
    Specifically, [component 1] addresses [limitation 1], and
    [component 2] addresses [limitation 2].

P5  [Name] achieves [result] on [benchmarks], outperforming [best prior]
    by [margin]. Moreover, [generalization / efficiency].

P6  In summary, our contributions are:
    - [analysis / insight contribution] (Sec. 3)
    - [method contribution] (Sec. 4)
    - [empirical contribution] (Sec. 5)
```

```text
Biến thể ML (paper phân tích một hiện tượng)

P1  [Technique] is widely used in [settings], yet it remains unclear
    [why it works / when it fails].
    [Một câu về hệ quả thực tế của việc chưa hiểu cơ chế.]

P2  Prior work attributes this to [explanation A] [cite] or
    [explanation B] [cite]. However, [evidence that these are insufficient].

P3  We study this question in [controlled setting], where [quantity]
    can be measured directly. We find that [key finding], and we prove
    that under [assumption], [theoretical result].

P4  Guided by this analysis, we propose [Name], which [core idea].

P5  On [domain 1] and [domain 2], [Name] [result], and its gains
    track [quantity predicted by the analysis].

P6  Our contributions are: an empirical analysis (Sec. 3), a theoretical
    account (Sec. 4), and a method validated across domains (Sec. 5-6).
```

```text
Biến thể NLP (paper tài nguyên)

P1  [Task] in [language(s)] matters for [users / applications], but
    progress is limited by the lack of [resource property].

P2  Existing resources [are translated from English / cover only formal
    text / lack annotation of X] [cite], which [consequence for evaluation].

P3  We introduce [Name], a dataset of [size and content] in [language],
    collected by [procedure] and annotated by [annotators]
    (inter-annotator agreement: [value]).

P4  We benchmark [model families] on [Name] and find that [key finding],
    especially for [linguistic phenomenon].

P5  We release the data and code under [license] to support [goal].
```

## Mẫu câu theo chức năng

Các mẫu câu dưới đây được nhóm theo chức năng trong lập luận của paper. Mỗi nhóm có ví dụ từ nhiều cộng đồng; người viết nên thay phần trong ngoặc vuông bằng nội dung cụ thể và điều chỉnh để câu văn khớp với giọng của cả đoạn.

### Mở đầu và tầm quan trọng

- *"[Task] is a long-standing problem in [computer vision / natural language processing / machine learning]."*
- *"[Task] has attracted growing attention due to its applications in [A] and [B]."*
- *"A key challenge in [task] is [challenge]."*
- *"Despite its widespread use, [technique] remains poorly understood."*

### Khoảng trống

- *"Despite recent progress, existing methods still struggle with [specific case]."*
- *"These approaches implicitly assume [assumption], which rarely holds in practice."*
- *"While effective, this strategy incurs a substantial computational cost."*
- *"Most existing benchmarks are limited to English, leaving it unclear whether [finding] holds in other languages."*
- *"It remains unclear whether [phenomenon] is a property of [architecture] or of [training data]."*

### Insight và phương pháp

- *"Our key insight is that [insight]."*
- *"We hypothesize that [hypothesis]. To verify this, we [experiment]."*
- *"To this end, we introduce [Name], a [type] that [core idea]."*
- *"Unlike prior work that [approach], our method [difference]."*
- *"At the core of [Name] is [component], which [function]."*

### Lý thuyết

- *"We now formalize this intuition."*
- *"Under Assumption 1, the following holds."*
- *"Theorem 1 suggests that [quantity] should decrease as [factor] increases, which we verify empirically in Sec. 5."*
- *"Assumption 2 is standard in the analysis of [setting] [cite]; we discuss when it may be violated in Appendix B."*
- *"The proof is deferred to Appendix A; here we sketch the main idea."*

### Thiết lập thí nghiệm và báo cáo thống kê

- *"All results are averaged over [5] random seeds; we report the mean and standard deviation."*
- *"Shaded regions denote 95% confidence intervals computed by bootstrap."*
- *"Statistical significance is assessed with a paired bootstrap test (p < 0.05)."*
- *"For a fair comparison, all methods use the same backbone, training data, and compute budget."*
- *"We evaluate each model with [three] prompt templates and report the mean and range (prompts in Appendix C)."*

### Kết quả và phân tích

- *"[Name] outperforms all baselines on [k] of [n] datasets."*
- *"The improvement is particularly pronounced for [subset], which supports our hypothesis that [hypothesis]."*
- *"Interestingly, we find that [unexpected observation]."*
- *"We attribute this gain to [reason], as evidenced by [analysis]."*
- *"Removing [component] leads to a drop of [X] points, confirming its importance."*
- *"Manual inspection of 100 randomly sampled errors reveals three main categories (Table 5)."*

### Thừa nhận và giới hạn

- *"We note that [baseline] achieves slightly better [metric], which we attribute to [reason]."*
- *"A limitation of our approach is [limitation], which may affect [conclusion]."*
- *"Our experiments are restricted to [languages / domains]; whether the findings transfer to [other setting] remains an open question."*
- *"Extending [Name] to [setting] is an interesting direction for future work."*

### Dữ liệu và đạo đức

- *"The data were collected from [source] in accordance with its terms of use and are released under [license]."*
- *"We removed personally identifiable information using [procedure], followed by manual verification."*
- *"Annotators were paid [rate] per hour, above the local minimum wage."*
- *"We caution that [model / dataset] should not be used for [high-risk application] without further validation."*

## Mẫu câu cho rebuttal và author response

Giọng văn của phản hồi với reviewer nên lịch sự, cụ thể và dựa trên bằng chứng. Ba nguyên tắc chung là: trả lời trực tiếp ở câu đầu tiên, kèm bằng chứng ngay sau đó; nói rõ paper đã hoặc sẽ thay đổi ở đâu; và không cảm ơn quá mức hay xin lỗi quá mức. Nguyên lý đầy đủ xem ở bài [Rebuttal & thảo luận](../04-nop-va-sau-nop/rebuttal.md) và các mục tương ứng của Chương 6.

### Mở đầu và phản hồi chung

- *"We thank the reviewers for their constructive feedback."*
- *"We are encouraged that the reviewers found [aspect] [quoted praise] (R1, R3)."*
- *"We first address the concerns shared by multiple reviewers, followed by individual responses."*
- *"All changes in the revised PDF are highlighted in blue."*

### Đồng ý và bổ sung bằng chứng

- *"As suggested, we conducted [experiment] (Table R1). The results show that [finding]."*
- *"We agree that [point] is an important confound. We ran [control experiment], which shows [result]."*
- *"This is a helpful suggestion; we have added [content] to Sec. X."*

### Làm rõ hiểu lầm

- *"We apologize for the confusion; [clarification]. We have revised Sec. X to make this explicit."*
- *"We would like to clarify that [method] does not require [assumption]; [explanation]."*
- *"This comparison is reported in Table 3 (row 5); we have moved it to a more visible position."*

### Không đồng ý một cách tôn trọng

- *"We respectfully disagree, and clarify that [argument with evidence]."*
- *"While [reviewer's point] holds in general, in our setting [difference], as shown in [evidence]."*
- *"We understand the concern; however, [Method X] addresses a different problem ([explanation]), so a direct comparison would not be informative. We have added a discussion in Sec. 2."*

### Khi không thể thực hiện yêu cầu

- *"Training at this scale is beyond our compute budget; instead, we report [smaller-scale proxy], which suggests [trend]. We have added this limitation to Sec. 7."*
- *"The code of [Method X] is not publicly available; we re-implemented it following the paper and report the results with this caveat."*

### Thảo luận nhiều vòng trên OpenReview

- *"We have uploaded a revised version addressing the points above; the main changes are listed in the general response."*
- *"Thank you for the follow-up question. [Direct answer]."*
- *"Dear Reviewer X, as the discussion period ends in [two days], we would be grateful to know whether our response has addressed your concerns. We are happy to provide further clarification."*
- *"We thank the reviewer for engaging in the discussion and for raising the score."*

### Gửi meta-reviewer và revision notes (ARR)

- *"Summary for the meta-reviewer: the main concerns were [1] and [2]; we address them by [evidence 1] and [evidence 2]."*
- *"We note that the concern about [point] raised by R2 is addressed in Sec. X of the submitted version."*
- *"Meta-review point 1: [concern]. Change: [what was done] (Sec. X, Table Y)."*
- *"This point was not addressed because [reason]; we discuss it explicitly in the Limitations section."*

Mẫu response letter cho journal, với cấu trúc trích nhận xét, trả lời và chỉ vị trí thay đổi, được trình bày ở bài [AAAI, IJCAI, KDD và journal](../06-cong-dong/khac.md).
