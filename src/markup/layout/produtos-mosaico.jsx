import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class ProdutosMosaico extends Component {
    render() {
        return (
            <div className="section-full business-pro-blog" id="nossos-produtos" style={{ backgroundImage: "url(" + './images/background/bg6.png' + ")", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="content-inner business-product">
                    <div className="container">
                        <div className="section-head title-bx text-center">
                            <h2>Nossos Produtos</h2>
                        </div>


                        <div className="row align-items-center d-flex">
                            <div className="col-md-12 col-lg-3 row align-items-end justify-content-end d-flex">
                                <div className="d-flex col-lg-10 col-md-6">
                                    <div className="product-box product-sm wow zoomIn" data-wow-delay="0.6s">
                                        <div className="product-img">
                                            <img src="images/product/belame/item5.jpg" alt="Imagem do produto SOS Capilar" />
                                        </div>
                                        <div className="product-details">
                                            <h4 className="product-title"><a>SOS Capilar</a></h4>
                                            <span className="product-tage">KIT</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 product-box wow zoomIn" data-wow-delay="1s">
                                    <div className="product-details">
                                        <h4 className="product-title"><a>Coffee Liss</a></h4>
                                        <span className="product-tage">UNIDADE</span>
                                    </div>
                                    <div className="product-img">
                                        <img src="images/product/belame/coffee-liss.png" alt="Imagem do produto Coffee Liss" />
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-12 col-lg-6">
                                <div className="row align-items-end d-flex">
                                    <div className="col-lg-8 col-md-6 col-sm-12">
                                        <div className="product-box product-lg product-right wow zoomIn" data-wow-delay="0.2s">
                                            <div className="product-details">
                                                <h4 className="product-title"><a>Extreme Organic</a></h4>
                                                <span className="product-tage">UNIDADE</span>
                                            </div>
                                            <div className="product-img">
                                                <img src="images/product/belame/item2.jpg" alt="Imagem do produto Extreme Organic" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product-box product-sm wow zoomIn" data-wow-delay="0.8s">
                                            <div className="product-img">
                                                <img src="images/product/belame/item3.jpg" alt="Imagem do produto Broto de Bambu" />
                                            </div>
                                            <div className="product-details">
                                                <h4 className="product-title"><a>Broto de bambu</a></h4>
                                                <span className="product-tage">UNIDADE</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-self-start">
                                        <div className="product-box wow zoomIn" data-wow-delay="1s">
                                            <div className="product-img">
                                                <img src="images/product/belame/item1.jpg" alt="Imagem do produto B'TOXX Capilar" />
                                            </div>
                                            <div className="product-details">
                                                <h4 className="product-title"><a>B'TOXX Capilar</a></h4>
                                                <span className="product-tage">UNIDADE</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-sm-12">
                                        <div className="product-box product-lg product-right wow zoomIn" data-wow-delay="0.4s">
                                            <div className="product-details">
                                                <h4 className="product-title" style={{ lineHeight: "24px", }}><a>Shampoo Antirresíduos + Gloss Anti Frizz</a></h4>
                                                <span className="product-tage">KIT</span>
                                            </div>
                                            <div className="product-img">
                                                <img src="images/product/belame/item6.jpg" alt="Imagem do produto Shampoo Antirresíduos e Gloss Anti Frizz" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-12 col-lg-3">
                                <div className="product-box wow zoomIn" data-wow-delay="1s">
                                    <div className="product-details">
                                        <h4 className="product-title"><a>Plastic Liss Gloss</a></h4>
                                        <span className="product-tage">UNIDADE</span>
                                    </div>
                                    <div className="product-img">
                                        <img src="images/product/belame/item4.jpg" alt="Imagem do produto Plastic Liss Gloss" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="product-box product-sm wow zoomIn" data-wow-delay="0.8s">
                                        <div className="product-img">
                                            <img src="images/product/belame/milacro.png" alt="Imagem do produto Milacro" />
                                        </div>
                                        <div className="product-details">
                                            <h4 className="product-title"><a>Milacro</a></h4>
                                            <span className="product-tage">UNIDADE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProdutosMosaico;