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

  const { title, text, mashroomId } = args.data

  const post = await ctx.prisma.post.create({
    data: {
      title,
      text,
      //mashroomId,
      Mashroom: {
        connect: {
          id: mashroomId ? mashroomId : undefined,
        },
      },
      CreatedBy: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  })

  return post
}
