import { useEffect, useState } from "react";
import "./style.css"

export function Header(){
    const title = "Bem vindo!!";
    const subTitle = "Meu nome é Cauã Gabriel, sou desenvolvedor full-stack(React, Nextjs, Spring e Express). Meu objetivo é transformar sonhos em aplicações!!"

    const [displayText, setDisplayText] = useState({
        title: "",
        subTitle: ""
    });
    const [index, setIndex] = useState({
        title: 0,
        subTitle: 0
    });

    useEffect(() => {
        if(index.title < title.length){
            const timeout = setTimeout(() => {
                setDisplayText((prev) => ({
                    title: prev.title + title[index.title],
                    subTitle: prev.subTitle
                }));
                setIndex((prev) => ({
                    title: prev.title + 1,
                    subTitle: prev.subTitle
                }));
            }, 100);

            return () => clearTimeout(timeout);
        }

        if(index.title === title.length && index.subTitle < subTitle.length){
            const timeout = setTimeout(() =>{
                setDisplayText((prev) => ({
                    title: prev.title,
                    subTitle: prev.subTitle + subTitle[index.subTitle]
                }))

                setIndex((prev) => ({
                    title: prev.title,
                    subTitle: prev.subTitle + 1
                }))
            }, 20)

            return () => clearTimeout(timeout);
        }
        
    },[index])

    return<header className="headerContain">
        <div className="textHeaderContain">
            <h1 className="headerTitle">{displayText.title}</h1>
            <h2 className="headerSubTitle">{displayText.subTitle}</h2>
        </div>
        <div className="image">

        </div>
    </header>
}