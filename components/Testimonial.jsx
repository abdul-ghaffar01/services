"use client";
import { motion } from "framer-motion";
const testimonials = [
    {
        name: "Zain Ali",
        role: "Startup Founder",
        quote:
            "AG S2 House turned our concept into a fully functional product — fast, efficient, and visually stunning work.",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Sara Khan",
        role: "UI/UX Designer",
        quote:
            "Their attention to performance and pixel-perfect design is unmatched. Everything launched smoothly and on time.",
        avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
        name: "Michael Roberts",
        role: "Business Owner",
        quote:
            "From coding to deployment, every step felt effortless. Abdul Ghaffar’s team delivered beyond expectations.",
        avatar: "https://i.pravatar.cc/100?img=45",
    },
];


export default function TestimonialSection() {
    return (
        <section
            id="testimonials"
            className="relative py-28 bg-gradient-to-b from-[#0b1120] via-[#0e162b] to-[#10192f] text-gray-100 overflow-hidden"
        >
            {/* Background lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                >
                    What Our Clients Say
                </motion.h2>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.2, duration: 0.7 }}
                            className="relative rounded-2xl p-[1px] bg-gradient-to-tr from-blue-500/40 via-transparent to-indigo-400/40 hover:from-blue-400/60 transition-all duration-300"
                        >
                            <div className="backdrop-blur-xl bg-transparent h-full rounded-2xl p-8 flex flex-col items-center text-center ">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-16 h-16 rounded-full mb-5 border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                />
                                <p className="text-gray-300 text-sm md:text-base italic leading-relaxed mb-5">
                                    “{t.quote}”
                                </p>
                                <h4 className="text-blue-400 font-semibold">{t.name}</h4>
                                <span className="text-sm text-gray-400">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
