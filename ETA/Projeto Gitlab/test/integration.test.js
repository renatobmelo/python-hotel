// test/integration.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); // Importando a aplicação Express
const expect = chai.expect;

chai.use(chaiHttp);

describe('Testes de Integração da API', () => {

  // Teste de integração para verificar resposta na rota principal "/"
  it('Deve retornar "Hello, World!" na rota GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });

});
