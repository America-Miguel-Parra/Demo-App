import React from 'react'
import CategoriesList from "./CategoriesList"
import CategoryInput from './CategoryInput'


const Categories = ({ categories = [], setCategories }) => {
    return (
        <div>
            
            <CategoryInput
            categories={categories}
            setCategories={setCategories}
            />
            <CategoriesList
                categories={categories}
            />

            <br />
        </div>
    )
}

export default Categories