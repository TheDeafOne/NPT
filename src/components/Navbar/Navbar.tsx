'use client';
import Image from "next/image";
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import Logo from '../../resources/icon-light.svg';
import { useEffect, useState } from "react";

const Navbar = () => {
    const [navHeight, setNavHeight] = useState(0)
    const navItems = [
        { title: "About", id: "about-section" },
        { title: "Skills", id: "skills-section" },
        { title: "Projects", id: "projects-section" },
        { title: "Experience", id: "experience-section" },
        { title: "Contact Me", id: "contact-section" }
    ]

    useEffect(() => {
        setNavHeight(document.getElementById("navbar")!.offsetHeight);
    }, [])
    
    return (
        <nav id="navbar" className="bg-background sticky w-full z-20 top-0 left-0 flex flex-row justify-between shadow-md">
            <div className="px-2">
                <Image
                    src={Logo}
                    className="w-[60px] hover:cursor-pointer"
                    onClick={() => animateScroll.scrollToTop()}
                    alt=""
                    priority
                />
            </div>
            <div className="flex flex-row gap-5 px-10 justify-center items-center">
                {navItems.map((navItem: any, i: number) => {
                    return (
                        <ScrollLink
                            title={navItem.title}
                            key={i}
                            id={`${navItem.id}-nav`}
                            href={`#${navItem.id}`}
                            className="hover:text-accent text-text text-lg active:text-accent"
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
        </nav>
    )
}

export default Navbar;
