import Image from "next/image";

const services = [
  {
    icon: "assets/services/icon-6.6.svg",
    title: "",
    description: "Деньги под залог всех видов транспорта",
  },
  {
    icon: "assets/services/icon-3.3.svg",
    title: "",
    description: "Положительное решение уже через 30 мин",
  },
  {
    icon: "assets/services/icon-4.4.svg",
    title: "",
    description: "Бесплатная проверка и оценка автомобиля",
  },
  {
    icon: "assets/services/icon-2.svg",
    title: "",
    description: "Договор займа без мелкого шрифта и скрытых платежей",
  },
  {
    icon: "assets/services/icon-1.svg",
    title: "",
    description: "Без сбора справок, только уд. личности и тех.паспорт",
  },
  {
    icon: "assets/services/icon-5.5.svg",
    title: "",
    description: "Не занижаем рыночную стоимость. Выдаем деньги в день обращения",
  },
];

const Services = () => {
  return (
    <section className="relative z-40 bg-secondary/0 xl:bg-white mt-[20px]">
      <div>
        <p className="h3 text-center text-primary text-xl mb-[65px] pt-[20px]">
          Преимущества обращения в наш Автоломбард
        </p>
      </div>
      <div className="container mx-auto text-xs font-light text-justify">
        <ul className="justify-center text-center items-center relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[5px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="mb-1 border-b-2 border-accent/50 hover:border-secondary bg-accent/0 shadow-custom p-2 max-w-[290px] md:max-w-none rounded-lg flex justify-center items-center gap-1 text-center"
              >
                <Image
                  src={service.icon}
                  width={29}
                  height={29}
                  alt=""
                  className="mb-0"
                />
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px] font-normal justify-center items-center text-center">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
