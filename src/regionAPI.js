import React from "react";

class RegionAPI extends React.Component {

    constructor() {
        super()
        this.state = {            
            selects: "",
            regionData: []


        }
    }
 
    getSelect = (e) => {
        console.log(e.target.value, "before")
        this.setState({
            selects: e.target.value
        })
        console.log(this.state.selects, "after")
    }
    regionSearch = async () => {
        console.log("regionsearch", this.state.selects)
        const data = await fetch(`https://restcountries.com/v3.1/subregion/${this.state.selects}`);
        const result = await data.json();
        this.setState({
            regionData: result
        })
        result.map((data, id) => {
            <p> {id} {data.name.common}</p>
            console.log(data.name.common)
            console.log(data.population)
            console.log(data.independent)
        })

    }
    render() {
        return (
            <div className="myResult">
                <table className="table">

                  
                    <tr>
                        <label>Choose a Region:</label>
                        <select value={this.state.selects} onChange={this.getSelect} name="Region" >
                            <option value="select option">Select Option</option>
                            <option value="South America">South America</option>
                            <option value="Central America">Central America</option>
                            <option value="North America">South America</option>                          
                            <option value="Eastern Europe">Eastern Europe</option>
                            <option value="Western Europe">Western Europe</option>
                            <option value="Northern Europe">Northern Europe</option>
                            <option value="Southern Europe">Southern Europe</option>                           
                            <option value="Central Asia">Central Asia</option>
                            <option value="Eastern Asia">Eastern Asia</option>
                            <option value="South-eastern Asia">South-eastern Asia</option>
                            <option value="Southern Asia">Southern Asia</option>
                            <option value="Western Asia">Western Asia</option>       
                            <option value="Northern Africa">Northern Africa</option>
                            <option value="Eastern Africa">Eastern Africa</option>
                            <option value="Middle Africa">Middle Africa</option>
                            <option value="Southern Africa">South America</option>
                            <option value="Western Africa">Western Africa</option>
                        </select>
                        <button onClick={this.regionSearch}> Search</button>
                    </tr>                   
                       
                    <tr className="tr">
                        <>
                            <h2>Countries in  </h2>
                            <table table className="table">
                                <tr>
                                    <td>
                                        <span>NO</span>
                                    </td>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        Population
                                    </td>
                                    <td>
                                        <span>Maps</span>
                                    </td>
                                </tr>
                                {this.state.regionData.map((data, id) => (

                                    <tr className="tr">
                                        <td className="">{id+1 + '.'}</td>
                                        <td>{data.name.common}</td>
                                        <td>{data.population}</td>
                                        <td>
                                            <a href={data.maps.openStreetMaps}>Visit </a>
                                        </td>
                                        <td>{data.independent}</td>
                                    </tr>

                                ))}
                            </table>
                        </>
                    </tr>                  

                </table>
            </div>
        );
    }

}
export default RegionAPI;