import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Loader_welcome from '../../components/loader/Loader_welcome'
import Info_section from '../../components/Info_sections/Info_section'
import Avatar from '../../assets/images/avatar.svg'

function Welcome ()  {
  return (
    <>
      <Loader_welcome/>
      <Navbar/>
      <Info_section title="hola como estaaan bandaaa" img="Avatar">
      </Info_section>
    </>
  )
}

export default Welcome