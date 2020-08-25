import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'
const Paginationp =({postsPerPage,totalPosts,paginate})=>{
    const pagenumbers=[];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pagenumbers.push(i);
    }
 return(
     <nav>
         {/* <Pagination>
             <Pagination.First/>
             <Pagination.Prev/>
                {
                    pagenumbers.map(num=>(
                        <Pagination.Item key={num} onClick={()=>paginate(num)}>
                            {num}
                        </Pagination.Item>
                    ))
                }
             <Pagination.Next/>
             <Pagination.Last/>
         </Pagination> */}
         <ul className="pagination">
            {
                
                pagenumbers.map(num=>(
                    <li key={num}  className="page-item">
                            <Link to="#" onClick={()=>paginate(num)}  className="page-link">
                                {num}
                            </Link>
                    </li>
                ))
            }
         </ul>
     </nav>
 )
};
export default Paginationp;