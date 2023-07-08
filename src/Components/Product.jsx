import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
    opacity: 1;
    }
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    }
`;

const Product = ({ item }) => {
    return (
        <Container>
                    <Image src={item.img} alt=""/>
                    <Info>
                        <div style={{display:"flex" ,alignItems:"center",justifyContent:"center",marginTop:"120px"}}>
                        <Icon>
                            <Link to={'/Cart'}>
                                <FontAwesomeIcon icon={faCartShopping}/>
                            </Link>
                        </Icon>
                        <Icon>
                            <Link to={`/Product/${item.id}`}>
                                <FontAwesomeIcon icon={faSearch}/>
                            </Link>
                        </Icon>
                        </div>
                    </Info>
        </Container>
    );
};

export default Product;
