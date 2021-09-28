import { objectType, extendType } from 'nexus'

export const Like = objectType({
  name: 'Like',
  description: 'Лайки поста',
  definition(t) {
    t.nonNull.string('id')
  },
})

export const LikeExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.likes({
      description: 'Список лайков',
      filtering: true,
      ordering: true,
    })

    t.crud.like({
      description: 'Лайк',
    })
  },
})
