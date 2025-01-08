"use client"

import Rating from "./antdRate"


export default function FeedBack() {
    return(<div className=" mb-6 h-40">
        <h1 className=" text-4xl text-black text-center font-semibold">What users say about Resume Builder</h1>
       <div className=" h-9 pt-8">
        <Rating  />

       </div>
    </div>

    )
}