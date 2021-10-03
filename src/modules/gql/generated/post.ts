/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type PostFragment = { __typename?: 'Post', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, title: string, text?: Types.Maybe<string>, mashroomId?: Types.Maybe<string>, CreatedById?: Types.Maybe<{ __typename?: 'User', id: string }>, likes?: Types.Maybe<Array<{ __typename?: 'Like', id: string }>> };

export const PostFragmentDoc = gql`
    fragment post on Post {
  id
  createdAt
  updatedAt
  title
  text
  mashroomId
  CreatedById {
    id
  }
  likes {
    id
  }
}
    `;