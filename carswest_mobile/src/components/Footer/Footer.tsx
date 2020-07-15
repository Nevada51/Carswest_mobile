import React from 'react'
import './Footer.scss'
import { Link } from 'gatsby'
import Scrollchor from 'react-scrollchor';

import PhoneWhiteIcon from '../../assets/images/phone_white.inline.svg'
import MailIcon from '../../assets/images/mail_icon.inline.svg'
import MapIcon from '../../assets/images/map_icon.inline.svg'
import Logo from '../../assets/images/Logo.inline.svg'
import Message from '../../assets/images/message_icon.inline.svg'

import Telegram from '../../assets/images/telegram.inline.svg'
import Instagram from '../../assets/images/instagram.inline.svg'
import Youtube from '../../assets/images/youTube.inline.svg'
import Facebook from '../../assets/images/facebook.inline.svg'



const Footer: React.FC = (): JSX.Element => {

  return (
    <>
    <footer className="footer">
      <div className="footer-map">

      </div>

      <div className="footer-logo">
        <Link to="/" className="header-logo-link">
          <Logo />
        </Link>
      </div>

      <div className="contacts" id="contacts">
        <h4 className="contacts-title">Контакты</h4>
        <ul className="contacts-list">
          <a href="tel:+0443343869" className="tel contacts-item"> <PhoneWhiteIcon /> (044) 334-38-69</a>
          <a href="tel:+380634688818" className="tel contacts-item"> <PhoneWhiteIcon /> +380 (63) 468-88-18</a>
          <a href="tel:+380979838888" className="tel contacts-item"> <PhoneWhiteIcon /> +380 (97) 983-88-88</a>
          <a href="mailto:info@carswest.com.ua" className="mail contacts-item"> <MailIcon /> info@carswest.com.ua</a>
          <span className="map contacts-item"> <MapIcon /> г. Киев, пер. Коломиевский, 20</span>
        </ul>
      </div>

      <h4 className="links-list-title">Дополнительные страницы</h4>
      <ul className="links-list">
        <Scrollchor to="#top">Главная</Scrollchor>
        <Scrollchor to="#advantages">Преимущества сотрудничества с нами</Scrollchor>
        <Scrollchor to="#delivering">Процесс доставки авто из США</Scrollchor>
        <Scrollchor to="#aboutCompany">О нашей компании</Scrollchor>
        <Scrollchor to="#popularCars">Популярные авто из США</Scrollchor>
        <Scrollchor to="#form">Заявка на выгодные предложения</Scrollchor>
        <Scrollchor to="#contacts">Контакты</Scrollchor>
      </ul>

      <div className="work-time">
        <h4 className="work-time_title">ГРАФИК РАБОТЫ</h4>
        <span className="work-time_item">Пн-Пт 9:00-19:00</span>
        <span className="work-time_item">Сб-Вс 10:00-18:00</span>
      </div>

      <div className="support-service">
        <a href="tel:+0800215804" className="support-service_icon">
          <Message />
        </a>
        <div className="support-service-text">Служба поддержки</div>
      </div>

      <div className="footer-social">
        <div className="footer-social-title">ПОДПИСЫВАЙТЕСЬ НА НАС</div>
        <div className="footer-social_list">
          <a href="#" className="footer-social_item"><Telegram/></a>
          <a href="#" className="footer-social_item"><Instagram/></a>
          <a href="#" className="footer-social_item"><Youtube/></a>
          <a href="#" className="footer-social_item"><Facebook/></a>
        </div>
      </div>
    </footer>
    <div className="footer-copyright">
      © Copyright - Все права защищены 2020. CARSFROMWEST
    </div>
    </>
  )
}

export default Footer
