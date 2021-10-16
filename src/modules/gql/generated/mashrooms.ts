/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type MashroomsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MashroomsQuery = { __typename?: 'Query', mashrooms: Array<{ __typename?: 'Mashroom', id: string, name: string }> };


export const MashroomsDocument = gql`
    query mashrooms {
  mashrooms {
    id
    name
  }
}
    `;

/**
 * __useMashroomsQuery__
 *
 * To run a query within a React component, call `useMashroomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMashroomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMashroomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMashroomsQuery(baseOptions?: Apollo.QueryHookOptions<MashroomsQuery, MashroomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MashroomsQuery, MashroomsQueryVariables>(MashroomsDocument, options);
      }
export function useMashroomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MashroomsQuery, MashroomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MashroomsQuery, MashroomsQueryVariables>(MashroomsDocument, options);
        }
export type MashroomsQueryHookResult = ReturnType<typeof useMashroomsQuery>;
export type MashroomsLazyQueryHookResult = ReturnType<typeof useMashroomsLazyQuery>;
export type MashroomsQueryResult = Apollo.QueryResult<MashroomsQuery, MashroomsQueryVariables>;