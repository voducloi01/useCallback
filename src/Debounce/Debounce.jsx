import {useCallback ,useState} from 'react';
import _ from "lodash";
import axios from 'axios';
function Debounce()
{const [value, setValue] = useState('');

    const debounceFn = useCallback(_.debounce(handleDebounceFn, 1000), []);

    function handleDebounceFn(inputValue) {
        axios.post('/endpoint', {
          value: inputValue,
        }).then((res) => {
          console.log(res.data);
        });
    }


    function handleChange (event) {
        setValue(event.target.value);
        debounceFn(event.target.value);
    };
    
    return (<div>
        <h2 style={{ color: 'red' }}> Demo Debounce</h2>
        <input value={value} onChange={handleChange} />
    </div>);
}

export default Debounce;