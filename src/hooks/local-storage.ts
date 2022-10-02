import { useEffect, useState } from "react";

//we define a custom Hook
const useLocalStorage = <TState>(key: string, newState: TState) => {
    const [state, setState] = useState<TState>(()=>{//define a function for initializiation of state
        const stateStr = window.localStorage.getItem(key); //getItem is string o null. The localStorage in the browser save data as string
        return stateStr ? JSON.parse(stateStr) as TState: newState
    }) //useState is going to be an in memory state of wahtever we are storing in
    //the first time we inizialize it we are going to check the local storage to see if we have anything in there
    //If so we parse in JSON. If not we are gloing to use this newState object that we pass

    useEffect(() => { //The function passed to useEffect will run after the render is committed to the screen.
        window.localStorage.setItem(key, JSON.stringify(state)) //stryngufy and save the state in localStorage
    }, [key, state]) //useEffetct take a funnction and an  array of dependency.
    //call the function definied any time our state change
    //so anytime our key or state change we will update our localStorage

    return [state, setState] as const; //by default arrays will be any type oresent in the state here
    //as const
}

export default useLocalStorage;