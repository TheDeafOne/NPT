import Section from "../Section";


const WelcomeSection = () => {


    return (
        <Section id="welcome-section" className="pt-6">
            <div className="h-screen flex items-center flex-col">
                <div className="my-[10%]">
                    <div>
                        <span className="text-text text-5xl font-semibold">
                            Hey, I'm
                        </span>
                    </div>
                    <div>
                        <span className="text-text text-8xl font-bold">
                            Keegan
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default WelcomeSection