import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import g from '../../Asset/image/g.png';
import w from '../../Asset/image/w.png';
import p from '../../Asset/image/m.png';
class Service extends Component{
	render(){
		return(
			<Fragment>
			   <Container>
			      <h1 className='text-center ServiceMainTitle'>MY SERVICE</h1>
			     <Row>
			      <Col lg={4} md={6} sm={12}>
			          <div className='ServiceCard  text-center'>
			            <img src={p}/>
			            <h3 className='ServiveName'>Mobile Aplication Developemnt</h3>
			            <h5 className='ServiceDescription'>Mobile phones have changed the way we live our lives providing voice calling, text messaging and mobile
                        Internet access. The very first mobile phones were two-way radios that allowed taxi drivers and the emergency
                        services to communicate. Motorola, on 3 April 1973 was first company to mass produce the first handheld
                         mobile phone.</h5>

			         </div>
			     </Col>
			      <Col lg={4} md={6} sm={12}>
			        <div className='ServiceCard  text-center'>
			         <img src={w}/>
			         <h3 className='ServiveName'>Mobile Aplication Developemnt</h3>
			         <h5 className='ServiceDescription'>A web application (or web app) is application software that runs on a web server, unlike computer-based software programs that are run locally on the operating system (OS) of the device. Web applications are accessed by the user through a web browser with an active network connection.</h5>
			       </div>
			      </Col>
			
			      <Col lg={4} md={6} sm={12}>
			       <div className='ServiceCard text-center'>
			         <img src={g}/>
			         <h3 className='ServiveName'>Graphics Design</h3>
			            <h5 className='ServiceDescription'>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</h5>
			       </div>
			     </Col>
			     </Row>
			   </Container>
			</Fragment>
		)
	}
}
export default Service;