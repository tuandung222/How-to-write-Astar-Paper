# Method

Mục tiêu: người đọc **hiểu được ý tưởng**, **thấy được lý do** của từng thiết kế, và **tái hiện được** (kết hợp với supp + code).

## Cấu trúc khuyến nghị

```
3. Method
   3.1 Preliminaries / Problem formulation   ← ký hiệu, setup, baseline bạn xây trên
   3.2 Overview                               ← 1 đoạn + Figure pipeline
   3.3 Thành phần chính #1  (động lực → thiết kế → công thức)
   3.4 Thành phần chính #2
   3.5 Training objective / Implementation  ← loss tổng, inference
```

### 3.1 Preliminaries / Problem formulation

- Định nghĩa **input, output, ký hiệu** một lần, dùng nhất quán.
- Tóm tắt ngắn phương pháp nền (ví dụ DETR, diffusion, NeRF) mà bạn xây dựng lên — **chỉ những gì cần** để hiểu phần sau.
- Tách rõ **cái có sẵn** và **cái của bạn**. Reviewer rất ghét khi không biết đâu là đóng góp.

### 3.2 Overview + Figure phương pháp

Một đoạn mô tả luồng tổng thể, tham chiếu **Figure 2 (pipeline)**. Sau đoạn này, người đọc phải có "bản đồ" cho các tiểu mục sau.

### 3.3–3.4 Thành phần chính — khuôn "Tại sao → Cái gì → Như thế nào"

Mỗi thành phần:

1. **Động lực (Why):** vấn đề cụ thể nó giải quyết (liên hệ Intro).
2. **Thiết kế (What):** ý tưởng bằng lời.
3. **Công thức (How):** phương trình, chi tiết.
4. (Tùy chọn) **Thảo luận:** tại sao không dùng cách đơn giản hơn; liên hệ với phương pháp khác.

```latex
\subsection{Depth-Aware Query Refinement}
\label{sec:refine}
\noindent\textbf{Motivation.} As analyzed in Sec.~\ref{sec:analysis},
most long-range errors arise from depth ambiguity. A single depth
estimate per object cannot express this ambiguity.

\noindent\textbf{Formulation.} We instead represent the depth of the
$i$-th object as a categorical distribution over $K$ bins,
$\mathbf{p}_i \in \Delta^{K-1}$, predicted from its query
$\mathbf{q}_i \in \mathbb{R}^{C}$:
\begin{equation}
  \mathbf{p}_i = \mathrm{softmax}\big(\mathbf{W}_d \mathbf{q}_i\big).
  \label{eq:depth_dist}
\end{equation}
```

## Ký hiệu toán học — quy tắc vàng

| Quy tắc | Ví dụ |
|---|---|
| Vô hướng: thường nghiêng; vector: đậm thường; ma trận: đậm hoa | $x$, $\mathbf{x}$, $\mathbf{W}$ |
| Tập hợp: chữ hoa thư pháp | $\mathcal{D}$, $\mathcal{L}$ |
| Không dùng một ký hiệu cho hai nghĩa | Đừng dùng $N$ vừa là số ảnh vừa là số token |
| Định nghĩa **mọi** ký hiệu ngay lần đầu xuất hiện | "where $K$ is the number of depth bins" |
| Đánh số phương trình bạn sẽ tham chiếu | `\label{eq:...}` + `Eq.~\eqref{eq:...}` |
| Dùng macro cho ký hiệu lặp lại | `\newcommand{\vq}{\mathbf{q}}` |
| Kích thước tensor ghi rõ | $\mathbf{F} \in \mathbb{R}^{H\times W\times C}$ |

!!! tip "Bảng ký hiệu trong supp"
    Nếu có > 15 ký hiệu, đưa một **notation table** vào supplementary.

## Figure phương pháp (Figure 2)

- **Luồng trái → phải** (hoặc trên → dưới), nhất quán.
- **Màu có nghĩa:** ví dụ module của bạn màu cam, thành phần có sẵn màu xám; "frozen" có biểu tượng ❄️, "trainable" 🔥 (phổ biến trong paper gần đây).
- **Tên trong hình = tên trong chữ = tên trong ký hiệu.** Không gọi "Refine Module" trong hình và "DQR" trong chữ.
- Hiển thị **kích thước tensor** ở các điểm quan trọng.
- Caption: tóm tắt luồng, tham chiếu Section.

## Pseudo-code

Rất được ưa chuộng nếu phương pháp có vòng lặp/logic phức tạp (nhiều paper gần đây dùng pseudo-code kiểu PyTorch ngắn gọn). Dùng `algorithm2e` / `algorithmic`, hoặc listing Python ngắn. Có thể để trong supp.

## Lỗi Method hay gặp

- **Viết theo thứ tự code**, không theo thứ tự logic.
- **Thiếu động lực:** chỉ có "We use X" mà không có "because…".
- **Chi tiết implementation lẫn vào ý tưởng** (learning rate, batch size… nên ở Sec. 4 Implementation Details hoặc supp).
- **Công thức sai chiều / không khớp code.** Kiểm tra lại từng phương trình với code thật.
- **Không phân biệt train vs. inference.**
