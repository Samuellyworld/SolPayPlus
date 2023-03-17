// import relevant  components that makes the services component
import Products from "../components/products/products";
import Header from "../components/Header/Header";

const ServicesPage : () => JSX.Element = () => {
    return (
       <div className="services">
             <Header marquee ={false}/>
             <Products />
       </div>
    )
}

export default ServicesPage;