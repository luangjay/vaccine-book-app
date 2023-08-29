export type Note = {
  _id: number;
  _creationTime: number;
  author: string | null;
  description: string | null;
  image: string | null;
  isLocked: boolean;
  title: string | null;
};

const notes: Note[] = [
  {
    _id: 0,
    _creationTime: 1692388878000,
    author: null,
    description: "1873 Rama 4 Rd. Pathumwan Bangkok 10330",
    image: "/images/chula.jpg",
    isLocked: true,
    title: "Chulalongkorn Hospital",
  },
  {
    _id: 1,
    _creationTime: 1692455923000,
    author: null,
    description:
      "2, Phayathai Road, Ratchathewi District, Bangkok 10400, Thailand",
    image: "/images/rajavithi.jpg",
    isLocked: true,
    title: "Rajavithi Hospital",
  },
  {
    _id: 2,
    _creationTime: 1692469196000,
    author: null,
    description:
      "95/8 , Khlongnueng sub-district, Khlongluang district, Pathumthani",
    image: "/images/thammasat.jpg",
    isLocked: true,
    title: "Thammasat University Hospital",
  },
];

export const getNotes = async (): Promise<Note[]> => {
  return await new Promise((resolve) => {
    resolve(notes);
  });
};
