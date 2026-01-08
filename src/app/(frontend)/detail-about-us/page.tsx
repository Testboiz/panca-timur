'use client'

import Image from 'next/image'
import Navbar from '../components/navbar'
import { Button } from '@/components/ui/button'
import {
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  Flame,
  Gift,
  HandHeart,
  MessageSquareQuote,
  MoveRight,
  Phone,
  Smile,
  Trophy,
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog'
import Footer from '../components/footer'

import { motion } from 'motion/react'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'About Us Page | Panca Timur Raya',
// }

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
          alt="Image About Us (Team)"
          src={'/dokumPancaTimurR/team.jpg'}
        />
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">
          Who We Are Behind <br className="hidden xl:block" />
          Every Reliable Project
        </h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">
            Setiap proyek yang andal lahir dari perencanaan matang dan tim profesional. PT Panca
            Timur Raya menghadirkan solusi konstruksi yang aman dan efisien. Kami bekerja
            terstruktur untuk memastikan kepuasan klien
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

      <div className="px-[20px] md:px-[44px] ">
        <h1 className="titleh1 py-[19px] text-[#10385d]">Our Company</h1>
        <div className="flex flex-row">
          <div className="border-l-4 rounded-md p-4 border-[#10385D] block lg:hidden"></div>
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row">
            <motion.p
              initial={{ opacity: 0, y: 160 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="p lg:flex-1 "
            >
              PT. Panca Timur Raya merupakan perusahaan swasta berskala nasional yang berkomitmen
              meningkatkan performa perusahaan melalui penguatan manajemen, pengembangan budaya
              perusahaan, implementasi sistem informasi, penguatan manajemen risiko, dan peningkatan
              kepuasan pelanggan.
            </motion.p>
            <div className="border-l-4 rounded-md p-4  border-[#10385D] hidden lg:block"></div>
            <motion.p
              initial={{ opacity: 0, y: 160 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="p  lg:flex-1"
            >
              PT. Panca Timur Raya berperan aktif dalam pembangunan serta pengembangan infrastruktur
              di Indonesia. Kami senantiasa konsisten memberikan layanan terbaik dalam setiap proyek
              Mechanical, Electrical, dan Plumbing. Dengan perencanaan matang, manajemen konstruksi
              yang efektif, serta penerapan K3, kami memastikan setiap proyek berjalan optimal dan
              aman serta menjamin kepuasan pelanggan secara nyata.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-[50px] gap-[20px] px-[24px]">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-[#EEF3F9] rounded-[20px] lg:w-1/3 px-[20px] py-[12px] md:py-[20px] md:px-[32px]"
        >
          <h1 className="titleh1 text-[#10385d] mb-[20px]">Our Vision</h1>
          <p className="p">
            Menjadi perusahaan kontraktor Mechanical, Electrical, dan Plumbing (MEP) terbaik di
            Indonesia yang unggul dalam mutu pekerjaan, ketepatan waktu, serta keselamatan kerja.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-[#10385D] rounded-[20px] lg:w-2/3 px-[20px] py-[12px] md:py-[20px] md:px-[32px]"
        >
          <h1 className="titleh1 text-[white] mb-[20px]">Our Mission</h1>
          <ul className="list-disc text-[#E6ECF2] p px-[32px]">
            <li>Memenuhi kepuasan pelanggan dengan mutu, harga, dan ketepatan waktu.</li>
            <li>Mewujudkan zero accident dalam setiap pekerjaan.</li>
            <li>Mengembangkan kemampuan SDM, teknologi, dan alat kerja sesuai standar industri.</li>
            <li>Memberikan solusi konstruksi yang efektif, efisien, dan berkualitas.</li>
            <li>
              Membangun hubungan jangka panjang dengan profesionalisme serta etika kerja tinggi.
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="px-[20px] md:px-[44px] mt-[44px]">
        <h1 className="titleh1 text-[#10385d]">Our Culture</h1>
        <p className="p text-[#747775] pb-[12px]">Values That Shape How We Work</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <BadgeCheck className="text-[black]" /> Jujur
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" titleh3 flex flex-row gap-3 items-center"
          >
            <MessageSquareQuote className="text-[black]" /> Komitmen
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <ClipboardCheck className="text-[black]  shrink-0" /> Responsibel
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Flame className="text-[black]" /> Berani
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Trophy className="text-[black]" /> Gigih
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <HandHeart className="text-[black]" /> Empati
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Gift className="text-[black]" /> Berbagi
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Smile className="text-[black]" /> Terbuka
          </motion.p>
        </div>
      </div>

      <div className="px-[20px] md:px-[44px] mt-[44px] mb-[31px] py-4 bg-[#F5F7FA]">
        <h1 className="titleh1 text-[#10385d] pb-4">Legal</h1>
        <div className="flex flex-col lg:flex-row lg:gap-[44px] ">
          <div className="lg:w-[450px] xl:w-[580px]">
            <p className="w-full p text-[#747775] pb-4">
              Verified documents that ensure our compliance and credibility.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p"
            >
              Akta Pendirian No. 26 – 26 Agustus 2022 <br />
              Notaris: Ita Kristiana SH., M.Kn <br />
              Badan Hukum: AHU-AH.01.09-0048116 <br />
              NIB: 2809220056274 <br />
              NPWP: 31.784.026.2-623.000 <br />
              KBLI: 43224, 43291, 43221
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Card className="w-[321px] h-[79px] lg:w-[452px] lg:h-[105px] mb-[20px]">
                <CardHeader className="w-full h-full flex justify-center items-center flex-col">
                  <CardTitle className="p whitespace-nowrap">
                    Perizinan Berusaha Berbasis Resiko
                  </CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="inline-flex items-center gap-2 text-[#0062B0] text-[16px] lg:text-[20px] font-[500] underline "
                        variant="link"
                        aria-label="Lihat dokumen perusahaan Perizinan Berusaha Berbasis Resiko"
                      >
                        View Document <MoveRight />
                      </Button>
                    </DialogTrigger>
                    <DialogTitle></DialogTitle>
                    <DialogContent className=" w-[340px] h-[415px] md:w-[600px] md:h-[936px] lg:w-[579px] lg:h-[763px] ">
                      <Image
                        src="/dokumPancaTimurR/dokumenperusahaan3.jpg"
                        alt="Dokumen Perusahaan Perizinan Berusaha Berbasis Resiko"
                        fill
                        className="object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Card className="w-[321px] h-[79px] lg:w-[452px] lg:h-[105px]  mb-[20px]">
                <CardHeader className="w-full h-full flex justify-center items-center flex-col">
                  <CardTitle className="p">Akta Pendirian Perseoran Terbatas</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="inline-flex items-center gap-2 text-[#0062B0] text-[16px] lg:text-[20px] font-[500] underline "
                        variant="link"
                        aria-label="Lihat dokumen perusahaan Akta Pendirian Perseoran Terbatas"
                      >
                        View Document <MoveRight />
                      </Button>
                    </DialogTrigger>
                    <DialogTitle></DialogTitle>
                    <DialogContent className=" w-[340px] h-[415px] md:w-[600px] md:h-[936px] lg:w-[579px] lg:h-[763px] ">
                      <Image
                        src="/dokumPancaTimurR/aktapendirian.jpg"
                        alt="Dokumen Perusahaan Akta Pendirian Perseoran Terbatas"
                        fill
                        className="object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Card className="w-[321px] h-[79px] lg:w-[452px] lg:h-[105px]">
                <CardHeader className="w-full h-full flex justify-center items-center flex-col">
                  <CardTitle className="p  ">Akta Pengesahan Badan Hukum</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="inline-flex items-center gap-2 text-[#0062B0] text-[16px] lg:text-[20px] font-[500] underline "
                        variant="link"
                        aria-label="Lihat dokumen perusahaan Akta Pengesahan Badan Hukum"
                      >
                        View Document <MoveRight />
                      </Button>
                    </DialogTrigger>
                    <DialogTitle></DialogTitle>
                    <DialogContent className="w-[340px] h-[415px] md:w-[600px] md:h-[936px] lg:w-[579px] lg:h-[763px] ">
                      <Image
                        src="/dokumPancaTimurR/aktapengesahan.jpg"
                        alt="Dokumen Perusahaan Akta Pengesahan Badan Hukum"
                        fill
                        className="object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
