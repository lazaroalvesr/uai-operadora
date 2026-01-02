import { CardUsabilityProps } from "@/lib/interface"

export const CardUsability = ({ text, title }: CardUsabilityProps) => {
    return (
        <div className="lg:w-[750px] bg-[#F3F3F3] h-full border-1 border-[#E97527] rounded-[20px]">
            <div className="lg:px-12 px-4 py-9 flex-col flex">
                <h3 className="text-color-blue font-bold lg:text-[20px] text-[18px]">{title}</h3>
                <p className="lg:text-[16px] pt-[20px] text-[14px]">
                    {text}
                </p>
            </div>
        </div>
    )
}