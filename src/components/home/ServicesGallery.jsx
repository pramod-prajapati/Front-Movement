import React from "react";
import {
    FiCamera,
    FiFilm,
    FiHeart,
    FiArrowUpRight,
    FiAperture,
    FiImage,
} from "react-icons/fi";

function ServicesGallery() {

    const services = [
        {
            icon: <FiHeart />,
            title: "Wedding",
        },
        {
            icon: <FiCamera />,
            title: "Pre-Wedding",
        },
        {
            icon: <FiFilm />,
            title: "Commercial",
        },
        {
            icon: <FiAperture />,
            title: "Fashion",
        },
        {
            icon: <FiImage />,
            title: "Events",
        },
        {
            icon: <FiFilm />,
            title: "Social Media",
        },
    ];

    return (
        <section id="services" className="services-gallery bg-black py-16 text-white sm:py-20 lg:py-24">

            <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-16 xl:px-24">

                {/* Section Heading */}
                <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">

                    <div>

                        <span className="mb-3 block text-[10px] uppercase tracking-[0.4em] text-[#d4af37] sm:text-xs">
                            What We Do
                        </span>

                        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                            Services &
                            <span className="text-[#d4af37]"> Gallery.</span>
                        </h2>

                    </div>

                    <p className="max-w-md text-sm leading-6 text-white/50">
                        Photography and filmmaking crafted around your
                        moments, stories and celebrations.
                    </p>

                </div>


                {/* Main Combined Area */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.8fr_2fr]">


                    {/* SERVICES */}
                    <div
                        className="
                               rounded-3xl
                               border
                               border-white/10
                               bg-white/[0.03]
                               p-5
                               backdrop-blur-xl
                               sm:p-6
                                      "
                    >
                        {/* Services Header */}
                        <div className="mb-5 flex items-center justify-between">

                            <div>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                                    Services
                                </span>

                                <h3 className="mt-1 font-serif text-2xl text-white sm:text-3xl">
                                    Our Expertise
                                </h3>
                            </div>

                            <FiArrowUpRight className="text-xl text-[#d4af37]" />

                        </div>


                        {/* Services Grid */}
                        <div className="grid grid-cols-2 gap-2">

                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group flex min-h-[105px] flex-col justify-between rounded-2xl border  border-white/10  bg-black/20  p-4  transition-all  duration-300  hover:border-[#d4af37]/40  hover:bg-white/[0.05]"
                                >

                                    <span className="text-xl text-[#d4af37]">
                                        {service.icon}
                                    </span>

                                    <span
                                        className=" text-xs text-white/70 transition-colors duration-300 group-hover:text-[#d4af37] sm:text-sm"
                                    >
                                        {service.title}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* GALLERY */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                        {/* Gallery 1 */}
                        <div
                            className=" group relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-black

                                        transition-all
                                        duration-500
                                
                                        hover:border-[#d4af37]/70
                                        hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
    "
                        >

                            {/* Image */}
                            <img
                                src="https://myimgs.org/storage/images/32883/Wedding.png"
                                alt="Wedding Photography"
                                className=" h-full w-full object-cover transition-transfor duration-70 ease-out group-hover:scale-105"
                            />

                            {/* Dark Overlay */}

                            <div
                                className="absolute  inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/30
            "
                            />


                            {/* Golden Glow Border */}

                            {/* Corner Action Glow */}
                            <span className="
    pointer-events-none absolute left-3 top-3
    h-8 w-8 rounded-tl-xl
    border-l border-t border-amber-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-amber-300
    group-hover:shadow-[-4px_-4px_15px_rgba(251,191,36,0.35)]
" />

                            <span className="
    pointer-events-none absolute right-3 top-3
    h-8 w-8 rounded-tr-xl
    border-r border-t border-yellow-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-yellow-300
    group-hover:shadow-[4px_-4px_15px_rgba(250,204,21,0.35)]
" />

                            <span className="
    pointer-events-none absolute bottom-3 left-3
    h-8 w-8 rounded-bl-xl
    border-b border-l border-amber-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-amber-300
    group-hover:shadow-[-4px_4px_15px_rgba(251,191,36,0.35)]
" />

                            <span className="
    pointer-events-none absolute bottom-3 right-3
    h-8 w-8 rounded-br-xl
    border-b border-r border-yellow-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-yellow-300
    group-hover:shadow-[4px_4px_15px_rgba(250,204,21,0.35)]
" />

                            <div className="
    pointer-events-none absolute inset-2
    rounded-[22px] border border-white/5
    transition-all duration-500
    group-hover:border-amber-300/15
" />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Wedding
                                </span>

                            </div>

                        </div>
                        {/* Gallery 2 */}
                        <div
                            className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black

        transition-all
        duration-500

        hover:border-[#d4af37]/70
        hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
    "
                        >

                            {/* Pre-Wedding Image */}

                            <img
                                src="https://myimgs.org/storage/images/32885/PreWedding.png"
                                alt="Pre-Wedding Photography"
                                className="
            h-full
            w-full
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-105
        "
                            />


                            {/* Image Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/30
        "
                            />


                            {/* Golden Inner Glow */}

                            {/* Corner Action Glow */}
<span className="
    pointer-events-none absolute left-3 top-3
    h-8 w-8 rounded-tl-xl
    border-l border-t border-rose-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-rose-300
    group-hover:shadow-[-4px_-4px_15px_rgba(251,113,133,0.35)]
" />

<span className="
    pointer-events-none absolute right-3 top-3
    h-8 w-8 rounded-tr-xl
    border-r border-t border-pink-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-pink-300
    group-hover:shadow-[4px_-4px_15px_rgba(244,114,182,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 left-3
    h-8 w-8 rounded-bl-xl
    border-b border-l border-rose-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-rose-300
    group-hover:shadow-[-4px_4px_15px_rgba(251,113,133,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 right-3
    h-8 w-8 rounded-br-xl
    border-b border-r border-pink-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-pink-300
    group-hover:shadow-[4px_4px_15px_rgba(244,114,182,0.35)]
" />

<div className="
    pointer-events-none absolute inset-2
    rounded-[22px] border border-white/5
    transition-all duration-500
    group-hover:border-rose-300/15
" />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Pre-Wedding
                                </span>

                            </div>

                        </div>
                        {/* Gallery 3 */}
                        <div
                            className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        transition-all
        duration-500
        hover:border-[#d4af37]/70
        hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
    "
                        >

                            {/* Films Image */}

                            <img
                                src="https://myimgs.org/storage/images/33183/film.png"
                                alt="Films"
                                className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
        "
                            />


                            {/* Image Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/30
        "
                            />


                            {/* Golden Inner Glow */}

                            {/* Corner Action Glow */}
<span className="
    pointer-events-none absolute left-3 top-3
    h-8 w-8 rounded-tl-xl
    border-l border-t border-orange-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-orange-300
    group-hover:shadow-[-4px_-4px_15px_rgba(251,146,60,0.35)]
" />

<span className="
    pointer-events-none absolute right-3 top-3
    h-8 w-8 rounded-tr-xl
    border-r border-t border-amber-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-amber-300
    group-hover:shadow-[4px_-4px_15px_rgba(251,191,36,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 left-3
    h-8 w-8 rounded-bl-xl
    border-b border-l border-orange-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-orange-300
    group-hover:shadow-[-4px_4px_15px_rgba(251,146,60,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 right-3
    h-8 w-8 rounded-br-xl
    border-b border-r border-amber-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-amber-300
    group-hover:shadow-[4px_4px_15px_rgba(251,191,36,0.35)]
" />

<div className="
    pointer-events-none absolute inset-2
    rounded-[22px] border border-white/5
    transition-all duration-500
    group-hover:border-orange-300/15
" />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Films
                                </span>

                            </div>

                        </div>
                        {/* Gallery 4 */}
                        <div
                            className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        transition-all
        duration-500
        hover:border-[#d4af37]/70
        hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
    "
                        >

                            {/* Fashion Image */}

                            <img
                                src="https://myimgs.org/storage/images/33184/fashion.png"
                                alt="Fashion Photography"
                                className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
        "
                            />


                            {/* Image Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/30
        "
                            />


                            {/* Golden Inner Glow */}

                            {/* Corner Action Glow */}
<span className="
    pointer-events-none absolute left-3 top-3
    h-8 w-8 rounded-tl-xl
    border-l border-t border-violet-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-violet-300
    group-hover:shadow-[-4px_-4px_15px_rgba(139,92,246,0.35)]
" />

<span className="
    pointer-events-none absolute right-3 top-3
    h-8 w-8 rounded-tr-xl
    border-r border-t border-fuchsia-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-fuchsia-300
    group-hover:shadow-[4px_-4px_15px_rgba(217,70,239,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 left-3
    h-8 w-8 rounded-bl-xl
    border-b border-l border-violet-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-violet-300
    group-hover:shadow-[-4px_4px_15px_rgba(139,92,246,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 right-3
    h-8 w-8 rounded-br-xl
    border-b border-r border-fuchsia-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-fuchsia-300
    group-hover:shadow-[4px_4px_15px_rgba(217,70,239,0.35)]
" />

<div className="
    pointer-events-none absolute inset-2
    rounded-[22px] border border-white/5
    transition-all duration-500
    group-hover:border-violet-300/15
" />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Fashion
                                </span>

                            </div>

                        </div>
                        {/* Gallery 5 */}
                        <div
                            className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        transition-all
        duration-500
        hover:border-[#d4af37]/70
        hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
    "
                        >

                            {/* Events Image */}

                            <img
                                src="https://myimgs.org/storage/images/33402/FinalEvent.png"
                                alt="Events Photography"
                                className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
        "
                            />


                            {/* Image Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/30
        "
                            />


                            {/* Golden Inner Glow */}
{/* Corner Action Glow */}
<span className="
    pointer-events-none absolute left-3 top-3
    h-8 w-8 rounded-tl-xl
    border-l border-t border-emerald-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-emerald-300
    group-hover:shadow-[-4px_-4px_15px_rgba(52,211,153,0.35)]
" />

<span className="
    pointer-events-none absolute right-3 top-3
    h-8 w-8 rounded-tr-xl
    border-r border-t border-cyan-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-cyan-300
    group-hover:shadow-[4px_-4px_15px_rgba(34,211,238,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 left-3
    h-8 w-8 rounded-bl-xl
    border-b border-l border-emerald-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-emerald-300
    group-hover:shadow-[-4px_4px_15px_rgba(52,211,153,0.35)]
" />

<span className="
    pointer-events-none absolute bottom-3 right-3
    h-8 w-8 rounded-br-xl
    border-b border-r border-cyan-400/50
    opacity-70 transition-all duration-500
    group-hover:h-12 group-hover:w-12
    group-hover:border-cyan-300
    group-hover:shadow-[4px_4px_15px_rgba(34,211,238,0.35)]
" />

<div className="
    pointer-events-none absolute inset-2
    rounded-[22px] border border-white/5
    transition-all duration-500
    group-hover:border-emerald-300/15
" />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Events
                                </span>

                            </div>

                        </div>
                        {/* Gallery 6 */}
                        <div
                            className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        transition-all
        duration-500
        hover:border-[#d4af37]/40
        hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]
    "
                        >

                            {/* Image */}

                            <img
                                src="https://myimgs.org/storage/images/33403/SocialMedia.png"
                                alt="Social Media"
                                className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
        "
                            />


                            {/* Dark Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/30
        "
                            />


                            {/* =====================================
        CORNER GLOW EFFECT
    ====================================== */}

                            {/* Top Left */}

                            <span
                                className="
            pointer-events-none
            absolute
            left-3
            top-3
            h-8
            w-8
            rounded-tl-xl
            border-l
            border-t
            border-[#d4af37]/40
            opacity-60
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-[#d4af37]
            group-hover:opacity-100
            group-hover:shadow-[-4px_-4px_15px_rgba(212,175,55,0.25)]
        "
                            />


                            {/* Top Right */}

                            <span
                                className="
            pointer-events-none
            absolute
            right-3
            top-3
            h-8
            w-8
            rounded-tr-xl
            border-r
            border-t
            border-[#d4af37]/40
            opacity-60
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-[#d4af37]
            group-hover:opacity-100
            group-hover:shadow-[4px_-4px_15px_rgba(212,175,55,0.25)]
        "
                            />


                            {/* Bottom Left */}

                            <span
                                className="
            pointer-events-none
            absolute
            bottom-3
            left-3
            h-8
            w-8
            rounded-bl-xl
            border-b
            border-l
            border-[#d4af37]/40
            opacity-60
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-[#d4af37]
            group-hover:opacity-100
            group-hover:shadow-[-4px_4px_15px_rgba(212,175,55,0.25)]
        "
                            />


                            {/* Bottom Right */}

                            <span
                                className="
            pointer-events-none
            absolute
            bottom-3
            right-3
            h-8
            w-8
            rounded-br-xl
            border-b
            border-r
            border-[#d4af37]/40
            opacity-60
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-[#d4af37]
            group-hover:opacity-100
            group-hover:shadow-[4px_4px_15px_rgba(212,175,55,0.25)]
        "
                            />


                            {/* =====================================
        INNER FRAME
    ====================================== */}

                            <div
                                className="
            pointer-events-none
            absolute
            inset-2
            rounded-[22px]
            border
            border-white/5
            transition-all
            duration-500
            group-hover:border-[#d4af37]/15
        "
                            />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Social Media
                                </span>

                            </div>

                        </div>
                        {/* Gallery 7 */}
                        <div
                            className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        transition-all
        duration-500
        hover:border-purple-400/40
        hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]
    "
                        >

                            {/* Photography Image */}

                            <img
                                src="https://myimgs.org/storage/images/33404/PhotoShooot.png"
                                alt="Photography"
                                className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
        "
                            />


                            {/* Cinematic Purple Gradient Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-gradient-to-br
            from-purple-500/10
            via-transparent
            to-fuchsia-500/20
            transition-all
            duration-500
            group-hover:from-purple-500/20
            group-hover:to-fuchsia-500/30
        "
                            />


                            {/* Dark Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/25
        "
                            />


                            {/* =====================================
        CORNER GLOW
    ====================================== */}

                            {/* Top Left */}

                            <span
                                className="
            pointer-events-none
            absolute
            left-3
            top-3
            h-8
            w-8
            rounded-tl-xl
            border-l
            border-t
            border-purple-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-purple-300
            group-hover:shadow-[-4px_-4px_15px_rgba(168,85,247,0.35)]
        "
                            />


                            {/* Top Right */}

                            <span
                                className="
            pointer-events-none
            absolute
            right-3
            top-3
            h-8
            w-8
            rounded-tr-xl
            border-r
            border-t
            border-fuchsia-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-fuchsia-300
            group-hover:shadow-[4px_-4px_15px_rgba(217,70,239,0.35)]
        "
                            />


                            {/* Bottom Left */}

                            <span
                                className="
            pointer-events-none
            absolute
            bottom-3
            left-3
            h-8
            w-8
            rounded-bl-xl
            border-b
            border-l
            border-purple-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-purple-300
            group-hover:shadow-[-4px_4px_15px_rgba(168,85,247,0.35)]
        "
                            />


                            {/* Bottom Right */}

                            <span
                                className="
            pointer-events-none
            absolute
            bottom-3
            right-3
            h-8
            w-8
            rounded-br-xl
            border-b
            border-r
            border-fuchsia-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-fuchsia-300
            group-hover:shadow-[4px_4px_15px_rgba(217,70,239,0.35)]
        "
                            />


                            {/* Inner Frame */}

                            <div
                                className="
            pointer-events-none
            absolute
            inset-2
            rounded-[22px]
            border
            border-white/5
            transition-all
            duration-500
            group-hover:border-purple-300/15
        "
                            />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Photography
                                </span>

                            </div>

                        </div>
                        {/* Gallery 8 */}
                        <div
                            className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
    "
                        >

                            {/* Creative Image */}

                            <img
                                src="https://myimgs.org/storage/images/33406/Creative.png"
                                alt="Creative Photography"
                                className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
        "
                            />


                            {/* Cyan / Blue Gradient */}

                            <div
                                className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-400/10
            via-transparent
            to-blue-500/20
            transition-all
            duration-500
            group-hover:from-cyan-400/20
            group-hover:to-blue-500/30
        "
                            />


                            {/* Dark Overlay */}

                            <div
                                className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/25
        "
                            />


                            {/* =====================================
        CORNER GLOW
    ====================================== */}

                            {/* Top Left */}

                            <span
                                className="
            pointer-events-none
            absolute
            left-3
            top-3
            h-8
            w-8
            rounded-tl-xl
            border-l
            border-t
            border-cyan-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-cyan-300
            group-hover:shadow-[-4px_-4px_15px_rgba(34,211,238,0.35)]
        "
                            />


                            {/* Top Right */}

                            <span
                                className="
            pointer-events-none
            absolute
            right-3
            top-3
            h-8
            w-8
            rounded-tr-xl
            border-r
            border-t
            border-blue-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-blue-300
            group-hover:shadow-[4px_-4px_15px_rgba(59,130,246,0.35)]
        "
                            />


                            {/* Bottom Left */}

                            <span
                                className="
            pointer-events-none
            absolute
            bottom-3
            left-3
            h-8
            w-8
            rounded-bl-xl
            border-b
            border-l
            border-cyan-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-cyan-300
            group-hover:shadow-[-4px_4px_15px_rgba(34,211,238,0.35)]
        "
                            />


                            {/* Bottom Right */}

                            <span
                                className="
            pointer-events-none
            absolute
            bottom-3
            right-3
            h-8
            w-8
            rounded-br-xl
            border-b
            border-r
            border-blue-400/50
            opacity-70
            transition-all
            duration-500
            group-hover:h-12
            group-hover:w-12
            group-hover:border-blue-300
            group-hover:shadow-[4px_4px_15px_rgba(59,130,246,0.35)]
        "
                            />


                            {/* Inner Frame */}

                            <div
                                className="
            pointer-events-none
            absolute
            inset-2
            rounded-[22px]
            border
            border-white/5
            transition-all
            duration-500
            group-hover:border-cyan-300/15
        "
                            />


                            {/* Bottom Gradient */}

                            <div
                                className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
            p-4
            pt-16
        "
                            >

                                <span
                                    className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
            "
                                >
                                    Creative
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ServicesGallery;