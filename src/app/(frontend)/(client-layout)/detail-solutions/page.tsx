'use client'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'

import { motion } from 'motion/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { PayloadSDK } from '@payloadcms/sdk'
import { Config } from '../../../../payload-types'
import { useQuery } from '@tanstack/react-query'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Skeleton } from '@/components/ui/skeleton'

export default function SolutionsPage() {
  const sdk = new PayloadSDK<Config>({
    baseURL: '/api',
  })

  const queryProducts = useQuery({
    queryKey: ['solutions-products'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'products',
        limit: 0,
      })
    },
  })

  const queryServices = useQuery({
    queryKey: ['solutions-services'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'services',
        limit: 0,
      })
    },
  })

  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
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
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full  relative"
        >
          <CarouselContent className="py-4">
            {queryServices.data ? (
              queryServices.data.docs.map((data) => {
                return (
                  <CarouselItem key={data.id} className=" basis-full md:basis-1/2 lg:basis-1/3 ">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex justify-center"
                    >
                      <Card className="mx-auto w-[294px]  xl:w-[363px] overflow-hidden">
                        <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
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
                                data?.featuredImg?.url ??
                                '/dokumPancaTimurR/mechanicalplumbing1.jpg'
                              }
                              alt={data.featuredImg?.alt ?? 'Gambar Sampul'}
                              fill
                              className="object-cover p-4"
                            />
                          )}
                        </div>
                        <CardHeader className="w-full">
                          <CardTitle>{data.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="alternative">{data.excerpt}</p>
                        </CardContent>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="w-full p-4 md:-mt-2">
                              <Button
                                className="w-full "
                                variant="secondary"
                                aria-label="Pelajari lebih lanjut mengenai Mechanical dan Plumbing (Learn More)"
                              >
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="w-[350px] h-[600px] md:w-[650px] md:h-[405px] lg:w-[950px] lg:h-[550px] p-0 flex flex-col md:flex-row">
                            <div
                              className="relative w-full h-[557px] md:flex-1 md:h-full overflow-hidden     rounded-tl-[8px] rounded-tr-[8px]
                    md:rounded-tl-[8px] md:rounded-bl-[8px]
                    md:rounded-tr-none md:rounded-br-none"
                            >
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
                                    data?.featuredImg?.url ??
                                    '/dokumPancaTimurR/mechanicalplumbing1.jpg'
                                  }
                                  alt={data.featuredImg?.alt ?? 'Gambar Sampul'}
                                  fill
                                  className="object-cover p-4"
                                />
                              )}
                            </div>
                            <div className="w-[350px] md:w-[354px] lg:w-[476px] h-full p-[20px] lg:p-[40px] flex flex-col gap-5">
                              <DialogHeader className="text-left gap-[20px]">
                                <DialogTitle className="titleh3">{data.title}</DialogTitle>
                                <RichText
                                  className="max-h-[400px] overflow-y-auto list-disc pdialog [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6"
                                  data={data.content}
                                />
                              </DialogHeader>
                              <Button
                                onClick={handleBookaConsultation}
                                className="w-full lg:w-[243px]"
                                aria-label="Chat ke WhatsApp Panca Timur Raya untuk Booking Konsultasi"
                              >
                                <Phone /> Book a Consultation
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                )
              })
            ) : (
              <>
                <Skeleton className="bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
                <Skeleton className="bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
                <Skeleton className="bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
              </>
            )}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:left-4 lg:hidden" />
          <CarouselNext className="right-2 md:right-4 lg:hidden" />
        </Carousel>
      </div>

      <div className="my-[35px] px-[20px] md:px-[44px] md:pb-[64px] lg:pb-[80px]">
        <h1 className="titleh1 text-[#10385D] mb-[12px]">Products</h1>
        <p className="p text-[#747775] mb-[21px] md:mb-[28px]">
          Equipment and systems we work with to support reliable projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[41px] justify-items-center">
          {queryProducts.data ? (
            queryProducts.data.docs.map((data) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0.5, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="w-[294px] xl:w-[363px] overflow-hidden">
                  <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                    {typeof data.image === 'string' ? (
                      <Image src={data.image} alt={data.image} fill className="object-cover p-4" />
                    ) : (
                      <Image
                        src={data?.image?.url ?? '/dokumPancaTimurR/TankiFRP1.jpg'}
                        alt={data.image?.alt ?? 'Gambar Sampul'}
                        fill
                        className="object-cover p-4"
                      />
                    )}
                  </div>
                  <CardHeader className="w-full text-center">
                    <CardTitle className="whitespace-nowrap  pb-3">{data.name}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))
          ) : (
            <>
              <Skeleton className="bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
              <Skeleton className="bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
              <Skeleton className="bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
