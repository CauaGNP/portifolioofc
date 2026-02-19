import React, { useState, type ReactNode } from "react";

export function Carousel(children: ReactNode) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    function nexSlide() {
        setCurrentIndex((prevIndex) =>
            prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
    };

    function prevSlide() {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
        );
    };

    return <section>

    </section>
}