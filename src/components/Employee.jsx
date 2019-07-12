import React from 'react'
import KegList from './KegList'
import NewKegListForm from './NewKegListForm'
import StaticKegList from './StaticKegList'

export default function Employee(props) {
    return(
        <div>

            <NewKegListForm
            onNewKegCreation={props.onNewKegCreation}/>
            <StaticKegList/>
            <KegList
            kegList={props.kegList}/>
        </div>
    )
}
