import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import '../../Asset/css/custom.css';
import mob from '../../Asset/image/mob.jpg';
import web from '../../Asset/image/web.jpg';
import grap from '../../Asset/image/grap.jpg';
import dextop from '../../Asset/image/dextop.jpg';
import {Link} from 'react-router-dom';
class TopBanner extends Component{
	render(){
		return(
			<Fragment>
		       <Container className='m-5'>
			     <h1 className='ServiceMainTitle text-center'>Our Course</h1>
			     <Row>
			      <Col lg={6} md={12} sm={12} className='p-2'>
			       <Row>
			       <Col lg={6} md={6} sm={12}>
			        <img src={mob}  
			        className='img-fluid courseImgage '/>
			        </Col>
			       <Col lg={6} md={6} sm={12}>
			        <h5 className='courseTitle'>Mobile application Developement</h5>
			        <p className='courseDescription'>
			        A mobile app developer is a software engineer who works primarily with mobile devices, creating, programming, testing, and maintaining apps and mobile platforms across devices like smartphones, tablets and laptops.</p>
			       <Link to='/CourseDetails'target="_blank" className='courseDetails_a'>Details</Link>
			       </Col>
			       </Row>
			
			
			
			
			      </Col>
			      <Col lg={6} md={12} sm={12} className='p-2'>
			
			       <Row>
			       <Col lg={6} md={6} sm={12}>
			        <img src={web}  className='img-fluid  courseImgage'/>
			        </Col>
			        <Col lg={6} md={6} sm={12}>
			        <h5  className='courseTitle' >Mobile application Developement</h5>
			        <p className='courseDescription'>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.</p>
		            <Link to='/CourseDetails'target="_blank" className='courseDetails_a'>Details</Link>
			       </Col>
			       </Row>
			
			      </Col>
			      <Col lg={6} md={12} sm={12} className='p-2'>
				  <Row>
			       <Col lg={6} md={6} sm={12}>
			        <img src={dextop} className='img-fluid courseImgage'/>
			        </Col>
			        <Col lg={6} md={6} sm={12}>
			        <h5  className='courseTitle'>Dextop application Developement</h5>
			        <p className='courseDescription  '>Dextop development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.</p>
					<Link to='/CourseDetails'target="_blank" className='courseDetails_a'>Details</Link>
			       </Col>
			       </Row>
				 </Col>
			     <Col lg={6} md={12} sm={12} className='p-2' >
					 <Row>
			       <Col lg={6} md={6} sm={12}>
			        <img src={grap} className='img-fluid  courseImgage'/>
			        </Col>
			        <Col lg={6} md={6} sm={12}>
			        <h5  className='courseTitle'>Dextop application Developement</h5>
			        <p  className='courseDescription'>Graphics is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.
				     </p>
					<Link to='/CourseDetails'target="_blank" className='courseDetails_a'>Details</Link>
			       </Col>
			       </Row>
			    </Col>
			    </Row>
			   </Container>
			</Fragment>
		)
	}
}
export default TopBanner;