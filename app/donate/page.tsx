import DonateSection from '@/components/DonateSection'
import ReviewSection from '@/components/ReviewSection'
import FinalSection from '@/components/FinalSection'
import HeroDonate from '@/components/HeroDonate'
import ThankYouSectionDonate from '@/components/ThankYouSectionDonate'

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <HeroDonate />
      <DonateSection />
      <ThankYouSectionDonate />
      <ReviewSection />
      <FinalSection />
    </main>
  )
}

