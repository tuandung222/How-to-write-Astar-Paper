# Conclusion, Limitations, Supplementary

## Conclusion

Ngắn (1 đoạn, ~5–8 câu). **Không** copy-paste abstract.

1. Nhắc lại vấn đề & insight (1–2 câu).
2. Tóm tắt phương pháp & kết quả chính (1–2 câu).
3. Ý nghĩa rộng hơn / hướng tương lai (1–2 câu).

> *"We presented DepthX, which models per-object depth as a distribution refined by geometric priors. Our analysis showed that depth ambiguity dominates long-range errors, and addressing it yields consistent gains across detectors and datasets. We hope this perspective encourages future work to treat depth uncertainty as a first-class citizen in monocular 3D perception."*

## Limitations — viết sao cho khôn

Các hội nghị CV ngày càng **khuyến khích hoặc yêu cầu** thảo luận limitations (và có hướng dẫn reviewer *không* phạt việc tác giả thừa nhận hạn chế một cách trung thực). Viết limitations tốt **tăng** độ tin cậy.

Công thức: **hạn chế cụ thể + nguyên nhân + (có thể) hướng giải quyết**.

> *"**Limitations.** DepthX relies on category-level height priors, and thus is less effective for categories with large intra-class height variation (e.g., 'trailer'; see Fig. S5). Learning instance-adaptive priors is a promising direction."*

Tránh: "limitations" giả kiểu *"our method requires a GPU"*; hoặc thừa nhận hạn chế làm sụp đổ claim chính mà không có giải thích.

Thêm **Broader impact / Ethics** nếu bài toán nhạy cảm (nhận diện khuôn mặt, giám sát, deepfake, dữ liệu y tế): rủi ro lạm dụng, bias dữ liệu, giấy phép dataset, đồng ý của người trong ảnh.

## Supplementary Material

Supp ở CVPR/ICCV/ECCV thường là **một PDF riêng** (+ video, code dạng zip — kiểm tra giới hạn dung lượng của năm đó), nộp cùng hoặc sau deadline paper một ít.

!!! warning "Reviewer KHÔNG bắt buộc đọc supp"
    Paper chính phải **tự đứng được**. Mọi thứ cần để đánh giá claim chính phải nằm trong 8 trang. Supp là nơi cho **chi tiết và bằng chứng bổ sung**, không phải nơi chứa nửa sau paper.

### Supp thường chứa

1. **Implementation details** đầy đủ (hyperparameter, kiến trúc chi tiết, augmentation, thời gian train).
2. **Thêm ablation** và phân tích.
3. **Kết quả đầy đủ** trên từng class / từng scene.
4. **Thêm kết quả qualitative**, bao gồm failure cases.
5. **Chứng minh** (nếu có lý thuyết).
6. **Chi tiết dataset** (nếu đóng góp dataset): quy trình thu thập, gán nhãn, thống kê, giấy phép, datasheet.
7. **Video** (rất quan trọng cho video/3D/generation — reviewer thích xem!).
8. Notation table.

### Mẹo

- Supp dùng **cùng template** (CVPR có hướng dẫn cho supp), đánh số khác: Sec. A, B, C…; Fig. S1, Table S1.
- Trong paper chính, tham chiếu cụ thể: *"(see Supp. Sec. B.2)"* — không chỉ "see supp".
- Code nộp kèm phải **ẩn danh** (xóa tên, đường dẫn `/home/tennguoi/`, git history, license có tên lab).
- Một số năm/hội nghị cho phép **nối supp vào cuối PDF paper chính** sau references; số khác bắt buộc file riêng. Đọc kỹ hướng dẫn.
