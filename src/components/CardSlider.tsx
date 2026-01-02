"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { CardPlanProps } from "@/lib/interface";
import { MoveLeft, MoveRight, Tv } from "lucide-react";
import Link from "next/link";

export const InfosPlans: CardPlanProps[] = [
  {
    planName: "UAI+",
    planDescription: "Conecte-se de forma inteligente com dupla cobertura",
    QtdMega: "5GB",
    beneficios: [
      {
        icon: "/Icons/whatsapp-icon.svg",
        backgroundColor: "bg-[#25D366]",
        title: "WhatsApp Ilimitado",
      },
      {
        icon: "/Icons/telefone.png",
        backgroundColor: "bg-[#000000]",
        title: "Ligações ilimitadas",
      },
      {
        icon: "/Icons/sms.png",
        backgroundColor: "bg-[#001748]",
        title: "SMS ilimitado",
      },
    ],
    paymentMethod: "Múltiplas formas de pagamento",
    price: "32,99",
  },
  {
    planName: "UAI+",
    planDescription: "Liberdade para navegar e compartilhar seus melhores momentos",
    QtdMega: "10GB",
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
    price: "39,99",
  },
  {
    planName: "UAI+",
    planDescription: "O equilíbrio perfeito entre redes sociais e produtividade diária",
    QtdMega: "15GB",
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
    price: "49,99",
  },
  {
    planName: "UAI+",
    planDescription: "Alta performance para quem não abre mão de estar sempre online",
    QtdMega: "24GB",
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
    price: "54,99",
  },
  {
    planName: "UAI+",
    planDescription: "Experiência premium com máxima velocidade para vídeos e música",
    QtdMega: "30GB",
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
    tv: true,
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
        title: "TV Grátis"
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
    tv: true,
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
        title: "TV Grátis"
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

export const CardSlider = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const isAutoScrolling = useRef(false)

  const scrollToIndex = (index: number, fromAutoplay = false) => {
    const el = scrollRef.current
    if (!el) return

    const cardWidth = window.innerWidth < 1024 ? window.innerWidth * 0.85 : 1095
    const gap = 48
    const offset = (el.clientWidth - cardWidth) / 2

    if (fromAutoplay) {
      isAutoScrolling.current = true
      setCurrentIndex(index)
    }

    el.scrollTo({
      left: index * (cardWidth + gap) - offset,
      behavior: "smooth",
    })

    setTimeout(() => {
      isAutoScrolling.current = false
    }, 400)
  }

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return

    let newIndex = currentIndex

    if (direction === "left") {
      newIndex = Math.max(0, currentIndex - 1)
    } else {
      newIndex = Math.min(InfosPlans.length - 1, currentIndex + 1)
    }

    scrollToIndex(newIndex)
  }

  const updateScrollButtons = () => {
    const el = scrollRef.current
    if (!el) return
    if (isAutoScrolling.current) return

    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)

    const cardWidth = window.innerWidth < 1024 ? window.innerWidth * 0.85 : 1095
    const gap = 48
    const containerWidth = el.clientWidth
    const offset = (containerWidth - cardWidth) / 2

    const adjustedScroll = el.scrollLeft + offset
    const newIndex = Math.round(adjustedScroll / (cardWidth + gap))
    setCurrentIndex(Math.max(0, Math.min(InfosPlans.length - 1, newIndex)))
  }

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      const nextIndex =
        currentIndex === InfosPlans.length - 1 ? 0 : currentIndex + 1

      scrollToIndex(nextIndex, true)
    }, 5000)

    return () => clearInterval(autoPlayInterval)
  }, [currentIndex])


  useEffect(() => {
    updateScrollButtons()
    const el = scrollRef.current
    if (!el) return

    el.addEventListener("scroll", updateScrollButtons)
    return () => el.removeEventListener("scroll", updateScrollButtons)
  }, [])

  return (
    <section className="flex flex-col bg-[##F9FAFB]">
      <div
        ref={scrollRef}
        className="flex gap-12 scroll-smooth lg:w-[1410px] w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollBehavior: 'smooth',
        }}
      >
        {InfosPlans.map((item, index) => {
          const [reais, centavos] = item.price?.split(',') || ['0', '00'];
          const temTV = item.beneficios?.some(b => b.title === "TV Incluso");
          const message = `Olá! Quero contratar o plano UAI+ de ${item.QtdMega}${temTV ? " com TV inclusa" : ""}.`;
          const whatsappLink = `https://api.whatsapp.com/send?phone=5508007359501&text=${encodeURIComponent(message)}`;

          return (
            <div
              className={`flex flex-col mb-12 mt-8 snap-center flex-shrink-0 transition-all duration-700 
    ${currentIndex === index ? 'scale-100' : 'scale-90'}`}
              key={index}
            >
              <div
                className="relative lg:w-[1090px] md:w-[620px] lg:snap-start snap-center overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-white shadow-2xl"
                style={{
                  background: `radial-gradient(circle at 85% 50%, rgba(233, 117, 39, 1) 0%, rgba(26, 26, 26, 1) 70%)`
                }}
              >
                <div className="relative z-10 max-w-2xl">
                  <div className="mb-4 flex items-center lg:text-start gap-4 lg:flex-row flex-col text-center md:flex-row">
                    <h1 className="text-2xl font-bold">UAI+</h1>
                    <span className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-black shadow-lg">
                      🎁 Chip Grátis
                    </span>
                    {item.tv && (
                      <span className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-1.5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wide text-black shadow-lg">
                        <Tv /> TV Grátis
                      </span>
                    )}
                  </div>
                  <p className="mb-8 lg:text-2xl text-center text-base w-72 md:w-full md:text-start lg:text-start font-light leading-tight lg:w-[600px] wrap-break-word">
                    {item.planDescription}
                  </p>
                  <div className="mb-6 ">
                    <div className="mb-6 flex items-center lg:items-start md:flex-row gap-4 lg:flex-row flex-col">
                      <span className="lg:text-7xl text-5xl font-bold">{item.QtdMega}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl">R$</span>
                        <span className="text-6xl font-bold">{reais}</span>
                        <span className="text-3xl">,{centavos}</span>
                        <span className="lg:text-lg text-xs">/mês</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="mb-3 text-base font-medium">Benefícios inclusos:</p>
                      <div className="flex flex-wrap gap-3">
                        {item.beneficios?.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                          >
                            <div className={`${benefit.backgroundColor} flex h-8 w-8 items-center justify-center rounded-full`}>
                              {typeof benefit.icon === "string" ? (
                                <Image
                                  src={benefit.icon || "/placeholder.svg"}
                                  alt={benefit.title || "benefit icon"}
                                  width={18}
                                  height={18}
                                  className="object-contain"
                                />
                              ) : (
                                benefit.icon
                              )}
                            </div>
                            <span className="text-sm font-medium lg:flex hidden">{benefit.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={whatsappLink}
                    className="rounded-full mt-4 flex lg:w-[260px] w-full items-center justify-center cursor-pointer text-center bg-[#e97527] px-8 py-4 text-base font-semibold text-gray-50 transition-colors hover:bg-orange-400">
                    Contratar no WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center gap-4 -mt-8">
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-110 active:scale-95"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <MoveLeft />
        </button>
        <div className="flex gap-2 bg-gray-500 py-2 px-3 rounded-full">
          {InfosPlans.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all cursor-pointer relative overflow-hidden ${currentIndex === index ? 'w-6' : 'w-2 bg-white/40'
                }`}
            >
              {currentIndex === index && (
                <>
                  <div className="absolute inset-0 bg-white/20"></div>
                  <div
                    className="absolute inset-0 bg-white origin-left"
                    style={{
                      animation: 'progress 5s linear forwards'
                    }}
                  ></div>
                </>
              )}
            </button>
          ))}
        </div>
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-110 active:scale-95"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <MoveRight />
        </button>

        <style jsx>{`
    @keyframes progress {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
  `}</style>
      </div>
      <div>
        <p className="pt-12 lg:text-lg text-sm">Todos os planos têm valor fixo mensal, sem fidelização e com chip grátis.
          Alguns planos incluem UAI+ TV sem custo adicional.
        </p>
      </div>
    </section>
  )
}