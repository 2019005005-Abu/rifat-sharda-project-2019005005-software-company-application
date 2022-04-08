import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import PrivacyDescription
from '../com/PrivacyDescription/PrivacyDescription.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'

class PrivacyDescriptionPages extends Component{
	render(){
		return(
			<Fragment>
		      <TopNavigation title='Privacy'/>
			   <PageTop pagetitle='Privacy Policy'/>
			   <PrivacyDescription/>
			   <Footer/>
			</Fragment>
		)
	}
}
export default PrivacyDescriptionPages;