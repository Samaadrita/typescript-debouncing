import React, { useEffect, useState } from 'react';
type country = {
  id: number;
  countryName: string;
};
const items: country[] = [
  { id: 1, countryName: 'India' },
  { id: 2, countryName: 'USA' },
  { id: 3, countryName: 'Canada' },
  { id: 1, countryName: 'Australia' },
];

export const App = () => {
  const [filteredCountries, setFilteredCountries] = useState<country[]>(items);
  const [searchValue, setValue] = useState<string>('');

  useEffect(() => {
    if (searchValue) {
      const timer = setTimeout(() => {
        const res = items?.filter((it) =>
          it?.countryName?.toLowerCase().includes(searchValue)
        );
        setFilteredCountries([...res]);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setFilteredCountries([...items]);
    }
  }, [searchValue]);

  return (
    <div className="p-2">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setValue(e?.target?.value)}
      />
      {filteredCountries?.map((item) => (
        <div>{item?.countryName}</div>
      ))}
    </div>
  );
};
