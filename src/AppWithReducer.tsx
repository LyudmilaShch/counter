// import React, {useReducer} from 'react';
// import './App.css';
// import {Tablo} from "./components/tablo/Tablo";
// import {Button} from "./components/button/Button";
// import {Value} from "./components/value/Value";
// import {
//     changeIncAC,
//     changeMaxValueAC, changeResetAC,
//     changeSettingAC,
//     changeSettingValueAC,
//     changeStartValueAC,
//     counterReducer
// } from "./store/tablo-reducer";
//
//
function AppWithReducer() {
//     const [tablo, dispatchToTablo] = useReducer(counterReducer, {
//         startValue: 0,
//         maxValue: 5,
//         error: null,
//         message: null,
//         number: 0
//     })
//
//     /*useEffect(() => {
//         let newMaxValue = localStorage.getItem('maxValueKey')
//         if (newMaxValue) {
//             setMaxValue(JSON.parse(newMaxValue))
//         }
//         let newStartValue = localStorage.getItem('startValueKey')
//         if (newStartValue) {
//             setStartValue(JSON.parse(newStartValue))
//             setNumber(JSON.parse(newStartValue))
//         }
//     }, [])*/
//
//     const onClickInc = () => {
//         dispatchToTablo(changeIncAC())
//     }
//     const onClickReset = () => {
//         dispatchToTablo(changeResetAC())
//     }
//     const onClickSet = () => {
//         dispatchToTablo(changeSettingAC())
//         //onClickReset()
//         // localStorage.setItem('startValueKey', JSON.stringify(tablo.startValue))
//         // localStorage.setItem('maxValueKey', JSON.stringify(tablo.maxValue))
//     }
//     const changeMaxValue = (newMaxValue: number) => {
//         dispatchToTablo(changeMaxValueAC(newMaxValue))
//         dispatchToTablo(changeSettingValueAC())
//     }
//
//     const changeStartValue = (newStartValue: number) => {
//         dispatchToTablo(changeStartValueAC(newStartValue))
//         dispatchToTablo(changeSettingValueAC())
//     }
//
//
//     const displayValueOnTablo = tablo.error
//         ? tablo.error
//         : tablo.message ? tablo.message : tablo.number
//
//
//     return (
//         <body>
//         <div className="Setting">
//             <div className="nameInput">
//                 <div><b>max value</b></div>
//                 <Value newValue={changeMaxValue} value={tablo.maxValue} error={tablo.error}/>
//             </div>
//             <div className="nameInput">
//                 <div><b>start value</b></div>
//                 <Value newValue={changeStartValue} value={tablo.startValue} error={tablo.error}/>
//             </div>
//
//             <div className="ButtonsContainer">
//                 <Button name={'set'} callBack={onClickSet} disabledButton={!!tablo.error}/>
//             </div>
//         </div>
//         <div className="Tablo">
//             <Tablo tablo={displayValueOnTablo} maxValue={tablo.maxValue} isError={!!tablo.error}/>
//             <div className="ButtonsContainer">
//                 <Button name={'inc'} callBack={onClickInc}
//                         disabledButton={tablo.error ? true : tablo.message ? true : tablo.number >= tablo.maxValue}/>
//                 <Button name={'reset'} callBack={onClickReset}
//                         disabledButton={tablo.error ? true : tablo.message ? true : tablo.number === tablo.startValue}/>
//             </div>
//         </div>
//         </body>
//     );
}

 export default AppWithReducer;
