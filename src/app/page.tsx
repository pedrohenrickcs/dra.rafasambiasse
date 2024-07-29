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
import { Footer } from '@/components/layout/Footer'
import { menuItems } from '@/components/layout/Header/mock'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header menuItems={menuItems} />
      <Banner items={items} />

      <ContentInfo items={infos} />
      <DualContent items={infosContent} id="about" />
      <TextContent items={infosTextContent} id="specialty" />
      <ContentAction />
      <TextContent items={infosBeforeAfter} id="result" />
      <Footer />
    </main>
  )
}
