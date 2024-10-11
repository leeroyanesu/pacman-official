/* ./userSession.js */

import { AppConfig, UserSession,showConnect } from '@stacks/connect';
import { isTestnet,appIcon,appName } from './index';
import axiosRetry from "axios-retry";
import axios from "axios";
import process from "process"

axiosRetry(axios,{retries:3,retryDelay:3000})
const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig }); // we will use this export from other files
export const getAddress = () => {
    if (isTestnet) {
      return userSession.loadUserData().profile.stxAddress.testnet;
    } else {
      return userSession.loadUserData().profile.stxAddress.mainnet;
    }
  }
  
export const connect = () =>
    showConnect({
      userSession, // `userSession` from previous step, to access storage
      appDetails: {
        name: appName,
        icon: appIcon,
      },
      onFinish: () => {
        axios({
          method:"POST",
          url:import.meta.env.VITE_API+"/signin",
          data:{address:getAddress()},
          headers:{
            "Content-Type":"application/json"
          }
        }).then((res)=>{
          if(res.data.success){
            window.location.reload(); // WHEN user confirms pop-up
          }
        }).catch((err)=>{
          window.location.reload();
        })
       
      },
      onCancel: () => {
        console.log('oops'); // WHEN user cancels/closes pop-up
      },
    });