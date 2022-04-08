import React,{Component,Fragment} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import '../../Asset/css/custom.css';
class AboutDes extends Component{
	render(){
		return(
	  <Fragment>
	     <Container className='mt-5'>
			<Row>
			<Col sm={12} md={12} lg={12}>
			<h1 className='ServiveName'>Who I am</h1>
			 <hr/>
			 <p className='ServiceDescription'>
			I am Abu Al Shahriar Rifat.I am studying University of Sharda in Information Technology Department. I love programming . I am a professional Full stack Software Engineer, web developer and Competitive Programmer.Basically I am woking both frontend && backbend with Javascript .
			 </p>
			<h1 className='ServiveName'>My Expertness </h1>
			<hr/>
			 <p>##Programming Language - 
			 <br/>
             1.Javascript,<br/>
             2.Typescript,  <br/>          
             3.C++<br/>
             ## FrontEnd Web Development :HTML5,CSS3.<br/>
              ##CSS framework: Bootstrap -4&5, SASS.<br/>
              ##IDE Environment :Visual Studio, ,Atom,Bracket ,Webstorm.<br/>
              ## Javascript Frameworks && libraries:<br/>
             1) React Js (Redux &&Next Js)<br/>
              ##Back end:<br/>
             1.Node js(Express Js)<br/>
             ##Database management tools:<br/>
             1.MongoDB,<br/>
              ##Version Control Syetem:Git,SVN,CVN;<br/>
               ##Others tools:Command Line,Git Bush and PowerShell Command,Rest Api,Fetch ApI,JSON,Ajax..<br/>
                I am also expert at Linux Operating System,System designing , Data structures & Algorithms, and Software Architecture..</p><br/>
			   <h1 className='ServiveName'>My Mission</h1>
			   <hr/>
			   <p className='ServiceDescription' ></p>
			   <h1 className='ServiveName'>My Vision</h1>
			   <hr/>
			   <p className='ServiceDescription'></p>
			 <hr/>
			 </Col>
			</Row>
		</Container>
	 </Fragment>
		)
	}
}
export default AboutDes;