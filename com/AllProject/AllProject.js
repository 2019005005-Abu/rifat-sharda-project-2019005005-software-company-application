import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import '../../Asset/css/custom.css';
import SH from '../../Asset/image/SH.jpg';
import LE from '../../Asset/image/LE.jpg';
import WA from '../../Asset/image/WA.jpg';
class AllProject extends Component{
	render(){
		return(
	  <Fragment>
	     <Container className='text-center mt-5 '>
			
	   <Row>
		      <Col sm={12} md={6} lg={4} className='p-2'> 
                   <Card className="ProjrctCard">
                     <Card.Img variant="top" 
			          className='imgStyle'
			    
			       src={WA}/>
                     <Card.Body>
                   <Card.Title className="ProjectCardTitle">
			         Wave Effects</Card.Title>
                      <Card.Text className='ProjectCardDescription'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                           </Card.Text>
                    
			             <Button variant="primary" >
			          <a href='https://6234d093bbb4a400af9baf7e--musing-hodgkin-286411.netlify.app/' target='_blank'
			         className='link-style'>Preview</a></Button>
                     </Card.Body>
                   </Card>
			   </Col>
			
			
			   <Col sm={12} md={6} lg={4} className='p-2'>
			  <Card className="ProjrctCard">
             <Card.Img variant="top" src={LE} className='imgStyle'/>
             <Card.Body>
              <Card.Title className="ProjectCardTitle">Leaves Effects</Card.Title>
                     <Card.Text className='ProjectCardDescription'>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
            </Card.Text>
           <Button variant="primary"><a href='https://6234d10392257d00cbf607ae--pedantic-goldberg-a79e5b.netlify.app/' target='_blank'
			className='link-style'>Preview</a></Button>
          </Card.Body>
      </Card>
			</Col>
			
			   <Col sm={12} md={6} lg={4} className='p-2'>
		       <Card className="ProjrctCard">
                <Card.Img variant="top" src={SH} className='imgStyle'/>
                 <Card.Body>
                <Card.Title  className="ProjectCardTitle">
			   Products Display Effects
			</Card.Title>
                <Card.Text  className='ProjectCardDescription'>
                 Some quick example text to build on the card title and make up the bulk ofthen card's content.
               </Card.Text>
           <Button variant="primary"><a href='https://6234d4621f2f9b0063790aa4--optimistic-meninsky-b02e1a.netlify.app/'target='_blank'
		className='link-style'>Preview</a></Button>
       </Card.Body>
  </Card></Col>
</Row>
</Container>
	 </Fragment>
		)
	}
}
export default AllProject;