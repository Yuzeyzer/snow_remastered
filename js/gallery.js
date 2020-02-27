function  ImageGallery() {
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.room-preview img')
    
    previews.forEach(preview =>{
        preview.addEventListener('click', function () {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("big","small");
            highlight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove('room-active'));
            preview.classList.add('room-active')
        });
    });
}
ImageGallery();