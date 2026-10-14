export type ParentStatus = "ACTIVA" | "PENDIENTE";

export interface Parent {
  name: string;
  role: string; // "Mamá" | "Papá"
  status: ParentStatus;
}

export interface Kid {
  id: number;
  name: string;
  age: string;
  birthDate: string;
  entryDate: string;
  allergiesNotes: string | null;
  parents: Parent[];
  status: string | null;
}

export const kids: Kid[] = [
  {
    id: 1,
    name: "Mateo Fernández",
    age: "3 años",
    birthDate: "12 mar 2022",
    entryDate: "feb 2025",
    allergiesNotes: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
    parents: [
      { name: "Lucía Fernández", role: "Mamá", status: "ACTIVA" },
      { name: "Diego Fernández", role: "Papá", status: "PENDIENTE" },
    ],
    status: "MANÍ",
  },
  {
    id: 2,
    name: "Sofía Méndez",
    age: "2 años",
    birthDate: "05 jun 2023",
    entryDate: "mar 2025",
    allergiesNotes: null,
    parents: [{ name: "María Méndez", role: "Mamá", status: "ACTIVA" }],
    status: null,
  },
  {
    id: 3,
    name: "Benjamín Ruiz",
    age: "3 años",
    birthDate: "18 ene 2022",
    entryDate: "ene 2025",
    allergiesNotes: null,
    parents: [{ name: "Lucía Fernández", role: "Mamá", status: "ACTIVA" }],
    status: null,
  },
  {
    id: 4,
    name: "Valentina Soto",
    age: "2 años",
    birthDate: "30 ago 2023",
    entryDate: "ago 2025",
    allergiesNotes: null,
    parents: [],
    status: "VINCULAR",
  },
  {
    id: 5,
    name: "Tomás Díaz",
    age: "3 años",
    birthDate: "14 nov 2022",
    entryDate: "nov 2024",
    allergiesNotes: "Alergia a la lactosa. Evitar productos lácteos.",
    parents: [{ name: "Diego Fernández", role: "Papá", status: "ACTIVA" }],
    status: "LACTOSA",
  },
  {
    id: 6,
    name: "Emma Castro",
    age: "2 años",
    birthDate: "02 abr 2023",
    entryDate: "abr 2025",
    allergiesNotes: null,
    parents: [{ name: "Ana Castro", role: "Mamá", status: "ACTIVA" }],
    status: null,
  },
  {
    id: 7,
    name: "Lucas Romero",
    age: "3 años",
    birthDate: "22 sep 2022",
    entryDate: "sep 2024",
    allergiesNotes: null,
    parents: [{ name: "Diego Fernández", role: "Papá", status: "PENDIENTE" }],
    status: null,
  },
  {
    id: 8,
    name: "Olivia Vega",
    age: "2 años",
    birthDate: "11 feb 2023",
    entryDate: "feb 2025",
    allergiesNotes: null,
    parents: [{ name: "Paula Vega", role: "Mamá", status: "ACTIVA" }],
    status: null,
  },
];
