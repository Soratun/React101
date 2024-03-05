import'./FromComponent.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FromComponent = (props) => {

    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    const [fromValid,setfromValid] = useState(false);

    const InputTitle = (event) => {
        setTitle(event.target.value);
    }
    const InputAmount = (event) => {
        setAmount(event.target.value);
    }
    const SavaItem = (event) => {
        event.preventDefault();
        const itemData = {
            id:uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData);
        setAmount(0);
        setTitle('');
    }

    useEffect(() => {
        const cheakData = title.trim().length > 0 && amount !== 0;
        setfromValid(cheakData);
    },[title,amount]);
    return(
        <div>
            <form onSubmit={SavaItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={InputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={InputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className='btn' disabled={!fromValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FromComponent;