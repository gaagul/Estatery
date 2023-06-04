import React from "react";
import PropertyCard from "./PropertyCard";

const TileGrid = ()=>{
    const numbers = [1, 2, 3, 4]
    return <>
        <div className="flex justify-between flex-wrap w-full">
        {numbers.map((a)=>(
            <div className="basis-1/4  gap-2 mb-10">
                <PropertyCard />
            </div>
        ))}
        </div>
    </>
}

export default TileGrid;