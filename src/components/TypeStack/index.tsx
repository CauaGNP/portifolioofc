import type { ReactNode } from "react";
import "./styles.css";

interface TypeStacKProps {
    name: string,
    children: ReactNode;
}

export function TypeStacK({ name, children }: TypeStacKProps) {
    return <section className="typeStackSection">
        {children}
        <h1 className="titleTypeStack">{name}</h1>
    </section>
}
