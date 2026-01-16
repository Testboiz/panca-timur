import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ServicesCarousel } from '../components/services-carousel'
import { ProductsGrid } from '../components/products-grid'
import { BookAConsultationButton } from '../components/book-a-consultation-button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Solusi yang ditawarkan PT Panca Timur Raya. Layanan Mechanical, Electrical, dan Plumbing yang terintegrasi dan terukur. Fokus pada keselamatan kerja, efisiensi sistem, dan kualitas pelaksanaan. Solusi tepat guna untuk mendukung keandalan setiap proyek.',
}

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        <Image
          className="object-cover"
          fill
          alt="Image Solutions"
          src={'/dokumPancaTimurR/electrical4.jpg'}
        />
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[36px] md:py-[20px] xl:px-[30px] xl:py-[57px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">
          Smart Solutions for Reliable <br className="hidden md:block" />
          Mechanical Electrical <br className="hidden xl:block" />
          Plumbing Systems
        </h1>
        <div className="lg:max-w-[509px] mb-[38px]">
          <p className="alternative my-[20px] lg:mb-[30px]">
            Layanan Mechanical, Electrical, dan Plumbing yang terintegrasi dan terukur. Fokus pada
            keselamatan kerja, efisiensi sistem, dan kualitas pelaksanaan. Solusi tepat guna untuk
            mendukung keandalan setiap proyek.
          </p>
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
        <h1 className="titleh1 text-[#10385D] mb-[12px]">Services</h1>
        <p className="p text-[#747775] mb-[21px] md:mb-[28px]">
          We provide end-to-end mechanical, electrical, and plumbing solutions for industrial and
          commercial projects
        </p>
        <ServicesCarousel />
      </div>

      <div className="my-[35px] px-[20px] md:px-[44px] md:pb-[64px] lg:pb-[80px]">
        <h1 className="titleh1 text-[#10385D] mb-[12px]">Products</h1>
        <p className="p text-[#747775] mb-[21px] md:mb-[28px]">
          Equipment and systems we work with to support reliable projects
        </p>
        <ProductsGrid />
      </div>

      <Footer />
    </>
  )
}
