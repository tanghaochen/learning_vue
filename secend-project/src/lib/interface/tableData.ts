import { tableBodyType } from "@/lib/interface/type";
import { reactive } from "vue";
import { DeleteButton, EditorButton } from "./layoutConfig";

const userInfos: tableBodyType = reactive([
  {
    id: 0,
    info: ["张三1", "男", 18],
  },
  {
    id: 1,
    info: ["李四2", "女", 30],
  },
  {
    id: 2,
    info: ["王五3", "男", 50],
  },
]);

userInfos.forEach((item) => {
  item.info.push(DeleteButton, EditorButton);
});

export { userInfos };
