
import {ThemeProvidercontext} from './context/screenscontext';
import StackNav from './navigation/stack';


export default function App() {

  return (
    <ThemeProvidercontext>
     <StackNav/>
    </ThemeProvidercontext>
 
  );
}

