import Form from 'react-bootstrap/Form';
import {FC} from 'react'
import { ISortCategory } from '../../types/types';

interface ISelectProps {
  items: ISortCategory[],
  handler: (value:string) => void;
}

const Select:FC<ISelectProps> = ({items, handler}) => {
  return (
    <Form.Select aria-label="Default select example" onChange={e => handler(e.target.value)}>
      {
        items.map(item => <option key={item.id} value={item.value}>{item.text}</option>)
      }
    </Form.Select>
  );
};

export default Select;