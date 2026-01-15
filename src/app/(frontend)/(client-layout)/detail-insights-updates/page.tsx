'use client'

import Image from 'next/image'
import Navbar from '../components/navbar'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Footer from '../components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { motion } from 'motion/react'
import { useQuery } from '@tanstack/react-query'
import { Config } from '../../../../payload-types'
import { PayloadSDK } from '@payloadcms/sdk'
import { Skeleton } from '@/components/ui/skeleton'

export default function InsightsUpdatesPage() {
  const sdk = new PayloadSDK<Config>({
    baseURL: '/api',
  })

  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }

  const query = useQuery({
    queryKey: ['insight-updates'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'blogs',
        limit: 10,
        sort: '-createdAt',
      })
    },
  })

  return (
    <>
      <Navbar />
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        <Image
          className="object-cover"
          fill
          alt="Image Insights Updates"
          src={'/dokumPancaTimurR/hvac8.jpg'}
        />
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">
          Our Thoughts, <br className="hidden xl:block" />
          Experience, and Expertise
        </h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">
            Insight dan pengalaman yang lahir dari proyek nyata. Mengulas praktik industri dan
            solusi yang kami terapkan. Dibagikan untuk memperluas wawasan dan pemahaman teknis.
          </p>
          <div className="gap-[12px] lg:gap-[23px] flex flex-col lg:flex-row ">
            <Button
              onClick={handleBookaConsultation}
              className="w-full lg:w-[243px]"
              aria-label="Chat ke WhatsApp Panca Timur Raya untuk Booking Konsultasi"
            >
              <Phone />
              Book a Consultation
            </Button>

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
        <h1 className="titleh1 py-[19px] text-[#10385d]">Blog</h1>
        <p className="p text-[#747775]">
          Insights and experiences from real projects, industry practices, and professional
          expertise.
        </p>

        <div className="flex flex-col items-center justify-center mt-[16px] lg:mt-[26px]">
          {query.isLoading && (
            <div className="w-[332px] md:w-[699px] md:h-[236px] lg:w-[945px] lg:h-[306px] overflow-hidden flex flex-col md:flex-row md:gap-[16px] lg:gap-[32px] md:mb-[20px] lg:mb-[44px]">
              <Skeleton className="bg-gray-100 relative w-full h-[280px] md:w-[280px] md:h-[236px] lg:w-[400px] lg:h-[306px] flex-shrink-0"></Skeleton>
              <div className="flex flex-col flex-1 -mt-8 md:mt-0 pb-3 px-[16px]">
                <Skeleton className="bg-gray-100 w-full md:w-[331px] lg:w-[457px] pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]" />
                <Skeleton className="bg-gray-100 w-full md:w-[331px] lg:w-[457px] mb-[16px] h-[20px] " />
                <Skeleton className="bg-gray-100 w-full md:w-[331px] lg:w-[457px] mb-[16px] h-[20px] " />
              </div>
            </div>
          )}
          {query.data &&
            query.data.docs.map((data) => {
              return (
                <motion.div
                  key={data.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, type: 'spring' }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="w-[332px] md:w-[699px] md:h-[236px] lg:w-[945px] lg:h-[306px] overflow-hidden flex flex-col md:flex-row md:gap-[16px] lg:gap-[32px] md:mb-[20px] lg:mb-[44px]">
                    <div className="relative w-full h-[280px] md:w-[280px] md:h-[236px] lg:w-[400px] lg:h-[306px] flex-shrink-0">
                      {typeof data.featuredImg === 'string' ? (
                        <Image
                          src={data.featuredImg}
                          alt={data.featuredImg}
                          fill
                          className="object-cover p-4"
                        />
                      ) : (
                        <Image
                          src={
                            data?.featuredImg?.url ?? '/dokumPancaTimurR/mechanicalplumbing3.jpg'
                          }
                          alt={data.featuredImg?.alt ?? 'Gambar Sampul'}
                          fill
                          className="object-cover p-4"
                        />
                      )}
                    </div>

                    <div className="flex flex-col flex-1 -mt-8 md:mt-0 pb-3 px-[16px]">
                      <CardHeader className="w-full md:w-[331px] lg:w-[457px] pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
                        <CardTitle>{data.title}</CardTitle>
                      </CardHeader>

                      <CardContent className="w-full md:w-[331px] lg:w-[457px] mb-[16px]">
                        <p className="h4blog">{data.excerpt}</p>
                      </CardContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="link"
                            className="justify-start text-[#0062B0] underline"
                            aria-label="Baca lebih lanjut blog (Read More)"
                          >
                            Read More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-screen h-screen max-w-none max-h-none flex flex-col p-0 overflow-hidden [&>button]:hidden">
                          <div className="flex-1 overflow-y-auto">
                            <Navbar />
                            <div className="relative w-full h-[111px] md:h-[222px] lg:h-[340px] flex-shrink-0">
                              <Image
                                src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                                alt="Image Service Mechanical & Plumbing"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <DialogHeader className="text-left gap-[20px] p-[20px] md:p-[40px] lg:p-[60px]">
                              <Breadcrumb>
                                <BreadcrumbList>
                                  <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                  </BreadcrumbItem>
                                  <BreadcrumbSeparator />
                                  <BreadcrumbItem>
                                    <BreadcrumbLink href="/detail-insights-updates">
                                      Insights & Updates
                                    </BreadcrumbLink>
                                  </BreadcrumbItem>
                                  <BreadcrumbSeparator />
                                  <BreadcrumbItem>
                                    <BreadcrumbPage>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </BreadcrumbPage>
                                  </BreadcrumbItem>
                                </BreadcrumbList>
                              </Breadcrumb>
                              <DialogTitle className="titleh1 text-[#0062B0]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                              </DialogTitle>

                              <p className="alternative">{data.createdAt}</p>
                              <RichText data={data.content} />
                            </DialogHeader>
                            <Footer />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
        </div>
      </div>

      <Footer />
    </>
  )
}
