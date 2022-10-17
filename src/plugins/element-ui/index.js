// 引入element样式文件
import "element-plus/dist/index.css";

// 按需引入element组件
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox
  // ElMessage,
  // ElScrollbar,
  // ElDropdown,
  // ElSelect,
  // ElTable,
  // ElMenu,
  // ElBreadcrumb,
  // ElIcon,
  // ElAvatar
} from "element-plus";

// 按需引入elelment图标
// import { Edit, Tools, Location, Setting } from "@element-plus/icons-vue";

export default function (app) {
  app.use(ElButton);
  app.use(ElForm);
  app.use(ElFormItem);
  app.use(ElInput);
  app.use(ElCheckbox);
  // app.use(ElScrollbar);
  // app.use(ElDropdown);
  // app.use(ElSelect);
  // app.use(ElTable);
  // app.use(ElMenu);
  // app.use(ElBreadcrumb);
  // app.use(ElIcon);
  // app.use(ElAvatar);
  // app.use(ElMessage);
  // app.component("Edit", Edit);
  // app.component("Tools", Tools);
  // app.component("Location", Location);
  // app.component("Setting", Setting);
}
