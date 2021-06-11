import React from 'react';

const AllAuthors = (props) =>  {
    return(
        <div>
            Hi
            {
                props.authors.map((author, key)=> {
                    return <h2 key={key}>Author: {author.name}</h2>
                })
            }
        </div>
    )
}

export default AllAuthors;