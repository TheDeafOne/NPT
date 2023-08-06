import { useRef } from "react";

const AboutLine = ({scrollY, sectionHeight, sectionTop}: any) => {
    const lineRef = useRef<HTMLDivElement>(null);

    const moveThreshold = 0.1; // 10%
    const startThreshold = Math.round(sectionHeight * moveThreshold);
    const endThreshold = sectionHeight - startThreshold;
    const sectionY = scrollY - sectionTop;
    return (
        <div className="text-text" ref={lineRef}>
            {sectionY < startThreshold ? "in start" : "past"}
            {sectionY}
        </div>
    )
}

export default AboutLine;