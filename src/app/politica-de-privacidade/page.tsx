import { Calendar, Shield } from "lucide-react"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Política de Privacidade | Uai+ - Proteção de Dados',
    description: 'Conheça a Política de Privacidade da Uai+. Protegemos seus dados conforme a LGPD. Operadora com sede em Pedra Azul, MG. Contato: 0800 735 9501.',
    keywords: [
        'política de privacidade Uai+',
        'LGPD Uai+',
        'proteção de dados telecom',
        'UAI+ TELEFONIA LTDA',
        'privacidade operadora móvel',
        '0800 735 9501',
        'dados pessoais MG',
    ],
    openGraph: {
        title: 'Política de Privacidade | Uai+',
        description: 'A Uai+ respeita sua privacidade. Saiba como coletamos, usamos e protegemos seus dados.',
        url: 'https://www.uaimais.com.br/privacidade',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Política de Privacidade - Uai+',
            },
        ],
    },
    alternates: {
        canonical: 'https://www.uaimais.com.br/privacidade',
    },
};

export default function PoliticaDePrivacidade() {
    return (
        <div className="min-h-screen bg-gray-50 lg:pt-44 pt-40">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">

                    <div className="flex items-center gap-3 mb-2 lg:justify-center pb-4">
                        <Shield className="h-8 w-8" color="#E97527" />
                        <h1 className="lg:text-3xl text-2xl font-bold text-gray-900">Política de Privacidade</h1>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Última atualização: 04/09/2025</span>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nossa Política de Privacidade</h2>
                        <p className="text-gray-600">
                            Na <strong className="text-gray-900">UAI+</strong>, sua privacidade é muito importante para nós. Por isso,
                            queremos ser transparentes sobre como nosso site trata as informações dos visitantes.
                        </p>
                    </div>

                    <div className="p-6 space-y-8">
                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    1
                                </span>
                                Coleta de Dados
                            </h3>
                            <div className="text-gray-700 leading-relaxed space-y-3">
                                <p>
                                    Nosso site é uma plataforma informativa que não possui formulários, cadastros ou qualquer recurso que
                                    solicite informações pessoais dos usuários. Dessa forma, não coletamos dados pessoais, como nome,
                                    e-mail, telefone ou qualquer outro dado identificável.
                                </p>
                                <p>
                                    Além disso, não utilizamos cookies, pixels de rastreamento ou outras tecnologias semelhantes para
                                    coletar informações automaticamente sobre sua navegação.
                                </p>
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    2
                                </span>
                                Uso das Informações
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Como não coletamos dados pessoais, não utilizamos suas informações para qualquer finalidade. Nosso
                                objetivo é fornecer um conteúdo transparente e acessível, sem comprometer a sua privacidade.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    3
                                </span>
                                Links para Sites de Terceiros
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Nosso site pode conter links para sites externos que ofereçam serviços, informações ou produtos
                                relacionados. A <strong className="text-gray-900">UAI+</strong> não controla as práticas de privacidade
                                desses sites e não se responsabiliza por como eles coletam, armazenam ou usam seus dados. Recomendamos
                                que você leia atentamente as políticas de privacidade dos sites que visitar.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    4
                                </span>
                                Segurança
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Embora não coletemos dados, mantemos nosso site atualizado e protegido contra ameaças digitais para
                                garantir uma navegação segura para todos os visitantes.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    5
                                </span>
                                Alterações na Política de Privacidade
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Esta Política de Privacidade pode ser atualizada ocasionalmente para refletir mudanças legais, melhorias
                                no site ou ajustes nas práticas de privacidade. Aconselhamos que você consulte esta página regularmente
                                para estar sempre informado.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        <section>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="bg-[#E97527] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                    6
                                </span>
                                Direitos dos Usuários
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Como não coletamos dados pessoais, não há informações armazenadas sobre os visitantes que possam ser
                                acessadas, corrigidas ou excluídas. No entanto, caso você tenha dúvidas sobre privacidade relacionadas
                                ao nosso site, estamos à disposição para esclarecer.
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
                                Se tiver dúvidas, sugestões ou solicitações relacionadas à privacidade, entre em contato conosco pelo
                                e-mail  <a href="mailto:uaimais@uaimais.com.br" className="text-[#E97527] hover:underline">
                                    uaimais@uaimais.com.br
                                </a>. ou telefone{" "}
                                <a href="https://wa.me/5508007359501" className="text-[#E97527] hover:underline">
                                    0800 735 9501
                                </a>{" "}. Estamos prontos para ajudar e garantir a
                                transparência em nosso relacionamento com você.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div >
    )
}
