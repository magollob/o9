import Image from "next/image"

export function TestimonialSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#F5F1ED]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#6B5B4F] px-2">
          O Que Nossas Gestantes Dizem
        </h2>

        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="w-full max-w-md">
            <Image
              src="/images/prova1.jpg"
              alt="Depoimento de Rafaela G. - Comecei a aplicar as dicas do guia e estou menos inchada e dormindo melhor"
              width={1125}
              height={1435}
              className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
              quality={90}
              loading="lazy"
            />
          </div>

          <div className="w-full max-w-md">
            <Image
              src="/images/prova2.jpg"
              alt="Depoimento de Talita S. - Agora me sinto mais calma, melhor fisicamente e conectada com meu bebê"
              width={840}
              height={1410}
              className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
              quality={90}
              loading="lazy"
            />
          </div>

          <div className="w-full max-w-md">
            <Image
              src="/images/prova3.jpg"
              alt="Depoimento de Jess - Aplicação de taping às 32 semanas para sustentar a barriga"
              width={1125}
              height={1435}
              className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
              quality={90}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
