const axios = require('axios')

const testeJson = {
    "nome": "uil2",
    "data_nascimento" : "17071991",
    "sexo" : "sexo",
    "email" : "email",
    "telefone" : "telefone",
    "senha" : "123456789"
}

async function makeRequest(testeJson) {

    const config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/inserircadastro'
    }

    let res = await axios(config)

    console.log(res.status);
}

makeRequest(testeJson);


export default testeJson