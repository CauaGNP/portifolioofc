import type { ReactNode } from "react"
import "./styles.css"

interface SocialMediaprops {
    title: string,
    link: string,
    children: ReactNode
}

export function SocialMedia({ title, link, children }: SocialMediaprops) {
    return <a href={link} className="socialMediaLink">
        {children}
        <p className="socialMediaText">{title}</p>
    </a>
}