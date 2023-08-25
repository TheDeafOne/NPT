import { useEffect, useRef, useState } from "react";
import { start } from "repl";

const AboutLine = ({scrollY, sectionHeight, sectionTop}: any) => {
    const lineRef = useRef<HTMLDivElement>(null);
    const thresholdCorrection = sectionTop/5
    const moveThreshold = 0.15; // 10%
    const startThreshold = Math.round(sectionHeight * moveThreshold);
    const sectionY = scrollY - thresholdCorrection;
    // constrain section percent to 0 - 1 to two decimal places
    const sectionPercent = 1 - Math.round(Math.min(Math.max(sectionY/startThreshold, 0), 1) * 100)/100;
    const lineHeight = lineRef.current?.clientHeight ?? 0;
    const translateValue = lineHeight * sectionPercent

    const dynamicStyles = {
        transform: `translateY(${translateValue}px)`
    }
    
    return (
        <div className="text-text block overflow-hidden" ref={lineRef}>
            <div>
                <div className="block" style={dynamicStyles}>
                    test
                </div>
            </div>
        </div>
    )
}

export default AboutLine;