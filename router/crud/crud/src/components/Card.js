import React  from 'react'
import moment from 'moment'
import PostContext from '../context/PostContext';

function Card(props) {

    const { info, onClick, onClose, onEdit } = props;

    return (
        <div className='card' onClick={onClick}>
            
            <div className='card-content'>{info.content}</div>
            <div className='card-created'>{moment(info.created).format('DD.MM.YYYY HH:mm:ss')}</div>
            { onClose && 
            <div className='card-close' onClick={() => onClose(info.id)}>
                 <i className='material-icons'>{'close'}</i>
            </div>
            }

            { onEdit && 
                <div className='card-edit' onClick={() => onEdit(info.id)}>
                    <i className='material-icons'>{`edit`}</i>
                </div>

            }
        </div>
    )
}

export default Card
