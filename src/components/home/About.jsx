import React from "react";
import {
    FiArrowUpRight,
    FiCamera,
    FiFilm,
    FiMapPin,
} from "react-icons/fi";


function About() {
    return (
        <section id="about" className="about-section relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-[120px]" />


            <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-16 xl:px-24">

                {/* Section Header */}
                <div className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

                    <div>

                        <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.4em] text-[#d4af37] sm:text-xs">
                            About Us
                        </span>

                        <h2 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
                            We Capture
                            <span className="block text-[#d4af37]">
                                Your Story.
                            </span>
                        </h2>

                    </div>


                    <div className="h-px w-16 bg-[#d4af37] lg:mb-3 lg:w-24"></div>

                </div>


                {/* Main Content */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">


                    {/* LEFT — Visual */}
                    <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] sm:min-h-[500px]">

                        {/* Visual Placeholder */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-linear-to-br
                                from-[#d4af37]/10
                                via-black/20
                                to-black
                            "
                        ></div>


                        {/* Center Camera */}
                        <div className="absolute inset-0 flex items-center justify-center">

                            <div
                                className="
                                    flex
                                    h-24
                                    w-24
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#d4af37]/40
                                    bg-black/30
                                    text-[#d4af37]
                                    backdrop-blur-xl
                                    sm:h-28
                                    sm:w-28
                                "
                            >
                                <FiCamera className="text-4xl sm:text-5xl" />
                            </div>

                        </div>


                        {/* Bottom Glass Card */}
                        <div
                            className="
                                absolute
                                bottom-5
                                left-5
                                right-5
                                rounded-2xl
                                border
                                border-white/10
                                bg-black/40
                                p-5
                                backdrop-blur-2xl

                                sm:bottom-7
                                sm:left-7
                                sm:right-7
                            "
                        >

                            <div className="flex items-center gap-3">

                                <FiFilm className="text-xl text-[#d4af37]" />

                                <div>
                                    <p className="text-sm font-medium text-white">
                                        Moment Clicker Films
                                    </p>

                                    <p className="mt-1 text-xs text-white/50">
                                        Photography · Filmmaking
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT — Content */}
                    <div className="flex flex-col justify-center">

                        <span className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                            The Studio
                        </span>


                        <h3 className="max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                            Turning moments into
                            <span className="text-[#d4af37]">
                                {" "}timeless memories.
                            </span>
                        </h3>


                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                            Moment Clicker Films is a photography and filmmaking
                            studio dedicated to capturing meaningful moments,
                            emotions and memories through visual storytelling.
                        </p>


                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                            Led by Vishal Sharma, Founder & Lead Photographer,
                            the studio provides professional photography and
                            filmmaking services across India.
                        </p>


                        {/* Founder */}
                        <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#d4af37]/40
                                    bg-[#d4af37]/5
                                    text-[#d4af37]
                                "
                            >
                                <FiCamera />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-white">
                                    Vishal Sharma
                                </p>

                                <p className="mt-1 text-xs text-white/50">
                                    Founder & Lead Photographer
                                </p>
                            </div>

                        </div>


                        {/* Service Info */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-4
                                    backdrop-blur-xl
                                "
                            >
                                <FiCamera className="mb-3 text-xl text-[#d4af37]" />

                                <p className="text-sm font-medium text-white">
                                    Photography
                                </p>

                                <p className="mt-1 text-xs text-white/50">
                                    Wedding · Pre-Wedding · Fashion
                                </p>
                            </div>


                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-4
                                    backdrop-blur-xl
                                "
                            >
                                <FiFilm className="mb-3 text-xl text-[#d4af37]" />

                                <p className="text-sm font-medium text-white">
                                    Filmmaking
                                </p>

                                <p className="mt-1 text-xs text-white/50">
                                    Events · Commercial · Social Media
                                </p>
                            </div>

                        </div>


                        {/* Location */}
                        <div className="mt-5 flex items-center gap-2 text-xs text-white/50">

                            <FiMapPin className="text-[#d4af37]" />

                            <span>
                                All India Services Available
                            </span>

                        </div>


                        {/* CTA */}
                        <button
                            className="
                                group
                                mt-8
                                flex
                                w-fit
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-[#d4af37]/50
                                px-5
                                py-3
                                text-xs
                                font-medium
                                uppercase
                                tracking-wide
                                text-[#d4af37]
                                transition-all
                                duration-300
                                hover:bg-[#d4af37]
                                hover:text-black
                            "
                        >
                            Discover Our Story

                            <FiArrowUpRight
                                className="
                                    text-base
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;