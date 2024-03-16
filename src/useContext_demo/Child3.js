
import {useDataProvider} from './DataContext';

const Child3 = () => {
	const {count} = useDataProvider()
	return <p>{count}</p>
}

export default Child3