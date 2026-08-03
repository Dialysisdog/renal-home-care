export type SolutionType = {
  key: "yellow" | "green" | "red" | "purple";
  color: string;
  labelVi: string;
  labelEn: string;
  detail: string; // same in both languages (chemical name)
};

export const solutionTypes: SolutionType[] = [
  {
    key: "yellow",
    color: "#EAB308",
    labelVi: "Vàng",
    labelEn: "Yellow",
    detail: "Dextrose 1.5%",
  },
  {
    key: "green",
    color: "#22C55E",
    labelVi: "Xanh lá",
    labelEn: "Green",
    detail: "Dextrose 2.5%",
  },
  {
    key: "red",
    color: "#EF4444",
    labelVi: "Đỏ",
    labelEn: "Red",
    detail: "Dextrose 4.25%",
  },
  {
    key: "purple",
    color: "#A855F7",
    labelVi: "Tím",
    labelEn: "Purple",
    detail: "Icodextrin 7.5%",
  },
];
