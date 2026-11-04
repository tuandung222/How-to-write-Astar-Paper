# Case study: Adam (ICLR 2015)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Giải thích vì sao một khung thuật toán (algorithm box) ngắn gọn, kèm giá trị mặc định, có thể trở thành trung tâm của cả một paper và là yếu tố quyết định mức độ được sử dụng.
    - Phân tích cách Adam định vị như sự kết hợp ưu điểm của hai phương pháp đã biết, và cách paper biến một danh sách tính chất thành các claim có bằng chứng.
    - Trình bày lại lý do cần hiệu chỉnh độ lệch (bias correction) bằng một phép tính cụ thể, và nhận ra cách paper kết hợp suy luận với thí nghiệm để biện minh cho một thành phần không hiển nhiên.
    - Rút ra bài học về độ chặt chẽ của phần lý thuyết từ việc chứng minh hội tụ của Adam về sau được chỉ ra là có lỗi.

Paper **"Adam: A Method for Stochastic Optimization"** của Diederik P. Kingma và Jimmy Ba được công bố tại ICLR 2015. Adam nhanh chóng trở thành một trong những optimizer được dùng phổ biến nhất trong deep learning, và paper thuộc nhóm được trích dẫn nhiều nhất trong lịch sử học máy. Nhiều người dùng Adam hằng ngày mà chưa từng mở paper gốc.

Với người học viết paper, Adam là một case study có giá trị theo hai chiều ngược nhau. Ở chiều tích cực, paper là mẫu mực của một *paper thuật toán*: toàn bộ đóng góp gói gọn trong một khung pseudo-code mà bất kỳ ai cũng cài đặt được trong vài phút, kèm giá trị mặc định dùng được ngay, một danh sách tính chất rõ ràng và các thí nghiệm khớp với từng tính chất. Ở chiều cảnh báo, phần chứng minh hội tụ của paper về sau được chỉ ra là có lỗi, và điều đó trở thành chủ đề của một paper khác được giải thưởng. Chúng ta sẽ xem xét cả hai chiều, vì cả hai đều dạy người viết những điều quan trọng.

## Bối cảnh ra đời

Vào đầu những năm 2010, huấn luyện mạng neural chủ yếu dùng stochastic gradient descent (SGD), thường kèm momentum. SGD đơn giản và hiệu quả, nhưng đòi hỏi tinh chỉnh learning rate cẩn thận, và cùng một learning rate cho mọi tham số không phải lúc nào cũng hợp lý khi các tham số có độ lớn gradient rất khác nhau.

Hai nhánh phương pháp thích nghi đã xuất hiện để giải quyết vấn đề này. **AdaGrad** điều chỉnh learning rate của từng tham số dựa trên tổng bình phương gradient trong quá khứ, hoạt động rất tốt với gradient thưa (sparse gradients), chẳng hạn khi đặc trưng đầu vào là bag-of-words. Nhưng vì tổng này chỉ tăng, learning rate hiệu dụng giảm dần về 0, không phù hợp khi mục tiêu thay đổi theo thời gian. **RMSProp** thay tổng bằng trung bình trượt mũ (exponential moving average) của bình phương gradient, nhờ đó thích nghi tốt với mục tiêu không dừng (non-stationary), như trong huấn luyện online hoặc các mạng hồi quy. Mỗi phương pháp mạnh ở một hoàn cảnh.

Đồng thời, quy mô bài toán tăng nhanh: dữ liệu lớn, số tham số lớn, gradient nhiễu do mini-batch. Người thực hành cần một phương pháp bậc một (chỉ dùng gradient), tốn ít bộ nhớ, và quan trọng nhất là ít phải tinh chỉnh. Adam ra đời để đáp ứng nhu cầu đó, và cách paper định vị bản thân phản ánh trực tiếp bối cảnh này.

## Câu chuyện một dòng

