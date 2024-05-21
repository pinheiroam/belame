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
          <br class="d-none d-sm-block"></br>
          <br class="d-none d-sm-block"></br>

          <ProdutoTitulo
            name='Milacro'
            text='A solução que suas pontas precisavam. Aplicá-lo as pontas ressecadas faz com que ele entre em ação hidratando e repondo óleos essenciais para a sua recuperação. Sua composição tem ativos que ajudam na maciez, brilho e frizz do cabelo, deixando-o fortificado e pronto pra mais um dia de arrasar.'
            image='images/product/belame/milacro-topo.png'
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
