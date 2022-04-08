import React,{Component,Fragment}from 'react';
import { render } from "react-dom";
import {Routes, Route} 
from "react-router-dom";
import Home from '../Pages/Home.js';
import ServicePage from '../Pages/ServicePage';
import AllCoursePage from '../Pages/AllCoursePage.js';
import AllProjectPage from '../Pages/AllProjectPage.js';
import ContactPage from '../Pages/ContactPage.js';
import AboutPage from '../Pages/AboutPage.js';
import RefundPage from '../Pages/RefundPage.js';
import TermDescriptionPage 
from '../Pages/TermDescriptionPage.js';
import PrivacyDescriptionPages 
from '../Pages/PrivacyDescriptionPages.js';
import ProjectDetailsPage
from '../Pages/ProjectDetailsPage.js';
import ProjectDetailsPage_2
from '../Pages/ProjectDetailsPage_2.js';
import ProjectDetailsPage_3
from '../Pages/ProjectDetailsPage_3.js';
import CourseDetailsPages
from '../Pages/CourseDetailsPages.js';
class AppRoute extends Component{
	render(){
		return(
			<Fragment>
             <Routes>
			  <Route index path='/' element={<Home/>}/>
			  <Route index
			   path='/service' element={<ServicePage/>}/>
			  <Route index 
			   path='/project' element={<AllProjectPage/>}/>
			  <Route index
			  path='/contact' element={<ContactPage/>}/>
			  <Route index
			   path='/course' element={<AllCoursePage/>}/>
			  <Route index
			  path='/about' element={<AboutPage/>}/>
			  <Route index
			  path='/Refund' element={<RefundPage/>}/>
			 <Route index
			  path='/Term' element={<TermDescriptionPage/>}/>
			 <Route index
			  path='/Privacy' 
			    element={<PrivacyDescriptionPages/>}/>
			<Route index
			  path='/ProjectDetails' 
			    element={<ProjectDetailsPage/>}/>
			<Route index
			  path='/ProjectDetails_2' 
			    element={<ProjectDetailsPage_2/>}/>
			<Route index
			  path='/ProjectDetails_3' 
			    element={<ProjectDetailsPage_3/>}/>
               <Route index
			  path='/CourseDetails' 
			    element={<CourseDetailsPages/>}/>
			  
			 </Routes>
			</Fragment>
		)
	}
}
export default AppRoute;