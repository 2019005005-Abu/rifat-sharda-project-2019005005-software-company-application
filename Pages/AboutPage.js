import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import AboutDes
from '../com/AboutDes/AboutDes.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'
class AboutPage extends Component{
	componentDidMount(){
		window,scroll(0,0)
	}
	render(){
		return(
			<Fragment>
			  
			    <TopNavigation title={'About'}/>
			    <PageTop pagetitle='About Me'/>
			    <AboutDes/>
			     <Footer/>
			 
			</Fragment>
		)
	}
}
export default AboutPage;