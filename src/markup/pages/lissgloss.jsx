import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';


class Lissgloss extends Component {


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
                    <div className="section-full content-inner bg-white tax-info-chart" style={{ backgroundImage: "url(" + './images/background/bg4.png' + ")", backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>
                        <div className="container">
                            <div className="row">
                                <div className="feature-img-bx wow zoomIn col-lg-6 wow fadeInUp text-center" data-wow-delay="1s" data-wow-duration="3s">
                                <div className="video">
                                    <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/FIQGervC0O4?autoplay=1&modestbranding=1&color=white" frameborder="0" allowfullscreen />
                                </div>
{/*                                     <img src="images/main-slider/topo-lissgloss.jpg" alt="" className="" style={{ paddingTop: "25px" }} />
 */}                            </div>
                                <div className="section-head text-left title-bx col-lg-6 pt-5 ">
                                    <h4 className="m-b10 wow fadeInUp" style={{ color: '#58468c' }} data-wow-delay="1s" data-wow-duration="3s">Belame apresenta:</h4>
                                    <h2 className="box-title m-tb0 blog-number wow fadeInUp" style={{ color: '#6cc000' }} data-wow-delay="2s" data-wow-duration="3s">Liss Gloss<span className="bg-primary"></span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="3s" data-wow-duration="3s">O Gloss Anti Frizz Plastic Belame foi especialmente desenvolvida com a máxima tecnologia para suprir as necessidades dos mais exigentes profissionais da área da beleza. O produto apresenta uma tecnologia que une Óleo de Coco, Óle de Babaçu e Lumini System, oferece ao profissional um selamento total das cutículas e cabelos mais resistentes, macios consideráveis no anti frizz.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- ELement Style  6 --> */}
                    <div className="section-full content-inner about-us-box" style={{ backgroundImage: "url(" + './images/background/bg10.png' + ")", backroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                        {/* <div className="sort-title-bx" data-name="Element Style 6"><i className="fa fa-angle-double-right"></i></div> */}
                        <div className="container">
                            <div className="section-head text-center title-bx ">
                                <h2 className="box-title m-tb0 blog-number" style={{ color: '#6cc000' }}>Passo a Passo<span className="bg-primary"></span></h2>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.2s">
                                    <div className="dlab-box-bg m-b30  fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-ensaboar.jpg' + ")", backgroundColor: "#fff" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <span className="icon-cell icon-xxl"><img src="./images/passos/ENSABOAR.png"></img></span>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">01</h5>
                                                <p>Lave com o <b className="text-pink">Shampoo Anti Residuos</b> e deixe agir por 5 minutos e enxague.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.4s">
                                    <div className="dlab-box-bg m-b30  fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-secador.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/SECADOR.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">02</h5>
                                                <p>Seque os fios 100% e divida o cabelo em 4 partes.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.6s">
                                    <div className="dlab-box-bg m-b30 fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-aplicacao.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/APLICACAO.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className=" blog-number">03</h5>
                                                <p>Aplique o Gloss Anti Frizz respeitando 1 cm do couro cabeludo, iniciando pela nuca até a ultima mecha em todo o cabelo. Deixe agir por 20 minutos.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.8s">
                                    <div className="dlab-box-bg m-b30 fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-secador.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/SECADOR.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">04</h5>
                                                <p>Seque o cabelo com secador Morno. Seque ou escove 100%.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.9s">
                                    <div className="dlab-box-bg m-b30  fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-chapinha.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/CHAPINHA.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">05</h5>
                                                <p>Pranche em mechas finas de 8 a 12 vezes, após finalizado pode lavar os cabelos apenas com água morna e aplicar um hidratante.</p>
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
                                <div className="col-md-5">
                                    <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                                        <div className="dlab-post-info">
                                            <div className="blog-number">01</div>
                                            <div className="dlab-post-title ">
                                                <h3 className="post-title"><a href={"extremeorganic"}>Como usar o Extreme Organic Belame</a></h3>
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
                                                <a href={"extremeorganic"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                <div className="dlab-post-media blog-curve-img">
                                            <a href={"extremeorganic"}>
                                                <img src="images/blog/latest-blog/pic1.png" alt="" />
                                            </a>
                                        </div>
                                {/*     <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
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
                                     */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Recent Blog Posts END --> */}
                </div>



                <Footer5 />

            </>
        )
    }
}
export default Lissgloss;