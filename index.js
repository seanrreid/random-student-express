const express = require('express');
PORT = 3000;
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html',es6Renderer);
app.set('views','./views');
app.set('view engine', 'html');

const rvrRouter = require('./routes/rvr');




//anything in the /rvr path - get handled by the routes/rvr.js code
app.use('/',rvrRouter);

app.all('*', (req, res) => {
    res.status(200).send(`Not a valid page.  Try the <a href='/rvr'>HOME</a> page`)
})

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}.`);
})