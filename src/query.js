import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
  name: "Query",
  definition(t) {
    t.field('Player', {
      type: 'Player',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.player.findOne({
          where: {
            id,
          }
        })
      }
    })

    t.list.field('Players', {
      type: 'Player',
      args: {
        searchString: stringArg({ nullable: true}),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.player.findMany({
          where: {
            OR: [
              { name: { contains: searchString }}
            ],
          },
        })
      }
    })

  }
})