export interface Pokemon {
  pokedex_id: number;
  name: {"fr":string};
  types: {name: string;}[]; // Assurez-vous que cela correspond à la structure réelle
  height: number;
  weight: number;
  baseExperience: number;
  abilities: string[];
  category: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  sprites: {"regular": string};
  description: string;
}
