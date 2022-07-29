import type { NextPage } from 'next'
import { Fragment } from 'react'
import Meta from '../components/Meta'
import { ErrorHero } from '@root/heros/500'

const ErrorPage: NextPage = () => {
  return (
    <Fragment>
      <Meta title="500 - Internal Error" />
      <main>
        <ErrorHero />
      </main>
    </Fragment>
  )
}

export default ErrorPage
