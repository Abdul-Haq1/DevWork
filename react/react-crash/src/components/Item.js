import { FaTimes } from 'react-icons/fa'

const Item = ({ item, onDelete }) => {
    return (
        <div className='item'>
            <h3>
                {item.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(item.id)}
                />
            </h3>
            <p>{item.quantity}</p>
        </div>
    )
}

export default Item