> Ước lượng moment bậc một (trung bình) và bậc hai (bình phương không trừ trung bình) của gradient bằng trung bình trượt mũ, hiệu chỉnh độ lệch gây ra bởi việc khởi tạo các ước lượng bằng 0, rồi dùng tỉ số giữa chúng làm bước cập nhật riêng cho từng tham số; kết quả là một thuật toán vài dòng, ít phải tinh chỉnh, kết hợp ưu điểm của AdaGrad với gradient thưa và của RMSProp với mục tiêu không dừng.

Tên Adam được lấy từ "adaptive moment estimation", tức chính ý tưởng cốt lõi. Câu chuyện có cấu trúc "kết hợp ưu điểm của A và B", một cấu trúc phổ biến nhưng cũng dễ bị reviewer chê là "chỉ là A + B". Adam tránh được nhận xét này nhờ hai điều. Thứ nhất, sự kết hợp không phải là ghép nối máy móc mà có một thành phần mới, bias correction, mà cả hai phương pháp gốc đều không có. Thứ hai, paper chứng minh rằng mỗi ưu điểm được kế thừa thật sự xuất hiện trong thực nghiệm. Người học có thể đối chiếu với thảo luận về ý tưởng dạng "A + B" ở bài [Tìm và thẩm định ý tưởng](../01-truoc-khi-viet/y-tuong.md).

## Phân tích câu chuyện và cấu trúc paper

### Abstract như một bảng thông số

Abstract của Adam đọc giống một bảng thông số kỹ thuật (spec sheet) hơn là một đoạn văn kể chuyện. Sau khi giới thiệu Adam là một thuật toán tối ưu bậc một dựa trên ước lượng thích nghi của các moment bậc thấp, abstract liệt kê một loạt tính chất: dễ cài đặt, hiệu quả tính toán, ít tốn bộ nhớ, bất biến với việc co giãn đường chéo của gradient, phù hợp với bài toán lớn về dữ liệu và tham số, phù hợp với mục tiêu không dừng và gradient nhiễu hoặc thưa, hyperparameter có ý nghĩa trực quan và thường ít cần tinh chỉnh. Tiếp theo là quan hệ với các thuật toán liên quan, kết quả lý thuyết về hội tụ, kết quả thực nghiệm, và cuối cùng là biến thể AdaMax.

Cấu trúc này phù hợp với loại đóng góp. Với một optimizer, câu hỏi của người đọc không phải "câu chuyện là gì" mà là "nó có những tính chất gì, và có nên dùng nó không". Danh sách tính chất trả lời trực tiếp câu hỏi đó. Điều quan trọng là mỗi tính chất trong danh sách đều được paper quay lại chứng minh hoặc minh họa ở phần sau, như chúng ta sẽ thấy.

### Algorithm 1: trung tâm của paper

Ngay đầu mục 2 của paper là Algorithm 1, và gần như toàn bộ đóng góp nằm trong khung đó. Dưới đây là thuật toán được trình bày lại theo cách diễn đạt của giáo trình; mọi phép toán trên vector đều thực hiện theo từng phần tử.

```text
Đầu vào: α (kích thước bước), β1, β2 ∈ [0, 1) (tốc độ suy giảm của các ước lượng moment),
         f(θ) (hàm mục tiêu ngẫu nhiên), θ0 (tham số khởi tạo)
m0 ← 0 ; v0 ← 0 ; t ← 0
lặp cho tới khi θ hội tụ:
    t  ← t + 1
    gt ← ∇θ ft(θ(t-1))                    # gradient trên mini-batch hiện tại
    mt ← β1 · m(t-1) + (1 − β1) · gt        # ước lượng moment bậc một
    vt ← β2 · v(t-1) + (1 − β2) · gt²       # ước lượng moment bậc hai
    m̂t ← mt / (1 − β1^t)                   # hiệu chỉnh độ lệch
    v̂t ← vt / (1 − β2^t)
    θt ← θ(t-1) − α · m̂t / (√v̂t + ε)
trả về θt
```

