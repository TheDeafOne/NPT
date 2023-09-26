import { StaticImageData } from "next/image";

interface IExperience {
    company: string,
    title: string,
    range: [string, string],
    description: string,
    location: string,
    website: string,
    logo: any,
    skills: string[]
}

export default IExperience;