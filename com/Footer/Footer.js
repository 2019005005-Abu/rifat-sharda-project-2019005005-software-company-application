import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 
'react-bootstrap';
import '../../Asset/css/custom.css';
import{faFacebook,faYoutube,faLinkedin} from 
 '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
class Footer extends Component{
	render(){
		return(
			<Fragment>
			     <Container fluid={true} 
			      className='FooterSection text-center  bg-dark text-white'>
			        <Row>
			          <Col  lg={3} md={6} sm={12} 
			            className='p-5 text-justify'>
			           <h1 className='ServiveName'>FOLLOW US</h1>
	                   <p><a href='#' target="_blank" 
			           className='SocialLink'>
			           <FontAwesomeIcon 
			            icon={faFacebook}/> Facebook</a></p>
			           <p><a href='https://www.youtube.com/' target="_blank" className='SocialLink'>
			           <FontAwesomeIcon 
			            icon={faYoutube}/> Youtube</a></p>
			              <p><a href='https://www.linkedin.com/in/abu-al-shahriar-rifat-3503a91a6/' target="_blank" 
			               className='SocialLink'>
			               <FontAwesomeIcon 
			               icon={faLinkedin}/> Linkedin</a></p>
			               </Col>
			              <Col  lg={3} md={6} sm={12} 
			              className='p-5 text-justify'>
			
			             <h1 className='ServiveName'>ADDRESS</h1>
			             <p className='ServiceDescription'>  ##FLAT NO:404, 4th FLOOR,TOWER NO:SUN-2,MIGSUN ULTIMO,
			             OMICRON-3,GREATER NOIDA,GAUTAM BUDDHA NAGAR,
			             UTTAR PRADESH,INDIA-201310.</p>
			             <p className='ServiceDescription'>
			              <FontAwesomeIcon icon={faPhone}/>
			               MOBILE NO:9667647053,</p>
			             <p className='ServiceDescription'>
			              <FontAwesomeIcon 
			              icon={faEnvelope}/>EMAIL:rifatdiu2686@gmail.com</p>
			          
					  </Col>
			          <Col  lg={3} md={6} sm={12}
			           className='p-5 text-justify' >
			           <h1 className='ServiveName'>INFORMATION</h1>
			            <Link to='/about' target="_blank"  
			            className='SocialLink' >About Me</Link><br/>
		
			           <Link to='/contact' target="_blank" className='SocialLink'>Contact Me</Link><br/>
			
			           <a href='' target="_blank" className='SocialLink'>Facebook</a><br/>
			         </Col>
			          <Col lg={3} md={6} sm={12} 
			            className='p-5  text-justify'>
			            <h1 className='ServiveName'>LEGAL</h1>
			           <Link to='/Refund' target="_blank" className='SocialLink'>Refund Policy</Link><br/>
			           <Link to='/Term' target="_blank" className='SocialLink'>Term and Condition</Link><br/>
			           <Link to='/Privacy' target="_blank" className='SocialLink'>Privacy Policy</Link><br/>
			          </Col>
			       </Row>
			    </Container>
			<Container fluid={true} 
			className='text-center CopyRightSection'>
			 <a href='' target="_blank" className='CopyRightLink'>Abu Al Shahriar Rifat &copy 2022-23</a>
			 </Container>
			</Fragment>
		)
	}
}
export default Footer;