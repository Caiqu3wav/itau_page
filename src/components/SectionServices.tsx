import { Container } from "./Container"
import PhoneIcon from "@/assets/icon-phone.svg"
import SoluctionsIcon from "@/assets/icon-solutions.svg"
import OptionsIcon from "@/assets/icon-options.svg"
import CardIcon from "@/assets/icon-card.svg"
import Image from "next/image"
import Phone from "@/assets/phone.png"

export function SectionServices() {

    return (
        <section className="w-full h-[965px] flex">
            <Container>
         <div className="flex-1 w-[900px]">
         <span className="block text-primary-orange text-sm font-bold uppercase mb-35">serviços exclusivos</span>
         <h2 className="text-primary-grey text-[56px] max-w-[600px] font-bold mb-6">Gerencie suas finanças sem sair de casa</h2>
         <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>
         <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
            <Image src={PhoneIcon} alt="Icon phone" />
            </div>
                <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
            <Image src={SoluctionsIcon} alt="Icon phone" />
            </div>
                <p className="flex-1 text-txt-gray pr-2">Soluções de empresa e renegociação para organizar suas finanças</p>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
            <Image src={OptionsIcon} alt="Icon phone" />
            </div>
                <p className="flex-1 text-txt-gray pr-2">Diversas opções de investimentos, de acordo com seu perfil de investidor</p>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
            <Image src={CardIcon} alt="Icon phone" />
            </div>
                <p className="flex-1 text-txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual</p>
            </li>
         </ul>
         </div>
          </Container>
          <div className="bg-gray-phone h-full w-full">
            <Image className="absolute right-[200px] pt-[140px]" src={Phone} alt="phone"/>
          </div>
        </section>
    )
}