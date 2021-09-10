import React, {createContext, useContext} from 'react'
import {FC} from 'react'
//콘텍스트란 부모가 손자/증손자에게 속성전달할때 지속적인 속성전달시 쉽게할려고 쓰는 것

export type ToggleThemeContextType = {
 // 공유하려는 데이터 속성
    toggleTheme: ()=>void
}
const defaultToggleThemeContext = {
    // 공유하려는 데이터 속성 초깃값
    toggleTheme: ()=>{}
}

const ToggleThemeContext = createContext<ToggleThemeContextType>(defaultToggleThemeContext)
//콘텍스트 만듬!

//Provider컴포넌트 만들기 - 몬텍스트 객체는 Provider 컴포넌트를 제공한다 그래서 그거 정의해준다
type ToggleThemeContextProps = {
    toggleTheme: ()=>void //value에들어갈 값. 계속전달될 속성 = 콘텍스트
}
export const ToggleThemeProvider: FC<ToggleThemeContextProps> =({children, toggleTheme})=>{
    const value={ toggleTheme }
    return (<ToggleThemeContext.Provider value={value}>
        {children}
    </ToggleThemeContext.Provider>)
}
//벨류로 전달된 건 테마 전환되는 함수.

export const useToggleTheme = () => {
    const {toggleTheme} = useContext(ToggleThemeContext) //useContext는 콘텍스트객체가 제공하는 P컴포넌트의  value 속성값을 얻을 목적으로 사용하는 훅
    return toggleTheme
}
//그 함수를 전달한다