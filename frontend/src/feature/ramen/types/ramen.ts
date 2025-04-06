export interface Ramen {
  id: number;
  name: string;
  visitDate: string | null;
  googleMapLink: string | null;
  tabelogLink: string | null;
  note: string | null;
  images: {
    url: string;
  }[];
}
