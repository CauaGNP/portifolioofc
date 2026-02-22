import type { ReactNode } from "react"
import "./styles.css"

interface ExperiencesProps {
    title: string,
    description: string,
    startExperience: string,
    finshExperience: string | null,
    children: ReactNode
}

export function Experiences({ title, description, startExperience, finshExperience, children }: ExperiencesProps) {
    return <section className="experienceSection">
        <span>{children}</span>
        <h1 className="experienceTitle">{title}</h1>
        <p className="experienceDescription">{description}</p>
        <div>
            <span>{startExperience}</span>
            <span>{finshExperience}</span>
        </div>
    </section>
}