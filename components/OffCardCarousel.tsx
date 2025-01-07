'use client'

import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Heart, ChevronRight, ChevronLeft, ShoppingBag } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    image: string; // You can store image file names here
    price: number;
}

interface ProductCarouselProps {
    products: Product[];
}

const CardCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const [likedItems, setLikedItems] = useState<number[]>([]);

    const handleLikeToggle = (id: number) => {
        setLikedItems(prevState =>
            prevState.includes(id) ? prevState.filter(itemId => itemId !== id) : [...prevState, id]
        );
    };

    const NextArrow: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 flex items-center justify-center bg-[#A7834B] rounded-full shadow-lg z-10 hover:bg-[#d9c3a5]"
                aria-label="Previous"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        );
    };

    const PrevArrow: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 flex items-center justify-center bg-[#A7834B] rounded-full shadow-lg z-10 hover:bg-[#d9c3a5]"
                aria-label="Next"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
        );
    };

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rtl: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        dotsClass: "slick-dots !bottom-[-2rem]",
        customPaging: () => (
            <div className="w-2 h-2 bg-gray-300 rounded-full mt-8 hover:bg-white" />
        ),
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 font-[vazirmatn]" dir="rtl">
            <h2 className="text-2xl font-bold mb-8 text-center">محصولات تخفیف دار</h2>
            <div className="relative px-8">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="px-4">
                            <div className="bg-white rounded-lg overflow-hidden">
                                <div className="relative aspect-square">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        layout="fill"
                                        objectfit="cover"
                                        className="rounded-t-lg"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-black text-lg font-medium mb-2">{product.name}</h3>
                                    <p className="text-black mb-2">{product.code}</p>
                                    <p className="text-black text-lg font-bold mb-4">
                                        {new Intl.NumberFormat('fa-IR').format(product.price)} تومان
                                    </p>
                                    <div className="flex gap-2 justify-center">
                                        <button
                                            onClick={() => handleLikeToggle(product.id)}
                                            className="p-2 rounded-lg border border-gray-200 hover:bg-[#A7834B] hover:text-white"
                                            aria-label="Add to wishlist"
                                        >
                                            <Heart
                                                className={`w-6 h-6 ${
                                                    likedItems.includes(product.id)
                                                        ? 'stroke-black stroke-1'
                                                        : 'stroke-black stroke-1'
                                                }`}
                                            />
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-[#A7834B] hover:text-white">
                                            <ShoppingBag className="w-5 h-5" />
                                            <span>افزودن به سبد خرید</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardCarousel;
