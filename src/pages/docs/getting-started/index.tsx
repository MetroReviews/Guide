import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'
import Margin from '@components/Margin'
import { Hyperlink } from '@components/Hyperlink'
import { Heading } from '@components/Heading'

const GettingStartedDoc = () => {
  return (
    <Fragment>
      <h1>Getting Started</h1>
      <p>Welcome to the official Metro Reviews Guide/Documentation Site.</p>
      <p>
        This site contains basic documentation on the Metro Reviews project As well as its companion
        Website & API, including information on features and tutorials on common use cases.
      </p>
      <Margin bottom="small">
        <Heading
          id="about"
          href="/docs/getting-started#about"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#about`}
          element="h5"
        >
          About our API
        </Heading>
        <p>
          Metro Reviews uses a RESTful API based on a few key Frameworks and Library&apos;s such as
          Python and FastAPI. these resources allow us to provide our users with a reliable,
          customizable, well documented and easy to use service.
        </p>
      </Margin>
      <Margin>
        <Heading
          id="authorization"
          href="/docs/getting-started#authorization"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#authorization`}
          element="h5"
        >
          Authorization
        </Heading>
        <p>
          Before any Bot List receives full access to our API they will need to{' '}
          <Hyperlink href="https://metrobots.xyz/lists/apply" newTab>
            Apply
          </Hyperlink>{' '}
          Once approved they will be provided with a List Key which is used to access and
          &quot;unlock&quot; a variety of our available endpoints.
        </p>
      </Margin>
      <Margin>
        <Heading
          id="support"
          href="/docs/getting-started#support"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#support`}
          element="h5"
        >
          Support
        </Heading>
        <p>
          If you need any assistance using our setting up our API please feel free to reach out to
          us in our{' '}
          <Hyperlink href="https://metrobots.xyz/discord" newTab>
            Discord Server
          </Hyperlink>{' '}
        </p>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/getting-started/index.tsx`}
      pageName="Getting Started"
      pageTitle="Getting Started"
      metaDescription="Quick introduction to our API and Services."
      metaTitle="Getting Started"
    />
  )
}

GettingStartedDoc.Layout = DocLayout

export default GettingStartedDoc
