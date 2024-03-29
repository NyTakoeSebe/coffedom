import React from 'react';
import { Preset } from '../../types/Preset';
import { getProductsAmountByType } from '../../helpers';

import styles from './PresetCard.module.scss';

interface PresetCardProps {
  preset: Preset;
}

const PresetCard: React.FC<PresetCardProps> = ({ preset }) => {
  const { ordinary, popular, title, big } = preset;
  const [activeVariant, setActiveVariant] = React.useState('ordinary');
  const [activeChoice, setActiveChoice] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(ordinary.price);
  const [amount, setAmount] = React.useState(['0 снэков', '0 напитков']);

  const setActiveChoiceHandler = (choice: number, variant: string) => {
    setActiveChoice(choice);
    setActiveVariant(variant);

    if (variant === 'big') {
      setTotalPrice(big.price);
    } else {
      setTotalPrice(ordinary.price);
    }
  };

  React.useEffect(() => {
    const selectedProducts = activeChoice === 0 ? ordinary.items : big.items;
    setAmount(getProductsAmountByType(selectedProducts));
  }, [activeChoice]);

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h4>{title}</h4>
        <div className={styles.desc}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.75 2.33003C19.6554 2.22518 19.5396 2.14156 19.4104 2.08468C19.2811 2.02781 19.1412 1.99895 19 2.00003H5.00002C4.85879 1.99895 4.71894 2.02781 4.58966 2.08468C4.46039 2.14156 4.34464 2.22518 4.25002 2.33003C4.15565 2.43503 4.08458 2.55882 4.04149 2.69326C3.9984 2.8277 3.98427 2.96974 4.00002 3.11003L5.80002 19.33C5.88158 20.0672 6.23332 20.748 6.78733 21.2411C7.34135 21.7341 8.05837 22.0045 8.80002 22H15.22C15.9617 22.0045 16.6787 21.7341 17.2327 21.2411C17.7867 20.748 18.1384 20.0672 18.22 19.33L20 3.11003C20.0158 2.96974 20.0016 2.8277 19.9585 2.69326C19.9155 2.55882 19.8444 2.43503 19.75 2.33003ZM16.2 19.11C16.1728 19.3557 16.0556 19.5827 15.8709 19.747C15.6862 19.9114 15.4472 20.0015 15.2 20H8.79002C8.5428 20.0015 8.30379 19.9114 8.11912 19.747C7.93445 19.5827 7.81721 19.3557 7.79002 19.11L6.78002 10H17.22L16.2 19.11ZM17.44 8.00003H6.56002L6.12002 4.00003H17.88L17.44 8.00003Z"
              fill="#A3A3A3"
            />
          </svg>
          <span>{amount && amount[0]}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 2C18.7348 2 18.4804 2.10536 18.2929 2.29289C18.1054 2.48043 18 2.73478 18 3V8.46L17 9.13V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V9.13L14 8.46V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2C12.7348 2 12.4804 2.10536 12.2929 2.29289C12.1054 2.48043 12 2.73478 12 3V9C12.0009 9.16471 12.0424 9.32665 12.1209 9.47145C12.1994 9.61625 12.3124 9.73941 12.45 9.83L15 11.54V21C15 21.2652 15.1054 21.5196 15.2929 21.7071C15.4804 21.8946 15.7348 22 16 22C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21V11.54L19.55 9.83C19.6876 9.73941 19.8006 9.61625 19.8791 9.47145C19.9576 9.32665 19.9991 9.16471 20 9V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2ZM9 2C7.67392 2 6.40215 2.52678 5.46447 3.46447C4.52678 4.40215 4 5.67392 4 7V13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14H8V21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22C9.26522 22 9.51957 21.8946 9.70711 21.7071C9.89464 21.5196 10 21.2652 10 21V3C10 2.73478 9.89464 2.48043 9.70711 2.29289C9.51957 2.10536 9.26522 2 9 2ZM8 12H6V7C5.99967 6.37935 6.19186 5.77387 6.55006 5.26702C6.90826 4.76016 7.41484 4.37688 8 4.17V12Z"
              fill="#A3A3A3"
            />
          </svg>
          <span>{amount && amount[1]}</span>
        </div>
      </div>
      <div className={styles.choice}>
        <button
          onClick={() => setActiveChoiceHandler(0, 'ordinary')}
          className={activeChoice === 0 ? styles.active : ''}>
          Обычный
        </button>
        <button
          onClick={() => setActiveChoiceHandler(1, 'big')}
          className={activeChoice === 1 ? styles.active : ''}>
          Большой
        </button>
      </div>
      <div className={styles.products}>
        {activeVariant === 'ordinary' &&
          ordinary.items.map((item) => (
            <div key={item._id} className={styles.item}>
              <img src={item.imageUrl} alt="item" />
              <h5>{item.title}</h5>
              <p>x{item.amount}</p>
              <span>{item.size}</span>
            </div>
          ))}
        {activeVariant === 'big' &&
          big.items.map((item) => (
            <div key={item._id} className={styles.item}>
              <img src={item.imageUrl} alt="item" />
              <h5>{item.title}</h5>
              <p>x{item.amount}</p>
              <span>{item.size}</span>
            </div>
          ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>
          {totalPrice}
          <span>₽</span>
        </div>
        <button>В корзину</button>
      </div>
      {popular && (
        <div className={styles.popular}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.4678 8.39445L8.46555 8.39628L8.46341 8.39836L8.4678 8.39445ZM18.4219 8.20792C18.3523 8.14087 18.2751 8.0822 18.1919 8.03311C18.0741 7.96377 17.9433 7.91934 17.8076 7.90255C17.672 7.88577 17.5343 7.89699 17.4031 7.93552C17.272 7.97406 17.1501 8.03909 17.0451 8.12659C16.9401 8.21409 16.8541 8.32221 16.7925 8.44425C16.448 9.12294 15.9729 9.72694 15.3945 10.2216C15.483 9.7232 15.5276 9.21801 15.5278 8.71182C15.5297 7.17192 15.1234 5.65903 14.3505 4.32719C13.5775 2.99534 12.4654 1.89211 11.1274 1.12982C10.98 1.04627 10.8138 1.00153 10.6444 0.999808C10.475 0.998083 10.3079 1.03943 10.1588 1.11996C10.0098 1.2005 9.88362 1.31758 9.7922 1.46023C9.70078 1.60288 9.6471 1.76642 9.6362 1.93549C9.58024 2.88367 9.33236 3.81061 8.90759 4.66016C8.48282 5.50971 7.88999 6.26418 7.16503 6.87785L6.93456 7.06535C6.17648 7.57544 5.50546 8.20425 4.94726 8.92765C4.07958 10.0208 3.47851 11.301 3.19172 12.6668C2.90493 14.0327 2.94031 15.4465 3.29506 16.7963C3.6498 18.1461 4.31415 19.3947 5.23543 20.443C6.1567 21.4914 7.30956 22.3106 8.60257 22.8359C8.75439 22.8979 8.91914 22.9216 9.08229 22.9049C9.24545 22.8882 9.40198 22.8317 9.5381 22.7402C9.67422 22.6487 9.78573 22.5251 9.8628 22.3804C9.93987 22.2356 9.98013 22.0741 9.98003 21.9101C9.97932 21.804 9.96252 21.6986 9.93023 21.5976C9.7065 20.7566 9.64208 19.8812 9.74028 19.0165C10.6865 20.8012 12.2054 22.2159 14.0528 23.0331C14.2783 23.134 14.5332 23.1476 14.7681 23.0712C16.2277 22.6001 17.5425 21.7636 18.5878 20.6413C19.633 19.5189 20.3739 18.1479 20.74 16.6585C21.1061 15.1692 21.0853 13.6109 20.6796 12.1318C20.2739 10.6528 19.4967 9.30202 18.4219 8.20792ZM14.5171 21.039C13.6454 20.5972 12.8765 19.9769 12.2603 19.2185C11.6441 18.46 11.1944 17.5803 10.9405 16.6366C10.8629 16.3189 10.8029 15.9971 10.7608 15.6728C10.7322 15.4662 10.6398 15.2738 10.4965 15.1223C10.3532 14.9708 10.1661 14.868 9.96146 14.828C9.89841 14.8156 9.8343 14.8094 9.77003 14.8095C9.59427 14.8094 9.42161 14.8557 9.26944 14.9437C9.11728 15.0316 8.991 15.1582 8.90333 15.3105C8.0736 16.7416 7.65633 18.3745 7.69776 20.0283C6.968 19.4609 6.35811 18.7543 5.90344 17.9495C5.44876 17.1446 5.15835 16.2576 5.04903 15.3397C4.93971 14.4218 5.01366 13.4913 5.26658 12.6022C5.51951 11.7131 5.94639 10.883 6.52247 10.1601C6.95989 9.59194 7.48756 9.09939 8.08447 8.7021C8.11032 8.68542 8.1351 8.66716 8.15869 8.64741C8.15869 8.64741 8.45538 8.40193 8.46552 8.39631C9.89022 7.19127 10.9035 5.57183 11.3643 3.76362C12.4538 4.77085 13.1804 6.10965 13.431 7.57213C13.6817 9.03461 13.4425 10.5389 12.7505 11.8515C12.6591 12.0267 12.6216 12.225 12.6427 12.4214C12.6639 12.6178 12.7427 12.8036 12.8693 12.9553C12.9959 13.107 13.1646 13.2178 13.3541 13.2737C13.5436 13.3296 13.7454 13.3282 13.9341 13.2695C15.4659 12.7893 16.8138 11.8514 17.7964 10.582C18.3869 11.4543 18.773 12.4486 18.9259 13.4909C19.0787 14.5331 18.9944 15.5964 18.6792 16.6016C18.364 17.6067 17.826 18.5277 17.1054 19.2961C16.3847 20.0644 15.5 20.6602 14.5171 21.039L14.5171 21.039Z"
              fill="black"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PresetCard;
