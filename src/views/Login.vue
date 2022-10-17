<template lang="pug">
#Login
  .card
    h1 {{"登入"}}
    el-form(
      ref="FormEl"
      :model="formData"
      :rules="rules"
    )
      el-form-item(prop="account" label="帳號")
        el-input(v-model="formData.account")
      el-form-item(prop="password" label="密碼")
        el-input(v-model="formData.password")

    el-checkbox(v-model="needRememverMe") {{"記住我"}}
    el-button(@click="HandleLogin") {{"Login"}}
</template>

<script>
import { reactive, ref } from "vue";
import { debounce } from "lodash";
import { ElMessage } from "element-plus";

export default {
  name: "Login-page",
  setup () {
    // 表單資料
    const formData = reactive({
      account: "",
      password: ""
    });
    const rules = {
      account: [
        { required: true, message: "帳號不得為空", trigger: "change" }
      ],
      password: [
        { required: true, message: "密碼不得為空", trigger: "change" }
      ]
    };
    const needRememverMe = ref(false);
    const FormEl = ref(null);
    const HandleLogin = debounce(() => {
      FormEl.value.validate((valid) => {
        if (!valid) return;
        ElMessage({ message: "登入成功", type: "success" });
      });
    }, 300);
    return {
      formData,
      needRememverMe,
      rules,
      FormEl,
      HandleLogin
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
