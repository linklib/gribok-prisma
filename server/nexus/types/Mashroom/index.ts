//import { Prisma } from '@prisma/client'
//import { objectType, enumType, extendType, inputObjectType, nonNull } from 'nexus'
import { objectType, extendType } from 'nexus'

export const Mashroom = objectType({
  name: 'Mashroom',
  description: 'Грибы',
  sourceType: {
    module: '@prisma/client',
    export: 'Mashroom',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('name')
    t.list.nonNull.field('posts', {
      type: 'Post',
      resolve(_root, _args, ctx) {
        return ctx.prisma.post.findMany()
      },
    })
  },
})

export const MashroomExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.mashrooms({
      description: 'Список грибов',
      filtering: true,
      ordering: true,
    })

    t.crud.mashroom({
      description: 'Гриб',
    })
  },
})
