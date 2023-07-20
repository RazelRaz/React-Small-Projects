import { useParams } from "react-router-dom";
import Menu from "../components/Menu/Menu";


const ProductPage = () => {
    let {id, name} = useParams()
    return (
        <div>
            <Menu></Menu>

            <h2>Product Page</h2>
            <p>ID: {id}</p>
            <h6>Name: {name}</h6>
        </div>
    );
};

export default ProductPage;