import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
class Refund_Section extends Component{
	render(){
		return(
			<Fragment>
            <Container className='mt-5'>
			<Row>
			<Col sm={12} md={12} lg={12}>
			<ul>
			 <li>First 30 days Money Back</li>
			 <li>THIS IS NOT A BUY-AND-TRY PRODUCT</li>
			 <li>A return policy is an absolute necessity for successfully running an eCommerce website. It will help you provide quality customer service, and make it easier to handle returns by enforcing consistency. Writing one takes these steps:

            1. Determine the timeframe during which you'll accept returns
            2. Determine the acceptable condition of the item
            3. Create steps for the customer to follow (e.g. performing their return through an RMA)
            4. Write the policy following the guidelines below.
            By following these steps, you'll become aware of your business's requirements for your return policy and be able to create one that works for you and makes sense for your customers.</li>
			<li>After 30 days:There is no refund offered after the first 30 days</li>
			<li>To serve you and others better in the future,we require that you tell us why you want a refund and provide us with and opportunity to help you fix the issue.We want satisfied customer</li>
			<li>Please Remember that for a refund but contuning to use product purchased from us is the same thing as stealing and also violate applicable intellctual  property right law</li>
			</ul>
			 </Col>
			</Row>
		</Container>
               
			</Fragment>
		)
	}
}
export default Refund_Section;