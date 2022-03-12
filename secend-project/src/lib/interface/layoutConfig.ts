import { tableButton, tableBodyIndex } from "@/lib/interface/index";
import { userInfos } from "./tableData";

export const DeleteButton: tableButton = {
  fn: (uInfo: [], index: number) => {
    // splice() function must in first line, otherwise,it will lose efficacy
    uInfo.splice(index, 1);
    const findIndexHandler = (item: tableBodyIndex) => item.id === index;
    if (uInfo === userInfos) {
      return;
    }
    const userIndex = userInfos.findIndex(findIndexHandler);
    userInfos.splice(userIndex, 1);
  },
  styles: { backgroundColor: "#ef9a9a" },
};

export const EditorButton: tableButton = {
  fn: (uInfo: [], index: number) => {
    console.log(uInfo);
  },
  styles: { backgroundColor: "black" },
};
