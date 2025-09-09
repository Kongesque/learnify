import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'> Popular Companions </h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={30}
          color="#ffda6e"
        />
        <CompanionCard 
          id="789"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard 
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Language Arts"
          subject="English Literature"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className='home-section'>
        <CompanionList 
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page