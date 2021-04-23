import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../../redux/actions';
import s from './LanguageButton.module.scss';

const LanguageButton = () => {
  const dispatch = useDispatch();
  const { currentLang, availableLang } = useSelector((state) => state.stateUI);
  const changeLangHandle = () => {
    let nextIndex = currentLang + 1;
    if (availableLang.length === nextIndex) {
      nextIndex = 0;
    }
    dispatch(toggleLanguage({ currentLang: nextIndex }));
  };
  return (
    <button className={s.languageBtn} type="button" onClick={changeLangHandle}>{availableLang[currentLang]}</button>
  );
};

export default LanguageButton;
