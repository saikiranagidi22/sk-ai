import React, { useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import run from '../../config/sk'
import Result from '../Result/Result'

const Main = ({ setRecentPrompt, recentPrompt }) => {

    const [searchText, setSearchText] = useState("");
    const [input, setInput] = useState("");
    const [prevPrompt, setPrevPrompt] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(false)
        setShowResult(true)
        setRecentPrompt([searchText, ...recentPrompt]);
        setSearchText("")
        run(searchText).then((res) => {
            console.log(res)
            console.log(recentPrompt)
            setResultData(res)
            setLoading(true);
        });
    }

    return (
        <div className="main">
            <div className="nav">
                <p>SK-Ai</p>
                <img src={assets.user_icon} alt="" />
            </div>
            {
                !showResult ? <div className="main-container">
                    <div className="greet">
                        <p><span>Hello, GraK</span></p>
                        <p>How can i help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>One's reality might be another's Illusion.</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Suggest me some ideas</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorms team bonding activites for our work </p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve the readadility of the following code.</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>

                </div> : <Result result={resultData} loading={loading} question={recentPrompt[0]} />
            }
            <div className="main-bottom">
                <form className="search-box" onSubmit={handleSubmit}>
                    <input value={searchText} onChange={(event) => {
                        setSearchText(event.target.value)
                    }} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <button type="submit"><img src={assets.send_icon} alt="" /></button>
                    </div>
                </form>
                <p className="bottom-info">
                    Sk-Ai may display inaccurate info,including about people,so double-check its responses.Your privacy and Apps.
                </p>
            </div>
        </div>

    )
}

export default Main