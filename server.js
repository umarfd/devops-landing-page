const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk menyajikan file statis
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint sederhana untuk testing
app.get('/api/info', (req, res) => {
    res.json({
        project: 'Belajar DevOps',
        version: '1.0.0',
        description: 'Landing page untuk mempelajari DevOps'
    });
});

// Menangani 404
app.use((req, res) => {
    res.status(404).send('Halaman tidak ditemukan');
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log('Landing Page "Belajar DevOps" siap digunakan!');
});
