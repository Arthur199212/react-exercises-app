import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        centered
        value={value}
        onChange={handleChange}
      >
        <Tab key='all' label='All' />
        {muscles.map(item => (
          <Tab key={item} label={item} />
        ))}
      </Tabs>
    </Paper>
  );
}