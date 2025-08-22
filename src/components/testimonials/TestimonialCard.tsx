import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechFlow Inc",
        content:
            "Creative Outlook Services helped us find an amazing UI designer who transformed our app interface. The process was smooth and secure.",
        rating: 5,
    },
    {
        name: "Mike Chen",
        role: "Graphic Designer",
        company: "Freelancer",
        content:
            "As a designer, I love the instant payment system. Once clients approve my work, I get paid immediately with just a 5% fee.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Startup Founder",
        company: "GrowthLab",
        content:
            "The quality of designers on this platform is outstanding. We found our brand designer here and couldn't be happier.",
        rating: 5,
    },
    {
        name: "James O'Connor",
        role: "Product Manager",
        company: "InnoTech",
        content:
            "We needed a fast design turnaround and Creative Outlook delivered. Great platform and reliable service!",
        rating: 4,
    },
    {
        name: "Aisha Bello",
        role: "UX/UI Designer",
        company: "Freelancer",
        content:
            "Excellent experience working with clients here. The platform feels intuitive and well thought out.",
        rating: 5,
    },
    {
        name: "Carlos Ramirez",
        role: "CEO",
        company: "StartupNest",
        content:
            "The communication and project management tools on the platform made our hiring process effortless.",
        rating: 5,
    },
    {
        name: "Linda Park",
        role: "Creative Director",
        company: "Visionary Studios",
        content:
            "I’ve worked on multiple projects through this platform. It’s always a professional and smooth experience.",
        rating: 5,
    },
    {
        name: "Oluwatobi Ade",
        role: "Frontend Developer",
        company: "DevHaven",
        content:
            "I found top-notch design collaborators here. The review and approval process was seamless.",
        rating: 4,
    },
    {
        name: "Jessica Tan",
        role: "Brand Consultant",
        company: "Freelancer",
        content:
            "I appreciate how the platform emphasizes quality and transparency. Highly recommended for branding projects.",
        rating: 5,
    },
    {
        name: "David Nwosu",
        role: "Digital Marketer",
        company: "ClickBase",
        content:
            "Thanks to Creative Outlook Services, we upgraded our entire marketing visual system quickly and affordably.",
        rating: 5,
    },
    {
        name: "Fatima Zakari",
        role: "Web Designer",
        company: "Freelancer",
        content:
            "Very friendly for freelancers. Payments, contracts, and messaging are all centralized and efficient.",
        rating: 5,
    },
    {
        name: "Nathan King",
        role: "Art Director",
        company: "PixelForge",
        content:
            "Smooth collaboration and great talent discovery. A go-to place for creative partnerships.",
        rating: 5,
    }
];

const cardVariants = {
    enter: (direction: number) => ({
        y: direction > 0 ? 100 : -100,
        opacity: 0,
        position: "absolute" as const,
    }),
    center: {
        y: 0,
        opacity: 1,
        position: "relative" as const,
    },
    exit: (direction: number) => ({
        y: direction < 0 ? 100 : -100,
        opacity: 0,
        position: "absolute" as const,
    }),
};

export default function TestimonialsSection() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Trusted by thousands of clients and designers worldwide
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[0, 1, 2].map((offset) => {
                        const testimonial = testimonials[(index + offset) % testimonials.length];
                        return (
                            <Card key={offset} className="overflow-hidden w-full h-[250px] relative">
                                <CardContent className="p-6 w-full h-full">
                                    <div className="relative w-full h-full overflow-hidden">
                                        <AnimatePresence initial={false} custom={direction} mode="wait">
                                            <motion.div
                                                key={testimonial.name + offset}
                                                custom={direction}
                                                variants={cardVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{ duration: 0.5 }}
                                                className="w-full h-full"
                                            >
                                                <div className="flex items-center space-x-1 mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-muted-foreground mb-4 italic">
                                                    "{testimonial.content}"
                                                </p>
                                                <div>
                                                    <div className="font-semibold text-foreground">
                                                        {testimonial.name}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {testimonial.role} at {testimonial.company}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}