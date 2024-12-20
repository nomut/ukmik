# STUDY CLUB - TUGAS REST API DENGAN EXPRESSJS

## Instalasi
Jalankan Command berikut di direktori project
```
// install nodemon
npm install -g nodemon  

// install dependency dari package.json [ express ^4.21.2 ]
npm install             
```

## Jalankan 
`npm run dev` atau `node app.js`

## API Endpoint
### Daftar Siswa 
Method GET : http://127.0.0.1/

REQUEST
```
curl -X GET 'http://127.0.0.1:3000/'
```
RESPONSE
```
{
    "status": 200,
    "pesan": "",
    "data": [
        {
            "nim": 1,
            "nama": "Anto",
            "prodi": "SI"
        }
    ]
}
```

---

### Tambah Siswa 
Method POST : http://127.0.0.1/

REQUEST
```
curl -X POST 'http://127.0.0.1:3000/' \
--header 'Content-Type: application/json' \
--data '{
    "nim": 2,
    "nama": "Ani",
    "prodi": "SI"
}'
```
RESPONSE
```
{
    "status": 201,
    "pesan": "berhasil",
    "data": [
        {
            "nim": 1,
            "nama": "Anto",
            "prodi": "SI"
        },
        {
            "nim": 2,
            "nama": "Ani",
            "prodi": "SI"
        }
    ]
}
```

---

### Edit Siswa
Method PUT/PATCH : http://127.0.0.1/{dataSiswa.nim}

REQUEST
```
curl -X PUT 'http://127.0.0.1:3000/2' \
--header 'Content-Type: application/json' \
--data '{
    "nim": 2,
    "nama": "Alvi",
    "prodi": "SI"
}'
```
RESPONSE
```
{
    "status": 200,
    "pesan": "berhasil",
    "data": [
        {
            "nim": 1,
            "nama": "Anto",
            "prodi": "SI"
        },
        {
            "nim": 2,
            "nama": "Alvi",
            "prodi": "SI"
        }
    ]
}
```

---

### Hapus Siswa
Method DELETE : http://127.0.0.1/{dataSiswa.nim}

REQUEST 
```
curl -X DELETE 'http://127.0.0.1:3000/2' \
--header 'Content-Type: application/json'
```

RESPONSE
```
{
    "status": 200,
    "pesan": "berhasil",
    "data": [
        {
            "nim": 1,
            "nama": "Anto",
            "prodi": "SI"
        }
    ]
}
```

---

_THERE IS NO PLACE LIKE 127.0.0.1_