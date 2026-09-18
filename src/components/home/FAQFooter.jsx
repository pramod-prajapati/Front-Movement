import React, { useState } from "react";
import {
    FiPlus,
    FiMinus,
    FiArrowUpRight,
    FiInstagram,
    FiMail,
    FiPhone,
    FiMapPin,
    FiHeart,
} from "react-icons/fi";

function FAQFooter() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Do you provide photography and filmmaking services?",
            answer:
                "Yes. We provide photography and filmmaking services for weddings, pre-weddings, commercial projects, fashion, events and social media content.",
        },
        {
            question: "Do you travel outside Siwan?",
            answer:
                "We provide services across India. Please share your event location with us so we can confirm the applicable travel details.",
        },
        {
            question: "How can I know the booking and advance details?",
            answer:
                "Booking and payment details will be discussed and confirmed with you before the booking is finalized.",
        },
        {
            question: "How long does it take to receive the final photos and videos?",
            answer:
                "The delivery timeline depends on the type and scope of the project. The expected timeline can be confirmed with our team before booking.",
        },
        {
            question: "Do you provide raw photos and footage?",
            answer:
                "Raw files and footage availability can vary by project. Please discuss your requirement with our team before booking.",
        },
        {
            question: "How can I book my date?",
            answer:
                "You can send us your event details through the booking enquiry form or contact us directly on WhatsApp.",
        },
    ];


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <>
            <section

                id="booking"
                className="
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
                        left-1/2
                        top-1/2
                        h-[400px]
                        w-[400px]
                        -translate-x-1/2
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
                        max-w-[1000px]
                        px-5
                        sm:px-8
                        lg:px-10
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
                            Frequently Asked
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
                            Questions
                            <span className="text-[#d4af37]">.</span>
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
                            Everything you need to know before
                            booking your shoot.
                        </p>

                    </div>


                    {/* FAQ LIST */}

                    <div
                        className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/[0.02]
                            backdrop-blur-xl
                        "
                    >

                        {faqs.map((faq, index) => {

                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="
                                        border-b
                                        border-white/10
                                        last:border-b-0
                                    "
                                >

                                    {/* Question */}

                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            gap-5
                                            px-5
                                            py-5
                                            text-left
                                            transition-colors
                                            duration-300
                                            hover:bg-white/[0.03]
                                            sm:px-7
                                            sm:py-6
                                        "
                                    >

                                        <span
                                            className="
                                                text-sm
                                                font-medium
                                                text-white/85
                                                sm:text-base
                                            "
                                        >
                                            {faq.question}
                                        </span>


                                        {/* Icon */}

                                        <span
                                            className="
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#d4af37]/30
                                                text-[#d4af37]
                                            "
                                        >

                                            {isOpen ? (
                                                <FiMinus className="text-sm" />
                                            ) : (
                                                <FiPlus className="text-sm" />
                                            )}

                                        </span>

                                    </button>


                                    {/* Answer */}

                                    <div
                                        id={`faq-answer-${index}`}
                                        className={`
                                            grid
                                            transition-[grid-template-rows,opacity]
                                            duration-500
                                            ease-in-out
                                            ${isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }
                                        `}
                                    >

                                        <div className="overflow-hidden">

                                            <p
                                                className="
                                                    px-5
                                                    pb-6
                                                    pr-14
                                                    text-sm
                                                    leading-7
                                                    text-white/50
                                                    sm:px-7
                                                    sm:pb-7
                                                    sm:pr-20
                                                "
                                            >
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <footer
                className="
                    border-t
                    border-white/10
                    bg-black
                    text-white
                "
            >

                <div
                    className="
                        mx-auto
                        w-full
                        max-w-[1500px]
                        px-5
                        py-14
                        sm:px-8
                        sm:py-16
                        lg:px-16
                        lg:py-20
                        xl:px-24
                    "
                >

                    {/* Main Footer */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-12
                            md:grid-cols-2
                            lg:grid-cols-[1.5fr_1fr_1fr]
                            lg:gap-16
                        "
                    >

                        {/* Brand */}

                        <div>

                            <div className="mb-5">

                                <img
                                    src="../Logo.png"
                                    alt="Moment Clicker Films"
                                    className="w-[120px] sm:w-[140px]"
                                />

                            </div>


                            <p
                                className="
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-white/45
                                "
                            >
                                Capturing your moments, emotions
                                and memories through photography
                                and filmmaking.
                            </p>


                            {/* Instagram */}

                            <div className="mt-6">

                                <a
                                    href="https://www.instagram.com/momentclickerfilms?igsi=MWx0cXlxZGs0eHE1dw%3D%3D"
                                    target="_blank"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-3
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        px-4
                                        py-2.5
                                        text-sm
                                        text-white/70
                                        transition-all
                                        duration-300
                                        hover:border-[#d4af37]/50
                                        hover:text-[#d4af37]
                                    "
                                >

                                    <FiInstagram />

                                    <span>
                                        Instagram
                                    </span>

                                    <FiArrowUpRight />

                                </a>

                            </div>

                        </div>


                        {/* Quick Links */}

                        <div>

                            <h3
                                className="
                                    mb-5
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#d4af37]
                                "
                            >
                                Quick Links
                            </h3>


                            <ul className="space-y-3">
                                {[
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
                                        name: "Contact",
                                        id: "contact",
                                    },
                                ].map((item) => (

                                    <li key={item.id}>

                                        <a
                                            href={`#${item.id}`}
                                            className="
                    text-sm
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-[#d4af37]
                "
                                        >
                                            {item.name}
                                        </a>

                                    </li>

                                ))}
                            </ul>

                        </div>


                        {/* Contact */}

                        <div>

                            <h3
                                className="
                                    mb-5
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#d4af37]
                                "
                            >
                                Contact
                            </h3>


                            <div className="space-y-5">


                                {/* Office */}

                                <div className="flex gap-3">

                                    <FiPhone
                                        className="
                                            mt-1
                                            shrink-0
                                            text-[#d4af37]
                                        "
                                    />

                                    <div>

                                        <span
                                            className="
                                                block
                                                text-xs
                                                text-white/35
                                            "
                                        >
                                            Office
                                        </span>

                                        <a
                                            href="#"
                                            className="
                                                text-sm
                                                text-white/65
                                                hover:text-[#d4af37]
                                            "
                                        >
                                          Saripatti  
                                        </a>

                                    </div>

                                </div>


                                {/* Vishal */}

                                <div className="flex gap-3">

                                    <FiPhone
                                        className="
                                            mt-1
                                            shrink-0
                                            text-[#d4af37]
                                        "
                                    />

                                    <div>

                                        <span
                                            className="
                                                block
                                                text-xs
                                                text-white/35
                                            "
                                        >
                                            Vishal Sharma
                                        </span>

                                        <a
                                            href={`tel:${"+919661582313"}`}
                                            className="
                                                text-sm
                                                text-white/65
                                                hover:text-[#d4af37]
                                            "
                                        >
                                           Call Us
                                        </a>

                                    </div>

                                </div>


                                {/* Email */}

                                <div className="flex gap-3">

                                    <FiMail
                                        className="
                                            mt-1
                                            shrink-0
                                            text-[#d4af37]
                                        "
                                    />

                                    <div>

                                        <span
                                            className="
                                                block
                                                text-xs
                                                text-white/35
                                            "
                                        >
                                            Email
                                        </span>

                                        <a
                                            href={`mailto:${"momentclickerfilm@gmail.com"}`}
                                            className="
                                                break-all
                                                text-sm
                                                text-white/65
                                                hover:text-[#d4af37]
                                            "
                                        >
                                            Connect with us at 
                                        </a>

                                    </div>

                                </div>


                                {/* Studio */}

                                <div className="flex gap-3">

                                    <FiMapPin
                                        className="
                                            mt-1
                                            shrink-0
                                            text-[#d4af37]
                                        "
                                    />

                                    <div>

                                        <span
                                            className="
                                                block
                                                text-xs
                                                text-white/35
                                            "
                                        >
                                            Studio
                                        </span>

                                        <span
                                            className="
                                                text-sm
                                                leading-6
                                                text-white/65
                                            "
                                        >
                                            Saripatti, Bhagwanpur (Hat),
                                            Siwan, Bihar 841408
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Divider */}

                    <div
                        className="
                            my-10
                            h-px
                            w-full
                            bg-white/10
                        "
                    />


                    {/* Bottom Footer */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            text-center
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            sm:text-left
                        "
                    >

                        <p
                            className="
                                text-xs
                                text-white/30
                            "
                        >
                            © {new Date().getFullYear()}
                            {" "}
                            Moment Clicker Films.
                            All rights reserved.
                        </p>


                        <p
                            className="
                                flex
                                items-center
                                justify-center
                                gap-1
                                text-xs
                                text-white/30
                                sm:justify-end
                            "
                        >
                            Made with
                            <FiHeart
                                className="text-[#d4af37]"
                            />
                            for timeless stories.
                        </p>

                    </div>

                </div>

            </footer>

        </>
    );
}

export default FAQFooter;