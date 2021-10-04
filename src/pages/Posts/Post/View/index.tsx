import React from 'react'
import { PostPageViewProps } from './interfaces'
import { PostPageViewStyled } from './styles'

export const PostPageView: React.FC<PostPageViewProps> = ({ post }) => {
  return (
    <PostPageViewStyled>
      <h2>{post.title}</h2>
    </PostPageViewStyled>
  )
}
