'use client';
import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import Section from "../Section";


const AboutSection = () => {
    const [isObserved, setIsObserved] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null)
    


    useEffect(() => {
        let didObserve = false;
        const observer = new IntersectionObserver((entries: any) => {
            const [entry] = entries
            if (entry.isIntersecting && !didObserve) {
                anime(
                    {
                        targets: ".about-line",
                        translateY: ['100%','0%'],
                        opacity: 1,
                        delay: anime.stagger(200),
                        from: 'first',
                        easing: 'easeOutCirc',
                    }
                );
                didObserve = true;
                console.log(didObserve)
            } 
        }, {
            rootMargin: '40px',
            threshold: 0.3
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


    const aboutLines = [
        "I'm a software developer with years",
        "of experience in building sleek",
        "full-stack applications and efficient", 
        "automation solutions.",
        (<div className="h-5" />),
        "I'm passionate about finding",
        "clever ways to solve complex",
        "problems and love learning new",
        "ways to innovate and create.",
    ]

    return (
        <Section id="about-section">
            <div className="text-text flex h-screen flex-row" ref={sectionRef}>
                <div className="w-1/2 flex flex-col">
                    <div className="absolute left-20">
                        {aboutLines.map((line, i) => {
                            return (
                                <div key={i} className="overflow-hidden">
                                    <div className="about-line transform opacity-0 translate-y-full text-4xl pt-1">
                                        {line}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <div className="w-1/2 bg-black">
                    second column
                </div> */}
            </div>
        </Section>
    )
}

export default AboutSection