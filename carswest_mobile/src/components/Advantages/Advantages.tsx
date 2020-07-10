import React from 'react'
import './Advantages.scss'
import SupportIcon from '../../assets/images/support_icon.inline.svg'
import ShieldIcon from '../../assets/images/shield_icon.inline.svg'
import ShipIcon from '../../assets/images/ship_icon.inline.svg'

const Advantages: React.FC = (): JSX.Element => {
  return (
    <div className="advantages">
      <h2 className="section-title"><span>Преимущества </span>сотрудничества</h2>
      <ul className="advantages-list">
        <div className="advantages-item">
          <div className="advantages-item_img"><SupportIcon /></div>
          <h4 className="advantages-item_title">Помощь и рекомендации экспертов</h4>
          <div className="advantages-item_text">Мы поможем определиться с выбором автомобиля и подберем оптимальный вариант для ваших потребностей, который будет подходить под Ваш бюджет.</div>
        </div>
        <div className="advantages-item">
          <div className="advantages-item_img"><ShieldIcon /></div>
          <h4 className="advantages-item_title">Соблюдение бюджетных рамок</h4>
          <div className="advantages-item_text">Перед покупкой, менеджер делает предварительный расчет стоимости каждого автомобиля, за который мы будем бороться в аукционе. Мы даем Вам максимально понятный ориентир по конечной цене автомобиля на номерах.</div>
        </div>
        <div className="advantages-item">
          <div className="advantages-item_img"><ShipIcon /></div>
          <h4 className="advantages-item_title">Абсолютная сохранность груза</h4>
          <div className="advantages-item_text">Мы гарантируем безопасную доставку авто в морских контейнерах. Если возникают дополнительные повреждения Вашего авто во время перевозки по океану, мы компенсируем затраты или совершаем ремонт за свой счет. Также помогаем оформить все необходимые страховки на время перевозки океаном.</div>
        </div>
        <div className="advantages-item">
          <div className="advantages-item_img"><SupportIcon /></div>
          <h4 className="advantages-item_title">Уважение и доверие клиентов</h4>
          <div className="advantages-item_text">Каждое третье авто, которое у нас заказывают - это или повторная покупка клиента, или мы совершаем покупку для клиента, который пришел к нам по рекомендации других довольных покупателей. Согласитесь, это самый лучший показатель доверия к компании!</div>
        </div>
      </ul>
    </div>
  )
}

export default Advantages
