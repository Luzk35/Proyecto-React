import logo from "./logo.svg";
import { Box } from "@mui/material";
import "./App.scss";
import "./styles/main.scss";
import NotificationsPannel from "./services/notifications";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {
  return (
    <div className="App">
      
      <NotificationsPannel /> 
      
      
    </div>
  );
}

export default App;





// function App() {
//   return (
//     <div className="App">
      
//       <NotificationsPannel /> 
      
      
//     </div>
//   );
// }