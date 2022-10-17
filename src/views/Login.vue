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

    el-checkbox.remember-me-checkbox(v-model="needRememverMe") {{"記住我"}}
    el-button.submit-btn(@click="HandleLogin") {{"Login"}}
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { debounce } from "lodash";
import { ElMessage } from "element-plus";
import { SetStorage, GetStorage } from "@/plugins/storage";

export default {
  name: "Login-page",
  setup () {
    onMounted(() => {
      const isNeedRememberMe = GetStorage("needRememberMe");
      if (!isNeedRememberMe || !isNeedRememberMe.isNeedRememberMe) return;
      needRememverMe.value = true;

      const loginInfo = GetStorage("loginInfo");
      if (!loginInfo) return;
      formData.account = loginInfo.account;
      formData.password = loginInfo.password;
    });
    // 表單資料
    const formData = reactive({
      account: "",
      password: ""
    });
    // form rules
    const rules = {
      account: [
        { required: true, message: "帳號不得為空", trigger: "change" }
      ],
      password: [
        { required: true, message: "密碼不得為空", trigger: "change" }
      ]
    };

    const needRememverMe = ref(false); // remember me
    const FormEl = ref(null); // form element
    // 點擊登入
    const HandleLogin = debounce(() => {
      FormEl.value.validate((valid) => {
        if (!valid) return;
        SetStorage("needRememberMe", { isNeedRememberMe: needRememverMe.value });
        if (needRememverMe.value) {
          SetStorage("loginInfo", formData);
        }
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
    width: 450px;
    height: 300px;
    padding: 24px 16px;
    border: 1px solid rgb(175, 175, 175);
    box-shadow: 1px 1px 2px rgb(197, 197, 197);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  .remember-me-checkbox {
    margin-top: auto;
  }
  .submit-btn {
    margin-top: 15px;
  }
}
</style>
