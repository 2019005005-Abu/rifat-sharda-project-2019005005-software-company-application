import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import AllCourse
from '../com/AllCourse/AllCourse.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'
class AllCoursePage extends Component{
	componentDidMount(){
		window,scroll(0,0)
	}
	render(){
		return(
			<Fragment>
			  
			    <TopNavigation title='All Courese'/>
			    <PageTop pagetitle='All Course'/>
			     <AllCourse/>
			     <Footer/>
			 
			</Fragment>
		)
	}
}
export default AllCoursePage;