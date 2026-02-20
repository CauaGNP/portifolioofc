interface ExperiencesProps {
    title: string,
    description: string,
    startExperience: string,
    finshExperience: string | null
}

export function Experiences({ title, description, startExperience, finshExperience }: ExperiencesProps) {
    return <section>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
            <span>{startExperience}</span>
            <span>{finshExperience}</span>
        </div>
    </section>
}