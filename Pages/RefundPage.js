
import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import Contact
from '../com/Contact/Contact.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'
import Service from '../com/Service/Service.js';
import Refund_Section 
from '../com/Refund Description/Refund_Section.js';
class RefundPage extends Component{
	render(){
		return(
			<Fragment>
             <TopNavigation title="Refund Policy"/>
			 <PageTop pagetitle="Refund Policy"/>
			 <Refund_Section/>
			 <Footer/>
			</Fragment>
		)
	}
}
export default RefundPage;