import React from 'react'
import { Link } from 'gatsby'
import './Menu.scss'
import PhoneIcon from '../../assets/images/phone_icon.inline.svg'
import MailIcon from '../../assets/images/mail_icon.inline.svg'
import MapIcon from '../../assets/images/map_icon.inline.svg'
import Logo from '../../assets/images/Logo.inline.svg'
import {IMenu} from './Types'

const Menu: React.FC<IMenu> = ({isOpened,changeOpen}): JSX.Element => {
  return (
    <div className={`menu  ${isOpened? 'open': 'close'}`} >
      <div className="menu-top">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            <Logo />
          </Link>
        </div>
        <div className="phone">
          <a href="tel:+0800215804">0 800 215 804</a>
          <div className="phone_subtext">бусплатно по Украине</div>
        </div>
        <div className="menu-top_close" onClick={() => changeOpen(!isOpened)}></div>
      </div>
      <div className="menu-info">

        <ul className="links-list"><a href="">Главная</a>
          <a href="">Преимущества сотрудничества С НАМИ</a>
          <a href="">Процесс доставки авто из США</a>
          <a href="">О нашей компании</a>
          <a href="">Популярные авто из Сша</a>
          <a href="">Заявка на выгодные предложения</a>
          <a href="">Контакты</a>
        </ul>

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

        <div className="work-time">
          <h4 className="work-time_title">ГРАФИК РАБОТЫ</h4>
          <span className="work-time_item">Пн-Пт 9:00-19:00</span>
          <span className="work-time_item">Сб-Вс 10:00-18:00</span>
        </div>

      </div>
    </div>
  )
}

export default Menu
