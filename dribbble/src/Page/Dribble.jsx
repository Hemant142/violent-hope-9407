import React from 'react';
// import logo from "../public.svg"
// import logo from "./logo.png";
const Dribbble = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "center", padding: "50px", fontFamily: "sans-serif", height:"30px"}}>

            <img style={{width:"50px",height:"50px",paddingRight:"20px",paddingTop:"20px"}} src="https://cdn.dribbble.com/users/4214551/avatars/normal/c210b223d794fadb3480fc846cef0c86.jpg?1613608362" alt="" />
                <div>
                    <h3>VERSENCIA Fashion Website</h3>
                    <h5 style={{ paddingBottom: "30px" }}>Tosan Garditama ✦ for One Week Wonders
                        •
                        Follow
                        •
                        Hire Us</h5>
                </div>
                <div style={{ padding: "20px", margin: "20px" }}>
                    <button style={{ fontSize: "15px" }}>Save</button>
                    <button style={{ fontSize: "15px", background: "deeppink", color: "white" }}>Like</button>
                </div>
            </div>
            <div style={{marginLeft:"200px"}}>
                <video width="1000" height="800" controls >
                    <source src="https://cdn.dribbble.com/userupload/4486273/file/original-110fd8bd5101c3ea4eae070e1ba34db6.mp4" type="video/mp4"  /> </video>
            </div>
        <div style={{textAlign:'center'}}>
            <h1>Hi there everyone!</h1>
            <h3>Here is my exploration about the Fashion website.</h3>
            <h3>I hope you guys enjoy it!</h3>
            <h3 style={{paddingTop:"20px"}}>The photos in Summer Palette I got from hardclo.com, great products!</h3>
        </div>
        <img style={{marginLeft:"200px",width:"1000px",borderRadius:"20px",paddingTop:"40px"}} src="https://cdn.dribbble.com/userupload/4486274/file/original-4e0aa6b1fa64725d475ae2877735eb50.png?compress=1&resize=1200x900&vertical=center" alt="error" />
        <h1 style={{textAlign:"center",paddingTop:"50px"}}>Full Version ✦</h1>
        <img style={{}} src="https://cdn.dribbble.com/userupload/4486275/file/original-e67cb658a417a154120a2ee256e172cb.png?compress=1&resize=1200x3400&vertical=center" alt="error" />
        </div>

    );
};

export default Dribbble;