'use client'

import { useState, useEffect } from 'react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsiblePanel,
} from '@/components/ui/collapsible'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'

export type ThinkingProps = {
  content: string
}

/** Returns true when viewport is below the md breakpoint (768px). */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    setIsMobile(mql.matches)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return isMobile
}

function Thinking({ content }: ThinkingProps) {
  const isMobile = useIsMobile()

  return (
    <div className="inline-flex flex-col">
      <Collapsible defaultOpen={!isMobile}>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              className="h-auto gap-1.5 px-1.5 py-0.5 -mx-2"
            />
          }
        >
          <span className="text-sm font-medium text-primary-900">Thinking</span>
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            size={14}
            strokeWidth={1.5}
            className="text-primary-900 transition-transform duration-150 group-data-panel-open:rotate-180"
          />
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <div className="pt-1 mb-3">
            <p className="text-sm text-primary-700 whitespace-pre-wrap">
              {content}
            </p>
          </div>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  )
}

export { Thinking }
