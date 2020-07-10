import React from 'react'
import './AboutCompany.scss'

const AboutCompany: React.FC = (): JSX.Element => {
  return (
    <div className="about-company">
      <h2 className="section-title"><span>о компании </span>carsfromwest</h2>
      <p className="about-company_info">
        Наша компания является дилером автомобилей из США уже 5 лет. Найдем любой автомобиль , под любой вкус наших клиентов.
        Берем на себя хлопоты по растоможке, сертификации и если необходимо ремонту Вашего автомобиля!
        Мы оказываем услуги по подбору и пригону авто из США в Украину. Сайт нашей компании зарегистрирован еще в 2005 году, и это делает нашу компанию одной из самой "долгоживущей" на рынке.
      </p>
      <div className="about-company_slider">

      </div>
    </div>
  )
}

export default AboutCompany
