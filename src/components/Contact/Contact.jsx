import css from './Contact.module.css';
import { ImPhone } from "react-icons/im";
import { FaCat } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa";


export default function Contact ({listElement:{name,number,id}, delUser}) {

return  <div className={css.div}>
            <div className={css.flex}>
                <h2 className={css.h2}><FaCat className={css.icon} />  {name}</h2>
                <p className={css.p}><ImPhone className={css.icon} />  {number}</p>
            </div>
            <button className={css.button} type='button' onClick={()=>delUser(id)}>Delete <FaSkullCrossbones className={css.icon} /></button>
        </div>

}