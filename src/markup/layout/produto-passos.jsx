import React, { Component } from 'react';
import PassoCard from './passo-card';
// import { Link } from 'react-router-dom';

class ProdutoPassos extends Component {
  render() {
    return (
      <>
        <div
          className="section-full content-inner about-us-box"
          style={{
            backgroundImage: 'url(./images/background/bg10.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >

        <div className="container">
          <div className="section-head title-bx">
            <h2 className="box-title text-center m-tb0 blog-number" style={{ color: '#6cc000' }}>
              Passo a passo
            </h2>
            <p>
              {this.props.texto}
            </p>
            <br />
            <div className="row justify-content-start">
              {this.props.passoCard.map((passoCard, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.2s">
                  {passoCard}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default ProdutoPassos;
