import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import Image from 'next/image'

const payload = await getPayload({ config })

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blog = await payload.findByID({
    collection: 'blogs',
    id: id,
    disableErrors: true,
  })
  if (!blog) {
    notFound()
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="relative w-full h-[111px] md:h-[222px] lg:h-[340px] flex-shrink-0">
        {typeof blog.featuredImg === 'string' ? (
          <Image src={blog.featuredImg} alt={blog.featuredImg} fill className="object-cover " />
        ) : (
          <Image
            src={blog?.featuredImg?.url ?? '/dokumPancaTimurR/mechanicalplumbing3.jpg'}
            alt={blog.featuredImg?.alt ?? 'Gambar Sampul'}
            fill
            className="object-cover "
          />
        )}
      </div>
      <div className="text-left gap-[20px] p-[20px] md:p-[40px] lg:p-[60px]">
        <Breadcrumb className="py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/detail-insights-updates">Insights & Updates</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{blog.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="titleh1 text-[#0062B0] ">{blog.title}</h1>
        <p className="alternative py-5">{new Date(blog.updatedAt).toLocaleString('id-ID')}</p>
        <RichText data={blog.content} className="" />
      </div>
    </div>
  )
}
