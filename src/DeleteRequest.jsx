import React from 'react';

class DeleteRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            status: null
        };
    }

    componentDidMount() {
        // Simple DELETE request with a JSON body using fetch
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ CampID: 4})
        };
        fetch('http://localhost:5000/delete_camp', requestOptions)
            .then(() => this.setState({ status: 'Delete successful' }));
    }

    render() {
        const { status } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple DELETE Request</h5>
                <div className="card-body">
                    Status: {status}
                </div>
            </div>
        );
    }
}

export { DeleteRequest }; 