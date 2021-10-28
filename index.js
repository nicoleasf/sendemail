var server = require('./config/server')
var email = require('/config/email')

var app = server.app
var porta = server.porta 

app.get('/',(req,res)=>{
    res.render('form.ejs')
})

app.post('/',(req,res)=>{
    var dest = req.body.email
   email.sendMail({
       from:'rm14067@fiap.com.br',
       to:dest,
       subject:'Teste de envvio de Email por Nodemailer',
       html:'<P>Mensagem</P>'
   })
})

app.listen(porta)