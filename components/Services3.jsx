import Image from "next/image";

const services = [
  {
    icon: "assets/services/icon-9.1..svg",
    icon2: "assets/services/icon-9.2.svg",
    title: "Автомобиль уже в залоге?",
    description: "Рефинансируем по более выгодным условиям!",
  },

];

const Services = () => {
  return (
    <section className="relative z-40 bg-accent/0">
      <div>
        <p className="h3 text-center text-primary text-[18px] text-xl mb-30 pt-[50px] px-[70px]">
         
        </p>
      </div>
      <div className="container mx-auto text-xs font-light text-justify">
        <ul className="justify-center text-center items-center relative flex xl:grid-cols-2 gap-[5px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="border-b-2 border-accent/50 hover:border-secondary bg-accent/10 shadow-custom p-2 max-w-[380px] md:max-w-none rounded-lg flex gap-3"
              >
                <Image
                  src={service.icon}
                  width={45}
                  height={45}
                  alt=""
                  className="mb-0"
                />
                <h3 className="mt-[20px] text-[14px] text-primary font-normal">
                  {service.title}
                </h3>
                <Image
                  src={service.icon2}
                  width={55}
                  height={55}
                  alt=""
                  className="mb-0"
                />
                <p className="mt-[20px] text-[14px] justify-center items-center text-center font-normal text-primary">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;