import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList ({list,onDelClick}) {

return <ul className={css.ul}>
    {list.map((el)=>{
        return <li key={el.id}>
                    <Contact listElement={el} delUser={onDelClick}/>
                </li>})}
        </ul>}