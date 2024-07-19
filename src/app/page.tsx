import { Banner } from './components/Banner'
import { ContentInfo } from './components/ContentInfo'
import { DualContent } from './components/DualContent'

import { items } from './components/Banner/mock'
import { infos } from './components/ContentInfo/mock'
import { infosContent } from './components/DualContent/mock'
import { TextContent } from './components/TextContent'
import { infosTextContent } from './components/TextContent/mock'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner items={items} />

      <ContentInfo items={infos} />
      <DualContent items={infosContent} />
      <TextContent items={infosTextContent} />
    </main>
  )
}
