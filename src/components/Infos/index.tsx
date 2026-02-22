import "./styles.css"

interface InfosProps {
    title: string,
    description: string
}

export function Infos({ title, description }: InfosProps) {
    return <section>
        <h1 className="infoTitle">{title}</h1>
        <p className="infoDescription">{description}</p>
    </section>
}