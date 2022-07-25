import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import logoSvg from './../../assets/img/logo.svg';

import styles from './Footer.module.scss';

type Message = {
  email: string;
  text: string;
};

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Message>();

  const onFormSubmit = handleSubmit((data: Message) => {
    console.log(data);
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...{ email: '', text: '' } });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <Link to="/">
              <img src={logoSvg} alt="CoffeeDom" />
            </Link>
            <div className={styles.list}>
              <h3>Навигация</h3>
              <ul>
                <li>
                  <Link to="/about">О нас</Link>
                </li>
                <li>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li>
                  <Link to="/">Акции</Link>
                </li>
                <li>
                  <Link to="/">Готовые наборы</Link>
                </li>
              </ul>
            </div>
            <div className={styles.list}>
              <h3>Контакты</h3>
              <ul>
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z"
                        fill="#A3A3A3"
                      />
                    </svg>
                    coffedom@mails.ru
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.2647 2.42778C21.98 2.19091 21.6364 2.03567 21.2704 1.97858C20.9045 1.92149 20.5299 1.96469 20.1866 2.10357L2.26566 9.33892C1.88241 9.4966 1.55618 9.76711 1.33026 10.1145C1.10434 10.462 0.989427 10.8699 1.00076 11.2841C1.0121 11.6984 1.14916 12.0994 1.39374 12.434C1.63832 12.7685 1.97886 13.0208 2.37016 13.1573L5.99516 14.418L8.01566 21.0997C8.04312 21.1889 8.08297 21.2739 8.13404 21.352C8.14179 21.364 8.15272 21.373 8.16096 21.3846C8.21996 21.467 8.29127 21.5397 8.37239 21.6004C8.39546 21.618 8.41755 21.6345 8.44221 21.6501C8.53714 21.7131 8.64228 21.7591 8.75294 21.7862L8.76478 21.7872L8.77149 21.7901C8.83802 21.8036 8.90574 21.8105 8.97364 21.8106C8.98017 21.8106 8.98597 21.8074 8.99244 21.8073C9.0949 21.8055 9.19647 21.7879 9.29353 21.755C9.31611 21.7473 9.33546 21.7345 9.35737 21.7252C9.42975 21.6952 9.49832 21.6567 9.56166 21.6106C9.61238 21.5679 9.66312 21.5251 9.71388 21.4824L12.416 18.4991L16.4463 21.6211C16.8011 21.8974 17.2379 22.0475 17.6875 22.0479C18.1587 22.0473 18.6154 21.8847 18.9809 21.5874C19.3465 21.2901 19.5987 20.8762 19.6954 20.4151L22.958 4.39849C23.032 4.03801 23.0065 3.66421 22.8844 3.31708C22.7623 2.96995 22.5481 2.66255 22.2647 2.42778ZM9.37016 14.7364C9.2315 14.8745 9.13672 15.0505 9.0977 15.2422L8.78819 16.7462L8.00413 14.1532L12.0694 12.0362L9.37016 14.7364ZM17.6719 20.0401L12.9092 16.3506C12.71 16.1966 12.46 16.1234 12.2092 16.1455C11.9583 16.1675 11.725 16.2833 11.5557 16.4697L10.6903 17.4249L10.9961 15.9385L18.0791 8.85549C18.2482 8.68665 18.3512 8.46285 18.3695 8.22461C18.3878 7.98638 18.3201 7.74947 18.1788 7.55681C18.0375 7.36414 17.8319 7.22845 17.5992 7.17433C17.3664 7.1202 17.122 7.15121 16.9102 7.26174L6.74491 12.5544L3.02055 11.1915L20.999 3.99905L17.6719 20.0401Z"
                        fill="#A3A3A3"
                      />
                    </svg>
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.7437 13.5293C15.4516 13.2134 15.1235 12.9328 14.7662 12.6932C16.208 11.5785 17.2183 9.99813 17.625 8.22168C17.655 8.0933 17.6594 7.96026 17.6378 7.8302C17.6162 7.70014 17.5691 7.57563 17.4992 7.46384C17.4293 7.35205 17.338 7.25519 17.2305 7.17883C17.123 7.10246 17.0015 7.0481 16.8729 7.01887C16.7444 6.98965 16.6113 6.98613 16.4814 7.00852C16.3515 7.03092 16.2273 7.07879 16.1159 7.14937C16.0045 7.21995 15.9082 7.31186 15.8325 7.4198C15.7568 7.52774 15.7032 7.64958 15.6748 7.77832C15.4854 8.60929 15.117 9.38894 14.5953 10.0629C14.0737 10.7369 13.4113 11.2889 12.6543 11.6806V8.002C12.6481 7.92841 12.6335 7.85579 12.6106 7.78557C12.604 7.72775 12.5924 7.6706 12.5761 7.61474C12.5334 7.52379 12.4772 7.43987 12.4093 7.36583C12.3914 7.34459 12.3824 7.31658 12.3629 7.29693C12.2896 7.2293 12.2067 7.17299 12.1168 7.12987C12.0913 7.11626 12.0723 7.09325 12.0455 7.08187C11.9689 7.05635 11.8895 7.04001 11.809 7.03322C11.7594 7.01869 11.7086 7.00826 11.6572 7.00203L11.0029 7H11C10.7661 6.99888 10.5392 7.08021 10.3593 7.2297C10.1793 7.3792 10.0578 7.5873 10.016 7.81748C9.97422 8.04766 10.0149 8.2852 10.1308 8.4884C10.2467 8.6916 10.4305 8.84747 10.6499 8.92865V13.8193C9.06523 12.1743 8.01592 10.088 7.64014 7.835C7.61821 7.70554 7.57099 7.58166 7.50119 7.47045C7.43138 7.35923 7.34036 7.26286 7.23331 7.18682C7.12626 7.11078 7.00528 7.05658 6.87728 7.02729C6.74928 6.99801 6.61676 6.99423 6.4873 7.01616C6.35784 7.03809 6.23396 7.08531 6.12275 7.15511C6.01153 7.22492 5.91516 7.31594 5.83912 7.42299C5.76308 7.53004 5.70888 7.65102 5.67959 7.77902C5.65031 7.90702 5.64653 8.03954 5.66846 8.169C6.25285 11.6516 8.19485 14.7601 11.0684 16.8125C11.1093 16.8371 11.1521 16.8586 11.1962 16.877C11.2308 16.8973 11.2667 16.9154 11.3036 16.9312C11.4153 16.9758 11.5341 16.9998 11.6543 17.002C11.8014 17.0002 11.9462 16.9654 12.0781 16.9001C12.0881 16.8954 12.0995 16.8976 12.1094 16.8926C12.1978 16.8466 12.2787 16.7875 12.3495 16.7173C12.3637 16.7035 12.3732 16.6865 12.3867 16.6718C12.4512 16.6009 12.505 16.521 12.5466 16.4346C12.5605 16.4059 12.5732 16.3785 12.5843 16.3484C12.6283 16.2381 12.652 16.1207 12.6543 16.002L12.6548 13.876C13.2744 14.0579 13.8327 14.4053 14.2695 14.8809L15.9175 16.6777C16.0061 16.7748 16.1131 16.8535 16.2322 16.9092C16.3513 16.9649 16.4802 16.9966 16.6115 17.0024C16.7429 17.0083 16.8741 16.9881 16.9977 16.9432C17.1212 16.8982 17.2347 16.8293 17.3316 16.7404C17.4285 16.6516 17.5069 16.5445 17.5624 16.4252C17.6178 16.306 17.6492 16.177 17.6547 16.0457C17.6603 15.9143 17.6398 15.7831 17.5946 15.6597C17.5493 15.5362 17.4802 15.4229 17.3911 15.3262L15.7437 13.5293ZM15.0728 1H8.9375C2.78027 1 1 2.77832 1 8.92676V15.0625C1 21.2197 2.77783 23 8.92725 23H15.0625C21.2197 23 23 21.2217 23 15.0732V8.9375C23 2.78027 21.2222 1 15.0728 1ZM21 15.0732C21 20.1133 20.1123 21 15.0625 21H8.92725C3.88623 21 3 20.1123 3 15.0625V8.92676C3 3.88672 3.8877 3 8.9375 3H15.0728C20.1138 3 21 3.8877 21 8.9375V15.0732Z"
                        fill="#A3A3A3"
                      />
                    </svg>
                    VK
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                        fill="#A3A3A3"
                      />
                    </svg>
                    Instagram
                  </Link>
                </li>
              </ul>
              <Link to="/" className={styles.link}>
                Больше контактов
              </Link>
            </div>
            <div className={styles.list}>
              <h3>Ищите работу? Нам нужны...</h3>
              <ul>
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V14C2 14.7956 2.31607 15.5587 2.87868 16.1213C3.44129 16.6839 4.20435 17 5 17H11V19H7C6.73478 19 6.48043 19.1054 6.29289 19.2929C6.10536 19.4804 6 19.7348 6 20C6 20.2652 6.10536 20.5196 6.29289 20.7071C6.48043 20.8946 6.73478 21 7 21H17C17.2652 21 17.5196 20.8946 17.7071 20.7071C17.8946 20.5196 18 20.2652 18 20C18 19.7348 17.8946 19.4804 17.7071 19.2929C17.5196 19.1054 17.2652 19 17 19H13V17H19C19.7956 17 20.5587 16.6839 21.1213 16.1213C21.6839 15.5587 22 14.7956 22 14V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 14C20 14.2652 19.8946 14.5196 19.7071 14.7071C19.5196 14.8946 19.2652 15 19 15H5C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V14Z"
                        fill="#A3A3A3"
                      />
                    </svg>
                    Разработчики
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 2C9.4 2 9 2.4 9 3V21C9 21.6 9.4 22 10 22C10.6 22 11 21.6 11 21V3C11 2.4 10.6 2 10 2ZM5 12C4.4 12 4 12.4 4 13V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V13C6 12.4 5.6 12 5 12ZM15 8C14.4 8 14 8.4 14 9V21C14 21.6 14.4 22 15 22C15.6 22 16 21.6 16 21V9C16 8.4 15.6 8 15 8ZM20 16C19.4 16 19 16.4 19 17V21C19 21.6 19.4 22 20 22C20.6 22 21 21.6 21 21V17C21 16.4 20.6 16 20 16Z"
                        fill="#A3A3A3"
                      />
                    </svg>
                    Аналитики
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.3 12.22C12.8336 11.7581 13.2616 11.1869 13.5549 10.545C13.8482 9.90316 14 9.20571 14 8.5C14 7.17392 13.4732 5.90215 12.5355 4.96447C11.5979 4.02678 10.3261 3.5 9 3.5C7.67392 3.5 6.40215 4.02678 5.46447 4.96447C4.52678 5.90215 4 7.17392 4 8.5C3.99999 9.20571 4.1518 9.90316 4.44513 10.545C4.73845 11.1869 5.16642 11.7581 5.7 12.22C4.30014 12.8539 3.11247 13.8775 2.27898 15.1685C1.4455 16.4596 1.00147 17.9633 1 19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5C2.26522 20.5 2.51957 20.3946 2.70711 20.2071C2.89464 20.0196 3 19.7652 3 19.5C3 17.9087 3.63214 16.3826 4.75736 15.2574C5.88258 14.1321 7.4087 13.5 9 13.5C10.5913 13.5 12.1174 14.1321 13.2426 15.2574C14.3679 16.3826 15 17.9087 15 19.5C15 19.7652 15.1054 20.0196 15.2929 20.2071C15.4804 20.3946 15.7348 20.5 16 20.5C16.2652 20.5 16.5196 20.3946 16.7071 20.2071C16.8946 20.0196 17 19.7652 17 19.5C16.9985 17.9633 16.5545 16.4596 15.721 15.1685C14.8875 13.8775 13.6999 12.8539 12.3 12.22ZM9 11.5C8.40666 11.5 7.82664 11.3241 7.33329 10.9944C6.83994 10.6648 6.45542 10.1962 6.22836 9.64805C6.0013 9.09987 5.94189 8.49667 6.05764 7.91473C6.1734 7.33279 6.45912 6.79824 6.87868 6.37868C7.29824 5.95912 7.83279 5.6734 8.41473 5.55764C8.99667 5.44189 9.59987 5.5013 10.1481 5.72836C10.6962 5.95542 11.1648 6.33994 11.4944 6.83329C11.8241 7.32664 12 7.90666 12 8.5C12 9.29565 11.6839 10.0587 11.1213 10.6213C10.5587 11.1839 9.79565 11.5 9 11.5ZM18.74 11.82C19.38 11.0993 19.798 10.2091 19.9438 9.25634C20.0896 8.30362 19.9569 7.32907 19.5618 6.45C19.1666 5.57093 18.5258 4.8248 17.7165 4.30142C16.9071 3.77805 15.9638 3.49974 15 3.5C14.7348 3.5 14.4804 3.60536 14.2929 3.79289C14.1054 3.98043 14 4.23478 14 4.5C14 4.76522 14.1054 5.01957 14.2929 5.20711C14.4804 5.39464 14.7348 5.5 15 5.5C15.7956 5.5 16.5587 5.81607 17.1213 6.37868C17.6839 6.94129 18 7.70435 18 8.5C17.9986 9.02524 17.8593 9.5409 17.5961 9.99542C17.3328 10.4499 16.9549 10.8274 16.5 11.09C16.3517 11.1755 16.2279 11.2977 16.1404 11.4447C16.0528 11.5918 16.0045 11.7589 16 11.93C15.9958 12.0998 16.0349 12.2678 16.1137 12.4183C16.1924 12.5687 16.3081 12.6967 16.45 12.79L16.84 13.05L16.97 13.12C18.1754 13.6917 19.1923 14.596 19.901 15.7263C20.6096 16.8566 20.9805 18.1659 20.97 19.5C20.97 19.7652 21.0754 20.0196 21.2629 20.2071C21.4504 20.3946 21.7048 20.5 21.97 20.5C22.2352 20.5 22.4896 20.3946 22.6771 20.2071C22.8646 20.0196 22.97 19.7652 22.97 19.5C22.9782 17.9654 22.5938 16.4543 21.8535 15.1101C21.1131 13.7659 20.0413 12.6333 18.74 11.82Z"
                        fill="#A3A3A3"
                      />
                    </svg>
                    Сотрудники
                  </Link>
                </li>
              </ul>
              <Link to="/" className={styles.link}>
                Больше вакансий
              </Link>
            </div>
          </div>
          <div className={styles.form}>
            <h3>Сообщить о проблеме</h3>
            {errors.email && <div className={styles.error}>Вы не указали email</div>}
            <form onSubmit={onFormSubmit}>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Ваш email"
              />
              <textarea {...register('text')} placeholder="Кратко опишите проблему.."></textarea>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
