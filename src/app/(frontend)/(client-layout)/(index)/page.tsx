'use client'

import { motion } from 'motion/react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import Tape from '../components/marquee'
import AnimatedNumber from '../components/animated-number'
import { useQuery } from '@tanstack/react-query'
import { PayloadSDK } from '@payloadcms/sdk'
import { Config } from '../../../../payload-types'
import { Skeleton } from '@/components/ui/skeleton'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default function HomePage() {
  const sdk = new PayloadSDK<Config>({
    baseURL: '/api',
  })
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  const queryProducts = useQuery({
    queryKey: ['solutions-products'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'products',
        limit: 6,
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

  const query = useQuery({
    queryKey: ['insight-updates'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'blogs',
        limit: 3,
        sort: '-createdAt',
      })
    },
  })
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between overflow-hidden">
        <div className="flex flex-col gap-4 max-w-3xl px-6 lg:px-8 w-full">
          <h1 className="titleh1 text-[#10385d]">
            Delivering{' '}
            <span className="relative inline-block">
              Quality
              <span className="absolute left-0 bottom-0 -translate-y-1 md:-translate-y-1.5 w-full max-w-[162px] h-[2.5px] lg:h-[4px] bg-[#10385D] rounded-full" />
            </span>{' '}
            Mechanical Electrical and Plumbing Solutions
          </h1>

          <p className="alternative">
            Sejak 2013, PT. Panca Timur Raya berkomitmen memberikan layanan konstruksi Mechanical,
            Electrical, dan Plumbing (MEP) yang berkualitas, tepat waktu, aman, dan sesuai standar
            industri.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
            <Button
              onClick={handleBookaConsultation}
              className="w-full lg:w-[243px]"
              aria-label="Chat ke WhatsApp Panca Timur Raya untuk Booking Konsultasi"
            >
              <Phone />
              Book a Consultation
            </Button>

            <Link
              href={'/detail-portfolio'}
              aria-label="Link lebih lanjut Projek Portofolio (View Projects)"
            >
              <Button
                variant="secondary"
                className="w-full lg:w-[243px]"
                aria-label="Lihat lebih lanjut Projek Portofolio (View Projects)"
              >
                View Projects
                <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[653px]">
          <Image
            className="w-full h-auto object-contain"
            src="/dokumPancaTimurR/electrical2.jpg"
            width={653}
            height={505}
            alt="Gambar Logo Panca Timur Raya"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col bg-[#10385D] mx-6 rounded-[8px] justify-center items-center gap-[32px] lg:gap-[32px] py-[51px] px-[20px] md:py-[40px] md:px-[44px] lg:py-[90px] lg:px-[100px]">
        <h1 className="text-[white] titleh1">About Us</h1>
        <motion.p
          className="p text-[white] text-center"
          initial={{ opacity: 0.5, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          PT. Panca Timur Raya merupakan perusahaan swasta berskala nasional yang berkomitmen
          meningkatkan performa perusahaan melalui penguatan manajemen, pengembangan budaya
          perusahaan, implementasi sistem informasi, penguatan manajemen risiko, dan peningkatan
          kepuasan pelanggan.
        </motion.p>
        <Link
          href={'/detail-about-us'}
          className="w-full flex justify-center"
          aria-label="Link lebih lanjut mengenai Perusahaan (About Our Company)"
        >
          <Button
            variant="secondary"
            className=" w-full lg:w-[243px]"
            aria-label="Lihat lebih lanjut mengenai Perusahaan (About Our Company)"
          >
            About Our Company
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <>
        <div className="mt-10 bg-[#F5F7FA] py-[25px] justify-items-center ">
          <h1 className="titleh1 text-[#10385D] lg:mb-[32px] text-center ">Solutions</h1>
          <h2 className="titleh2 text-[#10385D] lg:mb-[24px]">Services</h2>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px] justify-items-center "> */}
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
              {/* <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/3 ">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex justify-center"
                >
                  <Card className="mx-auto w-[294px]  xl:w-[363px] overflow-hidden">
                    <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                      <Image
                        src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                        alt="Image Service Mechanical & Plumbing"
                        className="object-cover w-full px-4 pt-4"
                        fill
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="whitespace-nowrap  ">Mechanical & Plumbing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="alternative">
                        Layanan desain, instalasi, serta perawatan sistem mekanikal dan perpipaan
                        untuk bangunan dan fasilitas industri.
                      </p>
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
                          className="relative w-full h-[557px] md:flex-1 md:h-full overflow-hidden    rounded-tl-[8px] rounded-tr-[8px]
                    md:rounded-tl-[8px] md:rounded-bl-[8px]
                    md:rounded-tr-none md:rounded-br-none"
                        >
                          <Image
                            src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                            alt="Image Service Mechanical & Plumbing"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-[350px] md:w-[354px] lg:w-[476px] h-full p-[20px] lg:p-[40px] flex flex-col gap-5">
                          <DialogHeader className="text-left gap-[20px]">
                            <DialogTitle className="titleh3">Mechanical & Plumbing</DialogTitle>
                            <DialogDescription className="pdialog">
                              Berfokus pada desain, instalasi, perbaikan dan perawatan seperti:
                            </DialogDescription>
                            <ul className="-mt-2 list-disc pl-10 pdialog">
                              <li>Sistem pemipaan air bersih & air kotor</li>
                              <li>Hydrant / Plumbing System</li>
                              <li>Instalasi pengolahan air baku & air limbah (WTP / WWTP)</li>
                              <li>Pompa sirkulasi, booster & submersible (Pump System)</li>
                              <li>Roof Tank & STP Tank</li> <li>Piping System</li>
                              <li>Cooling Tower & Air Compressor</li>
                            </ul>
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

              <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/3 ">
                <motion.div
                  // className="hidden md:block"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  // className="flex justify-center"
                >
                  <Card className="mx-auto w-[294px] xl:w-[363px] overflow-hidden">
                    <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                      <Image
                        src="/dokumPancaTimurR/hvac5.jpg"
                        alt="Image Service Heating, Ventilation & Air Conditioning (HVAC)"
                        className="object-cover w-full px-4 pt-4"
                        fill
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="whitespace-nowrap">
                        Heating, Ventilation & <br />
                        Air Conditioning (HVAC)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="alternative md:mt-1 xl:-mt-2">
                        Desain, instalasi, dan maintenance sistem HVAC untuk berbagai kebutuhan
                        bangunan
                      </p>
                    </CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="w-full p-4 -mt-4 ">
                          <Button
                            className="w-full"
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
                          <Image
                            src="/dokumPancaTimurR/hvac5.jpg"
                            alt="Image Service Heating, Ventilation & Air Conditioning (HVAC)"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-[350px] md:w-[354px] lg:w-[476px] h-full p-[20px] lg:p-[40px] flex flex-col gap-5">
                          <DialogHeader className="text-left gap-[20px]">
                            <DialogTitle className="titleh3">
                              Heating, Ventilation & Air Conditioning (HVAC)
                            </DialogTitle>
                            <DialogDescription className="pdialog">
                              Berfokus pada desain, instalasi, perbaikan, perawatan, dan
                              troubleshooting HVAC, seperti:
                            </DialogDescription>
                            <ul className="-mt-2 list-disc pl-10 pdialog">
                              <li>Air Handling Unit (AHU)</li>
                              <li>Ducting System</li>
                              <li>Blower Fan</li>
                              <li>Fan Cooling Unit (FCU)</li>
                              <li>dll.</li>
                            </ul>
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

              <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/3  ">
                <motion.div
                  // className="hidden lg:block"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="mx-auto w-[294px] xl:w-[363px] overflow-hidden">
                    <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                      <Image
                        src="/dokumPancaTimurR/electrical6.jpg"
                        alt="Image Service Electrical"
                        className="object-cover w-full  px-4 pt-4"
                        fill
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Electrical</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="alternative">
                        Instalasi sistem elektrikal untuk berbagai kebutuhan bangunan dengan standar
                        keamanan dan kualitas tinggi.
                      </p>
                    </CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="w-full p-4 -mt-2 ">
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
                          <Image
                            src="/dokumPancaTimurR/electrical6.jpg"
                            alt="Image Service Electrical"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-[350px] md:w-[354px] lg:w-[476px] h-full p-[20px] lg:p-[40px] flex flex-col gap-5">
                          <DialogHeader className="text-left gap-[20px]">
                            <DialogTitle className="titleh3">Electrical</DialogTitle>
                            <DialogDescription className="pdialog">
                              Menawarkan jasa elektrikal, seperti:
                            </DialogDescription>
                            <ul className="-mt-2 list-disc pl-10 pdialog">
                              <li>Instalasi jalur pengkabelan gedung dan industri</li>
                              <li>Instalasi panel listrik ( TM- TR / MV-LV Panel)</li>
                              <li>dll.</li>
                            </ul>
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
              </CarouselItem> */}
            </CarouselContent>

            <CarouselPrevious className="left-2 md:left-4 lg:hidden" />
            <CarouselNext className="right-2 md:right-4 lg:hidden" />
          </Carousel>

          <h2 className="titleh2 text-[#10385D] mt-12 lg:mb-[24px]">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[41px] justify-items-center">
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
                        <Image
                          src={data.image}
                          alt={data.image}
                          fill
                          className="object-cover p-4"
                        />
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

          <div className="flex w-full justify-center p-4 ">
            <Link
              href={'/detail-solutions'}
              className=" w-full flex justify-center "
              aria-label="Link lihat semua solusi layanan dan produk (Lihat semua solusi)"
            >
              <Button
                variant="secondary"
                className="flex w-full mt-4 md:w-[691px] lg:w-[243px] "
                aria-label="Lihat semua solusi layanan dan produk (Lihat semua solusi)"
              >
                View All Solutions
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </>
      <div className="overflow-x-hidden">
        <h1 className="titleh1 text-center text-[#10385D] py-8 md:py-12">Portfolio</h1>
        <div className="flex flex-col md:flex-row pl-14 md:pl-15 lg:pl-18 xl:pl-32 gap-[40px] md:gap-[44px] lg:gap-[60px] xl:gap-[180px]">
          <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-16 xl:gap-20">
            <div className="flex items-stretch">
              <div className="relative flex flex-col items-center">
                <span className="w-7 h-7 rounded-full bg-[#10385D]" />
                <span className="w-[6px] flex-1 bg-[#10385D]" />
              </div>
              <div className="-ml-3 bg-gradient-to-r from-[#D2E6FA] to-white px-[32px] py-4">
                <p className="statnum text-[48px] font-bold text-[#10385D] leading-none">
                  <AnimatedNumber value={11} suffix="+" />
                </p>
                <p className="stattext text-[#10385D]">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="relative flex flex-col items-center">
                <span className="w-7 h-7 rounded-full bg-[#10385D]" />
                <span className="w-[6px] flex-1 bg-[#10385D]" />
              </div>
              <div className="-ml-3 bg-gradient-to-r from-[#D2E6FA] to-white px-[32px] py-4">
                <p className="statnum text-[48px] font-bold text-[#10385D] leading-none">
                  <AnimatedNumber value={114} suffix="+" />
                </p>
                <p className="stattext text-[#10385D]">Projects Completed</p>
              </div>
            </div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="absolute top-0 left-0 transform rotate-0 z-10">
              <Card className="w-[160px] h-[213px] md:w-[200px] md:h-[267px] lg:w-[300px] lg:h-[400px]">
                <Image
                  src="/dokumPancaTimurR/projek1.jpg"
                  alt="Image Project Portfolio"
                  className="object-cover w-full h-full p-4"
                  fill
                />
              </Card>
            </div>
            <div className="absolute top-14 left-26 md:top-18 md:left-35 transform rotate-[16deg] z-0">
              <Card className="w-[160px] h-[213px] md:w-[200px] md:h-[267px] lg:w-[300px] lg:h-[400px]">
                <Image
                  src="/dokumPancaTimurR/mechanicalplumbing1.jpg"
                  alt="Image Project Portfolio"
                  className="object-cover w-full h-full p-4"
                  fill
                />
              </Card>
            </div>
          </motion.div>
        </div>
        <div>
          <h3 className="titleh3 text-center pt-82 md:pt-28 lg:pt-52">Trusted By</h3>
          <Tape />
        </div>
        <Link
          href={'/detail-portfolio'}
          className="p-4 md:p-8 flex justify-center"
          aria-label="Link lebih lanjut Projek Portofolio (View Projects)"
        >
          <Button
            variant="secondary"
            className="w-full md:w-[691px] lg:w-[243px] "
            aria-label="Lihat lebih lanjut Projek Portofolio (View Projects)"
          >
            View Projects
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
      <div className="flex justify-center mt-6 bg-[#F5F7FA]">
        <div className="flex flex-col items-center py-4 lg:py-6">
          <h1 className="titleh1 text-[#10385d] mb-8">Insights & Updates</h1>
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
          <Link
            href={'/detail-insights-updates'}
            className=" w-full flex justify-center "
            aria-label="Link lihat semua insights dan update (lihat semua blog)"
          >
            <Button
              variant="secondary"
              className="flex w-full mt-[15px] md:mt-[24px] lg:mt-[32px] md:w-[691px] lg:w-[243px] "
              aria-label="Lihat semua insights dan update (lihat semua blog)"
            >
              View All Insights
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
