import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 text-center mb-4"
      >
        안녕하세요. 프론트엔드 개발자 손지우입니다.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-gray-600 text-center max-w-2xl"
      >
        사용자에게 직관적이고 감각적인 경험을 제공하는 웹 서비스를 만드는 걸 좋아합니다.
      </motion.p>
    </section>
  );
};

export default Intro;
