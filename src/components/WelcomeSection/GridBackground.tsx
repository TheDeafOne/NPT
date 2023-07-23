import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const GridBackground = () => {
    const [columns, setColumns] = useState(25);
    const [rows, setRows] = useState(13);
    const [toggled, setToggled] = useState(false);
    const backgroundRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (backgroundRef!.current !== null) {
            setColumns(Math.floor(backgroundRef!.current.clientWidth / 50));
            setRows(Math.floor(backgroundRef!.current.clientHeight / 50));
        }
        window.onresize = () => {
            if (backgroundRef!.current !== null) {
                setColumns(Math.floor(backgroundRef!.current.clientWidth / 50));
                setRows(Math.floor(backgroundRef!.current.clientHeight / 50));
            }
        };
    }, [])

    const onTileClick = (e: any) => {
        const index = Number(e.target.id)
        setToggled(!toggled);
        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            })
        });
    }

    const gridStyles = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
    };

    return (
        <div className="absolute w-screen h-screen">
            <div className='h-screen grid' style={gridStyles} ref={backgroundRef}>
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