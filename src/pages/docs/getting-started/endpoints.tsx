import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import Margin from '@components/Margin'
import { Hyperlink } from '@components/Hyperlink'
import { Heading } from '@components/Heading'
import { InlineCode } from '@components/InlineCode'
import Endpoint from '@components/Endpoint'

const GettingStartedDoc = () => {
  return (
    <Fragment>
      <h1>Endpoints</h1>
      <p>List of our available endpoints with detailed descriptions.</p>
      <p>
        <strong>NOTE:</strong> Any endpoints listed below marked with a <InlineCode>🔒</InlineCode>{' '}
        require a valid authorization header.
      </p>
      <Margin bottom="small">
        <Heading
          id="add_bot_list"
          href="/docs/getting-started/faqs#add_bot_list"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/faqs#add_bot_list`}
          element="h4"
        >
          Get Bot
        </Heading>
        <Endpoint
type="GET"
path="/bots/:bot_id"
auth="yes"
        />
      </Margin>
      <Margin bottom="small">
        <Heading
          id="cross_add"
          href="/docs/getting-started/faqs#cross_add"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/faqs#cross_add`}
          element="h5"
        ></Heading>
        <p></p>
        <p></p>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/getting-started/faqs.tsx`}
      pageName="Frequently Asked Questions"
      pageTitle="Frequently Asked Questions"
      metaDescription="Answers to some of our Frequently Asked Questions."
      metaTitle="Frequently Asked Questions"
    />
  )
}

GettingStartedDoc.Layout = DocLayout

export default GettingStartedDoc
