import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.deleteOnePlayer()
        t.crud.updateOnePlayer()
        t.crud.createOnePlayer()


        // t.field('createPlayer', {
        //     type: 'Player',
        //     args: {
        //         name: stringArg({ nullable: false }),
        //         position: stringArg({ nullable: false }),
        //         dob: stringArg(),
        //         nationality: stringArg(),
        //         currentTeam: stringArg(),
        //         jerseyNumber: stringArg(),
        //     },
        //     resolve: (parent, { name, position, dob, nationality, currentTeam, jerseyNumber }, ctx) => {
        //         return ctx.prisma.player.create({
        //             data: {
        //                 name,
        //                 position,
        //                 dob,
        //                 nationality,
        //                 currentTeam,
        //                 jerseyNumber,
        //             }
        //         })
        //     }
        // })

        // t.field('updateOnePlayer', {
        //     type: 'Player',
        //     args: { id: idArg(),
        //         name: stringArg(),
        //         position: stringArg(),
        //         currentTeam: stringArg(),
        //         jerseyNumber: stringArg(),
        //     },
        //     resolve: (parent, { id, name, position, dob, nationality, currentTeam, jerseyNumber }, ctx) => {
        //         return ctx.prisma.player.update({
        //             where: {
        //                 id
        //             },
        //             data: {
        //                 name,
        //                 position,
        //                 currentTeam,
        //                 jerseyNumber,
        //             }
        //         })
        //     }
        // })
    }
})