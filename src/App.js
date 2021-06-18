import React from 'react';
import {HomePage} from './pages/homepage/homepage.components.jsx';
import {ShopPage} from "./pages/shop/shop.components.jsx";
import Header from "./components/header/header.components.jsx";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.components.jsx";
import './App.css'
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'

import {Route, Switch} from "react-router-dom";


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);
					userRef.onSnapshot(snapShot => {
						this.setState({
								currentUser: {
									id: snapShot.id,
									...snapShot.data()
								}
							}
						)

					});
				} else {
					this.setState({currentUser: userAuth}, ()=> console.log(this.state))
				}

			}
		)
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}


	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/shop" component={ShopPage}/>
					<Route exact path="/signin" component={SignInAndSignUp}/>
				</Switch>
			</div>
		);
	}
}

export default App;