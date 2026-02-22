import React, { useState, type ReactNode } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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

    return <section className="carouselSection">
        <button className="buttonPass backpassButton" onClick={prevSlide}><IoIosArrowBack /></button>

        <div className="carouselWrapper">
            <div
                className="carouselContent"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {React.Children.map(children, (child) => (
                    <div className="carouselItem">{child}</div>
                ))}
            </div>
        </div>

        <button className="buttonPass nextpassButton" onClick={nextSlide}><IoIosArrowForward /></button>

        <div >
            {React.Children.map(children, (_, index) => (
                <span
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                />
            ))}
        </div>

    </section>
}