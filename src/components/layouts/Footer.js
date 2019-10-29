import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, category, onSelect }) => {
  const index = category
  ? muscles.findIndex(group => group === category) + 1
  : 0

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1])

  return (
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        centered
        value={index}
        onChange={onIndexSelect}
      >
        <Tab key='all' label='All' />
        {muscles.map(item => (
          <Tab key={item} label={item} />
        ))}
      </Tabs>
    </Paper>
  );
}