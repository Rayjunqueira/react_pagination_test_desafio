import React from 'react'

const Pagination = ({pages, currentPage, setCurrentPage}) => {
  return (
    <div>
        {Array.from(Array(pages), (item, index) => {
        return <button style={index === currentPage ? { backgroundColor: "red" } : null} 
            value={index} 
            onClick={(e) => setCurrentPage(Number(e.target.value))} >
            {index + 1}
        </button>
    })}
  </div>
)
}

export default Pagination