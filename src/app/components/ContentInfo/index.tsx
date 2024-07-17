import { FaRegHeart } from 'react-icons/fa'

export const ContentInfo = () => {
  return (
    <div className="container flex text-center items-center bg-primary-bg-color text-primary-text-color p-10 -my-10">
      <div className="px-10 h-40 flex flex-col justify-center border-r">
        <span className="flex justify-center pb-4">
          <FaRegHeart size={40} />
        </span>

        <h2 className="md:text-xl">Profissionais Experientes</h2>
        <p className="text-sm mt-4">
          Temos profissionais experientes, com excelente formação e que atuam há
          muitos anos no mercado.
        </p>
      </div>
      <div className="px-10 h-40 flex flex-col justify-center border-r">
        <span className="flex justify-center pb-4">
          <FaRegHeart size={40} />
        </span>

        <h2 className="md:text-xl">Profissionais Experientes</h2>
        <p className="text-sm mt-4">
          Temos profissionais experientes, com excelente formação e que atuam há
          muitos anos no mercado.
        </p>
      </div>
      <div className="px-10 h-40 flex flex-col justify-center">
        <span className="flex justify-center pb-4">
          <FaRegHeart size={40} />
        </span>

        <h2 className="md:text-xl">Profissionais Experientes</h2>
        <p className="text-sm mt-4">
          Temos profissionais experientes, com excelente formação e que atuam há
          muitos anos no mercado.
        </p>
      </div>
    </div>
  )
}
