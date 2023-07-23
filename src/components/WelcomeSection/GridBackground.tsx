import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const GridBackground = () => {
    const [columns, setColumns] = useState(5);
    const [rows, setRows] = useState(5);
    const [toggled, setToggled] = useState(false);
    const backgroundRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (backgroundRef!.current !== null) {
            setColumns(Math.floor(backgroundRef!.current.clientWidth / 50));
            setRows(Math.floor(backgroundRef!.current.clientHeight / 50));
            console.log(Math.floor(backgroundRef!.current.clientHeight / 50))
            console.log(Math.floor(backgroundRef!.current.clientWidth / 50))
        }
    }, [])

    const onTileClick = (e: any) => {
        const index = Number(e.target.id)
        console.log(index);
        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
        });
    }
    return (
        <div className="absolute w-screen h-screen">
            <div className='h-screen grid grid-cols-repeat grid-rows-repeat' ref={backgroundRef}>
                {Array.from(Array(columns * rows)).map((e, id) => {
                    return (
                        <div onClick={onTileClick} key={id} id={String(id)} className="tile relative before:bg-background before:content-[''] before:absolute before:inset-[0.5px]" />
                    )
                })}

            </div>
        </div>
    )
}

export default GridBackground