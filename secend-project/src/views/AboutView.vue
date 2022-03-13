<template>
  <div class="d-flex flex-column flex-grow-1 aj-center">
    <form
      class="row gx-3 gy-2 align-items-center d-flex flex-column"
      style="width: inherit"
    >
      <div class="col-sm-3">
        <label class="visually-hidden" for="specificSizeInputGroupUsername"
          >Username</label
        >
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="specificSizeInputGroupUsername"
            placeholder="Username"
            v-model="TablePutForm.name"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <label class="visually-hidden" for="specificSizeInputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="specificSizeInputName"
          placeholder="age"
          v-model="TablePutForm.age"
        />
      </div>
      <div class="col-sm-3">
        <label class="visually-hidden" for="specificSizeSelect"
          >Preference</label
        >
        <select class="form-select" id="specificSizeSelect">
          <option selected value="1">{{ TablePutForm.gender }}</option>
          <option value="3">女</option>
        </select>
      </div>
    </form>
    <div class="col-auto">
      <button class="btn btn-primary" @click="SubmitPut">Submit</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { userInfos } from "@/lib/interface/tableData";
import { useRoute } from "vue-router";
import { tableBodyIndex } from "@/lib/interface";
import route from "@/router";

const TablePutForm = ref({
  name: "",
  age: null,
  gender: "男",
});
const router = useRoute();
const UserInfoIndex = Number(router.query.id);

const SubmitPut = () => {
  const findID = (item: tableBodyIndex) => {
    item.id === UserInfoIndex;
  };

  // const findResult = [userInfos[UserInfoIndex]].find(findID);
  TablePutForm.name = userInfos[UserInfoIndex].info[0] as string;
  userInfos[UserInfoIndex].info[0] = TablePutForm.value.name;
  console.log("userInfos[UserInfoIndex].info", userInfos[UserInfoIndex].info);
  route.push({ name: "home" });
  console.log(
    "[userInfos[UserInfoIndex]].id",
    userInfos[UserInfoIndex].info[0],
    TablePutForm.value.name
  );
  // UserItem.name,
  // UserItem.gender,
  // UserItem.age,
  // DeleteButton,
  // EditorButton,
};
</script>
