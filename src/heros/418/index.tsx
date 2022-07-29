import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import Margin from '@components/Margin'
import { MarginGrid } from '@components/MarginGrid'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { BlockContainer } from '@root/layout/BlockContainer'
import React from 'react'
import classes from './index.module.scss'

export const CoffeeHero: React.FC = () => {
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
                🚧 418
              </Heading>
              <Heading
element="h1"
as="h5"
marginBottom={false}
              >
                We brewed up some bad coffee this morning and something got broken along the way, it
                is also likely that this page is under construction and will be available soon
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
