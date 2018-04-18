import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionType from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }

    render () {
        console.log(this.props.persons)
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: (name, age) => dispatch({ type: actionType.ADDED, personData: { name, age } }),
        onPersonDeleted: (id) => dispatch({ type: actionType.DELETED, personId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

