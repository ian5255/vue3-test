<template lang="pug">
#Login
  .card
    el-button 11
</template>

<script>
export default {
  name: "Login-page",
  setup () {
    // 123
    console.log(111); // 123
    const a = {
      1: "111",
      2: "222"
    };
    return {
      a
    };
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

// 元件樣式
#Login {
  .card {
    width: 500px;
    height: 400px;
    box-shadow: 2px 1px 3px rgb(197, 197, 197);
    border-radius: 5px;
  }
}
</style>
