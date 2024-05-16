import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';
import ProdutoTitulo from '../layout/produto-titulo';
import ProdutoPassos from '../layout/produto-passos';
import PassoCard from '../layout/passo-card';
import ProdutosMosaico from '../layout/produtos-mosaico';

class Milacro extends Component {
  render() {
    return (
      <>
        <Header4 />

        <div className="page-content bg-white rubik-font">
          <br></br>
          <br></br>
          <br></br>
          <br class="d-none d-sm-block"></br>
          <br class="d-none d-sm-block"></br>

          <ProdutoTitulo
            name='Milacro'
            text='Esse é um texto teste'
            image='images/main-slider/img-topo-2.jpg'
          />

          <ProdutoPassos
            texto='Cada profissional deve avaliar o estado do cabelo da cliente. Caso avalie positivamente para aplicação do produto, deve escovar o cabelo completamente e deixar o produto agir somente por meia hora.'
            passoCard={[
              <PassoCard
                image='./images/passos/APLICACAO.png'
                numero='01'
                descricao='Passe no cabelo'
              ></PassoCard>,
              <PassoCard
                image='./images/passos/APLICACAO.png'
                numero='02'
                descricao='Passe na mao'
              ></PassoCard>,
            ]}
          />
          <ProdutosMosaico />
        </div>
        <Footer5 />
      </>
    );
  }
}
export default Milacro;
