'use client'

import { items } from '../components/Banner/mock'
import { infos } from '../components/ContentInfo/mock'
import { infosContent } from '../components/DualContent/mock'
import {
  infosTextContent,
  infosBeforeAfter,
} from '../components/TextContent/mock'
import Header from '../components/layout/Header'

import { Banner } from '../components/Banner'
import { ContentInfo } from '../components/ContentInfo'
import { DualContent } from '../components/DualContent'
import { TextContent } from '../components/TextContent'
import { ContentAction } from '../components/ContentAction'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <Banner items={items} />

      <ContentInfo items={infos} />
      <DualContent items={infosContent} />
      <TextContent items={infosTextContent} />
      <ContentAction />
      <TextContent items={infosBeforeAfter} />
    </main>
  )
}
