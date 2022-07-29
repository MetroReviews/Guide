import { Hyperlink } from '@components/Hyperlink'
import React from 'react'
import { BlockContainer } from '../BlockContainer'
import classes from './index.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <BlockContainer>
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <Hyperlink
href="/"
underline={false}
className={classes.logoAnchor}
            >
              <img
                className={classes.logoImage}
                src="https://metrobots.xyz/img/logo.webp"
                alt="logo"
              />
              <b>Metro Guide</b>
            </Hyperlink>
          </div>
          <menu className={classes.menu}>
            <div>
              <Hyperlink
href="/docs/getting-started"
underline={false}
              >
                Docs
              </Hyperlink>
            </div>
          </menu>
        </div>
      </BlockContainer>
    </div>
  )
}
