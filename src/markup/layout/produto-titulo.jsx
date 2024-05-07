import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class ProdutoTitulo extends Component {
  render() {
    return (
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
                  data-wow-duration="3s"
                > {this.props.name}
                      <span className="bg-primary"></span>
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
      </div>
        );
  }
}

        export default ProdutoTitulo;