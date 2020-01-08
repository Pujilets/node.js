const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email
    
    return res.send(`The email value is ${email}`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/Luas', (req, res) => {
    let a, b, c
    
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a * b

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`Luas adalah ${c}`)
})

app.post('/Biodata', (req, res) => {
    let nama, umur, alamat
    
    nama = (req.body.nama)
    umur = parseInt(req.body.umur)
    alamat = (req.body.alamat)

    console.log(typeof nama)
    console.log(typeof umur)
    console.log(typeof alamat)
    
    return res.send(`nama : ${nama}, umur : ${umur}, alamat : ${alamat}`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
