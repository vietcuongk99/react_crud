import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Dashboard (props) {
    return (
        <div className="d-flex">
            <div className="custom-card border-left-primary shadow">
                <div className="card__body">
                    <div className='d-flex w-100 justify-content-between align-items-center'>
                        <div>
                            <div className='mb-1 text-primary text-uppercase font-weight-bold text-xs text-left'>
                                Users
                            </div>
                            <div className='h5 font-weight-bold text-gray-800'>
                                {props.totalUser}
                            </div>
                        </div>
                        <div className='text-gray-300'>
                            <FontAwesomeIcon icon='user-circle' size='2x' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard