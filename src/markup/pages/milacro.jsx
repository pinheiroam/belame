import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';
import ProdutoTitulo from '../layout/produto-titulo';

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
          
          <ProdutoTitulo name='Milacro'
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

          {/* <!-- Our Branded Products --> */}
          <div
            className="section-full business-pro-blog"
            id="nossos-produtos"
            style={{
              backgroundImage: 'url(' + './images/background/bg6.png' + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            {/* <!-- Our Branded Products --> */}
            <div className="content-inner business-product">
              <div className="container">
                <div className="section-head title-bx text-center">
                  <h2>Nossos Produtos</h2>
                </div>
                <div className="row align-items-center d-flex">
                  <div className="col-md-12 col-lg-3">
                    <div className="product-box wow zoomIn" data-wow-delay="1s">
                      <div className="product-img">
                        <img src="images/product/belame/item1.jpg" alt="" />
                      </div>
                      <div className="product-details">
                        <h4 className="product-title">
                          <a>B'TOXX Capilar</a>
                        </h4>
                        <span className="product-tage">UNIDADE</span>
                        <ul className="rating-star">
                          {/* <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li> */}
                        </ul>
                        <div className="product-price">
                          {/*                                                         <h4>R$67,00</h4>
                           */}{' '}
                        </div>
                        {/*                                                     <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a>
                         */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="row align-items-end d-flex">
                      <div className="col-lg-8 col-md-6 col-sm-12">
                        <div
                          className="product-box product-lg product-right wow zoomIn"
                          data-wow-delay="0.2s">
                          <div className="product-details">
                            <h4 className="product-title">
                              <a>Extreme Organic</a>
                            </h4>
                            <span className="product-tage">UNIDADE</span>
                            <ul className="rating-star">
                              {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                            </ul>
                          </div>

                          <div className="product-img">
                            <img src="images/product/belame/item2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product-box product-sm wow zoomIn" data-wow-delay="0.8s">
                          <div className="product-img">
                            <img src="images/product/belame/item3.jpg" alt="" />
                          </div>
                          <div className="product-details">
                            <h4 className="product-title">
                              <a>Broto de bambu</a>
                            </h4>
                            <span className="product-tage">UNIDADE</span>
                            <ul className="rating-star">
                              {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                            </ul>
                            <div className="product-price">
                              {/*                                                                 <h4>R$67,00</h4>
                               */}{' '}
                            </div>
                            {/*                                                             <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a>
                             */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-self-start">
                        <div className="product-box product-sm wow zoomIn" data-wow-delay="0.6s">
                          <div className="product-img">
                            <img src="images/product/belame/item5.jpg" alt="" />
                          </div>
                          <div className="product-details">
                            <h4 className="product-title">
                              <a>SOS Capilar</a>
                            </h4>
                            <span className="product-tage">KIT</span>
                            <ul className="rating-star">
                              {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                            </ul>
                            <div className="product-price">
                              {/*                                                                 <h4>R$67,00</h4>
                               */}{' '}
                            </div>
                            {/*                                                             <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a>
                             */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-6 col-sm-12">
                        <div
                          className="product-box product-lg product-right wow zoomIn"
                          data-wow-delay="0.4s">
                          <div className="product-details">
                            <h4 className="product-title" style={{ lineHeight: '24px' }}>
                              <a>Shampoo Antirresíduos + Gloss Anti Frizz</a>
                            </h4>
                            <span className="product-tage">KIT</span>
                            <ul className="rating-star">
                              {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                            </ul>
                          </div>
                          <div className="product-img">
                            <img src="images/product/belame/item6.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-3">
                    <div className="product-box wow zoomIn" data-wow-delay="1s">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a>Plastic Liss Gloss</a>
                        </h4>
                        <span className="product-tage">UNIDADE</span>

                        {/* <ul className="rating-star">
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                    </ul> */}
                        {/* <div className="product-price">
                                                        <h4>R$149,89</h4>
                                                    </div> 
                                                    <a href="https://www.bemarke.com/loja/belame/product/3cWgqeMg9iytnuF9D" className="site-button button-sm radius-xl">Comprar</a> */}
                      </div>
                      <div className="product-img">
                        <img src="images/product/belame/item4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Our Branded Products END --> */}
          </div>
        </div>
        <Footer5 />
      </>
    );
  }
}
export default Milacro;
