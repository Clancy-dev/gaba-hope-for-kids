'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'How can I donate to Gaba Hope For Kids?',
    answer: 'Donate online via our website using credit/debit cards, mobile money, or bank transfer.',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes, your donation is tax-deductible. A receipt will be sent to you for tax purposes.',
  },
  {
    question: 'Can I choose how my donation is used?',
    answer: 'Yes, you can direct your donation to specific programs like education, healthcare, or community support.',
  },
  {
    question: 'Can I donate in memory of someone?',
    answer: 'Yes, you can donate in memory of someone. We\'ll send an acknowledgment to their family.',
  },
  {
    question: 'How do I know my donation is being used appropriately?',
    answer: 'We provide updates on how your donation impacts our programs through reports and emails.',
  },
  {
    question: 'Can I set up a monthly donation?',
    answer: 'Yes, you can set up monthly donations through our secure online donation page.',
  },
  {
    question: 'What happens if I make an error while donating?',
    answer: 'If there\'s an error, please contact us immediately, and we\'ll help resolve the issue.',
  },
  {
    question: 'Do you accept donations of goods or items?',
    answer: 'Yes, we accept items like clothes and educational materials. Please contact us to arrange donations.',
  },
  {
    question: 'Can I donate anonymously?',
    answer: 'Yes, you can choose to donate anonymously on our donation page.',
  },
  {
    question: 'How can I fundraise on behalf of Gaba Hope For Kids?',
    answer: 'Create a personalized fundraising page on our website, and we\'ll support your efforts!',
  },
]

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      className={`  transition-opacity duration-1000 heading-font ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 bg-pink-200 heading-font p-2">
        <h2 className="mb-8 text-center text-4xl font-bold text-orange-900 ">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

