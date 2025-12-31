import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <div className="mt-6 flex flex-col bg-[#10385D] mx-6 rounded-[8px] justify-center items-center gap-[32px] lg:gap-[32px] py-[51px] px-[20px] md:py-[40px] md:px-[44px] lg:py-[90px] lg:px-[100px]">
      <h1 className="text-[white] titleh1">About Us</h1>
      <p className="p text-[white]">
        PT. Panca Timur Raya merupakan perusahaan swasta berskala nasional yang berkomitmen
        meningkatkan performa perusahaan melalui penguatan manajemen, pengembangan budaya
        perusahaan, implementasi sistem informasi, penguatan manajemen risiko, dan peningkatan
        kepuasan pelanggan.
      </p>
      <Link href={'/detailAboutUs'} className="w-full flex justify-center">
        <Button variant="secondary" className=" w-full lg:w-[243px]">
          About Our Company
          <ArrowRight />
        </Button>
      </Link>
    </div>
  )
}

export default AboutUs
