import { useState, useEffect } from 'react'

import css from './App.module.css'

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {

  const [userList, setUserList] = useState(() => {
    const infoFromLS = localStorage.getItem('contactList'); 
    if (infoFromLS !== null) {
      return JSON.parse(infoFromLS);
    }
      return [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];
  });

// ===========================стан для фільтру контактів 
  const [filter, setFilter] = useState(''); 

  const filterPhoneList = userList.filter((el)=>
    el.name.toLowerCase().includes(filter.toLowerCase().trim()) || 
    el.number.includes(filter.trim())
  );

// ===========================додавання елементів
const addUser = (newUser) => {setUserList (prevState => [...prevState, newUser])}

// ===========================видалення елементів
const delUser = (userForDel) => {setUserList(prevState => {return prevState.filter(el=> el.id !== userForDel);})}

// ===========================запис та считування з локал сторедж
useEffect(() => {
  window.localStorage.setItem('contactList', JSON.stringify(userList));
}, [userList]); 

    return  <div className={css.container}>

    <h1 className={css.h1}>Phonebook</h1>
    <ContactForm funkAddUser={addUser}/>
    <SearchBox listForFilter={filter} funkFilter={setFilter} />
    <ContactList list={filterPhoneList} onDelClick={delUser} />

            </div>
}