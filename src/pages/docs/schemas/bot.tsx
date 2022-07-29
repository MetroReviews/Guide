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
      <h1>Bot Schema</h1>
      <p>Basic information, examples and common use cases for our bot related schema(s).</p>
      <Heading
        id="schema"
        href="/docs/schemas/bot#schema"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/schemas/bot#schema`}
        element="h4"
      >
        JSON Schema
      </Heading>
      <Margin bottom="small">
        <div>
          <CodeBlock>
            {`{
   "bot_id": "string", // The bots Discord Snowflake/Bot ID
   "username": "string", // The bots Discord Username
   "banner": "string", // Link to the bots banner image
   "description": "string", // Short description for the bot
   "long_description": "string", // Long description for the bot
   "website": "string", // Link to the bots website
   "invite": "string", // Link to invite the bot
   "owner": "string", // Bot owners Discord Snowflake/User ID
   "extra_owners": [ // Array of the extra bot owners
       "string"
    ],
    "support": "string", // The bots support server link
    "donate": "string", // The bots donation link (if provided)
    "library": "string", // Coding language the bot was made with
    "nsfw": "boolean", // Does the bot include NSFW Features
    "prefix": "string", // The bots base command prefix
    "tags": [ // Array of the bots tags on the list
       "string"
    ],
    "review_note": "string", // Note for reviewers/staff
    "cross_add": "boolean" // Should be false by default
}`}
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/schemas/bot.tsx`}
      pageName="Bot Schema"
      pageTitle="Bot Schema"
      metaDescription="Basic information, examples and common use cases for our bot related schema(s)"
      metaTitle="Bot Schema"
    />
  )
}

NodeSDKDoc.Layout = DocLayout

export default NodeSDKDoc
