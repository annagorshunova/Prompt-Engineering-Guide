import cn from 'clsx';
import React from 'react';
import { Pre as NxPre } from 'nextra/components';

export interface PreProps extends React.ComponentProps<typeof NxPre> {
  noWrap?: boolean;
}

function Pre(props: PreProps) {
  return (
    <React.Fragment>
      <style global jsx>{`
        .om-pre {
          white-space: pre-wrap;
        }
        .nextra-code-block pre.om-pre + div button:first-child {
          display: none;
        }
      `}</style>
      <NxPre {...props} className={cn(!props.noWrap && 'om-pre', props.className)} hasCopyCode>
        {props.children}
      </NxPre>
    </React.Fragment>
  );
}

export { Pre };
