import React ,{Component} from 'react'
import axios from 'axios'
import {Socialmediasection,Social,Icon,Desc,Infospan,Span} from './style'
 class Socialmedia extends Component {
   constructor(props){
     super(props)
     this.state = {
     social: [ ]
   }
  }
   componentDidMount() {
    axios.get('js/data.json').then( res => {
      this.setState({social : res.data.social})
    })
   }
   render = () => {
    const {social} = this.state
    const sociallist = social.map( (socialitem) => {
      return(
            <Social item={socialitem.id} key={socialitem.id}>
                <Icon className={socialitem.icon}></Icon>
                <Desc>
                    <Span>{socialitem.title}</Span>
                    <Infospan >{socialitem.body}</Infospan>
                </Desc>
            </Social>
      )
    })
    return (
      <Socialmediasection>
            {sociallist}
  </Socialmediasection>
    )
  }
  }
export default Socialmedia