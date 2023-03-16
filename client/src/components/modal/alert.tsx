//importing useState from react
import { useState } from "react";

//importing useful modules from react-redux
import { useSelector, useDispatch } from "react-redux";

//importing components from useful react-spinner library
import BarLoader from "react-spinners/BarLoader";

//importing RootState from redux store
import { bottomClose } from "../../store/alert/alert.modal.reducer";
import { RootState } from "../../store/store";

// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";

const AlertConfirmation = () => {
  //decaring dispatch
  const dispatch = useDispatch();
  const content = useSelector(
    (state: RootState) => state.alert.bottomAlert?.modalContent
  );
  //copying address
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);

  const close = useSelector(
    (state: RootState) => state?.alert?.bottomAlert?.openModal
  );

  return (
    <div
      style={{
        // width: "100%",
        position: "fixed",
        zIndex: "1000",
        bottom: "25px",
        right: "20px",
        display: `${close ? "flex" : "none"}`,

        border: "1px solid grey",
        borderRadius: "5px",
        padding: "3px",
        flexDirection: "column",
        background: "whitesmoke",
        fontWeight: 500,
        textTransform: "uppercase",
      }}
    >
      <div
        style={{
          width: "20px",
          marginTop: "-20px",
          height: "20px",
          display: "flex",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "500",
          textAlign: "center",
          borderRadius: "100%",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          border: "1px solid white",
          background: "black",
          padding: "20px",
        }}
        onClick={() => {
          dispatch(bottomClose(""));
        }}
      >
        <p style={{ color: "white" }}>×</p>
      </div>

      <p
        style={{
          padding: "3px",
          fontSize: "12px",
          fontWeight: "bold",
          color: "black",
          fontFamily: "Space Grotesk",
          fontStyle: "normal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.2rem",
        }}
        className="wallet_content"
      >
        {/* {content} */} Your Token is :
        <span style={{ color: "green" }}>
          {`${content.length > 0 && content?.substring(0, 5)}....`}
          <CopyToClipboard text={content}>
            {!handleCopyAddress ? (
              <img
                src="/assets/copy.svg"
                alt="wallet copy"
                style={{
                  cursor: "pointer",
                  width: "0.8rem",
                }}
                onClick={() => {
                  setHandleCopyAddress(!handleCopyAddress);
                  setTimeout(() => {
                    setHandleCopyAddress(false);
                  }, 800);
                }}
              />
            ) : (
              <img
                src="/assets/copy.png"
                alt="copy"
                style={{ width: "0.8rem" }}
              />
            )}
          </CopyToClipboard>
        </span>
      </p>
      <BarLoader
        // style={{marginLeft : "20px"}}
        color={"#888"}
        size={150}
        width={250}
        //@ts-ignore
        speedMultiplier="0.4"
      />
    </div>
  );
};

export default AlertConfirmation;
