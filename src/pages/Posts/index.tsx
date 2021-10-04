import { NextSeo } from 'next-seo'
import React from 'react'
import { usePostsQuery } from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import { PostsPageView } from './View'

export const PostsPage: Page = () => {
  const data = usePostsQuery()

  return (
    <>
      <NextSeo title="Posts" />

      <PostsPageView posts={data.data?.posts || []} />
    </>
  )
}
