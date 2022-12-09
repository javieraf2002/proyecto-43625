import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {
                items.map(producto => <Item item={producto} />)
            }
        </div>
    )
};

export default ItemList;