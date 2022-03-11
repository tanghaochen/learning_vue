import { useRouter } from "vue-router";

const RouterPush = () => {
  const route = useRouter();
  return (path: string) => {
    route.push(path);
  };
};

export {RouterPush};
