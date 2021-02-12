import {React , Fragment} from 'react'
import {Contactsection,Contacttitle,Span,Form,Forminput,Inputtext,Inputemail,Inputsub,Textarea,Inputsubmit} from './style'
import Footer from '../footer/footer'
const Contact =() => {
  
    return (
      <Fragment>
        <Contactsection>
            <div className ="container">
                <Contacttitle c><Span>Drop </Span>Me A line</Contacttitle>
                <Form action="">
                    <Forminput>
                        <Inputtext placeholder="Your Name" />
                        <Inputemail placeholder="Your Email" />
                    </Forminput>
                    <Inputsub placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Inputsubmit value="Send Message"/>
                </Form>
            </div>
    </Contactsection>
    <Footer />
      </Fragment>
    
    )
  }

export default Contact