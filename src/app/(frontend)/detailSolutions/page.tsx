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
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'

export default function AboutUsPage() {
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
            <Button onClick={handleBookaConsultation} className="w-full lg:w-[243px]">
              <Phone />
              Book a Consultation
            </Button>

            <Button asChild variant="secondary" className="w-full lg:w-[243px]">
              <Link href={'/detailPortfolio'} className="flex items-center justify-center gap-2">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px] justify-items-center ">
          <Card className="w-[294px]  xl:w-[363px] overflow-hidden">
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
                Layanan desain, instalasi, serta perawatan sistem mekanikal dan perpipaan untuk
                bangunan dan fasilitas industri.
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

          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
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
                Desain, instalasi, dan maintenance sistem HVAC untuk berbagai kebutuhan bangunan
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
                      Berfokus pada desain, instalasi, perbaikan, perawatan, dan troubleshooting
                      HVAC, seperti:
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

          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
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
        </div>
      </div>

      <div className="my-[35px] px-[20px] md:px-[44px] md:pb-[64px] lg:pb-[80px]">
        <h1 className="titleh1 text-[#10385D] mb-[12px]">Products</h1>
        <p className="p text-[#747775] mb-[21px] md:mb-[28px]">
          Equipment and systems we work with to support reliable projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[41px] justify-items-center">
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
              <CardTitle className="pb-3">Centrifugal Fan</CardTitle>
            </CardHeader>
          </Card>
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
              <CardTitle className=" pb-3">Grease Trap</CardTitle>
            </CardHeader>
          </Card>
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
              <CardTitle className=" pb-3">Gutter (Talang Air)</CardTitle>
            </CardHeader>
          </Card>
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
              <CardTitle className="pb-3">Ducting Fiber</CardTitle>
            </CardHeader>
          </Card>
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
              <CardTitle className=" pb-3">Axial Fan</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
            <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
              <Image
                src="/dokumPancaTimurR/cabinetFanAHU1.jpg"
                alt="Image Service Electrical"
                className="object-cover w-full px-4 pt-4"
                fill
              />
            </div>
            <CardHeader className="w-full text-center">
              <CardTitle className=" pb-3">Cabinet Fan / AHU</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
            <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
              <Image
                src="/dokumPancaTimurR/tankiSTPIPAL1.jpg"
                alt="Image Service Electrical"
                className="object-cover w-full px-4 pt-4"
                fill
              />
            </div>
            <CardHeader className="w-full text-center">
              <CardTitle className=" pb-3">Tanki STP / IPAL</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
            <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
              <Image
                src="/dokumPancaTimurR/aerialMarkerBall2.jpg"
                alt="Image Service Electrical"
                className="object-cover w-full px-4 pt-4"
                fill
              />
            </div>
            <CardHeader className="w-full text-center">
              <CardTitle className=" pb-3">Aerial Marker Ball</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
            <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
              <Image
                src="/dokumPancaTimurR/supplyAirGrill2.jpg"
                alt="Image Service Electrical"
                className="object-cover w-full px-4 pt-4"
                fill
              />
            </div>
            <CardHeader className="w-full text-center">
              <CardTitle className=" pb-3">Supply Air Gill (SAG)</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
            <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
              <Image
                src="/dokumPancaTimurR/diffuser.jpg"
                alt="Image Service Electrical"
                className="object-cover w-full px-4 pt-4"
                fill
              />
            </div>
            <CardHeader className="w-full text-center">
              <CardTitle className=" pb-3">Diffuser</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[294px] xl:w-[363px] overflow-hidden">
            <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
              <Image
                src="/dokumPancaTimurR/jetNozzel.jpg"
                alt="Image Service Electrical"
                className="object-cover w-full px-4 pt-4"
                fill
              />
            </div>
            <CardHeader className="w-full text-center">
              <CardTitle className=" pb-3">Jet Nozzel</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  )
}
