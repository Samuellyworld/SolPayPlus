// import axios from axios
import axios from 'axios';
import { setRewards } from '../store/user/user.reducer';

// base URL
const baseUrl : string = 'https://solpayplus-server.herokuapp.com'

// get rewards
export const getRewards = async (walletAddress : string| null, dispatch: any, Navigate : any) => {
     axios.get(`${baseUrl}/user/2dudFU32c5wsRpfRZDXBAJFirHC4hindqpKSCwwtDaAB`).
     then((response) => {
        if(response) {
            dispatch(setRewards(response.data))
            Navigate('/transactions');
        }
        
         
     })
    
}