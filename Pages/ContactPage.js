import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import Contact
from '../com/Contact/Contact.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'
class ContactPage extends Component{
	componentDidMount(){
		window,scroll(0,0)
	}
	render(){
		return(
			<Fragment>
			  
			    <TopNavigation title='Contact'/>
			    <PageTop pagetitle='Contact'/>
			     <Contact/>
			     <Footer/>
			 
			</Fragment>
		)
	}
}
export default ContactPage;