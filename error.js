"use strict"
/* ------------------------------------------ 
            Error Handling in NodeJS    
------------------------------------------ */

/* 
* npm init -y
* npm install express dotenv
* echo PORT=8000 > .env
* cat > .gitignore (kopyalanan verileri terminle yapistir ardindan ctrl + c ile cikis yap)
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

app.get('/user/:id', (req, res) => {

    const { id } = req.params

    if (isNaN(id)) {
            throw new Error('ID is not a number', { cause: "params.id"})
    } else {
        res.send({
            error: false,
            message: 'hi there',
            id
        })
    }

})







/*------------------------------------------ */
app.listen(PORT, () => console.log(`Running at : http://127.0.0.1:${PORT} `))

