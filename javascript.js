function changeImage(src) {
    document.getElementById('mainImage').src = src;
}


document.addEventListener('DOMContentLoaded', function() {
var sizeButtons = document.querySelectorAll('.size-button');
var addToCartButton = document.getElementById('add-to-cart');

sizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Loại bỏ lớp 'active' từ tất cả các nút
        sizeButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Thêm lớp 'active' vào nút được chọn
        this.classList.add('active');

        // Bật nút "ADD TO CART" và thêm lớp 'enabled'
        addToCartButton.removeAttribute('disabled');
        addToCartButton.classList.add('enabled');
    });
});
});


function toggleSizeInfo() {
     var sizeInfo = document.getElementById('sizeInfo');
        if (sizeInfo.classList.contains('hidden')) {
            sizeInfo.classList.remove('hidden');
        } else {
            sizeInfo.classList.add('hidden');
        }
}
 function toggleSection(id) {
    const section = document.getElementById(id);
    const arrow = document.querySelector(`[onclick="toggleSection('${id}')"]`);
        
    section.classList.toggle('hidden');
    arrow.classList.toggle('active');
    }
        