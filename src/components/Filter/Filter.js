import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/slice';
import { StyledFilter } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);

    const inputChange = evt => {
        const changeValue = evt.target.value.toLowerCase();
        dispatch(changeFilter(changeValue));
    };

    return (
        <div>
            <StyledFilter>Find contacts by name</StyledFilter>
            <input type='text' name='number' value={filter} onChange={inputChange} placeholder='Enter name' />
        </div>
    )
};
