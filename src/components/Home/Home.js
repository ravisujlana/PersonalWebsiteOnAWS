import React from 'react';

const elementsTitle = ["Card Title","Card Title 2"];

const elementsContent = ["Some quick example text to build on the card title and make up the bulk of the cards content.",
        "2.Some quick example text to build on the card title and make up the bulk of the cards content."];
const items = [];

for (const [index, value] of elementsTitle.entries()) {
//    items.push(<li key={index}>{value}</li>)
    items.push(<h5 className="card-title">{value}</h5>)
    items.push(<p className="card-text"> {elementsContent[index]} </p>);
}
const Home = props => {

    return (
            <div className="card">
                    <div className="card-body"> {
                        items
                    }
                    </div>
            </div>

    )
}

export default Home;
