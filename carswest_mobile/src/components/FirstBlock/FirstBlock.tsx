import React from 'react'
import './FirstBlock.scss'
import AccentIcon from '../../assets/images/logistics_icon.inline.svg'
import ScroolDown from '../../assets/images/scroll_down.inline.svg'
import Scrollchor from 'react-scrollchor';

const MainPageFirstScreen: React.FC = (): JSX.Element => {
  return (

    <>
      <div className="bg"></div>

      <div className="FirstScreen">
        <div className="main-info">

          <div className="opacity-block">

            <div className="main-info_wrapper">

              <h1 className="main-info_title">АВТО ИЗ США С ЭКОНОМИЕЙ ДО 40%</h1>
              <p className="main-info_subtitle">Мы поможем Вам подобрать, приобрести и экспортировать любое транспортное средство.</p>

              <div className="btns-wrapper">
                <Scrollchor to="#form"><button type="button" className="btn btn-color">Связаться с нами</button></Scrollchor>
                <Scrollchor to="#form"><button type="button" className="btn">Получить просчёт</button></Scrollchor>
              </div>

              <div className="accent-line">
                <div className="accent-line_icon">
                    <AccentIcon />
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="scroll-down-icon">
          <span>SCROLL</span>
          <ScroolDown />
        </div>

      </div>
    </>

  )
}

export default MainPageFirstScreen
