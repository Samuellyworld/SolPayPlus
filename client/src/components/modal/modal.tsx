// importing relevant react modules
import  { useState, useEffect } from 'react';
// import custom styles
import { PopupContainer } from './modal.styles';
// import redux 
import {useSelector} from 'react-redux';
import { RootState } from '../../store/store';

// { children, visible, onHide }

const Popup = () => {

       // visible 
    const visible: any = useSelector(
        (state: RootState) => state.alert.alertModal.openModal
      );

       // children
    const children: any = useSelector(
        (state: RootState) => state.alert.alertModal.modalContent
      );

      console.log(visible,children, 'visible')

      // showPopup
   const [showPopup, setShowPopup] = useState(visible);

    // useEffect - 
   useEffect(() => {
    setShowPopup(visible);
  }, [visible])

    // useEffect - 
   useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
   
  }, [showPopup]);
 
  return <PopupContainer visible={showPopup}>{children}</PopupContainer>;
};

export default Popup;
