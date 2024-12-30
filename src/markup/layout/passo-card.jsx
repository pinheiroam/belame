import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class PassoCard extends Component {
    render() {
        return (
            <div className="dlab-box-bg m-b30  fly-box h-100" style={{ backgroundColor: "#fff" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <span className="icon-cell icon-xxl"><img src={this.props.image} alt={this.props.alt} /></span>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">{this.props.numero}</h5>
                                                <p>{this.props.descricao}</p>
                                            </div>
                                        </div>
                                    </div>
        )
    }
}

export default PassoCard;

