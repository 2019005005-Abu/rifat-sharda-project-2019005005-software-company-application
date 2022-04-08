import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TopBanner from '../com/TopBanner/TopBanner.js';
import Service from '../com/Service/Service.js';
import TopNavigation 
from '../com/TopNavigation/TopNavigation.js';
import Analysis from '../com/Analysis/Analysis.js';
import Summary from '../com/Summary/Summary.js';
import RecentProject 
from '../com/RecentProject/RecentProject.js';
import Course from  '../com/Course/Course.js';
import Video from  '../com/Video/Video.js';
import ClientReview from  '../com/ClientReview/ClientReview.js';
import Footer from  '../com/Footer/Footer.js';

class Home extends Component{
	render(){
		return(
	  <Fragment>
	 <TopNavigation title='Home'/>
      <TopBanner/>
	  <Service/>
	  <Analysis/>
	  <Summary/>
	  <RecentProject/>
	  <Course/>
	  <Video/>
	  <ClientReview/>
	  <Footer/>
	 </Fragment>
		)
	}
}
export default Home;