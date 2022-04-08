import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import AllProject
from '../com/AllProject/AllProject.js';
import Footer from  '../com/Footer/Footer.js';
import PageTop from '../com/PageTop/PageTop.js'
class AllProjectPage extends Component{
	componentDidMount(){
		window,scroll(0,0)
	}
	render(){
		return(
			<Fragment>
			  
			    <TopNavigation title='All Projects'/>
			    <PageTop pagetitle='Portfolio'/>
			    <AllProject/>
			     <Footer/>
			 
			</Fragment>
		)
	}
}
export default AllProjectPage;