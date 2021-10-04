import { FieldResolver } from 'nexus'

export const createpost: FieldResolver<'Mutation', 'createPost'> = async (
  _,
  args,
  ctx
) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Не был получен пользователь')
  }

  const { title, text } = args.data

  const post = await ctx.prisma.post.create({
    data: {
      title,
      text,
      createdBy: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  })

  return post
}
