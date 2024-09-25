import React, { useState } from 'react'
import './Slidebar.css'
import { assets } from '../../assets/assets'

const Slidebar = ({recentPrompt}) => {
    const [extended, setExtended] = useState(false)
    return (
        <div className='slidebar'>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-tittle">Recent</p>
                        {
                            recentPrompt.length > 0 ? recentPrompt.map((question)=> {
                                return (
                                <div className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{question}</p>
                                </div>
                                )
                            }) : "No Recent Question"
                        }
                    </div>
                    : null
                }

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Slidebar