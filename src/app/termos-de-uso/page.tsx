import { Calendar, FileText } from "lucide-react"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Termos de Uso | Uai+ - Operadora Móvel',
    description: 'Leia os Termos de Uso da Uai+, operadora móvel regional com sede em Pedra Azul, MG. CNPJ: 60.987.350/0001-15. Ligue grátis: 0800 735 9501.',
    keywords: [
        'termos de uso Uai+',
        'termos de serviço operadora móvel',
        'contrato telefonia móvel',
        'UAI+ TELEFONIA LTDA',
        'Pedra Azul MG',
        'CNPJ 60.987.350/0001-15',
        '0800 735 9501',
        'direitos do consumidor telecom',
        'operadora móvel',
    ],
    openGraph: {
        title: 'Termos de Uso | Uai+',
        description: 'Conheça os termos e condições de uso da Uai+, operadora móvel com cobertura em todo o Brasil.',
        url: 'https://www.uaimais.com.br/termos',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Termos de Uso - Uai+ Operadora Móvel',
            },
        ],
    },
    alternates: {
        canonical: 'https://www.uaimais.com.br/termos',
    },
};

export default function TermosDeUso() {
    return (
        <div className="min-h-screen bg-gray-50 lg:pt-44 pt-40">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">

                    <div className="flex items-center gap-3 mb-2 lg:justify-center pb-4">
                        <FileText className="h-8 w-8 text-[#E97527]" />
                        <h1 className="lg:text-3xl text-2xl font-bold text-gray-900">Termos de Uso</h1>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Última atualização: 04/09/2025</span>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Termos e Condições de Uso</h2>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                            <p className="text-gray-700 leading-relaxed">
                                O Serviço será fornecido pela{" "}
                                <strong className="text-gray-900">UAI+ TELEFONIA LTDA</strong>, com sede em Pedra azul,
                                Estado de Minas Gerais, na Rua Vivaldo Santos, 267, Sala 4, Bairro Sebastião Faria, CEP
                                39970-000, inscrita no CNPJ sob o n.º 60.987.350/0001-15 (&quot;
                                <strong className="text-gray-900">UAI+</strong>&quot;).
                            </p>
                        </div>

                        <p className="text-gray-600 mb-3">
                            Este site é mantido e operado por <strong className="text-gray-900">UAI+</strong>.
                        </p>
                        <p className="text-gray-600">
                            Ao acessar este site, você concorda com os seguintes termos e condições de uso. Recomendamos que leia
                            atentamente antes de navegar.
                        </p>
                    </div>

                    <div className="p-6 space-y-8">
                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    1
                                </span>
                                Objetivo do site
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Este site tem como finalidade fornecer informações institucionais, planos de telefonia, cobertura,
                                serviços, suporte e promoções da <strong className="text-gray-900">UAI+</strong>.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    2
                                </span>
                                Uso permitido
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                O uso deste site é destinado exclusivamente para fins informativos. É proibido utilizá-lo para fins
                                ilegais, ofensivos ou que violem direitos de terceiros.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    3
                                </span>
                                Propriedade intelectual
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Todo o conteúdo deste site — incluindo textos, imagens, marcas, logotipos, layout e design — é de
                                propriedade da <strong className="text-gray-900">UAI+</strong> ou de terceiros que autorizaram seu uso,
                                sendo protegido pelas leis de direitos autorais e propriedade intelectual. É proibida a reprodução,
                                distribuição ou modificação sem autorização prévia.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    4
                                </span>
                                Modificações
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                A <strong className="text-gray-900">UAI+</strong> poderá alterar estes Termos de Uso a qualquer momento,
                                sem aviso prévio. Recomendamos que consulte esta página regularmente para estar sempre atualizado.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    5
                                </span>
                                Responsabilidade
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                A <strong className="text-gray-900">UAI+</strong> se esforça para manter as informações deste site
                                atualizadas e corretas, mas não garante que estejam sempre livres de erros, omissões ou interrupções. O
                                uso das informações é de responsabilidade do usuário.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    6
                                </span>
                                Links externos
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Este site pode conter links para sites de terceiros. A <strong className="text-gray-900">UAI+</strong>{" "}
                                não se responsabiliza pelo conteúdo, práticas e políticas desses sites externos.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    7
                                </span>
                                Contato
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco através da nossa{" "}
                                página de atendimento
                                , pelo WhatsApp{" "}
                                <a href="https://wa.me/5508007359501" className="text-[#E97527] hover:underline">
                                    0800 735 9501
                                </a>{" "}
                                ou pelo e-mail{" "}
                                <a href="mailto:uaimais@uaimais.com.br" className="text-[#E97527] hover:underline">
                                    uaimais@uaimais.com.br
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}
