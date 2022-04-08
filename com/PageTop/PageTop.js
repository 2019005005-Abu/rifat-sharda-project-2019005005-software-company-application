import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import '../../Asset/css/custom.css';
class PageTop extends Component{
	render(){
		return(
	  <Fragment>
	      <Container className='TopFixPageAbout p-0' 
			    fluid={true}>
			     <div className='TopBannerAboutOverlay'>
			         <Container className='TopContentAbout'>
			            <Row>
			         <Col className='text-center'>
			       <h4 className='TopSubTitleAbout'>
			            {this.props.pagetitle}</h4>
			               </Col>
			             </Row>
			        </Container>
			     </div>
			  </Container>
	 </Fragment>
		)
	}
}
export default PageTop;