// Tạo input để tải file
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.txt';
fileInput.style.display = 'none'; // Ẩn input
document.body.appendChild(fileInput);

// Xử lý khi chọn file
fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) {
        console.log('No file selected.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            // Parse nội dung file JSON
            const data = JSON.parse(e.target.result);

            // Ghi dữ liệu vào localStorage
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    localStorage.setItem(key, data[key]);
                }
            }

            console.log('Local Storage has been successfully updated with data from the file.');
        } catch (error) {
            console.error('Error parsing file. Please upload a valid JSON file.');
        }
    };

    // Đọc file dưới dạng text
    reader.readAsText(file);
});

// Tạo nút bấm để kích hoạt input file
const uploadButton = document.createElement('button');
uploadButton.textContent = 'Upload File';
uploadButton.style.margin = '20px';
document.body.appendChild(uploadButton);

// Kích hoạt input file khi nhấn nút
uploadButton.addEventListener('click', function () {
    fileInput.click(); // Kích hoạt hộp thoại chọn file
});
