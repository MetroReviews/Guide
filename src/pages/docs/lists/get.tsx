import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import Margin from '@components/Margin'
import { Heading } from '@components/Heading'
import { CodeBlock } from '@components/CodeBlock'
import Endpoint from '@components/Endpoint'

const NodeSDKDoc = () => {
  return (
    <Fragment>
      <h1>Get List</h1>
      <p>Get information about a Bot List based on its Metro ID</p>

      <Heading
        id="endpoint"
        href="/docs/lists/get#endpoint"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/lists/get#endpoint`}
        element="h5"
      >
        Endpoint
      </Heading>
      <Margin bottom="xs">
        <Endpoint
type="GET"
path="list/:listID"
        />
      </Margin>

      <Heading
        id="example-usage"
        href="/docs/bot-list/get#example-usage"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/lists/get#example-usage`}
        element="h5"
      >
        Basic Examples
      </Heading>
      <Margin bottom="small">
        <div>
          <p>updateList()</p>
          <CodeBlock>{``}</CodeBlock>
        </div>
      </Margin>
      <Margin bottom="small">
        <div>
          <p>getList()</p>
          <CodeBlock>{``}</CodeBlock>
        </div>
      </Margin>
      <Margin bottom="small">
        <div>
          <p>getAllLists()</p>
          <CodeBlock>{``}</CodeBlock>
        </div>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/lists/index.tsx`}
      pageName="Get List"
      pageTitle="Get List"
      metaDescription="Information about our `Get List` API"
      metaTitle="Get List"
    />
  )
}

NodeSDKDoc.Layout = DocLayout

export default NodeSDKDoc