Chú thích của Algorithm 1 trong paper ghi rõ giá trị mặc định tốt cho các bài toán đã thử nghiệm: $\alpha = 0.001$, $\beta_1 = 0.9$, $\beta_2 = 0.999$, $\varepsilon = 10^{-8}$. Chi tiết này nhỏ về số chữ nhưng lớn về tác động. Một người đọc có thể sao chép thuật toán, dùng giá trị mặc định, và có ngay một optimizer chạy được, không cần đọc thêm gì. Các thư viện lớn như PyTorch về sau dùng đúng những giá trị này làm mặc định cho Adam.

Có ba đặc điểm khiến khung này hiệu quả. Thứ nhất, nó *tự đủ*: mọi ký hiệu đều được khai báo ở dòng đầu vào, mọi bước đều tường minh. Thứ hai, nó *ngắn*: khoảng mười dòng, nên người đọc có thể giữ toàn bộ thuật toán trong đầu. Thứ ba, nó *được đặt sớm*: người đọc gặp thuật toán trước khi gặp phân tích, nên mọi phân tích sau đó đều có điểm neo cụ thể. Paper còn ghi chú rằng có thể sắp xếp lại thứ tự tính toán để hiệu quả hơn, nhưng giữ phiên bản dễ đọc trong khung chính. Lựa chọn ưu tiên sự rõ ràng trong khung thuật toán và để tối ưu hóa ra văn bản là một bài học riêng (xem phần pseudo-code ở bài [Method](../02-viet-tung-phan/method.md)).

### Danh sách tính chất và lý do của chúng

Sau thuật toán, paper dành một mục để phân tích quy tắc cập nhật. Đại lượng then chốt là bước cập nhật hiệu dụng $\Delta_t = \alpha \cdot \hat m_t / \sqrt{\hat v_t}$ (bỏ qua $\varepsilon$). Từ đó, paper suy ra các tính chất đã hứa trong abstract.

- **Kích thước bước bị chặn xấp xỉ bởi $\alpha$.** Trong các trường hợp thông thường, độ lớn của $\Delta_t$ xấp xỉ không vượt quá $\alpha$. Paper diễn giải điều này như một dạng "trust region" (vùng tin cậy) quanh tham số hiện tại: $\alpha$ cho biết trước cỡ thay đổi tối đa của tham số trong một bước. Nhờ vậy, việc chọn $\alpha$ trở nên trực quan: nếu biết tham số cần thay đổi trong khoảng nào, có thể chọn $\alpha$ tương ứng.
- **Bất biến với việc co giãn đường chéo gradient.** Nếu nhân gradient với một hằng số $c$, thì $\hat m_t$ nhân với $c$ và $\sqrt{\hat v_t}$ nhân với $|c|$; hai hệ số triệt tiêu nhau. Bước cập nhật không phụ thuộc vào thang đo của gradient, một tính chất có giá trị thực tế lớn khi các layer có gradient với độ lớn chênh lệch nhau.
- **Tự động giảm bước khi tín hiệu yếu.** Paper gọi tỉ số $\hat m_t / \sqrt{\hat v_t}$ là "tỉ số tín hiệu trên nhiễu" (signal-to-noise ratio). Khi gradient dao động mạnh quanh một giá trị trung bình nhỏ, tỉ số này nhỏ, bước cập nhật nhỏ lại; đây là một dạng tự động giảm learning rate (annealing) khi tới gần điểm tối ưu.
- **Phù hợp với bài toán lớn.** Adam chỉ cần lưu hai vector cùng kích thước với tham số, và mọi phép toán đều theo từng phần tử.

Điểm đáng học là mỗi tính chất được nêu kèm một lập luận ngắn, thường chỉ vài dòng toán sơ cấp. Người đọc không phải tin vào lời khẳng định; họ tự kiểm tra được.

### Bias correction: biện minh cho thành phần không hiển nhiên

