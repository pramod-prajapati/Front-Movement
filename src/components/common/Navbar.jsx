import React, { useEffect, useState } from "react";

import {
    FiMenu,
    FiX,
    FiArrowUpRight,
    FiLogIn,
    FiUserPlus,
    FiLogOut,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import {
    getAuthToken,
    clearAuth,
} from "../../services/api";


function Navbar() {

    const navigate = useNavigate();

    const [activeSection, setActiveSection] =
        useState("home");

    const [mobileOpen, setMobileOpen] =
        useState(false);

    const [isLoggedIn, setIsLoggedIn] =
        useState(false);


    // ========================================
    // AUTH STATE
    // ========================================

    useEffect(() => {

        const checkAuth = () => {

            const token = getAuthToken();

            setIsLoggedIn(Boolean(token));
        };

        checkAuth();

        window.addEventListener(
            "storage",
            checkAuth
        );

        return () => {

            window.removeEventListener(
                "storage",
                checkAuth
            );

        };

    }, []);


    // ========================================
    // NAVIGATION ITEMS
    // ========================================

    const navItems = [

        {
            name: "Home",
            id: "home",
        },

        {
            name: "About",
            id: "about",
        },

        {
            name: "Services",
            id: "services",
        },

        {
            name: "Portfolio",
            id: "portfolio",
        },

        {
            name: "Films",
            id: "films",
        },

        {
            name: "Blog",
            id: "blog",
        },

        {
            name: "Contact",
            id: "booking",
        },

    ];


    // ========================================
    // ACTIVE SECTION DETECTION
    // ========================================

    useEffect(() => {

        const sections = navItems
            .map((item) =>
                document.getElementById(item.id)
            )
            .filter(Boolean);


        if (!sections.length) return;


        const observer =
            new IntersectionObserver(
                (entries) => {

                    const visibleSections =
                        entries
                            .filter(
                                (entry) =>
                                    entry.isIntersecting
                            )
                            .sort(
                                (a, b) =>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            );


                    if (
                        visibleSections.length > 0
                    ) {

                        setActiveSection(
                            visibleSections[0]
                                .target.id
                        );

                    }

                },
                {
                    threshold: [
                        0.2,
                        0.4,
                        0.6,
                    ],

                    rootMargin:
                        "-15% 0px -55% 0px",
                }
            );


        sections.forEach((section) => {

            observer.observe(section);

        });


        return () => {

            observer.disconnect();

        };

    }, []);


    // ========================================
    // SMOOTH SCROLL
    // ========================================

    const handleNavigation = (id) => {

        const section =
            document.getElementById(id);


        if (!section) return;


        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });


        setMobileOpen(false);

    };


    // ========================================
    // LOGIN
    // ========================================

    const handleLogin = () => {

        setMobileOpen(false);

        navigate("/login");

    };


    // ========================================
    // SIGNUP
    // ========================================

    const handleSignup = () => {

        setMobileOpen(false);

        navigate("/signup");

    };


    // ========================================
    // LOGOUT
    // ========================================

    const handleLogout = () => {

        clearAuth();

        setIsLoggedIn(false);

        setMobileOpen(false);

        navigate("/login", {
            replace: true,
        });

    };


    // ========================================
    // BOOKING
    // ========================================

    const handleBooking = () => {

        handleNavigation("booking");

    };


    return (

        <header
            className="
                fixed
                left-0
                top-0
                z-50
                w-full
                px-4
                py-3
                text-white
                sm:px-6
                lg:px-8
            "
        >

            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1500px]
                    items-center
                    justify-between
                    gap-5
                "
            >

                {/* =====================================
                    LOGO
                ===================================== */}

                <div className="main shrink-0">

                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("home")
                        }
                        aria-label="Go to home"
                    >

                        <img
                            src="../Logo.png"
                            alt="Moment Clicker Films"
                            className="
                                w-[85px]
                                sm:w-[100px]
                            "
                        />

                    </button>

                </div>


                {/* =====================================
                    DESKTOP NAVIGATION
                ===================================== */}

                <nav
                    className="
                        hidden
                        lg:block
                    "
                    aria-label="Main navigation"
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-1
                            rounded-full
                            border
                            border-white/15
                            bg-black/35
                            px-2
                            py-1.5
                            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                            backdrop-blur-2xl
                        "
                    >

                        {navItems.map((item) => {

                            const isActive =
                                activeSection ===
                                item.id;


                            return (

                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() =>
                                        handleNavigation(
                                            item.id
                                        )
                                    }
                                    className={`
                                        relative
                                        rounded-full
                                        px-5
                                        py-2.5
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-300

                                        ${
                                            isActive
                                                ? "text-[#d4af37]"
                                                : "text-white/80 hover:text-[#d4af37]"
                                        }
                                    `}
                                >

                                    {item.name}


                                    {/* Active Indicator */}

                                    <span
                                        className={`
                                            absolute
                                            bottom-[-5px]
                                            left-1/2
                                            h-[2px]
                                            -translate-x-1/2
                                            rounded-full
                                            bg-[#d4af37]
                                            shadow-[0_0_10px_#d4af37]
                                            transition-all
                                            duration-300
                                            ease-out

                                            ${
                                                isActive
                                                    ? "w-8 opacity-100"
                                                    : "w-0 opacity-0"
                                            }
                                        `}
                                    />

                                </button>

                            );

                        })}

                    </div>

                </nav>


                {/* =====================================
                    DESKTOP RIGHT ACTIONS
                ===================================== */}

                <div
                    className="
                        hidden
                        shrink-0
                        items-center
                        gap-2
                        lg:flex
                    "
                >

                    {/* =================================
                        LOGGED OUT
                    ================================= */}

                    {!isLoggedIn && (

                        <>
                            {/* Login */}

                            <button
                                type="button"
                                onClick={handleLogin}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/15
                                    bg-white/[0.03]
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-white/75
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:border-[#d4af37]/60
                                    hover:bg-[#d4af37]/10
                                    hover:text-[#d4af37]
                                "
                            >

                                <FiLogIn
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-x-0.5
                                    "
                                />

                                Login

                            </button>


                            {/* Signup */}

                            <button
                                type="button"
                                onClick={handleSignup}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-[#d4af37]
                                    bg-[#d4af37]
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:bg-[#e3c15c]
                                    hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
                                "
                            >

                                <FiUserPlus
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />

                                Signup

                            </button>
                        </>

                    )}


                    {/* =================================
                        LOGGED IN
                    ================================= */}

                    {isLoggedIn && (

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/15
                                bg-white/[0.03]
                                px-5
                                py-2.5
                                text-sm
                                font-medium
                                text-white/75
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:border-[#d4af37]/60
                                hover:bg-[#d4af37]/10
                                hover:text-[#d4af37]
                            "
                        >

                            <FiLogOut
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                "
                            />

                            Logout

                        </button>

                    )}


                    {/* =================================
                        BOOK YOUR DATE
                    ================================= */}

                    <button
                        type="button"
                        onClick={handleBooking}
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#d4af37]
                            bg-[#d4af37]/10
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            text-[#d4af37]
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:bg-[#d4af37]
                            hover:text-black
                            sm:px-5
                        "
                    >

                        Book Your Date

                        <FiArrowUpRight
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
                        />

                    </button>

                </div>


                {/* =====================================
                    MOBILE MENU BUTTON
                ===================================== */}

                <button
                    type="button"
                    onClick={() =>
                        setMobileOpen(
                            (prev) => !prev
                        )
                    }
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/40
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-[#d4af37]
                        hover:text-[#d4af37]
                        lg:hidden
                    "
                    aria-label={
                        mobileOpen
                            ? "Close menu"
                            : "Open menu"
                    }
                    aria-expanded={mobileOpen}
                >

                    {mobileOpen ? (
                        <FiX className="text-xl" />
                    ) : (
                        <FiMenu className="text-xl" />
                    )}

                </button>

            </div>


            {/* =====================================
                MOBILE NAVIGATION
            ===================================== */}

            <div
                className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-in-out
                    lg:hidden

                    ${
                        mobileOpen
                            ? "max-h-[800px] opacity-100"
                            : "pointer-events-none max-h-0 opacity-0"
                    }
                `}
            >

                <nav
                    className="
                        mx-auto
                        mt-3
                        w-full
                        max-w-[1500px]
                        rounded-3xl
                        border
                        border-white/10
                        bg-black/60
                        p-3
                        shadow-2xl
                        backdrop-blur-2xl
                    "
                    aria-label="Mobile navigation"
                >

                    <div className="flex flex-col">

                        {/* =================================
                            MOBILE NAV ITEMS
                        ================================= */}

                        {navItems.map((item) => {

                            const isActive =
                                activeSection ===
                                item.id;


                            return (

                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() =>
                                        handleNavigation(
                                            item.id
                                        )
                                    }
                                    className={`
                                        relative
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        px-4
                                        py-3.5
                                        text-left
                                        text-sm
                                        transition-all
                                        duration-300

                                        ${
                                            isActive
                                                ? "bg-white/[0.05] text-[#d4af37]"
                                                : "text-white/75 hover:bg-white/[0.03] hover:text-[#d4af37]"
                                        }
                                    `}
                                >

                                    <span>
                                        {item.name}
                                    </span>


                                    {/* Mobile Active Line */}

                                    <span
                                        className={`
                                            h-[2px]
                                            rounded-full
                                            bg-[#d4af37]
                                            shadow-[0_0_10px_#d4af37]
                                            transition-all
                                            duration-300

                                            ${
                                                isActive
                                                    ? "w-8 opacity-100"
                                                    : "w-0 opacity-0"
                                            }
                                        `}
                                    />

                                </button>

                            );

                        })}


                        {/* =================================
                            MOBILE AUTH ACTIONS
                        ================================= */}

                        <div
                            className="
                                mt-2
                                grid
                                grid-cols-2
                                gap-2
                            "
                        >

                            {!isLoggedIn ? (

                                <>

                                    {/* Mobile Login */}

                                    <button
                                        type="button"
                                        onClick={
                                            handleLogin
                                        }
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-2xl
                                            border
                                            border-white/15
                                            bg-white/[0.04]
                                            px-4
                                            py-3.5
                                            text-sm
                                            font-medium
                                            text-white/75
                                            backdrop-blur-xl
                                            transition-all
                                            duration-300
                                            hover:border-[#d4af37]/60
                                            hover:text-[#d4af37]
                                        "
                                    >

                                        <FiLogIn />

                                        Login

                                    </button>


                                    {/* Mobile Signup */}

                                    <button
                                        type="button"
                                        onClick={
                                            handleSignup
                                        }
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-2xl
                                            border
                                            border-[#d4af37]
                                            bg-[#d4af37]
                                            px-4
                                            py-3.5
                                            text-sm
                                            font-medium
                                            text-black
                                            transition-all
                                            duration-300
                                            hover:bg-[#e3c15c]
                                        "
                                    >

                                        <FiUserPlus />

                                        Signup

                                    </button>

                                </>

                            ) : (

                                /* Mobile Logout */

                                <button
                                    type="button"
                                    onClick={
                                        handleLogout
                                    }
                                    className="
                                        col-span-2
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-2xl
                                        border
                                        border-white/15
                                        bg-white/[0.04]
                                        px-4
                                        py-3.5
                                        text-sm
                                        font-medium
                                        text-white/75
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:border-[#d4af37]/60
                                        hover:bg-[#d4af37]/10
                                        hover:text-[#d4af37]
                                    "
                                >

                                    <FiLogOut />

                                    Logout

                                </button>

                            )}

                        </div>


                        {/* =================================
                            MOBILE BOOKING
                        ================================= */}

                        <button
                            type="button"
                            onClick={handleBooking}
                            className="
                                mt-2
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-2xl
                                border
                                border-[#d4af37]
                                bg-[#d4af37]
                                px-4
                                py-3.5
                                text-sm
                                font-medium
                                text-black
                            "
                        >

                            Book Your Date

                            <FiArrowUpRight />

                        </button>

                    </div>

                </nav>

            </div>

        </header>

    );
}


export default Navbar;