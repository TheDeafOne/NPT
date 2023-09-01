'use client';
import { useEffect, useRef, useState } from "react";
import Section from "../Section";
import anime, { timeline } from "animejs";


const AboutSection = () => {
    const [isObserved, setIsObserved] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null)
    const aboutTimeline = anime.timeline();
    

    const observerCallback = (entries: any) => {
        const [entry] = entries
       
        if (entry.isIntersecting && !isObserved) {
            aboutTimeline.play();
            setIsObserved(true);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, {
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

    useEffect(() => {
        aboutTimeline.add(
            {
                targets: ".about-line",
                translateY: ['100%','0%'],
                opacity: 1,
                delay: anime.stagger(200),
                from: 'first',
                easing: 'easeOutCirc',
            }
        );
    }, [])

    const aboutLines = [
        'Test1',
        'Test2',
        'Test3',
        'Test4'
    ]

    return (
        <Section id="about-section">
            <div className="text-text flex h-screen flex-row" ref={sectionRef}>
                <div className="w-1/2 flex flex-col">
                    <div className="absolute left-10">
                        <span className="text-3xl font-lato font-semibold">
                            About Me
                        </span>
                        {aboutLines.map((line, i) => {
                            return (
                                <div className="overflow-hidden">
                                    <div key={i} className="about-line transform opacity-0">
                                        {line}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/2 bg-black">
                    second column
                </div>
            </div>
        </Section>
    )
}

export default AboutSection