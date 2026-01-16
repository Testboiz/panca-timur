'use client'
import { useQuery } from '@tanstack/react-query'
import { PayloadSDK } from '@payloadcms/sdk'
import { Config } from '../../../../payload-types'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { BookAConsultationButton } from './book-a-consultation-button'

export const ServicesCarousel = () => {
  const sdk = new PayloadSDK<Config>({
    baseURL: '/api',
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

  return (
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
                            data?.featuredImg?.url ?? '/dokumPancaTimurR/mechanicalplumbing1.jpg'
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
                          <BookAConsultationButton />
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
  )
}
