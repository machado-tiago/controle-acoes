const { application } = require('express');
const express= require('express');
const path= require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.listen(8080)

app.get(['/','/posicao'], (req, res) => {
    res.render('./pages/posicao')
})

app.get('/bovespa', (req, res) => {
    res.render('./pages/bovespa')
})
process.stdout.write("running application ...")
process.stdout.on('close', ()=>process.stdout.write("application stopped"))
