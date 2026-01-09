import Image from "next/image"
import Link from "next/link"

const message = `Olá! Vi os planos da UAI+ no site e tenho interesse em um dos planos. Poderiam me enviar mais informações, por favor?`
const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`

export const SubHeader = () => {
    return (
        <div className="bg-[#1a1a1a] w-full h-13">
            <div className="lg:max-w-6xl h-full flex m-auto items-center justify-between lg:px-0 px-3">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Icons/uai+.png"
                        alt="Logo uai+"
                        width={60}
                        height={60}
                        className="hover:opacity-90 transition-opacity"
                    />
                </Link>

                <div className="flex items-center gap-4 lg:gap-4">
                    <div
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity">
                        <Image
                            src="/Icons/telefone_subHeader.png"
                            alt="Ícone telefone"
                            width={23}
                            height={23}
                        />
                        <Image
                            src="/Icons/icon_verde_whatsapp.png"
                            alt="Ícone telefone"
                            width={23}
                            height={23}
                            className="flex lg:w-5 lg:h-5"
                        />
                        <p className="text-gray-50 text-[14px] font-medium md:flex lg:flex hidden">
                            0800 735 9501
                        </p>
                    </div>

                    <div className="w-0.5 h-8 bg-gray-700"></div>

                    <div
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity">
                        <Image
                            src="/Icons/telefone_subHeader.png"
                            alt="Phone icon"
                            width={23}
                            height={23}
                        />
                          <Image
                            src="/Icons/icon_verde_whatsapp.png"
                            alt="Ícone telefone"
                            width={23}
                            height={23}
                            className="flex lg:w-5 lg:h-5"
                        />
                        <p className="text-gray-50 text-[14px] font-medium md:flex lg:flex hidden">
                            (33) 3751-1131
                        </p>
                    </div>

                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#e97527] text-gray-50 px-4 lg:px-7 py-2 h-9 lg:gap-2 items-center justify-center text-center flex rounded-full hover:bg-[#f9731a] transition-colors duration-300 ease-in-out text-sm lg:text-base font-medium whitespace-nowrap">
                        <Image
                            src="/Icons/icone_whatsapp.png"
                            alt="Ícone telefone"
                            width={23}
                            height={23}
                            className="flex lg:w-5 lg:h-5"
                        />
                        <p className="text-gray-50 text-[14px] font-medium lg:flex hidden">
                            Falar no WhatsApp
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}