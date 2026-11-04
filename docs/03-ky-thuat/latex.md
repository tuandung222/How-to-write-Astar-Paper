# LaTeX & Overleaf cho paper CV

## Lấy template chính thức

- **CVPR / ICCV:** Author Kit trên trang hội nghị (repo GitHub `cvpr-org/author-kit` những năm gần đây). Dùng `\usepackage[review]{cvpr}` khi nộp (có số dòng, ẩn danh), `\usepackage{cvpr}` (final) khi camera-ready.
- **ECCV:** Springer **LNCS** (`llncs.cls`) + gói/hướng dẫn riêng của ECCV năm đó (có chế độ review với số dòng).
- Overleaf thường có template dựng sẵn — nhưng **luôn đối chiếu với kit chính thức của đúng năm**.

!!! danger "Không được chỉnh template"
    Thay đổi margin, font size, khoảng cách dòng, `\vspace` âm quá mức để "ăn gian" trang là lý do **desk reject**. Program Chairs có công cụ kiểm tra.

## Cấu trúc project khuyến nghị

```
paper/
├── main.tex              % chỉ \input các phần
├── macros.tex            % ký hiệu, lệnh tắt, todo
├── sec/
│   ├── 0_abstract.tex
│   ├── 1_intro.tex
│   ├── 2_related.tex
│   ├── 3_method.tex
│   ├── 4_experiments.tex
│   └── 5_conclusion.tex
├── tables/               % mỗi bảng 1 file .tex (có thể sinh tự động từ script)
├── figures/              % .pdf (vector), .jpg (ảnh)
├── supp.tex
└── main.bib
```

Lợi ích: nhiều người sửa song song ít xung đột; dễ chuyển CVPR ↔ ECCV (chỉ đổi `main.tex`); bảng sinh tự động từ kết quả → không gõ nhầm số.

## `macros.tex` mẫu

```latex
% ---- Tên phương pháp: đổi một chỗ, cả paper đổi theo
\newcommand{\method}{DepthX\xspace}

% ---- Ký hiệu
\newcommand{\vx}{\mathbf{x}}
\newcommand{\vq}{\mathbf{q}}
\newcommand{\mW}{\mathbf{W}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\loss}{\mathcal{L}}

% ---- Tham chiếu
\newcommand{\figref}[1]{Fig.~\ref{#1}}
\newcommand{\tabref}[1]{Tab.~\ref{#1}}
\newcommand{\secref}[1]{Sec.~\ref{#1}}
\newcommand{\eqnref}[1]{Eq.~\eqref{#1}}

% ---- Viết tắt Latin (CVPR kit cũng có sẵn \eg, \ie, \etal)
% \eg -> e.g., \ie -> i.e., \etal -> et al.

% ---- Comment của từng người (TẮT trước khi nộp!)
\newif\ifcomments \commentstrue   % \commentsfalse khi nộp
\ifcomments
  \newcommand{\dung}[1]{{\color{blue}[Dung: #1]}}
  \newcommand{\adv}[1]{{\color{red}[Advisor: #1]}}
  \newcommand{\todo}[1]{{\color{orange}[TODO: #1]}}
\else
  \newcommand{\dung}[1]{}\newcommand{\adv}[1]{}\newcommand{\todo}[1]{}
\fi
```

## Gói hữu ích

| Gói | Dùng để |
|---|---|
| `booktabs` | Bảng đẹp (`\toprule`…) |
| `multirow`, `colortbl`, `xcolor` | Bảng phức tạp, tô nền hàng |
| `subcaption` | Hình con (a)(b)(c) |
| `xspace` | Macro tên phương pháp không ăn khoảng trắng |
| `cleveref` | `\cref{}` tự thêm "Fig./Tab." (CVPR kit thường đã cấu hình) |
| `algorithm`, `algpseudocode` / `algorithm2e` | Pseudo-code |
| `pifont` / `amssymb` | ✓ ✗ trong bảng (`\cmark`, `\xmark`) |
| `wrapfig` | Hình chữ nhật nhỏ bọc chữ (dùng hạn chế) |

## Mẹo tiết kiệm chỗ (hợp lệ)

1. **Viết gọn trước, kỹ thuật sau.** Cắt câu thừa thường tiết kiệm nhiều hơn mọi mẹo LaTeX.
2. **Diệt "dòng mồ côi"**: đoạn văn có dòng cuối chỉ 1–2 từ → sửa câu để rút ngắn, tiết kiệm cả dòng.
3. Gộp bảng ablation nhỏ thành một `table*` nhiều cột con.
4. Dùng `\small` / `\footnotesize` cho bảng (giữ đọc được).
5. Hình phương pháp full-width (`figure*`) thay vì hai hình một cột.
6. Chuyển chi tiết implementation và ablation phụ sang supp.
7. `\paragraph{}` thay vì `\subsection{}` cho mục nhỏ.

## Bibliography

- Dùng **Zotero + Better BibTeX** hoặc DBLP để lấy BibTeX **chính xác** (DBLP rất đáng tin cho venue CS).
- Thống nhất kiểu tên venue: "CVPR" hay "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition" — chọn một kiểu và theo hết.
- Thay bản arXiv bằng bản đã công bố khi có.
- Kiểm tra viết hoa trong title: bọc `{ResNet}`, `{3D}`, `{NeRF}` để BibTeX không chuyển thành chữ thường.
- Xóa trùng lặp (cùng paper hai key).

## Kiểm tra tự động trước khi nộp

- **Không có warning `??`** (ref chưa định nghĩa) hoặc citation `[?]`.
- **Font được nhúng** hết: `pdffonts main.pdf` (cột `emb` = yes). Matplotlib cần `pdf.fonttype=42`.
- **Kích thước file** dưới giới hạn (nén ảnh JPEG nếu cần: `gs -sDEVICE=pdfwrite -dPDFSETTINGS=/printer ...` — kiểm tra lại chất lượng sau nén).
- **Metadata PDF** không chứa tên tác giả (`pdfinfo main.pdf`; Overleaf thường sạch, nhưng hình PDF xuất từ PowerPoint có thể chứa tên người tạo!).
- Spell check: Overleaf có sẵn; thêm `chktex`, hoặc copy text sang công cụ ngữ pháp.
