'use client'
import React from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { PayloadSDK } from '@payloadcms/sdk'
import { Config } from '../../../../payload-types'

const Tape: React.FC = () => {
  const sdk = new PayloadSDK<Config>({
    baseURL: '/api',
  })

  const query = useQuery({
    queryKey: ['trusted-by'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'companies',
        limit: 0,
      })
    },
  })
  return (
    <div className="relative w-full overflow-hidden pt-6 bg-white">
      <div className="flex w-max animate-marquee">
        {query.data
          ? [...query.data.docs, ...query.data.docs, ...query.data.docs, ...query.data.docs].map(
              (data, index) => (
                <div
                  key={`${data.id}-${index}`}
                  className="mx-6 h-10 w-auto flex-shrink-0 overflow-hidden"
                >
                  {typeof data.image === 'string' ? (
                    <Image
                      src={data.image}
                      alt={data.image}
                      width={256}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={data?.image?.url ?? '/dokumPancaTimurR/TankiFRP1.jpg'}
                      alt={data.image?.alt ?? 'Gambar Brand'}
                      width={256}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              ),
            )
          : null}
      </div>
    </div>
  )
}

export default Tape
