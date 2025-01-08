"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Kalk from "../Kalk";

import {
  FaUser,
  FaCar,
  FaIdCard,
  FaCalculator,
  FaMotorcycle,
} from "react-icons/fa";
import {
GiCityCar,
GiTruck
} from "react-icons/gi";

const journey = [
  // experience
  {
    type: "experience",
    company: "",
    logoUrl: "/assets/journey/experience/client-1.svg",
    position: "Требования к заемщику",
    duration: "",
    description:
      "Возраст от 18 лет. Регистрация на территории РК. Вы собственник автомобиля или имеете нотариально заверенную доверенность на право им распоряжаться. Кредитная история не имеет значения. Никаких справок.",
  },
  {
    type: "experience",
    company: "",
    logoUrl: "/assets/journey/education/icon-6.6.svg",
    position: "Требования к автомобилю",
    duration: "",
    description:
      "На учете в любом регионе РК. Без юридичесих проблем. Любой год выпуска. В исправном техническом состоянии. Не находится в залоге.",
  },
  {
    type: "experience",
    company: "",
    logoUrl: "/assets/journey/experience/docs-1.svg",
    position: "Требования к документам",
    duration: "",
    description:
      "Удостоверение личности и тех.паспорт на автотранспорт.",
  },
  // education
  {
    type: "education",
    institution: "",
    logoUrl: "/assets/journey/education/icon-6.6.svg",
    qualification: "Легковые автомобили",
    duration: "",
    description:
      "Любая страна производитель. Любой год выпуска.",
  },
  {
    type: "education",
    institution: "",
    logoUrl: "/assets/journey/education/logo-3.svg",
    qualification: "Грузовые автомобили",
    duration: "",
    description:
      "Микроавтобусы, коммерческий транспорт.",
  },
  {
    type: "education",
    institution: "",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Спецтехника",
    duration: "",
    description:
      "Тракторы, погрузчики, эксковаторы, краны.",
  },
  {
    type: "education",
    institution: "",
    logoUrl: "/assets/journey/education/logo-4.svg",
    qualification: "Мототехника",
    duration: "",
    description:
      "Мотоциклы, квадроциклы, снегоходы.",
  },
  // skills
 
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[0px]">
          <TabsTrigger className="text-[16px] gap-[5px]" value="experience">
            <FaUser />
            <FaCar />
            <FaIdCard />
          </TabsTrigger>
          <TabsTrigger className="text-[22px] gap-[4px]" value="education">
            <GiCityCar />
            <GiTruck />
            <FaMotorcycle/>
          </TabsTrigger>
          <TabsTrigger className="text-[18px]" value="skills">
            <FaCalculator />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
          <div className="mt-[40px] w-full flex flex-col items-center">
          <Kalk />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
