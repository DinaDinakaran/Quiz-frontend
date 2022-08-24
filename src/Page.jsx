import React from 'react'
import Quiz from './component/Main/Quiz'

var map =[]
function mapcount (n){
  map.push(n)
  console.log(map)
}

export default function Page() {
  return (
    <div>
        <Quiz mapcount={mapcount} map={map}/>
    </div>
  )
}
