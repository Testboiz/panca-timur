'use client'

import Image from 'next/image'
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
  Smile,
  Trophy,
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog'

import { motion } from 'motion/react'
import { BookAConsultationButton } from './book-a-consultation-button'
import { AboutUsPage } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

const AboutUs = ({ config }: { config: AboutUsPage }) => {
  return (
    <>
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        {typeof config.about_us_hero === 'string' ? (
          <Image
            src={config.about_us_hero}
            alt={config.about_us_hero}
            fill
            priority
            loading="eager"
            className="object-cover"
          />
        ) : (
          <Image
            src={config?.about_us_hero?.url ?? '/dokumPancaTimurR/team.jpg'}
            alt={config.about_us_hero?.alt ?? 'Gambar Sampul'}
            fill
            priority
            loading="eager"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">{config.about_us_hero_heading}</h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">{config.about_us_hero_description}</p>
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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="p lg:flex-1 "
            >
              {config.about_us_description_left}
            </motion.p>
            <div className="border-l-4 rounded-md p-4  border-[#10385D] hidden lg:block"></div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="p  lg:flex-1"
            >
              {config.about_us_description_right}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-[50px] gap-[20px] px-[24px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-[#EEF3F9] rounded-[20px] lg:w-1/3 px-[20px] py-[12px] md:py-[20px] md:px-[32px]"
        >
          <h1 className="titleh1 text-[#10385d] mb-[20px]">{config.about_us_vision_heading}</h1>
          <p className="p">{config.about_us_vision_description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-[#10385D] rounded-[20px] lg:w-2/3 px-[20px] py-[12px] md:py-[20px] md:px-[32px]"
        >
          <h1 className="titleh1 text-[white] mb-[20px]">{config.about_us_mission_heading}</h1>
          {config.about_us_mission_description && (
            <RichText
              className="list-disc text-[#E6ECF2] p px-[32px] [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6"
              data={config.about_us_mission_description}
            />
          )}
        </motion.div>
      </div>
      <div className="px-[20px] md:px-[44px] mt-[44px]">
        <h1 className="titleh1 text-[#10385d]">{config.about_us_our_culture_heading}</h1>
        <p className="p text-[#747775] pb-[12px]">{config.about_us_our_culture_description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <BadgeCheck className="text-[black]" /> Jujur
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" titleh3 flex flex-row gap-3 items-center"
          >
            <MessageSquareQuote className="text-[black]" /> Komitmen
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <ClipboardCheck className="text-[black]  shrink-0" /> Responsibel
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Flame className="text-[black]" /> Berani
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Trophy className="text-[black]" /> Gigih
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <HandHeart className="text-[black]" /> Empati
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Gift className="text-[black]" /> Berbagi
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="titleh3 flex flex-row gap-3 items-center"
          >
            <Smile className="text-[black]" /> Terbuka
          </motion.p>
        </div>
      </div>
      <div className="px-[20px] md:px-[44px] mt-[44px] mb-[31px] py-4 bg-[#F5F7FA]">
        <h1 className="titleh1 text-[#10385d] pb-4">{config.about_us_legal_heading}</h1>
        <div className="flex flex-col lg:flex-row lg:gap-[44px]">
          <div className="lg:w-[450px] xl:w-[580px]">
            <p className="w-full p text-[#747775] pb-4">{config.about_us_legal_subtitle}</p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p"
            >
              {config.about_us_legal_descriptions && (
                <RichText data={config.about_us_legal_descriptions} />
              )}
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-4 lg:mt-0 justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
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
                    <DialogContent className=" w-[340px] h-[415px] md:w-[400px] md:h-[536px] xl:w-[439px] xl:h-[623px] ">
                      {typeof config.about_us_legal_document_1 === 'string' ? (
                        <Image
                          src={config.about_us_legal_document_1}
                          alt={config.about_us_legal_document_1}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <Image
                          src={
                            config?.about_us_legal_document_1?.url ??
                            '/dokumPancaTimurR/dokumenperusahaan3.jpg'
                          }
                          alt={
                            config.about_us_legal_document_1?.alt ??
                            'Dokumen Perusahaan Perizinan Berusaha Berbasis Resiko'
                          }
                          fill
                          className="object-contain"
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
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
                    <DialogContent className=" w-[340px] h-[415px] md:w-[400px] md:h-[536px] xl:w-[439px] xl:h-[623px] ">
                      {typeof config.about_us_legal_document_2 === 'string' ? (
                        <Image
                          src={config.about_us_legal_document_2}
                          alt={config.about_us_legal_document_2}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <Image
                          src={
                            config?.about_us_legal_document_2?.url ??
                            '/dokumPancaTimurR/aktapendirian.jpg'
                          }
                          alt={
                            config.about_us_legal_document_2?.alt ??
                            'Dokumen Perusahaan Akta Pendirian Perseoran Terbatas'
                          }
                          fill
                          className="object-contain"
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
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
                    <DialogContent className=" w-[340px] h-[415px] md:w-[400px] md:h-[536px] xl:w-[439px] xl:h-[623px] ">
                      {typeof config.about_us_legal_document_3 === 'string' ? (
                        <Image
                          src={config.about_us_legal_document_3}
                          alt={config.about_us_legal_document_3}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <Image
                          src={
                            config?.about_us_legal_document_3?.url ??
                            '/dokumPancaTimurR/aktapengesahan.jpg'
                          }
                          alt={
                            config.about_us_legal_document_3?.alt ??
                            'Dokumen Perusahaan Akta Pengesahan Badan Hukum'
                          }
                          fill
                          className="object-contain"
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
