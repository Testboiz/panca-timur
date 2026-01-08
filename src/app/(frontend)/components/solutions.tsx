'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const Solutions = () => {
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
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
            <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/3 ">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
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
                        <Button className="w-full " variant="secondary">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="w-[350px] h-[760px] md:w-[720px] md:h-[405px] lg:w-[1100px] lg:h-[550px] p-0 flex flex-col md:flex-row">
                      <div
                        className="relative w-full h-[557px] md:flex-1 md:h-full overflow-hidden     rounded-tl-[8px] rounded-tr-[8px]
                    md:rounded-tl-[8px] md:rounded-bl-[8px]
                    md:rounded-tr-none md:rounded-br-none"
                      >
                        <Image
                          src="/dokumPancaTimurR/mechanicalplumbing3.jpg"
                          alt="Gambar Panca Timur Raya"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-[350px] md:w-[374px] lg:w-[626px] h-full p-[20px] lg:p-[40px] flex flex-col gap-5">
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
                        <Button onClick={handleBookaConsultation} className="w-full lg:w-[243px]">
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
                transition={{ duration: 1.5 }}
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
                        <Button className="w-full" variant="secondary">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="w-[350px] h-[760px] md:w-[720px] md:h-[405px] lg:w-[1100px] lg:h-[550px] p-0 flex flex-col md:flex-row">
                      <div
                        className="relative w-full h-[557px] md:flex-1 md:h-full overflow-hidden     rounded-tl-[8px] rounded-tr-[8px]
                md:rounded-tl-[8px] md:rounded-bl-[8px]
                md:rounded-tr-none md:rounded-br-none"
                      >
                        <Image
                          src="/dokumPancaTimurR/hvac5.jpg"
                          alt="Gambar Panca Timur Raya"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-[350px] md:w-[374px] lg:w-[626px] h-full p-[20px] lg:p-[40px] flex flex-col gap-5">
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
                        <Button onClick={handleBookaConsultation} className="w-full lg:w-[243px]">
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
                transition={{ duration: 2 }}
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
                        <Button className="w-full " variant="secondary">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="w-[350px] h-[760px] md:w-[720px] md:h-[405px] lg:w-[1100px] lg:h-[550px] p-0 flex flex-col md:flex-row">
                      <div
                        className="relative w-full h-[557px] md:flex-1 md:h-full overflow-hidden     rounded-tl-[8px] rounded-tr-[8px]
                md:rounded-tl-[8px] md:rounded-bl-[8px]
                md:rounded-tr-none md:rounded-br-none"
                      >
                        <Image
                          src="/dokumPancaTimurR/electrical6.jpg"
                          alt="Gambar Panca Timur Raya"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-[350px] md:w-[374px] lg:w-[626px] h-full p-[20px] lg:p-[40px] flex flex-col gap-5">
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
                        <Button onClick={handleBookaConsultation} className="w-full lg:w-[243px]">
                          <Phone /> Book a Consultation
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
              </motion.div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="left-2 md:left-4 lg:hidden" />
          <CarouselNext className="right-2 md:right-4 lg:hidden" />
        </Carousel>

        <h2 className="titleh2 text-[#10385D] mt-12 lg:mb-[24px]">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[41px] justify-items-center">
          <motion.div
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <Card className="w-[294px] xl:w-[363px] overflow-hidden">
              <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                <Image
                  src="/dokumPancaTimurR/TankiFRP1.jpg"
                  alt="Image Service Electrical"
                  className="object-cover w-full px-4 pt-4"
                  fill
                />
              </div>
              <CardHeader className="w-full text-center">
                <CardTitle className="whitespace-nowrap  pb-3">Tanki FRP</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="w-[294px] xl:w-[363px] overflow-hidden">
              <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                <Image
                  src="/dokumPancaTimurR/centrifugalFan1.jpg"
                  alt="Image Service Electrical"
                  className="object-cover w-full px-4 pt-4"
                  fill
                />
              </div>
              <CardHeader className="w-full  text-center ">
                <CardTitle className="whitespace-nowrap pb-3">Centrifugal Fan</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="w-[294px] xl:w-[363px] overflow-hidden">
              <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                <Image
                  src="/dokumPancaTimurR/greaseTrap.jpg"
                  alt="Image Service Electrical"
                  className="object-cover w-full px-4 pt-4"
                  fill
                />
              </div>
              <CardHeader className="w-full text-center">
                <CardTitle className="whitespace-nowrap pb-3">Grease Trap</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="w-[294px] xl:w-[363px] overflow-hidden">
              <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                <Image
                  src="/dokumPancaTimurR/gutterTalangAir.jpg"
                  alt="Image Service Electrical"
                  className="object-cover w-full px-4 pt-4"
                  fill
                />
              </div>
              <CardHeader className="w-full text-center">
                <CardTitle className="whitespace-nowrap pb-3">Gutter (Talang Air)</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="w-[294px] xl:w-[363px] overflow-hidden">
              <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                <Image
                  src="/dokumPancaTimurR/ductingFiber.jpg"
                  alt="Image Service Electrical"
                  className="object-cover w-full px-4 pt-4"
                  fill
                />
              </div>
              <CardHeader className="w-full text-center">
                <CardTitle className="whitespace-nowrap pb-3">Ducting Fiber</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="w-[294px] xl:w-[363px] overflow-hidden">
              <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                <Image
                  src="/dokumPancaTimurR/axialFan.jpg"
                  alt="Image Service Electrical"
                  className="object-cover w-full px-4 pt-4"
                  fill
                />
              </div>
              <CardHeader className="w-full text-center">
                <CardTitle className="whitespace-nowrap pb-3">Axial Fan</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        </div>

        <div className="flex w-full justify-center p-4 ">
          <Link href={'/detail-solutions'} className=" w-full flex justify-center ">
            <Button variant="secondary" className="flex w-full mt-4 md:w-[691px] lg:w-[243px] ">
              View All Solutions
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Solutions
