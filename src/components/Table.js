import React from 'react'

function Table() {
    return (
        <table className="table  ">
            <thead>
                <tr>
                <th  scope="col">Rank</th>
                <th className = "column" scope="col">Name</th>
                <th  scope="col">Points</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1
                
                </th>
                <td>
                <img src="https://randomuser.me/api/portraits/women/22.jpg" className="image" alt="" />    
                    Mark Twin</td>
                <td>90</td>
                
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>
                <img src="https://randomuser.me/api/portraits/women/22.jpg" className="image" alt="" />    
                    Jacob Mist</td>
                <td>65</td>
                
                </tr>
                <tr>
                <th scope="row">3</th>
                <td >
                <img src="https://randomuser.me/api/portraits/women/22.jpg" className="image" alt="" />    
                    HardWell</td>
                <td>95</td>
                </tr>
            </tbody>
            </table>
    )
}

export default Table;
