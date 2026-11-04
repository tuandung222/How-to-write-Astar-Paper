# Tiếng Anh học thuật cho paper CV

Bạn không cần tiếng Anh "văn hoa". Bạn cần tiếng Anh **rõ ràng, chính xác, nhất quán**. Reviewer phần lớn cũng không phải người bản ngữ.

## 7 nguyên tắc

1. **Một ý một câu.** Câu > 30 từ → cân nhắc tách.
2. **Chủ ngữ – động từ gần nhau, ở đầu câu.** Người đọc cần biết "ai làm gì" ngay.
3. **Thông tin cũ trước, thông tin mới sau** (old → new). Mỗi câu nối với câu trước.
4. **Câu đầu đoạn = ý chính của đoạn** (topic sentence). Đọc riêng các câu đầu đoạn phải ra được dàn ý.
5. **Nhất quán thuật ngữ.** Đã gọi "query" thì đừng gọi "token" ở chỗ khác cho cùng một thứ. Đây *không phải* văn chương — lặp từ là tốt.
6. **Động từ mạnh thay cho danh từ hóa.** "*We analyze*" > "*We perform an analysis of*".
7. **Cụ thể thay cho chung chung.** "*improves AP by 2.1*" > "*significantly improves performance*".

## Thì (tense) và ngôi

| Ngữ cảnh | Thì | Ví dụ |
|---|---|---|
| Mô tả phương pháp của bạn, sự thật chung | Hiện tại đơn | *"Our model predicts…"*, *"Depth is ambiguous…"* |
| Mô tả công trình trước | Hiện tại (phổ biến ở CV) hoặc quá khứ | *"He et al. [12] propose…"* |
| Thí nghiệm bạn đã làm | Quá khứ hoặc hiện tại (nhất quán) | *"We trained…"* / *"We train…"* |
| Kết quả trong bảng | Hiện tại | *"Table 1 shows that…"* |

**Ngôi "we"** là chuẩn ở CV. Câu bị động dùng khi chủ thể không quan trọng.

## Lỗi người Việt hay mắc

| Lỗi | ❌ | ✅ |
|---|---|---|
| Thiếu/thừa mạo từ | *"We propose novel method for detection."* | *"We propose **a** novel method for detection."* |
| Danh từ đếm được số ít không mạo từ | *"Network takes image as input."* | *"**The** network takes **an** image as input."* |
| "the" với khái niệm chung | *"The deep learning has…"* | *"Deep learning has…"* |
| Số nhiều sai | *"many researches", "informations", "softwares"* | *"much research / many studies", "information", "software"* |
| Chia động từ sai số | *"The results shows…"* | *"The results show…"* |
| "Recently, …" mở đầu mọi đoạn | | Đa dạng hóa hoặc bỏ |
| Dịch word-by-word "nhằm mục đích" | *"In order to aim to improve…"* | *"To improve…"* |
| Lạm dụng "very", "extremely", "huge" | *"very huge improvement"* | *"a 5.2-point improvement"* |
| "Besides," / "Moreover," ở mọi câu | | Liên kết bằng logic nội dung; dùng ít liên từ |
| "can" thừa | *"Our method can achieve 40 AP."* | *"Our method achieves 40 AP."* |
| "et al" | *"Zhang et. al"* | *"Zhang et al."* (dấu chấm sau "al") |
| Khoảng trắng trước citation | *"methods[3]"* | *"methods~\cite{x}"* → "methods [3]" |
| Citation làm chủ ngữ | *"[3] proposes…"* | *"Zhang et al. [3] propose…"* |

## Cụm từ nên tránh (và thay bằng gì)

| Tránh | Vì sao | Thay bằng |
|---|---|---|
| *"novel"* (lặp lại nhiều) | Reviewer tự đánh giá novelty | Nói cụ thể cái gì mới |
| *"significantly"* (không có kiểm định) | Có nghĩa thống kê | *"substantially", "by a large margin (+X)"* |
| *"obviously", "clearly", "it is well known"* | Có thể khiến người đọc thấy bị coi thường | Bỏ, hoặc trích dẫn |
| *"state-of-the-art"* lặp mọi câu | Mòn | *"the strongest prior method"*, *"previous best"* |
| *"To the best of our knowledge, we are the first…"* | Rủi ro cao | Chỉ dùng khi đã search rất kỹ |
| *"In this paper, we…"* ở mọi đoạn | Thừa | Dùng 1 lần trong Intro |
| *"a lot of"* | Không trang trọng | *"many", "numerous"* |
| *"don't, can't, it's"* | Không trang trọng | *"do not", "cannot", "it is"* |

## Cụm từ hữu ích theo chức năng

**Nêu khoảng trống:**
*"However, these methods assume…, which rarely holds in…"* · *"Despite their success, … remain limited by…"* · *"A key challenge is…"*

**Nêu insight:**
*"Our key insight is that…"* · *"We observe that…"* · *"This motivates us to…"*

**Giới thiệu phương pháp:**
*"To this end, we propose…"* · *"At its core, X…"* · *"Specifically, …"*

**Bình luận kết quả:**
*"X consistently outperforms… across all settings"* · *"The gain is most pronounced for…"* · *"This suggests that…"* · *"We attribute this to…"*

**Thừa nhận hạn chế:**
*"One limitation of our approach is…"* · *"X is less effective when…"* · *"We leave … to future work."*

## Thực hành: "Reverse outline"

Sau khi có draft: viết ra **câu đầu của mỗi đoạn** thành một danh sách. Đọc danh sách đó:

- Có ra được câu chuyện logic không?
- Có đoạn nào không có ý chính rõ ràng?
- Có hai đoạn nói cùng một ý?
- Thứ tự có hợp lý?

Đây là kỹ thuật sửa bài hiệu quả nhất cho người mới.
