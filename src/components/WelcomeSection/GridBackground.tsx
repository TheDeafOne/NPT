import { useEffect, useRef, useState } from "react"

const GridBackground = () => {
    const [columns, setColumns] = useState(5);
    const [rows, setRows] = useState(5);
    const backgroundRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (backgroundRef!.current !== null) {
            setColumns(Math.floor(backgroundRef!.current.clientWidth / 50));
            setRows(Math.floor(backgroundRef!.current.clientHeight / 50));
        }
    }, [])
    return (
        <div className='h-screen grid grid-cols-6' ref={backgroundRef}>
            {Array.from(Array(columns * rows)).map((e, id) => {
                return (
                    <div key={id}>
                        test
                    </div>
                )
            })}
        
        </div>
    )
}

export default GridBackground