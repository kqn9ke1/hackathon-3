import React from "react";
import "../Hero/hero.css";
import Footer from "../Footer/Footer";
import { IconButton } from "@mui/material";
const Hero = () => {
  return (
    <>
      <div className="hero_bg">
        <div className="tinder_logo">
          <img
            className="tinder_logo_img"
            src="https://www.tinderpressroom.com/download/wordmark-R-white-RGB.png"
            alt="Tinder logo"
          />
        </div>

        <h1>Знакомься. Общайся. Встречайся. Это наш девиз.</h1>
        <br />
        <div className="collage_container">
          <div className="collage_of_img">
            <img
              src="https://images.firstpost.com/wp-content/uploads/2020/07/tinder-verified.jpg?impolicy=website&width=320&height=180"
              alt=""
            />
            <div className="text_of_collage">
              <p>
                Делись интересами и узнавай больше о своих парах, находи общие
                темы и приятных собеседников.
              </p>
            </div>
          </div>
          <br />
          <div className="collage_of_img">
            <div>
              <p>
                В Tinder ты сможешь знакомиться с людьми по всему миру и
                получать положительные эмоции:
              </p>
            </div>
            <img
              src="https://content.fortune.com/wp-content/uploads/2021/10/Tinder-app-screens.jpg"
              alt=""
            />
          </div>
          <br />
          <div className="collage_of_img">
            <img
              src="https://www.rollingstone.com/wp-content/uploads/2021/10/Explore-Plus-One.jpg"
              alt=""
            />
            <div>
              <p>
                Для кого-то мы «самое надёжное приложение для поиска пар», для
                других — «самый популярный в мире сайт для знакомств». Мы не
                знаем, кем станем для тебя, но точно поможем найти компанию
                поблизости.
              </p>
            </div>
          </div>
          <br />
        </div>
        <h1>Знакомиться с новыми людьми в Tinder® просто и увлекательно.</h1>

        <div className="reg_btn">
          <IconButton
            id="button"
            LinkComponent={"a"}
            href="/auth"
            sx={{
              background: "rgba(255, 255, 255, 0)",
              padding: "20px 40px",
              textAlign: "center",
              color: "white",
              border: "2px solid white",
              borderRadius: "50px",
              fontSize: "30px",
              transition: "1.5s",
              marginBottom: "100px",
            }}
          >
            Войти
          </IconButton>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
