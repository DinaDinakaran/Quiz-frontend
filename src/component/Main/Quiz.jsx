import React, { useEffect, useState } from 'react'
import "./quiz.css"
import axios from 'axios'
import { url } from '../../App'
import { useNavigate } from 'react-router-dom'
export default function Quiz({ mapcount, map }) {
  const [question, setQuestion] = useState( 1)
  const [result, setResult] = useState([])
  const navigator = useNavigate()

  async function getdata() {
    const value = await axios.get(url + "/" + question)
    setResult(value.data)
  }
  useEffect(() => {
    getdata()
  }, [question])
  console.log(map.length)
  const handlesubmit = async (Answer, Question) => {
    mapcount(question);
    await axios.post(`${url}/`,{
      answer : Answer,
      question : Question
    })

  }
  const handlenext = () => {
    const count = question + 1
    if (count <= 5) {

      setQuestion(count)
    } else {
      navigator('/end')
    }
  }
  const handleprevious = () => {
    const count = question - 1
    if (count > 0) {

      setQuestion(count)
    } else {
      alert("Don't Back")
    }
  }

  return (
    <div className='container'>
      <div className="title">Challenge Your Brain</div>
      <div className="mainmatter">
        <div className="pages">
          <div className="quiz-title">Quiz Title</div>
          <div className="questionnumber">Question : {question}</div>
          {result.map((item) => {
            return (
              <>
                <div key={item.id} className="question">{item.question}</div>
                {
                  item.options.map((option) => {
                    return (
                      <div className='option-btn'>
                        <button className='option-btn-run' onClick={() => handlesubmit(option, item.question)}>{option}</button>
                      </div>

                    )
                  })
                }
              </>
            )
          })

          }
          <div className="navication-btns">
            <button className="previous" onClick={handleprevious}>Previous</button>
            <button className="next" onClick={handlenext}>Next</button>
          </div>
          <div className="explanation">
            <div className="explanation-title">Explanation :</div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus velit pariatur, ratione voluptas molestias nesciunt laborum minima. Repellendus, sequi minus!
          </div>
        </div>
        <div className="rodemap">
          <div className="info">
            <div className="qutioncount">
              Question :
              <span className='qus-number'>{question}</span>
              / 5
            </div>
            <div className="needhelp">Need Help ?</div>
          </div>
          <div className="rodemap-btn">
            <button className={map.length >= 1 ? "Onaction" : "action"} >1</button>
            <button className={map.length >= 2 ? "Onaction" : "action"}>2</button>
            <button className={map.length >= 3 ? "Onaction" : "action"}>3</button>
            <button className={map.length >= 4 ? "Onaction" : "action"}>4</button>
            <button className={map.length >= 5 ? "Onaction" : "action"}>5</button>
          </div>
        </div>
      </div>
    </div>
  )
}
