import React from 'react'

const ListPosts = ({totalposts,posts,postPerPage,handlePagination}) => {

    const Pagination =[];
console.log("page",posts)

    for(let i =1; i<= Math.ceil(totalposts.length/postPerPage);i++){

        Pagination.push(i);
    }

  return (
    <div>
        {posts? (
        <ul>
            {
            posts.map((item)=>(
            <li key={item.id}>
                {item.title}
            </li>
            ))}
        </ul>
        )
        :<p>No Lists</p>
        }
        {Pagination? Pagination.map(page => (
            <div className='page'>
        <ul>
            <li key={page}>
                <a onClick={()=> handlePagination(page)} href='#'>{page}</a>
            </li>
        </ul>
        </div>
        )
        ): null
}
    </div>
  )
}

export default ListPosts