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
uploadButton.style.position = 'fixed'; // Định vị cố định
uploadButton.style.bottom = '20px';   // Cách phía dưới 20px
uploadButton.style.left = '20px';    // Cách phía trái 20px
uploadButton.style.padding = '10px 20px';
uploadButton.style.backgroundColor = '#007BFF'; // Màu nền xanh
uploadButton.style.color = '#FFF';   // Màu chữ trắng
uploadButton.style.border = 'none';
uploadButton.style.borderRadius = '5px';
uploadButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
uploadButton.style.cursor = 'pointer';
uploadButton.style.zIndex = '1000'; // Đảm bảo hiển thị trên các phần tử khác
document.body.appendChild(uploadButton);

// Thêm hiệu ứng hover cho nút
uploadButton.addEventListener('mouseover', () => {
    uploadButton.style.backgroundColor = '#0056b3';
});
uploadButton.addEventListener('mouseout', () => {
    uploadButton.style.backgroundColor = '#007BFF';
});

// Kích hoạt input file khi nhấn nút
uploadButton.addEventListener('click', function () {
    fileInput.click(); // Kích hoạt hộp thoại chọn file
});
