import React from 'react'
import './Delivering.scss'
import SedanIcon from '../../assets/images/sedan_icon.inline.svg'

const Delivering: React.FC = (): JSX.Element => {
  return (
    <div className="delivering">
      <h2 className="section-title"><span>Процесс доставки </span>авто из США</h2>
      <div className="delivering-steps">
        <div className="delivering-item">
          <div className="delivering-item_number">01</div>
          <div className="delivering-item_info">
            <div className="delivering-item_title">Выбор критерий подбора авто</div>
            <div className="delivering-item_text">Определяемся с клиентом по критериям подбора авто: год, марка, бюджет и начинаем поиск идеального варианта. Мы проверяем историю выбранного вами автомобиля, количество предыдущих владельцев, пробег, были ли ДТП и множество других критериев. </div>
          </div>
        </div>
        <div className="delivering-item">
          <div className="delivering-item_number">02</div>
          <div className="delivering-item_info">
            <div className="delivering-item_title">Участвие в торгах наших экспертов</div>
            <div className="delivering-item_text">Наши эксперты участвуют в торгах, покупая ваш будущий автомобиль за указанный бюджет. Выкупленные машины доставляются в Украину в самые сжатые сроки, причем вы всегда можете отследить местонахождение своего приобретения по спецкоду.</div>
          </div>

        </div>
        <div className="delivering-item">
          <div className="delivering-item_number">03</div>
          <div className="delivering-item_info">
            <div className="delivering-item_title">Организация экспедиторских услуг</div>
            <div className="delivering-item_text">Представители компании встречают ваш автомобиль в порту, организовывают экспедиторские услуги, выгружают транспорт из контейнера и проводят все необходимые таможенные процедуры.</div>
          </div>

        </div>
        <div className="delivering-item">
          <div className="delivering-item_number">04</div>
          <div className="delivering-item_info">
            <div className="delivering-item_title">Ремонт авто и подобор запчастей</div>
            <div className="delivering-item_text">При необходимости мы поможем подобрать оригинальные запчасти на ваш автомобиль, качественно отремонтировав и отрегулировав его. Сертификация автомобиля в Украине и постановка на учет.</div>
          </div>
        </div>
        <div className="delivering-item">
          <div className="delivering-item_number">05</div>
          <div className="delivering-item_info">
          <div className="delivering-item_title">Получение клиентом автомобиля</div>
          <div className="delivering-item_text">Конечная цель нашей работы — получение клиентом совершенно готового к эксплуатации авто.Поздравляем! Вы стали владельцем отличного авто!</div>
          </div>
        </div>
      </div>
      <div className="accent-line">
        <div className="accent-line_icon">
            <SedanIcon />
        </div>
      </div>
    </div>
  )
}

export default Delivering
