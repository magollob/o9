import Image from "next/image"

export function GuaranteeSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance px-2">
            Sem Riscos Para Você
          </h2>
          <div className="flex justify-center py-2">
            <Image
              src="/images/design-sem-nome.webp"
              alt="Garantia incondicional de 30 dias - Satisfação garantida ou seu dinheiro de volta"
              width={200}
              height={200}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
              loading="lazy"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed px-4">
            Você tem <strong>30 dias</strong> para experimentar o Guia da Gestação. Se não ficar satisfeita, devolvemos
            100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  )
}
