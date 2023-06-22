import { useRef } from "react";

const Section = ({children, ...props}: any, ref: any) => {
    return (
        <div {...props} ref={ref} className="h-screen z-10">
            {children}
        </div>
    )
}

export default Section;