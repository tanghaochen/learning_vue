import { tableBodyType } from "@/lib/interface/type";
import { DeleteButton, EditorButton } from "./layoutConfig";

const userInfos: tableBodyType = [
  {
    id: 0,
    info: ["张三", "男", 18],
  },
  {
    id: 1,
    info: ["李四", "女", 30],
  },
  {
    id: 2,
    info: ["王五", "男", 50],
  },
];

userInfos.forEach((item) => {
  item.info.push(DeleteButton, EditorButton);
  console.log("userInfos", userInfos);
});

export { userInfos };
