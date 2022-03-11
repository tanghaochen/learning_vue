import { tableButton } from "@/lib/interface/index";

export const DeleteButton: tableButton = {
  fn: (uInfo: []) => {
    console.log(uInfo);
  },
  styles: { backgroundColor: "#ef9a9a" },
};

export const EditorButton: tableButton = {
  fn: (uInfo: []) => {
    console.log(uInfo);
  },
  styles: { backgroundColor: "black" },
};
