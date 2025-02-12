"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import Iphone15Pro from "@/components/magicui/iphone-15-pro"

import {
    useScroll,
    motion,
    useTransform,
} from 'framer-motion';
import { useRef } from "react";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "Payment received",
        description: "Magic UI",
        time: "15m ago",

        icon: "💸",
        color: "#00C9A7",
    },
    {
        name: "User signed up",
        description: "Magic UI",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
    },
    {
        name: "New message",
        description: "Magic UI",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
    },
    {
        name: "New event",
        description: "Magic UI",
        time: "2m ago",
        icon: "🗞️",
        color: "#1E86FF",
    },
    ];

    notifications = Array.from({ length: 10 }, () => notifications).flat();

    const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
        className={cn(
            "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
            // animation styles
            "transition-all duration-200 ease-in-out hover:scale-[103%]",
            // light styles
            "bg-white drop-shadow-[0_0_30px_rgba(0,0,255,0.2)]",
            // dark styles
            "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        )}
        >
        <div className="flex flex-row items-center gap-3">
            <div
            className="flex size-10 items-center justify-center rounded-2xl"
            style={{
                backgroundColor: color,
            }}
            >
            <span className="text-lg">{icon}</span>
            </div>
            <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                <span className="text-sm sm:text-lg">{name}</span>
                <span className="mx-1">·</span>
                <span className="text-xs text-gray-500">{time}</span>
            </figcaption>
            <p className="text-sm font-normal dark:text-white/60">
                {description}
            </p>
            </div>
        </div>
        </figure>
    );
    };

    export function AnimatedListDemo({
    className,
    }: {
    className?: string;
    }) {
        const heroRef = useRef(null);
        const { scrollY } = useScroll({
            target: heroRef,
            offset: ["start start", "end end"],
        });
        
        const y1 = useTransform(scrollY, [0, 300], [200, 0]);

    return (
        <motion.div 
            className="flex flex-col items-center justify-center min-h-screen bg-background p-10 my-10"
            style={{ y: y1 }}
        >
            <Iphone15Pro className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[433px] drop-shadow-[0_0_30px_rgba(0,0,255,0.2)]">
                <div
                className={cn(
                    "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg bg-background mt-12 p-6",
                    className,
                )}
                >
                    <AnimatedList>
                        {notifications.map((item, idx) => (
                        <Notification {...item} key={idx} />
                        ))}
                    </AnimatedList>
                </div>
            </Iphone15Pro>
        </motion.div>
    );
}

