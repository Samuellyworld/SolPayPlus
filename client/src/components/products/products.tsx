// import relevant module
import { useState } from "react";

// import custom styles
import { ProductsContainer, ProductsTopRight,
         ProductsTop, ProductsTopLeft, 
         ProductsMiniContainer, ProductsBoxesContainer,
         ProductsBox, ProductsBoxIcon,  ProductsBoxText 
        } from "./products.styles";

// import select;
import Select from 'react-select';

// import utils objects
import { customStyles, options, services } from "../../utils/utils";

const Products = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <ProductsContainer>
         <ProductsMiniContainer>
            <ProductsTop>
                <ProductsTopLeft>What bill do you want to pay?</ProductsTopLeft>
                <ProductsTopRight>   
                <div className="SelectAndIconCont">
                    <img src="/assets/MapPin.png" className = "map-icon"alt="" />
                    <Select
                        options={options}
                        styles={customStyles}
                        defaultValue={selectedOption}
                        onChange={(e : any) => setSelectedOption(e)}
                        />
                </div>
                </ProductsTopRight>
            </ProductsTop>

            <ProductsBoxesContainer>
                {/* /* <ProductsBox notPart = {false}>
                    <div className="BillImgCont">
                        <ProductsBoxIcon src = "/assets/DeviceMobileCamera.png" />
                        <img src = "/assets/CellSignalFull.png" className = "PayCellImage"alt = "Cell Images" />
                    </div>
                    <ProductsBoxText>Airtime</ProductsBoxText>
                </ProductsBox> */}

             
                 {
                    services?.map((service, i) => (
                        <ProductsBox notPart = {false} key={i}>
                         <ProductsBoxIcon
                           src ={service?.image} 
                           className={i === 0 ? "PayCellImage " : ""} />
                         <ProductsBoxText>{service?.name}</ProductsBoxText>
                       </ProductsBox>
                    ))
                 }
                <ProductsBox notPart = {true}>
                    <ProductsBoxText>More to come!</ProductsBoxText>
                </ProductsBox>
            </ProductsBoxesContainer>
        </ProductsMiniContainer>
    </ProductsContainer>
    )
}

export default Products;