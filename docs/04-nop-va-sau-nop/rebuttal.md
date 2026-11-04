# Rebuttal

Ở CVPR/ICCV/ECCV, rebuttal thường là **1 trang PDF** theo template riêng (ECCV/ICCV có thể khác — kiểm tra năm đó), nộp trong khoảng **1 tuần**. Một trang rất ít — mỗi dòng phải có giá trị.

!!! tip "Rebuttal có thực sự thay đổi kết quả?"
    Với paper có điểm rất thấp đồng loạt, rebuttal hiếm khi cứu được. Nhưng với **paper borderline** (điểm lẫn lộn), rebuttal tốt thường là yếu tố quyết định — vì AC dựa vào nó để phân xử giữa các reviewer.

## Hiểu mục tiêu: bạn đang viết cho ai?

1. **AC** — người quyết định. AC muốn biết: các điểm yếu chính đã được giải quyết chưa? Reviewer nào hiểu sai?
2. **Reviewer tích cực** — cho họ "đạn" để bảo vệ paper trong thảo luận.
3. **Reviewer tiêu cực nhưng có thể thuyết phục** — giải quyết đúng mối lo cụ thể của họ.

Bạn **không** viết để "thắng tranh luận" với reviewer khó tính nhất.

## Quy trình 7 ngày

| Ngày | Việc |
|---|---|
| 1 | Đọc review. **Đừng trả lời ngay.** Bực bội là bình thường. Nghỉ. |
| 1–2 | Lập **bảng phân loại** mọi ý kiến (xem dưới). Họp nhóm. |
| 2–5 | Chạy **thí nghiệm bổ sung** khả thi (nếu hội nghị cho phép thêm kết quả — CV thường cho phép kết quả mới để trả lời câu hỏi của reviewer, nhưng **cấm** thay đổi lớn phương pháp; đọc quy định). |
| 4–6 | Viết bản nháp, nhờ co-author/advisor đọc. |
| 6–7 | Cắt gọn cho vừa 1 trang, kiểm tra ẩn danh, nộp sớm. |

## Bảng phân loại ý kiến reviewer

| ID | Reviewer | Ý kiến | Loại | Mức độ quan trọng | Cách trả lời | Ai làm |
|---|---|---|---|---|---|---|
| R1.1 | R1 (WR) | Thiếu so sánh với method X | Thí nghiệm thiếu | **Cao** (2 reviewer nêu) | Chạy X, thêm bảng nhỏ | Dung |
| R2.3 | R2 (BA) | Hiểu nhầm Eq.3 là … | Hiểu lầm | Trung bình | Giải thích + chỉ dòng L215 | |
| R3.2 | R3 (R) | "Novelty limited, giống Y" | Novelty | **Cao** | Bảng khác biệt với Y + kết quả cho thấy Y thất bại ở … | |
| R1.4 | R1 | Lỗi chính tả L340 | Nhỏ | Thấp | "Will fix." (gom chung) | |

Loại ý kiến:

- **Hiểu lầm** → làm rõ, trích dòng (*"As stated in L215–220, …"*). Nhẹ nhàng, nhận lỗi về cách viết: *"We apologize for the confusion and will clarify."*
- **Thí nghiệm thiếu** → nếu chạy được: đưa kết quả. Nếu không: giải thích vì sao + cam kết.
- **Novelty / quan điểm** → lập luận rõ ràng, có bằng chứng, tôn trọng.
- **Sai thực tế (reviewer sai)** → chỉ ra một cách lịch sự, có bằng chứng.
- **Nhỏ (typo, format)** → gom thành một câu cuối.

## Cấu trúc 1 trang

```latex
We thank all reviewers for their feedback. Reviewers find our analysis
\textbf{insightful} (R1, R3), the method \textbf{simple and effective}
(R2), and experiments \textbf{extensive} (R1, R2). We address the main
concerns below and will revise the paper accordingly.

\noindent\textbf{[R1, R3] Comparison with X~[a].}
We ran X with official code under our setting (Tab.~A).
Ours outperforms X by +1.9 AP; the gap widens at long range (+5.3),
consistent with our motivation (Sec.~3.1).
% (bảng nhỏ Tab. A)

\noindent\textbf{[R3] Novelty w.r.t. Y~[b].}
Y models depth uncertainty \emph{per pixel} for depth estimation, whereas
we model it \emph{per object} and refine it with height priors ...

\noindent\textbf{[R2] Clarification of Eq.~3.} ...

\noindent\textbf{Minor.} We will fix the typos (R1) and add the missing
references (R2, R3).
```

## Nguyên tắc vàng

1. **Mở đầu bằng điểm mạnh mà reviewer đã công nhận** (trích lại), ngắn gọn — nhắc AC rằng paper có giá trị.
2. **Ưu tiên mối lo được nhiều reviewer nêu** và mối lo của reviewer cho điểm thấp mà có thể thuyết phục.
3. **Gắn nhãn reviewer** ở mỗi mục: `[R1, R3]`.
4. **Bằng chứng > lời nói.** Một bảng nhỏ với số liệu mới mạnh hơn một đoạn lập luận.
5. **Cụ thể về sửa đổi:** *"We will add this to Sec. 4.3"*, không phải *"We will improve the writing."*
6. **Lịch sự tuyệt đối**, kể cả khi reviewer sai rõ ràng. Không mỉa mai, không "the reviewer clearly did not read the paper".
7. **Không hứa điều không làm được** trong camera-ready.
8. **Tuân thủ quy định:** không link ra ngoài (thường bị cấm), không vượt 1 trang, không lộ danh tính, không thay đổi template.
9. Nếu có review **vi phạm nghiêm trọng** (rõ ràng không đọc paper, xúc phạm, nghi dùng LLM sinh review vô nghĩa): dùng kênh **"confidential comment to AC"** nếu hội nghị có, với lời lẽ khách quan — không viết vào rebuttal chính.
