import React from 'react';

class PutRequestAges extends React.Component {
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
            body: JSON.stringify({ CampID: 18, new_MIN_AGE: 29932, new_MAX_AGE: 99999 })
        };
        fetch('http://localhost:5000/update_camp_ages', requestOptions)
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

export { PutRequestAges }; 