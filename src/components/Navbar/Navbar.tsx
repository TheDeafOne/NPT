'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import Logo from '../../resources/icon-light.svg';
import anime from "animejs";

const Navbar = () => {
    const [navHeight, setNavHeight] = useState(0)
    const [isClient, setIsClient] = useState(false);
    const navItems = [
        { title: "About", id: "about-section" },
        { title: "Skills", id: "skills-section" },
        { title: "Projects", id: "projects-section" },
        { title: "Experience", id: "experience-section" },
        { title: "Kontact Me", id: "contact-section" }
    ]

    useEffect(() => {
        setNavHeight(document.getElementById("navbar")!.offsetHeight);
        setIsClient(true);
        anime({
            targets: ".navlink",
            translateY: -45,
            delay: anime.stagger(100),
            direction: 'reverse'
        });
    }, [])


    return (
        <nav id="navbar" className="bg-transparent sticky w-full z-20 top-0 left-0 flex flex-row items-center justify-center">
            <div className="relative flex-1">
                <Image
                    src={Logo}
                    className="w-[60px] hover:cursor-pointer"
                    onClick={() => animateScroll.scrollToTop()}
                    alt=""
                    priority
                />
            </div>
            <div className={`${isClient ? 'visible' : 'invisible'} flex flex-row gap-5 px-10 justify-center items-center`}>
                {navItems.map((navItem: any, i: number) => {
                    return (
                        <ScrollLink
                            title={navItem.title}
                            key={i}
                            id={`${navItem.id}-nav`}
                            href={`#${navItem.id}`}
                            className="navlink text-text text-xl font-lato font-semibold hover:text-accent active:text-accent transform"
                            to={navItem.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-navHeight}
                            activeClass="text-accent"
                        >
                            {navItem.title}
                        </ScrollLink>
                    )
                })}
            </div>
            <div className="flex-1">
                test
            </div>
        </nav>
    )
}

export default Navbar;
