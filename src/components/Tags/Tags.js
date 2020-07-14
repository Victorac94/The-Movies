import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Tag from './Tag/Tag';

const Tags = (props) => {
  const { mode } = useParams();
  let tags = [];


  if (props.tags) {
    for (const tag of props.tags) {
      const elem = (
        <Link key={tag.id} to={`/${mode}/${tag.id}/discover/page/1`}>
          <Tag name={tag.name} />
        </Link>
      );

      tags.push(elem);
    }

  }

  return (
    <div>
      {tags}
    </div>
  )
}

export default Tags;
