import { BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { FaGithub, FaJava, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSpring, SiTypescript } from "react-icons/si";
import "./App.css";
import darcyProject from "./assets/darcyProject.png";
import mobileProject from "./assets/mobileProject.png";
import Person from "./assets/person.png";
import yProject from "./assets/yproject.png";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Stacks } from "./components/Stacks";
import { TypeStacK } from "./components/TypeStack";

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
            <h1>Projetos</h1>
            <Projects url={darcyProject} gitHubLink="https://github.com/Darcy-PI" title="Darcy" paragraph="O Darcy é uma plataforma de feedback educacional projetada para conectar alunos e professores de forma intuitiva. O sistema permite que alunos avaliem aulas rapidamente, transformando esses dados em insights visuais para os professores. Através de um dashboard interativo, o professor pode monitorar o engajamento com filtros granulares: visualização individual por aluno, por turma específica (ex: 7º A) ou visão macro por série (ex: todo o 7º ano).">
              <TypeStacK name="NextJs">
                <SiNextdotjs />
              </TypeStacK>
              <TypeStacK name="TypeScript">
                <BiLogoTypescript color="#3178C6" />
              </TypeStacK>
              <TypeStacK name="SpringBoot">
                <SiSpring color="#6DB33F" />
              </TypeStacK>
            </Projects>

            <Projects url={mobileProject} title="Gerenciador Financeiro" gitHubLink="https://github.com/orgs/Projeto-final-aos-pdm/repositories" paragraph="Aplicativo mobile desenvolvido para gestão completa de finanças pessoais. A plataforma oferece controle detalhado do fluxo de caixa (receitas e despesas), permitindo o gerenciamento de múltiplas contas e visualização do histórico de transações. Além de conter metas financeiras.">
              <TypeStacK name="React Native">
                <SiReact color="#00d8ff" />
              </TypeStacK>
              <TypeStacK name="TypeScript">
                <BiLogoTypescript color="#3178C6" />
              </TypeStacK>
              <TypeStacK name="Express">
                <SiExpress />
              </TypeStacK>
            </Projects>

            <Projects url={yProject} title="Y be YourSelf" gitHubLink="https://github.com/CarlosfcPinheiro/Y" paragraph="O Y é uma aplicação que simula a arquitetura de uma rede social, desenvolvida para demonstrar a implementação robusta de operações CRUD. O projeto foca no ciclo de vida completo dos dados, permitindo gerenciamento dinâmico de postagens e usuários com persistência eficiente">
              <TypeStacK name="HTML5">
                <SiHtml5 color="#E34C26" />
              </TypeStacK>
              <TypeStacK name="CSS3">
                <SiCss3 color="#1572B6" />
              </TypeStacK>
              <TypeStacK name="JavaScript">
                <SiJavascript color="#F0DB4F" />
              </TypeStacK>
              <TypeStacK name="Express">
                <SiExpress />
              </TypeStacK>
            </Projects>
          </section>
        </section>
        <section className="experiencesSection">

        </section>
      </main>
    </div>
  );
}

export default App;
