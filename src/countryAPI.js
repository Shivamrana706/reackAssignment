import React from "react";

class CountryAPI extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            countryName: "",
            region: "",
            population: "",
            area: "",
            flag: "",
            capital: ""          


        }
    }
    getName = (e) => {
        this.setState({
            name: e.target.value
        })
        if (this.state.name == null) {
            alert("Please enter the Country name")
        }
    }
    showData = async (e) => {
        const data = await fetch(`https://restcountries.com/v2/name/${this.state.name}`);
        const result = await data.json();
        if (this.state.name == result[0].name) {
            this.setState({
                countryName: result[0].name,
                region: result[0].region,
                population: result[0].population,
                area: result[0].area,
                flag: result[0].flag,
                capital: result[0].capital
            })
        } else {
            alert("Incorrect country name");
        }
    }



    render() {
        return (
            <div className="myResult">
                <table className="table">
                    <tr className="tr">
                        <h1>Enter the country name</h1>
                        <input onChange={this.getName} type="text" placeholder="Like Canada,Brazil" name="name" required />
                        <button onClick={this.showData}> Search</button>
                    </tr>
                    <tr className="tr">
                        <>
                            <p> Name : {this.state.countryName}</p>
                            <p> Region : {this.state.region}</p>
                            <p> Capital : {this.state.capital}</p>
                            <p> Population : {this.state.population}</p>
                            <p> Area : {this.state.area}</p>
                            <p><img src={this.state.flag} /></p>
                        </>
                    </tr>
                </table>
            </div>
        );
    }

}
export default CountryAPI;