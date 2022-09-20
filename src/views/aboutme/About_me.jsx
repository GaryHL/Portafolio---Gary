import { useState } from "react";
import { SiJavascript } from "react-icons/si";
import React from "react";
import Pc_work from "../../assets/images/pc_work.png";
import Me from "../../components/Me/Me";
import Hobbie from "../../components/Hobbie/Hobbie";
import SkillBar from "../../components/skillbar/Skillbar";
import Info_section_active from "../../components/info_section_active/Info_section_active";
import "./about_me.scss";

function About_me() {
  const [width, setwidth] = useState(window.innerWidth);

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
        <Me />
      </div>
      {width > 900 ? (
        <>
          <div className="section_about hobbies">
            <div className="title_section">
              <div className="line"></div>
              <h2>HOBBIES</h2>
            </div>
            <Hobbie
              icon_hobbie={Pc_work}
              title_hobbie="hola gente"
              description_hobbie="Imaginemos que esto es un lorem
              ipsun pero creado por mi mismo
              además es bastante divertido porque tiene el contador para saber cuantas palabras estoy escribiend4"
            ></Hobbie>
            <Hobbie
              icon_hobbie={Pc_work}
              title_hobbie="code"
              description_hobbie="Imaginemos que esto es un lorem
              ipsun pero creado por mi mismo
              además es bastante divertido porque tiene el contador para saber cuantas palabras estoy escribiend4"
            ></Hobbie>
            <Hobbie
              icon_hobbie={Pc_work}
              title_hobbie="code"
              description_hobbie="Imaginemos que esto es un lorem
              ipsun pero creado por mi mismo
              además es bastante divertido porque tiene el contador para saber cuantas palabras estoy escribiend4"
            ></Hobbie>
          </div>
        </>
      ) : (
        <>
          <div className="section_about">
            <div className="title_section">
              <div className="line"></div>
              <h2>HOBBIES</h2>
            </div>
            <Hobbie
              icon_hobbie={Pc_work}
              title_hobbie="hola gente"
              description_hobbie="Imaginemos que esto es un lorem
              ipsun pero creado por mi mismo
              además es bastante divertido porque tiene el contador para saber cuantas palabras estoy escribiend4"
            ></Hobbie>
          </div>
          <div className="section_about">
            <Hobbie
              icon_hobbie={Pc_work}
              title_hobbie="hola gente"
              description_hobbie="Imaginemos que esto es un lorem
              ipsun pero creado por mi mismo
              además es bastante divertido porque tiene el contador para saber cuantas palabras estoy escribiend4"
            ></Hobbie>
          </div>
          <div className="section_about">
            <Hobbie
              icon_hobbie={Pc_work}
              title_hobbie="hola gente"
              description_hobbie="Imaginemos que esto es un lorem
              ipsun pero creado por mi mismo
              además es bastante divertido porque tiene el contador para saber cuantas palabras estoy escribiend4"
            ></Hobbie>
          </div>
        </>
      )}
      <div className="section_about set_skill">
        <div className="title_section">
          <div className="line"></div>
          <h2>HABILIDADES / CONOCIMIENTOS</h2>
        </div>
        <div className="container_set_skills">
          <SkillBar
            nameSkill="JavaScript"
            timePractice="3 Months"
            percentSkill="40%"
            iconSkill={<SiJavascript />}
            progressBar={
              <div className="progress_skill" style={{ width: "40%" }}></div>
            }
          />
          <SkillBar
            nameSkill="JavaScript"
            timePractice="3 Months"
            percentSkill="40%"
            iconSkill={<SiJavascript />}
            progressBar={
              <div className="progress_skill" style={{ width: "40%" }}></div>
            }
          />
          <SkillBar
            nameSkill="HTML"
            timePractice="3 Months"
            percentSkill="40%"
            iconSkill={<SiJavascript />}
            progressBar={
              <div className="progress_skill" style={{ width: "40%" }}></div>
            }
          />
          <SkillBar
            nameSkill="FIGMA"
            timePractice="3 Months"
            percentSkill="40%"
            iconSkill={<SiJavascript />}
            progressBar={
              <div className="progress_skill" style={{ width: "40%" }}></div>
            }
          />
          <SkillBar
            nameSkill="CONTRA"
            timePractice="3 Months"
            percentSkill="40%"
            iconSkill={<SiJavascript />}
            progressBar={
              <div className="progress_skill" style={{ width: "40%" }}></div>
            }
          />
          <SkillBar
            nameSkill="JavaScript"
            timePractice="3 Months"
            percentSkill="40%"
            iconSkill={<SiJavascript />}
            progressBar={
              <div className="progress_skill" style={{ width: "40%" }}></div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About_me;
