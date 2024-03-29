import React from 'react';
import { City } from '../../../types/Address';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  items: { id: number; text: string }[];
  basicText?: string;
  activeElement: number;
  isCitiesDropdown?: boolean;
  isDropdownLg?: boolean;
  isDropdownSm?: boolean;
  setActiveElement: (id: number) => void;
  activeItem?: number;
  setActiveItem?: (id: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  activeElement,
  items,
  setActiveElement,
  basicText,
  isCitiesDropdown,
  isDropdownLg,
  activeItem,
  setActiveItem,
  isDropdownSm,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [city, setCity] = React.useState('');
  const [elements, setElements] = React.useState(items);

  const setActiveHandler = (id: number, index: number) => {
    if (setActiveItem) {
      setActiveItem(id);
    }

    setActiveElement(index);
    setIsVisible(false);
  };

  React.useEffect(() => {
    if (setActiveItem) {
      setActiveItem(items[activeElement].id);
    }
  });

  const filtredElements = items.filter((item) =>
    item.text.toLowerCase().includes(city.toLowerCase()),
  );

  const isElementsEmpty = elements.length ? null : (
    <li className={styles.empty}>В этом городе нас ещё нет</li>
  );

  const setDropdownClassNames = isDropdownLg
    ? `${styles.dropdown} ${styles.dropdownLg}`
    : isDropdownSm
    ? `${styles.dropdown} ${styles.dropdownSm}`
    : styles.dropdown;

  React.useEffect(() => {
    isCitiesDropdown ? setElements(filtredElements) : setElements(items);
  }, [city, items]);

  return (
    <div className={setDropdownClassNames}>
      <div
        className={isVisible ? `${styles.title} ${styles.active}` : styles.title}
        onClick={() => setIsVisible(!isVisible)}>
        {basicText && basicText}
        <span> {items[activeElement].text}</span>
      </div>
      {isVisible && (
        <ul>
          {isCitiesDropdown && (
            <li>
              <input
                type="text"
                placeholder="Укажите название города"
                className={styles.input}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </li>
          )}
          {elements.map((item, index) => (
            <li
              className={activeElement === item.id ? styles.activeItem : ''}
              key={item.id}
              onClick={() => setActiveHandler(item.id, index)}>
              {item.text}
            </li>
          ))}
          {isElementsEmpty}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
