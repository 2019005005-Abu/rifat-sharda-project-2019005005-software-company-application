import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button,Modal } from 'react-bootstrap';
import { faCheckSquare, faCoffee,faPlayCircle } from 
'@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Asset/css/custom.css';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class TopBanner extends Component{
	constructor(){
		super();
		this.state={
			show:false,
		}
	
	}
	
	modalClose=()=>this.setState({show:false});
	modalOpen=()=>this.setState({show:true});
	render(){
		return(
			<Fragment>
			  <Container className='text-center'>
			   <Row>
			    <Col lg={12} md={12} sm={12} className='VideoCard'>
			    <div>
			     <p className='videoTitle'>How I Do</p>
			     <p className='VideoDescrition'>First I analysis the requrement to  project.According to the requrement I make a proper techical analysis.Then I build a software architecture to the planning I start coding Testing is also going  on coding .final testing take place after finishing coding part after successfull implementaion I provide 6 months free bug fixing service for corresponing project.</p>
			     <p><FontAwesomeIcon 
			     className="PlatBtn"
			       onClick={this.modalOpen}
			      icon={faPlayCircle}/></p>
			    </div>
			    </Col>
			   </Row>
			  </Container>
			<Modal  size="lg" show={this.state.show} 
			onHide={this.modalClose}>
          <Modal.Body>
			<Player>
			 <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            <BigPlayButton position="center" />
            </Player>
			
		 </Modal.Body>
          <Modal.Footer>
			
          <Button variant="primary" onClick={this.modalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
			
			</Fragment>
		)
	}
}
export default TopBanner;