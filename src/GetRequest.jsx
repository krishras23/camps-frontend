import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(data => console.log(data));
    };

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export { GetRequest }; 