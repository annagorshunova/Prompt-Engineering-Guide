import React from 'react';
import { Tabs } from './Tabs';
import { Code } from './Code';

export interface CodeTabCode {
  name: string;
  code: string;
}

export interface CodeTab {
  tab: string;
  name?: string;
  code?: string;
  list?: CodeTabCode[];
}

interface CodeTabsProps {
  list: CodeTab[];
}

function CodeTabs(props: CodeTabsProps) {
  if (!props.list.length) {
    return null;
  }

  const list = props.list.filter((item) => item.code !== undefined || item.list !== undefined);
  const items = list.map((item) => item.tab);

  return (
    <Tabs items={items}>
      {list.map((item) => (
        <Tabs.Tab key={item.tab}>
          {item.list &&
            item.list.map((node, i) => (
              <Code key={i} filename={node.name}>
                {node.code}
              </Code>
            ))}
          {item.code && <Code filename={item.name}>{item.code}</Code>}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

export { CodeTabs };
