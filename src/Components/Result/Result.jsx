import React from 'react'
import { assets } from '../../assets/assets'
import './Result.css'

const Result = ({ result, loading, question }) => {
  return (
    <>
      <div className="result">
        <div className="result-tittle">
          <img src={assets.user_icon} alt="" />


        </div>
        <div className="result-data">

          <img src={assets.gemini_icon} alt="" />
          {!loading
            ? <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            : <>
              <p className="question bubble">
                {question}
              </p>
              <div className="bubble result-style">
                {result.map((para)=>{
                  return <p>{para}</p>
                })}
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Result