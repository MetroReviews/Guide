import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import { InlineCode } from '@components/InlineCode'
import { StyledList } from '@components/StyledList'
import Margin from '@components/Margin'
import { Heading } from '@components/Heading'

const NodeSDKDoc = () => {
  return (
    <Fragment>
      <h1>Bot List</h1>
      <p>
        Information and Common Use Cases for all our Bot List Specific Endpoints based on one of our
        many available <InlineCode>Metro List ID&apos;s</InlineCode>
        if you do not know the List ID you can find it at{' '}
        <InlineCode>https://catnip.metrobots.xyz/lists</InlineCode>
      </p>
      <Heading
        id="features"
        href="/docs/lists#features"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/lists#features`}
        element="h5"
      >
        Key Features
      </Heading>
      <Margin bottom="xs">
        <StyledList
          items={[
            <div key={1}>Fetch and Update Bot List Info</div>,
            <div key={3}>{'Fetch and Update Bot Info'}</div>,
            <div key={4}>Post Bots with or without Cross Add Support</div>,
          ]}
        />
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/lists/index.tsx`}
      pageName="List"
      pageTitle="List"
      metaDescription="Information about our Bot List based Endpoints"
      metaTitle="List"
    />
  )
}

NodeSDKDoc.Layout = DocLayout

export default NodeSDKDoc
