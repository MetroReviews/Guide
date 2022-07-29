import React, { Fragment } from 'react'
import { Doc } from '@root/layout/Doc'

const NodeSDKDoc = () => {
  return (
    <Fragment>
      <h1>Response Schemas</h1>
      <p>
        Just some useful information regarding our API Response Schemas. Please keep in mind that
        some of the endpoints associated with the schemas below may require your bot list key for
        authorization.
      </p>
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
