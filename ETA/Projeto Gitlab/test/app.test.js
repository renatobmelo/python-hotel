// test/app.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); // Importando o app Express
const expect = chai.expect;

// Usando o chai-http para fazer requisições HTTP
chai.use(chaiHttp);

describe('API Test', () => {

  // Teste para garantir que a aplicação responde na rota '/'
  it('should return "Hello, World!" on GET /', (done) => {
    chai.request(app)
      .get('/')  // A rota que queremos testar
      .end((err, res) => {
        expect(res).to.have.status(200);               // Status HTTP 200
        expect(res.text).to.equal('Hello, World!');    // O corpo da resposta
        done();  // Finaliza o teste
      });
  });

});
