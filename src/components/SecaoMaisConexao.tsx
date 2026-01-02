import { Wifi, TrendingUp, Ban, DollarSign, Check, CardSim } from "lucide-react"
import Link from "next/link"

const message = `Olá! Vi os planos da UAI+ no site e tenho interesse em um dos planos. Poderiam me enviar mais informações, por favor?`
const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`

export const SecaoMaisConexao = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white" id="porque_auai+">
            <section className="container mx-auto px-4 py-20 lg:py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                                Mais sinal.{" "}
                                <span className="bg-clip-text text-[#E97527]">
                                    Mais liberdade.
                                </span>
                                <br />
                                Sem perder internet.
                            </h1>

                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Com dupla conexão, você tem sinal em mais lugares, internet que acumula e liberdade para cancelar quando
                                quiser.
                            </p>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Cobertura 2x maior que operadoras tradicionais",
                                    "Dados não expiram, acumulam mês a mês",
                                    "Cancele quando quiser, sem burocracia",
                                    "Preço transparente e fixo",
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                                            <Check className="w-4 h-4 text-[#E97527]" />
                                        </div>
                                        <span className="text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-black to-[#E97527] hover:from-black/80 hover:to-[#d88147] text-white lg:w-[420px] md:w-[370px] px-6 py-6 text-[16px] mt-4 flex lg:text-lg font-semibold rounded-xl shadow-lg shadow-orange-400/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all cursor-pointer">
                                Falar com um consultor no WhatsApp
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900 border cursor-pointer border-gray-800 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                                <div className="w-12 h-12 bg-[#030712] rounded-lg flex items-center justify-center mb-4">
                                    <Wifi className="w-6 h-6 text-[#E97527]" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Dupla conexão</h3>
                                <p className="text-sm text-gray-400">Sinal garantido</p>
                            </div>

                            <div className="bg-gray-900 border cursor-pointer border-gray-800 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                                <div className="w-12 h-12 bg-[#030712] rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-[#E97527]" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Internet acumulativa</h3>
                                <p className="text-sm text-gray-400">Dados infinitos</p>
                            </div>

                            <div className="bg-gray-900 border cursor-pointer border-gray-800 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                                <div className="w-12 h-12 bg-[#030712] rounded-lg flex items-center justify-center mb-4">
                                    <Ban className="w-6 h-6 text-[#E97527]" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Sem fidelização</h3>
                                <p className="text-sm text-gray-400">Total liberdade</p>
                            </div>

                            <div className="bg-gray-900 border cursor-pointer border-gray-800 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                                <div className="w-12 h-12 bg-[#030712] rounded-lg flex items-center justify-center mb-4">
                                    <DollarSign className="w-6 h-6 text-[#E97527]" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Preço fixo</h3>
                                <p className="text-sm text-gray-400">Sem surpresas</p>
                            </div>
                            <div className="bg-gray-900 border cursor-pointer border-gray-800 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                                <div className="w-12 h-12 bg-[#030712] rounded-lg flex items-center justify-center mb-4">
                                    <CardSim  className="w-6 h-6 text-[#E97527]" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Perdeu o chip?</h3>
                                <p className="text-sm text-gray-400">A troca é feita de forma rápida, prática e sem burocracia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}