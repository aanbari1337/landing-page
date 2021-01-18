import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import about_img from '../Assets/rest.jpg'
import logo_img from '../Assets/vignault.png'

class About extends Component {

	render(){
		return (
			<Container id="apropos" style={{ marginBottom: "80px"}}>
				<h1 className="section-title text-center">
					A propos de Nous
				</h1>
				<Row className="about-layout">
					<Col xs={18} md={5} className="d-flex">
						<div className="image-holder">
							<img className="img" src={about_img} alt="about-img"/>
						</div>
					</Col>
					<Col xs={18} md={7}>
						<div className="info">
							{/* <div className="back-icon" style={{ backgroundImage: "url(/vignault.png)"}}></div> */}
							<div className="title">Title</div>
							<div className="text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
							</div>
							<div className="logo">
								<img src={logo_img} alt="vignault"/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default About;
