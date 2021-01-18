import React, { Component } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiClockOutline, mdiFacebook, mdiInstagram, mdiMapMarker, mdiMapMarkerOutline, mdiPhoneOutline, mdiWhatsapp } from '@mdi/js'
import ReactMapGL, { Marker } from 'react-map-gl';

class ContactSection extends Component {

	state = {
		viewport: {
		  width: 800,
		  height: 300,
		  latitude: 33.5857565,
		  longitude: -7.6383774,
		  zoom: 15
		}
	};

	render(){
		return (
			<Container id="contact">
				<h1 className="section-title text-center">
					Contactez Nous
				</h1>
				<Row className="contact-layout">
					<Col xs={18} md={5}>
						<div className="layout-title">
							Title
						</div>
						<div className="featured-image">
						</div>
						<ListGroup variant="flush" className="info">
							<ListGroup.Item className="item">
								<span className="prefix">
									<Icon path={mdiMapMarkerOutline}
										size={1}
										className="icon"
										/>
								</span>
								<span className="text">135, Rue Abou Ishaq El Marouni,<br></br><span style={{marginLeft:"30px"}}> Maarif Casablanca 20330</span></span>
							</ListGroup.Item>
							<ListGroup.Item className="item">
								<span className="prefix">
									<Icon path={mdiClockOutline}
										size={1}
										className="icon"
										/>
								</span>
								<span className="text">Ouvert de 8:00 à 21:00</span>
							</ListGroup.Item>
							<ListGroup.Item className="item">
								<span className="prefix">
									<Icon path={mdiPhoneOutline}
										size={1}
										className="icon"
										/>
								</span>
								<span className="text">05 22 77 41 56</span>
							</ListGroup.Item>
						</ListGroup>
						<div className="contact-socials">
							<a href="https://www.facebook.com/Lenca-de-Vignault-104687458166625" className="item">
								<Icon path={mdiFacebook}
									size={1}
									/>
							</a>
							<a href="https://www.instagram.com/lenca_de_vignault/" className="item">
								<Icon path={mdiInstagram}
									size={1}
									/>
							</a>
							<a href={`https://wa.me/${this.props.phone}?text=${this.props.message}`} className="item">
								<Icon path={mdiWhatsapp}
									size={1}
									/>
							</a>
						</div>
					</Col>
					<Col xs={18} md={7}>
						<div className="map-holder">
							<ReactMapGL
								mapboxApiAccessToken={"pk.eyJ1IjoiemxheWluZSIsImEiOiJja2h1YjIxOXMxMmE4MnJsaGF0YTJwaHljIn0.RVWWya6JjqJ1quTEMKFb6g"}
								{...this.state.viewport}
								onViewportChange={(viewport) => this.setState({viewport})}
							>
								<Marker latitude={33.5857565} longitude={-7.6383774} offsetLeft={-20} offsetTop={-10}>
									<Icon path={mdiMapMarker}
										size={1}
										color="red"
										/>
								</Marker>
							</ReactMapGL>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default ContactSection;
