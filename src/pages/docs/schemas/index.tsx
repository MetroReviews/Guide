import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import { InlineCode } from '@components/InlineCode'
import { CodeBlock } from '@components/CodeBlock'
import { Heading } from '@components/Heading'
import Endpoint from '@components/Endpoint'
import Margin from '@components/Margin'

const NodeSDKDoc = () => {
  return (
    <Fragment>
      <h1>Response Schemas</h1>
      <p>
        Metro Reviews provides a number of <InlineCode>JSON</InlineCode> based response schemas with
        every request that is made to our API. These schemas can include information on a variety of
        things such as:{' '}
        <InlineCode>
          errors, error messages, response messages, response data and response status
        </InlineCode>{' '}
      </p>
      <p>
        Any wrapper, library&apos;s or interactions with our api should follow and respect these
        schemas at all times. This can be achieved be fetching properly fetching and handle our
        responses and their respected data.
      </p>

      <Heading
        id="example"
        href="/docs/schemas#example"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/schemas#example`}
        element="h3"
      >
        Example Schema
      </Heading>
      <Margin bottom="small">
        <div>
          <p>Validation Error</p>
          <CodeBlock>
            {`{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/schemas/index.tsx`}
      pageName="Schemas"
      pageTitle="Schemas"
      metaDescription="Information regarding our API Response Schemas"
      metaTitle="Schemas"
    />
  )
}

NodeSDKDoc.Layout = DocLayout

export default NodeSDKDoc
