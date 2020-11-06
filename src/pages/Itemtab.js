import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {

    useParams
} from "react-router-dom";
const Itemtab = () => {
    let { id } = useParams();

    return (
        <div>
            <LazyLoadImage src={`http://riverisland.scene7.com/is/image/RiverIsland/${id}_main`} className="img-responsive" alt='temp' />
        </div>
    )
}

export default Itemtab
