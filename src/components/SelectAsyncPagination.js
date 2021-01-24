import React from 'react'

export default function SelectAsyncPagination(props) {
    return (
        <div className="LoadMoreButton cursor-pointer flex justify-around">
            <div className="prevCustom"  onClick={props.handlePrevButtonClick}><span className="mobile">P</span><span className="desktop">Previous</span></div>
            <div className="paginationInfo">
                <div className="total">
                    <div><b><span className="mobile">T</span><span className="desktop">Total</span></b></div>
                    <div>{props.total}</div>
                </div>
                <div className="current">
                    <div><b><span className="mobile">C</span><span className="desktop">Current</span></b></div>
                    <div>
                        {props.currentPage}
                    </div>
                </div>
                <div className="last">
                    <div><b><span className="mobile">L</span><span className="desktop">Last</span></b></div>
                    <div>{props.totalPages}</div>
                </div>
            </div>
            <div className="nextCustom " onClick={props.handleNextButtonClick}><span className="mobile">N</span><span className="desktop">Next</span></div>
        </div>
    )
}
