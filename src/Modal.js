import { GlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  const { openModal, setOpenModal } = GlobalContext();
  return (
    <div className={`modal-overlay ${openModal ? 'show-modal' : ''}`}>
      <div className='modal-container'>
        <h3>show content</h3>
        <button className='close-modal-btn' onClick={()=>setOpenModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
