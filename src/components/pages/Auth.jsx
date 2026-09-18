import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomePanel from "../auth/WelcomePanel";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";

function Auth() {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <main
            className="
                relative
                min-h-screen
                w-full
                overflow-hidden
                bg-black
                px-4
                py-8
                text-white
                sm:px-6
                lg:px-10
            "
        >
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="../Image.png"
                    alt=""
                    className="
                        h-full
                        w-full
                        scale-105
                        object-cover
                        object-center
                        blur-md
                    "
                />

                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Auth Card */}
            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-[calc(100vh-4rem)]
                    items-center
                    justify-center
                "
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        auth-card
                        relative
                        w-full
                        max-w-5xl
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-black/40
                        shadow-2xl
                        backdrop-blur-2xl
                    "
                >
                    {/* Corner Glow */}
                    <span className="corner-glow corner-top-left" />
                    <span className="corner-glow corner-top-right" />
                    <span className="corner-glow corner-bottom-left" />
                    <span className="corner-glow corner-bottom-right" />

                    <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">

                        {/* Welcome */}
                       <WelcomePanel />

                        {/* Form */}
                        <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-14">

                            <AnimatePresence mode="wait">
                                {isSignup ? (
                                    <motion.div
                                        key="signup"
                                        initial={{ opacity: 0, x: 35 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -35 }}
                                        transition={{ duration: 0.35 }}
                                        className="w-full"
                                    >
                                        <SignupForm
                                            onLogin={() => setIsSignup(false)}
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="login"
                                        initial={{ opacity: 0, x: -35 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 35 }}
                                        transition={{ duration: 0.35 }}
                                        className="w-full"
                                    >
                                        <LoginForm 
                                            onSignup={() => setIsSignup(true)}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

export default Auth;