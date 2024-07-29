import Image from 'next/image'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white pt-8 bg-primary-bg-color text-white-bg-color">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around">
        <div className="mb-6 md:mb-0 flex justify-center">
          <Image src="/logo_v2.png" alt="Logo" width={250} height={250} />
        </div>
        <div className="mb-6 md:mb-0 flex justify-center flex-col items-center text-center">
          <h2 className="text-lg font-bold mb-2">Contato</h2>
          <div className="flex justify-center md:justify-start items-center m-1">
            <MdEmail size={20} color="#ffffff" />
            <a
              href="mailto:rafa_sambiasse@hotmail.com"
              target="_blank"
              className="ml-2"
            >
              rafa_sambiasse@hotmail.com
            </a>
          </div>
          <div className="flex justify-center md:justify-start items-center m-1">
            <FaWhatsapp size={20} color="#ffffff" />
            <a
              href="https://wa.me/5511987654784"
              target="_blank"
              className="ml-2"
            >
              (11) 98765-4784
            </a>
          </div>
        </div>
        <div className="mb-6 md:mb-0 flex justify-center flex-col items-center text-center">
          <h2 className="text-lg font-bold mb-2">Redes sociais</h2>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/dra.rafasambiasse/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-gray-400"
            >
              <FaInstagram size={20} color="#ffffff" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 py-5 bg-primary-light-bg-color">
        <p className="text-center text-sm text-gray-400">
          Copyright 2024 © Rafaela Sambiasse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
