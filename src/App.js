import './App.css';
import PageInation from './Component/Page/PageInation';
import HookForm from './Component/HookForm/HookForm';
import { Toaster } from 'react-hot-toast';
import Users from './Component/Users/Users';

function App() {
   return (
    <div >
        <PageInation />
        <HookForm></HookForm>
        <Users></Users>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
