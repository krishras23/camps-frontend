import React from 'react';

class PutRequestPrice extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            postId: null
        };
    }

    componentDidMount() {
        // Simple PUT request with a JSON body using fetch
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ CampID: 18, new_price: 29932 })
        };
        fetch('http://localhost:5000/update_camp_price', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    render() {
        const { postId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple PUT Request</h5>
                <div className="card-body">
                    Returned Id: {postId}
                </div>
            </div>
        );
    }
}

export { PutRequestPrice }; 