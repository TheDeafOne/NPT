import { useEffect, useRef, useState } from "react"

const GridBackground = () => {
    const [columns, setColumns] = useState(5);
    const [rows, setRows] = useState(5);
    const backgroundRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (backgroundRef!.current !== null) {
            setColumns(Math.floor(backgroundRef!.current.clientWidth / 50));
            setRows(Math.floor(backgroundRef!.current.clientHeight / 50));
            console.log(Math.floor(backgroundRef!.current.clientHeight / 50))
            console.log(Math.floor(backgroundRef!.current.clientWidth / 50))
        }
    }, [])
    return (
        <div className="absolute w-screen h-screen text-text">
            <div className='h-screen grid grid-cols-repeat grid-rows-repeat' ref={backgroundRef}>
                {Array.from(Array(columns * rows)).map((e, id) => {
                    return (
                        <div key={id} className="outline outline-1 outline-black" />
                    )
                })}
            
            </div>
        </div>
    )
}

export default GridBackground