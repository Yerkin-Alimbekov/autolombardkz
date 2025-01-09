import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";

const Journey = () => {
  return (
    <section id="journey">
      <div className="container mx-auto">
        <AnimatedText
          text="Требования / Типы транспорта / Калькулятор"
          textStyles="h3 mb-[20px] text-center"
        />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;
