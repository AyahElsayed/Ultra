import React from 'react' 
import { Link } from 'react-router-dom'
import {Navbarsection , Logo , Logotext , Ullist , Listitem , Anchor , } from './style'
 const Navbar =() => {
  
    return (
      <Navbarsection className="navbar">
            <div className="container">
                <Logo>
                    <Logotext>Ultra Profile</Logotext>
                </Logo>

                <Ullist>
                    <Listitem><Link className="anchor" to ="/">Home</Link></Listitem>
                    <Listitem><Anchor href="#">Work</Anchor></Listitem>
                    <Listitem><Anchor href="#">Portfolio</Anchor></Listitem>
                    <Listitem><Anchor href="#">Resume</Anchor></Listitem>
                    <Listitem><Anchor href="#">About</Anchor></Listitem>
                    <Listitem><Link className="anchor" to ="/contact">Contact</Link></Listitem>
                </Ullist>
            </div>
      </Navbarsection>
    )
  }

export default Navbar