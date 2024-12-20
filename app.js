const express = require('express');

const host = '127.0.0.1';
const port = 3000;

const app = express();
app.use(express.json());

// ini data awal
const dataSiswa = [
    {
        nim: 1,
        nama: 'Anto',
        prodi: 'SI',
    }
];

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        pesan: '',
        data: dataSiswa
    });
})

app.post('/', (req, res) => {
    const nim = parseInt( req.body.nim );
    const filterNim = dataSiswa.filter( obj => obj.nim === nim );

    if( filterNim.length ) {
        return res.status(409).json({
            status: 409, 
            pesan: 'nim sudah terdaftar', 
            data: dataSiswa
        });
    } 
    
    dataSiswa.push(req.body)

    return res.status(201).json({
        status: 201, 
        pesan: 'berhasil', 
        data: dataSiswa
    });
});

app.put('/:nim', (req, res) => {
    const paramNim = parseInt(req.params.nim);
    const arrayIndex = dataSiswa.findIndex( obj => obj.nim === paramNim );
    
    if( arrayIndex < 0 ) {
        return res.status( 404 ).json({ 
            status: 404, 
            pesan: 'data tidak ditemukan', 
            data: dataSiswa
        });
    }
    
    dataSiswa[arrayIndex] = req.body;
    
    return res.status(200).json({
        status: 200, 
        pesan: 'berhasil', 
        data: dataSiswa
    });
});

app.delete('/:nim', (req, res) => {
    const paramNim = parseInt(req.params.nim);
    const arrayIndex = dataSiswa.findIndex( obj => obj.nim === paramNim );
    
    if( arrayIndex < 0 ) {
        return res.status( 404 ).json({ 
            status: 404, 
            pesan: 'data tidak ditemukan', 
            data: dataSiswa
        });
    }
    
    dataSiswa.splice(arrayIndex, 1);

    return res.status(200).json({
        status: 200, 
        pesan: 'berhasil', 
        data: dataSiswa
    });
});

app.listen(port, () => {
    console.log(`BASE URL http://${host}:${port}/`);
})