import type { AnimationItem } from "lottie-web";

export interface ButtonPedirChipProps {
    text: string
    onModal?: () => void;
}

export interface CardBeneficiosProps {
    openModal?: () => void;
    animationSrc: AnimationItem | object
    title: string
    subTitle: string
}

interface Beneficio {
    icon: React.ReactNode;
    backgroundColor?: string;
    title?: string;
    cortesia?:boolean
}

export interface CardPlanProps {
    isPopular?: boolean;
    popularText?: string;
    planIcon?: React.ReactNode;
    planName?: string;
    planDescription?: string;
    QtdMega?: string;
    beneficios?: Beneficio[];
    paymentMethod?: string;
    price?: string;
    tv?: boolean
    buttonText?: string;
}


export interface LiProps {
    text: string
    href: string
    onClick?: () => void
}

export interface CardPlanInfos {
    giga: string
    whatsapp: boolean
    informacoes: string[]
    valor: string
    openModal?: () => void
}

export interface ButtonOption {
    text: string;
    action: () => void;
}

export interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    options?: (string | ButtonOption)[] | null;
}

export interface UserInfo {
    name: string;
}

export interface CardUsabilityProps{
    title: string
    text: string
}