Thành phần ít hiển nhiên nhất của Adam là hai dòng hiệu chỉnh độ lệch. Một người đọc lướt có thể nghĩ đó là chi tiết kỹ thuật thừa. Paper dành riêng một mục để giải thích vì sao nó cần thiết, và đây là một ví dụ mẫu mực về cách biện minh cho một thành phần mà reviewer có thể đề nghị bỏ.

Lập luận bắt đầu từ việc khởi tạo $v_0 = 0$. Khai triển công thức đệ quy cho thấy $v_t = (1-\beta_2) \sum_{i=1}^{t} \beta_2^{\,t-i} g_i^2$. Nếu phân phối gradient dừng, tức $\mathbb{E}[g_i^2]$ như nhau với mọi $i$, thì

$$
\mathbb{E}[v_t] = \mathbb{E}[g_t^2] \cdot (1-\beta_2) \sum_{i=1}^{t} \beta_2^{\,t-i} = \mathbb{E}[g_t^2] \cdot (1 - \beta_2^{\,t}) .
$$

Như vậy $v_t$ bị lệch về phía 0 một hệ số $(1-\beta_2^{\,t})$, và chia cho hệ số này sẽ khử độ lệch. Lập luận tương tự áp dụng cho $m_t$. Khi gradient không dừng, paper lập luận rằng sai số còn lại nhỏ nếu chọn $\beta$ phù hợp.

Để thấy vì sao độ lệch này quan trọng trong thực tế, hãy tính bước đầu tiên ($t = 1$) với gradient $g$ và giá trị mặc định. Không hiệu chỉnh, $m_1 = 0.1\,g$ và $v_1 = 0.001\,g^2$, nên $\sqrt{v_1} \approx 0.0316\,|g|$ và tỉ số $m_1/\sqrt{v_1} \approx 3.16$ lần dấu của $g$: bước đầu tiên lớn gấp hơn ba lần $\alpha$. Nếu $\beta_2 = 0.9999$, tỉ số này lên tới 10. Có hiệu chỉnh, $\hat m_1 = g$ và $\hat v_1 = g^2$, tỉ số bằng đúng dấu của $g$, và bước đầu tiên có độ lớn đúng bằng $\alpha$. Phép tính cho thấy vấn đề càng nặng khi $\beta_2$ càng gần 1. Paper chỉ ra mâu thuẫn ở đây: với gradient thưa, người dùng *cần* $\beta_2$ gần 1 để ước lượng moment bậc hai đáng tin cậy (phải lấy trung bình trên nhiều bước), nhưng chính trong trường hợp đó, thiếu bias correction lại gây ra những bước đầu quá lớn.

Lập luận lý thuyết sau đó được kiểm chứng bằng thí nghiệm, như sẽ trình bày ở dưới. Kết hợp "suy luận cho thấy vấn đề, thí nghiệm cho thấy vấn đề có thật" là cách thuyết phục nhất để biện minh cho một thành phần nhỏ.

### Phân tích hội tụ và các phần còn lại

Mục phân tích hội tụ đặt Adam trong khung **online convex optimization**: ở mỗi bước, một hàm lồi $f_t$ được tiết lộ, thuật toán chọn $\theta_t$, và chất lượng được đo bằng *regret*, tức tổng chênh lệch giữa mất mát của thuật toán và mất mát của tham số tốt nhất cố định trong hậu nghiệm:

$$
R(T) = \sum_{t=1}^{T} \big[ f_t(\theta_t) - f_t(\theta^\ast) \big] .
$$

Paper phát biểu một định lý rằng, dưới các giả định về gradient bị chặn, khoảng cách giữa các tham số bị chặn, learning rate giảm dần và một số điều kiện trên $\beta_1$, $\beta_2$, Adam có regret $O(\sqrt{T})$, tương đương với kết quả tốt nhất đã biết trong khung này, và do đó regret trung bình $R(T)/T$ tiến về 0. Chứng minh được đặt ở phụ lục.

