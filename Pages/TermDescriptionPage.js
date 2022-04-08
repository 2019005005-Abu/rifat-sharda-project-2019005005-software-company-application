import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import TermsDescription
from '../com/TermsDescription/TermsDescription.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'

class TermDescriptionPage extends Component{
	render(){
		return(
			<Fragment>
		         <TopNavigation title='Terms & Condition'/>
			    <PageTop pagetitle='Terms & Condition'/>
			     <TermsDescription/>
			     <Footer/>
			</Fragment>
		)
	}
}
export default TermDescriptionPage;