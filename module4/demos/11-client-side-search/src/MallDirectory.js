import React from "react";

//thought process
//1. add in input box for search as part of the UI
//2. add in state >> key "searchTerms"
//3. setup two way binding for input box
//4. setup and modify loop to check on the state.shopname
//and filter according based on the search terms
//5. check for conditionals (uppercase/lowercase or any other edge cases-> how?? )
//
export default class MallDirectory extends React.Component {
  //data copied from lab sheet
  //add in key "searchTerms"

  state = {
    searchTerms: "",
    shops: [
      {
        id: 1,
        name: "Macdonalds",
        floor: 1,
        unit: 202,
        type: "F&B",
      },
      {
        id: 2,
        name: "Coffee Beans",
        floor: 2,
        unit: 301,
        type: "F&B",
      },
      {
        id: 3,
        name: "Uniqo",
        floor: 1,
        unit: 101,
        type: "Clothing",
      },
      {
        id: 4,
        name: "Don Don Donki",
        floor: 5,
        unit: 103,
        type: "Supermarket",
      },
      {
        id: 5,
        name: "Coffee Vit",
        floor: 8,
        unit: 77,
        type: "Cafe",
      },
    ],
  };

  renderShops() {
    let jsx = [];
    //shop objects are complex
    //base loop
    /*
    for(let shop of this.state.shops){
        jsx.push(<div>
            <h3>{shop.name}</h3>
            <h3>{shop.floor}-{shop.unit}</h3>
            <strong>Type: </strong> {shop.type}
        </div>)
    }
    */
    //filter and check based on search terms
    //tap on bootstrap card layout
    for (let shop of this.state.shops) {
      if (shop.name.toUpperCase().includes(this.state.searchTerms.toUpperCase())) {
        jsx.push(
          <div className="card mb-4" key={shop.id}>
            <h3>{shop.name}</h3>
            <h3>
              {shop.floor}-{shop.unit}
            </h3>
            <strong>Type: </strong> {shop.type}
          </div>
        );
      }
    }

    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pandarium Mall Directory</h1>
        <input
          type="text"
          value={this.state.searchTerms}
          onChange={(event) => {
            this.setState({
              searchTerms: event.target.value,
            });
          }} className="form-control mb-4"
        />
        {this.renderShops()}
      </React.Fragment>
    );
  }
}
