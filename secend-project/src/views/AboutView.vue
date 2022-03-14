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
        <select
          class="form-select"
          id="specificSizeSelect"
          v-model="TablePutForm.gender"
        >
          <option selected value="女">女</option>
          <option value="男">男</option>
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
import { onMounted } from "vue";

const TablePutForm = reactive(
  ref({
    name: "" as string,
    age: 0 as number,
    gender: "男" as string,
  })
);
const router = useRoute();
const UserInfoIndex = Number(router.query.id);
TablePutForm.value.name = String(router.query.name);
TablePutForm.value.age = Number(router.query.age);
TablePutForm.value.gender = String(router.query.gender);

const SubmitPut = () => {
  let { name, age, gender } = TablePutForm.value;
  TablePutForm.value.name = userInfos[UserInfoIndex].info[0] as string;
  TablePutForm.value.gender = userInfos[UserInfoIndex].info[1] as string;
  TablePutForm.value.age = userInfos[UserInfoIndex].info[2] as number;

  userInfos[UserInfoIndex].info[0] = name;
  userInfos[UserInfoIndex].info[1] = gender;
  userInfos[UserInfoIndex].info[2] = age;
  route.push({ name: "home" });
};
</script>
