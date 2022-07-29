import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import { InlineCode } from '@components/InlineCode'
import { StyledList } from '@components/StyledList'
import Margin from '@components/Margin'
import { Heading } from '@components/Heading'
import { CodeBlock } from '@components/CodeBlock'

const NodeSDKDoc = () => {
  return (
    <Fragment>
      <h1>List Actions</h1>
      <p>
        <InlineCode>metro-sdk</InlineCode>
        {
          ' allows you to interact with your Bot List in a variety of ways which will be explained below. '
        }
      </p>
      <Heading
        id="methods"
        href="/docs/node-sdk#methods"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/node-sdk#methods`}
        element="h5"
      >
        Key Methods
      </Heading>
      <Margin bottom="xs">
        <StyledList
          items={[
            <div key={1}>
              <InlineCode>updateList()</InlineCode>
            </div>,
            <div key={2}>
              <InlineCode>getList()</InlineCode>
            </div>,
            <div key={3}>
              <InlineCode>getAllLists()</InlineCode>
            </div>,
          ]}
        />
      </Margin>
      <p>Here&apos;s some examples:</p>
      <Margin bottom="small">
        <div>
          <p>updateList()</p>
          <CodeBlock>
            {`const MetroAPI = require("metro-sdk")
const Metro = new MetroAPI.MetroClient('Your Secret Key')
              
await Metro.updateList({
    name: listInfo.name,
    description: listInfo.description,
    domain: listInfo.domain,
    claim_bot_api: listInfo.claim_bot_api,
    unclaim_bot_api: listInfo.unclaim_bot_api,
    approve_bot_api: listInfo.approve_bot_api,
    deny_bot_api: listInfo.deny_bot_api,
    reset_secret_key: false,
    icon: listInfo.icon
})
`}
          </CodeBlock>
        </div>
      </Margin>
      <Margin bottom="small">
        <div>
          <p>getList()</p>
          <CodeBlock>
            {`const MetroAPI = require("metro-sdk")
const Metro = new MetroAPI.MetroClient('Your Secret Key')
                          
await Metro.getList(':listID')
`}
          </CodeBlock>
        </div>
      </Margin>
      <Margin bottom="small">
        <div>
          <p>getAllLists()</p>
          <CodeBlock>
            {`const MetroAPI = require("metro-sdk")
const Metro = new MetroAPI.MetroClient('Your Secret Key')
                            
await Metro.getAllLists()
`}
          </CodeBlock>
        </div>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/node-sdk/lists.tsx`}
      pageName="List Actions"
      pageTitle="List Actions"
      metaDescription="Our Type Friendly Node SDK"
      metaTitle="Node SDK"
    />
  )
}

NodeSDKDoc.Layout = DocLayout

export default NodeSDKDoc
