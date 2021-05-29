/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import { PrismaContext } from './../context'
import { User } from '@prisma/client'
import { core } from 'nexus'
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoolFilter: {
    // input type
    equals?: boolean | null // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null // NestedBoolFilter
  }
  DateTimeFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  DateTimeNullableFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  NestedBoolFilter: {
    // input type
    equals?: boolean | null // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null // NestedBoolFilter
  }
  NestedDateTimeFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  NestedDateTimeNullableFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  NestedStringFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringFilter'] | null // NestedStringFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  NestedStringNullableFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null // NestedStringNullableFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  StringFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringFilter'] | null // NestedStringFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  StringNullableFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null // NestedStringNullableFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  TokenListRelationFilter: {
    // input type
    every?: NexusGenInputs['TokenWhereInput'] | null // TokenWhereInput
    none?: NexusGenInputs['TokenWhereInput'] | null // TokenWhereInput
    some?: NexusGenInputs['TokenWhereInput'] | null // TokenWhereInput
  }
  TokenWhereInput: {
    // input type
    AND?: NexusGenInputs['TokenWhereInput'][] | null // [TokenWhereInput!]
    NOT?: NexusGenInputs['TokenWhereInput'][] | null // [TokenWhereInput!]
    OR?: NexusGenInputs['TokenWhereInput'][] | null // [TokenWhereInput!]
    User?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    createdAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    expiredAt?: NexusGenInputs['DateTimeNullableFilter'] | null // DateTimeNullableFilter
    id?: NexusGenInputs['StringFilter'] | null // StringFilter
    userId?: NexusGenInputs['StringFilter'] | null // StringFilter
  }
  UserOrderByInput: {
    // input type
    active?: NexusGenEnums['SortOrder'] | null // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null // SortOrder
    email?: NexusGenEnums['SortOrder'] | null // SortOrder
    fullname?: NexusGenEnums['SortOrder'] | null // SortOrder
    id?: NexusGenEnums['SortOrder'] | null // SortOrder
    password?: NexusGenEnums['SortOrder'] | null // SortOrder
    showEmail?: NexusGenEnums['SortOrder'] | null // SortOrder
    showFullname?: NexusGenEnums['SortOrder'] | null // SortOrder
    sudo?: NexusGenEnums['SortOrder'] | null // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null // SortOrder
    username?: NexusGenEnums['SortOrder'] | null // SortOrder
  }
  UserSigninDataInput: {
    // input type
    password: string // String!
  }
  UserSignupDataInput: {
    // input type
    email: string // String!
    fullname?: string | null // String
    password: string // String!
    showEmail: boolean // Boolean!
    showFullname: boolean // Boolean!
    username: string // String!
  }
  UserWhereInput: {
    // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    NOT?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    Tokens?: NexusGenInputs['TokenListRelationFilter'] | null // TokenListRelationFilter
    active?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null // StringFilter
    fullname?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    id?: NexusGenInputs['StringFilter'] | null // StringFilter
    password?: NexusGenInputs['StringFilter'] | null // StringFilter
    showEmail?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    showFullname?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    sudo?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    username?: NexusGenInputs['StringFilter'] | null // StringFilter
  }
  UserWhereUniqueInput: {
    // input type
    email?: string | null // String
    id?: string | null // String
    username?: string | null // String
  }
}

export interface NexusGenEnums {
  SortOrder: 'asc' | 'desc'
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: Date
  JSON: any
}

export interface NexusGenObjects {
  AuthPayload: {
    // root type
    data?: NexusGenRootTypes['User'] | null // User
    errors: NexusGenRootTypes['RequestError'][] // [RequestError!]!
    message?: string | null // String
    success: boolean // Boolean!
    token?: string | null // String
  }
  Mutation: {}
  Query: {}
  RequestError: {
    // root type
    key: string // String!
    message: string // String!
  }
  User: User
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes &
  NexusGenScalars &
  NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: {
    // field return type
    data: NexusGenRootTypes['User'] | null // User
    errors: NexusGenRootTypes['RequestError'][] // [RequestError!]!
    message: string | null // String
    success: boolean // Boolean!
    token: string | null // String
  }
  Mutation: {
    // field return type
    signin: NexusGenRootTypes['AuthPayload'] // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload'] // AuthPayload!
  }
  Query: {
    // field return type
    me: NexusGenRootTypes['User'] | null // User
    users: NexusGenRootTypes['User'][] // [User!]!
  }
  RequestError: {
    // field return type
    key: string // String!
    message: string // String!
  }
  User: {
    // field return type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    email: string | null // String
    fullname: string | null // String
    id: string // String!
    showEmail: boolean // Boolean!
    showFullname: boolean // Boolean!
    sudo: boolean | null // Boolean
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
    username: string | null // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: {
    // field return type name
    data: 'User'
    errors: 'RequestError'
    message: 'String'
    success: 'Boolean'
    token: 'String'
  }
  Mutation: {
    // field return type name
    signin: 'AuthPayload'
    signup: 'AuthPayload'
  }
  Query: {
    // field return type name
    me: 'User'
    users: 'User'
  }
  RequestError: {
    // field return type name
    key: 'String'
    message: 'String'
  }
  User: {
    // field return type name
    createdAt: 'DateTime'
    email: 'String'
    fullname: 'String'
    id: 'String'
    showEmail: 'Boolean'
    showFullname: 'Boolean'
    sudo: 'Boolean'
    updatedAt: 'DateTime'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    signin: {
      // args
      data: NexusGenInputs['UserSigninDataInput'] // UserSigninDataInput!
      where: NexusGenInputs['UserWhereUniqueInput'] // UserWhereUniqueInput!
    }
    signup: {
      // args
      data: NexusGenInputs['UserSignupDataInput'] // UserSignupDataInput!
    }
  }
  Query: {
    users: {
      // args
      cursor?: NexusGenInputs['UserWhereUniqueInput'] | null // UserWhereUniqueInput
      orderBy?: NexusGenInputs['UserOrderByInput'][] | null // [UserOrderByInput!]
      skip?: number | null // Int
      take?: number | null // Int
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = keyof NexusGenInputs

export type NexusGenEnumNames = keyof NexusGenEnums

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: PrismaContext
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
