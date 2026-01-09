import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

export function CTASection() {
  const benefits = [
    "+12.000 arquivos para gestantes",
    "GUIA DA GESTAÇÃO COMPLETO",
    "Alimentação para Gestantes",
    "Exercícios Seguros para Gestantes",
    "Programação Emocional Durante a Gestação",
    "Preparação para o Parto",
    "Cuidado no Pós-Parto",
    "30 dias de garantia",
    "Todas as atualizações",
    "Acesso vitalício",
  ]

  return (
    <section id="comprar" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#2C5F4D] to-[#1e4435] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-[3px] sm:border-4 border-[#4CAF50]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900 leading-tight">
              GARANTA O SEU ACESSO
              <br />
              AGORA MESMO!
            </h2>

            <div className="mb-8 sm:mb-10 flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/images/pack.png"
                  alt="Pack do Guia da Gestação - Cadernos, PDFs e materiais digitais"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4CAF50] flex items-center justify-center">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-gray-900 text-sm sm:text-base md:text-lg font-medium pt-1 uppercase leading-tight">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-900 text-lg sm:text-xl mb-2">
                DE <span className="line-through text-red-600 font-bold text-xl sm:text-2xl">R$229,99</span> POR
              </p>
              <p className="text-gray-900 text-base sm:text-lg mb-2">APENAS 6 VEZES DE</p>
              <p className="text-[#4CAF50] text-5xl sm:text-6xl md:text-7xl font-black mb-2">R$5,66</p>
              <p className="text-[#4CAF50] text-2xl sm:text-3xl font-bold">OU R$ 29,90 À VISTA</p>
            </div>

            <Button
              size="lg"
              asChild
              className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white text-xl sm:text-2xl py-6 sm:py-8 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://pay.kiwify.com.br/lCpDNgI" target="_blank" rel="noopener noreferrer">
                QUERO COMPRAR AGORA!
              </a>
            </Button>
          </div>

          <div className="mt-4 sm:mt-6 text-center bg-[#4CAF50] rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
              Você vai <span className="text-yellow-300">economizar R$200 HOJE</span>.
              <br />
              Clique no botão e <span className="text-yellow-300">garanta seu acesso agora</span>!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
