export type Note = {
  _id: number;
  _creationTime: number;
  author: string;
  description: string;
  image: string;
  isLocked: boolean;
  title: string;
};

const notes: Note[] = [
  {
    _id: 0,
    _creationTime: 1692388878000,
    author: "luangjay",
    description: "Welcome to my vaccine booking app!",
    image: "/images/note-0.jpg",
    isLocked: true,
    title: "Hello",
  },
  {
    _id: 1,
    _creationTime: 1692455923000,
    author: "ChatGPT",
    description:
      "Vaccines work by introducing an inactive form of a pathogen to stimulate the immune system's defense.",
    image: "/images/note-1.jpg",
    isLocked: true,
    title: "How Vaccines Work",
  },
  {
    _id: 2,
    _creationTime: 1692469196000,
    author: "Friedrich Nietzsche",
    description: "That which does not kill us makes us stronger.",
    image: "/images/note-2.jpg",
    isLocked: true,
    title: "Just Like Vaccines",
  },
];

export const getNotes = async (): Promise<Note[]> => notes;
