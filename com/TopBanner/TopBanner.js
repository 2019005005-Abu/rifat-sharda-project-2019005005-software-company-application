import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import '../../Asset/css/custom.css';
import {Link} from 'react-router-dom';
class TopBanner extends Component{
	render(){
		return(
			<Fragment>
			  <Container className='TopFixBanner p-0' 
			    fluid={true}>
			     <div className='TopBannerOverlay'>
			         <Container className='TopContent'>
			             <Row>
			               <Col className='text-center'>
			                  <h5 className='TopTitle'>
			                   SOFTWARE ENGINEER</h5>
			                   <h6 className='TopSubTitle'>
			                   Mobile & Web Application  Developement</h6>
			                  <Button variant="primary">
			                  <Link 
			                 className='link-style'to='/about'>More Info</Link></Button>
			               </Col>
			             </Row>
			        </Container>
			     </div>
			  </Container>
			</Fragment>
		)
	}
}
export default TopBanner;