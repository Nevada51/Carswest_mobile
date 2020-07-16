import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Menu from '../components/Header/Menu'
import ThanksMessage from '../components/ThanksMessage/ThanksMessage'


const ThanksPage: React.FC = (): JSX.Element => {

  const [isOpened, changeOpen] = useState<boolean>(false);

  return (
    <>
      <Header isOpened={isOpened} changeOpen={changeOpen}/>
      <Menu isOpened={isOpened} changeOpen={changeOpen}/>
      <ThanksMessage />
    </>
  )
}



export default ThanksPage
