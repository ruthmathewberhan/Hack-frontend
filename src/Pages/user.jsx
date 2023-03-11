import { Container, Box } from '@mui/material';
import TopNavBar from '../components/frame/topBar';
import UserManagement from '../components/user-management/user-list';

function User() {

    return (
      <>
      <Box>
        <TopNavBar/>
        <Container>
            <UserManagement/>
        </Container>
      </Box>
      </>
    );
    
  }
  
  export default User