import { Banner } from './components/Banner'
import { ContentInfo } from './components/ContentInfo'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner />
      <ContentInfo />
    </main>
  )
}
