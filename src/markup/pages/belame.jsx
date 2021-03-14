import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';

import ReactRevSlider6 from '../element/revslider6';
import HomeCarousel3 from '../element/home-carousel3';

class Belame extends Component {

    componentDidMount() {
        window.dz_rev_slider_6();
    }

    render() {
        return (
            <>
                <Header4 />

                <div className="page-content bg-white rubik-font">

                    <ReactRevSlider6 />

                    <div className="content-block">
                        {/* <!-- Coded & Maintained --> */}
                        <div id="sobre" className="section-full content-inner-2 about-bx2" style={{ backgroundImage: "url(" + './images/background/bg4.png' + ")", backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="row align-items-center d-flex">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="row">
                                            <div className="col-5 bubbx1">
                                                <div className="bubbles-bx bubbles-bx1 wow zoomIn" data-wow-delay="0.2s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles1.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon1.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Orgânico</h5>
                                                    </div>
                                                </div>
                                                <div className="bubbles-bx bubbles-bx2 ml-auto wow zoomIn" data-wow-delay="0.4s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles3.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon3.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Cuidado</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3 bubbx1">
                                                <div className="bubbles-bx bubbles-bx3 wow zoomIn" data-wow-delay="0.6s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles2.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon2.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Liberdade</h5>
                                                    </div>
                                                </div>
                                                <div className="bubbles-bx bubbles-bx4 wow zoomIn" data-wow-delay="0.8s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles4.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon4.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Confiança</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 bubbx1 d-flex align-items-center">
                                                <div className="bubbles-bx bubbles-bx5 wow zoomIn" data-wow-delay="1s" style={{ backgroundImage: "url(" + './images/bubbles/bubbles5.png' + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src="images/bubbles/icon5.png" alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Belame</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 title-bx about-bx2-content text-right wow fadeInRight" data-wow-delay="1.2s">
                                        <h2>- Agressiva <br /> + Orgânica</h2>
                                        <br className="d-block d-lg-none"/> 
                                        <div className="dlab-separator bg-primary op8"></div>
                                        <p>A Belame chegou para ser mais acessivel e trazer mais praticidade no seu dia a dia. Pensando na sua saúde, nossos produtos são mais orgânicos e menos agressivos aos fios.</p>
                                        <a href={"#nossos-produtos"} className="site-button radius-xl button-md btn-long">Conheça nossos produtos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Coded & Maintained End --> */}
                        <br className="d-block d-lg-none"/> 
                        {/* <!-- Our Branded Products --> */}
                        <div className="section-full business-pro-blog" id="nossos-produtos" style={{ backgroundImage: "url(" + './images/background/bg6.png' + ")", backgroundSize: "cover", backgroundPosition: "center" }}>
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
                                                    <h4 className="product-title"><a>B'TOXX Capilar</a></h4>
                                                    <span className="product-tage">Bioplástica Capilar</span>
                                                     <ul className="rating-star">
                                                        {/* <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li> */}
                                                    </ul>
                                                    <div className="product-price">
{/*                                                         <h4>R$67,00</h4>
 */}                                                    </div> 
{/*                                                     <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a>
 */}                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="row align-items-end d-flex">
                                                <div className="col-lg-8 col-md-6 col-sm-12">
                                                    <div className="product-box product-lg product-right wow zoomIn" data-wow-delay="0.2s">
                                                        <div className="product-details">
                                                            <h4 className="product-title"><a>Extreme Organic</a></h4>
                                                            <span className="product-tage">Liss Mask</span>
                                                             <ul className="rating-star">
                                                                {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                                                            </ul>
                                                            <div className="product-price">
{/*                                                                 <h4>R$115,00</h4>
 */}                                                            </div>
{/*                                                             <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a>
 */}                                                        </div> 
                                                      
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
                                                            <h4 className="product-title"><a>Broto de bambu</a></h4>
                                                            <span className="product-tage">Tratamento</span>
                                                             <ul className="rating-star">
                                                                {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                                                            </ul>
                                                            <div className="product-price">
{/*                                                                 <h4>R$67,00</h4>
 */}                                                            </div> 
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
                                                            <h4 className="product-title"><a>SOS Capilar</a></h4>
                                                            <span className="product-tage">Reparação</span>
                                                             <ul className="rating-star">
                                                                {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                                                            </ul>
                                                            <div className="product-price">
{/*                                                                 <h4>R$67,00</h4>
 */}                                                            </div> 
{/*                                                             <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a>
 */}                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-6 col-sm-12">
                                                    <div className="product-box product-lg product-right wow zoomIn" data-wow-delay="0.4s">
                                                        <div className="product-details">
                                                            <h4 className="product-title"><a>Plastic Liss Gloss</a></h4>
                                                            <span className="product-tage">Shampoo Antirresiduos</span>
                                                             <ul className="rating-star">
                                                                {/* <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li> */}
                                                            </ul>
                                                            <div className="product-price">
{/*                                                                 <h4>R$67.00</h4>
 */}                                                            </div> 
{/*                                                             <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a>
 */}                                                           
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
                                                    <h4 className="product-title"><a>Plastic Liss Gloss</a></h4>
                                                    <span className="product-tage">Anti Frizz</span>
                                                   
                                                    <ul className="rating-star">
                                                       {/*  <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li> */}
                                                    </ul>
                                                    <div className="product-price">
                                                      {/*   <h4>R$67,00</h4> */}
                                                    </div> 
                                                    {/* <a href="shop-product-details" className="site-button button-sm radius-xl">Comprar</a> */}
                                               
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
                        
                        {/* <!-- Our Recent Blog Posts --> */}
                        <div id="passoapasso" className="content-inner business-blog">
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Passo a Passo</h2>
                                </div>
                                <div className="row justify-content-around">
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                                            <div className="dlab-post-info">
                                                <div className="blog-number">01</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><a href={"ExtremeOrganic"}>Como usar o Extreme Organic Belame</a></h3>
                                                </div>
                                                {/* <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><a href={"javascript:"}>Serenity Caldwell</a></li>
                                                        <li className="post-comment"><a href="#">2 Comments</a> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div> */}
                                                <div className="dlab-post-text">
                                                    <p>Para obter resultados diferentes precisamos de ações diferentes, por isso trazemos pra você o passo a passo para obter o melhor resultado ao usar nosso produto.</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <a href={"ExtremeOrganic"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                            <div className="dlab-post-media blog-curve-img d-none d-md-block">
                                                <a href={"ExtremeOrganic"}>
                                                    <img src="images/blog/latest-blog/pic1.png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="dlab-post-media blog-curve-img d-none d-md-block">
                                                <a href={"Lissgloss"}><img src="images/blog/latest-blog/pic2.png" alt="" /></a>
                                            </div>
                                            <div className="dlab-post-info">
                                                <div className="blog-number">02</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><a href={"Lissgloss"}>Como utilizar o Plastic Liss Gloss Belame</a></h3>
                                                </div>
                                                {/* <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><a href={"javascript:"}>Serenity Caldwell</a></li>
                                                        <li className="post-comment"><a href={"javascript:"}>2 Comments</a> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div> */}
                                                <div className="dlab-post-text">
                                                    <p>Para um tratamento ideal de seus cabelos utilize nosso tratamento plastic liss gloss, aqui vai o passo a passo para obter o resultado ideal.</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <a href={"Lissgloss"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    {/* <div className="col-md-4">
                                        <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                            <div className="dlab-post-info">
                                                <div className="blog-number">03</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><a href={"javascript:"}>Como realizar um compra pelo nossa loja no bemarke</a></h3>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Clique aqui para conhecer nossa plataforma e como encontrar o belame mais próxima de você.</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <a href={"javascript:"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                            <div className="dlab-post-media blog-curve-img">
                                                <a href={"javascript:"}><img src="images/blog/latest-blog/pic3.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Recent Blog Posts END --> */}
                        {/* <!-- Newsletter --> */}
                        {/* <div className="content-inner newsletter-bx">
                            <div className="container">
                                <form className="row text-white dezPlaceAni align-items-center dzSubscribe m-lr0 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s" action="script/mailchamp.php" method="post">
                                    <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="title-bx">
                                            <h2 className="m-b0">Receba Novidades</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-12 contact-form-bx">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label>Escreva seu email</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                                <button name="submit" value="Submit" type="submit" className="site-button radius-xl">Assinar</button>
                                            </div>
                                            <div className="dzSubscribeMsg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                        {/* <!-- Newsletter END --> */}
                        
                        {/* <!-- Contact Us --> */}
                        {/* <div id="contato" className="content-inner business-contact" style={{ backgroundImage: "url(" + './images/background/bg10.png' + ")", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Tem alguma dúvida? Entre em contato</h2>
                                </div>
                                <form className="row dezPlaceAni contact-form-bx">
                                    <div className="dzFormMsg"></div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Nome Completo*</label>
                                                <input name="dzName" required="required" type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Email*</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Telefone*</label>
                                                <input name="dzOther[Subject]" required="required" type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
                                            <div className="input-group">
                                                <label>Pergunte o que quiser*</label>
                                                <textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="1s" data-wow-duration="1s">
                                        <button name="submit" type="submit" value="Submit" className="site-button radius-xl">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}

                        {/* <!-- Contact Us END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer5 />
            </>
        )
    }
}
export default Belame;