Các mục tiếp theo gồm Related Work (quan hệ với RMSProp, AdaGrad và một số phương pháp khác), Experiments, và Extensions. Trong phần Related Work, paper chỉ ra những khác biệt cụ thể với RMSProp có momentum: RMSProp có momentum áp momentum lên gradient đã được co giãn, còn Adam ước lượng bước cập nhật trực tiếp từ trung bình trượt của moment bậc một và bậc hai; ngoài ra RMSProp không có bias correction. Paper cũng nêu rằng trong một số điều kiện giới hạn của hyperparameter, Adam gần với AdaGrad. Phần Extensions giới thiệu **AdaMax**, một biến thể thay chuẩn bậc hai bằng chuẩn vô cùng (infinity norm), và kỹ thuật lấy trung bình tham số theo thời gian (temporal averaging).

## Figure và Table then chốt

Paper Adam có rất ít bảng và chủ yếu dùng biểu đồ đường cong huấn luyện. Tuy vậy, có ba thành phần trực quan đóng vai trò then chốt.

**Algorithm 1** là "figure" quan trọng nhất của paper, dù nó không phải hình. Như đã phân tích, nó là điểm neo của mọi phần khác, và là thứ mà người đọc mang đi sau khi đóng paper.

**Các biểu đồ chi phí huấn luyện theo số vòng lặp** (training cost versus iterations) trong phần thực nghiệm đặt Adam cạnh các optimizer khác trên cùng một bài toán. Định dạng này phù hợp với claim: một optimizer được đánh giá bằng tốc độ giảm mất mát, nên đường cong mất mát là bằng chứng trực tiếp nhất. Khi người đọc thấy đường của Adam nằm dưới hoặc ngang các đường khác trên nhiều bài toán, họ nhận được thông điệp mà không cần đọc con số.

**Hình thí nghiệm bias correction** khảo sát mất mát sau một số epoch theo nhiều giá trị $\beta_1$, $\beta_2$ và learning rate, với và không có hiệu chỉnh. Đây là loại hình "khảo sát độ nhạy" (sensitivity analysis): thay vì chọn một cấu hình có lợi, hình cho thấy toàn bộ một vùng cấu hình, và người đọc tự thấy rằng không hiệu chỉnh thì kém ổn định khi $\beta_2$ gần 1, đúng như lập luận đã dự báo.

## Thí nghiệm như một chuỗi lập luận

Phần thực nghiệm của Adam được sắp xếp theo một logic rõ: đi từ bài toán lồi, nơi lý thuyết áp dụng, tới bài toán không lồi ngày càng thực tế; và đi từ dữ liệu thưa, sở trường của AdaGrad, tới dữ liệu đặc.

**Bước thứ nhất: logistic regression.** Paper dùng logistic regression trên MNIST và trên dữ liệu đánh giá phim IMDB biểu diễn dạng bag-of-words. Lựa chọn này có hai lý do. Logistic regression là bài toán lồi, nên khớp với khung phân tích hội tụ ở phần trước. Và đặc trưng bag-of-words rất thưa, nên đây là nơi kiểm tra claim Adam kế thừa ưu điểm của AdaGrad với gradient thưa. Kết quả cho thấy Adam hội tụ nhanh tương đương AdaGrad trên dữ liệu thưa, và cả hai đều vượt SGD.

**Bước thứ hai: mạng nhiều lớp.** Trên mạng neural nhiều lớp với MNIST, mục tiêu không còn lồi. Paper so sánh Adam với các optimizer bậc một khác và với một phương pháp tựa bậc hai, cho thấy Adam vẫn tiến bộ nhanh, kể cả khi tính theo thời gian thực chứ không chỉ theo số vòng lặp.

**Bước thứ ba: mạng tích chập.** Trên CNN với CIFAR-10, paper kiểm tra xem Adam có còn cạnh tranh ở một kiến trúc sâu điển hình của thị giác máy tính hay không. Bước này mở rộng phạm vi ứng dụng của claim sang lớp mô hình đang được quan tâm nhất khi đó.

