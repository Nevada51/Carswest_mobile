import React from 'react'
import './InNumbers.scss'

import CarIcon from '../../assets/images/car_icon.inline.svg'
import MoneyIcon from '../../assets/images/money_icon.inline.svg'
import CalendarIcon from '../../assets/images/calendar_icon.inline.svg'

const InNumbers: React.FC = (): JSX.Element => {
  return (
    <div className="in-numbers">
      <h2 className="in-numbers_title">Итоги нашей работы в цифрах</h2>
      <div className="in-numbers_list">
        <div className="in-numbers_item">
          <div className="in-numbers_item-top">
            <div className="in-numbers_item-icon"><CarIcon /></div>
            <p className="in-numbers_item-value">2300 +</p>
          </div>
          <p className="in-numbers_item-text">Привезено машин</p>
        </div>
        <div className="in-numbers_item">
          <div className="in-numbers_item-top">
            <div className="in-numbers_item-icon"><CalendarIcon /></div>
            <p className="in-numbers_item-value">3 года</p>
          </div>
          <p className="in-numbers_item-text">Года на рынке Украины</p>
        </div>
        <div className="in-numbers_item">
          <div className="in-numbers_item-top">
            <div className="in-numbers_item-icon"><MoneyIcon /></div>
            <p className="in-numbers_item-value">10 565 000</p>
          </div>
          <p className="in-numbers_item-text">Сэкономлено денег клиентами</p>
        </div>
      </div>
      <div className="in-numbers_bg"></div>
    </div>
  )
}

export default InNumbers
