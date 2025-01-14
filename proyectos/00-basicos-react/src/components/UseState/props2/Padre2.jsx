import { useState } from "react"

const Padre2 = (props) => {
  return (
    <>
        <div>Hola soy tu padre</div>

        {props.children}
    </>

  )
}

export default Padre2