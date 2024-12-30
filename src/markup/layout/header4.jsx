import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { CONTATOS } from '../../constants/contatos';

class Header4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleBtn: {
        className: 'navbar-toggler collapsed navicon justify-content-end',
        open: false
      }
    };

  }

  onToggle = () => {
    const open = this.state.toggleBtn.open;
    const className = open ? 'navbar-toggler collapsed navicon justify-content-end' : 'navbar-toggler navicon justify-content-end open';

    this.setState({
      toggleBtn: {
        className,
        open: !open
      }
    });
  };

  render() {
    return (
      <>
        <header className='site-header header-transparent bg-white header mo-left header-seo' id='topo'>
          <div className='top-bar bg-white'>
            <div className='container'>
              <div className='row d-flex justify-content-end'>
                <div className='dlab-topbar-right'>
                  <ul>
                    <li>
                      <i className="fa fa-instagram" style={{marginRight: '5px'}}/>
                      <a href={'https://www.instagram.com/belameoficial/'} target='blank'>@belameoficial</a>
                    </li>
                  </ul>
                </div>
                <div className='dlab-topbar-right'>
                  <ul>
                    <li>
                      <i className="fa fa-whatsapp" style={{marginRight: '5px'}}/>
                      <a href={`https://wa.me/${CONTATOS.WHATSAPP.raw}`} target='blank'>{CONTATOS.WHATSAPP.formatted}</a>
                    </li>
                  </ul>
                </div>
                <div className='dlab-topbar-right'>
                  <ul>
                    <li><i className='ti-email m-r5'></i> belame@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='sticky-header main-bar-wraper navbar-expand-lg'>
            <div className='main-bar clearfix'>
              <div className='container clearfix'>

                <div className='logo-header mostion'>
                  <Link to={'./'} className='dez-page'><img src='images/logo.svg' alt='' /></Link>
                </div>

                <button className={`${this.state.toggleBtn.className}`} type='button' data-toggle='collapse'
                        data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false'
                        aria-label='Toggle navigation' onClick={() => this.onToggle()}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>


                <div className='header-nav navbar-collapse collapse justify-content-end' id='navbarNavDropdown'>
                  <ul className='nav navbar-nav'>
                    <li><Link to={'#'}>Belame <i className='fa fa-chevron-down'></i></Link>
                      <ul className='sub-menu'>
                        <li>
                          <Link
                            to={'./#quem-somos'}
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarNavDropdown'
                            aria-controls='navbarNavDropdown'
                            aria-expanded='true'
                            aria-label='Toggle navigation'
                            className='collapsed'
                            onClick={() => this.onToggle()}>
                            Quem somos
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li><Link to={'#'}>Nossos Produtos <i className='fa fa-chevron-down'></i></Link>
                      <ul className='sub-menu'>
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
                    </li>
                    <li><Link to={'#'}>Passo a Passo <i className='fa fa-chevron-down'></i></Link>
                      <ul className='sub-menu'>
                        <li><Link to={'./#passoapasso'} className='dez-page' onClick={() => this.onToggle()}
                                  type='button'
                                  data-toggle='collapse'
                                  data-target='#navbarNavDropdown'
                                  aria-controls='navbarNavDropdown'
                                  aria-expanded='true'
                                  aria-label='Toggle navigation'
                                  className='collapsed'>Extreme Organic</Link></li>
                        <li><Link to={'./#passoapasso'} className='dez-page' onClick={() => this.onToggle()}
                                  type='button'
                                  data-toggle='collapse'
                                  data-target='#navbarNavDropdown'
                                  aria-controls='navbarNavDropdown'
                                  aria-expanded='true'
                                  aria-label='Toggle navigation'
                                  className='collapsed'>Plastic Liss Gloss</Link></li>
                      </ul>
                    </li>
                    <li><Link to={'./#fale-conosco'} type='button'
                      // data-toggle="collapse"
                              data-target='#navbarNavDropdown'
                              aria-controls='navbarNavDropdown'
                              aria-expanded='true'
                              aria-label='Toggle navigation'
                              className='collapsed'
                    >Fale Conosco</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header4;