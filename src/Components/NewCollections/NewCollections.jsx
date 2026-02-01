import react from "react";
import "./NewCollections.css";
import new_collection_1 from "../../Assets/Images/new_collection_1.png";
const NewCollections = (props) => {
    return (
        <div className="newcollections">
           <h1>New Collections</h1>
           <hr />
           <div className="collections">
            {new_collection_1.map((item,i)=>{
                return 
                <Item 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />

            })}

           </div>

        </div>
    );
};

export default NewCollections;