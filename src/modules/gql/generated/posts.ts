/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { PostFragment } from './post';
import { gql } from '@apollo/client';
import { PostFragmentDoc } from './post';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type PostsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.PostWhereInput>;
  orderBy?: Types.Maybe<Array<Types.PostOrderByInput> | Types.PostOrderByInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  take?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<(
    { __typename?: 'Post' }
    & PostFragment
  )> };


export const PostsDocument = gql`
    query posts($where: PostWhereInput, $orderBy: [PostOrderByInput!], $skip: Int, $take: Int) {
  posts(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    ...post
  }
}
    ${PostFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;