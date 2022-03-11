import { tableButton } from "@/lib/interface/index";

export const DeleteButton: tableButton = {
  fn: (uInfo: [],index:number) => {
    console.log("before",...uInfo,index);
    uInfo.splice(index,1)
    console.log("behind",...uInfo,index)
  },
  styles: { backgroundColor: "#ef9a9a" },
};

export const EditorButton: tableButton = {
  fn: (uInfo: [],index:number) => {
    console.log(uInfo);
  },
  styles: { backgroundColor: "black" },
};
