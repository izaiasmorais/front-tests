import { SelectBox, SelectBoxItem } from '@tremor/react';
import { Hamburger } from 'phosphor-react';
import { useState } from 'react';

export function SelectTab() {
  const defaultList = ['Selecione um grupo'];
  const categories = ['Pizzas', 'Carro chefe', 'Promoções', 'Moda da casa'];
  const newList = [...defaultList, ...categories];
  const [group, setGroup] = useState('');

  return (
    <div>
      <label htmlFor="group" className="block mb-2 text-sm font-semibold text-gray-900">
        Select an option
      </label>

      <SelectBox
        defaultValue=""
        value={group}
        onValueChange={setGroup}
        placeholder="Selecione um grupo"
        icon={Hamburger}
        maxWidth="max-w-none"
        marginTop="mt-0"
      >
        {newList.map((item, index) => (
          <SelectBoxItem key={index} value={item} text={item} />
        ))}
      </SelectBox>
    </div>
  );
}
