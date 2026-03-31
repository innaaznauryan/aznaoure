import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Category } from "@/lib/products.ts";

export function useCategoryChange() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get("category") as Category | null;

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        categoryParam
    );

    useEffect(() => {
        setSelectedCategory(categoryParam);
    }, [categoryParam]);

    const handleCategoryChange = (category: Category | null) => {
        setSelectedCategory(category);

        if (category) {
            setSearchParams({ category });
        } else {
            setSearchParams({});
        }
    };

    return { selectedCategory, handleCategoryChange };
}