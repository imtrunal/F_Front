import React from 'react'

import Footer from './Footer'

const Theme = (props) => {
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                {/* <div className="css-1dbjc4n r-13awgt0 r-12vffkv"> */}
                    <div className="css-1dbjc4n r-14lw9ot r-1ub9p5i r-cqs64b r-bnwqim r-13qz1uu">
                            {props.children}
                        <Footer status={props.status} />
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Theme    