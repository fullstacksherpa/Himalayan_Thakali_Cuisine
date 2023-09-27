import uuid from "react-uuid"
const Categories = ({categories, filterItems}) => {

    

    return (
        <div className="mb-16 flex justify-center">
            {categories.map((category, index)=>{
                return (
                    <button type="button" className="bg-transparent border-transparent text-base capitalize mx-2 tracking-wide py-1 px-2 text-lightGreen cursor-pointer rounded-md hover:bg-lightGreen hover:text-white" key={uuid()} onClick={()=>filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories;