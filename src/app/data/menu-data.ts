export type MenuItem = {
  id: number;
  label: string;
  value: number;
  checked: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    items: [
      { id: 1, label: 'Item 1', value: 20, checked: false },
      { id: 2, label: 'Item 2', value: 30, checked: false },
      { id: 3, label: 'Item 3', value: 40, checked: false },
      { id: 4, label: 'Item 4', value: 50, checked: false }
    ]
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    items: [
      { id: 5, label: 'Item 5', value: 10, checked: false },
      { id: 6, label: 'Item 6', value: 25, checked: false },
      { id: 7, label: 'Item 7', value: 35, checked: false },
      { id: 8, label: 'Item 8', value: 60, checked: false }
    ]
  }
];
