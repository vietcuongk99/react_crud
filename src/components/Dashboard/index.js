import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faComment, faDollarSign } from '@fortawesome/free-solid-svg-icons'
function Dashboard (props) {
    return (
      <div>
        <div className="d-flex mb-4">
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
          <div className="custom-card border-left-success shadow">
            <div className="card__body">
              <div className='d-flex w-100 justify-content-between align-items-center'>
                <div>
                  <div className='mb-1 text-success text-uppercase font-weight-bold text-xs text-left'>
                    Earnings
                  </div>
                  <div className='h5 font-weight-bold text-gray-800'>
                    215,000
                  </div>
                </div>
                <div className='text-gray-300'>
                  <FontAwesomeIcon icon={faDollarSign} size='2x' />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-card border-left-info shadow">
            <div className="card__body">
              <div className='d-flex w-100 justify-content-between align-items-center'>
                <div>
                  <div className='mb-1 text-info text-uppercase font-weight-bold text-xs text-left'>
                    Tasks
                  </div>
                  <div className='h5 font-weight-bold text-gray-800'>
                    12
                  </div>
                </div>
                <div className='text-gray-300'>
                  <FontAwesomeIcon icon={faClipboardList} size='2x' />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-card border-left-warning shadow">
            <div className="card__body">
              <div className='d-flex w-100 justify-content-between align-items-center'>
                <div>
                  <div className='mb-1 text-warning text-uppercase font-weight-bold text-xs text-left'>
                    Comments
                  </div>
                  <div className='h5 font-weight-bold text-gray-800'>
                    100
                  </div>
                </div>
                <div className='text-gray-300'>
                  <FontAwesomeIcon icon={faComment} size='2x' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
}

export default Dashboard