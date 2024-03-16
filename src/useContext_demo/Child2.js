import {useDataProvider} from './DataContext';

const Child2 = () => {
    const { count,setCount }= useDataProvider();
	return <><button onClick={()=>setCount(count-1)}>decrease</button></>
}

export default Child2
