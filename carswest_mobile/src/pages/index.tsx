import React, {useState} from 'react'
// import { Link } from 'gatsby'

import Header from '../components/Header/Header'
import Menu from '../components/Header/Menu'
import Advantages from '../components/Advantages/Advantages'
import Delivering from '../components/Delivering/Delivering'
import AboutCompany from '../components/aboutCompany/aboutCompany'
import PopularCars from '../components/PopularCars/PopularCars'

import MainPageFirstScreen from '../components/FirstBlock/FirstBlock'
import '../layouts.scss'

const IndexPage: React.FC = (): JSX.Element => {

  const [isOpened, changeOpen] = useState<boolean>(false);

  return (
    <>
      <section>
        <Header isOpened={isOpened} changeOpen={changeOpen}/>
        <Menu isOpened={isOpened} changeOpen={changeOpen}/>
        <MainPageFirstScreen />
      </section>
      <section>
        <Advantages />
      </section>
      <section>
        <Delivering />
      </section>
      <section>
        <AboutCompany />
      </section>
      <section>
        <PopularCars />
      </section>
    </>
  )

}

export default IndexPage
