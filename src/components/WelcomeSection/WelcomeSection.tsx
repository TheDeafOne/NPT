import { useEffect, useRef } from 'react';
import Section from "../Section";

const WelcomeSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas!.getContext('2d');
        canvas!.width = window.innerWidth;
        canvas!.height = window.innerHeight;

        const textX = canvas!.width / 2;
        const textY = canvas!.height / 2;

        const text = 'Keegan';
        context!.fillStyle = '#f4f6f5';
        context!.font = '300px sans-serif'
        context?.fillText(text, 0, 230);

        let partices = [];
        const gap = 3;
        const mouse = {
            radius: 2000,
            x: 0,
            y: 0
        }

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        })

        const pixels = (context?.getImageData(0, 0, canvas!.width, canvas!.height) as any);
        if (pixels !== undefined) {
            for (let y = 0; y < canvas!.height; y += gap) {
                for (let x = 0; x < canvas!.width; x += gap) {
                    const index = (y * canvas!.width + x) * 4;
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const color = `rgb(${red}, ${green}, ${blue})`
                    }
                }
            }
        }
    }, [])

    return (
        <Section id="welcome-section" className="pt-6">
            <div className="h-screen flex items-center flex-col">
                <div className="my-[10%]">
                    <div className="my-4">
                        <span className="text-text text-5xl font-semibold">
                            Hey, I'm
                        </span>
                    </div>
                    <canvas ref={canvasRef} className="h-[25%]  bg-black" />
                </div>
            </div>
        </Section>
    )
}

export default WelcomeSection