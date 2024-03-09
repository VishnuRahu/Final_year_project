"use client"

import {Boardcard} from "@/app/dashboard/_components/board-card/index"
// interface BoardListProps{
//     title:string,
//     description:string
// }

export const BoardList=()=>{
    const data=[{
        "id":"1",
        "title":"hello",
        "description":"hi"
    },{
        "id":"2",
        "title":"hello1",
        "description":"hi1"
    },
    {
        "id":"20",
        "title":"hello1",
        "description":"hi1"
    },
    {
        "id":"21",
        "title":"hello1",
        "description":"hi1"
    },
    {
        "id":"22",
        "title":"hello1",
        "description":"hi1"
    },
    {
        "id":"23",
        "title":"hello1",
        "description":"hi1"
    },
    {
        "id":"24",
        "title":"hello1",
        "description":"hi1"
    },
    {
        "id":"24",
        "title":"ara",
        "description":"hi1dgn;sriugnr;ui aniuahnah p;ghr;uigbygfb"
    },]
    return(
       <div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
        lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-20 mt-8 pb-10">
           {data?.map((board)=>(
            <Boardcard
              key={board.id}
              title={board.title}
              description={board.description}
            />
           ))}
        </div>
       </div>
    );
}