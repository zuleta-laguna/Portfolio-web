import React from "react";
import Picture_myself from "./assets/IMG_8316.webp";
import CodeImage from "./assets/CodeImage.webp";
import { InView } from "react-intersection-observer";
import MetalicaZuleta from "./assets/MetalicaZuleta.webp";
import BarberShop from "./assets/BarberShop.webp";
import Form from "./components/Form.jsx";
import ListSvg from "./assets/list.svg";
import Beams from "./components/Beams.jsx";

function App() {
  const Skills = [
    {
      name: "HTML",
      level: 95,
    },
    {
      name: "CSS",
      level: 89,
    },
    {
      name: "Javascript",
      level: 80,
    },
    {
      name: "React",
      level: 87,
    },
    {
      name: "Tailwind",
      level: 90,
    },
    {
      name: "Node js",
      level: 70,
    },
    {
      name: "PHP",
      level: 70,
    },
  ];
  return (
    <section className="Container">
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
    <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
  </div>
      <main>
        <header>
          <p className="Name_Logo">Wilberto Zuleta</p>
          <nav className="NavbarDestock">
            <a href="#AboutMe">Acerca de mi</a>
            <a href="#MyProjects">Proyectos</a>
            <a href="#ContactMe">Contactame</a>
          </nav>
        </header>
        <section className="intro-Myself">
          <div className="myself-picture">
            <img src={Picture_myself}  alt="" />
          </div>
          <div className="NameAndProfesion">
            <h2>WILBERTO ZULETA</h2>
            <p>Desarrollador de Full Stack</p>
          </div>
        </section>
      </main>
      <div className="AboutMe" id="AboutMe">
        <div className="Info-AboutMe">
          <h2>¿Quien es Wilberto Zuleta?</h2>
          <p>
            Desarrollador Full Stack con 3 años de experiencia y una pasión por
            la tecnología que me acompaña desde la infancia. Tras consolidar mi
            formación en 2023, descubrí mi vocación por crear software. Me
            caracterizo por ser una persona altamente responsable, comprometida
            y con una sólida capacidad de aprendizaje rápido para dominar nuevas
            herramientas de forma efectiva
          </p>
        </div>
        <div className="Image-AboutMe">
          <img src={CodeImage} alt="" />
        </div>
      </div>
      <div className="sectionSkill">
        <h2>Habilidades</h2>
        <InView triggerOnce={true} threshold={0.2}>
          {({ inView, ref }) => (
            <div className="Skill" ref={ref}>
              {Skills.map((items, key) => {
                return (
                  <div className="TechSkill" key={key}>
                    <div className="nameSkill">
                      <p>{items.name}</p>
                    </div>
                    <div className="ProgressBar">
                      <span
                        className="FillBar"
                        style={{ width: inView ? `${items.level}%` : "0%" }}
                      >
                        {" "}
                        <p>{items.level}%</p>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </InView>
      </div>
      <div className="sectionsProjects" id="MyProjects">
        <h2>Proyectos</h2>
        <div className="CardProjects">
          <div className="project">
            <a href="https://metalica-zuleta-ii1jmpp4u-wilbertos-projects.vercel.app/">
              <img src={MetalicaZuleta} alt="" />
              <h2>Metalica Zuleta</h2>
              <p>
                Metalica Zuleta Una aplicacion funcional para encargar y elegir
                los servicios que necesitas. <br />
                tecnologias Usadas:{" "}
                <span className="techUsed">
                  React, Css, Javascript,React-router
                </span>
                <br />
                <br />
                <span>Hazme Click!!</span>
              </p>
            </a>
          </div>
          <div className="project">
            <a href="https://zuleta-laguna.github.io/Barber-Shop/">
              <img src={BarberShop} alt="" />
              <h2>BarberShop</h2>
              <p>
                BarberShop una interfaz de usuario basico en el cual puedes ver
                los barberos disponibles y los precios de cada servicio
                <br />
                tecnologias Usadas: <span className="techUsed">
                  React, css
                </span>{" "}
                <br />
                <br />
                <span>
                  {" "}
                  <span>Hazme Click!!</span>{" "}
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="FormSection" id="ContactMe">
        <h2>Contactame</h2>
        <Form />
      </div>
      <footer>
        <h2>Gracias Por Ver</h2>
      </footer>
    </section>
  );
}

export default App;
