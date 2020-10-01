import { uuid } from 'uuidv4';

import { Formation } from './Formation';
import { Player } from './Player';

export interface PlayerPositions extends Player {
  position?: number[];
}

export class Team {
  id: string;

  name: string;

  description: string;

  website: string;

  type: 'fantasy' | 'real';

  tags: string[];

  players: PlayerPositions[];

  formation: Formation;

  constructor(
    name = '',
    description = '',
    website = '',
    type = 'fantasy' as const,
    tags = [] as string[],
    players = [],
    formation = [3, 4, 3],
  ) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.website = website;
    this.type = type;
    this.tags = tags;
    this.formation = formation;
    this.players = players;
  }
}
