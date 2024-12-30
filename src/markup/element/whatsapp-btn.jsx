import React, { Component } from 'react';

export function Whatsappbtn() {
    return(
        <>
        <a href="https://wa.me/5567984036769" 
            style={{
                position: "fixed",
                width:60,
                height:60,
                bottom:71,
                right:10,
                backgroundColor:"#25d366",
                color:"#FFF",
                borderRadius:50,
                textAlign:"center",
                fontSize:30,
                boxShadow: "2px 2px 3px #999",
                zIndex:100,
            }}
            target="_blank"
            >
             <i 
             style={{
                marginTop:16
             }}
             className='fa fa-whatsapp'
             ></i>
        </a>
        </>
    )
}
