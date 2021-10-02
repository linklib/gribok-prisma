import { FieldResolver } from 'nexus'
import { Prisma } from '@prisma/client'

export const updatepost: FieldResolver<'Mutation', 'updatePost'> = async (
  _,
  args,
  ctx
) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Не был получен пользователь')
  }

  const { title, text } = args.data

  const where = args.where as Prisma.PostWhereUniqueInput

  const post = await ctx.prisma.post.findUnique({
    where,
  })

  if (!post) {
    throw new Error('Не был получен объект')
  }

  if (post.createdById !== currentUser.id) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  //const updateData: Prisma.PostUpdateInput = args.data

  return ctx.prisma.post.update({
    data: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      title: title === null ? undefined : title,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      text: text === null ? undefined : text,
    },
    where: post,
  })
}
