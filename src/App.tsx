import { SiDocker, SiExpress, SiGit, SiJavascript, SiNextdotjs, SiTypescript } from 'react-icons/si'
import './App.css'
import {Header} from './components/Header'
import { Stacks } from './components/Stacks'
import { IoLogoReact } from 'react-icons/io5'
import { BiLogoSpringBoot } from 'react-icons/bi'

function App() {

  return (
    <div className="container">
      <Header />
      <main>
          <section>
            <h1>Quem sou eu?</h1>
            <p>Me chamo Cauã Gabriel, sou desenvolvedor Full-Stack com foco no desenvolvimento web e experiência em aplicações mobile. Atualmente, estou no 5º período de Sistemas para Internet, unindo a base acadêmica com a prática na construção de interfaces modernas e backends eficientes.</p>
          </section>

          <section className='stacksSection'>
            <h1>Tecnologias</h1>
            <section className='stacksContain'>
              <h1>Front-End</h1>
              <div className='stacksDiv'>
                <Stacks technologyName="JavaScript">
                  <SiJavascript/>
                </Stacks>

                <Stacks technologyName="TypeScript">
                  <SiTypescript/>
                </Stacks>

                <Stacks technologyName="React">
                  <IoLogoReact/>
                </Stacks>

                <Stacks technologyName="NextJs">
                  <SiNextdotjs/>
                </Stacks>
            </div> 
            </section>
            <section className='stacksContain'>
              <h1>Back-end</h1>
              <div className='stacksDiv'>
                <Stacks technologyName="SpringBoot">
                  <BiLogoSpringBoot/>
                </Stacks>
                <Stacks technologyName="Express">
                  <SiExpress/>
                </Stacks>
              </div>
            </section>
            <section className='stacksContain'>
              <h1>Ferramentas</h1>
              <div className='stacksDiv'>
                <Stacks technologyName="Git">
                  <SiGit/>
                </Stacks>
                <Stacks technologyName="Docker">
                  <SiDocker/>
                </Stacks>
              </div>
            </section>
          </section>
      </main>
    </div>
  )
}

export default App
