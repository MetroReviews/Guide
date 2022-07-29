import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import Margin from '@components/Margin'
import { Heading } from '@components/Heading'
import { InlineCode } from '@components/InlineCode'
import Endpoint from '@components/Endpoint'
import { CodeBlock } from '@components/CodeBlock'

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
          id="get_bot"
          href="/docs/getting-started/endpoints#get_bot"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/endpoints#get_bot`}
          element="h4"
        >
          Get Bot
        </Heading>
        <p>Get the specified bot based on its Discord Client Snowflake/Bot ID</p>
        <Endpoint type="GET" path="/bots/:bot_id" auth="no" />
        <div>
          <Heading
            id="get_bot_res"
            href="/docs/getting-started/endpoints#get_bot_res"
            copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/endpoints#get_bot_res`}
            element="h4"
          >
            Example Response
          </Heading>
          <CodeBlock>
            {`{
    "bot_id": "997390943097454684",
    "username": "Migizi",
    "banner": "",
    "description": "Up-to date and informative Indigenous Teachings, History, News, Culture and Religion",
    "long_description": "[LARGE DATA REDACTED FOR SANITY]",
    "website": "https://migizibot.xyz",
    "invite": "https://migizibot.xyz/invite",
    "owner": "510065483693817867",
    "extra_owners": [],
    "support": "https://migizibot.xyz/discord",
    "donate": "",
    "library": "discord.js",
    "nsfw": false,
    "prefix": "/",
    "tags": [
      "dashboard",
      "utility",
      "multipurpose",
      "messages",
      "logging",
      "configuration",
      "slash commands"
    ],
    "review_note": "No note",
    "cross_add": false,
    "state": 2,
    "list_source": "3b50d5e8-d0a0-4e63-aff7-f81068e9ad36",
    "added_at": "2022-07-20T11:02:29.057572+00:00",
    "reviewer": "0",
    "invite_link": ""
}`}
          </CodeBlock>
        </div>
      </Margin>
      <Margin bottom="small">
        <Heading
          id="cross_add"
          href="/docs/getting-started/faqs#cross_add"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/faqs#cross_add`}
          element="h4"
        >
          Post Bot
        </Heading>
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
