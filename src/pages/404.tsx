import type { NextPage } from 'next'
import { Fragment } from 'react'
import Meta from '../components/Meta'
import { NotFoundHero } from '@root/heros/404'

const NotFound: NextPage = () => {
  return (
    <Fragment>
      <Meta title="404 - Not Found" />
      <main>
        <NotFoundHero />
      </main>
    </Fragment>
  )
}

export default NotFound
