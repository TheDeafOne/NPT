import { useRef, useState, useEffect } from "react"
import Section from "../Section"
import name from "../../resources/name.svg";
import Image from "next/image";
import ParticleImage, { ParticleOptions } from "react-particle-image";


const WelcomeSection = () => {
    const nameRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
      
        
        nameRef.current?.classList.remove('invisible')
    }, [])

    return (
        <Section id="welcome-section" className="pt-6">
            <div className="h-screen flex items-center flex-col">
                <div className="my-[10%]">
                    <div className="mx-[-2px] my-4">
                        <span className="text-text text-5xl font-semibold">
                            Hey, I'm
                        </span>
                    </div>
                    <Image src={name} alt="" height={130}/>

                </div>
            </div>
        </Section>
    )
}

export default WelcomeSection