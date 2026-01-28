import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Blogs } from '../components/blogs'
import { BookAConsultationButton } from '../components/book-a-consultation-button'
import { Metadata } from 'next'

import config from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })

export const metadata: Metadata = {
  title: 'Insights and Updates',
  description:
    'Insights dan Updates PT Panca Timur Raya, Insight dan pengalaman yang lahir dari proyek nyata. Mengulas praktik industri dan solusi yang kami terapkan. Dibagikan untuk memperluas wawasan dan pemahaman teknis. ',
}

export default async function InsightsUpdatesPage() {
  const config = await payload.findGlobal({
    slug: 'insights-page',
  })
  return (
    <>
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        <Image
          className="object-cover"
          fill
          priority
          loading="eager"
          alt="Image Insights Updates"
          src={'/dokumPancaTimurR/hvac8.jpg'}
        />
        {typeof config.insights_hero === 'string' ? (
          <Image
            src={config.insights_hero}
            alt={config.insights_hero}
            fill
            priority
            loading="eager"
            className="object-cover"
          />
        ) : (
          <Image
            src={config?.insights_hero?.url ?? '/dokumPancaTimurR/hvac8.jpg'}
            alt={config.insights_hero?.alt ?? 'Image Insights Updates'}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">{config.insights_hero_heading}</h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">{config.insights_hero_description}</p>
          <div className="gap-[12px] lg:gap-[23px] flex flex-col lg:flex-row ">
            <BookAConsultationButton />

            <Button
              asChild
              variant="secondary"
              className="w-full lg:w-[243px]"
              aria-label="Lihat lebih lanjut Projek Portofolio (View Projects)"
            >
              <Link
                href={'/detail-portfolio'}
                aria-label="Link lebih lanjut Projek Portofolio (View Projects)"
              >
                View Projects
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[44px] bg-[#F5F7FA]">
        <h1 className="titleh1 py-[19px] text-[#10385d]">{config.blog_section_heading}</h1>
        <p className="p text-[#747775]">{config.blog_section_description}</p>

        <div className="flex flex-col items-center justify-center mt-[16px] lg:mt-[26px]">
          <Blogs />
        </div>
      </div>
    </>
  )
}
