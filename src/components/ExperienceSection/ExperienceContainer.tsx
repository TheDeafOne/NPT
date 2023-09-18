import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import IExperience from "./Experience";
import useDetectScroll from "@smakss/react-scroll-direction";


const ExperienceContainer = ({experience}: {experience: IExperience}) => {
    // const { y: scrollY } = useWindowScroll();
    // const [contentY, setContentY] = useState(0);
    // const scrollDir = useDetectScroll({});
    // const experienceRef = useRef<HTMLDivElement>(null);
    
    // const startScrollPercentage = 0.1;
    // const endScrollPercentage = 0.8;
    // const startOffset = Math.round(window.innerHeight * startScrollPercentage)
    // const endOffset = Math.round(window.innerHeight * endScrollPercentage);

    // const totalHorizontalScrollLength = 500;
    // useEffect(() => {
    //     setContentY(experienceRef.current!.getBoundingClientRect().top);
    // }, [])

    // useEffect(() => {
    //     const pageBottom = scrollY + window.innerHeight;
    //     if (pageBottom > contentY + startOffset && pageBottom < contentY + endOffset) {
    //         const total = (endOffset - startOffset);

    //     } 
    // }, [scrollY])

    return (
        <div className={`h-36 w-3/4 max-w-3/4 rounded-sm cursor-pointer hover:bg-accent`}>
            <div className="text-3xl font-lato m-2 font-semibold">
                {experience.title} · {experience.company}
            </div>
            <p className="break-words mx-10">
               {experience.description}
            </p>
        </div>
    )
}

export default ExperienceContainer;