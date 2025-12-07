import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1)
  }

  const decreament = () => {
    setCount(count - 1)
  }

  return (
    <div className="min-h-screen bg-black grid place-items-center">
      <div className="p-6 bg-gray-900 text-white rounded-xl flex flex-col items-center gap-4 shadow-lg">
        <h1 className="text-2xl font-semibold">Count : {count}</h1>

        <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition" onClick={increament} >
          Increment </button>

        <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition" onClick={decreament}>
          Decrement </button>
          
      </div>
    </div>
  )
}

export default Counter
