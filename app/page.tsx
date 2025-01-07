import React from "react";
import ProductCarousel from "../components/CardCarousel";
import product3 from "@/public/images/product3.jpg"
import products from "../data/products.json";
import OffCardCarousel from "@/components/OffCardCarousel";

const HomePage: React.FC = () => {
    return (
        <div>
            <ProductCarousel products={products} />
            <OffCardCarousel products={products} />
        </div>
    );
};

export default HomePage;
