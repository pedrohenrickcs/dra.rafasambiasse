import { FaAward, FaRegHeart, FaTooth } from 'react-icons/fa'

export const ContentInfo = () => {
  return (
    <div className="container flex text-center flex-col xl:flex-row items-center bg-primary-bg-color text-primary-text-color p-10 md:-my-10">
      <div className="md:w-1/2 text-primary-text-color md:text-black-text-color md:hidden">
        <h1 className="text-2xl md:text-5xl font-bold">
          Seu sorriso é a nossa maior prioridade
        </h1>
      </div>
      <div className="md:px-10 my-8 md:h-40 flex flex-col justify-center xl:border-r">
        <span className="flex justify-center pb-4">
          <FaAward size={40} />
        </span>

        <h2 className="text-xl font-medium">
          Excelência em Serviços Odontológicos
        </h2>
        <p className="text-base my-4">
          Nos orgulhamos de oferecer serviços odontológicos de excelência,
          utilizando materiais de qualidade para garantir os melhores resultados
          e a satisfação de nossos pacientes.
        </p>
      </div>
      <div className="md:px-10 my-8 md:h-40 flex flex-col justify-center xl:border-r">
        <span className="flex justify-center pb-4">
          <FaRegHeart size={40} />
        </span>

        <h2 className="text-xl font-medium">Atendimento Humanizado</h2>
        <p className="text-base my-4">
          Cada paciente é único. Adaptamos nosso atendimento para atender às
          suas necessidades e preferências específicas, garantindo que você se
          sinta confortável e seguro durante todo o processo.
        </p>
      </div>
      <div className="md:px-10 my-8 md:h-40 flex flex-col justify-center">
        <span className="flex justify-center pb-4">
          <FaTooth size={40} />
        </span>

        <h2 className="text-xl font-medium">Atendimento Personalizado</h2>
        <p className="text-base my-4">
          Cada tratamento é planejado de acordo com as necessidades específicas
          de cada paciente, oferecendo soluções personalizadas que garantem
          resultados estéticos e funcionais excepcionais.
        </p>
      </div>
    </div>
  )
}
