<template>
  <div class="d-flex flex-column flex-fill">
    <h4>用户管理</h4>
    <table class="table flex-grow-1">
      <thead>
        <tr>
          <th v-for="head of tableHeader" :key="head" scope="col">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of tableBody" :key="item.id">
          <td v-for="(mItem, index) of item.info" :key="index">
            <template v-if="!mItem.fn">
              {{ mItem }}
            </template>
            <template v-else>
              <my-button @click="mItem.fn(item)"> Test </my-button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { tableHeaderType, tableBodyType } from "@/lib/interface/type";

export default {
  name: "table",
  props: {
    tableHeader: {
      type: Set as PropType<tableHeaderType>,
      default: () => new Set(),
    },
    tableBody: {
      type: Array as PropType<tableBodyType>,
      default: () => {},
    },
  },
};
</script>
<style lang=""></style>
