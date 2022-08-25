import React from 'react'
import Pc_work from '../../assets/images/pc_work.png'
import Me from '../../components/Me/Me'
import Hobbie from '../../components/Hobbie/Hobbie'
import SkillBar from '../../components/skillbar/Skillbar'
import Info_section_active from '../../components/info_section_active/Info_section_active'
import './about_me.scss'
function About_me () {
  return (
    <div className="container">
      <div className="section_about">
    <Info_section_active
        title="Sobre mí"
        title2=" "
        img={Pc_work}
        subtitle="Habilidades, metas, hobbies y otras cosas sobre mí"
        />
        </div>
        <div className="section_about me">
            <div className="title_section">
                <div className="line"></div>
                <h2>QUIÉN SOY</h2>
            </div>
            <Me/>
        </div>
        <div className="section_about hobbies">
        <div className="title_section">
                <div className="line"></div>
                <h2>HOBBIES</h2>
        </div>
        <Hobbie></Hobbie>
        <Hobbie></Hobbie>
        <Hobbie></Hobbie>
        </div>
        <div className="section_about set_skill">
        <div className="title_section">
                <div className="line"></div>
                <h2>HABILIDADES / CONOCIMIENTOS</h2>
        </div>
            <SkillBar></SkillBar>
            <SkillBar></SkillBar>
            <SkillBar></SkillBar>
            <SkillBar></SkillBar>
            <SkillBar></SkillBar>
            <SkillBar></SkillBar>
            <SkillBar></SkillBar>
        </div>

    </div>
  )
}

export default About_me