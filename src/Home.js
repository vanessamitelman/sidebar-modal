import { GlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openSidebar, setOpenSidebar, openModal, setOpenModal } =
    GlobalContext();
  return (
    <main>
      <button
        className='sidebar-toggle'
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <FaBars />
      </button>
      <button className='btn' onClick={() => setOpenModal(!openModal)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
