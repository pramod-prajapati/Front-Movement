import React from "react";
import {
    FiInstagram,
    FiFacebook,
    FiMessageCircle,
    FiPhoneCall,
} from "react-icons/fi";

function SocialLinks() {
    return (
        <div
            className="
                z-40
                flex
                flex-row
                items-center
                justify-center
                gap-3
                px-5
                py-4

                lg:fixed
                lg:right-5
                lg:top-1/2
                lg:-translate-y-1/2
                lg:flex-col
                lg:gap-5
                lg:p-0
            "
        >
            {/* Instagram */}
            <a
                href="https://www.instagram.com/momentclickerfilms?igsi=MWx0cXlxZGs0eHE1dw=="
                target="_blank"
                aria-label="Instagram"
                className="
                    group flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/15
                    bg-black/25
                    text-[#d4af37]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:scale-110
                    hover:border-[#d4af37]
                    hover:bg-[#d4af37]/10
                "
            >
                <FiInstagram className="text-lg" />
            </a>

            {/* Facebook */}
            <a
                href="#"
                aria-label="Facebook"
                className="
                    group flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/15
                    bg-black/25
                    text-[#d4af37]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:scale-110
                    hover:border-[#d4af37]
                    hover:bg-[#d4af37]/10
                "
            >
                <FiFacebook className="text-lg" />
            </a>

            {/* WhatsApp */}
            <a
                href={`https://wa.me/9661582313?text=${encodeURIComponent(
                    "Hello Moment Clicker Films, I would like to enquire about your photography and filmmaking services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
        group flex h-10 w-10 items-center justify-center
        rounded-full
        border border-white/15
        bg-black/25
        text-[#d4af37]
        backdrop-blur-xl
        transition-all duration-300
        hover:scale-110
        hover:border-[#d4af37]
        hover:bg-[#d4af37]/10
    "
            >
                <FiMessageCircle className="text-lg" />
            </a>

            {/* Call */}
            <a
                href="tel:+919661582313"
                aria-label="Call"
                className="
                    group flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/15
                    bg-black/25
                    text-[#d4af37]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:scale-110
                    hover:border-[#d4af37]
                    hover:bg-[#d4af37]/10
                "
            >
                <FiPhoneCall className="text-lg" />
            </a>
        </div>
    );
}

export default SocialLinks;