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
export type PostUniqueQueryVariables = Types.Exact<{
  where: Types.PostWhereUniqueInput;
}>;


export type PostUniqueQuery = { __typename?: 'Query', post?: Types.Maybe<(
    { __typename?: 'Post' }
    & PostFragment
  )> };


export const PostUniqueDocument = gql`
    query PostUnique($where: PostWhereUniqueInput!) {
  post(where: $where) {
    ...post
  }
}
    ${PostFragmentDoc}`;

/**
 * __usePostUniqueQuery__
 *
 * To run a query within a React component, call `usePostUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostUniqueQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePostUniqueQuery(baseOptions: Apollo.QueryHookOptions<PostUniqueQuery, PostUniqueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostUniqueQuery, PostUniqueQueryVariables>(PostUniqueDocument, options);
      }
export function usePostUniqueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostUniqueQuery, PostUniqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostUniqueQuery, PostUniqueQueryVariables>(PostUniqueDocument, options);
        }
export type PostUniqueQueryHookResult = ReturnType<typeof usePostUniqueQuery>;
export type PostUniqueLazyQueryHookResult = ReturnType<typeof usePostUniqueLazyQuery>;
export type PostUniqueQueryResult = Apollo.QueryResult<PostUniqueQuery, PostUniqueQueryVariables>;