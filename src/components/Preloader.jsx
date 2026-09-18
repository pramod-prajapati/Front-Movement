import React, { useEffect, useState } from "react";

function Preloader() {
    const [loading, setLoading] = useState(true);
    const [closing, setClosing] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let progressValue = 0;

        const progressInterval = setInterval(() => {
            progressValue += Math.random() * 8;

            if (progressValue >= 100) {
                progressValue = 100;
                clearInterval(progressInterval);
            }

            setProgress(Math.floor(progressValue));
        }, 120);

        const handleLoad = () => {
            setProgress(100);

            setTimeout(() => {
                setClosing(true);

                setTimeout(() => {
                    setLoading(false);
                }, 800);
            }, 500);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearInterval(progressInterval);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`
                fixed
                inset-0
                z-[9999]
                overflow-hidden
                bg-black
                text-white
                transition-all
                duration-800
                ease-[cubic-bezier(0.77,0,0.175,1)]
                ${
                    closing
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                }
            `}
        >

            {/* Cinematic Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[320px]
                    w-[320px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#d4af37]/5
                    blur-[100px]
                "
            />


            {/* Decorative Frame */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-5
                    border
                    border-white/[0.06]
                    sm:inset-8
                    lg:inset-10
                "
            />


            {/* Top Branding */}

            <div
                className="
                    absolute
                    left-8
                    top-8
                    text-[8px]
                    uppercase
                    tracking-[0.45em]
                    text-white/30
                    sm:left-12
                    sm:top-10
                "
            >
                Moment Clicker Films
            </div>


            {/* Counter */}

            <div
                className="
                    absolute
                    right-8
                    top-8
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    tracking-[0.3em]
                    text-white/30
                    sm:right-12
                    sm:top-10
                "
            >
                <span className="text-[#d4af37]">
                    {String(progress).padStart(2, "0")}
                </span>

                <span>/</span>

                <span>100</span>
            </div>


            {/* Main */}

            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    px-6
                "
            >

                <div
                    className="
                        flex
                        w-full
                        max-w-[360px]
                        flex-col
                        items-center
                    "
                >

                    {/* Logo */}

                    <div className="relative">

                        <div
                            className="
                                absolute
                                inset-[-25px]
                                rounded-full
                                bg-[#d4af37]/5
                                blur-2xl
                            "
                        />

                        <img
                            src="../Logo.png"
                            alt="Moment Clicker Films"
                            className="
                                relative
                                w-[145px]
                                opacity-0
                                animate-[logoReveal_1.2s_ease-out_forwards]
                                sm:w-[175px]
                            "
                        />

                    </div>


                    {/* Brand */}

                    <div
                        className="
                            mt-7
                            flex
                            flex-col
                            items-center
                            gap-2
                            opacity-0
                            animate-[contentReveal_1s_0.4s_ease-out_forwards]
                        "
                    >

                        <span
                            className="
                                text-[9px]
                                uppercase
                                tracking-[0.55em]
                                text-[#d4af37]
                            "
                        >
                            Photography
                        </span>

                        <span
                            className="
                                text-[8px]
                                uppercase
                                tracking-[0.4em]
                                text-white/35
                            "
                        >
                            Films · Stories · Memories
                        </span>

                    </div>


                    {/* Progress */}

                    <div
                        className="
                            mt-12
                            w-full
                            opacity-0
                            animate-[contentReveal_1s_0.6s_ease-out_forwards]
                        "
                    >

                        <div
                            className="
                                relative
                                h-px
                                w-full
                                overflow-hidden
                                bg-white/10
                            "
                        >

                            <div
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    bg-[#d4af37]
                                    transition-all
                                    duration-200
                                    ease-out
                                "
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                            {/* Moving Highlight */}

                            <div
                                className="
                                    absolute
                                    top-0
                                    h-full
                                    w-20
                                    bg-white/60
                                    blur-sm
                                    animate-[scan_1.5s_linear_infinite]
                                "
                            />

                        </div>


                        <div
                            className="
                                mt-3
                                flex
                                items-center
                                justify-between
                            "
                        >

                            <span
                                className="
                                    text-[8px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-white/25
                                "
                            >
                                Creating Memories
                            </span>

                            <span
                                className="
                                    text-[8px]
                                    tracking-[0.2em]
                                    text-white/30
                                "
                            >
                                {progress}%
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom Text */}

            <div
                className="
                    absolute
                    bottom-8
                    left-0
                    right-0
                    text-center
                    text-[7px]
                    uppercase
                    tracking-[0.5em]
                    text-white/20
                    sm:bottom-10
                "
            >
                We Capture · You Remember
            </div>

        </div>
    );
}

export default Preloader;