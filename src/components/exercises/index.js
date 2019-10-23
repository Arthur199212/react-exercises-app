import React from 'react'
import { Grid } from '@material-ui/core'

import RightPanel from './RightPanel'
import LeftPanel from './LeftPanel'

export default () => {
  return (
    <>
      <Grid container>
        <Grid sm>
          
          <RightPanel />

        </Grid>
        <Grid sm>
          
          <LeftPanel />

        </Grid>
      </Grid>
    </>
  )
}
