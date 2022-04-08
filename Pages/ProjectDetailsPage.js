import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import ProjectDetails
from '../com/ProjectDetails/ProjectDetails.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'
import {Link} from 'react-router-dom';
class ProjectDetailsPage extends Component{
	componentDidMount(){
		window,scroll(0,0)
	}
	render(){
		return(
			<Fragment>
		     <TopNavigation title='Project Deatils'/>
			 <PageTop pagetitle='Corona Tracker'/>
			 <ProjectDetails/>
			 <Footer/>
			</Fragment>
		)
	}
}
export default ProjectDetailsPage;