import React, { useState } from "react";
import "./Slider.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import mobile from "../../images/mobile.jpg";
import { SliderData } from "./Slider.data";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const moveDot = (index) => {
    setCurrent(index);
  };

  return (
    <>
      <section className="containerSlide">
        <div className="iconBtnL" onClick={prevSlide}>
          <SlArrowLeft className="arrow" />
        </div>
        <div className="iconBtnR" onClick={nextSlide}>
          <SlArrowRight className="arrow" />
        </div>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              hey={index}
            >
              {index === current && (
                <img className="img" src={slide.image} alt="slide" />
              )}
            </div>
          );
        })}

        <img className="imgMobile img" src={mobile} alt="imagem mobile" />

        <div className="container-square">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index)}
              className={current === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>

        <div className="principalTexto">
          <h1 className="principalTitulo">
            Create Amazing Websites <br />
            With Amazing Graphics
          </h1>
          <p className="principalParagrafo">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elit. Non incidunt Lorem ipsum dolor.
          </p>
          <div className="principalBtn">
            <button className="btnExplore">explore more</button>
            <button className="btnExplore btnBuy">buy now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
