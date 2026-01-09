import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-background py-6 sm:py-8">
      <div className="container mx-auto px-4 max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Image
            src="/images/logort.jpg"
            alt="Guia da Gestação - Cuidado e leveza em cada etapa"
            width={600}
            height={200}
            className="w-full h-auto max-w-[90%] sm:max-w-full"
            priority
          />
        </div>

        {/* Headline Image */}
        <div className="flex justify-center">
          <Image
            src="/images/imagem1.jpg"
            alt="Maternidade - Saúde e Gestação: Alerta sobre falta de informação correta sobre cuidados básicos"
            width={950}
            height={600}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
