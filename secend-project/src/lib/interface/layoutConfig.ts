import { tableButton, tableBodyIndex } from "@/lib/interface/index";
import { userInfos } from "./tableData";
import router from "@/router";

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
  fn: (uInfo: any[], index: number) => {
    const item = uInfo[index].info;
    router.push({
      name: "about",
      query: { id: index, name: item[0], gender: item[1], age: item[2] },
    });
  },
  styles: { backgroundColor: "black" },
};

export const AddUserInfo = () => {
  const UserItem = {
    name: "1",
    gender: "女",
    age: 11,
  };
  const { length: newId } = userInfos;
  userInfos.push({
    id: newId,
    info: [
      UserItem.name,
      UserItem.gender,
      UserItem.age,
      DeleteButton,
      EditorButton,
    ],
  });
};
