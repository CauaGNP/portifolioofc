import { BiLogoSpringBoot } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { FaGithub, FaJava, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiTypescript } from "react-icons/si";
import "./App.css";
import Person from "./assets/person.png";
import { Header } from "./components/Header";
import { Stacks } from "./components/Stacks";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="aboutMe">
          <div className="aboutMeTextContain">
            <h1>Quem sou eu?</h1>
            <p className="paragraph">
              Me chamo Cauã Gabriel, sou desenvolvedor Full-Stack com foco no
              desenvolvimento web e experiência em aplicações mobile.
              Atualmente, estou no 5º período de Sistemas para Internet, unindo
              a base acadêmica com a prática na construção de interfaces
              modernas e backends eficientes.
            </p>
          </div>
          <div className="imageContain">
            <img className="aboutMeImage" src={Person} />
            <p className="paragrapfImage">
              Data illustrations by{" "}
              <a
                href="https://storyset.com/data"
                className="storySetLink"
                target="_blank"
              >
                Storyset
              </a>
            </p>
          </div>
        </section>
        <section >
          <h1 className="stacksTitle">Habilidades</h1>
          <section className="stackSection">
            <div className="stakcsContain">
              <h1>Front-End</h1>
              <div className="divStack">
                <Stacks technologyName="TypeScript"> <SiTypescript /> </Stacks>
                <Stacks technologyName="React"> <FaReact /> </Stacks>
                <Stacks technologyName="NextJs"> <SiNextdotjs /> </Stacks>
                <Stacks technologyName="Tailwind"> <RiTailwindCssFill /> </Stacks>
              </div>
            </div>
            <div className="stakcsContain">
              <h1>Back-End</h1>
              <div className="divStack">
                <Stacks technologyName="Java"> <FaJava /> </Stacks>
                <Stacks technologyName="SpringBoot"> <BiLogoSpringBoot /> </Stacks>
                <Stacks technologyName="Express"> <SiExpress /> </Stacks>
              </div>
            </div>
            <div className="stakcsContain">
              <h1>Ferramentas</h1>
              <div className="divStack">
                <Stacks technologyName="GitHub"> <FaGithub /> </Stacks>
                <Stacks technologyName="Git"> <BsGit /> </Stacks>
              </div>
            </div>
          </section>

          <section className="projectsSection">

          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
