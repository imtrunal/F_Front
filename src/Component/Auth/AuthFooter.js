import React from 'react'

import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';

const AuthFooter = () => {
    const handleClick=()=>{

        Swal.fire({
            title: `<div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style="font-size: 26px; text-align: center;">Copy mail address sucessfully</div>`,
            html:
                `<div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style="margin-top: 16px; text-align: center;">Mail to:</div>
                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style="text-align: center;">support@fiewin.in</div>`,
    
            showCancelButton: false,
    
            confirmButtonText: 'OK',
            confirmButtonColor: "rgb(0, 147, 255)"
        })
    }
    return (
        <footer>
         
         <div data-focusable="true" tabIndex="0" onClick={handleClick} className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-1777fci r-1d2f490 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{transitionDuration: "0.25s"}}>
                            <div dir="auto" className="css-901oao" style={{color: "rgb(151, 151, 151)", fontSize: "20px"}}>Feedback</div>
                        </div>

               
        </footer>
    )
}

export default AuthFooter