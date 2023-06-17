'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from '../../resources/icon-light.svg';
import { useRef } from "react";


const Navbar = () => {
    const navRef = useRef<null | HTMLElement>(null);
    const  welcomeRef = useRef<null | HTMLElement>(null);
    const  aboutRef = useRef<null | HTMLElement>(null);
    const  skillsRef = useRef<null | HTMLElement>(null);
    const  projectsRef = useRef<null | HTMLElement>(null);
    const  experienceRef = useRef<null | HTMLElement>(null);
    const  contactRef = useRef<null | HTMLElement>(null);

    const navItems = [
        { title: "Welcome", id: "welcome-section", ref: welcomeRef },
        { title: "About", id: "about-section", ref: aboutRef },
        { title: "Skills", id: "skills-section", ref: skillsRef },
        { title: "Projects", id: "projects-section", ref: projectsRef },
        { title: "Experience", id: "experience-section", ref: experienceRef },
        { title: "Contact Me", id: "contact-section", ref: contactRef }
    ]

        
    const handleScroll = (e: any, ref: any) => {
        e.preventDefault();
        const dims = ref.current.getBoundingClientRect();
        console.log(dims);
        const navHeight = document.getElementById("navbar")!.offsetHeight
        window.scrollTo({
            top: dims.top - navHeight + window.scrollY,
            behavior: "smooth"
        });
    };


    return (
        <nav id="navbar" ref={navRef} className="bg-background sticky w-full z-20 top-0 left-0 flex flex-row justify-between shadow-md">
            <div className="px-2">
                <Image
                    src={Logo}
                    className="w-[60px] hover:cursor-pointer"
                    onClick={(e) => handleScroll(e, welcomeRef)}
                    alt=""
                    priority
                />
            </div>
            <div className="flex flex-row gap-5 px-10 justify-center items-center">
                {navItems.map((navItem, i) => {
                    return (
                        <Link 
                            id={`${navItem.id}-nav`} 
                            key={i}
                            href={`#${navItem.id}`} 
                            onClick={(e) => handleScroll(e, navItem.ref)} 
                            className="hover:text-accent text-text text-lg"
                            ref={navItem.ref as any}
                        >
                            {navItem.title}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar;
