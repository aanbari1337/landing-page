import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

class About extends Component {

	render(){
		return (
			<div className="livraison text-center" style={{ marginBottom: "80px", backgroundImage: "url(/assets/restaurant/slider/slide3.jpg)"}} >
				<h1 className="text-center">
					Comment ça marche ?
				</h1>
				<Row className="m-0">
					<Col xs={18} md={4} className="item">
						<div className="livr-icone">
							<i className="fas fa-hamburger icon"></i>
						</div>
						<div className="txt">Choose your favorite food</div>
					</Col>
					<Col xs={18} md={4} className="item">
						<div className="livr-icone">
							<i className="fas fa-truck icon"></i>
						</div>
						<div className="txt">Delivery of your meal</div>
					</Col>
					<Col xs={18} md={4} className="item">
						<div className="livr-icone">
							<i className="fas fa-utensils icon"></i>
						</div>
						<div className="txt">Eat, Enjoy and share</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default About;
