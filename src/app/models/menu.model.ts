export interface MenuItem {
  label: string;
  fragment: string;
  open: boolean;
  children: MenuChild[];
}


export interface MenuChild {
  label: string;
  route: string;
  icon: string;
  color: string;
}

export interface MenuSubChild {
  title: string;
  subtitle: string;
  backgroundColor: string;
  backgroundImage: string;
}


