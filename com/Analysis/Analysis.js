import React,{Component,Fragment}from 'react';
import {Container,Row,Col,Button,Nav,Navbar,NavDropdown} from 
'react-bootstrap';
import {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip} from 'recharts';

class Analysis extends  Component{
	constructor(){
		super();
		this.state={
			data:[
				
				{technology:'Java',Project:100},
				{technology:'Kotlin',Project:40},
				{technology:'SQL',Project:90},
				{technology:'Bootstrap',Project:95},
				{technology:'Jquery',Project:60},
				{technology:'React',Project:90},
				{technology:'PHP',Project:100},
				{technology:'Angular',Project:65},
				
			]
		}
	}
	render(){
		var blue="rgba(0,115,230,0.8)"
		return(
			<Fragment>
			<Container className='text-center mt-3'>
			  <h1 className='ServiceMainTitle'>Technology Used</h1>
			  <Row>
			   <Col style={{height:'300px'}}
			    lg={6} md={12} sm={12}>
			     <ResponsiveContainer>
			      <BarChart width={100} height={300} 
			        data={this.state.data}>
			        <XAxis dataKey='technology'/>
			        <Tooltip/>
			       
			     <Bar dataKey="Project" fill={blue}>
			     </Bar>
			    </BarChart>
			      </ResponsiveContainer>
			    
			   </Col>
			
			
			
			   <Col lg={6} md={12}>
			   <p className='text-justify chat_description'>The simplest form of technology is the development and use of basic tools. The prehistoric invention of shaped stone tools followed by the discovery of how to control fire increased sources of food. The later Neolithic Revolution extended this, and quadrupled the sustenance available from a territory. The invention of the wheel helped humans to travel in and control their environment.

Developments in historic times, including the printing press, the telephone, and the Internet, have lessened physical barriers to communication and allowed humans to interact freely on a global scale.

Technology has many effects. It has helped develop more advanced economies (including today's global economy) and has allowed the rise of a leisure class. Many technological processes produce unwanted by-products known as pollution and deplete natural resources to the detriment of Earth's environment. Innovations have always influenced the values of a society and raised new questions in the ethics of technology. Examples include the rise of the notion of efficiency in terms of human productivity, and the challenges of bioethics.

Philosophical debates have arisen over the use of technology, with disagreements over whether technology improves the human condition or worsens it. Neo-Luddism, anarcho-primitivism, and similar reactionary movements criticize the pervasiveness of technology, arguing that it harms the environment and alienates people; proponents of ideologies such as transhumanism and techno-progressivism view continued technological progress as beneficial to society and the human condit</p>
			    </Col>
			  </Row>
			</Container>
			</Fragment>
		)
	}
}
export default Analysis;