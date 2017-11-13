import React from 'react'

export default ({ foobar, ...props }) =>
  <div mt={2}>
    <h1
      center
      bg='purple'
      color='tomato'
      children={props.fire}
    />
  </div>
