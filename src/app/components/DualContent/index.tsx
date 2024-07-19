import Image from 'next/image'
import Button from '../common/Button'

export const DualContent = () => {
  return (
    <div className="px-6 py-12 text-center flex flex-col md:flex-row items-center justify-center md:justify-around text-black-text-color md:text-left">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold">Muito bem-vindos!</h2>
        <p className="py-4">
          Sou a Dra. Rafaela, dentista com anos de experiência dedicado a cuidar
          da sua saúde bucal com atenção, profissionalismo e empatia. Estou aqui
          para transformar seu sorriso, proporcionando tratamentos
          personalizados que atendem às suas necessidades e expectativas.
          <br />
          <br />
          Acredito que cada paciente merece um atendimento individualizado e
          humanizado. Meu objetivo é não apenas tratar problemas dentários, mas
          também promover a saúde bucal de forma integral, educando e prevenindo
          para garantir sorrisos saudáveis e duradouros.
        </p>
        <div className="hidden md:flex">
          <Button type="primary" />
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <Image
          src="/me.jpg"
          width={300}
          height={300}
          alt="Rafaela Sambiasse"
          className="m-auto"
        />
        <div className="flex md:hidden justify-center">
          <Button type="primary" />
        </div>
      </div>
    </div>
  )
}
