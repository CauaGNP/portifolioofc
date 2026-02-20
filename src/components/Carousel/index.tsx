import React, { useState, type ReactNode } from "react";
import "./styles.css";

interface CarouselProps {
    children: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
        );
    };

    return <section>
        <button className="nav-btn prev" onClick={prevSlide}>‹</button>

        <div className="carousel-wrapper">
            <div
                className="carousel-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {React.Children.map(children, (child) => (
                    <div className="carousel-item">{child}</div>
                ))}
            </div>
        </div>

        <button className="nav-btn next" onClick={nextSlide}>›</button>

        <div className="dots">
            {React.Children.map(children, (_, index) => (
                <span
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                />
            ))}
        </div>

    </section>
}