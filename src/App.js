import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
  } from 'react-router-dom';
import Patisserie from './Pages/Patisserie';
import Restaurant from './Pages/Restaurant';
import Traiteur from './Pages/Traiteur';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/App.css';
import './Assets/zl.css';

class App extends Component {

	render() {
		return (
			<Router >
				<Switch>
					<Route exact path="/" component={Restaurant} />
					<Route exact path="/restaurant" component={Restaurant} />
					<Route exact path="/patisserie" component={Patisserie} />
					<Route exact path="/traiteur" component={Traiteur} />
				</Switch>
			</Router>
		);
	}
}

export default App;
