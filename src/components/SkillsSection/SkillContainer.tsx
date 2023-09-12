import anime from "animejs"
import { useEffect } from "react";

const SkillContainer = ({ title, className, id, items }: any) => {
    useEffect(() => {
    }, [])

    const showIcons = (e: any) => {
        // console.log(e);
        const itemsBar = Number(items.length/2);
        let itemsPointer = 0;
        let yPos = -60;
        let xPos = -20;
        anime({
            targets:  `#${id}-logo`,
            // opacity: [0,1],
            // borderRadius: ()=> {
            //   return anime.random(25,50);
            // },
            translateY: () => {
                if (itemsPointer % itemsBar == 0) {
                    yPos += 20;
                    xPos = -20;
                }
                itemsPointer += 1;
                return yPos + 'vh';
            },
            translateX: ()=> {
                xPos += 10;
                return xPos + 'vw';
            },
            // scale: ()=> {
            //   return anime.random(0.8,1.2);
            // },
            duration: ()=> {
              return anime.random(1000,1500);
            },
            delay: anime.stagger(50),
            loop: false,
            direction: "alternate",
            easing: "easeOutExpo"
        });
    }

    return (
        <div className="flex justify-center items-center" onClick={(e) => showIcons(e)}>
            <div className={`w-[80px] h-[80px] bg-black rounded-full h-20 w-20 z-10 flex text-center justify-center items-center cursor-pointer transform hover:scale-105 ease-in-out duration-100 ${className}`}>
                {title}
            </div>
            {items?.map((logo: any, i: any) => {
                return (
                    <img key={i} id={`${id}-logo`} className="h-[50px] absolute" src={logo.src} />
                )
            })}
        </div>
    )
}

export default SkillContainer;