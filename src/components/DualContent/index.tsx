import Image from 'next/image'
import Button from '../common/Button'

export type DualContent = {
  title: string
  description: string
}

export type DualContentProps = {
  items: DualContent[]
}

export const DualContent = ({ items }: DualContentProps) => {
  return (
    <div className="container px-6 py-12 text-center flex flex-col md:flex-row items-center justify-center md:justify-around text-black-text-color md:text-left">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold">{items[0].title}</h2>
        <p
          className="py-4"
          dangerouslySetInnerHTML={{ __html: items[0].description }}
        />
        <div className="hidden md:flex">
          <Button type="primary" />
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <Image
          src="/me_3.jpg"
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
