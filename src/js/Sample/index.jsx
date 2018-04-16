// @flow 

import React from 'react';

type Props = {
  title: string
}

const Sample = ({title}: Props) => (
  <div>{title}</div>
)

Sample.defaultProps = {
  title: 'default'
}

export default Sample;