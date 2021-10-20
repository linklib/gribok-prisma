import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Token: Prisma.Token
  File: Prisma.File
  Letter: Prisma.Letter
  Log: Prisma.Log
  ResetPassword: Prisma.ResetPassword
  Post: Prisma.Post
  Mashroom: Prisma.Mashroom
  Like: Prisma.Like
  PostImage: Prisma.PostImage
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image' | 'Tokens' | 'Files' | 'Letters' | 'ResetPasswords' | 'Posts' | 'Likes'
      ordering: 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image'
    }
    tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy' | 'PostImages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
    letters: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById'
    }
    logs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'objectType' | 'message' | 'stack'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'objectType' | 'message' | 'stack'
    }
    resetPasswords: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | 'User_ResetPasswordToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Mashroom' | 'mashroomId' | 'title' | 'text' | 'image' | 'createdById' | 'CreatedBy' | 'Likes' | 'PostImages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'mashroomId' | 'title' | 'text' | 'image' | 'createdById'
    }
    mashrooms: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'Posts'
      ordering: 'id' | 'name'
    }
    likes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'postId' | 'createdById'
    }
    postImages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'fileId' | 'File'
      ordering: 'id' | 'postId' | 'fileId'
    }
  },
  User: {
    Tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    Files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy' | 'PostImages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
    Letters: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById'
    }
    ResetPasswords: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | 'User_ResetPasswordToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User'
    }
    Posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Mashroom' | 'mashroomId' | 'title' | 'text' | 'image' | 'createdById' | 'CreatedBy' | 'Likes' | 'PostImages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'mashroomId' | 'title' | 'text' | 'image' | 'createdById'
    }
    Likes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'postId' | 'createdById'
    }
  }
  Token: {

  }
  File: {
    PostImages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'fileId' | 'File'
      ordering: 'id' | 'postId' | 'fileId'
    }
  }
  Letter: {

  }
  Log: {

  }
  ResetPassword: {

  }
  Post: {
    Likes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'postId' | 'createdById'
    }
    PostImages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'fileId' | 'File'
      ordering: 'id' | 'postId' | 'fileId'
    }
  }
  Mashroom: {
    Posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Mashroom' | 'mashroomId' | 'title' | 'text' | 'image' | 'createdById' | 'CreatedBy' | 'Likes' | 'PostImages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'mashroomId' | 'title' | 'text' | 'image' | 'createdById'
    }
  }
  Like: {

  }
  PostImage: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    token: 'Token'
    tokens: 'Token'
    file: 'File'
    files: 'File'
    letter: 'Letter'
    letters: 'Letter'
    log: 'Log'
    logs: 'Log'
    resetPassword: 'ResetPassword'
    resetPasswords: 'ResetPassword'
    post: 'Post'
    posts: 'Post'
    mashroom: 'Mashroom'
    mashrooms: 'Mashroom'
    like: 'Like'
    likes: 'Like'
    postImage: 'PostImage'
    postImages: 'PostImage'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneToken: 'Token'
    updateOneToken: 'Token'
    updateManyToken: 'AffectedRowsOutput'
    deleteOneToken: 'Token'
    deleteManyToken: 'AffectedRowsOutput'
    upsertOneToken: 'Token'
    createOneFile: 'File'
    updateOneFile: 'File'
    updateManyFile: 'AffectedRowsOutput'
    deleteOneFile: 'File'
    deleteManyFile: 'AffectedRowsOutput'
    upsertOneFile: 'File'
    createOneLetter: 'Letter'
    updateOneLetter: 'Letter'
    updateManyLetter: 'AffectedRowsOutput'
    deleteOneLetter: 'Letter'
    deleteManyLetter: 'AffectedRowsOutput'
    upsertOneLetter: 'Letter'
    createOneLog: 'Log'
    updateOneLog: 'Log'
    updateManyLog: 'AffectedRowsOutput'
    deleteOneLog: 'Log'
    deleteManyLog: 'AffectedRowsOutput'
    upsertOneLog: 'Log'
    createOneResetPassword: 'ResetPassword'
    updateOneResetPassword: 'ResetPassword'
    updateManyResetPassword: 'AffectedRowsOutput'
    deleteOneResetPassword: 'ResetPassword'
    deleteManyResetPassword: 'AffectedRowsOutput'
    upsertOneResetPassword: 'ResetPassword'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
    createOneMashroom: 'Mashroom'
    updateOneMashroom: 'Mashroom'
    updateManyMashroom: 'AffectedRowsOutput'
    deleteOneMashroom: 'Mashroom'
    deleteManyMashroom: 'AffectedRowsOutput'
    upsertOneMashroom: 'Mashroom'
    createOneLike: 'Like'
    updateOneLike: 'Like'
    updateManyLike: 'AffectedRowsOutput'
    deleteOneLike: 'Like'
    deleteManyLike: 'AffectedRowsOutput'
    upsertOneLike: 'Like'
    createOnePostImage: 'PostImage'
    updateOnePostImage: 'PostImage'
    updateManyPostImage: 'AffectedRowsOutput'
    deleteOnePostImage: 'PostImage'
    deleteManyPostImage: 'AffectedRowsOutput'
    upsertOnePostImage: 'PostImage'
  },
  User: {
    id: 'String'
    username: 'String'
    email: 'String'
    fullname: 'String'
    password: 'String'
    active: 'Boolean'
    sudo: 'Boolean'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    showEmail: 'Boolean'
    showFullname: 'Boolean'
    image: 'String'
    Tokens: 'Token'
    Files: 'File'
    Letters: 'Letter'
    ResetPasswords: 'ResetPassword'
    Posts: 'Post'
    Likes: 'Like'
  }
  Token: {
    id: 'String'
    createdAt: 'DateTime'
    expiredAt: 'DateTime'
    userId: 'String'
    User: 'User'
  }
  File: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    path: 'String'
    filename: 'String'
    name: 'String'
    mimetype: 'String'
    encoding: 'String'
    size: 'Float'
    rank: 'Int'
    createdById: 'String'
    CreatedBy: 'User'
    PostImages: 'PostImage'
  }
  Letter: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    email: 'String'
    subject: 'String'
    message: 'String'
    status: 'LetterStatus'
    errorMessage: 'String'
    rank: 'Int'
    deleteOnSend: 'Boolean'
    replyTo: 'String'
    returnTo: 'String'
    createdById: 'String'
    CreatedBy: 'User'
  }
  Log: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    level: 'LogLevel'
    objectType: 'String'
    message: 'String'
    stack: 'String'
  }
  ResetPassword: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    code: 'String'
    password: 'String'
    validTill: 'DateTime'
    User: 'String'
    User_ResetPasswordToUser: 'User'
  }
  Post: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Mashroom: 'Mashroom'
    mashroomId: 'String'
    title: 'String'
    text: 'String'
    image: 'String'
    createdById: 'String'
    CreatedBy: 'User'
    Likes: 'Like'
    PostImages: 'PostImage'
  }
  Mashroom: {
    id: 'String'
    name: 'String'
    Posts: 'Post'
  }
  Like: {
    id: 'String'
    postId: 'String'
    Post: 'Post'
    createdById: 'String'
    CreatedBy: 'User'
  }
  PostImage: {
    id: 'String'
    postId: 'String'
    Post: 'Post'
    fileId: 'String'
    File: 'File'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Token: Typegen.NexusPrismaFields<'Token'>
  File: Typegen.NexusPrismaFields<'File'>
  Letter: Typegen.NexusPrismaFields<'Letter'>
  Log: Typegen.NexusPrismaFields<'Log'>
  ResetPassword: Typegen.NexusPrismaFields<'ResetPassword'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Mashroom: Typegen.NexusPrismaFields<'Mashroom'>
  Like: Typegen.NexusPrismaFields<'Like'>
  PostImage: Typegen.NexusPrismaFields<'PostImage'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  