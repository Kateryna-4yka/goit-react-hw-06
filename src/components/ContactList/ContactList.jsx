import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import {useSelector} from 'react-redux';

export default function ContactList () {

const userList = useSelector ((state) => {
    return (state.contacts.items)});
const wordForFilter = useSelector ((state) => {
    return (state.filters.name)});
const list = userList.filter(el => {return el.name.toLowerCase().includes(wordForFilter.toLowerCase().trim())})
return <ul className={css.ul}>

    {list.map((el)=>{
        return <li key={el.id}>
                    <Contact listElement={el} />
                </li>})}
        </ul>}