import { useDispatch, useSelector } from 'react-redux';
import { InputParamether, Title } from './FilteredItem.styled';
import { filterContacts } from 'redux/contactsSlice';

export const FilteredItem = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <Title>Find contacts by Name</Title>
      <InputParamether
        type="text"
        name="filter"
        placeholder="Enter filter paramether"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
};
