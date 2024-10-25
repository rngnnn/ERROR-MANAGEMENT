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

/*----------------------------------------------- *

app.get('/user/:id', (req, res) => {

    const { id } = req.params

    if (isNaN(id)) {
        // res.errorStatusCode = 400
        throw new Error('ID is not a number', { cause:The Error occured at params. })
    } else {
        res.send({
            error: false,
            message: 'hi there',
            id
        })
    }

})

/*---------------------------------------------- *
// TRY - CATH

app.get('/user/:id', (req, res, next) => {

    const { id } = req.params
    try {
        if (isNaN(id)) {
            res.errorStatusCode = 400
            throw new Error('ID is not a number', { cause: 'hata paramsdan gelen id den olustu' })
        } else {
            res.send({
                error: false,
                message: 'hi there',
                id
            })
        }
    } catch (error) {

        // const statusCode = res?.errorStatusCode ?? 500

        // res.status(statusCode).send({
        //     error: true,
        //     message: error.message,
        //     cause: error.cause,
        // })

        next(error) // Send the error to ->  Error Handler
    }

})

/*------------------------------------------ *
// ASYNC

const asyncFunction = async () => {
    throw new Error('This error message from async function !', { cause: "this is asnyc cause message" })
}


app.get('/async', async (req, res, next) => {
    await asyncFunction()
        .catch(next) // Send the error to ->  Error Handler

    res.send({
        error: false,
        msg: 'All is well!'
    })
})

/*------------------------------------------ */
// express-async-errors

require('express-async-errors')

app.get('/async', async (req, res) => {
    res.errorStatusCode = 400
    throw new Error('Created error in async-func')
})


const errorHandler = (error, req, res, next) => {

    const statusCode = res?.errorStatusCode ?? 500

    res.status(statusCode).send({
        error: true,
        message: error.message,
        cause: error.cause,
        // stack: error.stack // More detailed info about error
    })
}
app.use(errorHandler)

/*------------------------------------------ */
app.listen(PORT, () => console.log(`Running at : http://127.0.0.1:${PORT} `))

