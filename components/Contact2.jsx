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
    <section className="pt-[50px] xl:pt-15 pb-5 mb-[20px] bg-accent/0 mt-[-50px] xl:bg-white" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
          <div>
              <p className="h3 font-normal w-[300px] text-center text-primary mb-[15px]">
              Выдадим наличные с любой кредитной историей и без сбора справок!
                </p>
            </div>
            <div className="flex gap-8 px-5">
             <Link href={"https://wa.me/+77014191890"}>
            <button className="bg-accent hover:bg-accent text-white font-normal py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full">WhatsApp</button>
          </Link>
          <Link href='tel:77750073395'>
          <button className="bg-accent hover:bg-accent text-white font-normal py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full mb-3">Позвонить</button>
          </Link>
            </div>
          <div className="flex text-[12px] justify-center gap-2 mb-0">
            <p>или, закажите звонок и мы свяжемся с Вами</p>
          </div>
            {/* form */}
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4 w-full max-w-[480px]"
            >
              {/* firstname & lastname fields */}
                {/* firstname */}
              
                {/* lastname */}
      
              {/* email field */}
              {/* phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-0 text-[10px] font-medium text-primary"
                >
                 <span className="text-primary"></span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  className="input shadow-custom"
                  placeholder="укажите номер телефона"
                />
              </div>
              {/* message field */}
              {/*
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Напишите сообщение <span className="text-accent">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  id="message"
                  name="message"
                  value={formData.message}
                  className="textarea"
                  placeholder="ваше сообщение..."
                  rows="5"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              */}
              {/* submit button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <span>Отправляется...</span>
                ) : (
                  <>
                    {/* show icon with opacity transition */}
                    <FaCheckCircle
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {/* button text */}
                    <span
                      className={`bg-accent hover:bg-accent text-white font-normal py-2 px-4 mb-[0px] mt-[0px] border-b-2 border-secondary hover:border-secondary rounded-full ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      ЗАКАЗАТЬ ЗВОНОК
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          {/* image */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
