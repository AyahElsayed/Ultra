// دي كومبوننت شايلة كله ماعدا الكونتاكت و نافبار
import React, { Component } from 'react';
import Home from '../Home/home';
import About from '../About/about'
import Profile from '../profile/profile'
import Portofolio from '../Portofolio/portofolio'
import Socialmedia from '../Socialmedia/socialmedia'
import Work from '../Work/work'
import Footer from '../footer/footer'
 class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portofolio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />
      </div>
    )
  }
}
export default Index