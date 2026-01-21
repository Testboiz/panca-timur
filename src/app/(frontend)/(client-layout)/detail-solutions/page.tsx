import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ServicesCarousel } from '../components/services-carousel'
import { ProductsGrid } from '../components/products-grid'
import { BookAConsultationButton } from '../components/book-a-consultation-button'
import { Metadata } from 'next'

import config from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Solusi yang ditawarkan PT Panca Timur Raya. Layanan Mechanical, Electrical, dan Plumbing yang terintegrasi dan terukur. Fokus pada keselamatan kerja, efisiensi sistem, dan kualitas pelaksanaan. Solusi tepat guna untuk mendukung keandalan setiap proyek.',
}

export default async function SolutionsPage() {
  const config = await payload.findGlobal({
    slug: 'solutions-page',
  })
  return (
    <>
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        {typeof config.solutions_hero === 'string' ? (
          <Image
            src={config.solutions_hero}
            alt={config.solutions_hero}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={config?.solutions_hero?.url ?? '/dokumPancaTimurR/electrical4.jpg'}
            alt={config.solutions_hero?.alt ?? 'Image Solutions'}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[36px] md:py-[20px] xl:px-[30px] xl:py-[57px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">
          {/* Smart Solutions for Reliable <br className="hidden md:block" />
          Mechanical Electrical <br className="hidden xl:block" />
          Plumbing Systems */}
          {config.solutions_hero_heading}
        </h1>
        <div className="lg:max-w-[509px] mb-[38px]">
          <p className="alternative my-[20px] lg:mb-[30px]">{config.solutions_hero_description}</p>
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
                className="flex items-center justify-center gap-2"
                aria-label="Link lebih lanjut Projek Portofolio (View Projects)"
              >
                View Projects
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="px-[20px]  md:px-[44px] md:pb-[64px] xl:pb-[70px]">
        <h1 className="titleh1 text-[#10385D] mb-[12px]"> {config.solutions_services_heading}</h1>
        <p className="p text-[#747775] mb-[21px] md:mb-[28px]">
          {config.solutions_services_description}
        </p>
        <ServicesCarousel />
      </div>

      <div className="my-[35px] px-[20px] md:px-[44px] md:pb-[64px] lg:pb-[80px]">
        <h1 className="titleh1 text-[#10385D] mb-[12px]">{config.solutions_products_heading}</h1>
        <p className="p text-[#747775] mb-[21px] md:mb-[28px]">
          {config.solutions_products_description}
        </p>
        <ProductsGrid />
      </div>
    </>
  )
}
