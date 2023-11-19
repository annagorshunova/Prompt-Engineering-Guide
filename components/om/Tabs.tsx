import React from 'react';
import { Tabs as NxTabs, Tab } from 'nextra/components';

type TabsProps = React.ComponentProps<typeof NxTabs>;

function OmTabs(props: TabsProps) {
  return (
    <div className="om-tabs om-tabs-border">
      <style global jsx>{`
        .om-tabs-border {
          border-bottom: 1px solid rgb(229, 231, 235); /* nx-border-gray-200 */
        }
        :is(html[class~='dark'] .om-tabs-border) {
          border-bottom-color: rgb(38, 38, 38); /* dark:nx-border-neutral-800 */
        }
        .om-tabs .nx-pt-6 {
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
        }
        .om-tabs .nx-mb-4 {
          margin-bottom: 0 !important;
        }
        .om-tabs .nextra-scrollbar > div {
          padding-left: 3px;
        }
      `}</style>
      <NxTabs {...props} />
    </div>
  );
}

const Tabs = OmTabs as typeof NxTabs & {
  displayName: string;
  Tab: typeof Tab;
};
Tabs.Tab = Tab;

export { Tab, Tabs };
