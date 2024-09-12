import { useReducer } from 'react'
import './App.css'
import { ProductList } from './components/product-list'
import { Basket } from './components/basket'
import { Reducer } from './reducer'
import { initialState, AppContext } from './context'

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <>
      <AppContext.Provider value={{ dispatch, state }}  >
        <div className='app'>
        <ProductList />
        <Basket />
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App