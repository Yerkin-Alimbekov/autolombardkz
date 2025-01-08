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
                  src="/assets/about/img-1.3.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=""
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[60px] flex items-center justify-center">
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
                    width={170}
                    height={170}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-[#13d648]">
                  <div className="text-[16px] font-bold leading-none mb-2">+ 7 701 419 1890</div>
                  <div className="text-[16px] font-bold leading-none">+ 7 775 007 3395</div>
                  <div className="leading-none text-center">
                    мы <br /> на связи!
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[55%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="Автоломбард Прогресс - Ваш надежный партнер!" textStyles="h3 mb-2" />
              <p className="text-xm">Автоломбард в Алматы - с правом управления, с любой кредитной историей.</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-[-10px] text-justify">
            ТОО "Ломбард Прогресс" - специализированное небанковское кредитное учреждение, 
            предоставляющее финансирование под залог автомобиля для частных лиц, юридических лиц и ИП. 
            Компания образована в 2011г. и является быстро развивающимся автомобильным ломбардом в городе Алматы. 
            Весомая часть наших клиентов - деловые люди, предприниматели и бизнесмены, которые знают цену 
            деньгам и времени. Наша услуга - займ под залог автомобиля, который позволяет нашим клиентам в 
            течение 30 минут решить любые финансовые вопросы и неотложные нужды.
            </p>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-[-10px] text-justify">
            Мы заинтересованы в выстраивании долгосрочных отношений с клиентами. В нашем офисе создана атмосфера,
            в которой каждый наш клиент будет чувствовать себя комфортно в окружении дружелюбного и профессионального коллектива. 
            В нашей команде работают одни из лучших экспертов по оценке автомобиля. 
            Сумма, которую мы готовы предоставить нашим клиентам 
            в день обращения достигает 39.5 млн тенге и ограничена только рыночной стоимостью автомобиля.
            </p>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2 text-justify">
            Автоломбард Прогресс продолжает развиваться и делает ставку на новые продукты, которые призваны 
            упростить выдачу займов.
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
