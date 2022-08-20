import React from 'react'
import Info_section from '../../components/Info_sections/Info_section';
import Vacio from '../../assets/images/Vacio.svg'
import { useState } from 'react'
import Project_pagination from '../../components/project/Project_pagination';

function Projects () {

  // const mockImages =[
  //   "https://cdn.pixabay.com/photo/2022/08/12/12/25/vulture-7381642_960_720.jpg",
  //   "https://images.unsplash.com/photo-1652017687934-d14ec6280dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  //   "https://images.unsplash.com/photo-1660142106399-193fbe88b9cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   "https://cdn.pixabay.com/photo/2022/08/12/12/25/vulture-7381642_960_720.jpg",
  //   "https://cdn.pixabay.com/photo/2022/05/09/18/05/dog-7185274__340.jpg",
  // ]
  // const text =[
  //   "Texto #1",
  //   "Texto #2",
  //   "Texto #3",
  //   "Texto #4",
  //   "Texto #5",
  // ]

  return (
    <>
    <Info_section title="Mis"title2="Proyectos"
          img={Vacio}
          subtitle="Estos son algunos de mis proyectos."
          />
    <Project_pagination/>
    </>
  )
}

export default Projects