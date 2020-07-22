import React, { Component } from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
const Option = Select.Option;

const Dropdown = styled.div({
    display: 'inline-block',
    borderRadius: '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    background: 'transparent',
    color: 'white',
    border: '2px solid white'
});

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            colours: {}
        };
    }

    componentDidMount() {
        this.setState({
            countries: [
                { id: 'AFG', name: 'Afghanistan' },
                { id: 'ALA', name: 'Aland Islands' },
                { id: 'ALB', name: 'Albania' },
                { id: 'IND', name: 'India' }
            ]
        });
    }

    render() {
        const { countries } = this.state;

        let countriesList =
            countries.length > 0 &&
            countries.map((item, i) => {
                return (
                    <Option key={i} value={item.id}>
                        {item.name}
                    </Option>
                );
            }, this);

        return (
            <Dropdown>
                <Select
                    style={{width: '100%'}}
                    mode='multiple'
                    labelInValue
                    defaultValue={{ key: 'Afghanistan' }}
                    onChange={this.handleChange}
                >
                    {countriesList}
                </Select>
            </Dropdown>
        );
    }
}

export default Countries;
