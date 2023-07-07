import Section from "../Section";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

const WelcomeSection = () => {
    const { y: scrollY } = useWindowScroll();
    const welcomeRef = useRef<HTMLDivElement>(null);
    const [welcomeSectionHeight, setWelcomeSectionHeight] = useState<number>(1);

    useEffect(() => {
        if (welcomeRef!.current?.clientHeight !== undefined ){
            setWelcomeSectionHeight(welcomeRef!.current?.clientHeight)
        }
    }, [])

    return (
        <Section id="welcome-section" className="pt-6">
            <div className="h-screen flex items-center flex-col" ref={welcomeRef}>
                <div className="my-[10%]">
                    <div>
                        <span className="text-text text-5xl font-semibold">
                            Hey, I'm
                        </span>
                    </div>
                    <div>
                        <span className={`text-text text-8xl opacity-${1-scrollY/window.innerHeight} font-bold`}>
                            {/* Keegan */}
                            {1-scrollY/welcomeSectionHeight}
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default WelcomeSection