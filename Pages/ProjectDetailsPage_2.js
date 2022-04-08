import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import ProjectDetails_2
from '../com/ProjectDetails_2/ProjectDetails_2.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'
import {Link} from 'react-router-dom';
class ProjectDetailsPage_2 extends Component{
	componentDidMount(){
		window,scroll(0,0)
	}
	render(){
		return(
			<Fragment>
		     <TopNavigation title='Project Deatils'/>
			 <PageTop pagetitle='Community Connect Project'/>
			 <ProjectDetails_2/>
			 <Footer/>
			</Fragment>
		)
	}
}
export default ProjectDetailsPage_2;