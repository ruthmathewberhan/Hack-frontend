import { Container, Box } from '@mui/material';
import TopNavBar from '../components/frame/topBar';
import LeaderCard from '../components/Leader-board/lead-card';

function Leader() {

    return (
      <>
      <Box>
        <TopNavBar/>
        <LeaderCard/>
      </Box>
      </>
    );
    
  }
  
  export default Leader