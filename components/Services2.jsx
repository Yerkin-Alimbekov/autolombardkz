import Image from "next/image";

const services = [
  {
    icon: "assets/services/icon-7.svg",
    title: "Работаем под контролем НБ РК",
    description: "Номер лицензии: 02.21.0058.L.",
  },
  {
    icon: "assets/services/icon-7.svg",
    title: "Безопасно!",
    description: "Зарабатываем на %, а не на продаже авто",
  },

];

const Services = () => {
  return (
    <section className="relative z-40 bg-accent/0">
      <div>
        <p className="h3 text-center text-primary text-[18px] text-xl mb-30 pt-[20px] px-[70px]">
         
        </p>
      </div>
      <div className="container mx-auto text-xs font-light text-justify">
        <ul className="justify-center text-center items-center relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[5px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="border-b-2 border-accent/50 hover:border-secondary bg-accent/0 shadow-custom p-2 max-w-[380px] md:max-w-none rounded-lg flex gap-3"
              >
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt=""
                  className="mb-0"
                />
                <h3 className="mt-[20px] text-[15px] text-primary font-semibold">
                  {service.title}
                </h3>
                <p className="mt-[20px] text-[15px] justify-center items-center text-center text-bold text-primary">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
