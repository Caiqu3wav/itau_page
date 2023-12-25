import { Container } from "./Container"
import ImgAppleStore from "@/assets/btn-apple-store.svg"
import ImgGooglePlay from "@/assets/btn-google-play.svg"
import Image from "next/image"
import Arrow from "@/assets/arrow-explorer.svg"
import Woman from "@/assets/woman.png"

export function Hero() {
    return(
      <section className="section_hero w-full h-[704px] bg-no-repeat bg-center bg-cover">
        <Container>
           <div className="flex-1 max-w-[500px]">
            <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
            <p className="text-white text-xl max-w-[408] mb-8">Todas as operações que você precisa num só lugar. Simples, completo e feito pra você.</p>
           <div className="flex gap-4 mb-24">
            <button>
               <Image src={ImgAppleStore} alt="apple store icon" />
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="google play icon" />
            </button>
           </div>
           <button className="flex items-center gap-12"><Image src={Arrow} alt="arrow down" />
           <span className="text-white text-sm font-bold">Continue explorando</span>
           </button>
           </div>

           <Image src={Woman} alt="woman" className="relative bottom-8" />
        </Container>
      </section>
    )
}