**Bước thứ tư: kiểm chứng bias correction.** Trên một variational autoencoder (VAE), paper khảo sát nhiều tổ hợp $\beta_1$, $\beta_2$ và learning rate, so sánh Adam có và không có hiệu chỉnh độ lệch (phiên bản không hiệu chỉnh về bản chất tương ứng với RMSProp có momentum). Kết quả cho thấy khi $\beta_2$ gần 1, phiên bản không hiệu chỉnh kém ổn định rõ rệt, đúng như phép tính ở phần trên dự báo.

| Tính chất được claim | Bằng chứng |
|---|---|
| Tốt với gradient thưa (như AdaGrad) | Logistic regression trên IMDB bag-of-words |
| Áp dụng cho bài toán không lồi, quy mô lớn | Mạng nhiều lớp trên MNIST, CNN trên CIFAR-10 |
| Bias correction cần thiết | Khảo sát trên VAE, có và không có hiệu chỉnh |
| Hội tụ trong khung lồi | Định lý regret $O(\sqrt{T})$, chứng minh ở phụ lục |
| Ít cần tinh chỉnh | Giá trị mặc định dùng chung cho các thí nghiệm, cùng khảo sát độ nhạy |

Bảng trên cho thấy mỗi tính chất trong abstract có ít nhất một bằng chứng tương ứng. Đây là cách áp dụng nguyên tắc "claim nào cũng phải có thí nghiệm" của bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) cho một paper thuật toán. Người học cũng nên nhận ra một khoảng cách: bằng chứng lý thuyết chỉ phủ khung lồi, trong khi ứng dụng chính của Adam là bài toán không lồi. Paper không giấu điều này, vì khung phân tích được nêu rõ. Nhưng phần tiếp theo cho thấy ngay cả trong khung lồi, lý thuyết cũng cần được kiểm tra kỹ hơn.

## Bài học về độ chặt chẽ của lý thuyết

Năm 2018, Sashank Reddi, Satyen Kale và Sanjiv Kumar công bố paper "On the Convergence of Adam and Beyond" tại ICLR 2018. Paper này chỉ ra rằng chứng minh hội tụ của Adam có lỗi. Về bản chất, chứng minh ngầm dựa vào việc learning rate hiệu dụng của mỗi tham số không bao giờ tăng; điều này đúng với SGD có learning rate giảm dần và với AdaGrad, nhưng không được đảm bảo với Adam, vì trung bình trượt mũ có thể "quên" những gradient lớn trong quá khứ, khiến $\sqrt{\hat v_t}$ giảm và bước cập nhật tăng trở lại. Nhóm tác giả xây dựng một bài toán tối ưu lồi online rất đơn giản, trong đó gradient lớn theo hướng đúng xuất hiện hiếm hoi còn gradient nhỏ theo hướng sai xuất hiện thường xuyên, và cho thấy Adam không hội tụ tới nghiệm tối ưu. Họ đề xuất biến thể **AMSGrad**, dùng giá trị lớn nhất của các ước lượng moment bậc hai từ trước tới nay, để đảm bảo learning rate hiệu dụng không tăng, và chứng minh hội tụ cho biến thể này.

Câu chuyện này dạy người viết ba điều.

Điều thứ nhất: **phần lý thuyết phải được kiểm tra kỹ như phần thực nghiệm.** Một lỗi trong chứng minh có thể tồn tại nhiều năm mà không bị phát hiện, đặc biệt khi phương pháp hoạt động tốt trong thực tế và ít ai có động cơ đọc kỹ phụ lục. Nhưng khi lỗi bị phát hiện, nó trở thành một phần vĩnh viễn trong lịch sử của paper. Người viết nên kiểm tra từng bước chứng minh, đặc biệt là những bước "hiển nhiên" thường được viết vội, và nên nhờ một đồng tác giả không tham gia viết chứng minh đọc lại độc lập.

