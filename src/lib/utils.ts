import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { HelpCircle, List, Star, MapPin } from "lucide-react"
import { CardUsabilityProps } from "./interface"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const TextLi = [
  { text: "Planos e Serviços", href: "/#planos", icon: List },
  { text: "Porque a UAI+", href: "/#porque_auai+", icon: Star },
  { text: "Cobertura", href: "/cobertura", icon: MapPin },
  { text: "Ajuda", href: "/#atendimento", icon: HelpCircle },
]

export const liFooterText = [
  { href: "/#", text: "Home" },
  { href: "/#planos", text: "Planos e Serviços" },
  { href: "/#porque_auai", text: "Porque a UAI+" },
  { href: "/#cobertura", text: "Cobertura" },
  { href: "/#atentimento", text: "Ajuda" }
]

export const Perguntas = [
  {
    pergunta: "Como faço para contratar um plano?",
    resposta:
      "É simples! Acesse nosso site e clique em 'Pedir chip'. Você será direcionado para falar com um de nossos atendentes, que vai tirar suas dúvidas, ajudar a escolher o plano ideal e finalizar a contratação. Você pode optar por receber o chip físico no seu endereço ou ativar um eSIM virtual de forma rápida, sem precisar esperar pela entrega.",
  },
  {
    pergunta: "Posso mudar de plano depois que contratar?",
    resposta:
      "Sim! Você pode alterar seu plano a qualquer momento entrando em contato com nosso suporte. A mudança é rápida e sem burocracia, garantindo que você sempre tenha o plano que melhor atende ao seu uso.",
  },
  {
    pergunta: "O chip funciona em todo o Brasil?",
    resposta:
      "Sim! Nosso chip oferece cobertura nacional, utilizando as redes de alta qualidade da TIM e da Vivo, que cobrem todos os 27 estados do Brasil e mais de 95% da população. Você terá acesso às tecnologias 4G e 5G (em áreas compatíveis), garantindo conexão confiável onde estiver. Consulte a cobertura detalhada no nosso site!",
  },
  {
    pergunta: "Quais são os benefícios exclusivos dos seus planos?",
    resposta:
      "Nossos planos oferecem o melhor custo-benefício! Você conta com ligações ilimitadas, SMS ilimitado e franquias generosas de dados, além de uso ilimitado de aplicativos como WhatsApp, sem descontar da sua franquia. Também oferecemos acesso às redes 4G e 5G da TIM e Vivo. Confira os detalhes no nosso site e escolha o plano ideal para você!"
  },
  {
    pergunta: "Posso manter meu número atual ao mudar para sua operadora?",
    resposta:
      "Sim! Durante a contratação, basta informar que deseja fazer a portabilidade. Nossa equipe orienta todo o processo, solicitando apenas alguns dados, como CPF e número atual. A portabilidade é concluída em poucos dias e você continua usando o mesmo número, com toda a qualidade das redes TIM e Vivo.",
  },
  {
    pergunta: "A Uai+ aumenta o valor do plano depois que eu contrato?",
    resposta:
      "Não! Diferente de outras operadoras, a Uai+ só altera o valor da sua mensalidade com a sua autorização. Aqui você tem total transparência e não precisa se preocupar com aumentos surpresa na fatura.",
  },
]

export const TextCardUsability: CardUsabilityProps[] = [
  {
    title: "Dupla Cobertura (TIM + Vivo) 🤝",
    text: "Usamos a força combinada das redes TIM e Vivo para assegurar o maior alcance do país. Tenha internet garantida e estável, com velocidade otimizada, exatamente onde você precisar."
  },
  {
    title: "Sinal Otimizado e Estável ⚡",
    text: "Nossa tecnologia faz a gestão de rede em tempo real. O sistema seleciona e prioriza, de forma automática e instantânea, a conexão com melhor desempenho (TIM ou Vivo), garantindo máxima velocidade e zero interrupções."
  },
  {
    title: "Atendimento Humano e Descomplicado 🧑‍💻",
    text: "Resolvemos suas dúvidas e problemas com a máxima agilidade. Você fala diretamente com pessoas, via Telefone ou WhatsApp, sem robôs ou burocracia."
  },
  {
    title: "📈 Transparência e Controle Total 🛠️",
    text: "Garantimos que você nunca terá surpresas com aumentos inesperados de mensalidade ou custos escondidos. Nosso compromisso é com a clareza total das condições, para que você tenha controle absoluto e a certeza de pagar apenas pelo que foi combinado, sem pegadinhas."
  },
]
