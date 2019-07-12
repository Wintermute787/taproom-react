import React from 'react'
import KegList from './KegList'
import NewKegListForm from './NewKegListForm'

export default function Employee(props) {
    return(
        <div>

            <NewKegListForm
            onNewKegCreation={props.onNewKegCreation}/>
            <KegList
            kegList={props.kegList}/>
        </div>
    )
}
