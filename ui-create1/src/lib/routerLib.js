import { useRouter } from "vue-router";
import { computed } from "vue";
//--------------------------------------------------------------------
// 实时获取 路由的变化
const computedRouter = () => {
  const router = useRouter();
  // const router = useRouter();
  // const title = ref("I'M");
  // const des = ref("");
  //---------------------------三种方式监听router的改变-----------------------------------------

  // 第一种 watch
  // watch(
  //   router.currentRoute,
  //   ({ path, name }) => {
  //     const condition = path === "/" ? "I'M" : "";
  //     title.value = condition;

  //     const condition2 = path === "/" ? "Mark" : name;
  //     des.value = condition2;
  //     console.log(path, name);
  //   },
  //   {
  //     //第三个参数，一开始就监听
  //     immediate: true,
  //   }
  // );
  // 第二种 比watch更高级，监听响应渲染
  // watchEffect(() => {
  //   const { path, name } = router.currentRoute.value;
  //   const condition = path === "/" ? "I'M" : "";
  //   title.value = condition;

  //   const condition2 = path === "/" ? "Mark" : name;
  //   des.value = condition2;
  // });
  // 第三种 实时计算 更加简洁 但是现在却不能打印
  /**
   * 路径链接标识对象生成函数
   * @description 生成一个标识对象
   * @return {Object}
   *  @property {string} title 标题
   *  @property {string} des 描述
   */

  /**
   * 标题
   */
  const title = computed(() => {
    const { path } = router.currentRoute.value;
    return path === "/" ? "I'M" : "";
  });

  /**
   * 描述
   */
  const des = computed(() => {
    const { path, name } = router.currentRoute.value;
    return path === "/" ? "Mark" : name;
  });

  return { des, title };
  // vue文件使用instance
  // const { des, title } = computedRouter();
};

//--------------------------------------------------------------------
const routerPush = () => {
  const router = useRouter();
  /**
   * 路径跳转路由函数
   * @description 根据路径跳转对应路由
   * @param {string} path 路径
   */
  const toPage = (path) => router.push(path);

  return { toPage };
  // vue文件使用instance
  // const { toPage } = routerPush();
};

export { computedRouter, routerPush };
