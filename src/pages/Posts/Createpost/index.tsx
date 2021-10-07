import React, { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import CreatePostPageView from './View'

/**
 * Страница добавления поста
 */
const CreatePostPage: Page = () => {
  return useMemo(() => {
    return (
      <>
        <NextSeo title="Добавить новый пост" noindex nofollow />

        <CreatePostPageView />
      </>
    )
  }, [])
}

export default CreatePostPage
