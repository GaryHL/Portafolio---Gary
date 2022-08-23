import React from 'react'
import './welcome.scss'
import Loader_welcome from '../../components/loader/Loader_welcome'
import Info_section from '../../components/Info_sections/Info_section'
import Cta_button from '../../components/buttons/Cta_button'
import {Link}from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Pc_work from '../../assets/images/pc_work.png'
import Street from '../../assets/images/street.png'
import Contact from '../../assets/images/contact.png'
import Rocket from '../../assets/images/rocket.png'
import {ContactUs} from '../../components/contact_form/ContactUs'


function Welcome ()  {

  
  return (
    <>
      <Loader_welcome/>
      <Navbar/>
      <ContactUs/>
      <div className="container">
        <section className="section" id="home">
          <Info_section title="Hola,"title2="Soy Gary"
                  img={Rocket} 
                subtitle="Desarrollador front end"/>
        </section>
        <section className="section" id="projects">
          <Info_section title="Mis"title2="Proyectos"
          img={Pc_work} 
        cta_zone={<Link to="/projects"><Cta_button text="Ver proyectos"/></Link>}
      subtitle="Estos son algunos de mis proyectos."
      />

        </section>
        <section className="section" id="about">
          <Info_section title="Sobre mí"title2=""
          img={Street} 
        cta_zone={<Cta_button text="Ver Más"/>}
      subtitle="Habilidades, metas, hobbies y otras cosas sobre mí."
      />

        </section>
        <section className="section" id="contact">
        <Info_section title="Contactame"title2=" "
        img={Contact} 
                cta_zone={
                  <Link to="/projects" className="btn_cta">
                  <Cta_button text="Contactame <-"/>
                  </Link>}
              />
        </section>
        
      </div>
    
    </>
  )
}

export default Welcome