import React from "react";
import { motion } from "framer-motion";

function WelcomePanel() {
    return (
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="../Image.png"
                    alt=""
                    className="
                        h-full
                        w-full
                        object-cover
                        object-center
                    "
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/20
                        to-transparent
                    "
                />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[300px]
                    flex-col
                    justify-end
                    p-7
                    sm:p-10
                    lg:min-h-full
                    lg:p-12
                "
            >

                {/* Logo */}
                <img
                    src="../Logo.png"
                    alt="Moment Clicker Films"
                    className="
                        mb-8
                        w-[125px]
                        sm:w-[145px]
                    "
                />

                {/* Label */}
                <span
                    className="
                        mb-3
                        text-[9px]
                        uppercase
                        tracking-[0.45em]
                        text-[#d4af37]
                    "
                >
                    Welcome to our world
                </span>

                {/* Heading */}
                <h1
                    className="
                        max-w-md
                        font-serif
                        text-4xl
                        leading-[1]
                        text-white
                        sm:text-5xl
                    "
                >
                    Your moments.
                    <br />
                    <span className="text-[#d4af37]">
                        Forever remembered.
                    </span>
                </h1>

                {/* Description */}
                <p
                    className="
                        mt-5
                        max-w-sm
                        text-sm
                        leading-6
                        text-white/60
                    "
                >
                    Access your Moment Clicker Films account
                    and continue your journey with us.
                </p>

                {/* Bottom Meta */}
                <div
                    className="
                        mt-8
                        flex
                        items-center
                        gap-3
                    "
                >
                    <span className="h-px w-10 bg-[#d4af37]" />

                    <span
                        className="
                            text-[8px]
                            uppercase
                            tracking-[0.35em]
                            text-white/40
                        "
                    >
                        Photography · Films
                    </span>
                </div>

            </motion.div>
        </div>
    );
}

export default WelcomePanel;