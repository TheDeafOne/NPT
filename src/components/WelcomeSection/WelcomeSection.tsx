import { useEffect, useState, useRef } from "react";
import { useWindowScroll } from "react-use";
import Section from "../Section";

const WelcomeSection = () => {
    const [sectionHeight, setSectionHeight] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { y: scrollY } = useWindowScroll(); 
    const allDescriptors = 'Student • Software Engineer • Tetris Enthusiast'

    useEffect(() => {
        if (sectionRef!.current?.clientHeight !== undefined ) {
            setSectionHeight(sectionRef!.current?.clientHeight)
        }
    }, []);

    return (
        <Section id="welcome-section">
            <div className="h-screen -my-[30px] flex items-center justify-center flex-col" ref={sectionRef}>
                <div className='font-lato text-text'>
                    <div className=' relative -top[10px]'>
                        <span className='text-7xl font-bold'>
                            KEEGAN
                        </span>
                    </div>  
                    <div>
                        <span className='text-7xl font-bold'>
                            WOODBURN
                        </span>
                    </div>
                    <div>
                        <span className="inline-block top-[5px] font-semibold text-xl">
                            {allDescriptors.substring(0,Math.ceil((scrollY/sectionHeight * 5 * allDescriptors.length)))}
                        </span>
                    </div>
                </div>
            </div>
            
        </Section>
    )
}

export default WelcomeSection