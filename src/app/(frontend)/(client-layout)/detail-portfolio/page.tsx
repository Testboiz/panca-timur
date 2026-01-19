import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import React from 'react'
import { BookAConsultationButton } from '../components/book-a-consultation-button'
import { PortofolioTabs } from '../components/portofolio-tabs'
import { Metadata } from 'next'
import config from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Projek Portofolio PT Panca Timur Raya. Solusi Mechanical, Electrical, dan Plumbing untuk berbagai kebutuhan proyek. Dirancang dengan perencanaan matang, standar keselamatan, dan efisiensi kerja. Mendukung performa bangunan yang andal dan berkelanjutan.',
}

export default async function PortfolioPage() {
  const config = await payload.findGlobal({
    slug: 'portofolio-page',
  })
  return (
    <>
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        {typeof config.portofolio_hero === 'string' ? (
          <Image
            src={config.portofolio_hero}
            alt={config.portofolio_hero}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={config?.portofolio_hero?.url ?? '/dokumPancaTimurR/hvac1.jpg'}
            alt={config.portofolio_hero?.alt ?? 'Image Portfolio'}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">
          {/* Proven Experience in <br className="hidden xl:block" />
          Mechanical Electrical <br className="hidden xl:block" />
          and Plumbing Works */}
          {config.portofolio_hero_heading}
        </h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">{config.portofolio_hero_description}</p>
          <div>
            <BookAConsultationButton />
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[44px]">
        <h1 className="titleh1 py-[19px] text-[#10385d]">{config.portofolio_project_heading}</h1>
        <p className="p text-[#747775]">{config.portofolio_project_description}</p>
      </div>

      <PortofolioTabs />
    </>
  )
}
