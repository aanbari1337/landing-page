import React, { Component } from 'react'
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import Menu from '../Components/Menu'
import About from '../Components/About';
import Contact from '../Components/ContactSection';
import Footer from '../Components/Footer';
import Livraison from '../Components/Livraison';
import WhatsAppButton from '../Components/WhatsAppButton';

class Patisserie extends Component {

	encode_message = (text) => {
		return encodeURIComponent(text);
	}
	
	render(){
		const phone = "212656029369";
		const message = "Im interested in your x";

		return (
			<div className="App">
				<Header />
				<Slider root="/assets/patisserie"/>
				<Menu root="/assets/patisserie"/>
				<About />
				<Livraison />
				<Contact phone={phone} message={message} />
				<Footer phone={phone} message={message} />
				<WhatsAppButton phone={phone} message={this.encode_message(message)} />
      		</div>
		)
	}
}

export default Patisserie;
