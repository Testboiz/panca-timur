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

const InsightsUpdates = () => {
  return (
    <div className="flex justify-center mt-6 bg-[#F5F7FA]">
      <div className="flex flex-col items-center py-4 lg:py-6">
        <h1 className="titleh1 text-[#10385d] mb-8">Insights & Updates</h1>
        <div className=" ">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="justify-start text-[#0062B0] underline">
                    Read More
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-screen h-screen max-w-none max-h-none flex flex-col p-0 overflow-hidden">
                  <div className="flex-1 overflow-y-auto">
                    <div className="relative w-full h-[111px] md:h-[222px] lg:h-[340px] flex-shrink-0">
                      <Image
                        src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                        alt="Gambar Panca Timur Raya"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <DialogHeader className="text-left gap-[20px] p-[20px] md:p-[40px] lg:p-[60px]">
                      <DialogTitle className="titleh1 text-[#0062B0]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </DialogTitle>

                      <p className="alternative">DD-MM-YYYY</p>
                      <DialogDescription className="p text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </DialogDescription>
                    </DialogHeader>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
          <div className="hidden md:block">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="justify-start text-[#0062B0] underline">
                      Read More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-screen h-screen max-w-none max-h-none flex flex-col p-0 overflow-hidden">
                    <div className="flex-1 overflow-y-auto">
                      <div className="relative w-full h-[111px] md:h-[222px] lg:h-[340px] flex-shrink-0">
                        <Image
                          src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                          alt="Gambar Panca Timur Raya"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <DialogHeader className="text-left gap-[20px] p-[20px] md:p-[40px] lg:p-[60px]">
                        <DialogTitle className="titleh1 text-[#0062B0]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </DialogTitle>

                        <p className="alternative">DD-MM-YYYY</p>
                        <DialogDescription className="p text-left">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </DialogDescription>
                      </DialogHeader>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </div>
        <Link href={'/detailInsightsUpdates'} className=" w-full flex justify-center ">
          <Button
            variant="secondary"
            className="flex w-full mt-[15px] md:mt-[24px] lg:mt-[32px] md:w-[691px] lg:w-[243px] "
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
