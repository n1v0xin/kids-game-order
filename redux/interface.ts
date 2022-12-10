export interface IGameState {
  loading: boolean;
  itemQuantity: number;
  itemValues: string;
  sort: 'asc' | 'desc';
  theme: number;
  iconsThemeCount: number;
  items: [] | Items;
  isWin: boolean;
}

export type Item = number | string;

export type Items = Item[];
