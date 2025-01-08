import Image from "next/image";
import { motion } from "framer-motion";
// components
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-15 pb-12 bg-accent/0 xl:bg-white" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#ffff] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/about/img1.2.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=""
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-1/4 -right-[60px] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-2.svg"
                    width={140}
                    height={140}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-black">
                  <div className="text-5xl font-bold leading-none">14</div>
                  <div className="leading-none text-center">
                    лет <br /> на рынке
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[55%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="Получить деньги у нас проще, чем в банке" textStyles="h3 mb-2" />
              <p className="text-xm">Выдадим наличные с любой кредитной историей и без сбора справок!</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-[-10px] text-justify">
            Автоломбард Прогресс предлагает выгодные условия получения займа под залог авто. 
            Получите до 80% стоимости автомобиля под ставку 3.15% в месяц. 
            Для того, чтобы получить деньги под залог в г.Алматы, необходимо всего 2 документа: 
            удостоверение личности и тех.паспорт на автомобиль.
            </p>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-[-10px] text-justify">
            Заложить авто (без сдачи машины с правом управления) в автомобильный Ломбард: 
            срочно, без справок и без подтверждения доходов.
            </p>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2 text-justify">
            Процедура довольно проста: Вам достаточно приехать в Автоломбард, 
            после чего Ваш автомобиль будет оценен и, если предложенные условия Вам подойдут, 
            специалисты помогут оформить все документы. 
            Мы работаем 6 дней в неделю.
            </p>
            {/* info items */}
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
              {/* item 1 */}
          
              {/* item 2 */}
             
              {/* item 3 */}
            
              {/* item 4 */}
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
