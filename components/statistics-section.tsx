import Image from "next/image"

export function StatisticsSection() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#6B5B4F] px-4">
          A Importância do Cuidado na Gestação
        </h2>

        <div className="flex justify-center px-2">
          <Image
            src="/images/sessao1.jpg"
            alt="Infográfico: Cuidar da gestação reduz em 85% o risco de perder o bebê - 1 em cada 5 gestantes perde seu bebê"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
