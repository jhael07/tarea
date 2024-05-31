import { useEffect } from "react";
import { Slot, router } from "expo-router";

const layout = () => {
  useEffect(() => {
    router.push("/(tabs)");
  }, []);

  return <Slot />;
};

export default layout;
