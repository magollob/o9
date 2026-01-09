import Image from "next/image"

export function CommunitySection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F5F1ED] to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#6B5B4F] px-2">
          Faça Parte da Nossa Comunidade
        </h2>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-3xl">
            <Image
              src="/images/comunidade.png"
              alt="Comunidade de mães - Acesso ao app Guia da Gestante com canais exclusivos"
              width={1200}
              height={1200}
              className="w-full h-auto"
              quality={90}
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-[#6B5B4F] leading-relaxed">
            <span className="font-semibold text-[#8B7355]">O conhecimento que cura.</span> Acesse os materiais mais
            completos do mercado e mude a história da sua gestação: do sofrimento silencioso para a plenitude física e
            emocional.
          </p>
        </div>
      </div>
    </section>
  )
}
