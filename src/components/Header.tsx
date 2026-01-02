"use client"

import Image from "next/image"
import { LiHeader } from "./LiHeader"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { TextLi } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { SubHeader } from "./SubHeader"

export const Header = () => {
    const [active, setActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const toggle = () => {
        setActive((prev) => !prev)
    }

    const closeMenu = () => {
        setActive(false)
    }

    useEffect(() => {
        const handleTouchOutside = (event: MouseEvent | TouchEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('button[aria-label="Botão Menu Mobile"]')
            ) {
                setActive(false)
            }
        }

        if (active) {
            const isTouchDevice = "ontouchstart" in window
            if (isTouchDevice) {
                document.addEventListener("touchstart", handleTouchOutside)
            } else {
                document.addEventListener("mousedown", handleTouchOutside)
            }
        }

        return () => {
            document.removeEventListener("touchstart", handleTouchOutside)
            document.removeEventListener("mousedown", handleTouchOutside)
        }
    }, [active])

    return (
        <section className="fixed w-full z-50">
            <SubHeader />
            <header className="bg-gray-950 w-full border-b z-50 border-t border-gray-800">
                <div className="lg:max-w-[1300px] m-auto lg:py-1.5 py-9 flex items-center lg:px-0 px-3">
                    <div className="flex lg:gap-2 fixed lg:pt-0 mt-4 lg:static flex-col">
                        <Link href="/">
                            <Image
                                src="/Icons/uai+.png"
                                alt="Logo uai+"
                                width={80}
                                height={80}
                                className="hover:opacity-90 transition-opacity -mt-4"
                            />
                        </Link>
                    </div>
                    <button
                        className="lg:hidden absolute right-5 top-[70px] z-50"
                        onClick={(event) => {
                            event.stopPropagation()
                            toggle()
                        }}
                        aria-label="Botão Menu Mobile"
                    >
                        {active ? (
                            ""
                        ) : (
                            <Menu className="h-8 w-8" color="white" />
                        )}
                    </button>

                    {active && (
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
                            onClick={() => setActive(false)}
                        />
                    )}

                    <nav
                        ref={menuRef}
                        className={`lg:py-2 lg:px-2 lg:flex fixed top-0 right-0 h-full w-[300px] ml-20 shadow-2xl z-50 transform transition-transform bg-[#0A0B0C] duration-300 ease-out lg:transform-none lg:shadow-none lg:static lg:w-auto lg:h-auto
            ${active ? "translate-x-0:" : "translate-x-full"} lg:translate-x-0`}
                    >
                        <div className="flex items-end justify-end p-6 border-b border-gray-100 lg:hidden">
                            <button
                                onClick={() => setActive(false)}
                                className="p-2 rounded-full transition-colors duration-200">
                                <X className="w-7 h-7" color="white" />
                            </button>
                        </div>

                        <div className="p-6 lg:p-0">
                            <ul
                                className={`flex items-center gap-4 ${active ? "flex-col gap-8 space-y-2" : ""} lg:flex-row lg:gap-8 lg:space-y-0`}>
                                {TextLi.map((item, index) => (
                                    <div
                                        key={index}
                                        className={active ? "p-4 w-full rounded-xl transition-all duration-200" : ""}
                                        onClick={closeMenu}>
                                        <LiHeader {...item} />
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                            <div className="bg-gradient-to-r from-[#ffffff] to-[#E97527] rounded-xl p-4 text-[#1a1a1a]">
                                <p className="text-sm font-medium">UAI+ Operadora</p>
                                <p className="text-xs opacity-90">onde tem uai+, tem conexão</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </section>
    )
}