import React,{Component,Fragment}from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import CourseDetails
from '../com/CourseDetails/CourseDetails.js';
import Footer from  '../com/Footer/Footer.js';

class CourseDetailsPage extends Component{
	componentDidMount(){
		window,scroll(0,0)
	}
	render(){
		return(
			<Fragment>
             <TopNavigation title='Course Details'/>
			 <CourseDetails/>
			 <Footer/>
			</Fragment>
		)
	}
}
export default CourseDetailsPage;