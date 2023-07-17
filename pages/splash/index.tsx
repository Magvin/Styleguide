import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("@/components/Pages/Splash"), {
  ssr: false,
});

const Splash = () => <SplashScreen />;

export default Splash;
