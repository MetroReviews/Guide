import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import Margin from '@components/Margin'
import { MarginGrid } from '@components/MarginGrid'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { BlockContainer } from '@root/layout/BlockContainer'
import React from 'react'
import classes from './index.module.scss'

export const ErrorHero: React.FC = () => {
  return (
    <BlockContainer>
      <div className={classes.mainHero}>
        <Grid>
          <Cell
cols={10}
colsL={12}
colsM={12}>
            <Margin bottom="small">
              <Heading
element="h2"
as="jumbo"
marginTop={false}
              >
                500 - Internal Error
              </Heading>
              <Heading
element="h1"
as="h5"
marginBottom={false}
              >
                Something went wrong with this request, please try again or contact our Dev Team for
                support
              </Heading>
            </Margin>
          </Cell>
        </Grid>
        <MarginGrid size="small">
          <Button
href="/"
label="Back Home"
appearance="primary"
          />
          <Button
href="https://metrobots.xyz/discord"
label="Get Support"
appearance="primary"
          />
        </MarginGrid>
      </div>
    </BlockContainer>
  )
}
