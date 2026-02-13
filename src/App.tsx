import { SiJavascript } from "react-icons/si";
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
        <section className="stackSection gridLayout">
          <div className="frontend">
            <h1>Front-End</h1>
            <div className="tecnologiesDivExample">
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
            </div>
          </div>
          <div className="backend">
            <h1>Back-End</h1>
            <div className="tecnologiesDivExample">
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
            </div>
          </div>
          <div className="tools">
            <h1>Ferramentas</h1>
            <div className="tecnologiesDivExample">
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
              <Stacks technologyName="JavaScript">
                <SiJavascript />
              </Stacks>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
