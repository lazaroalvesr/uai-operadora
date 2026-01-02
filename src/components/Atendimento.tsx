import Link from "next/link"

export const AtendimentoPage = () => {

    const message = `Olá! 👋 Estou no site da UAI+ e preciso de ajuda para escolher o melhor plano para mim. Podem me ajudar? 😊`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`;
    
    return (
        <div className="relative bg-gray-950 py-20 lg:py-20 overflow-hidden" id="atendimento">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#E97527] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E97527] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative  z-10">
                <div className="max-w-5xl mx-auto">
                    <p className="text-xl md:text-2xl text-center text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
                        Não gostou? É só cancelar. Sem multa, sem contrato preso e sem burocracia.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/5 backdrop-blur-sm border cursor-pointer border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#E97527]/50 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#E97527]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E97527]/30 transition-colors">
                                <svg className="w-6 h-6 text-[#E97527]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Sem Multa</h3>
                            <p className="text-gray-400 text-sm">Cancele quando quiser sem custos extras</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border cursor-pointer border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#E97527]/50 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#E97527]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E97527]/30 transition-colors">
                                <svg className="w-6 h-6 text-[#E97527]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Sem Contrato</h3>
                            <p className="text-gray-400 text-sm">Total liberdade, sem compromissos longos</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border cursor-pointer border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#E97527]/50 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#E97527]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E97527]/30 transition-colors">
                                <svg className="w-6 h-6 text-[#E97527]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Sem Burocracia</h3>
                            <p className="text-gray-400 text-sm">Processo simples e rápido de cancelamento</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-3 text-center lg:w-[370px] md:w-[370px] px-6 py-6 text-[16px] lg:text-lg font-semibold rounded-2xl bg-gradient-to-r from-black to-[#E97527] text-white shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Falar com atendimento
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}