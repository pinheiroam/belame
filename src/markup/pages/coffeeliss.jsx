import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';
import ProdutoTitulo from '../layout/produto-titulo';
import ProdutosMosaico from '../layout/produtos-mosaico';

class Coffeeliss extends Component {
  render() {
    return (
      <>
        <Header4 />

        <div className="page-content bg-white rubik-font">
          <br class="d-none d-sm-block"></br>
          <br class="d-none d-sm-block"></br>

          <ProdutoTitulo
          name='Coffee Liss'
          text=' Saúde e beleza caminham juntos na vida. Com esse conceito chega ao mercado a COFFEE LISS da BELAME PROFESSIONAL HAIR. 
          Um produto inovador, com tecnologia exclusiva de alinhamento térmico dos fios proporcionando  brilho, 
          maciez e movimento natural aos cabelo e eliminando o frizz. Sua fórmula contém PROLISS, 
          um componente  altamente eficaz na hidratação dos fios capilares e na obtenção de um brilho 
          espelhado e macio.
          
          Além disso, a COFFEE LISS proporciona  grande otimização no tempo do 
          tratamento. Com um menor número de chapadas, saúde e beleza são experimentadas pelos profissionais e sua clientela.'
          image='images/product/belame/coffee-topo.png'
          />

          {/* <!-- ELement Style  6 --> */}
          <div
            className="section-full content-inner about-us-box"
            style={{
              backgroundImage: 'url(' + './images/background/bg10.png' + ')',
              backroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
            {/* <div className="sort-title-bx" data-name="Element Style 6"><i className="fa fa-angle-double-right"></i></div> */}
            <div className="container">
              <div className="section-head text-center title-bx ">
                <h2 className="box-title m-tb0 blog-number" style={{ color: '#6cc000' }}>
                  Orientações específicas para<span className="bg-primary"></span>
                </h2>
                <h2 className="box-title m-tb0 blog-number" style={{ color: '#6cc000' }}>
                  cabelos loiros com tintura<span className="bg-primary"></span>
                </h2>
              </div>
              <p>
              Cada profissional deve avaliar o estado do cabelo da cliente.
                Caso avalie positivamente para aplicação do produto, deve escovar o cabelo completamente e deixar o produto agir somente por meia hora. 
              </p>
            </div>
            <div className="container">
              <div className="section-head text-center title-bx ">
                <h2 className="box-title m-tb0 blog-number" style={{ color: '#6cc000' }}>
                  Passo a passo para todo tipo de cabelo<span className="bg-primary"></span>
                </h2>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20"
                  data-wow-delay="0.2s">
                  <div
                    className="dlab-box-bg m-b30  fly-box h-100"
                    style={{
                      backgroundImage: 'url(' + './images/passos/bg-ensaboar.jpg' + ')',
                      backgroundColor: '#fff'
                    }}>
                    <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                      <span className="icon-cell icon-xxl">
                        <img src="./images/passos/APLICACAO.png"></img>
                      </span>
                      <div className="icon-content m-b20 p-t5">
                        <h5 className="blog-number">01</h5>
                        <p>
                          Coloque em recipiente o produto Belame. Com o cabelo seco (não necessita lavagem prévia)
                          separe em mechas finas e aplique o produto homogeneamente. 
                        </p>
                        <p>
                          SEMPRE IMPORTANTE DEIXAR A DISTÂNCIA DE 1 CM DO COURO CABELUDO.  
                        </p>
                      </div>
                      {/* <a href="#" className="site-button">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20"
                  data-wow-delay="0.6s">
                  <div
                    className="dlab-box-bg m-b30 fly-box h-100"
                    style={{ backgroundImage: 'url(' + './images/passos/bg-aplicacao.jpg' + ')' }}>
                    <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                      <div className="text-primary">
                        <span className="icon-cell icon-xxl">
                          <img src="./images/passos/TOCA.png"></img>
                        </span>
                      </div>
                      <div className="icon-content m-b20 p-t5">
                        <h5 className=" blog-number">02</h5>
                        <p>
                          Coloque a touca sem pressionar o cabelo e deixe o produto agir por 30 minutos.
                          Em cabelos de classificação 3c, 4a, 4b e 4c - deixe agir por 45 minutos a 1 hora.
                        </p>
                      </div>
                      {/* <a href="#" className="site-button">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20"
                  data-wow-delay="0.8s">
                  <div
                    className="dlab-box-bg m-b30 fly-box h-100"
                    style={{ backgroundImage: 'url(' + './images/passos/bg-secador.jpg' + ')' }}>
                    <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                      <div className="text-primary">
                        <span className="icon-cell icon-xxl">
                          <img src="./images/passos/LAVAR.png"></img>
                        </span>
                      </div>
                      <div className="icon-content m-b20 p-t5">
                        <h5 className="blog-number">03</h5>
                        <p>Após o tempo de ação do produto, enxague o cabelo somente com água, 
                          removendo 100% do produto.
                        </p>
                      </div>
                      {/* <a href="#" className="site-button">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20"
                  data-wow-delay="0.9s">
                  <div
                    className="dlab-box-bg m-b30  fly-box h-100"
                    style={{ backgroundImage: 'url(' + './images/passos/bg-chapinha.jpg' + ')' }}>
                    <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                      <div className="text-primary">
                        <span className="icon-cell icon-xxl">
                          <img src="./images/passos/CHAPINHA.png"></img>
                        </span>
                      </div>
                      <div className="icon-content m-b20 p-t5">
                        <h5 className="blog-number">04</h5>
                        <p>
                          Seque o cabelo completamente, sem escovar.
                          Separe mechas finas e pranche lentamente por 3 a 6 vezes cada mecha em temperatura de 230°C/450°F.
                        </p>
                        <p>
                        LEMBRE SEMPRE DE PRANCHAR ADEQUADAMENTE O CABELO: DESDE A RAIZ, SEM FAZER DOBRAS OU MARCAS.
                        </p>
                      </div>
                      {/* <a href="#" className="site-button">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20"
                  data-wow-delay="0.9s">
                  <div
                    className="dlab-box-bg m-b30  fly-box h-100"
                    style={{ backgroundImage: 'url(' + './images/passos/bg-chapinha.jpg' + ')' }}>
                    <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                      <div className="text-primary">
                        <span className="icon-cell icon-xxl">
                          <img src="./images/passos/ENSABOAR.png"></img>
                        </span>
                      </div>
                      <div className="icon-content m-b20 p-t5">
                        <h5 className="blog-number">05</h5>
                        <p>
                          Lave o cabelo novamente, podendo aplicar a Máscara Pós-química de Extrato de Bambu.
                          Seque e finalize conforme preferência da cliente.
                        </p>
                      </div>
                      {/* <a href="#" className="site-button">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Our Awesome Services End --> */}
          
          <ProdutosMosaico/> 
                    
        </div>
        <Footer5 />
      </>
    );
  }
}
export default Coffeeliss;
