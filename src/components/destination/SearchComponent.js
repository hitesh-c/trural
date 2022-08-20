import React,{useState} from 'react'

const SearchComponent = () => {
    // const [peoplecount, setpeoplecount] = useState(1);
    // const incrementPeople = ()=>{
    //     setpeoplecount(peoplecount+1);
    // }
    // const decrementPeople = ()=>{
    //     setpeoplecount(peoplecount-1);
    // }
  return (
    <div className='p-2' style={{backgroundColor: "#ffc107", color: "black"}}>
        <h1>Search</h1>
            <label htmlFor="destination">Destination</label>
            <input type="text" id="destination" style={{width: "100%"}}/>
            <label htmlFor="checkin">Check in date</label>
            <input type="date" id="checkin" style={{width: "100%"}}  />
            <label htmlFor="checkout">Check out date</label>
            <input type="date" id="checkout" style={{width: "100%"}}  />
            {/* <div style={{padding: "2px 0px"}}>
                <div style={{width: "100%", display: "flex", backgroundColor: "#fff", justifyContent: "space-between"}}>
                    <button style={{border: "0px",borderRight: "1px solid black", width: "32px"}} onClick={incrementPeople}>+</button>
                    <div style={{color: "#000"}}>{peoplecount}</div>
                    <button style={{border: "0px", borderLeft: "1px solid black", width: "32px"}} onClick={decrementPeople}>-</button>
                </div>
            </div> */}
            <div style={{padding: "6px 0px"}}>
            <button style={{width: "100%", padding: "4px 0px", backgroundColor: "#0071c2", border: "0px", color: "white"}}>Search</button>
            </div>
    </div>
  )
}

export default SearchComponent