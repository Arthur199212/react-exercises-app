import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        <Tab label="Active" />
        <Tab label="Active" />
      </Tabs>
    </Paper>
  );
}