import React from 'react'

const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
  return (
        <div>
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))} >
                <option value={5}></option>
                <option value={10}></option>
                <option value={20}></option>
                <option value={25}></option>
            </select>
        </div>
    )
}

export default PaginationSelector