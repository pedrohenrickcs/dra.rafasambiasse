export type TextContentInfos = {
  title: string
}

export type TextContentProps = {
  items: TextContentInfos[]
}

export const TextContent = ({ items }: TextContentProps) => {
  return (
    <div className="w-full bg-primary-bg-color px-6 py-12 text-center flex flex-col items-center justify-center md:justify-around text-white-bg-color md:text-left">
      <h2 className="text-4xl font-bold">{items[0].title}</h2>

      <div className="container flex flex-col md:flex-row">
        <div className="bg-white-bg-color text-secondary-text-color rounded-xl p-4 m-4">
          <h3 className="text-xl font-medium text-center">Ortodontia</h3>
          <p className="py-3 text-center">
            Utilizamos aparelhos modernos e técnicas avançadas para alinhar seu
            sorriso, melhorar a função mastigatória e proporcionar uma estética
            facial harmoniosa.
          </p>
        </div>
        <div className="bg-white-bg-color text-secondary-text-color rounded-xl p-4 m-4">
          <h3 className="text-xl font-medium text-center">
            Consultas de Rotina e Limpezas
          </h3>
          <p className="py-3 text-center">
            Nossas consultas de rotina incluem check-ups detalhados para
            detectar precocemente qualquer problema, além de limpezas
            profissionais que removem placa bacteriana e tártaro, prevenindo
            cáries e doenças gengivais.
          </p>
        </div>
        <div className="bg-white-bg-color text-secondary-text-color rounded-xl p-4 m-4">
          <h3 className="text-xl font-medium text-center">
            Clareamento Dental
          </h3>
          <p className="py-3 text-center">
            Recupere o brilho do seu sorriso com nosso tratamento de clareamento
            dental. Utilizamos técnicas seguras e eficazes para remover manchas
            e descolorações, proporcionando dentes mais brancos em pouco tempo.
          </p>
        </div>
        <div className="bg-white-bg-color text-secondary-text-color rounded-xl p-4 m-4">
          <h3 className="text-xl font-medium text-center">
            Tratamentos Restauradores
          </h3>
          <p className="py-3 text-center">
            Nossos tratamentos restauradores devolvem a funcionalidade e a
            estética do seu sorriso. Utilizamos materiais de alta qualidade,
            como resinas compostas e porcelanas, para restaurar dentes com
            cáries, fraturas ou desgastes.
          </p>
        </div>
        <div className="bg-white-bg-color text-secondary-text-color rounded-xl p-4 m-4">
          <h3 className="text-xl font-medium text-center">Estética Dental</h3>
          <p className="py-3 text-center">
            Trabalhamos com técnicas avançadas para melhorar a aparência dos
            seus dentes e gengivas, proporcionando harmonia e beleza ao seu
            rosto. Oferecemos procedimentos como facetas, lentes de contato
            dental, gengivoplastia e muito mais.
          </p>
        </div>
      </div>
    </div>
  )
}
