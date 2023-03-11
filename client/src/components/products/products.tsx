// import relevant module
import { useState } from "react";

// import custom styles
import { PayBillContainer, PayBillTopRight,
         PayBillTop, PayBillTopLeft, 
         PayBillMiniContainer, PayBillBoxesContainer,
         PayBillBox, PayBillBoxIcon,  PayBillBoxText 
        } from "./products.styles";

// import select;
import Select from 'react-select';

// import utils objects
import { customStyles, options } from "../../utils/utils";

const Products = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <PayBillContainer>
         <PayBillMiniContainer>
            <PayBillTop>
                <PayBillTopLeft>What bill do you want to pay?</PayBillTopLeft>
                <PayBillTopRight>   
                <div className="SelectAndIconCont">
                    <img src="/assets/MapPin.png" className = "map-icon"alt="" />
                    <Select
                        options={options}
                        styles={customStyles}
                        defaultValue={selectedOption}
                        onChange={(e : any) => setSelectedOption(e)}
                        />
                </div>
                </PayBillTopRight>
            </PayBillTop>

            <PayBillBoxesContainer>
                <PayBillBox notPart = {false}>
                    <div className="BillImgCont">
                        <PayBillBoxIcon src = "/assets/DeviceMobileCamera.png" />
                        <img src = "/assets/CellSignalFull.png" className = "PayCellImage"alt = "Cell Images" />
                    </div>
                    <PayBillBoxText>Airtime</PayBillBoxText>
                </PayBillBox>

                <PayBillBox notPart = {false}>
                    <PayBillBoxIcon src = "/assets/DeviceMobileCamera.png" />
                    <PayBillBoxText>Data Bundles</PayBillBoxText>
                </PayBillBox>

                <PayBillBox notPart = {false}>
                    <PayBillBoxIcon src = "/assets/Globe.png" />
                    <PayBillBoxText>Internet</PayBillBoxText>
                </PayBillBox>

                <PayBillBox notPart = {false}>
                    <PayBillBoxIcon src = "/assets/Lightbulb.png" />
                    <PayBillBoxText>Electricity</PayBillBoxText>
                </PayBillBox>

                <PayBillBox notPart = {false}>
                    <PayBillBoxIcon src = "/assets/TelevisionSimple.png" />
                    <PayBillBoxText>Cable TV</PayBillBoxText>
                </PayBillBox>

                <PayBillBox notPart = {true}>
                    <PayBillBoxText>More to come!</PayBillBoxText>
                </PayBillBox>
            </PayBillBoxesContainer>
        </PayBillMiniContainer>
    </PayBillContainer>
    )
}

export default Products;