import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface LiHeaderProps {
    text: string
    href: string
    icon?: LucideIcon
}

export const LiHeader = ({ text, href, icon: Icon }: LiHeaderProps) => {
    if (!href) return null;

    return (
        <Link
            href={href}
            className="text-gray-50 font-normal lg:w-32 hover:font-bold hover:text-[#E97527] text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2"
        >
            {Icon && <Icon className="w-5 h-5 lg:hidden" />}
            {text}
        </Link>
    )
}
