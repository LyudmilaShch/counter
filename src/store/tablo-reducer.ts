type changeStartValueActionType = ReturnType<typeof changeStartValueAC>
type changeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
type changeSettingValueActionType = ReturnType<typeof changeSettingValueAC>
type changeSettingActionType = ReturnType<typeof changeSettingAC>
type changeIncActionType = ReturnType<typeof changeIncAC>
type changeResetActionType = ReturnType<typeof changeResetAC>



type ActionType =
    changeStartValueActionType
    | changeMaxValueActionType
    | changeSettingValueActionType
    | changeSettingActionType
    | changeIncActionType
    | changeResetActionType


const initialState = {
    startValue: 0,
    maxValue: 7,
    error: null,
    message: null,
    number: 0
}

export type InitialStateType = {
    startValue: number
    maxValue: any
    error: string | null
    message: string | null
    number: number
}
export const tabloReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-START-VALUE": {
            return {
                ...state,
                startValue: action.newStartValue,
                message: null,
                error: null
            }
        }
        case "CHANGE-MAX-VALUE" : {
            return {
                ...state,
                maxValue: action.newMaxValue,
                message: null,
                error: null
            }
        }
        case "CHANGE-SETTING-VALUE" : {
            if (state.startValue >= 0) {
                if (state.maxValue > state.startValue) {
                    return {
                        ...state,
                        message: "Введите значение и нажмите set"
                    }
                } else {
                    return {
                        ...state,
                        error: "Стартовое значение не может быть больше или равен максимальному"
                    }
                }
            } else {
                return {
                    ...state,
                    error: "Значение должно быть больше или равно 0"
                }
            }

        }
        case "CHANGE-SETTING" : {
            return {
                ...state,
                error: null,
                message: null,
                number: state.startValue
                // startValue: state.startValue
            }
        }
        case "CHANGE-INC": {
            if (state.number < state.maxValue && state.number >= state.startValue) {
                return {
                    ...state,
                    number: state.number + 1
                }
            } else {
                return state
            }
        }
        case "CHANGE-RESET": {
            return {
                ...state,
                number: state.startValue
            }
        }

        default:
            return state
    }
}

export const changeSettingValueAC = () => {
    return {type: "CHANGE-SETTING-VALUE"} as const
}
export const changeStartValueAC = (newStartValue: number) => {
    return {type: "CHANGE-START-VALUE", newStartValue} as const
}
export const changeMaxValueAC = (newMaxValue: number) => {
    return {type: "CHANGE-MAX-VALUE", newMaxValue} as const
}
export const changeSettingAC = () => {
    return {type: "CHANGE-SETTING"} as const
}
export const changeIncAC = () => {
    return {type: "CHANGE-INC"} as const
}
export const changeResetAC = () => {
    return {type: "CHANGE-RESET"} as const
}


export const loadState = () => {
    try {
        const newMaxValue = localStorage.getItem('maxValueKey');
        if (newMaxValue) {
            return JSON.parse(newMaxValue)

        }
        // let newStartValue = localStorage.getItem('startValueKey')
        // if (newStartValue) {
        //     return JSON.parse(newStartValue)
        // }
    } catch (err) {

        return undefined;
    }
};

export const saveState = (state: {maxValue: number, startValue: number} ) => {
    try {
        const newMaxValue = JSON.stringify(state.maxValue);
        const newStartValue = JSON.stringify(state.startValue);
        localStorage.setItem('maxValueKey', newMaxValue);
        localStorage.setItem('startValueKey', newStartValue);
    } catch {
        // ignore write errors
    }


};