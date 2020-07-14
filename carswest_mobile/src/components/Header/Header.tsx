import React from 'react'
import { Link } from 'gatsby'
import './Header.scss'
import Logo from '../../assets/images/Logo.inline.svg'
import PhoneIcon from '../../assets/images/phone_white.inline.svg'
import {IMenu} from './Types'

const Header: React.FC<IMenu> = ({isOpened,changeOpen}): JSX.Element => {
//  const [isOpened, changeOpen] = useState<boolean>(false);
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <Logo />
        </Link>
      </div>
      <div className="phone">
        <a href="tel:+0800215804">0 800 215 804</a>
        <div className="phone_subtext">бусплатно по Украине</div>
      </div>
      <div className="phone-icon">
        <a href="tel:+0800215804">
          <PhoneIcon />
        </a>
      </div>
      <div className="burger-btn" onClick={() => {console.log('click'), changeOpen(!isOpened)}}>
        <span></span>
      </div>
    </header>
  )
}

export default Header
