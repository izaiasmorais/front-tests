import { Dropdown, DropdownItem } from '@tremor/react';

export function SelectTab() {
  const defaultList = ['Selecione um grupo'];
  const categories = ['Pizzas', 'Carro chefe', 'Promoções', 'Moda da casa'];
  const newList = [...defaultList, ...categories];

  return (
    <div>
      <label htmlFor="countries" className="block mb-2 text-sm font-semibold text-gray-900">
        Select an option
      </label>
      <Dropdown
        value={undefined}
        defaultValue={undefined}
        onValueChange={undefined}
        placeholder="Selecione um grupo"
        icon={undefined}
        maxWidth="max-w-none"
        marginTop="mt-0"
      >
        {newList.map((item, index) => (
          <DropdownItem key={index} value={item} text={item} />
        ))}
      </Dropdown>
    </div>
  );
}