Điều thứ hai: **cộng đồng Machine Learning đọc chứng minh nghiêm túc.** Một phản ví dụ đơn giản, chỉ ra một khẳng định lý thuyết sai, đủ để trở thành một paper được đánh giá cao. Với người viết, điều này có nghĩa là không nên đưa vào paper một định lý chỉ để "trang trí"; nếu đưa vào, nó phải đúng. Các checklist của hội nghị ML những năm gần đây cũng yêu cầu tác giả nêu đầy đủ giả định và cung cấp chứng minh hoàn chỉnh cho các kết quả lý thuyết (xem [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md)).

Điều thứ ba: **thử phản ví dụ trước khi người khác thử.** Kỹ thuật mà Reddi và cộng sự dùng, tìm một bài toán nhỏ nhất có thể làm khẳng định sai, cũng là kỹ thuật mà người viết có thể tự áp dụng cho định lý trong paper đang viết. Nếu định lý nói thuật toán luôn hội tụ, hãy thử thiết kế bài toán một chiều mà thuật toán khó hội tụ nhất, và chạy thử. Vài giờ thử nghiệm như vậy rẻ hơn nhiều so với một paper đính chính.

Cũng cần nói cho công bằng: lỗi trong chứng minh không làm mất đi giá trị thực tiễn của Adam, vốn được khẳng định qua việc sử dụng rộng rãi. Nhưng người viết không nên trông cậy vào điều đó; hầu hết các paper không có may mắn được cộng đồng "tha thứ" nhờ một thành công thực tiễn lớn đến vậy.

## Văn phong

Văn phong của Adam ngắn gọn và hướng vào người dùng. Các khái niệm trực quan được đặt tên để hỗ trợ suy nghĩ: "trust region" cho tính chất bị chặn của bước, "signal-to-noise ratio" cho tỉ số moment, "automatic annealing" cho việc bước tự giảm. Những tên gọi này giúp người đọc không chuyên về tối ưu vẫn nắm được hành vi của thuật toán.

Toán học được dùng vừa đủ. Phần chính chỉ chứa những phép biến đổi cần để giải thích tính chất; chứng minh dài được chuyển xuống phụ lục. Cách phân chia này giúp phần chính dễ đọc, nhưng như câu chuyện ở trên cho thấy, phụ lục không phải nơi được phép cẩu thả.

Cuối cùng, cái tên "Adam" ngắn, dễ phát âm, và gợi lại ý tưởng cốt lõi. Một tên phương pháp tốt là một phần của đóng góp: nó giúp người khác nhắc tới phương pháp trong câu văn của họ một cách tự nhiên.

## Bài học cho người viết

### Algorithm box là sản phẩm, không phải phụ lục

Với một paper thuật toán, khung pseudo-code là thứ người đọc mang đi. Hãy viết nó sao cho tự đủ, ngắn, đặt sớm, và kèm giá trị mặc định dùng được. Một bài kiểm tra đơn giản: đưa riêng khung thuật toán cho một người trong nhóm và yêu cầu họ cài đặt mà không đọc phần còn lại của paper. Nếu họ phải hỏi lại, khung chưa đủ.

### Định vị "A + B" cần một thành phần mới và bằng chứng cho từng vế

Adam định vị như sự kết hợp của AdaGrad và RMSProp, nhưng có một thành phần mà cả hai đều không có (bias correction), và có thí nghiệm cho từng ưu điểm được kế thừa. Khi paper của người học có cấu trúc kết hợp, hãy nêu rõ thành phần nào là mới, và chứng minh rằng sự kết hợp giữ được ưu điểm của từng nguồn.

### Danh sách tính chất là một danh sách nợ

Mỗi tính chất được nêu trong abstract là một lời hứa mà phần sau phải thực hiện. Trước khi nộp, người viết nên lập bảng "tính chất và bằng chứng" như ở trên và kiểm tra rằng không có ô nào trống.

### Biện minh thành phần nhỏ bằng suy luận cộng thí nghiệm

Bias correction là một thành phần mà reviewer có thể đề nghị bỏ. Paper phòng thủ bằng cả lập luận toán học lẫn thí nghiệm khảo sát. Với mỗi thành phần không hiển nhiên trong phương pháp của người học, hãy chuẩn bị cả hai loại bằng chứng.

