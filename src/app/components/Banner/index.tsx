export const Banner = () => {
  return (
    <>
      <div className="bg-banner w-full flex bg-secondary-bg-color bg-no-repeat bg-top bg-cover md:bg-contain md:bg-right-bottom md:mt-24">
        <div className="container text-left m-auto hidden md:flex flex-col justify-center md:p-6">
          <div className="md:w-1/2 text-black-text-color">
            <h1 className="md:text-5xl font-bold">
              Seu sorriso é a nossa maior prioridade
            </h1>
            <h3 className="mt-4">
              Valorizamos cada paciente e buscamos sempre oferecer um serviço de
              alta qualidade, garantindo conforto e satisfação em cada visita.
            </h3>
          </div>
        </div>
      </div>

      <div className="container text-left m-auto flex md:hidden flex-col justify-center md:p-6">
        <div className="md:w-1/2 text-black-text-color">
          <h1 className="md:text-5xl font-bold">
            Seu sorriso é a nossa maior prioridade
          </h1>
          <h3 className="mt-4">
            Valorizamos cada paciente e buscamos sempre oferecer um serviço de
            alta qualidade, garantindo conforto e satisfação em cada visita.
          </h3>
        </div>
      </div>
    </>
  )
}
