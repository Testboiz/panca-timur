'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'motion/react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import Footer from './footer'

const InsightsUpdates = () => {
  return (
    <div className="flex justify-center mt-6 bg-[#F5F7FA]">
      <div className="flex flex-col items-center py-4 lg:py-6">
        <h1 className="titleh1 text-[#10385d] mb-8">Insights & Updates</h1>
        <div className=" ">
          <Dialog>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: 'spring' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="w-[332px] md:w-[699px] md:h-[236px] lg:w-[945px] lg:h-[306px] overflow-hidden flex flex-col md:flex-row md:gap-[16px] lg:gap-[32px] md:mb-[20px] lg:mb-[44px]">
                <div className="relative w-full h-[280px] md:w-[280px] md:h-[236px] lg:w-[400px] lg:h-[306px] flex-shrink-0">
                  <Image
                    src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                    alt="Image Service Mechanical & Plumbing"
                    fill
                    className="object-cover p-4"
                  />
                </div>

                <div className="flex flex-col flex-1 -mt-8 md:mt-0 pb-3 px-[16px]">
                  <CardHeader className="w-full md:w-[331px] lg:w-[457px] pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardTitle>
                  </CardHeader>

                  <CardContent className="w-full md:w-[331px] lg:w-[457px] mb-[16px]">
                    <p className="h4blog">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor.
                    </p>
                  </CardContent>

                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="justify-start text-[#0062B0] underline"
                      aria-label="Baca lebih lanjut blog (Read More)"
                    >
                      Read More
                    </Button>
                  </DialogTrigger>
                </div>
              </Card>
            </motion.div>
            <DialogContent className=" w-screen h-screen max-w-none max-h-none flex flex-col p-0 overflow-hidden">
              <div className="flex-1 overflow-y-auto">
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

                  <p className="alternative">DD-MM-YYYY</p>
                  <DialogDescription className="p text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </DialogDescription>
                </DialogHeader>
                <Footer />
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.7, type: 'spring' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="w-[332px] md:w-[699px] md:h-[236px] lg:w-[945px] lg:h-[306px] overflow-hidden flex flex-col md:flex-row md:gap-[16px] lg:gap-[32px] ">
                <div className="relative w-full h-[280px] md:w-[280px] md:h-[236px] lg:w-[400px] lg:h-[306px] flex-shrink-0">
                  <Image
                    src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                    alt="Image Service Mechanical & Plumbing"
                    fill
                    className="object-cover p-4"
                  />
                </div>

                <div className="flex flex-col flex-1 -mt-8 md:mt-0 pb-3 px-[16px]">
                  <CardHeader className="w-full md:w-[331px] lg:w-[457px] pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
                    <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardTitle>
                  </CardHeader>

                  <CardContent className="w-full md:w-[331px] lg:w-[457px] mb-[16px]">
                    <p className="h4blog">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor.
                    </p>
                  </CardContent>

                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="justify-start text-[#0062B0] underline"
                      aria-label="Baca lebih lanjut blog (Read More)"
                    >
                      Read More
                    </Button>
                  </DialogTrigger>
                </div>
              </Card>
            </motion.div>
            <DialogContent className="w-screen h-screen max-w-none max-h-none flex flex-col p-0 overflow-hidden">
              <div className="flex-1 overflow-y-auto">
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

                  <p className="alternative">DD-MM-YYYY</p>
                  <DialogDescription className="p text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </DialogDescription>
                </DialogHeader>
                <Footer />
              </div>
            </DialogContent>
          </Dialog>
        </div>
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
  )
}

export default InsightsUpdates
