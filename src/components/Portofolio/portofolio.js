import React , {useState , useEffect} from 'react'
import {Portfoliosection, Portfoliotitle, Overlayspan,Portfoliolist, Portfolioitem,Imagebox,Image,Overlay,Span } from './style.js'
import axios from 'axios' 
const Portofolio =() => {
  // useEffect == componentDidMount
  // useState == state
  // Hooks mean that i can use state in function not only components 

    const [images , setImages] = useState([])
    useEffect ( ()=> {
        axios.get('js/data.json').then(res =>{setImages(res.data.portfolio)})
    } ,[] )
    
    const portofolioimages = images.map((imageitem) => {
        return(
            <Imagebox key={imageitem.id}>
            <Image src={imageitem.image}  alt=""/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </Imagebox>
        )
    } )
    return (
        <Portfoliosection>
              <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
              <Portfoliolist>
                  <Portfolioitem  active >All</Portfolioitem >
                  <Portfolioitem >HTML</Portfolioitem >
                  <Portfolioitem >Photoshop</Portfolioitem >
                  <Portfolioitem >Wordpress</Portfolioitem >
                  <Portfolioitem >Mobile</Portfolioitem >
              </Portfoliolist>
              
              <div className="Box">
                  {portofolioimages}
                 
              </div >
              
  </Portfoliosection>
    )
  }

export default Portofolio