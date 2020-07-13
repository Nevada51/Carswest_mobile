import React, { useState } from 'react'
import './Form.scss'

const Form: React.FC = (): JSX.Element => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errFields, changeErrFields] = useState<string[]>([])

  const send = (e: React.MouseEvent) => {
    e.preventDefault()
    if (name.length > 2 && /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
      const body = {
        name,
        phone
      }
      fetch('/api/sendMail', {
        method: 'POST',
        body: JSON.stringify(body)
      })
        .then(response => {})
        .catch(err => {})
        .finally(() => {})
    } else {
      const tmp = []
      if (name.length < 2) tmp.push(name)
      if (/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone) === false) tmp.push(phone)
      changeErrFields(tmp)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePhoneMaskedInput = (e: any) => {
    console.log(e.key)
    if (!['Backspace', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      console.log(e.key)
      e.preventDefault()
      const mask = '+38 (111) 111-11-11'
      if (/[0-9+ \-()]/.test(e.key)) {
        let currentString = e.target.value
        const currentLength = currentString.length
        if (/[0-9]/.test(e.key)) {
          if (mask[currentLength] === '1') {
            setPhone(currentString + e.key)
          } else {
            for (let i = currentLength; i < mask.length; i += 1) {
              if (mask[i] === '1') {
                setPhone(currentString + e.key)
                break
              }
              currentString += mask[i]
            }
          }
        }
      }
    }
  }

  return (
    <div className="form-wrapper">
      <h2 className="section-title">Оставьте заявку сейчас</h2>
      <div className="form-wrapper_bg"></div>
      <form action="" className="form">
        <h3 className="form-title">Мы сделаем лучшие условия для сотрудничества!</h3>
        <div className="form-fields-wrapper form-fields-input-name">
          <input
            className={`form-fields-input ${errFields.includes(name) && 'form-fields-input-error'}`}
            type="text"
            placeholder="Введите Ваше имя"
            value={name}
            onChange={({ target: { value } }) => {
              setName(value)
            }}
          />
        </div>
        <div className="form-fields-wrapper form-fields-input-phone">
          <input
            className={`form-fields-input ${errFields.includes(phone) && 'form-fields-input-error'}`}
            type="text"
            placeholder="Введите Ваш Номер телефона"
            value={phone}
            onChange={()=>{}}
            // onKeyDown={handlePhoneMaskedInput}
          />
        </div>
        <div className="form-fields-wrapper form-fields-wrapper-button ">
          <input className="form-fields-submit" type="submit" value="ОТПРАВИТЬ ЗАЯВКУ НА ПРОЕКТ" onClick={send} />
        </div>
      </form>
    </div>
  )
}

export default Form
