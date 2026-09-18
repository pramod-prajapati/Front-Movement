import React from "react";
import {
    FiArrowUpRight,
    FiHeart,
    FiFilm,
    FiCamera,
    FiAperture,
} from "react-icons/fi";

function FeatureCard({
    image,
    icon: Icon,
    title,
    subtitle,
    description,
}) {
    return (
        <div
            className="
                group
                relative
                isolate
                h-[500px]
                w-full
                overflow-hidden
                rounded-[26px]
                border
                border-[#d4af37]/60
                bg-black
                shadow-[inset_0_0_45px_rgba(0,0,0,0.75)]
                transition-all
                duration-500

                sm:h-[530px]

                lg:h-[560px]

                xl:h-[580px]

                hover:border-[#d4af37]
            "
        >

            {/* ================= TOP RIGHT GLOW ================= */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-7
                    -top-7
                    z-[10]
                    h-24
                    w-24
                    rounded-full
                    bg-[#d4af37]/60
                    blur-2xl
                    opacity-80
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:opacity-100
                "
            />

            {/* ================= BOTTOM LEFT GLOW ================= */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-7
                    -left-7
                    z-[10]
                    h-24
                    w-24
                    rounded-full
                    bg-[#d4af37]/60
                    blur-2xl
                    opacity-80
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:opacity-100
                "
            />

            {/* ================= IMAGE ================= */}
            <div
                className="
                    absolute
                    inset-x-0
                    top-0
                    h-[57%]
                    overflow-hidden
                "
            >
                <img
                    src={image}
                    alt={title}
                    className="
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-1000
                        ease-out
                        group-hover:scale-105
                    "
                />

                {/* Soft Image Overlay */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-black/10
                    "
                />

                {/* Image to Black Gradient */}
                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-[70%]
                        bg-gradient-to-t
                        from-black
                        via-black/70
                        to-transparent
                    "
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-[5]
                    flex
                    h-[49%]
                    flex-col
                    items-center
                    px-5
                    pb-5
                    text-center

                    sm:px-6
                    sm:pb-6
                "
            >

                {/* Icon */}
                <div
                    className="
                        mb-3
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        text-[#d4af37]
                        transition-transform
                        duration-500
                        group-hover:-translate-y-1

                        sm:h-14
                        sm:w-14
                    "
                >
                    <Icon
                        className="
                            text-[36px]
                            stroke-[1.2]

                            sm:text-[40px]
                        "
                    />
                </div>

                {/* Title */}
                <h3
                    className="
                        font-serif
                        text-[31px]
                        leading-none
                        text-white

                        sm:text-[34px]

                        lg:text-[36px]
                    "
                >
                    {title}
                </h3>

                {/* Subtitle */}
                <span
                    className="
                        mt-2
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.38em]
                        text-[#d4af37]

                        sm:text-[11px]
                    "
                >
                    {subtitle}
                </span>

                {/* Divider */}
                <div
                    className="
                        mt-4
                        flex
                        w-full
                        max-w-[270px]
                        items-center
                        justify-center
                    "
                >
                    <div className="h-px flex-1 bg-white/10" />

                    <div className="mx-3 h-px w-10 bg-[#d4af37]/60" />

                    <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Description */}
                <p
                    className="
                        mt-4
                        max-w-[270px]
                        text-[13px]
                        leading-5
                        text-white/55

                        sm:max-w-[285px]
                        sm:text-sm
                        sm:leading-6
                    "
                >
                    {description}
                </p>

                {/* Arrow */}
                <button
                    type="button"
                    aria-label={`View ${title}`}
                    className="
                        mt-auto
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d4af37]/70
                        bg-black/40
                        text-[#d4af37]
                        backdrop-blur-sm
                        transition-all
                        duration-500

                        sm:h-13
                        sm:w-13

                        group-hover:scale-105
                        group-hover:bg-[#d4af37]
                        group-hover:text-black
                    "
                >
                    <FiArrowUpRight
                        className="
                            text-lg
                            transition-transform
                            duration-500
                            group-hover:rotate-45
                        "
                    />
                </button>

            </div>

            {/* ================= INNER VIGNETTE ================= */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[8]
                    rounded-[26px]
                    shadow-[inset_0_0_50px_rgba(0,0,0,0.7)]
                "
            />

        </div>
    );
}


function FeatureWork() {
    return (
        <>
            <section
                className="
                    feature-work-section
                    bg-black
                    py-16
                    text-white

                    sm:py-20

                    lg:py-24
                "
            >

                <div
                    className="
                        container
                        mx-auto
                        px-5

                        sm:px-8

                        lg:px-16

                        xl:px-24
                    "
                >

                    {/* ================= HEADER ================= */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-8

                            lg:flex-row
                            lg:items-end
                            lg:justify-between
                        "
                    >

                        {/* Heading */}
                        <div className="max-w-2xl">

                            <span
                                className="
                                    mb-3
                                    block
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.4em]
                                    text-[#d4af37]

                                    sm:text-sm
                                "
                            >
                                Feature Work
                            </span>

                            <h2
                                className="
                                    font-serif
                                    text-4xl
                                    leading-tight
                                    text-white

                                    sm:text-5xl

                                    md:text-6xl
                                "
                            >
                                Stories We Have

                                <span className="block text-[#d4af37]">
                                    Captured.
                                </span>
                            </h2>

                            {/* Gold Line */}
                            <div
                                className="
                                    relative
                                    mt-5
                                    h-px
                                    w-32
                                    bg-[#d4af37]/70
                                "
                            >
                                <span
                                    className="
                                        absolute
                                        -right-1
                                        -top-[2px]
                                        h-[5px]
                                        w-[5px]
                                        rounded-full
                                        bg-[#d4af37]
                                        shadow-[0_0_12px_#d4af37]
                                    "
                                />
                            </div>

                        </div>


                        {/* View All Work */}
                        <button
                            type="button"
                            className="
                                group/view
                                flex
                                w-fit
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-white/20
                                bg-white/5
                                px-5
                                py-3
                                text-sm
                                text-white/80
                                backdrop-blur-xl
                                transition-all
                                duration-300

                                hover:border-[#d4af37]
                                hover:text-[#d4af37]
                            "
                        >
                            View All Work

                            <FiArrowUpRight
                                className="
                                    text-lg
                                    transition-transform
                                    duration-300
                                    group-hover/view:translate-x-1
                                    group-hover/view:-translate-y-1
                                "
                            />
                        </button>

                    </div>


                    {/* ================= WORK CARDS ================= */}
                    <div
                        className="
                            mt-12
                            grid
                            grid-cols-1
                            gap-6

                            sm:grid-cols-2

                            lg:mt-16
                            lg:grid-cols-4
                            lg:gap-5
                        "
                    >

                        {/* Wedding */}
                        <FeatureCard
                            image="https://myimgs.org/storage/images/31606/Wedding.png"
                            icon={FiHeart}
                            title="Wedding"
                            subtitle="Stories"
                            description="Moments filled with emotion."
                        />

                        {/* Films */}
                        <FeatureCard
                            image="https://myimgs.org/storage/images/31626/camra.png"
                            icon={FiFilm}
                            title="Films"
                            subtitle="Cinematic"
                            description="Stories brought to life."
                        />

                        {/* Portrait */}
                        <FeatureCard
                            image="https://myimgs.org/storage/images/31628/Beauty.png"
                            icon={FiCamera}
                            title="Portrait"
                            subtitle="Expression"
                            description="Personality through the lens."
                        />

                        {/* Drone */}
                        <FeatureCard
                            image="https://myimgs.org/storage/images/31629/Drone.png"
                            icon={FiAperture}
                            title="Drone"
                            subtitle="Aerial"
                            description="A different perspective."
                        />

                    </div>

                </div>

            </section>
        </>
    );
}

export default FeatureWork;