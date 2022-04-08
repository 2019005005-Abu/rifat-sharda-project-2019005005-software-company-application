import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button,Form} from 'react-bootstrap';
import '../../Asset/css/custom.css';
import{faFacebook,faYoutube,faLinkedin} from 
 '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AboutDes extends Component{
	render(){
		return(
	  <Fragment>
	     <Container className='my-2'>
		  <Row>
			<Col lg={6} md={6} sm={12}>
			      <h1 className='ServiveName'>Quick Connect</h1>
			      <Form>
                   <Form.Group className="mb-3"   controlId="formBasiName">
                     <Form.Label  className='ServiceDescription'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  
                </Form.Group>
			       <Form.Group className="mb-3"   controlId="formBasicEmail">
                     <Form.Label  
			         className='ServiceDescription' >Email</Form.Label>
                   <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
			    
			         <Form.Group>
                     <Form.Label className="mb-3"
			        controlId="formBasicEmail"  className='ServiceDescription'>Message</Form.Label>
                     <Form.Control  
			          as="textarea" rows={3} 
			          placeholder="Message" />
			 	</Form.Group>
			    <br/><br/>       

			
           <Button variant="primary" type="submit">Submit</Button>
              <br/><br/> 
            
             </Form>
			      </Col>
			         <Col lg={6} md={6} sm={12}>
			         <h1 className='ServiveName'>Discuss Now</h1>
			              <p className='ServiceDescription'>  ##FLAT        NO:404, 4th FLOOR,TOWER NO:SUN-2,MIGSUN          ULTIMO,
			                   OMICRON-3,GREATER NOIDA,GAUTAM BUDDHA NAGAR,
			                   UTTAR PRADESH,INDIA-201310.</p>
			                  <p className='ServiceDescription'>
			                  <FontAwesomeIcon icon={faPhone}/>
			                   MOBILE NO:9667647053,</p>
			                 <p className='ServiceDescription'>
			                <FontAwesomeIcon 
			                icon={faEnvelope}/>EMAIL:rifatdiu2686@gmail.com
			               </p>
			   
			      </Col>
		    </Row>
		</Container>
	 </Fragment>
		)
	}
}
export default AboutDes;