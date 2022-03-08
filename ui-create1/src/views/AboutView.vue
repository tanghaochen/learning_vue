<template>
  <h4>这展示了 flex 增长</h4>
  <h5>A,B,C 和 F 具有 flex-grow:1。D 和 E 具有 flex-grow:2 .</h5>
  <div id="content">
    <div class="box" style="background-color:red;">A</div>
    <div class="box" style="background-color:lightblue;">B</div>
    <div class="box" style="background-color:yellow;">C</div>
    <div class="box1" style="background-color:brown;">D</div>
    <div class="box1" style="background-color:lightgreen;">E</div>
    <div class="box" style="background-color:brown;">F</div>
  </div>
</template>
<style>

#content {
  display: flex;
}

.box {
  flex-grow: 1;
}

.box1 {
  flex-grow: 2;
}
</style>