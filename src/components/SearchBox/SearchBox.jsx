import {useId} from 'react';
import css from './SearchBox.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilter} from '../../redux/filtersSlice';

export default function SearchBox () {
const id = useId();
const dispatch = useDispatch ();
const value = useSelector(state=> state.filters.filtersReducer);

return <div className={css.div}>
<label className={css.label} htmlFor={id}>Find contacts by name or numbers</label>
<input className={css.input} 
    id={id} 
    name='userFind'
    value={value}
    onChange={(event)=>{
        dispatch(changeFilter(event.target.value));}}
/>
</div>

}