import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import "./styles.css";

interface ProjectsProps {
    url: string,
    title: string,
    paragraph: string,
    gitHubLink: string,
    children: ReactNode,
}

export function Projects({ url, title, paragraph, gitHubLink, children }: ProjectsProps) {
    return <section className="projectSection">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="motion">
            <img src={url} className="webImageProject" />
            <div className="detailsProjectDiv">
                <div>
                    <div className="headerProjectDiv">
                        <h1 className="detailsTitle">{title}</h1>
                        <a href={gitHubLink} className="githublink" target="_blank">
                            <FaGithub color="white" />
                        </a>
                    </div>
                    <p className="detailsParagraph">{paragraph}</p>
                </div>
                <div>
                    <h1 className="stacksFromProjectsTitle">Tecnologias:</h1>
                    <div className="stacksFromProjects">
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>

    </section>
}