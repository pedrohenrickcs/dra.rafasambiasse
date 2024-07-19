import { Banner } from './components/Banner'
import { ContentInfo } from './components/ContentInfo'
import { DualContent } from './components/DualContent'

import { items } from './components/Banner/mock'
import { infos } from './components/ContentInfo/mock'
import { infosContent } from './components/DualContent/mock'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner items={items} />

      <div className="container ">
        <ContentInfo items={infos} />
        <DualContent items={infosContent} />
      </div>
    </main>
  )
}
