"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("w-full max-w-3xl mx-auto space-y-4", className)}>
      {items.map((item, index) => (
        <div 
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800"
        >
          <button
            className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-${index}`}
            id={`faq-question-${index}`}
          >
            <h3 className="font-medium text-gray-900 dark:text-gray-50">
              {item.question}
            </h3>
            <ChevronDown 
              className={cn(
                "h-5 w-5 text-gray-500 transition-transform duration-200",
                openIndex === index ? "rotate-180" : ""
              )} 
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={cn(
              "px-4 overflow-hidden transition-all duration-200 ease-in-out",
              openIndex === index ? "pb-4 pt-2 max-h-96" : "max-h-0"
            )}
          >
            <div className="text-gray-600 dark:text-gray-400">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
