import { useEffect, useState } from "react";
import "./style.css"

export default function Header(){
    const title = "Cauã Gabriel";
    const subTitle = "Desenvolvedor Full-Stack"

    const [displayTitle, setDisplayTitle] = useState("");
    const [displaySubTitle, setDisplaySubTitle] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(index < title.length){
            const timeout = setTimeout(() => {
                setDisplayTitle((prev) => prev+ title[index])
                setIndex((prev) => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
        
    },[index])

    return<header className="headerContain">
        <h1 className="headerTitle">{displayTitle}</h1>
        <h2 className="headerSubTitle"></h2>
    </header>
}