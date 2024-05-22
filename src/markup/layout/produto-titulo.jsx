import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class ProdutoTitulo extends Component {
  render() {
    return (
      <div className="page-content bg-white rubik-font" style={{ backgroundImage: "url(" + '../images/background/bg4.png' + ")", backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>
        <br></br>
        <br class="d-none d-sm-block"></br>
        <br class="d-none d-sm-block"></br>
        <div
          className="section-full content-inner tax-info-chart"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className="container">
            <div className="row">
              <div
                className="wow zoomIn col-lg-6 wow fadeInUp text-center"
                data-wow-delay="1s"
                data-wow-duration="3s">
                  <img src={this.props.image} alt={'Imagem do produto ' + this.props.name} style={{maxWidth: 420}} />
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
                > 
                {this.props.name} <span className="bg-primary"></span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="3s" data-wow-duration="3s">
                {this.props.text}
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