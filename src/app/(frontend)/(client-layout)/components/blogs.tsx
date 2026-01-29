'use client'

import { PayloadSDK } from '@payloadcms/sdk'
import { Config } from '../../../../payload-types'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'
import { RefreshCcw } from 'lucide-react'

export const Blogs = ({ isForLandingPage = false }: { isForLandingPage?: boolean }) => {
  const [visibleCount, setVisibleCount] = useState(4)
  const increment = 2

  const sdk = new PayloadSDK<Config>({
    baseURL: '/api',
  })
  let limit = 0
  if (isForLandingPage) {
    limit = 6
  }
  const query = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'blogs',
        limit: limit,
      })
    },
  })
  return (
    <>
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
      {query.error && (
        <Card className="w-[332px] md:w-[699px] md:h-[236px] lg:w-[945px] lg:h-[306px] flex flex-col mb-[20px] lg:mb-[44px] ">
          <CardHeader className="w-full my-auto ">
            <CardTitle className="text-center">Belum ada Blog</CardTitle>
          </CardHeader>
          <CardContent className="w-full text-center my-auto ">
            <div className="p">Stay Tuned untuk Insight Updates yang akan datang!</div>
          </CardContent>
          <CardFooter>
            <div className="invisible" aria-hidden="true">
              Spacer
            </div>
          </CardFooter>
        </Card>
      )}
      {query.data && query.data.docs.length === 0 && (
        <Card className="w-[332px] md:w-[699px] md:h-[236px] lg:w-[945px] lg:h-[306px] overflow-hidden flex flex-col md:gap-[16px] lg:gap-[32px] md:mb-[20px] lg:mb-[44px]">
          <CardHeader className="w-full pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
            <CardTitle className="text-center">Belum ada Blog</CardTitle>
          </CardHeader>
          <CardContent className="w-full text-center  mb-[16px]">
            <div className="p">Stay Tuned untuk Insight Updates yang akan datang!</div>
          </CardContent>
        </Card>
      )}
      {query.data &&
        query.data.docs.slice(0, visibleCount).map((data) => {
          return (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="w-[332px] md:w-[699px] md:h-[236px] lg:w-[945px] lg:h-[306px] overflow-hidden flex flex-col md:flex-row gap-[16px] lg:gap-[32px] mb-[20px] lg:mb-[44px]">
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
                      src={data?.featuredImg?.url ?? '/dokumPancaTimurR/mechanicalplumbing3.jpg'}
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
                  <Button
                    variant="link"
                    className="justify-start text-[#0062B0] underline"
                    aria-label="Baca lebih lanjut blog (Read More)"
                  >
                    <Link href={`/detail-insights-updates/${data.id}`}>Read More</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )
        })}

      {query.data && visibleCount < query.data.docs.length && (
        <div className="w-full flex justify-center">
          <Button
            variant="secondary"
            className="w-full lg:w-[243px]"
            onClick={() => setVisibleCount((prev) => prev + increment)}
            aria-label="Muat blog lebih banyak"
          >
            Load More Blogs
            <RefreshCcw />
          </Button>
        </div>
      )}
    </>
  )
}
