import React, {useState} from "react"
import { BottomNavigation } from "react-native-paper"
import LifeCycle from "./LifeCycle"
import Timer from "./Timer"
import Interval from "./Interval"
import Fetch from "./Fetch"

export default function MainNavigator () {
    const [index, setIndex] = useState<number>(0)
    const [routes]=useState([
        {key: 'meet', title: '실시간 만남', icon: 'account-supervisor-circle-outline'},
        {key: 'board', title: '게시판', icon: 'clipboard-edit-outline'},
        {key: 'friend', title: '친구 찾기', icon: 'account-search-outline'},
        {key: 'alarm', title:'알림', icon:'bell-ring-outline'}
    ])

    const renderScene = BottomNavigation.SceneMap({
        meet: LifeCycle,
        board: Timer,
        firend: Interval,
        alarm: Fetch

    })

    return(
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            />
    )
}