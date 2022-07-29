import { EditOnGitHub } from '@components/EditOnGitHub'
import Margin from '@components/Margin'
import Meta from '@components/Meta'
import { NextInDocs } from '@components/NextInDocs'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React, { Fragment } from 'react'
import { BlockContainer } from '../BlockContainer'
import { DesktopNav } from '../DocsNav/DesktopNav'
import { MobileNav } from '../DocsNav/MobileNav'
import classes from './index.module.scss'

export const Doc: React.FC<{
  githubUrl?: string
  children: React.ReactNode
  pageName?: string
  metaTitle?: string
  metaDescription?: string
}> = (props) => {
  const { githubUrl, pageName, children, metaTitle, metaDescription } = props

  return (
    <Fragment>
      <Meta title={metaTitle + ' - Metro Guide'} description={metaDescription} />
      <BlockContainer>
        <Grid>
          <Cell cols={3} colsM={8} className={classes.desktopNav}>
            <DesktopNav />
          </Cell>
          <Cell cols={9} colsM={8}>
            {children}
            <Margin top="small">
              <NextInDocs />
            </Margin>
            {githubUrl && (
              <Margin top="small">
                <EditOnGitHub href={githubUrl} />
              </Margin>
            )}
          </Cell>
        </Grid>
        <MobileNav className={classes.mobileNav} currentPage={pageName} />
      </BlockContainer>
    </Fragment>
  )
}
