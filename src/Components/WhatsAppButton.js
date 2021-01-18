import { mdiWhatsapp } from '@mdi/js';
import Icon from '@mdi/react';
import React, { Component } from 'react'

class WhatsAppButton extends Component {

	render(){
		
		return (
			<a href={`https://wa.me/${this.props.phone}?text=${this.props.message}`} className="whatsapp-btn">
				<Icon path={mdiWhatsapp}
					size={2}
					className="icon"
					/>
			</a>
		)
	}

}

export default WhatsAppButton; 