import Section from "../Section";


const WelcomeSection = () => {


    return (
        <Section id="welcome-section" className="pt-6">
            <div className="h-screen flex items-center flex-col">
                <div className="my-[10%]">
                    <div className="mx-[-2px] my-4">
                        <span className="text-text text-5xl font-semibold">
                            Hey, I'm
                        </span>
                    </div>
                    
                </div>
            </div>
        </Section>
    )
}

export default WelcomeSection