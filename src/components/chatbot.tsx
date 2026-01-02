import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, User, Bot, Clock, XIcon, Check, Tv } from 'lucide-react';
import { ButtonOption, CardPlanProps, UserInfo } from '@/lib/interface';
import Image from 'next/image';

interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    options?: (string | ButtonOption)[] | null;
    isDelivered?: boolean;
}

const OpcoesCelular = [
    "Nossos Planos",
    "Como Contratar um Plano",
    "Posso Mudar de Plano",
    "Cobertura e Sinal",
    "Quais os Benefícios Exclusivos dos Planos",
    "Portabilidade",
    "Aumento de Preço",
    "Falar com Atendente/Suporte Técnico",
];


export const InfosPlans: CardPlanProps[] = [
    {
        planName: "UAI+",
        planDescription: "Dupla conexão inteligente",
        QtdMega: "5 Giga",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Cartão de Crédito",
        price: "32,99",
    },
    {
        planName: "UAI+",
        planDescription: "Dupla conexão inteligente",
        QtdMega: "10 Giga",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Cartão de Crédito",
        price: "39,99",
    },
    {
        planName: "UAI+",
        planDescription: "Dupla conexão inteligente",
        QtdMega: "15 Giga",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Cartão de Crédito",
        price: "49,99",
    },
    {
        planName: "UAI+",
        planDescription: "Dupla conexão inteligente",
        QtdMega: "24 Giga",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Cartão de Crédito",
        price: "54,99",
    },
    {
        planName: "UAI+",
        planDescription: "Dupla conexão inteligente",
        QtdMega: "30 Giga",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Cartão de Crédito",
        price: "64,99",
    },
    {
        planName: "UAI+",
        planDescription: "Potência total para streaming e downloads sem preocupações",
        QtdMega: "35GB",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Múltiplas formas de pagamento",
        price: "69,99",
    },
    {
        planName: "UAI+",
        planDescription: "Entretenimento completo com ultra franquia e TV inclusa",
        QtdMega: "50GB",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Tv size={20} />,
                backgroundColor: "bg-[#E97527]",
                title: "TV Incluso"
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Múltiplas formas de pagamento",
        price: "84,99",
    },
    {
        planName: "UAI+",
        planDescription: "O plano definitivo: máxima velocidade, dados gigantes e TV",
        QtdMega: "80GB",
        beneficios: [
            {
                icon: <Image src="/Icons/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />,
                backgroundColor: "bg-[#25D366]",
                title: "WhatsApp Ilimitado",
                cortesia: true
            },
            {
                icon: <Tv size={20} />,
                backgroundColor: "bg-[#E97527]",
                title: "TV Incluso"
            },
            {
                icon: <Image src="/Icons/telefone.png" alt="Telefone" width={18} height={18} />,
                backgroundColor: "bg-[#000000]",
                title: "Ligações ilimitadas"
            },
            {
                icon: <Image src="/Icons/sms.png" alt="SMS" width={20} height={20} />,
                backgroundColor: "bg-[#001748]",
                title: "SMS ilimitado"
            }
        ],
        paymentMethod: "Múltiplas formas de pagamento",
        price: "129,99",
    }
];

