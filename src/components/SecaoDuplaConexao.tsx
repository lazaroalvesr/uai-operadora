import Link from "next/link"

export const SecaoDuplaConexao = () => {

    const message = `Olá! Vi os planos da UAI+ no site e tenho interesse em um dos planos. Poderiam me enviar mais informações, por favor?`
    const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`

    return (
        <div className="min-h-screen bg-gradient-to-br bg-gray-950 text-white mt-12">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-5xl mx-auto text-center space-y-8">

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                        Conectado em{" "}
                        <span className="text-[#E97527] bg-clip-text ">
                            mais lugares.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-pretty">
                        A UAI+ utiliza <strong className="text-white">dupla conexão</strong> para garantir mais estabilidade e
                        cobertura. Seu celular se conecta automaticamente à melhor rede disponível.
                    </p>

                    <div className="py-12 relative">
                        <div className="flex items-center justify-center gap-4 md:gap-8 ">
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-[#E97527] flex items-center justify-center shadow-2xl shadow-blue-500/50">
                                        <svg
                                            className="w-10 h-10 md:w-14 md:h-14 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-950 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-slate-400">Rede 1</span>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 md:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                                <div className="w-8 md:w-24 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-2xl shadow-orange-500/50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <svg
                                        className="w-10 h-10 md:w-14 md:h-14 text-white relative z-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-cyan-400">Seu celular</span>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 md:w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-500"></div>
                                <div className="w-8 md:w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-500"></div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br bg-[#E97527]  flex items-center justify-center shadow-2xl shadow-teal-500/50">
                                        <svg
                                            className="w-10 h-10 md:w-14 md:h-14 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-950 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-slate-400">Rede 2</span>
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48">
                            <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-ping"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
                        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Sempre conectado</h3>
                            <p className="text-sm text-slate-400">Conexão automática com a rede mais forte</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Mais estabilidade</h3>
                            <p className="text-sm text-slate-400">Redundância que garante sua conexão</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Maior cobertura</h3>
                            <p className="text-sm text-slate-400">Alcance em muito mais lugares</p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 lg:w-[370px] md:w-[370px] px-6 py-6 text-[16px] lg:text-lg font-semibold rounded-2xl bg-gradient-to-r from-black to-[#E97527] text-white shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Quero mais sinal no meu plano
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}