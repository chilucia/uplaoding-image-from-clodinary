const express = require ('express');
const cloudRouter = require ('./route/route');
const fileUpload = require('express-fileupload')
const PORT = 1030;
const app = express();

app.use(fileUpload({
    useTempFiles:true
}))
app.use(express.json());
app.use('/api',cloudRouter)
app.listen(PORT,() => {
    console.log(`listening on port: ${PORT}`)
});