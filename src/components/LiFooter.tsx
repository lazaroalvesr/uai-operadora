import { LiProps } from "@/lib/interface"
import Link from "next/link"

export const LiFooter = ({ text, href, onClick }: LiProps) => {
    return (
        <Link href={href} onClick={onClick} className="text-[14px] text-gray-50 hover:text-[#E97527] transition-all .3s ease-in-out">
            {text}
        </Link>
    )
}