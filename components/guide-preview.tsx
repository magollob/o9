import { Check } from "lucide-react"
import Image from "next/image"

export function GuidePreview() {
  const benefits = [
    "Para gestantes com medo de errar",
    "Para quem busca mais segurança na gestação",
    "Para gestantes emocionalmente sobrecarregadas",
    "Para quem busca equilíbrio emocional, físico e alimentar",
    "Para gestantes de primeira viagem que querem clareza",
    "Para quem deseja preparo emocional para o parto",
    "Para quem quer informação clara e sem terrorismo",
    "Para gestantes que querem reduzir estresse e ansiedade",
    "Para mulheres que desejam uma maternidade mais leve",
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
            O{" "}
            <span className="bg-[#4CAF50] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block">
              GUIA DA GESTAÇÃO
            </span>{" "}
            FOI CRIADO PRA VOCÊ TER UMA GRAVIDEZ SEGURA E TRANQUILA...
          </h2>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/pack.png"
              alt="Pacote completo do Guia da Gestante - E-books, PDFs, cadernos emocionais e conteúdo digital"
              width={1200}
              height={1200}
              className="w-full h-auto"
              quality={90}
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-[#FAF7F5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
          <div className="grid gap-3 sm:gap-4 md:gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#4CAF50] flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed pt-1.5 sm:pt-2">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
