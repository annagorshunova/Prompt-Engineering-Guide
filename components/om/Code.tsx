import React from 'react';
import { Pre, PreProps } from './Pre';
import { Code as NxCode } from 'nextra/components';

function Code(props: PreProps) {
  return (
    <Pre {...props}>
      <NxCode>{props.children}</NxCode>
    </Pre>
  );
}

export { Code };
