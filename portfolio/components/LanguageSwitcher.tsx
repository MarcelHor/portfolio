// import {useTranslation} from 'react-i18next';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faGlobe} from "@fortawesome/free-solid-svg-icons";
//
// const LanguageSwitcher = () => {
//     const {i18n} = useTranslation();
//
//     const changeLanguage = (language: string) => {
//         i18n.changeLanguage(language);
//         localStorage.setItem('language', language);
//     };
//
//     return (
//         <div className="dropdown dropdown-end cursor-pointer">
//             <div tabIndex={0} className={"btn btn-ghost"}>
//                 <FontAwesomeIcon icon={faGlobe} size="xl"/>
//             </div>
//             <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-10">
//                 <li>
//                     <a onClick={() => changeLanguage('cs')}>Čeština</a>
//                 </li>
//                 <li>
//                     <a onClick={() => changeLanguage('en')}>English</a>
//                 </li>
//             </ul>
//         </div>
//
//     );
// };
//
// export default LanguageSwitcher;