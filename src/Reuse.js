import React from 'react'
import Route1 from './route'

export default function Reuse() {
    const Data=[{Address:"UserDeatils",
                  component:"Auth"},
                  {Address:" ShareFile",
                  component:"Auth"},
                  {Address:"DocuSign",
                  component:"Auth"},
                  {Address:"SendBird",
                  component:"Auth"},
                  {Address:"Notification",
                  component:"Auth"},
                  {Address:"CalendarMain",
                  component:"Auth"},
                  {Address:"ClientUser",
                  component:"Auth"},
                  {Address:"ProfileSetting",
                  component:"Auth"} ]
    
  return ( <div>
    <div>Reuse</div>
    <div>
        {
            Data.map(function(obj,i){
               return <Route1 path={obj}/>
            })
        }
    </div>
    </div>

  )
}
