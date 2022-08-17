import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './welcome.scss'
import Loader_welcome from '../../components/loader/Loader_welcome'
import Info_section from '../../components/Info_sections/Info_section'
import Avatar from '../../assets/images/avatar.svg'
import Cta_button from '../../components/buttons/Cta_button'
import About from '../../assets/images/aboutme.png'
import Projects from '../../assets/images/projects.png'
import Contact from '../../assets/images/contactme.png'
import Vacio from '../../assets/images/Vacio.svg'

function Welcome ()  {
  return (
    <>
      <Loader_welcome/>
      <Navbar/>

      <div className="container">
        <section className="section">
          <Info_section title="Hola,"title2="Soy Gary"
                  img={Vacio} 
                subtitle="Desarrollador front end"/>
        </section>
        <section className="section">
          <Info_section title="Mis"title2="Proyectos"
          img={Vacio} 
        cta_zone={<Cta_button text="Ver proyectos"/>}
      subtitle="Estos son algunos de mis proyectos."
      />

        </section>
        <section className="section">
          <Info_section title="Sobre mí"title2=""
          img={Vacio} 
        cta_zone={<Cta_button text="Ver Más"/>}
      subtitle="Habilidades, metas, hobbies y otras cosas sobre mí."
      />

        </section>
        <section className="section">
        <Info_section title="Contactame"title2=" "
        img={Vacio} 
                cta_zone={<Cta_button text="Contactame <-"/>}
              />
        </section>
      </div>
    
    </>
  )
}

export default Welcome