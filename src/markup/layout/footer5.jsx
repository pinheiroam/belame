import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase footer-white business-footer">
                    <div className="footer-top bg-primary">
                        <div className="container wow fadeIn" data-wow-delay="0.5s">
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Belame</h5>
                                        <ul>
                                            <li><Link to={'./#'}>Home</Link></li>
                                            <li><Link to="/#nossos-produtos">Nossos Produtos</Link></li>
                                            <li><Link to="/#passoapasso">Passo a Passo</Link></li>
                                            <li><Link to="/#fale-conosco">Contato</Link></li>
                                            <li><Link to="./privacy-policy">Política de Privacidade</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Produtos</h5>
                                        <ul>
                                            <li><a href={'./extremeorganic'}>Extreme Organic</a></li>
                                            <li><a href={'./lissgloss'}>Plastic Liss Gloss</a></li>
                                            <li><a href={'./coffeeliss'}>Coffee Liss</a></li>
                                            <li><a href={'./milacro'}>Milacro</a></li>
                                            <li><Link to={'./#nossos-produtos'} className='dez-page' onClick={() => this.onToggle()}
                                                type='button'
                                                data-toggle='collapse'
                                                data-target='#navbarNavDropdown'
                                                aria-controls='navbarNavDropdown'
                                                aria-expanded='true'
                                                aria-label='Toggle navigation'
                                                className='collapsed'>Broto de Bambu</Link></li>
                                            <li><Link to={'./#nossos-produtos'} className='dez-page' onClick={() => this.onToggle()}
                                                type='button'
                                                data-toggle='collapse'
                                                data-target='#navbarNavDropdown'
                                                aria-controls='navbarNavDropdown'
                                                aria-expanded='true'
                                                aria-label='Toggle navigation'
                                                className='collapsed'>B'TOXX Capilar</Link></li>
                                            <li><Link to={'./#nossos-produtos'} className='dez-page' onClick={() => this.onToggle()}
                                                type='button'
                                                data-toggle='collapse'
                                                data-target='#navbarNavDropdown'
                                                aria-controls='navbarNavDropdown'
                                                aria-expanded='true'
                                                aria-label='Toggle navigation'
                                                className='collapsed'>SOS Capilar</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Fale Conosco</h5>
                                        <ul>
                                            {/* <li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li> */}
                                            {/*<li><i className="ti-mobile"></i><strong>Telefones</strong>
                                                Marco Aurélio: +55 67 9 8199-7782<br></br>
                                                Maurício: +55 67 9 9971-2775<br></br>
                                                Rosana: +55 67 9 9945-6263
                                            </li>*/} 
                                            <li style={{textTransform: 'lowercase'}}><i className="ti-email"></i><strong>email</strong> belame@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 footer-col-4 pt-4">
                                    <Link to={'./'} className='dez-page'><img src='images/logo.svg' alt='' /></Link>
                                    <ul className="list-inline pt-3">
                                            <li><a href="https://www.facebook.com/Belame-108760044392587" className="site-button facebook circle "><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://www.instagram.com/belameoficial/" className="site-button instagram circle "><i className="fa fa-instagram"></i></a></li>
                                            
                                        </ul>
                                </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-left text-transform" style={{textTransform: 'none'}}> <span>Gileade Comércio e Distribuidora de Cosmeticos - CNPJ 51.946.500/0001-51 - Todos os direitos reservados © 2024 belame</span> </div>
                        </div>
                    </div>
                </div>
            </footer >
            </>
        );
    }
}

export default Footer1;
