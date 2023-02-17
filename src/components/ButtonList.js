import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const items= ["All", "Soccer", "News","Entertainment","Cricket","Football","Movies","Gaming","Cooking","Live","Travel","Photography","Spirituality"]
  return (
    items.map(item=>(
    <div key={item}>
      <Button key ={item} name={item}/>
    </div>
    ))
  )
}

export default ButtonList