"use client";
import Link from "next/link";
import Image from "next/image";
import {Montserrat} from "next/font/google"
import { ImageIcon, LayoutDashboard, MessageSquare } from "lucide-react";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes =[
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700"
    },
];

const Sidebar = () => {
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image 
                            fill
                            src="/logo.png"
                            alt="Logo"
                        />
                    </div>
                    <h1 className={cn("text-xl", montserrat.className)}>
                        HealthSnap
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start font-md cursor-point hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
