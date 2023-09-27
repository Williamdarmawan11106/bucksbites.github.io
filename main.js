document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click',(e) => { 
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').scr;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i> Tidak ada informasi tersedia';

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
    });
});