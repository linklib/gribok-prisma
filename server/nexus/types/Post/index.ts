//import { Prisma } from '@prisma/client'
//import { objectType, enumType, extendType, inputObjectType, nonNull } from 'nexus'
import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { createpost } from './resolvers/createpost'
import { updatepost } from './resolvers/updatepost'

export const Post = objectType({
  name: 'Post',
  description: 'Пост',
  sourceType: {
    module: '@prisma/client',
    export: 'Post',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.date('createdAt', {
      description: 'Когда создан',
    })
    t.nonNull.date('updatedAt', {
      description: 'Когда обновлен',
    })
    t.nonNull.string('title')
    t.string('text')

    t.list.nonNull.field('likes', {
      type: 'Like',
      resolve(_root, _args, ctx) {
        return ctx.prisma.like.findMany()
      },
    })
  },
})

export const PostExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.posts({
      description: 'Список постов',
      filtering: true,
      ordering: true,
    })

    t.crud.post({
      description: 'Пост',
    })
  },
})

export const PostCreateInput = inputObjectType({
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.string('title')
    t.string('text')
  },
})

export const PostUpdateInput = inputObjectType({
  name: 'PostUpdateInput',
  definition(t) {
    t.string('title')
    t.string('text')
  },
})

export const PostExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createPost', {
      type: 'Post',
      args: {
        data: nonNull('PostCreateInput'),
      },
      resolve: createpost,
    })
    t.nonNull.field('updatePost', {
      type: 'Post',
      args: {
        data: nonNull('PostUpdateInput'),
        where: nonNull('PostWhereUniqueInput'),
      },
      resolve: updatepost,
    })
  },
})
