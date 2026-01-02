import { Smartphone, Laptop, Zap } from "lucide-react"
import Link from "next/link"

export const SecaoEscolherUmPlano = () => {
    const plans = [
        {
            icon: Smartphone,
            title: "Uso leve",
            description:
                "Perfeito para quem prioriza o essencial: WhatsApp, redes sociais e navegação básica. Conectividade sob medida para o seu dia.",
            iconBg: "bg-[#1a1a1a]",
            iconColor: "text-[#E97527]",
        },
        {
            icon: Laptop,
            title: "Uso Médio",
            description:
                "Ideal para trabalho, assistir vídeos e garantir o uso diário com tranquilidade. O equilíbrio entre velocidade e estabilidade.",
            iconBg: "bg-[#1a1a1a]",
            iconColor: "text-[#E97527]",
        },
        {
            icon: Zap,
            title: "Uso intenso",
            description:
                "Feito para streaming, trabalho online e alto consumo de internet. Máxima performance para múltiplos dispositivos sem travar.",
            iconBg: "bg-[#1a1a1a]",
            iconColor: "text-[#E97527]",
        },
    ]

    const message = `Olá! Vi os planos da UAI+ no site e tenho interesse em um dos planos. Poderiam me enviar mais informações, por favor?`
    const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-[#E97527] bg-clip-text text-transparent leading-tight">
                        Para quem é cada plano
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Escolha o perfil que mais combina com a sua rotina.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon
                        return (
                            <div
                                key={index}
                                className="group cursor-pointer relative overflow-hidden bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.02] hover:border-[#E97527]/50"
                            >
                                <div className="p-8">
                                    <div
                                        className={`w-16 h-16 rounded-2xl ${plan.iconBg} flex items-center justify-center mb-6 shadow-lg shadow-orange-500/10 group-hover:shadow-orange-500/30 group-hover:scale-110 transition-all duration-300 border border-[#E97527]/20`}>
                                        <Icon className={`w-8 h-8 ${plan.iconColor}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="flex justify-center mt-16">
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-black to-[#E97527] hover:from-black/80 hover:to-[#d88147] text-white lg:w-[420px] md:w-[370px] px-6 py-6 text-[16px] flex justify-center items-center lg:text-lg font-semibold rounded-xl shadow-lg shadow-orange-400/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all cursor-pointer">
                        Falar com um consultor no WhatsApp
                    </Link>
                </div>
            </div>
        </div>
    )
}
