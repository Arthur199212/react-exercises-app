import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : muscles[index - 1]);

  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );

  return (
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        centered={matches ? true : false}
        variant={!matches ? "scrollable" : null}
        scrollButtons={!matches ? "on" : null}
        value={index}
        onChange={onIndexSelect}
      >
        <Tab key="all" label="All" />
        {muscles.map(item => (
          <Tab key={item} label={item} />
        ))}
      </Tabs>
    </Paper>
  );
};
