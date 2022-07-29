import type { NextPage } from 'next'
import { Fragment } from 'react'
import Meta from '../components/Meta'
import { CoffeeHero } from '@root/heros/418'

const ConstructionPage: NextPage = () => {
  return (
    <Fragment>
      <Meta title="I'm a tea pot" />
      <main>
        <CoffeeHero />
      </main>
    </Fragment>
  )
}

export default ConstructionPage
