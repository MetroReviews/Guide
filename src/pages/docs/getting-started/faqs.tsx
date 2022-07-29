import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import Margin from '@components/Margin'
import { Hyperlink } from '@components/Hyperlink'
import { Heading } from '@components/Heading'
import { InlineCode } from '@components/InlineCode'

const GettingStartedDoc = () => {
  return (
    <Fragment>
      <h1>FAQ&apos;s</h1>
      <p>Answers to some of our most Frequently Asked Questions.</p>
      <Margin bottom="small">
        <Heading
          id="add_bot_list"
          href="/docs/getting-started/faqs#add_bot_list"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/faqs#add_bot_list`}
          element="h5"
        >
          How do i add my Bot List?
        </Heading>
        <p>
          Any Bot List who is interested in enrolling in our services can do so through the
          integrated Bot List Application on our main website. Before applying please make sure that
          your bot list comply&apos;s with rules and requirements listed here:{' '}
          <Hyperlink
href="https://metrobots.xyz/lists/rules/reqs"
newTab
          >
            https://metrobots.xyz/lists/rules/reqs
          </Hyperlink>{' '}
          and here:{' '}
          <Hyperlink
href="https://metrobots.xyz/lists/rules/eq"
newTab
          >
            https://metrobots.xyz/lists/rules/eq
          </Hyperlink>
        </p>
      </Margin>
      <Margin bottom="small">
        <Heading
          id="cross_add"
          href="/docs/getting-started/faqs#cross_add"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/faqs#cross_add`}
          element="h5"
        >
          How does Cross Add work?
        </Heading>
        <p>
          Our <InlineCode>Cross Add System</InlineCode> is one of our priority features and provides
          all bot lists with a system that allows them to add bots to <strong>all</strong> of our
          supported bot lists this is all done with permission from the{' '}
          <InlineCode>Owner/Developer</InlineCode> of the bot via a option that can be
          enabled/disabled on said bot lists <InlineCode>&quot;Add a Bot Form&quot;</InlineCode>
        </p>
        <p>
          Cross Add is a pretty in depth system that can be integrated into your bot lists
          approval/queue process and should be set up in such a way that when a bot is approved with
          the <InlineCode>Cross Add</InlineCode> option enabled the bots data will also be sent to
          Metro Reviews where it is processed, added to our database, marked as approved and shipped
          out to all of the bot lists who are enrolled in and have added support for our services.
        </p>
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
