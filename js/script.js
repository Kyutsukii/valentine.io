document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.card').addEventListener('click', function() {
        // Menambahkan kelas 'hidden' ke kartu
        this.classList.add('hidden');
            this.classList.add('hidden');
        // Menghilangkan kelas 'hidden' dari kertas untuk menampilkannya
        document.querySelector('.paper').classList.remove('hidden');
        document.querySelector('.button-wrapper').classList.remove('hidden');
    });
});
