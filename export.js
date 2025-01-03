// Lấy tất cả các key và value trong Local Storage
function exportLocalStorageToText() {
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        localStorageData[key] = value;
    }

    // Chuyển dữ liệu thành chuỗi JSON
    const localStorageText = JSON.stringify(localStorageData, null, 2);

    // Tạo một file blob từ dữ liệu JSON
    const blob = new Blob([localStorageText], { type: 'text/plain' });

    // Tạo một thẻ <a> để tải file xuống
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'data.txt';
    a.style.display = 'none';

    // Gắn thẻ <a> vào DOM và kích hoạt sự kiện click để tải file
    document.body.appendChild(a);
    a.click();

    // Sau khi tải xong, loại bỏ thẻ <a>
    document.body.removeChild(a);
}

// Gọi hàm
exportLocalStorageToText();
