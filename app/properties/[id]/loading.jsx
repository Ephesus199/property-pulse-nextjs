'use client'
import ClipLoader from 'react-spinners/ClipLoader'
function Loading() {
    const override ={
        display:'block',
        margin:'100px auto'
    }
    return (
        <ClipLoader color ="#3b82f6" cssOverride={override} size={150} aria-label='react-spinner'/>
    )
}

export default Loading
