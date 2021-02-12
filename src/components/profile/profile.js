import React from 'react'
import {Profileskills,Profilesection,Profilelist,Profileitem,Span,Spanweb,
  Skills,Skillsdesc,Bar,Bartitle,Barperc,Parent,Parentspan,Profiletitle,
  Skillstitle, Spantitle } from  './style.js'  
 const Profile =() => {
  
    return (
      <Profileskills>
        <div className ="container">
            <Profilesection>
                <Profiletitle><Spantitle>My </Spantitle>Profile</Profiletitle>
                <Profilelist>
                    <Profileitem>
                        <Span>Name</Span>
                        Hamza Nabil
                    </Profileitem>
                    <Profileitem>
                        <Span>Birthday</Span>
                        21/1/1996
                    </Profileitem>
                    <Profileitem>
                        <Span>Address</Span>
                        Ain shams
                    </Profileitem>
                    <Profileitem>
                        <Span>Phone</Span>
                        4444 5555 6666
                    </Profileitem>
                    <Profileitem>
                        <Span>Email</Span>
                        hamza@hamza.com
                    </Profileitem>
                    <Profileitem>
                        <Span>Website</Span>
                        <Spanweb>www.google.com</Spanweb>
                    </Profileitem>
                </Profilelist>
            </Profilesection>
            


            <Skills>
                <Skillstitle>Some <Spantitle>skills</Spantitle></Skillstitle>
                <Skillsdesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </Skillsdesc>
                <Bar>
                    <Bartitle>Bootstrap</Bartitle>
                    <Barperc>100%</Barperc>
                    <Parent>
                        <Parentspan sp1></Parentspan>
                    </Parent>
                </Bar>
                
                <Bar>
                    <Bartitle>CSS3</Bartitle>
                    <Barperc>90%</Barperc>
                    <Parent>
                        <Parentspan sp2></Parentspan>
                    </Parent>
                </Bar>
                
                <Bar>
                    <Bartitle>Photoshop</Bartitle>
                    <Barperc>80%</Barperc>
                    <Parent>
                        <Parentspan sp3></Parentspan>
                    </Parent>
                </Bar>
            </Skills>
      </div>
</Profileskills>
    )
  }

export default Profile