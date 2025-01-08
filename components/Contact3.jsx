import { useState, useEffect } from "react";
// form spree
import { useForm, ValidationError } from "@formspree/react";
import { Link as ScrollLink } from "react-scroll";
import AnimatedText from "./AnimatedText";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  // add your formspree key
  const [state, handleSubmit] = useForm("xovvpdor");

  // state for form inputs
  const [formData, setFormData] = useState({
    phone: "",
    message: "",
  });

  // state to control icon visibility and button text
  const [showIcon, setShowIcon] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // clear the form after submission and handle message visibility
  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true); // show the success icon
      // clear for inputs
      setFormData({
        phone: "",
        message: "",
      });

      // hide the icon and revert button text after 3 seconds
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      // clean up the timer on component unmount or before re-running effect
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    handleSubmit(formData); // call formspree's submit handler with formData
  };

  return (
    <section className="pt-[70px] xl:pt-15 pb-5 mb-[20px] bg-accent/0 mt-[-50px] xl:bg-white" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
          <div>
              <p className="h3 font-bold w-[300px] text-center text-primary mb-[2px]">
              Остались вопросы?
                </p>
            </div>
            <div>
              <p className="text-[15px] font-normal w-[300px] text-center text-primary mb-[15px]">
              Специалисты Автоломбард Прогресс ответят на все!
                </p>
            </div>
            <div className="flex gap-1 px-5 justify-center text-center items-center">
             <Link href={"https://wa.me/+77014191890"}>
            <button className="justify-centre items-center text-center w-[80px] h-[80px] text-[12px] bg-accent hover:bg-accent text-white font-semibold py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full">Whats App</button>
          </Link>
          <Link href='https://2gis.kz/almaty/firm/9429940001487182/tab/reviews'>
          <button className="justify-centre items-center text-center text-[12px] bg-accent hover:bg-accent text-white font-semibold py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full mb-3">Отзывы 2GIS</button>
          </Link>
          <Link href='tel:77750073395'>
          <button className="justify-centre items-center text-center w-[80px] h-[80px] text-[12px] bg-accent hover:bg-accent text-white font-semibold py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full mb-3">Контакт центр</button>
          </Link>
            </div>
            {/* form */}
          </div>
          {/* image */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
