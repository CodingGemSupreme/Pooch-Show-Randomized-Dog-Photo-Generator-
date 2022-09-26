import React from "react";

const ShowPooch = ({gotPooch}) => {
    const booted = () => {
      
        return (
            <>
                <h2>This Pooch Is Adorbs</h2>
                <img src={gotPooch.message} alt="Pooch Love" />
            </>
        );
    };
    const booting = () => {
        return <h2>Please Click Button To See The Show</h2>
    }
    return gotPooch ? booted() : booting();
  
}

export default ShowPooch;