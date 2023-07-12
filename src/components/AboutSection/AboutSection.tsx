'use client';
import { useEffect, useRef, useState } from "react";
import Section from "../Section";

const AboutSection = () => {
    const [isVisible, setIsVisibile] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    const observerCallback = (entries: any) => {
        const [entry] = entries
        setIsVisibile(entry.isIntersecting)
        console.log(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '40px',
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }, [sectionRef])

    return (
        <Section id="about-section">
            <div className="text-text font-lato font-xl h-screen" ref={sectionRef}>
                {isVisible ? 'yes' : 'no'}
            </div>
            <div className="relative bottom-0 text-text">
                {isVisible ? 'yes' : 'no'}
            </div>
        </Section>
    )
}

export default AboutSection