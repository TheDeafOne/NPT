import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const GridBackground = () => {
    const [columns, setColumns] = useState(25);
    const [rows, setRows] = useState(13);
    const [toggled, setToggled] = useState(true);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const backgroundTimeline = anime.timeline();
    useEffect(() => {
        if (backgroundRef!.current !== null) {
            setColumns(Math.floor(backgroundRef!.current.clientWidth / 50));
            setRows(Math.floor(backgroundRef!.current.clientHeight / 50));
        }
    }, [])

    const onTileClick = (e: any) => {
        const index = Number(e.target.id)
        setToggled(!toggled);
        backgroundTimeline.add(
            {
                targets: ".tile",
                opacity: toggled ? 0 : 1,
                // translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
                // translateY: anime.stagger(toggled ? 10 : -7, {grid: [columns, rows], from: 'first', axis: 'y'}),
                // rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
                // delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
                delay: anime.stagger(50, {
                    grid: [columns, rows],
                    from: index,
                })
            }
        );
    }

    const gridStyles = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
    };

    return (
        <div className="absolute h-screen  w-screen z-[20]">
            <div className='grid h-screen' style={gridStyles} ref={backgroundRef}>
                {Array.from(Array(columns * rows)).map((e, id) => {
                    return (
                        <div onClick={onTileClick} key={id} id={String(id)} className="tile relative before:bg-background-950 before:content-[''] before:absolute before:inset-[0.5px]" />
                    )
                })}

            </div>
        </div>
    )
}

export default GridBackground