export interface Instalations {
  _id: string;
  img: string;
  title: string;
  description: string;
}

export interface UpdateInstalations {
  _id: string;
  img: string;
  title: string;
  description: string;
}

export interface CreateInstalations {
  img: string;
  title: string;
  description: string;
}

export interface ResponseCreateInstalation {
  status: string;
  message: string;
  items: Instalations[];
}
