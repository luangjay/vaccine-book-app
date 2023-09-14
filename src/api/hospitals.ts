export type Hospital = {
  _id: number;
  _creationTime: number;
  author: string | null;
  description: string | null;
  image: string | null;
  title: string | null;
};

const hospitals: Hospital[] = [
  {
    _id: 0,
    _creationTime: 1692388878000,
    author: null,
    description: "1873 Rama 4 Rd. Pathumwan Bangkok 10330",
    image: "/images/chula.jpg",
    title: "Chulalongkorn Hospital",
  },
  {
    _id: 1,
    _creationTime: 1692455923000,
    author: null,
    description:
      "2, Phayathai Road, Ratchathewi District, Bangkok 10400, Thailand",
    image: "/images/rajavithi.jpg",
    title: "Rajavithi Hospital",
  },
  {
    _id: 2,
    _creationTime: 1692469196000,
    author: null,
    description:
      "95/8 , Khlongnueng sub-district, Khlongluang district, Pathumthani",
    image: "/images/thammasat.jpg",
    title: "Thammasat University Hospital",
  },
];

export const getHospitals = async (): Promise<Hospital[]> => {
  return await new Promise((resolve) => {
    resolve(hospitals);
  });
};
