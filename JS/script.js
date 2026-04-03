document.addEventListener('DOMContentLoaded', function() {

    // --- BÀI TẬP 1: TÌM KIẾM SẢN PHẨM ---
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');

    if (productList && searchInput) {
        const products = [
            { id: 1, name: "Laptop Dell XPS", price: "25.000.000đ" },
            { id: 2, name: "MacBook Pro M2", price: "35.000.000đ" },
            { id: 3, name: "Chuột Logitech G102", price: "400.000đ" },
            { id: 4, name: "Bàn phím cơ Akko", price: "1.200.000đ" },
            { id: 5, name: "Màn hình LG 24inch", price: "3.500.000đ" }
        ];

        function renderProducts(data) {
            productList.innerHTML = ''; 
            if (data.length === 0) {
                productList.innerHTML = '<p class="error-msg">Không tìm thấy sản phẩm nào!</p>';
                return;
            }
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'product-card';
                
                const title = document.createElement('h3');
                title.textContent = item.name; 
                
                const price = document.createElement('p');
                price.textContent = item.price;
                price.style.color = '#e74c3c';

                card.appendChild(title);
                card.appendChild(price);
                productList.appendChild(card);
            });
        }

        renderProducts(products);

        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
            renderProducts(filtered);
        });
    }

    // --- BÀI TẬP 2: FORM ĐĂNG KÝ ---
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const terms = document.getElementById('terms').checked;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

            let isValid = true;

            if (!emailRegex.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else { document.getElementById('emailError').style.display = 'none'; }

            if (!pwRegex.test(password)) {
                document.getElementById('pwError').style.display = 'block';
                isValid = false;
            } else { document.getElementById('pwError').style.display = 'none'; }

            if (!terms) {
                document.getElementById('termsError').style.display = 'block';
                isValid = false;
            } else { document.getElementById('termsError').style.display = 'none'; }

            if (isValid) {
                const userData = { name, email, password };
                localStorage.setItem('registeredUser', JSON.stringify(userData));
                alert("Đăng ký thành công! Dữ liệu đã lưu vào LocalStorage.");
                this.reset();
            }
        });
    }

    // --- BÀI TẬP 3: ĐỒNG HỒ ĐẾM NGƯỢC ---
    const timerDisplay = document.getElementById('timerDisplay');

    if (timerDisplay) {
        let totalSeconds = 10 * 60; // 10 phút
        
        const timerInterval = setInterval(() => {
            totalSeconds--;

            const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
            const seconds = String(totalSeconds % 60).padStart(2, '0');
            
            timerDisplay.textContent = `${minutes}:${seconds}`;

            if (totalSeconds <= 60 && totalSeconds > 0) {
                timerDisplay.classList.add('danger');
            }

            if (totalSeconds <= 0) {
                clearInterval(timerInterval); 
                timerDisplay.textContent = "00:00";
                setTimeout(() => {
                    alert("Đã hết thời gian!");
                }, 100);
            }
        }, 1000);
    }
});