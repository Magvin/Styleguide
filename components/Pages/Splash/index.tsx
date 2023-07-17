import Layout from "@/components/Layout";
import { useEffect, useMemo, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface Splash {
  title: string;
  description: string;
  bgColor: string;
}

const splashScreens: Record<string, Splash> = {
  "1": {
    title: "Apply on the go",
    description: "Be the first one to apply for the part!",
    bgColor: "cUfirst",
  },
  "2": {
    title: "Get discovered",
    description:
      "Chats, feed, swipes.. Create a Styleguide profile adjusted to showcase your skills and get you highlighted",
    bgColor: "cUsecond",
  },
};

const SplashScreen = () => {
  const [stage, setStage] = useState("1");
  const splashStage = useMemo(() => splashScreens[stage], [stage]);

  useEffect(() => {
    const value = localStorage.getItem("splashStage");
    if (!value) return;
    setStage(value);
  }, [stage]);

  return (
    <Layout initial={0}>
      <main
        className={`flex min-h-screen flex-col justify-center bg-${splashStage.bgColor} ${inter.className} text-white font-bold`}
      >
        <div className="text-4xl max-w-[50%] border-l-[10px] pl-[10px]">
          {splashStage.title}
        </div>
        <p className="font-normal pl-5 max-w-[60%] mt-4">
          {splashStage.description}
        </p>
        <button
          className="btn text-white font-medium text-lg mt-20"
          onClick={() => {
            const parsedStage = parseInt(stage);
            if (
              parsedStage !== parseInt(Object.keys(splashScreens).at(-1) ?? "1")
            ) {
              const stringValue = `${parsedStage + 1}`;
              localStorage.setItem("splashStage", stringValue);
              setStage(stringValue);
            }
          }}
        >
          Next {"->"}
        </button>
      </main>
    </Layout>
  );
};

export default SplashScreen;
