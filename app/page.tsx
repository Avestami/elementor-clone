import React from "react";
import ProductCarousel from "../components/CardCarousel";
import products from "../data/products.json";
import discountedProduct from "../data/discountproduct.json"
import OffCardCarousel from "@/components/OffCardCarousel";

const HomePage: React.FC = () => {
    return (
        <div>
            <ProductCarousel products={products} />
            <OffCardCarousel products={discountedProduct} />
        </div>
    );
};

export default HomePage;
