import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { Page } from 'src/pages/_App/interfaces'
import {
  PostUniqueDocument,
  PostUniqueQuery,
  PostUniqueQueryVariables,
  usePostUniqueQuery,
} from 'src/modules/gql/generated'
import { PostPageView } from './View'
import { NextSeo } from 'next-seo'

export const PostPage: Page = () => {
  const router = useRouter()

  const id =
    router.query.id && typeof router.query.id === 'string'
      ? router.query.id
      : ''

  const data = usePostUniqueQuery({
    skip: !id,
    variables: {
      where: {
        id,
      },
    },
  })

  const post = data.data?.post

  return (
    <>
      <NextSeo title={post?.title || 'Post'} />

      {post ? <PostPageView post={post} /> : null}
    </>
  )
}

PostPage.getInitialProps = async ({ query, apolloClient }) => {
  const id = query.id && typeof query.id === 'string' ? query.id : ''

  const data = await apolloClient.query<
    PostUniqueQuery,
    PostUniqueQueryVariables
  >({
    query: PostUniqueDocument,
    variables: {
      where: {
        id,
      },
    },
  })

  return {
    statusCode: !data.data.post ? 404 : undefined,
  }
}
