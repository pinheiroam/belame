import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';

class Coffeeliss extends Component {
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
          <div
            className="section-full content-inner bg-white tax-info-chart"
            style={{
              backgroundImage: 'url(' + './images/background/bg4.png' + ')',
              backgroundPosition: 'top right',
              backgroundRepeat: 'no-repeat'
            }}>
            <div className="container">
              <div className="row">
                <div
                  className="feature-img-bx wow zoomIn col-lg-6 wow fadeInUp text-center"
                  data-wow-delay="1s"
                  data-wow-duration="3s">
                  <div className="video">
                    {/*<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/FIQGervC0O4?autoplay=1&modestbranding=1&color=white" frameborder="0" allowfullscreen />*/}
                  </div>
                </div>
                <div className="section-head text-left title-bx col-lg-6 pt-5 ">
                  <h4
                    className="m-b10 wow fadeInUp"
                    style={{ color: '#58468c' }}
                    data-wow-delay="1s"
                    data-wow-duration="3s">
                    Belame apresenta:
                  </h4>
                  <h2
                    className="box-title m-tb0 blog-number wow fadeInUp"
                    style={{ color: '#6cc000' }}
                    data-wow-delay="2s"
                    data-wow-duration="3s">
                    Coffee Liss<span className="bg-primary"></span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="3s" data-wow-duration="3s">
                  Saúde e beleza caminham juntos na vida. Com esse conceito chega ao mercado a COFFEE LISS da BELAME PROFESSIONAL HAIR. 
                  Um produto inovador, com tecnologia exclusiva de alinhamento térmico dos fios proporcionando  brilho, 
                  maciez e movimento natural aos cabelo e eliminando o frizz. Sua fórmula contém PROLISS, 
                  um componente  altamente eficaz na hidratação dos fios capilares e na obtenção de um brilho 
                  espelhado e macio. Além disso, a COFFEE LISS proporciona  grande otimização no tempo do 
                  tratamento. Com um menor número de chapadas, saúde e beleza são experimentadas pelos profissionais e sua clientela.
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  Orientações para cabelos loiros<span className="bg-primary"></span>
                </h2>
                <h2 className="box-title m-tb0 blog-number" style={{ color: '#6cc000' }}>
                  com tintura<span className="bg-primary"></span>
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
                  Passo a Passo<span className="bg-primary"></span>
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
                          Separe mechas finas e pranche lentamente por 3 a 6 vezes cada mecha.
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
export default Coffeeliss;
