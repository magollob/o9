import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 sm:py-10 bg-[#2C5F4D]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 sm:space-y-6">
          <p className="text-xs sm:text-sm text-white/90 px-4">
            Copyright © 2025. Todos os direitos reservados – Guia da Gestante
          </p>

          <div className="flex justify-center items-center gap-4 px-4">
            <Image
              src="/images/site-blindado.webp"
              alt="Site seguro e blindado - Certificado SSL"
              width={280}
              height={80}
              className="w-auto h-8 sm:h-10 md:h-12 max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
