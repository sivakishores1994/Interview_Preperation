import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
import { DataContext } from './DataContext'
function App() {
	const [count, setCount] = useState(10)
	return (
		<>
			<DataContext.Provider value={{ count, setCount }}>
				<Child3 />
				<Child1 />
				<Child2 />
			</DataContext.Provider>
		</>
	)
}

export default App
