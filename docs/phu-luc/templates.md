# Template & mẫu câu

## Khung `main.tex` (CVPR-style)

```latex
\documentclass[10pt,twocolumn,letterpaper]{article}
\usepackage[review]{cvpr}      % [review] khi nộp; bỏ khi camera-ready
% (Tham khảo đúng tên file .sty / gói trong author kit năm đó)

\usepackage{graphicx,amsmath,amssymb,booktabs,multirow,xcolor,colortbl}
\usepackage{subcaption,xspace,pifont}
\usepackage[pagebackref,breaklinks,colorlinks]{hyperref}
\input{macros}

\def\paperID{*****}
\def\confName{CVPR}
\def\confYear{20XX}

\title{\method: A Short Title Stating the Key Idea}
\author{Anonymous CVPR submission\\Paper ID \paperID}

\begin{document}
\maketitle
\input{sec/0_abstract}
\input{sec/1_intro}
\input{sec/2_related}
\input{sec/3_method}
\input{sec/4_experiments}
\input{sec/5_conclusion}
{\small\bibliographystyle{ieeenat_fullname}\bibliography{main}}
\end{document}
```

## Khung Introduction (điền vào chỗ trống)

```text
P1  [Task] is a fundamental problem in [field], with applications in [A, B].
    [Một câu về tại sao nó khó / quan trọng ngay lúc này.]

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
    • [analysis / insight contribution] (Sec. 3.1)
    • [method contribution] (Sec. 3.2–3.4)
    • [empirical contribution] (Sec. 4)
```

## Mẫu câu theo chức năng

### Mở đầu & tầm quan trọng
- *"[Task] is a long-standing problem in computer vision."*
- *"[Task] has attracted growing attention due to its applications in …"*
- *"A key challenge in [task] is …"*

### Khoảng trống
- *"Despite recent progress, existing methods still struggle with …"*
- *"These approaches implicitly assume …, which rarely holds in practice."*
- *"While effective, this strategy incurs a substantial computational cost."*
- *"It remains unclear whether …"*

### Insight & phương pháp
- *"Our key insight is that …"*
- *"We hypothesize that … To verify this, we …"*
- *"To this end, we introduce …"*
- *"Unlike prior work that …, our method …"*
- *"At the core of [Name] is …"*

### Kết quả
- *"[Name] outperforms all prior methods by a clear margin."*
- *"The improvement is particularly pronounced for …, which supports our hypothesis that …"*
- *"Interestingly, we find that …"*
- *"We attribute this gain to …"*
- *"Removing [component] leads to a drop of X points, confirming its importance."*

### Thừa nhận & giới hạn
- *"We note that [baseline] achieves slightly better [metric], which we attribute to …"*
- *"A limitation of our approach is …"*
- *"Extending [Name] to … is an interesting direction for future work."*

### Rebuttal
- *"We thank the reviewer for the constructive feedback."*
- *"We respectfully disagree, and clarify that …"*
- *"As suggested, we conducted … (Tab. A). The results show …"*
- *"We apologize for the confusion; we will clarify this in Sec. X."*
- *"This is a great suggestion; we will include it in the final version."*
