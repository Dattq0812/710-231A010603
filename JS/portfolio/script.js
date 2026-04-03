// Đợi cho HTML load xong mới chạy các hiệu ứng
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Hiệu ứng 1: Xoay ảnh đại diện (Avatar) khi click vào ---
    const avatar = document.querySelector('.avatar');
    let isRotated = false; // Biến kiểm tra trạng thái xoay

    // Thêm thuộc tính transition để hiệu ứng mượt mà
    avatar.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease';

    avatar.addEventListener('click', function() {
        if (!isRotated) {
            avatar.style.transform = 'rotate(360deg) scale(1.1)'; // Xoay 360 độ và phóng to một chút
            avatar.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            isRotated = true;
        } else {
            avatar.style.transform = 'rotate(0deg) scale(1)'; // Trả về như cũ
            avatar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            isRotated = false;
        }
    });

    // --- Hiệu ứng 2: Trượt và đổi màu các mục thông tin khi rê chuột ---
    const infoItems = document.querySelectorAll('.info-item');

    infoItems.forEach(item => {
        // Thêm transition cho mượt
        item.style.transition = 'all 0.3s ease';
        item.style.cursor = 'pointer'; // Đổi con trỏ chuột thành hình bàn tay

        // Khi rê chuột vào (Hover)
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'; // Sáng lên
            item.style.transform = 'translateX(10px)'; // Dịch sang phải 10px
        });

        // Khi đưa chuột ra
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Trở lại màu cũ
            item.style.transform = 'translateX(0)'; // Trở lại vị trí cũ
        });

        // --- Hiệu ứng 3: Hiển thị thông báo khi click vào từng dòng ---
        item.addEventListener('click', () => {
            // Lấy nội dung của span thứ nhất (tiêu đề) và span thứ hai (nội dung)
            const label = item.querySelector('span:first-child').innerText;
            const value = item.querySelector('span:last-child').innerText;
            
            // Xóa dấu hai chấm ở cuối label nếu có
            const cleanLabel = label.replace(':', '');
            
            alert(`Bạn đang xem thông tin: ${cleanLabel} là ${value}`);
        });
    });
});