import React from "react";
import "./logo.scss"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logo=()=>{
    const details=[{image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=75",company:"Maruti suzuki"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=75",company:"Tata"},
                {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=75",company:"Mahindra"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=75",company:"Hyundai"},
                {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=75",company:"Toyota"},
            {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=75",company:"BMW"}]
            const data=useSelector(({allDetail})=>allDetail)
            
         const navigate=useNavigate()
            const valueGet=(company)=>{
                navigate("/logo/"+company)
            }
          
    return(
        <div className="logo-container">
                {details.map((value,index)=>{
                    return(
                        <div className="logo" key={index} onClick={()=>valueGet(value.company)}>
                        <img src={value.image} alt="no img found"></img>   </div>
                    )
                })}
        </div>
    )
}

export default Logo;