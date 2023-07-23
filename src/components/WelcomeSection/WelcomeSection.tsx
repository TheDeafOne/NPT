import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import Section from "../Section";
import GridBackground from "./GridBackground";
import '../../styles/globals.css';

const WelcomeSection = () => {
    const [sectionHeight, setSectionHeight] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { y: scrollY } = useWindowScroll();
    const allDescriptors = 'Student • Software Engineer • Tetris Enthusiast'

    useEffect(() => {
        if (sectionRef!.current?.clientHeight !== undefined) {
            setSectionHeight(sectionRef!.current?.clientHeight)
        }
        setIsClient(true);
    }, []);

    return (
        <Section id="welcome-section">
            <GridBackground />
            <div id="background-mask" className="absolute h-screen w-screen bg-gradient-to-b from-background from-2% via-transparent to-background to-98%" />
            <div className="h-screen flex items-center justify-center flex-col bg-200 animate-gradient-movement bg-gradient-to-r from-[#233329] via-[#46683A] to-[#233329]" ref={sectionRef}>
                <div className='font-lato text-text'>
                    <div className=' relative -top[10px]'>
                        <span className='text-7xl font-bold'>
                            KEEGAN
                        </span>
                    </div>
                    <div className="relative">
                        <span className='text-7xl font-bold'>
                            WOODBURN
                        </span>
                    </div>
                    <div className="absolute">
                        <span className="inline-block top-[5px] font-semibold text-xl">
                            {isClient ? allDescriptors.substring(0, Math.ceil((scrollY / sectionHeight * 5 * allDescriptors.length))) : ''}
                        </span>
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default WelcomeSection