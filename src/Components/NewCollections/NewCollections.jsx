import react from "react";
import "./NewCollections.css";
import new_collection_1 from "../../Assets/Images/new_collection_1.png";
const NewCollections = (props) => {
    return (
        <div className="newcollections">
           <h1>New Collections</h1>
           <hr />
           <div className="collections">
            {new_collection_1.localeCompare((item,index)=>{)}

           </div>

        </div>
    );
};

export default NewCollections;