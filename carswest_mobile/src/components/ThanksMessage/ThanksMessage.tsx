import React from 'react'
import { Link } from 'gatsby'
import './ThanksMessage.scss'

const ThanksMessage: React.FC = (): JSX.Element => {

  return (
    <div className="ThanksMessage">
      <h1>Благодарим за отправку формы, мы свяжемся с Вами в ближайшее время.</h1>
      <Link className="btn" to="/">
        Перейти на главную
      </Link>
    </div>
  )
}

export default ThanksMessage


