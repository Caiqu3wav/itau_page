import { Container } from "./Container"

export function Hero() {
    return(
      <section className="section_hero w-full h-[704px] bg-no-repeat bg-center bg-cover">
        <Container>
           <div>
            <h1>Tenha seu banco na palma da mão</h1>
            <p>Todas as operações que você precisa num só lugar. Simples, completo e feito pra você.</p>
           </div>
        </Container>
      </section>
    )
}