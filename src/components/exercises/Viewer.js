import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import json2mq from 'json2mq'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Listing, Preview } from './'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 'calc(100% - 10px)',
    overflow: 'auto',
  },
  MainContainer: {
    height: 'calc(100% - 64px - 48px)',
  },
  MainContainerSmall: {
    height: 'calc(100% - 106px)',
  },
  Item: {
    height: '100%',
  },
  ItemSmall: {
    height: '50%',
  },
}

const Viewer = () => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  )

  return (
    <>
      <Grid
        container
        style={matches ? styles.MainContainer : styles.MainContainerSmall}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={!matches ? styles.ItemSmall : styles.Item}
        >
          <Paper style={styles.Paper}>

            <Listing />

          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={!matches ? styles.ItemSmall : styles.Item}
        >
          <Paper style={styles.Paper}>

            <Preview />

          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Viewer
