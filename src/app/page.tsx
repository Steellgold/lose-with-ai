import type { ReactElement } from "react";
import { Bot, Sparkles } from "lucide-react";
import { Button, Card, CardHeader, Input, Link, cn } from "@nextui-org/react";

const HeroSection = (): ReactElement => {
  return <>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
      <h3 className="text-4xl mb-2 font-extrabold tracking-tight leading-none text-gray-950 md:text-5xl lg:text-6xl">
        Build your body with
        <span className="relative text-violet-500">
          <span className={cn(
            "absolute animate-rotateAnim",
            "top-6 left-[51px]",
            "md:top-10 md:left-[70px]",
            "lg:top-12 lg:left-[80px]"
          )}>
            <Bot size={24} />
          </span>
          <span className="relative">&nbsp;AI</span>
        </span>
      </h3>

      <p className="mb-8 text-lg font-normal text-gray-950 lg:text-xl sm:px-16 xl:px-48">
        Reach your weight loss goals with the help of AI. We will help you to lose weight and keep it off by making you eat less without hunger.
      </p>
    </div>

    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full">
        <Input
          placeholder="I want to lose weight, i'm 1m80 and 80kg. Just wa.."
          color="secondary"
          size="sm"
          className="w-full max-w-[500px]"
        />

        <Button color="secondary" variant="solid" className="ml-2" isIconOnly>
          <Sparkles size={18} />
        </Button>
      </div>

      <p className="text-center text-gray-950/60 text-sm mt-2">
        This is a sample example input, access to the <Link className="text-sm underline" href="/auth">app</Link> for a better experience
      </p>
    </div>
  </>;
};

const Home = (): ReactElement => {
  return <>
    <HeroSection />
  </>;
};

export default Home;