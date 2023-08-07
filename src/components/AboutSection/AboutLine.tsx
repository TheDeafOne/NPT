import { useEffect, useRef, useState } from "react";
import { start } from "repl";

const AboutLine = ({scrollY, sectionHeight, sectionTop}: any) => {
    const [translateValue, setTranslateValue] = useState(0);
    const lineRef = useRef<HTMLDivElement>(null);
    const thresholdCorrection = sectionTop/5
    const moveThreshold = 0.01; // 10%
    const startThreshold = Math.round(sectionHeight * moveThreshold);
    const endThreshold = sectionHeight - startThreshold + thresholdCorrection;
    const sectionY = scrollY - thresholdCorrection;
    useEffect(() => {
        if (lineRef.current?.clientHeight !== undefined) {
            setTranslateValue(lineRef.current?.clientHeight);
        }
        console.log(translateValue)
    }, [scrollY])
    
    return (
        <div className="text-text" ref={lineRef}>
            <div className={`transform translate-y-[${translateValue}px]`}>
                test
            </div>
        </div>
    )
}

export default AboutLine;