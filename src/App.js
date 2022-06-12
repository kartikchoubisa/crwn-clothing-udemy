import React from 'react';
import {HomePage} from './pages/homepage/homepage.components.jsx';
import {ShopPage} from "./pages/shop/shop.components.jsx";
import Header from "./components/header/header.components.jsx";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.components.jsx";
import './App.css'
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'

import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.components";



class App extends React.Component {


	unsubscribeFromAuth = null

	componentDidMount() {
		const {setCurrentUser} = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);
					userRef.onSnapshot(snapShot => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
						})
					});
				} else {
					setCurrentUser(userAuth);
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
				<Header/>
				<Switch>
					<Route exact path="/crwn-clothing-udemy/" component={HomePage}/>
					<Route path="/crwn-clothing-udemy/shop" component={ShopPage}/>
					<Route exact path="/crwn-clothing-udemy/checkout" component={CheckoutPage}/>
					<Route exact path="/crwn-clothing-udemy/signin" render={() => this.props.currentUser ?
						(<Redirect to='/crwn-clothing-udemy/'/>)
						: (<SignInAndSignUp/>)
					}/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps =  createStructuredSelector(
	{currentUser: selectCurrentUser}
)

const mapDispatchToProps = dispatch => (
	{setCurrentUser: user => dispatch(setCurrentUser(user))}
)
export default connect(mapStateToProps, mapDispatchToProps)(App);