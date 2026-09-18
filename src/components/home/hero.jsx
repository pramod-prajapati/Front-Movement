import React from "react";
import { TiCameraOutline } from "react-icons/ti";
import { PiFilmSlateLight } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import SocialLinks from "../common/SocialLinks";

function Hero() {

    const handleNavigation = (id) => {

        const section = document.getElementById(id);

        if (!section) return;


        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });


        setMobileOpen(false);
    };



    return (
        <section id="home" className="main-container relative min-h-screen w-full overflow-hidden bg-black text-white">

            {/* Background */}
            <div className="absolute inset-0 z-0 bg-fixed">
                <img
                    src="https://cdn.postimage.me/2026/08/28/Image.png"
                    alt=""
                    className="h-full w-full object-cover object-center " 
                     
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-black/45"></div>

                {/* Left Dark Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>
            </div>


            {/* Hero Content */}
            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-screen
                    w-full
                    flex-col
                    items-center
                    justify-center
                    gap-10
                    px-5
                    pt-28
                    pb-12

                    sm:px-8
                    sm:pt-32

                    md:px-10

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    lg:gap-12
                    lg:px-16
                    lg:pt-28
                    lg:pb-16

                    xl:px-24
                "
            >

                {/* LEFT */}
                <div
                    className="
                        left
                        w-full
                        max-w-2xl
                        text-center

                        lg:text-left
                    "
                >

                    <span
                        className=" shiv
                            mb-4
                            block
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-[#d4af37]

                            sm:text-xs
                            sm:tracking-[0.45em]

                            lg:text-sm
                        "
                    >
                        We Capture
                    </span>


                    <div className="flex flex-col">

                        <span
                            className=" big
                                font-serif
                                text-4xl
                                leading-[0.95]
                                tracking-tight
                                text-white

                                sm:text-5xl
                                md:text-6xl

                                lg:text-7xl
                                xl:text-8xl
                            "
                        >
                            Moments
                            <span className="text-[#d4af37]">.</span>
                        </span>


                        <span
                            className=" big
                                font-serif
                                text-4xl
                                leading-[0.95]
                                tracking-tight
                                text-white

                                sm:text-5xl
                                md:text-6xl

                                lg:text-7xl
                                xl:text-8xl
                            "
                        >
                            Emotions
                            <span className="text-[#d4af37]">.</span>
                        </span>


                        <span
                            className=" big
                                font-serif
                                text-4xl
                                leading-[0.95]
                                tracking-tight
                                text-amber-500

                                sm:text-5xl
                                md:text-6xl

                                lg:text-7xl
                                xl:text-8xl
                            "
                        >
                            Memories
                            <span className="text-[#d4af37]">.</span>
                        </span>

                    </div>


                    {/* Description */}
                    <div
                        className="
                            para
                            mx-auto
                            mt-6
                            max-w-xl

                            lg:mx-0
                            lg:mt-7
                        "
                    >
                        <p
                            className="
                                text-sm
                                leading-6
                                text-white/70

                                sm:text-base
                                sm:leading-7
                            "
                        >
                            We are a team of passionate photographers and videographers
                            dedicated to capturing the essence of life's most precious
                            moments. Our mission is to create timeless memories that you
                            can cherish forever.
                        </p>
                    </div>


                    {/* Buttons */}
                    <div
                        className="
                            btn-div
                            mt-7
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-3

                            sm:flex-row
                            sm:gap-4

                            lg:justify-start
                            lg:mt-8
                        "
                    >

                        <button
                            className="
                                btn-1
                                w-full
                                max-w-[220px]
                                rounded-full
                                border
                                border-[#d4af37]
                                bg-[#d4af37]
                                px-6
                                py-3
                                text-sm
                                font-medium
                                text-black
                                transition-all
                                duration-300
                                hover:bg-[#e3c15c]

                                sm:w-auto
                            "
                        >
                            Watch Showreels
                        </button>


                        <button 
                        onClick={() =>
                            handleNavigation("booking")
                        }
                        
                            className="
                                btn-1
                                w-full
                                max-w-[220px]
                                rounded-full
                                border
                                border-white/25
                                bg-white/5
                                px-6
                                py-3
                                text-sm
                                font-medium
                                text-white
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:border-[#d4af37]
                                hover:text-[#d4af37]

                                sm:w-auto
                            " 
                        >
                            Book Your Date
                        </button>

                    </div>

                </div>


                {/* RIGHT */}
                <div
                    className="
                        right
                        w-full
                        max-w-[300px]
                        shrink-0

                        lg:w-[280px]

                        xl:w-[310px]
                    "
                >

                    <div
                        className="
                            years
                            w-full
                            rounded-3xl
                            border
                            border-white/15
                            bg-black/25
                            p-6
                            backdrop-blur-2xl
                            shadow-2xl

                            sm:p-7
                        "
                    >

                        {/* Experience */}
                        <div className="flex flex-col items-center gap-1 text-center">

                            <TiCameraOutline
                                className="
                                    mb-3
                                    text-3xl
                                    text-[#d4af37]
                                "
                            />

                            <span
                                className="
                                    text-3xl
                                    font-semibold
                                    text-white

                                    sm:text-4xl
                                "
                            >
                                10+
                            </span>

                            <span className="text-sm text-white/60">
                                Years of Experience
                            </span>

                        </div>


                        <div className="separate my-5 h-px w-full bg-white/10 sm:my-6"></div>


                        {/* Projects */}
                        <div className="flex flex-col items-center gap-1 text-center">

                            <PiFilmSlateLight
                                className="
                                    mb-3
                                    text-3xl
                                    text-[#d4af37]
                                "
                            />

                            <span
                                className="
                                    text-3xl
                                    font-semibold
                                    text-white

                                    sm:text-4xl
                                "
                            >
                                500+
                            </span>

                            <span className="text-sm text-white/60">
                                Project Compliment
                            </span>

                        </div>


                        <div className="separate my-5 h-px w-full bg-white/10 sm:my-6"></div>


                        {/* Satisfaction */}
                        <div className="flex flex-col items-center gap-2 text-center">

                            <div className="icon">
                                <GiSelfLove className="text-3xl text-[#d4af37]" />
                            </div>

                            <div className="tect flex flex-col items-center gap-1">

                                <span
                                    className="
                                        text-3xl
                                        font-semibold
                                        text-white

                                        sm:text-4xl
                                    "
                                >
                                    100%
                                </span>

                                <span className="text-sm text-white/60">
                                    Client Satisfaction
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <SocialLinks /> 
            {/* Scroll Indicator */}
            {/* <div
                className="
        absolute
        bottom-6
        left-1/2
        z-20
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-2
        text-white/60
    "
            >
                <span className="text-[10px] uppercase tracking-[0.35em]">
                    Scroll
                </span>

                <div
                    className="
            flex
            h-10
            w-6
            items-start
            justify-center
            rounded-full
            border
            border-white/25
            p-1
        "
                >
                    <span
                        className="
                h-2
                w-1
                rounded-full
                bg-[#d4af37]
                animate-bounce
            "
                    ></span>
                </div>
            </div> */}

        </section>
    );
}

export default Hero;