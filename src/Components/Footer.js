import { mdiFacebook, mdiInstagram, mdiWhatsapp } from '@mdi/js';
import Icon from '@mdi/react';
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import logo_img from '../Assets/vignault.png'

class Footer extends Component {

	render(){
		return (
			<div className="footer-layout" style={{marginBottom:"20px"}}>
				<Row>
					<Col xs={18} md={4} className="logo">
						<img src={logo_img} alt="img-footer" />
					</Col>
					<Col xs={18} md={4} className="info">
						<div className="item">
							<span className="prefix">Télephone:</span>05 22 77 41 56
						</div>
						<div className="item">
							<span className="prefix">Heures d'ouvertures:</span> De 8:00 à 21:00
						</div>
					</Col>
					<Col xs={18} md={4} className="socials">
						<div className="items">
							<a href="https://www.facebook.com/Lenca-de-Vignault-104687458166625" className="item">
								<Icon path={mdiFacebook}
									size={1}
									className="icon"
									/>
							</a>
							<a href="https://www.instagram.com/lenca_de_vignault/" className="item">
								<Icon path={mdiInstagram}
									size={1}
									className="icon"
									/>
							</a>
							<a href={`https://wa.me/${this.props.phone}?text=${this.props.message}`} className="item">
								<Icon path={mdiWhatsapp}
									size={1}
									className="icon"
									/>
							</a>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Footer;