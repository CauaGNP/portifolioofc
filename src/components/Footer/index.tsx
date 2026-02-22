import "./styles.css"

export function Footer() {
    return <footer className="footer">
        <div>
            <h1 className="footerTitle">Cauã Gabriel</h1>
            <h2 className="footerSubTitle">Descenvolvedor Full-Stack</h2>

        </div>
        <p className="paragrapfImage">
            Data illustrations by{" "}
            <a
                href="https://storyset.com/data"
                className="storySetLink"
                target="_blank"
            >
                Storyset
            </a>
        </p>
    </footer>
}

