import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import Meta from '../components/Meta'
import { BlockContainer } from '../layout/BlockContainer';
import { Cell, Grid } from '@faceless-ui/css-grid';
import Margin from '@components/Margin';
import { CallToAction } from '@components/CallToAction';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { MainHero } from '@root/heros';
import { useWindowInfo } from '@faceless-ui/window-info';

const Home: NextPage = () => {
  const {
    setShowCustomCursor,
  } = useCustomCursor();

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();


  useEffect(() => {
    if (!midBreak) setShowCustomCursor(true)
    else setShowCustomCursor(false)
    return () => {
      setShowCustomCursor(false)
    }
  }, [
    setShowCustomCursor,
    midBreak
  ]);

  return (
    <Fragment>
      <Meta
        title="Metro Guide"
      />
      <main>
        <MainHero />
        <BlockContainer>
          <Margin
            bottom="large"
          >
            <Grid>
              <Cell
                cols={8}
                colsL={10}
                colsM={8}
              >
                <h3 style={{ marginTop: 0 }}>
                  Why choose Metro?
                </h3>
                <p style={{ marginBottom: 0 }}>
                  We understand the struggle of running a bot list and dealing with its queue processes and
                  wanted to provide all bot lists and bot list owners with a simple, reliable and user friendly
                  solution that can be merged and added to any framework or language with ease. We did our research
                  and came to conclusion that this can best be achieved through a dedicated RESTful API
                </p>
              </Cell>
            </Grid>
          </Margin>
        </BlockContainer>
        <CallToAction />
      </main >
    </Fragment >
  )
}

export default Home
