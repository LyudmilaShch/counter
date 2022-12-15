import {InitialStateType, counterReducer} from "./counter-reducer";
import {changeMaxValueAC, changeStartValueAC} from "./counter-reducer";

let startState: InitialStateType
beforeEach(() => {
    startState = {
        startValue: 0,
        maxValue: 5,
        error: null,
        message: null,
        value: 0
    }
})

test('start value should change', () => {
    const endState = counterReducer(startState, changeStartValueAC(2))
    expect(endState.startValue).toBe(2);
    expect(endState.error).toBe(null);
    expect(endState.message).toBe(null);
});

test('max value should change', () => {
    const endState = counterReducer(startState,changeMaxValueAC(6))
    expect(endState.maxValue).toBe(6);
    expect(endState.message).toBe(null);
});
