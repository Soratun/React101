import Item from './Item';
import './Transaction.css';

const Transaction = (props) => {    
    const {items} = props;
    return (
        <div>
            <ul className="itme-list">
            {items.map((element)=>{
                return <Item {...element} key={element.id}/>
                // return <Item title={element.title} amount={element.amount}/>
            })}
        </ul>
        </div>
    )
}
export default Transaction;