import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import '../../Asset/css/custom.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import myImg from '../../Asset/image/my_pic.jpg';
import akash from '../../Asset/image/akash.jpg';
import muin from '../../Asset/image/muin.jpg';
class ClientReview extends Component{
	render(){
		
      var settings = {
	  autoplay:true,
	  autoplaySpeed:3000,
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
	  vertical:true,
	  verticalSwiping:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
		return(
			<Fragment>
			 <Container className='text-center marginIs'>
			 <h1 className='ServiceMainTitle text-center'>Client Says</h1>
			  <Slider {...settings}>
			  <div>
			      <Row className='text-center 
			      justify-content-center'>
			       <Col lg={6} md={6} sm={12}>
			       <img  className='CircleImg'  src={myImg} />
			       <h5>Abu Al Shahriar Rifat</h5>
			       <p className='ServiveName'>
			       Web Developement and Competative Programmer</p>
		        	<p className='ServiceDescription'>First I analysis the requrement to project.According to the requrement I make a proper techical analysis</p>
			       </Col>
			      </Row>
			 </div>
			
			<div>
			      <Row className='text-center justify-content-center'>
			      <Col lg={6} md={6} sm={12}>
			       <img  className='CircleImg'  src={akash} />
			        <h5 
			        className='ServiveName'>
			       Akash Khan</h5>
			       <h1 className='ServiveName'>Mobile Application Developer</h1>
		        	<p className='ServiceDescription'>First I analysis the requrement to project.According to the requrement I make a proper techical analysis</p>
			       </Col>
			      </Row>
			 </div>
			<div>
			     <Row className='text-center justify-content-center'>
			      <Col lg={6} md={6} sm={12}>
			       <img  className='CircleImg' src={muin} />
			        <h5 
			        className='ServiveName'>
			         MD.Muinul Hasan
			       </h5>
			       <h1 className='ServiveName'>
			       Graphics Designer </h1>
		        	<p className='ServiceDescription'>First I analysis the requrement to project.According to the requrement I make a proper techical analysis.</p>
			       </Col>
			      </Row>
			 </div>
			
			 </Slider>
			 </Container>
			</Fragment>
		)
	}
}
export default ClientReview;