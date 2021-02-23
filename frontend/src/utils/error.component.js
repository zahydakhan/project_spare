//Alerts imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import { spacing } from "@material-ui/system";
import styled from "styled-components";


export const Error = ({ type, message }) => {
    const [visible, setVisible] = useState(false)
    const Alert = styled(MuiAlert)(spacing);

    useEffect(() => {
      // message is empty (meaning no errors). Adjust as needed
      if(!message){
        setVisible(false)
       return
      }
      // error exists. Display the message and hide after 5 secs
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, 5000);
      return () => clearTimeout(timer);
    }, [message]) // executes every time `message` changes. Adjust as needed
    if(!visible) return null
    return (
       <div>
         <p>

            {message ? (
          	<Alert mb={4} severity="error">
            {message}
          </Alert>
        ) : (
          ""
        )}
             
         </p>
     </div>
    )
 }