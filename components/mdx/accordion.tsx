import React, { useState } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg mb-4">
      <button
        className="w-full px-4 py-2 text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="float-right">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="px-4 py-2 border-t">{children}</div>}
    </div>
  )
}
