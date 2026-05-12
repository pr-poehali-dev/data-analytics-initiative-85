import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-yellow-400 text-sm mb-4 font-medium">Официальная лотерея</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ВЫИГРАЙ<br />БОЛЬШОЕ
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-10">
          Выбери свою комнату, присоединись к игре и испытай удачу вместе с тысячами участников
        </p>
        <a
          href="#rooms"
          className="inline-block bg-yellow-400 text-black font-bold uppercase tracking-wide px-8 py-4 text-sm hover:bg-yellow-300 transition-colors duration-300"
        >
          Выбрать комнату
        </a>
      </div>
    </div>
  );
}