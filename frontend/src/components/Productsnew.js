import { html } from "lit-html";
import React from 'react'

export const Productsnew = () =>{ 
    return ( 
    <>
        {rows.map(r=>  
        <ul>
            <li>hi {r.title}</li>
           

        </ul>
       )}
        </>
     )
     
}
  
     

const rows = [
    {
      title: "New Releases",
      movies: "d1",
      
    },
    {
      title: "Trending",
      movies: "d2",

      movie2s: [
        "sonic",
        "knives",
        "little",
        "1917",
        "wick",
        "hollywood",
        "platform",
        "parasite",
        "ford"
      ]
    }
  ];
