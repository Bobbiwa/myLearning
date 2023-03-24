import React from 'react'
import { Button } from 'antd'
const TestElements = () => {
  const [counter, setCounter] = React.useState(0)

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
      <button disabled data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
      <Button type="primary" data-testid="button-antd">
        Primary
      </Button>
    </>
  )
}

export default TestElements