import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';
import ProdutoTitulo from '../layout/produto-titulo';
import ProdutosMosaico from '../layout/produtos-mosaico';
import PassoCard from '../layout/passo-card';
import ProdutoPassos from '../layout/produto-passos';

class Lissgloss extends Component {


    render() {
        return (
            <>
                <Header4 />

                <div className="page-content bg-white rubik-font">
                    <ProdutoTitulo
                        name='Liss Gloss'
                        text='O Gloss Anti Frizz Plastic Belame foi especialmente desenvolvida com a máxima tecnologia para suprir as necessidades dos mais exigentes profissionais da área da beleza. O produto apresenta uma tecnologia que une Óleo de Coco, Óle de Babaçu e Lumini System, oferece ao profissional um selamento total das cutículas e cabelos mais resistentes, macios consideráveis no anti frizz.'
                        image='images/product/belame/plastic-liss-topo.png'
                    />

                    <ProdutoPassos
                        texto='Cada profissional deve avaliar o estado do cabelo da cliente. Caso avalie positivamente para aplicação do produto, deve escovar o cabelo completamente e deixar o produto agir somente por meia hora.'
                        passoCard={[
                            <PassoCard
                                image='./images/passos/ENSABOAR.png'
                                numero='01'
                                descricao={["Lave com o ",<b className="text-pink">Shampoo Anti Residuos</b>, " e deixe agir por 5 minutos e enxague."]}
                            ></PassoCard>,
                            <PassoCard
                                image='./images/passos/SECADOR.png'
                                numero='02'
                                descricao='Seque os fios 100% e divida o cabelo em 4 partes.'
                            ></PassoCard>,
                            <PassoCard
                                image='./images/passos/APLICACAO.png'
                                numero='03'
                                descricao='Aplique o Gloss Anti Frizz respeitando 1 cm do couro cabeludo, iniciando pela nuca até a ultima mecha em todo o cabelo. Deixe agir por 20 minutos.'
                            ></PassoCard>,
                            <PassoCard
                                image='./images/passos/SECADOR.png'
                                numero='04'
                                descricao='Seque o cabelo com secador Morno. Seque ou escove 100%.'
                            ></PassoCard>,
                            <PassoCard
                                image='./images/passos/CHAPINHA.png'
                                numero='05'
                                descricao='Pranche em mechas finas de 8 a 12 vezes, após finalizado pode lavar os cabelos apenas com água morna e aplicar um hidratante.'
                            ></PassoCard>,
                        ]}
                    />

                    <ProdutosMosaico />

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
                                    <div className="dlab-post-media blog-curve-img bg-white">
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

                </div>
                {/* <!-- Our Recent Blog Posts END --> */}



                <Footer5 />
            </>
        )
    }
}
export default Lissgloss;