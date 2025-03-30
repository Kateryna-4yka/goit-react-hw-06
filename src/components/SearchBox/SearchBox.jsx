import {useId} from 'react';
import css from './SearchBox.module.css';

export default function SearchBox ({listForFilter, funkFilter}) {
const id = useId();

return <div className={css.div}>
<label className={css.label} htmlFor={id}>Find contacts by name or numbers</label>
<input className={css.input} 
    id={id} 
    name='userFind'
    value={listForFilter}
    onChange={(event)=>{funkFilter(event.target.value);}}
/>
</div>

}