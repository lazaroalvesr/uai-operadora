import { CardSlider } from "./CardSlider"

export const Main = () => {
    return (
        <section className="w-full h-fit lg:pt-32 pt-24 pb-12" id="planos">
            <div className="max-w-[1300px] m-auto flex flex-col lg:pl-0 pl-3">
                <div className="pt-14">
                    <h1 className="font-bold bg-gradient-to-r from-black via-gray-700 to-[#E97527] bg-clip-text text-transparent text-[28px] w-[350px] md:w-[587px] md:text-[32px] lg:text-[48px] lg:w-[1090px]">
                        Escolha seu plano e <span className="bg-gradient-to-r from-gray-700 to-[#E97527] bg-clip-text text-transparent">comece agora mesmo.</span>
                    </h1>
                </div>
                <CardSlider />
            </div>
        </section>
    )
}
