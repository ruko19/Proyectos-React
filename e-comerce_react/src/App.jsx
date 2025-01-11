import React from 'react'
import {Banner, Footer, Hero, Navbar, Products, Subscribe, Testimonials, TopProducts} from './components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>

      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      
      

    </div>
  )
}

export default App

