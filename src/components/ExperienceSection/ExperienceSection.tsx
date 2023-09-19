import Section from "../Section"
import IExperience from "./Experience";
import { ExperienceAccordian } from "./ExperienceAccordian";

const ExperienceSection = () => {
    return (
        <Section id="experience-section">
            <div className="text-white h-screen bg-blue flex justify-center">
                <div className="flex flex-col gap-y-5 w-[50%]">
                    <ExperienceAccordian />
                </div>
            </div>
        </Section>
    )
}

export default ExperienceSection