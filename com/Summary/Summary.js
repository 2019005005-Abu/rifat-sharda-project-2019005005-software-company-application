import React,{Component,Fragment}from 'react';
import {
Container,
Row,Col,
Button,
Nav,
Navbar,
NavDropdown,
Card
} from 'react-bootstrap';
import { faCheckCircle, faCoffee } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import {VisibilitySensor}  from 'react-visibility-sensor';








class Summary extends Component{
	render(){
		return(
			<Fragment>
			  <Container className='SummaryBanner p-0 SummarySection'        fluid={true}>
			     <div className='SummaryBannerOverlay'>
			        <Container className='text-center'>
			         <Row>
			           <Col lg={8} md={6} sm={12}>
			              <Row>
			                 <Col>
			                  <h1 className='countNumber countSection'>
			                   <CountUp start={0} end={1780} delay={0}>
                              {({ countUpRef }) => (
                                <div>
                               <span ref={countUpRef} />
                                </div>
                               
                             )}
                             </CountUp>
			                  </h1>
			                  <h4 className='countTitle '>Total Projects</h4>
			                  <hr className="bg-white w-25 hr_1"/>
			                 </Col>
			
			                 <Col>
			                  <h1 className='countNumber countSection'>
								<CountUp start={0} end={2000} delay={0}>
                                 {({ countUpRef }) => (
                                 <div>
                               <span ref={countUpRef} />
                                </div>
                               )}
                              </CountUp> 
							</h1>
			                  <h4 className='countTitle'>Clients</h4>
			                  <hr className="bg-white w-25 hr_1"/>
			                 </Col>
			
			               </Row>
			               </Col>
			                <Col lg={4} md={6} sm={12}>
			                <Card className="WorkCard">
                            <Card.Body>
                            <Card.Title className='cardTitle'>How  We  Work</Card.Title>
                            <Card.Text>
                           <p className='cardSubTitle'>
			
			
			                <FontAwesomeIcon 
			                className="IconBullet text-center"
			                 icon={faCheckCircle}/>
			                 Requirement Gathering</p>
			
			                 <p className='cardSubTitle '>
			                <FontAwesomeIcon 
			                 className="IconBullet  text-center"
			                 icon={faCheckCircle}/>
			                 System Analysis</p>
			                
			                 
			                 <p className='cardSubTitle '>
			                <FontAwesomeIcon 
			                 className="IconBullet  text-center"
			                 icon={faCheckCircle}/>
			                 Coding Testing</p>
			                
			
			                 <p className='cardSubTitle '>
			                <FontAwesomeIcon 
			                 className="IconBullet  text-center"
			                 icon={faCheckCircle}/>
			                 Implementation</p>
			               
                           </Card.Text>
                           
                       </Card.Body>
                      </Card>
			          </Col>
			         </Row>
			       </Container>
			     </div>
			  </Container>
			</Fragment>
		)
	}
}
export default Summary;