<template>
  <div class="d-flex flex-column flex-fill">
    <div class="d-flex aj-center">
      <h4 class="aj-center">用户管理</h4>
      <div class="input-group" style="margin-left: 2rem; margin-bottom: 0.5rem">
        <input
          type="text"
          class="form-control"
          placeholder="请输入要搜索的内容"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="inputValue"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click="sendInputValue"
        >
          搜索
        </button>
      </div>
    </div>
    <table class="table flex-grow-1">
      <thead>
        <tr>
          <th v-for="head of tableHeader" :key="head" scope="col">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index0) of tableBody" :key="item.id">
          <td v-for="(mItem, index) of item.info" :key="index">
            <template v-if="!mItem.fn">
              {{ mItem }}
            </template>
            <template v-else>
              <my-button @click="mItem.fn(tableBody, item.id)">
                Test
              </my-button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { PropType, ref, watch } from "vue";
import { tableHeaderType, tableBodyType } from "@/lib/interface/type";

// defineComponent can give VUE better support in TS
const props = defineProps({
  tableHeader: {
    type: Set as PropType<tableHeaderType>,
    default: () => new Set(),
  },
  tableBody: {
    type: Array as PropType<tableBodyType>,
    default: () => {},
  },
});
const inputValue = ref("");

const emits = defineEmits(["searchValue"]);
const watchInput = watch(inputValue, () => {
  sendInputValue();
});
const sendInputValue = () => {
  emits("searchValue", inputValue.value);
};
</script>
