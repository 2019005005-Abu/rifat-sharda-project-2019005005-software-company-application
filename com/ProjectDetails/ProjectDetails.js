import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 
'react-bootstrap';
import '../../Asset/css/custom.css';
import covid from '../../Asset/image/covid.jpg';
import {Link} from 'react-router-dom';
class ProjectDetails extends Component{
	render(){
		return(
			<Fragment>
		      <Container className='mt-5'>
			   <Row>
			    <Col lg={6} md={6} sm={12}>
			     <img src={covid} className='projectDetailsImg'/>
			    </Col>
			    <Col lg={6} md={6} sm={12}>
			    <h2 className='ServiveName'>Covid Tracker</h2>
			    <p className='ServiceDescription'>
			    This is a dynamic and responsive corona Tracker Application</p>
			
			    <ul>
			     <li className='ServiceDescription'>Unlimited Dynamic Product Catagory</li>
			     <li className='ServiceDescription'>Admin Can Add ,Edit Delete Product Dunamically</li>
			     <li className='ServiceDescription'>Dynamic shipping point facality</li>
			     <li className='ServiceDescription'>App force update system form server</li>
			     <li className='ServiceDescription'> App can recieve push botification anytime also after the app is closed</li>
			     <li className='ServiceDescription'>Admin can push notification to the user</li>
			   
			    </ul>
			     <Button variant="primary">
			     <a href='https://covid19-tracker-rifat.herokuapp.com/' target='_blank'
			          className='link-style' >Live Preview</a></Button>
			    </Col>
			   </Row>
			  </Container>
			</Fragment>
		)
	}
}
export default ProjectDetails;