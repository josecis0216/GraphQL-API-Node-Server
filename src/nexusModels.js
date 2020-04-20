import { objectType } from 'nexus'

const Player = objectType({
  name: 'Player',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.name()
    t.model.first()
    t.model.position()
    t.model.dob()
    t.model.nationality()
    t.model.currentTeam()
    t.model.jerseyNumber()
  }
})

export const Models = [
  Player
]