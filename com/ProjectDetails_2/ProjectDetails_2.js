import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 
'react-bootstrap';
import '../../Asset/css/custom.css';
import community from '../../Asset/image/community.jpg';
import {Link} from 'react-router-dom';
export default class ProjectDetails_2 extends Component{
	render(){
		return(
			<Fragment>
		      <Container className='mt-5'>
			   <Row>
			    <Col lg={6} md={6} sm={12}>
			     <img src={community} className='projectDetailsImg'/>
			    </Col>
			    <Col lg={6} md={6} sm={12}>
			    <h2 className='ServiveName'>Community Connect </h2>
			    <p className='ServiceDescription'>
			    This is a dynamic and responsive Community Connect  Application</p>
			
			    <ul>
			     <li className='ServiceDescription'>Unlimited Dynamic Product Catagory</li>
			     <li className='ServiceDescription'>Admin Can Add ,Edit Delete Product Dunamically</li>
			     <li className='ServiceDescription'>Dynamic shipping point facality</li>
			     <li className='ServiceDescription'>App force update system form server</li>
			     <li className='ServiceDescription'> App can recieve push botification anytime also after the app is closed</li>
			     <li className='ServiceDescription'>Admin can push notification to the user</li>
			   
			    </ul>
			     <Button variant="primary">
			     <a href='https://amazing-knuth-de990c.netlify.app/' target='_blank'
			          className='link-style' >Live Preview</a></Button>
			    </Col>
			   </Row>
			  </Container>
			</Fragment>
		)
	}
}
