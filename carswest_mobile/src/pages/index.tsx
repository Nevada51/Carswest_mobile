import React, {useState} from 'react'
// import { Link } from 'gatsby'

import Header from '../components/Header/Header'
import Menu from '../components/Header/Menu'
import Advantages from '../components/Advantages/Advantages'
import Delivering from '../components/Delivering/Delivering'

import MainPageFirstScreen from '../components/FirstBlock/FirstBlock'
import '../layouts.scss'

const IndexPage: React.FC = (): JSX.Element => {

  const [isOpened, changeOpen] = useState<boolean>(true);

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
    </>
  )

}

export default IndexPage