### Áp dụng sang các cộng đồng khác

Ở **Computer Vision**, các paper đề xuất một kỹ thuật huấn luyện, một hàm loss hay một cách augmentation có thể học trực tiếp từ Adam: một khung pseudo-code ngắn, giá trị mặc định, và khảo sát độ nhạy cho hyperparameter mới. Một reviewer CV thường hỏi "hyperparameter mới có cần tinh chỉnh lại cho từng dataset không?", và một hình khảo sát độ nhạy trả lời câu hỏi đó. Ở **NLP**, các paper đề xuất thuật toán giải mã, thuật toán fine-tune hay chiến lược lấy mẫu dữ liệu cũng hưởng lợi từ khung thuật toán rõ ràng; checklist của ARR yêu cầu báo cáo hyperparameter và cách chọn chúng, nên giá trị mặc định cùng quy trình chọn nên được ghi rõ (xem [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md)). Ở **Machine Learning**, bài học về độ chặt chẽ của lý thuyết áp dụng trực tiếp; dự án hư cấu về warmup ở bài [Thực hành](worked-example.md) cho thấy cách kết hợp một phân tích lý thuyết đơn giản với thực nghiệm trên nhiều kiến trúc.

## Tóm tắt

Adam là mẫu mực của một paper thuật toán: toàn bộ đóng góp nằm trong một khung pseudo-code khoảng mười dòng, tự đủ, kèm giá trị mặc định dùng được ngay. Paper định vị như sự kết hợp ưu điểm của AdaGrad với gradient thưa và của RMSProp với mục tiêu không dừng, nhưng có thêm thành phần mới là bias correction, được biện minh bằng cả suy luận toán học lẫn thí nghiệm trên VAE. Danh sách tính chất trong abstract, từ bước bị chặn bởi $\alpha$ tới bất biến với co giãn gradient, đều được giải thích bằng lập luận ngắn và minh họa bằng thực nghiệm đi từ logistic regression tới CNN. Phần lý thuyết với regret $O(\sqrt{T})$ về sau được Reddi, Kale và Kumar chỉ ra là có lỗi bằng một phản ví dụ đơn giản, dẫn tới AMSGrad; đây là lời nhắc rằng lý thuyết phải được kiểm tra kỹ, và cộng đồng ML đọc chứng minh rất nghiêm túc.

## Bài tập

1. **Viết khung thuật toán cho phương pháp của người học.** Viết một khung pseudo-code tự đủ cho phương pháp chính trong dự án, khai báo đầy đủ đầu vào, ghi giá trị mặc định cho mọi hyperparameter trong chú thích. Đưa khung này cho một người trong nhóm cài đặt mà không đọc phần còn lại, rồi ghi lại mọi câu hỏi họ phải hỏi.
2. **Lập bảng tính chất và bằng chứng.** Liệt kê mọi tính chất mà abstract hoặc introduction của người học hứa hẹn. Với mỗi tính chất, ghi bằng chứng cụ thể (định lý, hình, bảng). Tính chất nào chưa có bằng chứng thì hoặc bổ sung thí nghiệm, hoặc bỏ khỏi abstract.
3. **Làm một phép tính "bước đầu tiên".** Với một thành phần không hiển nhiên trong phương pháp (một hệ số chuẩn hóa, một cách khởi tạo, một bước hiệu chỉnh), làm một phép tính cụ thể như phép tính bias correction ở bài này để cho thấy điều gì xảy ra nếu bỏ thành phần đó. Sau đó thiết kế thí nghiệm kiểm chứng.
4. **Tự tìm phản ví dụ.** Nếu paper của người học có một khẳng định lý thuyết, hãy thử xây dựng bài toán nhỏ nhất có thể làm khẳng định đó sai, và kiểm tra bằng mô phỏng. Ghi lại các giả định mà phản ví dụ buộc phải vi phạm; đó chính là những giả định cần được nêu tường minh trong định lý.
