import { FaWhatsapp } from 'react-icons/fa'

export type ButtonProps = {
  type?: string
}

const Button = ({ type }: ButtonProps) => {
  return type === 'primary' ? (
    <div className="py-8">
      <a
        className="text-xl px-8 py-4 min-w-[160px] inline-flex text-center text-primary-bg-color bg-white-bg-color border border-violet-600 rounded active:text-violet-500 hover:bg-primary-bg-color hover:text-white-bg-color focus:outline-none focus:ring transition-colors"
        href="https://wa.me/5511987654784"
        target="_blank"
      >
        <FaWhatsapp size={20} />
        <span className="pl-2 text-sm">Agende sua avaliação</span>
      </a>
    </div>
  ) : (
    <div className="py-8">
      <a
        className="text-xl px-8 py-4 min-w-[160px] inline-flex text-center bg-white text-primary-bg-color hover:text-white-text-color hover:bg-primary-bg-color border border-violet-600 rounded active:text-violet-500  focus:outline-none focus:ring transition-colors"
        href="https://wa.me/5511987654784"
        target="_blank"
      >
        <FaWhatsapp size={20} />
        <span className="pl-2 text-sm">Agende sua avaliação</span>
      </a>
    </div>
  )
}

export default Button
