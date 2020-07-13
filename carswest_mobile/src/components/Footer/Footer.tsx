import React from 'react'
import './Footer.scss'

import PhoneIcon from '../../assets/images/phone_icon.inline.svg'
import MailIcon from '../../assets/images/mail_icon.inline.svg'
import MapIcon from '../../assets/images/map_icon.inline.svg'
import Logo from '../../assets/images/Logo.inline.svg'
import { Link } from 'gatsby'

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer-map">

      </div>

      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <Logo />
        </Link>
      </div>

      <div className="contacts">
        <h4 className="contacts-title">Контакты</h4>
        <ul className="contacts-list">
          <a href="tel:+0443343869" className="tel contacts-item"> <PhoneIcon /> (044) 334-38-69</a>
          <a href="tel:+380634688818" className="tel contacts-item"> <PhoneIcon /> +380 (63) 468-88-18</a>
          <a href="tel:+380979838888" className="tel contacts-item"> <PhoneIcon /> +380 (97) 983-88-88</a>
          <a href="mailto:info@carswest.com.ua" className="mail contacts-item"> <MailIcon /> info@carswest.com.ua</a>
          <span className="map contacts-item"> <MapIcon /> г. Киев, пер. Коломиевский, 20</span>
        </ul>
      </div>

      <ul className="links-list"><a href="">Главная</a>
        <a href="">Преимущества сотрудничества С НАМИ</a>
        <a href="">Процесс доставки авто из США</a>
        <a href="">О нашей компании</a>
        <a href="">Популярные авто из Сша</a>
        <a href="">Заявка на выгодные предложения</a>
        <a href="">Контакты</a>
      </ul>

      <div className="footer-form">

      </div>

      <div className="work-time">
        <h4 className="work-time_title">ГРАФИК РАБОТЫ</h4>
        <span className="work-time_item">Пн-Пт 9:00-19:00</span>
        <span className="work-time_item">Сб-Вс 10:00-18:00</span>
      </div>

      <div className="support-service">
        <div className="support-service_icon"></div>
        <div className="support-service-text">Служба поддержки</div>
      </div>

      <div className="footer-social">
        <div className="footer-social-title">пОДПИСЫВАЙТЕСЬ НА НАС</div>
        <div className="footer-social_list">
          <div className="footer-social-item"></div>
          <div className="footer-social-item"></div>
          <div className="footer-social-item"></div>
          <div className="footer-social-item"></div>
        </div>
      </div>

      <div className="footer-copyright">
        © Copyright - Все права защищены 2020. carsfromwest
      </div>

    </footer>
  )
}

export default Footer
