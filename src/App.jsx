import React, { useEffect, useState } from "react"

function App() {
  const [value, setValue] = useState('❌')
  const [arrX, setArrX] = useState([])
  const [arr0, setArr0] = useState([])
  const [gameOver, setGameOver] = useState('')
  const data = [
    {
      id: 'c0',
      className: "item"
    },
    {
      id: 'c1',
      className: "item"
    },
    {
      id: 'c2',
      className: "item"
    },
    {
      id: 'c3',
      className: "item"
    },
    {
      id: 'c4',
      className: "item"
    },
    {
      id: 'c5',
      className: "item"
    },
    {
      id: 'c6',
      className: "item"
    },
    {
      id: 'c7',
      className: "item"
    },
    {
      id: 'c8',
      className: "item"
    }
  ]
  const getID = (e) => {
    let a = Number((e.target.id).slice(1))
    if (value == "❌") {
      if (e.target.textContent == "❌" || e.target.textContent == "⭕️") {
        e.target.textContent = e.target.textContent
      } else {
        e.target.textContent = value
        setValue("⭕️")
        if (value == "❌") {
          setArrX(arrX => [...arrX, a])
        } else {
          setArrX(arrX => [...arrX, "a"])
        }
      }
    }
    if (value == "⭕️") {
      if (e.target.textContent == "❌" || e.target.textContent == "⭕️") {
        e.target.textContent = e.target.textContent
      } else {
        e.target.textContent = value
        setValue("❌")
        if (value == "⭕️") {
          setArr0(arr0 => [...arr0, a])
        } else {
          setArr0(arr0 => [...arr0, "a"])
        }
      }
    }
  }
  setInterval(() => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    win.forEach((e, i) => {
      const [a, b, c] = e;
      if (arrX.includes(a) && arrX.includes(b) && arrX.includes(c)) {
        setGameOver("❌ - Won")
      }
      if (arr0.includes(a) && arr0.includes(b) && arr0.includes(c)) {
        setGameOver("⭕️ - Won")
      }
    })
  }, 0)
  return (
    <>
      <div className="text-center">
        <h1 className="text-light-500 font-bold text-center text-[30px] block pt-50px">{gameOver ? gameOver : "Tic-Tac-Toe Game"}</h1>
        <button className="text-light-500 font-bold text-center text-[20px] uppercase px-[15px] py-[10px] mt-5 border-[2px] border-[#b4b8ab] rounded-[50em] disabled:cursor-default disabled:text-transparent disabled:border-transparent" disabled={!gameOver} onClick={() => window.location.reload()}>restart</button>
      </div>
      <div className="container mx-auto w-full mt-20px flex items-center justify-center">
        <div className="box w-[300px] h-[300px] flex-wrap flex items-center mx-auto">
          {data?.map((res, index) => {
            return (
              <button disabled={gameOver} key={index} onClick={(e) => getID(e)} className={res?.className + " w-100px h-100px border-[2px] border-[#b4b8ab] flex items-center justify-center text-[50px] font-bold m-0 p-0 cursor-default"} id={res?.id}>{''}</button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
