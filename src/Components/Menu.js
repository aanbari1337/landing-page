import React, { Component } from 'react';
import Product from './Product';
import '../Assets/Menu.css'

class Menu extends Component {
    render() {
        return (
            <div id="menu" className="container" style={{ marginBottom: "50px"}}>
                <h1 className="text-center title-menu head-border">Notre Menu</h1>
                <div className="row row-cols-1 row-cols-md-4">
                    <Product image={this.props.root + "/menu/menu1.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu2.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu3.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu4.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu5.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu6.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu7.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu8.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu1.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu2.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu3.jpg"} desc="Nom de produit"/>
                    <Product image={this.props.root + "/menu/menu4.jpg"} desc="Nom de produit"/>
                </div>
                
            </div>
        )
    }
}

export default Menu
