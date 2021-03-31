import React from 'react';

const Like = props => {
  const { plant } = props;
  let classes = 'fa fa-heart';
  if (!plant.liked) classes += '-o';
  return <i class={classes} style={{ cursor: 'pointer' }}></i>;
};

export default Like;
