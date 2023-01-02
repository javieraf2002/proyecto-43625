import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {
                items.map(producto => <Item item={producto} key={producto.id} />)
            }
        </div>
    )
};

export default ItemList;