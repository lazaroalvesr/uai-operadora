import { MapPin, Signal, Zap } from "lucide-react";
import Link from "next/link";

export default function CoberturaPage() {
    const message = `Olá! Vi os planos da UAI+ no site e tenho interesse em um dos planos. Poderiam me enviar mais informações, por favor?`
    const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`


    return (
        <section className="pt-52 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-[#E97527] bg-clip-text text-transparent leading-tight">
                    Sinal potente em qualquer lugar
                </h2>
                <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
                    A <strong className="text-[#1a1a1a]">UAI+</strong> utiliza a infraestrutura das maiores redes do país
                    (<strong className="text-[#e97527]">Vivo e TIM</strong>). Você tem a segurança de estar sempre conectado
                    com a maior cobertura 4G e 5G do Brasil.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="group p-8 rounded-3xl bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-6 transition-transform">
                            <Signal size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Dupla Cobertura</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Unimos as melhores redes para garantir que você nunca fique sem sinal, seja na cidade ou na estrada.
                        </p>
                    </div>
                    <div className="group p-8 rounded-3xl bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-[#1a1a1a] text-white rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:-rotate-6 transition-transform">
                            <Zap size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Velocidade 5G</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Navegue com ultravelocidade para vídeos, jogos e redes sociais com a tecnologia mais moderna do mundo.
                        </p>
                    </div>

                    <div className="group p-8 rounded-3xl cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-6 transition-transform">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Presença Total</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Estamos presentes em 100% dos municípios brasileiros através das redes parceiras Vivo e TIM.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-[#e97527] rounded-full hover:bg-orange-600 focus:outline-none shadow-lg shadow-orange-200">
                        Quero usar a UAI+
                    </Link>
                    <div className="flex items-center gap-4 opacity-60">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Tecnologia parceira:</p>
                        <div className="flex gap-3 font-black text-[#1a1a1a]">
                            <span>VIVO</span>
                            <span className="text-orange-500">|</span>
                            <span>TIM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};