 import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button,Card} 
 from 'react-bootstrap';
import community from '../../Asset/image/community.jpg';
import covid from '../../Asset/image/covid.jpg';
import burger_1 from '../../Asset/image/burger_1.jpg';
import {Link} from 'react-router-dom';
class RecentProject extends Component{
	render(){
		return(
<Fragment>
	<Container className='text-center'>
			  <h1 className='ServiceMainTitle'>Recent Project</h1>
	   <Row>
		      <Col sm={12} md={6} lg={4} className='p-2'> 
                   <Card className="ProjrctCard">
                     <Card.Img variant="top" 
			       src={covid}/>
                     <Card.Body>
                   <Card.Title className="ProjectCardTitle">
			        Corona Tracker Project
			       </Card.Title>
                      <Card.Text className='ProjectCardDescription'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                           </Card.Text>
                    
			            <Button variant="primary">
			          <Link to='/ProjectDetails' 
			         className='link-style'>Details</Link></Button>
                     </Card.Body>
                   </Card>
			   </Col>
			
			
			   <Col sm={12} md={6} lg={4} className='p-2'>
			  <Card className="ProjrctCard">
             <Card.Img variant="top" src={community} 
			style={{
			  height:'215px',
			  width:'100%'
			}} />
             <Card.Body>
              <Card.Title className="ProjectCardTitle">
			   Community Connect Project
			</Card.Title>
             <Card.Text className='ProjectCardDescription'>
                      Some quick example text to build on the card title and make up the bulk of
                     the card's content.
            </Card.Text>
               <Button variant="primary">
			          <Link to='/ProjectDetails_2' 
			         className='link-style'>Details</Link></Button>
          </Card.Body>
      </Card>
			</Col>
			
			   <Col sm={12} md={6} lg={4} className='p-2'>
		       <Card className="ProjrctCard">
                <Card.Img variant="top" 
			   src={burger_1}
			   className='img-fluid'
			    style={{
			  height:'215px',
			  width:'100%'
			}}
			/>
              <Card.Body>
              <Card.Title  className="ProjectCardTitle">
			Rifat Restaurant Project</Card.Title>
            <Card.Text  className='ProjectCardDescription'>
                 Some quick example text to build on the card title and make up the bulk ofthen card's content.
           </Card.Text>
          <Button variant="primary">
			          <Link to='/ProjectDetails_3' 
			         className='link-style'>Details</Link></Button>
  </Card.Body>
</Card></Col>
</Row>
</Container>
</Fragment>
		)
	}
}
export default RecentProject;