type ItemsInfos = {
  title: string
  description: string
}

type Item = {
  items: ItemsInfos[]
}

export const Banner = ({ items }: Item) => {
  return (
    <>
      <div className="bg-banner w-full flex bg-secondary-bg-color bg-no-repeat bg-top bg-cover md:bg-contain md:bg-right-bottom mt-40">
        <div className="container text-left m-auto hidden md:flex flex-col justify-center md:p-6">
          <div className="md:w-1/2 text-black-text-color">
            <h1 className="md:text-5xl font-bold">{items[0].title}</h1>
            <h3 className="mt-4">{items[0].description}</h3>
          </div>
        </div>
      </div>
    </>
  )
}
