// import relevant  components that makes the services component
import Products from "../components/products/products";
import Header from "../components/header/header";

const ServicesPage : () => JSX.Element = () => {
    return (
       <div className="services">
             <Header/>
             <Products />
       </div>
    )
}

export default ServicesPage;