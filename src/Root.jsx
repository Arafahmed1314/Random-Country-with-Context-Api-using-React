
import { Outlet } from 'react-router-dom';
import Header from './Header';
function Root () {
  return (
    <div>
        <Header/>
<Outlet></Outlet>
    </div>
  )
}

export default Root