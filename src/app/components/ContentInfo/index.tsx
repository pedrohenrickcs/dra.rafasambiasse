import { IconBaseProps } from 'react-icons'
import { FaAward, FaRegHeart, FaTooth } from 'react-icons/fa'

type ItemInfo = {
  icon: string
  title: string
  description: string
}

type BannerItem = {
  title: string
  itemsInfos: ItemInfo[]
}

type BannerProps = {
  items: BannerItem[]
}

const iconMapping: { [key: string]: React.ComponentType<IconBaseProps> } = {
  award: FaAward,
  heart: FaRegHeart,
  tooth: FaTooth,
}

export const ContentInfo = ({ items }: BannerProps) => {
  return (
    <div className="flex text-center flex-col xl:flex-row py-16 items-center bg-primary-bg-color text-primary-text-color md:-mt-10">
      <div className="md:w-1/2 text-primary-text-color md:text-black-text-color md:hidden">
        <h1 className="text-2xl md:text-5xl font-bold">{items[0].title}</h1>
      </div>

      {items[0].itemsInfos.map((item, i: number) => {
        const IconComponent = iconMapping[item?.icon]
        return (
          <div
            className="md:px-10 md:h-40 flex flex-col justify-center xl:border-r xl:last:border-none"
            key={i}
          >
            <div className="flex justify-center items-center w-full my-4">
              {IconComponent ? <IconComponent size={40} /> : null}
            </div>
            <h3 className="text-xl mb-2 font-medium">{item.title}</h3>
            <p className="text-base">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
