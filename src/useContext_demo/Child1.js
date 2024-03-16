import {useDataProvider} from './DataContext';

const Child1 = () => {
    const { count,setCount }= useDataProvider();
	return(
    <><button onClick={()=>setCount(count+1)}>increase</button></>
    )
}

export default Child1
