'use client';
import anime from "animejs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import Logo from '../../resources/icon-light.svg';

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
            opacity: 1,
            delay: anime.stagger(100),
            from: 'last'
        });
    }, [])


    return (
        <nav id="navbar" className={`shadow-sm sticky w-full z-[31] top-0 left-0 flex flex-row justify-between shadow-md backdrop-blur-md`}>
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
                            className="opacity-0 navlink text-text text-xl font-lato font-semibold hover:text-accent active:text-accent transform"
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
            <div className="flex-1" />
        </nav>
    )
}

export default Navbar;
