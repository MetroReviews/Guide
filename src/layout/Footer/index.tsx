import { DarkModeToggler } from '@components/DarkModeToggler'
import { Hyperlink } from '@components/Hyperlink'
import React from 'react'
import { BlockContainer } from '../BlockContainer'
import classes from './index.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <BlockContainer>
        <div className={classes.content}>
          <div className={classes.copyright}>
            &nbsp;&copy;&nbsp;
            {`${new Date().getFullYear()}`}
            &nbsp;
            <Hyperlink href="https://infinitydev.team/" underline={false}>
              Infinity Development
            </Hyperlink>
          </div>
          <menu className={classes.menu}>
            <div></div>
            <div>
              <Hyperlink newTab href="https://twitter.com/Metro_Reviews" underline={false}>
                Twitter
              </Hyperlink>
            </div>
            <div>
              <Hyperlink newTab href="https://github.com/MetroReviews" underline={false}>
                GitHub
              </Hyperlink>
            </div>
            <div>
              <Hyperlink newTab href="https://metrobots.xyz/discord" underline={false}>
                Discord
              </Hyperlink>
            </div>
          </menu>
        </div>
      </BlockContainer>
    </div>
  )
}
