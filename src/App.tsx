import "./App.css"
import {Header} from "./components/Header"
import Person from "./assets/person.png"
import { Stacks } from "./components/Stacks"
import { SiJavascript } from "react-icons/si"

function App() {

  return (
    <div className="container">
      <Header />
      <main className="main">
          <section className="aboutMe">
            <div className="aboutMeTextContain">
              <h1>Quem sou eu?</h1>
              <p className="paragraph">Me chamo Cauã Gabriel, sou desenvolvedor Full-Stack com foco no desenvolvimento web e experiência em aplicações mobile. Atualmente, estou no 5º período de Sistemas para Internet, unindo a base acadêmica com a prática na construção de interfaces modernas e backends eficientes.</p>
            </div>
            <img className="aboutMeImage" src={Person}/>
          </section>
          <section className="stackSection gridLayout">
                <div className="frontend">
                  <h1>Front-End</h1>
                  <div className="tecnologiesDivExample">
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                  </div>
                </div>
                <div className="backend">
                   <h1>Front-End</h1>
                  <div className="tecnologiesDivExample">
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                  </div>
                </div>
              <div className="tools">
                 <h1>Front-End</h1>
                  <div className="tecnologiesDivExample">
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                      <Stacks technologyName="JavaScript">
                        <SiJavascript/>
                      </Stacks>
                  </div>
              </div>
          </section>
      </main>
    </div>
  )
}

export default App
