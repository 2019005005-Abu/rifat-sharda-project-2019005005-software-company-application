import React,{Component,Fragment}from 'react';
import {Container,Row,Col,Button,Nav,Navbar,NavDropdown} from 
'react-bootstrap';
import logo_1 from '../../Asset/image/logo_1.png';
import logo_2 from '../../Asset/image/logo_2.png';
import {NavLink} from 'react-router-dom';
class TopNavigation extends Component{
	constructor(props){
		super();
		this.state={
			navBarTitle:'NavTitle',
			navBarLogo_1: [logo_1],
			nabBarBack:"nabBackrgound",
			navBarItem:"navItem",
			navVarient:"dark",
			PageTitle:props.title
		}
	}
	onScroll=()=>{
		if(window.scrollY>100){
			this.setState({
				navVarient:"light",
				navBarTitle:'NavTitleScrol',
				navBarLogo_1:[logo_2],
				nabBarBack:'navBackroundScroll',
				navBarItem:"navItemScroll"
				
			})
		}
		else if(window.scrollY<100){
			this.setState({
			  navVarient:"dark",
			  navBarTitle:'NavTitle',
			  navBarLogo_1:[logo_1],
			  abBarBack:'nabBackrgound',
			 navBarItem:"navItem"
			})
			
		}
			}
	
	componentDidMount(){
		window.addEventListener('scroll',this.onScroll)
	}
	
	render(){
return(
<Fragment>
<title>{this.state.PageTitle}</title>
<Navbar  varient={this.state.navVarient}
className={this.state.nabBarBack} fixed="top" 
collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand >
	<NavLink to='/'
	className={this.state.navBarTitle}>
	<img src={this.state.navBarLogo_1} 
	style={{width:"70px"}}/>  
          ABU AL SHAHRIAR RIFAT
	</NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   <Nav className="me-auto"></Nav>
     
    <Nav>
	  <Nav.Link>
      <NavLink to="/" 
	   index activeStyle={{color:'#00a8ee'}}
	  className={this.state.navBarItem}>HOME</NavLink>
	 </Nav.Link>	
			
	  <Nav.Link>
	  <NavLink to="/service" 
	  index activeStyle={{color:'#00a8ee'}}
	  className={this.state.navBarItem}>SERVICES</NavLink>
	  </Nav.Link>
			
	  <Nav.Link>
	  <NavLink to="/course" 
	  index activeStyle={{color:'#00a8ee'}}
	  className={this.state.navBarItem}>COURSES</NavLink>
	  </Nav.Link>
			
	  <Nav.Link>	
	  <NavLink to="/project" 
	  index activeStyle={{color:'#00a8ee'}}
	  className={this.state.navBarItem}>PORTFOLIO</NavLink>
	 </Nav.Link>
			
	  <Nav.Link>
	  <NavLink to="/contact" 
	   index activeStyle={{color:'#00a8ee'}}
	  className={this.state.navBarItem}>CONTACT</NavLink>
	   </Nav.Link>
	  <Nav.Link>
	  <NavLink to="/about" 
	 index activeStyle={{color:'#00a8ee'}}
	 className={this.state.navBarItem}>ABOUT</NavLink>
	 </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</Fragment>
		)
	}
}
export default TopNavigation;