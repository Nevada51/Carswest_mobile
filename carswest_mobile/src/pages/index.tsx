import React, {useState} from 'react'
// import { Link } from 'gatsby'

import Header from '../components/Header/Header'
import Menu from '../components/Header/Menu'
import Advantages from '../components/Advantages/Advantages'
import Delivering from '../components/Delivering/Delivering'
import AboutCompany from '../components/aboutCompany/aboutCompany'
import InNumbers from '../components/InNumbers/InNumbers'
import PopularCars from '../components/PopularCars/PopularCars'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

import ScrollableAnchor, { configureAnchors }  from 'react-scrollable-anchor'
import MainPageFirstScreen from '../components/FirstBlock/FirstBlock'
import '../layouts.scss'

const IndexPage: React.FC = (): JSX.Element => {

  const [isOpened, changeOpen] = useState<boolean>(false);

  configureAnchors({})

  return (
    <>
      <section id="top">
          <Header isOpened={isOpened} changeOpen={changeOpen}/>
          <Menu isOpened={isOpened} changeOpen={changeOpen}/>
          <MainPageFirstScreen />
      </section>
      <section id="advantages">
        <Advantages />
      </section>
      <section id="delivering">
        <Delivering />
      </section>
      <section id="aboutCompany">
        <AboutCompany />
      </section>
      <section id="inNumbers">
        <InNumbers />
      </section>
      <section id="popularCars">
        <PopularCars />
      </section>
      <section id="form">
        <Form />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )

}

export default IndexPage
