import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { StyledList } from '@components/StyledList';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { CodeBlock } from "@components/CodeBlock"

const NodeSDKDoc = () => {

  return (
    <Fragment>
      <h1>
        Introduction
      </h1>
      <p>
        
        <InlineCode>
          metro-sdk
        </InlineCode>
        {' is a Type Friendly API Wrapper made for Interacting with our API in a variety of ways. '}
      </p>
      <Heading
        id="features"
        href="/docs/node-sdk#features"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/node-sdk#features`}
        element='h5'
      >
        Installation
      </Heading>
      <Margin bottom="xs">
        <InlineCode>
          npm install COMING SOON
        </InlineCode>
      </Margin>
      <Heading
        id="features"
        href="/docs/node-sdk#features"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/node-sdk#features`}
        element='h5'
      >
        Key features
      </Heading>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={1}>
                Fetch and Update Bot List Info
              </div>
            ),
            (
              <div key={3}>
                {'Fetch and Update Bot Info'}
              </div>
            ),
            (
              <div key={4}>
                Post Bots with or without Cross Add Support
              </div>
            )
          ]}
        />
      </Margin>
      <p>
        Here's an example:
      </p>
      <Margin bottom="small">
        <div>
          <CodeBlock>
            {
`const MetroAPI = require("metro-sdk")
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
`
              }
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/node-sdk/index.tsx`}
      pageName="Introduction"
      pageTitle="Introduction"
      metaDescription="Our Type Friendly Node SDK"
      metaTitle="Node SDK"
    />
  )
};

NodeSDKDoc.Layout = DocLayout;

export default NodeSDKDoc;