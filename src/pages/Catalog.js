import React, { useState, useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ApiContext } from "../components/context";
import Gallery from '../components/Catalog/Gallery'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { FaSistrix } from 'react-icons/fa'
const Catalog = () => {
    const context = useContext(ApiContext);

    const [searchResults, setSearchResults] = useState([]);
    const [input, setInput] = useState("");

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
        if (event.target.value === "") {
            setInput("")
        }
    };



    const handleClick = event => {

        const filteredProducts = context.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
        setSearchResults(filteredProducts);
        setInput(searchTerm)

    };
    console.log(context);
    const something = (event) => {
        if (event.keyCode === 13) {
            handleClick()
        }
    }
    const renderSearch = () => {
        return searchResults.map(item => {
            let imghover = ""
            if (item.allImages[1] === undefined) {
                imghover = item.allImages[0]
            } else {
                imghover = item.allImages[1]
            }
            return (
                <StyledCard key={item.id}>

                    <li><Link to={`/${item.prodid}`} src={`http://riverisland.scene7.com/is/image/RiverIsland/${item.prodid}_main`}><LazyLoadImage src={item.allImages[0]} className="imgBasic" alt={item.name} /><LazyLoadImage src={imghover} className="imgHover" alt={item.name} /></Link></li><li className="name">{item.name}</li>
                    <li className="cost">£{item.costEUR}</li>
                </StyledCard>
            )
        })
    }

    const renderList = () => {
        return context.map(item => {
            let imghover = ""
            if (item.allImages[1] === undefined) {
                imghover = item.allImages[0]
            } else {
                imghover = item.allImages[1]
            }
            return (
                <StyledCard key={item.id} >

                    <li><Link to={`/itemtab/${item.prodid}`} src={`http://riverisland.scene7.com/is/image/RiverIsland/${item.prodid}_main`}><div className="images"><LazyLoadImage src={item.allImages[0]} className="imgBasic" alt={item.name} /><LazyLoadImage src={imghover} className="imgHover" alt={item.name} /></div></Link></li><li className="name">{item.name}</li>
                    <li className="cost" >£{item.costEUR}</li>
                </StyledCard>
            )
        })
    }
    if (input !== "") {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange} onKeyDown={(e) => something(e)}
                />
                <button onClick={handleClick} />

                <Gallery>{renderSearch()}</Gallery>


            </div>
        )
    }
    else {
        return (
            <div>
                <SearchBar>
                    <Input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <Button onClick={handleClick}><FaSistrix></FaSistrix></Button>
                </SearchBar>
                <Gallery>{renderList()}</Gallery>


            </div >
        )
    }
}

export default Catalog


const StyledCard = styled.ul`
max-width: 400px;
.name{
    margin:5px 0;
    font-size: 20px;
}
.cost{
        font-weight: bold;    
        }
.images{ height: 400px;
width: 400px;}

        .imgHover{
             display: none;
         }    
     &:hover{
         .imgBasic{
             display: none;
         }
         .imgHover{
             display: block;
         }
     }

`

const Input = styled.input`
border-top: none;
border-left: none;
border-right: none;
border-bottom: black solid 3px ;

`
const Button = styled.button`

border: none;
background: none;
    font-size: 2rem;

`
const SearchBar = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`