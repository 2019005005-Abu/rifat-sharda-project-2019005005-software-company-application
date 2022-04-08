import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 
'react-bootstrap';
import '../../Asset/css/custom.css';
import covid from '../../Asset/image/covid.jpg';
import {Link} from 'react-router-dom';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
class CourseDetails extends Component{
	render(){
		return(
			<Fragment>
		     <Container className='TopFixBanner p-0' 
			    fluid={true}>
			     <div className='TopBannerOverlay'>
			         <Container className='topPageCourseContent'>
			             <Row>
			               <Col sm={12} md={6} lg={6}>
			                 <h3 className='courseFullTitle'>Full Dynamic Website</h3>
			                  <p className='cousreTotalLecture'>Total Lecture=30</p>
			                  <p className='cousreTotalLecture'>Total Student=30</p>
			                </Col>
			               <Col sm={12} md={6} lg={6}>
			               <p className='courseDescrition'>
			                 I am highly talented,experienced professional and cooperative software Developer.I am working in programming
			                 and web developemnt,mobile application Developement and UI Developement the major field I am expert in.Moreover I have teaching passion I makes video tutorials to share my knowledge.My overall skills make me  a complete software Developer.So you can hire me for your Project
			               </p>
			               </Col>
			             </Row>
			        </Container>
			      
			     </div>
			  </Container>
			
			  <Container className='mt-5'>
			        <Row>
			         <Col sm={12} lg={6} md={6}>
			          <h1 className='ServiveName'>Skill You Get</h1>
			          <ul>
			           <li className='ServiceDescription'>Unlimited Dynamic Product Caterogy</li>
			           <li className='ServiceDescription'>Unlimited Dynamic Product Caterogy</li>
			           <li className='ServiceDescription'>Unlimited Dynamic Product Caterogy</li>
			           <li className='ServiceDescription'>Unlimited Dynamic Product Caterogy</li>
			           <li className='ServiceDescription'>Unlimited Dynamic Product Caterogy</li>
			           <li className='ServiceDescription'>Unlimited Dynamic Product Caterogy</li>
			           
			         </ul>
			          <Button variant="primary">
			          <a href='https://www.udemy.com/' target='_blank'
			          className='link-style' >Buy Now</a></Button>
			          </Col>
			          <Col sm={12} lg={6} md={6} >
			          <Player>
			          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                     <BigPlayButton position="center" />
                      </Player>
			          </Col>
			       </Row>
			 </Container>
			</Fragment>
		)
	}
}
export default CourseDetails;