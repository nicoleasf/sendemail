var nodemailer = require('nodemailer')

var remetente = 'rm14067@fiap.com.br'
var senha = 'Teste1234$'

var transporte = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: '587',
    auth:{
        user:remetente,
        pass:senha
    }

})