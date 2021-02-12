import React ,{Component} from 'react'
import axios from 'axios' 
import {Worksection, Worktitle, Span, Workpart, Icon, Parttitle, Line, Partdesc} from  './style.js'
 class Work extends Component {
   constructor(props){
     super(props)
     this.state = {
      works: [ ]
  } 
   }
    
    componentDidMount() {
        axios.get('js/data.json').then(res =>{this.setState({
            works: res.data.works
        })})
    }
  render() {
      const {works}=this.state
      const worklist = works.map( (workitem) => {
        return (
            <Workpart first={workitem.id} key={workitem.id}>
                  <Icon className={workitem.icon_name}></Icon>
                  <Parttitle>{workitem.title}</Parttitle>
                  <Line/>
                  <Partdesc>
                        {workitem.body}
                  </Partdesc>
              </Workpart>
        )
      })
    return (
        <Worksection>
          <div className="container">
              <Worktitle><Span>My</Span> Work</Worktitle>
              {worklist}
              
          </div>
        </Worksection>
      )
  }
    
  }

export default Work