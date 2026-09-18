import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiArrowRight,
} from "react-icons/fi";

import {
    loginUser,
    saveAuthToken,
    saveUser,
} from "../../services/api";

import { useNavigate } from "react-router-dom";


function LoginForm({ onSignup }) {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const [apiError, setApiError] = useState("");


    // ========================================
    // Handle Input
    // ========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

        setApiError("");
    };


    // ========================================
    // Validation
    // ========================================

    const validateForm = () => {

        const newErrors = {};

        if (!formData.email.trim()) {

            newErrors.email =
                "Email is required";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {

            newErrors.email =
                "Enter a valid email";

        }


        if (!formData.password) {

            newErrors.password =
                "Password is required";

        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    // ========================================
    // Login
    // ========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setApiError("");

        if (!validateForm()) return;


        try {

            setLoading(true);


            const data = await loginUser({
                email: formData.email.trim(),
                password: formData.password,
            });


            // ========================================
            // Save JWT
            // ========================================

            saveAuthToken(data.token);


            // ========================================
            // Save User
            // ========================================

            saveUser(data.user);


            // ========================================
            // Dashboard
            // ========================================

            navigate("/dashboard", {
                replace: true,
            });


        } catch (error) {

            setApiError(
                error.message ||
                "Login failed. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="mx-auto w-full max-w-md">

            {/* Heading */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 15
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.5
                }}
            >

                <span className="text-[9px] uppercase tracking-[0.45em] text-[#d4af37]">
                    Client Access
                </span>

                <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                    Welcome Back
                    <span className="text-[#d4af37]">
                        .
                    </span>
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/40">
                    Sign in to continue to your account.
                </p>

            </motion.div>


            {/* Form */}

            <motion.form
                onSubmit={handleSubmit}
                initial={{
                    opacity: 0,
                    y: 20
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.15
                }}
                className="mt-9 space-y-5"
            >

                {/* Email */}

                <div>

                    <label
                        htmlFor="email"
                        className="mb-2 block text-xs text-white/50"
                    >
                        Email Address
                    </label>

                    <div
                        className={`
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            ${
                                errors.email
                                    ? "border-red-400/50"
                                    : "border-white/10"
                            }
                            bg-white/[0.03]
                            px-4
                            transition-all
                            duration-300
                            focus-within:border-[#d4af37]/60
                            focus-within:bg-white/[0.05]
                        `}
                    >

                        <FiMail className="shrink-0 text-base text-white/30" />

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="email"
                            disabled={loading}
                            className="
                                w-full
                                bg-transparent
                                py-3.5
                                text-sm
                                text-white
                                outline-none
                                placeholder:text-white/20
                            "
                        />

                    </div>

                    {errors.email && (
                        <p className="mt-2 text-xs text-red-400">
                            {errors.email}
                        </p>
                    )}

                </div>


                {/* Password */}

                <div>

                    <label
                        htmlFor="password"
                        className="mb-2 block text-xs text-white/50"
                    >
                        Password
                    </label>

                    <div
                        className={`
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            ${
                                errors.password
                                    ? "border-red-400/50"
                                    : "border-white/10"
                            }
                            bg-white/[0.03]
                            px-4
                            transition-all
                            duration-300
                            focus-within:border-[#d4af37]/60
                            focus-within:bg-white/[0.05]
                        `}
                    >

                        <FiLock className="shrink-0 text-base text-white/30" />

                        <input
                            id="password"
                            name="password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            disabled={loading}
                            className="
                                w-full
                                bg-transparent
                                py-3.5
                                text-sm
                                text-white
                                outline-none
                                placeholder:text-white/20
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    (prev) => !prev
                                )
                            }
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                            className="
                                shrink-0
                                text-white/30
                                transition-colors
                                hover:text-[#d4af37]
                            "
                        >
                            {showPassword
                                ? <FiEyeOff />
                                : <FiEye />
                            }
                        </button>

                    </div>

                    {errors.password && (
                        <p className="mt-2 text-xs text-red-400">
                            {errors.password}
                        </p>
                    )}

                </div>


                {/* API Error */}

                {apiError && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -5
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        className="
                            rounded-xl
                            border
                            border-red-400/20
                            bg-red-400/10
                            px-4
                            py-3
                            text-xs
                            text-red-300
                        "
                    >
                        {apiError}
                    </motion.div>

                )}


                {/* Forgot Password */}

                <div className="flex justify-end">

                    <button
                        type="button"
                        className="
                            text-xs
                            text-white/40
                            transition-colors
                            hover:text-[#d4af37]
                        "
                    >
                        Forgot password?
                    </button>

                </div>


                {/* Login */}

                <button
                    type="submit"
                    disabled={loading}
                    className="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-[#d4af37]
                        px-5
                        py-3.5
                        text-sm
                        font-medium
                        text-black
                        transition-all
                        duration-300
                        hover:bg-[#e3c15c]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >

                    <span>
                        {loading
                            ? "Signing in..."
                            : "Login"
                        }
                    </span>

                    {!loading && (
                        <FiArrowRight
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    )}

                </button>

            </motion.form>


            {/* Signup */}

            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.4
                }}
                className="mt-8 text-center"
            >

                <span className="text-xs text-white/35">
                    Don't have an account?
                </span>

                <button
                    type="button"
                    onClick={onSignup}
                    className="
                        ml-2
                        text-xs
                        font-medium
                        text-[#d4af37]
                        transition-colors
                        hover:text-[#e3c15c]
                    "
                >
                    Create Account
                </button>

            </motion.div>

        </div>
    );
}

export default LoginForm;