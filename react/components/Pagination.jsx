import React from 'react';

const Pagination = ({total, perPage, onPageChanged}) => {
    const totalPages = Math.ceil(total / perPage);
    let pages = [];
    for(let i = 1; i <= totalPages; i++){
        pages.push(i);
    }
    return (
        <ul className={'pagination'}>
            {
                pages.map((p, index) => {
                    return <li key={index + p} onClick={(e) => {onPageChanged(p)}}>{p}</li>
                })
            }
        </ul>
    );
};

export default Pagination;