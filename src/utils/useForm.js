import { useState } from 'react'

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults)

  function updateValue(e) {
    let { name, value } = e.target
    if (e.target.type === 'number') {
      value = parseInt(value)
    }
    setValues({
      ...values,
      [name]: value,
    })
  }

  return { values, updateValue }
}

// Provided by Wes Bos @ wesbos.com/courses (Master Gatsby Course)
// Modified September 2023 to handle dynamic fields using ChatGPT v.3.5
