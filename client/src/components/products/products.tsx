// import relevant module
import { useEffect, useState } from "react";

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
import { Link } from "react-router-dom";
import { getBills } from "../../utils/requests";

// use navigate
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';

const Products = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    // const [category, setCategory] = useState("")
    const dispatch= useDispatch()
    // use useNavigate
    const Navigate = useNavigate();
    // sort bill payments and link
    const payService = async (category : string) => {
        //   setCategory(category)
         await getBills(selectedOption?.value, category, Navigate, dispatch);
    }

    // useEffect(() => {
    //     console.log(category)
    // })

    return (
        <ProductsContainer>
         <ProductsMiniContainer>
            <ProductsTop>
                <ProductsTopLeft>What bill do you want to pay?</ProductsTopLeft>
                <ProductsTopRight>   
                <div className="SelectAndIconCont">
                    <img src="/assets/MapPin.png" className = "map-icon"alt="map icon" />
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
                 {
                    services?.map((service, i) => (
                        // <Link to ={`/payment/${service?.name}`}>
                          <ProductsBox notPart = {false} key={i} onClick={() => payService(service?.category)}>
                          <ProductsBoxIcon
                           src ={service?.image} 
                           />
                          <ProductsBoxText>{service?.name}</ProductsBoxText>
                          </ProductsBox>
                        // </Link>
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