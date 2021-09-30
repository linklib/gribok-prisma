import { FieldResolver } from 'nexus'

export const createpost: FieldResolver<'Mutation', 'createPost'> = async (
  _,
  args,
  ctx
) => {
  const title: string = args.where.title || {}
  const text: string = args.where.text || {}

  const post = await ctx.prisma.post.create({
    data: {
      title,
      text,
    },
  })

  return {
    data: post,
  }
}
