import React, {useState} from 'react';
import moduleStyle from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10, getUsersThunkCreator, getFriendsThunkCreator, isFriendsList }) => {




        let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1)*pageSize +1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={moduleStyle.paginator} >
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>}

            {pages
                .filter(p => p>=leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={ cn({
                    [moduleStyle.selectedPage] : currentPage === p
                },moduleStyle.pageNumber)}
                             key={p}
                             onClick={(e) => { isFriendsList ? getUsersThunkCreator(p, pageSize) : getFriendsThunkCreator(p, pageSize)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>
                NEXT
            </button>}
        </div>
    )
}

export default Paginator;