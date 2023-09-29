import { useEffect, useState } from "react";

const MouseHighlighter = ({ clientX, clientY }: any) => {
    const [newClientX, setClientX] = useState(0);
    const [newClientY, setClientY] = useState(0);

    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e;
        setClientX(clientX);
        setClientX(clientY);

    }
    return (
        <div className={`h-[50px] w-[50px] left-[${clientX}px] top-[${clientY}px]`} onMouseMove={handleMouseMove}>

        </div>
    )
}

export default MouseHighlighter