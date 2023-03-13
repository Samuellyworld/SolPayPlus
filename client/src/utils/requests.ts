// import axios from axios
import axios from 'axios';
import { setBills, setRewards } from '../store/user/user.reducer';
import { alert, close } from '../store/alert/alert.modal.reducer';

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

// get bills
 export const getBills = async (countryCode : any, category : any, Navigate : any, dispatch : any) => {
    console.log(countryCode, category)
    dispatch(alert('Getting Bills ⌛️'));
    setTimeout(() => {
       dispatch(close(""));
     }, 1200);

     axios.post(`${baseUrl}/bill/category`, {
        country : countryCode,
        category : category
     }).then((response)=> {
        console.log(response.data?.data)
        if(response) {
            dispatch(setBills(response?.data?.data))
            Navigate('/payment' , {state : category})
        }
     })
 }