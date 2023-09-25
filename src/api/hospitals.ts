export type Hospital = {
  id: number;
  createdAt: number;
  author: string | null;
  description: string | null;
  image: string | null;
  name: string | null;
};

const hospitals: Hospital[] = [
  {
    id: 0,
    createdAt: 1692388878000,
    author: null,
    description: "1873 Rama 4 Rd. Pathumwan Bangkok 10330",
    image: "/images/chula.jpg",
    name: "Chulalongkorn Hospital",
  },
  {
    id: 1,
    createdAt: 1692455923000,
    author: null,
    description:
      "2, Phayathai Road, Ratchathewi District, Bangkok 10400, Thailand",
    image: "/images/rajavithi.jpg",
    name: "Rajavithi Hospital",
  },
  {
    id: 2,
    createdAt: 1692469196000,
    author: null,
    description:
      "95/8 , Khlongnueng sub-district, Khlongluang district, Pathumthani",
    image: "/images/thammasat.jpg",
    name: "Thammasat University Hospital",
  },
];

export const getHospitals = async (): Promise<Hospital[]> => {
  return await new Promise((resolve) => {
    resolve(hospitals);
  });
};
