import Button from '../common/Button'

export const ContentAction = () => {
  return (
    <div className="w-full bg-black-bg-color p-6 text-center flex flex-col md:flex-row items-center justify-center md:justify-center text-white-text-color md:text-left">
      <div className="md:mx-12">
        <h3 className="text-xl md:text-2xl">
          Será um prazer cuidar de você e da sua família.
        </h3>
      </div>

      <Button />
    </div>
  )
}
