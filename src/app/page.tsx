import { Banner } from './components/Banner'
import { items } from './components/Banner/mock'
import { ContentInfo } from './components/ContentInfo'
import { infos } from './components/ContentInfo/mock'
import DualContent from './components/DualContent'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner items={items} />

      <div className="container ">
        <ContentInfo items={infos} />
        <DualContent />
      </div>
    </main>
  )
}
