import React, { useState } from "react";

const Semaforo = () => {

    const [bgColor, setBgColor] = useState ('slategray')
    const [bgColorTwo, setBgColorTwo] = useState ('slategray')
    const [bgColorThree, setBgColorThree] = useState ('slategray')
    
    function colorChange () {

        if (bgColor == 'slategray'){

            setBgColor ('red')
            setBgColorTwo ('slategray')
            setBgColorThree ('slategray')

        } else {

            setBgColor ('slategray')

        }

        
    }

    function colorChangeTwo () {

        if (bgColorTwo == 'slategray'){

            setBgColorTwo ('yellow')
            setBgColorThree ('slategray')
            setBgColor ('slategray')

        } else {

            setBgColorTwo ('slategray')

        }

        
    }

    function colorChangeThree () {

        if (bgColorThree == 'slategray'){

            setBgColorThree ('green')
            setBgColor ('slategray')
            setBgColorTwo ('slategray')

        } else {

            setBgColorThree ('slategray')

        }

        
    }

    return (

        <>
            <div className="d-flex flex-column w-25 mx-auto mt-5 p-3 bg-dark">
                <button className="btn fs-3 p-5 mb-3 mt-3" onClick={colorChange} style={{backgroundColor:bgColor, borderRadius: 40, height: 40}}></button>
                <button className="btn fs-3 p-5 mb-3" onClick={colorChangeTwo} style={{backgroundColor:bgColorTwo, borderRadius: 40, height: 40}}></button>
                <button className="btn fs-3 p-5 mb-3" onClick={colorChangeThree} style={{backgroundColor:bgColorThree, borderRadius: 40, height: 40}}></button>
            </div>
            <ul className="d-flex flex-column px-3">
                <li className="mx-auto bg-dark fs-1 m-0 list-unstyled" style={{width: '3%'}}>s</li>
                <li className="mx-auto bg-dark fs-1 m-0 list-unstyled" style={{width: '3%'}}>s</li>
                <li className="mx-auto bg-dark fs-1 m-0 list-unstyled" style={{width: '3%'}}>s</li>
                <li className="mx-auto bg-dark fs-1 m-0 list-unstyled" style={{width: '3%'}}>s</li>
                <li className="mx-auto bg-dark fs-1 m-0 list-unstyled" style={{width: '3%'}}>s</li>
            </ul>
        </>
    )
}

export default Semaforo





