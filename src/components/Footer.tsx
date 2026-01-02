"use client"

import Image from "next/image"
import Link from "next/link"
import { LiFooter } from "./LiFooter"
import { liFooterText } from '@/lib/utils'
import { useEffect, useState } from "react"
import { Phone, MessageCircle } from "lucide-react"

export const Footer = () => {
    const [anoCriacao, setAnoCriacao] = useState("")

    useEffect(() => {
        const obterAnoAtual = () => {
            const data = new Date();
            return data.getFullYear().toString()
        }

        setAnoCriacao(obterAnoAtual())
    }, [])

    const message = `Olá! 👋 Vi os planos da UAI+ no site e tenho interesse. Poderiam me ajudar?`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`;

    return (
        <footer className="lg:mt-[90px] mt-[64px] md:mt-[70px] bg-gray-950 border-t border-gray-800 pb-6 w-full">
            <div className="lg:max-w-[1240px] m-auto lg:pt-[50px] pt-[32px] px-6 lg:px-0">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 pb-12">
                    <div className="flex flex-col gap-4">
                        <Image
                            src="/Icons/uai+.png"
                            width={120}
                            height={48}
                            alt="Logo UAI+"
                            className="w-[120px] h-auto"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                            Mais sinal, mais liberdade e planos que fazem sentido.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-gray-50 font-semibold text-base">Links Rápidos</h4>
                        <ul className="flex flex-col gap-2">
                            {liFooterText.map((item, index) => (
                                <LiFooter
                                    {...item}
                                    key={index}
                                />
                            ))}
                            <LiFooter href="/termos-de-uso.html" text="Termos de Uso" />
                            <LiFooter href="/politica-de-privacidade.html" text="Política de Privacidade" />
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <h4 className="text-gray-50 font-semibold text-base mb-4">Contato</h4>

                            <Link
                                href="tel:08007359501"
                                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors mb-3 group"
                            >
                                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#E97527] transition-all duration-300">
                                    <Phone size={18} className="text-gray-300 group-hover:text-white" />
                                </div>
                                <span className="text-sm font-medium">0800 735 9501</span>
                            </Link>

                            <Link
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                            >
                                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#25D366] transition-all duration-300">
                                    <MessageCircle size={18} className="text-gray-300 group-hover:text-white" />
                                </div>
                                <span className="text-sm font-medium">Fale conosco no WhatsApp</span>
                            </Link>
                        </div>

                        <div>
                            <h4 className="text-gray-50 font-semibold text-base mb-4">Redes Sociais</h4>
                            <div className="flex gap-3">
                                <Link
                                    href="https://instagram.com"
                                    target="_blank"
                                    className="bg-gray-800 p-3 rounded-full hover:bg-[#E97527] transition-all duration-300 group"
                                >
                                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Link>

                                <Link
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="bg-gray-800 p-3 rounded-full hover:bg-[#E97527] transition-all duration-300 group"
                                >
                                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-800 flex lg:flex-row flex-col gap-4 lg:justify-between lg:items-center">
                    <p className="text-xs text-gray-500">
                        © {anoCriacao} UAI+ Operadora. Todos os direitos reservados. | CNPJ 60.987.350/0001-15
                    </p>
                    <Link
                        href="https://www.lazaroalvesr.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-[#E97527] transition-colors"
                    >
                        Desenvolvido por <span className="font-medium">Lázaro Alves R</span>
                    </Link>
                </div>
            </div>
            <div className="fixed bottom-12 right-6 bg-[#E97527] p-3 rounded-2xl">
                <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative cursor-pointer group">
                    <Image
                        src="/Icons/whatsapp-icon.svg"
                        alt="Ícone WhatsApp"
                        width={20}
                        height={20}
                        className="hover:cursor-pointer lg:w-[40px]"
                    />
                    <span className="absolute transform top-[53px] lg:w-[220px] lg:-left-36 -left-32 w-[200px] -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-base p-2 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Tem dúvidas? Vamos conversar!
                    </span>
                </Link>
            </div>
        </footer>
    )
}