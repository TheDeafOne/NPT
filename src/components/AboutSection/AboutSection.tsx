'use client';
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import Section from "../Section";
import AboutLine from "./AboutLine";

const AboutSection = () => {
    const [isVisible, setIsVisibile] = useState(false)
    const [sectionHeight, setSectionHeight] = useState(0);
    const [sectionTop, setSectionTop] = useState(0);
    const { y: scrollY } = useWindowScroll();
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

    useEffect(() => {
        if (!isVisible || sectionRef!.current === null)
            return;

        // const progress = sectionRef.current.offsetWidth
        setSectionHeight(sectionRef.current.offsetHeight);
        setSectionTop(sectionRef.current.offsetTop);
    }, [scrollY])

    return (
        <Section id="about-section">
            <div className="text-text flex items-center content-center h-screen" ref={sectionRef}>

                <div>
                    <AboutLine scrollY={scrollY} sectionHeight={sectionHeight} sectionTop={sectionTop}/>
                    {isVisible ? 'yes' : 'no'}

                </div>
            </div>
        </Section>
    )
}

export default AboutSection