export default function ChatBot() {
    const [inputValue, setInputValue] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo>({ name: '' });
    const [awaitingName, setAwaitingName] = useState<boolean>(true);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(true);
    useEffect(() => {
        if (!isChatOpen && isTooltipVisible) {
            const timer = setTimeout(() => {
                setIsTooltipVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isChatOpen, isTooltipVisible]);

    const RespostasUaiMais = {
        "contratar": `💡 <b>Como contratar seu chip Uai+</b> ${userInfo.name}, é simples!<br>
Acesse nosso site e clique em <b>"Pedir chip"</b>. Você será direcionado para falar com um de nossos atendentes, que vai tirar suas dúvidas, ajudar a escolher o plano ideal e finalizar a contratação.
Você pode optar por:<br>
- 📦 Receber o chip físico no seu endereço, ou<br>
- ⚡ Ativar um <b>eSIM virtual</b> de forma rápida, sem precisar esperar pela entrega.
`,

        "mudar_plano": `🔄 <b>Mudança de plano</b>
Sim, ${userInfo.name}! Você pode alterar seu plano a qualquer momento entrando em contato com nosso suporte.<br>
A mudança é <b>rápida e sem burocracia</b>, garantindo que você sempre tenha o plano que melhor atende ao seu uso.
`,

        "cobertura": `📶 <b>Cobertura nacional</b>
Sim, ${userInfo.name}! Nosso chip oferece <b>cobertura nacional</b>, utilizando as redes de alta qualidade da <b>TIM</b> e da <b>Vivo</b>, que cobrem <b>todos os 27 estados do Brasil</b> e mais de <b>95% da população</b>. </br>
Você terá acesso às tecnologias <b>4G</b> e <b>5G</b> (em áreas compatíveis), garantindo conexão confiável onde estiver.<br>
➡️ Consulte a cobertura detalhada no nosso site!
`,

        "beneficios": `🎁 <b>Benefícios dos planos Uai+</b>
${userInfo.name}, nossos planos oferecem o <b>melhor custo-benefício</b>:
- 📞 Ligações ilimitadas<br>
- 💬 SMS ilimitado<br>
- 📱 Uso ilimitado de <b>WhatsApp</b> (sem descontar da franquia)<br>
- ⚡ Acesso às redes <b>4G e 5G da TIM e Vivo</b></br>
Confira os detalhes no nosso site e escolha o plano ideal para você!
`,

        "portabilidade": `📲 <b>Portabilidade</b>
Sim, ${userInfo.name}! Durante a contratação, basta informar que deseja <b>fazer a portabilidade</b>.<br>
Nossa equipe orienta todo o processo — pediremos apenas alguns dados, como <b>CPF</b> e <b>número atual</b>.</br>
A portabilidade é concluída em <b>poucos dias</b> e você continua usando o <b>mesmo número</b>, com toda a qualidade das redes TIM e Vivo.
`,

        "aumento_preco": `💰 <b>Sobre aumento de preço</b>
${userInfo.name}, pode ficar tranquilo! 😄<br>
Diferente de outras operadoras, a <b>Uai+</b> só altera o valor da sua mensalidade <b>com a sua autorização</b>.<br>
Aqui você tem <b>total transparência</b> — sem aumentos surpresa na fatura.
`,

        "suporte_generico": `🧑‍💼 <b>Falar com o suporte</b>
${userInfo.name}, vou te conectar com nossa equipe de atendimento!</br>
📞 <b>Telefone:</b> 0800 735 9501<br>
💬 <b>WhatsApp:</b> Clique no botão abaixo para falar com um atendente.
`,

        "problemas_tecnicos": `⚙️ <b>Soluções rápidas para problemas técnicos</b>
${userInfo.name}, se estiver com sinal fraco, internet lenta ou chip sem funcionar, tente primeiro:<br><br>
1️⃣ <b>Reinicie seu celular</b><br>
2️⃣ <b>Verifique se os dados móveis</b> estão ativados<br>
3️⃣ <b>Troque o modo de rede</b> (ex: 5G → 4G)<br><br>
Se não resolver, fale com nosso <b>suporte técnico</b> para uma verificação na sua região.
`,

        "menu_inicial": `👋 <b>Olá ${userInfo.name}!</b>
Eu sou o <b>Uai+ Bot</b>, assistente virtual da Uai+.<br>
Como posso te ajudar hoje? 😊
`,
    };

    const [messages, setMessages] = useState<Message[]>([
        {
            id: crypto.randomUUID(),
            text: "👋 Olá! Bem-vindo à Uai+! Antes de começarmos, qual é o seu nome?",
            isBot: true,
            timestamp: new Date(),
            isDelivered: false
        }
    ]);


    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage && lastMessage.isBot && !lastMessage.isDelivered) {
            const timer = setTimeout(() => {
                setMessages(prevMessages =>
                    prevMessages.map(msg =>
                        msg.id === lastMessage.id ? { ...msg, isDelivered: true } : msg
                    )
                );
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [messages]);


    const addMessage = (
        text: string,
        isBot: boolean = false,
        options: (string | ButtonOption)[] | null = null,
        requiresName: boolean = false
    ): void => {
        const newMessage: Message = {
            id: crypto.randomUUID(),
            text,
            isBot,
            timestamp: new Date(),
            options: options,
            isDelivered: !isBot
        };

        setMessages(prev => [...prev, newMessage]);

        if (requiresName) {
            setAwaitingName(true);
        }
    };

    const simulateTyping = (callback: () => void): void => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            callback();
        }, 1000 + Math.random() * 1000);
    };

    const WHATSAPP_NUMBER = "558007359501";

    const createWhatsappLink = (initialMessage: string, isSuporte = false) => {
        const baseMessage = isSuporte
            ? `Olá! Preciso de suporte técnico. ${userInfo.name ? `Meu nome é ${userInfo.name}.` : ''}`
            : `Olá! Quero contratar um plano de celular Uai+. ${userInfo.name ? `Meu nome é ${userInfo.name}.` : ''}`;

        const finalMessage = encodeURIComponent(`${baseMessage}\n${initialMessage}`);
        return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${finalMessage}`;
    };

    const handleBotResponse = (userMessage: string): void => {
        const message = userMessage.toLowerCase().trim();

        setAwaitingName(false);

        const initialGreetings = ["olá", "oi", "bom dia", "boa tarde", "boa noite", "e aí", "oii"];
        const menuGreetings = ["voltar ao menu inicial", "tenho outra dúvida"];

        if (initialGreetings.includes(message) && !userInfo.name) {
            simulateTyping(() => {
                addMessage("Olá! 👋 Bem-vindo à Uai+! Para começarmos, qual é o seu nome?", true, null, false);
            });
            return;
        }

        if (menuGreetings.includes(message) || (initialGreetings.includes(message) && userInfo.name)) {
            simulateTyping(() => {
                setMessages([
                    {
                        id: crypto.randomUUID(),
                        text: RespostasUaiMais.menu_inicial,
                        isBot: true,
                        timestamp: new Date(),
                        options: OpcoesCelular,
                        isDelivered: false
                    }
                ]);
            });
            return;
        }

        else if (userMessage === "Nossos Planos") {
            simulateTyping(() => {
                const planList = InfosPlans.map(plan => {
                    const beneficiosTitles = plan.beneficios ? plan.beneficios.map(b => b.title).join(', ') : '';

                    return `📱 <b>${plan.QtdMega}</b>: R$ ${plan.price}/mês\n` +
                        `   - ${beneficiosTitles}`;
                }).join('\n\n');

                const introText = `<b>${userInfo.name}</b> Confira nossos planos de celular Uai+. Eles incluem benefícios incríveis:`;

                const planOptions = InfosPlans
                    .map(plan => plan.QtdMega)
                    .filter((qtdMega): qtdMega is string => qtdMega !== undefined);

                addMessage(`${introText}\n\n${planList}\n\nQual plano você gostaria de contratar?`, true, [
                    ...planOptions,
                    "Como Contratar um Plano",
                    "Voltar ao menu inicial"
                ]);
            });

            return
        }

        const normalizedMessage = message.replace(/\s/g, '');
        const selectedPlan = InfosPlans.find(plan =>
            plan.QtdMega && plan.QtdMega.replace(/\s/g, '').toLowerCase() === normalizedMessage
        );

        if (selectedPlan) {
            simulateTyping(() => {
                const qtdMega = selectedPlan.QtdMega || "Plano Não Especificado";
                const whatsappLink = createWhatsappLink(`Quero contratar o plano de ${qtdMega}`, false);

                const beneficiosList = selectedPlan.beneficios
                    ? selectedPlan.beneficios.map(b => b.title).join('\n• ')
                    : 'Benefícios não listados.';

                addMessage(
                    `O plano <b>${qtdMega}</b> custa </br><b>R$ ${selectedPlan.price || 'sob consulta'}</b>/mês. Ele inclui:</br></br>` +
                    `• <b>${beneficiosList}</b></br></br>` +
                    `Método de pagamento: <b>${selectedPlan.paymentMethod || 'Não informado'}</b>\n` +
                    `Posso te direcionar para a contratação?`,
                    true,
                    [
                        { text: `Contratar ${qtdMega} no WhatsApp`, action: () => window.open(whatsappLink, '_blank') },
                        "Nossos Planos",
                        "Voltar ao menu inicial"
                    ]
                );
            });
            return;
        }

        else if (userMessage === "Como Contratar um Plano") {
            simulateTyping(() => {
                const whatsappLink = createWhatsappLink("Quero contratar um plano de celular.", false);
                addMessage(RespostasUaiMais.contratar, true, [
                    { text: "Falar com atendente para contratar", action: () => window.open(whatsappLink, '_blank') },
                    "Quais os Benefícios Exclusivos dos Planos",
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (userMessage === "Posso Mudar de Plano") {
            simulateTyping(() => {
                const whatsappLink = createWhatsappLink("Quero mudar meu plano atual.", true);
                addMessage(RespostasUaiMais.mudar_plano, true, [
                    { text: "Falar com o suporte para mudar de plano", action: () => window.open(whatsappLink, '_blank') },
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (userMessage === "Cobertura e Sinal") {
            simulateTyping(() => {
                addMessage(RespostasUaiMais.cobertura, true, [
                    "Portabilidade",
                    "Falar com Atendente/Suporte Técnico",
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (userMessage === "Quais os Benefícios Exclusivos dos Planos") {
            simulateTyping(() => {
                addMessage(RespostasUaiMais.beneficios, true, [
                    "Como Contratar um Plano",
                    "Aumento de Preço",
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (userMessage === "Portabilidade") {
            simulateTyping(() => {
                const whatsappLink = createWhatsappLink("Quero fazer a portabilidade do meu número para a Uai+.", false);
                addMessage(RespostasUaiMais.portabilidade, true, [
                    { text: "Iniciar Portabilidade no WhatsApp", action: () => window.open(whatsappLink, '_blank') },
                    "Como Contratar um Plano",
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (userMessage === "Aumento de Preço") {
            simulateTyping(() => {
                addMessage(RespostasUaiMais.aumento_preco, true, [
                    "Quais os Benefícios Exclusivos dos Planos",
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (userMessage === "Falar com Atendente/Suporte Técnico" || message.includes('atendent') || message.includes('suporte')) {
            simulateTyping(() => {
                const whatsappLink = createWhatsappLink("Preciso falar com um atendente.", true);
                addMessage(RespostasUaiMais.suporte_generico, true, [
                    { text: "Chamar no WhatsApp", action: () => window.open(whatsappLink, '_blank') },
                    { text: "Ligar Agora", action: () => window.open(`tel:08007359501`) },
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (message.includes('problemas técnicos') || message.includes('sinal') || message.includes('lenta')) {
            simulateTyping(() => {
                const whatsappLink = createWhatsappLink("Ainda estou com problemas técnicos no meu chip/sinal.", true);
                addMessage(RespostasUaiMais.problemas_tecnicos, true, [
                    { text: "Ainda não funcionou (Falar com Suporte)", action: () => window.open(whatsappLink, '_blank') },
                    "Cobertura e Sinal",
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else if (message.includes('velocidade')) {
            simulateTyping(() => {
                addMessage(
                    "Como somos uma operadora móvel, a velocidade (4G ou 5G) é influenciada pela sua localização e pela rede. Para garantir a melhor conexão, verifique se o modo de rede do seu celular está no automático ou 5G (se compatível).",
                    true,
                    ["Cobertura e Sinal", "Falar com Atendente/Suporte Técnico"]
                );
            });
        }
        else if (message.includes('instala') || message.includes('prazo')) {
            simulateTyping(() => {
                addMessage(
                    "Como somos uma operadora móvel, não há 'instalação'. Você recebe o chip físico por correio ou ativa o eSIM (virtual) na hora. O prazo de entrega do chip físico varia conforme a sua região.",
                    true,
                    ["Como Contratar um Plano", "Voltar ao menu inicial"]
                );
            });
        }
        else if (message.includes('cancel') || message.includes('fidelidade')) {
            simulateTyping(() => {
                const whatsappLink = createWhatsappLink("Gostaria de informações sobre o cancelamento do meu plano.", true);
                addMessage(
                    "Você pode solicitar o cancelamento a qualquer momento. Para verificar seu contrato e fidelidade, por favor, entre em contato direto com nossa central.",
                    true,
                    [
                        { text: "Falar com Central de Cancelamento (WhatsApp)", action: () => window.open(whatsappLink, '_blank') },
                        "Voltar ao menu inicial"
                    ]
                );
            });
        }

        else if (message.includes('combo') || message.includes('tv') || message.includes('câmera') || message.includes('segurança') || message.includes('ups')) {
            simulateTyping(() => {
                addMessage("A Uai+ é uma operadora de **telefonia móvel (celular)** e não oferece planos combo de Internet Fixa, TV a Cabo, câmeras de segurança ou UPS. Nossos planos são focados em: **Chip, Portabilidade, 4G/5G, Ligações e WhatsApp Ilimitado**.", true, [
                    "Como Contratar um Plano",
                    "Quais os Benefícios Exclusivos dos Planos",
                    "Voltar ao menu inicial"
                ]);
            });
        }

        else {
            simulateTyping(() => {
                addMessage(`Ops <b>${userInfo.name}</b>! Não entendi bem sua pergunta 😅. Posso te ajudar com os seguintes tópicos da Uai+:`, true, OpcoesCelular);
            });
        }
    };


    const handleSendMessage = (): void => {
        if (inputValue.trim()) {
            if (awaitingName) {
                addMessage(inputValue, false);
                setUserInfo(prev => ({ ...prev, name: inputValue }));
                setAwaitingName(false);
                simulateTyping(() => {
                    addMessage(`Prazer em conhecê-lo, <b>${inputValue.split(' ')[0]}</b>! 😊 Como posso ajudá-lo hoje?`, true, OpcoesCelular);
                });
            }
            else {
                addMessage(inputValue, false);
                handleBotResponse(inputValue);
            }
            setInputValue('');
        }
    };

    const handleOptionClick = (option: string | ButtonOption): void => {
        if (typeof option === 'object' && option.action) {
            option.action();
            return;
        }

        const optionText = typeof option === 'string' ? option : option.text;
        addMessage(optionText, false);
        handleBotResponse(optionText);
    };

    useEffect(() => {
        if (isChatOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isChatOpen]);


    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!isChatOpen) {
        const showTooltip = isTooltipVisible || isHovered;

        return (
            <div className="fixed bottom-6 right-6 z-20">
                <button
                    onClick={() => setIsChatOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="bg-gradient-to-br bg-green-600 cursor-pointer text-white rounded-full p-4 shadow-lg transition-all duration-300 animate-pulse">
                    <MessageCircle size={24} />
                </button>

                <div
                    className={`absolute -top-20 -left-52 bg-[#0D194F] text-white p-3 rounded-lg shadow-lg transition-opacity duration-500 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <p className="text-sm font-medium">Ei, sou o Uai+ Bot! Posso te ajudar?</p>
                    <p className="text-xs">Clique no ícone para falar com o bot!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 right-0 w-full h-full lg:bottom-6 lg:right-6 md:w-96 md:mb-8 md:mr-4 lg:mb-0 lg:mr-0 md:h-[600px] lg:w-96 lg:h-[600px] z-50">
            <div className="bg-white lg:rounded-2xl md:rounded-2xl shadow-2xl w-full h-full flex flex-col border border-gray-900">
                <div className="bg-gray-950 text-white p-4 lg:rounded-t-2xl md:rounded-t-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#E97527] rounded-full flex items-center justify-center">
                            <Bot size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Uai+ Bot</h3>
                            <p className="text-xs opacity-90">Online agora</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsChatOpen(false)}
                        className="text-white hover:text-gray-300 text-xl cursor-pointer">
                        <XIcon />
                    </button>
                </div>

                <div
                    className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[80%] ${message.isBot ? 'bg-white border border-gray-200' : 'bg-[#E97527] text-white'} rounded-2xl p-3 shadow-sm`}>
                                <div className="flex items-start space-x-2">
                                    {message.isBot && (
                                        <div className="w-6 h-6 bg-[#E97527] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <Bot size={12} className="text-white" />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <p
                                            className={`text-sm whitespace-pre-line ${message.isBot ? 'text-gray-800' : 'text-white'}`}
                                            dangerouslySetInnerHTML={{ __html: message.text }}
                                        />
                                        <div className="flex items-center space-x-1 mt-1">
                                            {message.isBot && !message.isDelivered ? (
                                                <Clock size={10} className='text-gray-400' />
                                            ) : (
                                                <Check size={10} className={message.isBot ? 'text-gray-400' : 'text-white/70'} />
                                            )}
                                            <span className={`text-xs ${message.isBot ? 'text-gray-400' : 'text-white/70'}`}>
                                                {formatTime(message.timestamp)}
                                            </span>
                                        </div>
                                    </div>
                                    {!message.isBot && (
                                        <div className="w-6 h-6 bg-[#0D194F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <User size={12} className="text-white" />
                                        </div>
                                    )}
                                </div>

                                {message.options && (
                                    <div className="mt-3 space-y-2">
                                        {message.options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleOptionClick(option)}
                                                className="block w-full text-left p-2 cursor-pointer bg-[#E97527] text-white rounded-lg hover:bg-[#f2924c] transition-colors text-sm">
                                                {typeof option === 'object' ? option.text : option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder={awaitingName ? "Digite seu nome..." : "Digite sua mensagem..."}
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E97527] focus:border-transparent"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim()}
                            className="bg-[#E97527] hover:bg-[#f2924c] disabled:bg-gray-300 text-white rounded-full px-3 transition-colors cursor-pointer">
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};