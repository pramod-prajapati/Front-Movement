import React, { useState } from "react";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiCalendar,
    FiCamera,
    FiMessageSquare,
    FiArrowUpRight,
} from "react-icons/fi";
import toast from "react-hot-toast";

function Booking() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);


    // ========================================
    // Handle Change
    // ========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };


    // ========================================
    // Validation
    // ========================================

    const validateForm = () => {

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters.";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            newErrors.name = "Please enter a valid name.";
        }


        if (!formData.email.trim()) {

            newErrors.email = "Email is required.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email.trim()
            )
        ) {

            newErrors.email = "Please enter a valid email.";
        }


        const cleanPhone = formData.phone.replace(/\s|-/g, "");

        if (!formData.phone.trim()) {

            newErrors.phone = "Phone number is required.";

        } else if (
            !/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)
        ) {

            newErrors.phone = "Please enter a valid phone number.";
        }


        if (!formData.service) {
            newErrors.service = "Please select a service.";
        }


        if (!formData.date) {

            newErrors.date = "Event date is required.";

        } else {

            const selectedDate = new Date(formData.date);
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                newErrors.date = "Please select a future date.";
            }
        }


        if (!formData.message.trim()) {

            newErrors.message =
                "Please tell us about your event.";

        } else if (formData.message.trim().length < 10) {

            newErrors.message =
                "Please enter at least 10 characters.";
        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    // ========================================
    // Submit Booking
    // ========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) {
            toast.error("Please fix the highlighted fields.");
            return;
        }

        setLoading(true);

        try {

            // ========================================
            // API URL
            // ========================================

            const API_URL ="https://back-moment.onrender.com/api";


            // ========================================
            // API Call
            // ========================================

            const response = await fetch(
                `${API_URL}/bookings`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({

                        name: formData.name.trim(),

                        email: formData.email
                            .trim()
                            .toLowerCase(),

                        phone: formData.phone.trim(),

                        service: formData.service.trim(),

                        // Frontend "date"
                        // Backend "eventDate"
                        eventDate: formData.date,

                        message: formData.message.trim(),

                    }),
                }
            );


            // ========================================
            // Backend Response
            // ========================================

            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Booking submission failed."
                );
            }


            // ========================================
            // SUCCESS TOAST
            // ========================================

            toast.success(
                "Booking submitted successfully!"
            );


            // ========================================
            // Reset Form
            // ========================================

            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                date: "",
                message: "",
            });

            setErrors({});


        } catch (error) {

            console.error(
                "Booking submission error:",
                error
            );


            // ========================================
            // ERROR TOAST
            // ========================================

            toast.error(
                error.message ||
                "Unable to submit booking. Please try again."
            );


        } finally {

            setLoading(false);

        }
    };


    return (
        <section
            id="booking"
            className="
                booking-section
                relative
                overflow-hidden
                bg-black
                py-20
                text-white
                sm:py-24
                lg:py-28
            "
        >

            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    h-[400px]
                    w-[400px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#d4af37]/5
                    blur-[120px]
                "
            />


            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-[1200px]
                    px-5
                    sm:px-8
                    lg:px-12
                "
            >

                {/* Heading */}

                <div className="mb-10 text-center sm:mb-14">

                    <span
                        className="
                            mb-3
                            block
                            text-[10px]
                            uppercase
                            tracking-[0.4em]
                            text-[#d4af37]
                            sm:text-xs
                        "
                    >
                        Let's Create Together
                    </span>

                    <h2
                        className="
                            font-serif
                            text-4xl
                            leading-tight
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Book Your
                        <span className="text-[#d4af37]">
                            {" "}Date.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-xl
                            text-sm
                            leading-6
                            text-white/50
                        "
                    >
                        Tell us a little about your event and
                        we'll get back to you with the next steps.
                    </p>

                </div>


                {/* ========================================
                    FORM
                ======================================== */}

                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="
                        mx-auto
                        max-w-4xl
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-5
                        shadow-2xl
                        backdrop-blur-2xl
                        sm:p-8
                        lg:p-10
                    "
                >

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


                        {/* NAME */}

                        <div>

                            <label
                                htmlFor="name"
                                className="
                                    mb-2
                                    block
                                    text-xs
                                    text-white/50
                                "
                            >
                                Your Name
                            </label>

                            <div className="relative">

                                <FiUser
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#d4af37]
                                    "
                                />

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    autoComplete="name"
                                    className={`
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        bg-black/30
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-white/25
                                        transition-colors
                                        ${errors.name
                                            ? "border-red-500/60"
                                            : "border-white/10 focus:border-[#d4af37]/50"
                                        }
                                    `}
                                />

                            </div>

                            {errors.name && (
                                <p className="mt-2 text-xs text-red-400">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* EMAIL */}

                        <div>

                            <label
                                htmlFor="email"
                                className="
                                    mb-2
                                    block
                                    text-xs
                                    text-white/50
                                "
                            >
                                Email Address
                            </label>

                            <div className="relative">

                                <FiMail
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#d4af37]
                                    "
                                />

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    className={`
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        bg-black/30
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-white/25
                                        transition-colors
                                        ${errors.email
                                            ? "border-red-500/60"
                                            : "border-white/10 focus:border-[#d4af37]/50"
                                        }
                                    `}
                                />

                            </div>

                            {errors.email && (
                                <p className="mt-2 text-xs text-red-400">
                                    {errors.email}
                                </p>
                            )}

                        </div>


                        {/* PHONE */}

                        <div>

                            <label
                                htmlFor="phone"
                                className="
                                    mb-2
                                    block
                                    text-xs
                                    text-white/50
                                "
                            >
                                Phone Number
                            </label>

                            <div className="relative">

                                <FiPhone
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#d4af37]
                                    "
                                />

                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    autoComplete="tel"
                                    inputMode="numeric"
                                    className={`
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        bg-black/30
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-white/25
                                        transition-colors
                                        ${errors.phone
                                            ? "border-red-500/60"
                                            : "border-white/10 focus:border-[#d4af37]/50"
                                        }
                                    `}
                                />

                            </div>

                            {errors.phone && (
                                <p className="mt-2 text-xs text-red-400">
                                    {errors.phone}
                                </p>
                            )}

                        </div>


                        {/* SERVICE */}

                        <div>

                            <label
                                htmlFor="service"
                                className="
                                    mb-2
                                    block
                                    text-xs
                                    text-white/50
                                "
                            >
                                Service
                            </label>

                            <div className="relative">

                                <FiCamera
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#d4af37]
                                    "
                                />

                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`
                                        h-12
                                        w-full
                                        appearance-none
                                        rounded-xl
                                        border
                                        bg-black/30
                                        pl-11
                                        pr-4
                                        text-sm
                                        outline-none
                                        transition-colors
                                        ${formData.service
                                            ? "text-white"
                                            : "text-white/25"
                                        }
                                        ${errors.service
                                            ? "border-red-500/60"
                                            : "border-white/10 focus:border-[#d4af37]/50"
                                        }
                                    `}
                                >

                                    <option value="" disabled>
                                        Select a service
                                    </option>

                                    <option value="Wedding">
                                        Wedding
                                    </option>

                                    <option value="Pre-Wedding">
                                        Pre-Wedding
                                    </option>

                                    <option value="Commercial">
                                        Commercial
                                    </option>

                                    <option value="Social Media">
                                        Social Media
                                    </option>

                                    <option value="Events">
                                        Events
                                    </option>

                                    <option value="Fashion">
                                        Fashion
                                    </option>

                                </select>

                            </div>

                            {errors.service && (
                                <p className="mt-2 text-xs text-red-400">
                                    {errors.service}
                                </p>
                            )}

                        </div>


                        {/* DATE */}

                        <div className="md:col-span-2">

                            <label
                                htmlFor="date"
                                className="
                                    mb-2
                                    block
                                    text-xs
                                    text-white/50
                                "
                            >
                                Event Date
                            </label>

                            <div className="relative">

                                <FiCalendar
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#d4af37]
                                    "
                                />

                                <input
                                    id="date"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className={`
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        bg-black/30
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        transition-colors
                                        ${errors.date
                                            ? "border-red-500/60"
                                            : "border-white/10 focus:border-[#d4af37]/50"
                                        }
                                    `}
                                />

                            </div>

                            {errors.date && (
                                <p className="mt-2 text-xs text-red-400">
                                    {errors.date}
                                </p>
                            )}

                        </div>


                        {/* MESSAGE */}

                        <div className="md:col-span-2">

                            <label
                                htmlFor="message"
                                className="
                                    mb-2
                                    block
                                    text-xs
                                    text-white/50
                                "
                            >
                                Tell Us About Your Event
                            </label>

                            <div className="relative">

                                <FiMessageSquare
                                    className="
                                        absolute
                                        left-4
                                        top-4
                                        text-[#d4af37]
                                    "
                                />

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your event..."
                                    rows="5"
                                    className={`
                                        w-full
                                        resize-none
                                        rounded-xl
                                        border
                                        bg-black/30
                                        pl-11
                                        pr-4
                                        pt-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-white/25
                                        transition-colors
                                        ${errors.message
                                            ? "border-red-500/60"
                                            : "border-white/10 focus:border-[#d4af37]/50"
                                        }
                                    `}
                                />

                            </div>

                            {errors.message && (
                                <p className="mt-2 text-xs text-red-400">
                                    {errors.message}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* ========================================
                        SUBMIT BUTTON
                    ======================================== */}

                    <div className="mt-6 flex justify-end">

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
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                sm:w-auto
                            "
                        >

                            {loading ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Enquiry

                                    <FiArrowUpRight
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                        "
                                    />
                                </>
                            )}

                        </button>

                    </div>

                </form>

            </div>

        </section>
    );
}

export default Booking;