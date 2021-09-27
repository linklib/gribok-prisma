//import { Prisma } from '@prisma/client'
//import { objectType, enumType, extendType, inputObjectType, nonNull } from 'nexus'
import { objectType, extendType } from 'nexus'

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
  },
})

export const PostQuery = extendType({
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

export const Mashroom = objectType({
  name: 'Mashroom',
  description: 'Грибы',
  definition(t) {
    t.nonNull.string('id')
    t.string('mashname')
    t.list.nonNull.field('posts', {
      type: Post,
      resolve(_root, _args, ctx) {
        return ctx.prisma.post.findMany()
      },
    })
  },
})