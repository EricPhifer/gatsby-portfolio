import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Basics = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    padding-bottom: 1rem;
  }
  label input[type='checkbox'] {
    margin-left: 1rem;
  }
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
  border: 0.2rem solid var(--intake-foreground);
  border-radius: 0.5rem;
  &:after {
    content: '√';
    position: absolute;
    display: none;
  }
`

export default function BasicInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Basic Info
    name: '',
    businessname: '',
    email: '',
    websiteemail: '',
    phone: '',
    address: '',
    map: '',
  })
  return (
    <Basics>
      <p>Let's get some basics out of the way first:</p>
      <label className="hidden" htmlFor="name">
        Name
      </label>
      <input
        name="name"
        id="name"
        type="text"
        value={values.name}
        onChange={updateValue}
        placeholder="Name"
      />
      <label className="hidden" htmlFor="businessname">
        Business Name
      </label>
      <input
        name="businessname"
        id="businessname"
        type="text"
        value={values.businessname}
        onChange={updateValue}
        placeholder="Business Name"
      />
      <label className="hidden" htmlFor="email">
        Contact Email
      </label>
      <input
        name="email"
        id="email"
        type="text"
        value={values.email}
        onChange={updateValue}
        placeholder="Email for me to contact you (if different)"
      />
      <label className="hidden" htmlFor="websiteemail">
        Website Email
      </label>
      <input
        name="websiteemail"
        id="websiteemail"
        type="text"
        value={values.websiteemail}
        onChange={updateValue}
        placeholder="Email for customers to contact you"
      />
      <label className="hidden" htmlFor="phone">
        Phone Number
      </label>
      <input
        name="phone"
        id="phone"
        type="text"
        value={values.phone}
        onChange={updateValue}
        placeholder="Phone Number (for website use, optional)"
      />
      <label className="hidden" htmlFor="address">
        Address
      </label>
      <input
        name="address"
        id="address"
        type="text"
        value={values.address}
        onChange={updateValue}
        placeholder="Address (for website use, optional)"
      />
      <label className="full checkbox">
        <input
          name="map"
          id="map"
          type="checkbox"
          value="Include a Map"
          onChange={updateValue}
        />
        Add a map to this address
        <Checkmark className="checkmark" />
      </label>
    </Basics>
  )
}
